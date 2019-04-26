import { ComponentRef, Inject, Injectable } from '@angular/core';
import { IDwRouteInfo } from '../dw-tab-routing/interface/route-info.interface';
import { Subject } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  DefaultUrlSerializer,
  DetachedRouteHandle,
  NavigationExtras,
  NavigationStart,
  Router,
  UrlTree
} from '@angular/router';
import { APP_DEFAULT, DW_TAB_MULTI_OPEN } from '../../config/system.config';
import { DwRouterInfoService } from '../../router-info';
import { filter as rxjsFilter, first } from 'rxjs/operators';
import { DwTabRouteConfigService } from '../dw-tab-routing/service/tab-route-config.service';
import { DwOperationInfoService } from '../../program-info/operation-info.service';
import { IDwIframe } from '../dw-iframe/interface/dw-iframe.interface';
import { DwIframeGeneralInfoService } from '../dw-iframe/service/iframe-general-info.service';
import { DwIframeFinereportInfoService } from '../../partner/dap/finereport/service/iframe-finereport-info.service';
import { DwSystemConfigService } from '../../config';

export interface StoredTabs {
  tabs: IDwTabRouteState[];
  currentIndex: number;
}

export interface IDwTabRouteInfo extends IDwRouteInfo {
  /**
   * 用於視別當下路由的鍵值
   */
  key?: string;
  currentHandler?: DetachedRouteHandle; // 已儲存的路由狀態，只有切換路由的情況下才直接取出使用
  currentUrl: string;
}

export interface IDwTabRouteState extends IDwTabRouteInfo {
  /**
   * 用於視別當下路由的鍵值
   */
  navigateHistory: Map<string, IDwTabRouteInfo>;
  tabId: string; // 用於api時可以跳至指定的頁籤
  currentUrl: string;
  canDestroy?: boolean;
  opener?: string; // 調用navigateOrCreate服務頁籤的tabId，做為backToOpener的依據
  lastPath?: string; // 記錄當下路由組件的非空字串path
  code?: string;
  title?: string; // 給service動態指定
}

@Injectable()
export class DwTabInfoService2 {
  create$: Subject<IDwTabRouteState> = new Subject();
  /** 頁籤狀態 */
  tabSetStateArray: Array<IDwTabRouteState> = [];
  /** 當前routeInfo */
  currentTabInfo: IDwTabRouteState = null;
  /** 前一個routeInfo (store時使用) */
  previousTabInfo: IDwTabRouteState = null;
  /** 當前索引 */
  currentIndex = -1;
  /** 前一個頁籤索引 */
  previousIndex = -1;
  /** 是否為跳頁 */
  isTabChanged = false;
  selectedIndexChange: Subject<number> = new Subject<number>();
  tabSetIndexChanged: Subject<number> = new Subject<number>();
  /** 頁籤是否已啟動 */
  isStarted = false;
  /** 從瀏覽器歷史記錄中取出 (瀏覽器的Back / Forward Button) */
  navigationTrigger: 'imperative' | 'popstate' | 'hashchange';
  tabSetHostingRouteComponentName;
  shouldStop: boolean = false;
  /** 應該要銷毀的頁籤 */
  private shouldDestroyTab: IDwTabRouteState = null;
  /** 在isStarted = false時保存，為了頁籤組件的建立第一個頁籤。 */
  private currentRouteSnapshot: ActivatedRouteSnapshot = null;
  /** 是否為瀏覽器的上下頁按鈕 */
  private isNavigationPopState = false;
  /** 表示現在的頁籤狀態有可銷毀的組件 */
  private readyToDestroy = false;
  /** tab-route-config + iam的配置 */
  private tabRouteConfig: any[] = [];
  private defaultTabCreating = false;
  private frUrl: string;

  constructor(private router: Router,
              private routerInfo: DwRouterInfoService,
              private routerConfigService: DwTabRouteConfigService,
              private operationInfoService: DwOperationInfoService,
              private iframeGeneralInfoService: DwIframeGeneralInfoService,
              private iframeFineReportInfoService: DwIframeFinereportInfoService,
              @Inject(DW_TAB_MULTI_OPEN) private TAB_MULTI_OPEN: boolean,
              @Inject(APP_DEFAULT) private DEFAULT_APP: string,
              configService: DwSystemConfigService
  ) {

    configService.get('frUrl').subscribe(
      url => this.frUrl = url
    );

    this.router.events.pipe(
      rxjsFilter((event) => event instanceof NavigationStart)
    ).subscribe(
      (event: NavigationStart) => {
        this.isNavigationPopState = event.navigationTrigger === 'popstate';
      }
    );
  }

  /**
   * 此路由是否存在於配置的tabSetHosting=true之下
   */
  static isUnderHosting(route: ActivatedRouteSnapshot): boolean {
    if (!route) {
      return false;
    }
    let tempRoute;
    let findHosting = false;
    for (let i = 0; i < route.pathFromRoot.length - 1; i++) {
      tempRoute = route.pathFromRoot[i];
      if (tempRoute.routeConfig && tempRoute.routeConfig.data) {
        if (tempRoute.routeConfig.data.tabSetHosting) {
          findHosting = true;
          break;
        }
      }
    }

    return findHosting;
  }

  static routeToUrl(route: ActivatedRouteSnapshot): string {
    if (route.url) {
      if (route.url.length) {
        return route.url.join('/');
      } else {
        if (typeof route.component === 'function') {
          return `[${route.component.name}]`;
        } else if (typeof route.component === 'string') {
          return `[${route.component}]`;
        } else {
          return `[null]`;
        }
      }
    } else {
      return '(null)';
    }
  }

  static getResolvedUrl(route: ActivatedRouteSnapshot): string {
    return route.pathFromRoot
      .map(v => v.url.map(segment => segment.toString()).join('/'))
      .join('/');
  }

  public close(index: number): void {
    const tabSize = this.tabSetStateArray.length;

    if (tabSize === 1) {
      return;
    }

    if (this.tabSetStateArray[index].canClose === false) {
      return;
    }

    this.shouldDestroyTab = this.tabSetStateArray[index];

    // TEST: 待依據以下3種關閉頁籤的情境完整測試。
    // 如果死頁籤在當下頁籤之前，則直接銷毀死頁籤，且當前索引-1。
    // 如果死頁籤在當下頁籤之後，則直接銷毀死頁籤，當前索引不變。
    // 如果關閉當下頁籤，則將當下頁籤記錄為shouldDestroyTab。

    // 不是關閉當下頁籤
    if (index !== this.currentIndex) {
      this.destroyShouldDestroyTab();
      this.tabSetStateArray.splice(index, 1);
      if (index < this.currentIndex) {
        this.currentIndex = this.currentIndex - 1;
        this.currentTabInfo = this.tabSetStateArray[this.currentIndex];
        // FIXME: 頁籤變換通知待優化
        this.tabSetIndexChanged.next(this.currentIndex);
      }
      if (index <= this.previousIndex) {

        if (index === this.previousIndex) {
          this.previousIndex = this.currentIndex;
          this.previousTabInfo = this.tabSetStateArray[this.previousIndex];
        } else {
          this.previousIndex = this.previousIndex - 1;
          this.previousTabInfo = this.tabSetStateArray[this.previousIndex];
        }

      }
    } else {
      // 若關閉當下頁籤，則：
      this.tabSetStateArray[index].canDestroy = true;
      this.readyToDestroy = true;
      let currentIndex = this.tabSetStateArray.length - 1;
      // 若不是前一個頁籤，則定位到前一個頁籤；
      if (this.previousIndex !== index) {
        currentIndex = this.previousIndex;
        // 否則往前一個頁籤
      } else {
        currentIndex = index - 1;
      }
      this.setCurrentIndex(currentIndex);
    }

// TODO: 底下不透過setCurrentIndex會造成組件不會被緩存...原因待查
//    this.tabSetStateArray[index].canDestroy = true;
//    this.readyToDestroy = true;
//    let redirectTo = this.tabSetStateArray[this.currentIndex - 1].currentUrl;
//    if (this.tabSetStateArray.length === 0) {
//      redirectTo = this.DEFAULT_APP;
//    }
//    const tempOnSameUrlNavigation = this.router.onSameUrlNavigation;
//    this.router.onSameUrlNavigation = 'reload';
//    this.router.navigateByUrl(redirectTo);
//    this.router.onSameUrlNavigation = tempOnSameUrlNavigation;
//    this.tabSetIndexChanged.next(this.currentIndex);
  }

  createFromRouteInfo(routeInfo: IDwRouteInfo | IDwTabRouteState, defaultTab?: boolean, tabId?: string): string {
    let findExistsTab = false;

    this.isTabChanged = true;
    if (routeInfo.queryParams === undefined) {
      routeInfo.queryParams = {};
    }
    const info = <IDwTabRouteState>routeInfo;
    if (info.navigateHistory === undefined) {
      info.navigateHistory = new Map();
    }
    if (!info.tabId) {
      info.tabId = tabId || this.createTabId();
    }
    this.create$.next(info);

    // 如果有tabId，尋找現有的頁籤。
    // 如果沒有找到，那就將tabId賦與給新建的info
    if (tabId) {
      let foundIndex = -1;
      let tempState;
      for (let i = 0; i < this.tabSetStateArray.length; i++) {
        tempState = this.tabSetStateArray[i];
        if (tempState.tabId === tabId) {
          foundIndex = i;
          findExistsTab = true;
          break;
        }
      }
      // 如果有找到指定tabId的頁籤，則直接將索引指定為該頁籤
      if (foundIndex > -1) {
        if (!this.tabSetStateArray[foundIndex].opener) {
          this.tabSetStateArray[foundIndex].opener = this.tabSetStateArray[this.currentIndex].tabId;
        }
        this.previousIndex = this.currentIndex;
        this.currentIndex = foundIndex;
      }

    } else {

      // TODO: 這裡要判斷是否可以多開
      if (!this.canMultiOpen(info)) {
        // 不可多開
        for (let i = 0; i < this.tabSetStateArray.length; i++) {
          if (this.tabSetStateArray[i].id === info.id) {
            if (!this.tabSetStateArray[this.currentIndex].opener) {
              this.tabSetStateArray[this.currentIndex].opener = this.tabSetStateArray[i].tabId;
            }
            this.previousIndex = this.currentIndex;
            this.currentIndex = i;
            findExistsTab = true;
            // FIXME: 導頁待優化
            const _tempOnSameUrlNavigation = this.router.onSameUrlNavigation;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigateByUrl(this.tabSetStateArray[i].currentUrl);
            this.router.onSameUrlNavigation = _tempOnSameUrlNavigation;
            this.isTabChanged = this.currentIndex !== this.previousIndex;
            return this.tabSetStateArray[i].tabId;
          }
        }
      }
    }

    // 如果不存在頁籤中，那與多開同，新增頁籤
    if (!findExistsTab) {
      this.tabSetStateArray.push(info);
      info.opener = this.tabSetStateArray[this.currentIndex].tabId;
      this.previousIndex = this.currentIndex;
      this.currentIndex = this.tabSetStateArray.length - 1;
    }

    // FIXME: 導頁待優化
    const tempOnSameUrlNavigation = this.router.onSameUrlNavigation;
    this.router.onSameUrlNavigation = 'reload';

    this.router.navigateByUrl(info.routerLink);

    this.router.onSameUrlNavigation = tempOnSameUrlNavigation;

    // 通知頁籤變更 FIXME: 頁籤變換通知待優化
    this.tabSetIndexChanged.next(this.currentIndex);

    return info.tabId;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (!this.isStarted) {
      return false;
    }
    if (route && route.data) {
      if (route.data.tabCache === false) {
        return false;
      }
    }

    // TEST:　order -> close all -> order -> close all -> 壞掉
    // 底下這一行 this.destroyShouldDestroyTab(); 拿掉就正常了？？？
//    this.destroyShouldDestroyTab();

    // TODO: 若回上頁到非頁籤Hosting之下時，要禁用清除全部，且要有pause的功能，直到回至頁籤Hosting之下。
    //       在pause的狀態下，任何作業都會被緩存...所以是否isStarted == isPause使用預設重用策略？
//    console.log('shouldAttach', this.getRouteKey(route));
    return this.checkExistsByRoute(route);
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const shouldDetach = this.isStarted;

    if (!this.isStarted) {
      return false;
    }
    if (route && route.data) {
      if (route.data.tabCache === false) {
        return false;
      }
    }
//    console.log('shouldDetach', this.getRouteKey(route));
    if (!DwTabInfoService2.isUnderHosting(route)) {
      this.destroyTabHistory(this.tabSetStateArray[this.previousIndex]);
    }

    return shouldDetach;
  }

  retrieve(routeSnapshot: ActivatedRouteSnapshot): DetachedRouteHandle {


    // 404時不給拿
    if (routeSnapshot.routeConfig.path === '**') {
      return null;
    }

    const isUnderHosting = DwTabInfoService2.isUnderHosting(routeSnapshot);

    this.currentRouteSnapshot = routeSnapshot;

    this.shouldStop = !isUnderHosting && !this.isStarted;

    if (!this.isStarted) {
      return;
    }

    const retrieveKey = this.getRouteKey(routeSnapshot);

    // #region 頁面載入時的初始化
    if (this.currentIndex === -1) {
      this.currentIndex = this.previousIndex = this.tabSetStateArray.length;
    }

    // 建立初始頁籤資訊
    let currentTabStateHistory: IDwTabRouteState;
    if (this.tabSetStateArray[this.currentIndex] === undefined) {
      currentTabStateHistory = this.createTabRouteState(routeSnapshot);
      this.tabSetStateArray[this.currentIndex] = Object.assign({}, currentTabStateHistory);
      this.tabSetStateArray[this.currentIndex].navigateHistory.set(currentTabStateHistory.key, currentTabStateHistory);
    }

    // 發生在create方法之後，因為路由還沒產生，所以未生成key
    if (this.tabSetStateArray[this.currentIndex].key === undefined) {
      const tabInfo = this.tabSetStateArray[this.currentIndex];
      tabInfo.key = retrieveKey;
      tabInfo.navigateHistory.set(tabInfo.key, tabInfo);
    }

    // #endregion

    if (this.isTabChanged) {
      this.previousTabInfo = this.tabSetStateArray[this.previousIndex];
    } else {
      this.previousTabInfo = this.tabSetStateArray[this.currentIndex];
    }

    if (this.defaultTabCreating === true) {
      this.createDefaultTabs(this.tabRouteConfig, this.currentTabInfo);
    }
//    console.log('retrieve', retrieveKey);
    // 發生瀏覽器Back / Forward Button
    // TODO: 若回上頁到非頁籤Hosting之下時，要禁用清除全部
    if (this.isNavigationPopState) {
      const url = this.getFullUrl(routeSnapshot);
      // 如果上一頁的url等於當下頁籤的歷史，則定位在當下頁籤；
      // TODO: 如果上一頁的url是其它頁籤？
      if (this.previousIndex !== this.currentIndex) {
        this.isTabChanged = true;
        for (let i = 0; i < this.tabSetStateArray.length; i++) {
          if (this.tabSetStateArray[i].currentUrl === url && this.tabSetStateArray[i].navigateHistory.size !== 0) {
            this.previousIndex = this.currentIndex;
            this.currentIndex = i;
            break;
          }
        }
      }
      this.isNavigationPopState = false;
    }

    this.currentTabInfo = this.tabSetStateArray[this.currentIndex];

    let currentTabHistory = this.tabSetStateArray[this.currentIndex].navigateHistory.get(retrieveKey);

    // 發生在Component自己的路由轉跳如navigator / routerLink
    if (currentTabHistory === undefined) {
      currentTabHistory = this.createTabRouteState(routeSnapshot);
      this.tabSetStateArray[this.currentIndex].navigateHistory.set(this.currentTabInfo.key, currentTabHistory);
    }

    if (this.isStarted) {
      const tempTabInfo = this.tabSetStateArray[this.currentIndex];
      const type = tempTabInfo['type'];

      if (type === undefined ||
        ((tempTabInfo['type'] === 'fineReport' || tempTabInfo['type'] === 'externalUrl') &&
          tempTabInfo['item'] === undefined)) {
        this.operationInfoService.routerOperationInfo(routeSnapshot).pipe(first()).subscribe(
          (operationInfo) => {
            Object.assign(tempTabInfo, operationInfo);
            if (tempTabInfo.type) {
              this.setIframeInfo(tempTabInfo);
            }
            if (tempTabInfo['canMultiOpen'] === undefined || tempTabInfo['reload'] === undefined) {
              if (this.tabRouteConfig.length > 0) {
                const tabConfig = this.tabRouteConfig.find((config) => {
                  return config.id === operationInfo.id;
                });
                if (tabConfig) {
                  Object.assign(tempTabInfo, {
                    reload: tabConfig.reload || false,
                    canMultiOpen: tabConfig.canMultiOpen || this.TAB_MULTI_OPEN
                  });
                }
              }
            }
          }
        );
      }
    }

    // 將當下的key記錄在頁籤下
    this.currentTabInfo.currentUrl = this.tabSetStateArray[this.currentIndex].currentUrl = this.getFullUrl(routeSnapshot);


    const storedTabInfo: IDwTabRouteInfo = this.getCurrentHandler(routeSnapshot);

    if (storedTabInfo && storedTabInfo.id) {
      this.tabSetStateArray[this.currentIndex].id = storedTabInfo.id;
    }
    if (storedTabInfo && !this.currentTabInfo.lastPath) {
      this.currentTabInfo.lastPath = this.getLastNonemptyPath(routeSnapshot);
    }

    // FIXME: 頁籤變換通知待優化
    this.selectedIndexChange.next(this.currentIndex);
    this.tabSetIndexChanged.next(this.currentIndex);
    return (storedTabInfo && storedTabInfo.currentHandler) ? storedTabInfo.currentHandler : undefined;
  }

  public setCurrentIndex(index: number): void {

    if (this.currentIndex === index) {
      return;
    }
    const currentTabSetStatus = this.tabSetStateArray[index];
    if (currentTabSetStatus === null) {
      console.error('找不到正確的路由');
      return;
    }

    if (!currentTabSetStatus.currentUrl) {
      currentTabSetStatus.currentUrl = currentTabSetStatus.routerLink;
    }

    this.previousIndex = this.currentIndex;
    this.currentIndex = index;
    this.isTabChanged = true;

    // FIXME: 導頁待優化
    const onSameUrlNavigationBack = this.router.onSameUrlNavigation;
//    if (this.tabSetStateArray[this.previousIndex].currentUrl === currentTabSetStatus.currentUrl) {
    this.router.onSameUrlNavigation = 'reload';
//    }

    this.router.navigateByUrl(currentTabSetStatus.currentUrl);
    this.router.onSameUrlNavigation = onSameUrlNavigationBack;
    // FIXME: 頁籤變換通知待優化
    this.selectedIndexChange.next(this.currentIndex);

  }

  public store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {

    // 做個記錄，底下的註解，是原本父路由不會被記錄
    // if (route.routeConfig && route.routeConfig.loadChildren) {
    //   return ;
    // }
    const key = this.getRouteKey(route);
//    console.log('store', this.getRouteKey(route));
    let tabState;
    if (this.isTabChanged) {
      tabState = this.tabSetStateArray[this.previousIndex];
    } else {
      tabState = this.tabSetStateArray[this.currentIndex];
    }
    this.isTabChanged = false;
    let previousTabState = tabState.navigateHistory.get(key);
    if (previousTabState === undefined) {
      previousTabState = this.createTabRouteState(route);
    }
    // 如果不儲存(tab-route-config.reload)，則銷毀組件
    if (this.canReload(previousTabState, route) || !DwTabInfoService2.isUnderHosting(route)) {
      const mustDestroyHandler = handler as { componentRef: ComponentRef<any> };
      mustDestroyHandler.componentRef.destroy();
//      console.log('銷毀頁籤', previousTabState.tabId);
    } else {
      tabState.navigateHistory.set(key, previousTabState);
      previousTabState.currentHandler = handler;
    }

    if (this.shouldStop) {
      this.destroy();
      return;
    }

    // 若有可銷毀的路由資訊，在這做。
    if (this.readyToDestroy) {
      this.destroyReadyToDestroyRouteInfo();
//      this.currentIndex = this.previousIndex = this.tabSetStateArray.length - 1;
    }

    if (this.shouldDestroyTab) {
      this.destroyShouldDestroyTab();
    }
  }

  public closeAll(): void {
//    throw new Error('closeAll() Not implemented');
//    console.log('關閉所有頁籤');
    if (this.tabSetStateArray.length === 0) {
      return;
    }

    // 如果頁籤未啟動，則無論canClose全部關閉。
    // 若沒有存活的tab，則開啟預設頁籤；
    const survivingTabIds: string[] = [];
    let redirectToState: IDwTabRouteState = null;
    this.tabSetStateArray.forEach((tabSetState) => {

      // 頁籤沒啟動，全砍
      if (this.isStarted === false) {
        tabSetState.canDestroy = true;
        this.readyToDestroy = true;
      } else {
        // home不關閉
        if (tabSetState.id === 'home' || tabSetState.routerLink === this.DEFAULT_APP) {
          tabSetState.canDestroy = false;
        } else {
          // canClose = true時
          tabSetState.canDestroy = tabSetState.canClose === undefined ? true : tabSetState.canClose;
        }

        // 如果有不能砍的，做個記錄
        if (tabSetState.canDestroy !== true) {
          survivingTabIds.push(tabSetState.tabId);
          redirectToState = tabSetState;
        } else {
          // 如果有可以砍的，
          this.readyToDestroy = true;
        }
      }
    });

    let redirectToUrl = this.DEFAULT_APP || '/';

    // 若停留在不可關閉的頁籤，不做任何動作
    if (this.currentTabInfo.canClose === false) {
      redirectToUrl = null;
      redirectToState = null;
      this.destroyReadyToDestroyRouteInfo();
    } else {

      // 如果上一頁是不可關閉的
      if (this.previousTabInfo && this.previousTabInfo.canClose === false) {
        redirectToState = null;
        redirectToUrl = this.previousTabInfo.currentUrl;
        const tempIndex = this.currentIndex;
        this.currentIndex = this.previousIndex;
        this.previousIndex = tempIndex;
        this.isTabChanged = true;
      }
      // 還有未關閉的頁
      if (redirectToState !== null) {
        const redirectIndex = this.tabSetStateArray.indexOf(redirectToState);
        if (redirectToState.canDestroy === false) {
          // 如果停留在不用銷毀的頁籤上，那基本上是不會再跑路由，所以這裡直接銷毀其它路由組件

          if (redirectIndex === this.currentIndex) {
            this.destroyReadyToDestroyRouteInfo();
          } else {
            this.currentIndex = redirectIndex;
            this.isTabChanged = true;
          }

          redirectToUrl = redirectToState.currentUrl;
        }

      } else {
        // 全部的頁籤都關閉
        if (survivingTabIds.length === 0) {
          this.currentIndex = -1;
        }
      }
    }

    if (this.isStarted === true && redirectToUrl) {
      // FIXME: 導頁待優化
      const tempOnSameUrlNavigation = this.router.onSameUrlNavigation;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigateByUrl(redirectToUrl);
      this.router.onSameUrlNavigation = tempOnSameUrlNavigation;
    }

    this.isNavigationPopState = false;
    this.shouldDestroyTab = null;

  }

  /**
   * 重新建立頁籤
   */
  public restart(): void {
    // TODO 重新建立頁籤
    console.log('DwTabInfoService2.restart() not implemented');
  }

  public navigateToOpenerFromCurrentTab(commands?: any[], extras?: NavigationExtras, closeCurrent?: boolean): void {
    const openerId = this.tabSetStateArray[this.currentIndex].opener;
    let findIndex = -1;
    for (let i = 0; i < this.tabSetStateArray.length; i++) {
      if (this.tabSetStateArray[i].tabId === openerId) {
        findIndex = i;
        this.previousIndex = this.currentIndex;
        this.currentIndex = findIndex;
        break;
      }
    }
    this.isTabChanged = true;
    // 如果沒有找到，則依照正常路由
    if (commands && findIndex === -1) {
      let urlTree: UrlTree;
      if (extras) {
        urlTree = this.router.createUrlTree(commands, extras);
      } else {
        urlTree = this.router.createUrlTree(commands);
      }
      this.tabSetStateArray[this.currentIndex].opener = null;
      this.previousIndex = this.currentIndex;
      const defaultSerializer = new DefaultUrlSerializer();
      // FIXME: 導頁待優化
      const tempOnSameUrlNavigation = this.router.onSameUrlNavigation;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigateByUrl(defaultSerializer.serialize(urlTree));
      this.router.onSameUrlNavigation = tempOnSameUrlNavigation;
    } else {
      this.isTabChanged = (this.currentIndex !== this.previousIndex);
      // FIXME: 導頁待優化
      const tempOnSameUrlNavigation = this.router.onSameUrlNavigation;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigateByUrl(this.tabSetStateArray[findIndex].currentUrl);
      this.router.onSameUrlNavigation = tempOnSameUrlNavigation;
    }

    // 如果是切換頁籤，且closeCurrent為真時，標記當下頁籤必須銷毀
    if (this.isTabChanged) {
      this.readyToDestroy = this.tabSetStateArray[this.previousIndex].canDestroy = (closeCurrent === true);
    }

    this.tabSetIndexChanged.next(this.currentIndex);
  }

  public closeCurrentTab(): void {
    this.close(this.currentIndex);
  }

  // TODO: 載入TabSetComponent時，才開始記錄路由樹
  public createFirstRouteFromCurrentRoute(storedTabs?: StoredTabs): void {
    this.isStarted = true;
    this.readyToDestroy = false;
//    console.log('初始化第一個路由，建立頁籤');

    if (!this.currentRouteSnapshot) {
      return;
    }

    const tabRouteState = this.createTabRouteState(this.currentRouteSnapshot);
    this.currentTabInfo = this.previousTabInfo = tabRouteState;

    if (this.currentIndex === -1) {
      this.currentIndex = this.previousIndex = this.tabSetStateArray.length;
    } else {
//      console.log(this.tabSetStateArray[0]);
    }

    if (this.tabSetStateArray[this.currentIndex] === undefined) {
      const routeState: IDwTabRouteState = tabRouteState;
      this.tabSetStateArray[this.currentIndex] = routeState;
//      this.tabSetIndexChanged.next(this.currentIndex);
    }

    this.tabSetStateArray[this.currentIndex].navigateHistory.set(tabRouteState.key, tabRouteState);
//    this.currentRouteSnapshot = null;
    this.createFromTabConfig(storedTabs);
  }

  createFromTabConfig(storedTabs?: StoredTabs): void {
    // 底下這個，似乎有時間差，若比createFirstRouteFromCurrentRoute()方法還快，那麼則訂閱不到？
    // TODO: 用timeout來試試
    this.routerConfigService.routeConfigInfos$.pipe(first()).subscribe((config: {
      'tabRouteConfig': any[],
      'operationListMap': any
    }) => {
      /**
       * 建立初始頁籤資訊，需整合IAM，且若無權限則不可開啟。
       * 載入預設開啟的頁籤，若：
       *   有設定預設頁籤：
       *     載入權限並過濾無權限的頁籤。
       *     若當前路由存在於預設頁籤中，則索引跳至該頁籤
       *     若當前路由沒有在預設頁籤中，則新建頁籤
       *   沒設定預設頁籤：
       *     載入defaultApp。
       *     若當前路由與defaultApp相同，則索引至該頁籤。不同則新開頁籤。
       */
      this.defaultTabCreating = true;
      this.tabRouteConfig = config.tabRouteConfig;

      if (storedTabs) {
        let index = 0;
        let storedTab = storedTabs.tabs[index];
        while (storedTab) {
          storedTab.defaultOpen = true;
          let idOrCode = storedTab.code;
          if (!idOrCode) {
            idOrCode = storedTab.id;
          }
          if (!config.operationListMap[idOrCode]) {
            storedTabs.tabs.splice(index, 1);
          } else {
            index = index + 1;
          }
          storedTab = storedTabs.tabs[index];
        }

      }
      this.createDefaultTabs(this.tabRouteConfig, this.currentTabInfo, storedTabs);
    });
  }


  private getCurrentHandler(route: ActivatedRouteSnapshot | string): IDwTabRouteInfo {
    let key: string;
    if (typeof (route) !== 'string') {
      key = this.getRouteKey(route);
    } else {
      key = route;
    }
    const state = this.tabSetStateArray[this.currentIndex].navigateHistory.get(key);
//    const currentHandler = !!(state && state.currentHandler) ? state.currentHandler : undefined;
    return state ? state : undefined;
  }

  public destroy(): void {
    this.isStarted = false;
    this.shouldStop = false;
    this.currentRouteSnapshot = null;
    this.tabRouteConfig = [];
    this.closeAll();
  }

  /**
   * 檢查此路由在當下頁籤中是否已緩存
   */
  private checkExistsByRoute(route: ActivatedRouteSnapshot): boolean {
    if (this.isStarted === false) {
      return false;
    }
    const key = this.getRouteKey(route);
    const currentRouteState = this.tabSetStateArray[this.currentIndex];
    if (!currentRouteState) {
      return false;
    }
    if (!currentRouteState.navigateHistory) {
      return false;
    }
    const state = currentRouteState.navigateHistory.get(key);
    return !!state && !!state.currentHandler;
  }

  private createTabRouteState(route: ActivatedRouteSnapshot): IDwTabRouteState {
    const key = this.getRouteKey(route);
    const newTabRouteState = {
      key: key,
      tabId: this.createTabId(),
//      id: route.data ? route.data.dwRouteData ? route.data.dwRouteData.programId : '' : '',
      // TODO: 這裡會因為IAM的關係，有可能延遲
      id: this.routerInfo.routeSnapshotProgramId(route),
      menuId: '',
      name: '',
      queryParams: route.queryParams,
      params: route.params,
      routerLink: this.getFullUrl(route),
      navigateHistory: new Map(),
      currentUrl: this.getFullUrl(route)
    };

    this.operationInfoService.routerOperationInfo(route).pipe(first()).subscribe(
      (operationInfo) => {
        Object.assign(newTabRouteState, operationInfo);
      }
    );
    return newTabRouteState;
  }

  public getTabState(selectedIndex: any): IDwTabRouteState {
    return this.tabSetStateArray[selectedIndex];
  }

  private getRoutePathFromRoot(route: ActivatedRouteSnapshot): string {
    let url = route.pathFromRoot.map(it => DwTabInfoService2.routeToUrl(it)).join('');
    url += route.children.map(cr => this.getChildRouteKeys(cr));
    return url;
  }

  private getRoutePath(route: ActivatedRouteSnapshot): string {
    const url = route.pathFromRoot.map(it => DwTabInfoService2.routeToUrl(it)).join('/') + '*';
//    let url = route.pathFromRoot.map(it => this.routeToUrl(it)).join('') ;
//    url += route.children.map(cr => this.getChildRouteKeys(cr));
    return url;
  }

  private getRouteKey(route: ActivatedRouteSnapshot): string {
//    return this.getConfiguredUrl(route);
    return this.getStoreKey(route);
    // let url = route.pathFromRoot.map(it => this.routeToUrl(it)).join('/') + '*';
    // let url = route.pathFromRoot.map(it => this.routeToUrl(it)).join('/') + '*';
    // TODO: 底下的不加'*' 可能造成Cannot reattach ActivatedRouteSnapshot created from a different route的錯誤
    // (3/15測試還OK，也測試過messages/:id)

//    let url = route.pathFromRoot.map(it => this.routeToUrl(it)).join('');
//    url += route.children.map(cr => this.getChildRouteKeys(cr));
//    return url;
  }

  private getConfiguredUrl(route: ActivatedRouteSnapshot): string {
    return '/' + route.pathFromRoot
      .filter(v => v.routeConfig)
      .map(v => v.routeConfig ? v.routeConfig.path : null)
      // TODO: 底下 .join('') 可能會造成activatedRoute from diffxxxxxxx的錯誤
      //      .join('');
      .join('/');
  }

  private getFullUrl(route: ActivatedRouteSnapshot): string {
    let url: string = this.getUrl(route);
    if (route['_routerState'] && route['_routerState']['url']) {
      url = route['_routerState']['url'];
    }
    return url;
  }

  /**
   * Cannot reattach ActivatedRouteSnapshot created from a different route
   */
  private getUrl(route: ActivatedRouteSnapshot): string {
    let next = this.getTruthRoute(route);
    const segments = [];
    while (next) {
      segments.push(next.url.join('/'));
      next = next.parent;
    }
    const url = '/' + segments.filter(i => i).reverse().join('/');
    return url;
  }

  private getTruthRoute(route: ActivatedRouteSnapshot): any {
    let next = route;
    while (next.firstChild) {
      next = next.firstChild;
    }
    return next;
  }

  private destroyShouldDestroyTab(): void {

    if (this.shouldDestroyTab) {

      this.shouldDestroyTab.navigateHistory.forEach((routeInfo) => {
        const component = routeInfo.currentHandler as { componentRef: ComponentRef<any> };
        if (component && component.componentRef) {
          component.componentRef.destroy();
//          console.log('銷毀頁籤:', this.shouldDestroyTab.tabId);
        }
      });
      this.shouldDestroyTab = null;
    }
  }


  private getLastNonemptyPath(route: ActivatedRouteSnapshot): string {
    let firstChild = route;
    let path = '';
    while (firstChild) {
      if (firstChild.routeConfig) {
        path = firstChild.routeConfig.path;
      }
      firstChild = firstChild.firstChild;
    }
    if (path === '') {
      const pathFromRoot = route.pathFromRoot;
      for (let i = pathFromRoot.length - 1; i > -1; i--) {
        if (pathFromRoot[i].routeConfig && pathFromRoot[i].routeConfig.path !== '') {
          path = pathFromRoot[i].routeConfig.path;
          break;
        }
      }
    }
    return path;
  }


  private async setIframeInfo(tabState: IDwTabRouteState | IDwTabRouteInfo): Promise<any> {
//    這裡可以拿到tabState.code，再去tab config拿reload

    if (this.frUrl === '@FINEREPORT_URL@') {
      return null;
    }
    switch (tabState.type) {
      case 'fineReport':
        return tabState['item'] = await this.iframeFineReportInfoService
          .finereportInfo(tabState.id)
          .pipe(first())
          .toPromise();
      case 'externalUrl':
        return tabState['item'] = await this.iframeGeneralInfoService.generalInfo(tabState.id).pipe(first()).toPromise();
    }

  }

  /**
   * 銷毀已經被標記要銷毀的路由
   */
  private destroyReadyToDestroyRouteInfo(): void {
    const tempStates = [];
    let index = 0;
    let state = this.tabSetStateArray[index];

    while (state) {
      if (state.canDestroy === true) {
        tempStates.push(state);
        this.tabSetStateArray.splice(index, 1);
      } else {
        index++;
      }
      state = this.tabSetStateArray[index];
    }

    tempStates.forEach((s) => {
      this.destroyTabHistory(s);
    });

    let nextTabState: IDwTabRouteState;

    if (tempStates.length === 1) {
      if (tempStates[0].opener) {
        nextTabState = this.tabSetStateArray.find((_state, _index): boolean => {
          if (tempStates[0].opener === _state.tabId) {
            this.currentIndex = this.previousIndex = _index;
            nextTabState = _state;
            return true;
          }
          return false;
        });
      }
    }

    if (!nextTabState) {
      for (let i = 0; i < this.tabSetStateArray.length; i++) {
        if (this.tabSetStateArray[i].tabId === this.currentTabInfo.tabId) {
          this.currentIndex = this.previousIndex = i;

          break;
        }
      }
    }

    if (this.currentIndex >= this.tabSetStateArray.length) {
      this.currentIndex = this.tabSetStateArray.length - 1;
      this.currentTabInfo = this.tabSetStateArray[this.currentIndex];
    }

    if (this.previousIndex >= this.tabSetStateArray.length) {
      this.previousIndex = this.currentIndex;
      this.previousTabInfo = this.tabSetStateArray[this.previousIndex];
    }

    // FIXME: 頁籤變換通知待優化
    this.tabSetIndexChanged.next(this.currentIndex);

    this.readyToDestroy = false;
  }

  /**
   * 銷毀指定頁籤中的所有緩存
   */
  private destroyTabHistory(state: IDwTabRouteState): void {
    if (state.type === 'fineReport' || state.type === 'externalUrl') {
      return;
    }
    state.navigateHistory.forEach((value) => {
      if (value.currentHandler) {
        const handler = value.currentHandler as { componentRef: ComponentRef<any> };
        value.currentHandler = null;
        // FIXME: 應因order->close all->order->close all的error，先不銷毀做測試
        handler.componentRef.destroy();
//        console.log('銷毀頁籤', state.tabId);
      }
    });
    state.navigateHistory.clear();
  }

  /**
   * 以時間序建立頁籤編號，加個長度只是為了在一次建立多個頁籤時不重覆
   */
  private createTabId(): string {
    return '' + (new Date().getTime()) + this.tabSetStateArray.length + Math.floor(Math.random() * 100);
  }

  private getChildRouteKeys(route: ActivatedRouteSnapshot): string {
    const url = DwTabInfoService2.routeToUrl(route);
    return route.children.reduce((fin, cr) => fin += this.getChildRouteKeys(cr), url);
  }

  private getStoreKey(route: ActivatedRouteSnapshot): string {
    const baseUrl = DwTabInfoService2.getResolvedUrl(route);

    // this works, as ActivatedRouteSnapshot has only every one children ActivatedRouteSnapshot
    // as you can't have more since urls like `/project/1,2` where you'd want to display 1 and 2 project at the
    // same time
    const childrenParts = [];
    let deepestChild = route;
    while (deepestChild.firstChild) {
      deepestChild = deepestChild.firstChild;
      childrenParts.push(deepestChild.url.join('/'));
    }

    // it's important to separate baseUrl with childrenParts so we don't have collisions.
    return baseUrl + '////' + childrenParts.join('/');
  }

  /**
   * 從tabConfig中找出defaultOpen = true的資訊並建立頁籤。
   * 如果：當下路由不在預開頁籤中，則不理會；
   * 如果：當下路由在預設頁籤中，則更新當下路由info資訊
   *     必須判斷當下路由在於預設頁籤中的哪個位置，將前後預開頁籤加入
   */
  private createDefaultTabs(tabConfig: any[], routeInfo: IDwTabRouteInfo, storedTabs?: StoredTabs): void {
    if (!routeInfo) {
      return;
    }
    if (!tabConfig) {
      return;
    }

    let existsIndex = -1;
    // 將預開頁籤與當下路由做比對：
    //    如果預開頁籤都不等於當下路由，則新增頁籤；
    //    如果預開頁籤等於當下路由，則將預開頁籤配置合併至當下路由
//    tabConfig.forEach((config: any, index: number): void => {
    const defaultOpenRouteInfo: IDwTabRouteState[] = [];
    const openedTabConfig = tabConfig.filter((v) => v.defaultOpen === true);

    // 載入有儲存的tab
    if (storedTabs && storedTabs.tabs.length > 0) {

      for (let index = 0; index < storedTabs.tabs.length; index++) {
        const config = storedTabs.tabs[index];
        let configRouteInfo = this.createRouteInfoFromTabConfig(config);
//      console.log(configRouteInfo);

        if (existsIndex === -1 && this.currentTabInfo.currentUrl === config.currentUrl) {
//        if (this.currentTabInfo.currentUrl === config.routerLink) {
          configRouteInfo = Object.assign(this.currentTabInfo, configRouteInfo);
          // 若是當下路由為子頁面，則必須保留當下url
          configRouteInfo.lastPath = this.getLastNonemptyPath(this.currentRouteSnapshot);
          existsIndex = index;
        }
        defaultOpenRouteInfo.push(configRouteInfo);

      }
    } else { // 若沒有儲存的tab，則載入預設頁籤

      for (let index = 0; index < openedTabConfig.length; index++) {
        const config = openedTabConfig[index];
        let configRouteInfo = this.createRouteInfoFromTabConfig(config);
//      console.log(configRouteInfo);
        if (config.defaultOpen === true) {
          if (this.currentTabInfo.id === config.id) {
//        if (this.currentTabInfo.currentUrl === config.routerLink) {
            configRouteInfo = Object.assign(this.currentTabInfo, configRouteInfo);
            // 若是當下路由為子頁面，則必須保留當下url
            configRouteInfo.currentUrl = this.getFullUrl(this.currentRouteSnapshot);
            configRouteInfo.lastPath = this.getLastNonemptyPath(this.currentRouteSnapshot);
            existsIndex = index;

          }
          defaultOpenRouteInfo.push(configRouteInfo);
        }
      }
    }
    // 當下路由存在於預開頁籤中
    if (existsIndex === -1) {
      defaultOpenRouteInfo.push(this.tabSetStateArray[this.currentIndex]);
    }


    this.tabSetStateArray.splice(0, this.tabSetStateArray.length, ...defaultOpenRouteInfo);
    // TODO: 記得變更currentIndex, previousIndex，並發變更的事件

    // 如果是原封不動的把儲存的頁籤顯示出來，那直接訂位到已儲存的位置
    if (storedTabs && (storedTabs.tabs.length === this.tabSetStateArray.length) &&
      (storedTabs.tabs.length === defaultOpenRouteInfo.length)) {

      if (storedTabs.tabs[storedTabs.currentIndex].currentUrl === this.currentTabInfo.currentUrl) {
        existsIndex = storedTabs.currentIndex;
      }
      this.currentIndex = this.previousIndex = existsIndex;

    } else {

      // 如果頁籤總數等於預開頁籤總數，則currentIndex停在existsIndex；
      //    否則currentIndex = openedConfigSize + 1
      if (openedTabConfig.length === this.tabSetStateArray.length) {
        this.currentIndex = this.previousIndex = existsIndex;
      } else {
        if (tabConfig && tabConfig.length === 0) {
          this.currentIndex = this.previousIndex = 0;
        } else {
          this.currentIndex = this.previousIndex = this.tabSetStateArray.length - 1;
        }
      }

    }

    this.currentTabInfo = this.previousTabInfo = this.tabSetStateArray[this.currentIndex];
    this.currentTabInfo.navigateHistory.set(this.currentTabInfo.key, this.currentTabInfo);

    if (this.currentTabInfo && this.currentTabInfo.type) {
      this.setIframeInfo(this.currentTabInfo);
    }


    if (this.tabRouteConfig.length > 0) {
      this.tabSetStateArray.forEach(state => {
        if (state.id) {
          const _config = this.tabRouteConfig.find((config) => state.id === config.id);
          if (_config) {
            Object.assign(state, {
              reload: _config.reload,
              canMultiOpen: _config.canMultiOpen
            });
          }
        }
      });
    }

    // FIXME: 頁籤變換通知待優化
    this.tabSetIndexChanged.next(this.currentIndex);

    this.defaultTabCreating = false;
  }

  /**
   * 將tab-route-config的配置，轉換成頁籤的數據模型
   */
  private createRouteInfoFromTabConfig(config: any): IDwTabRouteState {

    const extras: NavigationExtras = {};
    let commands: any;
    if (config.queryParams) {
      extras.queryParams = config.queryParams;
    }
    if (config.params) {
      commands = [config.routerLink, config.params];
    } else {
      commands = [config.routerLink];
    }

    // 利用路由資訊取得完整的url
    const urlTree = this.router.createUrlTree(commands, extras);
    const fullUrl = (new DefaultUrlSerializer()).serialize(urlTree);
    return Object.assign({
      tabId: config.tabId || this.createTabId(),
      navigateHistory: new Map(),
      currentUrl: fullUrl,
//      opener: config.opener || null
    }, config);
  }

  private canMultiOpen(tabInfo: IDwTabRouteState): boolean {
    if (this.tabRouteConfig.length > 0) {
      const tabConfig = this.tabRouteConfig.find((config) => {
        return config.id === tabInfo.id;
      });


      if (tabConfig && tabConfig.canMultiOpen !== undefined) {
        return !!tabConfig.canMultiOpen;
      }

    }
    return !!this.TAB_MULTI_OPEN;
  }

  private canReload(tabInfo: IDwTabRouteState, route: ActivatedRouteSnapshot): boolean {
    // tab-route-config的reload配置
    if (this.tabRouteConfig.length > 0) {
      const tabConfig = this.tabRouteConfig.find((config) => {
        return config.id === tabInfo.id;
      });
      if (tabConfig && tabConfig.reload) {
        return tabConfig.reload === true;
      }
    }

    // route config中的reload配置
    if (route.data.reload !== undefined) {
      return !!route.data.reload;
    }

    return false;
  }
}

import {
  Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Inject, ViewChildren, OnDestroy, AfterViewInit
} from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, NavigationStart } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter, distinct, first } from 'rxjs/operators';

import { DW_USING_TAB, DW_TAB_ROUTE_CONFIG_JSON } from '../../config/system.config';
import { IDwIframeItem } from './interface/tab-routing.interface';
import { IDwRouteInfo } from './interface/route-info.interface';
import { DwRouteInfoService } from './service/dw-route-info.service';
import { ListChangedEventArgs } from './interface/list-changed-event-args.interface';
import { DwIframeItemSubjectService } from './service/iframe-item-subject.service';
import { DwMenuItemNameComponent } from '../menu/menu-item-name/menu-item-name.component';
import { IDwMenuConfigMap } from '../menu/interface/menu.interface';
import { DwRecursiveMenuService } from '../menu/service/recursive-menu.service';
import { DwOperationInfoService } from '../../program-info/operation-info.service';
import { IDwProgram } from '../../program-info/interface/program.interface';
// import { DwBaseIframeComponent } from '../dw-iframe/base-iframe/dw-base-iframe.component';
@Component({
  selector: 'app-dw-tab-routing',
  templateUrl: './dw-tab-routing.component.html',
  styleUrls: ['./dw-tab-routing.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class DwTabRoutingComponent implements OnInit, OnDestroy, AfterViewInit {
  nowUrl = '';
  iframeItems: IDwIframeItem[] = [];
  reloadItems: IDwIframeItem[] = [];
  tabs: IDwRouteInfo[] = [];
  selectedIndex: number = 0; // 用程式動態切換tab用
  subscription: Subscription;
  tabCreating: boolean = false;
  outletDivOutSide: HTMLElement;
  outletDiv: HTMLElement;
  @ViewChild('tabContent')
  tabContent: ElementRef;
  @ViewChild(RouterOutlet)
  @ViewChildren(DwMenuItemNameComponent) menuItemNameComponents: DwMenuItemNameComponent[];
  // @ViewChildren(DwBaseIframeComponent) iframeComponents: DwBaseIframeComponent[];
  route$: Subscription;
  menuConfigMap: IDwMenuConfigMap;
  public outlet: RouterOutlet;

  constructor(
    private router: Router,
    private location: Location,
    private iframeItemSubjectService: DwIframeItemSubjectService,
    private dwRouteInfoService: DwRouteInfoService,
    private recursiveMenuService: DwRecursiveMenuService,
    private dwOperationInfoService: DwOperationInfoService,
    @Inject(DOCUMENT) private doc: any,
    @Inject(DW_USING_TAB) private _usingTab: boolean,
    @Inject(DW_TAB_ROUTE_CONFIG_JSON) private tabRouteConfigJson: any[]
  ) {
    // if (!this._usingTab) {
    //   this.router.navigateByUrl('');
    // }
    this.dwRouteInfoService.onListChange(function (listChangedEventArgs: ListChangedEventArgs): void {
      // console.log(listChangedEventArgs);
    });
  }

  closeTab(tab: IDwRouteInfo): void {
    this.dwRouteInfoService.remove(tab);
    this.selectedIndex = this.dwRouteInfoService.routeSelectedIndex;
    // 移除關閉的ifrmeItem
    const idx = this.iframeItems.findIndex((i: any) => {
      return i.item.routerLink === tab.routerLink;
    });
    if (idx >= 0) {
      this.iframeItems.splice(idx, 1);
    }
  }

  // 切換tab
  tabClick(tab: IDwRouteInfo): void {
    if (this.location.path() !== tab.routerLink) {
      this.hideIframe();
    }
    this.dwRouteInfoService.routeChange(tab);
  }

  // 切換tab後
  tabSelected(tab: IDwRouteInfo): void {
    this.dwRouteInfoService.routeChanged(tab);
    this.recursiveMenuService.onSelect(tab.menuId);
  }

  selectedIndexChange($idx: any): void {
    this.dwRouteInfoService.routeSelectedIndexChange();
    this.selectedIndex = this.dwRouteInfoService.routeSelectedIndex;
  }
  /** 切換前先隱藏,避免報表網頁因為新tab內容寬高不同,自動resize,造成回來之後會因為resize而觸發reload*/
  hideIframe(): void {
    this.iframeItems.forEach(
      (iframeItem: IDwIframeItem) => {
        iframeItem.isDisplay = false;
      });
  }

  ngOnInit(): void {
    // 初始遮罩
    const body = this.doc.querySelector('body');
    let divElem = this.doc.querySelector('.tabRoutingMask');
    if (!divElem) {
      divElem = this.doc.createElement('div');
      const att = this.doc.createAttribute('class');       // Create a "class" attribute
      att.value = 'tabRoutingMask';
      divElem.setAttributeNode(att);
      body.appendChild(divElem);
      divElem.style.display = 'none';
    }

    // 訂閱 dwRouteInfoService >> _tabs變動
    this.subscription = this.dwRouteInfoService.routeInfos$
      .subscribe(routes => {
        this.tabs = routes;
        this.selectedIndex = this.dwRouteInfoService.routeSelectedIndex;
        if (this.tabs[this.selectedIndex] && this.location.path() !== this.tabs[this.selectedIndex].routerLink) {
          this.hideIframe();
        }
        if (!this.tabs.length) {
          this.router.navigateByUrl('/dwTabRouting');
        }
      });
    // 訂閱 dwRouteInfoService >> tabCreating 遮罩開啟
    this.dwRouteInfoService.tabCreating$.subscribe(val => {
      this.tabCreating = val;
      divElem.style.display = (!!val ? 'block' : 'none');
    });

    // #########管理外部連結iframe div display BEGIN#########
    // 重整時帶入
    // if (this.dwRouteInfoService.iframeItems.length) {
    //   console.log('iframeItems from storge');
    //   this.iframeItems = this.dwRouteInfoService.iframeItems;
    //   setTimeout(() => {
    //     nowUrl = this.location.path();
    //     this.iframeComponents.forEach((comp) => {
    //       if (nowUrl.search(comp.item.routerLink) !== -1) {
    //         comp._elementRef.nativeElement.style.display = 'block';
    //       } else {
    //         comp._elementRef.nativeElement.style.display = 'none';
    //       }
    //     });
    //   }, 0);

    // }

    this.nowUrl = '';
    this.route$ = this.router.events.pipe(
      filter(evt => (evt instanceof NavigationEnd || evt instanceof NavigationStart)),
      distinct(value => value)
    ).subscribe((res: any) => {
      if (res instanceof NavigationEnd) {
        this.nowUrl = res.url;
        // reload iframeItem
        if (this.reloadItems.length) {
          const idx = this.reloadItems.findIndex((_reloadItem: IDwIframeItem) => {
            return _reloadItem.item.routerLink === this.nowUrl;
          });

          if (idx !== -1) {
            this.tabIframeItemsAdd(this.reloadItems[idx].item);
            this.reloadItems.splice(idx, 1);
          }
        }

        this.tabIframeComponentsDisplay(); // 開啟當前iframeComponent
      }

      // 離開時檢查此dwIframeComponent是否要reload
      if (res instanceof NavigationStart && this.tabRouteConfigJson) {
        const nowTab = this.tabs[this.selectedIndex];

        if (nowTab && nowTab.hasOwnProperty('id')) {
          for (let i = 0; i < this.tabRouteConfigJson.length; i++) {
            if (nowTab.id === this.tabRouteConfigJson[i].id || (nowTab.routerLink.search(this.tabRouteConfigJson[i].id) !== -1)) {
              if (this.tabRouteConfigJson[i].hasOwnProperty('reload') && this.tabRouteConfigJson[i].reload) {
                const idx = this.iframeItems.findIndex((_iframeItem: IDwIframeItem) => {
                  return _iframeItem.item.routerLink === nowTab.routerLink;
                });

                if (idx !== -1) {
                  const reloadItem: IDwIframeItem = {
                    isDisplay: this.iframeItems[idx].isDisplay,
                    item: Object.assign({}, this.iframeItems[idx].item)
                  };
                  this.reloadItems.push(reloadItem);
                  // 先移
                  this.iframeItems.splice(idx, 1);
                  // 之後再加回iframeItems,就會reload
                }
              }
              break;
            }
          }
        }
      }
    });

    // 從DwIframeGeneralComponent DwIframeFinereportComponent傳來資料
    // TODO：[多頁佈局首頁內嵌iframe非同步混亂]
    //       item$廣播、路由轉換為非同步，先後順序不一定。
    //       避免focus tab不是報表，但首頁是報表，重新整理時首頁先init就廣播出報表url同時路由也轉成focus tab作業，誤以為報表url是此作業的。
    // 暫解：首頁內嵌iframe時，1.提供programId='home'做辨識 2.作業資訊指定type
    this.iframeItemSubjectService.item$.pipe(distinct(value => value)).subscribe((outUrlObj) => {
      if (outUrlObj.hasOwnProperty('url')) {
        const item = Object.assign({}, outUrlObj);

        if (item.hasOwnProperty('programId')) {
          // 取作業routerLink
          this.dwOperationInfoService.operationInfo$(item.programId).pipe(
            first()
          ).subscribe(
            (operationInfo: IDwProgram) => {
              // 作業內嵌iframe時，要在作業資訊定義type為'fineReport'或'externalUrl'
              if (operationInfo.type === 'fineReport' || operationInfo.type === 'externalUrl') {
                item.routerLink = operationInfo.routerLink;
                this.tabIframeItemsAddCheck(item);
              }
            }
          );
        } else {
          item.routerLink = this.nowUrl;
          this.tabIframeItemsAddCheck(item);
        }
      }
    });
    // #########管理外部連結iframe div display END#########
    this.dwRouteInfoService.tabContent = this.tabContent; // 變更tab時,管理顯示隱藏,避免看到前tab殘影
    this.tabContent.nativeElement.style.display = 'none'; // 避免一開始看到首頁
    // 開啟初始TAB
    this.dwRouteInfoService.createDefaultTab().then((val) => {
      this.tabContent.nativeElement.style.display = 'block';
      // 自貼連結給nowProgramId後,顯示tab名稱
      if (this.menuItemNameComponents) {
        this.menuItemNameComponents.forEach((com, index, array) => {
          if (index === this.selectedIndex) {
            com.menuId = this.tabs[this.selectedIndex].menuId;
            com.programId = this.tabs[this.selectedIndex].id;
            com.ngOnInit();
          }
        });
      }
    });
  }

  ngAfterViewInit(): void {
    // 管理回復捲軸位置用
    // 如果要包在div裏,請在div加入class="for-tab-query-class"
    if (this.doc.querySelector('.for-tab-query-class')) {
      this.outletDiv = this.doc.querySelector('.for-tab-query-class');
    } else {
      this.outletDiv = this.doc.documentElement || this.doc.body;
    }
    this.dwRouteInfoService.outletDiv = this.outletDiv;
    // this.outlet.activateEvents.subscribe((component: Component) => {
    //   // gets passed the new child component instance
    //   console.log(component);
    // }, () => { }, () => { console.log('cc complete'); });
    // this.outlet.deactivateEvents.subscribe(() => {
    //   // the child component has been destroyed
    //   console.log('component destroyed');
    // });
    // if (this.outlet.isActivated) {
    //   // will be false if there is no child route active
    //   console.log('outlet active');
    // }
  }
  ngOnDestroy(): void {
    // prevent memory leak when component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.route$) {
      this.route$.unsubscribe();
    }
    // if (this.iframeItemSubjectService.subscrition) {
    //   this.iframeItemSubjectService.subscrition.unsubscribe();
    // }
    this.iframeItemSubjectService.clear();
    this.iframeItems = [];
    this.dwRouteInfoService.clear();
    this.nowUrl = '';
    this.tabs = [];
  }

  // 新增iframe前的檢查
  private tabIframeItemsAddCheck(item: any): void {
    const newItem = Object.assign({}, item);

    const idx = this.iframeItems.findIndex((_iframeItem: IDwIframeItem) => {
      return _iframeItem.item.routerLink === newItem.routerLink;
    });

    if (idx === -1 && !!newItem.routerLink && newItem.routerLink !== '/dwTabRouting') {
      this.tabIframeItemsAdd(newItem);
      this.tabIframeComponentsDisplay(); // 開啟當前iframeComponent
    }
  }

  // 新增iframe
  private tabIframeItemsAdd(item: any): void {
    const iframeItem: IDwIframeItem = {
      isDisplay: false, // 預設不顯示
      item: Object.assign({}, item)
    };

    this.iframeItems.push(iframeItem);
  }

  // 開啟當前iframeComponent
  private tabIframeComponentsDisplay(): void {
    this.iframeItems.forEach(
      (iframeItem: IDwIframeItem) => {
        let display = false;

        // 搜尋''或'/'的結果會是0，在此防止誤判
        if (iframeItem.item.routerLink === '' || iframeItem.item.routerLink === '/' || iframeItem.item.routerLink === '/dwTabRouting') {
          if (this.nowUrl === '' || this.nowUrl === '/' || this.nowUrl === '/dwTabRouting') {
            display = true;
          }
        } else if (this.nowUrl.indexOf(iframeItem.item.routerLink) !== -1) {
          display = true;
        }

        iframeItem.isDisplay = display;
      }
    );
  }
}

import {
  AfterViewInit,
  Component,
  DoCheck, HostListener,
  Inject,
  IterableDiffer,
  IterableDiffers,
  NgZone,
  OnDestroy,
  OnInit
} from '@angular/core';
import { DwTabInfoService2, IDwTabRouteState, StoredTabs } from './tab-info-service2';
import { DW_TAB_MULTI_OPEN } from '../../config/system.config';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DwRecursiveMenuService } from '../menu';
import { DwTabRoutingService } from './tab-routing.service';
import { DwTabClose, DwTabFocusin, DwTabFocusout, DwTabOpen } from './tab-events';
import { DOCUMENT } from '@angular/common';
import { LocalStorage } from '../../storage';
import { DwAuthService } from '../../auth';

export const TAB_STORED_KEY = 'TAB_STORED_KEY';

//  把OnPush拿掉測試看看
@Component({
  selector: 'dw-routing-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.less']
})
export class DwRoutingTabSetComponent implements OnInit, AfterViewInit, OnDestroy, DoCheck {

  selectedIndex;
  currentTabInfo: any;

  private outletDiv: HTMLElement;
  private subscription: Subscription = new Subscription();
  private differ: IterableDiffer<IDwTabRouteState>;
  private isStarted: boolean;

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler($event: any): boolean {
    this.storeTabs();
    return true;
  }

  constructor(private routeInfoService: DwTabInfoService2,
              @Inject(DW_TAB_MULTI_OPEN) private multiOpen: boolean,
              private recursiveMenuService: DwRecursiveMenuService,
              private router: Router,
              private tabRouting: DwTabRoutingService,
              differs: IterableDiffers,
              private localStorage: LocalStorage,
              @Inject(DOCUMENT) private doc: any,
              private zone: NgZone,
              authService: DwAuthService
  ) {

    // 頁籤們變更的比對
    this.differ = differs.find(this.routeInfos).create<IDwTabRouteState>(this.trackByTabId);

    this.subscription.add(
      this.routeInfoService.tabSetIndexChanged.pipe(
        distinctUntilChanged()
      ).subscribe(
        (index: number) => {
          this.selectedIndex = index;
          this.currentTabInfo = this.routeInfoService.getTabState(this.selectedIndex);
          this.isStarted = true;

          // TODO: 與menu互動的之後再說。
//          this.recursiveMenuService.onSelect(this.currentTabInfo.menuId || this.currentTabInfo.id);
        }
      )
    );
    this.subscription.add(
      this.router.events.subscribe(
        event => {
          if (event instanceof NavigationStart) {
            this.routeInfoService.tabSetStateArray[
              this.routeInfoService.previousIndex
              ].scrollTop = this.outletDiv.scrollTop;
          }
          if ( event instanceof NavigationEnd) {
            this.storeTabs();
            this.outletDiv.scrollTop = this.routeInfoService.tabSetStateArray[
              this.routeInfoService.currentIndex
              ].scrollTop || 0;
          }
        }
      )
    );

    this.subscription.add(
      authService.isLoggedIn$.subscribe(
        value => {
          if (!value) {
            this.clearStoredTabs();
          }
        }
      )
    );
  }

  get routeInfos(): Array<IDwTabRouteState> {
    return this.routeInfoService.tabSetStateArray;
  }

  ngOnInit(): void {
    // 建立第一個頁籤  載入預設頁籤
    this.routeInfoService.createFirstRouteFromCurrentRoute(this.getStoredTabs());
  }

  ngAfterViewInit(): void {
    const outletDiv = this.doc.querySelector('.for-tab-query-class');
    if (outletDiv) {
      this.outletDiv = outletDiv;
    } else {
      this.outletDiv = this.doc.documentElement || this.doc.body;
    }
  }

  closeTab(index: number, $event: any): boolean {

    this.routeInfoService.close(index);

    // 阻止tab select的click
    $event.preventDefault();
    $event.stopPropagation();

    return false;
  }


  tabClick(index: number): void {
    this.routeInfoService.setCurrentIndex(index);
    this.selectedIndex = index;

  }


  showKeys(): void {
    console.log(this.routeInfos);
  }


  ngDoCheck(): void {

    const change = this.differ.diff(this.routeInfos);

    if (change) {

      // 發送建立頁籤的事件
      change.forEachAddedItem(tabState => {
        this.tabRouting.eventSubject.next(new DwTabOpen(
          tabState.item.tabId,
          tabState.item.currentUrl,
          tabState.item.id,
          tabState.item.module,
          tabState.item.type
        ));
        // 新增就給
      });

      // 發送移除頁籤的事件
      change.forEachRemovedItem(tabState => {
        this.tabRouting.eventSubject.next(new DwTabClose(
          tabState.item.tabId,
          tabState.item.currentUrl,
          tabState.item.id,
          tabState.item.module,
          tabState.item.type
        ));

      });

      this.storeTabs();

    }

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.routeInfoService.destroy();
//    this.clearStoredTabs();
  }


  closeAll(): void {
    this.routeInfoService.closeAll();
  }


  trackByTabId(index: number, item: IDwTabRouteState): string {
    return item['tabId'];
  }


  tabSelected(info: IDwTabRouteState): void {
//    console.log('被選中：', info);
//    console.log('前一個頁籤索引：', this.routeInfoService.previousIndex);
//    console.log('選中的索引：', this.routeInfoService.currentIndex);

    const previousTab = this.routeInfoService.tabSetStateArray[this.routeInfoService.previousIndex];

    // 發送離開頁籤的事件
    this.tabRouting.eventSubject.next(new DwTabFocusout(
      previousTab.tabId,
      previousTab.currentUrl,
      previousTab.id,
      previousTab.module,
      previousTab.type
    ));

    // 發送進入頁籤的事件
    this.tabRouting.eventSubject.next(new DwTabFocusin(
      info.tabId,
      info.currentUrl,
      info.id,
      info.module,
      info.type
    ));

  }

  private getStoredTabs(): any {
    const storedTabs = this.localStorage.get(TAB_STORED_KEY);
    if (storedTabs) {
      return JSON.parse(storedTabs);
    }
    return null;
  }

  private clearStoredTabs(): void {
    this.localStorage.remove(TAB_STORED_KEY);
  }

  private storeTabs(): void {
    if (!this.isStarted) {
      return;
    }
    const storedTabs: StoredTabs = {
      tabs: [],
      currentIndex: this.selectedIndex
    };
    const tabsState = this.routeInfoService.tabSetStateArray;

    tabsState.forEach((state, index) => {

      storedTabs.tabs.push(<any>{
        id: state.id,
        tabId: state.tabId,
        opener: state.opener,
        lastPath: state.lastPath,
        menuId: state.menuId,
        name: state.name,
        queryParams: state.queryParams,
        routerLink: state.routerLink,
        type: state.type,
        currentUrl: state.currentUrl,
        defaultOpen: true,
        scrollTop: state.scrollTop,
        canClose: state.canClose,
        iconClass: state.iconClass
      });
//      const tempState: IDwTabRouteState = Object.assign({}, state);
//      delete tempState.navigateHistory;
//      storedTabs.tabs.push(tempState);
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => this.localStorage.set(TAB_STORED_KEY, JSON.stringify(storedTabs)));
    });

  }
}

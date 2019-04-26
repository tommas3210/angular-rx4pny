import { Inject, Injectable } from '@angular/core';
import { DefaultUrlSerializer, NavigationExtras, Router, UrlSerializer, UrlTree } from '@angular/router';
import { DW_USING_TAB } from '../../config';
import { IDwRouteInfo } from '../dw-tab-routing/interface';
import { DwTabInfoService2, IDwTabRouteState } from './tab-info-service2';
import { Observable, Subject } from 'rxjs';
import { DwTabEvent } from './tab-events';

@Injectable()
export class DwTabRoutingService {
  urlSerializer: UrlSerializer = new DefaultUrlSerializer();
  eventSubject: Subject<DwTabEvent> = new Subject();
  events: Observable<DwTabEvent> = this.eventSubject.asObservable();

  constructor(
    private routeInfoService: DwTabInfoService2,
    @Inject(DW_USING_TAB) private usingTab: boolean,
    private router: Router) {
  }

  create(routeInfo: IDwRouteInfo | IDwTabRouteState, defaultTab?: boolean): void {
    if (this.routeInfoService.isStarted) {
      this.routeInfoService.createFromRouteInfo(routeInfo, defaultTab);
      delete this.routeInfoService.getTabState(this.routeInfoService.currentIndex).opener;
    } else {
      this.router.navigateByUrl(routeInfo.routerLink);
    }
  }

  /**
   * @example
   * const tabId = this.routeInfoService.navigateOrCreate(['/order-detail'], {queryParams: {id: '123456'}});
   * this.routeInfoService.navigateOrCreate(['/order-detail'], {queryParams: {id: '654321'}}, tabId);
   * @param commands 與router.navigate()同入參
   * @param extras 與router.navigate()同入參
   * @param tabId 要轉跳的頁籤編號，不指定則為新建頁籤
   */
  navigateOrCreate(commands: any[], extras?: NavigationExtras, tabId?: string): string {
    if (this.usingTab === true && this.routeInfoService.isStarted) {
      return this.createOrNavigate(commands, extras, tabId);
    } else {
      this.router.navigate(commands, extras);
      return null;
    }
  }

  /**
   * 返回原頁籤，並決定是否關閉當下頁籤
   * @param commands 路由commands
   * @param extras 路由extras
   * @param closeCurrent 是否關閉當下頁籤
   */
  navigateToOpenerOrCreate(commands: any[], extras?: NavigationExtras, closeCurrent?: boolean): void {
    if (this.usingTab === true && this.routeInfoService.isStarted) {
      this.routeInfoService.navigateToOpenerFromCurrentTab(commands, extras, closeCurrent);
    } else {
      this.router.navigate(commands, extras);
    }
  }
  private createOrNavigate(commands: any[], extras?: NavigationExtras, tabId?: string): string {
    let urlTree: UrlTree;
    let key: string;
    let newTabId: string;
    if (extras) {
      urlTree = this.router.createUrlTree(commands, extras);
    } else {
      urlTree = this.router.createUrlTree(commands);
    }
    key = this.urlSerializer.serialize(urlTree);
    newTabId = this.routeInfoService.createFromRouteInfo({
      id: null,
      name: null,
      routerLink: key
    }, null, tabId);
    return newTabId;
  }

  close(): void {
    this.routeInfoService.closeCurrentTab();
  }

  setTitle(title: string): void {
    if (this.routeInfoService.currentTabInfo) {
      this.routeInfoService.currentTabInfo.title = title;
    }
  }

}

import { ElementRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { DW_TAB_MULTI_OPEN, DW_USING_TAB } from '../../../config/system.config';
import { DwTabRouteReuseService } from './dw-tab-route-reuse.service';
import { IDwRouteInfo } from '../interface/route-info.interface';
import { ListChangedEventArgs } from '../interface/list-changed-event-args.interface';
import { DwRouteInfoStrogeService } from '../storge/routeInfo-storage.service';
import { DwTabRouteConfigService } from './tab-route-config.service';

export enum ListChangedType {
  RouteAdded = 'RouteAdded',
  RouteDataChanged = 'RouteDataChanged',
  RouteSelectedIndexChange = 'RouteSelectedIndexChange',
  RouteDeleted = 'RouteDeleted',
  RouteMoved = 'RouteMoved',
}
@Injectable()
export class DwRouteInfoService {
  private _routes: IDwRouteInfo[] = [];
  set routes(value: IDwRouteInfo[]) {
    this._routes = value;
  }
  get routes(): IDwRouteInfo[] {
    return this._routes;
  }
  private _routeInfosSource = new BehaviorSubject<IDwRouteInfo[]>([]);
  private _tabCreateSource = new BehaviorSubject<boolean>(false);
  private _iframeItemsSource = new BehaviorSubject<any[]>([]);
  private _selectedRoute: IDwRouteInfo;
  private _outletDiv: HTMLElement;
  private _nowOutletDivScrollTop: number = 0;
  private _nowOutletDivScrollHeight: number = 0;
  private _listChangedEventArgs: ListChangedEventArgs;
  private tabRouteConfig: IDwRouteInfo[] = []; // 特殊頁籤設定
  private _tabCreating: boolean = false;
  private _oldTabIndex: number = -1;
  private _operationListMap: any;
  private _authorizedList: any;
  set tabCreating(val: boolean) {
    this._tabCreating = val;
    this._tabCreateSource.next(val);
  } // 遮罩開啟
  tabContent: ElementRef;
  iframeItems: any[] = []; // dwIframe component資料
  scrollStream$: Subscription;
  routeSelectedIndex: number = 0;
  routeInfos$: Observable<any> = this._routeInfosSource.asObservable();
  tabCreating$: Observable<any> = this._tabCreateSource.asObservable();
  iframeItems$: Observable<any> = this._iframeItemsSource.asObservable();
  routeConfigSubscr: Subscription;
  constructor(
    private routeReuseService: DwTabRouteReuseService,
    private location: Location,
    private storgeService: DwRouteInfoStrogeService,
    @Inject(DW_TAB_MULTI_OPEN) private tabMultiOpen: boolean,
    private tabRouteConfigService: DwTabRouteConfigService,
    @Inject(DOCUMENT) private doc: any,
    @Inject(DW_USING_TAB) private _usingTab: boolean,
    private router: Router
  ) {
    let initUrl = this.location.path();
    if (_usingTab) {
      if (initUrl.search('/dwTabRouting') === -1) {
        this.router.navigateByUrl('/dwTabRouting' + initUrl);
      }
    } else {
      if (initUrl.search('/dwTabRouting') !== -1) {
        initUrl = initUrl.replace('/dwTabRouting', '');
        // console.log(initUrl);
        this.router.navigateByUrl(initUrl);
      }
    }
  }
  set outletDiv(value: HTMLElement) {
    this._outletDiv = value;
  }

  private _listChangeCallback: (listChangedEventArgs: ListChangedEventArgs) => void;
  onListChange(callback: (listChangedEventArgs: ListChangedEventArgs) => void): void {
    this._listChangeCallback = callback;
  }
  private _listChange(listChangedEventArgs: ListChangedEventArgs): void {
    if (this._listChangeCallback) {
      this._listChangeCallback(listChangedEventArgs);
    }
  }
  private _callbackChageRoute(): void {

  }
  private _init(): void {
    this._routes = [];
    this.routeSelectedIndex = 0;
    this.routeReuseService.deletedRouteKey = [];
    this.routeReuseService.clearHandlers();
    this._routeInfosSource.next(this._routes);
  }
  clear(): void {
    // 離開dw-tab-component清除tabRoute記錄
    this.storgeService.removeRouteInfo('tabRouteInfos');
    this.storgeService.removeRouteInfo('selectedRoute');
    this.storgeService.removeRouteInfo('routeSelectedIndex');

    if (this.routeConfigSubscr) {
      this.routeConfigSubscr.unsubscribe();
    }

    this._init();
  }
  createDefaultTab(): Promise<boolean> {
    const routeInfoStorge = this.storgeService.getRouteInfo('tabRouteInfos');
    const initUrl = this.location.path();
    // 有storge記錄(網址重整狀態)
    if (JSON.parse(routeInfoStorge) && JSON.parse(routeInfoStorge).length && this._routes.length === 0) {
      return this.createStorgeRouteInfo();
    }
    return new Promise((_resolve: any): void => {
      const routeArr: IDwRouteInfo[] = [];
      this.routeConfigSubscr = this.tabRouteConfigService.routeConfigInfos$.subscribe((res: any) => {
        this.tabRouteConfig = res.tabRouteConfig;
        this._operationListMap = res.operationListMap;
        if (this.tabRouteConfig.length) {
          for (let i = 0; i < this.tabRouteConfig.length; i++) {
            if (this.tabRouteConfig[i].hasOwnProperty('defaultOpen') && this.tabRouteConfig[i].defaultOpen) {
              let routeExistedIndex = -1;
              // 同route不重覆開窗
              for (let j = 0; j < this._routes.length; j++) {
                if (this._routes[j].id === this.tabRouteConfig[i].id) {
                  routeExistedIndex = j;
                  break;
                }
              }
              if (routeExistedIndex === -1) {
                routeArr.push(this.tabRouteConfig[i]);
              }
            }
          }
          // //從login返回頁直接貼網址
          if (initUrl !== '/dwTabRouting') {
            if (initUrl.search('/dwTabRouting') !== -1) {
              routeArr.push({ id: '', menuId: '', name: '', routerLink: initUrl });
            } else {
              routeArr.push({ id: '', menuId: '', name: '', routerLink: '/dwTabRouting' + initUrl });
            }
          }

          if (routeArr.length) {
            for (let i = 0; i < routeArr.length; i++) {
              let routeExistedIndex = -1;
              // 同route不重覆開窗
              for (let j = 0; j < this._routes.length; j++) {
                if (this._routes[j].id === routeArr[i].id) {
                  routeExistedIndex = j;
                  break;
                }
              }
              if (routeExistedIndex === -1) {
                routeArr[i].selected = false;
                this.create(routeArr[i], true);
              }
            }

            this.routeSelectedIndex = routeArr.length - 1;
            // this._routes[this.routeSelectedIndex].selected = true; // 這裏不用設true,讓routeChanged自動去設。
            this._selectedRoute = this._routes[this.routeSelectedIndex];
            // this._selectedRoute.selected = true;
            this.setRouteInfoStorge();
            this._routeInfosSource.next(this._routes);
            this._listChange({
              ListChangedType: ListChangedType.RouteAdded,
              OldIndex: this.routeSelectedIndex,
              NewIndex: this.routeSelectedIndex
            });
            // console.log('default tab nav');
            setTimeout(() => {
              if (this.routeSelectedIndex >= 0) {
                this.router.navigateByUrl(this._selectedRoute.routerLink).then(() => {
                  this._routes.forEach(_route => _route.selected = false);
                  // (this._selectedRoute);
                  // 沒id是從login登入後返回頁進來,給id自動去取name(title)
                  if (!this._selectedRoute.id) {
                    // console.log(this._getReportPrgId(initUrl));
                    const routeInfo = this._getReportPrgId(initUrl);
                    if (routeInfo.id !== '') { // 是報表或外部連結id
                      this._selectedRoute.id = routeInfo.id;
                      this._selectedRoute.menuId = routeInfo.menuId;
                      this._selectedRoute.type = routeInfo.type;
                      // console.log(this._getReportPrgId(initUrl));
                      // 自貼外部連結、報表要再重整一次,才會出現內容
                      this._selectedRoute.routerLink = this._selectedRoute.routerLink.
                        replace(/routeKey=([0-9]*)/, 'routeKey=' + (function (): Date { return new Date(); })().getTime());
                      this.router.navigateByUrl(this._selectedRoute.routerLink).then(() => {
                        this.tabCreating = false;
                        _resolve(true);
                      });
                    } else {
                      this._selectedRoute.id = this.routeReuseService.nowProgramId;
                      // console.log(this._selectedRoute);
                      // console.log(this._routes);
                    }
                  }
                  this._selectedRoute.selected = true;
                  this.setRouteInfoStorge();
                  this._iframeItemsSource.next(this.iframeItems);
                  this.tabCreating = false;
                  setTimeout(() => {
                    _resolve(true);
                  }, 0);
                });
              }
            }, 50);
          }
        } else {
          // 無tab-route-config.ts設定,直接貼網址
          let reloadUrl = this.location.path();
          if (this._routes.length === 0) {
            reloadUrl = (reloadUrl.search('/dwTabRouting') === -1 ? '/dwTabRouting' : '') + reloadUrl;
            this.storgeService.setRouteInfo({
              id: 'tabRouteInfos',
              value: JSON.stringify([{ id: reloadUrl === '/dwTabRouting' ? 'home' : '', name: '', routerLink: reloadUrl }])
            });
            this.createStorgeRouteInfo().then(() => {
              _resolve(true);
            });

          } else {
            _resolve(true);
          }
        }
      }, error => console.log(error));
    });
  }

  createStorgeRouteInfo(): Promise<boolean> {
    // console.log('createStorgeRouteInfo');
    let routeInfoStorge = this.storgeService.getRouteInfo('tabRouteInfos');
    if (routeInfoStorge) { routeInfoStorge = JSON.parse(routeInfoStorge); }
    let reloadUrl = this.location.path();
    const reloadUrlEncode = encodeURIComponent(reloadUrl);
    let hasInStorge = false; // 是否reload已存在的tab

    if (routeInfoStorge.length) {
      return new Promise((_resolve: any): void => {
        this.routeConfigSubscr = this.tabRouteConfigService.routeConfigInfos$.subscribe((res: any) => {
          this._operationListMap = res.operationListMap;
          this.tabRouteConfig = res.tabRouteConfig;

          let _routeSelectedIndex = routeInfoStorge.length - 1;
          for (let i = 0; i < routeInfoStorge.length; i++) {
            if (
              (routeInfoStorge[i].routerLink !== '' && routeInfoStorge[i].routerLink !== '/dwTabRouting' &&
                reloadUrlEncode.search(encodeURIComponent(routeInfoStorge[i].routerLink)) !== -1 &&
                reloadUrl.search('routeKey') !== -1) ||
              (routeInfoStorge.length === 1 && reloadUrl === routeInfoStorge[i].routerLink)
            ) {
              // // url要不一樣,才會觸發router.events,dwIframe的內容才會顯示
              reloadUrl = reloadUrl.replace(/routeKey=([0-9]*)/, 'routeKey=' + (function (): Date { return new Date(); })().getTime());
              routeInfoStorge[i].routerLink = reloadUrl;
              _routeSelectedIndex = i;
              hasInStorge = true;
            } else if (routeInfoStorge[i].routerLink === '/dwTabRouting' && reloadUrl === '/dwTabRouting') { // 首頁不加routeKey
              _routeSelectedIndex = i;
              hasInStorge = true;
            }
            if (!routeInfoStorge[i].id) {
              const routeInfo = this._getReportPrgId(routeInfoStorge[i].routerLink);
              routeInfoStorge[i].id = routeInfo.id;
              routeInfoStorge[i].menuId = routeInfo.menuId;
              routeInfoStorge[i].type = routeInfo.type;
            }

            this.create(routeInfoStorge[i], true);
          }
          // 不存在routeInfoStorge裏 自貼的url路徑
          if (!hasInStorge) {
            reloadUrl = (reloadUrl.search('/dwTabRouting') === -1 ? '/dwTabRouting' : '') + reloadUrl;
            // 重給routeKey值
            if (reloadUrl.search('routeKey') !== -1) {
              reloadUrl = reloadUrl.replace(/routeKey=([0-9]*)/, 'routeKey=' + (function (): Date { return new Date(); })().getTime());
            } else {
              reloadUrl = reloadUrl.split('?')[0] + ';routeKey=' + (function (): Date { return new Date(); })().getTime() +
                (reloadUrl.split('?').length > 1 ? '?' + reloadUrl.split('?')[1] : '');
            }
            const routeInfo = this._getReportPrgId(reloadUrl);
            const newRouteInfo: IDwRouteInfo = {
              id: routeInfo.id,
              menuId: routeInfo.menuId,
              name: '',
              routerLink: reloadUrl,
              type: routeInfo.type
            };
            this.create(newRouteInfo, true);
            _routeSelectedIndex = this._routes.length - 1;
          }
          this.routeSelectedIndex = _routeSelectedIndex;
          this._selectedRoute = this._routes[this.routeSelectedIndex];
          this.setRouteInfoStorge();
          this._routeInfosSource.next(this._routes);
          this._listChange({
            ListChangedType: ListChangedType.RouteAdded,
            OldIndex: this.routeSelectedIndex,
            NewIndex: this.routeSelectedIndex
          });

          setTimeout(() => {
            if (this.routeSelectedIndex >= 0) {
              this.router.navigateByUrl(this._selectedRoute.routerLink).then(() => {
                this._routes.forEach(_route => _route.selected = false);
                this._selectedRoute.selected = true;
                if (!this._selectedRoute.id) {
                  this._selectedRoute.id = this.routeReuseService.nowProgramId;
                }
                this._iframeItemsSource.next(this.iframeItems);
                // 自貼外部連結、報表要再重整一次,才會出現內容
                if ((reloadUrl.search('gen-reports') !== -1 || reloadUrl.search('fr-reports') !== -1) && !hasInStorge) {
                  this._selectedRoute.routerLink = this._selectedRoute.routerLink.
                    replace(/routeKey=([0-9]*)/, 'routeKey=' + (function (): Date { return new Date(); })().getTime());
                  this.router.navigateByUrl(this._selectedRoute.routerLink).then(() => {
                    this.tabCreating = false;
                    _resolve(true);
                  });
                } else {
                  this.tabCreating = false;
                  _resolve(true);
                }
                this.setRouteInfoStorge();
              });
            }
          }, 50);
        });
      });
    } else {
      return new Promise((_resolve: any): void => {
        _resolve(true);
      });
    }
  }
  private _getReportPrgId(url: string): IDwRouteInfo {

    let prgId = '';
    const newRouteInfo: IDwRouteInfo = {
      id: '',
      menuId: '',
      name: '',
      routerLink: '',
      type: ''
    };
    // 外部連結
    if (url.search('gen-reports') !== -1) {
      const regEx = /.*gen-reports\/(.*)[?|;].*/g;
      const match = regEx.exec(url);
      if (!!match) {
        prgId = match[1];
      } else {
        if (url.split('gen-reports/').length) {
          prgId = url.split('gen-reports/')[1];
        }
      }
      newRouteInfo.id = prgId;
      newRouteInfo.menuId = prgId;
      newRouteInfo.type = 'externalUrl';
    } else if (url.search('fr-reports') !== -1) {
      // 報表
      const regEx = /.*fr-reports\/(.*)[?|;]+.*/g;
      const match = regEx.exec(url);
      if (!!match) {
        prgId = match[1];
      } else {
        if (url.split('fr-reports/').length) {
          prgId = url.split('fr-reports/')[1];
        }
      }
      newRouteInfo.id = this._operationListMap[prgId] ? this._operationListMap[prgId].code : prgId;
      newRouteInfo.type = 'fineReport';
    } else if (!prgId) {
      // 自貼的url
      Object.keys(this._operationListMap).forEach(name => {
        if (url.search(name) !== -1) {
          prgId = name;
        }
      });
      // prgId = this.routeReuseService.nowProgramId;
      newRouteInfo.id = prgId;
    }

    return newRouteInfo;
  }
  // 加參數
  private _addParams(newUrl: string, route: IDwRouteInfo): string {
    if (!!route.queryParams) {
      let urlParams = '';
      Object.keys(route.queryParams).forEach((key) => {
        urlParams = (!!urlParams ? urlParams + '&' : '') + (key + '=' + route.queryParams[key]);
      });
      if (newUrl.search('\\?') !== -1) { // 原本就有帶參數
        newUrl = newUrl.split('?')[0] + '?' + (!!urlParams ? urlParams + '&' : '') + newUrl.split('?')[1];
      } else {
        newUrl = newUrl + '?' + urlParams;
      }
    }
    return newUrl;

  }
  create(route: IDwRouteInfo, defaultTab?: boolean): void {
    // const regEx = /^.*?;routeKey=([0-9]*)/g;
    route = Object.assign({}, route);
    let newUrl = '';

    const regEx = /^[\/]{0,1}dwTabRouting\/.*/g;
    const match = regEx.exec(route.routerLink);
    const emptyRouterLink = route.routerLink === '' || route.routerLink === '/' || route.routerLink === undefined;
    const routeKey = (emptyRouterLink ? '' : ';routeKey=' + (function (): Date { return new Date(); })().getTime()); // 記錄route用 primary key
    const routerLink = (emptyRouterLink ? '' : route.routerLink);
    newUrl = (!!match ? '' : '/dwTabRouting');
    if (route.routerLink.search('routeKey') === -1 && route.routerLink !== '/dwTabRouting') {
      if (routerLink.split('?').length > 1) {
        newUrl = newUrl + routerLink.split('?')[0] + routeKey + '?' + routerLink.split('?')[1];
      } else {
        newUrl = newUrl + routerLink + routeKey;
      }

    } else {
      newUrl = route.routerLink;
    }


    const newRoute = Object.assign({}, route);
    newRoute.routerLink = this._addParams(newUrl, route);
    // 第二個route以上觸發此fn
    this._callbackChageRoute = function (): void {
      this.router.navigateByUrl(this._selectedRoute.routerLink);
    };

    // 不在dwRoute路由路徑下,要先清空_menuItems
    if (!this._isAtDwRoute()) {
      this._init();
    }
    this.tabCreating = true;
    // 預開tab,先不navigateByUrl,只先存資料給this._routes
    if (defaultTab) {
      this._routes.push(newRoute);
    } else {
      ((_route: any): void => {
        setTimeout(() => {
          this._add(_route);
        }, 500);
      })(newRoute);
    }


  }
  private _add(route: IDwRouteInfo): void {
    let routeExistedIndex = -1;
    let canOpen = this.tabMultiOpen; // system.config全域設定是否重覆開啟
    // 個別設定可否重覆開啟
    if (this.tabRouteConfig.length) {
      for (let i = 0; i < this.tabRouteConfig.length; i++) {
        if (this.tabRouteConfig[i].id === route.id && this.tabRouteConfig[i].hasOwnProperty('canMultiOpen')) {
          canOpen = this.tabRouteConfig[i].canMultiOpen;
          break;
        }
      }
    }
    // 要開啟route是否已存在this._routes裏
    let route_link = route.routerLink.split(';')[0].replace('/dwTabRouting', '');
    for (let j = 0; j < this._routes.length; j++) {
      route_link = (route_link === '' ? '/' : route_link);
      const nowLink = this._routes[j].routerLink.split(';')[0].replace('/dwTabRouting', '');
      // console.log(nowLink);
      // if (this._routes[j].id === route.id) {
      if (route_link === nowLink) {
        routeExistedIndex = j;
        break;
      }
    }
    if (routeExistedIndex === -1) {
      canOpen = true;
    }


    // if (this.tabRouteConfig.length) {
    //   for (let i = 0; i < this.tabRouteConfig.length; i++) {
    //     route_link = (route_link === '' ? '/' : route_link);
    //     const nowLink = this.tabRouteConfig[i].routerLink.split(';')[0].replace('/dwTabRouting', '');
    //     if (route_link === nowLink) {
    //     // if (route.id === this.tabRouteConfig[i].id) {
    //       const routeConfig = Object.assign({}, this.tabRouteConfig[i]);
    //       routeConfig.routerLink = route.routerLink;
    //       route = Object.assign(route, routeConfig);
    //       // 將設定copy給新route
    //       if (!this.tabRouteConfig[i].canMultiOpen && routeExistedIndex !== -1) {
    //         canOpen = false; // 有設定不能重覆開啟,且已有存在tab
    //       } else {
    //         canOpen = true;
    //       }
    //       break;
    //     }
    //   }
    // }
    if (canOpen) {
      this._routes.push(route);
      this.routeSelectedIndex = this._routes.length - 1;
    } else {
      this.routeSelectedIndex = routeExistedIndex;
      this.tabCreating = false;
    }
    this._selectedRoute = this._routes[this.routeSelectedIndex];
    this.setRouteInfoStorge();
    this._routeInfosSource.next(this._routes);
    this._listChange({
      ListChangedType: ListChangedType.RouteAdded,
      OldIndex: this.routeSelectedIndex,
      NewIndex: this.routeSelectedIndex
    });
    // if (this.tabContent) {
    //   this.tabContent.nativeElement.style.display = 'none';
    // }
    // 第一個tab直接navigate
    if (this._routes.length === 1 || !this._isAtDwRoute()) {
      this.router.navigateByUrl(route.routerLink).then(() => {
        // console.log('in add');
        if (this.tabContent) { this.tabContent.nativeElement.style.display = 'block'; }
        this.tabCreating = false;
      });
    } else {
      // 讓tab先切換,再切換路由
      ((_routerLink: any): void => {
        setTimeout(() => {
          if (this.routeSelectedIndex) {
            //// 在routeSelectedIndexChange()重覆了,先取消此動作
            // this.router.navigateByUrl(this._selectedRoute.routerLink).then(() => {
            //   this.tabContent.nativeElement.style.display = 'block';
            // });
          }
        }, 300);
      })(this._selectedRoute.routerLink);

    }

  }
  private _isAtDwRoute(): boolean {
    // console.log(this.location.path());
    return this.location.path().search('dwTabRouting') !== -1;
  }

  remove(route: IDwRouteInfo): void {
    // console.log('remove');
    const idx = this._routes.indexOf(route);
    // const activeIdx = this._routes.findIndex(_route => _route.routerLink === route.routerLink);
    const isColseActiveRoute = (this._routes[idx].selected);
    this._routes.splice(idx, 1);
    this._afterRemoveRoute(route, idx, isColseActiveRoute);
    this._listChange({
      ListChangedType: ListChangedType.RouteDeleted,
      OldIndex: idx,
      NewIndex: idx
    });

    const i = this.iframeItems.findIndex((item: any) => {
      return item.routerLink === route.routerLink;
    });

    if (i >= 0) {
      this.iframeItems.splice(i, 1);
    }
  }

  private _afterRemoveRoute(closedroute: IDwRouteInfo, closedRouteIndex: number, isColseActiveRoute: boolean): void {
    // console.log('afterremove');
    const regEx = /^.*?;routeKey=([0-9]*)/g;
    const match = regEx.exec(closedroute.routerLink);
    // routerLink有routeKey=xxxx,需設該handler為null
    if (!!match) {
      this.routeReuseService.deletedRouteKey.push(match[1]);
      this.routeReuseService.setHandler(match[1]);
    }
    if (!this._routes.length) {
      this.router.navigate(['']);
    } else {
      // 關掉的為active route
      if (isColseActiveRoute) {
        // console.log(Object.assign([],this._routes));
        // 切換到下個route
        this.routeSelectedIndex = closedRouteIndex >= this._routes.length ? closedRouteIndex - 1 : closedRouteIndex;
        this._selectedRoute = this._routes[this.routeSelectedIndex];
        // console.log(this._selectedRoute);
        this._oldTabIndex = -1;
        // this._selectedRoute.selected = true;
        // const selectedRoute = Object.assign({}, this._selectedRoute);
        // tab切換後再切換路由
        // if (this.tabContent) { this.tabContent.nativeElement.style.display = 'none'; } // 隱藏會讀取不到scrollTop值,先不隱藏了
        setTimeout(() => {
          if (this.location.path().search(this._selectedRoute.routerLink) === -1) {
            this._selectedRoute.selected = true;
            this._routeNavigater(this._selectedRoute).then(() => {
              if (this.tabContent) {
                setTimeout(() => {
                  this.tabContent.nativeElement.style.display = 'block';
                }, 0);
              }
            }
            );
          }
        }, 100);
      } else {
        this.routeSelectedIndex = this._routes.findIndex(_route => _route.selected === true);
      }
    }
    this.setRouteInfoStorge();
    // this._routeInfosSource.next(this._routes);

  }
  routeChange(route: IDwRouteInfo): void {
    // console.log('routechange');
    // 按下當前的tab
    if (route.routerLink === this._selectedRoute.routerLink) {
      return;
    }
    // this.doc.querySelector('.dw-f-tab-info-wp').style.display = 'none';
    // if (this.tabContent) { this.tabContent.nativeElement.style.display = 'none'; // 隱藏會讀取不到scrollTop值,先不隱藏了

    // 避免切換時閃爍,如果100毫秒內網址仍沒切換過去,再顯示黑遮罩
    setTimeout(() => {
      if (this.location.path() !== route.routerLink) {
        this.tabCreating = true;
      }
    }, 100);
    const newUrl = this.location.path();
    // 切換新route前,先記錄路徑
    if (this._selectedRoute.hasOwnProperty('routerLink')) {
      if (this._outletDiv) {
        this._selectedRoute.scrollTop = this._outletDiv.scrollTop;
        this._selectedRoute.scrollHeight = this._outletDiv.scrollHeight;
      }
      this._selectedRoute.routerLink = newUrl;
    }
    const oldSelectedIdx = this.getSelectedRouteIndex();

    this._listChange({
      ListChangedType: ListChangedType.RouteDataChanged,
      OldIndex: oldSelectedIdx,
      NewIndex: oldSelectedIdx
    });
    // 記錄完this._selectedRoute資料改為新的route
    this._selectedRoute = route;
    this.setRouteInfoStorge();
    // this.routeSelectedIndex = this.getSelectedRouteIndex();
    // this.onRouteChanged(this._selectedRoute);
  }

  routeChanged(route: IDwRouteInfo): void {
    // console.log('routechanged');
    if (!this._routes.length) {
      return;
    }
    // if (this.tabContent) { this.tabContent.nativeElement.style.display = 'none'; }
    // this.tabCreating = true;
    const idx: number = this._routes.findIndex(_route => _route.selected === true);
    this._oldTabIndex = idx;
    // // 切換新route前,舊頁籤先記錄資訊
    if (idx >= 0) {
      if (this._routes[idx].hasOwnProperty('routerLink')) {
        if (this._outletDiv) {
          this._routes[idx].scrollTop = this._outletDiv.scrollTop;
          this._routes[idx].scrollHeight = this._outletDiv.scrollHeight;
        }
      }
    }
    // const newUrl = this.location.path();
    // // 切換新route前,先記錄路徑
    // if (idx >= 0) {
    //   if (this._routes[idx].hasOwnProperty('routerLink')) {
    //     console.log(this._routes[idx]);
    //     this._routes[idx].routerLink = newUrl;
    //     if (this._outletDiv) {
    //       this._routes[idx].scrollTop = this._outletDiv.nativeElement.scrollTop;
    //       this._routes[idx].scrollHeight = this._outletDiv.nativeElement.scrollHeight;
    //     }
    //     console.log(newUrl);
    //     console.log(this._routes[idx]);
    //   }
    // }
    this._routes.forEach(_route => _route.selected = false);
    route.selected = true;
    this._selectedRoute = route;

    this.routeSelectedIndex = this.getSelectedRouteIndex();
    this.setRouteInfoStorge();
    this._listChange({
      ListChangedType: ListChangedType.RouteSelectedIndexChange,
      OldIndex: idx,
      NewIndex: this.routeSelectedIndex
    });
    // this.routeSelectedIndexChange();
  }
  routeSelectedIndexChange(): void {
    // console.log('routeSelectedIndexChange');
    if (this._selectedRoute.hasOwnProperty('routerLink') && this._selectedRoute.routerLink !== this.location.path()) {
      const oldUrl = this.location.path();
      // navigater新route路徑前,舊頁籤先記錄路徑
      if (this._oldTabIndex >= 0) {
        if (this._routes[this._oldTabIndex].hasOwnProperty('routerLink')) {
          this._routes[this._oldTabIndex].routerLink = oldUrl;
        }
      }
      this._routeNavigater(this._selectedRoute).then(() => {
        if (this.tabContent) {
          setTimeout(() => {
            this.tabContent.nativeElement.style.display = 'block';
          }, 0);
        }
        this.tabCreating = false;
      }
      );
      this.setRouteInfoStorge();
    } else {
      this.tabCreating = false;
      if (this.tabContent) {
        setTimeout(() => {
          this.tabContent.nativeElement.style.display = 'block';
        }, 0);
      }
    }
  }
  private _routeNavigater(route: IDwRouteInfo): Promise<boolean> {
    // console.log('_routeNavigater');
    return new Promise((_resolve: any): void => {
      if (route.hasOwnProperty('routerLink')) {
        const promise = this.router.navigateByUrl(route.routerLink);
        if (this._outletDiv) {
          promise.then(() => {
            this._outletDiv.scrollTop = 0;
            // console.log(this._outletDiv);
            if (route.scrollTop) {
              // 讓css先render內容到固定處，再捲動
              setTimeout(() => {
                // console.log(this._outletDiv.nativeElement.scrollHeight);
                this._outletDiv.scrollTop = route.scrollTop;
              }, 0);
            }
            _resolve(true);
          });
        } else {
          _resolve(true);
        }
      } else {
        _resolve(true);
      }
    });
  }
  public setRouteInfoStorge(): void {
    // console.log('setRouteInfoStorge');
    this.storgeService.setRouteInfo({ id: 'tabRouteInfos', value: JSON.stringify(this._routes) }); // 储存this._routes
    this.storgeService.setRouteInfo({ id: 'selectedRoute', value: JSON.stringify(this._selectedRoute) }); // 储存this._selectedRoute
    this.storgeService.setRouteInfo({ id: 'routeSelectedIndex', value: this.routeSelectedIndex }); // 储存routeSelectedIndex
  }

  getRoute(routerLink: string): IDwRouteInfo[] {
    return this._routes.filter(route => route['routerLink'] === routerLink);
  }
  getSeletedroute(routerLink: string): IDwRouteInfo[] {
    return this._routes.filter(route => route.selected = true);
  }
  getSelectedRouteIndex(): number {
    return this._routes.findIndex(_route => _route.selected === true);
  }
  hasChangeTabCallback(): void {
    this._callbackChageRoute();
  }

}

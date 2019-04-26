import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { IDwMenu } from '../interface/menu.interface';
import { DwMenuService } from '../service/menu.service';
import { DwRecursiveMenuService } from '../service/recursive-menu.service';
import { DwRouteInfoStrogeService } from '../../dw-tab-routing/storge/routeInfo-storage.service';
import { DwRouterInfoService } from '../../../router-info/router-info.service';
import { DwLanguageService } from '../../language/service/language.service';
import { IDwLoadMaskCfg, IDwLoadMaskItem } from '../../loading/interface/loading.interface';
import { DwMenuLoadingMaskService } from '../service/menu-loading-mask.service';

@Component({
  selector: 'dw-recursive-menu',
  templateUrl: './recursive-menu.component.html',
  styleUrls: ['./recursive-menu.component.css']
})
export class DwRecursiveMenuComponent implements OnInit, OnDestroy {
  isInit: boolean;
  menuList: IDwMenu[] = [];
  menuInitSubscription: Subscription;
  menuListSubscription: Subscription;
  menuLoadingSubscription: Subscription;
  mode: string;
  selectable: boolean = true;
  private _routeSelectMenu: boolean = false; // 路由影響選單選中節點(TabMenu是否和Menu連動),預設false
  inlineCollapsed: boolean;
  style: string;
  theme: string; // Menu樣式：'dark', light'
  language: string = ''; // 語言別
  loadingMask: IDwLoadMaskCfg;

  @Input() template: any;

  @Input()
  set dwInlineCollapsed(dwInlineCollapsed: boolean) {
    this.inlineCollapsed = dwInlineCollapsed || false;
  }

  @Input()
  set dwMode(dwMode: string) {
    this.mode = dwMode || 'vertical';
  }

  @Input()
  set dwSelectable(dwSelectable: boolean) {
    this.selectable = dwSelectable || false;
  }

  @Input()
  set routeSelectMenu(routeSelectMenu: boolean) {
    this._routeSelectMenu = routeSelectMenu || false;
  }

  @Input()
  set dwStyle(dwStyle: string) {
    this.style = dwStyle || '';
  }

  @Input()
  set dwTheme(dwTheme: string) {
    this.theme = dwTheme || 'dark';
  }

  constructor(
    private menuService: DwMenuService,
    private languageService: DwLanguageService,
    private recursiveMenuService: DwRecursiveMenuService,
    // private recursiveMenuStorageService: DwRecursiveMenuStorageService
    private routeInfoStrogeService: DwRouteInfoStrogeService,
    private activatedRoute: ActivatedRoute,
    private dwRouterInfoService: DwRouterInfoService,
    private dwMenuLoadingMaskService: DwMenuLoadingMaskService
  ) {
    this.isInit = false;
  }

  ngOnInit(): void {
    this.recursiveMenuService.selectable = this.selectable;
    this.recursiveMenuService.routeSelectMenu = this._routeSelectMenu;

    this.menuLoadingSubscription = this.dwMenuLoadingMaskService.getLoadingMask().subscribe(
      (loadingMaskItem: IDwLoadMaskItem) => {
        const config = Object.assign({}, loadingMaskItem.config);
        this.loadingMask = config;
      }
    );

    this.menuInitSubscription = this.menuService.getMenu().subscribe(
      (data: IDwMenu[]) => {
        this.recursiveMenuService.menuList = data;
      },
      error => {
        console.log(error);
      }
    );

    this.menuListSubscription = this.recursiveMenuService.$menuList.subscribe(
      menuList => {
        this.menuList = menuList;

        // 路由影響選單選中節點(TabMenu是否和Menu連動)
        if (this.selectable && this._routeSelectMenu) {
          // 初始化時自動選擇節點
          if (!this.isInit && this.menuList.length > 0) {
            this.isInit = true;
            // // 從Menu上次點選記錄查節點(自貼網址時會和TabMenu不一致)
            // const recursiveMenuStorage = this.recursiveMenuStorageService.get();
            // if (recursiveMenuStorage) {
            //   const selectMenuId = recursiveMenuStorage.selectMenuId ? recursiveMenuStorage.selectMenuId : null;
            //   if (selectMenuId) {
            //     this.recursiveMenuService.onSelect(selectMenuId);
            //   }
            // }

            // 從TabMenu上次點選記錄查節點
            const selectedRoute = JSON.parse(this.routeInfoStrogeService.getRouteInfo('selectedRoute'));

            if (selectedRoute) {
              let selectMenuId = '';
              if (selectedRoute.hasOwnProperty('menuId')) {
                selectMenuId = selectedRoute.menuId;
                this.recursiveMenuService.onSelect(selectMenuId);
              }
            } else {
              // 從路由資訊中的作業編號查節點
              const programId = this.dwRouterInfoService.routerProgramId(this.activatedRoute);
              if (programId) {
                const matchMenu = this.recursiveMenuService.getMenuItemByProgramId(this.menuList, programId);
                if (matchMenu) {
                  this.recursiveMenuService.onSelect(matchMenu.id);
                }
              }
            }
            // console.log(this.router.url); // '/dw-demo1/dw-order/dw-order-modify?orderId=No_000001'
          }
        }
      },
      error => {
        this.menuList = [];
        console.log(error);
      }
    );

    // 取得最新語言別
    this.languageService.language$.subscribe(
      lang => {
        this.language = lang;
      }
    );
  }

  ngOnDestroy(): void {
    this.isInit = false;
    // this.recursiveMenuStorageService.remove();

    if (this.menuInitSubscription) {
      this.menuInitSubscription.unsubscribe();
    }

    if (this.menuListSubscription) {
      this.menuListSubscription.unsubscribe();
    }

    if (this.menuLoadingSubscription) {
      this.menuLoadingSubscription.unsubscribe();
    }
  }
}

import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { DW_MENU_JSON } from '../../../config/system.config';
import { IDwMenu, IDwMenuConfigMap } from '../interface/menu.interface';
import { IDwMenuService } from '../interface/menu-service.interface';
import { DwMenuAttributeService } from './menu-attribute.service';
import { DwAuthService } from '../../../auth/auth.service';
import { DwMenuLoadingMaskService } from './menu-loading-mask.service';

/**
 * 取使用者選單，用於呈現
 */
@Injectable()
export class DwMenuService implements IDwMenuService {
  private menu$: BehaviorSubject<IDwMenu[]>; // 選單資料
  private menuConfigMap$: BehaviorSubject<any>; // 選單設定對應表
  private menuList: IDwMenu[];
  private menuConfigMapList: IDwMenuConfigMap;

  constructor(
    @Inject(DW_MENU_JSON) private dwMenuJson: IDwMenu[], // Menu靜態設定檔
    private dwMenuAttributeService: DwMenuAttributeService,
    private dwMenuLoadingMaskService: DwMenuLoadingMaskService,
    private authService: DwAuthService
  ) {
    this.menuList = null;
    this.menuConfigMapList = null;
    this.menu$ = new BehaviorSubject<IDwMenu[]>(this.menuList);
    this.menuConfigMap$ = new BehaviorSubject<any>(this.menuConfigMapList);
    let isInit = false;

    this.authService.isLoggedIn$.subscribe(
      value => {
        if (!value) {
          isInit = false;
          this.menuList = [];
          this.menuConfigMapList = <IDwMenuConfigMap>null;
          this.menu$.next(this.menuList);
          this.menuConfigMap$.next(this.menuConfigMapList);
        } else if (!isInit) {
          isInit = true;
          const loadingMaskId = this.dwMenuLoadingMaskService.auto(null);

          try {
            const menuJson = JSON.parse(JSON.stringify(dwMenuJson));
            if (Array.isArray(menuJson)) {
              this.menuList = menuJson;
            } else {
              this.menuList = [];
            }

            this.menuConfigMapList = <IDwMenuConfigMap>{};
            this.menuList = this.menuInit(this.menuList, this.menuConfigMapList, 1);
            this.menu$.next(this.menuList);
            this.menuConfigMap$.next(Object.assign({}, this.menuConfigMapList));
            this.dwMenuLoadingMaskService.hide(loadingMaskId);
          } catch (error) {
            console.log(error);
            this.menu$.next(this.menuList);
            this.menuConfigMap$.next(Object.assign({}, this.menuConfigMapList));
            this.dwMenuLoadingMaskService.hide(loadingMaskId);
          }
        }
      }
    );
  }

  public getMenu(): Observable<IDwMenu[]> {
    return this.menu$.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }

  public getMenuConfigMap(): Observable<IDwMenuConfigMap> {
    return this.menuConfigMap$.asObservable().pipe(
      distinctUntilChanged() // 有改變時才廣播
    );
  }

  private menuInit(menuDataSource: IDwMenu[], menuConfigMapList: IDwMenuConfigMap, level: number): IDwMenu[] {
    const menuList: IDwMenu[] = [];
    const len = menuDataSource.length;

    for (let i = 0; i < len; i++) {
      const menuItem: IDwMenu = JSON.parse(JSON.stringify(menuDataSource[i]));
      this.dwMenuAttributeService.default(menuItem, level);

      if (menuItem.type === 'fineReport' || (menuItem.type === 'externalUrl' && menuItem.openMode === 'iframe')) {
        menuItem.programId = menuItem.id;
      }

      menuConfigMapList[menuItem.id] = {
        // type: obj.type, // 類型
        // iconClass: obj.iconClass,
        // level: obj.level, // 節點層級，從1開始
        // programId: obj.programId, // 作業編號
        // url: obj.url, // 連結網址
        // parameter: obj.parameter // 作業參數

        type: menuItem.type, // 類型. 目錄='category', 作業='program', 'fineReport':報表, 外部網頁(另開)='externalUrl'
        iconClass: menuItem.iconClass, // 圖示樣式
        open: menuItem.open, // 是否展開。預設false
        disabled: menuItem.disabled, // 是否禁用。預設false
        selected: menuItem.selected, // 是否被選中。預設false
        programId: menuItem.programId, // 作業編號。type='program'時設定。
        code: menuItem.programId,
        url: menuItem.url ? menuItem.url : '', // 連結網址。type='externalUrl'時，設定外部網頁網址
        openMode: menuItem.openMode ? menuItem.openMode : '',
        parameter: menuItem.parameter,
        level: menuItem.level
      };

      // this.propertyRegulate(menuItem);

      if (menuItem.child.length > 0) {
        menuItem.child = this.menuInit(menuItem.child, menuConfigMapList, level + 1);
      }

      menuList.push(menuItem);
    }

    return menuList;
  }

  /**
   * 屬性校正，刪除多餘的屬性
  //  */
  // private propertyRegulate(item: any): void {
  //   delete item['parameter'];
  //   delete item['action'];
  //   delete item['page'];
  //   delete item['programBase'];
  // }
}

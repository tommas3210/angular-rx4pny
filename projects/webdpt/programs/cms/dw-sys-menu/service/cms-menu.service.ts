import { Injectable, isDevMode } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import {
  IDwMenu, IDwMenuService, DwMenuAttributeService, IDwMenuParam, DwAuthService, IDwMenuConfigMap,
  DwDapHttpClient, DwHttpClientOptionsService, DwMenuLoadingMaskService, dwMenuDataDev,
  DwMenuLangLoaderService, DwFinereportLangLoaderService
} from '@webdpt/framework';

/**
 * 取使用者選單，用於呈現
 */
@Injectable()
export class DwCmsMenuService implements IDwMenuService {
  private menu$: BehaviorSubject<IDwMenu[]>; // 選單資料
  private menuConfigMap$: BehaviorSubject<any>; // 選單設定對應表
  private menuList: IDwMenu[];
  private menuConfigMapList: IDwMenuConfigMap;
  private _dwMenuDataDev = JSON.parse(JSON.stringify(dwMenuDataDev));

  constructor(
    private dwReportLangLoaderService: DwFinereportLangLoaderService, // 初始化報表名稱翻譯檔載入器
    private dwMenuLangLoaderService: DwMenuLangLoaderService, // 初始化選單翻譯檔載入器
    private dwMenuAttributeService: DwMenuAttributeService,
    private http: DwDapHttpClient,
    private dwHttpClientOptionsService: DwHttpClientOptionsService,
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
          this.menuList = [];
          this.menuConfigMapList = <IDwMenuConfigMap>{};
          const loadingMaskId = this.dwMenuLoadingMaskService.auto(null);
          let options = {};
          options = this.dwHttpClientOptionsService.setLoadMaskCfg(options, false);

          this.http.get('DWSys/menu/authority', options).subscribe(
            (response: any) => {
              let respData = null;

              if (response.data) {
                respData = response.data.dw_menu;
              }

              if (!Array.isArray(respData)) {
                respData = [];
              }

              if (isDevMode()) {
                respData = this._dwMenuDataDev.concat(respData);
              }

              this.menuList = this.menuInit(respData, 1);

              this.menu$.next(this.menuList);
              this.menuConfigMap$.next(Object.assign({}, this.menuConfigMapList));
              this.dwMenuLoadingMaskService.hide(loadingMaskId);
            },
            error => {
              console.log(error);
              this.menu$.next(this.menuList);
              this.menuConfigMap$.next(Object.assign({}, this.menuConfigMapList));
              this.dwMenuLoadingMaskService.hide(loadingMaskId);
            }
          );
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
    // const menuConfigMap = {};
    // return this.getMenu().pipe(
    //   map(
    //     menuList => {
    //       this.menuConfigMapInit(menuList, menuConfigMap);
    //       return menuConfigMap;
    //     }
    //   )
    // );
  }

  private menuInit(menuDataSource: Array<any>, level: number): IDwMenu[] {
    const menuList: IDwMenu[] = [];
    const len = menuDataSource.length;

    for (let i = 0; i < len; i++) {
      const source: any = JSON.parse(JSON.stringify(menuDataSource[i]));
      const menuItem: IDwMenu = {
        id: source.id, // 菜單編號
        type: source.type, // 類型. 目錄='category', 作業='program', 'fineReport':報表, 外部網頁(另開)='externalUrl'
        iconClass: source.icon_class, // 圖示樣式
        open: source.default_expand, // 是否展開。預設false
        programId: source.code, // 作業編號。type='program'時設定。
        code: source.code,
        url: source.url ? source.url : '', // 連結網址。type='externalUrl'時，設定外部網頁網址
        openMode: source.open_mode ? source.open_mode : '',
        parameter: [],
        child: [] // 子節點
      };

      if (menuItem.type === 'fineReport' || (menuItem.type === 'externalUrl' && menuItem.openMode === 'iframe')) {
        menuItem.programId = menuItem.id;
      }

      if (source.child.hasOwnProperty('dw_menu_parameter')) {
        source.child.dw_menu_parameter.forEach(
          element => {
            const eltParam: IDwMenuParam = {
              name: element.name, // 參數編號
              value: element.value // 值
            };

            menuItem.parameter.push(eltParam);
          }
        );
      }

      this.dwMenuAttributeService.default(menuItem, level);

      // this.propertyRegulate(menuItem);

      if (source.child.dw_menu.length > 0) {
        menuItem.child = this.menuInit(source.child.dw_menu, level + 1);
      }

      let isNewItem = true;

      // 目錄下沒有子節點則不顯示目錄.例如模組下的作業都沒有權限時
      if (menuItem.type === 'category' && menuItem.child.length === 0) {
        isNewItem = false;
      }

      if (isNewItem) {
        menuList.push(menuItem);

        if (this.menuConfigMapList) {
          this.menuConfigMapList[menuItem.id] = {
            type: menuItem.type, // 類型. 目錄='category', 作業='program', 'fineReport':報表, 外部網頁(另開)='externalUrl'
            iconClass: menuItem.iconClass, // 圖示樣式
            open: menuItem.open, // 是否展開。預設false
            disabled: menuItem.disabled, // 是否禁用。預設false
            selected: menuItem.selected, // 是否被選中。預設false
            programId: menuItem.programId, // 作業編號。type='program'時設定。
            code: menuItem.code,
            url: menuItem.url ? menuItem.url : '', // 連結網址。type='externalUrl'時，設定外部網頁網址
            openMode: menuItem.openMode ? menuItem.openMode : '',
            parameter: menuItem.parameter,
            level: menuItem.level
          };
        }
      }
    }

    return menuList;
  }

  // private menuConfigMapInit(menuList: IDwMenu[], menuConfigMap: any): void {
  //   const len = menuList.length;

  //   for (let i = 0; i < len; i++) {
  //     const menuItem: IDwMenu = JSON.parse(JSON.stringify(menuList[i]));
  //     menuConfigMap[menuItem.id] = {
  //       type: menuItem.type, // 類型. 目錄='category', 作業='program', 'fineReport':報表, 外部網頁(另開)='externalUrl'
  //       iconClass: menuItem.iconClass, // 圖示樣式
  //       open: menuItem.open, // 是否展開。預設false
  //       programId: menuItem.programId, // 作業編號。type='program'時設定。
  //       code: menuItem.code,
  //       url: menuItem.url ? menuItem.url : '', // 連結網址。type='externalUrl'時，設定外部網頁網址
  //       openMode: menuItem.openMode ? menuItem.openMode : '',
  //       parameter: menuItem.parameter,
  //       level: menuItem.level
  //     };

  //     if (menuItem.child.length > 0) {
  //       this.menuConfigMapInit(menuItem.child, menuConfigMap);
  //     }
  //   }
  // }

  /**
   * 屬性校正，刪除多餘的屬性
   */
  // private propertyRegulate(item: any): void {
  //   delete item['parameter'];
  //   delete item['action'];
  //   delete item['page'];
  //   delete item['programBase'];
  // }
}

// 'DWSys/menu/authority' 返回參數
// interface RootObject {
//   data: RespData;
//   message: string;
//   success: boolean;
// }

// interface RespData {
//   dw_menu: Dwmenu2[];
// }

// interface Dwmenu2 {
//   child: RespData[];
//   code: string;
//   default_expand: boolean;
//   icon_class: string;
//   id: string;
//   sequence: number;
//   type: string;
// }

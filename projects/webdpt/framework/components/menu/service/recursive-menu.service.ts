import { Observable } from 'rxjs/internal/Observable';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IDwMenu } from '../interface/menu.interface';
import { DwMenuExecuteService } from './menu-execute.service';

@Injectable()
export class DwRecursiveMenuService {
  private _menuList: IDwMenu[];
  private _selectable: boolean;
  private _routeSelectMenu: boolean = false; // 路由影響選單選中節點(TabMenu是否和Menu連動),預設false
  private _$menuList: BehaviorSubject<IDwMenu[]>;

  constructor(
    private menuExecuteService: DwMenuExecuteService,
    // @Inject(DW_USING_TAB) private _usingTab: boolean
    // private recursiveMenuStorageService: DwRecursiveMenuStorageService
  ) {
    this._menuList = [];
    this._$menuList = new BehaviorSubject(this._menuList);
  }

  set selectable(selectable: boolean) {
    this._selectable = selectable || false;
  }

  get selectable(): boolean {
    return this._selectable;
  }

  set routeSelectMenu(routeSelectMenu: boolean) {
    this._routeSelectMenu = routeSelectMenu || false;
  }

  get routeSelectMenu(): boolean {
    return this._routeSelectMenu;
  }

  set menuList(menuList: IDwMenu[]) {
    this._menuList = menuList;
    this._$menuList.next(this._menuList);
  }

  get menuList(): IDwMenu[] {
    return this._menuList;
  }

  get $menuList(): Observable<IDwMenu[]> {
    return this._$menuList.asObservable();
  }

  // 點選Menu
  public onClickItem(menuItem: IDwMenu): void {
    if (!menuItem.disabled) {
      // if (this._usingTab) {
      //   this.onSelect(menuItem.id); // 若需要儲存Menu才做，避免消耗效能
      // }

      this.menuExecuteService.menuClick(menuItem);
    }
  }

  /**
   * 選中節點
   * 畫面[dwSelected]屬性無法雙向綁定，需要自行改變數中的屬性
   */
  public onSelect(menuId: string): void {
    if (this.selectable && this._routeSelectMenu) {
      // this.recursiveMenuStorageService.selectMenuId = '';
      const ret = this.onSelectChange(this._menuList, menuId, null);
      if (ret.isChange) {
        this.menuList = ret.menuList;
      }
    }
  }

  /**
   * 依運行中的作業編號取得Menu節點
   */
  public getMenuItemByProgramId(menuDataSource: IDwMenu[], programId: string): IDwMenu {
    let matchMenu: IDwMenu;
    const len = menuDataSource.length;

    for (let i = 0; i < len; i++) {
      const menuItem: IDwMenu = JSON.parse(JSON.stringify(menuDataSource[i]));

      if (menuItem.programId === programId) {
        matchMenu = menuItem;
        break;
      }

      if (menuItem.child.length > 0) {
        matchMenu = this.getMenuItemByProgramId(menuItem.child, programId);
        if (matchMenu) {
          break;
        }
      }
    }

    return matchMenu;
  }

  private onSelectChange(menuDataSource: IDwMenu[], menuId: string, programId: string): any {
    const menuList: IDwMenu[] = [];
    const len = menuDataSource.length;
    const ret = {
      menuList: menuList,
      isFind: false, // 是否找到
      isChange: false // 是否改變Menu的屬性，避免沒改值也觸發廣播事件
    };

    for (let i = 0; i < len; i++) {
      const menuItem: IDwMenu = JSON.parse(JSON.stringify(menuDataSource[i]));

      // Menu用menuId找，Tab Menu用programId找
      let selected = false;
      if (menuId) {
        if (menuItem.id === menuId) {
          selected = true;
        }
      } else {
        if (menuItem.programId === programId) {
          selected = true;
        }
      }

      if (menuItem.selected !== selected) {
        menuItem.selected = selected;
        ret.isChange = true;
      }

      if (menuItem.selected) {
        ret.isFind = true;
        // this.recursiveMenuStorageService.selectMenuId = menuItem.id;
      }

      if (menuItem.child.length > 0) {
        const childRet = this.onSelectChange(menuItem.child, menuId, programId);
        menuItem.child = childRet.menuList;

        // 子階層如果有找到，父以上的目錄都要打開
        if (childRet.isFind) {
          menuItem.open = true;
          ret.isFind = true;
        }

        if (childRet.isChange) {
          ret.isChange = childRet.isChange;
        }
      }

      menuList.push(menuItem);
    }

    ret.menuList = menuList;
    return ret;
  }
}

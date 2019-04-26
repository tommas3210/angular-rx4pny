import { Component, Inject, OnInit, Input, ViewEncapsulation, TemplateRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { DwBreakPoint, DwModalService } from 'ng-quicksilver';

import { DwLanguageService } from '../../language/service/language.service';
import { DwUserService } from '../../../auth/user.service';
import { DwAuthService } from '../../../auth/auth.service';
import { Logo_Path, APP_DEFAULT, DW_USING_TAB } from '../../../config/system.config';



/**
 * 基本側邊欄佈局
 * 使用範例：
 * <dw-layout-basic-side></dw-layout-basic-side>
 * <dw-layout-basic-side [collapsedWidth]="0" [breakpoint]="'lg'"></dw-layout-basic-side>
 *
 * layoutType 視覺佈局類型：'tabMenu'多頁面佈局樣式
 * width 側邊欄寬度，預設200
 * dwCollapsed 當前收起狀態，預設false
 * collapsedWidth 收縮寬度：預設72;設置為 0 會出現特殊 trigger
 * dwBreakpoint 觸發響應式佈局的斷點：'xs', 'sm', 'md', 'lg', 'xl'
 * dwTheme Menu樣式：'dark', light'
 * isHeaderFixed 是否固定頭部
 * hasFooter 是否有底部布局
 * dwSelectable 選單選中節點,預設true
 * routeSelectMenu 路由影響選單選中節點(TabMenu是否和Menu連動),預設false
 */

@Component({
  selector: 'dw-layout-basic-side',
  templateUrl: './basic-side.component.html',
  // styleUrls: ['./style/basic-side.less'],
  // tslint:disable-next-line:use-view-encapsulation
  encapsulation: ViewEncapsulation.None // 樣式不封裝
})
export class DwLayoutBasicSideComponent implements OnInit, OnDestroy {
  dwLayoutType: string;
  layoutClass = [];
  headerClass = [];
  dwWidth = 200;
  dwCollapsedWidth = 72;
  dwBreakpoint: DwBreakPoint;
  language: string = ''; // 語言別

  isCollapsed = false; // 當前收起狀態
  userDetail: any = {}; // 登入者詳細資料.
  theme: string; // Menu Theme
  dwIsHeaderFixed = true;
  dwHasFooter = false;

  private _dwSelectable: boolean = true;
  private _routeSelectMenu: boolean = false;

  private langSubscription: Subscription;


  // 側邊欄
  @Input()
  siderTemplate: TemplateRef<any>;

  @Input()
  siderAfterMenuTemplate: TemplateRef<any>;

  @Input()
  headerTemplate: TemplateRef<any>;

  @Input()
  headerLeftTemplate: TemplateRef<any>;

  @Input()
  headerRightTemplate: TemplateRef<any>;

  @Input()
  headerRightActionTemplate: TemplateRef<any>;

  @Input()
  headerRightUserTemplate: TemplateRef<any>;

  @Input()
  footerTemplate: TemplateRef<any>;

  @Input()
  set isHeaderFixed(isHeaderFixed: boolean) {
    this.dwIsHeaderFixed = isHeaderFixed;
  }

  @Input()
  set hasFooter(hasFooter: boolean) {
    this.dwHasFooter = hasFooter;
  }

  @Input()
  set width(width: number) {
    this.dwWidth = width;
  }

  @Input()
  set dwCollapsed(dwCollapsed: boolean) {
    this.isCollapsed = dwCollapsed;
  }

  @Input()
  set collapsedWidth(collapsedWidth: number) {
    this.dwCollapsedWidth = collapsedWidth;
  }

  @Input()
  set breakpoint(breakpoint: DwBreakPoint) {
    this.dwBreakpoint = breakpoint;
  }

  @Input()
  set dwTheme(dwTheme: string) {
    this.theme = dwTheme || 'dark';
  }

  @Input()
  set dwSelectable(dwSelectable: boolean) {
    this._dwSelectable = dwSelectable;
  }

  get dwSelectable(): boolean {
    return this._dwSelectable;
  }

  @Input()
  set routeSelectMenu(routeSelectMenu: boolean) {
    this._routeSelectMenu = routeSelectMenu;
  }

  get routeSelectMenu(): boolean {
    return this._routeSelectMenu;
  }

  constructor(
    private userService: DwUserService,
    private authService: DwAuthService,
    private languageService: DwLanguageService,
    private dwModalService: DwModalService,
    private translateService: TranslateService,
    @Inject(APP_DEFAULT) public logoUrl: string,
    @Inject(Logo_Path) public dwLogoPath: string,
    @Inject(DW_USING_TAB) public usingTab: boolean
  ) {
    // 當 sesstion storage 值改變後, this.userDetail 也會跟著改變.
    this.userDetail = this.userService.getUserDetail();
  }

  ngOnDestroy(): void {
    // 對服務 subscribe() 的要解除, 如果是 httpClient 或是 router 則不用.
    this.langSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.setLayoutType();

    // 避免Logo連結干擾Tab Menu 路由
    if (this.usingTab) {
      this.logoUrl = null;
    }

    // 取得最新語言別
    this.langSubscription = this.languageService.language$.subscribe(
      lang => {
        this.language = lang;
      }
    );
  }

  // 登出
  onLoggedout(): void {
    this.dwModalService.confirm({
      dwIconType: 'exclamation-circle',
      dwTitle: this.translateService.instant('dw-tenant-logout-title'),
      dwContent: this.translateService.instant('dw-tenant-logout-content'),
      dwOnOk: (): void => {
        this.authService.logout();
      }
    });

  }

  /**
   * 視覺佈局類型
   */
  private setLayoutType(): void {
    // 多頁面佈局樣式
    if (this.usingTab) {
      this.dwLayoutType = 'tabMenu';
      const str = this.dwLayoutType.toLocaleLowerCase();
      this.layoutClass = ['dw-layout-basic-side-' + str];
      this.headerClass = ['dw-header-basic-side-' + str];
    }
  }

}

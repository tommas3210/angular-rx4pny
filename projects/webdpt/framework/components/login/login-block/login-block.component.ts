import { Component, Inject, Input, OnInit, ViewEncapsulation, OnDestroy, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DwModalService } from 'ng-quicksilver';

import { APP_DEFAULT, DW_MULTI_TENANT, DW_USING_TAB } from '../../../config/system.config';
import { DwAuthService } from '../../../auth/auth.service';
import { DwUserService } from '../../../auth/user.service';
import { IDwRememberLoginModel } from '../model/remember-login.model';
import { DwRememberLoginService } from '../service/remember-login.service';
import { DwLanguageService } from '../../language/service/language.service';

@Component({
  selector: 'dw-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.css']
})

export class DwLoginBlockComponent implements OnInit, OnDestroy, AfterViewInit {
  private loginSubscription: Subscription;
  private langSubscription: Subscription;
  private langListSubscription: Subscription;
  private langValueChangeSubscription: Subscription;
  private tenantSubscription: Subscription;

  language: string; // 语言
  user = { userId: '', password: '' }; // 使用者应输入
  validateForm: FormGroup;
  returnUrl: string;
  isDisabled: boolean = false; // 是否允許按送出.
  dwLoading: boolean = false; // 設置按鈕載入狀態.

  @Input() showRemember: boolean;
  @Input() showLanguage: boolean;
  @ViewChild('tenantModalTemp') tenantModalTemp: TemplateRef<any>; // 有權限的租戶清單 template.
  currTenantList = []; // 有權限的租戶清單.
  private tplModal: any; // 有權限的租戶清單 modal.
  private isAutoForward = false; // 是否自動導頁, 用來控制是否顯示租戶清單.

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fBuilder: FormBuilder,
    private dwModalService: DwModalService,
    private authService: DwAuthService,
    private userService: DwUserService,
    private rememberLoginService: DwRememberLoginService,
    private languageService: DwLanguageService,
    @Inject(APP_DEFAULT) private defaultApp: any,
    @Inject(DW_USING_TAB) private _usingTab: boolean,
    @Inject(DW_MULTI_TENANT) public dwMultiTenant: boolean,
    protected translateService: TranslateService
  ) {

  }


  /**
   * form 验证按钮
  */
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
      }
    }
  }


  /**
   * 登入
   */
  login(): void {
    this.user = {
      userId: this.validateForm.get('userId').value,
      password: this.validateForm.get('password').value
    };

    this.isDisabled = true;
    this.dwLoading = true;

    this.loginSubscription = this.authService.login(this.user).subscribe(
      data => {
        this.isDisabled = false;
        this.dwLoading = false;

        // 登入失敗.
        if (data.success === false) {
          if (data.description) {
            this.dwModalService.error({
              dwContent: data.description,
            });
          }
          this.authService.logout(false);
          return;
        }

        // 登入成功
        if (data.success === true) {
          this.afterLogin();
        }

        // 註: 當data.success為null時, 表示需要彈窗, 讓用戶選一個租戶登入, 所以返回 null 等待用戶選擇
      },
      (error) => {
        this.isDisabled = false;
        this.dwLoading = false;
      }
    );
  }

  private afterLogin(): void {
    // 儲存記住我
    const rememberLoginInfo: IDwRememberLoginModel = {
      rememberLogin: this.validateForm.get('remember').value,
      userId: this.validateForm.get('userId').value,
      userName: this.userService.getUser('userName'),
      language: this.languageService.currentLanguage
    };

    this.rememberLoginService.setRememberLogin(rememberLoginInfo);

    // login 後的導頁.
    this.loginedForwardUrl(this.returnUrl);
  }


  /**
   * todo 目前寫在 2 個地方, 應該集中到 dw-tab-routing 去.
   * [登入後]的要導頁的 url.
   *
   * param {string} returnUrl: 導頁的 url.
   */
  public loginedForwardUrl(returnUrl: string): void {
    // 導頁前要 unsubscribe(), 因為在多頁籤模式下, 不會觸發 ngOnDestroy, 如果是單一租戶會直接導頁, 不會顯示租戶清單.
    this.unsubscribe();

    this.router.navigateByUrl(returnUrl);
  }

  /**
   * 在開啟多頁簽模式下, 沒有觸發 OnDestroy, 所以在選擇完租戶後, 手動 unsubscribe().
   */
  ngOnDestroy(): void {
    this.unsubscribe();
  }


  ngAfterViewInit(): void {
    // 使用setTimeout()的原因: 在未選擇租戶前進行reload, 會出現 ExpressionChangedAfterItHasBeenCheckedError.
    setTimeout(() => {
      // 如果自動導向到 defaultApp 時, 不需要顯示租戶清單.
      if (this.isAutoForward === true) {
        this.isAutoForward = false;
        return;
      }
      // 取得租戶清單
      this.tenantSubscription = this.userService.currTenantList$.subscribe(
        lists => {
          if (lists.length > 1) {
            this.currTenantList = lists;
            this.tplModal = this.dwModalService.create({
              dwTitle: this.translateService.instant('dw-login-tenant-selectOne'),
              dwClosable: false,
              dwFooter: null,
              dwContent: this.tenantModalTemp
            });
          }
        }
      );
    });
  }

  ngOnInit(): void {
    // 是否已登入
    if (this.authService.isLoggedIn === true) {
      this.isAutoForward = true;
      // 如果已經 login 了, 直接導頁.
      this.loginedForwardUrl(this.defaultApp);
      return;
    }

    // 記住我
    const rememberLoginInfo: IDwRememberLoginModel = this.rememberLoginService.getRememberLogin();
    const remember = rememberLoginInfo.rememberLogin;
    const sAccount = rememberLoginInfo.userId;

    if (remember) {
      // 記住我：切換語言別
      const currentLanguage = this.languageService.currentLanguage;
      const rememberLanguage = rememberLoginInfo.language;

      if (rememberLanguage !== currentLanguage) {
        this.languageService.setUp(rememberLanguage);
      }
    }

    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.defaultApp;

    this.validateForm = this.fBuilder.group({
      userId: [sAccount, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [remember]
    });
  }

  // 忘記密碼.
  forget(): void {
    this.router.navigateByUrl('/forget');
  }

  /**
   * 有操作權限的租戶清單-選擇一個進行切換租戶刷新token.
   *
   * param {number} tenantSid: 租戶的 Sid.
   */
  changeTenant(tenantSid: number): void {
    this.authService.tokenRefreshTenant(tenantSid).subscribe(
      () => {
        this.tplModal.destroy();
        this.afterLogin();
      },
      (error: any) => {
        this.unsubscribe();
        console.log('error>>>>>>>', error);
        this.tplModal.destroy();
        this.authService.logout();
      }
    );
  }

  /**
   * 在開啟多頁簽模式下, 沒有觸發 OnDestroy, 所以在選擇完租戶後, 手動 unsubscribe(),
   * 因為選擇完租戶後, 如果正常,會進行導頁, 如果不正常,會進行登出並導向 login 頁.
   */
  private unsubscribe(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }

    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }

    if (this.langListSubscription) {
      this.langListSubscription.unsubscribe();
    }

    if (this.langValueChangeSubscription) {
      this.langValueChangeSubscription.unsubscribe();
    }

    if (this.tenantSubscription) {
      this.tenantSubscription.unsubscribe();
    }
  }
}

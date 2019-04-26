import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import * as crypto from 'crypto-js';
import { DwAuthService, DW_AUTH_TOKEN } from '../../auth/auth.service';
import { DwUserService } from '../../auth/user.service';
import { DwUserStorage } from '../../auth/user-storage';
import { DwSystemConfigService } from '../../config/config.service';
import { APP_DEFAULT, LONIG_DEFAULT, DW_APP_AUTH_TOKEN, DW_USING_FRSSO, DW_MULTI_TENANT } from '../../config/system.config';
import { DwIamRepository } from './repository/iam-repository';


@Injectable()
export class DwDapAuthService extends DwAuthService {
  iamUrl: string;
  frUrl: string;

  constructor(
    protected router: Router,
    protected userService: DwUserService,
    protected http: HttpClient,
    private iamRepository: DwIamRepository,
    protected storage: DwUserStorage,
    protected configService: DwSystemConfigService,
    protected translateService: TranslateService,
    @Inject(DW_AUTH_TOKEN) protected authToken: any,
    @Inject(APP_DEFAULT) protected defaultApp: string,
    @Inject(LONIG_DEFAULT) protected defaultLogin: string,
    @Inject(DW_APP_AUTH_TOKEN) private dwAppAuthToken: string,
    @Inject(DW_USING_FRSSO) protected usingFrSSO: boolean,
    @Inject(DW_MULTI_TENANT) protected dwMultiTenant: boolean
  ) {
    super(router, userService, storage, http, authToken, defaultApp, defaultLogin, usingFrSSO, configService);

    configService.getConfig().subscribe(
      (config: any) => {
        this.iamUrl = config.iamUrl + 'api/iam/v2/';
        this.frUrl = config.frUrl;
      }
    );


    this.isLoggedIn$.subscribe((isLogin: boolean) => {
      if (isLogin === false) {
        this.iamLogout();
      }
    });

  }

  /**
   * 登入.
   *
   * param userConfig 登入的資訊.
   * return 返回Observable.
   */
  login(userConfig: any): Observable<any> {
    const info = {
      success: true,
      description: '' // 登入失敗時, 顯示.
    };

    return new Observable((observer): void => {
      // 取得 API 的 body.
      const body = this.getLoginApiBody(userConfig);

      this.iamRepository.login(body).subscribe(
        (datas: any) => {
          // 多租戶未啟用時, 不需要調取有權限的租戶清單.
          if (!this.dwMultiTenant) {
            this.setLogined(datas);
            observer.next(info);
            observer.complete();
            return;
          }

          // 設定 DW_AUTH_TOKEN.
          this.setAuthToken(datas);

          // 取有權限的租戶清單
          this.userService.getTenantList().subscribe(
            currTenantList => {
              // 如果 0 筆: 不允許登入, 要顯示特定訊息.
              if (currTenantList.length === 0) {
                info.description = this.translateService.instant('dw-login-failure-noTenant');
                observer.next(this.setLoginFail(info));
                observer.complete();
                return;
              }

              this.userService.setTenantList(currTenantList);

              // 如果 1 筆: 自動幫登入;
              if (currTenantList.length === 1) {
                this.tokenRefreshTenant(currTenantList[0].tenantSid).subscribe(
                  () => {
                    // 需等待 token 刷新後, 才能 next() 裝填回傳, 避免與導頁同時進行.
                    observer.next(info);
                    observer.complete();
                  },
                  (errorHandle: HttpErrorResponse) => {
                    observer.error(errorHandle);
                    observer.complete();
                  }
                );
                // 要先 return, 避免往下執行.
                return;
              }

              // 如果 1 筆以上: 需要彈窗, 讓用戶選一個租戶登入, 所以返回 null 等待用戶選擇.
              info.success = null;
              observer.next(info);
              observer.complete();
            },
            (errorHandle: HttpErrorResponse) => {
              observer.error(errorHandle);
              observer.complete();
            }
          );
        },
        (errorHandle: HttpErrorResponse) => {
          observer.error(errorHandle);
          observer.complete();
        }
      );

    });

  }


  /**
   * 設定登入失敗.
   *
   * param {*} info
   * returns {*}
   */
  private setLoginFail(info: any): any {
    info.success = false;
    info.description = (info.description) ? info.description : this.translateService.instant('dw-login-failure');
    return info;
  }

  /**
   * 取得 API 的 body
   *
   * param {*} userConfig
   * returns {object}
   */
  private getLoginApiBody(userConfig: any): object {
    const encryptOnce = crypto.SHA256(userConfig.password);
    const encryptTwice = crypto.SHA256(encryptOnce);
    const encryptThird = crypto.enc.Base64.stringify(encryptTwice);
    const body = {
      tenantId: userConfig.tenantId,
      userId: userConfig.userId,
      passwordHash: encryptThird,
      identityType: 'query'
    };

    return body;
  }

  /**
   * 向 IAM 服務發送請求時要帶入的HTTP headers.
   *
   */
  getTokenHeaders(url?: string): any {
    // 將 authToken.token 移至[登入成功後, 設定登入的資訊]裡.
    // this.authToken.token = this.userService.getUser('token') ? this.userService.getUser('token') : '';
    const token = (this.authToken.token) ? this.authToken.token : '';

    if (url && url.indexOf(this.iamUrl) >= 0) {
      return {
        'digi-middleware-auth-app': this.dwAppAuthToken,
        'digi-middleware-auth-user': token
      };
    }

    return {
      'token': token
    };

  }


  /**
   * 切换租户，重新刷新UserToken.
   *
   * param {number} tenantSid: 租戶的 Sid.
   * param {boolean} [isLogining]: 是否正在登入中.
   *
   * returns {Observable<any>}
   */
  tokenRefreshTenant(tenantSid: number): Observable<any> {
    // 廣播登出狀態, 因為重新刷新UserToken, 舊 token 會被登出.
    // 僅在已登入時才需要廣播 false. 讓其他觀察者進行logout程序.
    if (this.loginSuccess === true) {
      this.loginSuccess = false;
      this.loginSubject.next(this.loginSuccess);
    }
    return this.iamRepository.tokenRefreshTenant(tenantSid).pipe(
      tap(ret => {
        // delete Object.assign(ret, {'token': ret['user_token'] })['user_token'];
        // 租戶改變後, 要重新設定與廣播.
        this.setLogined(ret);
      })
    );
  }


  /**
   * 用户登出.
   *
   * returns void.
   */
  private iamLogout(): void {
    // 當 token 不存在時, 無需進行登出.
    if (!this.authToken.token) {
      return;
    }

    this.iamRepository.logout().subscribe();
  }


}

import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import * as crypto from 'crypto-js';
import { DwAuthService, DW_AUTH_TOKEN } from '../auth/auth.service';
import { APP_DEFAULT, LONIG_DEFAULT, DW_APP_AUTH_TOKEN, DW_USING_FRSSO } from '../config/system.config';
import { DwUserStorage } from '../auth/user-storage';
import { DwUserService } from '../auth/user.service';
import { DwSystemConfigService } from '../config/config.service';


@Injectable()
export class DwIamAuthService extends DwAuthService {
  iamUrl: string;
  constructor(
    protected router: Router,
    protected userService: DwUserService,
    protected http: HttpClient,
    protected storage: DwUserStorage,
    protected configService: DwSystemConfigService,
    protected translateService: TranslateService,
    @Inject(DW_AUTH_TOKEN) protected authToken: any,
    @Inject(APP_DEFAULT) protected defaultApp: string,
    @Inject(LONIG_DEFAULT) protected defaultLogin: string,
    @Inject(DW_APP_AUTH_TOKEN) private dwAppAuthToken: string,
    @Inject(DW_USING_FRSSO) protected usingFrSSO: boolean
  ) {
    super(router, userService, storage, http, authToken, defaultApp, defaultLogin, usingFrSSO, configService);
    configService.get('iamUrl').subscribe(
      url => this.iamUrl = url
    );
  }

  /**
   * 登入.
   *
   * param userConfig 登入的資訊.
   * return 返回Observable.
   */
  login(userConfig: any): Observable<any> {
    const subject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    // const subject: Subject<any> = new Subject(); // 訂閱時, 還未被 new 出來.
    const info = {
      success: true,
      description: '' // 登入失敗時, 顯示.
    };

    const body = this._getLoginApiBody(userConfig);

    this.http.post(this.iamUrl + 'api/iam/v2/identity/login', body).pipe(map(
      (ret: any) => {
        // console.log('ret>>>>', ret);
        return {
          sid: ret.sid,
          userId: ret.userId,
          userName: ret.userName,
          hash: ret.hash,
          token: ret.token
        };
      }
    )).subscribe(
      (datas: any) => {
        this.setLogined(datas);
        subject.next(info);
        // subject.complete();  // 統一交由下方的return 把值回寫
        return;
    },
    (errorHandle: HttpErrorResponse) => {
      if (errorHandle.hasOwnProperty('error') && errorHandle.error.hasOwnProperty('message')) { // 抓取帳號, 密碼, port 錯誤.
        info.description = errorHandle.error.message;
      } else { // 未知的錯誤.
        info.description = errorHandle.message;
      }

      subject.next(this._setLoginFail(info));
      //  subject.complete();  // 統一交由下方的return 把值回寫
      return;
    });

    return subject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }


  /**
   * 設定登入失敗.
   *
   * param {*} info
   * returns {*}
   */
  private _setLoginFail(info: any): any {
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
  private _getLoginApiBody(userConfig: any): object {
    const encryptOnce = crypto.SHA256(userConfig.password);
    const encryptTwice = crypto.SHA256(encryptOnce);
    const encryptThird = crypto.enc.Base64.stringify(encryptTwice);
    const body = {
      tenantId: userConfig.tenantId,
      userId: userConfig.userId,
      passwordHash: encryptThird,
      identityType: 'token'
    };

    return body;
  }

  /**
   * 向 IAM 服務發送請求時要帶入的HTTP headers.
   *
   */
  public getTokenHeaders(url?: string): any {
    this.authToken.token = this.userService.getUser('token') ? this.userService.getUser('token') : '';

    if (url && url.indexOf(this.iamUrl) >= 0) {
      return {
        'digi-middleware-auth-app': this.dwAppAuthToken,
        'digi-middleware-auth-user': this.authToken.token
      };
    }

    return {
      'token': this.authToken.token
    };

  }


}


import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { APP_DEFAULT, LONIG_DEFAULT, DW_USING_FRSSO } from '../config/system.config';
import { DwUserService } from './user.service';
import { DwUserStorage } from './user-storage';
import { DwSystemConfigService } from '../config/config.service';


export const DW_AUTH_TOKEN = new InjectionToken<DwAuthToken>('DW_AUTH_TOKEN');

@Injectable()
export class DwAuthService {

  loginSubject: BehaviorSubject<boolean>; // 廣播登入狀態
  loginSuccess = (typeof this.userService.getUser('isLoggedin') === 'boolean') ? this.userService.getUser('isLoggedin') : null;

  frUrl: string;
  /**
   * 注入Angular Router及DW_AUTH_TOKEN做為保存token訊息用
   * param router Angular Router
   * param authToken DW_AUTH_TOKEN
   */
  constructor(
    protected router: Router,
    protected userService: DwUserService,
    protected storage: DwUserStorage,
    protected http: HttpClient,
    @Inject(DW_AUTH_TOKEN) protected authToken: any,
    @Inject(APP_DEFAULT) protected defaultApp: string,
    @Inject(LONIG_DEFAULT) protected defaultLogin: string,
    @Inject(DW_USING_FRSSO) protected usingFrSSO: boolean,
    protected configService: DwSystemConfigService
  ) {
    this.loginSubject = new BehaviorSubject<boolean>(this.loginSuccess);
    // 設定預設值, 當 F5 reload 時, this.authToken.token 會消失, 必需重新指定.
    this.setAuthToken({});

    this.configService.get('frUrl').subscribe(
      url => this.frUrl = url
    );
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.loginSubject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }

  get isLoggedIn(): boolean {
    return this.loginSuccess;
  }



  /**
   * 是否已通過驗證, 提供給DwAuthGuardService驗證用.
   *
   * param  currentUrl 當下的URL，如果驗證不通過，將會導向至登入頁，登入完成後會再導回currentUrl
   * return  是否已驗證
   */
  isAuthenticated(state: RouterStateSnapshot): boolean {

    const currentUrl = state.url;
    const isLoggedIn = (typeof this.userService.getUser('isLoggedin') === 'boolean') ? this.userService.getUser('isLoggedin') : null;

    // 未登入時轉跳登入頁
    if (!isLoggedIn) {
      this.router.navigate(
        [this.defaultLogin], // 如果使用this.defaultApp, 會造成無窮迴圈.
        {
          queryParams:
          {
            returnUrl: currentUrl ? currentUrl : this.defaultApp
          }
        });
    }
    return isLoggedIn;
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
      description: '', // 登入失敗時, 顯示.
      currTenantList: []
    };

    return new Observable((observer): void => {
      const userData = {
        userId: userConfig.userId,
        userName: userConfig.userId,
        token: ''
      };

      this.setLogined(userData);
      observer.next(info);
      observer.complete();
    });

  }

  /**
   * 登出並清除儲存紀錄(session storage).
   * 登出時, 先廣播再清值.
   *
   */
  logout(isforward: boolean = true): void {
    if (this.userService.getUser('token') === undefined) {
      // 在非多頁籤下, 直接貼 url 會出現空白的 layout, 然後點登出沒有反應.
      this.router.navigateByUrl(this.defaultLogin);
      return;
    }

    this.loginSuccess = false;
    this.loginSubject.next(this.loginSuccess); // 廣播登入狀態
    this.userService.currTenantList = [];
    this.userService.tenantSubject.next(this.userService.currTenantList);

    this.userService.clearUser();
    this.authToken.token = '';


    if (isforward === true) {
      this.router.navigateByUrl(this.defaultLogin); // 如果使用this.defaultApp, 當在 / 進行登出時, 因為 url 一樣, 會無法跳轉.
    }

  }


  /**
   * 設定 DW_AUTH_TOKEN 的值提供給外部使用, DwIamHttpClient, DwDapHttpClient.
   *
   */
  setAuthToken(datas: any): void {
    if (Object.keys(datas).length > 0) {
      this.userService.setUserInfo(datas);
    }
    this.authToken.token = this.userService.getUser('token') ? this.userService.getUser('token') : '';
  }

  /**
   * 向後端服務發送請求時要帶入的HTTP headers.
   *
   */
  getTokenHeaders(url?: string): any {
    // 將 authToken.token 移至[登入成功後, 設定登入的資訊]裡.
    // this.authToken.token = this.userService.getUser('token') ? this.userService.getUser('token') : '';
    const token = (this.authToken.token) ? this.authToken.token : '';

    return {
      token: token
    };
  }

  /**
   * 登入成功後, 設定登入的資訊.
   * 登入時, 先設定值再廣播.
   *
   * param {*} loginInfo
   */
  setLogined(loginInfo: any): void {
    this.userService.setUserInfo({isLoggedin: true});

    // 設定 DW_AUTH_TOKEN.
    this.setAuthToken(loginInfo);

    // 廣播登入狀態
    this.loginSuccess = true;
    this.loginSubject.next(this.loginSuccess);
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
    // 廣播登入狀態 是為了選單重取.
    this.loginSuccess = false;
    this.loginSubject.next(this.loginSuccess); // 廣播登入狀態
    return new Observable((observer): void => {
      observer.next({});
      observer.complete();
    });
  }


}

export interface DwAuthToken {
  token: string;
  expiredDate: any;
}

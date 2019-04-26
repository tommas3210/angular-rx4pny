import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, from, of } from 'rxjs';
import { map, mergeAll, reduce } from 'rxjs/operators';

import { IDwSsoLogin } from './interface/sso.interface';
import { DW_SSO_LOGIN, LONIG_DEFAULT, APP_DEFAULT, DW_USING_TAB } from '../../config/system.config';
import { DwLanguageService } from '../language/service/language.service';
import { DwAuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-sso-login',
  templateUrl: './sso-login.component.html',
  styleUrls: ['./sso-login.component.less']
})
export class DwSsoLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private languageService: DwLanguageService,
    private authService: DwAuthService,
    @Inject(APP_DEFAULT) protected defaultApp: string,
    @Inject(DW_SSO_LOGIN) private issoLogins: IDwSsoLogin[],
    @Inject(DW_USING_TAB) private _usingTab: boolean
  ) {
  }

  /**
   * 使用 reduce 確保只取到一個結果值, 在 reduce 裡所操作的 Observable, 必定要 complete.
   * reduce 的參數，1: callback(), 2: 初始值，callback(acc: 初始值或上一次的結果值, val: eventLists的每1個值)，最後回傳一個新的狀態，再繼續執行.
   */
  ngOnInit(): void {
    // 取得路由參數
    this.activateRoute.queryParamMap.subscribe(
      (params) => {
        const eventLists = from(this.issoLogins);
        const eventResults = eventLists.pipe(
          map(item => {
            const ret = item.ssoLogin(params);
            return (ret instanceof Observable) ? ret : of(ret);
          }),
          mergeAll(),
          reduce((acc, val): boolean => acc || val, false) // 當有1個 true 結果就為 true 的判斷式.
        );


        eventResults.subscribe(result => {
          if (!result) {
            this.authService.logout();
          } else {
            let routerLink = params.get('routerLink') || '';
            const dwLang = params.get('dwLang') || '';

            if (dwLang) {
              this.languageService.setUp(dwLang);
            }

            if (routerLink === '') {
              routerLink = this.defaultApp;
            } else {
              const qryString = this._getUrlQueryParams(params);
              // 導頁前往指定頁面時, 需帶其餘的 url query parameters.
              if (qryString) {
                routerLink += '?' + qryString;
              }
            }

            console.log('routerLink>>>', routerLink);
            this.loginedForwardUrl(routerLink);
          }
        });

      }
    );

  }

  /**
   * todo 目前寫在 2 個地方, 應該集中到 dw-tab-routing 去.
   * [登入後]的要導頁的 url.
   *
   * param {string} returnUrl: 導頁的 url.
   */
  public loginedForwardUrl(returnUrl: string): void {
    this.router.navigateByUrl(returnUrl);
  }


  /**
   * 取出網址列的 url query parameters
   *
   * param {*} params
   * returns {string}
   */
  private _getUrlQueryParams(params: any): string {
    let qryString = '';
    const qryParams = {};

    params.keys.forEach((val) => {
      // 這2個值為指定用途, 不可當做導頁後的 url query parameters.
      if (val !== 'routerLink' && val !== 'userToken') {
        qryParams[val] = params.get(val);
      }
    });

    if (Object.keys(qryParams).length === 0) {
      return qryString;
    }

    // 將其餘的 url query parameters 組成標準參數串.
    qryString = Object.keys(qryParams).map((_key) => {
      return encodeURIComponent(_key) + '=' + encodeURIComponent(qryParams[_key]);
    }).join('&');

    return qryString;
  }
}

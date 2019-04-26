import { Injectable, Inject } from '@angular/core';
import { ParamMap } from '@angular/router';

import { Observable } from 'rxjs';

import { IDwSsoLogin } from '../interface/sso.interface';
import { DwUserService } from '../../../auth/user.service';
import { DwAuthService } from '../../../auth/auth.service';
import { DwSystemConfigService } from '../../../config/config.service';
import { DW_MULTI_TENANT } from '../../../config/system.config';


@Injectable()
export class DwSsoService implements IDwSsoLogin {
  public userToken: string;
  iamUrl: string;
  constructor(
    private userService: DwUserService,
    private authService: DwAuthService,
    private configService: DwSystemConfigService,
    @Inject(DW_MULTI_TENANT) private dwMultiTenant: boolean
  ) {
    this.configService.get('iamUrl').subscribe(
      url => this.iamUrl = url
    );
  }


  /**
   * 解析 url 的 query parameters 成 object.
   *
   * param {*} strLocation
   * returns {*} object.
   */
  private _getJsonFromUrl(objLocation: any): any {
    const query = objLocation.search.substr(1); // 解析 $location( URL string) 的 search.
    const result = {};

    // 如果沒有額外參數, 就不需要往下解析.
    if (!query) {
      return result;
    }

    query.split('&').forEach(
      (params: any) => {
      const item = params.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    });

    return result;
  }

  /**
   * SSO 的轉頁.
   *
   * param {string} url: SSO 前往的 url
   * param {boolean} newWin: 是否開新窗
   * param {object} otherParams: 要前往的額外參數, 若名稱相同, 以此為優先.
   */
  public redirectUrl(url: string, newWin?: boolean, otherParams?: {}): void {
    // 鼎捷雲登入後，取得的userToken內，只存在用戶資訊，
    // 從鼎捷雲SSO進入產品服務時，用鼎捷雲的userToken即使能通過驗證，但缺少租戶資訊供雲端產品識別資料，
    // 所以需要sso-button增加處理租戶id+沒有租戶id的userToken轉換成有租戶id用戶id的userToken。

    // 為了要在網址結尾後加page[sso-login], 所以需確認網址結尾為'/'.
    const arrUrl = url.split('?');
    if (arrUrl[0].substr(-1) !== '/') {
      arrUrl[0] += '/';
    }

    // 將 routerLink 與其餘的參數, 一起轉成 object.
    const objLocation = new URL(url);
    const urlParams = this._getJsonFromUrl(objLocation);

    // 預設的 userToken, 登入時取到的.
    const defaultParams = {
      userToken: this.userService.getUser('token')
    };

    // 有可能是 undefined.
    if (!otherParams) {
      otherParams = {};
    }

    // 匯整成 1 個 object, 優先序高的放在最後, 為了要後值蓋前值.
    const params = Object.assign({}, defaultParams, urlParams, otherParams);

    // 將所有的參數組成 query parameters.
    const qryString = Object.keys(params).map((_key) => {
      return encodeURIComponent(_key) + '=' + encodeURIComponent(params[_key]);
    }).join('&');

    const newUrl = arrUrl[0] + 'sso-login?' + qryString;
    if (newWin === true) {
      window.open(newUrl);
    } else {
      document.location.href = newUrl;
    }
  }

  /**
   * SSO Login.
   *
   * param {ParamMap} queryParam
   * returns {Observable<boolean>}
   */
  public ssoLogin(queryParam: ParamMap): Observable<boolean> {
    this.userToken = queryParam.get('userToken') || '';

    return new Observable((observer): void => {
      if (!this.userToken) {
        observer.next(false);
        observer.complete();
        return;
      }

      // 調用 DwIamHttpClient 時, 會取出 DW_AUTH_TOKEN, 所以要先設定
      this.authService.setAuthToken({token : this.userToken});

      this.userService.getUserInfo().subscribe(
        (userDatas: any) => {
          // 必須依據正常的 after Login, 執行必要的設定, 因為有其他作業會觀察是否登入成功, 而進行對應的動作.
          this.authService.setLogined(userDatas);

          if (this.dwMultiTenant) {
            this.userService.getTenantList().subscribe(currTenantList => {
              this.userService.setTenantList(currTenantList);
            });
          }

          observer.next(true);
          observer.complete();
        },
        (error: any) => {
          observer.next(false);
          observer.complete();
        }
      );

    });
  }


}

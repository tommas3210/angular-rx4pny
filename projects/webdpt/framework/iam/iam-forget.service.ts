import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DwForgetService } from '../components/forget/service/forget.service';
import { IDwForgetUpdatePassword } from '../components/forget/interface/forget.interface';
import { DwSystemConfigService } from '../config/config.service';


@Injectable()
export class DwIamForgetService extends DwForgetService {
  private iamUrl: string;
  private emcUrl: string;
  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend,
    private configService: DwSystemConfigService
  ) {
    super();

    this.configService.getConfig().subscribe(
      params => {
        this.iamUrl = params.iamUrl;
        this.emcUrl = params.emcUrl;
      }
    );

  }


  /**
   * 取得 [mail驗證碼 / 手機驗證碼].
   *
   * param {string} type: 驗證碼類型, [email: Email] / [telephone: 手機號碼].
   * param {string} value: email 帳號 / 手機號碼.
   * returns {Observable<any>}
   */
  getVerificationCode(type: string, value: string): Observable<any> {
    const _url = 'api/emc/v1/verificationCode/' + type + '/' + value + '/changepassword';

    switch (type)  {
      case 'email':
      case 'mobilephone':
        return this.http.post(this.emcUrl + _url, {});

      default:
        return of(null);
    }

  }


  /**
   * [忘記密碼]裡的修改密碼.
   *
   * param {*} params, params.account: Email帳號/手機號碼, params.password: 密碼, params.verificationCode: 驗證碼.
   * returns {Observable<any>}
   */
  updatePassword(params: IDwForgetUpdatePassword): Observable<any> {
    const updateParams = {
      account: params.account,
      password: params.password,
      verificationCode: params.verificationCode
    };
    const http = new HttpClient(this.httpBackend);
    return http.post(this.iamUrl + 'api/iam/v2/user/password/update', updateParams);
  }


  /**
   * 驗證 [E-mail / mobilephone] 是否有重覆.
   *
   * param {string} type: 驗證類型, [email: Email] / [telephone: 手機號碼].
   * param {string} value: email 帳號[email: value] / 手機號碼[telephone: value] .
   * returns {Observable<any>}
   */
  verifyExist(type: string, value: string): Observable<any> {
    const http = new HttpClient(this.httpBackend);
    const params = {};
    params[type] = value;

    switch (type)  {
      case 'email':
        return http.post(this.iamUrl + 'api/iam/v2/user/email/exist', params);

      case 'telephone': // 這一個接口的入參是{telephone: value}, url 是用mobilephone, 沒有統一, 無法只使用一個變數.
        return http.post(this.iamUrl + 'api/iam/v2/user/mobilephone/exist', params);

      default:
        return of(null);
    }

  }


}

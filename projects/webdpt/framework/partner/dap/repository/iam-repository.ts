import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DwIamHttpClient } from '../http/iam-http-client';

@Injectable()
export class DwIamRepository {

  constructor(private http: DwIamHttpClient) {
  }


  /**
   * 登入.
   *
   * returns {Observable<any>}
   */
  login(params: any): Observable<any> {
    return this.http.post('api/iam/v2/identity/login', params);
  }

  /**
   * 登出, Headers：digi-middleware-auth-user: userToken.
   *
   * returns {Observable<any>}
   */
  logout(): Observable<any> {
    return this.http.post('api/iam/v2/identity/logout', {});
  }

  /**
   * appId為空, 返回用戶加入的所有企業，傳入appId時, 返回用戶加入並且授權該應用的所有企業.
   *
   * returns {Observable<any>}
   */
  getTenantList(appId: string): Observable<any> {
    return this.http.post(`api/iam/v2/tenant?appId=${appId}`, {}).pipe(
      map((tenants: Array<{}>) => {
        // tenants會是一個array.
        return tenants.map((info: {}) => {
          return Object.assign(info, {
            tenantSid: info['sid'],
            tenantId: info['id'],
            tenantName: info['name']
          });
        });
      }
    ));
  }

  /**
   * 獲取用戶的租戶信息.
   *
   * returns {Observable<any>}
   */
  getUserInfo(userId?: string): Observable<any> {
    const params = (userId) ? {id: userId} : {};
    return this.http.post('api/iam/v2/user/withtenant', params).pipe(
      map((ret: any) => {
        return Object.assign(ret, {
          userId: ret['id'],
          userName: ret['name']
        });
      })
    );
  }

  /**
   * 解析USERTOKEN.
   *
   * returns {Observable<any>}
   */
  analyzeToken(): Observable<any> {
    return this.http.post('api/iam/v2/identity/token/analyze', {}).pipe(
      map((ret: any) => {
        return Object.assign(ret, {
          userId: ret['id'],
          userName: ret['name']
        });
      })
    );
  }

  /**
   * 切換租戶，重新刷新UserToken.
   *
   * returns {Observable<any>}
   */
  tokenRefreshTenant(tenantSid: number): Observable<any> {
    return this.http.post('api/iam/v2/identity/token/refresh/tenant', {
      tenantSid: tenantSid
    }).pipe(
      map((ret: any) => {
        return Object.assign(ret, {
          token: ret['user_token']
        });
      })
    );
  }

}





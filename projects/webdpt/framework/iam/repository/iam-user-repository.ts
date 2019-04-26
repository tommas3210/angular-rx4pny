import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { DwSystemConfigService } from '../../config/config.service';


@Injectable()
export class DwIamUserRepository {
  iamUrl: string;
  constructor(
    private http: HttpClient,
    private configService: DwSystemConfigService
  ) {
    this.configService.get('iamUrl').subscribe(
      url => this.iamUrl = url
    );
  }

  /**
   * 解析USERTOKEN.
   *
   * param {string} userToken
   * returns {Observable<any>}
   */
  public analyzeToken(userToken: string): Observable<any> {
    return this.http.post(this.iamUrl + 'api/iam/v2/identity/token/analyze', {}).pipe(
      map((ret: any) => {
        // console.log('ret>>>>', ret);
        return {
          tenantId: ret.tenantId,
          tenantName: ret.tenantName,
          userId: ret.id,
          userName: ret.name
        };
      }),
      catchError((error: any, msg: Observable<any>): any => {
        // return throwError(error);
        // 利用正常的 Observable, 進入 subscribe 的 success 的區段.
        return Observable.create((observer) => {
          observer.next(error);
          observer.complete(); // 在 create 裡, 需要 complete.
        });
      })
    );
  }

  /**
   * 取得用戶(新).
   *
   * param {string} userToken
   * returns {Observable<any>}
   */
  public getUserInfo(userId: string): Observable<any> {
    return this.http.post(this.iamUrl + 'api/iam/v2/user/withtenant', {
      id: userId
    }).pipe(
      map((ret: any) => {
          return {
            sid: ret.sid,
            userId: ret.id,
            userName: ret.name,
            hash: ret.hash,
            tenantId: ret.tenantId,
            tenantName: ret.tenantName
          };
      }),
      catchError((error: any, msg: Observable<any>): any => {
        // return throwError(error);
        // 利用正常的 Observable, 進入 subscribe 的 success 的區段.
        return Observable.create((observer) => {
          observer.next(error);
          observer.complete(); // 在 create 裡, 需要 complete.
        });
      })
    );
  }

}


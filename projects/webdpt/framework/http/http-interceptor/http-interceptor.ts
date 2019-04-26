import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { DwExceptionService } from '../../components/exception/exception.service';


/**
 * Http 攔截器
 *
 * @export
 */
@Injectable()
export class DwHttpInterceptor implements HttpInterceptor {
  constructor(
    private translateService: TranslateService,
    private dwExceptionService: DwExceptionService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(
        (error: any, msg: Observable<any>): any => {
          if (error instanceof HttpErrorResponse) {
            // Bug #6748 調整連線處理異常的訊息.
            if (error.status === 0) {
              // 連線異常(無法與主機連線)
              const descDetail = [];
              // 請求網址
              let lable = this.translateService.instant('dw-request-url');
              descDetail.push(lable + '：' + error.url);
              // 請求內容
              lable = this.translateService.instant('dw-request-body');
              descDetail.push(lable + '：' + JSON.stringify(error.error));
              // 回應狀態
              lable = this.translateService.instant('dw-response-status');
              descDetail.push(lable + '：' + error.status + ' ' + error.statusText || 'Unknown Error');
              // 回應訊息
              lable = this.translateService.instant('dw-response-message');
              descDetail.push(lable + '：' + error.message);

              this.dwExceptionService.showMessage(error.status, descDetail);
            }

          }

          // 讓錯誤訊息可以返迴上層, 讓 subscribe() 的 error() 可以收到錯誤訊息.
          return throwError(error);
        }
      )
    );
  }
}

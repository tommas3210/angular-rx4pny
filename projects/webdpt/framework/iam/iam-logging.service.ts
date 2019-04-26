import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { DwLoggingService } from '../log/logging.service';
import { DwHttpErrorStatusList } from '../errors/http-error-statusList';
import { DwExceptionService } from '../components/exception/exception.service';
import { DwAuthService } from '../auth/auth.service';

@Injectable()
export class DwIamLoggingService extends DwLoggingService {
  constructor(
    private iamRouter: Router,
    private iamHttpErrorStatusList: DwHttpErrorStatusList,
    private iamExceptionService: DwExceptionService,
    private translateService: TranslateService,
    private authService: DwAuthService
  ) {
    super();
  }

  // 一般
  log(msg: string): void { }

  // 警告
  warn(msg: string): void { }

  // 錯誤
  error(msg: string): void { }

  // 後端異常
  httpError(errorResponse: HttpErrorResponse): void {
    const descDetail = [];
    // 請求網址
    let lable = this.translateService.instant('dw-request-url');
    descDetail.push(lable + '：' + errorResponse.url);
    // 請求內容
    lable = this.translateService.instant('dw-request-body');
    descDetail.push(lable + '：' + JSON.stringify(errorResponse.error));
    // 回應狀態
    lable = this.translateService.instant('dw-response-status');
    descDetail.push(lable + '：' + errorResponse.status + ' ' + errorResponse.statusText || 'Unknown Error');
    // 回應訊息
    lable = this.translateService.instant('dw-response-message');
    descDetail.push(lable + '：' + errorResponse.message);

    this.iamHttpErrorStatusList.dwStatusList.subscribe(
      statusList => {
        switch (errorResponse.status) {
          // 需要特殊判斷的錯誤狀態
          case 400: // 錯誤的請求
            if (errorResponse.error.profile === '') {
              // this.iamRouter.navigate(['/login']); // 沒有token而導致呼叫API失敗，必須先登入
              this.authService.logout();
            } else {
              // 這一個判斷 for API 後端, 暫時先隱藏.
              // TODO：
              // 等相關議題有解決登入頁同時顯示登入失敗訊息和Http 400 請求錯誤的訊息：
              // Feature #5839 多後端異常機制處理
              // Feature #6060 API平台來的授權異常處理
              // this.iamExceptionService.showMessage(errorResponse.status, descDetail);
            }

            break;

          // 其他有在列管中的錯誤狀態
          default:
            if (statusList[errorResponse.status] !== undefined) {
              let showMsg = true;

              // 沒取到多語言檔
              if (errorResponse.url.indexOf('/assets/i18n') === -1) {
                showMsg = false;
              }

              if (showMsg) {
                this.iamExceptionService.showMessage(errorResponse.status, descDetail);
              }
            }

            break;
        }
      }
    );
  }

  // 前端執行期間異常
  runtimeError(error: any): any {
    console.error(error);
    // throw 'runtimeError';
  }
}

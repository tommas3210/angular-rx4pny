import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DwLoggingService } from '../log/logging.service';
import { DwExceptionService } from '../components/exception/exception.service';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class DwSystemHttpErrorHandler {

  constructor(private log: DwLoggingService,
    private iamExceptionService: DwExceptionService,
    private translateService: TranslateService) {

  }

  handlerError(error: HttpErrorResponse): void {
    // this.log.httpError(error);
    switch (error.status) {
      // Bug #6748 調整連線處理異常的訊息 - 訊息移至 DwHttpInterceptor 裡調用
      // case 0:
      //   // 連線異常(無法與主機連線)
      //   const descDetail = [];
      //   // 請求網址
      //   let lable = this.translateService.instant('dw-request-url');
      //   descDetail.push(lable + '：' + error.url);
      //   // 請求內容
      //   lable = this.translateService.instant('dw-request-body');
      //   descDetail.push(lable + '：' + JSON.stringify(error.error));
      //   // 回應狀態
      //   lable = this.translateService.instant('dw-response-status');
      //   descDetail.push(lable + '：' + error.status + ' ' + error.statusText || 'Unknown Error');
      //   // 回應訊息
      //   lable = this.translateService.instant('dw-response-message');
      //   descDetail.push(lable + '：' + error.message);

      //   this.iamExceptionService.showMessage(error.status, descDetail);
      //   break;
      default:
        break;
    }
  }
}

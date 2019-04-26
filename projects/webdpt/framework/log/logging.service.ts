import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { DwHttpErrorStatusList } from '../errors/http-error-statusList';
// import { DwExceptionService } from '../components/exception/exception.service';

@Injectable()
export class DwLoggingService {
  constructor() {}

  // 一般
  log(msg: string): void {
    console.log(msg);
  }

  // 警告
  warn(msg: string): void {
    console.warn(msg);
   }

  // 錯誤
  error(msg: string): void {
    console.error(msg);
  }

  // 後端異常
  httpError(errorResponse: HttpErrorResponse): void {
     console.error(errorResponse);
  }

  // 前端執行期間異常
  runtimeError(error: any): void {
     console.error(error);
  }
}

import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DwExceptionService } from '../../../components/exception/exception.service';
import { DwSystemConfigService } from '../../../config/config.service';
import { DwModalService, DwMessageService } from 'ng-quicksilver';
import { TranslateService } from '@ngx-translate/core';
import { DwAuthService } from '../../../auth/auth.service';


@Injectable()
export class DwDapHttpErrorHandler {
  public defaultLogin: string;
  constructor(private route: Router,
    private exception: DwExceptionService,
    private modal: DwModalService,
    private translate: TranslateService,
    private config: DwSystemConfigService,
    private injector: Injector,
    private dwMessageService: DwMessageService
  ) {
    this.config.getConfig().subscribe(result => {
      this.defaultLogin = result.defaultLogin;
    });
  }

  handlerError(error: HttpErrorResponse): void {
    const msg = error.error;
    const authService = this.injector.get(DwAuthService);

    if (!msg) {
      return;
    }

    if (!msg.errorCode) {
      return;
    }


    switch (msg.errorCode) {
      case '10001':
      case '10002':
      case '10003':
      case '10901':
      case '10902':
      case '109000':
        // token 異常或失效
        // this.route.navigate(['/login']);
        if (msg.errorMessage) {
          this.dwMessageService.error(msg.errorMessage);
        }

        authService.logout();
        break;
      case '10004':
        // 服務不允許匿名調用
        // this.route.navigate(['/login']);
        if (msg.errorMessage) {
          this.dwMessageService.error(msg.errorMessage);
        }
        authService.logout();
        break;
      case '10801':
      case '10802':
      case '10803':
      case '10804':
        // CAC授權失敗


        const title = this.translate.instant('dw-http-error-cac-title');
        const detail = this.translate.instant('dw-http-error-cac-authorization-failure');
        // const logoutText =  this.translate.instant('dw-http-error-cac-title');

        this.modal.warning({
          dwTitle: title,
          dwContent: detail,
          dwOkText: null,
          // dwOnOk: (): void => {

          // }
        });
        // this.exception.showExceptionModal(title, descDetail);
        break;
      default:
        break;
    }

  }


}

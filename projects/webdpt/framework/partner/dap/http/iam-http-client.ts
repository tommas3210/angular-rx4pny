import { DwHttpClient } from '../../../http/client';
import { DW_APP_AUTH_TOKEN } from '../../../config/system.config';
import { Injectable, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { DwIamHttpErrorHandler } from './iam-http-error-handler';
// import { DwUserService } from '../../../auth/user.service';
import { DwSystemConfigService } from '../../../config/config.service';
import { DwHttpClientOptionsService } from '../../../http/service/http-client-options.service';
import { DwLoadingMaskService } from '../../../components/loading/service/loading-mask.service';
import { DW_AUTH_TOKEN } from '../../../auth/auth.service';

@Injectable()
export class DwIamHttpClient extends DwHttpClient {

  constructor(
    public dwHttpClientOptionsService: DwHttpClientOptionsService,
    public dwLoadingMaskService: DwLoadingMaskService,
    private systemConfig: DwSystemConfigService,
    // private userService: DwUserService,
    @Inject(DW_AUTH_TOKEN) private authToken: any,
    private iamHttpError: DwIamHttpErrorHandler,
    @Inject(DW_APP_AUTH_TOKEN) private dwAppAuthToken: string
  ) {
    super(dwHttpClientOptionsService, dwLoadingMaskService);
    this.systemConfig.get('iamUrl').subscribe(url => this.api = url);
  }

  protected get defaultHeaders(): { [header: string]: string | string[] } {
    // const token = this.userService.getUser('token') ? this.userService.getUser('token') : '';
    const token = (this.authToken.token) ? this.authToken.token : '';

    return {
      'digi-middleware-auth-app': this.dwAppAuthToken,
      'digi-middleware-auth-user': token
    };
  }

  protected errorHandler(event: HttpErrorResponse): void {
    if (event.error && event.error.message) {
      this.iamHttpError.handlerError(event);
    }
  }
}

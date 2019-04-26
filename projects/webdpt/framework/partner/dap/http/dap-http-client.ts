import { DwHttpClient } from '../../../http/client';
import { Injectable, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DwDapHttpErrorHandler } from './dap-http-error-handler';
// import { DwUserService } from '../../../auth/user.service';
import { DwSystemConfigService } from '../../../config/config.service';
import { DwHttpClientOptionsService } from '../../../http/service/http-client-options.service';
import { DwLoadingMaskService } from '../../../components/loading/service/loading-mask.service';
import { DW_AUTH_TOKEN } from '../../../auth/auth.service';
import { DwRouterInfoService } from '../../../router-info/router-info.service';
import { IDwProgram } from '../../../program-info/interface/program.interface';
import { DwProgramInfoListJsonService } from '../../../program-info/program-info-list-json.service';

@Injectable()
export class DwDapHttpClient extends DwHttpClient {
  constructor(
    public dwHttpClientOptionsService: DwHttpClientOptionsService,
    public dwLoadingMaskService: DwLoadingMaskService,
    private systemConfig: DwSystemConfigService,
    // private userService: DwUserService,
    @Inject(DW_AUTH_TOKEN) private authToken: any,
    private dapHttpError: DwDapHttpErrorHandler,
    private activatedRoute: ActivatedRoute,
    private dwRouterInfoService: DwRouterInfoService,
    private programInfoListJsonService: DwProgramInfoListJsonService
  ) {
    super(dwHttpClientOptionsService, dwLoadingMaskService);
    this.systemConfig.get('apiUrl').subscribe(url => this.api = url);
  }

  protected get defaultHeaders(): { [header: string]: string | string[] }  {
    // const token = this.userService.getUser('token') ? this.userService.getUser('token') : '';
    const token = (this.authToken.token) ? this.authToken.token : '';

    let programId = this.dwRouterInfoService.routerProgramId(this.activatedRoute);
    let moduleId = '';

    if (programId === null) {
      programId = 'default';
      moduleId = 'default';
    } else {
      const program: IDwProgram = this.programInfoListJsonService.programListJsonMap[programId];

      if (program) {
        moduleId = program.module;
      }
    }

    return {
      'token': token,
      'Module-Name': moduleId, // 模組編號
      'Program-Code': programId // 作業編號
    };
  }

  protected responseIntercept(body: any): any {
    if (body && body.response) {
      return body.response;
    } else {
      return body;
    }
  }

  protected errorHandler(event: any): void {
    if (event.error && event.error.status) {
      this.dapHttpError.handlerError(event);
    }
  }
}

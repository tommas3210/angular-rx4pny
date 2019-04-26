import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwDapHttpClient } from './http/dap-http-client';
import { DwIamHttpClient } from './http/iam-http-client';

import { DwUserService, DwAuthorizedService, DwAuthService } from '../../auth';
import { DwIamMenuRepository } from '../../iam/repository/iam-menu-repository';
import { DwIamPermissionRepository } from '../../iam/repository/iam-permission-repository';
import { DwIamUserRepository } from '../../iam/repository/iam-user-repository';
// import { DwIamUserService } from '../../iam/iam-user.service';
import { DwIamPermissionInfoService } from '../../iam/iam-permission-info.service';
import { DwIamLoggingService } from '../../iam/iam-logging.service';
import { DwLoggingService } from '../../log/logging.service';
import { DwIamAuthorizedService } from '../../iam/iam-authorized.service';
// import { DwIamAuthService } from '../../iam/iam-auth.service';
import { DwIamActionAuthorizedService } from '../../iam/iam-action-authorized.service';
import { DwActionAuthorizedService } from '../../components/action/action-authorized.service';
import { DwIamTabRouteConfigService } from '../../iam/iam-tab-route-config.service';
import { DwTabRouteConfigService } from '../../components/dw-tab-routing/service/tab-route-config.service';
import { DwIamHttpErrorHandler } from './http/iam-http-error-handler';
import { DwDapHttpErrorHandler } from './http/dap-http-error-handler';
import { DwDapUpdateService } from './document/update.service';
import { DwDapListService } from './document/list.service';
import { DwDapDeleteService } from './document/delete.service';
import { DwDapReadService } from './document/read.service';
import { DwDapCreateService } from './document/create.service';
import { DwListService } from '../../document/service/list.service';
import { DwDeleteService } from '../../document/service/delete.service';
import { DwUpdateService } from '../../document/service/update.service';
import { DwReadService } from '../../document/service/read.service';
import { DwCreateService } from '../../document/service/create.service';
import { DwIamForgetService } from '../../iam/iam-forget.service';
import { DwForgetService } from '../../components/forget/service/forget.service';
import { DwDapAuthService } from './dap-auth.service';
import { DwDapUserService } from './dap-user.service';
import { DwIamRepository } from './repository/iam-repository';
import { DwFinereportModule } from './finereport/finereport.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: []
})

export class DwDapModule {
  static forRoot(providers: Provider[] = []): ModuleWithProviders {
    return {
      ngModule: DwDapModule,
      providers: [
        DwIamHttpErrorHandler,
        DwDapHttpErrorHandler,
        DwDapHttpClient,
        DwIamHttpClient,
        DwIamRepository,

        DwIamMenuRepository,
        DwIamPermissionRepository,
        DwIamUserRepository,
        DwDapUserService,
        DwIamPermissionInfoService,
        { // 用戶
          provide: DwUserService,
          useExisting: DwDapUserService
        },
        // DwIamLoggingService,
        // {
        //   provide: DwLoggingService,
        //   useExisting: DwIamLoggingService
        // },
        DwIamAuthorizedService,
        { // 權限驗證，可抽換DwIamAuthorizedService
          provide: DwAuthorizedService,
          useExisting: DwIamAuthorizedService
        },
        DwDapAuthService,
        { // 登入驗證用
          provide: DwAuthService,
          useExisting: DwDapAuthService
        },
        DwIamActionAuthorizedService,
        {
          provide: DwActionAuthorizedService,
          useExisting: DwIamActionAuthorizedService
        },
        DwIamTabRouteConfigService,
        {
          provide: DwTabRouteConfigService,
          useExisting: DwIamTabRouteConfigService
        },
        DwDapCreateService,
        {
          provide: DwCreateService,
          useExisting: DwDapCreateService
        },
        DwDapReadService,
        {
          provide: DwReadService,
          useExisting: DwDapReadService
        },
        DwDapUpdateService,
        {
          provide: DwUpdateService,
          useExisting: DwDapUpdateService
        },
        DwDapDeleteService,
        {
          provide: DwDeleteService,
          useExisting: DwDapDeleteService
        },
        DwDapListService,
        {
          provide: DwListService,
          useExisting: DwDapListService
        },
        DwIamForgetService,
        { //  忘記密碼
          provide: DwForgetService,
          useExisting: DwIamForgetService
        },
        ...DwFinereportModule.forRoot().providers,
        ...providers
      ]
    };
  }
}

import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwLoggingService } from '../log/logging.service';
import { DwAuthorizedService } from '../auth/authorized.service';
import { DwAuthService } from '../auth/auth.service';
import { DwActionAuthorizedService } from '../components/action/action-authorized.service';
import { DwIamPermissionInfoService } from './iam-permission-info.service';
import { DwIamUserService } from './iam-user.service';
import { DwIamLoggingService } from './iam-logging.service';
import { DwIamAuthorizedService } from './iam-authorized.service';
import { DwIamAuthService } from './iam-auth.service';
import { DwIamActionAuthorizedService } from './iam-action-authorized.service';
import { DwUserService } from '../auth/user.service';
import { DwIamMenuRepository } from './repository/iam-menu-repository';
import { DwIamUserRepository } from './repository/iam-user-repository';
import { DwIamPermissionRepository } from './repository/iam-permission-repository';
import { DwTabRouteConfigService } from '../components/dw-tab-routing/service/tab-route-config.service';
import { DwIamTabRouteConfigService } from './iam-tab-route-config.service';
import { DwForgetService } from '../components/forget/service/forget.service';
import { DwIamForgetService } from './iam-forget.service';


/**
 * 應用中間件權限中心
 *
 * @export
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [

  ]
})

export class DwIamModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwIamModule,
      providers: [
        DwIamMenuRepository,
        DwIamPermissionRepository,
        DwIamUserRepository,
        DwIamUserService,
        DwIamPermissionInfoService,
        { // 用戶
          provide: DwUserService,
          useExisting: DwIamUserService
        },
        DwIamLoggingService,
        {
          provide: DwLoggingService,
          useExisting: DwIamLoggingService
        },
        DwIamAuthorizedService,
        { // 權限驗證，可抽換DwIamAuthorizedService
          provide: DwAuthorizedService,
          useExisting: DwIamAuthorizedService
        },
        DwIamAuthService,
        { // 登入驗證用
          provide: DwAuthService,
          useExisting: DwIamAuthService
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
        DwIamForgetService,
        { //  忘記密碼
          provide: DwForgetService,
          useExisting: DwIamForgetService
        },
        ...providers
      ]
    };
  }

  // !請注意：DwDapModule未來將取代DwIamModule
  constructor () {
    console.log('請注意：DwDapModule未來將取代DwIamModule'); // 警語
  }
}

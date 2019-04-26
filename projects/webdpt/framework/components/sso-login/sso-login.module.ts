import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwSsoLoginRoutingModule } from './sso-login-routing.module';
import { DwSsoLoginComponent } from './sso-login.component';
import { DwSsoButtonComponent } from './sso-button/sso-button.component';
import { DwSsoService } from './service/sso.service';
import { DW_SSO_LOGIN } from '../../config/system.config';
import { DwIamUserRepository } from '../../iam/repository/iam-user-repository';

@NgModule({
  imports: [
    CommonModule,
    DwSsoLoginRoutingModule,
  ],
  declarations: [DwSsoLoginComponent, DwSsoButtonComponent],
  exports: [DwSsoButtonComponent]
})
export class DwSsoLoginModule {
  // 寫在 forRoot 裡的 providers, 表示要提供給上層做管理, 在 [DwIframeModule] 的 [declarations] 是無法使用, 除非上層有 import.
  // 上層也需要使用 forRoot 才能做調用, 調用時, 是調用 [DwIframeModule].
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwSsoLoginModule,
      providers: [
        DwSsoService,
        DwIamUserRepository,
        { provide: DW_SSO_LOGIN, useClass: DwSsoService, multi: true}
      ]
    };
  }
}

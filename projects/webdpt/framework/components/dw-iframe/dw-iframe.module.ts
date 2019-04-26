import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwBaseIframeModule } from './base-iframe/dw-base-iframe.module';
import { DwIframeGeneralModule } from './general/general.module';
import { DwIframeGeneralInfoService } from './service/iframe-general-info.service';
import { DwIframeGeneralService } from './service/iframe-general.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    DwBaseIframeModule,
    DwIframeGeneralModule
  ]
})
export class DwIframeModule {
  // 寫在 forRoot 裡的 providers, 表示要提供給上層做管理, 在 [DwIframeModule] 的 [declarations] 是無法使用, 除非上層有 import.
  // 上層也需要使用 forRoot 才能做調用, 調用時, 是調用 [DwIframeModule].
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwIframeModule,
      providers: [
        DwIframeGeneralInfoService,
        DwIframeGeneralService,
        ...providers
      ]
    };
  }
}

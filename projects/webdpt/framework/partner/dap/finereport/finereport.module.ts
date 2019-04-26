import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwFinereportConfigService } from './service/finereport-config.service';
import { DwIframeFrSignService } from './service/iframe-fr-sign.service';
import { DwIframeFinereportInfoService } from './service/iframe-finereport-info.service';
import { DwIframeFinereportService } from './service/iframe-finereport.service';
import { DwFinereportAuthService } from './service/finereport-auth.service';
import { DwFinereportLangLoaderService } from './service/finereport-lang-loader.service';
import { DwFinereportRepository } from './repository/finereport-repository';
import { DwIframeFinereportComponent } from './finereport.component';
import { DwBaseIframeModule } from '../../../components/dw-iframe/base-iframe/dw-base-iframe.module';

const COMPONENTS = [
  DwIframeFinereportComponent
];

@NgModule({
  imports: [
    CommonModule,
    DwBaseIframeModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class DwFinereportModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwFinereportModule,
      providers: [
        DwFinereportConfigService,
        DwFinereportRepository,
        DwFinereportLangLoaderService,
        DwIframeFrSignService,
        DwIframeFinereportInfoService,
        DwIframeFinereportService,
        DwFinereportAuthService
      ]
    };
  }
}

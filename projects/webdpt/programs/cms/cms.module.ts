import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwCmsRoutingModule } from './cms-routing.module';
import { DwSysMenuModule } from './dw-sys-menu/dw-sys-menu.module';
import { DwScheduleResultModule } from './dw-schedule-result/dw-schedule-result.module';

/**
 * 後台「內容管理系統 (Content Management System)」
 */
@NgModule({
  imports: [
    CommonModule,
    DwCmsRoutingModule,
    DwSysMenuModule,
    DwScheduleResultModule
  ],
  declarations: [],
  exports: [
    DwCmsRoutingModule,
    DwSysMenuModule,
    DwScheduleResultModule
  ]
})
export class DwCmsModule {

  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwCmsModule,
      providers: [
        ...DwSysMenuModule.forRoot([]).providers,
        ...providers
      ]
    };
  }
}

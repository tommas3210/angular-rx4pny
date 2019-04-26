import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DW_PROGRAM_WEBDPT_JSON } from '@webdpt/framework';
import { programInfoJson } from './program-info/model/program.config';
import { DwCmsModule } from './cms/cms.module';

@NgModule({
  imports: [
    CommonModule,
    DwCmsModule
  ],
  declarations: [],
  exports: [
    DwCmsModule
  ]
})
export class DwProgramsModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwProgramsModule,
      providers: [
        ...DwCmsModule.forRoot([]).providers,
        { provide: DW_PROGRAM_WEBDPT_JSON, useValue: programInfoJson }, // 平台作業靜態設定檔
        ...providers
      ]
    };
  }
}

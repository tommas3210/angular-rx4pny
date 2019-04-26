import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwProgramInfoListJsonService } from './program-info-list-json.service';
import { DwOperationInfoAttributeService } from './operation-info-attribute.service';
import { DwOperationInfoListService } from './operation-info-list.service';
import { DwOperationInfoService } from './operation-info.service';
import { DwProgramExecuteService } from './program-execute.service';
import { DwProgramInfoLangLoaderService } from './program-info-lang-loader.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DwProgramInfoModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwProgramInfoModule,
      providers: [
        DwProgramInfoListJsonService,
        DwOperationInfoAttributeService,
        DwOperationInfoListService,
        DwOperationInfoService,
        DwProgramExecuteService,
        DwProgramInfoLangLoaderService, // 目前在此僅提供取資料，若從basic.json拆分出去時要轉成DW_LANG_LOADER provide
        ...providers
      ]
    };
  }
}

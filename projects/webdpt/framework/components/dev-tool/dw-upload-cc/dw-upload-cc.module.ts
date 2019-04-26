import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgQuicksilverModule, DwTreeService } from 'ng-quicksilver';

import { DwUploadCcRoutingModule } from './dw-upload-cc-routing.module';
import { DwUploadCcComponent } from './dw-upload-cc.component';
import { DwUploadCcListComponent } from './dw-upload-cc-list/dw-upload-cc-list.component';

// 上傳互聯應用
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgQuicksilverModule,
    DwUploadCcRoutingModule
  ],
  declarations: [
    DwUploadCcComponent,
    DwUploadCcListComponent
  ],
  exports: [
    DwUploadCcRoutingModule,
    DwUploadCcComponent,
    DwUploadCcListComponent
  ],
  providers: [
    DwTreeService
  ]
})
export class DwUploadCcModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwUploadCcModule,
      providers: [
        ...providers
      ]
    };
  }
}

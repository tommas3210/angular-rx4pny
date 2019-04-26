import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgQuicksilverModule } from 'ng-quicksilver';

import { DwLoadingHttpComponent } from './spin/loading-http.component';
import { DwLoadingMaskService } from './service/loading-mask.service';

@NgModule({
  imports: [
    CommonModule,
    NgQuicksilverModule
  ],
  declarations: [
    DwLoadingHttpComponent
  ],
  entryComponents: [
    DwLoadingHttpComponent
  ],
  exports: []
})
export class DwLoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwLoadingModule,
      providers: [
        DwLoadingMaskService
      ]
    };
  }
}

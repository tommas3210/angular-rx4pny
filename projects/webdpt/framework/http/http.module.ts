import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwHttpClientOptionsService } from './service/http-client-options.service';
import { DwSystemHttpErrorHandler } from './system-error';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DwHttpModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwHttpModule,
      providers: [
        DwHttpClientOptionsService,
        DwSystemHttpErrorHandler
      ]
    };
  }
}

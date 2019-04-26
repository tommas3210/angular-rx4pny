import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwActionAuthorizedService } from './action-authorized.service';
import { DwActionAuthorizedDirective } from './action-authorized.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DwActionAuthorizedDirective
  ],
  exports: [
    DwActionAuthorizedDirective
  ]
})
export class DwActionModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwActionModule,
      providers: [
        DwActionAuthorizedService,
        ...providers
      ]
    };
  }
}

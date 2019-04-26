import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwRoutingMessageService } from './routing-message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class DwRoutingMessageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwRoutingMessageModule,
      providers: [
        DwRoutingMessageService
      ]
    };
  }
}

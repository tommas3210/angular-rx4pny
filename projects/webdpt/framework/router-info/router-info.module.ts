import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwRouterInfoService } from './router-info.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class DwRouterInfoModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwRouterInfoModule,
      providers: [
        DwRouterInfoService,
        ...providers
      ]
    };
  }
}

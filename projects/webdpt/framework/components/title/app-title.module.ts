import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwAppTitleService } from './app-title.service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class DwAppTitleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwAppTitleModule,
      providers: [
        DwAppTitleService
      ]
    };
  }
}

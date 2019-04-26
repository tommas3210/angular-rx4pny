import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider } from '@angular/compiler/src/core';

import { FrameworkUIModule } from '@webdpt/framework';
import { NgxAnalyticsModule } from '@webdpt/analytics';

/**
 * 共享模組
 *
 * @export
 * @class SharedModule
 */
@NgModule({
  imports: [
    CommonModule,
    FrameworkUIModule
  ],
  declarations: [],
  exports: [
    FrameworkUIModule,
    NgxAnalyticsModule
  ]
})
export class SharedModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...providers
      ]
    };
  }
}


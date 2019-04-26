import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider } from '@angular/compiler/src/core';

import { FrameworkUIModule } from '@webdpt/framework';

/**
 * 共享模組
 *
 * @export
 * @class ShowcaseSharedModule
 */
@NgModule({
  imports: [
    CommonModule,
    FrameworkUIModule
  ],
  declarations: [],
  exports: [
    FrameworkUIModule
  ]
})
export class ShowcaseSharedModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: ShowcaseSharedModule,
      providers: [
        ...providers
      ]
    };
  }
}


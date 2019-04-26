import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgQuicksilverModule } from 'ng-quicksilver';
import { TranslateModule } from '@ngx-translate/core';

import { DwForgetBlockComponent } from './forget-block/forget-block.component';
import { DwForgetService } from './service/forget.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgQuicksilverModule,
    TranslateModule
  ],
  declarations: [
    DwForgetBlockComponent
  ],
  exports: [
    DwForgetBlockComponent
  ],
  providers: [
  ]
})

export class DwForgetModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwForgetModule,
      providers: [
        DwForgetService // 忘記密碼.
      ]
    };
  }

}

import { NgModule, ModuleWithProviders } from '@angular/core';
import { DwLoginBlockComponent } from './login-block/login-block.component';
import { CommonModule } from '@angular/common';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DwLanguageModule } from '../language/language.module';
import { DwRememberLoginService } from './service/remember-login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgQuicksilverModule,
    DwLanguageModule
  ],
  declarations: [DwLoginBlockComponent],
  exports: [DwLoginBlockComponent],
  providers: []
})
export class DwLoginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwLoginModule,
      providers: [
        DwRememberLoginService
      ]
    };
  }
}

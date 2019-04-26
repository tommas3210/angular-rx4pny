import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgQuicksilverModule } from 'ng-quicksilver';

import { DwMenuService } from './service/menu.service';
import { DwRecursiveMenuService } from './service/recursive-menu.service';
import { DwMenuLoadingMaskService } from './service/menu-loading-mask.service';
import { DwMenuLangLoaderService } from './service/menu-lang-loader.service';
import { DwMenuAttributeService } from './service/menu-attribute.service';
import { DwMenuExecuteService } from './service/menu-execute.service';

import { DwMenuItemNameComponent } from './menu-item-name/menu-item-name.component';
import { DwRecursiveMenuItemComponent } from './recursive-menu-item/recursive-menu-item.component';
import { DwRecursiveMenuComponent } from './recursive-menu/recursive-menu.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgQuicksilverModule
  ],
  declarations: [
    DwMenuItemNameComponent,
    DwRecursiveMenuItemComponent,
    DwRecursiveMenuComponent
  ],
  exports: [
    DwMenuItemNameComponent,
    DwRecursiveMenuItemComponent,
    DwRecursiveMenuComponent
  ]
})

export class DwMenusModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwMenusModule,
      providers: [
        DwMenuService,
        DwRecursiveMenuService,
        DwMenuLoadingMaskService,
        // DwRecursiveMenuStorageService,
        DwMenuLangLoaderService,
        DwMenuAttributeService,
        DwMenuExecuteService,
        ...providers
      ]
    };
  }
}

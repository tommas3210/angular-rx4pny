import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwTreeService } from 'ng-quicksilver';

import { FrameworkUIModule, DwMenuService, DwMenuLangLoaderService } from '@webdpt/framework';
import { DwSysMenuRoutingModule } from './dw-sys-menu-routing.module';
import { DwSysMenuComponent } from './dw-sys-menu.component';
import { DwSysMenuListComponent } from './dw-sys-menu-list/dw-sys-menu-list.component';
import { DwSysMenuIconComponent } from './modals/dw-sys-menu-icon/dw-sys-menu-icon.component';
import { DwSysMenuIconService } from './service/menu-icon.service';
import { DwSysMenuTreeUiService } from './service/tree-ui.service';
import { DwSysMenuCreateService } from './service/create.service';
import { DwSysMenuRepository } from './service/menu-repository';
import { DwSysMenuEditComponent } from './modals/dw-sys-menu-edit/dw-sys-menu-edit.component';
import { DwSysMenuEditNameComponent } from './modals/dw-sys-menu-edit-name/dw-sys-menu-edit-name.component';
import { DwCmsMenuService } from './service/cms-menu.service';
import { DwCmsMenuLangLoaderService } from './service/cms-menu-lang-loader.service';

// 系統選單設定
@NgModule({
  imports: [
    CommonModule,
    FrameworkUIModule,
    DwSysMenuRoutingModule
  ],
  declarations: [
    DwSysMenuComponent,
    DwSysMenuListComponent,
    DwSysMenuIconComponent,
    DwSysMenuEditComponent,
    DwSysMenuEditNameComponent
  ],
  entryComponents: [ // 對話框使用component模式，需要加入自定義component
    DwSysMenuIconComponent,
    DwSysMenuEditComponent,
    DwSysMenuEditNameComponent
  ],
  exports: [
    DwSysMenuRoutingModule,
    DwSysMenuComponent,
    DwSysMenuListComponent,
    DwSysMenuIconComponent,
    DwSysMenuEditComponent,
    DwSysMenuEditNameComponent
  ],
  providers: [
    DwTreeService
  ]
})
export class DwSysMenuModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwSysMenuModule,
      providers: [
        DwSysMenuTreeUiService,
        DwSysMenuRepository,
        DwSysMenuCreateService,
        DwSysMenuIconService,
        DwCmsMenuService,
        {
          provide: DwMenuService,
          useExisting: DwCmsMenuService
        },
        DwCmsMenuLangLoaderService,
        {
          provide: DwMenuLangLoaderService,
          useExisting: DwCmsMenuLangLoaderService
        },
        ...providers
      ]
    };
  }
}

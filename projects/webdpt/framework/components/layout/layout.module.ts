import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { RouterModule } from '@angular/router';

import { DwLayoutAppComponent } from './layout-app/layout-app.component';
import { DwLayoutBasicSideComponent } from './basic-side/basic-side.component';
import { DwLayoutDefaultComponent } from './layout-default/layout-default.component';
import { DwMenusModule } from '../menu/menus.module';
import { DwLanguageModule } from '../language/language.module';
import { DwLoadingModule } from '../loading/loading.module';
import { DwTenantModule } from '../tenant/tenant.module';
import { DwRoutingTabSetModule } from '../dw-tabset/tabset.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgQuicksilverModule,
    DwMenusModule,
    DwLanguageModule,
    DwRoutingTabSetModule,
    DwLoadingModule,
    DwTenantModule
  ],
  declarations: [
    DwLayoutAppComponent,
    DwLayoutBasicSideComponent,
    DwLayoutDefaultComponent
  ],
  exports: [
    DwLayoutAppComponent,
    DwLayoutBasicSideComponent,
    DwLayoutDefaultComponent
  ]
})
export class DwLayoutModule {}

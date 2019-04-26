import { ModuleWithProviders, NgModule } from '@angular/core';
import { DwRoutingTabSetComponent } from './tabset.component';
import { Router, RouteReuseStrategy, RouterModule } from '@angular/router';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DwMenusModule } from '../menu/menus.module';
import { DW_USING_TAB } from '../../config/system.config';
import { DwTabRouteReuseService2 } from './dw-tab-route-reuse.service2';
import { DwTabInfoService2 } from './tab-info-service2';
import { DwTabRoutingService } from './tab-routing.service';
import { DwDefaultRouteReuseStrategy } from '../dw-tab-routing/service/dw-default-route-reuse.service';
import { NzTabsModule } from '../nz7/tabs';
import { NzAddOnModule } from '../nz7/core/addon/addon.module';
import { DwBaseIframeModule } from '../dw-iframe/base-iframe/dw-base-iframe.module';
import { DwIframeItemSubjectService, DwTabRouteConfigService } from '../dw-tab-routing/service';
import { TranslateModule } from '@ngx-translate/core';

export const usingRouteReuseStrategy2 = (
  usingTab: boolean,
  tabRouteReuseService: DwTabRouteReuseService2,
  defaultRouteReuseService: DwDefaultRouteReuseStrategy): any => {
  return usingTab ? tabRouteReuseService : defaultRouteReuseService;
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgQuicksilverModule,
    FormsModule,
    DwMenusModule,
    ReactiveFormsModule,
    NzAddOnModule,
    NzTabsModule,
    DwBaseIframeModule,
    TranslateModule
  ],
  declarations: [
    DwRoutingTabSetComponent
  ],
  exports: [
    DwRoutingTabSetComponent,
    NzTabsModule
  ]
})
export class DwRoutingTabSetModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DwRoutingTabSetModule,
      providers: [
        // 作業啟動模式-頁籤
        DwTabInfoService2,
        DwTabRouteReuseService2,
        DwDefaultRouteReuseStrategy,
        {
          provide: DwTabRoutingService,
          useClass: DwTabRoutingService,
          deps: [DwTabInfoService2, DW_USING_TAB, Router]
        },
        {
          provide: RouteReuseStrategy,
          useFactory: usingRouteReuseStrategy2,
          deps: [DW_USING_TAB, DwTabRouteReuseService2]
        },
        DwTabRouteConfigService,
        DwIframeItemSubjectService
      ]
    };
  }
}

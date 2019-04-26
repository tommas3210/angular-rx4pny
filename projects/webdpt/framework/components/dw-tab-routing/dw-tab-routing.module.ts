import { Route, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwTabRoutingComponent } from './dw-tab-routing.component';
import { DwTabRouteReuseService } from './service/dw-tab-route-reuse.service';
import { DwNewRouteKeyService } from './service/new-route-key.service';
import { DwIframeItemSubjectService } from './service/iframe-item-subject.service';
import { DwReuseStrategy } from './dw-reuse-strategy';
// import {MODULE_ROUTES} from '../../../routes';
import { DwTabRouteConfigService } from './service/tab-route-config.service';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { DwMenusModule } from '../menu/menus.module';
import { DwIframeModule } from '../dw-iframe/dw-iframe.module';
import { DwDivMaskModule } from '../dw-div-mask/dw-div-mask.module';
import { TranslateModule } from '@ngx-translate/core';
import { DwMenuService } from '../menu/service/menu.service';
import { DW_USING_TAB } from '../../config/system.config';
import { DwDefaultRouteReuseStrategy } from './service/dw-default-route-reuse.service';
import { DwTabRouteReuseService2 } from '../dw-tabset/dw-tab-route-reuse.service2';

// import {FrameworkUIModule} from '../framework.ui.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: DwTabRoutingComponent,
//     pathMatch: 'prefix',
//     children: [
//       ...MODULE_ROUTES
//     ]
//   }
// ];

/**
 * @deprecated 參考新版多頁籤配置
 * @example
 *   {
    path: '',
    pathMatch: 'prefix',
    component: DwLayoutDefaultComponent,
    children: [
      // dwAttachTabbedRoutes(MODULE_ROUTES), 已不使用
      ...MODULE_ROUTES
    ],
    data: {
      tabSetHosting: true // <== 加入此配置
    }
  }
 */
export function dwAttachTabbedRoutes(routes: Routes): Route {
  return {
    path: 'dwTabRouting',
    component: DwTabRoutingComponent,
    children: routes
  };
}

export const usingRouteReuseStrategy = (
  usingTab: boolean,
  tabRouteReuseService: DwTabRouteReuseService, defaultRouteReuseService: DwDefaultRouteReuseStrategy): any => {
  return usingTab ? tabRouteReuseService : defaultRouteReuseService;
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgQuicksilverModule,
    TranslateModule,
    DwMenusModule,
    DwIframeModule,
    DwDivMaskModule
    // DwIframeModule
    // FrameworkUIModule
  ],
  declarations: [
    DwTabRoutingComponent
  ],
  exports: [RouterModule]
})
export class DwTabRoutingModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DwTabRoutingModule,
      providers: [
        // 作業啟動模式-頁籤
        DwTabRouteReuseService,
        DwDefaultRouteReuseStrategy,
        {
          provide: RouteReuseStrategy,
          useFactory: usingRouteReuseStrategy,
          deps: [DW_USING_TAB, DwTabRouteReuseService, DwDefaultRouteReuseStrategy]
        },
        DwNewRouteKeyService,
        DwTabRouteConfigService,
        DwIframeItemSubjectService,
        DwMenuService
      ]
    };
  }
}


import {
  APP_INITIALIZER,
  ErrorHandler,
  ModuleWithProviders,
  NgModule,
  Optional,
  Provider,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwLoggingService } from './log/logging.service';
import { DwHttpErrorStatusList } from './errors/http-error-statusList';
import { DwErrorHandler } from './errors/error-handler';
import { LocalStorage } from './storage/local-storage';
import { SessionStorage } from './storage/session-storage';
import { DwAuthModule } from './auth/auth.module';
import { FrameworkUIModule } from './components/framework.ui.module';
import { DwProgramInfoModule } from './program-info/program-info.module';
import { DwDocumentModule } from './document/document.module';
import { DwRouterInfoModule } from './router-info/router-info.module';
import { DwSystemConfigInitializer, initStore } from './config/system-config.initializer';
import { DwSystemConfigService } from './config/config.service';
import {
  APP_DATE_FORMAT,
  APP_DEFAULT,
  DW_APP_AUTH_TOKEN,
  DW_APP_ID,
  DW_LANGUAGE_JSON,
  DW_MENU_JSON,
  DW_MOCK,
  DW_MULTI_TENANT,
  DW_PROGRAM_ACTION,
  DW_PROGRAM_WEBDPT_JSON,
  DW_PROGRAM_JSON,
  DW_PROGRAM_PAGE,
  DW_SELECT_MODAL_DEFAULT,
  DW_SYSTEM_CONFIG,
  DW_TAB_MULTI_OPEN,
  DW_TAB_ROUTE_CONFIG_JSON,
  DW_USING_FRSSO,
  DW_USING_TAB,
  Logo_Path,
  LONIG_DEFAULT,
  DW_LOAD_MASK_HTTP,
  DW_LOAD_MASK_DELAY,
  APP_TIME_FORMAT
} from './config/system.config';
import { DwHttpModule } from './http/http.module';
import { DwDapModule } from './partner/dap/dap.module';
import { DwHttpInterceptor } from './http/http-interceptor/http-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    DwDocumentModule.forRoot([]),
    DwDapModule.forRoot()
  ],
  declarations: [
  ],
  exports: [
    // DwDocumentModule
  ]
})
export class FrameworkModule {
  constructor(@Optional() @SkipSelf() parentModule: FrameworkModule) {
    if (parentModule) {
      throw new Error(
        'FrameworkModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(providers: Provider[], systemConfig?: { [key: string]: any }): ModuleWithProviders {
    return {
      ngModule: FrameworkModule,
      providers: [
        {
          provide: ErrorHandler,
          useClass: DwErrorHandler,
        },
        ...DwHttpModule.forRoot().providers,
        DwHttpErrorStatusList,
        LocalStorage,
        SessionStorage,
        ...DwDocumentModule.forRoot([]).providers,
        ...DwAuthModule.forRoot([]).providers,
        DwLoggingService,
        ...DwRouterInfoModule.forRoot([]).providers,
        ...DwProgramInfoModule.forRoot([]).providers,

        // Components
        FrameworkUIModule.forRoot([]).providers,
        DwSystemConfigService,
        DwSystemConfigInitializer,
        {
          provide: APP_INITIALIZER,
          useFactory: initStore,
          deps: [DwSystemConfigInitializer],
          multi: true
        },
        {
          provide: DW_APP_ID,
          useValue: systemConfig && systemConfig.dwAppId ? systemConfig.dwAppId : DW_SYSTEM_CONFIG.dwAppId
        },
        {
          provide: APP_DEFAULT,
          useValue: systemConfig && systemConfig.defaultApp ? systemConfig.defaultApp : DW_SYSTEM_CONFIG.defaultApp
        },
        {
          provide: Logo_Path,
          useValue: systemConfig && systemConfig.dwLogoPath ? systemConfig.dwLogoPath : DW_SYSTEM_CONFIG.dwLogoPath
        },
        {
          provide: APP_DATE_FORMAT,
          useValue: systemConfig && systemConfig.dwDateFormat ? systemConfig.dwDateFormat : DW_SYSTEM_CONFIG.dwDateFormat
        },
        {
          provide: APP_TIME_FORMAT,
          useValue: systemConfig && systemConfig.dwTimeFormat ? systemConfig.dwTimeFormat : DW_SYSTEM_CONFIG.dwTimeFormat
        },
        {
          provide: DW_USING_TAB,
          useValue: systemConfig && systemConfig.dwUsingTab ? systemConfig.dwUsingTab : DW_SYSTEM_CONFIG.dwUsingTab
        },
        {
          provide: DW_TAB_MULTI_OPEN,
          useValue: systemConfig && systemConfig.dwTabMultiOpen ? systemConfig.dwTabMultiOpen : DW_SYSTEM_CONFIG.dwTabMultiOpen
        },
        {
          provide: DW_USING_FRSSO,
          useValue: systemConfig && systemConfig.dwFrSSO ? systemConfig.dwFrSSO : DW_SYSTEM_CONFIG.dwFrSSO
        },
        {
          provide: LONIG_DEFAULT,
          useValue: systemConfig && systemConfig.defaultLogin ? systemConfig.defaultLogin : DW_SYSTEM_CONFIG.defaultLogin
        },
        {
          provide: DW_MULTI_TENANT,
          useValue: systemConfig && systemConfig.dwMultiTenant ? systemConfig.dwMultiTenant : DW_SYSTEM_CONFIG.dwMultiTenant
        },
        {
          provide: DW_APP_AUTH_TOKEN,
          useValue: systemConfig && systemConfig.dwAppAuthToken ? systemConfig.dwAppAuthToken : DW_SYSTEM_CONFIG.dwAppAuthToken
        },
        {
          provide: DW_LOAD_MASK_HTTP,
          useValue: systemConfig && systemConfig.dwLoadMaskHttp ? systemConfig.dwLoadMaskHttp : DW_SYSTEM_CONFIG.dwLoadMaskHttp
        },
        {
          provide: DW_LOAD_MASK_DELAY,
          useValue: systemConfig && systemConfig.dwLoadMaskDelay ? systemConfig.dwLoadMaskDelay : DW_SYSTEM_CONFIG.dwLoadMaskDelay
        },

        { provide: DW_PROGRAM_WEBDPT_JSON, useValue: []},
        { provide: DW_PROGRAM_JSON, useValue: [] },
        { provide: DW_PROGRAM_PAGE, useValue: [] },
        { provide: DW_PROGRAM_ACTION, useValue: [] },
        { provide: DW_MENU_JSON, useValue: [] },
        { provide: DW_SELECT_MODAL_DEFAULT, useValue: [] },
        { provide: DW_LANGUAGE_JSON, useValue: [] },
        { provide: DW_TAB_ROUTE_CONFIG_JSON, useValue: [] },
        { provide: DW_MOCK, useValue: { db: {}, methods: {} } },
        // Http 攔截器
        DwHttpInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useExisting: DwHttpInterceptor,
          multi: true
        },

        ...providers
      ]
    };
  }
}

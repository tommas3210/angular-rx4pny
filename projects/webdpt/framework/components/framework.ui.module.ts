import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { TranslateModule } from '@ngx-translate/core';

import { DwLanguageModule } from './language/language.module';
import { DwAppTitleModule } from './title/app-title.module';
import { DwMenusModule } from './menu/menus.module';
import { DwExceptionModule } from './exception/exception.module';
import { DwExceptionService } from './exception';
import { DwTranslatePipe } from './form-field/translation/dwTranslatePipe';
import { DwActionModule } from './action/action.module';
import { DwRouteInfoService } from './dw-tab-routing/service/dw-route-info.service';
import { DwRouteInfoStrogeService } from './dw-tab-routing/storge/routeInfo-storage.service';
import { DwIframeModule } from './dw-iframe/dw-iframe.module';
import { DwSelectModalModule } from './select-modal/select-modal.module';
import { DwFormItemsModule } from './form-items/form-items.module';
import { DwContainerModule } from './dw-container/dw-container.module';
import { DwDivMaskModule } from './dw-div-mask/dw-div-mask.module';
import { DwLayoutModule } from './layout/layout.module';
import { DwLoginModule } from './login/login.module';
import { DwRoutingMessageModule } from './message/routing-message.module';
import { DwAgGridEditorsModule } from './ag-grid-editors/ag-grid-editors.module';
import { DwPaginationServerSideWrapperComponent } from './pagination/pagination-server-side-wrapper.component';
import { DwPaginationClientSideWrapperComponent } from './pagination/pagination-client-side-wrapper.component';
import { DwSsoLoginModule } from './sso-login/sso-login.module';
import { DwThemeButtonModule } from './dw-theme-button/dw-theme-button.module';
import { DwDateToStringModule } from './date-to-string/date-to-string.module';
import { DwForgetModule } from './forget/forget.module';
import { DwLanguageStylePipe } from './language';
import { DwLoadingModule } from './loading/loading.module';
import { DwTenantModule } from './tenant/tenant.module';
import { DwTabInfoService2 } from './dw-tabset/tab-info-service2';
import { DwRoutingTabSetModule } from './dw-tabset/tabset.module';
import { DwFinereportModule } from '../partner/dap/finereport/finereport.module';

const COMPONENT_LIST = [
  DwTranslatePipe,
  DwLanguageStylePipe,
  DwPaginationServerSideWrapperComponent,
  DwPaginationClientSideWrapperComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // for layout
    FormsModule,
    ReactiveFormsModule,
    NgQuicksilverModule,
    TranslateModule,
    DwLanguageModule,
    DwAppTitleModule,
    DwIframeModule,
    DwSelectModalModule,
    DwFormItemsModule,
    DwContainerModule,
    DwDivMaskModule,
    DwLoadingModule,
    DwLayoutModule,
    DwLoginModule,
    DwAgGridEditorsModule.forAgGridComponents(),
    DwSsoLoginModule,
    DwThemeButtonModule,
    DwDateToStringModule,
    DwForgetModule,
    DwTenantModule,
    DwRoutingTabSetModule
  ],
  declarations: [
    ...COMPONENT_LIST
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...COMPONENT_LIST,
    NgQuicksilverModule,
    DwLanguageModule,
    DwAppTitleModule,
    DwExceptionModule,
    DwActionModule,
    DwMenusModule,
    DwIframeModule,
    DwSelectModalModule,
    DwFormItemsModule,
    DwContainerModule,
    DwDivMaskModule,
    DwLoadingModule,
    DwLayoutModule,
    DwLoginModule,
    DwAgGridEditorsModule,
    DwSsoLoginModule,
    DwThemeButtonModule,
    DwDateToStringModule,
    DwForgetModule,
    DwTenantModule,
    DwRoutingTabSetModule,
    DwFinereportModule // TODO:已從UI移至DwDapModule，但因路由預設就載入DwIframeFinereportComponent導致無法隨著DwDapModule選配載入
  ]
})

export class FrameworkUIModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: FrameworkUIModule,
      providers: [
        ...DwLanguageModule.forRoot().providers,
        ...DwAppTitleModule.forRoot().providers,
        DwExceptionService,
        ...DwActionModule.forRoot([]).providers,
        ...DwMenusModule.forRoot([]).providers,
        ...DwRoutingMessageModule.forRoot().providers,
        DwRouteInfoStrogeService,
        ...DwLoadingModule.forRoot().providers,
        ...DwSsoLoginModule.forRoot().providers,
        ...DwIframeModule.forRoot([]).providers,
        ...DwLoginModule.forRoot().providers,
        ...DwForgetModule.forRoot().providers,
        ...DwRoutingTabSetModule.forRoot().providers,
        ...providers
      ]
    };
  }
}

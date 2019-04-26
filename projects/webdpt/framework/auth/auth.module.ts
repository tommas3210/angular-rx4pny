import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DwAuthGuardService } from './auth-guard.service';
import { DwAuthorizedService } from './authorized.service';
import { DW_AUTH_TOKEN, DwAuthService } from './auth.service';
import { DwUserService } from './user.service';
import { DwAuthTokenIntercept } from './auth-token-intercept';
import { DwUserStorage } from './user-storage';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class DwAuthModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwAuthModule,
      providers: [
        DwAuthGuardService,
        DwAuthorizedService,
        DwAuthService,
        DwUserService,
        DwUserStorage,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: DwAuthTokenIntercept,
          multi: true
        },
        {
          provide: DW_AUTH_TOKEN,
          useValue: {}
        },
        ...providers,
      ]
    };
  }
}

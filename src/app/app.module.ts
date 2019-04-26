import { NgQuicksilverModule } from 'ng-quicksilver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FrameworkModule } from '@webdpt/framework';
import { SystemModule } from './config/system.module';
import { ImplementationModule } from './implementation/implementation.module';
import { SYSTEM_CONFIG } from './config/system-config';
import { NgxAnalyticsGoogleTagManager, NgxAnalyticsModule } from '@webdpt/analytics';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgQuicksilverModule.forRoot(), // 暂时于appmodule使用 - limingwei
    /*************** 端平台 ***************/
    FrameworkModule.forRoot([], SYSTEM_CONFIG),
    SystemModule.forRoot([]),
    ImplementationModule.forRoot([]),    // Google Analytics
    NgxAnalyticsModule.forRoot([NgxAnalyticsGoogleTagManager]),
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

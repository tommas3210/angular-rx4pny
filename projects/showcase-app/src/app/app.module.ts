import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FrameworkModule } from '@webdpt/framework';
import { ShowcaseModule } from './showcase/showcase.module';
import { SYSTEM_CONFIG } from './config/system-config';
import { SystemModule } from './config/system.module';
import { NgxAnalyticsGoogleAnalytics, NgxAnalyticsGoogleTagManager, NgxAnalyticsModule } from '@webdpt/analytics';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    /*************** 端平台 ***************/
    FrameworkModule.forRoot([], SYSTEM_CONFIG),
    SystemModule.forRoot([]),
    ShowcaseModule.forRoot([]),
    // Google Analytics
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

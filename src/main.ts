import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { environment } from './environments/environment';
import { NgxAnalyticsGoogleTagManager, NgxAnalyticsModule } from '@webdpt/analytics';
import { NgxAnalyticsBaiduAnalytics } from '../projects/webdpt/analytics/src/lib/providers/baidu/ngx-analytics-baidu';

if (environment.production) {
  enableProdMode();
}

// Google Analytics
NgxAnalyticsGoogleTagManager.createGaSession(environment.googleTagManager);
registerLocaleData(zh);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

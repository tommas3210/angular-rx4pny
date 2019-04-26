import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgxAnalyticsGoogleAnalytics, NgxAnalyticsGoogleTagManager } from '@webdpt/analytics';

if (environment.production) {
  enableProdMode();
}

// Google Analytics
NgxAnalyticsGoogleTagManager.createGaSession(environment.googleTagManager);

registerLocaleData(zh);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { Component } from '@angular/core';
import { DwAuthService, DwLanguageService, DwUserService } from '@webdpt/framework';
import { NgxAnalyticsGoogleAnalytics, NgxAnalyticsGoogleTagManager } from '@webdpt/analytics';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    langService: DwLanguageService,
    authService: DwAuthService,
    userService: DwUserService,
    googleTagManager: NgxAnalyticsGoogleTagManager) {

//    authService.isLoggedIn$.subscribe(
//      isLoggedIn => {
//        googleTagManager.setDimensionsAndMetrics([{name: 'tenantId', value: 'xxxxx'}]);
//        googleTagManager.setUsername(isLoggedIn ? userService.getUser('userId') : '');
//      }
//    );
  }
}

import { Component } from '@angular/core';
import { NgxAnalytics, NgxAnalyticsGoogleTagManager } from '@webdpt/analytics';
import { Router } from '@angular/router';
import { DwAuthService, DwUserService } from '@webdpt/framework';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-logout',
  template: `
    <label>APP ID<input [(ngModel)]="appId"></label><br/>
    <label>Tenant ID<input [(ngModel)]="tenantId"></label> <br/>
    <label>User ID<input [(ngModel)]="userId"></label> <br/>
    <button (click)="login()">登入</button>
  `
})
export class LoginComponent {
  userId: string;
  appId = 'NG-WEBDPT';
  tenantId: string;

  constructor(private googleTagManager: NgxAnalyticsGoogleTagManager, private router: Router, title: Title) {
    title.setTitle('登入');
  }


  login(): void {
    this.googleTagManager.setDimensionsAndMetrics({
      tenantId: this.tenantId,
      appId: this.appId
    });
    this.googleTagManager.setUsername(this.userId);
    setTimeout(() => {
      this.router.navigateByUrl('/');
    });

  }
}


import { Component } from '@angular/core';
import { NgxAnalyticsGoogleTagManager } from '@webdpt/analytics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  template: `
    <button [routerLink]="['/']">回列表</button>
    <button [routerLink]="['/login']">登入</button>
    <button [routerLink]="['/register']">註冊</button>
    <button (click)="logout()">登出</button>
    <router-outlet></router-outlet>
  `
})
export class IndexComponent {
  constructor(private googleTagManager: NgxAnalyticsGoogleTagManager, private router: Router) {

  }

  logout(): void {
    this.googleTagManager.setUsername('');
    this.googleTagManager.setDimensionsAndMetrics({});
    this.googleTagManager.setUsername('');
    this.router.navigateByUrl('/');

  }
}

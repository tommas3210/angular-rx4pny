import { Routes } from '@angular/router';

import { DwAuthGuardService } from '@webdpt/framework';

export const SHOWCASE_ROUTES: Routes = [
  {
    path: '', // 首頁
    pathMatch: 'prefix',
    loadChildren: './home/home.module#ShowcaseHomeModule',
    canLoad: [DwAuthGuardService],
    data: {
      dwRouteData: {
        dwAuthId: 'home'
      }
    }
  },
  {
    path: 'cms', // 後台
    pathMatch: 'prefix',
    loadChildren: '@webdpt/programs#DwCmsModule'
  },
  {
    path: 'dw-demo1', // 範本
    pathMatch: 'prefix',
    loadChildren: './programs/demo1/demo1.module#Demo1Module'
  },
  {
    path: 'dw-demo2', // 功能範本
    pathMatch: 'prefix',
    loadChildren: './programs/demo2/demo2.module#Demo2Module'
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwAuthGuardService } from '@webdpt/framework';
import { DwSysMenuComponent } from './dw-sys-menu.component';
import { DwSysMenuListComponent } from './dw-sys-menu-list/dw-sys-menu-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DwSysMenuComponent,
    data: {
      dwRouteData: {
        programId: 'dw-sys-menu'
      }
    },
    // resolve: {
    //   transaction: DwLanguageService // 平台作業多語言在framework載入
    // },
    children: [
      {
        path: '',
        component: DwSysMenuListComponent,
        canActivate: [DwAuthGuardService],
        data: {
          dwRouteData: {
            dwAuthId: 'dw-sys-menu'
          }
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwSysMenuRoutingModule { }

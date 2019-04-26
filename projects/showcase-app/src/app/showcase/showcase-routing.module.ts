import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MODULE_ROUTES } from '../routes';
import { DwLayoutDefaultComponent, DwSsoLoginComponent } from '@webdpt/framework';
import { dwAttachTabbedRoutes } from '@webdpt/framework';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DwLayoutDefaultComponent,
    children: [
//      dwAttachTabbedRoutes(MODULE_ROUTES),
      ...MODULE_ROUTES
    ],
    data: {
      tabSetHosting: true
    }
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: './auth/login.module#ShowcaseLoginModule'
  },
  {
    path: 'forget',
    pathMatch: 'full',
    loadChildren: './auth/forget/forget.module#ShowcaseForgetModule'
  },
  {
    path: 'sso-login',
    pathMatch: 'full',
    component: DwSsoLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }

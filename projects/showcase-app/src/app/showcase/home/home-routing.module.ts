import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwAuthGuardService } from '@webdpt/framework';
import { ShowcaseHomeComponent } from './home.component';
import { DwLanguageService } from '@webdpt/framework';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseHomeComponent,
    pathMatch: 'prefix',
    canActivate: [DwAuthGuardService],
    data: {
      dwRouteData: {
        programId: 'home',
        dwAuthId: 'home'
      }
    },
    resolve: {
      transaction: DwLanguageService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseHomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseHeroListComponent } from './hero-list/hero-list.component';
import { DwLanguageService, DwAuthGuardService } from '@webdpt/framework';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: ShowcaseHeroListComponent,
    canActivate: [DwAuthGuardService],
    data: {
      dwRouteData: {
        dwAuthId: 'dw-mock-demo',
        programId: 'dw-mock-demo'
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
export class ShowcaseMockDemoRoutingModule { }

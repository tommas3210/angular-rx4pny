import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadChildren: './showcase/showcase.module#ShowcaseModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // , { enableTracing: true } // debugging purposes only
    ),
  ],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

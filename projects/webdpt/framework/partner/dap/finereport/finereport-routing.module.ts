import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DwIframeFinereportComponent } from './finereport.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DwIframeFinereportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwIframeFinereportRoutingModule { }

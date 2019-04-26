import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DwIframeGeneralComponent } from './general.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DwIframeGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwIframeGeneralRoutingModule { }

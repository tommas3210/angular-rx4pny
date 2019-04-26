import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwUploadCcComponent } from './dw-upload-cc.component';
import { DwUploadCcListComponent } from './dw-upload-cc-list/dw-upload-cc-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DwUploadCcComponent,
    data: {
      dwRouteData: {
        programId: 'dw-upload-cc'
      }
    },
    children: [
      {
        path: '',
        component: DwUploadCcListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwUploadCcRoutingModule { }

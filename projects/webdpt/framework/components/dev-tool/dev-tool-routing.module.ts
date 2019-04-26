import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 可能以library方式提供，所以不可寫相對路徑
const routes: Routes = [
  {
    path: 'dw-upload-cc',
    pathMatch: 'prefix',
    loadChildren: './dw-upload-cc/dw-upload-cc.module#DwUploadCcModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwDevToolRoutingModule { }

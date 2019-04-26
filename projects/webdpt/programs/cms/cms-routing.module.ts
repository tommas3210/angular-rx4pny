import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 可能以library方式提供，所以不可寫相對路徑
const routes: Routes = [
  {
    path: 'dw-sys-menu',
    loadChildren: './dw-sys-menu/dw-sys-menu.module#DwSysMenuModule'
  },
  {
    path: 'dw-schedule-result',
    loadChildren: './dw-schedule-result/dw-schedule-result.module#DwScheduleResultModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DwCmsRoutingModule { }

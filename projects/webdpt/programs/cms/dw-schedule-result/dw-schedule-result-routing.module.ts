import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwAuthGuardService } from '@webdpt/framework';
import { DwScheduleResultComponent } from './dw-schedule-result.component';
import { DwScheduleResultListComponent } from './dw-schedule-result-list/dw-schedule-result-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: DwScheduleResultComponent,
    data: {
      dwRouteData: {
        programId: 'dw-schedule-result'
      }
    },
    // resolve: {
    //   transaction: DwLanguageService // 平台作業多語言在framework載入
    // },
    children: [
      {
        path: '',
        component: DwScheduleResultListComponent,
        canActivate: [DwAuthGuardService],
        data: {
          dwRouteData: {
            dwAuthId: 'dw-schedule-result'
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
export class DwScheduleResultRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputListwinComponent } from './input-listwin.component';
import { DwLanguageService, DwAuthGuardService } from '@webdpt/framework';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: InputListwinComponent,
    canActivate: [DwAuthGuardService],
    data: {
      dwRouteData: {
        programId: 'dw-input-listwin',
        dwAuthId: 'dw-input-listwin',
        i18n: ['select-modal-demo-order', 'select-modal-mock-data']
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
export class InputListwinRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseSendMessagesComponent } from './send-messages/send-messages.component';
import { ShowcaseRouteBackPageComponent } from './route-back-page/route-back-page.component';
import { DwLanguageService, DwAuthGuardService } from '@webdpt/framework';
import { ShowcaseSendMessagesIdComponent } from './send-messages/send-messages-id.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseSendMessagesComponent,
    canActivate: [DwAuthGuardService],
    data: {
      dwRouteData: {
        dwAuthId: 'dw-messages',
        programId: 'dw-messages'
      }
    },
    resolve: {
      transaction: DwLanguageService
    },
    children: [
      {
        path: ':id',
        pathMatch: 'full',
        component: ShowcaseSendMessagesIdComponent
      }
    ]
  },
  {
    path: 'dw-route-back-page',
    component: ShowcaseRouteBackPageComponent,
    canActivate: [DwAuthGuardService],
    data: {
      dwRouteData: {
        dwAuthId: 'dw-messages',
        programId: 'dw-messages'
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
export class ShowcaseMessagesRoutingModule { }

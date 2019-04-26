import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DwAuthGuardService, DwLanguageService } from '@webdpt/framework';
import { DocumentOrderListComponent } from './order-list/order-list.component';
import { DocumentOrderModifyComponent } from './order-modify/order-modify.component';
import { DocumentOrderCreateComponent } from './order-create/order-create.component';
import { DocumentOrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    data: {
      dwRouteData: {
        programId: 'dw-document-order'
      }
    },
    resolve: {
      transaction: DwLanguageService
    },
    children: [
      {
        path: '',
        component: DocumentOrderListComponent,
        canActivate: [DwAuthGuardService],
        data: {
          dwRouteData: {
            dwAuthId: 'dw-document-order'
          }
        }
      },
      {
        path: 'dw-document-order-modify',
        component: DocumentOrderModifyComponent,
        canActivate: [DwAuthGuardService],
        data: {
          dwRouteData: {
            dwAuthId: 'dw-document-order-modify'
          }
        }
      },
      {
        path: 'dw-document-order-create',
        component: DocumentOrderCreateComponent,
        canActivate: [DwAuthGuardService],
        data: {
          dwRouteData: {
            dwAuthId: 'dw-document-order-create'
          }
        }
      },
      {
        path: 'dw-document-order-detail',
        component: DocumentOrderDetailComponent,
        canActivate: [DwAuthGuardService],
        data: {
          dwRouteData: {
            dwAuthId: 'dw-document-order-detail'
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
export class DocumentOrderRoutingModule { }

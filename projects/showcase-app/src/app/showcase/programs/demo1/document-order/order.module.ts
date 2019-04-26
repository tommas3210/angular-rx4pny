import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseSharedModule } from '../../../shared/shared.module';
import { DocumentOrderListComponent } from './order-list/order-list.component';
import { DocumentOrderModifyComponent } from './order-modify/order-modify.component';
import { DocumentOrderRoutingModule } from './order-routing.module';
import { DocumentOrderSlaveEditComponent } from './modals/order-slave-edit/order-slave-edit.component';
import { DwDocument, DwDocumentModule } from '@webdpt/framework';
import { DocumentOrderCreateComponent } from './order-create/order-create.component';
import { DocumentOrderDetailComponent } from './order-detail/order-detail.component';
import { CustomerClientPagingService } from './modals/customer/customer-client-paging.service';

@NgModule({
  imports: [
    CommonModule,
    DocumentOrderRoutingModule,
    ShowcaseSharedModule,
    DwDocumentModule
  ],
  declarations: [
    DocumentOrderCreateComponent,
    DocumentOrderDetailComponent,
    DocumentOrderModifyComponent,
    DocumentOrderListComponent,
    DocumentOrderSlaveEditComponent,
  ],
  entryComponents: [
    DocumentOrderSlaveEditComponent,
    ], // 對話框使用component模式，需要加入自定義component
  providers: [
    DwDocument,
    CustomerClientPagingService,
    { provide: 'DocumentResource', useValue: 'DEMO_DAP_CURRENT/DemoOrder' }
  ],
  exports: [
    DocumentOrderCreateComponent,
    DocumentOrderDetailComponent,
    DocumentOrderModifyComponent,
    DocumentOrderListComponent]
})
export class DocumentOrderModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputListwinRoutingModule } from './input-listwin-routing.module';
import { InputListwinComponent } from './input-listwin.component';
import { ShowcaseSharedModule } from '../../../shared/shared.module';
import { DemoOrderServerPagingService } from '../../../shared/select-modal/demo-order/demo-order-server-paging.service';
import { MockDataClientPagingService } from '../../../shared/select-modal/mock-data/mock-data-client-paging.service';


const PROVIDERS = [
  DemoOrderServerPagingService,
  MockDataClientPagingService
];


@NgModule({
  imports: [
    CommonModule,
    InputListwinRoutingModule,
    ShowcaseSharedModule
  ],
  declarations: [InputListwinComponent],
  providers: [
    ...PROVIDERS
  ]
})
export class InputListwinModule { }

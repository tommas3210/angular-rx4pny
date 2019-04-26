import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseSharedModule } from '../../../shared/shared.module';
import { ShowcaseMessagesRoutingModule } from './messages-routing.module';
import { ShowcaseSendMessagesComponent } from './send-messages/send-messages.component';
import { ShowcaseSinglePageComponent } from './single-page/single-page.component';
import { ShowcaseSinglePageBatchComponent } from './single-page-batch/single-page-batch.component';
import { ShowcaseRoutedMessageComponent } from './routed-message/routed-message.component';
import { ShowcaseRouteBackPageComponent } from './route-back-page/route-back-page.component';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { ShowcaseSendMessagesIdComponent } from './send-messages/send-messages-id.component';

@NgModule({
  imports: [
    CommonModule,
    ShowcaseSharedModule,
    NgQuicksilverModule,
    ShowcaseMessagesRoutingModule,
  ],
  declarations: [
    ShowcaseSendMessagesComponent,
    ShowcaseSendMessagesIdComponent,
    ShowcaseSinglePageComponent,
    ShowcaseSinglePageBatchComponent,
    ShowcaseRoutedMessageComponent,
    ShowcaseRouteBackPageComponent]
})
export class ShowcaseMessagesModule {
}

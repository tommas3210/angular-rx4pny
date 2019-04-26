import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgQuicksilverModule } from 'ng-quicksilver';

import { DwSelectModalComponent } from './select-modal.component';
import { DwSelectModalService } from './service/select-modal.service';
import { DwSelectModalSearchPipe } from './pipe/select-modal-search.pipe';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgQuicksilverModule,
    TranslateModule,
  ],
  declarations: [DwSelectModalComponent, DwSelectModalSearchPipe],
  entryComponents: [ // 所有要 [ 動態 ] 加載的組件, 都需要在entryComponents模塊部分進行聲明。
    DwSelectModalComponent
  ],
  providers: [
    DwSelectModalService
  ]
})
export class DwSelectModalModule { }

import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkUIModule, DwDocument } from '@webdpt/framework';

import { DwScheduleResultRoutingModule } from './dw-schedule-result-routing.module';
import { DwScheduleResultComponent } from './dw-schedule-result.component';
import { DwScheduleResultListComponent } from './dw-schedule-result-list/dw-schedule-result-list.component';
import { DwScheduleResultMessageComponent } from './dw-schedule-result-message/dw-schedule-result-message.component';

// 排程任務記錄
@NgModule({
  imports: [
    CommonModule,
    FrameworkUIModule,
    DwScheduleResultRoutingModule
  ],
  declarations: [
    DwScheduleResultComponent,
    DwScheduleResultListComponent,
    DwScheduleResultMessageComponent
  ],
  entryComponents: [ // 對話框使用component模式，需要加入自定義component
    DwScheduleResultMessageComponent
  ],
  exports: [
    DwScheduleResultRoutingModule,
    DwScheduleResultComponent,
    DwScheduleResultListComponent,
    DwScheduleResultMessageComponent
  ],
  providers: [
    DwDocument,
    { provide: 'DocumentResource', useValue: 'DWSys/schedule/result' } // 排程執行結果
  ],
})
export class DwScheduleResultModule {
  static forRoot(providers: Provider[]): ModuleWithProviders {
    return {
      ngModule: DwScheduleResultModule,
      providers: [
        ...providers
      ]
    };
  }
}

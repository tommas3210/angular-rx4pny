import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DwMockInMemoryService } from './mock-in-memory.service';



/**
 * 模擬資料
 *
 * @export
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DwMockInMemoryService,
      {
        passThruUnknownUrl: true,
        apiBase: '/'
      })
  ],
  declarations: [],
  providers: []
})
export class DwMockModule {
  // static forRoot(mock: {db, methods}): ModuleWithProviders {
  //   return {
  //     ngModule: DwMockModule,
  //     providers: [
  //       ...mockInMemoryInit(mock)
  //     ]
  //   };
  // }
}

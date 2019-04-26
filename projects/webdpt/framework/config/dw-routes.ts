import { Routes } from '@angular/router';

import { DwExceptionComponent } from '../components/exception/exception.component';
import { DwIframeFinereportComponent } from '../partner/dap/finereport/finereport.component';
import { DwIframeGeneralComponent } from '../components/dw-iframe/general/general.component';

export const DW_ROUTES: Routes = [
  {
    path: 'exception/:type', // 異常狀態訊息頁
    pathMatch: 'prefix',
    component: DwExceptionComponent
  },
  {
    path: 'fr-reports/:programId',
    component: DwIframeFinereportComponent
  },
  {
    path: 'gen-reports/:programId',
    component: DwIframeGeneralComponent
  },
  {
    path: 'dev-tool', // 開發工具
    pathMatch: 'prefix',
    loadChildren: '@webdpt/framework#DwDevToolModule'
  }
];

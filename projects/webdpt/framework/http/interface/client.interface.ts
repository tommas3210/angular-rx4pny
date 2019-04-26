import { HttpHeaders, HttpParams } from '@angular/common/http';

import { IDwLoadMaskCfg } from '../../components/loading/interface/loading.interface';

export interface IDwRequestUiOptions {
  loadMaskCfg: IDwLoadMaskCfg; // 加載遮罩設定值
}

export interface IDwRequestOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body' | 'events' | 'response';
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  body?: any;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
  uiOptions?: IDwRequestUiOptions; // 前端參數
}

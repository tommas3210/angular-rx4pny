import { Observable } from 'rxjs';
import { IDwIframe } from './dw-iframe.interface';


/**
 * 內嵌外部網頁動態串接網址可插入Service設計邏輯
 */
export interface IDwIframeGeneralService {
  getIframeGeneralData(item: IDwIframe): Observable<IDwIframe>;
}


/**
 * 內嵌外部網頁資訊
 */
export interface IDwIframeGeneralInfoService {
  generalInfo(menuId: string): Observable<IDwIframe>;
}

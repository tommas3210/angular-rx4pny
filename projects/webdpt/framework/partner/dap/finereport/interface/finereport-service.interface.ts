import { Observable } from 'rxjs';
import { IDwIframe } from '../../../../components/dw-iframe/interface/dw-iframe.interface';


/**
 * Finereport動態串接網址可插入Service設計邏輯
 */
export interface IDwIframeFinereportService {

  getIframeFinereportData(item: IDwIframe): Observable<IDwIframe>;
}

/**
 * Finereport資訊
 */
export interface IDwIframeFinereportInfoService {
  finereportInfo(programId: string): Observable<IDwIframe>;
}


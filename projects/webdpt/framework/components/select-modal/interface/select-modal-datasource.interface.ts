import { Observable } from 'rxjs';
import { DwQueryOrder } from '../../../document/model/query';


/**
 * 開窗服務取清單的規範.
 *
 */
export interface IDwSelectModalDataSource {

  getDataList(pageNumber: number, pageSize: number, queryString?: string, orderby?: DwQueryOrder): Observable<any>; // 取清單.
}

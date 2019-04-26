import { Observable } from 'rxjs';
import { IDwRouteInfo } from '../interface/route-info.interface';
export interface IDwTabRouteConfigService {
  /**
   * 取tab 設定資料
   */
  routeConfigInfos$: Observable<IDwRouteInfo[]>;
}

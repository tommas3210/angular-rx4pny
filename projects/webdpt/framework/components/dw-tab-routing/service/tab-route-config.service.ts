import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { DW_TAB_ROUTE_CONFIG_JSON } from '../../../config/system.config';
import { IDwRouteInfo } from '../../../components/dw-tab-routing/interface/route-info.interface';
import { IDwOperationMap, IDwProgram } from '../../../program-info/interface/program.interface';
import { DwOperationInfoListService } from '../../../program-info/operation-info-list.service';
import { IDwTabRouteConfigService } from '../../../components/dw-tab-routing/interface/Itab-route-config.service';

@Injectable()
export class DwTabRouteConfigService implements IDwTabRouteConfigService {
  constructor(
    private operationInfoListService: DwOperationInfoListService,
    @Inject(DW_TAB_ROUTE_CONFIG_JSON) private tabRouteConfigJson: any[]
  ) {
  }

  private newConfig(info: IDwProgram, option: IDwRouteInfo): IDwRouteInfo {
    let _option: IDwRouteInfo = {
      id: '',
      menuId: '',
      name: '',
      routerLink: '',
      type: ''
    };

    if (info) {
      _option = Object.assign(_option, option);
      _option.routerLink = info.routerLink;
      _option.type = info.type;
    }

    return _option;
  }

  get routeConfigInfos$(): Observable<any> {
    return this.operationInfoListService.operationListMap$.pipe(
      map(
        (operationListMapResp: IDwOperationMap) => {
          const tabRouteConfig: IDwRouteInfo[] = [];
          let operationListMap = {};
          if (operationListMapResp !== null) {
            operationListMap = Object.assign({}, operationListMapResp);

            this.tabRouteConfigJson.forEach(
              (tabRouteConfigJsonItem: IDwRouteInfo) => {
                const id = tabRouteConfigJsonItem.id;
                const newConfig: IDwRouteInfo = this.newConfig(operationListMap[id], tabRouteConfigJsonItem);

                if (newConfig.id !== '') {
                  tabRouteConfig.push(newConfig);
                }
              }
            );
          }

          console.log(tabRouteConfig);

            return {
            'tabRouteConfig': tabRouteConfig,
            'operationListMap': operationListMap
          };
        }
      ),
      first()
    );
  }
}

import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import { DW_TAB_ROUTE_CONFIG_JSON } from '../config/system.config';
import { IDwRouteInfo } from '../components/dw-tab-routing/interface/route-info.interface';
import { IDwOperationMap, IDwProgram } from '../program-info/interface/program.interface';
import { DwOperationInfoListService } from '../program-info/operation-info-list.service';
import { IDwTabRouteConfigService } from '../components/dw-tab-routing/interface/Itab-route-config.service';
import { DwIamPermissionInfoService } from './iam-permission-info.service';
import { IDwAuthorizedList } from '../auth/model/authorized.model';

@Injectable()
export class DwIamTabRouteConfigService implements IDwTabRouteConfigService {
  constructor(
    private iamPermissionInfo: DwIamPermissionInfoService,
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
      switch (info.type) {
        case 'fineReport':
          _option['code'] = info.code;
          _option['id'] = info['id'];
          _option['menuId'] = info.menuId;
          break;
      }
      _option.routerLink = info.routerLink;
      _option.type = info.type;
    }

    return _option;
  }

  get routeConfigInfos$(): Observable<any> {
    return Observable.create(observer => {
      const operationSubc = this.operationInfoListService.operationListMap$.subscribe(res => {
        if (res !== null) {
          const operationListMap = Object.assign({}, res);

          // 為了讓報表可以透過code如s-sampleApp1-Main-frm可以在operationListMap中找到，所以再將code加入key中。
          // tslint:disable-next-line:forin
          for (const id in res) {
            const code = res[id].code;
            if (code && !res[code]) {
              operationListMap[res[id].code] = Object.assign({id, menuId: id}, res[id]);
            }
          }

          const permissionSubc = this.iamPermissionInfo.authorizedList$.subscribe(auths => {
            const authorizedList = Object.assign({}, auths);
            const tabRouteConfig: IDwRouteInfo[] = [];
            this.tabRouteConfigJson.forEach(
              (tabRouteConfigJsonItem: IDwRouteInfo) => {
                const id = tabRouteConfigJsonItem.id;
                let check = false;
                if (id === 'home') {
                  check = true;
                } else if (authorizedList[id]) {
                  check = true;
                }

                if (check) {
                  const newConfig: IDwRouteInfo = this.newConfig(operationListMap[id], tabRouteConfigJsonItem);
                  if (newConfig.id !== '') {
                    tabRouteConfig.push(newConfig);
                  }
                } else if (operationListMap[id]) {
                  const newConfig: IDwRouteInfo = this.newConfig(operationListMap[id], tabRouteConfigJsonItem);
                  if (newConfig.id !== '') {
                    if (newConfig.type === 'fineReport' || newConfig.type === 'externalUrl') {
//                      if (newConfig.type === 'fineReport') {
//                        newConfig.id = operationListMap[id].code;
//                      }
                      if (newConfig.type === 'externalUrl') {
                        newConfig.menuId = newConfig.id;
                      }
                      tabRouteConfig.push(newConfig);
                    }
                  }
                }
              });


            observer.next({
              'tabRouteConfig': tabRouteConfig,
              'operationListMap': operationListMap
            });
            observer.complete();
            if (operationSubc) {
              operationSubc.unsubscribe();
            }
            if (permissionSubc) {
              permissionSubc.unsubscribe();
            }
          }, error => console.log(error));

        }
      });
    });



    // return this.operationInfoListService.operationListMap$.pipe(
    //   switchMap(
    //     (operationListMapResp: IDwOperationMap) => {
    //       return this.iamPermissionInfo.authorizedList$;
    //     },
    //     (operationListMapResp: IDwOperationMap, authorizedListResp: IDwAuthorizedList) => {
    //       const tabRouteConfig: IDwRouteInfo[] = [];
    //       let operationListMap = {};
    //       if (operationListMapResp !== null) {
    //         operationListMap = Object.assign({}, operationListMapResp);
    //         const authorizedList = Object.assign({}, authorizedListResp);

    //         this.tabRouteConfigJson.forEach(
    //           (tabRouteConfigJsonItem: IDwRouteInfo) => {
    //             const id = tabRouteConfigJsonItem.id;
    //             let check = false;

    //             if (id === 'home') {
    //               check = true;
    //             } else if (authorizedList[id]) {
    //               check = true;
    //             }

    //             if (check) {
    //               const newConfig: IDwRouteInfo = this.newConfig(operationListMap[id], tabRouteConfigJsonItem);

    //               if (newConfig.id !== '') {
    //                 tabRouteConfig.push(newConfig);
    //               }
    //             } else if (operationListMap[id]) {
    //               const newConfig: IDwRouteInfo = this.newConfig(operationListMap[id], tabRouteConfigJsonItem);

    //               if (newConfig.id !== '') {

    //                 if (newConfig.type === 'fineReport') {
    //                   newConfig.id = operationListMap[id].code;
    //                 }
    //                 if (newConfig.type === 'externalUrl') {
    //                   newConfig.menuId = newConfig.id;
    //                 }
    //                 tabRouteConfig.push(newConfig);
    //               }
    //             }

    //           });
    //       }

    //       return {
    //         'tabRouteConfig': tabRouteConfig,
    //         'operationListMap': operationListMap
    //       };
    //     }
    //   ),
    //   first()
    // );
  }
}

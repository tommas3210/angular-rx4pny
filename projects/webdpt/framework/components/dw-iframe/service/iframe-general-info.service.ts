import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import { IDwIframeGeneralInfoService } from '../interface/dw-iframe-service.interface';
import { IDwIframe } from '../interface/dw-iframe.interface';
import { DwIframeGeneralService } from './iframe-general.service';
import { DwMenuService } from '../../menu/service/menu.service';
import { IDwMenuConfigMap } from '../../menu/interface/menu.interface';

@Injectable()
export class DwIframeGeneralInfoService implements IDwIframeGeneralInfoService {
  constructor(
    private menuService: DwMenuService,
    private dwIframeGeneralService: DwIframeGeneralService
  ) {
  }

  public generalInfo(programId: string): Observable<IDwIframe> {
    const item: IDwIframe = {
      url: '',
      type: 'externalUrl'
    };

    const menuId = programId; // menuId當作業編號，為了查詢設定在Menu的資訊

    // 報表參數 = 報表固定參數 + 設定的參數 + 帆軟報表數位簽章
    // 最後交給dwIframeGeneralService主導最終報表網址資訊
    return  this.menuService.getMenuConfigMap().pipe(
      switchMap(
        (menuConfigMap: IDwMenuConfigMap) => {
          const menuObj = menuConfigMap[menuId];
          item.url = '';

          if (menuObj) {
            const menu = JSON.parse(JSON.stringify(menuObj));
            if (menu.url) {
              item.url = menu.url;
            }
          }

          return this.dwIframeGeneralService.getIframeGeneralData(item);
        },
        (menuConfigMap: IDwMenuConfigMap, iframeData: IDwIframe) => {
          return iframeData;
        }
      ),
      first()
    );
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { DwIamPermissionInfoService } from './iam-permission-info.service';
import { IDwAuthorizedService } from '../auth/interface/authorized-service.interface';
import { IDwAuthorizedList } from '../auth/model/authorized.model';
import { DwExceptionService } from '../components/exception/exception.service';
import { dwLanguagePre } from '../components/language/model/language-pre';

/**
 * IAM作業與功能權限
 *
 * @export
 */
@Injectable()
export class DwIamAuthorizedService implements IDwAuthorizedService {
  authorizedList: IDwAuthorizedList; // 作業內部頁面

  constructor(
    private iamPermissionInfo: DwIamPermissionInfoService,
    private exceptionService: DwExceptionService,
    private translateService: TranslateService
  ) {
  }

  canLoad(url: string): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  /**
   * 路由是否可啟用
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.iamPermissionInfo.authorizedList$.pipe(
      map(
        response => {
          // null：登出時未取權限, []:已登入時無權限, undefined: 發生http error
          // 等登入後的廣播取得權限資料再進入判斷
          if (response) {
            const authorizedList = <IDwAuthorizedList>response;
            // return this._canActive(route, authorizedList);
            let isActive = false;
            let dwAuthId = '';

            const dwRouteData = route.data.dwRouteData;

            if (dwRouteData) {
              if (dwRouteData.hasOwnProperty('dwAuthId')) {
                dwAuthId = dwRouteData.dwAuthId;

                if (dwAuthId === 'home') {
                  isActive = true;
                } else if (authorizedList !== undefined) {
                  if (authorizedList[dwAuthId] !== undefined) {
                    isActive = true;
                  }
                }
              }
            }

            this.canActivateMessage(isActive, dwAuthId);
            return isActive;
          }
        }
      ),
      catchError((error: any, msg: Observable<any>): any => {
        const isActive = false;

        return Observable.create(
          (observer) => {
            observer.next(isActive);
            observer.complete();
          }
        );
      })
    );
  }

  private canActivateMessage(isActive: boolean, dwAuthId: string): void {
    if (!isActive) {
      const descDetail = [];

      // 作業或子頁面名稱
      let lable: string = this.translateService.instant(dwLanguagePre.page + dwAuthId);
      lable = lable.toString();

      if (lable.indexOf(dwLanguagePre.page) !== 0) {
        descDetail.push(lable + '(' + dwAuthId + ')');
      } else {
        lable = this.translateService.instant(dwLanguagePre.program + dwAuthId);

        if (lable.indexOf(dwLanguagePre.program) !== 0) {
          descDetail.push(lable + '(' + dwAuthId + ')');
        }
      }

      this.exceptionService.showMessage(403, descDetail);
    }
  }
}

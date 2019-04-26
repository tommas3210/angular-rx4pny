
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { DwIamPermissionInfoService } from './iam-permission-info.service';
import { IDwActionAuthorizedService } from '../components/action/interface/action-authorized.interface';
import { IDwAuthorizedList, IDwAuthorizedItem, IDwAuthorizedAction } from '../auth/model/authorized.model';

@Injectable()
export class DwIamActionAuthorizedService implements IDwActionAuthorizedService {
  private restriction: string;
  private actionAuthorizedSubject: BehaviorSubject<string>;

  constructor(private iamPermissionInfo: DwIamPermissionInfoService) {
  }

  /**
   * 設定功能權限資料
   *
   * @param dwAuthorizedId 作業權限ID
   * @param dwActionId 功能按鈕ID
   */
  public setActionAuth(dwAuthorizedId: string, dwActionId: string): void {
    this.restriction = null;
    this.actionAuthorizedSubject = new BehaviorSubject<string>(this.restriction);
    let authorizedList: IDwAuthorizedList; // 作業與功能權限
    this.iamPermissionInfo.authorizedList$.pipe().subscribe(
      response => {
        authorizedList = <IDwAuthorizedList>response;
        const authorized: IDwAuthorizedItem = authorizedList[dwAuthorizedId];

        if (authorized) {
          let action: IDwAuthorizedAction[] = [];

          // 功能按鈕權限記錄在作業中，如果是子頁面就要以作業編號找功能權限
          if (authorized.programId === dwAuthorizedId) {
            action = authorized.action;
          } else {
            const programAuthorized = authorizedList[authorized.programId];
            if (programAuthorized) {
              action = programAuthorized.action;
            }
          }

          action = action.filter(
            value => {
              return value.id === dwActionId;
            }
          );

          if (action.length === 1) {
            if (action[0].hasOwnProperty('id') && action[0].hasOwnProperty('restriction')) {
              this.restriction = action[0].restriction;
            }
          }
        }

        this.actionAuthorizedSubject.next(this.restriction);
      },
      (error: any) => {
        authorizedList = {};
        console.log(dwAuthorizedId + '(' + dwActionId + '):');
        console.log(error);
      }
    );
  }

  /**
   * 提供訂閱功能權限資料
   */
  get actionAuthorizedSubject$(): Observable<string> {
    return this.actionAuthorizedSubject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }
}

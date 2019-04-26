import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs';

import { DwUserService } from '../../auth/user.service';
import { DwUserStorage } from '../../auth/user-storage';
import { DwIamRepository } from './repository/iam-repository';
import { DW_APP_ID } from '../../config/system.config';


@Injectable()
export class DwDapUserService extends DwUserService {
  constructor(
    protected userStorage: DwUserStorage,
    private iamRepository: DwIamRepository,
    @Inject(DW_APP_ID) private appId: string
  ) {
    super(userStorage);
  }

  /**
   * 获取有權限的租户清單.
   *
   * returns {Observable<any>}
   */
  getTenantList(): Observable<any> {
    return this.iamRepository.getTenantList(this.appId);
  }


  /**
   * 獲取用戶的租戶信息.
   * 調用時, 如果有的userId時, 會依userId取得對應值, 如果沒有userId時, 會解析digi-middleware-auth-user取得對應值.
   *
   * param {string} userToken
   * returns {Observable<any>}
   */
  getUserInfo(userId?: string): Observable<any> {
    return this.iamRepository.getUserInfo(userId);
  }

  /**
   * 設定租户清單並發送.
   *
   * returns void.
   */
  setTenantList(currTenantList: any): void {
    this.setUserInfo({
      currTenantList: currTenantList
    });
    this.currTenantList = currTenantList;
    this.tenantSubject.next(currTenantList);
  }

}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import {DwUserStorage} from './user-storage';


@Injectable()
export class DwUserService {

  tenantSubject: BehaviorSubject<any[]>;
  currTenantList = [];

  /**
  * 取用即時更改內容(存入名稱 = 取出鍵名)
  */
  public userInfo = {};

  constructor(protected userStorage: DwUserStorage) {
    // reload 時, 可以取出已經儲存的資料.
    const userInfo = this.userStorage.get('DwUserInfo');
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
    }

    this.currTenantList = (this.getUser('currTenantList')) ? this.getUser('currTenantList') : [];

    // 使用BehaviorSubject是為了給初始值, 尤其在 F5 reload 時, 可以讀取 session storage 的值.
    this.tenantSubject = new BehaviorSubject<any[]>(this.currTenantList);
  }

  // 取得租戶清單.
  get currTenantList$(): Observable<any[]> {
    return this.tenantSubject;
  }

  /**
   * 儲存內容
   * string 須用 {id: key, value: data}傳入
   */
  public setUser(userInfo: any): void {
    if (!userInfo.id) {
      return;
    }
    this.userInfo[userInfo.id] = userInfo.value;
    this.userStorage.set('DwUserInfo', JSON.stringify(this.userInfo));
  }


  /**
   * 獲取儲存內容(對應id下資料)
   */
  public getUser(key: string): any {
    if (!key) {
      return;
    }

    return this.userInfo[key];
  }

  /**
   * 獲取詳細儲存內容.
   */
  public getUserDetail(): any {
    return this.userInfo;
  }

  /**
   * 清除所有儲存內容(只能清除屬於user的資料).
   */
  public clearUser(): void {
    this.userStorage.remove('DwUserInfo');
    this.userInfo = {};
  }


  /**
   * 取得使用者資訊.
   * return 返回Observable
   */
  public read(userId: string): Observable<object> {
    const info = {
      success: true,
      description: '', // 取值失敗時, 顯示.
      userInfo: null // 取得的回傳值.
    };

    const userInfo = {
      userId: userId,
      userName: userId
    };

    info.userInfo = userInfo;

    this.setUserInfo(userInfo);

    return Observable.create((observer) => {
      observer.next(info);
      observer.complete(); // 在 create 裡, 需要 complete.
    });
  }

  /**
   * 批次儲存使用者資訊.
   *
   * param {*} userInfo
   */
  public setUserInfo(userInfo: any): void {
    for (const field of Object.keys(userInfo)) {
      this.setUser({ id: field, value: userInfo[field] });
    }
  }

  /**
   * 获取有權限的租户清單.
   *
   * returns {Observable<any>}
   */
  getTenantList(): Observable<any> {
    return new Observable((observer): void => {
      observer.next([]);
      observer.complete();
    });
  }

  /**
   * 獲取用戶的租戶信息.
   * 調用時, 如果有的userId時, 會依userId取得對應值, 如果沒有userId時, 會解析digi-middleware-auth-user取得對應值.
   *
   * param {string} userToken
   * returns {Observable<any>}
   */
  getUserInfo(userId?: string): Observable<any> {
    return new Observable((observer): void => {
      observer.next({});
      observer.complete();
    });
  }

  /**
   * 設定租户清單並發送.
   *
   * returns void.
   */
  setTenantList(currTenantList: any): void {
  }

}


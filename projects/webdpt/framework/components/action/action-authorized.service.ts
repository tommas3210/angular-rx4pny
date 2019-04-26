import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { IDwActionAuthorizedService } from './interface/action-authorized.interface';

@Injectable()
export class DwActionAuthorizedService implements IDwActionAuthorizedService {
  private restriction: string; // 按鈕功能限制：allow 允許, hidden 隱藏, disabled 禁用
  private actionAuthorizedSubject: BehaviorSubject<string>;

  constructor() {
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
    this.restriction = 'allow';
    this.actionAuthorizedSubject.next(this.restriction);
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

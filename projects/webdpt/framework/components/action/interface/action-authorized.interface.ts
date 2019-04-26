import { Observable } from 'rxjs';

export interface IDwActionAuthorizedService {
  /**
   * 設定功能權限資料
   *
   * @param dwAuthorizedId 作業權限ID
   * @param dwActionId 功能按鈕ID
   */
  setActionAuth(dwAuthorizedId: string, dwActionId: string): void;

  /**
   * 提供訂閱功能權限資料
   */
  actionAuthorizedSubject$: Observable<string>;
}

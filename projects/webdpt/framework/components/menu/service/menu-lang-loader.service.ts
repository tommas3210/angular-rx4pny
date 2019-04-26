import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { DwAuthService } from '../../../auth/auth.service';


@Injectable()
export class DwMenuLangLoaderService {

  constructor(
    private authService: DwAuthService
  ) { }

  /**
   * 選單翻譯檔載入器
   *
   * @param lang 語系
   * @param [spinning=true] 是否顯示HTTP加載遮罩
   */
  getTranslation(lang: string, spinning: boolean = true): Observable<any> {
    const isLoggedIn = this.authService.isLoggedIn; // 是否已登入
    const subject: Subject<any> = new Subject<any>();

    subject.complete();

    return subject.asObservable();
  }
}

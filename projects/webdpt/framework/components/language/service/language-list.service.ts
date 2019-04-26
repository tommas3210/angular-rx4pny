import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';

import { IDwLanguageList } from '../interface/language.interface';
import { IDwLanguageListService } from '../interface/language-list-service.interface';
import { DW_LANGUAGE_JSON } from '../../../config/system.config';

@Injectable()
export class DwLanguageListService implements IDwLanguageListService {
  private languageListSubject: BehaviorSubject<IDwLanguageList[]>;

  constructor(
    @Inject(DW_LANGUAGE_JSON) private languageList: IDwLanguageList[] // 可用語言清單
  ) {
    this.languageListSubject = new BehaviorSubject<IDwLanguageList[]>(null);
    let list = JSON.parse(JSON.stringify(this.languageList));

    if (!Array.isArray(list)) {
      list = [];
    }

    this.languageListSubject.next(list);
  }

  /**
   * 取得可用語言清單
   */
  getLanguagesList(): Observable<IDwLanguageList[]> {
    return this.languageListSubject.asObservable().pipe(
      filter(obsData => obsData !== null), // 不廣播初始值
      distinctUntilChanged() // 有改變時才廣播
    );
  }
}

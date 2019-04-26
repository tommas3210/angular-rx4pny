import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { DwAuthService } from '../auth/auth.service';
import { DwLanguageI18nRepository } from '../components/language/repository/language-i18n-repository';

@Injectable()
export class DwProgramInfoLangLoaderService {

  constructor(
    private languageI18nRepository: DwLanguageI18nRepository,
    private authService: DwAuthService
  ) { }

  /**
   * 作業資訊翻譯檔載入器
   * @param lang 語系
   */
  getTranslation(lang: string): Observable<any> {
    const isLoggedIn = this.authService.isLoggedIn; // 是否已登入
    const subject: Subject<any> = new Subject<any>();

    if (isLoggedIn) {
      this.languageI18nRepository.basic(lang).subscribe(
        (translation: any) => {
          const translationProg = translation.prog ? translation.prog : {};
          subject.next(translationProg);
          subject.complete();
        }
      );
    } else {
      subject.complete();
    }

    return subject.asObservable();
  }
}

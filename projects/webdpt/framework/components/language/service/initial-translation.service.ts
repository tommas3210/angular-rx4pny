// import { Injectable } from '@angular/core';
// import { TranslateLoader } from '@ngx-translate/core';
// import { Observable } from 'rxjs';

// import { DwLanguageI18nRepository } from '../repository/language-i18n-repository';

// /**
//  * 處理初始翻譯(公共內容)
//  *
//  * 注入順序TranslateLoader -> TranslateService -> DwLanguageService，
//  * 所以 TranslateLoader 不能循環注入 TranslateService 或 DwLanguageService
//  */
// @Injectable()
// export class DwInitialTranslationService implements TranslateLoader {

//   constructor(
//     private languageI18nRepository: DwLanguageI18nRepository
//   ) {
//   }

//   /**
//    * 回傳初始翻譯
//    */
//   getTranslation(lang: string): Observable<any> {
//     return this.languageI18nRepository.basic(lang);
//   }
// }

import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgQuicksilverModule } from 'ng-quicksilver';
import { TranslateModule } from '@ngx-translate/core';

import { DW_LANGUAGE_JSON, DW_LANG_LOADER } from '../../config/system.config';
import { languageList } from './model/language.config';
import { DwLanguageService } from './service/language.service';
import { DwInitialLangLoaderService } from './service/initial-lang-loader.service';
import { DwLanguageListService } from './service/language-list.service';
import { DwLanguageLoaderService } from './service/language-loader.service';
import { DwViewLangLoaderService } from './service/view-lang-loader.service';
import { DwLanguageComponent } from './language.component';
import { DwLanguageI18nRepository } from './repository/language-i18n-repository';
import { DwLanguageStylePipe } from './pipe/language-style.pipe';

// const dwLanguageServiceInitFactory = (initializer: DwLanguageInitializer): Function => {
//   return (): Promise<any> => initializer.init();
// };

// const dwLanguageServiceFactory = (initializer: DwLanguageInitializer): DwLanguageService => {
//   return initializer.getService();
// };

// @Injectable()
// export class DwLanguageInitializer {
//   private _dwLanguageService: DwLanguageService;
//   constructor(
//     private http: HttpClient,
//     private dwI18nService: DwI18nService,
//     private localStorage: LocalStorage,
//     private translateService: TranslateService
//   ) { }
//   // getService(): DwLanguageService {
//   //   return this._dwLanguageService;
//   // }
//   init(): Promise<any> {
//     return new Promise((resolve): any => {
//       this._dwLanguageService = new DwLanguageService(
//         this.http,
//         this.dwI18nService,
//         this.localStorage,
//         this.translateService
//       );
//       resolve();
//     });
//   }
// }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgQuicksilverModule
  ],
  declarations: [DwLanguageComponent],
  exports: [
    TranslateModule,
    DwLanguageComponent
  ]
})
export class DwLanguageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DwLanguageModule,
      providers: [
        DwLanguageService,
        DwLanguageI18nRepository,
        // DwLanguageInitializer,
        // {
        //   provide: DwLanguageService,
        //   useFactory: dwLanguageServiceFactory,
        //   deps: [DwLanguageInitializer]
        // },
        // {
        //   provide: APP_INITIALIZER,
        //   useFactory: dwLanguageServiceInitFactory,
        //   deps: [DwLanguageInitializer],
        //   multi: true
        // },
        { provide: DW_LANGUAGE_JSON, useValue: languageList }, // 語言清單
        // ngx-translate 國際化
        ...TranslateModule.forRoot({
          // loader: { // 速度如果比其他loader慢，會把已載入的清空
          //   provide: TranslateLoader,
          //   useClass: DwInitialTranslationService
          // },
          isolate: true,
          useDefaultLang: false
        }).providers,
        DwLanguageListService,
        DwLanguageLoaderService,
        DwLanguageStylePipe,
        // 初始翻譯檔載入器
        DwInitialLangLoaderService,
        {
          provide: DW_LANG_LOADER,
          useExisting: DwInitialLangLoaderService,
          multi: true
        },
        // 畫面翻譯檔載入器
        DwViewLangLoaderService,
        {
          provide: DW_LANG_LOADER,
          useExisting: DwViewLangLoaderService,
          multi: true
        }
      ]
    };
  }
}

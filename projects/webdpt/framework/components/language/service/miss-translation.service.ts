import { Injectable } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import 'rxjs/add/observable/of';
declare let require: any;

/**
 * 處理初始翻譯(公共內容)
 *
 * @export
 */
@Injectable()
export class DwMissingTranslationService implements MissingTranslationHandler {

  constructor(
  ) {
  }

  /**
   * 處理丟失翻譯
   */
  handle(params: MissingTranslationHandlerParams): any {
    return params.key;
  }
}


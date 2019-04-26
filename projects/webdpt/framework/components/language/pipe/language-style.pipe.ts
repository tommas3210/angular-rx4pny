import { PipeTransform, Pipe } from '@angular/core';
import { DwLanguageService } from '../service/language.service';

@Pipe({
  name: 'dwLanguage'
})
export class DwLanguageStylePipe implements PipeTransform {

  private language: string = ''; // 語言別

  constructor(
    private languageService: DwLanguageService,
  ) {
  }

  transform(value: number): string {

    // 取得最新語言別
    this.languageService.language$.subscribe(
      lang => {
        this.language = lang;
      }
    );

    return this.language;
  }

}

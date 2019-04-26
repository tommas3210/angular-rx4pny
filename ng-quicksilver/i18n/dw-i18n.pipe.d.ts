import { PipeTransform } from '@angular/core';
import { DwI18nService } from './dw-i18n.service';
export declare class DwI18nPipe implements PipeTransform {
    private _locale;
    constructor(_locale: DwI18nService);
    transform(path: string, keyValue?: object): string;
}

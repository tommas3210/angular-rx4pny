import { EventEmitter } from '@angular/core';
import { DwCalendarI18nInterface } from '../../../i18n/dw-i18n.interface';
export declare class OkButtonComponent {
    locale: DwCalendarI18nInterface;
    okDisabled: boolean;
    clickOk: EventEmitter<void>;
    prefixCls: string;
}

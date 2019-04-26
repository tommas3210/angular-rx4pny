import { EventEmitter } from '@angular/core';
import { DwCalendarI18nInterface } from '../../../i18n/dw-i18n.interface';
export declare class TimePickerButtonComponent {
    locale: DwCalendarI18nInterface;
    timePickerDisabled: boolean;
    showTimePicker: boolean;
    showTimePickerChange: EventEmitter<boolean>;
    prefixCls: string;
    onClick(): void;
}

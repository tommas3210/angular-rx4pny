import { EventEmitter, OnInit } from '@angular/core';
import { DwCalendarI18nInterface } from '../../../i18n/dw-i18n.interface';
import { DwI18nService } from '../../../i18n/dw-i18n.service';
import { CandyDate } from '../candy-date';
export declare class CalendarInputComponent implements OnInit {
    private i18n;
    locale: DwCalendarI18nInterface;
    format: string;
    placeholder: string;
    disabledDate: (d: Date) => boolean;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    prefixCls: string;
    invalidInputClass: string;
    constructor(i18n: DwI18nService);
    ngOnInit(): void;
    onInputKeyup(event: Event): void;
    toReadableInput(value: CandyDate): string;
    private checkValidInputDate;
}

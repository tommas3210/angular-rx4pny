import { EventEmitter, OnInit } from '@angular/core';
import { DwCalendarI18nInterface } from '../../../i18n/dw-i18n.interface';
import { CandyDate } from '../candy-date';
export declare class MonthPanelComponent implements OnInit {
    locale: DwCalendarI18nInterface;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    disabledDate: (date: Date) => boolean;
    yearPanelShow: EventEmitter<void>;
    prefixCls: string;
    constructor();
    ngOnInit(): void;
    previousYear(): void;
    nextYear(): void;
    private gotoYear;
}

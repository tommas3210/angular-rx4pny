import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DwCalendarI18nInterface } from '../../../i18n/dw-i18n.interface';
import { DwI18nService } from '../../../i18n/dw-i18n.service';
import { CandyDate } from '../candy-date';
export declare class TodayButtonComponent implements OnInit, OnChanges {
    private i18n;
    locale: DwCalendarI18nInterface;
    hasTimePicker: boolean;
    disabledDate: (d: Date) => boolean;
    clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isDisabled: boolean;
    readonly title: string;
    private now;
    constructor(i18n: DwI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onClickToday(): void;
}

import { EventEmitter, OnInit } from '@angular/core';
import { DwI18nService as I18n } from '../i18n/dw-i18n.service';
export declare class DwCalendarHeaderComponent implements OnInit {
    private i18n;
    mode: 'month' | 'year';
    modeChange: EventEmitter<'month' | 'year'>;
    fullscreen: boolean;
    activeDate: Date;
    yearChange: EventEmitter<number>;
    monthChange: EventEmitter<number>;
    yearOffset: number;
    yearTotal: number;
    years: Array<{
        label: string;
        value: number;
    }>;
    months: Array<{
        label: string;
        value: number;
    }>;
    readonly activeYear: number;
    readonly activeMonth: number;
    readonly size: string;
    readonly yearTypeText: string;
    readonly monthTypeText: string;
    private prefixCls;
    constructor(i18n: I18n);
    ngOnInit(): void;
    updateYear(year: number): void;
    private setUpYears;
    private setUpMonths;
}

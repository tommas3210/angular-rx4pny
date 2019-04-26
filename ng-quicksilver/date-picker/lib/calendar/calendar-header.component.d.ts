import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DwCalendarI18nInterface } from '../../../i18n/dw-i18n.interface';
import { DwI18nService } from '../../../i18n/dw-i18n.service';
import { PanelMode } from '../../standard-types';
import { CandyDate } from '../candy-date';
export declare class CalendarHeaderComponent implements OnInit, OnChanges {
    private i18n;
    locale: DwCalendarI18nInterface;
    enablePrev: boolean;
    enableNext: boolean;
    disabledMonth: (date: Date) => boolean;
    showTimePicker: boolean;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    panelMode: PanelMode;
    panelModeChange: EventEmitter<PanelMode>;
    chooseDecade: EventEmitter<CandyDate>;
    chooseYear: EventEmitter<CandyDate>;
    chooseMonth: EventEmitter<CandyDate>;
    prefixCls: string;
    yearMonthDaySelectors: YearMonthDaySelector[];
    private yearToMonth;
    constructor(i18n: DwI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    previousYear(): void;
    nextYear(): void;
    previousMonth(): void;
    nextMonth(): void;
    changePanel(mode: PanelMode, value?: CandyDate): void;
    onChooseDecade(value: CandyDate): void;
    onChooseYear(value: CandyDate): void;
    onChooseMonth(value: CandyDate): void;
    changeToMonthPanel(): void;
    private render;
    private gotoMonth;
    private gotoYear;
    private changeValueFromInside;
    private formatDateTime;
    private createYearMonthDaySelectors;
}
export interface YearMonthDaySelector {
    className: string;
    title?: string;
    label: string;
    onClick?(): void;
}

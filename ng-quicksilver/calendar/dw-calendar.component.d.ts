import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DwI18nService as I18n } from '../i18n/dw-i18n.service';
export declare class DwCalendarComponent implements ControlValueAccessor, OnInit {
    private i18n;
    dwMode: 'month' | 'year';
    dwModeChange: EventEmitter<'month' | 'year'>;
    dwValue: Date;
    dwValueChange: EventEmitter<Date>;
    dwDateCell: TemplateRef<{
        $implicit: Date;
    }>;
    dwDateFullCell: TemplateRef<{
        $implicit: Date;
    }>;
    dwMonthCell: TemplateRef<{
        $implicit: Date;
    }>;
    dwMonthFullCell: TemplateRef<{
        $implicit: Date;
    }>;
    dwFullscreen: boolean;
    dwCard: boolean;
    dateCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    dateFullCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    monthCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    monthFullCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    fullscreen: boolean;
    daysInWeek: DayCellContext[];
    monthsInYear: MonthCellContext[];
    dateMatrix: DateCellContext[][];
    activeDate: Date;
    currentDateRow: number;
    currentDateCol: number;
    activeDateRow: number;
    activeDateCol: number;
    currentMonthRow: number;
    currentMonthCol: number;
    activeMonthRow: number;
    activeMonthCol: number;
    dateCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    dateFullCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    monthCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    monthFullCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    private prefixCls;
    private currentDate;
    private onChangeFn;
    private onTouchFn;
    private readonly calendarStart;
    constructor(i18n: I18n);
    ngOnInit(): void;
    onModeChange(mode: 'month' | 'year'): void;
    onDateSelect(date: Date): void;
    onYearSelect(year: number): void;
    onMonthSelect(month: number): void;
    writeValue(value: Date | null): void;
    registerOnChange(fn: (date: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    private updateDate;
    private setUpDaysInWeek;
    private setUpMonthsInYear;
    private setUpDateMatrix;
    private calculateCurrentDate;
    private calculateActiveDate;
    private calculateCurrentMonth;
    private calculateActiveMonth;
}
export interface DayCellContext {
    title: string;
    label: string;
}
export interface MonthCellContext {
    title: string;
    label: string;
    start: Date;
}
export interface DateCellContext {
    title: string;
    label: string;
    rel: 'last' | 'current' | 'next';
    value: Date;
}

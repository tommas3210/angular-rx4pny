import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DwI18nService } from '../../../i18n/dw-i18n.service';
import { CandyDate } from '../candy-date';
export declare class MonthTableComponent implements OnInit, OnChanges {
    private i18n;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    disabledDate: (date: Date) => boolean;
    prefixCls: string;
    panelMonths: PanelMonthData[][];
    constructor(i18n: DwI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    trackPanelMonth(index: number, monthData: PanelMonthData): number;
    private render;
    private makePanelMonths;
    private chooseMonth;
}
export interface PanelMonthData {
    disabled: boolean;
    content: string;
    month: number;
    title: string;
    classMap: object;
    onClick(): void;
}

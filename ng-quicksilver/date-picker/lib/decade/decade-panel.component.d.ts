import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DwCalendarI18nInterface } from '../../../i18n/dw-i18n.interface';
import { CandyDate } from '../candy-date';
export declare class DecadePanelComponent implements OnChanges {
    locale: DwCalendarI18nInterface;
    value: CandyDate;
    valueChange: EventEmitter<CandyDate>;
    readonly startYear: number;
    readonly endYear: number;
    prefixCls: string;
    panelDecades: PanelDecadeData[][];
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    previousCentury(): void;
    nextCentury(): void;
    trackPanelDecade(index: number, decadeData: PanelDecadeData): string;
    private render;
    private gotoYear;
    private chooseDecade;
    private makePanelDecades;
}
export interface PanelDecadeData {
    content: string;
    title: string;
    isCurrent: boolean;
    isLowerThanStart: boolean;
    isBiggerThanEnd: boolean;
    classMap: object;
    onClick(): void;
}

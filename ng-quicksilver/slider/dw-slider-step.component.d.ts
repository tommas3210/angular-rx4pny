import { OnChanges, SimpleChanges } from '@angular/core';
import { MarksArray } from './dw-slider-marks.component';
export declare class DwSliderStepComponent implements OnChanges {
    private _vertical;
    private _included;
    dwLowerBound: number;
    dwUpperBound: number;
    dwMarksArray: MarksArray;
    dwPrefixCls: string;
    dwVertical: boolean;
    dwIncluded: boolean;
    attrs: Array<{
        id: number;
        value: number;
        offset: number;
        classes: {
            [key: string]: boolean;
        };
        style: object;
    }>;
    ngOnChanges(changes: SimpleChanges): void;
    trackById(index: number, attr: {
        id: number;
        value: number;
        offset: number;
        classes: {
            [key: string]: boolean;
        };
        style: object;
    }): number;
    buildAttrs(): void;
    togglePointActive(): void;
}

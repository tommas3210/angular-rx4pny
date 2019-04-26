import { OnChanges, SimpleChanges } from '@angular/core';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
import { DwSliderComponent } from './dw-slider.component';
export declare class DwSliderHandleComponent implements OnChanges {
    private _slider;
    dwClassName: string;
    dwVertical: string;
    dwOffset: number;
    dwValue: number;
    dwTipFormatter: (value: number) => string;
    dwActive: boolean;
    tooltip: DwToolTipComponent;
    tooltipTitle: string;
    style: object;
    constructor(_slider: DwSliderComponent);
    ngOnChanges(changes: SimpleChanges): void;
    onMouseEnter($event: MouseEvent): void;
    onMouseLeave($event: MouseEvent): void;
    private _updateTooltipTitle;
    private _updateTooltipPosition;
    private _updateStyle;
}

import { ElementRef } from '@angular/core';
import { DwOptionComponent } from './dw-option.component';
export declare class DwOptionLiComponent {
    private elementRef;
    el: Element;
    selected: boolean;
    active: boolean;
    dwOption: DwOptionComponent;
    dwShowActive: boolean;
    compareWith: (o1: any, o2: any) => boolean;
    dwActiveOption: DwOptionComponent;
    dwListOfSelectedValue: any[];
    constructor(elementRef: ElementRef);
}

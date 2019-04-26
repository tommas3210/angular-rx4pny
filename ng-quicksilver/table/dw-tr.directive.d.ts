import { ElementRef, Renderer2 } from '@angular/core';
import { DwTableComponent } from './dw-table.component';
export declare class DwTrDirective {
    private elementRef;
    private renderer;
    dwTableComponent: DwTableComponent;
    dwExpand: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, dwTableComponent: DwTableComponent);
}

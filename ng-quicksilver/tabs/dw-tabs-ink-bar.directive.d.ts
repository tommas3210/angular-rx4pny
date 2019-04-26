import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { DwTabPositionMode } from './dw-tabset.component';
export declare class DwTabsInkBarDirective {
    private renderer;
    private elementRef;
    private ngZone;
    private _animated;
    dwAnimated: boolean;
    dwPositionMode: DwTabPositionMode;
    constructor(renderer: Renderer2, elementRef: ElementRef, ngZone: NgZone);
    alignToElement(element: HTMLElement): void;
    show(): void;
    setDisplay(value: string): void;
    getLeftPosition(element: HTMLElement): string;
    getElementWidth(element: HTMLElement): string;
    getTopPosition(element: HTMLElement): string;
    getElementHeight(element: HTMLElement): string;
}

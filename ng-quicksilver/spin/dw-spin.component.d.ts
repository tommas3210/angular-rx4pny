import { AfterViewInit, ElementRef, NgZone, Renderer2, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class DwSpinComponent implements AfterViewInit {
    private elementRef;
    private renderer;
    private zone;
    private _tip;
    private _delay;
    el: HTMLElement;
    isNested: boolean;
    baseSpinning$: BehaviorSubject<boolean>;
    resultSpinning$: Observable<boolean>;
    containerElement: ElementRef;
    dwIndicator: TemplateRef<void>;
    dwSize: string;
    dwDelay: number;
    dwTip: string;
    dwSpinning: boolean;
    checkNested(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, zone: NgZone);
    ngAfterViewInit(): void;
}

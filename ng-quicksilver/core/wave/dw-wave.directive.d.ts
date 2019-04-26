import { ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
export declare class DwWaveDirective implements OnInit, OnDestroy {
    private ngZone;
    private elementRef;
    private waveRenderer;
    dwWaveExtraNode: boolean;
    constructor(ngZone: NgZone, elementRef: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

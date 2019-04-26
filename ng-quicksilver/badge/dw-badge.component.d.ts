import { AfterViewInit, ElementRef, NgZone, OnInit, Renderer2 } from '@angular/core';
export declare type DwBadgeStatusType = 'success' | 'processing' | 'default' | 'error' | 'warning';
export declare class DwBadgeComponent implements OnInit, AfterViewInit {
    private zone;
    private renderer;
    private elementRef;
    private _showDot;
    private _showZero;
    private _count;
    maxNumberArray: any[];
    countArray: any[];
    countSingleArray: number[];
    contentElement: ElementRef;
    dwOverflowCount: number;
    dwText: string;
    dwStyle: {
        [key: string]: string;
    };
    dwStatus: DwBadgeStatusType;
    dwShowZero: boolean;
    dwDot: boolean;
    dwCount: number;
    readonly showSup: boolean;
    checkContent(): void;
    constructor(zone: NgZone, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}

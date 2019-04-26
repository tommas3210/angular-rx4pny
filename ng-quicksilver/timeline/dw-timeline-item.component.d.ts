import { ElementRef, OnInit, Renderer2, TemplateRef } from '@angular/core';
export declare class DwTimelineItemComponent implements OnInit {
    private renderer;
    private _dot;
    private _color;
    private _isLast;
    liTemplate: ElementRef;
    isDotString: boolean;
    classMap: any;
    isLast: boolean;
    dwDot: string | TemplateRef<void>;
    dwColor: string;
    updateClassMap(): void;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
}

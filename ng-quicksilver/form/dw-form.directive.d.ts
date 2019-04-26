import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
export declare class DwFormDirective implements OnInit {
    private elementRef;
    private renderer;
    private dwUpdateHostClassService;
    el: HTMLElement;
    prefixCls: string;
    private _layout;
    dwLayout: string;
    setClassMap(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, dwUpdateHostClassService: DwUpdateHostClassService);
    ngOnInit(): void;
}

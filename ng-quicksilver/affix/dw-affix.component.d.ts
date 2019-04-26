import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DwScrollService } from '../core/scroll/dw-scroll.service';
export declare class DwAffixComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private _el;
    private cd;
    private timeout;
    private events;
    private affixStyle;
    private placeholderStyle;
    private wrap;
    private _target;
    dwTarget: Element | Window;
    private _offsetTop;
    dwOffsetTop: number;
    private _offsetBottom;
    dwOffsetBottom: number;
    dwChange: EventEmitter<boolean>;
    constructor(scrollSrv: DwScrollService, _el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    private setTargetEventListeners;
    private clearEventListeners;
    ngOnDestroy(): void;
    private getTargetRect;
    getOffset(element: Element, target: Element | Window | null): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    private genStyle;
    private setAffixStyle;
    private setPlaceholderStyle;
    updatePosition(e: any): void;
}

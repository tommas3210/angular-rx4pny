import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DwScrollService } from '../core/scroll/dw-scroll.service';
export declare class DwBackTopComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private cd;
    private scroll$;
    private target;
    visible: boolean;
    dwTemplate: TemplateRef<void>;
    private _visibilityHeight;
    dwVisibilityHeight: number;
    dwTarget: HTMLElement;
    dwClick: EventEmitter<boolean>;
    constructor(scrollSrv: DwScrollService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    clickBackTop(): void;
    private getTarget;
    private handleScroll;
    private removeListen;
    private registerScrollEvent;
    ngOnDestroy(): void;
}

import { ElementRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DwCollapseComponent } from './dw-collapse.component';
export declare class DwCollapsePanelComponent implements OnDestroy, OnInit {
    private dwCollapseComponent;
    private elementRef;
    private _disabled;
    private _showArrow;
    private _active;
    private _header;
    isHeaderString: boolean;
    private el;
    dwActiveChange: EventEmitter<boolean>;
    dwShowArrow: boolean;
    readonly isNoArrow: boolean;
    dwHeader: string | TemplateRef<void>;
    dwDisabled: boolean;
    dwActive: boolean;
    clickHeader(): void;
    constructor(dwCollapseComponent: DwCollapseComponent, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

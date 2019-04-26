import { ElementRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DwAnchorComponent } from './dw-anchor.component';
export declare class DwAnchorLinkComponent implements OnInit, OnDestroy {
    el: ElementRef;
    private anchorComp;
    dwHref: string;
    titleStr: string;
    titleTpl: TemplateRef<void>;
    dwTitle: string | TemplateRef<void>;
    dwTemplate: TemplateRef<void>;
    active: boolean;
    constructor(el: ElementRef, anchorComp: DwAnchorComponent);
    ngOnInit(): void;
    goToClick(e: Event): void;
    ngOnDestroy(): void;
}

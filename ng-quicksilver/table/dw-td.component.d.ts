import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
export declare class DwTdComponent {
    private elementRef;
    private renderer;
    private _showExpand;
    private _indentSize;
    private _expand;
    private _showCheckbox;
    isIndentSizeSet: boolean;
    el: HTMLElement;
    dwChecked: boolean;
    dwDisabled: boolean;
    dwIndeterminate: boolean;
    dwCheckedChange: EventEmitter<boolean>;
    dwExpandChange: EventEmitter<boolean>;
    dwIndentSize: number;
    dwExpand: boolean;
    dwShowExpand: boolean;
    dwShowCheckbox: boolean;
    dwLeft: string;
    dwRight: string;
    updateExpandIconClass(): void;
    expandChange(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}

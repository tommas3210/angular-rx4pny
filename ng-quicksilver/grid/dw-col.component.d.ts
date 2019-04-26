import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChange } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { DwRowComponent } from './dw-row.component';
import { DwRowDirective } from './dw-row.directive';
export interface EmbeddedProperty {
    span: number;
    pull: number;
    push: number;
    offset: number;
    order: number;
}
export declare class DwColComponent implements OnInit, OnChanges {
    private dwUpdateHostClassService;
    private elementRef;
    dwRowComponent: DwRowComponent;
    dwRowDirective: DwRowDirective;
    private renderer;
    private el;
    private prefixCls;
    readonly paddingLeft: number;
    readonly paddingRight: number;
    dwSpan: number;
    dwOrder: number;
    dwOffset: number;
    dwPush: number;
    dwPull: number;
    dwXs: number | EmbeddedProperty;
    dwSm: number | EmbeddedProperty;
    dwMd: number | EmbeddedProperty;
    dwLg: number | EmbeddedProperty;
    dwXl: number | EmbeddedProperty;
    dwXXl: number | EmbeddedProperty;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    generateClass(): object;
    readonly dwRow: DwRowComponent;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    constructor(dwUpdateHostClassService: DwUpdateHostClassService, elementRef: ElementRef, dwRowComponent: DwRowComponent, dwRowDirective: DwRowDirective, renderer: Renderer2);
    ngOnInit(): void;
}

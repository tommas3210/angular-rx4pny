import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { DwToolTipComponent } from './dw-tooltip.component';
export declare class DwTooltipDirective implements AfterViewInit, OnInit, OnDestroy {
    elementRef: ElementRef;
    hostView: ViewContainerRef;
    resolver: ComponentFactoryResolver;
    renderer: Renderer2;
    tooltip: DwToolTipComponent;
    private unsubscribe$;
    isTooltipOpen: boolean;
    isDynamicTooltip: boolean;
    delayTimer: any;
    _title: string | TemplateRef<void>;
    _content: string | TemplateRef<void>;
    _overlayClassName: string;
    _overlayStyle: {
        [key: string]: string;
    };
    _mouseEnterDelay: number;
    _mouseLeaveDelay: number;
    _visible: boolean;
    _trigger: string;
    _placement: string;
    factory: ComponentFactory<DwToolTipComponent>;
    dwVisibleChange: EventEmitter<boolean>;
    dwTitle: string | TemplateRef<void>;
    setTitle: string | TemplateRef<void>;
    dwContent: string | TemplateRef<void>;
    dwOverlayClassName: string;
    dwOverlayStyle: {
        [key: string]: string;
    };
    dwMouseEnterDelay: number;
    dwMouseLeaveDelay: number;
    dwVisible: boolean;
    dwTrigger: string;
    dwPlacement: string;
    readonly isOpen: boolean;
    private show;
    private hide;
    private delayEnterLeave;
    updateCompValue(key: string, value: any): void;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: DwToolTipComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

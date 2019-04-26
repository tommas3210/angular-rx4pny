import { ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { DwTooltipDirective } from '../tooltip/dw-tooltip.directive';
import { DwPopconfirmComponent } from './dw-popconfirm.component';
export declare class DwPopconfirmDirective extends DwTooltipDirective implements OnInit, OnDestroy {
    private subclassUnsubscribe$;
    factory: ComponentFactory<DwPopconfirmComponent>;
    _condition: boolean;
    _okText: string;
    _okType: string;
    _cancelText: string;
    dwOnCancel: EventEmitter<void>;
    dwOnConfirm: EventEmitter<void>;
    dwOkText: string;
    dwOkType: string;
    dwCancelText: string;
    dwCondition: boolean;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: DwPopconfirmComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

import { ComponentFactory, ComponentFactoryResolver, ElementRef, Renderer2, ViewContainerRef } from '@angular/core';
import { DwTooltipDirective } from '../tooltip/dw-tooltip.directive';
import { DwPopoverComponent } from './dw-popover.component';
export declare class DwPopoverDirective extends DwTooltipDirective {
    factory: ComponentFactory<DwPopoverComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: DwPopoverComponent);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Host, HostBinding, Input, Optional, Renderer2 } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { DwRowComponent } from './dw-row.component';
import { DwRowDirective } from './dw-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
export class DwColComponent {
    /**
     * @param {?} dwUpdateHostClassService
     * @param {?} elementRef
     * @param {?} dwRowComponent
     * @param {?} dwRowDirective
     * @param {?} renderer
     */
    constructor(dwUpdateHostClassService, elementRef, dwRowComponent, dwRowDirective, renderer) {
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this.elementRef = elementRef;
        this.dwRowComponent = dwRowComponent;
        this.dwRowDirective = dwRowDirective;
        this.renderer = renderer;
        this.prefixCls = 'ant-col';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.dwRow && this.dwRow.actualGutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.dwRow && this.dwRow.actualGutter / 2;
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [`${this.prefixCls}-${this.dwSpan}`]: isNotNil(this.dwSpan), [`${this.prefixCls}-order-${this.dwOrder}`]: isNotNil(this.dwOrder), [`${this.prefixCls}-offset-${this.dwOffset}`]: isNotNil(this.dwOffset), [`${this.prefixCls}-pull-${this.dwPull}`]: isNotNil(this.dwPull), [`${this.prefixCls}-push-${this.dwPush}`]: isNotNil(this.dwPush) }, this.generateClass());
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['dwXs', 'dwSm', 'dwMd', 'dwLg', 'dwXl', 'dwXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            /** @type {?} */
            const sizeName = name.replace('dw', '').toLowerCase();
            if (isNotNil(this[name])) {
                if ((typeof (this[name]) === 'number') || (typeof (this[name]) === 'string')) {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name].span}`] = this[name] && isNotNil(this[name].span);
                    listClassMap[`${this.prefixCls}-${sizeName}-pull-${this[name].pull}`] = this[name] && isNotNil(this[name].pull);
                    listClassMap[`${this.prefixCls}-${sizeName}-push-${this[name].push}`] = this[name] && isNotNil(this[name].push);
                    listClassMap[`${this.prefixCls}-${sizeName}-offset-${this[name].offset}`] = this[name] && isNotNil(this[name].offset);
                    listClassMap[`${this.prefixCls}-${sizeName}-order-${this[name].order}`] = this[name] && isNotNil(this[name].order);
                }
            }
        });
        return listClassMap;
    }
    /**
     * @return {?}
     */
    get dwRow() {
        return this.dwRowComponent || this.dwRowDirective;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
DwColComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-col',
                providers: [DwUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
DwColComponent.ctorParameters = () => [
    { type: DwUpdateHostClassService },
    { type: ElementRef },
    { type: DwRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: DwRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: Renderer2 }
];
DwColComponent.propDecorators = {
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
    dwSpan: [{ type: Input }],
    dwOrder: [{ type: Input }],
    dwOffset: [{ type: Input }],
    dwPush: [{ type: Input }],
    dwPull: [{ type: Input }],
    dwXs: [{ type: Input }],
    dwSm: [{ type: Input }],
    dwMd: [{ type: Input }],
    dwLg: [{ type: Input }],
    dwXl: [{ type: Input }],
    dwXXl: [{ type: Input }]
};
function DwColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwColComponent.prototype.el;
    /** @type {?} */
    DwColComponent.prototype.prefixCls;
    /** @type {?} */
    DwColComponent.prototype.dwSpan;
    /** @type {?} */
    DwColComponent.prototype.dwOrder;
    /** @type {?} */
    DwColComponent.prototype.dwOffset;
    /** @type {?} */
    DwColComponent.prototype.dwPush;
    /** @type {?} */
    DwColComponent.prototype.dwPull;
    /** @type {?} */
    DwColComponent.prototype.dwXs;
    /** @type {?} */
    DwColComponent.prototype.dwSm;
    /** @type {?} */
    DwColComponent.prototype.dwMd;
    /** @type {?} */
    DwColComponent.prototype.dwLg;
    /** @type {?} */
    DwColComponent.prototype.dwXl;
    /** @type {?} */
    DwColComponent.prototype.dwXXl;
    /** @type {?} */
    DwColComponent.prototype.dwUpdateHostClassService;
    /** @type {?} */
    DwColComponent.prototype.elementRef;
    /** @type {?} */
    DwColComponent.prototype.dwRowComponent;
    /** @type {?} */
    DwColComponent.prototype.dwRowDirective;
    /** @type {?} */
    DwColComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZ3JpZC9kdy1jb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLEtBQUssRUFHTCxRQUFRLEVBQ1IsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCcEQsTUFBTTs7Ozs7Ozs7SUFvRUosWUFBb0Isd0JBQWtELEVBQVUsVUFBc0IsRUFBNkIsY0FBOEIsRUFBNkIsY0FBOEIsRUFBVSxRQUFtQjtRQUFyTyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUE2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBNkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzt5QkFsRXJPLFNBQVM7UUFtRTNCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDekM7Ozs7SUFsRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztLQUNsRDs7OztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVks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b250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5pbXBvcnQgeyBEd1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vZHctcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1Jvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZHctcm93LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkZWRQcm9wZXJ0eSB7XG4gIHNwYW46IG51bWJlcjtcbiAgcHVsbDogbnVtYmVyO1xuICBwdXNoOiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xuICBvcmRlcjogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWNvbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1jb2wuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3Q29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNvbCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5kd1JvdyAmJiB0aGlzLmR3Um93LmFjdHVhbEd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZHdSb3cgJiYgdGhpcy5kd1Jvdy5hY3R1YWxHdXR0ZXIgLyAyO1xuICB9XG5cbiAgQElucHV0KCkgZHdTcGFuOiBudW1iZXI7XG4gIEBJbnB1dCgpIGR3T3JkZXI6IG51bWJlcjtcbiAgQElucHV0KCkgZHdPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgZHdQdXNoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGR3UHVsbDogbnVtYmVyO1xuICBASW5wdXQoKSBkd1hzOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBkd1NtOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBkd01kOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBkd0xnOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBkd1hsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBkd1hYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3U3Bhbn1gIF0gICAgICAgICA6IGlzTm90TmlsKHRoaXMuZHdTcGFuKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW9yZGVyLSR7dGhpcy5kd09yZGVyfWAgXSAgOiBpc05vdE5pbCh0aGlzLmR3T3JkZXIpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tb2Zmc2V0LSR7dGhpcy5kd09mZnNldH1gIF06IGlzTm90TmlsKHRoaXMuZHdPZmZzZXQpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcHVsbC0ke3RoaXMuZHdQdWxsfWAgXSAgICA6IGlzTm90TmlsKHRoaXMuZHdQdWxsKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXB1c2gtJHt0aGlzLmR3UHVzaH1gIF0gICAgOiBpc05vdE5pbCh0aGlzLmR3UHVzaCksXG4gICAgICAuLi50aGlzLmdlbmVyYXRlQ2xhc3MoKVxuICAgIH07XG4gICAgdGhpcy5kd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0IHtcbiAgICBjb25zdCBsaXN0T2ZTaXplSW5wdXROYW1lID0gWyAnZHdYcycsICdkd1NtJywgJ2R3TWQnLCAnZHdMZycsICdkd1hsJywgJ2R3WFhsJyBdO1xuICAgIGNvbnN0IGxpc3RDbGFzc01hcCA9IHt9O1xuICAgIGxpc3RPZlNpemVJbnB1dE5hbWUuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHNpemVOYW1lID0gbmFtZS5yZXBsYWNlKCdkdycsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbIG5hbWUgXSkpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YodGhpc1sgbmFtZSBdKSA9PT0gJ251bWJlcicpIHx8ICh0eXBlb2YgKHRoaXNbIG5hbWUgXSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1sgbmFtZSBdfWAgXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzWyBuYW1lIF0uc3Bhbn1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnNwYW4pO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LXB1bGwtJHt0aGlzWyBuYW1lIF0ucHVsbH1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnB1bGwpO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LXB1c2gtJHt0aGlzWyBuYW1lIF0ucHVzaH1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnB1c2gpO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LW9mZnNldC0ke3RoaXNbIG5hbWUgXS5vZmZzZXR9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5vZmZzZXQpO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LW9yZGVyLSR7dGhpc1sgbmFtZSBdLm9yZGVyfWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ub3JkZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xuICB9XG5cbiAgZ2V0IGR3Um93KCk6IER3Um93Q29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5kd1Jvd0NvbXBvbmVudCB8fCB0aGlzLmR3Um93RGlyZWN0aXZlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbIHByb3BlcnR5TmFtZTogc3RyaW5nIF06IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBkd1Jvd0NvbXBvbmVudDogRHdSb3dDb21wb25lbnQsIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIGR3Um93RGlyZWN0aXZlOiBEd1Jvd0RpcmVjdGl2ZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=
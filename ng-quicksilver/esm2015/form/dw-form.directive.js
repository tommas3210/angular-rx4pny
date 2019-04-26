/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
export class DwFormDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} dwUpdateHostClassService
     */
    constructor(elementRef, renderer, dwUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this.prefixCls = 'ant-form';
        this._layout = 'horizontal';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLayout(value) {
        this._layout = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwLayout() {
        return this._layout;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-${this.dwLayout}`]: this.dwLayout
        };
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
DwFormDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dw-form]',
                providers: [DwUpdateHostClassService]
            },] }
];
/** @nocollapse */
DwFormDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: DwUpdateHostClassService }
];
DwFormDirective.propDecorators = {
    dwLayout: [{ type: Input }]
};
function DwFormDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwFormDirective.prototype.el;
    /** @type {?} */
    DwFormDirective.prototype.prefixCls;
    /** @type {?} */
    DwFormDirective.prototype._layout;
    /** @type {?} */
    DwFormDirective.prototype.elementRef;
    /** @type {?} */
    DwFormDirective.prototype.renderer;
    /** @type {?} */
    DwFormDirective.prototype.dwUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImZvcm0vZHctZm9ybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFNdEYsTUFBTTs7Ozs7O0lBdUJKLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSx3QkFBa0Q7UUFBL0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO3lCQXJCdkgsVUFBVTt1QkFDSixZQUFZO1FBcUI1QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDOzs7OztJQXBCRCxJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7OztJQUVELFdBQVc7O1FBQ1QsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLEVBQW1CLElBQUk7WUFDOUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEQsQ0FBQztRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsRTs7OztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFHLFdBQVc7Z0JBQ3RCLFNBQVMsRUFBRSxDQUFFLHdCQUF3QixDQUFFO2FBQ3hDOzs7O1lBTm1CLFVBQVU7WUFBaUIsU0FBUztZQUMvQyx3QkFBd0I7Ozt1QkFXOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiAnW2R3LWZvcm1dJyxcbiAgcHJvdmlkZXJzOiBbIER3VXBkYXRlSG9zdENsYXNzU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIER3Rm9ybURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJlZml4Q2xzID0gJ2FudC1mb3JtJztcbiAgcHJpdmF0ZSBfbGF5b3V0ID0gJ2hvcml6b250YWwnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0xheW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbGF5b3V0ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3TGF5b3V0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dDtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc31gIF0gICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5kd0xheW91dH1gIF06IHRoaXMuZHdMYXlvdXRcbiAgICB9O1xuICAgIHRoaXMuZHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBkd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxufVxuIl19
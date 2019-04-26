/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwTableComponent } from './dw-table.component';
export class DwTrDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} dwTableComponent
     */
    constructor(elementRef, renderer, dwTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dwTableComponent = dwTableComponent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwExpand(value) {
        if (toBoolean(value)) {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
        else {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
        }
    }
}
DwTrDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'tr',
                host: {
                    '[class.ant-table-row]': 'dwTableComponent'
                }
            },] }
];
/** @nocollapse */
DwTrDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: DwTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
DwTrDirective.propDecorators = {
    dwExpand: [{ type: Input }]
};
function DwTrDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTrDirective.prototype.elementRef;
    /** @type {?} */
    DwTrDirective.prototype.renderer;
    /** @type {?} */
    DwTrDirective.prototype.dwTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10ci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFVeEQsTUFBTTs7Ozs7O0lBYUosWUFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUE2QixnQkFBa0M7UUFBbEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtLQUVySTs7Ozs7SUFiRCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQ3BGO0tBQ0Y7OztZQW5CRixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBTTtvQkFDUix1QkFBdUIsRUFBRSxrQkFBa0I7aUJBQzVDO2FBQ0Y7Ozs7WUFWbUIsVUFBVTtZQUF5QixTQUFTO1lBRXZELGdCQUFnQix1QkF1Qm1ELElBQUksWUFBSSxRQUFROzs7dUJBWHpGLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPcHRpb25hbCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd1RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10YWJsZS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3RyJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yb3ddJzogJ2R3VGFibGVDb21wb25lbnQnXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEd1RyRGlyZWN0aXZlIHtcblxuICBASW5wdXQoKVxuICBzZXQgZHdFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodG9Cb29sZWFuKHZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFibGUtZXhwYW5kZWQtcm93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtdGFibGUtZXhwYW5kZWQtcm93Jyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIGR3VGFibGVDb21wb25lbnQ6IER3VGFibGVDb21wb25lbnQpIHtcblxuICB9XG59XG4iXX0=
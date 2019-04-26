/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Host, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwTableComponent } from './dw-table.component';
var DwTrDirective = /** @class */ (function () {
    function DwTrDirective(elementRef, renderer, dwTableComponent) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dwTableComponent = dwTableComponent;
    }
    Object.defineProperty(DwTrDirective.prototype, "dwExpand", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (toBoolean(value)) {
                this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
            else {
                this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-table-expanded-row');
            }
        },
        enumerable: true,
        configurable: true
    });
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
    DwTrDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: DwTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    DwTrDirective.propDecorators = {
        dwExpand: [{ type: Input }]
    };
    return DwTrDirective;
}());
export { DwTrDirective };
function DwTrDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTrDirective.prototype.elementRef;
    /** @type {?} */
    DwTrDirective.prototype.renderer;
    /** @type {?} */
    DwTrDirective.prototype.dwTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10ci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBdUJ0RCx1QkFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUE2QixnQkFBa0M7UUFBbEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtLQUVySTtJQWJELHNCQUNJLG1DQUFROzs7OztRQURaLFVBQ2EsS0FBYztZQUN6QixJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7YUFDakY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0Y7OztPQUFBOztnQkFuQkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQU07d0JBQ1IsdUJBQXVCLEVBQUUsa0JBQWtCO3FCQUM1QztpQkFDRjs7OztnQkFWbUIsVUFBVTtnQkFBeUIsU0FBUztnQkFFdkQsZ0JBQWdCLHVCQXVCbUQsSUFBSSxZQUFJLFFBQVE7OzsyQkFYekYsS0FBSzs7d0JBZFI7O1NBWWEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSW5wdXQsIE9wdGlvbmFsLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3VGFibGVDb21wb25lbnQgfSBmcm9tICcuL2R3LXRhYmxlLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAndHInLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLXJvd10nOiAnZHdUYWJsZUNvbXBvbmVudCdcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIER3VHJEaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0V4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0b0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC10YWJsZS1leHBhbmRlZC1yb3cnKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgZHdUYWJsZUNvbXBvbmVudDogRHdUYWJsZUNvbXBvbmVudCkge1xuXG4gIH1cbn1cbiJdfQ==
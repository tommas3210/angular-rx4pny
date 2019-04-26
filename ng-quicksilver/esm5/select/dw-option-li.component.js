/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { DwOptionComponent } from './dw-option.component';
var DwOptionLiComponent = /** @class */ (function () {
    function DwOptionLiComponent(elementRef) {
        this.elementRef = elementRef;
        this.selected = false;
        this.active = false;
        this.dwShowActive = true;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(DwOptionLiComponent.prototype, "dwActiveOption", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.active = this.compareWith(value.dwValue, this.dwOption.dwValue);
            }
            else {
                this.active = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwOptionLiComponent.prototype, "dwListOfSelectedValue", {
        set: /**
         * @param {?} valueList
         * @return {?}
         */
        function (valueList) {
            var _this = this;
            this.selected = isNotNil(valueList.find(function (v) { return _this.compareWith(v, _this.dwOption.dwValue); }));
        },
        enumerable: true,
        configurable: true
    });
    DwOptionLiComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dw-option-li]',
                    template: "<ng-container *ngIf=\"dwOption.dwCustomContent\">\n  <ng-template [ngTemplateOutlet]=\"dwOption.template\"></ng-template>\n</ng-container>\n<ng-container *ngIf=\"!dwOption.dwCustomContent\">\n  {{dwOption.dwLabel}}\n</ng-container>",
                    host: {
                        '[class.ant-select-dropdown-menu-item]': 'true',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected && !dwOption.dwDisabled',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'dwOption.dwDisabled',
                        '[class.ant-select-dropdown-menu-item-active]': 'active && !dwOption.dwDisabled && dwShowActive && !selected',
                        '[attr.unselectable]': '"unselectable"',
                        '[style.user-select]': '"none"'
                    }
                }] }
    ];
    /** @nocollapse */
    DwOptionLiComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DwOptionLiComponent.propDecorators = {
        dwOption: [{ type: Input }],
        dwShowActive: [{ type: Input }],
        compareWith: [{ type: Input }],
        dwActiveOption: [{ type: Input }],
        dwListOfSelectedValue: [{ type: Input }]
    };
    return DwOptionLiComponent;
}());
export { DwOptionLiComponent };
function DwOptionLiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwOptionLiComponent.prototype.el;
    /** @type {?} */
    DwOptionLiComponent.prototype.selected;
    /** @type {?} */
    DwOptionLiComponent.prototype.active;
    /** @type {?} */
    DwOptionLiComponent.prototype.dwOption;
    /** @type {?} */
    DwOptionLiComponent.prototype.dwShowActive;
    /** @type {?} */
    DwOptionLiComponent.prototype.compareWith;
    /** @type {?} */
    DwOptionLiComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LW9wdGlvbi1saS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBc0N4RCw2QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTt3QkF0Qi9CLEtBQUs7c0JBQ1AsS0FBSzs0QkFFVSxJQUFJO1FBb0IxQixJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDcEM7SUFqQkQsc0JBQ0ksK0NBQWM7Ozs7O1FBRGxCLFVBQ21CLEtBQXdCO1lBQ3pDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjs7O09BQUE7SUFFRCxzQkFFSSxzREFBcUI7Ozs7O1FBRnpCLFVBRTBCLFNBQWdCO1lBRjFDLGlCQUlDO1lBREMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyxDQUFDO1NBQzNGOzs7T0FBQTs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssZ0JBQWdCO29CQUM3QixtUEFBNEM7b0JBQzVDLElBQUksRUFBUzt3QkFDWCx1Q0FBdUMsRUFBVyxNQUFNO3dCQUN4RCxnREFBZ0QsRUFBRSxrQ0FBa0M7d0JBQ3BGLGdEQUFnRCxFQUFFLHFCQUFxQjt3QkFDdkUsOENBQThDLEVBQUksNkRBQTZEO3dCQUMvRyxxQkFBcUIsRUFBNkIsZ0JBQWdCO3dCQUNsRSxxQkFBcUIsRUFBNkIsUUFBUTtxQkFDM0Q7aUJBQ0Y7Ozs7Z0JBZm1CLFVBQVU7OzsyQkFvQjNCLEtBQUs7K0JBQ0wsS0FBSzs4QkFFTCxLQUFLO2lDQUVMLEtBQUs7d0NBU0wsS0FBSzs7OEJBbENSOztTQWdCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBEd09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZHctb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ1tkdy1vcHRpb24tbGldJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LW9wdGlvbi1saS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbV0nICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQgJiYgIWR3T3B0aW9uLmR3RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWRdJzogJ2R3T3B0aW9uLmR3RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXScgIDogJ2FjdGl2ZSAmJiAhZHdPcHRpb24uZHdEaXNhYmxlZCAmJiBkd1Nob3dBY3RpdmUgJiYgIXNlbGVjdGVkJyxcbiAgICAnW2F0dHIudW5zZWxlY3RhYmxlXScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdcInVuc2VsZWN0YWJsZVwiJyxcbiAgICAnW3N0eWxlLnVzZXItc2VsZWN0XScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdcIm5vbmVcIidcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd09wdGlvbkxpQ29tcG9uZW50IHtcbiAgZWw6IEVsZW1lbnQ7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBkd09wdGlvbjogRHdPcHRpb25Db21wb25lbnQ7XG4gIEBJbnB1dCgpIGR3U2hvd0FjdGl2ZSA9IHRydWU7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FjdGl2ZU9wdGlvbih2YWx1ZTogRHdPcHRpb25Db21wb25lbnQpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jb21wYXJlV2l0aCh2YWx1ZS5kd1ZhbHVlLCB0aGlzLmR3T3B0aW9uLmR3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZUxpc3Q6IGFueVtdKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGlzTm90TmlsKHZhbHVlTGlzdC5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCB0aGlzLmR3T3B0aW9uLmR3VmFsdWUpKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=
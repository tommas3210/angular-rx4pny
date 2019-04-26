/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { DwOptionComponent } from './dw-option.component';
export class DwOptionLiComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selected = false;
        this.active = false;
        this.dwShowActive = true;
        this.el = elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwActiveOption(value) {
        if (value) {
            this.active = this.compareWith(value.dwValue, this.dwOption.dwValue);
        }
        else {
            this.active = false;
        }
    }
    /**
     * @param {?} valueList
     * @return {?}
     */
    set dwListOfSelectedValue(valueList) {
        this.selected = isNotNil(valueList.find(v => this.compareWith(v, this.dwOption.dwValue)));
    }
}
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
DwOptionLiComponent.ctorParameters = () => [
    { type: ElementRef }
];
DwOptionLiComponent.propDecorators = {
    dwOption: [{ type: Input }],
    dwShowActive: [{ type: Input }],
    compareWith: [{ type: Input }],
    dwActiveOption: [{ type: Input }],
    dwListOfSelectedValue: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LW9wdGlvbi1saS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFjMUQsTUFBTTs7OztJQXdCSixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO3dCQXRCL0IsS0FBSztzQkFDUCxLQUFLOzRCQUVVLElBQUk7UUFvQjFCLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUNwQzs7Ozs7SUFqQkQsSUFDSSxjQUFjLENBQUMsS0FBd0I7UUFDekMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtLQUNGOzs7OztJQUVELElBRUkscUJBQXFCLENBQUMsU0FBZ0I7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNGOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxnQkFBZ0I7Z0JBQzdCLG1QQUE0QztnQkFDNUMsSUFBSSxFQUFTO29CQUNYLHVDQUF1QyxFQUFXLE1BQU07b0JBQ3hELGdEQUFnRCxFQUFFLGtDQUFrQztvQkFDcEYsZ0RBQWdELEVBQUUscUJBQXFCO29CQUN2RSw4Q0FBOEMsRUFBSSw2REFBNkQ7b0JBQy9HLHFCQUFxQixFQUE2QixnQkFBZ0I7b0JBQ2xFLHFCQUFxQixFQUE2QixRQUFRO2lCQUMzRDthQUNGOzs7O1lBZm1CLFVBQVU7Ozt1QkFvQjNCLEtBQUs7MkJBQ0wsS0FBSzswQkFFTCxLQUFLOzZCQUVMLEtBQUs7b0NBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IER3T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1vcHRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnW2R3LW9wdGlvbi1saV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtXScgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhZHdPcHRpb24uZHdEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnZHdPcHRpb24uZHdEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmVdJyAgOiAnYWN0aXZlICYmICFkd09wdGlvbi5kd0Rpc2FibGVkICYmIGR3U2hvd0FjdGl2ZSAmJiAhc2VsZWN0ZWQnLFxuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1widW5zZWxlY3RhYmxlXCInLFxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1wibm9uZVwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3T3B0aW9uTGlDb21wb25lbnQge1xuICBlbDogRWxlbWVudDtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3T3B0aW9uOiBEd09wdGlvbkNvbXBvbmVudDtcbiAgQElucHV0KCkgZHdTaG93QWN0aXZlID0gdHJ1ZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QWN0aXZlT3B0aW9uKHZhbHVlOiBEd09wdGlvbkNvbXBvbmVudCkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNvbXBhcmVXaXRoKHZhbHVlLmR3VmFsdWUsIHRoaXMuZHdPcHRpb24uZHdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlTGlzdDogYW55W10pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gaXNOb3ROaWwodmFsdWVMaXN0LmZpbmQodiA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHRoaXMuZHdPcHRpb24uZHdWYWx1ZSkpKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==
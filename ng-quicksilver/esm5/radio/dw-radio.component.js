/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { forwardRef, Component, ElementRef, HostListener, Inject, Input, Optional, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
import { DwRadioGroupComponent } from './dw-radio-group.component';
var DwRadioComponent = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function DwRadioComponent(dwRadioGroup, renderer, document) {
        this.dwRadioGroup = dwRadioGroup;
        this.renderer = renderer;
        this.document = document;
        this._checked = false;
        this._disabled = false;
        this._autoFocus = false;
        this.isInit = false;
        this.prefixCls = 'ant-radio';
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(DwRadioComponent.prototype, "dwChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._checked = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRadioComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRadioComponent.prototype, "dwAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit) {
            if (this.dwAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.updateInputFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement) {
            if (this.dwChecked) {
                if (this.document.activeElement.nodeName === 'BODY') {
                    this.inputElement.nativeElement.focus();
                }
            }
            else {
                this.inputElement.nativeElement.blur();
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwRadioComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        this.setClassMap();
        if (this.dwDisabled || this.dwChecked) {
            this.updateInputFocus();
            return;
        }
        else {
            if (this.dwRadioGroup) {
                this.dwRadioGroup.selectRadio(this);
            }
            else {
                this.updateValue(true);
            }
            this.updateInputFocus();
        }
    };
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        if (this.dwRadioGroup) {
            this.dwRadioGroup.onTouched();
        }
    };
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-checked"] = this.dwChecked,
            _a[this.prefixCls + "-disabled"] = this.dwDisabled,
            _a);
    };
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
        this.onBlur();
    };
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.dwRadioGroup) {
            this.dwRadioGroup.addRadio(this);
        }
        this.setClassMap();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwRadioComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.onChange(value);
        this.dwChecked = value;
        this.setClassMap();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DwRadioComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.dwDisabled = isDisabled;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwRadioComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.dwChecked = value;
        this.setClassMap();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwRadioComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwRadioComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    DwRadioComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
        this.updateInputFocus();
    };
    DwRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dw-radio]',
                    preserveWhitespaces: false,
                    template: "<span [ngClass]=\"classMap\">\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"dwDisabled\" [(ngModel)]=\"dwChecked\" (blur)=\"onBlur()\" [attr.name]=\"name\">\n  <span class=\"ant-radio-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                    host: {
                        '[class.ant-radio-wrapper]': 'true',
                        '[class.ant-radio-wrapper-checked]': 'dwChecked',
                        '[class.ant-radio-wrapper-disabled]': 'dwDisabled'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwRadioComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    DwRadioComponent.ctorParameters = function () { return [
        { type: DwRadioGroupComponent, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DwRadioComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        dwValue: [{ type: Input }],
        dwDisabled: [{ type: Input }],
        dwAutoFocus: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return DwRadioComponent;
}());
export { DwRadioComponent };
function DwRadioComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRadioComponent.prototype._checked;
    /** @type {?} */
    DwRadioComponent.prototype._disabled;
    /** @type {?} */
    DwRadioComponent.prototype._autoFocus;
    /** @type {?} */
    DwRadioComponent.prototype.isInit;
    /** @type {?} */
    DwRadioComponent.prototype.classMap;
    /** @type {?} */
    DwRadioComponent.prototype.name;
    /** @type {?} */
    DwRadioComponent.prototype.prefixCls;
    /** @type {?} */
    DwRadioComponent.prototype.inputElement;
    /** @type {?} */
    DwRadioComponent.prototype.onChange;
    /** @type {?} */
    DwRadioComponent.prototype.onTouched;
    /** @type {?} */
    DwRadioComponent.prototype.dwValue;
    /** @type {?} */
    DwRadioComponent.prototype.dwRadioGroup;
    /** @type {?} */
    DwRadioComponent.prototype.renderer;
    /** @type {?} */
    DwRadioComponent.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJyYWRpby9kdy1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7SUE0SGpFLHFDQUFxQztJQUNyQywwQkFBK0IsWUFBbUMsRUFBVSxRQUFtQixFQUE0QixRQUFhO1FBQXpHLGlCQUFZLEdBQVosWUFBWSxDQUF1QjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBSzt3QkF6R3JILEtBQUs7eUJBQ0osS0FBSzswQkFDSixLQUFLO3NCQUNqQixLQUFLO3lCQUdGLFdBQVc7d0JBRVUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJO3lCQUNuQixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7S0FpR2pDO0lBOUZELHNCQUFJLHVDQUFTOzs7O1FBS2I7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBUEQsVUFBYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7O09BQUE7SUFNRCxzQkFDSSx3Q0FBVTs7OztRQUtkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVJELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7OztPQUFBO0lBTUQsc0JBQ0kseUNBQVc7Ozs7UUFLZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFSRCxVQUNnQixLQUFjO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4Qjs7O09BQUE7Ozs7SUFNRCwwQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN2RjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUM3RTtTQUNGO0tBQ0Y7Ozs7SUFFRCwyQ0FBZ0I7OztJQUFoQjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtvQkFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3pDO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEM7U0FDRjtLQUNGOzs7OztJQUdELGtDQUFPOzs7O0lBRFAsVUFDUSxDQUFhO1FBQ25CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsT0FBTztTQUNSO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtLQUNGOzs7O0lBRUQsaUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQy9CO0tBQ0Y7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7O1FBQ0UsSUFBSSxDQUFDLFFBQVE7WUFDWCxHQUFFLElBQUksQ0FBQyxTQUFTLElBQWtCLElBQUk7WUFDdEMsR0FBSyxJQUFJLENBQUMsU0FBUyxhQUFVLElBQUssSUFBSSxDQUFDLFNBQVM7WUFDaEQsR0FBSyxJQUFJLENBQUMsU0FBUyxjQUFXLElBQUksSUFBSSxDQUFDLFVBQVU7ZUFDbEQsQ0FBQztLQUNIOzs7O0lBRUQsZ0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDekM7Ozs7SUFFRCwrQkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7OztJQU1ELG1DQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLEtBQWM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELDJDQUFnQjs7OztJQUFoQixVQUFpQixFQUFzQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUN6Qjs7Z0JBaEtGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsWUFBWTtvQkFDakMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsb1NBQWdEO29CQUNoRCxJQUFJLEVBQWlCO3dCQUNuQiwyQkFBMkIsRUFBVyxNQUFNO3dCQUM1QyxtQ0FBbUMsRUFBRyxXQUFXO3dCQUNqRCxvQ0FBb0MsRUFBRSxZQUFZO3FCQUNuRDtvQkFDRCxTQUFTLEVBQVk7d0JBQ25COzRCQUNFLE9BQU8sRUFBTSxpQkFBaUI7NEJBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDOzRCQUMvQyxLQUFLLEVBQVEsSUFBSTt5QkFDbEI7cUJBQ0Y7aUJBQ0Y7Ozs7Z0JBbEJRLHFCQUFxQix1QkE2SGYsUUFBUTtnQkFwSXJCLFNBQVM7Z0RBb0l5RixNQUFNLFNBQUMsUUFBUTs7OytCQWxHaEgsU0FBUyxTQUFDLGNBQWM7MEJBR3hCLEtBQUs7NkJBV0wsS0FBSzs4QkFVTCxLQUFLOzBCQWdDTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFOzsyQkFyR3JDOztTQXFDYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1yYWRpby1ncm91cC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tkdy1yYWRpb10nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlcl0nICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8td3JhcHBlci1jaGVja2VkXScgOiAnZHdDaGVja2VkJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWRpc2FibGVkXSc6ICdkd0Rpc2FibGVkJ1xuICB9LFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdSYWRpb0NvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1JhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBjbGFzc01hcDtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmVmaXhDbHMgPSAnYW50LXJhZGlvJztcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBvbkNoYW5nZTogKF86IGJvb2xlYW4pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBASW5wdXQoKSBkd1ZhbHVlOiBzdHJpbmc7XG5cbiAgc2V0IGR3Q2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0NoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICBnZXQgZHdBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgIGlmICh0aGlzLmR3QXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSW5wdXRGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmR3Q2hlY2tlZCkge1xuICAgICAgICBpZiAodGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50Lm5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxuICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQgfHwgdGhpcy5kd0NoZWNrZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5wdXRGb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kd1JhZGlvR3JvdXApIHtcbiAgICAgICAgdGhpcy5kd1JhZGlvR3JvdXAuc2VsZWN0UmFkaW8odGhpcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVJbnB1dEZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgaWYgKHRoaXMuZHdSYWRpb0dyb3VwKSB7XG4gICAgICB0aGlzLmR3UmFkaW9Hcm91cC5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1jaGVja2VkYCBdIDogdGhpcy5kd0NoZWNrZWQsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAgXTogdGhpcy5kd0Rpc2FibGVkXG4gICAgfTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgdGhpcy5vbkJsdXIoKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIGR3UmFkaW9Hcm91cDogRHdSYWRpb0dyb3VwQ29tcG9uZW50LCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdSYWRpb0dyb3VwKSB7XG4gICAgICB0aGlzLmR3UmFkaW9Hcm91cC5hZGRSYWRpbyh0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB0aGlzLmR3Q2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHdEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kd0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICAgIHRoaXMudXBkYXRlSW5wdXRGb2N1cygpO1xuICB9XG59XG4iXX0=
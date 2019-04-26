/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HeaderPickerComponent } from './header-picker.component';
var DwYearPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwYearPickerComponent, _super);
    function DwYearPickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dwFormat = 'yyyy';
        _this.endPanelMode = 'year';
        return _this;
    }
    DwYearPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-year-picker',
                    template: "<dw-picker\n  [isRange]=\"false\"\n  [value]=\"dwValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"dwOpen\"\n  [disabled]=\"dwDisabled\"\n  [format]=\"dwFormat\"\n  [allowClear]=\"dwAllowClear\"\n  [autoFocus]=\"dwAutoFocus\"\n  [className]=\"dwClassName\"\n  [placeholder]=\"dwPlaceHolder\"\n  [size]=\"dwSize\"\n  [style]=\"dwStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ dwDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"dwPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"dwDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"dwValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"dwLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</dw-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return DwYearPickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    DwYearPickerComponent.propDecorators = {
        dwFormat: [{ type: Input }]
    };
    return DwYearPickerComponent;
}(HeaderPickerComponent));
export { DwYearPickerComponent };
function DwYearPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwYearPickerComponent.prototype.dwFormat;
    /** @type {?} */
    DwYearPickerComponent.prototype.endPanelMode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci95ZWFyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFzQixNQUFNLDJCQUEyQixDQUFDOztJQWUzQyxpREFBcUI7Ozt5QkFDbEMsTUFBTTs2QkFFQyxNQUFNOzs7O2dCQWhCMUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDg4Q0FBNkM7b0JBQzdDLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLEtBQUssRUFBRSxJQUFJOzRCQUNYLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFxQixFQUFyQixDQUFxQixDQUFDO3lCQUNyRCxDQUFDO29CQUNGLElBQUksRUFBaUI7d0JBQ25CLDZCQUE2QixFQUFFLE1BQU07cUJBQ3RDO2lCQUNGOzs7MkJBR0UsS0FBSzs7Z0NBbkJSO0VBa0IyQyxxQkFBcUI7U0FBbkQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEhlYWRlclBpY2tlckNvbXBvbmVudCwgU3VwcG9ydEhlYWRlclBhbmVsIH0gZnJvbSAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R3LXllYXItcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgbXVsdGk6IHRydWUsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdZZWFyUGlja2VyQ29tcG9uZW50KVxuICB9XSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhbGVuZGFyLXBpY2tlcl0nOiAndHJ1ZSdcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIER3WWVhclBpY2tlckNvbXBvbmVudCBleHRlbmRzIEhlYWRlclBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGR3Rm9ybWF0OiBzdHJpbmcgPSAneXl5eSc7XG5cbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWwgPSAneWVhcic7XG59XG4iXX0=
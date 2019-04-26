/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { HeaderPickerComponent } from './header-picker.component';
var DwMonthPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwMonthPickerComponent, _super);
    function DwMonthPickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dwFormat = 'yyyy-MM';
        _this.endPanelMode = 'month';
        return _this;
    }
    DwMonthPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-month-picker',
                    template: "<dw-picker\n  [isRange]=\"false\"\n  [value]=\"dwValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"dwOpen\"\n  [disabled]=\"dwDisabled\"\n  [format]=\"dwFormat\"\n  [allowClear]=\"dwAllowClear\"\n  [autoFocus]=\"dwAutoFocus\"\n  [className]=\"dwClassName\"\n  [placeholder]=\"dwPlaceHolder\"\n  [size]=\"dwSize\"\n  [style]=\"dwStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ dwDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"dwPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"dwDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"dwValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"dwLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</dw-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return DwMonthPickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    DwMonthPickerComponent.propDecorators = {
        dwFormat: [{ type: Input }]
    };
    return DwMonthPickerComponent;
}(HeaderPickerComponent));
export { DwMonthPickerComponent };
function DwMonthPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMonthPickerComponent.prototype.dwFormat;
    /** @type {?} */
    DwMonthPickerComponent.prototype.endPanelMode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbW9udGgtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7O0lBZTFDLGtEQUFxQjs7O3lCQUNuQyxTQUFTOzZCQUVGLE9BQU87Ozs7Z0JBaEIzQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsODhDQUE2QztvQkFDN0MsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLENBQUM7eUJBQ3RELENBQUM7b0JBQ0YsSUFBSSxFQUFpQjt3QkFDbkIsNkJBQTZCLEVBQUUsTUFBTTtxQkFDdEM7aUJBQ0Y7OzsyQkFHRSxLQUFLOztpQ0FuQlI7RUFrQjRDLHFCQUFxQjtTQUFwRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSGVhZGVyUGlja2VyQ29tcG9uZW50LCBTdXBwb3J0SGVhZGVyUGFuZWwgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHctbW9udGgtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgbXVsdGk6IHRydWUsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdNb250aFBpY2tlckNvbXBvbmVudClcbiAgfV0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEd01vbnRoUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgSGVhZGVyUGlja2VyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZHdGb3JtYXQ6IHN0cmluZyA9ICd5eXl5LU1NJztcblxuICBlbmRQYW5lbE1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCA9ICdtb250aCc7XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateRangePickerComponent } from './date-range-picker.component';
var DwWeekPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwWeekPickerComponent, _super);
    function DwWeekPickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showWeek = true;
        return _this;
    }
    DwWeekPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-week-picker',
                    template: "<dw-picker\n  [isRange]=\"isRange\"\n  [value]=\"dwValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"dwOpen\"\n  [disabled]=\"dwDisabled\"\n  [format]=\"dwFormat\"\n  [allowClear]=\"dwAllowClear\"\n  [autoFocus]=\"dwAutoFocus\"\n  [className]=\"dwClassName\"\n  [placeholder]=\"dwPlaceHolder\"\n  [size]=\"dwSize\"\n  [style]=\"dwStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"dwMode\"\n    (panelModeChange)=\"dwOnPanelChange.emit($event)\"\n    [value]=\"dwValue\"\n    (valueChange)=\"onValueChange($event)\"\n    [locale]=\"dwLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"dwShowTime\"\n    [format]=\"dwFormat\"\n    [dateRender]=\"dwDateRender\"\n    [disabledDate]=\"dwDisabledDate\"\n    [disabledTime]=\"dwDisabledTime\"\n    [placeholder]=\"dwPlaceHolder\"\n    [dropdownClassName]=\"dwDropdownClassName\"\n    [popupStyle]=\"dwPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"dwRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</dw-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return DwWeekPickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    return DwWeekPickerComponent;
}(DateRangePickerComponent));
export { DwWeekPickerComponent };
function DwWeekPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwWeekPickerComponent.prototype.showWeek;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci93ZWVrLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7SUFlOUIsaURBQXdCOzs7eUJBQzdDLElBQUk7Ozs7Z0JBZHpCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssZ0JBQWdCO29CQUM3Qix3cUNBQWlEO29CQUNqRCxTQUFTLEVBQUksQ0FBRTs0QkFDYixPQUFPLEVBQU0saUJBQWlCOzRCQUM5QixLQUFLLEVBQVEsSUFBSTs0QkFDakIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7eUJBQ3JELENBQUU7b0JBQ0gsSUFBSSxFQUFTO3dCQUNYLDZCQUE2QixFQUFFLE1BQU07cUJBQ3RDO2lCQUNGOztnQ0FoQkQ7RUFrQjJDLHdCQUF3QjtTQUF0RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2R3LXdlZWstcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFsge1xuICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICBtdWx0aSAgICAgIDogdHJ1ZSxcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEd1dlZWtQaWNrZXJDb21wb25lbnQpXG4gIH0gXSxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEd1dlZWtQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQge1xuICBzaG93V2VlazogYm9vbGVhbiA9IHRydWU7XG59XG4iXX0=
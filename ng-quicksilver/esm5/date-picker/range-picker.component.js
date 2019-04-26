/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateRangePickerComponent } from './date-range-picker.component';
var DwRangePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwRangePickerComponent, _super);
    function DwRangePickerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isRange = true;
        return _this;
    }
    DwRangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-range-picker',
                    template: "<dw-picker\n  [isRange]=\"isRange\"\n  [value]=\"dwValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"dwOpen\"\n  [disabled]=\"dwDisabled\"\n  [format]=\"dwFormat\"\n  [allowClear]=\"dwAllowClear\"\n  [autoFocus]=\"dwAutoFocus\"\n  [className]=\"dwClassName\"\n  [placeholder]=\"dwPlaceHolder\"\n  [size]=\"dwSize\"\n  [style]=\"dwStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"dwMode\"\n    (panelModeChange)=\"dwOnPanelChange.emit($event)\"\n    [value]=\"dwValue\"\n    (valueChange)=\"onValueChange($event)\"\n    [locale]=\"dwLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"dwShowTime\"\n    [format]=\"dwFormat\"\n    [dateRender]=\"dwDateRender\"\n    [disabledDate]=\"dwDisabledDate\"\n    [disabledTime]=\"dwDisabledTime\"\n    [placeholder]=\"dwPlaceHolder\"\n    [dropdownClassName]=\"dwDropdownClassName\"\n    [popupStyle]=\"dwPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"dwRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</dw-picker>",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(function () { return DwRangePickerComponent; })
                        }],
                    host: {
                        '[class.ant-calendar-picker]': 'true'
                    }
                }] }
    ];
    return DwRangePickerComponent;
}(DateRangePickerComponent));
export { DwRangePickerComponent };
function DwRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRangePickerComponent.prototype.isRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWU3QixrREFBd0I7Ozt3QkFDL0MsSUFBSTs7OztnQkFkeEIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxpQkFBaUI7b0JBQzlCLHdxQ0FBaUQ7b0JBQ2pELFNBQVMsRUFBSSxDQUFFOzRCQUNiLE9BQU8sRUFBTSxpQkFBaUI7NEJBQzlCLEtBQUssRUFBUSxJQUFJOzRCQUNqQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQzt5QkFDdEQsQ0FBRTtvQkFDSCxJQUFJLEVBQVM7d0JBQ1gsNkJBQTZCLEVBQUUsTUFBTTtxQkFDdEM7aUJBQ0Y7O2lDQWhCRDtFQWtCNEMsd0JBQXdCO1NBQXZELHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctcmFuZ2UtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFsge1xuICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICBtdWx0aSAgICAgIDogdHJ1ZSxcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEd1JhbmdlUGlja2VyQ29tcG9uZW50KVxuICB9IF0sXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2FsZW5kYXItcGlja2VyXSc6ICd0cnVlJ1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgRHdSYW5nZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB7XG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xufVxuIl19
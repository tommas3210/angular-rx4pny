/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateRangePickerComponent } from './date-range-picker.component';
export class DwWeekPickerComponent extends DateRangePickerComponent {
    constructor() {
        super(...arguments);
        this.showWeek = true;
    }
}
DwWeekPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-week-picker',
                template: "<dw-picker\n  [isRange]=\"isRange\"\n  [value]=\"dwValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"dwOpen\"\n  [disabled]=\"dwDisabled\"\n  [format]=\"dwFormat\"\n  [allowClear]=\"dwAllowClear\"\n  [autoFocus]=\"dwAutoFocus\"\n  [className]=\"dwClassName\"\n  [placeholder]=\"dwPlaceHolder\"\n  [size]=\"dwSize\"\n  [style]=\"dwStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"dwMode\"\n    (panelModeChange)=\"dwOnPanelChange.emit($event)\"\n    [value]=\"dwValue\"\n    (valueChange)=\"onValueChange($event)\"\n    [locale]=\"dwLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"dwShowTime\"\n    [format]=\"dwFormat\"\n    [dateRender]=\"dwDateRender\"\n    [disabledDate]=\"dwDisabledDate\"\n    [disabledTime]=\"dwDisabledTime\"\n    [placeholder]=\"dwPlaceHolder\"\n    [dropdownClassName]=\"dwDropdownClassName\"\n    [popupStyle]=\"dwPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"dwRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</dw-picker>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => DwWeekPickerComponent)
                    }],
                host: {
                    '[class.ant-calendar-picker]': 'true'
                }
            }] }
];
function DwWeekPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwWeekPickerComponent.prototype.showWeek;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci93ZWVrLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBZXpFLE1BQU0sNEJBQTZCLFNBQVEsd0JBQXdCOzs7d0JBQzdDLElBQUk7Ozs7WUFkekIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxnQkFBZ0I7Z0JBQzdCLHdxQ0FBaUQ7Z0JBQ2pELFNBQVMsRUFBSSxDQUFFO3dCQUNiLE9BQU8sRUFBTSxpQkFBaUI7d0JBQzlCLEtBQUssRUFBUSxJQUFJO3dCQUNqQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNyRCxDQUFFO2dCQUNILElBQUksRUFBUztvQkFDWCw2QkFBNkIsRUFBRSxNQUFNO2lCQUN0QzthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy13ZWVrLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgOiBbIHtcbiAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgbXVsdGkgICAgICA6IHRydWUsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdXZWVrUGlja2VyQ29tcG9uZW50KVxuICB9IF0sXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2FsZW5kYXItcGlja2VyXSc6ICd0cnVlJ1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgRHdXZWVrUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IHtcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSB0cnVlO1xufVxuIl19
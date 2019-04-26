/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateRangePickerComponent } from './date-range-picker.component';
export class DwRangePickerComponent extends DateRangePickerComponent {
    constructor() {
        super(...arguments);
        this.isRange = true;
    }
}
DwRangePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-range-picker',
                template: "<dw-picker\n  [isRange]=\"isRange\"\n  [value]=\"dwValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"dwOpen\"\n  [disabled]=\"dwDisabled\"\n  [format]=\"dwFormat\"\n  [allowClear]=\"dwAllowClear\"\n  [autoFocus]=\"dwAutoFocus\"\n  [className]=\"dwClassName\"\n  [placeholder]=\"dwPlaceHolder\"\n  [size]=\"dwSize\"\n  [style]=\"dwStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"dwMode\"\n    (panelModeChange)=\"dwOnPanelChange.emit($event)\"\n    [value]=\"dwValue\"\n    (valueChange)=\"onValueChange($event)\"\n    [locale]=\"dwLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"dwShowTime\"\n    [format]=\"dwFormat\"\n    [dateRender]=\"dwDateRender\"\n    [disabledDate]=\"dwDisabledDate\"\n    [disabledTime]=\"dwDisabledTime\"\n    [placeholder]=\"dwPlaceHolder\"\n    [dropdownClassName]=\"dwDropdownClassName\"\n    [popupStyle]=\"dwPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"dwRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</dw-picker>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => DwRangePickerComponent)
                    }],
                host: {
                    '[class.ant-calendar-picker]': 'true'
                }
            }] }
];
function DwRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRangePickerComponent.prototype.isRange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFlekUsTUFBTSw2QkFBOEIsU0FBUSx3QkFBd0I7Ozt1QkFDL0MsSUFBSTs7OztZQWR4QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLGlCQUFpQjtnQkFDOUIsd3FDQUFpRDtnQkFDakQsU0FBUyxFQUFJLENBQUU7d0JBQ2IsT0FBTyxFQUFNLGlCQUFpQjt3QkFDOUIsS0FBSyxFQUFRLElBQUk7d0JBQ2pCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ3RELENBQUU7Z0JBQ0gsSUFBSSxFQUFTO29CQUNYLDZCQUE2QixFQUFFLE1BQU07aUJBQ3RDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2R3LXJhbmdlLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgOiBbIHtcbiAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgbXVsdGkgICAgICA6IHRydWUsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdSYW5nZVBpY2tlckNvbXBvbmVudClcbiAgfSBdLFxuICBob3N0ICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhbGVuZGFyLXBpY2tlcl0nOiAndHJ1ZSdcbiAgfVxufSlcblxuZXhwb3J0IGNsYXNzIER3UmFuZ2VQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQge1xuICBpc1JhbmdlOiBib29sZWFuID0gdHJ1ZTtcbn1cbiJdfQ==
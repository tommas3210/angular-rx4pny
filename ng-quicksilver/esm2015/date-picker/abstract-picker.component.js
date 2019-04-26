/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { CandyDate } from './lib/candy-date';
import { DwPickerComponent } from './picker.component';
/** @type {?} */
const POPUP_STYLE_PATCH = { 'position': 'relative' };
/**
 * The base picker for all common APIs
 * @abstract
 */
export class AbstractPickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        // --- Common API
        this.dwAllowClear = true;
        this.dwAutoFocus = false;
        this.dwDisabled = false;
        this.dwPopupStyle = POPUP_STYLE_PATCH;
        this.dwOnOpenChange = new EventEmitter();
        this.isRange = false;
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
    }
    /**
     * @return {?}
     */
    get realOpenState() {
        return this.picker.animationOpenState;
    }
    /**
     * @return {?}
     */
    initValue() {
        this.dwValue = this.isRange ? [] : null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Subscribe the every locale change if the dwLocale is not handled by user
        if (!this.dwLocale) {
            this.i18n.localeChange
                .pipe(takeUntil(this.destroyed$))
                .subscribe(() => this.setLocale());
        }
        // Default value
        this.initValue();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["dwPopupStyle"]) { // Always assign the popup style patch
            // Always assign the popup style patch
            this.dwPopupStyle = this.dwPopupStyle ? Object.assign({}, this.dwPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once dwPlaceHolder assigned at the first time
        if (changes["dwPlaceHolder"] && changes["dwPlaceHolder"].firstChange && typeof this.dwPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes["dwLocale"]) { // The dwLocale is currently handled by user
            // The dwLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    /**
     * @return {?}
     */
    closeOverlay() {
        this.picker.hideOverlay();
    }
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    onValueChange(value) {
        this.dwValue = value;
        if (this.isRange) {
            if ((/** @type {?} */ (this.dwValue)).length) {
                this.onChangeFn([this.dwValue[0].nativeDate, this.dwValue[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.dwValue) {
                this.onChangeFn((/** @type {?} */ (this.dwValue)).nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    onOpenChange(open) {
        this.dwOnOpenChange.emit(open);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        // tslint:disable-line:no-any
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        // tslint:disable-line:no-any
        this.onTouchedFn = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.dwDisabled = disabled;
    }
    /**
     * @return {?}
     */
    setLocale() {
        this.dwLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
    }
    /**
     * @return {?}
     */
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.dwLocale) {
            this.dwPlaceHolder = this.isRange ? this.dwLocale.lang.rangePlaceholder : this.dwLocale.lang.placeholder;
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    formatDate(date) {
        return date ? this.i18n.formatDateCompatible(date.nativeDate, this.dwFormat) : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.isRange) {
            this.dwValue = value ? (/** @type {?} */ (value)).map(val => new CandyDate(val)) : [];
        }
        else {
            this.dwValue = value ? new CandyDate(/** @type {?} */ (value)) : null;
        }
    }
}
AbstractPickerComponent.propDecorators = {
    dwAllowClear: [{ type: Input }],
    dwAutoFocus: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwOpen: [{ type: Input }],
    dwClassName: [{ type: Input }],
    dwDisabledDate: [{ type: Input }],
    dwLocale: [{ type: Input }],
    dwPlaceHolder: [{ type: Input }],
    dwPopupStyle: [{ type: Input }],
    dwDropdownClassName: [{ type: Input }],
    dwSize: [{ type: Input }],
    dwStyle: [{ type: Input }],
    dwOnOpenChange: [{ type: Output }],
    dwFormat: [{ type: Input }],
    dwValue: [{ type: Input }],
    picker: [{ type: ViewChild, args: [DwPickerComponent,] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "dwAllowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "dwAutoFocus", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "dwDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], AbstractPickerComponent.prototype, "dwOpen", void 0);
function AbstractPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AbstractPickerComponent.prototype.dwAllowClear;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwAutoFocus;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwDisabled;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwOpen;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwDisabledDate;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwLocale;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwPopupStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwDropdownClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwSize;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwOnOpenChange;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwFormat;
    /** @type {?} */
    AbstractPickerComponent.prototype.dwValue;
    /** @type {?} */
    AbstractPickerComponent.prototype.picker;
    /** @type {?} */
    AbstractPickerComponent.prototype.isRange;
    /** @type {?} */
    AbstractPickerComponent.prototype.destroyed$;
    /** @type {?} */
    AbstractPickerComponent.prototype.isCustomPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.onChangeFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.onTouchedFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFdkQsTUFBTSxpQkFBaUIsR0FBRyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQzs7Ozs7QUFLckQsTUFBTTs7OztJQW1DSixZQUFzQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlOzs0QkFqQ1EsSUFBSTsyQkFDTCxLQUFLOzBCQUNOLEtBQUs7NEJBTXBCLGlCQUFpQjs4QkFJdEIsSUFBSSxZQUFZLEVBQVc7dUJBUW5DLEtBQUs7MEJBVWMsSUFBSSxPQUFPLEVBQUU7bUNBQ1YsS0FBSzs7Ozs7MEJBNEVGLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQkFDOUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0tBMUVyQzs7OztJQVpELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztLQUN2Qzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUs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S0FBSztzQkFFTCxLQUFLO3FCQUVMLFNBQVMsU0FBQyxpQkFBaUI7OztJQWxCbEIsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdEYXRlUGlja2VySTE4bkludGVyZmFjZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUnO1xuaW1wb3J0IHsgRHdQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xuXG5jb25zdCBQT1BVUF9TVFlMRV9QQVRDSCA9IHsgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJyB9OyAvLyBBaW0gdG8gb3ZlcnJpZGUgYW50ZCdzIHN0eWxlIHRvIHN1cHBvcnQgb3ZlcmxheSdzIHBvc2l0aW9uIHN0cmF0ZWd5IChwb3NpdGlvbjphYnNvbHV0ZSB3aWxsIGNhdXNlIGl0IG5vdCB3b3JraW5nIGJlYWN1c2UgdGhlIG92ZXJsYXkgY2FuJ3QgZ2V0IHRoZSBoZWlnaHQvd2lkdGggb2YgaXQncyBjb250ZW50KVxuXG4vKipcbiAqIFRoZSBiYXNlIHBpY2tlciBmb3IgYWxsIGNvbW1vbiBBUElzXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgLy8gLS0tIENvbW1vbiBBUElcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3QWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0F1dG9Gb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdPcGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBkd0NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkd0Rpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIGR3TG9jYWxlOiBEd0RhdGVQaWNrZXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBkd1BsYWNlSG9sZGVyOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgZHdQb3B1cFN0eWxlOiBvYmplY3QgPSBQT1BVUF9TVFlMRV9QQVRDSDtcbiAgQElucHV0KCkgZHdEcm9wZG93bkNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkd1NpemU6ICdsYXJnZScgfCAnc21hbGwnO1xuICBASW5wdXQoKSBkd1N0eWxlOiBvYmplY3Q7XG4gIEBPdXRwdXQoKSBkd09uT3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBkd0Zvcm1hdDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGR3VmFsdWU6IENvbXBhdGlibGVWYWx1ZTtcblxuICBAVmlld0NoaWxkKER3UGlja2VyQ29tcG9uZW50KSBwcm90ZWN0ZWQgcGlja2VyOiBEd1BpY2tlckNvbXBvbmVudDtcblxuICBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgdGhlIHZhbHVlIGlzIGEgcmFuZ2UgdmFsdWVcblxuICBnZXQgcmVhbE9wZW5TdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5waWNrZXIuYW5pbWF0aW9uT3BlblN0YXRlO1xuICB9IC8vIFVzZSBwaWNrZXIncyByZWFsIG9wZW4gc3RhdGUgdG8gbGV0IHJlLXJlbmRlciB0aGUgcGlja2VyJ3MgY29udGVudCB3aGVuIHNob3duIHVwXG5cbiAgaW5pdFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZHdWYWx1ZSA9IHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJvdGVjdGVkIGlzQ3VzdG9tUGxhY2VIb2xkZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaTE4bjogRHdJMThuU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gU3Vic2NyaWJlIHRoZSBldmVyeSBsb2NhbGUgY2hhbmdlIGlmIHRoZSBkd0xvY2FsZSBpcyBub3QgaGFuZGxlZCBieSB1c2VyXG4gICAgaWYgKCF0aGlzLmR3TG9jYWxlKSB7XG4gICAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0TG9jYWxlKCkpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdmFsdWVcbiAgICB0aGlzLmluaXRWYWx1ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmR3UG9wdXBTdHlsZSkgeyAvLyBBbHdheXMgYXNzaWduIHRoZSBwb3B1cCBzdHlsZSBwYXRjaFxuICAgICAgdGhpcy5kd1BvcHVwU3R5bGUgPSB0aGlzLmR3UG9wdXBTdHlsZSA/IHsgLi4udGhpcy5kd1BvcHVwU3R5bGUsIC4uLlBPUFVQX1NUWUxFX1BBVENIIH0gOiBQT1BVUF9TVFlMRV9QQVRDSDtcbiAgICB9XG5cbiAgICAvLyBNYXJrIGFzIGN1c3RvbWl6ZWQgcGxhY2Vob2xkZXIgYnkgdXNlciBvbmNlIGR3UGxhY2VIb2xkZXIgYXNzaWduZWQgYXQgdGhlIGZpcnN0IHRpbWVcbiAgICBpZiAoY2hhbmdlcy5kd1BsYWNlSG9sZGVyICYmIGNoYW5nZXMuZHdQbGFjZUhvbGRlci5maXJzdENoYW5nZSAmJiB0eXBlb2YgdGhpcy5kd1BsYWNlSG9sZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5pc0N1c3RvbVBsYWNlSG9sZGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5kd0xvY2FsZSkgeyAvLyBUaGUgZHdMb2NhbGUgaXMgY3VycmVudGx5IGhhbmRsZWQgYnkgdXNlclxuICAgICAgdGhpcy5zZXREZWZhdWx0UGxhY2VIb2xkZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY2xvc2VPdmVybGF5KCk6IHZvaWQge1xuICAgIHRoaXMucGlja2VyLmhpZGVPdmVybGF5KCk7XG4gIH1cblxuICAvKipcbiAgICogQ29tbW9uIGhhbmRsZSBmb3IgdmFsdWUgY2hhbmdlc1xuICAgKiBAcGFyYW0gdmFsdWUgY2hhbmdlZCB2YWx1ZVxuICAgKi9cbiAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogQ29tcGF0aWJsZVZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5kd1ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgaWYgKCh0aGlzLmR3VmFsdWUgYXMgQ2FuZHlEYXRlW10pLmxlbmd0aCkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oWyB0aGlzLmR3VmFsdWVbIDAgXS5uYXRpdmVEYXRlLCB0aGlzLmR3VmFsdWVbIDEgXS5uYXRpdmVEYXRlIF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKFtdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHdWYWx1ZSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oKHRoaXMuZHdWYWx1ZSBhcyBDYW5keURhdGUpLm5hdGl2ZURhdGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZuKG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlcmVkIHdoZW4gb3ZlcmxheU9wZW4gY2hhbmdlcyAoZGlmZmVyZW50IHdpdGggcmVhbE9wZW5TdGF0ZSlcbiAgICogQHBhcmFtIG9wZW4gVGhlIG92ZXJsYXlPcGVuIGluIHBpY2tlciBjb21wb25lbnRcbiAgICovXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kd09uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBpbXBsZW1lbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIE5PVEU6IG9uQ2hhbmdlRm4vb25Ub3VjaGVkRm4gd2lsbCBub3QgYmUgYXNzaWduZWQgaWYgdXNlciBub3QgdXNlIGFzIG5nTW9kZWxcbiAgb25DaGFuZ2VGbjogKHZhbDogQ29tcGF0aWJsZURhdGUpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG4gIG9uVG91Y2hlZEZuOiAoKSA9PiB2b2lkID0gKCkgPT4gdm9pZCAwO1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IENvbXBhdGlibGVEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICB0aGlzLm9uVG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kd0Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBJbnRlcm5hbCBtZXRob2RzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIFJlbG9hZCBsb2NhbGUgZnJvbSBpMThuIHdpdGggc2lkZSBlZmZlY3RzXG4gIHByaXZhdGUgc2V0TG9jYWxlKCk6IHZvaWQge1xuICAgIHRoaXMuZHdMb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlcicsIHt9KTtcbiAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXREZWZhdWx0UGxhY2VIb2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgJiYgdGhpcy5kd0xvY2FsZSkge1xuICAgICAgdGhpcy5kd1BsYWNlSG9sZGVyID0gdGhpcy5pc1JhbmdlID8gdGhpcy5kd0xvY2FsZS5sYW5nLnJhbmdlUGxhY2Vob2xkZXIgOiB0aGlzLmR3TG9jYWxlLmxhbmcucGxhY2Vob2xkZXI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXREYXRlKGRhdGU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLmkxOG4uZm9ybWF0RGF0ZUNvbXBhdGlibGUoZGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmR3Rm9ybWF0KSA6ICcnO1xuICB9XG5cbiAgLy8gU2FmZSB3YXkgb2Ygc2V0dGluZyB2YWx1ZSB3aXRoIGRlZmF1bHRcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLmR3VmFsdWUgPSB2YWx1ZSA/ICh2YWx1ZSBhcyBEYXRlW10pLm1hcCh2YWwgPT4gbmV3IENhbmR5RGF0ZSh2YWwpKSA6IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR3VmFsdWUgPSB2YWx1ZSA/IG5ldyBDYW5keURhdGUodmFsdWUgYXMgRGF0ZSkgOiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDb21wYXRpYmxlVmFsdWUgPSBDYW5keURhdGUgfCBDYW5keURhdGVbXTtcblxuZXhwb3J0IHR5cGUgQ29tcGF0aWJsZURhdGUgPSBEYXRlIHwgRGF0ZVtdO1xuIl19
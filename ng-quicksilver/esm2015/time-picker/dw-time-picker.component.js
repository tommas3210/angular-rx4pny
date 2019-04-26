/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DwUpdateHostClassService as UpdateCls } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { DwI18nService as I18n } from '../i18n/dw-i18n.service';
export class DwTimePickerComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     * @param {?} overlay
     * @param {?} positionBuilder
     * @param {?} i18n
     * @param {?} updateCls
     */
    constructor(element, renderer, overlay, positionBuilder, i18n, updateCls) {
        this.element = element;
        this.renderer = renderer;
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.i18n = i18n;
        this.updateCls = updateCls;
        this._disabled = false;
        this._value = null;
        this._allowEmpty = true;
        this._autoFocus = false;
        this._hideDisabledOptions = false;
        this.isInit = false;
        this.overlayPositions = [{
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }];
        this.dwSize = null;
        this.dwHourStep = 1;
        this.dwMinuteStep = 1;
        this.dwSecondStep = 1;
        this.dwClearText = 'clear';
        this.dwPopupClassName = '';
        this.dwPlaceHolder = '';
        this.dwDefaultOpenValue = new Date();
        this.dwFormat = 'HH:mm:ss';
        this.dwOpen = false;
        this.dwOpenChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwHideDisabledOptions(value) {
        this._hideDisabledOptions = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwHideDisabledOptions() {
        return this._hideDisabledOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAllowEmpty(value) {
        this._allowEmpty = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAutoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get dwAutoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
        /** @type {?} */
        const input = /** @type {?} */ (this.inputRef.nativeElement);
        if (this._disabled) {
            this.renderer.setAttribute(input, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(input, 'disabled');
        }
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @return {?}
     */
    open() {
        if (this.dwDisabled) {
            return;
        }
        this.dwOpen = true;
        this.dwOpenChange.emit(this.dwOpen);
    }
    /**
     * @return {?}
     */
    close() {
        this.dwOpen = false;
        this.dwOpenChange.emit(this.dwOpen);
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.dwDisabled) {
            if (this.dwAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`ant-time-picker`]: true,
            [`ant-time-picker-${this.dwSize}`]: isNotNil(this.dwSize)
        });
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    writeValue(time) {
        this._value = time;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dwDisabled = isDisabled;
    }
}
DwTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-time-picker',
                template: "<input\n  type=\"text\"\n  [dwTime]=\"dwFormat\"\n  class=\"ant-time-picker-input\"\n  [placeholder]=\"dwPlaceHolder || ('TimePicker.placeholder' | dwI18n)\"\n  [(ngModel)]=\"value\"\n  readonly=\"readonly\"\n  (click)=\"open()\"\n  #inputElement>\n<span class=\"ant-time-picker-icon\"></span>\n\n<ng-template\n  cdkConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"dwOpen\"\n  [cdkConnectedOverlayOffsetY]=\"-2\"\n  (detach)=\"close()\"\n  (backdropClick)=\"close()\">\n  <dw-time-picker-panel\n    [ngClass]=\"dwPopupClassName\"\n    [@dropDownAnimation]=\"'bottom'\"\n    [format]=\"dwFormat\"\n    [dwHourStep]=\"dwHourStep\"\n    [dwMinuteStep]=\"dwMinuteStep\"\n    [dwSecondStep]=\"dwSecondStep\"\n    [dwDisabledHours]=\"dwDisabledHours\"\n    [dwDisabledMinutes]=\"dwDisabledMinutes\"\n    [dwDisabledSeconds]=\"dwDisabledSeconds\"\n    [dwPlaceHolder]=\"dwPlaceHolder || ('TimePicker.placeholder' | dwI18n)\"\n    [dwHideDisabledOptions]=\"dwHideDisabledOptions\"\n    [dwDefaultOpenValue]=\"dwDefaultOpenValue\"\n    [dwAddOn]=\"dwAddOn\"\n    [opened]=\"dwOpen\"\n    [dwClearText]=\"dwClearText\"\n    [dwAllowEmpty]=\"dwAllowEmpty\"\n    (timeClear)=\"close()\"\n    [(ngModel)]=\"value\">\n  </dw-time-picker-panel>\n</ng-template>\n\n",
                animations: [
                    trigger('dropDownAnimation', [
                        state('void', style({
                            opacity: 0,
                            display: 'none'
                        })),
                        state('*', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 0%'
                        })),
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                        ]),
                        transition('* => void', [
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }))
                        ])
                    ])
                ],
                providers: [
                    UpdateCls,
                    { provide: NG_VALUE_ACCESSOR, useExisting: DwTimePickerComponent, multi: true }
                ]
            }] }
];
/** @nocollapse */
DwTimePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: Overlay },
    { type: OverlayPositionBuilder },
    { type: I18n },
    { type: UpdateCls }
];
DwTimePickerComponent.propDecorators = {
    inputRef: [{ type: ViewChild, args: ['inputElement',] }],
    dwSize: [{ type: Input }],
    dwHourStep: [{ type: Input }],
    dwMinuteStep: [{ type: Input }],
    dwSecondStep: [{ type: Input }],
    dwClearText: [{ type: Input }],
    dwPopupClassName: [{ type: Input }],
    dwPlaceHolder: [{ type: Input }],
    dwAddOn: [{ type: Input }],
    dwDefaultOpenValue: [{ type: Input }],
    dwDisabledHours: [{ type: Input }],
    dwDisabledMinutes: [{ type: Input }],
    dwDisabledSeconds: [{ type: Input }],
    dwFormat: [{ type: Input }],
    dwOpen: [{ type: Input }],
    dwOpenChange: [{ type: Output }],
    dwHideDisabledOptions: [{ type: Input }],
    dwAllowEmpty: [{ type: Input }],
    dwAutoFocus: [{ type: Input }],
    dwDisabled: [{ type: Input }]
};
function DwTimePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTimePickerComponent.prototype._disabled;
    /** @type {?} */
    DwTimePickerComponent.prototype._value;
    /** @type {?} */
    DwTimePickerComponent.prototype._allowEmpty;
    /** @type {?} */
    DwTimePickerComponent.prototype._autoFocus;
    /** @type {?} */
    DwTimePickerComponent.prototype._onChange;
    /** @type {?} */
    DwTimePickerComponent.prototype._onTouched;
    /** @type {?} */
    DwTimePickerComponent.prototype._hideDisabledOptions;
    /** @type {?} */
    DwTimePickerComponent.prototype.isInit;
    /** @type {?} */
    DwTimePickerComponent.prototype.origin;
    /** @type {?} */
    DwTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    DwTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwSize;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwHourStep;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwMinuteStep;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwSecondStep;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwClearText;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwPopupClassName;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwPlaceHolder;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwAddOn;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwDefaultOpenValue;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwDisabledHours;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwDisabledMinutes;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwDisabledSeconds;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwFormat;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwOpen;
    /** @type {?} */
    DwTimePickerComponent.prototype.dwOpenChange;
    /** @type {?} */
    DwTimePickerComponent.prototype.element;
    /** @type {?} */
    DwTimePickerComponent.prototype.renderer;
    /** @type {?} */
    DwTimePickerComponent.prototype.overlay;
    /** @type {?} */
    DwTimePickerComponent.prototype.positionBuilder;
    /** @type {?} */
    DwTimePickerComponent.prototype.i18n;
    /** @type {?} */
    DwTimePickerComponent.prototype.updateCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0aW1lLXBpY2tlci9kdy10aW1lLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqSCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLHdCQUF3QixJQUFJLFNBQVMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXNDaEUsTUFBTTs7Ozs7Ozs7O0lBc0lKLFlBQW9CLE9BQW1CLEVBQ25CLFVBQ0EsU0FDQSxpQkFDQSxNQUNBO1FBTEEsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUTtRQUNSLFlBQU8sR0FBUCxPQUFPO1FBQ1Asb0JBQWUsR0FBZixlQUFlO1FBQ2YsU0FBSSxHQUFKLElBQUk7UUFDSixjQUFTLEdBQVQsU0FBUzt5QkExSVQsS0FBSztzQkFDSyxJQUFJOzJCQUNaLElBQUk7MEJBQ0ws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QkFDWCxTQUFTO29CQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUNoRjthQUNGOzs7O1lBbkRDLFVBQVU7WUFLVixTQUFTO1lBVHdDLE9BQU87WUFBRSxzQkFBc0I7WUFrQnhELElBQUk7WUFITyxTQUFTOzs7dUJBMkQzQyxTQUFTLFNBQUMsY0FBYztxQkFDeEIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLE1BQU07b0NBRU4sS0FBSzsyQkFTTCxLQUFLOzBCQVNMLEtBQUs7eUJBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENka092ZXJsYXlPcmlnaW4sIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsIE92ZXJsYXksIE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd0kxOG5TZXJ2aWNlIGFzIEkxOG4gfSBmcm9tICcuLi9pMThuL2R3LWkxOG4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2R3LXRpbWUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LXRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9ucyA6IFtcbiAgICB0cmlnZ2VyKCdkcm9wRG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCd2b2lkJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgcHJvdmlkZXJzICA6IFtcbiAgICBVcGRhdGVDbHMsXG4gICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IER3VGltZVBpY2tlckNvbXBvbmVudCwgbXVsdGk6IHRydWUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3VGltZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF92YWx1ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgX29uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XG4gIHByaXZhdGUgX29uVG91Y2hlZDogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfaGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBvdmVybGF5UG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIHtcbiAgICBvcmlnaW5YIDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICBvZmZzZXRYIDogMCxcbiAgICBvZmZzZXRZIDogMFxuICB9IF07XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0UmVmOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBkd1NpemU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBkd0hvdXJTdGVwID0gMTtcbiAgQElucHV0KCkgZHdNaW51dGVTdGVwID0gMTtcbiAgQElucHV0KCkgZHdTZWNvbmRTdGVwID0gMTtcbiAgQElucHV0KCkgZHdDbGVhclRleHQgPSAnY2xlYXInO1xuICBASW5wdXQoKSBkd1BvcHVwQ2xhc3NOYW1lID0gJyc7XG4gIEBJbnB1dCgpIGR3UGxhY2VIb2xkZXIgPSAnJztcbiAgQElucHV0KCkgZHdBZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGR3RGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XG4gIEBJbnB1dCgpIGR3RGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XG4gIEBJbnB1dCgpIGR3RGlzYWJsZWRNaW51dGVzOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgZHdEaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcbiAgQElucHV0KCkgZHdGb3JtYXQgPSAnSEg6bW06c3MnO1xuICBASW5wdXQoKSBkd09wZW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIGR3T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdIaWRlRGlzYWJsZWRPcHRpb25zKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZURpc2FibGVkT3B0aW9ucyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdIaWRlRGlzYWJsZWRPcHRpb25zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlRGlzYWJsZWRPcHRpb25zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QWxsb3dFbXB0eSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FsbG93RW1wdHkgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3QWxsb3dFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dFbXB0eTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0F1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIGdldCBkd0F1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGlucHV0LCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHwgc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUgfCBudWxsKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb25Ub3VjaGVkKSB7XG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKTogRGF0ZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmR3T3BlbiA9IHRydWU7XG4gICAgdGhpcy5kd09wZW5DaGFuZ2UuZW1pdCh0aGlzLmR3T3Blbik7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmR3T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICB9XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCAmJiAhdGhpcy5kd0Rpc2FibGVkKSB7XG4gICAgICBpZiAodGhpcy5kd0F1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xuICAgICAgWyBgYW50LXRpbWUtcGlja2VyYCBdICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LXRpbWUtcGlja2VyLSR7dGhpcy5kd1NpemV9YCBdOiBpc05vdE5pbCh0aGlzLmR3U2l6ZSlcbiAgICB9KTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgICAgICAgICAgICBwcml2YXRlIHBvc2l0aW9uQnVpbGRlcjogT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBpMThuOiBJMThuLFxuICAgICAgICAgICAgICBwcml2YXRlIHVwZGF0ZUNsczogVXBkYXRlQ2xzKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5vcmlnaW4gPSBuZXcgQ2RrT3ZlcmxheU9yaWdpbih0aGlzLmVsZW1lbnQpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh0aW1lOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdGltZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh0aW1lOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmR3RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=
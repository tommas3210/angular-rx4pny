/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from '../../../core/util/check';
var CalendarFooterComponent = /** @class */ (function () {
    function CalendarFooterComponent() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        // @Input() disabled: boolean = false;
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    CalendarFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-footer',
                    template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\n  </div>\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\n        <span [innerHTML]=\"extraFooter\"></span>\n      </ng-container>\n    </ng-container>\n  </div>\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\n    <today-button\n      *ngIf=\"showToday\"\n      [locale]=\"locale\"\n      [disabledDate]=\"disabledDate\"\n      [hasTimePicker]=\"hasTimePicker\"\n      (clickToday)=\"clickToday.emit($event)\"\n    ></today-button>\n    <time-picker-button\n      *ngIf=\"hasTimePicker\"\n      [locale]=\"locale\"\n      [timePickerDisabled]=\"timePickerDisabled\"\n      [showTimePicker]=\"showTimePicker\"\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\n    ></time-picker-button>\n    <ok-button\n      *ngIf=\"hasTimePicker\"\n      [okDisabled]=\"okDisabled\"\n      [locale]=\"locale\"\n      (clickOk)=\"clickOk.emit()\"\n    ></ok-button>\n  </span>\n</div>"
                }] }
    ];
    CalendarFooterComponent.propDecorators = {
        locale: [{ type: Input }],
        showToday: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        isRange: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }],
        timePickerDisabled: [{ type: Input }],
        okDisabled: [{ type: Input }],
        disabledDate: [{ type: Input }],
        extraFooter: [{ type: Input }],
        rangeQuickSelector: [{ type: Input }],
        clickOk: [{ type: Output }],
        clickToday: [{ type: Output }]
    };
    return CalendarFooterComponent;
}());
export { CalendarFooterComponent };
function CalendarFooterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarFooterComponent.prototype.locale;
    /** @type {?} */
    CalendarFooterComponent.prototype.showToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.hasTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.isRange;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePickerChange;
    /** @type {?} */
    CalendarFooterComponent.prototype.timePickerDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.okDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarFooterComponent.prototype.extraFooter;
    /** @type {?} */
    CalendarFooterComponent.prototype.rangeQuickSelector;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickOk;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTemplateRef;
    /** @type {?} */
    CalendarFooterComponent.prototype.isNonEmptyString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2NhbGVuZGFyL2NhbGVuZGFyLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O3lCQVUzQyxLQUFLOzZCQUNELEtBQUs7dUJBQ1gsS0FBSzs4QkFFRSxLQUFLO29DQUNQLElBQUksWUFBWSxFQUFXOztrQ0FHckIsS0FBSzswQkFDYixLQUFLO3VCQUtoQixJQUFJLFlBQVksRUFBUTswQkFDckIsSUFBSSxZQUFZLEVBQWE7eUJBRWhDLGNBQWM7NkJBQ2xCLGFBQWE7Z0NBQ1YsZ0JBQWdCOzs7Z0JBekJwQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0Isd2xEQUE2QztpQkFDOUM7Ozt5QkFFRSxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUVMLEtBQUs7dUNBQ0wsTUFBTTtxQ0FHTixLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3FDQUNMLEtBQUs7MEJBRUwsTUFBTTs2QkFDTixNQUFNOztrQ0EzQlQ7O1NBVWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgRHdDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL2R3LWkxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1mb290ZXInLFxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWZvb3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJGb290ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBsb2NhbGU6IER3Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzaG93VG9kYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGFzVGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHNob3dUaW1lUGlja2VyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8vIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRpbWVQaWNrZXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBva0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGQ6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcbiAgQElucHV0KCkgcmFuZ2VRdWlja1NlbGVjdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBAT3V0cHV0KCkgY2xpY2tPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGNsaWNrVG9kYXkgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuICBpc1RlbXBsYXRlUmVmID0gaXNUZW1wbGF0ZVJlZjtcbiAgaXNOb25FbXB0eVN0cmluZyA9IGlzTm9uRW1wdHlTdHJpbmc7XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean } from '../core/util/convert';
import { LoggerService } from '../core/util/logger/logger.service';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
export class DateRangePickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} logger
     */
    constructor(i18n, logger) {
        super(i18n);
        this.logger = logger;
        this.showWeek = false;
        this.dwShowToday = true;
        this.dwOnPanelChange = new EventEmitter();
        this.dwOnOk = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get dwShowTime() { return this._showTime; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowTime(value) {
        this._showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    /**
     * @return {?}
     */
    get realShowToday() {
        // Range not support dwShowToday currently
        return !this.isRange && this.dwShowToday;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // Default format when it's empty
        if (!this.dwFormat) {
            if (this.showWeek) {
                this.dwFormat = 'yyyy-ww'; // Format for week
            }
            else {
                this.dwFormat = this.dwShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes["dwRenderExtraFooter"]) {
            this.extraFooter = valueFunctionProp(this.dwRenderExtraFooter);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        super.onValueChange(value);
        if (!this.dwShowTime) {
            this.closeOverlay();
        }
    }
    /**
     * @return {?}
     */
    onResultOk() {
        if (this.isRange) {
            if ((/** @type {?} */ (this.dwValue)).length) {
                this.dwOnOk.emit([this.dwValue[0].nativeDate, this.dwValue[1].nativeDate]);
            }
            else {
                this.dwOnOk.emit([]);
            }
        }
        else {
            if (this.dwValue) {
                this.dwOnOk.emit((/** @type {?} */ (this.dwValue)).nativeDate);
            }
            else {
                this.dwOnOk.emit(null);
            }
        }
        this.closeOverlay();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        this.dwOnOpenChange.emit(open);
    }
}
DateRangePickerComponent.decorators = [
    { type: Component, args: [{
                template: `` // Just for rollup
            }] }
];
/** @nocollapse */
DateRangePickerComponent.ctorParameters = () => [
    { type: DwI18nService },
    { type: LoggerService }
];
DateRangePickerComponent.propDecorators = {
    dwDateRender: [{ type: Input }],
    dwDisabledTime: [{ type: Input }],
    dwRenderExtraFooter: [{ type: Input }],
    dwShowToday: [{ type: Input }],
    dwMode: [{ type: Input }],
    dwRanges: [{ type: Input }],
    dwOnPanelChange: [{ type: Output }],
    dwShowTime: [{ type: Input }],
    dwOnOk: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DateRangePickerComponent.prototype, "dwShowToday", void 0);
function DateRangePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwDateRender;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwDisabledTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwRenderExtraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwShowToday;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwMode;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwRanges;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwOnPanelChange;
    /** @type {?} */
    DateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.dwOnOk;
    /** @type {?} */
    DateRangePickerComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.logger;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFHdEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBa0IsTUFBTSw2QkFBNkIsQ0FBQztBQU90RixNQUFNLCtCQUFnQyxTQUFRLHVCQUF1Qjs7Ozs7SUF5Qm5FLFlBQVksSUFBbUIsRUFBVSxNQUFxQjtRQUM1RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFEMkIsV0FBTSxHQUFOLE1BQU0sQ0FBZTt3QkF4QjFDLEtBQUs7MkJBS3VCLElBQUk7K0JBR3hCLElBQUksWUFBWSxFQUEyQjtzQkFRcEQsSUFBSSxZQUFZLEVBQWtCO0tBVXBEOzs7O0lBZkQsSUFBYSxVQUFVLEtBQXVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7OztJQUN0RSxJQUFJLFVBQVUsQ0FBQyxLQUF1QjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkU7Ozs7SUFJRCxJQUFJLGFBQWE7O1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMxQzs7OztJQVFELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBR2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQ3hFO1NBQ0Y7S0FDRjs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLE9BQU8seUJBQXNCO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEU7S0FDRjs7Ozs7SUFHRCxhQUFhLENBQUMsS0FBZ0I7UUFDNUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7S0FDRjs7OztJQUdELFVBQVU7UUFDUixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxtQkFBQyxJQUFJLENBQUMsT0FBc0IsRUFBQyxDQUFDLE1BQU0sRUFBRTtnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUM7YUFDbEY7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEI7U0FDRjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBQyxJQUFJLENBQUMsT0FBb0IsRUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQVJRLGFBQWE7WUFEYixhQUFhOzs7MkJBY25CLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLOzBCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzhCQUNMLE1BQU07eUJBR04sS0FBSztxQkFLTCxNQUFNOzs7SUFYRyxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uL2NvcmUvdHlwZXMvY29tbW9uLXdyYXAnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCwgQ29tcGF0aWJsZURhdGUgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzYWJsZWRUaW1lRm4sIFBhbmVsTW9kZSwgUHJlc2V0UmFuZ2VzIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYGAgLy8gSnVzdCBmb3Igcm9sbHVwXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHNob3dXZWVrOiBib29sZWFuID0gZmFsc2U7IC8vIFNob3VsZCBzaG93IGFzIHdlZWsgcGlja2VyXG5cbiAgQElucHV0KCkgZHdEYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBkd0Rpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47XG4gIEBJbnB1dCgpIGR3UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd1Nob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGR3TW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XG4gIEBJbnB1dCgpIGR3UmFuZ2VzOiBGdW5jdGlvblByb3A8UHJlc2V0UmFuZ2VzPjtcbiAgQE91dHB1dCgpIGR3T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XG5cbiAgcHJpdmF0ZSBfc2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGdldCBkd1Nob3dUaW1lKCk6IG9iamVjdCB8IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2hvd1RpbWU7IH1cbiAgc2V0IGR3U2hvd1RpbWUodmFsdWU6IG9iamVjdCB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgZHdPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZT4oKTtcblxuICBnZXQgcmVhbFNob3dUb2RheSgpOiBib29sZWFuIHsgLy8gUmFuZ2Ugbm90IHN1cHBvcnQgZHdTaG93VG9kYXkgY3VycmVudGx5XG4gICAgcmV0dXJuICF0aGlzLmlzUmFuZ2UgJiYgdGhpcy5kd1Nob3dUb2RheTtcbiAgfVxuXG4gIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihpMThuOiBEd0kxOG5TZXJ2aWNlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICAgIHN1cGVyKGkxOG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIC8vIERlZmF1bHQgZm9ybWF0IHdoZW4gaXQncyBlbXB0eVxuICAgIGlmICghdGhpcy5kd0Zvcm1hdCkge1xuICAgICAgaWYgKHRoaXMuc2hvd1dlZWspIHtcbiAgICAgICAgdGhpcy5kd0Zvcm1hdCA9ICd5eXl5LXd3JzsgLy8gRm9ybWF0IGZvciB3ZWVrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmR3Rm9ybWF0ID0gdGhpcy5kd1Nob3dUaW1lID8gJ3l5eXktTU0tZGQgSEg6bW06c3MnIDogJ3l5eXktTU0tZGQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgIGlmIChjaGFuZ2VzLmR3UmVuZGVyRXh0cmFGb290ZXIpIHtcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmR3UmVuZGVyRXh0cmFGb290ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIGhhcyBubyB0aW1lcGlja2VyIGFuZCB0aGUgdXNlciBzZWxlY3QgYSBkYXRlIGJ5IGRhdGUgcGFuZWwsIHRoZW4gY2xvc2UgcGlja2VyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuXG4gICAgaWYgKCF0aGlzLmR3U2hvd1RpbWUpIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xuICBvblJlc3VsdE9rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGlmICgodGhpcy5kd1ZhbHVlIGFzIENhbmR5RGF0ZVtdKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kd09uT2suZW1pdChbIHRoaXMuZHdWYWx1ZVsgMCBdLm5hdGl2ZURhdGUsIHRoaXMuZHdWYWx1ZVsgMSBdLm5hdGl2ZURhdGUgXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmR3T25Pay5lbWl0KFtdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHdWYWx1ZSkge1xuICAgICAgICB0aGlzLmR3T25Pay5lbWl0KCh0aGlzLmR3VmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHdPbk9rLmVtaXQobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gIH1cblxuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHdPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcbiAgfVxufVxuIl19
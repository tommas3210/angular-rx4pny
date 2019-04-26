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
var DateRangePickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DateRangePickerComponent, _super);
    function DateRangePickerComponent(i18n, logger) {
        var _this = _super.call(this, i18n) || this;
        _this.logger = logger;
        _this.showWeek = false;
        _this.dwShowToday = true;
        _this.dwOnPanelChange = new EventEmitter();
        _this.dwOnOk = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DateRangePickerComponent.prototype, "dwShowTime", {
        get: /**
         * @return {?}
         */
        function () { return this._showTime; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showTime = typeof value === 'object' ? value : toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePickerComponent.prototype, "realShowToday", {
        get: /**
         * @return {?}
         */
        function () {
            // Range not support dwShowToday currently
            return !this.isRange && this.dwShowToday;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        // Default format when it's empty
        if (!this.dwFormat) {
            if (this.showWeek) {
                this.dwFormat = 'yyyy-ww'; // Format for week
            }
            else {
                this.dwFormat = this.dwShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes["dwRenderExtraFooter"]) {
            this.extraFooter = valueFunctionProp(this.dwRenderExtraFooter);
        }
    };
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePickerComponent.prototype.onValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        _super.prototype.onValueChange.call(this, value);
        if (!this.dwShowTime) {
            this.closeOverlay();
        }
    };
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    DateRangePickerComponent.prototype.onResultOk = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} open
     * @return {?}
     */
    DateRangePickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        this.dwOnOpenChange.emit(open);
    };
    DateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    template: "" // Just for rollup
                    // Just for rollup
                }] }
    ];
    /** @nocollapse */
    DateRangePickerComponent.ctorParameters = function () { return [
        { type: DwI18nService },
        { type: LoggerService }
    ]; };
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
    return DateRangePickerComponent;
}(AbstractPickerComponent));
export { DateRangePickerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFHdEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBa0IsTUFBTSw2QkFBNkIsQ0FBQzs7SUFPeEMsb0RBQXVCO0lBeUJuRSxrQ0FBWSxJQUFtQixFQUFVLE1BQXFCO1FBQTlELFlBQ0Usa0JBQU0sSUFBSSxDQUFDLFNBQ1o7UUFGd0MsWUFBTSxHQUFOLE1BQU0sQ0FBZTt5QkF4QjFDLEtBQUs7NEJBS3VCLElBQUk7Z0NBR3hCLElBQUksWUFBWSxFQUEyQjt1QkFRcEQsSUFBSSxZQUFZLEVBQWtCOztLQVVwRDtJQWZELHNCQUFhLGdEQUFVOzs7O1FBQXZCLGNBQThDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFOzs7OztRQUN0RSxVQUFlLEtBQXVCO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2RTs7O09BSHFFO0lBT3RFLHNCQUFJLG1EQUFhOzs7O1FBQWpCOztZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDMUM7OztPQUFBOzs7O0lBUUQsMkNBQVE7OztJQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7O1FBR2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQ3hFO1NBQ0Y7S0FDRjs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLElBQUksT0FBTyx5QkFBc0I7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoRTtLQUNGO0lBRUQsbUZBQW1GOzs7OztJQUNuRixnREFBYTs7OztJQUFiLFVBQWMsS0FBZ0I7UUFDNUIsaUJBQU0sYUFBYSxZQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtLQUNGO0lBRUQsd0NBQXdDOzs7O0lBQ3hDLDZDQUFVOzs7SUFBVjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLG1CQUFDLElBQUksQ0FBQyxPQUFzQixFQUFDLENBQUMsTUFBTSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFFLENBQUMsVUFBVSxDQUFFLENBQUMsQ0FBQzthQUNsRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFDLElBQUksQ0FBQyxPQUFvQixFQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEI7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCwrQ0FBWTs7OztJQUFaLFVBQWEsSUFBYTtRQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQzs7Z0JBbkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsRUFBRSxDQUFDLGtCQUFrQjtvQkFBbkI7aUJBQ2I7Ozs7Z0JBUlEsYUFBYTtnQkFEYixhQUFhOzs7K0JBY25CLEtBQUs7aUNBQ0wsS0FBSztzQ0FDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO2tDQUNMLE1BQU07NkJBR04sS0FBSzt5QkFLTCxNQUFNOzs7UUFYRyxZQUFZLEVBQUU7OzttQ0FyQjFCO0VBZThDLHVCQUF1QjtTQUF4RCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uL2NvcmUvdHlwZXMvY29tbW9uLXdyYXAnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUnO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCwgQ29tcGF0aWJsZURhdGUgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlzYWJsZWRUaW1lRm4sIFBhbmVsTW9kZSwgUHJlc2V0UmFuZ2VzIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogYGAgLy8gSnVzdCBmb3Igcm9sbHVwXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHNob3dXZWVrOiBib29sZWFuID0gZmFsc2U7IC8vIFNob3VsZCBzaG93IGFzIHdlZWsgcGlja2VyXG5cbiAgQElucHV0KCkgZHdEYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBkd0Rpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47XG4gIEBJbnB1dCgpIGR3UmVuZGVyRXh0cmFGb290ZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd1Nob3dUb2RheTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGR3TW9kZTogUGFuZWxNb2RlIHwgUGFuZWxNb2RlW107XG4gIEBJbnB1dCgpIGR3UmFuZ2VzOiBGdW5jdGlvblByb3A8UHJlc2V0UmFuZ2VzPjtcbiAgQE91dHB1dCgpIGR3T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XG5cbiAgcHJpdmF0ZSBfc2hvd1RpbWU6IG9iamVjdCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGdldCBkd1Nob3dUaW1lKCk6IG9iamVjdCB8IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc2hvd1RpbWU7IH1cbiAgc2V0IGR3U2hvd1RpbWUodmFsdWU6IG9iamVjdCB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93VGltZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgZHdPbk9rID0gbmV3IEV2ZW50RW1pdHRlcjxDb21wYXRpYmxlRGF0ZT4oKTtcblxuICBnZXQgcmVhbFNob3dUb2RheSgpOiBib29sZWFuIHsgLy8gUmFuZ2Ugbm90IHN1cHBvcnQgZHdTaG93VG9kYXkgY3VycmVudGx5XG4gICAgcmV0dXJuICF0aGlzLmlzUmFuZ2UgJiYgdGhpcy5kd1Nob3dUb2RheTtcbiAgfVxuXG4gIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihpMThuOiBEd0kxOG5TZXJ2aWNlLCBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICAgIHN1cGVyKGkxOG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIC8vIERlZmF1bHQgZm9ybWF0IHdoZW4gaXQncyBlbXB0eVxuICAgIGlmICghdGhpcy5kd0Zvcm1hdCkge1xuICAgICAgaWYgKHRoaXMuc2hvd1dlZWspIHtcbiAgICAgICAgdGhpcy5kd0Zvcm1hdCA9ICd5eXl5LXd3JzsgLy8gRm9ybWF0IGZvciB3ZWVrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmR3Rm9ybWF0ID0gdGhpcy5kd1Nob3dUaW1lID8gJ3l5eXktTU0tZGQgSEg6bW06c3MnIDogJ3l5eXktTU0tZGQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgIGlmIChjaGFuZ2VzLmR3UmVuZGVyRXh0cmFGb290ZXIpIHtcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLmR3UmVuZGVyRXh0cmFGb290ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIGhhcyBubyB0aW1lcGlja2VyIGFuZCB0aGUgdXNlciBzZWxlY3QgYSBkYXRlIGJ5IGRhdGUgcGFuZWwsIHRoZW4gY2xvc2UgcGlja2VyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuXG4gICAgaWYgKCF0aGlzLmR3U2hvd1RpbWUpIHtcbiAgICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xuICBvblJlc3VsdE9rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGlmICgodGhpcy5kd1ZhbHVlIGFzIENhbmR5RGF0ZVtdKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kd09uT2suZW1pdChbIHRoaXMuZHdWYWx1ZVsgMCBdLm5hdGl2ZURhdGUsIHRoaXMuZHdWYWx1ZVsgMSBdLm5hdGl2ZURhdGUgXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmR3T25Pay5lbWl0KFtdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHdWYWx1ZSkge1xuICAgICAgICB0aGlzLmR3T25Pay5lbWl0KCh0aGlzLmR3VmFsdWUgYXMgQ2FuZHlEYXRlKS5uYXRpdmVEYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHdPbk9rLmVtaXQobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2xvc2VPdmVybGF5KCk7XG4gIH1cblxuICBvbk9wZW5DaGFuZ2Uob3BlbjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHdPbk9wZW5DaGFuZ2UuZW1pdChvcGVuKTtcbiAgfVxufVxuIl19
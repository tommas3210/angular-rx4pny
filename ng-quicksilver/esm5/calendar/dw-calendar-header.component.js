/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import setMonth from 'date-fns/set_month';
import { DwI18nService as I18n } from '../i18n/dw-i18n.service';
var DwCalendarHeaderComponent = /** @class */ (function () {
    function DwCalendarHeaderComponent(i18n) {
        this.i18n = i18n;
        this.mode = 'month';
        this.modeChange = new EventEmitter();
        this.fullscreen = true;
        this.activeDate = new Date();
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.prefixCls = 'ant-fullcalendar';
    }
    Object.defineProperty(DwCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    DwCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    DwCalendarHeaderComponent.prototype.setUpYears = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @return {?}
     */
    DwCalendarHeaderComponent.prototype.setUpMonths = /**
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = setMonth(this.activeDate, i);
            /** @type {?} */
            var monthText = this.i18n.formatDate(dateInMonth, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    DwCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-calendar-header',
                    template: "<dw-select class=\"ant-fullcalendar-year-select\" [dwSize]=\"size\" [dwDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\">\n  <dw-option *ngFor=\"let year of years\" [dwLabel]=\"year.label\" [dwValue]=\"year.value\"></dw-option>\n</dw-select>\n\n<dw-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [dwSize]=\"size\" [dwDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\n  <dw-option *ngFor=\"let month of months\" [dwLabel]=\"month.label\" [dwValue]=\"month.value\"></dw-option>\n</dw-select>\n\n<dw-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [dwSize]=\"size\">\n  <label dw-radio-button dwValue=\"month\">{{ monthTypeText }}</label>\n  <label dw-radio-button dwValue=\"year\">{{ yearTypeText }}</label>\n</dw-radio-group>\n",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    DwCalendarHeaderComponent.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    DwCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        modeChange: [{ type: Output }],
        fullscreen: [{ type: Input }],
        activeDate: [{ type: Input }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return DwCalendarHeaderComponent;
}());
export { DwCalendarHeaderComponent };
function DwCalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.activeDate;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.months;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    DwCalendarHeaderComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY2FsZW5kYXIvZHctY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQStDOUQsbUNBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQXBDSSxPQUFPOzBCQUNjLElBQUksWUFBWSxFQUFFOzBCQUUxQyxJQUFJOzBCQUNQLElBQUksSUFBSSxFQUFFOzBCQUVPLElBQUksWUFBWSxFQUFFOzJCQUNqQixJQUFJLFlBQVksRUFBRTswQkFFM0MsRUFBRTt5QkFDSCxFQUFFO3lCQXdCRixrQkFBa0I7S0FHckM7SUF2QkQsc0JBQUksaURBQVU7Ozs7UUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0Qzs7O09BQUE7SUFFRCxzQkFBSSxrREFBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25DOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQzlDOzs7T0FBQTtJQUVELHNCQUFJLG1EQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDNUM7OztPQUFBO0lBRUQsc0JBQUksb0RBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztTQUM3Qzs7O09BQUE7Ozs7SUFPRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELDhDQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7Ozs7O0lBRU8sOENBQVU7Ozs7Y0FBQyxJQUFhOztRQUM5QixJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7UUFDMUQsSUFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFHLENBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5Qzs7Ozs7SUFHSywrQ0FBVzs7OztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMzQixJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDakQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRDs7O2dCQTNFSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFLLG9CQUFvQjtvQkFDakMsKzVCQUFrRDtvQkFDbEQsSUFBSSxFQUFTO3dCQUNYLGlCQUFpQixFQUFrQixTQUFTO3dCQUM1QyxpQ0FBaUMsRUFBRSxNQUFNO3FCQUMxQztpQkFDRjs7OztnQkFUeUIsSUFBSTs7O3VCQVczQixLQUFLOzZCQUNMLE1BQU07NkJBRU4sS0FBSzs2QkFDTCxLQUFLOzZCQUVMLE1BQU07OEJBQ04sTUFBTTs7b0NBcEJUOztTQVlhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnLi4vaTE4bi9kdy1pMThuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy1jYWxlbmRhci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW3N0eWxlLmRpc3BsYXldJyAgICAgICAgICAgICAgICA6IGAnYmxvY2snYCxcbiAgICAnW2NsYXNzLmFudC1mdWxsY2FsZW5kYXItaGVhZGVyXSc6IGB0cnVlYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBtb2RlOiAnbW9udGgnIHwgJ3llYXInID0gJ21vbnRoJztcbiAgQE91dHB1dCgpIG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjwnbW9udGgnIHwgJ3llYXInPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWN0aXZlRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgQE91dHB1dCgpIHllYXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbW9udGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHllYXJPZmZzZXQ6IG51bWJlciA9IDEwO1xuICB5ZWFyVG90YWw6IG51bWJlciA9IDIwO1xuICB5ZWFyczogQXJyYXk8eyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xuICBtb250aHM6IEFycmF5PHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlciB9PjtcblxuICBnZXQgYWN0aXZlWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGdldCBhY3RpdmVNb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIGdldCBzaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/ICdkZWZhdWx0JyA6ICdzbWFsbCc7XG4gIH1cblxuICBnZXQgeWVhclR5cGVUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci55ZWFyO1xuICB9XG5cbiAgZ2V0IG1vbnRoVHlwZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLm1vbnRoO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWZ1bGxjYWxlbmRhcic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThuKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFVwWWVhcnMoKTtcbiAgICB0aGlzLnNldFVwTW9udGhzKCk7XG4gIH1cblxuICB1cGRhdGVZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMueWVhckNoYW5nZS5lbWl0KHllYXIpO1xuICAgIHRoaXMuc2V0VXBZZWFycyh5ZWFyKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBZZWFycyh5ZWFyPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnQgPSAoeWVhciB8fCB0aGlzLmFjdGl2ZVllYXIpIC0gdGhpcy55ZWFyT2Zmc2V0O1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy55ZWFyVG90YWw7XG5cbiAgICB0aGlzLnllYXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXMueWVhcnMucHVzaCh7IGxhYmVsOiBgJHtpfWAsIHZhbHVlOiBpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBNb250aHMoKTogdm9pZCB7XG4gICAgdGhpcy5tb250aHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZUluTW9udGggPSBzZXRNb250aCh0aGlzLmFjdGl2ZURhdGUsIGkpO1xuICAgICAgY29uc3QgbW9udGhUZXh0ID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZUluTW9udGgsICdNTU0nKTtcbiAgICAgIHRoaXMubW9udGhzLnB1c2goeyBsYWJlbDogbW9udGhUZXh0LCB2YWx1ZTogaSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
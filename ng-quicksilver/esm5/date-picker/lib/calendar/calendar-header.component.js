/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DwI18nService } from '../../../i18n/dw-i18n.service';
import { CandyDate } from '../candy-date';
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(i18n) {
        this.i18n = i18n;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false;
    }
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] || changes["showTimePicker"] || changes["panelMode"]) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(1);
    };
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changePanel = /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    function (mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseDecade = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeToMonthPanel = /**
     * @return {?}
     */
    function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoMonth = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeValueFromInside = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @param {?} localeFormat
     * @return {?}
     */
    CalendarHeaderComponent.prototype.formatDateTime = /**
     * @param {?} localeFormat
     * @return {?}
     */
    function (localeFormat) {
        return this.i18n.formatDateCompatible(this.value.nativeDate, localeFormat);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var year;
        /** @type {?} */
        var month;
        /** @type {?} */
        var day;
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changePanel('year'); },
            label: this.formatDateTime(this.locale.yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changeToMonthPanel(); },
            label: this.locale.monthFormat ? this.formatDateTime(this.locale.monthFormat) : this.i18n.formatDate(this.value.nativeDate, 'MMM')
        };
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(this.locale.dayFormat)
            };
        }
        /** @type {?} */
        var result;
        if (this.locale.monthBeforeYear) {
            result = [month, day, year];
        }
        else {
            result = [year, month, day];
        }
        return result.filter(function (selector) { return !!selector; });
    };
    CalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-header',
                    template: "<div class=\"{{ prefixCls }}-header\">\n  <div style=\"position: relative;\">\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-year-btn\"\n      role=\"button\"\n      (click)=\"previousYear()\"\n      title=\"{{ locale.previousYear }}\"\n    ></a>\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-month-btn\"\n      role=\"button\"\n      (click)=\"previousMonth()\"\n      title=\"{{ locale.previousMonth }}\"\n    ></a>\n\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\n        <a class=\"{{ selector.className }}\"\n          role=\"button\"\n          (click)=\"selector.onClick ? selector.onClick() : null\"\n          title=\"{{ selector.title || null }}\"\n        >\n          {{ selector.label }}\n        </a>\n      </ng-container>\n    </span>\n\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-month-btn\"\n      role=\"button\"\n      (click)=\"nextMonth()\"\n      title=\"{{ locale.nextMonth }}\"\n    ></a>\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-year-btn\"\n      role=\"button\"\n      (click)=\"nextYear()\"\n      title=\"{{ locale.nextYear }}\"\n    ></a>\n  </div>\n\n  <ng-container [ngSwitch]=\"panelMode\">\n    <ng-container *ngSwitchCase=\"'decade'\">\n      <decade-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseDecade($event)\"\n      ></decade-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'year'\">\n      <year-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseYear($event)\"\n        (decadePanelShow)=\"changePanel('decade')\"\n      ></year-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'month'\">\n      <month-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledMonth\"\n        (valueChange)=\"onChooseMonth($event)\"\n        (yearPanelShow)=\"changePanel('year')\"\n      ></month-panel>\n    </ng-container>\n  </ng-container>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CalendarHeaderComponent.ctorParameters = function () { return [
        { type: DwI18nService }
    ]; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledMonth: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        chooseDecade: [{ type: Output }],
        chooseYear: [{ type: Output }],
        chooseMonth: [{ type: Output }]
    };
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
function CalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseDecade;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearToMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.i18n;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
function YearMonthDaySelector_tsickle_Closure_declarations() {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2NhbGVuZGFyL2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE2QnhDLGlDQUFvQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlOzBCQXBCUixJQUFJOzBCQUNKLElBQUk7OEJBRUEsS0FBSzsyQkFHaEIsSUFBSSxZQUFZLEVBQWE7K0JBR3pCLElBQUksWUFBWSxFQUFhOzRCQUVoQyxJQUFJLFlBQVksRUFBYTswQkFDL0IsSUFBSSxZQUFZLEVBQWE7MkJBQzVCLElBQUksWUFBWSxFQUFhO3lCQUVqQyxjQUFjOzJCQUdILEtBQUs7S0FFUTs7OztJQUU1QywwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sYUFBVSxPQUFPLGtCQUFlLElBQUksT0FBTyxhQUFVLEVBQUU7WUFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7OztJQUVELDhDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQjs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUks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SSxDQUFFLENBQUM7U0FDL0I7YUFBTTtZQUNMLE1BQU0sR0FBRyxDQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFFLENBQUM7U0FDL0I7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxDQUFDLENBQUMsUUFBUSxFQUFWLENBQVUsQ0FBQyxDQUFDOzs7Z0JBbEpoRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscXJFQUE2QztpQkFDOUM7Ozs7Z0JBUFEsYUFBYTs7O3lCQVVuQixLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7d0JBRUwsS0FBSzs4QkFDTCxNQUFNOzRCQUVOLEtBQUs7a0NBQ0wsTUFBTTsrQkFFTixNQUFNOzZCQUNOLE1BQU07OEJBQ04sTUFBTTs7a0NBM0JUOztTQVlhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd0NhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vZHctaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJ2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBEd0NhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGVuYWJsZU5leHQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkaXNhYmxlZE1vbnRoOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZTtcbiAgQE91dHB1dCgpIHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlPigpO1xuXG4gIEBPdXRwdXQoKSBjaG9vc2VEZWNhZGUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIGNob29zZVllYXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIGNob29zZU1vbnRoID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgeWVhck1vbnRoRGF5U2VsZWN0b3JzOiBZZWFyTW9udGhEYXlTZWxlY3RvcltdO1xuXG4gIHByaXZhdGUgeWVhclRvTW9udGg6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciBzaG91bGQgY2hhbmdlIHRvIG1vbnRoIHBhbmVsIHdoZW4gY3VycmVudCBpcyB5ZWFyIHBhbmVsIChpZiByZWZlcmVyPW1vbnRoLCBpdCBzaG91bGQgc2hvdyBtb250aCBwYW5lbCB3aGVuIGNob29zZWQgYSB5ZWFyKVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRHdJMThuU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3IENhbmR5RGF0ZSgpOyAvLyBTaG93IHRvZGF5IGJ5IGRlZmF1bHRcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5zaG93VGltZVBpY2tlciB8fCBjaGFuZ2VzLnBhbmVsTW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91c1llYXIoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigtMSk7XG4gIH1cblxuICBuZXh0WWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKDEpO1xuICB9XG5cbiAgcHJldmlvdXNNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9Nb250aCgtMSk7XG4gIH1cblxuICBuZXh0TW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvTW9udGgoMSk7XG4gIH1cblxuICBjaGFuZ2VQYW5lbChtb2RlOiBQYW5lbE1vZGUsIHZhbHVlPzogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChtb2RlKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvbkNob29zZURlY2FkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgneWVhcicsIHZhbHVlKTtcbiAgICB0aGlzLmNob29zZURlY2FkZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hvb3NlWWVhcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQYW5lbCh0aGlzLnllYXJUb01vbnRoID8gJ21vbnRoJyA6ICdkYXRlJywgdmFsdWUpO1xuICAgIHRoaXMueWVhclRvTW9udGggPSBmYWxzZTsgLy8gQ2xlYXJcbiAgICB0aGlzLmNob29zZVllYXIuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbkNob29zZU1vbnRoKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCdkYXRlJywgdmFsdWUpO1xuICAgIHRoaXMueWVhclRvTW9udGggPSBmYWxzZTsgLy8gQ2xlYXJcbiAgICB0aGlzLmNob29zZU1vbnRoLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgY2hhbmdlVG9Nb250aFBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ21vbnRoJyk7XG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy55ZWFyTW9udGhEYXlTZWxlY3RvcnMgPSB0aGlzLmNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ290b01vbnRoKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRNb250aHMoYW1vdW50KSk7XG4gIH1cblxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXREYXRlVGltZShsb2NhbGVGb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mb3JtYXREYXRlQ29tcGF0aWJsZSh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsIGxvY2FsZUZvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpOiBZZWFyTW9udGhEYXlTZWxlY3RvcltdIHtcbiAgICBsZXQgeWVhcjogWWVhck1vbnRoRGF5U2VsZWN0b3I7XG4gICAgbGV0IG1vbnRoOiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcbiAgICBsZXQgZGF5OiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcblxuICAgIHllYXIgPSB7XG4gICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS15ZWFyLXNlbGVjdGAsXG4gICAgICB0aXRsZTogdGhpcy5sb2NhbGUueWVhclNlbGVjdCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuc2hvd1RpbWVQaWNrZXIgPyBudWxsIDogdGhpcy5jaGFuZ2VQYW5lbCgneWVhcicpLFxuICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy5sb2NhbGUueWVhckZvcm1hdClcbiAgICB9O1xuXG4gICAgbW9udGggPSB7XG4gICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1tb250aC1zZWxlY3RgLFxuICAgICAgdGl0bGU6IHRoaXMubG9jYWxlLm1vbnRoU2VsZWN0LFxuICAgICAgb25DbGljazogKCkgPT4gdGhpcy5zaG93VGltZVBpY2tlciA/IG51bGwgOiB0aGlzLmNoYW5nZVRvTW9udGhQYW5lbCgpLFxuICAgICAgbGFiZWw6IHRoaXMubG9jYWxlLm1vbnRoRm9ybWF0ID8gdGhpcy5mb3JtYXREYXRlVGltZSh0aGlzLmxvY2FsZS5tb250aEZvcm1hdCkgOiB0aGlzLmkxOG4uZm9ybWF0RGF0ZSh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsICdNTU0nKVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5zaG93VGltZVBpY2tlcikge1xuICAgICAgZGF5ID0ge1xuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kYXktc2VsZWN0YCxcbiAgICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy5sb2NhbGUuZGF5Rm9ybWF0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBZZWFyTW9udGhEYXlTZWxlY3RvcltdO1xuXG4gICAgaWYgKHRoaXMubG9jYWxlLm1vbnRoQmVmb3JlWWVhcikge1xuICAgICAgcmVzdWx0ID0gWyBtb250aCwgZGF5LCB5ZWFyIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFsgeWVhciwgbW9udGgsIGRheSBdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuZmlsdGVyKHNlbGVjdG9yID0+ICEhc2VsZWN0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWWVhck1vbnRoRGF5U2VsZWN0b3Ige1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG9uQ2xpY2s/KCk6IHZvaWQ7XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { forwardRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import addDays from 'date-fns/add_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';
import endOfMonth from 'date-fns/end_of_month';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import isSameYear from 'date-fns/is_same_year';
import isThisMonth from 'date-fns/is_this_month';
import isThisYear from 'date-fns/is_this_year';
import setMonth from 'date-fns/set_month';
import setYear from 'date-fns/set_year';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import { DwI18nService as I18n } from '../i18n/dw-i18n.service';
import { DwDateCellDirective as DateCell, DwDateFullCellDirective as DateFullCell, DwMonthCellDirective as MonthCell, DwMonthFullCellDirective as MonthFullCell } from './dw-calendar-cells';
var DwCalendarComponent = /** @class */ (function () {
    function DwCalendarComponent(i18n) {
        this.i18n = i18n;
        this.dwMode = 'month';
        this.dwModeChange = new EventEmitter();
        this.dwValueChange = new EventEmitter();
        this.fullscreen = true;
        this.daysInWeek = [];
        this.monthsInYear = [];
        this.dateMatrix = [];
        this.activeDate = new Date();
        this.currentDateRow = -1;
        this.currentDateCol = -1;
        this.activeDateRow = -1;
        this.activeDateCol = -1;
        this.currentMonthRow = -1;
        this.currentMonthCol = -1;
        this.activeMonthRow = -1;
        this.activeMonthCol = -1;
        this.dateCell = null;
        this.dateFullCell = null;
        this.monthCell = null;
        this.monthFullCell = null;
        this.prefixCls = 'ant-fullcalendar';
        this.currentDate = new Date();
        this.onChangeFn = function () { };
        this.onTouchFn = function () { };
    }
    Object.defineProperty(DwCalendarComponent.prototype, "dwValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.updateDate(value, false); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dwDateCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.dateCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dwDateFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.dateFullCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dwMonthCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.monthCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dwMonthFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.monthFullCell = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dwFullscreen", {
        get: /**
         * @return {?}
         */
        function () { return this.fullscreen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.fullscreen = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dwCard", {
        get: /**
         * @return {?}
         */
        function () { return !this.fullscreen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.fullscreen = !coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dateCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.dateCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "dateFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.dateFullCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "monthCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.monthCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "monthFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { if (value) {
            this.monthFullCell = value;
        } },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCalendarComponent.prototype, "calendarStart", {
        get: /**
         * @return {?}
         */
        function () {
            return startOfWeek(startOfMonth(this.activeDate));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    DwCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.dwModeChange.emit(mode);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DwCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.updateDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    DwCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = setYear(this.activeDate, year);
        this.updateDate(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DwCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = setMonth(this.activeDate, month);
        this.updateDate(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(value || new Date(), false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    DwCalendarComponent.prototype.updateDate = /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        /** @type {?} */
        var dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        var monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        var yearChanged = !isSameYear(date, this.activeDate);
        this.activeDate = date;
        if (dayChanged) {
            this.calculateActiveDate();
        }
        if (monthChanged) {
            this.setUpDateMatrix();
            this.calculateCurrentDate();
            this.calculateActiveMonth();
        }
        if (yearChanged) {
            this.calculateCurrentMonth();
        }
        if (touched) {
            this.onChangeFn(date);
            this.onTouchFn();
            this.dwValueChange.emit(date);
        }
    };
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.setUpDaysInWeek = /**
     * @return {?}
     */
    function () {
        this.daysInWeek = [];
        /** @type {?} */
        var weekStart = startOfWeek(this.activeDate);
        for (var i = 0; i < 7; i++) {
            /** @type {?} */
            var date = addDays(weekStart, i);
            /** @type {?} */
            var title = this.i18n.formatDate(date, 'E');
            /** @type {?} */
            var label = this.i18n.formatDate(date, 'EEEEEE');
            this.daysInWeek.push({ title: title, label: label });
        }
    };
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.setUpMonthsInYear = /**
     * @return {?}
     */
    function () {
        this.monthsInYear = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var date = setMonth(this.activeDate, i);
            /** @type {?} */
            var title = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            var label = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            var start = startOfMonth(date);
            this.monthsInYear.push({ title: title, label: label, start: start });
        }
    };
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.setUpDateMatrix = /**
     * @return {?}
     */
    function () {
        this.dateMatrix = [];
        /** @type {?} */
        var monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        var monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        var weekDiff = differenceInCalendarWeeks(monthEnd, monthStart) + 2;
        for (var week = 0; week < weekDiff; week++) {
            /** @type {?} */
            var row = [];
            /** @type {?} */
            var weekStart = addDays(this.calendarStart, week * 7);
            for (var day = 0; day < 7; day++) {
                /** @type {?} */
                var date = addDays(weekStart, day);
                /** @type {?} */
                var monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                var title = this.i18n.formatDate(date, 'longDate');
                /** @type {?} */
                var label = this.i18n.formatDate(date, 'dd');
                /** @type {?} */
                var rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title: title, label: label, rel: rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    };
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.calculateCurrentDate = /**
     * @return {?}
     */
    function () {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart);
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    };
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.calculateActiveDate = /**
     * @return {?}
     */
    function () {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart);
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    };
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.calculateCurrentMonth = /**
     * @return {?}
     */
    function () {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            var yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            var monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    };
    /**
     * @return {?}
     */
    DwCalendarComponent.prototype.calculateActiveMonth = /**
     * @return {?}
     */
    function () {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    };
    DwCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-calendar',
                    template: "<dw-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\n                    [(mode)]=\"dwMode\" (modeChange)=\"onModeChange($event)\"\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\n</dw-calendar-header>\n\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\n  <div class=\"ant-fullcalendar-calendar-body\">\n    <ng-container *ngIf=\"dwMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\n  </div>\n</div>\n\n<ng-template #monthModeTable>\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\n    <thead>\n      <tr role=\"row\">\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"ant-fullcalendar-tbody\">\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\n            (click)=\"onDateSelect(day.value)\">\n            <div class=\"ant-fullcalendar-date\">\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\n                </div>\n              </ng-template>\n            </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template #yearModeTable>\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\n            class=\"ant-fullcalendar-month-panel-cell\"\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\n            (click)=\"onMonthSelect(row * 3 + col)\">\n          <div class=\"ant-fullcalendar-month\">\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n            </ng-container>\n            <ng-template #defaultCell>\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n              </div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return DwCalendarComponent; }), multi: true }
                    ]
                }] }
    ];
    /** @nocollapse */
    DwCalendarComponent.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    DwCalendarComponent.propDecorators = {
        dwMode: [{ type: Input }],
        dwModeChange: [{ type: Output }],
        dwValue: [{ type: Input }],
        dwValueChange: [{ type: Output }],
        dwDateCell: [{ type: Input }],
        dwDateFullCell: [{ type: Input }],
        dwMonthCell: [{ type: Input }],
        dwMonthFullCell: [{ type: Input }],
        dwFullscreen: [{ type: Input }],
        dwCard: [{ type: Input }],
        dateCellChild: [{ type: ContentChild, args: [DateCell, { read: TemplateRef },] }],
        dateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { read: TemplateRef },] }],
        monthCellChild: [{ type: ContentChild, args: [MonthCell, { read: TemplateRef },] }],
        monthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { read: TemplateRef },] }],
        fullscreen: [{ type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }]
    };
    return DwCalendarComponent;
}());
export { DwCalendarComponent };
function DwCalendarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCalendarComponent.prototype.dwMode;
    /** @type {?} */
    DwCalendarComponent.prototype.dwModeChange;
    /** @type {?} */
    DwCalendarComponent.prototype.dwValueChange;
    /** @type {?} */
    DwCalendarComponent.prototype.fullscreen;
    /** @type {?} */
    DwCalendarComponent.prototype.daysInWeek;
    /** @type {?} */
    DwCalendarComponent.prototype.monthsInYear;
    /** @type {?} */
    DwCalendarComponent.prototype.dateMatrix;
    /** @type {?} */
    DwCalendarComponent.prototype.activeDate;
    /** @type {?} */
    DwCalendarComponent.prototype.currentDateRow;
    /** @type {?} */
    DwCalendarComponent.prototype.currentDateCol;
    /** @type {?} */
    DwCalendarComponent.prototype.activeDateRow;
    /** @type {?} */
    DwCalendarComponent.prototype.activeDateCol;
    /** @type {?} */
    DwCalendarComponent.prototype.currentMonthRow;
    /** @type {?} */
    DwCalendarComponent.prototype.currentMonthCol;
    /** @type {?} */
    DwCalendarComponent.prototype.activeMonthRow;
    /** @type {?} */
    DwCalendarComponent.prototype.activeMonthCol;
    /** @type {?} */
    DwCalendarComponent.prototype.dateCell;
    /** @type {?} */
    DwCalendarComponent.prototype.dateFullCell;
    /** @type {?} */
    DwCalendarComponent.prototype.monthCell;
    /** @type {?} */
    DwCalendarComponent.prototype.monthFullCell;
    /** @type {?} */
    DwCalendarComponent.prototype.prefixCls;
    /** @type {?} */
    DwCalendarComponent.prototype.currentDate;
    /** @type {?} */
    DwCalendarComponent.prototype.onChangeFn;
    /** @type {?} */
    DwCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    DwCalendarComponent.prototype.i18n;
}
/**
 * @record
 */
export function DayCellContext() { }
function DayCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DayCellContext.prototype.title;
    /** @type {?} */
    DayCellContext.prototype.label;
}
/**
 * @record
 */
export function MonthCellContext() { }
function MonthCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthCellContext.prototype.title;
    /** @type {?} */
    MonthCellContext.prototype.label;
    /** @type {?} */
    MonthCellContext.prototype.start;
}
/**
 * @record
 */
export function DateCellContext() { }
function DateCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCellContext.prototype.title;
    /** @type {?} */
    DateCellContext.prototype.label;
    /** @type {?} */
    DateCellContext.prototype.rel;
    /** @type {?} */
    DateCellContext.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjYWxlbmRhci9kdy1jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLHdCQUF3QixNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sMEJBQTBCLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyx5QkFBeUIsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFNBQVMsTUFBTSxzQkFBc0IsQ0FBQztBQUM3QyxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFVBQVUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLFlBQVksTUFBTSx5QkFBeUIsQ0FBQztBQUNuRCxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFN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QVksU0FBQyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDO3FDQUczQyxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzs2QkFHL0MsV0FBVyxTQUFDLG9DQUFvQzs7OEJBbkVuRDs7U0E0QmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfZGF5cyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9tb250aHMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MgZnJvbSAnZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl93ZWVrcyc7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xuaW1wb3J0IGlzU2FtZURheSBmcm9tICdkYXRlLWZucy9pc19zYW1lX2RheSc7XG5pbXBvcnQgaXNTYW1lTW9udGggZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9tb250aCc7XG5pbXBvcnQgaXNTYW1lWWVhciBmcm9tICdkYXRlLWZucy9pc19zYW1lX3llYXInO1xuaW1wb3J0IGlzVGhpc01vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3RoaXNfbW9udGgnO1xuaW1wb3J0IGlzVGhpc1llYXIgZnJvbSAnZGF0ZS1mbnMvaXNfdGhpc195ZWFyJztcbmltcG9ydCBzZXRNb250aCBmcm9tICdkYXRlLWZucy9zZXRfbW9udGgnO1xuaW1wb3J0IHNldFllYXIgZnJvbSAnZGF0ZS1mbnMvc2V0X3llYXInO1xuaW1wb3J0IHN0YXJ0T2ZNb250aCBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9tb250aCc7XG5pbXBvcnQgc3RhcnRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlayc7XG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhcic7XG5pbXBvcnQgeyBEd0kxOG5TZXJ2aWNlIGFzIEkxOG4gfSBmcm9tICcuLi9pMThuL2R3LWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBEd0RhdGVDZWxsRGlyZWN0aXZlIGFzIERhdGVDZWxsLCBEd0RhdGVGdWxsQ2VsbERpcmVjdGl2ZSBhcyBEYXRlRnVsbENlbGwsIER3TW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCwgRHdNb250aEZ1bGxDZWxsRGlyZWN0aXZlIGFzIE1vbnRoRnVsbENlbGwgfSBmcm9tICcuL2R3LWNhbGVuZGFyLWNlbGxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHctY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEd0NhbGVuZGFyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3Q2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KCkgZHdNb2RlOiAnbW9udGgnfCd5ZWFyJyA9ICdtb250aCc7XG4gIEBPdXRwdXQoKSBkd01vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjwnbW9udGgnfCd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgc2V0IGR3VmFsdWUodmFsdWU6IERhdGUpIHsgdGhpcy51cGRhdGVEYXRlKHZhbHVlLCBmYWxzZSk7IH1cbiAgQE91dHB1dCgpIGR3VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdEYXRlQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMuZGF0ZUNlbGwgPSB2YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RhdGVGdWxsQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdNb250aENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TW9udGhGdWxsQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IHRoaXMubW9udGhGdWxsQ2VsbCA9IHZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmZ1bGxzY3JlZW4gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIGdldCBkd0Z1bGxzY3JlZW4oKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmZ1bGxzY3JlZW47IH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdDYXJkKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuZnVsbHNjcmVlbiA9ICFjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIGdldCBkd0NhcmQoKTogYm9vbGVhbiB7IHJldHVybiAhdGhpcy5mdWxsc2NyZWVuOyB9XG5cbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgc2V0IGRhdGVDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlOyB9IH1cblxuICBAQ29udGVudENoaWxkKERhdGVGdWxsQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgc2V0IGRhdGVGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7IH0gfVxuXG4gIEBDb250ZW50Q2hpbGQoTW9udGhDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxuICBzZXQgbW9udGhDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyBpZiAodmFsdWUpIHsgdGhpcy5tb250aENlbGwgPSB2YWx1ZTsgfSB9XG5cbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7cmVhZDogVGVtcGxhdGVSZWZ9KVxuICBzZXQgbW9udGhGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMubW9udGhGdWxsQ2VsbCA9IHZhbHVlOyB9IH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1mdWxsY2FsZW5kYXItLWZ1bGxzY3JlZW4nKVxuICBmdWxsc2NyZWVuID0gdHJ1ZTtcblxuICBkYXlzSW5XZWVrOiBEYXlDZWxsQ29udGV4dFtdID0gW107XG4gIG1vbnRoc0luWWVhcjogTW9udGhDZWxsQ29udGV4dFtdID0gW107XG4gIGRhdGVNYXRyaXg6IERhdGVDZWxsQ29udGV4dFtdW10gPSBbXTtcbiAgYWN0aXZlRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGN1cnJlbnREYXRlUm93OiBudW1iZXIgPSAtMTtcbiAgY3VycmVudERhdGVDb2w6IG51bWJlciA9IC0xO1xuICBhY3RpdmVEYXRlUm93OiBudW1iZXIgPSAtMTtcbiAgYWN0aXZlRGF0ZUNvbDogbnVtYmVyID0gLTE7XG4gIGN1cnJlbnRNb250aFJvdzogbnVtYmVyID0gLTE7XG4gIGN1cnJlbnRNb250aENvbDogbnVtYmVyID0gLTE7XG4gIGFjdGl2ZU1vbnRoUm93OiBudW1iZXIgPSAtMTtcbiAgYWN0aXZlTW9udGhDb2w6IG51bWJlciA9IC0xO1xuICBkYXRlQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xuICBkYXRlRnVsbENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcbiAgbW9udGhDZWxsOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT58bnVsbCA9IG51bGw7XG4gIG1vbnRoRnVsbENlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtZnVsbGNhbGVuZGFyJztcbiAgcHJpdmF0ZSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHByaXZhdGUgb25DaGFuZ2VGbjogKGRhdGU6IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvblRvdWNoRm46ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBwcml2YXRlIGdldCBjYWxlbmRhclN0YXJ0KCk6IERhdGUge1xuICAgIHJldHVybiBzdGFydE9mV2VlayhzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOG4pIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VXBEYXlzSW5XZWVrKCk7XG4gICAgdGhpcy5zZXRVcE1vbnRoc0luWWVhcigpO1xuICAgIHRoaXMuc2V0VXBEYXRlTWF0cml4KCk7XG4gICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xuICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVNb250aCgpO1xuICB9XG5cbiAgb25Nb2RlQ2hhbmdlKG1vZGU6ICdtb250aCd8J3llYXInKTogdm9pZCB7XG4gICAgdGhpcy5kd01vZGVDaGFuZ2UuZW1pdChtb2RlKTtcbiAgfVxuXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSBzZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSwgeWVhcik7XG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xuICB9XG5cbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgbW9udGgpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGV8bnVsbCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSB8fCBuZXcgRGF0ZSgpLCBmYWxzZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKGRhdGU6IERhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgY29uc3QgZGF5Q2hhbmdlZCA9ICFpc1NhbWVEYXkoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcbiAgICBjb25zdCBtb250aENoYW5nZWQgPSAhaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcbiAgICBjb25zdCB5ZWFyQ2hhbmdlZCA9ICFpc1NhbWVZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG5cbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xuXG4gICAgaWYgKGRheUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xuICAgIH1cbiAgICBpZiAobW9udGhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVNb250aCgpO1xuICAgIH1cbiAgICBpZiAoeWVhckNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XG4gICAgfVxuXG4gICAgaWYgKHRvdWNoZWQpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlKTtcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XG4gICAgICB0aGlzLmR3VmFsdWVDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFVwRGF5c0luV2VlaygpOiB2b2lkIHtcbiAgICB0aGlzLmRheXNJbldlZWsgPSBbXTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSBzdGFydE9mV2Vlayh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGkpO1xuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnRScpO1xuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnRUVFRUVFJyk7XG4gICAgICB0aGlzLmRheXNJbldlZWsucHVzaCh7dGl0bGUsIGxhYmVsfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcE1vbnRoc0luWWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLm1vbnRoc0luWWVhciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgaSk7XG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdNTU0nKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ01NTScpO1xuICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgoZGF0ZSk7XG4gICAgICB0aGlzLm1vbnRoc0luWWVhci5wdXNoKHt0aXRsZSwgbGFiZWwsIHN0YXJ0fSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcERhdGVNYXRyaXgoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRlTWF0cml4ID0gW107XG4gICAgY29uc3QgbW9udGhTdGFydCA9IHN0YXJ0T2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGNvbnN0IG1vbnRoRW5kID0gZW5kT2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xuICAgIGNvbnN0IHdlZWtEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhtb250aEVuZCwgbW9udGhTdGFydCkgKyAyO1xuXG4gICAgZm9yIChsZXQgd2VlayA9IDA7IHdlZWsgPCB3ZWVrRGlmZjsgd2VlaysrKSB7XG4gICAgICBjb25zdCByb3c6IERhdGVDZWxsQ29udGV4dFtdID0gW107XG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBhZGREYXlzKHRoaXMuY2FsZW5kYXJTdGFydCwgd2VlayAqIDcpO1xuXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xuICAgICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGRheSk7XG4gICAgICAgIGNvbnN0IG1vbnRoRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ2xvbmdEYXRlJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ2RkJyk7XG4gICAgICAgIGNvbnN0IHJlbCA9IG1vbnRoRGlmZiA9PT0gMCA/ICdjdXJyZW50JyA6IG1vbnRoRGlmZiA8IDAgPyAnbGFzdCcgOiAnbmV4dCc7XG4gICAgICAgIHJvdy5wdXNoKHt0aXRsZSwgbGFiZWwsIHJlbCwgdmFsdWU6IGRhdGV9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0ZU1hdHJpeC5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVDdXJyZW50RGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoaXNUaGlzTW9udGgodGhpcy5hY3RpdmVEYXRlKSkge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3ModGhpcy5jdXJyZW50RGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0KTtcbiAgICAgIHRoaXMuY3VycmVudERhdGVDb2wgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXModGhpcy5jdXJyZW50RGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuY3VycmVudERhdGVSb3cgKiA3KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERhdGVSb3cgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudERhdGVDb2wgPSAtMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUFjdGl2ZURhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVEYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXJTdGFydCk7XG4gICAgdGhpcy5hY3RpdmVEYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuYWN0aXZlRGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuYWN0aXZlRGF0ZVJvdyAqIDcpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk6IHZvaWQge1xuICAgIGlmIChpc1RoaXNZZWFyKHRoaXMuYWN0aXZlRGF0ZSkpIHtcbiAgICAgIGNvbnN0IHllYXJTdGFydCA9IHN0YXJ0T2ZZZWFyKHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHModGhpcy5jdXJyZW50RGF0ZSwgeWVhclN0YXJ0KTtcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoUm93ID0gTWF0aC5mbG9vcihtb250aERpZmYgLyAzKTtcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoQ29sID0gbW9udGhEaWZmICUgMztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSAtMTtcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoQ29sID0gLTE7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZU1vbnRoUm93ID0gTWF0aC5mbG9vcih0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSAvIDMpO1xuICAgIHRoaXMuYWN0aXZlTW9udGhDb2wgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSAlIDM7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXlDZWxsQ29udGV4dCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhDZWxsQ29udGV4dCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHN0YXJ0OiBEYXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDZWxsQ29udGV4dCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHJlbDogJ2xhc3QnfCdjdXJyZW50J3wnbmV4dCc7XG4gIHZhbHVlOiBEYXRlO1xufVxuIl19
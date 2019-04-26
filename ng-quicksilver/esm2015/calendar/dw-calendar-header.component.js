/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import setMonth from 'date-fns/set_month';
import { DwI18nService as I18n } from '../i18n/dw-i18n.service';
export class DwCalendarHeaderComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
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
    /**
     * @return {?}
     */
    get activeYear() {
        return this.activeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    /**
     * @return {?}
     */
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    /**
     * @return {?}
     */
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.year;
    }
    /**
     * @return {?}
     */
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.month;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    /**
     * @param {?=} year
     * @return {?}
     */
    setUpYears(year) {
        /** @type {?} */
        const start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    /**
     * @return {?}
     */
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const dateInMonth = setMonth(this.activeDate, i);
            /** @type {?} */
            const monthText = this.i18n.formatDate(dateInMonth, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
DwCalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-calendar-header',
                template: "<dw-select class=\"ant-fullcalendar-year-select\" [dwSize]=\"size\" [dwDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\">\n  <dw-option *ngFor=\"let year of years\" [dwLabel]=\"year.label\" [dwValue]=\"year.value\"></dw-option>\n</dw-select>\n\n<dw-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [dwSize]=\"size\" [dwDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\n  <dw-option *ngFor=\"let month of months\" [dwLabel]=\"month.label\" [dwValue]=\"month.value\"></dw-option>\n</dw-select>\n\n<dw-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [dwSize]=\"size\">\n  <label dw-radio-button dwValue=\"month\">{{ monthTypeText }}</label>\n  <label dw-radio-button dwValue=\"year\">{{ yearTypeText }}</label>\n</dw-radio-group>\n",
                host: {
                    '[style.display]': `'block'`,
                    '[class.ant-fullcalendar-header]': `true`
                }
            }] }
];
/** @nocollapse */
DwCalendarHeaderComponent.ctorParameters = () => [
    { type: I18n }
];
DwCalendarHeaderComponent.propDecorators = {
    mode: [{ type: Input }],
    modeChange: [{ type: Output }],
    fullscreen: [{ type: Input }],
    activeDate: [{ type: Input }],
    yearChange: [{ type: Output }],
    monthChange: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY2FsZW5kYXIvZHctY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBVWhFLE1BQU07Ozs7SUFxQ0osWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBcENJLE9BQU87MEJBQ2MsSUFBSSxZQUFZLEVBQUU7MEJBRTFDLElBQUk7MEJBQ1AsSUFBSSxJQUFJLEVBQUU7MEJBRU8sSUFBSSxZQUFZLEVBQUU7MkJBQ2pCLElBQUksWUFBWSxFQUFFOzBCQUUzQyxFQUFFO3lCQUNILEVBQUU7eUJBd0JGLGtCQUFrQjtLQUdyQzs7OztJQXZCRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0tBQzlDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDNUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztLQUM3Qzs7OztJQU9ELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7Ozs7O0lBRU8sVUFBVSxDQUFDLElBQWE7O1FBQzlCLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDOztRQUMxRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUVuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUM7Ozs7O0lBR0ssV0FBVztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMzQixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDakQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNsRDs7OztZQTNFSixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFLLG9CQUFvQjtnQkFDakMsKzVCQUFrRDtnQkFDbEQsSUFBSSxFQUFTO29CQUNYLGlCQUFpQixFQUFrQixTQUFTO29CQUM1QyxpQ0FBaUMsRUFBRSxNQUFNO2lCQUMxQzthQUNGOzs7O1lBVHlCLElBQUk7OzttQkFXM0IsS0FBSzt5QkFDTCxNQUFNO3lCQUVOLEtBQUs7eUJBQ0wsS0FBSzt5QkFFTCxNQUFNOzBCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcbmltcG9ydCB7IER3STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctY2FsZW5kYXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XScgICAgICAgICAgICAgICAgOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLWhlYWRlcl0nOiBgdHJ1ZWBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd0NhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbW9kZTogJ21vbnRoJyB8ICd5ZWFyJyA9ICdtb250aCc7XG4gIEBPdXRwdXQoKSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJyB8ICd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGFjdGl2ZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIEBPdXRwdXQoKSB5ZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB5ZWFyT2Zmc2V0OiBudW1iZXIgPSAxMDtcbiAgeWVhclRvdGFsOiBudW1iZXIgPSAyMDtcbiAgeWVhcnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlciB9PjtcbiAgbW9udGhzOiBBcnJheTx7IGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfT47XG5cbiAgZ2V0IGFjdGl2ZVllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBnZXQgYWN0aXZlTW9udGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XG4gIH1cblxuICBnZXQgc2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyAnZGVmYXVsdCcgOiAnc21hbGwnO1xuICB9XG5cbiAgZ2V0IHllYXJUeXBlVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkuQ2FsZW5kYXIueWVhcjtcbiAgfVxuXG4gIGdldCBtb250aFR5cGVUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci5tb250aDtcbiAgfVxuXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1mdWxsY2FsZW5kYXInO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogSTE4bikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRVcFllYXJzKCk7XG4gICAgdGhpcy5zZXRVcE1vbnRocygpO1xuICB9XG5cbiAgdXBkYXRlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh5ZWFyKTtcbiAgICB0aGlzLnNldFVwWWVhcnMoeWVhcik7XG4gIH1cblxuICBwcml2YXRlIHNldFVwWWVhcnMoeWVhcj86IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHN0YXJ0ID0gKHllYXIgfHwgdGhpcy5hY3RpdmVZZWFyKSAtIHRoaXMueWVhck9mZnNldDtcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHRoaXMueWVhclRvdGFsO1xuXG4gICAgdGhpcy55ZWFycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLnllYXJzLnB1c2goeyBsYWJlbDogYCR7aX1gLCB2YWx1ZTogaSB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFVwTW9udGhzKCk6IHZvaWQge1xuICAgIHRoaXMubW9udGhzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGVJbk1vbnRoID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBpKTtcbiAgICAgIGNvbnN0IG1vbnRoVGV4dCA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGVJbk1vbnRoLCAnTU1NJyk7XG4gICAgICB0aGlzLm1vbnRocy5wdXNoKHsgbGFiZWw6IG1vbnRoVGV4dCwgdmFsdWU6IGkgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
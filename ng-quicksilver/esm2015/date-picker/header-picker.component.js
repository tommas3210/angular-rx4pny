/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { valueFunctionProp } from '../core/util/convert';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date';
/**
 * The base picker for header panels, current support: Year/Month
 */
export class HeaderPickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        super(i18n);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        const allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
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
     * @param {?} mode
     * @return {?}
     */
    onPanelModeChange(mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else { // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    }
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    onChooseValue(mode, value) {
        if (this.endPanelMode === mode) {
            super.onValueChange(value);
            this.closeOverlay();
        }
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        if (!open) {
            this.cleanUp();
        }
        this.dwOnOpenChange.emit(open);
    }
    /**
     * @return {?}
     */
    cleanUp() {
        this.panelMode = this.endPanelMode;
    }
}
HeaderPickerComponent.decorators = [
    { type: Component, args: [{
                template: ``
            }] }
];
/** @nocollapse */
HeaderPickerComponent.ctorParameters = () => [
    { type: DwI18nService }
];
HeaderPickerComponent.propDecorators = {
    dwPlaceHolder: [{ type: Input }],
    dwRenderExtraFooter: [{ type: Input }],
    dwDefaultValue: [{ type: Input }],
    dwFormat: [{ type: Input }]
};
function HeaderPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderPickerComponent.prototype.dwPlaceHolder;
    /** @type {?} */
    HeaderPickerComponent.prototype.dwRenderExtraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.dwDefaultValue;
    /** @type {?} */
    HeaderPickerComponent.prototype.dwFormat;
    /** @type {?} */
    HeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.extraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.supportPanels;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2hlYWRlci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUQsTUFBTSxlQUFlLENBQUM7QUFHaEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQVU3QyxNQUFNLDRCQUE2QixTQUFRLHVCQUF1Qjs7OztJQWFoRSxZQUFZLElBQW1CO1FBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNiOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1FBRW5DLE1BQU0sZUFBZSxHQUFnQixDQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMvRjs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLE9BQU8seUJBQXNCO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEU7S0FDRjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFlO1FBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7YUFBTSxFQUFFLHFIQUFxSDs7WUFDNUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDO0tBQ0Y7Ozs7OztJQUVELGFBQWEsQ0FBQyxJQUF3QixFQUFFLEtBQWdCO1FBQ3RELElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDOUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7S0FDRjs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEM7Ozs7SUFHTyxPQUFPO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOzs7O1lBOUR0QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYjs7OztZQVhRLGFBQWE7Ozs0QkFhbkIsS0FBSztrQ0FFTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi9jb3JlL3R5cGVzL2NvbW1vbi13cmFwJztcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUnO1xuaW1wb3J0IHsgUGFuZWxNb2RlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgcGlja2VyIGZvciBoZWFkZXIgcGFuZWxzLCBjdXJyZW50IHN1cHBvcnQ6IFllYXIvTW9udGhcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlclBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkd1BsYWNlSG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgZHdSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgZHdEZWZhdWx0VmFsdWU6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgZHdGb3JtYXQ6IHN0cmluZzsgLy8gW0Nhbm1wbGVtZW50ZWQgYnkgc3ViIGNsYXNzXSBUaGUgb3V0cHV0IGZvcm1hdFxuXG4gIGVuZFBhbmVsTW9kZTogU3VwcG9ydEhlYWRlclBhbmVsOyAvLyBbSW1wbGVtZW50ZWQgYnkgc3ViIGNsYXNzXSBUaGUgZmluYWwgcGFuZWwgZm9yIHBpY2tpbmcgYSBkYXRlXG4gIHBhbmVsTW9kZTogUGFuZWxNb2RlOyAvLyBDdXJyZW50IHBhbmVsIG1vZGVcbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuXG4gIHByaXZhdGUgc3VwcG9ydFBhbmVsczogUGFuZWxNb2RlW107XG5cbiAgY29uc3RydWN0b3IoaTE4bjogRHdJMThuU2VydmljZSkge1xuICAgIHN1cGVyKGkxOG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XG5cbiAgICBjb25zdCBhbGxIZWFkZXJQYW5lbHM6IFBhbmVsTW9kZVtdID0gWyAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnIF07XG4gICAgdGhpcy5zdXBwb3J0UGFuZWxzID0gYWxsSGVhZGVyUGFuZWxzLnNsaWNlKDAsIGFsbEhlYWRlclBhbmVscy5pbmRleE9mKHRoaXMuZW5kUGFuZWxNb2RlKSArIDEpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgaWYgKGNoYW5nZXMuZHdSZW5kZXJFeHRyYUZvb3Rlcikge1xuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZHdSZW5kZXJFeHRyYUZvb3Rlcik7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydFBhbmVscy5pbmRleE9mKG1vZGUpID4gLTEpIHtcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcbiAgICB9IGVsc2UgeyAvLyBTaW5jZSB0aGUgZGVmYXVsdCBcImNsaWNrIHllYXJcIiBsb2dpYyBjYW4gYmUgXCJ5ZWFyIHBhbmVsXCIgLT4gXCJkYXRlIHBhbmVsXCIsIHdlIG5lZWQgZm9yY2UgdG8gdGhlIGVuZCBwYW5lbCBvdGhlcndpc2VcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XG4gICAgfVxuICB9XG5cbiAgb25DaG9vc2VWYWx1ZShtb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWwsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbmRQYW5lbE1vZGUgPT09IG1vZGUpIHtcbiAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICB0aGlzLmNsZWFuVXAoKTtcbiAgICB9XG4gICAgdGhpcy5kd09uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgLy8gUmVzdG9yZSBzb21lIGluaXRpYWwgcHJvcHMgdG8gbGV0IG9wZW4gYXMgbmV3IGluIG5leHQgdGltZVxuICBwcml2YXRlIGNsZWFuVXAoKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdXBwb3J0SGVhZGVyUGFuZWwgPSAneWVhcicgfCAnbW9udGgnO1xuIl19
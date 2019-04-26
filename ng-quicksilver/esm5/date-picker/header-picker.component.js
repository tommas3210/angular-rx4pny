/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { valueFunctionProp } from '../core/util/convert';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date';
/**
 * The base picker for header panels, current support: Year/Month
 */
var HeaderPickerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderPickerComponent, _super);
    function HeaderPickerComponent(i18n) {
        return _super.call(this, i18n) || this;
    }
    /**
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        var allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeaderPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (changes["dwRenderExtraFooter"]) {
            this.extraFooter = valueFunctionProp(this.dwRenderExtraFooter);
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    HeaderPickerComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else { // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    };
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    HeaderPickerComponent.prototype.onChooseValue = /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    function (mode, value) {
        if (this.endPanelMode === mode) {
            _super.prototype.onValueChange.call(this, value);
            this.closeOverlay();
        }
    };
    /**
     * @param {?} open
     * @return {?}
     */
    HeaderPickerComponent.prototype.onOpenChange = /**
     * @param {?} open
     * @return {?}
     */
    function (open) {
        if (!open) {
            this.cleanUp();
        }
        this.dwOnOpenChange.emit(open);
    };
    /**
     * @return {?}
     */
    HeaderPickerComponent.prototype.cleanUp = /**
     * @return {?}
     */
    function () {
        this.panelMode = this.endPanelMode;
    };
    HeaderPickerComponent.decorators = [
        { type: Component, args: [{
                    template: ""
                }] }
    ];
    /** @nocollapse */
    HeaderPickerComponent.ctorParameters = function () { return [
        { type: DwI18nService }
    ]; };
    HeaderPickerComponent.propDecorators = {
        dwPlaceHolder: [{ type: Input }],
        dwRenderExtraFooter: [{ type: Input }],
        dwDefaultValue: [{ type: Input }],
        dwFormat: [{ type: Input }]
    };
    return HeaderPickerComponent;
}(AbstractPickerComponent));
export { HeaderPickerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2hlYWRlci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0lBVUYsaURBQXVCO0lBYWhFLCtCQUFZLElBQW1CO2VBQzdCLGtCQUFNLElBQUksQ0FBQztLQUNaOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0UsaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztRQUVuQyxJQUFNLGVBQWUsR0FBZ0IsQ0FBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDL0Y7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztRQUUzQixJQUFJLE9BQU8seUJBQXNCO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDaEU7S0FDRjs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsSUFBZTtRQUMvQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU0sRUFBRSxxSEFBcUg7O1lBQzVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNwQztLQUNGOzs7Ozs7SUFFRCw2Q0FBYTs7Ozs7SUFBYixVQUFjLElBQXdCLEVBQUUsS0FBZ0I7UUFDdEQsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM5QixpQkFBTSxhQUFhLFlBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7O0lBRUQsNENBQVk7Ozs7SUFBWixVQUFhLElBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBR08sdUNBQU87Ozs7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7OztnQkE5RHRDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFYUSxhQUFhOzs7Z0NBYW5CLEtBQUs7c0NBRUwsS0FBSztpQ0FDTCxLQUFLOzJCQUNMLEtBQUs7O2dDQXJCUjtFQWdCMkMsdUJBQXVCO1NBQXJELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi9jb3JlL3R5cGVzL2NvbW1vbi13cmFwJztcbmltcG9ydCB7IHZhbHVlRnVuY3Rpb25Qcm9wIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IEFic3RyYWN0UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vbGliL2NhbmR5LWRhdGUnO1xuaW1wb3J0IHsgUGFuZWxNb2RlIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgcGlja2VyIGZvciBoZWFkZXIgcGFuZWxzLCBjdXJyZW50IHN1cHBvcnQ6IFllYXIvTW9udGhcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBgXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlclBpY2tlckNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkd1BsYWNlSG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgZHdSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgZHdEZWZhdWx0VmFsdWU6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgZHdGb3JtYXQ6IHN0cmluZzsgLy8gW0Nhbm1wbGVtZW50ZWQgYnkgc3ViIGNsYXNzXSBUaGUgb3V0cHV0IGZvcm1hdFxuXG4gIGVuZFBhbmVsTW9kZTogU3VwcG9ydEhlYWRlclBhbmVsOyAvLyBbSW1wbGVtZW50ZWQgYnkgc3ViIGNsYXNzXSBUaGUgZmluYWwgcGFuZWwgZm9yIHBpY2tpbmcgYSBkYXRlXG4gIHBhbmVsTW9kZTogUGFuZWxNb2RlOyAvLyBDdXJyZW50IHBhbmVsIG1vZGVcbiAgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuXG4gIHByaXZhdGUgc3VwcG9ydFBhbmVsczogUGFuZWxNb2RlW107XG5cbiAgY29uc3RydWN0b3IoaTE4bjogRHdJMThuU2VydmljZSkge1xuICAgIHN1cGVyKGkxOG4pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XG5cbiAgICBjb25zdCBhbGxIZWFkZXJQYW5lbHM6IFBhbmVsTW9kZVtdID0gWyAnZGVjYWRlJywgJ3llYXInLCAnbW9udGgnIF07XG4gICAgdGhpcy5zdXBwb3J0UGFuZWxzID0gYWxsSGVhZGVyUGFuZWxzLnNsaWNlKDAsIGFsbEhlYWRlclBhbmVscy5pbmRleE9mKHRoaXMuZW5kUGFuZWxNb2RlKSArIDEpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuXG4gICAgaWYgKGNoYW5nZXMuZHdSZW5kZXJFeHRyYUZvb3Rlcikge1xuICAgICAgdGhpcy5leHRyYUZvb3RlciA9IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZHdSZW5kZXJFeHRyYUZvb3Rlcik7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbE1vZGVDaGFuZ2UobW9kZTogUGFuZWxNb2RlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3VwcG9ydFBhbmVscy5pbmRleE9mKG1vZGUpID4gLTEpIHtcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gbW9kZTtcbiAgICB9IGVsc2UgeyAvLyBTaW5jZSB0aGUgZGVmYXVsdCBcImNsaWNrIHllYXJcIiBsb2dpYyBjYW4gYmUgXCJ5ZWFyIHBhbmVsXCIgLT4gXCJkYXRlIHBhbmVsXCIsIHdlIG5lZWQgZm9yY2UgdG8gdGhlIGVuZCBwYW5lbCBvdGhlcndpc2VcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XG4gICAgfVxuICB9XG5cbiAgb25DaG9vc2VWYWx1ZShtb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWwsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbmRQYW5lbE1vZGUgPT09IG1vZGUpIHtcbiAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xuXG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICB0aGlzLmNsZWFuVXAoKTtcbiAgICB9XG4gICAgdGhpcy5kd09uT3BlbkNoYW5nZS5lbWl0KG9wZW4pO1xuICB9XG5cbiAgLy8gUmVzdG9yZSBzb21lIGluaXRpYWwgcHJvcHMgdG8gbGV0IG9wZW4gYXMgbmV3IGluIG5leHQgdGltZVxuICBwcml2YXRlIGNsZWFuVXAoKTogdm9pZCB7XG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdXBwb3J0SGVhZGVyUGFuZWwgPSAneWVhcicgfCAnbW9udGgnO1xuIl19
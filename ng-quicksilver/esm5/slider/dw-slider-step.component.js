/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { MarksArray } from './dw-slider-marks.component';
var DwSliderStepComponent = /** @class */ (function () {
    function DwSliderStepComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.dwLowerBound = null;
        this.dwUpperBound = null;
    }
    Object.defineProperty(DwSliderStepComponent.prototype, "dwVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSliderStepComponent.prototype, "dwIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DwSliderStepComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["dwMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["dwMarksArray"] || changes["dwLowerBound"] || changes["dwUpperBound"]) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    DwSliderStepComponent.prototype.trackById = /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    function (index, attr) {
        return attr.id;
    };
    /**
     * @return {?}
     */
    DwSliderStepComponent.prototype.buildAttrs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orient = this.dwVertical ? 'bottom' : 'left';
        /** @type {?} */
        var prefixCls = this.dwPrefixCls;
        this.attrs = this.dwMarksArray.map(function (mark) {
            var _a, _b;
            var value = mark.value, offset = mark.offset;
            return {
                id: value,
                value: value,
                offset: offset,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a),
                classes: (_b = {},
                    _b[prefixCls + "-dot"] = true,
                    _b[prefixCls + "-dot-active"] = false,
                    _b)
            };
        });
    };
    /**
     * @return {?}
     */
    DwSliderStepComponent.prototype.togglePointActive = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.attrs && this.dwLowerBound !== null && this.dwUpperBound !== null) {
            this.attrs.forEach(function (attr) {
                /** @type {?} */
                var value = attr.value;
                /** @type {?} */
                var isActive = (!_this.dwIncluded && value === _this.dwUpperBound) ||
                    (_this.dwIncluded && value <= _this.dwUpperBound && value >= _this.dwLowerBound);
                attr.classes[_this.dwPrefixCls + "-dot-active"] = isActive;
            });
        }
    };
    DwSliderStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-slider-step',
                    preserveWhitespaces: false,
                    template: "<div class=\"{{dwPrefixCls}}-step\">\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\"></span>\n</div>"
                }] }
    ];
    DwSliderStepComponent.propDecorators = {
        dwLowerBound: [{ type: Input }],
        dwUpperBound: [{ type: Input }],
        dwMarksArray: [{ type: Input }],
        dwPrefixCls: [{ type: Input }],
        dwVertical: [{ type: Input }],
        dwIncluded: [{ type: Input }]
    };
    return DwSliderStepComponent;
}());
export { DwSliderStepComponent };
function DwSliderStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSliderStepComponent.prototype._vertical;
    /** @type {?} */
    DwSliderStepComponent.prototype._included;
    /** @type {?} */
    DwSliderStepComponent.prototype.dwLowerBound;
    /** @type {?} */
    DwSliderStepComponent.prototype.dwUpperBound;
    /** @type {?} */
    DwSliderStepComponent.prototype.dwMarksArray;
    /** @type {?} */
    DwSliderStepComponent.prototype.dwPrefixCls;
    /** @type {?} */
    DwSliderStepComponent.prototype.attrs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJzbGlkZXIvZHctc2xpZGVyLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O3lCQVFuQyxLQUFLO3lCQUNMLEtBQUs7OzRCQUdPLElBQUk7NEJBQ0osSUFBSTs7SUFNcEMsc0JBQ0ksNkNBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7O1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTtJQU1ELHNCQUNJLDZDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTs7Ozs7SUFTRCwyQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGtCQUFlO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxvQkFBaUIsT0FBTyxnQkFBYSxJQUFJLE9BQU8sZ0JBQWEsRUFBRTtZQUN4RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7Ozs7SUFFRCx5Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWEsRUFBRSxJQUF5RztRQUNoSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7O1FBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O1FBQ25ELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7O1lBQzdCLElBQUEsa0JBQUssRUFBRSxvQkFBTSxDQUFVO1lBQy9CLE9BQU87Z0JBQ0wsRUFBRSxFQUFPLEtBQUs7Z0JBQ2QsS0FBSyxPQUFBO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixLQUFLO29CQUNILEdBQUUsTUFBTSxJQUFPLE1BQU0sTUFBRzt1QkFDekI7Z0JBQ0QsT0FBTztvQkFDTCxHQUFLLFNBQVMsU0FBTSxJQUFXLElBQUk7b0JBQ25DLEdBQUssU0FBUyxnQkFBYSxJQUFJLEtBQUs7dUJBQ3JDO2FBQ0YsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsaURBQWlCOzs7SUFBakI7UUFBQSxpQkFTQztRQVJDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUMxRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O2dCQUNyQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztnQkFDekIsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxLQUFLLEtBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2hFLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsT0FBTyxDQUFLLEtBQUksQ0FBQyxXQUFXLGdCQUFhLENBQUUsR0FBRyxRQUFRLENBQUM7YUFDN0QsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsZ0JBQWdCO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiw4S0FBc0Q7aUJBQ3ZEOzs7K0JBTUUsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBR0wsS0FBSzs2QkFFTCxLQUFLOzZCQVNMLEtBQUs7O2dDQWhDUjs7U0FXYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBNYXJrc0FycmF5IH0gZnJvbSAnLi9kdy1zbGlkZXItbWFya3MuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zbGlkZXItc3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1zbGlkZXItc3RlcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdTbGlkZXJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcblxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgZHdMb3dlckJvdW5kOiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKSBkd1VwcGVyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIGR3TWFya3NBcnJheTogTWFya3NBcnJheTtcblxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBkd1ByZWZpeENsczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICAvLyBUT0RPOiB1c2luZyBuYW1lZCBpbnRlcmZhY2VcbiAgYXR0cnM6IEFycmF5PHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QgfT47XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmR3TWFya3NBcnJheSkge1xuICAgICAgdGhpcy5idWlsZEF0dHJzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmR3TWFya3NBcnJheSB8fCBjaGFuZ2VzLmR3TG93ZXJCb3VuZCB8fCBjaGFuZ2VzLmR3VXBwZXJCb3VuZCkge1xuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBhdHRyOiB7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0IH0pOiBudW1iZXIge1xuICAgIHJldHVybiBhdHRyLmlkO1xuICB9XG5cbiAgYnVpbGRBdHRycygpOiB2b2lkIHtcbiAgICBjb25zdCBvcmllbnQgPSB0aGlzLmR3VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0JztcbiAgICBjb25zdCBwcmVmaXhDbHMgPSB0aGlzLmR3UHJlZml4Q2xzO1xuICAgIHRoaXMuYXR0cnMgPSB0aGlzLmR3TWFya3NBcnJheS5tYXAobWFyayA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQgfSA9IG1hcms7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCAgICAgOiB2YWx1ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgc3R5bGUgIDoge1xuICAgICAgICAgIFsgb3JpZW50IF06IGAke29mZnNldH0lYFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgWyBgJHtwcmVmaXhDbHN9LWRvdGAgXSAgICAgICA6IHRydWUsXG4gICAgICAgICAgWyBgJHtwcmVmaXhDbHN9LWRvdC1hY3RpdmVgIF06IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdHRycyAmJiB0aGlzLmR3TG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLmR3VXBwZXJCb3VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKCF0aGlzLmR3SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMuZHdVcHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLmR3SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5kd1VwcGVyQm91bmQgJiYgdmFsdWUgPj0gdGhpcy5kd0xvd2VyQm91bmQpO1xuICAgICAgICBhdHRyLmNsYXNzZXNbIGAke3RoaXMuZHdQcmVmaXhDbHN9LWRvdC1hY3RpdmVgIF0gPSBpc0FjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
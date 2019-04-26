/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { MarksArray } from './dw-slider-marks.component';
export class DwSliderStepComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.dwLowerBound = null;
        this.dwUpperBound = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwVertical(value) {
        // Required
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwIncluded() {
        return this._included;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["dwMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["dwMarksArray"] || changes["dwLowerBound"] || changes["dwUpperBound"]) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    trackById(index, attr) {
        return attr.id;
    }
    /**
     * @return {?}
     */
    buildAttrs() {
        /** @type {?} */
        const orient = this.dwVertical ? 'bottom' : 'left';
        /** @type {?} */
        const prefixCls = this.dwPrefixCls;
        this.attrs = this.dwMarksArray.map(mark => {
            const { value, offset } = mark;
            return {
                id: value,
                value,
                offset,
                style: {
                    [orient]: `${offset}%`
                },
                classes: {
                    [`${prefixCls}-dot`]: true,
                    [`${prefixCls}-dot-active`]: false
                }
            };
        });
    }
    /**
     * @return {?}
     */
    togglePointActive() {
        if (this.attrs && this.dwLowerBound !== null && this.dwUpperBound !== null) {
            this.attrs.forEach(attr => {
                /** @type {?} */
                const value = attr.value;
                /** @type {?} */
                const isActive = (!this.dwIncluded && value === this.dwUpperBound) ||
                    (this.dwIncluded && value <= this.dwUpperBound && value >= this.dwLowerBound);
                attr.classes[`${this.dwPrefixCls}-dot-active`] = isActive;
            });
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJzbGlkZXIvZHctc2xpZGVyLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU96RCxNQUFNOzt5QkFDZ0IsS0FBSzt5QkFDTCxLQUFLOzs0QkFHTyxJQUFJOzRCQUNKLElBQUk7Ozs7OztJQU1wQyxJQUNJLFVBQVUsQ0FBQyxLQUFjOztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUtELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sa0JBQWU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLG9CQUFpQixPQUFPLGdCQUFhLElBQUksT0FBTyxnQkFBYSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBeUc7UUFDaEksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0tBQ2hCOzs7O0lBRUQsVUFBVTs7UUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7UUFDbkQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQy9CLE9BQU87Z0JBQ0wsRUFBRSxFQUFPLEtBQUs7Z0JBQ2QsS0FBSztnQkFDTCxNQUFNO2dCQUNOLEtBQUssRUFBSTtvQkFDUCxDQUFFLE1BQU0sQ0FBRSxFQUFFLEdBQUcsTUFBTSxHQUFHO2lCQUN6QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsQ0FBRSxHQUFHLFNBQVMsTUFBTSxDQUFFLEVBQVMsSUFBSTtvQkFDbkMsQ0FBRSxHQUFHLFNBQVMsYUFBYSxDQUFFLEVBQUUsS0FBSztpQkFDckM7YUFDRixDQUFDO1NBQ0gsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDOztnQkFDekIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2hFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRixJQUFJLENBQUMsT0FBTyxDQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsYUFBYSxDQUFFLEdBQUcsUUFBUSxDQUFDO2FBQzdELENBQUMsQ0FBQztTQUNKO0tBQ0Y7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGdCQUFnQjtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsOEtBQXNEO2FBQ3ZEOzs7MkJBTUUsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBR0wsS0FBSzt5QkFFTCxLQUFLO3lCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBNYXJrc0FycmF5IH0gZnJvbSAnLi9kdy1zbGlkZXItbWFya3MuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zbGlkZXItc3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1zbGlkZXItc3RlcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdTbGlkZXJTdGVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcblxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgZHdMb3dlckJvdW5kOiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKSBkd1VwcGVyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIGR3TWFya3NBcnJheTogTWFya3NBcnJheTtcblxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBkd1ByZWZpeENsczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICAvLyBUT0RPOiB1c2luZyBuYW1lZCBpbnRlcmZhY2VcbiAgYXR0cnM6IEFycmF5PHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QgfT47XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmR3TWFya3NBcnJheSkge1xuICAgICAgdGhpcy5idWlsZEF0dHJzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmR3TWFya3NBcnJheSB8fCBjaGFuZ2VzLmR3TG93ZXJCb3VuZCB8fCBjaGFuZ2VzLmR3VXBwZXJCb3VuZCkge1xuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBhdHRyOiB7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0IH0pOiBudW1iZXIge1xuICAgIHJldHVybiBhdHRyLmlkO1xuICB9XG5cbiAgYnVpbGRBdHRycygpOiB2b2lkIHtcbiAgICBjb25zdCBvcmllbnQgPSB0aGlzLmR3VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0JztcbiAgICBjb25zdCBwcmVmaXhDbHMgPSB0aGlzLmR3UHJlZml4Q2xzO1xuICAgIHRoaXMuYXR0cnMgPSB0aGlzLmR3TWFya3NBcnJheS5tYXAobWFyayA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQgfSA9IG1hcms7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCAgICAgOiB2YWx1ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgc3R5bGUgIDoge1xuICAgICAgICAgIFsgb3JpZW50IF06IGAke29mZnNldH0lYFxuICAgICAgICB9LFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgWyBgJHtwcmVmaXhDbHN9LWRvdGAgXSAgICAgICA6IHRydWUsXG4gICAgICAgICAgWyBgJHtwcmVmaXhDbHN9LWRvdC1hY3RpdmVgIF06IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdHRycyAmJiB0aGlzLmR3TG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLmR3VXBwZXJCb3VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKCF0aGlzLmR3SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMuZHdVcHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLmR3SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5kd1VwcGVyQm91bmQgJiYgdmFsdWUgPj0gdGhpcy5kd0xvd2VyQm91bmQpO1xuICAgICAgICBhdHRyLmNsYXNzZXNbIGAke3RoaXMuZHdQcmVmaXhDbHN9LWRvdC1hY3RpdmVgIF0gPSBpc0FjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
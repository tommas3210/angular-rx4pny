/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class DwSliderMarksComponent {
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
        const range = this.dwMax - this.dwMin;
        this.attrs = this.dwMarksArray.map(mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            let label = config;
            /** @type {?} */
            let style;
            if (this.dwVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: `${(value - this.dwMin) / range * 100}%`
                };
            }
            else {
                /** @type {?} */
                const marksCount = this.dwMarksArray.length;
                /** @type {?} */
                const unit = 100 / (marksCount - 1);
                /** @type {?} */
                const markWidth = unit * 0.9;
                style = {
                    width: `${markWidth}%`,
                    marginLeft: `${-markWidth / 2}%`,
                    left: `${(value - this.dwMin) / range * 100}%`
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = Object.assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value,
                offset,
                classes: {
                    [`${this.dwClassName}-text`]: true
                },
                style,
                label
            };
        }); // END - map
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
                attr.classes[`${this.dwClassName}-text-active`] = isActive;
            });
        }
    }
}
DwSliderMarksComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-slider-marks',
                preserveWhitespaces: false,
                template: "<div [class]=\"dwClassName\">\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\" [innerHTML]=\"attr.label\"></span>\n</div>"
            }] }
];
DwSliderMarksComponent.propDecorators = {
    dwLowerBound: [{ type: Input }],
    dwUpperBound: [{ type: Input }],
    dwMarksArray: [{ type: Input }],
    dwClassName: [{ type: Input }],
    dwMin: [{ type: Input }],
    dwMax: [{ type: Input }],
    dwVertical: [{ type: Input }],
    dwIncluded: [{ type: Input }]
};
function DwSliderMarksComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSliderMarksComponent.prototype._vertical;
    /** @type {?} */
    DwSliderMarksComponent.prototype._included;
    /** @type {?} */
    DwSliderMarksComponent.prototype.dwLowerBound;
    /** @type {?} */
    DwSliderMarksComponent.prototype.dwUpperBound;
    /** @type {?} */
    DwSliderMarksComponent.prototype.dwMarksArray;
    /** @type {?} */
    DwSliderMarksComponent.prototype.dwClassName;
    /** @type {?} */
    DwSliderMarksComponent.prototype.dwMin;
    /** @type {?} */
    DwSliderMarksComponent.prototype.dwMax;
    /** @type {?} */
    DwSliderMarksComponent.prototype.attrs;
}
export class Marks {
}
function Marks_tsickle_Closure_declarations() {
    /** @type {?} */
    Marks.prototype.number;
}
export class MarksArray extends Array {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2xpZGVyL2R3LXNsaWRlci1tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPakQsTUFBTTs7eUJBQ2dCLEtBQUs7eUJBQ0wsS0FBSzs7NEJBR08sSUFBSTs0QkFDSixJQUFJOzs7Ozs7SUFRcEMsSUFDSSxVQUFVLENBQUMsS0FBYzs7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFLRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGtCQUFlO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxvQkFBaUIsT0FBTyxnQkFBYSxJQUFJLE9BQU8sZ0JBQWEsRUFBRTtZQUN4RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLElBQXNIO1FBQzdJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELFVBQVU7O1FBQ1IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtB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QUFRLEtBQXNEO0NBTXJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zbGlkZXItbWFya3MnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1NsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcblxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgZHdMb3dlckJvdW5kOiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKSBkd1VwcGVyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIGR3TWFya3NBcnJheTogTWFya3NBcnJheTtcblxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBkd0NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkd01pbjogbnVtYmVyOyAvLyBSZXF1aXJlZFxuICBASW5wdXQoKSBkd01heDogbnVtYmVyOyAvLyBSZXF1aXJlZFxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICAvLyBUT0RPOiB1c2luZyBuYW1lZCBpbnRlcmZhY2VcbiAgYXR0cnM6IEFycmF5PHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QsIGxhYmVsOiBNYXJrIH0+OyAvLyBwb2ludHMgZm9yIGlubmVyIHVzZVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kd01hcmtzQXJyYXkpIHtcbiAgICAgIHRoaXMuYnVpbGRBdHRycygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kd01hcmtzQXJyYXkgfHwgY2hhbmdlcy5kd0xvd2VyQm91bmQgfHwgY2hhbmdlcy5kd1VwcGVyQm91bmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgYXR0cjogeyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCwgbGFiZWw6IE1hcmsgfSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGF0dHIuaWQ7XG4gIH1cblxuICBidWlsZEF0dHJzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5kd01heCAtIHRoaXMuZHdNaW47XG4gICAgdGhpcy5hdHRycyA9IHRoaXMuZHdNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xuICAgICAgLy8gY2FsYyBzdHlsZXNcbiAgICAgIGxldCBsYWJlbCA9IGNvbmZpZztcbiAgICAgIGxldCBzdHlsZTogb2JqZWN0O1xuICAgICAgaWYgKHRoaXMuZHdWZXJ0aWNhbCkge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcbiAgICAgICAgICBib3R0b20gICAgICA6IGAkeyh2YWx1ZSAtIHRoaXMuZHdNaW4pIC8gcmFuZ2UgKiAxMDB9JWBcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1hcmtzQ291bnQgPSB0aGlzLmR3TWFya3NBcnJheS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHVuaXQgPSAxMDAgLyAobWFya3NDb3VudCAtIDEpO1xuICAgICAgICBjb25zdCBtYXJrV2lkdGggPSB1bml0ICogMC45O1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aCAgICAgOiBgJHttYXJrV2lkdGh9JWAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogYCR7LW1hcmtXaWR0aCAvIDJ9JWAsXG4gICAgICAgICAgbGVmdCAgICAgIDogYCR7KHZhbHVlIC0gdGhpcy5kd01pbikgLyByYW5nZSAqIDEwMH0lYFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY3VzdG9tIGNvbmZpZ3VyYXRpb25cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICAgICAgaWYgKGNvbmZpZy5zdHlsZSkge1xuICAgICAgICAgIHN0eWxlID0geyAuLi5zdHlsZSwgLi4uY29uZmlnLnN0eWxlIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkICAgICA6IHZhbHVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgWyBgJHt0aGlzLmR3Q2xhc3NOYW1lfS10ZXh0YCBdOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBsYWJlbFxuICAgICAgfTtcbiAgICB9KTsgLy8gRU5EIC0gbWFwXG4gIH1cblxuICB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdHRycyAmJiB0aGlzLmR3TG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLmR3VXBwZXJCb3VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKCF0aGlzLmR3SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMuZHdVcHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLmR3SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5kd1VwcGVyQm91bmQgJiYgdmFsdWUgPj0gdGhpcy5kd0xvd2VyQm91bmQpO1xuICAgICAgICBhdHRyLmNsYXNzZXNbIGAke3RoaXMuZHdDbGFzc05hbWV9LXRleHQtYWN0aXZlYCBdID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG4vLyBERUZJTklUSU9OU1xuXG5leHBvcnQgdHlwZSBNYXJrID0gc3RyaW5nIHwge1xuICBzdHlsZTogb2JqZWN0O1xuICBsYWJlbDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIE1hcmtzIHtcbiAgbnVtYmVyOiBNYXJrO1xufVxuXG4vLyBUT0RPOiBleHRlbmRzIEFycmF5IGNvdWxkIGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiB0YXJnZXRpbmcgZXM1IG9yIGJlbG93XG5leHBvcnQgY2xhc3MgTWFya3NBcnJheSBleHRlbmRzIEFycmF5PHsgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNvbmZpZzogTWFyayB9PiB7XG4gIFsgaW5kZXg6IG51bWJlciBdOiB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBjb25maWc6IE1hcms7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var DwSliderMarksComponent = /** @class */ (function () {
    function DwSliderMarksComponent() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.dwLowerBound = null;
        this.dwUpperBound = null;
    }
    Object.defineProperty(DwSliderMarksComponent.prototype, "dwVertical", {
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
    Object.defineProperty(DwSliderMarksComponent.prototype, "dwIncluded", {
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
    DwSliderMarksComponent.prototype.ngOnChanges = /**
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
    DwSliderMarksComponent.prototype.trackById = /**
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
    DwSliderMarksComponent.prototype.buildAttrs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.dwMax - this.dwMin;
        this.attrs = this.dwMarksArray.map(function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var label = config;
            /** @type {?} */
            var style;
            if (_this.dwVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: (value - _this.dwMin) / range * 100 + "%"
                };
            }
            else {
                /** @type {?} */
                var marksCount = _this.dwMarksArray.length;
                /** @type {?} */
                var unit = 100 / (marksCount - 1);
                /** @type {?} */
                var markWidth = unit * 0.9;
                style = {
                    width: markWidth + "%",
                    marginLeft: -markWidth / 2 + "%",
                    left: (value - _this.dwMin) / range * 100 + "%"
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = tslib_1.__assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value: value,
                offset: offset,
                classes: (_a = {},
                    _a[_this.dwClassName + "-text"] = true,
                    _a),
                style: style,
                label: label
            };
        }); // END - map
    };
    /**
     * @return {?}
     */
    DwSliderMarksComponent.prototype.togglePointActive = /**
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
                attr.classes[_this.dwClassName + "-text-active"] = isActive;
            });
        }
    };
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
    return DwSliderMarksComponent;
}());
export { DwSliderMarksComponent };
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
var Marks = /** @class */ (function () {
    function Marks() {
    }
    return Marks;
}());
export { Marks };
function Marks_tsickle_Closure_declarations() {
    /** @type {?} */
    Marks.prototype.number;
}
var MarksArray = /** @class */ (function (_super) {
    tslib_1.__extends(MarksArray, _super);
    function MarksArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarksArray;
}(Array));
export { MarksArray };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2xpZGVyL2R3LXNsaWRlci1tYXJrcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7eUJBUTNCLEtBQUs7eUJBQ0wsS0FBSzs7NEJBR08sSUFBSTs0QkFDSixJQUFJOztJQVFwQyxzQkFDSSw4Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYzs7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBO0lBTUQsc0JBQ0ksOENBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBOzs7OztJQVNELDRDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sa0JBQWU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLG9CQUFpQixPQUFPLGdCQUFhLElBQUksT0FBTyxnQkFBYSxFQUFFO1lBQ3hFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQXNIO1FBQzdJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUFBLGlC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bkMsSUFBQTs7O2dCQXZIQTtJQXlIQyxDQUFBO0FBRkQsaUJBRUM7Ozs7O0FBR0QsSUFBQTtJQUFnQyxzQ0FBc0Q7Ozs7cUJBNUh0RjtFQTRIZ0MsS0FBSyxFQU1wQyxDQUFBO0FBTkQsc0JBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXNsaWRlci1tYXJrcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1zbGlkZXItbWFya3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3U2xpZGVyTWFya3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IGZhbHNlO1xuXG4gIC8vIER5bmFtaWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBkd0xvd2VyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIGR3VXBwZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KCkgZHdNYXJrc0FycmF5OiBNYXJrc0FycmF5O1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIGR3Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3TWluOiBudW1iZXI7IC8vIFJlcXVpcmVkXG4gIEBJbnB1dCgpIGR3TWF4OiBudW1iZXI7IC8vIFJlcXVpcmVkXG5cbiAgQElucHV0KClcbiAgc2V0IGR3VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHsgLy8gUmVxdWlyZWRcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdJbmNsdWRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luY2x1ZGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0luY2x1ZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmNsdWRlZDtcbiAgfVxuXG4gIC8vIFRPRE86IHVzaW5nIG5hbWVkIGludGVyZmFjZVxuICBhdHRyczogQXJyYXk8eyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCwgbGFiZWw6IE1hcmsgfT47IC8vIHBvaW50cyBmb3IgaW5uZXIgdXNlXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmR3TWFya3NBcnJheSkge1xuICAgICAgdGhpcy5idWlsZEF0dHJzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmR3TWFya3NBcnJheSB8fCBjaGFuZ2VzLmR3TG93ZXJCb3VuZCB8fCBjaGFuZ2VzLmR3VXBwZXJCb3VuZCkge1xuICAgICAgdGhpcy50b2dnbGVQb2ludEFjdGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBhdHRyOiB7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0LCBsYWJlbDogTWFyayB9KTogbnVtYmVyIHtcbiAgICByZXR1cm4gYXR0ci5pZDtcbiAgfVxuXG4gIGJ1aWxkQXR0cnMoKTogdm9pZCB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmR3TWF4IC0gdGhpcy5kd01pbjtcbiAgICB0aGlzLmF0dHJzID0gdGhpcy5kd01hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XG4gICAgICAvLyBjYWxjIHN0eWxlc1xuICAgICAgbGV0IGxhYmVsID0gY29uZmlnO1xuICAgICAgbGV0IHN0eWxlOiBvYmplY3Q7XG4gICAgICBpZiAodGhpcy5kd1ZlcnRpY2FsKSB7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJy01MCUnLFxuICAgICAgICAgIGJvdHRvbSAgICAgIDogYCR7KHZhbHVlIC0gdGhpcy5kd01pbikgLyByYW5nZSAqIDEwMH0lYFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWFya3NDb3VudCA9IHRoaXMuZHdNYXJrc0FycmF5Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgdW5pdCA9IDEwMCAvIChtYXJrc0NvdW50IC0gMSk7XG4gICAgICAgIGNvbnN0IG1hcmtXaWR0aCA9IHVuaXQgKiAwLjk7XG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHdpZHRoICAgICA6IGAke21hcmtXaWR0aH0lYCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHstbWFya1dpZHRoIC8gMn0lYCxcbiAgICAgICAgICBsZWZ0ICAgICAgOiBgJHsodmFsdWUgLSB0aGlzLmR3TWluKSAvIHJhbmdlICogMTAwfSVgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBjdXN0b20gY29uZmlndXJhdGlvblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxhYmVsID0gY29uZmlnLmxhYmVsO1xuICAgICAgICBpZiAoY29uZmlnLnN0eWxlKSB7XG4gICAgICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQgICAgIDogdmFsdWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICBbIGAke3RoaXMuZHdDbGFzc05hbWV9LXRleHRgIF06IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIGxhYmVsXG4gICAgICB9O1xuICAgIH0pOyAvLyBFTkQgLSBtYXBcbiAgfVxuXG4gIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF0dHJzICYmIHRoaXMuZHdMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMuZHdVcHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmF0dHJzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0ci52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPSAoIXRoaXMuZHdJbmNsdWRlZCAmJiB2YWx1ZSA9PT0gdGhpcy5kd1VwcGVyQm91bmQpIHx8XG4gICAgICAgICAgKHRoaXMuZHdJbmNsdWRlZCAmJiB2YWx1ZSA8PSB0aGlzLmR3VXBwZXJCb3VuZCAmJiB2YWx1ZSA+PSB0aGlzLmR3TG93ZXJCb3VuZCk7XG4gICAgICAgIGF0dHIuY2xhc3Nlc1sgYCR7dGhpcy5kd0NsYXNzTmFtZX0tdGV4dC1hY3RpdmVgIF0gPSBpc0FjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cbi8vIERFRklOSVRJT05TXG5cbmV4cG9ydCB0eXBlIE1hcmsgPSBzdHJpbmcgfCB7XG4gIHN0eWxlOiBvYmplY3Q7XG4gIGxhYmVsOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgTWFya3Mge1xuICBudW1iZXI6IE1hcms7XG59XG5cbi8vIFRPRE86IGV4dGVuZHMgQXJyYXkgY291bGQgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvciB3aGVuIHRhcmdldGluZyBlczUgb3IgYmVsb3dcbmV4cG9ydCBjbGFzcyBNYXJrc0FycmF5IGV4dGVuZHMgQXJyYXk8eyB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY29uZmlnOiBNYXJrIH0+IHtcbiAgWyBpbmRleDogbnVtYmVyIF06IHtcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICAgIGNvbmZpZzogTWFyaztcbiAgfVxufVxuIl19
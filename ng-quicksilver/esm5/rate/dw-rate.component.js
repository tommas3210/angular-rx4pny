/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
var DwRateComponent = /** @class */ (function () {
    function DwRateComponent(renderer) {
        this.renderer = renderer;
        this._allowClear = true;
        this._allowHalf = false;
        this._disabled = false;
        this._count = 5;
        this._value = 0;
        this._autoFocus = false;
        this.dwOnBlur = new EventEmitter();
        this.dwOnFocus = new EventEmitter();
        this.dwOnKeyDown = new EventEmitter();
        this.dwOnHoverChange = new EventEmitter();
        this.prefixCls = 'ant-rate';
        this.isInit = false;
        this.hasHalf = false;
        this.innerPrefixCls = this.prefixCls + "-star";
        this.starArray = [];
        this.hoverValue = 0;
        this.isFocused = false;
        this.floatReg = /^\d+(\.\d+)?$/;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(DwRateComponent.prototype, "dwAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRateComponent.prototype, "dwCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._count;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._count === value) {
                return;
            }
            this._count = value;
            this.updateStarArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRateComponent.prototype, "dwAllowHalf", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowHalf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowHalf = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRateComponent.prototype, "dwAllowClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowClear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowClear = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRateComponent.prototype, "dwValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            /** @type {?} */
            var value = input;
            if (this._value === value) {
                return;
            }
            this._value = value;
            if (this.floatReg.test(value.toString())) {
                value += 0.5;
                this.hasHalf = true;
            }
            this.hoverValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRateComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwRateComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-disabled"] = this.dwDisabled,
            _a);
    };
    /**
     * @return {?}
     */
    DwRateComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.dwDisabled) {
            if (this.dwAutoFocus) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    DwRateComponent.prototype.clickRate = /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    function (e, index, isFull) {
        e.stopPropagation();
        if (this.dwDisabled) {
            return;
        }
        this.hasHalf = !isFull && this.dwAllowHalf;
        /** @type {?} */
        var actualValue = index + 1;
        this.hoverValue = actualValue;
        if (this.hasHalf) {
            actualValue -= 0.5;
        }
        if (this.dwValue === actualValue) {
            if (this.dwAllowClear) {
                this.dwValue = 0;
                this.onChange(this.dwValue);
            }
        }
        else {
            this.dwValue = actualValue;
            this.onChange(this.dwValue);
        }
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    DwRateComponent.prototype.hoverRate = /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    function (e, index, isFull) {
        e.stopPropagation();
        if (this.dwDisabled) {
            return;
        }
        /** @type {?} */
        var isHalf = !isFull && this.dwAllowHalf;
        if (this.hoverValue === index + 1 && isHalf === this.hasHalf) {
            return;
        }
        this.hoverValue = index + 1;
        this.dwOnHoverChange.emit(this.hoverValue);
        this.hasHalf = isHalf;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwRateComponent.prototype.leaveRate = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        /** @type {?} */
        var oldVal = this.dwValue;
        if (this.floatReg.test(oldVal.toString())) {
            oldVal += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = oldVal;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwRateComponent.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = true;
        this.dwOnFocus.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwRateComponent.prototype.onBlur = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = false;
        this.dwOnBlur.emit(e);
    };
    /**
     * @return {?}
     */
    DwRateComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    DwRateComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.blur();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwRateComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var code = e.code;
        if ((code === 'ArrowRight' || e.keyCode === 39) && (this.dwValue < this.dwCount)) {
            if (this.dwAllowHalf) {
                this.dwValue += 0.5;
            }
            else {
                this.dwValue += 1;
            }
            this.onChange(this.dwValue);
        }
        else if ((code === 'ArrowLeft' || e.keyCode === 37) && (this.dwValue > 0)) {
            if (this.dwAllowHalf) {
                this.dwValue -= 0.5;
            }
            else {
                this.dwValue -= 1;
            }
            this.onChange(this.dwValue);
        }
        this.dwOnKeyDown.emit(e);
        e.preventDefault();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    DwRateComponent.prototype.setClasses = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _a;
        return _a = {},
            _a[this.innerPrefixCls] = true,
            _a[this.innerPrefixCls + "-full"] = (i + 1 < this.hoverValue) || (!this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-half"] = (this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-active"] = (this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-zero"] = (i + 1 > this.hoverValue),
            _a[this.innerPrefixCls + "-focused"] = (this.hasHalf) && (i + 1 === this.hoverValue) && this.isFocused,
            _a;
    };
    /**
     * @return {?}
     */
    DwRateComponent.prototype.updateStarArray = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = 0;
        this.starArray = [];
        while (index < this.dwCount) {
            this.starArray.push(index++);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwRateComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.dwValue = value || 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwRateComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwRateComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DwRateComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.dwDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    DwRateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateStarArray();
    };
    /**
     * @return {?}
     */
    DwRateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
    };
    DwRateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-rate',
                    preserveWhitespaces: false,
                    template: "<ng-template #defaultCharacter><i class=\"anticon anticon-star\"></i></ng-template>\n<ul\n  #ulElement\n  [ngClass]=\"classMap\"\n  (mouseleave)=\"leaveRate($event)\"\n  (focus)=\"onFocus($event)\"\n  (blur)=\"onBlur($event)\"\n  (keydown)=\"onKeyDown($event)\"\n  [tabindex]=\"dwDisabled?-1:1\">\n  <li *ngFor=\"let star of starArray\"\n    [ngClass]=\"setClasses(star)\"\n    (mouseover)=\"hoverRate($event, star, true)\"\n    (click)=\"clickRate($event, star, true)\">\n    <div class=\"ant-rate-star-first\" (mouseover)=\"hoverRate($event, star, false)\" (click)=\"clickRate($event, star, false)\">\n      <ng-template [ngTemplateOutlet]=\"dwCharacter||defaultCharacter\"></ng-template>\n    </div>\n    <div class=\"ant-rate-star-second\" (mouseover)=\"hoverRate($event, star, true)\" (click)=\"clickRate($event, star, true)\">\n      <ng-template [ngTemplateOutlet]=\"dwCharacter||defaultCharacter\"></ng-template>\n    </div>\n  </li>\n</ul>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwRateComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    DwRateComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    DwRateComponent.propDecorators = {
        dwCharacter: [{ type: Input }],
        dwOnBlur: [{ type: Output }],
        dwOnFocus: [{ type: Output }],
        dwOnKeyDown: [{ type: Output }],
        dwOnHoverChange: [{ type: Output }],
        ulElement: [{ type: ViewChild, args: ['ulElement',] }],
        dwAutoFocus: [{ type: Input }],
        dwCount: [{ type: Input }],
        dwAllowHalf: [{ type: Input }],
        dwAllowClear: [{ type: Input }],
        dwDisabled: [{ type: Input }]
    };
    return DwRateComponent;
}());
export { DwRateComponent };
function DwRateComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRateComponent.prototype._allowClear;
    /** @type {?} */
    DwRateComponent.prototype._allowHalf;
    /** @type {?} */
    DwRateComponent.prototype._disabled;
    /** @type {?} */
    DwRateComponent.prototype._count;
    /** @type {?} */
    DwRateComponent.prototype._value;
    /** @type {?} */
    DwRateComponent.prototype._autoFocus;
    /** @type {?} */
    DwRateComponent.prototype.dwCharacter;
    /** @type {?} */
    DwRateComponent.prototype.dwOnBlur;
    /** @type {?} */
    DwRateComponent.prototype.dwOnFocus;
    /** @type {?} */
    DwRateComponent.prototype.dwOnKeyDown;
    /** @type {?} */
    DwRateComponent.prototype.dwOnHoverChange;
    /** @type {?} */
    DwRateComponent.prototype.ulElement;
    /** @type {?} */
    DwRateComponent.prototype.prefixCls;
    /** @type {?} */
    DwRateComponent.prototype.isInit;
    /** @type {?} */
    DwRateComponent.prototype.hasHalf;
    /** @type {?} */
    DwRateComponent.prototype.innerPrefixCls;
    /** @type {?} */
    DwRateComponent.prototype.classMap;
    /** @type {?} */
    DwRateComponent.prototype.starArray;
    /** @type {?} */
    DwRateComponent.prototype.hoverValue;
    /** @type {?} */
    DwRateComponent.prototype.isFocused;
    /** @type {?} */
    DwRateComponent.prototype.floatReg;
    /** @type {?} */
    DwRateComponent.prototype.onChange;
    /** @type {?} */
    DwRateComponent.prototype.onTouched;
    /** @type {?} */
    DwRateComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInJhdGUvZHctcmF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXlQL0MseUJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7MkJBMU9qQixJQUFJOzBCQUNMLEtBQUs7eUJBQ04sS0FBSztzQkFDUixDQUFDO3NCQUNELENBQUM7MEJBQ0csS0FBSzt3QkFFTCxJQUFJLFlBQVksRUFBYzt5QkFDN0IsSUFBSSxZQUFZLEVBQWM7MkJBQzVCLElBQUksWUFBWSxFQUFpQjsrQkFDN0IsSUFBSSxZQUFZLEVBQVU7eUJBRTFDLFVBQVU7c0JBQ2IsS0FBSzt1QkFDSixLQUFLOzhCQUNLLElBQUksQ0FBQyxTQUFTLFVBQU87eUJBRW5CLEVBQUU7MEJBQ1gsQ0FBQzt5QkFDRixLQUFLO3dCQUNFLGVBQWU7d0JBRUUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJO3lCQUN0QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7S0FvTmpDO0lBbE5ELHNCQUNJLHdDQUFXOzs7O1FBS2Y7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBUkQsVUFDZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FD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Q1QsUUFBUSxFQUFhLFNBQVM7b0JBQzlCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGc4QkFBK0M7b0JBQy9DLFNBQVMsRUFBWTt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQzs0QkFDOUMsS0FBSyxFQUFRLElBQUk7eUJBQ2xCO3FCQUNGO2lCQUNGOzs7O2dCQW5CQyxTQUFTOzs7OEJBMkJSLEtBQUs7MkJBQ0wsTUFBTTs0QkFDTixNQUFNOzhCQUNOLE1BQU07a0NBQ04sTUFBTTs0QkFDTixTQUFTLFNBQUMsV0FBVzs4QkFjckIsS0FBSzswQkFVTCxLQUFLOzhCQWFMLEtBQUs7K0JBU0wsS0FBSzs2QkEwQkwsS0FBSzs7MEJBakhSOztTQTZCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctcmF0ZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1yYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER3UmF0ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1JhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfYWxsb3dDbGVhciA9IHRydWU7XG4gIHByaXZhdGUgX2FsbG93SGFsZiA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jb3VudCA9IDU7XG4gIHByaXZhdGUgX3ZhbHVlID0gMDtcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3Q2hhcmFjdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQE91dHB1dCgpIGR3T25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZHdPbkZvY3VzID0gbmV3IEV2ZW50RW1pdHRlcjxGb2N1c0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZHdPbktleURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkd09uSG92ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQFZpZXdDaGlsZCgndWxFbGVtZW50JykgcHJpdmF0ZSB1bEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHByZWZpeENscyA9ICdhbnQtcmF0ZSc7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBoYXNIYWxmID0gZmFsc2U7XG4gIGlubmVyUHJlZml4Q2xzID0gYCR7dGhpcy5wcmVmaXhDbHN9LXN0YXJgO1xuICBjbGFzc01hcDtcbiAgc3RhckFycmF5OiBudW1iZXJbXSA9IFtdO1xuICBob3ZlclZhbHVlID0gMDtcbiAgaXNGb2N1c2VkID0gZmFsc2U7XG4gIGZsb2F0UmVnOiBSZWdFeHAgPSAvXlxcZCsoXFwuXFxkKyk/JC87XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBASW5wdXQoKVxuICBzZXQgZHdBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICBnZXQgZHdBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvdW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fY291bnQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2NvdW50ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcbiAgfVxuXG4gIGdldCBkd0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QWxsb3dIYWxmKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsb3dIYWxmID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FsbG93SGFsZigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dIYWxmO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QWxsb3dDbGVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FsbG93Q2xlYXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3QWxsb3dDbGVhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWxsb3dDbGVhcjtcbiAgfVxuXG4gIGdldCBkd1ZhbHVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IGR3VmFsdWUoaW5wdXQ6IG51bWJlcikge1xuICAgIGxldCB2YWx1ZSA9IGlucHV0O1xuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5mbG9hdFJlZy50ZXN0KHZhbHVlLnRvU3RyaW5nKCkpKSB7XG4gICAgICB2YWx1ZSArPSAwLjU7XG4gICAgICB0aGlzLmhhc0hhbGYgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmhvdmVyVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYCBdOiB0aGlzLmR3RGlzYWJsZWRcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5pdCAmJiAhdGhpcy5kd0Rpc2FibGVkKSB7XG4gICAgICBpZiAodGhpcy5kd0F1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsaWNrUmF0ZShlOiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyLCBpc0Z1bGw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oYXNIYWxmID0gIWlzRnVsbCAmJiB0aGlzLmR3QWxsb3dIYWxmO1xuXG4gICAgbGV0IGFjdHVhbFZhbHVlID0gaW5kZXggKyAxO1xuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGFjdHVhbFZhbHVlO1xuXG4gICAgaWYgKHRoaXMuaGFzSGFsZikge1xuICAgICAgYWN0dWFsVmFsdWUgLT0gMC41O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmR3VmFsdWUgPT09IGFjdHVhbFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5kd0FsbG93Q2xlYXIpIHtcbiAgICAgICAgdGhpcy5kd1ZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmR3VmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR3VmFsdWUgPSBhY3R1YWxWYWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5kd1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBob3ZlclJhdGUoZTogTW91c2VFdmVudCwgaW5kZXg6IG51bWJlciwgaXNGdWxsOiBib29sZWFuKTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5kd0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlzSGFsZjogYm9vbGVhbiA9ICFpc0Z1bGwgJiYgdGhpcy5kd0FsbG93SGFsZjtcbiAgICBpZiAodGhpcy5ob3ZlclZhbHVlID09PSBpbmRleCArIDEgJiYgaXNIYWxmID09PSB0aGlzLmhhc0hhbGYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBpbmRleCArIDE7XG4gICAgdGhpcy5kd09uSG92ZXJDaGFuZ2UuZW1pdCh0aGlzLmhvdmVyVmFsdWUpO1xuICAgIHRoaXMuaGFzSGFsZiA9IGlzSGFsZjtcbiAgfVxuXG4gIGxlYXZlUmF0ZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgb2xkVmFsID0gdGhpcy5kd1ZhbHVlO1xuICAgIGlmICh0aGlzLmZsb2F0UmVnLnRlc3Qob2xkVmFsLnRvU3RyaW5nKCkpKSB7XG4gICAgICBvbGRWYWwgKz0gMC41O1xuICAgICAgdGhpcy5oYXNIYWxmID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gb2xkVmFsO1xuICB9XG5cbiAgb25Gb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuZHdPbkZvY3VzLmVtaXQoZSk7XG4gIH1cblxuICBvbkJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5kd09uQmx1ci5lbWl0KGUpO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY29kZSA9IGUuY29kZTtcbiAgICBpZiAoKGNvZGUgPT09ICdBcnJvd1JpZ2h0JyB8fCBlLmtleUNvZGUgPT09IDM5KSAmJiAodGhpcy5kd1ZhbHVlIDwgdGhpcy5kd0NvdW50KSkge1xuICAgICAgaWYgKHRoaXMuZHdBbGxvd0hhbGYpIHtcbiAgICAgICAgdGhpcy5kd1ZhbHVlICs9IDAuNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHdWYWx1ZSArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmR3VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoKGNvZGUgPT09ICdBcnJvd0xlZnQnIHx8IGUua2V5Q29kZSA9PT0gMzcpICYmICh0aGlzLmR3VmFsdWUgPiAwKSkge1xuICAgICAgaWYgKHRoaXMuZHdBbGxvd0hhbGYpIHtcbiAgICAgICAgdGhpcy5kd1ZhbHVlIC09IDAuNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHdWYWx1ZSAtPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmR3VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmR3T25LZXlEb3duLmVtaXQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2V0Q2xhc3NlcyhpOiBudW1iZXIpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBbIHRoaXMuaW5uZXJQcmVmaXhDbHMgXSAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWZ1bGxgIF0gICA6IChpICsgMSA8IHRoaXMuaG92ZXJWYWx1ZSkgfHwgKCF0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30taGFsZmAgXSAgIDogKHRoaXMuaGFzSGFsZikgJiYgKGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1hY3RpdmVgIF0gOiAodGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSksXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LXplcm9gIF0gICA6IChpICsgMSA+IHRoaXMuaG92ZXJWYWx1ZSksXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWZvY3VzZWRgIF06ICh0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSAmJiB0aGlzLmlzRm9jdXNlZFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVTdGFyQXJyYXkoKTogdm9pZCB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB0aGlzLnN0YXJBcnJheSA9IFtdO1xuICAgIHdoaWxlIChpbmRleCA8IHRoaXMuZHdDb3VudCkge1xuICAgICAgdGhpcy5zdGFyQXJyYXkucHVzaChpbmRleCsrKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5kd1ZhbHVlID0gdmFsdWUgfHwgMDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmR3RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==
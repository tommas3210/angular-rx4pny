/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, HostBinding, Input, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var DwInputNumberComponent = /** @class */ (function () {
    function DwInputNumberComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.isInit = false;
        this._disabled = false;
        this._step = 1;
        this._autoFocus = false;
        this._formatter = function (value) { return value; };
        this.isFocused = false;
        this.prefixCls = 'ant-input-number';
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.dwSize = 'default';
        this.dwMin = -Infinity;
        this.dwMax = Infinity;
        this.dwParser = function (value) { return value; };
        this.dwPlaceHolder = '';
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwInputNumberComponent.prototype, "isLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputNumberComponent.prototype, "isSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputNumberComponent.prototype, "dwAutoFocus", {
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
    Object.defineProperty(DwInputNumberComponent.prototype, "dwDisabled", {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputNumberComponent.prototype, "dwStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._step;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._step = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputNumberComponent.prototype, "dwFormatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._formatter;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._formatter = v;
            /** @type {?} */
            var value = this.getCurrentValidValue(this.actualValue);
            this.writeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwInputNumberComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.dwAutoFocus) {
            this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
        }
        else {
            this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwInputNumberComponent.prototype.onModelChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.actualValue = this.dwParser(value.trim().replace(/。/g, '.').replace(/[^\w\.-]+/g, ''));
        this.inputElement.nativeElement.value = this.actualValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwInputNumberComponent.prototype.getCurrentValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = /** @type {?} */ (this.getValidValue(val));
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    };
    // '1.' '1x' 'xx' '' => are not complete numbers
    /**
     * @param {?} num
     * @return {?}
     */
    DwInputNumberComponent.prototype.isNotCompleteNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return (isNaN(/** @type {?} */ (num)) ||
            num === '' ||
            num === null ||
            (num && num.toString().indexOf('.') === num.toString().length - 1));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwInputNumberComponent.prototype.getValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var val = parseFloat(/** @type {?} */ (value));
        // https://github.com/ant-design/ant-design/issues/7358
        if (isNaN(val)) {
            return value;
        }
        if (val < this.dwMin) {
            val = this.dwMin;
        }
        if (val > this.dwMax) {
            val = this.dwMax;
        }
        return val;
    };
    /**
     * @param {?} num
     * @return {?}
     */
    DwInputNumberComponent.prototype.toNumber = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        if (this.isNotCompleteNumber(num)) {
            return /** @type {?} */ (num);
        }
        if (isNotNil(this.dwPrecision)) {
            return Number(Number(num).toFixed(this.dwPrecision));
        }
        return Number(num);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwInputNumberComponent.prototype.onBlur = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onTouched();
        this.isFocused = false;
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue);
        this.setValue(value, "" + this.value !== "" + value);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwInputNumberComponent.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = true;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwInputNumberComponent.prototype.getRatio = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    DwInputNumberComponent.prototype.down = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    };
    /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    DwInputNumberComponent.prototype.up = /**
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwInputNumberComponent.prototype.getPrecision = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        /** @type {?} */
        var precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    };
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    DwInputNumberComponent.prototype.getMaxPrecision = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        if (isNotNil(this.dwPrecision)) {
            return this.dwPrecision;
        }
        /** @type {?} */
        var ratioPrecision = this.getPrecision(ratio);
        /** @type {?} */
        var stepPrecision = this.getPrecision(this.dwStep);
        /** @type {?} */
        var currentValuePrecision = this.getPrecision(/** @type {?} */ (currentValue));
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    };
    /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    DwInputNumberComponent.prototype.getPrecisionFactor = /**
     * @param {?} currentValue
     * @param {?} ratio
     * @return {?}
     */
    function (currentValue, ratio) {
        /** @type {?} */
        var precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    DwInputNumberComponent.prototype.upStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result =
                ((precisionFactor * val + precisionFactor * this.dwStep * rat) /
                    precisionFactor).toFixed(precision);
        }
        else {
            result = this.dwMin === -Infinity ? this.dwStep : this.dwMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    DwInputNumberComponent.prototype.downStep = /**
     * @param {?} val
     * @param {?} rat
     * @return {?}
     */
    function (val, rat) {
        /** @type {?} */
        var precisionFactor = this.getPrecisionFactor(val, rat);
        /** @type {?} */
        var precision = Math.abs(this.getMaxPrecision(val, rat));
        /** @type {?} */
        var result;
        if (typeof val === 'number') {
            result =
                ((precisionFactor * val - precisionFactor * this.dwStep * rat) /
                    precisionFactor).toFixed(precision);
        }
        else {
            result = this.dwMin === -Infinity ? -this.dwStep : this.dwMin;
        }
        return this.toNumber(result);
    };
    /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    DwInputNumberComponent.prototype.step = /**
     * @param {?} type
     * @param {?} e
     * @param {?=} ratio
     * @return {?}
     */
    function (type, e, ratio) {
        var _this = this;
        if (ratio === void 0) { ratio = 1; }
        this.stop();
        e.preventDefault();
        if (this.dwDisabled) {
            return;
        }
        /** @type {?} */
        var value = this.getCurrentValidValue(this.actualValue) || 0;
        /** @type {?} */
        var val;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        /** @type {?} */
        var outOfRange = val > this.dwMax || val < this.dwMin;
        if (val > this.dwMax) {
            val = this.dwMax;
        }
        else if (val < this.dwMin) {
            val = this.dwMin;
        }
        this.setValue(val, true);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = setTimeout(function () {
            _this[type](e, ratio, true);
        }, 600);
    };
    /**
     * @return {?}
     */
    DwInputNumberComponent.prototype.stop = /**
     * @return {?}
     */
    function () {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    DwInputNumberComponent.prototype.setValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && ("" + this.value !== "" + value)) {
            this.onChange(value);
        }
        this.value = value;
        this.actualValue = value;
        /** @type {?} */
        var displayValue = isNotNil(this.dwFormatter(this.value)) ? this.dwFormatter(this.value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = displayValue;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            /** @type {?} */
            var val = Number(value);
            if (val >= this.dwMax) {
                this.disabledUp = true;
            }
            if (val <= this.dwMin) {
                this.disabledDown = true;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwInputNumberComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.code === 'ArrowUp' || e.keyCode === 38) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.code === 'ArrowDown' || e.keyCode === 40) {
            /** @type {?} */
            var ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwInputNumberComponent.prototype.onKeyUp = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.stop();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwInputNumberComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwInputNumberComponent.prototype.registerOnChange = /**
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
    DwInputNumberComponent.prototype.registerOnTouched = /**
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
    DwInputNumberComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.dwDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    DwInputNumberComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    DwInputNumberComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    DwInputNumberComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        if (this._autoFocus) {
            this.focus();
        }
    };
    DwInputNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-input-number',
                    template: "<div class=\"ant-input-number-handler-wrap\">\n  <a\n    (mousedown)=\"up($event)\"\n    (mouseup)=\"stop()\"\n    (mouseleave)=\"stop()\"\n    class=\"ant-input-number-handler ant-input-number-handler-up\"\n    [class.ant-input-number-handler-up-disabled]=\"disabledUp\">\n    <span class=\"ant-input-number-handler-up-inner\" unselectable=\"unselectable\" (click)=\"$event.preventDefault()\"></span>\n  </a>\n  <a\n    (mousedown)=\"down($event)\"\n    (mouseup)=\"stop()\"\n    (mouseleave)=\"stop()\"\n    class=\"ant-input-number-handler ant-input-number-handler-down\"\n    [class.ant-input-number-handler-down-disabled]=\"disabledDown\">\n    <span class=\"ant-input-number-handler-down-inner\" unselectable=\"unselectable\" (click)=\"$event.preventDefault()\"></span>\n  </a>\n</div>\n<div class=\"ant-input-number-input-wrap\">\n  <input\n    #inputElement\n    class=\"ant-input-number-input\"\n    [disabled]=\"dwDisabled\"\n    [attr.min]=\"dwMin\"\n    [attr.max]=\"dwMax\"\n    [placeholder]=\"dwPlaceHolder\"\n    [attr.step]=\"dwStep\"\n    (keydown)=\"onKeyDown($event)\"\n    (keyup)=\"onKeyUp($event)\"\n    (blur)=\"onBlur($event)\"\n    (focus)=\"onFocus($event)\"\n    [ngModel]=\"displayValue\"\n    (ngModelChange)=\"onModelChange($event)\"\n    autocomplete=\"off\">\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwInputNumberComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-input-number]': 'true',
                        '[class.ant-input-number-focused]': 'isFocused'
                    }
                }] }
    ];
    /** @nocollapse */
    DwInputNumberComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DwInputNumberComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        dwSize: [{ type: Input }],
        dwMin: [{ type: Input }],
        dwMax: [{ type: Input }],
        dwParser: [{ type: Input }],
        dwPrecision: [{ type: Input }],
        dwPlaceHolder: [{ type: Input }],
        isLarge: [{ type: HostBinding, args: ['class.ant-input-number-lg',] }],
        isSmall: [{ type: HostBinding, args: ['class.ant-input-number-sm',] }],
        dwAutoFocus: [{ type: Input }],
        dwDisabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-input-number-disabled',] }],
        dwStep: [{ type: Input }],
        dwFormatter: [{ type: Input }]
    };
    return DwInputNumberComponent;
}());
export { DwInputNumberComponent };
function DwInputNumberComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwInputNumberComponent.prototype.isInit;
    /** @type {?} */
    DwInputNumberComponent.prototype._disabled;
    /** @type {?} */
    DwInputNumberComponent.prototype._step;
    /** @type {?} */
    DwInputNumberComponent.prototype.autoStepTimer;
    /** @type {?} */
    DwInputNumberComponent.prototype._autoFocus;
    /** @type {?} */
    DwInputNumberComponent.prototype._formatter;
    /** @type {?} */
    DwInputNumberComponent.prototype.displayValue;
    /** @type {?} */
    DwInputNumberComponent.prototype.actualValue;
    /** @type {?} */
    DwInputNumberComponent.prototype.isFocused;
    /** @type {?} */
    DwInputNumberComponent.prototype.value;
    /** @type {?} */
    DwInputNumberComponent.prototype.el;
    /** @type {?} */
    DwInputNumberComponent.prototype.prefixCls;
    /** @type {?} */
    DwInputNumberComponent.prototype.disabledUp;
    /** @type {?} */
    DwInputNumberComponent.prototype.disabledDown;
    /** @type {?} */
    DwInputNumberComponent.prototype.onChange;
    /** @type {?} */
    DwInputNumberComponent.prototype.onTouched;
    /** @type {?} */
    DwInputNumberComponent.prototype.inputElement;
    /** @type {?} */
    DwInputNumberComponent.prototype.dwSize;
    /** @type {?} */
    DwInputNumberComponent.prototype.dwMin;
    /** @type {?} */
    DwInputNumberComponent.prototype.dwMax;
    /** @type {?} */
    DwInputNumberComponent.prototype.dwParser;
    /** @type {?} */
    DwInputNumberComponent.prototype.dwPrecision;
    /** @type {?} */
    DwInputNumberComponent.prototype.dwPlaceHolder;
    /** @type {?} */
    DwInputNumberComponent.prototype.elementRef;
    /** @type {?} */
    DwInputNumberComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiaW5wdXQtbnVtYmVyL2R3LWlucHV0LW51bWJlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBMlYvQyxnQ0FBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztzQkF6VXRELEtBQUs7eUJBQ0YsS0FBSztxQkFDVCxDQUFDOzBCQUVJLEtBQUs7MEJBQ0wsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSzt5QkFHekIsS0FBSzt5QkFHTCxrQkFBa0I7MEJBQ2pCLEtBQUs7NEJBQ0gsS0FBSzt3QkFDZ0IsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJO3lCQUN0QixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7c0JBRWUsU0FBUztxQkFDakMsQ0FBQyxRQUFRO3FCQUNULFFBQVE7d0JBQ2IsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLEVBQUwsQ0FBSzs2QkFFWCxFQUFFO1FBb1R6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDO0lBblRELHNCQUNJLDJDQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxD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MEJBQTBCLEVBQVUsTUFBTTt3QkFDMUMsa0NBQWtDLEVBQUUsV0FBVztxQkFDaEQ7aUJBQ0Y7Ozs7Z0JBekJDLFVBQVU7Z0JBR1YsU0FBUzs7OytCQXdDUixTQUFTLFNBQUMsY0FBYzt5QkFDeEIsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBRUwsV0FBVyxTQUFDLDJCQUEyQjswQkFLdkMsV0FBVyxTQUFDLDJCQUEyQjs4QkFLdkMsS0FBSzs2QkFVTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLGlDQUFpQzt5QkFTN0MsS0FBSzs4QkFTTCxLQUFLOztpQ0E5RlI7O1NBOEJhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy1pbnB1dC1udW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctaW5wdXQtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEd0lucHV0TnVtYmVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0ICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWlucHV0LW51bWJlcl0nICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1udW1iZXItZm9jdXNlZF0nOiAnaXNGb2N1c2VkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3SW5wdXROdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0ZXAgPSAxO1xuICBwcml2YXRlIGF1dG9TdGVwVGltZXI7XG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIF9mb3JtYXR0ZXIgPSAodmFsdWUpID0+IHZhbHVlO1xuICBkaXNwbGF5VmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgYWN0dWFsVmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgaXNGb2N1c2VkID0gZmFsc2U7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXI7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJlZml4Q2xzID0gJ2FudC1pbnB1dC1udW1iZXInO1xuICBkaXNhYmxlZFVwID0gZmFsc2U7XG4gIGRpc2FibGVkRG93biA9IGZhbHNlO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGR3U2l6ZTogJ3NtYWxsJyB8ICdkZWZhdWx0JyB8ICdsYXJnZScgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGR3TWluOiBudW1iZXIgPSAtSW5maW5pdHk7XG4gIEBJbnB1dCgpIGR3TWF4OiBudW1iZXIgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgZHdQYXJzZXIgPSAodmFsdWUpID0+IHZhbHVlO1xuICBASW5wdXQoKSBkd1ByZWNpc2lvbjogbnVtYmVyO1xuICBASW5wdXQoKSBkd1BsYWNlSG9sZGVyID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLWxnJylcbiAgZ2V0IGlzTGFyZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdTaXplID09PSAnbGFyZ2UnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtaW5wdXQtbnVtYmVyLXNtJylcbiAgZ2V0IGlzU21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdTaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICB9XG5cbiAgZ2V0IGR3QXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1pbnB1dC1udW1iZXItZGlzYWJsZWQnKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1N0ZXAodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0ZXAgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1N0ZXAoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Zvcm1hdHRlcih2OiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy5fZm9ybWF0dGVyID0gdjtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSk7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Zvcm1hdHRlcigpOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0dGVyO1xuICB9XG5cbiAgdXBkYXRlQXV0b0ZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3QXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgfVxuICB9XG5cbiAgb25Nb2RlbENoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5hY3R1YWxWYWx1ZSA9IHRoaXMuZHdQYXJzZXIodmFsdWUudHJpbSgpLnJlcGxhY2UoL+OAgi9nLCAnLicpLnJlcGxhY2UoL1teXFx3XFwuLV0rL2csICcnKSk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHRoaXMuYWN0dWFsVmFsdWU7XG4gIH1cblxuICBnZXRDdXJyZW50VmFsaWRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgICBsZXQgdmFsID0gdmFsdWU7XG4gICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgIHZhbCA9ICcnO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcih2YWwpKSB7XG4gICAgICB2YWwgPSB0aGlzLmdldFZhbGlkVmFsdWUodmFsKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRvTnVtYmVyKHZhbCk7XG4gIH1cblxuICAvLyAnMS4nICcxeCcgJ3h4JyAnJyA9PiBhcmUgbm90IGNvbXBsZXRlIG51bWJlcnNcbiAgaXNOb3RDb21wbGV0ZU51bWJlcihudW06IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBpc05hTihudW0gYXMgbnVtYmVyKSB8fFxuICAgICAgbnVtID09PSAnJyB8fFxuICAgICAgbnVtID09PSBudWxsIHx8XG4gICAgICAobnVtICYmIG51bS50b1N0cmluZygpLmluZGV4T2YoJy4nKSA9PT0gbnVtLnRvU3RyaW5nKCkubGVuZ3RoIC0gMSlcbiAgICApO1xuICB9XG5cbiAgZ2V0VmFsaWRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyIHtcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdCh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzczNThcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsIDwgdGhpcy5kd01pbikge1xuICAgICAgdmFsID0gdGhpcy5kd01pbjtcbiAgICB9XG4gICAgaWYgKHZhbCA+IHRoaXMuZHdNYXgpIHtcbiAgICAgIHZhbCA9IHRoaXMuZHdNYXg7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICB0b051bWJlcihudW06IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuaXNOb3RDb21wbGV0ZU51bWJlcihudW0pKSB7XG4gICAgICByZXR1cm4gbnVtIGFzIG51bWJlcjtcbiAgICB9XG4gICAgaWYgKGlzTm90TmlsKHRoaXMuZHdQcmVjaXNpb24pKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihudW0pLnRvRml4ZWQodGhpcy5kd1ByZWNpc2lvbikpO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKG51bSk7XG4gIH1cblxuICBvbkJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0Q3VycmVudFZhbGlkVmFsdWUodGhpcy5hY3R1YWxWYWx1ZSk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKTtcbiAgfVxuXG4gIG9uRm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGdldFJhdGlvKGU6IEtleWJvYXJkRXZlbnQpOiBudW1iZXIge1xuICAgIGxldCByYXRpbyA9IDE7XG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgIHJhdGlvID0gMC4xO1xuICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgcmF0aW8gPSAxMDtcbiAgICB9XG4gICAgcmV0dXJuIHJhdGlvO1xuICB9XG5cbiAgZG93bihlOiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCwgcmF0aW8/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuc3RlcCgnZG93bicsIGUsIHJhdGlvKTtcbiAgfVxuXG4gIHVwKGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbz86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy5zdGVwKCd1cCcsIGUsIHJhdGlvKTtcbiAgfVxuXG4gIGdldFByZWNpc2lvbih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgaWYgKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgPj0gMCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlU3RyaW5nLnNsaWNlKHZhbHVlU3RyaW5nLmluZGV4T2YoJ2UtJykgKyAyKSwgMTApO1xuICAgIH1cbiAgICBsZXQgcHJlY2lzaW9uID0gMDtcbiAgICBpZiAodmFsdWVTdHJpbmcuaW5kZXhPZignLicpID49IDApIHtcbiAgICAgIHByZWNpc2lvbiA9IHZhbHVlU3RyaW5nLmxlbmd0aCAtIHZhbHVlU3RyaW5nLmluZGV4T2YoJy4nKSAtIDE7XG4gICAgfVxuICAgIHJldHVybiBwcmVjaXNpb247XG4gIH1cblxuICAvLyBzdGVwPXsxLjB9IHZhbHVlPXsxLjUxfVxuICAvLyBwcmVzcyArXG4gIC8vIHRoZW4gdmFsdWUgc2hvdWxkIGJlIDIuNTEsIHJhdGhlciB0aGFuIDIuNVxuICAvLyBpZiB0aGlzLnByb3BzLnByZWNpc2lvbiBpcyB1bmRlZmluZWRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9pbnB1dC1udW1iZXIvaXNzdWVzLzM5XG4gIGdldE1heFByZWNpc2lvbihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMuZHdQcmVjaXNpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5kd1ByZWNpc2lvbjtcbiAgICB9XG4gICAgY29uc3QgcmF0aW9QcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihyYXRpbyk7XG4gICAgY29uc3Qgc3RlcFByZWNpc2lvbiA9IHRoaXMuZ2V0UHJlY2lzaW9uKHRoaXMuZHdTdGVwKTtcbiAgICBjb25zdCBjdXJyZW50VmFsdWVQcmVjaXNpb24gPSB0aGlzLmdldFByZWNpc2lvbihjdXJyZW50VmFsdWUgYXMgbnVtYmVyKTtcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHJhdGlvUHJlY2lzaW9uICsgc3RlcFByZWNpc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgubWF4KGN1cnJlbnRWYWx1ZVByZWNpc2lvbiwgcmF0aW9QcmVjaXNpb24gKyBzdGVwUHJlY2lzaW9uKTtcbiAgfVxuXG4gIGdldFByZWNpc2lvbkZhY3RvcihjdXJyZW50VmFsdWU6IHN0cmluZyB8IG51bWJlciwgcmF0aW86IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5nZXRNYXhQcmVjaXNpb24oY3VycmVudFZhbHVlLCByYXRpbyk7XG4gICAgcmV0dXJuIE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgdXBTdGVwKHZhbDogc3RyaW5nIHwgbnVtYmVyLCByYXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgcHJlY2lzaW9uRmFjdG9yID0gdGhpcy5nZXRQcmVjaXNpb25GYWN0b3IodmFsLCByYXQpO1xuICAgIGNvbnN0IHByZWNpc2lvbiA9IE1hdGguYWJzKHRoaXMuZ2V0TWF4UHJlY2lzaW9uKHZhbCwgcmF0KSk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJlc3VsdCA9XG4gICAgICAgICgocHJlY2lzaW9uRmFjdG9yICogdmFsICsgcHJlY2lzaW9uRmFjdG9yICogdGhpcy5kd1N0ZXAgKiByYXQpIC9cbiAgICAgICAgICBwcmVjaXNpb25GYWN0b3IpLnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gdGhpcy5kd01pbiA9PT0gLUluZmluaXR5ID8gdGhpcy5kd1N0ZXAgOiB0aGlzLmR3TWluO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xuICB9XG5cbiAgZG93blN0ZXAodmFsOiBzdHJpbmcgfCBudW1iZXIsIHJhdDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBwcmVjaXNpb25GYWN0b3IgPSB0aGlzLmdldFByZWNpc2lvbkZhY3Rvcih2YWwsIHJhdCk7XG4gICAgY29uc3QgcHJlY2lzaW9uID0gTWF0aC5hYnModGhpcy5nZXRNYXhQcmVjaXNpb24odmFsLCByYXQpKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgKChwcmVjaXNpb25GYWN0b3IgKiB2YWwgLSBwcmVjaXNpb25GYWN0b3IgKiB0aGlzLmR3U3RlcCAqIHJhdCkgL1xuICAgICAgICAgIHByZWNpc2lvbkZhY3RvcikudG9GaXhlZChwcmVjaXNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmR3TWluID09PSAtSW5maW5pdHkgPyAtdGhpcy5kd1N0ZXAgOiB0aGlzLmR3TWluO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50b051bWJlcihyZXN1bHQpO1xuICB9XG5cbiAgc3RlcCh0eXBlOiBzdHJpbmcsIGU6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50LCByYXRpbzogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5kd0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRDdXJyZW50VmFsaWRWYWx1ZSh0aGlzLmFjdHVhbFZhbHVlKSB8fCAwO1xuICAgIGxldCB2YWw7XG4gICAgaWYgKHR5cGUgPT09ICd1cCcpIHtcbiAgICAgIHZhbCA9IHRoaXMudXBTdGVwKHZhbHVlLCByYXRpbyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZG93bicpIHtcbiAgICAgIHZhbCA9IHRoaXMuZG93blN0ZXAodmFsdWUsIHJhdGlvKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0T2ZSYW5nZSA9IHZhbCA+IHRoaXMuZHdNYXggfHwgdmFsIDwgdGhpcy5kd01pbjtcbiAgICBpZiAodmFsID4gdGhpcy5kd01heCkge1xuICAgICAgdmFsID0gdGhpcy5kd01heDtcbiAgICB9IGVsc2UgaWYgKHZhbCA8IHRoaXMuZHdNaW4pIHtcbiAgICAgIHZhbCA9IHRoaXMuZHdNaW47XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgaWYgKG91dE9mUmFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hdXRvU3RlcFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzWyB0eXBlIF0oZSwgcmF0aW8sIHRydWUpO1xuICAgIH0sIDYwMCk7XG4gIH1cblxuICBzdG9wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9TdGVwVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmF1dG9TdGVwVGltZXIpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBudW1iZXIsIGVtaXQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZW1pdCAmJiAoYCR7dGhpcy52YWx1ZX1gICE9PSBgJHt2YWx1ZX1gKSkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmFjdHVhbFZhbHVlID0gdmFsdWU7XG4gICAgY29uc3QgZGlzcGxheVZhbHVlID0gaXNOb3ROaWwodGhpcy5kd0Zvcm1hdHRlcih0aGlzLnZhbHVlKSkgPyB0aGlzLmR3Rm9ybWF0dGVyKHRoaXMudmFsdWUpIDogJyc7XG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBkaXNwbGF5VmFsdWU7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSA9IGRpc3BsYXlWYWx1ZTtcbiAgICB0aGlzLmRpc2FibGVkVXAgPSB0aGlzLmRpc2FibGVkRG93biA9IGZhbHNlO1xuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgY29uc3QgdmFsID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgIGlmICh2YWwgPj0gdGhpcy5kd01heCkge1xuICAgICAgICB0aGlzLmRpc2FibGVkVXAgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA8PSB0aGlzLmR3TWluKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWREb3duID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93VXAnIHx8IGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcbiAgICAgIHRoaXMudXAoZSwgcmF0aW8pO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5nZXRSYXRpbyhlKTtcbiAgICAgIHRoaXMuZG93bihlLCByYXRpbyk7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH1cblxuICBvbktleVVwKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3AoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmR3RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5fYXV0b0ZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
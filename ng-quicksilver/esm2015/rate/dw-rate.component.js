/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
export class DwRateComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
        this.innerPrefixCls = `${this.prefixCls}-star`;
        this.starArray = [];
        this.hoverValue = 0;
        this.isFocused = false;
        this.floatReg = /^\d+(\.\d+)?$/;
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAutoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get dwAutoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCount(value) {
        if (this._count === value) {
            return;
        }
        this._count = value;
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    get dwCount() {
        return this._count;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAllowHalf(value) {
        this._allowHalf = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAllowHalf() {
        return this._allowHalf;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAllowClear(value) {
        this._allowClear = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAllowClear() {
        return this._allowClear;
    }
    /**
     * @return {?}
     */
    get dwValue() {
        return this._value;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    set dwValue(input) {
        /** @type {?} */
        let value = input;
        if (this._value === value) {
            return;
        }
        this._value = value;
        if (this.floatReg.test(value.toString())) {
            value += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-disabled`]: this.dwDisabled
        };
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.dwDisabled) {
            if (this.dwAutoFocus) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    clickRate(e, index, isFull) {
        e.stopPropagation();
        if (this.dwDisabled) {
            return;
        }
        this.hasHalf = !isFull && this.dwAllowHalf;
        /** @type {?} */
        let actualValue = index + 1;
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
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    hoverRate(e, index, isFull) {
        e.stopPropagation();
        if (this.dwDisabled) {
            return;
        }
        /** @type {?} */
        const isHalf = !isFull && this.dwAllowHalf;
        if (this.hoverValue === index + 1 && isHalf === this.hasHalf) {
            return;
        }
        this.hoverValue = index + 1;
        this.dwOnHoverChange.emit(this.hoverValue);
        this.hasHalf = isHalf;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    leaveRate(e) {
        e.stopPropagation();
        /** @type {?} */
        let oldVal = this.dwValue;
        if (this.floatReg.test(oldVal.toString())) {
            oldVal += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = oldVal;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus(e) {
        this.isFocused = true;
        this.dwOnFocus.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onBlur(e) {
        this.isFocused = false;
        this.dwOnBlur.emit(e);
    }
    /**
     * @return {?}
     */
    focus() {
        this.ulElement.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.ulElement.nativeElement.blur();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const code = e.code;
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
    }
    /**
     * @param {?} i
     * @return {?}
     */
    setClasses(i) {
        return {
            [this.innerPrefixCls]: true,
            [`${this.innerPrefixCls}-full`]: (i + 1 < this.hoverValue) || (!this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-half`]: (this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-active`]: (this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-zero`]: (i + 1 > this.hoverValue),
            [`${this.innerPrefixCls}-focused`]: (this.hasHalf) && (i + 1 === this.hoverValue) && this.isFocused
        };
    }
    /**
     * @return {?}
     */
    updateStarArray() {
        /** @type {?} */
        let index = 0;
        this.starArray = [];
        while (index < this.dwCount) {
            this.starArray.push(index++);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.dwValue = value || 0;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dwDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
    }
}
DwRateComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-rate',
                preserveWhitespaces: false,
                template: "<ng-template #defaultCharacter><i class=\"anticon anticon-star\"></i></ng-template>\n<ul\n  #ulElement\n  [ngClass]=\"classMap\"\n  (mouseleave)=\"leaveRate($event)\"\n  (focus)=\"onFocus($event)\"\n  (blur)=\"onBlur($event)\"\n  (keydown)=\"onKeyDown($event)\"\n  [tabindex]=\"dwDisabled?-1:1\">\n  <li *ngFor=\"let star of starArray\"\n    [ngClass]=\"setClasses(star)\"\n    (mouseover)=\"hoverRate($event, star, true)\"\n    (click)=\"clickRate($event, star, true)\">\n    <div class=\"ant-rate-star-first\" (mouseover)=\"hoverRate($event, star, false)\" (click)=\"clickRate($event, star, false)\">\n      <ng-template [ngTemplateOutlet]=\"dwCharacter||defaultCharacter\"></ng-template>\n    </div>\n    <div class=\"ant-rate-star-second\" (mouseover)=\"hoverRate($event, star, true)\" (click)=\"clickRate($event, star, true)\">\n      <ng-template [ngTemplateOutlet]=\"dwCharacter||defaultCharacter\"></ng-template>\n    </div>\n  </li>\n</ul>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DwRateComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
DwRateComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInJhdGUvZHctcmF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBY2pELE1BQU07Ozs7SUEyT0osWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVzsyQkExT2pCLElBQUk7MEJBQ0wsS0FBSzt5QkFDTixLQUFLO3NCQUNSLENBQUM7c0JBQ0QsQ0FBQzswQkFDRyxLQUFLO3dCQUVMLElBQUksWUFBWSxFQUFjO3lCQUM3QixJQUFJLFlBQVksRUFBYzsyQkFDNUIsSUFBSSxZQUFZLEVBQWlCOytCQUM3QixJQUFJLFlBQVksRUFBVTt5QkFFMUMsVUFBVTtzQkFDYixLQUFLO3VCQUNKLEtBQUs7OEJBQ0UsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPO3lCQUVuQixFQUFFOzBCQUNYLENBQUM7eUJBQ0YsS0FBSzt3QkFDRSxlQUFlO3dCQUVFLEdBQUcsRUFBRSxDQUFDLElBQUk7eUJBQ3RCLEdBQUcsRUFBRSxDQUFDLElBQUk7S0FvTmpDOzs7OztJQWxORCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUs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QUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDOUMsS0FBSyxFQUFRLElBQUk7cUJBQ2xCO2lCQUNGO2FBQ0Y7Ozs7WUFuQkMsU0FBUzs7OzBCQTJCUixLQUFLO3VCQUNMLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNOzhCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLFdBQVc7MEJBY3JCLEtBQUs7c0JBVUwsS0FBSzswQkFhTCxLQUFLOzJCQVNMLEtBQUs7eUJBMEJMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1yYXRlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXJhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdSYXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3UmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9hbGxvd0NsZWFyID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYWxsb3dIYWxmID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvdW50ID0gNTtcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdDaGFyYWN0ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAT3V0cHV0KCkgZHdPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkd09uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkd09uS2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIGR3T25Ib3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnKSBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJlZml4Q2xzID0gJ2FudC1yYXRlJztcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGhhc0hhbGYgPSBmYWxzZTtcbiAgaW5uZXJQcmVmaXhDbHMgPSBgJHt0aGlzLnByZWZpeENsc30tc3RhcmA7XG4gIGNsYXNzTWFwO1xuICBzdGFyQXJyYXk6IG51bWJlcltdID0gW107XG4gIGhvdmVyVmFsdWUgPSAwO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgZmxvYXRSZWc6IFJlZ0V4cCA9IC9eXFxkKyhcXC5cXGQrKT8kLztcblxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0F1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIGdldCBkd0F1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q291bnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9jb3VudCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xuICB9XG5cbiAgZ2V0IGR3Q291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdBbGxvd0hhbGYodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd0hhbGYgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3QWxsb3dIYWxmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0hhbGY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdBbGxvd0NsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsb3dDbGVhciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdBbGxvd0NsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsZWFyO1xuICB9XG5cbiAgZ2V0IGR3VmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgZHdWYWx1ZShpbnB1dDogbnVtYmVyKSB7XG4gICAgbGV0IHZhbHVlID0gaW5wdXQ7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmZsb2F0UmVnLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpIHtcbiAgICAgIHZhbHVlICs9IDAuNTtcbiAgICAgIHRoaXMuaGFzSGFsZiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF06IHRoaXMuZHdEaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmICF0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLmR3QXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tSYXRlKGU6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIGlzRnVsbDogYm9vbGVhbik6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhhc0hhbGYgPSAhaXNGdWxsICYmIHRoaXMuZHdBbGxvd0hhbGY7XG5cbiAgICBsZXQgYWN0dWFsVmFsdWUgPSBpbmRleCArIDE7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gYWN0dWFsVmFsdWU7XG5cbiAgICBpZiAodGhpcy5oYXNIYWxmKSB7XG4gICAgICBhY3R1YWxWYWx1ZSAtPSAwLjU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZHdWYWx1ZSA9PT0gYWN0dWFsVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmR3QWxsb3dDbGVhcikge1xuICAgICAgICB0aGlzLmR3VmFsdWUgPSAwO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZHdWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHdWYWx1ZSA9IGFjdHVhbFZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmR3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGhvdmVyUmF0ZShlOiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyLCBpc0Z1bGw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNIYWxmOiBib29sZWFuID0gIWlzRnVsbCAmJiB0aGlzLmR3QWxsb3dIYWxmO1xuICAgIGlmICh0aGlzLmhvdmVyVmFsdWUgPT09IGluZGV4ICsgMSAmJiBpc0hhbGYgPT09IHRoaXMuaGFzSGFsZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcbiAgICB0aGlzLmR3T25Ib3ZlckNoYW5nZS5lbWl0KHRoaXMuaG92ZXJWYWx1ZSk7XG4gICAgdGhpcy5oYXNIYWxmID0gaXNIYWxmO1xuICB9XG5cbiAgbGVhdmVSYXRlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBvbGRWYWwgPSB0aGlzLmR3VmFsdWU7XG4gICAgaWYgKHRoaXMuZmxvYXRSZWcudGVzdChvbGRWYWwudG9TdHJpbmcoKSkpIHtcbiAgICAgIG9sZFZhbCArPSAwLjU7XG4gICAgICB0aGlzLmhhc0hhbGYgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBvbGRWYWw7XG4gIH1cblxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5kd09uRm9jdXMuZW1pdChlKTtcbiAgfVxuXG4gIG9uQmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmR3T25CbHVyLmVtaXQoZSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb2RlID0gZS5jb2RlO1xuICAgIGlmICgoY29kZSA9PT0gJ0Fycm93UmlnaHQnIHx8IGUua2V5Q29kZSA9PT0gMzkpICYmICh0aGlzLmR3VmFsdWUgPCB0aGlzLmR3Q291bnQpKSB7XG4gICAgICBpZiAodGhpcy5kd0FsbG93SGFsZikge1xuICAgICAgICB0aGlzLmR3VmFsdWUgKz0gMC41O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kd1ZhbHVlICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZHdWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gJ0Fycm93TGVmdCcgfHwgZS5rZXlDb2RlID09PSAzNykgJiYgKHRoaXMuZHdWYWx1ZSA+IDApKSB7XG4gICAgICBpZiAodGhpcy5kd0FsbG93SGFsZikge1xuICAgICAgICB0aGlzLmR3VmFsdWUgLT0gMC41O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kd1ZhbHVlIC09IDE7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZHdWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZHdPbktleURvd24uZW1pdChlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzZXRDbGFzc2VzKGk6IG51bWJlcik6IG9iamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFsgdGhpcy5pbm5lclByZWZpeENscyBdICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30tZnVsbGAgXSAgIDogKGkgKyAxIDwgdGhpcy5ob3ZlclZhbHVlKSB8fCAoIXRoaXMuaGFzSGFsZikgJiYgKGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1oYWxmYCBdICAgOiAodGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSksXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWFjdGl2ZWAgXSA6ICh0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30temVyb2AgXSAgIDogKGkgKyAxID4gdGhpcy5ob3ZlclZhbHVlKSxcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30tZm9jdXNlZGAgXTogKHRoaXMuaGFzSGFsZikgJiYgKGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpICYmIHRoaXMuaXNGb2N1c2VkXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXJBcnJheSgpOiB2b2lkIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIHRoaXMuc3RhckFycmF5ID0gW107XG4gICAgd2hpbGUgKGluZGV4IDwgdGhpcy5kd0NvdW50KSB7XG4gICAgICB0aGlzLnN0YXJBcnJheS5wdXNoKGluZGV4KyspO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlciB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLmR3VmFsdWUgPSB2YWx1ZSB8fCAwO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHdEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgfVxufVxuIl19
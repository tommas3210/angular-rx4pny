/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2, Self } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import calculateNodeHeight from '../core/util/calculate-node-height';
import { toBoolean } from '../core/util/convert';
/**
 * @record
 */
export function AutoSizeType() { }
function AutoSizeType_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
var DwInputDirective = /** @class */ (function () {
    function DwInputDirective(elementRef, renderer, ngModel, ngControl) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.ngModel = ngModel;
        this.ngControl = ngControl;
        this._size = 'default';
        this._disabled = false;
        this._autosize = false;
        this.isInit = false;
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwInputDirective.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
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
    Object.defineProperty(DwInputDirective.prototype, "dwAutosize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autosize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this._autosize = true;
            }
            else {
                this._autosize = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputDirective.prototype, "setLgClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputDirective.prototype, "setSmClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwInputDirective.prototype.textAreaOnChange = /**
     * @return {?}
     */
    function () {
        if (this.dwAutosize) {
            this.resizeTextArea();
        }
    };
    /**
     * @return {?}
     */
    DwInputDirective.prototype.resizeTextArea = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var textAreaRef = /** @type {?} */ (this.el);
        /** @type {?} */
        var maxRows = this.dwAutosize ? (/** @type {?} */ (this.dwAutosize)).maxRows || null : null;
        /** @type {?} */
        var minRows = this.dwAutosize ? (/** @type {?} */ (this.dwAutosize)).minRows || null : null;
        if ((this.previousValue === textAreaRef.value) && (this.previewsMaxRows === maxRows) && (this.previewsMinRows === minRows)) {
            return;
        }
        this.previousValue = textAreaRef.value;
        this.previewsMinRows = minRows;
        this.previewsMaxRows = maxRows;
        // eliminate jitter
        this.renderer.setStyle(textAreaRef, 'height', 'auto');
        /** @type {?} */
        var textAreaStyles = calculateNodeHeight(textAreaRef, false, minRows, maxRows);
        this.renderer.setStyle(textAreaRef, 'height', textAreaStyles.height + "px");
        this.renderer.setStyle(textAreaRef, 'overflowY', textAreaStyles.overflowY);
        this.renderer.setStyle(textAreaRef, 'minHeight', textAreaStyles.minHeight + "px");
        this.renderer.setStyle(textAreaRef, 'maxHeight', textAreaStyles.maxHeight + "px");
    };
    /**
     * @return {?}
     */
    DwInputDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.dwAutosize && this.isInit) {
            this.resizeTextArea();
        }
    };
    /**
     * @return {?}
     */
    DwInputDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        if (this.dwAutosize) {
            this.resizeTextArea();
        }
    };
    DwInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-input]',
                    host: {
                        '[class.ant-input]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    DwInputDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgModel, decorators: [{ type: Optional }] },
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
    ]; };
    DwInputDirective.propDecorators = {
        dwSize: [{ type: Input }],
        disabled: [{ type: Input }, { type: HostBinding, args: ["class.ant-input-disabled",] }],
        dwAutosize: [{ type: Input }],
        setLgClass: [{ type: HostBinding, args: ["class.ant-input-lg",] }],
        setSmClass: [{ type: HostBinding, args: ["class.ant-input-sm",] }],
        textAreaOnChange: [{ type: HostListener, args: ['input',] }]
    };
    return DwInputDirective;
}());
export { DwInputDirective };
function DwInputDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwInputDirective.prototype._size;
    /** @type {?} */
    DwInputDirective.prototype._disabled;
    /** @type {?} */
    DwInputDirective.prototype._autosize;
    /** @type {?} */
    DwInputDirective.prototype.el;
    /** @type {?} */
    DwInputDirective.prototype.previousValue;
    /** @type {?} */
    DwInputDirective.prototype.previewsMinRows;
    /** @type {?} */
    DwInputDirective.prototype.previewsMaxRows;
    /** @type {?} */
    DwInputDirective.prototype.isInit;
    /** @type {?} */
    DwInputDirective.prototype.elementRef;
    /** @type {?} */
    DwInputDirective.prototype.renderer;
    /** @type {?} */
    DwInputDirective.prototype.ngModel;
    /** @type {?} */
    DwInputDirective.prototype.ngControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJpbnB1dC9kdy1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFDUixTQUFTLEVBQ1QsSUFBSSxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxtQkFBbUIsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7OztJQStGL0MsMEJBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBc0IsT0FBZ0IsRUFBNkIsU0FBb0I7UUFBMUksZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBc0IsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUE2QixjQUFTLEdBQVQsU0FBUyxDQUFXO3FCQWpGOUksU0FBUzt5QkFDTCxLQUFLO3lCQUNtQixLQUFLO3NCQUtoQyxLQUFLO1FBMkVwQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDO0lBMUVELHNCQUNJLG9DQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBRUQsVUFBVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCOzs7T0FKQTtJQU1ELHNCQUVJLHNDQUFROzs7O1FBSVo7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO2dCQUN0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QyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtLQUNGOztnQkF2R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixJQUFJLEVBQU07d0JBQ1IsbUJBQW1CLEVBQUUsTUFBTTtxQkFDNUI7aUJBQ0Y7Ozs7Z0JBdkJDLFVBQVU7Z0JBS1YsU0FBUztnQkFHUyxPQUFPLHVCQWtHaUQsUUFBUTtnQkFsRzNFLFNBQVMsdUJBa0dnRyxRQUFRLFlBQUksSUFBSTs7O3lCQXhFL0gsS0FBSzsyQkFTTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLDBCQUEwQjs2QkFZdEMsS0FBSzs2QkFhTCxXQUFXLFNBQUMsb0JBQW9COzZCQUtoQyxXQUFXLFNBQUMsb0JBQW9CO21DQUtoQyxZQUFZLFNBQUMsT0FBTzs7MkJBbkZ2Qjs7U0E0QmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IGNhbGN1bGF0ZU5vZGVIZWlnaHQgZnJvbSAnLi4vY29yZS91dGlsL2NhbGN1bGF0ZS1ub2RlLWhlaWdodCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b1NpemVUeXBlIHtcbiAgbWluUm93cz86IG51bWJlcjtcbiAgbWF4Um93cz86IG51bWJlcjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2R3LWlucHV0XScsXG4gIGhvc3QgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtaW5wdXRdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2ssIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9zaXplID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9hdXRvc2l6ZTogYm9vbGVhbiB8IEF1dG9TaXplVHlwZSA9IGZhbHNlO1xuICBwcml2YXRlIGVsOiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudDtcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgcHJldmlld3NNaW5Sb3dzOiBudW1iZXI7XG4gIHByaXZhdGUgcHJldmlld3NNYXhSb3dzOiBudW1iZXI7XG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGR3U2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgc2V0IGR3U2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRgKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICYmIHRoaXMubmdDb250cm9sLmRpc2FibGVkICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0F1dG9zaXplKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgQXV0b1NpemVUeXBlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2F1dG9zaXplID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYXV0b3NpemUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdBdXRvc2l6ZSgpOiBzdHJpbmcgfCBib29sZWFuIHwgQXV0b1NpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b3NpemU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1sZ2ApXG4gIGdldCBzZXRMZ0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LXNtYClcbiAgZ2V0IHNldFNtQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdTaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICB0ZXh0QXJlYU9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3QXV0b3NpemUpIHtcbiAgICAgIHRoaXMucmVzaXplVGV4dEFyZWEoKTtcbiAgICB9XG4gIH1cblxuICByZXNpemVUZXh0QXJlYSgpOiB2b2lkIHtcbiAgICBjb25zdCB0ZXh0QXJlYVJlZiA9IHRoaXMuZWwgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBjb25zdCBtYXhSb3dzID0gdGhpcy5kd0F1dG9zaXplID8gKHRoaXMuZHdBdXRvc2l6ZSBhcyBBdXRvU2l6ZVR5cGUpLm1heFJvd3MgfHwgbnVsbCA6IG51bGw7XG4gICAgY29uc3QgbWluUm93cyA9IHRoaXMuZHdBdXRvc2l6ZSA/ICh0aGlzLmR3QXV0b3NpemUgYXMgQXV0b1NpemVUeXBlKS5taW5Sb3dzIHx8IG51bGwgOiBudWxsO1xuICAgIGlmICgodGhpcy5wcmV2aW91c1ZhbHVlID09PSB0ZXh0QXJlYVJlZi52YWx1ZSkgJiYgKHRoaXMucHJldmlld3NNYXhSb3dzID09PSBtYXhSb3dzKSAmJiAodGhpcy5wcmV2aWV3c01pblJvd3MgPT09IG1pblJvd3MpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRleHRBcmVhUmVmLnZhbHVlO1xuICAgIHRoaXMucHJldmlld3NNaW5Sb3dzID0gbWluUm93cztcbiAgICB0aGlzLnByZXZpZXdzTWF4Um93cyA9IG1heFJvd3M7XG4gICAgLy8gZWxpbWluYXRlIGppdHRlclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdoZWlnaHQnLCAnYXV0bycpO1xuXG4gICAgY29uc3QgdGV4dEFyZWFTdHlsZXMgPSBjYWxjdWxhdGVOb2RlSGVpZ2h0KHRleHRBcmVhUmVmLCBmYWxzZSwgbWluUm93cywgbWF4Um93cyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0ZXh0QXJlYVJlZiwgJ2hlaWdodCcsIGAke3RleHRBcmVhU3R5bGVzLmhlaWdodH1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdvdmVyZmxvd1knLCB0ZXh0QXJlYVN0eWxlcy5vdmVyZmxvd1kpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGV4dEFyZWFSZWYsICdtaW5IZWlnaHQnLCBgJHt0ZXh0QXJlYVN0eWxlcy5taW5IZWlnaHR9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRleHRBcmVhUmVmLCAnbWF4SGVpZ2h0JywgYCR7dGV4dEFyZWFTdHlsZXMubWF4SGVpZ2h0fXB4YCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsLCBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0F1dG9zaXplICYmIHRoaXMuaXNJbml0KSB7XG4gICAgICB0aGlzLnJlc2l6ZVRleHRBcmVhKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5kd0F1dG9zaXplKSB7XG4gICAgICB0aGlzLnJlc2l6ZVRleHRBcmVhKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { matchMedia } from '../core/polyfill/match-media';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
/**
 * @record
 */
export function BreakpointMap() { }
function BreakpointMap_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BreakpointMap.prototype.xs;
    /** @type {?|undefined} */
    BreakpointMap.prototype.sm;
    /** @type {?|undefined} */
    BreakpointMap.prototype.md;
    /** @type {?|undefined} */
    BreakpointMap.prototype.lg;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xl;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xxl;
}
/** @type {?} */
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
var DwRowComponent = /** @class */ (function () {
    function DwRowComponent(elementRef, renderer, dwUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this._align = 'top';
        this._justify = 'start';
        this.prefixCls = 'ant-row';
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwRowComponent.prototype, "dwType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRowComponent.prototype, "dwAlign", {
        get: /**
         * @return {?}
         */
        function () {
            return this._align;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._align = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRowComponent.prototype, "dwJustify", {
        get: /**
         * @return {?}
         */
        function () {
            return this._justify;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justify = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRowComponent.prototype, "dwGutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gutter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gutter = value;
            this.updateGutter();
            this.setStyle();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwRowComponent.prototype.setStyle = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
        this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    DwRowComponent.prototype.calculateGutter = /**
     * @return {?}
     */
    function () {
        if (typeof this.dwGutter !== 'object') {
            return this.dwGutter;
        }
        else if (this.breakPoint && this.dwGutter[this.breakPoint]) {
            return this.dwGutter[this.breakPoint];
        }
        else {
            return;
        }
    };
    /**
     * @return {?}
     */
    DwRowComponent.prototype.updateGutter = /**
     * @return {?}
     */
    function () {
        this.actualGutter = this.calculateGutter();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwRowComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.watchMedia();
    };
    /**
     * @return {?}
     */
    DwRowComponent.prototype.watchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(responsiveMap).map(function (screen) {
            /** @type {?} */
            var matchBelow = matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                _this.breakPoint = screen;
            }
        });
        this.updateGutter();
        this.setStyle();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    DwRowComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.dwType,
            _a[this.prefixCls + "-" + this.dwType] = this.dwType,
            _a[this.prefixCls + "-" + this.dwType + "-" + this.dwAlign] = this.dwType && this.dwAlign,
            _a[this.prefixCls + "-" + this.dwType + "-" + this.dwJustify] = this.dwType && this.dwJustify,
            _a);
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    DwRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.watchMedia();
    };
    DwRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-row',
                    preserveWhitespaces: false,
                    providers: [DwUpdateHostClassService],
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    DwRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: DwUpdateHostClassService }
    ]; };
    DwRowComponent.propDecorators = {
        dwType: [{ type: Input }],
        dwAlign: [{ type: Input }],
        dwJustify: [{ type: Input }],
        dwGutter: [{ type: Input }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return DwRowComponent;
}());
export { DwRowComponent };
function DwRowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRowComponent.prototype._gutter;
    /** @type {?} */
    DwRowComponent.prototype._type;
    /** @type {?} */
    DwRowComponent.prototype._align;
    /** @type {?} */
    DwRowComponent.prototype._justify;
    /** @type {?} */
    DwRowComponent.prototype.el;
    /** @type {?} */
    DwRowComponent.prototype.prefixCls;
    /** @type {?} */
    DwRowComponent.prototype.breakPoint;
    /** @type {?} */
    DwRowComponent.prototype.actualGutter;
    /** @type {?} */
    DwRowComponent.prototype.elementRef;
    /** @type {?} */
    DwRowComponent.prototype.renderer;
    /** @type {?} */
    DwRowComponent.prototype.dwUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZ3JpZC9kdy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J0RixJQUFNLGFBQWEsR0FBa0I7SUFDbkMsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxxQkFBcUI7Q0FDM0IsQ0FBQzs7SUF5R0Esd0JBQW1CLFVBQXNCLEVBQVMsUUFBbUIsRUFBUyx3QkFBa0Q7UUFBN0csZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO3NCQTlGdEcsS0FBSzt3QkFDRCxPQUFPO3lCQUVqQixTQUFTO1FBNEYzQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDO0lBekZELHNCQUNJLGtDQUFNOzs7O1FBS1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBUkQsVUFDVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7O09BQUE7SUFNRCxzQkFDSSxt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QUFJLElBQUksQ0FBQyxTQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUztnQkFDdkY7UUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDbEU7Ozs7SUFNRCxpQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COztnQkE5R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxRQUFRO29CQUM3QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDakQscUNBQThDO2lCQUMvQzs7OztnQkF0Q0MsVUFBVTtnQkFJVixTQUFTO2dCQUlGLHdCQUF3Qjs7O3lCQXlDOUIsS0FBSzswQkFVTCxLQUFLOzRCQVVMLEtBQUs7MkJBVUwsS0FBSztpQ0E4QkwsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7eUJBL0c3Qzs7U0F5Q2EsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1hdGNoTWVkaWEgfSBmcm9tICcuLi9jb3JlL3BvbHlmaWxsL21hdGNoLW1lZGlhJztcbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIER3SnVzdGlmeSA9ICdzdGFydCcgfCAnZW5kJyB8ICdjZW50ZXInIHwgJ3NwYWNlLWFyb3VuZCcgfCAnc3BhY2UtYmV0d2Vlbic7XG5leHBvcnQgdHlwZSBEd0FsaWduID0gJ3RvcCcgfCAnbWlkZGxlJyB8ICdib3R0b20nO1xuZXhwb3J0IHR5cGUgRHdUeXBlID0gJ2ZsZXgnIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEJyZWFrcG9pbnQgPSAneHhsJyB8ICd4bCcgfCAnbGcnIHwgJ21kJyB8ICdzbScgfCAneHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFrcG9pbnRNYXAge1xuICB4cz86IHN0cmluZztcbiAgc20/OiBzdHJpbmc7XG4gIG1kPzogc3RyaW5nO1xuICBsZz86IHN0cmluZztcbiAgeGw/OiBzdHJpbmc7XG4gIHh4bD86IHN0cmluZztcbn1cblxuY29uc3QgcmVzcG9uc2l2ZU1hcDogQnJlYWtwb2ludE1hcCA9IHtcbiAgeHMgOiAnKG1heC13aWR0aDogNTc1cHgpJyxcbiAgc20gOiAnKG1pbi13aWR0aDogNTc2cHgpJyxcbiAgbWQgOiAnKG1pbi13aWR0aDogNzY4cHgpJyxcbiAgbGcgOiAnKG1pbi13aWR0aDogOTkycHgpJyxcbiAgeGwgOiAnKG1pbi13aWR0aDogMTIwMHB4KScsXG4gIHh4bDogJyhtaW4td2lkdGg6IDE2MDBweCknXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXJvdycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIER3VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1yb3cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXIgfCBvYmplY3Q7XG4gIHByaXZhdGUgX3R5cGU6IER3VHlwZTtcbiAgcHJpdmF0ZSBfYWxpZ246IER3QWxpZ24gPSAndG9wJztcbiAgcHJpdmF0ZSBfanVzdGlmeTogRHdKdXN0aWZ5ID0gJ3N0YXJ0JztcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1yb3cnO1xuICBwcml2YXRlIGJyZWFrUG9pbnQ6IEJyZWFrcG9pbnQ7XG4gIGFjdHVhbEd1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1R5cGUodmFsdWU6IER3VHlwZSkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdUeXBlKCk6IER3VHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdBbGlnbih2YWx1ZTogRHdBbGlnbikge1xuICAgIHRoaXMuX2FsaWduID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3QWxpZ24oKTogRHdBbGlnbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWduO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SnVzdGlmeSh2YWx1ZTogRHdKdXN0aWZ5KSB7XG4gICAgdGhpcy5fanVzdGlmeSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0p1c3RpZnkoKTogRHdKdXN0aWZ5IHtcbiAgICByZXR1cm4gdGhpcy5fanVzdGlmeTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkd0d1dHRlcigpOiBudW1iZXIgfCBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLl9ndXR0ZXI7XG4gIH1cblxuICBzZXQgZHdHdXR0ZXIodmFsdWU6IG51bWJlciB8IG9iamVjdCkge1xuICAgIHRoaXMuX2d1dHRlciA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgc2V0U3R5bGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luLWxlZnQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luLXJpZ2h0JywgYC0ke3RoaXMuYWN0dWFsR3V0dGVyIC8gMn1weGApO1xuICB9XG5cbiAgY2FsY3VsYXRlR3V0dGVyKCk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmR3R3V0dGVyICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRoaXMuZHdHdXR0ZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJyZWFrUG9pbnQgJiYgdGhpcy5kd0d1dHRlclsgdGhpcy5icmVha1BvaW50IF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmR3R3V0dGVyWyB0aGlzLmJyZWFrUG9pbnQgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUd1dHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLmFjdHVhbEd1dHRlciA9IHRoaXMuY2FsY3VsYXRlR3V0dGVyKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyAnJGV2ZW50JyBdKVxuICBvbldpbmRvd1Jlc2l6ZShlOiBVSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy53YXRjaE1lZGlhKCk7XG4gIH1cblxuICB3YXRjaE1lZGlhKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHJlc3BvbnNpdmVNYXApLm1hcCgoc2NyZWVuOiBCcmVha3BvaW50KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gbWF0Y2hNZWRpYShyZXNwb25zaXZlTWFwWyBzY3JlZW4gXSkubWF0Y2hlcztcbiAgICAgIGlmIChtYXRjaEJlbG93KSB7XG4gICAgICAgIHRoaXMuYnJlYWtQb2ludCA9IHNjcmVlbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfWAgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogIXRoaXMuZHdUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3VHlwZX1gIF0gICAgICAgICAgICAgICAgICA6IHRoaXMuZHdUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3VHlwZX0tJHt0aGlzLmR3QWxpZ259YCBdICA6IHRoaXMuZHdUeXBlICYmIHRoaXMuZHdBbGlnbixcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5kd1R5cGV9LSR7dGhpcy5kd0p1c3RpZnl9YCBdOiB0aGlzLmR3VHlwZSAmJiB0aGlzLmR3SnVzdGlmeVxuICAgIH07XG4gICAgdGhpcy5kd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGR3VXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xuICB9XG59XG4iXX0=
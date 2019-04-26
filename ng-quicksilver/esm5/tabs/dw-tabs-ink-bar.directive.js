/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { reqAnimFrame } from '../core/polyfill/request-animation';
import { toBoolean } from '../core/util/convert';
var DwTabsInkBarDirective = /** @class */ (function () {
    function DwTabsInkBarDirective(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this._animated = false;
        this.dwPositionMode = 'horizontal';
    }
    Object.defineProperty(DwTabsInkBarDirective.prototype, "dwAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._animated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animated = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    DwTabsInkBarDirective.prototype.alignToElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        this.show();
        this.ngZone.runOutsideAngular(function () {
            reqAnimFrame(function () {
                /** when horizontal remove height style and add transform left **/
                if (_this.dwPositionMode === 'horizontal') {
                    _this.renderer.removeStyle(_this.elementRef.nativeElement, 'height');
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'transform', "translate3d(" + _this.getLeftPosition(element) + ", 0px, 0px)");
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'width', _this.getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transform top **/
                    /** when vertical remove width style and add transform top **/
                    _this.renderer.removeStyle(_this.elementRef.nativeElement, 'width');
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'transform', "translate3d(0px, " + _this.getTopPosition(element) + ", 0px)");
                    _this.renderer.setStyle(_this.elementRef.nativeElement, 'height', _this.getElementHeight(element));
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DwTabsInkBarDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'visible');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTabsInkBarDirective.prototype.setDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', value);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DwTabsInkBarDirective.prototype.getLeftPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DwTabsInkBarDirective.prototype.getElementWidth = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DwTabsInkBarDirective.prototype.getTopPosition = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetTop + 'px' : '0';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DwTabsInkBarDirective.prototype.getElementHeight = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return element ? element.offsetHeight + 'px' : '0';
    };
    DwTabsInkBarDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-tabs-ink-bar]',
                    host: {
                        '[class.ant-tabs-ink-bar]': 'true',
                        '[class.ant-tabs-ink-bar-animated]': 'dwAnimated',
                        '[class.ant-tabs-ink-bar-no-animated]': '!dwAnimated'
                    }
                },] }
    ];
    /** @nocollapse */
    DwTabsInkBarDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    DwTabsInkBarDirective.propDecorators = {
        dwAnimated: [{ type: Input }],
        dwPositionMode: [{ type: Input }]
    };
    return DwTabsInkBarDirective;
}());
export { DwTabsInkBarDirective };
function DwTabsInkBarDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTabsInkBarDirective.prototype._animated;
    /** @type {?} */
    DwTabsInkBarDirective.prototype.dwPositionMode;
    /** @type {?} */
    DwTabsInkBarDirective.prototype.renderer;
    /** @type {?} */
    DwTabsInkBarDirective.prototype.elementRef;
    /** @type {?} */
    DwTabsInkBarDirective.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFicy9kdy10YWJzLWluay1iYXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQTBCL0MsK0JBQW9CLFFBQW1CLEVBQ25CLFlBQ0E7UUFGQSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVO1FBQ1YsV0FBTSxHQUFOLE1BQU07eUJBZk4sS0FBSzs4QkFXb0IsWUFBWTtLQUt4RDtJQWRELHNCQUNJLDZDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7T0FBQTs7Ozs7SUFhRCw4Q0FBYzs7OztJQUFkLFVBQWUsT0FBb0I7UUFBbkMsaUJBc0JDO1FBckJDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVaLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDNUIsWUFBWSxDQUFDOztnQkFFWCxJQUFJLEtBQUksQ0FBQyxjQUFjLEtBQUssWUFBWSxFQUFFO29CQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDbkUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUMvRCxpQkFBZSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxnQkFBYSxDQUFDLENBQUM7b0JBQzdELEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFDM0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztxQkFBTTs7b0JBRUwsQUFEQSw4REFBOEQ7b0JBQzlELEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUNsRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQy9ELHNCQUFvQixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFRLENBQUMsQ0FBQztvQkFDNUQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUM1RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDbkM7YUFDRixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7OztJQUVELG9DQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNoRjs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekU7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixPQUFvQjtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNsRDs7Ozs7SUFFRCwrQ0FBZTs7OztJQUFmLFVBQWdCLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ25EOzs7OztJQUVELDhDQUFjOzs7O0lBQWQsVUFBZSxPQUFvQjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNqRDs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBb0I7UUFDbkMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDcEQ7O2dCQXpFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsSUFBSSxFQUFNO3dCQUNSLDBCQUEwQixFQUFjLE1BQU07d0JBQzlDLG1DQUFtQyxFQUFLLFlBQVk7d0JBQ3BELHNDQUFzQyxFQUFFLGFBQWE7cUJBQ3REO2lCQUNGOzs7O2dCQWQ4QyxTQUFTO2dCQUFwQyxVQUFVO2dCQUFTLE1BQU07Ozs2QkFrQjFDLEtBQUs7aUNBU0wsS0FBSzs7Z0NBM0JSOztTQWVhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL2NvcmUvcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd1RhYlBvc2l0aW9uTW9kZSB9IGZyb20gJy4vZHctdGFic2V0LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkdy10YWJzLWluay1iYXJdJyxcbiAgaG9zdCAgICA6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXJdJyAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtaW5rLWJhci1hbmltYXRlZF0nICAgOiAnZHdBbmltYXRlZCcsXG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyLW5vLWFuaW1hdGVkXSc6ICchZHdBbmltYXRlZCdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd1RhYnNJbmtCYXJEaXJlY3RpdmUge1xuICBwcml2YXRlIF9hbmltYXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3QW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGVkO1xuICB9XG5cbiAgQElucHV0KCkgZHdQb3NpdGlvbk1vZGU6IER3VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gIH1cblxuICBhbGlnblRvRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdygpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcbiAgICAgICAgLyoqIHdoZW4gaG9yaXpvbnRhbCByZW1vdmUgaGVpZ2h0IHN0eWxlIGFuZCBhZGQgdHJhbnNmb3JtIGxlZnQgKiovXG4gICAgICAgIGlmICh0aGlzLmR3UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgICBgdHJhbnNsYXRlM2QoJHt0aGlzLmdldExlZnRQb3NpdGlvbihlbGVtZW50KX0sIDBweCwgMHB4KWApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRXaWR0aChlbGVtZW50KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLyoqIHdoZW4gdmVydGljYWwgcmVtb3ZlIHdpZHRoIHN0eWxlIGFuZCBhZGQgdHJhbnNmb3JtIHRvcCAqKi9cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgIGB0cmFuc2xhdGUzZCgwcHgsICR7dGhpcy5nZXRUb3BQb3NpdGlvbihlbGVtZW50KX0sIDBweClgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JyxcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudEhlaWdodChlbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIH1cblxuICBzZXREaXNwbGF5KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldExlZnRQb3NpdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldExlZnQgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudFdpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0VG9wUG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnIDogJzAnO1xuICB9XG5cbiAgZ2V0RWxlbWVudEhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldEhlaWdodCArICdweCcgOiAnMCc7XG4gIH1cbn1cbiJdfQ==
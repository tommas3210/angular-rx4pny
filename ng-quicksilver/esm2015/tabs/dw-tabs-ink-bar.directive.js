/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone, Renderer2 } from '@angular/core';
import { reqAnimFrame } from '../core/polyfill/request-animation';
import { toBoolean } from '../core/util/convert';
export class DwTabsInkBarDirective {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(renderer, elementRef, ngZone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this._animated = false;
        this.dwPositionMode = 'horizontal';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAnimated(value) {
        this._animated = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAnimated() {
        return this._animated;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    alignToElement(element) {
        this.show();
        this.ngZone.runOutsideAngular(() => {
            reqAnimFrame(() => {
                /** when horizontal remove height style and add transform left **/
                if (this.dwPositionMode === 'horizontal') {
                    this.renderer.removeStyle(this.elementRef.nativeElement, 'height');
                    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${this.getLeftPosition(element)}, 0px, 0px)`);
                    this.renderer.setStyle(this.elementRef.nativeElement, 'width', this.getElementWidth(element));
                }
                else {
                    /** when vertical remove width style and add transform top **/
                    this.renderer.removeStyle(this.elementRef.nativeElement, 'width');
                    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(0px, ${this.getTopPosition(element)}, 0px)`);
                    this.renderer.setStyle(this.elementRef.nativeElement, 'height', this.getElementHeight(element));
                }
            });
        });
    }
    /**
     * @return {?}
     */
    show() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisplay(value) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', value);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getLeftPosition(element) {
        return element ? element.offsetLeft + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementWidth(element) {
        return element ? element.offsetWidth + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getTopPosition(element) {
        return element ? element.offsetTop + 'px' : '0';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getElementHeight(element) {
        return element ? element.offsetHeight + 'px' : '0';
    }
}
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
DwTabsInkBarDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: NgZone }
];
DwTabsInkBarDirective.propDecorators = {
    dwAnimated: [{ type: Input }],
    dwPositionMode: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFicy1pbmstYmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFicy9kdy10YWJzLWluay1iYXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBWWpELE1BQU07Ozs7OztJQWNKLFlBQW9CLFFBQW1CLEVBQ25CLFlBQ0E7UUFGQSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVO1FBQ1YsV0FBTSxHQUFOLE1BQU07eUJBZk4sS0FBSzs4QkFXb0IsWUFBWTtLQUt4RDs7Ozs7SUFkRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQVNELGNBQWMsQ0FBQyxPQUFvQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFWixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxZQUFZLENBQUMsR0FBRyxFQUFFOztnQkFFaEIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFlBQVksRUFBRTtvQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFDL0QsZUFBZSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNOztvQkFFTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUMvRCxvQkFBb0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2hGOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN6RTs7Ozs7SUFFRCxlQUFlLENBQUMsT0FBb0I7UUFDbEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7S0FDbEQ7Ozs7O0lBRUQsZUFBZSxDQUFDLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ25EOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFvQjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNqRDs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFvQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztLQUNwRDs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixJQUFJLEVBQU07b0JBQ1IsMEJBQTBCLEVBQWMsTUFBTTtvQkFDOUMsbUNBQW1DLEVBQUssWUFBWTtvQkFDcEQsc0NBQXNDLEVBQUUsYUFBYTtpQkFDdEQ7YUFDRjs7OztZQWQ4QyxTQUFTO1lBQXBDLFVBQVU7WUFBUyxNQUFNOzs7eUJBa0IxQyxLQUFLOzZCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ1pvbmUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9jb3JlL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICcuL2R3LXRhYnNldC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHctdGFicy1pbmstYmFyXScsXG4gIGhvc3QgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFicy1pbmstYmFyXScgICAgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC10YWJzLWluay1iYXItYW5pbWF0ZWRdJyAgIDogJ2R3QW5pbWF0ZWQnLFxuICAgICdbY2xhc3MuYW50LXRhYnMtaW5rLWJhci1uby1hbmltYXRlZF0nOiAnIWR3QW5pbWF0ZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdUYWJzSW5rQmFyRGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBfYW5pbWF0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdBbmltYXRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FuaW1hdGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRlZDtcbiAgfVxuXG4gIEBJbnB1dCgpIGR3UG9zaXRpb25Nb2RlOiBEd1RhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICB9XG5cbiAgYWxpZ25Ub0VsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNob3coKTtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8qKiB3aGVuIGhvcml6b250YWwgcmVtb3ZlIGhlaWdodCBzdHlsZSBhbmQgYWRkIHRyYW5zZm9ybSBsZWZ0ICoqL1xuICAgICAgICBpZiAodGhpcy5kd1Bvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgYHRyYW5zbGF0ZTNkKCR7dGhpcy5nZXRMZWZ0UG9zaXRpb24oZWxlbWVudCl9LCAwcHgsIDBweClgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLFxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50V2lkdGgoZWxlbWVudCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qKiB3aGVuIHZlcnRpY2FsIHJlbW92ZSB3aWR0aCBzdHlsZSBhbmQgYWRkIHRyYW5zZm9ybSB0b3AgKiovXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsXG4gICAgICAgICAgICBgdHJhbnNsYXRlM2QoMHB4LCAke3RoaXMuZ2V0VG9wUG9zaXRpb24oZWxlbWVudCl9LCAwcHgpYCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnRIZWlnaHQoZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICB9XG5cbiAgc2V0RGlzcGxheSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRMZWZ0UG9zaXRpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRMZWZ0ICsgJ3B4JyA6ICcwJztcbiAgfVxuXG4gIGdldEVsZW1lbnRXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JyA6ICcwJztcbiAgfVxuXG4gIGdldFRvcFBvc2l0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQub2Zmc2V0VG9wICsgJ3B4JyA6ICcwJztcbiAgfVxuXG4gIGdldEVsZW1lbnRIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnIDogJzAnO1xuICB9XG59XG4iXX0=
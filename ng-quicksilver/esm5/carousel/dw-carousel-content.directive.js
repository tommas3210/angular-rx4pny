/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
var DwCarouselContentDirective = /** @class */ (function () {
    function DwCarouselContentDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._active = false;
        this._width = 0;
        this._fadeMode = false;
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwCarouselContentDirective.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._width;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            this.renderer.setStyle(this.el, 'width', this.width + "px");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselContentDirective.prototype, "left", {
        get: /**
         * @return {?}
         */
        function () {
            return this._left;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._left = value;
            if (isNotNil(this.left)) {
                this.renderer.setStyle(this.el, 'left', this.left + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselContentDirective.prototype, "top", {
        get: /**
         * @return {?}
         */
        function () {
            return this._top;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._top = value;
            if (isNotNil(this.top)) {
                this.renderer.setStyle(this.el, 'top', this.top + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'top');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselContentDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = value;
            this.updateOpacity();
            if (this.isActive) {
                this.renderer.addClass(this.el, 'slick-active');
            }
            else {
                this.renderer.removeClass(this.el, 'slick-active');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselContentDirective.prototype, "fadeMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fadeMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fadeMode = value;
            if (this.fadeMode) {
                this.renderer.setStyle(this.el, 'position', 'relative');
            }
            else {
                this.renderer.removeStyle(this.el, 'position');
            }
            this.updateOpacity();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCarouselContentDirective.prototype.updateOpacity = /**
     * @return {?}
     */
    function () {
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'opacity', this.isActive ? 1 : 0);
        }
    };
    /**
     * @return {?}
     */
    DwCarouselContentDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'transition', 'opacity 500ms ease');
    };
    DwCarouselContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-carousel-content]',
                    host: {
                        '[class.slick-slide]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    DwCarouselContentDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return DwCarouselContentDirective;
}());
export { DwCarouselContentDirective };
function DwCarouselContentDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCarouselContentDirective.prototype._active;
    /** @type {?} */
    DwCarouselContentDirective.prototype._width;
    /** @type {?} */
    DwCarouselContentDirective.prototype._left;
    /** @type {?} */
    DwCarouselContentDirective.prototype._top;
    /** @type {?} */
    DwCarouselContentDirective.prototype._fadeMode;
    /** @type {?} */
    DwCarouselContentDirective.prototype.el;
    /** @type {?} */
    DwCarouselContentDirective.prototype.elementRef;
    /** @type {?} */
    DwCarouselContentDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNhcm91c2VsL2R3LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQXFGNUMsb0NBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7dUJBNUVyRCxLQUFLO3NCQUNFLENBQUM7eUJBR04sS0FBSztRQXlFdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6QztJQXZFRCxzQkFBSSw2Q0FBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVBELFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztTQUM3RDs7O09BQUE7SUFNRCxzQkFBSSw0Q0FBSTs7OztRQVNSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVhELFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFLLElBQUksQ0FBQyxJQUFJLE9BQUksQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUM7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSwyQ0FBRzs7OztRQVNQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCOzs7OztRQVhELFVBQVEsS0FBYTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFLLElBQUksQ0FBQyxHQUFHLE9BQUksQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0M7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSxnREFBUTs7OztRQVVaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVpELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDcEQ7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSxnREFBUTs7OztRQVVaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVpELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7OztPQUFBOzs7O0lBTUQsa0RBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7S0FDRjs7OztJQU1ELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7S0FDckU7O2dCQXpGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsSUFBSSxFQUFNO3dCQUNSLHFCQUFxQixFQUFFLE1BQU07cUJBQzlCO2lCQUNGOzs7O2dCQVpDLFVBQVU7Z0JBRVYsU0FBUzs7cUNBSlg7O1NBZWEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHctY2Fyb3VzZWwtY29udGVudF0nLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3Muc2xpY2stc2xpZGVdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XG4gIHByaXZhdGUgX2ZhZGVNb2RlID0gZmFsc2U7XG4gIGVsOiBIVE1MRWxlbWVudDtcblxuICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCBgJHt0aGlzLndpZHRofXB4YCk7XG4gIH1cblxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGg7XG4gIH1cblxuICBzZXQgbGVmdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGVmdCA9IHZhbHVlO1xuICAgIGlmIChpc05vdE5pbCh0aGlzLmxlZnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsZWZ0JywgYCR7dGhpcy5sZWZ0fXB4YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbCwgJ2xlZnQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZWZ0O1xuICB9XG5cbiAgc2V0IHRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG9wID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMudG9wKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAndG9wJywgYCR7dGhpcy50b3B9cHhgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAndG9wJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3A7XG4gIH1cblxuICBzZXQgaXNBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZU9wYWNpdHkoKTtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnc2xpY2stYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ3NsaWNrLWFjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgc2V0IGZhZGVNb2RlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmFkZU1vZGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5mYWRlTW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVPcGFjaXR5KCk7XG4gIH1cblxuICBnZXQgZmFkZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhZGVNb2RlO1xuICB9XG5cbiAgdXBkYXRlT3BhY2l0eSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mYWRlTW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnb3BhY2l0eScsIHRoaXMuaXNBY3RpdmUgPyAxIDogMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd0cmFuc2l0aW9uJywgJ29wYWNpdHkgNTAwbXMgZWFzZScpO1xuICB9XG5cbn1cbiJdfQ==
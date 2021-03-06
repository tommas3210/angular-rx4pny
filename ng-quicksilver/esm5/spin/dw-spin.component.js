/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isEmpty, isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var DwSpinComponent = /** @class */ (function () {
    function DwSpinComponent(elementRef, renderer, zone) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.zone = zone;
        this._delay = 0;
        this.isNested = false;
        this.baseSpinning$ = new BehaviorSubject(true);
        this.resultSpinning$ = this.baseSpinning$.asObservable().pipe(debounceTime(this.dwDelay));
        this.dwSize = 'default';
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwSpinComponent.prototype, "dwDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._delay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._delay = value;
                this.resultSpinning$ = this.baseSpinning$.asObservable().pipe(debounceTime(this.dwDelay));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSpinComponent.prototype, "dwTip", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tip;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSpinComponent.prototype, "dwSpinning", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.baseSpinning$.next(toBoolean(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwSpinComponent.prototype.checkNested = /**
     * @return {?}
     */
    function () {
        /** no way to detect empty https://github.com/angular/angular/issues/12530 **/
        if (!isEmpty(this.containerElement.nativeElement)) {
            this.isNested = true;
            this.renderer.setStyle(this.el, 'display', 'block');
        }
        else {
            this.isNested = false;
            this.renderer.removeStyle(this.el, 'display');
        }
    };
    /**
     * @return {?}
     */
    DwSpinComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkNested();
    };
    DwSpinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-spin',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-template #defaultIndicatorTemplate>\n  <span\n    class=\"ant-spin-dot\"\n    [class.ant-spin-dot-spin]=\"resultSpinning$|async\">\n    <i></i><i></i><i></i><i></i>\n  </span>\n</ng-template>\n<div [class.ant-spin-nested-loading]=\"isNested\">\n  <div [hidden]=\"!(resultSpinning$|async)\">\n    <div\n      class=\"ant-spin\"\n      [class.ant-spin-spinning]=\"resultSpinning$|async\"\n      [class.ant-spin-lg]=\"dwSize=='large'\"\n      [class.ant-spin-sm]=\"dwSize=='small'\"\n      [class.ant-spin-show-text]=\"dwTip\">\n      <ng-template [ngTemplateOutlet]=\"dwIndicator||defaultIndicatorTemplate\"></ng-template>\n      <div class=\"ant-spin-text\" *ngIf=\"dwTip\">{{ dwTip }}</div>\n    </div>\n  </div>\n  <div\n    #containerElement\n    class=\"ant-spin-container\"\n    [class.ant-spin-blur]=\"resultSpinning$|async\"\n    [hidden]=\"!isNested\"\n    (cdkObserveContent)=\"checkNested()\">\n    <ng-content></ng-content>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwSpinComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone }
    ]; };
    DwSpinComponent.propDecorators = {
        containerElement: [{ type: ViewChild, args: ['containerElement',] }],
        dwIndicator: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwDelay: [{ type: Input }],
        dwTip: [{ type: Input }],
        dwSpinning: [{ type: Input }]
    };
    return DwSpinComponent;
}());
export { DwSpinComponent };
function DwSpinComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSpinComponent.prototype._tip;
    /** @type {?} */
    DwSpinComponent.prototype._delay;
    /** @type {?} */
    DwSpinComponent.prototype.el;
    /** @type {?} */
    DwSpinComponent.prototype.isNested;
    /** @type {?} */
    DwSpinComponent.prototype.baseSpinning$;
    /** @type {?} */
    DwSpinComponent.prototype.resultSpinning$;
    /** @type {?} */
    DwSpinComponent.prototype.containerElement;
    /** @type {?} */
    DwSpinComponent.prototype.dwIndicator;
    /** @type {?} */
    DwSpinComponent.prototype.dwSize;
    /** @type {?} */
    DwSpinComponent.prototype.elementRef;
    /** @type {?} */
    DwSpinComponent.prototype.renderer;
    /** @type {?} */
    DwSpinComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNwaW4vZHctc3Bpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXdEL0MseUJBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBVSxJQUFZO1FBQXpFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtzQkE5QzVFLENBQUM7d0JBRVAsS0FBSzs2QkFDQSxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUM7K0JBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztzQkFHdkYsU0FBUztRQXdDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6QztJQXZDRCxzQkFDSSxvQ0FBTzs7OztRQU9YO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVZELFVBQ1ksS0FBYTtZQUN2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQzNGO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQ0ksa0NBQUs7Ozs7UUFJVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjs7Ozs7UUFQRCxVQUNVLEtBQWE7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7OztPQUFBO0lBTUQsc0JBQ0ksdUNBQVU7Ozs7O1FBRGQsVUFDZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNDOzs7T0FBQTs7OztJQUVELHFDQUFXOzs7SUFBWDs7UUFFRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMvQztLQUNGOzs7O0lBTUQseUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOztnQkE1REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsdThCQUErQztpQkFDaEQ7Ozs7Z0JBbEJDLFVBQVU7Z0JBR1YsU0FBUztnQkFEVCxNQUFNOzs7bUNBd0JMLFNBQVMsU0FBQyxrQkFBa0I7OEJBQzVCLEtBQUs7eUJBQ0wsS0FBSzswQkFFTCxLQUFLO3dCQVlMLEtBQUs7NkJBU0wsS0FBSzs7MEJBdkRSOztTQXVCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzRW1wdHksIGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zcGluJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc3Bpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdTcGluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX3RpcDogc3RyaW5nO1xuICBwcml2YXRlIF9kZWxheSA9IDA7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgaXNOZXN0ZWQgPSBmYWxzZTtcbiAgYmFzZVNwaW5uaW5nJCA9IG5ldyBCZWhhdmlvclN1YmplY3QodHJ1ZSk7XG4gIHJlc3VsdFNwaW5uaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuYmFzZVNwaW5uaW5nJC5hc09ic2VydmFibGUoKS5waXBlKGRlYm91bmNlVGltZSh0aGlzLmR3RGVsYXkpKTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyRWxlbWVudCcpIGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGR3SW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZHdTaXplID0gJ2RlZmF1bHQnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RlbGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9kZWxheSA9IHZhbHVlO1xuICAgICAgdGhpcy5yZXN1bHRTcGlubmluZyQgPSB0aGlzLmJhc2VTcGlubmluZyQuYXNPYnNlcnZhYmxlKCkucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kd0RlbGF5KSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3RGVsYXkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUaXAodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RpcCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3VGlwKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RpcDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NwaW5uaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5iYXNlU3Bpbm5pbmckLm5leHQodG9Cb29sZWFuKHZhbHVlKSk7XG4gIH1cblxuICBjaGVja05lc3RlZCgpOiB2b2lkIHtcbiAgICAvKiogbm8gd2F5IHRvIGRldGVjdCBlbXB0eSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMCAqKi9cbiAgICBpZiAoIWlzRW1wdHkodGhpcy5jb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLmlzTmVzdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc05lc3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnZGlzcGxheScpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrTmVzdGVkKCk7XG4gIH1cbn1cbiJdfQ==
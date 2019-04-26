/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, HostBinding, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { isNotNil } from '../core/util/check';
import { DwToolTipComponent } from './dw-tooltip.component';
var DwTooltipDirective = /** @class */ (function () {
    function DwTooltipDirective(elementRef, hostView, resolver, renderer, tooltip) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.tooltip = tooltip;
        this.unsubscribe$ = new Subject();
        // [NOTE] Here hard coded, and dwTitle used only under DwTooltipDirective currently.
        this.isTooltipOpen = false;
        this.isDynamicTooltip = false;
        this.factory = this.resolver.resolveComponentFactory(DwToolTipComponent);
        this.dwVisibleChange = new EventEmitter();
    }
    Object.defineProperty(DwTooltipDirective.prototype, "dwTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this._title = title;
            this.updateCompValue('dwTitle', title);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "setTitle", {
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            this.dwTitle = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._content;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._content = value;
            this.updateCompValue('dwContent', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwOverlayClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overlayClassName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlayClassName = value;
            this.updateCompValue('dwOverlayClassName', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwOverlayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._overlayStyle;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlayStyle = value;
            this.updateCompValue('dwOverlayStyle', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwMouseEnterDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mouseEnterDelay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mouseEnterDelay = value;
            this.updateCompValue('dwMouseEnterDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwMouseLeaveDelay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mouseEnterDelay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mouseLeaveDelay = value;
            this.updateCompValue('dwMouseLeaveDelay', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visible = value;
            this.updateCompValue('dwVisible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this.updateCompValue('dwTrigger', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "dwPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placement = value;
            this.updateCompValue('dwPlacement', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTooltipDirective.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isTooltipOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        this.tooltip.show();
        this.isTooltipOpen = true;
    };
    /**
     * @return {?}
     */
    DwTooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.tooltip.hide();
        this.isTooltipOpen = false;
    };
    /**
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    DwTooltipDirective.prototype.delayEnterLeave = /**
     * @param {?} isOrigin
     * @param {?} isEnter
     * @param {?=} delay
     * @return {?}
     */
    function (isOrigin, isEnter, delay) {
        var _this = this;
        if (delay === void 0) { delay = -1; }
        if (this.delayTimer) { // Clear timer during the delay time
            // Clear timer during the delay time
            window.clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
        else if (delay > 0) {
            this.delayTimer = window.setTimeout(function () {
                _this.delayTimer = null;
                isEnter ? _this.show() : _this.hide();
            }, delay * 1000);
        }
        else {
            isEnter && isOrigin ? this.show() : this.hide(); // [Compatible] The "isOrigin" is used due to the tooltip will not hide immediately (may caused by the fade-out animation)
        }
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    DwTooltipDirective.prototype.updateCompValue = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (this.isDynamicTooltip && isNotNil(value)) {
            this.tooltip[key] = value;
        }
    };
    /**
     * @return {?}
     */
    DwTooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support faster tooltip mode: <a dw-tooltip="xxx"></a>. [NOTE] Used only under DwTooltipDirective currently.
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            var properties = ['dwTitle', 'dwContent', 'dwOverlayClassName', 'dwOverlayStyle', 'dwMouseEnterDelay', 'dwMouseLeaveDelay', 'dwVisible', 'dwTrigger', 'dwPlacement'];
            properties.forEach(function (property) { return _this.updateCompValue(property, _this[property]); });
            this.tooltip.dwVisibleChange.pipe(takeUntil(this.unsubscribe$), distinctUntilChanged()).subscribe(function (data) {
                _this._visible = data;
                _this.dwVisibleChange.emit(data);
            });
        }
        this.tooltip.setOverlayOrigin(this);
    };
    /**
     * @return {?}
     */
    DwTooltipDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.tooltip.dwTrigger === 'hover') {
            /** @type {?} */
            var overlayElement_1 = void 0;
            this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', function () { return _this.delayEnterLeave(true, true, _this.tooltip.dwMouseEnterDelay); });
            this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', function () {
                _this.delayEnterLeave(true, false, _this.tooltip.dwMouseLeaveDelay);
                if (_this.tooltip.overlay.overlayRef && !overlayElement_1) { // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    // NOTE: we bind events under "mouseleave" due to the overlayRef is only created after the overlay was completely shown up
                    overlayElement_1 = _this.tooltip.overlay.overlayRef.overlayElement;
                    _this.renderer.listen(overlayElement_1, 'mouseenter', function () { return _this.delayEnterLeave(false, true); });
                    _this.renderer.listen(overlayElement_1, 'mouseleave', function () { return _this.delayEnterLeave(false, false); });
                }
            });
        }
        else if (this.tooltip.dwTrigger === 'focus') {
            this.renderer.listen(this.elementRef.nativeElement, 'focus', function () { return _this.show(); });
            this.renderer.listen(this.elementRef.nativeElement, 'blur', function () { return _this.hide(); });
        }
        else if (this.tooltip.dwTrigger === 'click') {
            this.renderer.listen(this.elementRef.nativeElement, 'click', function (e) {
                e.preventDefault();
                _this.show();
            });
        }
    };
    /**
     * @return {?}
     */
    DwTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    DwTooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-tooltip]'
                },] }
    ];
    /** @nocollapse */
    DwTooltipDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: DwToolTipComponent, decorators: [{ type: Optional }] }
    ]; };
    DwTooltipDirective.propDecorators = {
        dwVisibleChange: [{ type: Output }],
        dwTitle: [{ type: Input, args: ['dw-tooltip',] }],
        setTitle: [{ type: Input, args: ['dwTitle',] }],
        dwContent: [{ type: Input }],
        dwOverlayClassName: [{ type: Input }],
        dwOverlayStyle: [{ type: Input }],
        dwMouseEnterDelay: [{ type: Input }],
        dwMouseLeaveDelay: [{ type: Input }],
        dwVisible: [{ type: Input }],
        dwTrigger: [{ type: Input }],
        dwPlacement: [{ type: Input }],
        isOpen: [{ type: HostBinding, args: ['class.ant-tooltip-open',] }]
    };
    return DwTooltipDirective;
}());
export { DwTooltipDirective };
function DwTooltipDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTooltipDirective.prototype.unsubscribe$;
    /** @type {?} */
    DwTooltipDirective.prototype.isTooltipOpen;
    /** @type {?} */
    DwTooltipDirective.prototype.isDynamicTooltip;
    /** @type {?} */
    DwTooltipDirective.prototype.delayTimer;
    /** @type {?} */
    DwTooltipDirective.prototype._title;
    /** @type {?} */
    DwTooltipDirective.prototype._content;
    /** @type {?} */
    DwTooltipDirective.prototype._overlayClassName;
    /** @type {?} */
    DwTooltipDirective.prototype._overlayStyle;
    /** @type {?} */
    DwTooltipDirective.prototype._mouseEnterDelay;
    /** @type {?} */
    DwTooltipDirective.prototype._mouseLeaveDelay;
    /** @type {?} */
    DwTooltipDirective.prototype._visible;
    /** @type {?} */
    DwTooltipDirective.prototype._trigger;
    /** @type {?} */
    DwTooltipDirective.prototype._placement;
    /** @type {?} */
    DwTooltipDirective.prototype.factory;
    /** @type {?} */
    DwTooltipDirective.prototype.dwVisibleChange;
    /** @type {?} */
    DwTooltipDirective.prototype.elementRef;
    /** @type {?} */
    DwTooltipDirective.prototype.hostView;
    /** @type {?} */
    DwTooltipDirective.prototype.resolver;
    /** @type {?} */
    DwTooltipDirective.prototype.renderer;
    /** @type {?} */
    DwTooltipDirective.prototype.tooltip;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRvb2x0aXAvZHctdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFFVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQTJKMUQsNEJBQ1MsWUFDQSxVQUNBLFVBQ0EsVUFDWSxPQUEyQjtRQUp2QyxlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTtRQUNJLFlBQU8sR0FBUCxPQUFPLENBQW9COzRCQTFKekIsSUFBSSxPQUFPLEVBQVE7OzZCQUdqQixLQUFLO2dDQUNYLEtBQUs7dUJBV3dCLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUM7K0JBQzdFLElBQUksWUFBWSxFQUFXO0tBMkl0RDtJQXpJRCxzQkFDSSx1Q0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEM7OztPQUFBO0lBTUQsc0JBQ0ksd0NBQVE7Ozs7O1FBRFosVUFDYSxLQUFpQztZQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0Qjs7O09BQUE7SUFFRCxzQkFDSSx5Q0FBUzs7OztRQUtiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVJELFVBQ2MsS0FBaUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUM7OztPQUFBO0lBTUQsc0JBQ0ksa0RBQWtCOzs7O1FBS3RCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7Ozs7O1FBUkQsVUFDdUIsS0FBYTtZQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkQ7OztPQUFBO0lBTUQsc0JBQ0ksOENBQWM7Ozs7UUFLbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7Ozs7O1FBUkQsVUFDbUIsS0FBa0M7WUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQzs7O09BQUE7SUFNRCxzQkFDSSxpREFBaUI7Ozs7UUFLckI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5Qjs7Ozs7UUFSRCxVQUNzQixLQUFhO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsRDs7O09BQUE7SUFNRCxzQkFDSSxpREFBaUI7Ozs7UUFLckI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5Qjs7Ozs7UUFSRCxVQUNzQixLQUFhO1lBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsRDs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBUzs7OztRQUtiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVJELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBUzs7OztRQUtiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVJELFVBQ2MsS0FBYTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7O09BQUE7SUFNRCxzQkFDSSwyQ0FBVzs7OztRQUtmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVJELFVBQ2dCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7OztPQUFBO0lBTUQsc0JBQ0ksc0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjs7O09BQUE7Ozs7SUFFTyxpQ0FBSTs7OztRQUNWLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Ozs7O0lBR3BCLGlDQUFJOzs7O1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7SUFHckIsNENBQWU7Ozs7OztjQUFDLFFBQWlCLEVBQUUsT0FBZ0IsRUFBRSxLQUFrQjs7UUFBbEIsc0JBQUEsRUFBQSxTQUFpQixDQUFDO1FBQzdFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLG9DQUFvQzs7WUFDekQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUNsQyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakQ7O0lBR0gsa0NBQWtDOzs7Ozs7SUFDbEMsNENBQWU7Ozs7O0lBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQVU7UUFDckMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFFLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0tBQ0Y7Ozs7SUFVRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFnQkM7O1FBZEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O1lBQ2pCLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDOztZQUV6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1SCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDOztZQUM3QixJQUFNLFVBQVUsR0FBRyxDQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUUsQ0FBQztZQUN6SyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFFLFFBQVEsQ0FBRSxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDcEcsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELDRDQUFlOzs7SUFBZjtRQUFBLGlCQXFCQztRQXBCQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTs7WUFDdEMsSUFBSSxnQkFBYyxVQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDO1lBQzFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRTtnQkFDaEUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxnQkFBYyxFQUFFLEVBQUUsMEhBQTBIOztvQkFDbEwsZ0JBQWMsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO29CQUNoRSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBYyxFQUFFLFlBQVksRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztvQkFDNUYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWMsRUFBRSxZQUFZLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7aUJBQzlGO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztTQUNoRjthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxVQUFDLENBQUM7Z0JBQzdELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7Z0JBN01GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBckJDLFVBQVU7Z0JBVVYsZ0JBQWdCO2dCQVpoQix3QkFBd0I7Z0JBVXhCLFNBQVM7Z0JBU0Ysa0JBQWtCLHVCQWdLdEIsUUFBUTs7O2tDQTFJVixNQUFNOzBCQUVOLEtBQUssU0FBQyxZQUFZOzJCQVVsQixLQUFLLFNBQUMsU0FBUzs0QkFLZixLQUFLO3FDQVVMLEtBQUs7aUNBVUwsS0FBSztvQ0FVTCxLQUFLO29DQVVMLEtBQUs7NEJBVUwsS0FBSzs0QkFVTCxLQUFLOzhCQVVMLEtBQUs7eUJBVUwsV0FBVyxTQUFDLHdCQUF3Qjs7NkJBN0l2Qzs7U0EyQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgRHdUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10b29sdGlwLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkdy10b29sdGlwXSdcbn0pXG5leHBvcnQgY2xhc3MgRHdUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gW05PVEVdIEhlcmUgaGFyZCBjb2RlZCwgYW5kIGR3VGl0bGUgdXNlZCBvbmx5IHVuZGVyIER3VG9vbHRpcERpcmVjdGl2ZSBjdXJyZW50bHkuXG4gIGlzVG9vbHRpcE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNEeW5hbWljVG9vbHRpcCA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIGN1cnJlbnQgdG9vbHRpcCBpcyBkeW5hbWljIGNyZWF0ZWRcbiAgZGVsYXlUaW1lcjsgLy8gVGltZXIgZm9yIGRlbGF5IGVudGVyL2xlYXZlXG4gIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIF9jb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgX292ZXJsYXlDbGFzc05hbWU6IHN0cmluZztcbiAgX292ZXJsYXlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBfbW91c2VFbnRlckRlbGF5OiBudW1iZXI7XG4gIF9tb3VzZUxlYXZlRGVsYXk6IG51bWJlcjtcbiAgX3Zpc2libGU6IGJvb2xlYW47XG4gIF90cmlnZ2VyOiBzdHJpbmc7XG4gIF9wbGFjZW1lbnQ6IHN0cmluZztcbiAgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxEd1Rvb2xUaXBDb21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShEd1Rvb2xUaXBDb21wb25lbnQpO1xuICBAT3V0cHV0KCkgZHdWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgnZHctdG9vbHRpcCcpXG4gIHNldCBkd1RpdGxlKHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ2R3VGl0bGUnLCB0aXRsZSk7XG4gIH1cblxuICBnZXQgZHdUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KCdkd1RpdGxlJylcbiAgc2V0IHNldFRpdGxlKHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuZHdUaXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLl9jb250ZW50ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDb21wVmFsdWUoJ2R3Q29udGVudCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0NvbnRlbnQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3T3ZlcmxheUNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb3ZlcmxheUNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd092ZXJsYXlDbGFzc05hbWUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdPdmVybGF5Q2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlDbGFzc05hbWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdPdmVybGF5U3R5bGUodmFsdWU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX292ZXJsYXlTdHlsZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd092ZXJsYXlTdHlsZScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd092ZXJsYXlTdHlsZSgpOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5U3R5bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdNb3VzZUVudGVyRGVsYXkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21vdXNlRW50ZXJEZWxheSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd01vdXNlRW50ZXJEZWxheScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd01vdXNlRW50ZXJEZWxheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tb3VzZUVudGVyRGVsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdNb3VzZUxlYXZlRGVsYXkodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX21vdXNlTGVhdmVEZWxheSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd01vdXNlTGVhdmVEZWxheScsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd01vdXNlTGVhdmVEZWxheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tb3VzZUVudGVyRGVsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd1Zpc2libGUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHJpZ2dlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd1RyaWdnZXInLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdUcmlnZ2VyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdQbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlbWVudCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd1BsYWNlbWVudCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1BsYWNlbWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZW1lbnQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC10b29sdGlwLW9wZW4nKVxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzVG9vbHRpcE9wZW47XG4gIH1cblxuICBwcml2YXRlIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy50b29sdGlwLnNob3coKTtcbiAgICB0aGlzLmlzVG9vbHRpcE9wZW4gPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XG4gICAgdGhpcy5pc1Rvb2x0aXBPcGVuID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGRlbGF5RW50ZXJMZWF2ZShpc09yaWdpbjogYm9vbGVhbiwgaXNFbnRlcjogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IC0xKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikgeyAvLyBDbGVhciB0aW1lciBkdXJpbmcgdGhlIGRlbGF5IHRpbWVcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkZWxheSA+IDApIHtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICAgICAgaXNFbnRlciA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG4gICAgICB9LCBkZWxheSAqIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0VudGVyICYmIGlzT3JpZ2luID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTsgLy8gW0NvbXBhdGlibGVdIFRoZSBcImlzT3JpZ2luXCIgaXMgdXNlZCBkdWUgdG8gdGhlIHRvb2x0aXAgd2lsbCBub3QgaGlkZSBpbW1lZGlhdGVseSAobWF5IGNhdXNlZCBieSB0aGUgZmFkZS1vdXQgYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlQ29tcFZhbHVlKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEeW5hbWljVG9vbHRpcCAmJiBpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMudG9vbHRpcFsga2V5IF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHVibGljIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHRvb2x0aXA6IER3VG9vbFRpcENvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gU3VwcG9ydCBmYXN0ZXIgdG9vbHRpcCBtb2RlOiA8YSBkdy10b29sdGlwPVwieHh4XCI+PC9hPi4gW05PVEVdIFVzZWQgb25seSB1bmRlciBEd1Rvb2x0aXBEaXJlY3RpdmUgY3VycmVudGx5LlxuICAgIGlmICghdGhpcy50b29sdGlwKSB7XG4gICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5mYWN0b3J5KTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXBDb21wb25lbnQuaW5zdGFuY2U7XG4gICAgICAvLyBSZW1vdmUgZWxlbWVudCB3aGVuIHVzZSBkaXJlY3RpdmUgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzE5NjdcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdG9vbHRpcENvbXBvbmVudC5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMuaXNEeW5hbWljVG9vbHRpcCA9IHRydWU7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gWyAnZHdUaXRsZScsICdkd0NvbnRlbnQnLCAnZHdPdmVybGF5Q2xhc3NOYW1lJywgJ2R3T3ZlcmxheVN0eWxlJywgJ2R3TW91c2VFbnRlckRlbGF5JywgJ2R3TW91c2VMZWF2ZURlbGF5JywgJ2R3VmlzaWJsZScsICdkd1RyaWdnZXInLCAnZHdQbGFjZW1lbnQnIF07XG4gICAgICBwcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4gdGhpcy51cGRhdGVDb21wVmFsdWUocHJvcGVydHksIHRoaXNbIHByb3BlcnR5IF0pKTtcbiAgICAgIHRoaXMudG9vbHRpcC5kd1Zpc2libGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSBkYXRhO1xuICAgICAgICB0aGlzLmR3VmlzaWJsZUNoYW5nZS5lbWl0KGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXAuZHdUcmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICBsZXQgb3ZlcmxheUVsZW1lbnQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB0aGlzLmRlbGF5RW50ZXJMZWF2ZSh0cnVlLCB0cnVlLCB0aGlzLnRvb2x0aXAuZHdNb3VzZUVudGVyRGVsYXkpKTtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxheUVudGVyTGVhdmUodHJ1ZSwgZmFsc2UsIHRoaXMudG9vbHRpcC5kd01vdXNlTGVhdmVEZWxheSk7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmICYmICFvdmVybGF5RWxlbWVudCkgeyAvLyBOT1RFOiB3ZSBiaW5kIGV2ZW50cyB1bmRlciBcIm1vdXNlbGVhdmVcIiBkdWUgdG8gdGhlIG92ZXJsYXlSZWYgaXMgb25seSBjcmVhdGVkIGFmdGVyIHRoZSBvdmVybGF5IHdhcyBjb21wbGV0ZWx5IHNob3duIHVwXG4gICAgICAgICAgb3ZlcmxheUVsZW1lbnQgPSB0aGlzLnRvb2x0aXAub3ZlcmxheS5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50O1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKG92ZXJsYXlFbGVtZW50LCAnbW91c2VlbnRlcicsICgpID0+IHRoaXMuZGVsYXlFbnRlckxlYXZlKGZhbHNlLCB0cnVlKSk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4ob3ZlcmxheUVsZW1lbnQsICdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5kZWxheUVudGVyTGVhdmUoZmFsc2UsIGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy50b29sdGlwLmR3VHJpZ2dlciA9PT0gJ2ZvY3VzJykge1xuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmb2N1cycsICgpID0+IHRoaXMuc2hvdygpKTtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYmx1cicsICgpID0+IHRoaXMuaGlkZSgpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudG9vbHRpcC5kd1RyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19
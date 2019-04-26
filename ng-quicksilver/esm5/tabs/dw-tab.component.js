/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwTabSetComponent } from './dw-tabset.component';
var DwTabComponent = /** @class */ (function () {
    function DwTabComponent(dwTabSetComponent) {
        this.dwTabSetComponent = dwTabSetComponent;
        this._disabled = false;
        this.position = null;
        this.origin = null;
        this.dwClick = new EventEmitter();
        this.dwSelect = new EventEmitter();
        this.dwDeselect = new EventEmitter();
    }
    Object.defineProperty(DwTabComponent.prototype, "dwDisabled", {
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
    Object.defineProperty(DwTabComponent.prototype, "dwTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dwTabSetComponent.addTab(this);
    };
    /**
     * @return {?}
     */
    DwTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dwTabSetComponent.removeTab(this);
    };
    DwTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-tab',
                    preserveWhitespaces: false,
                    template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    host: {
                        '[class.ant-tabs-tabpane]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    DwTabComponent.ctorParameters = function () { return [
        { type: DwTabSetComponent }
    ]; };
    DwTabComponent.propDecorators = {
        dwDisabled: [{ type: Input }],
        dwClick: [{ type: Output }],
        dwSelect: [{ type: Output }],
        dwDeselect: [{ type: Output }],
        content: [{ type: ViewChild, args: [TemplateRef,] }],
        dwTitle: [{ type: Input }]
    };
    return DwTabComponent;
}());
export { DwTabComponent };
function DwTabComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTabComponent.prototype._title;
    /** @type {?} */
    DwTabComponent.prototype._disabled;
    /** @type {?} */
    DwTabComponent.prototype.position;
    /** @type {?} */
    DwTabComponent.prototype.origin;
    /** @type {?} */
    DwTabComponent.prototype.isTitleString;
    /** @type {?} */
    DwTabComponent.prototype.dwClick;
    /** @type {?} */
    DwTabComponent.prototype.dwSelect;
    /** @type {?} */
    DwTabComponent.prototype.dwDeselect;
    /** @type {?} */
    DwTabComponent.prototype.content;
    /** @type {?} */
    DwTabComponent.prototype.dwTabSetComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFicy9kdy10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQXlDeEQsd0JBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO3lCQTdCcEMsS0FBSzt3QkFDQyxJQUFJO3NCQUNOLElBQUk7dUJBWVIsSUFBSSxZQUFZLEVBQVE7d0JBQ3ZCLElBQUksWUFBWSxFQUFROzBCQUN0QixJQUFJLFlBQVksRUFBUTtLQWM5QztJQXpCRCxzQkFDSSxzQ0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFXRCxzQkFDSSxtQ0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCOzs7T0FBQTs7OztJQVNELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxRQUFRO29CQUM3QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixzRUFBOEM7b0JBQzlDLElBQUksRUFBaUI7d0JBQ25CLDBCQUEwQixFQUFFLE1BQU07cUJBQ25DO2lCQUNGOzs7O2dCQVRRLGlCQUFpQjs7OzZCQWlCdkIsS0FBSzswQkFTTCxNQUFNOzJCQUNOLE1BQU07NkJBQ04sTUFBTTswQkFDTixTQUFTLFNBQUMsV0FBVzswQkFFckIsS0FBSzs7eUJBNUNSOztTQXVCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3VGFiU2V0Q29tcG9uZW50IH0gZnJvbSAnLi9kdy10YWJzZXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy10YWInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGFiLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRhYnMtdGFicGFuZV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd1RhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwb3NpdGlvbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIG9yaWdpbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBAT3V0cHV0KCkgZHdDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGR3U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdEZXNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHdUYWJTZXRDb21wb25lbnQ6IER3VGFiU2V0Q29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmR3VGFiU2V0Q29tcG9uZW50LmFkZFRhYih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZHdUYWJTZXRDb21wb25lbnQucmVtb3ZlVGFiKHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==
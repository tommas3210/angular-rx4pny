/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DwDropDownComponent } from './dw-dropdown.component';
import { DwDropDownDirective } from './dw-dropdown.directive';
var DwDropDownButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwDropDownButtonComponent, _super);
    function DwDropDownButtonComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dwSize = 'default';
        _this.dwType = 'default';
        _this.dwClick = new EventEmitter();
        _this.onVisibleChange = function (visible) {
            if (_this.dwDisabled) {
                return;
            }
            if (visible) {
                _this.setTriggerWidth();
            }
            if (_this.dwVisible !== visible) {
                _this.dwVisible = visible;
                _this.dwVisibleChange.emit(_this.dwVisible);
            }
            _this.changeDetector.markForCheck();
        };
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    DwDropDownButtonComponent.prototype.ngAfterViewInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.$visibleChange);
    };
    DwDropDownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-dropdown-button',
                    preserveWhitespaces: false,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<div class=\"ant-btn-group ant-dropdown-button\" dw-dropdown>\n  <button\n    type=\"button\"\n    dw-button\n    [disabled]=\"dwDisabled\"\n    [dwType]=\"dwType\"\n    [dwSize]=\"dwSize\"\n    (click)=\"dwClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button\n    dw-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [dwType]=\"dwType\"\n    [dwSize]=\"dwSize\"\n    [disabled]=\"dwDisabled\"\n    (click)=\"onClickEvent()\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\">\n    <i class=\"anticon anticon-ellipsis\"></i>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"dwOrigin\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"dwVisible\">\n  <div\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+dwPlacement}}\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[dw-menu]\"></ng-content>\n  </div>\n</ng-template>",
                    styles: ["\n    :host {\n      position: relative;\n      display: inline-block;\n    }\n\n    .ant-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  "]
                }] }
    ];
    DwDropDownButtonComponent.propDecorators = {
        dwSize: [{ type: Input }],
        dwType: [{ type: Input }],
        content: [{ type: ViewChild, args: ['content',] }],
        dwClick: [{ type: Output }],
        dwOrigin: [{ type: ViewChild, args: [DwDropDownDirective,] }]
    };
    return DwDropDownButtonComponent;
}(DwDropDownComponent));
export { DwDropDownButtonComponent };
function DwDropDownButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwSize;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwType;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.content;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwClick;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwOrigin;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.onVisibleChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vZHctZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQTBCZixxREFBbUI7Ozt1QkFDOUMsU0FBUzt1QkFDVCxTQUFTO3dCQUVQLElBQUksWUFBWSxFQUFjO2dDQUdoQyxVQUFDLE9BQWdCO1lBQ2pDLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtnQkFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztZQUNELEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7OztJQUVELGlDQUFpQzs7Ozs7SUFDakMsbURBQWU7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxvQkFBb0I7b0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBVzt3QkFDbkIsaUJBQWlCO3FCQUNsQjtvQkFDRCwwMENBQTBEOzZCQUNuQyxxUEFjdEI7aUJBQ0Y7Ozt5QkFHRSxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsU0FBUyxTQUFDLFNBQVM7MEJBQ25CLE1BQU07MkJBQ04sU0FBUyxTQUFDLG1CQUFtQjs7b0NBN0NoQztFQXdDK0MsbUJBQW1CO1NBQXJELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBEd0Ryb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vZHctZHJvcGRvd24uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1kcm9wZG93bi1idXR0b24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWRyb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIDpob3N0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuYW50LWRyb3Bkb3duIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gIGAgXVxufSlcblxuZXhwb3J0IGNsYXNzIER3RHJvcERvd25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBEd0Ryb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkd1NpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGR3VHlwZSA9ICdkZWZhdWx0JztcbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ7XG4gIEBPdXRwdXQoKSBkd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAVmlld0NoaWxkKER3RHJvcERvd25EaXJlY3RpdmUpIGR3T3JpZ2luO1xuXG4gIG9uVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHdWaXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLmR3VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLmR3VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMuZHdWaXNpYmxlKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiByZXdyaXRlIGFmdGVyVmlld0luaXQgaG9vayAqL1xuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFN1YnNjcmliZSh0aGlzLiR2aXNpYmxlQ2hhbmdlKTtcbiAgfVxufVxuIl19
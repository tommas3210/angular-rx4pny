/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { toBoolean } from '../core/util/convert';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
var DwPopconfirmComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwPopconfirmComponent, _super);
    function DwPopconfirmComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this._condition = false;
        _this._prefix = 'ant-popover-placement';
        _this._trigger = 'click';
        _this._hasBackdrop = true;
        _this.dwOnCancel = new EventEmitter();
        _this.dwOnConfirm = new EventEmitter();
        _this.dwOkType = 'primary';
        return _this;
    }
    Object.defineProperty(DwPopconfirmComponent.prototype, "dwCondition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._condition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._condition = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwPopconfirmComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.dwCondition) {
            this.dwVisible = true;
        }
        else {
            this.onConfirm();
        }
    };
    /**
     * @return {?}
     */
    DwPopconfirmComponent.prototype.onCancel = /**
     * @return {?}
     */
    function () {
        this.dwOnCancel.emit();
        this.dwVisible = false;
    };
    /**
     * @return {?}
     */
    DwPopconfirmComponent.prototype.onConfirm = /**
     * @return {?}
     */
    function () {
        this.dwOnConfirm.emit();
        this.dwVisible = false;
    };
    DwPopconfirmComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-popconfirm',
                    preserveWhitespaces: false,
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"dwOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div>\n          <div class=\"ant-popover-inner-content\">\n            <div class=\"ant-popover-message\">\n              <ng-container *ngIf=\"isTitleString; else titleTemplate\">\n                <i class=\"anticon anticon-exclamation-circle\"></i>\n                <div class=\"ant-popover-message-title\">{{ dwTitle }}</div>\n              </ng-container>\n              <ng-template #titleTemplate>\n                <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n              </ng-template>\n            </div>\n            <div class=\"ant-popover-buttons\">\n              <button dw-button [dwSize]=\"'small'\" (click)=\"onCancel()\">\n                <ng-container *ngIf=\"dwCancelText\">{{ dwCancelText }}</ng-container>\n                <ng-container *ngIf=\"!dwCancelText\">{{ 'Modal.cancelText' | dwI18n }}</ng-container>\n              </button>\n              <button dw-button [dwSize]=\"'small'\" [dwType]=\"dwOkType\" (click)=\"onConfirm()\">\n                <ng-container *ngIf=\"dwOkText\">{{ dwOkText }}</ng-container>\n                <ng-container *ngIf=\"!dwOkText\">{{ 'Modal.okText' | dwI18n }}</ng-container>\n              </button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    styles: ["\n    .ant-popover {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DwPopconfirmComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    DwPopconfirmComponent.propDecorators = {
        dwOnCancel: [{ type: Output }],
        dwOnConfirm: [{ type: Output }],
        dwOkText: [{ type: Input }],
        dwOkType: [{ type: Input }],
        dwCancelText: [{ type: Input }],
        dwCondition: [{ type: Input }]
    };
    return DwPopconfirmComponent;
}(DwToolTipComponent));
export { DwPopconfirmComponent };
function DwPopconfirmComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwPopconfirmComponent.prototype._condition;
    /** @type {?} */
    DwPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    DwPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    DwPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOnCancel;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOnConfirm;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOkText;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOkType;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwCancelText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBvcGNvbmZpcm0vZHctcG9wY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztJQWExQixpREFBa0I7SUF1QzNELCtCQUFZLEdBQXNCO1FBQWxDLFlBQ0Usa0JBQU0sR0FBRyxDQUFDLFNBQ1g7MkJBeENZLEtBQUs7d0JBQ1IsdUJBQXVCO3lCQUN0QixPQUFPOzZCQUNILElBQUk7MkJBQ3dCLElBQUksWUFBWSxFQUFFOzRCQUNqQixJQUFJLFlBQVksRUFBRTt5QkFHbEMsU0FBUzs7S0FnQ3BDO0lBN0JELHNCQUNJLDhDQUFXOzs7O1FBSWY7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBUEQsVUFDZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzs7O09BQUE7Ozs7SUFNRCxvQ0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0tBQ0Y7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQseUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsZUFBZTtvQkFDcEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFXLENBQUUsYUFBYSxDQUFFO29CQUN0Qyw2K0RBQXFEOzZCQUM5Qiw0REFJdEI7aUJBQ0Y7Ozs7Z0JBcEJDLGlCQUFpQjs7OzZCQTBCaEIsTUFBTTs4QkFDTixNQUFNOzJCQUVOLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUVMLEtBQUs7O2dDQWxDUjtFQXNCMkMsa0JBQWtCO1NBQWhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi4vdG9vbHRpcC9kdy10b29sdGlwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctcG9wY29uZmlybScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIGZhZGVBbmltYXRpb24gXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctcG9wY29uZmlybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIC5hbnQtcG9wb3ZlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdQb3Bjb25maXJtQ29tcG9uZW50IGV4dGVuZHMgRHdUb29sVGlwQ29tcG9uZW50IHtcbiAgX2NvbmRpdGlvbiA9IGZhbHNlO1xuICBfcHJlZml4ID0gJ2FudC1wb3BvdmVyLXBsYWNlbWVudCc7XG4gIF90cmlnZ2VyID0gJ2NsaWNrJztcbiAgX2hhc0JhY2tkcm9wID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGR3T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgZHdPa1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgZHdPa1R5cGU6IHN0cmluZyA9ICdwcmltYXJ5JztcbiAgQElucHV0KCkgZHdDYW5jZWxUZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q29uZGl0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29uZGl0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0NvbmRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZGl0aW9uO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHdDb25kaXRpb24pIHtcbiAgICAgIHRoaXMuZHdWaXNpYmxlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vbkNvbmZpcm0oKTtcbiAgICB9XG4gIH1cblxuICBvbkNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLmR3T25DYW5jZWwuZW1pdCgpO1xuICAgIHRoaXMuZHdWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBvbkNvbmZpcm0oKTogdm9pZCB7XG4gICAgdGhpcy5kd09uQ29uZmlybS5lbWl0KCk7XG4gICAgdGhpcy5kd1Zpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihjZHIpO1xuICB9XG5cbn1cbiJdfQ==
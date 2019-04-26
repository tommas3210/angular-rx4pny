/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { DwTooltipDirective } from '../tooltip/dw-tooltip.directive';
import { DwPopconfirmComponent } from './dw-popconfirm.component';
var DwPopconfirmDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DwPopconfirmDirective, _super);
    function DwPopconfirmDirective(elementRef, hostView, resolver, renderer, tooltip) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip) || this;
        _this.subclassUnsubscribe$ = new Subject();
        _this.factory = _this.resolver.resolveComponentFactory(DwPopconfirmComponent);
        _this._condition = false;
        _this._okType = 'primary';
        _this.dwOnCancel = new EventEmitter();
        _this.dwOnConfirm = new EventEmitter();
        return _this;
    }
    Object.defineProperty(DwPopconfirmDirective.prototype, "dwOkText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._okText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._okText = value;
            this.updateCompValue('dwOkText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPopconfirmDirective.prototype, "dwOkType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._okType;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._okType = value;
            this.updateCompValue('dwOkType', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPopconfirmDirective.prototype, "dwCancelText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cancelText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cancelText = value;
            this.updateCompValue('dwCancelText', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPopconfirmDirective.prototype, "dwCondition", {
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
            this.updateCompValue('dwCondition', value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwPopconfirmDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            /** @type {?} */
            var properties = [
                'dwTitle',
                'dwContent',
                'dwOverlayClassName',
                'dwOverlayStyle',
                'dwMouseEnterDelay',
                'dwMouseLeaveDelay',
                'dwVisible',
                'dwTrigger',
                'dwPlacement',
                'dwOkText',
                'dwOkType',
                'dwCancelText',
                'dwCondition'
            ];
            properties.forEach(function (property) { return _this.updateCompValue(property, _this[property]); });
            this.tooltip.dwVisibleChange.pipe(takeUntil(this.subclassUnsubscribe$), distinctUntilChanged()).subscribe(function (data) {
                _this._visible = data;
                _this.dwVisibleChange.emit(data);
            });
            (/** @type {?} */ (this.tooltip)).dwOnCancel.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(function (data) {
                _this.dwOnCancel.emit();
            });
            (/** @type {?} */ (this.tooltip)).dwOnConfirm.pipe(takeUntil(this.subclassUnsubscribe$)).subscribe(function (data) {
                _this.dwOnConfirm.emit();
            });
        }
        this.tooltip.setOverlayOrigin(this);
    };
    /**
     * @return {?}
     */
    DwPopconfirmDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subclassUnsubscribe$.next();
        this.subclassUnsubscribe$.complete();
    };
    DwPopconfirmDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-popconfirm]'
                },] }
    ];
    /** @nocollapse */
    DwPopconfirmDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: DwPopconfirmComponent, decorators: [{ type: Optional }] }
    ]; };
    DwPopconfirmDirective.propDecorators = {
        dwOnCancel: [{ type: Output }],
        dwOnConfirm: [{ type: Output }],
        dwOkText: [{ type: Input }],
        dwOkType: [{ type: Input }],
        dwCancelText: [{ type: Input }],
        dwCondition: [{ type: Input }]
    };
    return DwPopconfirmDirective;
}(DwTooltipDirective));
export { DwPopconfirmDirective };
function DwPopconfirmDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwPopconfirmDirective.prototype.subclassUnsubscribe$;
    /** @type {?} */
    DwPopconfirmDirective.prototype.factory;
    /** @type {?} */
    DwPopconfirmDirective.prototype._condition;
    /** @type {?} */
    DwPopconfirmDirective.prototype._okText;
    /** @type {?} */
    DwPopconfirmDirective.prototype._okType;
    /** @type {?} */
    DwPopconfirmDirective.prototype._cancelText;
    /** @type {?} */
    DwPopconfirmDirective.prototype.dwOnCancel;
    /** @type {?} */
    DwPopconfirmDirective.prototype.dwOnConfirm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBvcGNvbmZpcm0vZHctcG9wY29uZmlybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQUt2QixpREFBa0I7SUFvRDNELCtCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsT0FBOEI7UUFMNUMsWUFNRSxrQkFBTSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBQ3pEO3FDQTFEOEIsSUFBSSxPQUFPLEVBQVE7d0JBRUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxxQkFBcUIsQ0FBQzsyQkFDekYsS0FBSzt3QkFFVCxTQUFTOzJCQUdnQixJQUFJLFlBQVksRUFBRTs0QkFDakIsSUFBSSxZQUFZLEVBQUU7O0tBaUQ3RDtJQS9DRCxzQkFDSSwyQ0FBUTs7OztRQUtaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVJELFVBQ2EsS0FBYTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7O09BQUE7SUFNRCxzQkFDSSwyQ0FBUTs7OztRQUtaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVJELFVBQ2EsS0FBYTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7O09BQUE7SUFNRCxzQkFDSSwrQ0FBWTs7OztRQUtoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7UUFSRCxVQUNpQixLQUFhO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdDOzs7T0FBQTtJQU1ELHNCQUNJLDhDQUFXOzs7O1FBS2Y7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBUkQsVUFDZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1Qzs7O09BQUE7Ozs7SUFlRCx3Q0FBUTs7O0lBQVI7UUFBQSxpQkFrQ0M7UUFqQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O1lBQ2pCLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDOztZQUV6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1SCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDOztZQUM3QixJQUFNLFVBQVUsR0FBRztnQkFDakIsU0FBUztnQkFDVCxXQUFXO2dCQUNYLG9CQUFvQjtnQkFDcEIsZ0JBQWdCO2dCQUNoQixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxXQUFXO2dCQUNYLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixVQUFVO2dCQUNWLGNBQWM7Z0JBQ2QsYUFBYTthQUFFLENBQUM7WUFDbEIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBRSxRQUFRLENBQUUsQ0FBQyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDNUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztZQUNILG1CQUFDLElBQUksQ0FBQyxPQUFpQyxFQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUMzRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3hCLENBQUMsQ0FBQztZQUNILG1CQUFDLElBQUksQ0FBQyxPQUFpQyxFQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUM1RyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3pCLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELDJDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdEM7O2dCQXZHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBcEJDLFVBQVU7Z0JBUVYsZ0JBQWdCO2dCQVZoQix3QkFBd0I7Z0JBU3hCLFNBQVM7Z0JBU0YscUJBQXFCLHVCQThEekIsUUFBUTs7OzZCQWhEVixNQUFNOzhCQUNOLE1BQU07MkJBRU4sS0FBSzsyQkFVTCxLQUFLOytCQVVMLEtBQUs7OEJBVUwsS0FBSzs7Z0NBbkVSO0VBeUIyQyxrQkFBa0I7U0FBaEQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4uL3Rvb2x0aXAvZHctdG9vbHRpcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHdQb3Bjb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1wb3Bjb25maXJtLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkdy1wb3Bjb25maXJtXSdcbn0pXG5leHBvcnQgY2xhc3MgRHdQb3Bjb25maXJtRGlyZWN0aXZlIGV4dGVuZHMgRHdUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YmNsYXNzVW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBmYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PER3UG9wY29uZmlybUNvbXBvbmVudD4gPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KER3UG9wY29uZmlybUNvbXBvbmVudCk7XG4gIF9jb25kaXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgX29rVGV4dDogc3RyaW5nO1xuICBfb2tUeXBlOiBzdHJpbmcgPSAncHJpbWFyeSc7XG4gIF9jYW5jZWxUZXh0OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGR3T25DYW5jZWw6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3T25Db25maXJtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3T2tUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9va1RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnZHdPa1RleHQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdPa1RleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb2tUZXh0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3T2tUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9va1R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNvbXBWYWx1ZSgnZHdPa1R5cGUnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdPa1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fb2tUeXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q2FuY2VsVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fY2FuY2VsVGV4dCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd0NhbmNlbFRleHQnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdDYW5jZWxUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbmNlbFRleHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdDb25kaXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb25kaXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQ29tcFZhbHVlKCdkd0NvbmRpdGlvbicsIHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0NvbmRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZGl0aW9uO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcbiAgICByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQE9wdGlvbmFsKCkgdG9vbHRpcDogRHdQb3Bjb25maXJtQ29tcG9uZW50KSB7XG4gICAgc3VwZXIoZWxlbWVudFJlZiwgaG9zdFZpZXcsIHJlc29sdmVyLCByZW5kZXJlciwgdG9vbHRpcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudG9vbHRpcCkge1xuICAgICAgY29uc3QgdG9vbHRpcENvbXBvbmVudCA9IHRoaXMuaG9zdFZpZXcuY3JlYXRlQ29tcG9uZW50KHRoaXMuZmFjdG9yeSk7XG4gICAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwQ29tcG9uZW50Lmluc3RhbmNlO1xuICAgICAgLy8gUmVtb3ZlIGVsZW1lbnQgd2hlbiB1c2UgZGlyZWN0aXZlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8xOTY3XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMucmVuZGVyZXIucGFyZW50Tm9kZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCksIHRvb2x0aXBDb21wb25lbnQubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xuICAgICAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAgICAgJ2R3VGl0bGUnLFxuICAgICAgICAnZHdDb250ZW50JyxcbiAgICAgICAgJ2R3T3ZlcmxheUNsYXNzTmFtZScsXG4gICAgICAgICdkd092ZXJsYXlTdHlsZScsXG4gICAgICAgICdkd01vdXNlRW50ZXJEZWxheScsXG4gICAgICAgICdkd01vdXNlTGVhdmVEZWxheScsXG4gICAgICAgICdkd1Zpc2libGUnLFxuICAgICAgICAnZHdUcmlnZ2VyJyxcbiAgICAgICAgJ2R3UGxhY2VtZW50JyxcbiAgICAgICAgJ2R3T2tUZXh0JyxcbiAgICAgICAgJ2R3T2tUeXBlJyxcbiAgICAgICAgJ2R3Q2FuY2VsVGV4dCcsXG4gICAgICAgICdkd0NvbmRpdGlvbicgXTtcbiAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB0aGlzLnVwZGF0ZUNvbXBWYWx1ZShwcm9wZXJ0eSwgdGhpc1sgcHJvcGVydHkgXSkpO1xuICAgICAgdGhpcy50b29sdGlwLmR3VmlzaWJsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLl92aXNpYmxlID0gZGF0YTtcbiAgICAgICAgdGhpcy5kd1Zpc2libGVDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgIH0pO1xuICAgICAgKHRoaXMudG9vbHRpcCAgYXMgRHdQb3Bjb25maXJtQ29tcG9uZW50KS5kd09uQ2FuY2VsLnBpcGUodGFrZVVudGlsKHRoaXMuc3ViY2xhc3NVbnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZHdPbkNhbmNlbC5lbWl0KCk7XG4gICAgICB9KTtcbiAgICAgICh0aGlzLnRvb2x0aXAgIGFzIER3UG9wY29uZmlybUNvbXBvbmVudCkuZHdPbkNvbmZpcm0ucGlwZSh0YWtlVW50aWwodGhpcy5zdWJjbGFzc1Vuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgdGhpcy5kd09uQ29uZmlybS5lbWl0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50b29sdGlwLnNldE92ZXJsYXlPcmlnaW4odGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnN1YmNsYXNzVW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==
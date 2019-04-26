/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
var DwFormDirective = /** @class */ (function () {
    function DwFormDirective(elementRef, renderer, dwUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this.prefixCls = 'ant-form';
        this._layout = 'horizontal';
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwFormDirective.prototype, "dwLayout", {
        get: /**
         * @return {?}
         */
        function () {
            return this._layout;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._layout = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwFormDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.dwLayout] = this.dwLayout,
            _a);
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    DwFormDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    DwFormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-form]',
                    providers: [DwUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    DwFormDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: DwUpdateHostClassService }
    ]; };
    DwFormDirective.propDecorators = {
        dwLayout: [{ type: Input }]
    };
    return DwFormDirective;
}());
export { DwFormDirective };
function DwFormDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwFormDirective.prototype.el;
    /** @type {?} */
    DwFormDirective.prototype.prefixCls;
    /** @type {?} */
    DwFormDirective.prototype._layout;
    /** @type {?} */
    DwFormDirective.prototype.elementRef;
    /** @type {?} */
    DwFormDirective.prototype.renderer;
    /** @type {?} */
    DwFormDirective.prototype.dwUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImZvcm0vZHctZm9ybS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBNkJwRix5QkFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUFVLHdCQUFrRDtRQUEvRyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7eUJBckJ2SCxVQUFVO3VCQUNKLFlBQVk7UUFxQjVCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDekM7SUFwQkQsc0JBQ0kscUNBQVE7Ozs7UUFLWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFSRCxVQUNhLEtBQWE7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOzs7T0FBQTs7OztJQU1ELHFDQUFXOzs7SUFBWDs7O1FBQ0UsSUFBTSxRQUFRO1lBQ1osR0FBRSxLQUFHLElBQUksQ0FBQyxTQUFXLElBQXFCLElBQUk7WUFDOUMsR0FBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFVLElBQUksSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZEO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2xFOzs7O0lBTUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRyxXQUFXO29CQUN0QixTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtpQkFDeEM7Ozs7Z0JBTm1CLFVBQVU7Z0JBQWlCLFNBQVM7Z0JBQy9DLHdCQUF3Qjs7OzJCQVc5QixLQUFLOzswQkFaUjs7U0FPYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvciA6ICdbZHctZm9ybV0nLFxuICBwcm92aWRlcnM6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdGb3JtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBwcmVmaXhDbHMgPSAnYW50LWZvcm0nO1xuICBwcml2YXRlIF9sYXlvdXQgPSAnaG9yaXpvbnRhbCc7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TGF5b3V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sYXlvdXQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdMYXlvdXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0O1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfWAgXSAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3TGF5b3V0fWAgXTogdGhpcy5kd0xheW91dFxuICAgIH07XG4gICAgdGhpcy5kd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGR3VXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=
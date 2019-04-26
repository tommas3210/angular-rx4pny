/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwCardTabComponent } from './dw-card-tab.component';
var DwCardComponent = /** @class */ (function () {
    function DwCardComponent() {
        this._bordered = true;
        this._loading = false;
        this._hoverable = false;
        this.dwActions = [];
    }
    Object.defineProperty(DwCardComponent.prototype, "dwTitle", {
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
    Object.defineProperty(DwCardComponent.prototype, "dwExtra", {
        get: /**
         * @return {?}
         */
        function () {
            return this._extra;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isExtraString = !(value instanceof TemplateRef);
            this._extra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCardComponent.prototype, "isInner", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwType === 'inner';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCardComponent.prototype, "isTabs", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.tab;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCardComponent.prototype, "dwBordered", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bordered;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bordered = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCardComponent.prototype, "dwLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCardComponent.prototype, "dwHoverable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hoverable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hoverable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    DwCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-card',
                    preserveWhitespaces: false,
                    template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"dwExtra\"></ng-template>\n</ng-template>\n<div class=\"ant-card-head\" *ngIf=\"dwTitle||dwExtra||tab\">\n  <div class=\"ant-card-head-wrapper\">\n    <div class=\"ant-card-head-title\" *ngIf=\"dwTitle\">\n      <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n    </div>\n    <div class=\"ant-card-extra\" *ngIf=\"dwExtra\">\n      <ng-container *ngIf=\"isExtraString; else extraTemplate\">{{ dwExtra }}</ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"tab\">\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\n  </ng-container>\n</div>\n<div class=\"ant-card-cover\" *ngIf=\"dwCover\">\n  <ng-template [ngTemplateOutlet]=\"dwCover\"></ng-template>\n</div>\n<div class=\"ant-card-body\" [ngStyle]=\"dwBodyStyle\">\n  <ng-container *ngIf=\"!dwLoading\">\n    <ng-content></ng-content>\n  </ng-container>\n  <dw-card-loading *ngIf=\"dwLoading\"></dw-card-loading>\n</div>\n<ul class=\"ant-card-actions\" *ngIf=\"dwActions.length\">\n  <li *ngFor=\"let action of dwActions\" [style.width.%]=\"100/dwActions.length\">\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n  </li>\n</ul>",
                    host: {
                        '[class.ant-card]': 'true',
                        '[class.ant-card-loading]': 'dwLoading'
                    },
                    styles: ["\n    :host {\n      display: block;\n      position: relative;\n    }\n  "]
                }] }
    ];
    DwCardComponent.propDecorators = {
        tab: [{ type: ContentChild, args: [DwCardTabComponent,] }],
        dwBodyStyle: [{ type: Input }],
        dwCover: [{ type: Input }],
        dwActions: [{ type: Input }],
        dwType: [{ type: Input }],
        dwTitle: [{ type: Input }],
        dwExtra: [{ type: Input }],
        isInner: [{ type: HostBinding, args: ['class.ant-card-type-inner',] }],
        isTabs: [{ type: HostBinding, args: ['class.ant-card-contain-tabs',] }],
        dwBordered: [{ type: Input }, { type: HostBinding, args: ['class.ant-card-bordered',] }],
        dwLoading: [{ type: Input }],
        dwHoverable: [{ type: Input }, { type: HostBinding, args: ['class.ant-card-hoverable',] }]
    };
    return DwCardComponent;
}());
export { DwCardComponent };
function DwCardComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCardComponent.prototype._bordered;
    /** @type {?} */
    DwCardComponent.prototype._loading;
    /** @type {?} */
    DwCardComponent.prototype._hoverable;
    /** @type {?} */
    DwCardComponent.prototype._title;
    /** @type {?} */
    DwCardComponent.prototype._extra;
    /** @type {?} */
    DwCardComponent.prototype.isTitleString;
    /** @type {?} */
    DwCardComponent.prototype.isExtraString;
    /** @type {?} */
    DwCardComponent.prototype.tab;
    /** @type {?} */
    DwCardComponent.prototype.dwBodyStyle;
    /** @type {?} */
    DwCardComponent.prototype.dwCover;
    /** @type {?} */
    DwCardComponent.prototype.dwActions;
    /** @type {?} */
    DwCardComponent.prototype.dwType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNhcmQvZHctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O3lCQWtCdkMsSUFBSTt3QkFDTCxLQUFLOzBCQUNILEtBQUs7eUJBUXFCLEVBQUU7O0lBR2pELHNCQUNJLG9DQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFpQztZQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7OztPQUFBO0lBTUQsc0JBQ0ksb0NBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFSRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7SUFNRCxzQkFDSSxvQ0FBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFDSSxtQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNuQjs7O09BQUE7SUFFRCxzQkFFSSx1Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVJELFVBRWUsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSxzQ0FBUzs7OztRQUliO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVBELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BQUE7SUFNRCxzQkFFSSx3Q0FBVzs7OztRQUlmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVJELFVBRWdCLEtBQWM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEM7OztPQUFBOztnQkFsRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixrMUNBQStDO29CQU8vQyxJQUFJLEVBQWlCO3dCQUNuQixrQkFBa0IsRUFBVSxNQUFNO3dCQUNsQywwQkFBMEIsRUFBRSxXQUFXO3FCQUN4Qzs2QkFUc0IsNEVBS3RCO2lCQUtGOzs7c0JBU0UsWUFBWSxTQUFDLGtCQUFrQjs4QkFDL0IsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFFTCxLQUFLOzBCQVVMLEtBQUs7MEJBVUwsV0FBVyxTQUFDLDJCQUEyQjt5QkFLdkMsV0FBVyxTQUFDLDZCQUE2Qjs2QkFLekMsS0FBSyxZQUNMLFdBQVcsU0FBQyx5QkFBeUI7NEJBU3JDLEtBQUs7OEJBU0wsS0FBSyxZQUNMLFdBQVcsU0FBQywwQkFBMEI7OzBCQTNGekM7O1NBMkJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd0NhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2R3LWNhcmQtdGFiLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctY2FyZCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBgIF0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJkXScgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWNhcmQtbG9hZGluZ10nOiAnZHdMb2FkaW5nJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3Q2FyZENvbXBvbmVudCB7XG4gIHByaXZhdGUgX2JvcmRlcmVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIF9ob3ZlcmFibGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9leHRyYTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIGlzRXh0cmFTdHJpbmc6IGJvb2xlYW47XG4gIEBDb250ZW50Q2hpbGQoRHdDYXJkVGFiQ29tcG9uZW50KSB0YWI6IER3Q2FyZFRhYkNvbXBvbmVudDtcbiAgQElucHV0KCkgZHdCb2R5U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgZHdDb3ZlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGR3QWN0aW9uczogQXJyYXk8VGVtcGxhdGVSZWY8dm9pZD4+ID0gW107XG4gIEBJbnB1dCgpIGR3VHlwZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1RpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1RpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdFeHRyYSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRXh0cmFTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2V4dHJhID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdFeHRyYSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dHJhO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY2FyZC10eXBlLWlubmVyJylcbiAgZ2V0IGlzSW5uZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdUeXBlID09PSAnaW5uZXInO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY2FyZC1jb250YWluLXRhYnMnKVxuICBnZXQgaXNUYWJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudGFiO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY2FyZC1ib3JkZXJlZCcpXG4gIHNldCBkd0JvcmRlcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYm9yZGVyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Qm9yZGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3TG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNhcmQtaG92ZXJhYmxlJylcbiAgc2V0IGR3SG92ZXJhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faG92ZXJhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0hvdmVyYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faG92ZXJhYmxlO1xuICB9XG59XG4iXX0=
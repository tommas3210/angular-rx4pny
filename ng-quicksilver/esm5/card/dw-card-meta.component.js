/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
var DwCardMetaComponent = /** @class */ (function () {
    function DwCardMetaComponent() {
    }
    Object.defineProperty(DwCardMetaComponent.prototype, "dwTitle", {
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
    Object.defineProperty(DwCardMetaComponent.prototype, "dwDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._description;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDescriptionString = !(value instanceof TemplateRef);
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    DwCardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-card-meta',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"dwAvatar\">\n  <ng-template [ngTemplateOutlet]=\"dwAvatar\"></ng-template>\n</div>\n<div class=\"ant-card-meta-detail\" *ngIf=\"dwTitle || dwDescription\">\n  <div class=\"ant-card-meta-title\" *ngIf=\"dwTitle\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-card-meta-description\" *ngIf=\"dwDescription\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ dwDescription }}</ng-container>\n    <ng-template #descriptionTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwDescription\"></ng-template>\n    </ng-template>\n  </div>\n</div>",
                    host: {
                        '[class.ant-card-meta]': 'true'
                    },
                    styles: ["\n    :host {\n      display: block;\n    }\n  "]
                }] }
    ];
    DwCardMetaComponent.propDecorators = {
        dwAvatar: [{ type: Input }],
        dwTitle: [{ type: Input }],
        dwDescription: [{ type: Input }]
    };
    return DwCardMetaComponent;
}());
export { DwCardMetaComponent };
function DwCardMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCardMetaComponent.prototype.isDescriptionString;
    /** @type {?} */
    DwCardMetaComponent.prototype.isTitleString;
    /** @type {?} */
    DwCardMetaComponent.prototype._title;
    /** @type {?} */
    DwCardMetaComponent.prototype._description;
    /** @type {?} */
    DwCardMetaComponent.prototype.dwAvatar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY2FyZC9kdy1jYXJkLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7Ozs7SUFzQnJCLHNCQUNJLHdDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFpQztZQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7OztPQUFBO0lBTUQsc0JBQ0ksOENBQWE7Ozs7UUFLakI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7Ozs7O1FBUkQsVUFDa0IsS0FBaUM7WUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7OztPQUFBOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxjQUFjO29CQUNuQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixtekJBQW9EO29CQU1wRCxJQUFJLEVBQWlCO3dCQUNuQix1QkFBdUIsRUFBRSxNQUFNO3FCQUNoQzs2QkFQc0IsaURBSXRCO2lCQUlGOzs7MkJBTUUsS0FBSzswQkFFTCxLQUFLO2dDQVVMLEtBQUs7OzhCQXBDUjs7U0FtQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctY2FyZC1tZXRhJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWNhcmQtbWV0YS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYCBdLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1tZXRhXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3Q2FyZE1ldGFDb21wb25lbnQge1xuICBpc0Rlc2NyaXB0aW9uU3RyaW5nOiBib29sZWFuO1xuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZHdBdmF0YXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1RpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1RpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdEZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRGVzY3JpcHRpb25TdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdEZXNjcmlwdGlvbigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG59XG4iXX0=
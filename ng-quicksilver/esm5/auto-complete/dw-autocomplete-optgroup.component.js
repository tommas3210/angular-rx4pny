/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
var DwAutocompleteOptgroupComponent = /** @class */ (function () {
    function DwAutocompleteOptgroupComponent() {
    }
    Object.defineProperty(DwAutocompleteOptgroupComponent.prototype, "dwLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._label;
        },
        /** group 的 label，支持 'string' 和 `TemplateRef` */
        set: /**
         * group 的 label，支持 'string' 和 `TemplateRef`
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isLabelString = !(value instanceof TemplateRef);
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    DwAutocompleteOptgroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-auto-optgroup',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<div class=\"ant-select-dropdown-menu-item-group-title\">\n  <ng-container *ngIf=\"isLabelString; else labelTemplate\">{{dwLabel}}</ng-container>\n  <ng-template #labelTemplate>\n    <ng-template [ngTemplateOutlet]=\"dwLabel\"></ng-template>\n  </ng-template>\n</div>\n<ul class=\"ant-select-dropdown-menu-item-group-list\">\n  <ng-content select=\"dw-auto-option\"></ng-content>\n</ul>\n",
                    host: {
                        'role': 'group',
                        'class': 'ant-select-dropdown-menu-item-group'
                    }
                }] }
    ];
    /** @nocollapse */
    DwAutocompleteOptgroupComponent.ctorParameters = function () { return []; };
    DwAutocompleteOptgroupComponent.propDecorators = {
        dwLabel: [{ type: Input }]
    };
    return DwAutocompleteOptgroupComponent;
}());
export { DwAutocompleteOptgroupComponent };
function DwAutocompleteOptgroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAutocompleteOptgroupComponent.prototype.isLabelString;
    /** @type {?} */
    DwAutocompleteOptgroupComponent.prototype._label;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9kdy1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDOztJQTRCckI7S0FDQztJQWJELHNCQUNJLG9EQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFURCxnREFBZ0Q7Ozs7OztRQUNoRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGtCQUFrQjtvQkFDdkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGdaQUFnRTtvQkFDaEUsSUFBSSxFQUFpQjt3QkFDbkIsTUFBTSxFQUFHLE9BQU87d0JBQ2hCLE9BQU8sRUFBRSxxQ0FBcUM7cUJBQy9DO2lCQUNGOzs7OzswQkFLRSxLQUFLOzswQ0FyQlI7O1NBaUJhLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1hdXRvLW9wdGdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdyb2xlJyA6ICdncm91cCcsXG4gICAgJ2NsYXNzJzogJ2FudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3QXV0b2NvbXBsZXRlT3B0Z3JvdXBDb21wb25lbnQge1xuICBpc0xhYmVsU3RyaW5nOiBib29sZWFuO1xuXG4gIC8qKiBncm91cCDnmoQgbGFiZWzvvIzmlK/mjIEgJ3N0cmluZycg5ZKMIGBUZW1wbGF0ZVJlZmAgKi9cbiAgQElucHV0KClcbiAgc2V0IGR3TGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0xhYmVsU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3TGFiZWwoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG4gIF9sYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { DwColComponent } from '../grid/dw-col.component';
var DwFormLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwFormLabelComponent, _super);
    function DwFormLabelComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._required = false;
        return _this;
    }
    Object.defineProperty(DwFormLabelComponent.prototype, "dwRequired", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    DwFormLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-form-label',
                    providers: [DwUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<label [attr.for]=\"dwFor\" [class.ant-form-item-required]=\"dwRequired\">\n  <ng-content></ng-content>\n</label>",
                    host: {
                        '[class.ant-form-item-label]': 'true'
                    }
                }] }
    ];
    DwFormLabelComponent.propDecorators = {
        dwFor: [{ type: Input }],
        dwRequired: [{ type: Input }]
    };
    return DwFormLabelComponent;
}(DwColComponent));
export { DwFormLabelComponent };
function DwFormLabelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwFormLabelComponent.prototype.dwFor;
    /** @type {?} */
    DwFormLabelComponent.prototype._required;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImZvcm0vZHctZm9ybS1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQVdoQixnREFBYzs7OzBCQUVsQyxLQUFLOzs7SUFFekIsc0JBQ0ksNENBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxlQUFlO29CQUNwQyxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDakQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsNkhBQXFEO29CQUNyRCxJQUFJLEVBQWlCO3dCQUNuQiw2QkFBNkIsRUFBRSxNQUFNO3FCQUN0QztpQkFDRjs7O3dCQUVFLEtBQUs7NkJBR0wsS0FBSzs7K0JBbEJSO0VBYzBDLGNBQWM7U0FBM0Msb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3Q29sQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9kdy1jb2wuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1mb3JtLWxhYmVsJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWZvcm0tbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWxhYmVsXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3Rm9ybUxhYmVsQ29tcG9uZW50IGV4dGVuZHMgRHdDb2xDb21wb25lbnQge1xuICBASW5wdXQoKSBkd0Zvcjogc3RyaW5nO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1JlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3UmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICB9XG59XG4iXX0=
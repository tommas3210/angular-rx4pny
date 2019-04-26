/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var DwCollapseComponent = /** @class */ (function () {
    function DwCollapseComponent() {
        this._accordion = false;
        this._bordered = true;
        this.listOfPanel = [];
    }
    Object.defineProperty(DwCollapseComponent.prototype, "dwAccordion", {
        get: /**
         * @return {?}
         */
        function () {
            return this._accordion;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._accordion = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCollapseComponent.prototype, "dwBordered", {
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
    /**
     * @param {?} collapse
     * @return {?}
     */
    DwCollapseComponent.prototype.click = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        if (this.dwAccordion) {
            this.listOfPanel.forEach(function (item) {
                /** @type {?} */
                var active = collapse === item;
                if (item.dwActive !== active) {
                    item.dwActive = active;
                    item.dwActiveChange.emit(item.dwActive);
                }
            });
        }
        else {
            collapse.dwActive = !collapse.dwActive;
            collapse.dwActiveChange.emit(collapse.dwActive);
        }
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    DwCollapseComponent.prototype.addCollapse = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        this.listOfPanel.push(collapse);
    };
    /**
     * @param {?} collapse
     * @return {?}
     */
    DwCollapseComponent.prototype.removeCollapse = /**
     * @param {?} collapse
     * @return {?}
     */
    function (collapse) {
        this.listOfPanel.splice(this.listOfPanel.indexOf(collapse), 1);
    };
    DwCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-collapse',
                    template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!dwBordered\">\n  <ng-content></ng-content>\n</div>",
                    styles: [":host {\n      display: block;\n    }"]
                }] }
    ];
    DwCollapseComponent.propDecorators = {
        dwAccordion: [{ type: Input }],
        dwBordered: [{ type: Input }]
    };
    return DwCollapseComponent;
}());
export { DwCollapseComponent };
function DwCollapseComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCollapseComponent.prototype._accordion;
    /** @type {?} */
    DwCollapseComponent.prototype._bordered;
    /** @type {?} */
    DwCollapseComponent.prototype.listOfPanel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjb2xsYXBzZS9kdy1jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OzBCQWMxQixLQUFLO3lCQUNOLElBQUk7MkJBQzBCLEVBQUU7O0lBRXBELHNCQUNJLDRDQUFXOzs7O1FBSWY7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBUEQsVUFDZ0IsS0FBYztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzs7O09BQUE7SUFNRCxzQkFDSSwyQ0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7Ozs7O0lBTUQsbUNBQUs7Ozs7SUFBTCxVQUFNLFFBQWtDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7O2dCQUMzQixJQUFNLE1BQU0sR0FBRyxRQUFRLEtBQUssSUFBSSxDQUFDO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO29CQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN6QzthQUNGLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUN2QyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakQ7S0FDRjs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksUUFBa0M7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7Ozs7O0lBRUQsNENBQWM7Ozs7SUFBZCxVQUFlLFFBQWtDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hFOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxhQUFhO29CQUMxQiw2SEFBMkM7NkJBRXpDLHVDQUVFO2lCQUVMOzs7OEJBTUUsS0FBSzs2QkFTTCxLQUFLOzs4QkFoQ1I7O1NBa0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdDb2xsYXBzZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy1jb2xsYXBzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy1jb2xsYXBzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgOiBbXG4gICAgYDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdDb2xsYXBzZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgX2FjY29yZGlvbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ib3JkZXJlZCA9IHRydWU7XG4gIHByaXZhdGUgbGlzdE9mUGFuZWw6IER3Q29sbGFwc2VQYW5lbENvbXBvbmVudFtdID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QWNjb3JkaW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWNjb3JkaW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FjY29yZGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3JkaW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Qm9yZGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdCb3JkZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cblxuICBjbGljayhjb2xsYXBzZTogRHdDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdBY2NvcmRpb24pIHtcbiAgICAgIHRoaXMubGlzdE9mUGFuZWwuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gY29sbGFwc2UgPT09IGl0ZW07XG4gICAgICAgIGlmIChpdGVtLmR3QWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgICAgICBpdGVtLmR3QWN0aXZlID0gYWN0aXZlO1xuICAgICAgICAgIGl0ZW0uZHdBY3RpdmVDaGFuZ2UuZW1pdChpdGVtLmR3QWN0aXZlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxhcHNlLmR3QWN0aXZlID0gIWNvbGxhcHNlLmR3QWN0aXZlO1xuICAgICAgY29sbGFwc2UuZHdBY3RpdmVDaGFuZ2UuZW1pdChjb2xsYXBzZS5kd0FjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkQ29sbGFwc2UoY29sbGFwc2U6IER3Q29sbGFwc2VQYW5lbENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mUGFuZWwucHVzaChjb2xsYXBzZSk7XG4gIH1cblxuICByZW1vdmVDb2xsYXBzZShjb2xsYXBzZTogRHdDb2xsYXBzZVBhbmVsQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZQYW5lbC5zcGxpY2UodGhpcy5saXN0T2ZQYW5lbC5pbmRleE9mKGNvbGxhcHNlKSwgMSk7XG4gIH1cbn1cbiJdfQ==
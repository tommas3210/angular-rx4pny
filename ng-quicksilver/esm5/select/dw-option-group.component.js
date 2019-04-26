/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { DwOptionComponent } from './dw-option.component';
var DwOptionGroupComponent = /** @class */ (function () {
    function DwOptionGroupComponent() {
    }
    Object.defineProperty(DwOptionGroupComponent.prototype, "dwLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._label;
        },
        set: /**
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
    DwOptionGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-option-group',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    DwOptionGroupComponent.propDecorators = {
        listOfDwOptionComponent: [{ type: ContentChildren, args: [DwOptionComponent,] }],
        dwLabel: [{ type: Input }]
    };
    return DwOptionGroupComponent;
}());
export { DwOptionGroupComponent };
function DwOptionGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwOptionGroupComponent.prototype._label;
    /** @type {?} */
    DwOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    DwOptionGroupComponent.prototype.listOfDwOptionComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LW9wdGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0lBV3hELHNCQUNJLDJDQUFPOzs7O1FBS1g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7Ozs7O1FBUkQsVUFDWSxLQUFpQztZQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7OztPQUFBOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFLLGlCQUFpQjtvQkFDOUIscUNBQStDO2lCQUNoRDs7OzBDQUlFLGVBQWUsU0FBQyxpQkFBaUI7MEJBRWpDLEtBQUs7O2lDQVpSOztTQU9hLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2R3LW9wdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy1vcHRpb24tZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd09wdGlvbkdyb3VwQ29tcG9uZW50IHtcbiAgX2xhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgaXNMYWJlbFN0cmluZzogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZHJlbihEd09wdGlvbkNvbXBvbmVudCkgbGlzdE9mRHdPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxEd09wdGlvbkNvbXBvbmVudD47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TGFiZWwodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0xhYmVsU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3TGFiZWwoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG59XG4iXX0=
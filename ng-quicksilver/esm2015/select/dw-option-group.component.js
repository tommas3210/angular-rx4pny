/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { DwOptionComponent } from './dw-option.component';
export class DwOptionGroupComponent {
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLabel(value) {
        this.isLabelString = !(value instanceof TemplateRef);
        this._label = value;
    }
    /**
     * @return {?}
     */
    get dwLabel() {
        return this._label;
    }
}
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
function DwOptionGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwOptionGroupComponent.prototype._label;
    /** @type {?} */
    DwOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    DwOptionGroupComponent.prototype.listOfDwOptionComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LW9wdGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTTFELE1BQU07Ozs7O0lBS0osSUFDSSxPQUFPLENBQUMsS0FBaUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxpQkFBaUI7Z0JBQzlCLHFDQUErQzthQUNoRDs7O3NDQUlFLGVBQWUsU0FBQyxpQkFBaUI7c0JBRWpDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER3T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1vcHRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctb3B0aW9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LW9wdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdPcHRpb25Hcm91cENvbXBvbmVudCB7XG4gIF9sYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIGlzTGFiZWxTdHJpbmc6IGJvb2xlYW47XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdPcHRpb25Db21wb25lbnQpIGxpc3RPZkR3T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdPcHRpb25Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0xhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNMYWJlbFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0xhYmVsKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxufVxuIl19
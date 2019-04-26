/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
export class DwAutocompleteOptgroupComponent {
    constructor() {
    }
    /**
     * group 的 label，支持 'string' 和 `TemplateRef`
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
DwAutocompleteOptgroupComponent.ctorParameters = () => [];
DwAutocompleteOptgroupComponent.propDecorators = {
    dwLabel: [{ type: Input }]
};
function DwAutocompleteOptgroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAutocompleteOptgroupComponent.prototype.isLabelString;
    /** @type {?} */
    DwAutocompleteOptgroupComponent.prototype._label;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9kdy1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBWXZCLE1BQU07SUFnQko7S0FDQzs7Ozs7O0lBYkQsSUFDSSxPQUFPLENBQUMsS0FBaUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxrQkFBa0I7Z0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxnWkFBZ0U7Z0JBQ2hFLElBQUksRUFBaUI7b0JBQ25CLE1BQU0sRUFBRyxPQUFPO29CQUNoQixPQUFPLEVBQUUscUNBQXFDO2lCQUMvQzthQUNGOzs7OztzQkFLRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWF1dG8tb3B0Z3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ3JvbGUnIDogJ2dyb3VwJyxcbiAgICAnY2xhc3MnOiAnYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudCB7XG4gIGlzTGFiZWxTdHJpbmc6IGJvb2xlYW47XG5cbiAgLyoqIGdyb3VwIOeahCBsYWJlbO+8jOaUr+aMgSAnc3RyaW5nJyDlkowgYFRlbXBsYXRlUmVmYCAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdMYWJlbCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzTGFiZWxTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdMYWJlbCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgX2xhYmVsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG59XG4iXX0=
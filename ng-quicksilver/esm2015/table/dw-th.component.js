/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { DwDropDownComponent } from '../dropdown/dw-dropdown.component';
/**
 * @record
 */
export function DwThItemInterface() { }
function DwThItemInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    DwThItemInterface.prototype.text;
    /** @type {?} */
    DwThItemInterface.prototype.value;
    /** @type {?} */
    DwThItemInterface.prototype.checked;
}
export class DwThComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._sort = null;
        this._filters = [];
        this._showSort = false;
        this._showFilter = false;
        this._showCheckbox = false;
        this._showRowSelection = false;
        this._hasDefaultFilter = false;
        this.hasFilterValue = false;
        this.multipleFilterList = [];
        this.singleFilterList = [];
        /* tslint:disable-next-line:no-any */
        this.dwSelections = [];
        this.dwChecked = false;
        this.dwDisabled = false;
        this.dwIndeterminate = false;
        this.dwFilterMultiple = true;
        this.dwCheckedChange = new EventEmitter();
        this.dwSortChange = new EventEmitter();
        this.dwSortChangeWithKey = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.dwFilterChange = new EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get hasFiltersClass() {
        return this.dwShowSort || this.dwShowFilter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowSort(value) {
        this._showSort = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowSort() {
        return this._showSort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowFilter(value) {
        this._showFilter = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowFilter() {
        return this._showFilter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowRowSelection(value) {
        this._showRowSelection = toBoolean(value);
        if (this._showRowSelection) {
            this.renderer.addClass(this.el, 'ant-table-selection-column-custom');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column-custom');
        }
    }
    /**
     * @return {?}
     */
    get dwShowRowSelection() {
        return this._showRowSelection;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLeft(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-th-left-sticky');
            this.renderer.setStyle(this.el, 'left', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-th-left-sticky');
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwRight(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-th-right-sticky');
            this.renderer.setStyle(this.el, 'right', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-th-right-sticky');
            this.renderer.removeStyle(this.el, 'right');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwExpand(value) {
        /** @type {?} */
        const isExpand = toBoolean(value);
        if (isExpand) {
            this.renderer.addClass(this.el, 'ant-table-expand-icon-th');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-expand-icon-th');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowCheckbox(value) {
        this._showCheckbox = toBoolean(value);
        if (this._showCheckbox) {
            this.renderer.addClass(this.el, 'ant-table-selection-column');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column');
        }
    }
    /**
     * @return {?}
     */
    get dwShowCheckbox() {
        return this._showCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSort(value) {
        this._sort = value;
        if ((value !== 'ascend') && (value !== 'descend')) {
            this.renderer.removeClass(this.el, 'ant-table-column-sort');
        }
        else {
            this.renderer.addClass(this.el, 'ant-table-column-sort');
        }
    }
    /**
     * @return {?}
     */
    get dwSort() {
        return this._sort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSortValue(value) {
        if (this.dwSort === value) {
            this.dwSort = null;
        }
        else {
            this.dwSort = value;
        }
        this.dwSortChangeWithKey.emit({ key: this.dwSortKey, value: this.dwSort });
        this.dwSortChange.emit(this.dwSort);
    }
    /**
     * @return {?}
     */
    get filterList() {
        return this.multipleFilterList.filter(item => item.checked).map(item => item.value);
    }
    /**
     * @return {?}
     */
    get filterValue() {
        /** @type {?} */
        const checkedFilter = this.singleFilterList.find(item => item.checked);
        return checkedFilter ? checkedFilter.value : null;
    }
    /**
     * @return {?}
     */
    updateFilterStatus() {
        if (this.dwFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    }
    /**
     * @return {?}
     */
    search() {
        this.updateFilterStatus();
        if (this.dwFilterMultiple) {
            this.dwFilterChange.emit(this.filterList);
        }
        else {
            this.dwFilterChange.emit(this.filterValue);
        }
        this.hideDropDown();
    }
    /**
     * @return {?}
     */
    reset() {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.search();
        this.hideDropDown();
        this.hasFilterValue = false;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkMultiple(filter) {
        filter.checked = !filter.checked;
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    checkSingle(filter) {
        this.singleFilterList.forEach(item => item.checked = item === filter);
    }
    /**
     * @return {?}
     */
    hideDropDown() {
        this.dwDropDownComponent.dwVisible = false;
        this.dwDropDownComponent.hide();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    dropDownVisibleChange(value) {
        if (!value) {
            this.search();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwFilters(value) {
        if (Array.isArray(value)) {
            this._filters = value;
            this.initMultipleFilterList();
            this.initSingleFilterList();
            this.updateFilterStatus();
        }
        else {
            console.warn('dwFilters only accept type of Array<{ text: string; value: any }>');
        }
    }
    /**
     * @return {?}
     */
    get dwFilters() {
        return this._filters;
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initMultipleFilterList(force) {
        this.multipleFilterList = this.dwFilters.map(item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    initSingleFilterList(force) {
        this.singleFilterList = this.dwFilters.map(item => {
            /** @type {?} */
            const checked = force ? false : !!item.byDefault;
            if (checked) {
                this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked };
        });
        this.checkDefaultFilters();
    }
    /**
     * @return {?}
     */
    checkDefaultFilters() {
        if (!this.dwFilters || this.dwFilters.length === 0 || !this._hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    }
}
DwThComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'th:not(.dw-disable-th)',
                preserveWhitespaces: false,
                template: "<ng-template #checkboxTemplate>\n  <label\n    [class.ant-table-selection-select-all-custom]=\"dwShowRowSelection\"\n    dw-checkbox\n    [(ngModel)]=\"dwChecked\"\n    [dwDisabled]=\"dwDisabled\"\n    [dwIndeterminate]=\"dwIndeterminate\"\n    (ngModelChange)=\"dwCheckedChange.emit($event)\">\n  </label>\n</ng-template>\n<div class=\"ant-table-selection\" *ngIf=\"dwShowRowSelection\">\n  <ng-container *ngIf=\"dwShowCheckbox\">\n    <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n  </ng-container>\n  <dw-dropdown dwPlacement=\"bottomLeft\">\n    <div dw-dropdown class=\"ant-table-selection-down\">\n      <i class=\"anticon anticon-down\"></i>\n    </div>\n    <ul dw-menu class=\"ant-table-selection-menu\">\n      <li dw-menu-item *ngFor=\"let selection of dwSelections\" (click)=\"selection.onSelect()\">{{selection.text}}</li>\n    </ul>\n  </dw-dropdown>\n</div>\n<ng-container *ngIf=\"dwShowCheckbox && !dwShowRowSelection\">\n  <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n</ng-container>\n<ng-content></ng-content>\n<div class=\"ant-table-column-sorter\" *ngIf=\"dwShowSort\">\n      <span\n        class=\"ant-table-column-sorter-up\"\n        [class.on]=\"dwSort == 'ascend'\"\n        [class.off]=\"dwSort != 'ascend'\"\n        title=\"\u2191\"\n        (click)=\"setSortValue('ascend')\">\n        <i class=\"anticon anticon-caret-up\"></i>\n      </span>\n  <span\n    class=\"ant-table-column-sorter-down\"\n    [class.on]=\"dwSort == 'descend'\"\n    [class.off]=\"dwSort != 'descend'\"\n    title=\"\u2193\"\n    (click)=\"setSortValue('descend')\">\n        <i class=\"anticon anticon-caret-down\"></i>\n      </span>\n</div>\n<dw-dropdown dwTrigger=\"click\" *ngIf=\"dwShowFilter\" [dwClickHide]=\"false\" [hasFilterButton]=\"true\" (dwVisibleChange)=\"dropDownVisibleChange($event)\">\n  <i class=\"anticon anticon-filter\" [class.ant-table-filter-selected]=\"hasFilterValue\" dw-dropdown></i>\n  <ul dw-menu>\n    <ng-container *ngIf=\"dwFilterMultiple\">\n      <li dw-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\n        <label dw-checkbox [ngModel]=\"filter.checked\"></label><span>{{filter.text}}</span>\n      </li>\n    </ng-container>\n    <ng-container *ngIf=\"!dwFilterMultiple\">\n      <li dw-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\n        <label dw-radio [ngModel]=\"filter.checked\">{{filter.text}}</label>\n      </li>\n    </ng-container>\n  </ul>\n  <div class=\"ant-table-filter-dropdown-btns\">\n    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\n      <span (click)=\"search()\">{{'Table.filterConfirm' | dwI18n}}</span>\n    </a>\n    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"hideDropDown()\">\n      <span (click)=\"reset()\">{{'Table.filterReset' | dwI18n}}</span>\n    </a>\n  </div>\n</dw-dropdown>"
            }] }
];
/** @nocollapse */
DwThComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DwThComponent.propDecorators = {
    dwSelections: [{ type: Input }],
    dwChecked: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwIndeterminate: [{ type: Input }],
    dwSortKey: [{ type: Input }],
    dwFilterMultiple: [{ type: Input }],
    dwWidth: [{ type: Input }],
    dwCheckedChange: [{ type: Output }],
    dwDropDownComponent: [{ type: ViewChild, args: [DwDropDownComponent,] }],
    dwSortChange: [{ type: Output }],
    dwSortChangeWithKey: [{ type: Output }],
    dwFilterChange: [{ type: Output }],
    hasFiltersClass: [{ type: HostBinding, args: ['class.ant-table-column-has-filters',] }],
    dwShowSort: [{ type: Input }],
    dwShowFilter: [{ type: Input }],
    dwShowRowSelection: [{ type: Input }],
    dwLeft: [{ type: Input }],
    dwRight: [{ type: Input }],
    dwExpand: [{ type: Input }],
    dwShowCheckbox: [{ type: Input }],
    dwSort: [{ type: Input }],
    dwFilters: [{ type: Input }]
};
function DwThComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwThComponent.prototype._sort;
    /** @type {?} */
    DwThComponent.prototype._filters;
    /** @type {?} */
    DwThComponent.prototype._showSort;
    /** @type {?} */
    DwThComponent.prototype._showFilter;
    /** @type {?} */
    DwThComponent.prototype._showCheckbox;
    /** @type {?} */
    DwThComponent.prototype._showRowSelection;
    /** @type {?} */
    DwThComponent.prototype._hasDefaultFilter;
    /** @type {?} */
    DwThComponent.prototype.el;
    /** @type {?} */
    DwThComponent.prototype.hasFilterValue;
    /** @type {?} */
    DwThComponent.prototype.multipleFilterList;
    /** @type {?} */
    DwThComponent.prototype.singleFilterList;
    /** @type {?} */
    DwThComponent.prototype.dwSelections;
    /** @type {?} */
    DwThComponent.prototype.dwChecked;
    /** @type {?} */
    DwThComponent.prototype.dwDisabled;
    /** @type {?} */
    DwThComponent.prototype.dwIndeterminate;
    /** @type {?} */
    DwThComponent.prototype.dwSortKey;
    /** @type {?} */
    DwThComponent.prototype.dwFilterMultiple;
    /** @type {?} */
    DwThComponent.prototype.dwWidth;
    /** @type {?} */
    DwThComponent.prototype.dwCheckedChange;
    /** @type {?} */
    DwThComponent.prototype.dwDropDownComponent;
    /** @type {?} */
    DwThComponent.prototype.dwSortChange;
    /** @type {?} */
    DwThComponent.prototype.dwSortChangeWithKey;
    /** @type {?} */
    DwThComponent.prototype.dwFilterChange;
    /** @type {?} */
    DwThComponent.prototype.elementRef;
    /** @type {?} */
    DwThComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFrQnhFLE1BQU07Ozs7O0lBb09KLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7cUJBbk92RCxJQUFJO3dCQUNlLEVBQUU7eUJBQ2pCLEtBQUs7MkJBQ0gsS0FBSzs2QkFDSCxLQUFLO2lDQUNELEtBQUs7aUNBQ0wsS0FBSzs4QkFFaEIsS0FBSztrQ0FDb0IsRUFBRTtnQ0FDSixFQUFFOzs0QkFFc0IsRUFBRTt5QkFDN0MsS0FBSzswQkFDSixLQUFLOytCQUNBLEtBQUs7Z0NBRUosSUFBSTsrQkFFSixJQUFJLFlBQVksRUFBVzs0QkFFOUIsSUFBSSxZQUFZLEVBQVU7bUNBQ25CLElBQUksWUFBWSxFQUFrQzs7OEJBRXZELElBQUksWUFBWSxFQUFlO1FBNE14RCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDOzs7O0lBM01ELElBQ0ksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztLQUM3Qzs7Ozs7SUFF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T0YsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQWEsd0JBQXdCO2dCQUM3QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQix3NEZBQTZDO2FBQzlDOzs7O1lBN0JDLFVBQVU7WUFLVixTQUFTOzs7MkJBc0NSLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3NCQUNMLEtBQUs7OEJBQ0wsTUFBTTtrQ0FDTixTQUFTLFNBQUMsbUJBQW1COzJCQUM3QixNQUFNO2tDQUNOLE1BQU07NkJBRU4sTUFBTTs4QkFFTixXQUFXLFNBQUMsb0NBQW9DO3lCQUtoRCxLQUFLOzJCQVNMLEtBQUs7aUNBU0wsS0FBSztxQkFjTCxLQUFLO3NCQVdMLEtBQUs7dUJBV0wsS0FBSzs2QkFVTCxLQUFLO3FCQWNMLEtBQUs7d0JBK0VMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9kdy1kcm9wZG93bi5jb21wb25lbnQnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG5leHBvcnQgdHlwZSBEd1RoRmlsdGVyVHlwZSA9IEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55OyBieURlZmF1bHQ/OiBib29sZWFuIH0+O1xuXG5leHBvcnQgaW50ZXJmYWNlIER3VGhJdGVtSW50ZXJmYWNlIHtcbiAgdGV4dDogc3RyaW5nO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHZhbHVlOiBhbnk7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICd0aDpub3QoLmR3LWRpc2FibGUtdGgpJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1RoQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc29ydCA9IG51bGw7XG4gIHByaXZhdGUgX2ZpbHRlcnM6IER3VGhGaWx0ZXJUeXBlID0gW107XG4gIHByaXZhdGUgX3Nob3dTb3J0ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dGaWx0ZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0NoZWNrYm94ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dSb3dTZWxlY3Rpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGFzRGVmYXVsdEZpbHRlciA9IGZhbHNlO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIGhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XG4gIG11bHRpcGxlRmlsdGVyTGlzdDogRHdUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICBzaW5nbGVGaWx0ZXJMaXN0OiBEd1RoSXRlbUludGVyZmFjZVtdID0gW107XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQElucHV0KCkgZHdTZWxlY3Rpb25zOiBBcnJheTx7IHRleHQ6IHN0cmluZywgb25TZWxlY3Q6IGFueSB9PiA9IFtdO1xuICBASW5wdXQoKSBkd0NoZWNrZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkd0luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdTb3J0S2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3RmlsdGVyTXVsdGlwbGUgPSB0cnVlO1xuICBASW5wdXQoKSBkd1dpZHRoOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBkd0NoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBWaWV3Q2hpbGQoRHdEcm9wRG93bkNvbXBvbmVudCkgZHdEcm9wRG93bkNvbXBvbmVudDogRHdEcm9wRG93bkNvbXBvbmVudDtcbiAgQE91dHB1dCgpIGR3U29ydENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgZHdTb3J0Q2hhbmdlV2l0aEtleSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBkd0ZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10gfCBhbnk+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtdGFibGUtY29sdW1uLWhhcy1maWx0ZXJzJylcbiAgZ2V0IGhhc0ZpbHRlcnNDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1Nob3dTb3J0IHx8IHRoaXMuZHdTaG93RmlsdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1NvcnQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U29ydCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93U29ydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NvcnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93RmlsdGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0ZpbHRlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93RmlsdGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93RmlsdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1Jvd1NlbGVjdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dSb3dTZWxlY3Rpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zaG93Um93U2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbi1jdXN0b20nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3U2hvd1Jvd1NlbGVjdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1Jvd1NlbGVjdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0xlZnQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1sZWZ0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGVmdCcsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRoLWxlZnQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdsZWZ0Jyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UmlnaHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1yaWdodC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3JpZ2h0JywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtcmlnaHQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdyaWdodCcpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0V4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGlzRXhwYW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAoaXNFeHBhbmQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1leHBhbmQtaWNvbi10aCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtZXhwYW5kLWljb24tdGgnKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93Q2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Q2hlY2tib3ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zaG93Q2hlY2tib3gpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3U2hvd0NoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q2hlY2tib3g7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTb3J0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zb3J0ID0gdmFsdWU7XG4gICAgaWYgKCh2YWx1ZSAhPT0gJ2FzY2VuZCcpICYmICh2YWx1ZSAhPT0gJ2Rlc2NlbmQnKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLWNvbHVtbi1zb3J0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1jb2x1bW4tc29ydCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1NvcnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydDtcbiAgfVxuXG4gIHNldFNvcnRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdTb3J0ID09PSB2YWx1ZSkge1xuICAgICAgdGhpcy5kd1NvcnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR3U29ydCA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmR3U29ydENoYW5nZVdpdGhLZXkuZW1pdCh7IGtleTogdGhpcy5kd1NvcnRLZXksIHZhbHVlOiB0aGlzLmR3U29ydCB9KTtcbiAgICB0aGlzLmR3U29ydENoYW5nZS5lbWl0KHRoaXMuZHdTb3J0KTtcbiAgfVxuXG4gIGdldCBmaWx0ZXJMaXN0KCk6IER3VGhJdGVtSW50ZXJmYWNlW10ge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlRmlsdGVyTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBnZXQgZmlsdGVyVmFsdWUoKTogYW55IHtcbiAgICBjb25zdCBjaGVja2VkRmlsdGVyID0gdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZpbmQoaXRlbSA9PiBpdGVtLmNoZWNrZWQpO1xuICAgIHJldHVybiBjaGVja2VkRmlsdGVyID8gY2hlY2tlZEZpbHRlci52YWx1ZSA6IG51bGw7XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdGaWx0ZXJNdWx0aXBsZSkge1xuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IHRoaXMuZmlsdGVyTGlzdC5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gaXNOb3ROaWwodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XG4gICAgaWYgKHRoaXMuZHdGaWx0ZXJNdWx0aXBsZSkge1xuICAgICAgdGhpcy5kd0ZpbHRlckNoYW5nZS5lbWl0KHRoaXMuZmlsdGVyTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHdGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlclZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5oaWRlRHJvcERvd24oKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdE11bHRpcGxlRmlsdGVyTGlzdCh0cnVlKTtcbiAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KHRydWUpO1xuICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgdGhpcy5oaWRlRHJvcERvd24oKTtcbiAgICB0aGlzLmhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBjaGVja011bHRpcGxlKGZpbHRlcjogRHdUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBmaWx0ZXIuY2hlY2tlZCA9ICFmaWx0ZXIuY2hlY2tlZDtcbiAgfVxuXG4gIGNoZWNrU2luZ2xlKGZpbHRlcjogRHdUaEl0ZW1JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2hlY2tlZCA9IGl0ZW0gPT09IGZpbHRlcik7XG4gIH1cblxuICBoaWRlRHJvcERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5kd0Ryb3BEb3duQ29tcG9uZW50LmR3VmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZHdEcm9wRG93bkNvbXBvbmVudC5oaWRlKCk7XG4gIH1cblxuICBkcm9wRG93blZpc2libGVDaGFuZ2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0ZpbHRlcnModmFsdWU6IER3VGhGaWx0ZXJUeXBlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLl9maWx0ZXJzID0gdmFsdWU7XG4gICAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QoKTtcbiAgICAgIHRoaXMuaW5pdFNpbmdsZUZpbHRlckxpc3QoKTtcbiAgICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignZHdGaWx0ZXJzIG9ubHkgYWNjZXB0IHR5cGUgb2YgQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBhbnkgfT4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdGaWx0ZXJzKCk6IER3VGhGaWx0ZXJUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVycztcbiAgfVxuXG4gIGluaXRNdWx0aXBsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tdWx0aXBsZUZpbHRlckxpc3QgPSB0aGlzLmR3RmlsdGVycy5tYXAoaXRlbSA9PiB7XG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XG4gICAgICBpZiAoY2hlY2tlZCkgeyB0aGlzLl9oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIHsgdGV4dDogaXRlbS50ZXh0LCB2YWx1ZTogaXRlbS52YWx1ZSwgY2hlY2tlZCB9O1xuICAgIH0pO1xuICAgIHRoaXMuY2hlY2tEZWZhdWx0RmlsdGVycygpO1xuICB9XG5cbiAgaW5pdFNpbmdsZUZpbHRlckxpc3QoZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0ID0gdGhpcy5kd0ZpbHRlcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xuICAgICAgaWYgKGNoZWNrZWQpIHsgdGhpcy5faGFzRGVmYXVsdEZpbHRlciA9IHRydWU7IH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcbiAgICB9KTtcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcbiAgfVxuXG4gIGNoZWNrRGVmYXVsdEZpbHRlcnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmR3RmlsdGVycyB8fCB0aGlzLmR3RmlsdGVycy5sZW5ndGggPT09IDAgfHwgIXRoaXMuX2hhc0RlZmF1bHRGaWx0ZXIpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=
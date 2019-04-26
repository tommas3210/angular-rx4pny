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
var DwThComponent = /** @class */ (function () {
    function DwThComponent(elementRef, renderer) {
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
    Object.defineProperty(DwThComponent.prototype, "hasFiltersClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwShowSort || this.dwShowFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwShowSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSort = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwShowFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showFilter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showFilter = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwShowRowSelection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showRowSelection;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showRowSelection = toBoolean(value);
            if (this._showRowSelection) {
                this.renderer.addClass(this.el, 'ant-table-selection-column-custom');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column-custom');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwLeft", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-th-left-sticky');
                this.renderer.setStyle(this.el, 'left', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-th-left-sticky');
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwRight", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-th-right-sticky');
                this.renderer.setStyle(this.el, 'right', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-th-right-sticky');
                this.renderer.removeStyle(this.el, 'right');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwExpand", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isExpand = toBoolean(value);
            if (isExpand) {
                this.renderer.addClass(this.el, 'ant-table-expand-icon-th');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-expand-icon-th');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwShowCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showCheckbox = toBoolean(value);
            if (this._showCheckbox) {
                this.renderer.addClass(this.el, 'ant-table-selection-column');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "dwSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sort = value;
            if ((value !== 'ascend') && (value !== 'descend')) {
                this.renderer.removeClass(this.el, 'ant-table-column-sort');
            }
            else {
                this.renderer.addClass(this.el, 'ant-table-column-sort');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DwThComponent.prototype.setSortValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.dwSort === value) {
            this.dwSort = null;
        }
        else {
            this.dwSort = value;
        }
        this.dwSortChangeWithKey.emit({ key: this.dwSortKey, value: this.dwSort });
        this.dwSortChange.emit(this.dwSort);
    };
    Object.defineProperty(DwThComponent.prototype, "filterList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multipleFilterList.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwThComponent.prototype, "filterValue", {
        /* tslint:disable-next-line:no-any */
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var checkedFilter = this.singleFilterList.find(function (item) { return item.checked; });
            return checkedFilter ? checkedFilter.value : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwThComponent.prototype.updateFilterStatus = /**
     * @return {?}
     */
    function () {
        if (this.dwFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    };
    /**
     * @return {?}
     */
    DwThComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.updateFilterStatus();
        if (this.dwFilterMultiple) {
            this.dwFilterChange.emit(this.filterList);
        }
        else {
            this.dwFilterChange.emit(this.filterValue);
        }
        this.hideDropDown();
    };
    /**
     * @return {?}
     */
    DwThComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.search();
        this.hideDropDown();
        this.hasFilterValue = false;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    DwThComponent.prototype.checkMultiple = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        filter.checked = !filter.checked;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    DwThComponent.prototype.checkSingle = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.singleFilterList.forEach(function (item) { return item.checked = item === filter; });
    };
    /**
     * @return {?}
     */
    DwThComponent.prototype.hideDropDown = /**
     * @return {?}
     */
    function () {
        this.dwDropDownComponent.dwVisible = false;
        this.dwDropDownComponent.hide();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwThComponent.prototype.dropDownVisibleChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            this.search();
        }
    };
    Object.defineProperty(DwThComponent.prototype, "dwFilters", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filters;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value)) {
                this._filters = value;
                this.initMultipleFilterList();
                this.initSingleFilterList();
                this.updateFilterStatus();
            }
            else {
                console.warn('dwFilters only accept type of Array<{ text: string; value: any }>');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    DwThComponent.prototype.initMultipleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.multipleFilterList = this.dwFilters.map(function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    DwThComponent.prototype.initSingleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.singleFilterList = this.dwFilters.map(function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    /**
     * @return {?}
     */
    DwThComponent.prototype.checkDefaultFilters = /**
     * @return {?}
     */
    function () {
        if (!this.dwFilters || this.dwFilters.length === 0 || !this._hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    };
    DwThComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'th:not(.dw-disable-th)',
                    preserveWhitespaces: false,
                    template: "<ng-template #checkboxTemplate>\n  <label\n    [class.ant-table-selection-select-all-custom]=\"dwShowRowSelection\"\n    dw-checkbox\n    [(ngModel)]=\"dwChecked\"\n    [dwDisabled]=\"dwDisabled\"\n    [dwIndeterminate]=\"dwIndeterminate\"\n    (ngModelChange)=\"dwCheckedChange.emit($event)\">\n  </label>\n</ng-template>\n<div class=\"ant-table-selection\" *ngIf=\"dwShowRowSelection\">\n  <ng-container *ngIf=\"dwShowCheckbox\">\n    <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n  </ng-container>\n  <dw-dropdown dwPlacement=\"bottomLeft\">\n    <div dw-dropdown class=\"ant-table-selection-down\">\n      <i class=\"anticon anticon-down\"></i>\n    </div>\n    <ul dw-menu class=\"ant-table-selection-menu\">\n      <li dw-menu-item *ngFor=\"let selection of dwSelections\" (click)=\"selection.onSelect()\">{{selection.text}}</li>\n    </ul>\n  </dw-dropdown>\n</div>\n<ng-container *ngIf=\"dwShowCheckbox && !dwShowRowSelection\">\n  <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n</ng-container>\n<ng-content></ng-content>\n<div class=\"ant-table-column-sorter\" *ngIf=\"dwShowSort\">\n      <span\n        class=\"ant-table-column-sorter-up\"\n        [class.on]=\"dwSort == 'ascend'\"\n        [class.off]=\"dwSort != 'ascend'\"\n        title=\"\u2191\"\n        (click)=\"setSortValue('ascend')\">\n        <i class=\"anticon anticon-caret-up\"></i>\n      </span>\n  <span\n    class=\"ant-table-column-sorter-down\"\n    [class.on]=\"dwSort == 'descend'\"\n    [class.off]=\"dwSort != 'descend'\"\n    title=\"\u2193\"\n    (click)=\"setSortValue('descend')\">\n        <i class=\"anticon anticon-caret-down\"></i>\n      </span>\n</div>\n<dw-dropdown dwTrigger=\"click\" *ngIf=\"dwShowFilter\" [dwClickHide]=\"false\" [hasFilterButton]=\"true\" (dwVisibleChange)=\"dropDownVisibleChange($event)\">\n  <i class=\"anticon anticon-filter\" [class.ant-table-filter-selected]=\"hasFilterValue\" dw-dropdown></i>\n  <ul dw-menu>\n    <ng-container *ngIf=\"dwFilterMultiple\">\n      <li dw-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\n        <label dw-checkbox [ngModel]=\"filter.checked\"></label><span>{{filter.text}}</span>\n      </li>\n    </ng-container>\n    <ng-container *ngIf=\"!dwFilterMultiple\">\n      <li dw-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\n        <label dw-radio [ngModel]=\"filter.checked\">{{filter.text}}</label>\n      </li>\n    </ng-container>\n  </ul>\n  <div class=\"ant-table-filter-dropdown-btns\">\n    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\n      <span (click)=\"search()\">{{'Table.filterConfirm' | dwI18n}}</span>\n    </a>\n    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"hideDropDown()\">\n      <span (click)=\"reset()\">{{'Table.filterReset' | dwI18n}}</span>\n    </a>\n  </div>\n</dw-dropdown>"
                }] }
    ];
    /** @nocollapse */
    DwThComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return DwThComponent;
}());
export { DwThComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBc1B0RSx1QkFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQkFuT3ZELElBQUk7d0JBQ2UsRUFBRTt5QkFDakIsS0FBSzsyQkFDSCxLQUFLOzZCQUNILEtBQUs7aUNBQ0QsS0FBSztpQ0FDTCxLQUFLOzhCQUVoQixLQUFLO2tDQUNvQixFQUFFO2dDQUNKLEVBQUU7OzRCQUVzQixFQUFFO3lCQUM3QyxLQUFLOzBCQUNKLEtBQUs7K0JBQ0EsS0FBSztnQ0FFSixJQUFJOytCQUVKLElBQUksWUFBWSxFQUFXOzRCQUU5QixJQUFJLFlBQVksRUFBVTttQ0FDbkIsSUFBSSxZQUFZLEVBQWtDOzs4QkFFdkQsSUFBSSxZQUFZLEVBQWU7UUE0TXhELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDekM7SUEzTUQsc0JBQ0ksMENBQWU7Ozs7UUFEbkI7WUFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztTQUM3Qzs7O09BQUE7SUFFRCxz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QUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO1NBQ3hELENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsMkNBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDMUYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7O2dCQXhPRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBYSx3QkFBd0I7b0JBQzdDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHc0RkFBNkM7aUJBQzlDOzs7O2dCQTdCQyxVQUFVO2dCQUtWLFNBQVM7OzsrQkFzQ1IsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7a0NBQ0wsS0FBSzs0QkFDTCxLQUFLO21DQUNMLEtBQUs7MEJBQ0wsS0FBSztrQ0FDTCxNQUFNO3NDQUNOLFNBQVMsU0FBQyxtQkFBbUI7K0JBQzdCLE1BQU07c0NBQ04sTUFBTTtpQ0FFTixNQUFNO2tDQUVOLFdBQVcsU0FBQyxvQ0FBb0M7NkJBS2hELEtBQUs7K0JBU0wsS0FBSztxQ0FTTCxLQUFLO3lCQWNMLEtBQUs7MEJBV0wsS0FBSzsyQkFXTCxLQUFLO2lDQVVMLEtBQUs7eUJBY0wsS0FBSzs0QkErRUwsS0FBSzs7d0JBN05SOztTQWdDYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd0Ryb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vZHctZHJvcGRvd24uY29tcG9uZW50JztcblxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuZXhwb3J0IHR5cGUgRHdUaEZpbHRlclR5cGUgPSBBcnJheTx7IHRleHQ6IHN0cmluZzsgdmFsdWU6IGFueTsgYnlEZWZhdWx0PzogYm9vbGVhbiB9PjtcblxuZXhwb3J0IGludGVyZmFjZSBEd1RoSXRlbUludGVyZmFjZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB2YWx1ZTogYW55O1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvciAgICAgICAgICAgOiAndGg6bm90KC5kdy1kaXNhYmxlLXRoKScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy10aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdUaENvbXBvbmVudCB7XG4gIHByaXZhdGUgX3NvcnQgPSBudWxsO1xuICBwcml2YXRlIF9maWx0ZXJzOiBEd1RoRmlsdGVyVHlwZSA9IFtdO1xuICBwcml2YXRlIF9zaG93U29ydCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93RmlsdGVyID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dDaGVja2JveCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93Um93U2VsZWN0aW9uID0gZmFsc2U7XG4gIHByaXZhdGUgX2hhc0RlZmF1bHRGaWx0ZXIgPSBmYWxzZTtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBoYXNGaWx0ZXJWYWx1ZSA9IGZhbHNlO1xuICBtdWx0aXBsZUZpbHRlckxpc3Q6IER3VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgc2luZ2xlRmlsdGVyTGlzdDogRHdUaEl0ZW1JbnRlcmZhY2VbXSA9IFtdO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBJbnB1dCgpIGR3U2VsZWN0aW9uczogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIG9uU2VsZWN0OiBhbnkgfT4gPSBbXTtcbiAgQElucHV0KCkgZHdDaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3U29ydEtleTogc3RyaW5nO1xuICBASW5wdXQoKSBkd0ZpbHRlck11bHRpcGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgZHdXaWR0aDogc3RyaW5nO1xuICBAT3V0cHV0KCkgZHdDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAVmlld0NoaWxkKER3RHJvcERvd25Db21wb25lbnQpIGR3RHJvcERvd25Db21wb25lbnQ6IER3RHJvcERvd25Db21wb25lbnQ7XG4gIEBPdXRwdXQoKSBkd1NvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGR3U29ydENoYW5nZVdpdGhLZXkgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgZHdGaWx0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdIHwgYW55PigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtZmlsdGVycycpXG4gIGdldCBoYXNGaWx0ZXJzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdTaG93U29ydCB8fCB0aGlzLmR3U2hvd0ZpbHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dTb3J0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NvcnQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd1NvcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTb3J0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd0ZpbHRlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dGaWx0ZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0ZpbHRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0ZpbHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dSb3dTZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Um93U2VsZWN0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2hvd1Jvd1NlbGVjdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uLWN1c3RvbScpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1Nob3dSb3dTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dSb3dTZWxlY3Rpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMZWZ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtbGVmdC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1sZWZ0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnbGVmdCcpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1JpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtcmlnaHQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdyaWdodCcsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRoLXJpZ2h0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncmlnaHQnKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpc0V4cGFuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKGlzRXhwYW5kKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtZXhwYW5kLWljb24tdGgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLWV4cGFuZC1pY29uLXRoJyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd0NoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0NoZWNrYm94ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2hvd0NoZWNrYm94KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1Nob3dDaGVja2JveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NoZWNrYm94O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U29ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc29ydCA9IHZhbHVlO1xuICAgIGlmICgodmFsdWUgIT09ICdhc2NlbmQnKSAmJiAodmFsdWUgIT09ICdkZXNjZW5kJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1jb2x1bW4tc29ydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtY29sdW1uLXNvcnQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdTb3J0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXRTb3J0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3U29ydCA9PT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuZHdTb3J0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kd1NvcnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5kd1NvcnRDaGFuZ2VXaXRoS2V5LmVtaXQoeyBrZXk6IHRoaXMuZHdTb3J0S2V5LCB2YWx1ZTogdGhpcy5kd1NvcnQgfSk7XG4gICAgdGhpcy5kd1NvcnRDaGFuZ2UuZW1pdCh0aGlzLmR3U29ydCk7XG4gIH1cblxuICBnZXQgZmlsdGVyTGlzdCgpOiBEd1RoSXRlbUludGVyZmFjZVtdIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZUZpbHRlckxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgZ2V0IGZpbHRlclZhbHVlKCk6IGFueSB7XG4gICAgY29uc3QgY2hlY2tlZEZpbHRlciA9IHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5jaGVja2VkKTtcbiAgICByZXR1cm4gY2hlY2tlZEZpbHRlciA/IGNoZWNrZWRGaWx0ZXIudmFsdWUgOiBudWxsO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVyU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RmlsdGVyTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlckxpc3QubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGlzTm90TmlsKHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xuICAgIGlmICh0aGlzLmR3RmlsdGVyTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuZHdGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlckxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR3RmlsdGVyQ2hhbmdlLmVtaXQodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuaGlkZURyb3BEb3duKCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QodHJ1ZSk7XG4gICAgdGhpcy5pbml0U2luZ2xlRmlsdGVyTGlzdCh0cnVlKTtcbiAgICB0aGlzLnNlYXJjaCgpO1xuICAgIHRoaXMuaGlkZURyb3BEb3duKCk7XG4gICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgY2hlY2tNdWx0aXBsZShmaWx0ZXI6IER3VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgZmlsdGVyLmNoZWNrZWQgPSAhZmlsdGVyLmNoZWNrZWQ7XG4gIH1cblxuICBjaGVja1NpbmdsZShmaWx0ZXI6IER3VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmNoZWNrZWQgPSBpdGVtID09PSBmaWx0ZXIpO1xuICB9XG5cbiAgaGlkZURyb3BEb3duKCk6IHZvaWQge1xuICAgIHRoaXMuZHdEcm9wRG93bkNvbXBvbmVudC5kd1Zpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLmR3RHJvcERvd25Db21wb25lbnQuaGlkZSgpO1xuICB9XG5cbiAgZHJvcERvd25WaXNpYmxlQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdGaWx0ZXJzKHZhbHVlOiBEd1RoRmlsdGVyVHlwZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZmlsdGVycyA9IHZhbHVlO1xuICAgICAgdGhpcy5pbml0TXVsdGlwbGVGaWx0ZXJMaXN0KCk7XG4gICAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2R3RmlsdGVycyBvbmx5IGFjY2VwdCB0eXBlIG9mIEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55IH0+Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3RmlsdGVycygpOiBEd1RoRmlsdGVyVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7XG4gIH1cblxuICBpbml0TXVsdGlwbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0ID0gdGhpcy5kd0ZpbHRlcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xuICAgICAgaWYgKGNoZWNrZWQpIHsgdGhpcy5faGFzRGVmYXVsdEZpbHRlciA9IHRydWU7IH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcbiAgICB9KTtcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcbiAgfVxuXG4gIGluaXRTaW5nbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVyTGlzdCA9IHRoaXMuZHdGaWx0ZXJzLm1hcChpdGVtID0+IHtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBmb3JjZSA/IGZhbHNlIDogISFpdGVtLmJ5RGVmYXVsdDtcbiAgICAgIGlmIChjaGVja2VkKSB7IHRoaXMuX2hhc0RlZmF1bHRGaWx0ZXIgPSB0cnVlOyB9XG4gICAgICByZXR1cm4geyB0ZXh0OiBpdGVtLnRleHQsIHZhbHVlOiBpdGVtLnZhbHVlLCBjaGVja2VkIH07XG4gICAgfSk7XG4gICAgdGhpcy5jaGVja0RlZmF1bHRGaWx0ZXJzKCk7XG4gIH1cblxuICBjaGVja0RlZmF1bHRGaWx0ZXJzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kd0ZpbHRlcnMgfHwgdGhpcy5kd0ZpbHRlcnMubGVuZ3RoID09PSAwIHx8ICF0aGlzLl9oYXNEZWZhdWx0RmlsdGVyKSB7IHJldHVybjsgfVxuICAgIHRoaXMudXBkYXRlRmlsdGVyU3RhdHVzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19
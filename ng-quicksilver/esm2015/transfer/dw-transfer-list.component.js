/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, IterableDiffers, Output, TemplateRef } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
export class DwTransferListComponent {
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     * @param {?} differs
     */
    constructor(el, updateHostClassService, differs) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this._showSearch = false;
        // region: fields
        this.direction = '';
        this.titleText = '';
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        // endregion
        // region: styles
        this.prefixCls = 'ant-transfer-list';
        // endregion
        // region: select all
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
        this.listDiffer = differs.find([]).create(null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSearch(value) {
        this._showSearch = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get showSearch() {
        return this._showSearch;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-with-footer`]: !!this.footer
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @param {?} status
     * @return {?}
     */
    onHandleSelectAll(status) {
        this.dataSource.forEach(item => {
            if (!item.disabled && !item._hiden) {
                item.checked = status;
            }
        });
        this.updateCheckStatus();
        this.handleSelectAll.emit(status);
    }
    /**
     * @return {?}
     */
    updateCheckStatus() {
        /** @type {?} */
        const validCount = this.dataSource.filter(w => !w.disabled).length;
        this.stat.checkCount = this.dataSource.filter(w => w.checked && !w.disabled).length;
        this.stat.shownCount = this.dataSource.filter(w => !w._hiden).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleFilter(value) {
        this.filter = value;
        this.dataSource.forEach(item => {
            item._hiden = value.length > 0 && !this.matchFilter(value, item);
        });
        this.stat.shownCount = this.dataSource.filter(w => !w._hiden).length;
        this.filterChange.emit({ direction: this.direction, value });
    }
    /**
     * @return {?}
     */
    handleClear() {
        this.handleFilter('');
    }
    /**
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    matchFilter(text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        /** @type {?} */
        const change = this.listDiffer.diff(this.dataSource);
        if (change) {
            this.updateCheckStatus();
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _handleSelect(item) {
        if (item.disabled) {
            return;
        }
        item.checked = !item.checked;
        this.updateCheckStatus();
        this.handleSelect.emit(item);
    }
}
DwTransferListComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-transfer-list',
                preserveWhitespaces: false,
                providers: [DwUpdateHostClassService],
                template: "<div class=\"ant-transfer-list-header\">\n  <label dw-checkbox [ngModel]=\"stat.checkAll\" (ngModelChange)=\"onHandleSelectAll($event)\"\n    [dwIndeterminate]=\"stat.checkHalf\">\n  </label>\n  <span class=\"ant-transfer-list-header-selected\">\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n  </span>\n</div>\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n    <div dw-transfer-search\n      (valueChanged)=\"handleFilter($event)\"\n      (valueClear)=\"handleClear()\"\n      [placeholder]=\"searchPlaceholder\"\n      [value]=\"filter\"></div>\n  </div>\n  <ul class=\"ant-transfer-list-content\">\n    <ng-container *ngFor=\"let item of dataSource\">\n      <li *ngIf=\"!item._hiden\" (click)=\"_handleSelect(item)\" class=\"ant-transfer-list-content-item\">\n        <label dw-checkbox [ngModel]=\"item.checked\" [dwDisabled]=\"item.disabled\">\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n        </label>\n      </li>\n    </ng-container>\n  </ul>\n  <div class=\"ant-transfer-list-body-not-found\">{{ notFoundContent }}</div>\n</div>\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n</div>"
            }] }
];
/** @nocollapse */
DwTransferListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DwUpdateHostClassService },
    { type: IterableDiffers }
];
DwTransferListComponent.propDecorators = {
    direction: [{ type: Input }],
    titleText: [{ type: Input }],
    dataSource: [{ type: Input }],
    itemUnit: [{ type: Input }],
    itemsUnit: [{ type: Input }],
    filter: [{ type: Input }],
    showSearch: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    filterOption: [{ type: Input }],
    render: [{ type: Input }],
    footer: [{ type: Input }],
    handleSelectAll: [{ type: Output }],
    handleSelect: [{ type: Output }],
    filterChange: [{ type: Output }]
};
function DwTransferListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTransferListComponent.prototype._showSearch;
    /** @type {?} */
    DwTransferListComponent.prototype.direction;
    /** @type {?} */
    DwTransferListComponent.prototype.titleText;
    /** @type {?} */
    DwTransferListComponent.prototype.dataSource;
    /** @type {?} */
    DwTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    DwTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    DwTransferListComponent.prototype.filter;
    /** @type {?} */
    DwTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    DwTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    DwTransferListComponent.prototype.filterOption;
    /** @type {?} */
    DwTransferListComponent.prototype.render;
    /** @type {?} */
    DwTransferListComponent.prototype.footer;
    /** @type {?} */
    DwTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    DwTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    DwTransferListComponent.prototype.filterChange;
    /** @type {?} */
    DwTransferListComponent.prototype.prefixCls;
    /** @type {?} */
    DwTransferListComponent.prototype.stat;
    /** @type {?} */
    DwTransferListComponent.prototype.listDiffer;
    /** @type {?} */
    DwTransferListComponent.prototype.el;
    /** @type {?} */
    DwTransferListComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL2R3LXRyYW5zZmVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLGVBQWUsRUFHZixNQUFNLEVBRU4sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVVqRCxNQUFNOzs7Ozs7SUE0R0osWUFBb0IsRUFBYyxFQUFVLHNCQUFnRCxFQUFFLE9BQXdCO1FBQWxHLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCOzJCQTNHdEUsS0FBSzs7eUJBSU4sRUFBRTt5QkFDRixFQUFFOzBCQUVlLEVBQUU7d0JBRXBCLEVBQUU7eUJBQ0QsRUFBRTtzQkFDTCxFQUFFOzsrQkFvQitCLElBQUksWUFBWSxFQUFXOzRCQUN6QixJQUFJLFlBQVksRUFBRTs0QkFDTSxJQUFJLFlBQVksRUFBRTs7O3lCQU1uRixtQkFBbUI7OztvQkFjeEI7WUFDTCxRQUFRLEVBQUksS0FBSztZQUNqQixTQUFTLEVBQUcsS0FBSztZQUNqQixVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7UUFrREMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqRDs7Ozs7SUEvRkQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7OztJQW9CRCxXQUFXOztRQUNULE1BQU0sUUFBUSxHQUFHO1lBQ2YsQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLEVBQW1CLElBQUk7WUFDekMsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLGNBQWMsQ0FBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtTQUNuRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM5RTs7Ozs7SUFhRCxpQkFBaUIsQ0FBQyxNQUFlO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7YUFDdkI7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQzs7OztJQUVPLGlCQUFpQjs7UUFDdkIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0lBT3hFLFlBQVksQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsRSxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDOUQ7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN2Qjs7Ozs7O0lBRU8sV0FBVyxDQUFDLElBQVksRUFBRSxJQUFrQjtRQUNsRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztJQVduQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtLQUNGOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELFNBQVM7O1FBQ1AsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7S0FDRjs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBa0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOzs7WUE5SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxrQkFBa0I7Z0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCw0eURBQXdEO2FBQ3pEOzs7O1lBdEJDLFVBQVU7WUFZSCx3QkFBd0I7WUFSL0IsZUFBZTs7O3dCQXdCZCxLQUFLO3dCQUNMLEtBQUs7eUJBRUwsS0FBSzt1QkFFTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFHTCxLQUFLO2dDQVNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3FCQUVMLEtBQUs7cUJBQ0wsS0FBSzs4QkFHTCxNQUFNOzJCQUNOLE1BQU07MkJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgSXRlcmFibGVEaWZmZXIsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IFRyYW5zZmVySXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy10cmFuc2Zlci1saXN0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRyYW5zZmVyLWxpc3QuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3VHJhbnNmZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIERvQ2hlY2sge1xuICBwcml2YXRlIF9zaG93U2VhcmNoID0gZmFsc2U7XG5cbiAgLy8gcmVnaW9uOiBmaWVsZHNcblxuICBASW5wdXQoKSBkaXJlY3Rpb24gPSAnJztcbiAgQElucHV0KCkgdGl0bGVUZXh0ID0gJyc7XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICBASW5wdXQoKSBpdGVtVW5pdCA9ICcnO1xuICBASW5wdXQoKSBpdGVtc1VuaXQgPSAnJztcbiAgQElucHV0KCkgZmlsdGVyID0gJyc7XG5cbiAgLy8gc2VhcmNoXG4gIEBJbnB1dCgpXG4gIHNldCBzaG93U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgc2hvd1NlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBmaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKSByZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBmb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgaGFuZGxlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBoYW5kbGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxUcmFuc2Zlckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkaXJlY3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHN0eWxlc1xuXG4gIHByZWZpeENscyA9ICdhbnQtdHJhbnNmZXItbGlzdCc7XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXdpdGgtZm9vdGVyYCBdOiAhIXRoaXMuZm9vdGVyXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBzZWxlY3QgYWxsXG5cbiAgc3RhdCA9IHtcbiAgICBjaGVja0FsbCAgOiBmYWxzZSxcbiAgICBjaGVja0hhbGYgOiBmYWxzZSxcbiAgICBjaGVja0NvdW50OiAwLFxuICAgIHNob3duQ291bnQ6IDBcbiAgfTtcblxuICBvbkhhbmRsZVNlbGVjdEFsbChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5faGlkZW4pIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gc3RhdHVzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0QWxsLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsaWRDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0NvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+IHcuY2hlY2tlZCAmJiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3Ll9oaWRlbikubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0FsbCA9IHZhbGlkQ291bnQgPiAwICYmIHZhbGlkQ291bnQgPT09IHRoaXMuc3RhdC5jaGVja0NvdW50O1xuICAgIHRoaXMuc3RhdC5jaGVja0hhbGYgPSB0aGlzLnN0YXQuY2hlY2tDb3VudCA+IDAgJiYgIXRoaXMuc3RhdC5jaGVja0FsbDtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogc2VhcmNoXG5cbiAgaGFuZGxlRmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5faGlkZW4gPSB2YWx1ZS5sZW5ndGggPiAwICYmICF0aGlzLm1hdGNoRmlsdGVyKHZhbHVlLCBpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXQuc2hvd25Db3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5faGlkZW4pLmxlbmd0aDtcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHsgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiwgdmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVDbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcignJyk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoRmlsdGVyKHRleHQ6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmlsdGVyT3B0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJPcHRpb24odGV4dCwgaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtLnRpdGxlLmluY2x1ZGVzKHRleHQpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgbGlzdERpZmZlcjogSXRlcmFibGVEaWZmZXI8e30+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAgICB0aGlzLmxpc3REaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoJ2Zvb3RlcicgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2UgPSB0aGlzLmxpc3REaWZmZXIuZGlmZih0aGlzLmRhdGFTb3VyY2UpO1xuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlU2VsZWN0KGl0ZW06IFRyYW5zZmVySXRlbSk6IHZvaWQge1xuICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0LmVtaXQoaXRlbSk7XG4gIH1cbn1cbiJdfQ==
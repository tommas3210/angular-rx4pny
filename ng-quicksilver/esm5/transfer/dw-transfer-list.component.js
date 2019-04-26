/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, IterableDiffers, Output, TemplateRef } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
var DwTransferListComponent = /** @class */ (function () {
    function DwTransferListComponent(el, updateHostClassService, differs) {
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
    Object.defineProperty(DwTransferListComponent.prototype, "showSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSearch;
        },
        // search
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTransferListComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-with-footer"] = !!this.footer,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @param {?} status
     * @return {?}
     */
    DwTransferListComponent.prototype.onHandleSelectAll = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.dataSource.forEach(function (item) {
            if (!item.disabled && !item._hiden) {
                item.checked = status;
            }
        });
        this.updateCheckStatus();
        this.handleSelectAll.emit(status);
    };
    /**
     * @return {?}
     */
    DwTransferListComponent.prototype.updateCheckStatus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validCount = this.dataSource.filter(function (w) { return !w.disabled; }).length;
        this.stat.checkCount = this.dataSource.filter(function (w) { return w.checked && !w.disabled; }).length;
        this.stat.shownCount = this.dataSource.filter(function (w) { return !w._hiden; }).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    };
    // endregion
    // region: search
    /**
     * @param {?} value
     * @return {?}
     */
    DwTransferListComponent.prototype.handleFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.filter = value;
        this.dataSource.forEach(function (item) {
            item._hiden = value.length > 0 && !_this.matchFilter(value, item);
        });
        this.stat.shownCount = this.dataSource.filter(function (w) { return !w._hiden; }).length;
        this.filterChange.emit({ direction: this.direction, value: value });
    };
    /**
     * @return {?}
     */
    DwTransferListComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.handleFilter('');
    };
    /**
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    DwTransferListComponent.prototype.matchFilter = /**
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    function (text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwTransferListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    DwTransferListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    DwTransferListComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var change = this.listDiffer.diff(this.dataSource);
        if (change) {
            this.updateCheckStatus();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DwTransferListComponent.prototype._handleSelect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.disabled) {
            return;
        }
        item.checked = !item.checked;
        this.updateCheckStatus();
        this.handleSelect.emit(item);
    };
    DwTransferListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-transfer-list',
                    preserveWhitespaces: false,
                    providers: [DwUpdateHostClassService],
                    template: "<div class=\"ant-transfer-list-header\">\n  <label dw-checkbox [ngModel]=\"stat.checkAll\" (ngModelChange)=\"onHandleSelectAll($event)\"\n    [dwIndeterminate]=\"stat.checkHalf\">\n  </label>\n  <span class=\"ant-transfer-list-header-selected\">\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n  </span>\n</div>\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n    <div dw-transfer-search\n      (valueChanged)=\"handleFilter($event)\"\n      (valueClear)=\"handleClear()\"\n      [placeholder]=\"searchPlaceholder\"\n      [value]=\"filter\"></div>\n  </div>\n  <ul class=\"ant-transfer-list-content\">\n    <ng-container *ngFor=\"let item of dataSource\">\n      <li *ngIf=\"!item._hiden\" (click)=\"_handleSelect(item)\" class=\"ant-transfer-list-content-item\">\n        <label dw-checkbox [ngModel]=\"item.checked\" [dwDisabled]=\"item.disabled\">\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n        </label>\n      </li>\n    </ng-container>\n  </ul>\n  <div class=\"ant-transfer-list-body-not-found\">{{ notFoundContent }}</div>\n</div>\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwTransferListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DwUpdateHostClassService },
        { type: IterableDiffers }
    ]; };
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
    return DwTransferListComponent;
}());
export { DwTransferListComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL2R3LXRyYW5zZmVyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLGVBQWUsRUFHZixNQUFNLEVBRU4sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFzSC9DLGlDQUFvQixFQUFjLEVBQVUsc0JBQWdELEVBQUUsT0FBd0I7UUFBbEcsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7MkJBM0d0RSxLQUFLOzt5QkFJTixFQUFFO3lCQUNGLEVBQUU7MEJBRWUsRUFBRTt3QkFFcEIsRUFBRTt5QkFDRCxFQUFFO3NCQUNMLEVBQUU7OytCQW9CK0IsSUFBSSxZQUFZLEVBQVc7NEJBQ3pCLElBQUksWUFBWSxFQUFFOzRCQUNNLElBQUksWUFBWSxFQUFFOzs7eUJBTW5GLG1CQUFtQjs7O29CQWN4QjtZQUNMLFFBQVEsRUFBSSxLQUFLO1lBQ2pCLFNBQVMsRUFBRyxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxDQUFDO1lBQ2IsVUFBVSxFQUFFLENBQUM7U0FDZDtRQWtEQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pEO0lBL0ZELHNCQUNJLCtDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7UUFSRCxTQUFTOzs7OztRQUNULFVBQ2UsS0FBYztZ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Ozs7NEJBd0JkLEtBQUs7NEJBQ0wsS0FBSzs2QkFFTCxLQUFLOzJCQUVMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUdMLEtBQUs7b0NBU0wsS0FBSztrQ0FDTCxLQUFLOytCQUNMLEtBQUs7eUJBRUwsS0FBSzt5QkFDTCxLQUFLO2tDQUdMLE1BQU07K0JBQ04sTUFBTTsrQkFDTixNQUFNOztrQ0E1RFQ7O1NBMEJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRG9DaGVjayxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgSXRlcmFibGVEaWZmZXIsXG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IFRyYW5zZmVySXRlbSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy10cmFuc2Zlci1saXN0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRyYW5zZmVyLWxpc3QuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3VHJhbnNmZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIERvQ2hlY2sge1xuICBwcml2YXRlIF9zaG93U2VhcmNoID0gZmFsc2U7XG5cbiAgLy8gcmVnaW9uOiBmaWVsZHNcblxuICBASW5wdXQoKSBkaXJlY3Rpb24gPSAnJztcbiAgQElucHV0KCkgdGl0bGVUZXh0ID0gJyc7XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICBASW5wdXQoKSBpdGVtVW5pdCA9ICcnO1xuICBASW5wdXQoKSBpdGVtc1VuaXQgPSAnJztcbiAgQElucHV0KCkgZmlsdGVyID0gJyc7XG5cbiAgLy8gc2VhcmNoXG4gIEBJbnB1dCgpXG4gIHNldCBzaG93U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgc2hvd1NlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NlYXJjaDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBmaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKSByZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBmb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgaGFuZGxlU2VsZWN0QWxsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBoYW5kbGVTZWxlY3Q6IEV2ZW50RW1pdHRlcjxUcmFuc2Zlckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8eyBkaXJlY3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBlbmRyZWdpb25cblxuICAvLyByZWdpb246IHN0eWxlc1xuXG4gIHByZWZpeENscyA9ICdhbnQtdHJhbnNmZXItbGlzdCc7XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXdpdGgtZm9vdGVyYCBdOiAhIXRoaXMuZm9vdGVyXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBzZWxlY3QgYWxsXG5cbiAgc3RhdCA9IHtcbiAgICBjaGVja0FsbCAgOiBmYWxzZSxcbiAgICBjaGVja0hhbGYgOiBmYWxzZSxcbiAgICBjaGVja0NvdW50OiAwLFxuICAgIHNob3duQ291bnQ6IDBcbiAgfTtcblxuICBvbkhhbmRsZVNlbGVjdEFsbChzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5faGlkZW4pIHtcbiAgICAgICAgaXRlbS5jaGVja2VkID0gc3RhdHVzO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0QWxsLmVtaXQoc3RhdHVzKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsaWRDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0NvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+IHcuY2hlY2tlZCAmJiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3Ll9oaWRlbikubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0FsbCA9IHZhbGlkQ291bnQgPiAwICYmIHZhbGlkQ291bnQgPT09IHRoaXMuc3RhdC5jaGVja0NvdW50O1xuICAgIHRoaXMuc3RhdC5jaGVja0hhbGYgPSB0aGlzLnN0YXQuY2hlY2tDb3VudCA+IDAgJiYgIXRoaXMuc3RhdC5jaGVja0FsbDtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8vIHJlZ2lvbjogc2VhcmNoXG5cbiAgaGFuZGxlRmlsdGVyKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlciA9IHZhbHVlO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaXRlbS5faGlkZW4gPSB2YWx1ZS5sZW5ndGggPiAwICYmICF0aGlzLm1hdGNoRmlsdGVyKHZhbHVlLCBpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXQuc2hvd25Db3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5faGlkZW4pLmxlbmd0aDtcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHsgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiwgdmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVDbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcignJyk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoRmlsdGVyKHRleHQ6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmlsdGVyT3B0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJPcHRpb24odGV4dCwgaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtLnRpdGxlLmluY2x1ZGVzKHRleHQpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgbGlzdERpZmZlcjogSXRlcmFibGVEaWZmZXI8e30+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAgICB0aGlzLmxpc3REaWZmZXIgPSBkaWZmZXJzLmZpbmQoW10pLmNyZWF0ZShudWxsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoJ2Zvb3RlcicgaW4gY2hhbmdlcykge1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2UgPSB0aGlzLmxpc3REaWZmZXIuZGlmZih0aGlzLmRhdGFTb3VyY2UpO1xuICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQ2hlY2tTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlU2VsZWN0KGl0ZW06IFRyYW5zZmVySXRlbSk6IHZvaWQge1xuICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0LmVtaXQoaXRlbSk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
var DwListComponent = /** @class */ (function () {
    // endregion
    function DwListComponent(el, cd, updateHostClassService) {
        this.el = el;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        // region: fields
        this.dwDataSource = [];
        this._bordered = false;
        this._isHeader = false;
        this._header = '';
        this._isFooter = false;
        this._footer = '';
        this.dwItemLayout = 'horizontal';
        this._loading = false;
        this.dwSize = 'default';
        this._split = true;
        this.prefixCls = 'ant-list';
    }
    Object.defineProperty(DwListComponent.prototype, "dwBordered", {
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
    Object.defineProperty(DwListComponent.prototype, "dwHeader", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._header = null;
                this._headerTpl = value;
            }
            else {
                this._header = value;
            }
            this._isHeader = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwListComponent.prototype, "dwFooter", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._footer = null;
                this._footerTpl = value;
            }
            else {
                this._footer = value;
            }
            this._isFooter = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwListComponent.prototype, "dwLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwListComponent.prototype, "dwSplit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._split;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._split = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwListComponent.prototype._setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-vertical"] = this.dwItemLayout === 'vertical',
            _a[this.prefixCls + "-lg"] = this.dwSize === 'large',
            _a[this.prefixCls + "-sm"] = this.dwSize === 'small',
            _a[this.prefixCls + "-split"] = this.dwSplit,
            _a[this.prefixCls + "-bordered"] = this.dwBordered,
            _a[this.prefixCls + "-loading"] = this.dwLoading,
            _a[this.prefixCls + "-grid"] = this.dwGrid,
            _a[this.prefixCls + "-something-after-last-item"] = !!(this.dwLoadMore || this.dwPagination || this._isFooter),
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        this.cd.detectChanges();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._setClassMap();
    };
    DwListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-list',
                    template: "<ng-template #itemsTpl>\n  <ng-container *ngFor=\"let item of dwDataSource; let index = index\">\n    <ng-template\n      [ngTemplateOutlet]=\"dwRenderItem\"\n      [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n  </ng-container>\n</ng-template>\n<div *ngIf=\"_isHeader\" class=\"ant-list-header\">\n  <ng-container *ngIf=\"_header; else _headerTpl\">{{ _header }}</ng-container>\n</div>\n<dw-spin [dwSpinning]=\"dwLoading\">\n  <div *ngIf=\"dwLoading && dwDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\n  <div *ngIf=\"dwGrid; else itemsTpl\" dw-row [dwGutter]=\"dwGrid.gutter\">\n    <div dw-col [dwSpan]=\"dwGrid.span\" [dwXs]=\"dwGrid.xs\" [dwSm]=\"dwGrid.sm\" [dwMd]=\"dwGrid.md\" [dwLg]=\"dwGrid.lg\" [dwXl]=\"dwGrid.xl\" [dwXXl]=\"dwGrid.xxl\"\n      *ngFor=\"let item of dwDataSource; let index = index\">\n      <ng-template\n        [ngTemplateOutlet]=\"dwRenderItem\"\n        [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n    </div>\n  </div>\n</dw-spin>\n<ng-template [ngTemplateOutlet]=\"dwLoadMore\"></ng-template>\n<ng-content></ng-content>\n<div *ngIf=\"dwPagination\" class=\"ant-list-pagination\">\n  <ng-template [ngTemplateOutlet]=\"dwPagination\"></ng-template>\n</div>\n<div *ngIf=\"_isFooter\" class=\"ant-list-footer\">\n  <ng-container *ngIf=\"_footer; else _footerTpl\">{{ _footer }}</ng-container>\n</div>",
                    providers: [DwUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n    :host {\n      display: block;\n    }\n\n    dw-spin {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DwListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: DwUpdateHostClassService }
    ]; };
    DwListComponent.propDecorators = {
        dwDataSource: [{ type: Input }],
        dwBordered: [{ type: Input }],
        dwGrid: [{ type: Input }],
        dwHeader: [{ type: Input }],
        dwFooter: [{ type: Input }],
        dwItemLayout: [{ type: Input }],
        dwRenderItem: [{ type: Input }],
        dwLoading: [{ type: Input }],
        dwLoadMore: [{ type: Input }],
        dwPagination: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwSplit: [{ type: Input }]
    };
    return DwListComponent;
}());
export { DwListComponent };
function DwListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwListComponent.prototype.dwDataSource;
    /** @type {?} */
    DwListComponent.prototype._bordered;
    /** @type {?} */
    DwListComponent.prototype.dwGrid;
    /** @type {?} */
    DwListComponent.prototype._isHeader;
    /** @type {?} */
    DwListComponent.prototype._header;
    /** @type {?} */
    DwListComponent.prototype._headerTpl;
    /** @type {?} */
    DwListComponent.prototype._isFooter;
    /** @type {?} */
    DwListComponent.prototype._footer;
    /** @type {?} */
    DwListComponent.prototype._footerTpl;
    /** @type {?} */
    DwListComponent.prototype.dwItemLayout;
    /** @type {?} */
    DwListComponent.prototype.dwRenderItem;
    /** @type {?} */
    DwListComponent.prototype._loading;
    /** @type {?} */
    DwListComponent.prototype.dwLoadMore;
    /** @type {?} */
    DwListComponent.prototype.dwPagination;
    /** @type {?} */
    DwListComponent.prototype.dwSize;
    /** @type {?} */
    DwListComponent.prototype._split;
    /** @type {?} */
    DwListComponent.prototype.prefixCls;
    /** @type {?} */
    DwListComponent.prototype.el;
    /** @type {?} */
    DwListComponent.prototype.cd;
    /** @type {?} */
    DwListComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImxpc3QvZHctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBMkgvQyxZQUFZO0lBRVoseUJBQW9CLEVBQWMsRUFBVSxFQUFxQixFQUFVLHNCQUFnRDtRQUF2RyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCOzs0QkF2RzVGLEVBQUU7eUJBRWIsS0FBSzt5QkFhYixLQUFLO3VCQUNQLEVBQUU7eUJBZUEsS0FBSzt1QkFDUCxFQUFFOzRCQWV1QyxZQUFZO3dCQUk1QyxLQUFLO3NCQWNJLFNBQVM7c0JBRXBCLElBQUk7eUJBZUQsVUFBVTtLQXNCN0I7SUFwR0Qsc0JBQ0ksdUNBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBO0lBWUQsc0JBQ0kscUNBQVE7Ozs7O1FBRFosVUFDYSxLQUFpQztZQUM1QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUN6QjtpQkFBTTtn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bnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBMaXN0U2l6ZSwgRHdMaXN0R3JpZCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1saXN0JyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGR3LXNwaW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLy8gcmVnaW9uOiBmaWVsZHNcbiAgQElucHV0KCkgZHdEYXRhU291cmNlOiBhbnlbXSA9IFtdO1xuXG4gIHByaXZhdGUgX2JvcmRlcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Qm9yZGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdCb3JkZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cblxuICBASW5wdXQoKSBkd0dyaWQ6IER3TGlzdEdyaWQ7XG5cbiAgX2lzSGVhZGVyID0gZmFsc2U7XG4gIF9oZWFkZXIgPSAnJztcbiAgX2hlYWRlclRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SGVhZGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl9oZWFkZXIgPSBudWxsO1xuICAgICAgdGhpcy5faGVhZGVyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hlYWRlciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuX2lzSGVhZGVyID0gISF2YWx1ZTtcbiAgfVxuXG4gIF9pc0Zvb3RlciA9IGZhbHNlO1xuICBfZm9vdGVyID0gJyc7XG4gIF9mb290ZXJUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Zvb3Rlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fZm9vdGVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2Zvb3RlclRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb290ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0Zvb3RlciA9ICEhdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBkd0l0ZW1MYXlvdXQ6ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgQElucHV0KCkgZHdSZW5kZXJJdGVtOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3TG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpIGR3TG9hZE1vcmU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkd1BhZ2luYXRpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIGR3U2l6ZTogTGlzdFNpemUgPSAnZGVmYXVsdCc7XG5cbiAgcHJpdmF0ZSBfc3BsaXQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NwbGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc3BsaXQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U3BsaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NwbGl0O1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBzdHlsZXNcblxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtbGlzdCc7XG5cbiAgcHJpdmF0ZSBfc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgIF0gICAgICAgICAgICAgICAgIDogdGhpcy5kd0l0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1sZ2AgXSAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNtYCBdICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZHdTaXplID09PSAnc21hbGwnLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc3BsaXRgIF0gICAgICAgICAgICAgICAgICAgIDogdGhpcy5kd1NwbGl0LFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tYm9yZGVyZWRgIF0gICAgICAgICAgICAgICAgIDogdGhpcy5kd0JvcmRlcmVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbG9hZGluZ2AgXSAgICAgICAgICAgICAgICAgIDogdGhpcy5kd0xvYWRpbmcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1ncmlkYCBdICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmR3R3JpZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1gIF06ICEhKHRoaXMuZHdMb2FkTW9yZSB8fCB0aGlzLmR3UGFnaW5hdGlvbiB8fCB0aGlzLl9pc0Zvb3RlcilcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==
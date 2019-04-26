/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isInteger } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { DwI18nService } from '../i18n/dw-i18n.service';
var DwPaginationComponent = /** @class */ (function () {
    function DwPaginationComponent(i18n) {
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._simple = false;
        this._hideOnSinglePage = false;
        this._pageSize = 10;
        this._pageSizeOptions = [10, 20, 30, 40];
        this._pageIndex = 1;
        this.firstIndex = 1;
        this.pages = [];
        this.dwInTable = false;
        this.dwPageSizeChange = new EventEmitter();
        this.dwPageIndexChange = new EventEmitter();
    }
    Object.defineProperty(DwPaginationComponent.prototype, "dwItemRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemRender;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemRender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwShowSizeChanger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSizeChanger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSizeChanger = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwHideOnSinglePage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideOnSinglePage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideOnSinglePage = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwShowQuickJumper", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showQuickJumper;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showQuickJumper = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwSimple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._simple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._simple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwPageSizeOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSizeOptions;
        },
        /** page size changer select values */
        set: /**
         * page size changer select values
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.length) {
                this._pageSizeOptions = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwPageIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._pageIndex === value) {
                return;
            }
            if (value > this.lastIndex) {
                this._pageIndex = this.lastIndex;
            }
            else if (value < this.firstIndex) {
                this._pageIndex = this.firstIndex;
            }
            else {
                this._pageIndex = Number(value);
            }
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === this._pageSize) {
                return;
            }
            this._pageSize = value;
            /** @type {?} */
            var pageIndexOverflow = this.checkLastIndexOverflow();
            if (pageIndexOverflow) {
                this.dwPageIndex = this.lastIndex;
                this.dwPageIndexChange.emit(this.lastIndex);
            }
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "dwTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._total;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._total = value;
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    DwPaginationComponent.prototype.jumpPage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index === this.dwPageIndex) {
            return;
        }
        if (index < this.firstIndex) {
            this.dwPageIndex = this.firstIndex;
        }
        else if (index > this.lastIndex) {
            this.dwPageIndex = this.lastIndex;
        }
        else {
            this.dwPageIndex = index;
        }
        this.dwPageIndexChange.emit(this.dwPageIndex);
    };
    /**
     * @return {?}
     */
    DwPaginationComponent.prototype.jumpPreFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.dwPageIndex - 5);
    };
    /**
     * @return {?}
     */
    DwPaginationComponent.prototype.jumpNextFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.dwPageIndex + 5);
    };
    /**
     * @return {?}
     */
    DwPaginationComponent.prototype.jumpPreOne = /**
     * @return {?}
     */
    function () {
        if (this.isFirstIndex) {
            return;
        }
        this.jumpPage(this.dwPageIndex - 1);
    };
    /**
     * @return {?}
     */
    DwPaginationComponent.prototype.jumpNextOne = /**
     * @return {?}
     */
    function () {
        if (this.isLastIndex) {
            return;
        }
        this.jumpPage(this.dwPageIndex + 1);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DwPaginationComponent.prototype.onPageSizeChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.dwPageSize = $event;
        this.dwPageSizeChange.emit($event);
    };
    /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    DwPaginationComponent.prototype.handleKeyDown = /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    function (e, input, clearInputValue) {
        /** @type {?} */
        var target = input;
        /** @type {?} */
        var inputValue = target.value;
        /** @type {?} */
        var currentInputValue = this.dwPageIndex;
        /** @type {?} */
        var value;
        if (inputValue === '') {
            value = inputValue;
        }
        else if (isNaN(Number(inputValue))) {
            value = currentInputValue;
        }
        else {
            value = Number(inputValue);
        }
        this.handleChange(value, target, clearInputValue);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    DwPaginationComponent.prototype.isValid = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return isInteger(page) && (page >= 1) && (page !== this.dwPageIndex) && (page <= this.lastIndex);
    };
    /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    DwPaginationComponent.prototype.handleChange = /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    function (value, target, clearInputValue) {
        /** @type {?} */
        var page = value;
        if (this.isValid(page)) {
            this.dwPageIndex = page;
            this.dwPageIndexChange.emit(this.dwPageIndex);
        }
        if (clearInputValue) {
            target.value = null;
        }
        else {
            target.value = "" + this.dwPageIndex;
        }
    };
    /**
     * @return {?}
     */
    DwPaginationComponent.prototype.checkLastIndexOverflow = /**
     * @return {?}
     */
    function () {
        return this.dwPageIndex > this.lastIndex;
    };
    Object.defineProperty(DwPaginationComponent.prototype, "lastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.dwTotal / this.dwPageSize);
        },
        enumerable: true,
        configurable: true
    });
    /** generate indexes list */
    /**
     * generate indexes list
     * @return {?}
     */
    DwPaginationComponent.prototype.buildIndexes = /**
     * generate indexes list
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tmpPages = [];
        if (this.lastIndex <= 9) {
            for (var i = 2; i <= this.lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            /** @type {?} */
            var current = +this.dwPageIndex;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
            var right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (var i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    Object.defineProperty(DwPaginationComponent.prototype, "isLastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwPageIndex === this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwPaginationComponent.prototype, "isFirstIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwPageIndex === this.firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    DwPaginationComponent.prototype.min = /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    function (val1, val2) {
        return Math.min(val1, val2);
    };
    /**
     * @return {?}
     */
    DwPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Pagination'); });
    };
    /**
     * @return {?}
     */
    DwPaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    DwPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-pagination',
                    preserveWhitespaces: false,
                    template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type!='page'\"></a>\n  <a *ngIf=\"type=='page'\">{{page}}</a>\n</ng-template>\n<ng-container *ngIf=\"(dwHideOnSinglePage&&(dwTotal>dwPageSize))||!dwHideOnSinglePage\">\n  <ul\n    *ngIf=\"dwSimple\"\n    [class.ant-table-pagination]=\"dwInTable\"\n    class=\"ant-pagination ant-pagination-simple\">\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li [attr.title]=\"dwPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\n      <input\n        #simplePagerInput\n        [ngModel]=\"dwPageIndex\"\n        (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\n        size=\"3\">\n      <span class=\"ant-pagination-slash\">\uFF0F</span>\n      {{ lastIndex }}\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n  </ul>\n  <ul\n    *ngIf=\"!dwSimple\"\n    [class.mini]=\"dwSize=='small'\"\n    [class.ant-table-pagination]=\"dwInTable\"\n    class=\"ant-pagination\">\n      <span class=\"ant-pagination-total-text\" *ngIf=\"dwShowTotal\">\n        <ng-template\n          [ngTemplateOutlet]=\"dwShowTotal\"\n          [ngTemplateOutletContext]=\"{ $implicit: dwTotal,range:[(dwPageIndex-1)*dwPageSize+1, min(dwPageIndex*dwPageSize, dwTotal)] }\">\n        </ng-template>\n      </span>\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"firstIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(firstIndex)\"\n      [class.ant-pagination-item-active]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.prev_5\"\n      (click)=\"jumpPreFive()\"\n      class=\"ant-pagination-jump-prev\"\n      *ngIf=\"(lastIndex >9)&&(dwPageIndex-3>firstIndex)\">\n      <a></a>\n    </li>\n    <li\n      *ngFor=\"let page of pages\"\n      [attr.title]=\"page.index\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(page.index)\"\n      [class.ant-pagination-item-active]=\"dwPageIndex==page.index\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page.index }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.next_5\"\n      (click)=\"jumpNextFive()\"\n      class=\"ant-pagination-jump-next\"\n      *ngIf=\"(lastIndex >9)&&(dwPageIndex+3<lastIndex)\">\n      <a></a>\n    </li>\n    <li\n      [attr.title]=\"lastIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(lastIndex)\"\n      *ngIf=\"(lastIndex>0)&&(lastIndex!==firstIndex)\"\n      [class.ant-pagination-item-active]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n    <div class=\"ant-pagination-options\" *ngIf=\"dwShowQuickJumper||dwShowSizeChanger\">\n      <dw-select\n        *ngIf=\"dwShowSizeChanger\"\n        [dwSize]=\"dwSize=='small'?'small':''\"\n        class=\"ant-pagination-options-size-changer\"\n        [ngModel]=\"dwPageSize\"\n        (ngModelChange)=\"onPageSizeChange($event)\">\n        <dw-option\n          *ngFor=\"let option of dwPageSizeOptions\"\n          [dwLabel]=\"option + locale.items_per_page\"\n          [dwValue]=\"option\">\n        </dw-option>\n        <dw-option\n          *ngIf=\"dwPageSizeOptions.indexOf(dwPageSize)==-1\"\n          [dwLabel]=\"dwPageSize + locale.items_per_page\"\n          [dwValue]=\"dwPageSize\">\n        </dw-option>\n      </dw-select>\n      <div class=\"ant-pagination-options-quick-jumper\"\n        *ngIf=\"dwShowQuickJumper\">\n        {{ locale.jump_to }}\n        <input #quickJumperInput (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\n        {{ locale.page }}\n      </div>\n    </div>\n  </ul>\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DwPaginationComponent.ctorParameters = function () { return [
        { type: DwI18nService }
    ]; };
    DwPaginationComponent.propDecorators = {
        _itemRender: [{ type: ViewChild, args: ['renderItemTemplate',] }],
        dwShowTotal: [{ type: Input }],
        dwInTable: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwPageSizeChange: [{ type: Output }],
        dwPageIndexChange: [{ type: Output }],
        dwItemRender: [{ type: Input }],
        dwShowSizeChanger: [{ type: Input }],
        dwHideOnSinglePage: [{ type: Input }],
        dwShowQuickJumper: [{ type: Input }],
        dwSimple: [{ type: Input }],
        dwPageSizeOptions: [{ type: Input }],
        dwPageIndex: [{ type: Input }],
        dwPageSize: [{ type: Input }],
        dwTotal: [{ type: Input }]
    };
    return DwPaginationComponent;
}());
export { DwPaginationComponent };
function DwPaginationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwPaginationComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwPaginationComponent.prototype.locale;
    /** @type {?} */
    DwPaginationComponent.prototype._itemRender;
    /** @type {?} */
    DwPaginationComponent.prototype._showSizeChanger;
    /** @type {?} */
    DwPaginationComponent.prototype._showQuickJumper;
    /** @type {?} */
    DwPaginationComponent.prototype._simple;
    /** @type {?} */
    DwPaginationComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    DwPaginationComponent.prototype._pageSize;
    /** @type {?} */
    DwPaginationComponent.prototype._pageSizeOptions;
    /** @type {?} */
    DwPaginationComponent.prototype._total;
    /** @type {?} */
    DwPaginationComponent.prototype._pageIndex;
    /** @type {?} */
    DwPaginationComponent.prototype.firstIndex;
    /** @type {?} */
    DwPaginationComponent.prototype.pages;
    /** @type {?} */
    DwPaginationComponent.prototype.dwShowTotal;
    /** @type {?} */
    DwPaginationComponent.prototype.dwInTable;
    /** @type {?} */
    DwPaginationComponent.prototype.dwSize;
    /** @type {?} */
    DwPaginationComponent.prototype.dwPageSizeChange;
    /** @type {?} */
    DwPaginationComponent.prototype.dwPageIndexChange;
    /** @type {?} */
    DwPaginationComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBhZ2luYXRpb24vZHctcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUE4UHRELCtCQUFvQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlOzRCQXRQaEIsSUFBSSxPQUFPLEVBQVE7O3NCQUU1QixFQUFFO2dDQUVXLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDZCxLQUFLO2lDQUNLLEtBQUs7eUJBQ2IsRUFBRTtnQ0FDSyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTswQkFFeEIsQ0FBQzswQkFDVCxDQUFDO3FCQUNOLEVBQUU7eUJBRVcsS0FBSztnQ0FFeUIsSUFBSSxZQUFZLEVBQUU7aUNBQ2pCLElBQUksWUFBWSxFQUFFO0tBcU9yRTtJQW5PRCxzQkFDSSwrQ0FBWTs7OztRQUloQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7UUFQRCxVQUNpQixLQUF5RTtZQUN4RixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjs7O09BQUE7SUFNRCxzQkFDSSxvREFB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QyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7Z0JBdFFGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsZUFBZTtvQkFDcEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsczdKQUFxRDtpQkFDdEQ7Ozs7Z0JBTlEsYUFBYTs7OzhCQVduQixTQUFTLFNBQUMsb0JBQW9COzhCQVc5QixLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQ0FDTCxNQUFNO29DQUNOLE1BQU07K0JBRU4sS0FBSztvQ0FTTCxLQUFLO3FDQVNMLEtBQUs7b0NBU0wsS0FBSzsyQkFTTCxLQUFLO29DQVVMLEtBQUs7OEJBV0wsS0FBSzs2QkFtQkwsS0FBSzswQkFrQkwsS0FBSzs7Z0NBMUlSOztTQXVCYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNJbnRlZ2VyIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2R3LWkxOG4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctcGFnaW5hdGlvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1BhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBAVmlld0NoaWxkKCdyZW5kZXJJdGVtVGVtcGxhdGUnKSBwcml2YXRlIF9pdGVtUmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnLCBwYWdlOiBudW1iZXIgfT47XG4gIHByaXZhdGUgX3Nob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2ltcGxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2hpZGVPblNpbmdsZVBhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSAxMDtcbiAgcHJpdmF0ZSBfcGFnZVNpemVPcHRpb25zID0gWyAxMCwgMjAsIDMwLCA0MCBdO1xuICBwcml2YXRlIF90b3RhbDogbnVtYmVyO1xuICBwcml2YXRlIF9wYWdlSW5kZXggPSAxO1xuICBmaXJzdEluZGV4ID0gMTtcbiAgcGFnZXMgPSBbXTtcbiAgQElucHV0KCkgZHdTaG93VG90YWw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIsIHJhbmdlOiBbIG51bWJlciwgbnVtYmVyIF0gfT47XG4gIEBJbnB1dCgpIGR3SW5UYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBkd1NpemU6IHN0cmluZztcbiAgQE91dHB1dCgpIGR3UGFnZVNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0l0ZW1SZW5kZXIodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCcsIHBhZ2U6IG51bWJlciB9Pikge1xuICAgIHRoaXMuX2l0ZW1SZW5kZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0l0ZW1SZW5kZXIoKTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JywgcGFnZTogbnVtYmVyIH0+IHtcbiAgICByZXR1cm4gdGhpcy5faXRlbVJlbmRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dTaXplQ2hhbmdlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTaXplQ2hhbmdlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93U2l6ZUNoYW5nZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaXplQ2hhbmdlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0hpZGVPblNpbmdsZVBhZ2UodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlT25TaW5nbGVQYWdlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0hpZGVPblNpbmdsZVBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93UXVpY2tKdW1wZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UXVpY2tKdW1wZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd1F1aWNrSnVtcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UXVpY2tKdW1wZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaW1wbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaW1wbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2ltcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGU7XG4gIH1cblxuICAvKiogcGFnZSBzaXplIGNoYW5nZXIgc2VsZWN0IHZhbHVlcyAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdQYWdlU2l6ZU9wdGlvbnModmFsdWU6IG51bWJlcltdKSB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcGFnZVNpemVPcHRpb25zID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3UGFnZVNpemVPcHRpb25zKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemVPcHRpb25zO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fcGFnZUluZGV4ID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiB0aGlzLmxhc3RJbmRleCkge1xuICAgICAgdGhpcy5fcGFnZUluZGV4ID0gdGhpcy5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8IHRoaXMuZmlyc3RJbmRleCkge1xuICAgICAgdGhpcy5fcGFnZUluZGV4ID0gdGhpcy5maXJzdEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xuICB9XG5cbiAgZ2V0IGR3UGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VJbmRleDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3BhZ2VTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsdWU7XG4gICAgY29uc3QgcGFnZUluZGV4T3ZlcmZsb3cgPSB0aGlzLmNoZWNrTGFzdEluZGV4T3ZlcmZsb3coKTtcbiAgICBpZiAocGFnZUluZGV4T3ZlcmZsb3cpIHtcbiAgICAgIHRoaXMuZHdQYWdlSW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICAgIHRoaXMuZHdQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLmxhc3RJbmRleCk7XG4gICAgfVxuICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XG4gIH1cblxuICBnZXQgZHdQYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1RvdGFsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3RhbCA9IHZhbHVlO1xuICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XG4gIH1cblxuICBnZXQgZHdUb3RhbCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl90b3RhbDtcbiAgfVxuXG4gIGp1bXBQYWdlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggPT09IHRoaXMuZHdQYWdlSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCB0aGlzLmZpcnN0SW5kZXgpIHtcbiAgICAgIHRoaXMuZHdQYWdlSW5kZXggPSB0aGlzLmZpcnN0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChpbmRleCA+IHRoaXMubGFzdEluZGV4KSB7XG4gICAgICB0aGlzLmR3UGFnZUluZGV4ID0gdGhpcy5sYXN0SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHdQYWdlSW5kZXggPSBpbmRleDtcbiAgICB9XG4gICAgdGhpcy5kd1BhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuZHdQYWdlSW5kZXgpO1xuICB9XG5cbiAganVtcFByZUZpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLmR3UGFnZUluZGV4IC0gNSk7XG4gIH1cblxuICBqdW1wTmV4dEZpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLmR3UGFnZUluZGV4ICsgNSk7XG4gIH1cblxuICBqdW1wUHJlT25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRmlyc3RJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMuZHdQYWdlSW5kZXggLSAxKTtcbiAgfVxuXG4gIGp1bXBOZXh0T25lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTGFzdEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5kd1BhZ2VJbmRleCArIDEpO1xuICB9XG5cbiAgb25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZHdQYWdlU2l6ZSA9ICRldmVudDtcbiAgICB0aGlzLmR3UGFnZVNpemVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xuICB9XG5cbiAgaGFuZGxlS2V5RG93bihlOiBLZXlib2FyZEV2ZW50LCBpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY2xlYXJJbnB1dFZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaW5wdXQ7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBjdXJyZW50SW5wdXRWYWx1ZSA9IHRoaXMuZHdQYWdlSW5kZXg7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICB2YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgfSBlbHNlIGlmIChpc05hTihOdW1iZXIoaW5wdXRWYWx1ZSkpKSB7XG4gICAgICB2YWx1ZSA9IGN1cnJlbnRJbnB1dFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IE51bWJlcihpbnB1dFZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UodmFsdWUsIHRhcmdldCwgY2xlYXJJbnB1dFZhbHVlKTtcbiAgfVxuXG4gIGlzVmFsaWQocGFnZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihwYWdlKSAmJiAocGFnZSA+PSAxKSAmJiAocGFnZSAhPT0gdGhpcy5kd1BhZ2VJbmRleCkgJiYgKHBhZ2UgPD0gdGhpcy5sYXN0SW5kZXgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHZhbHVlOiBudW1iZXIsIHRhcmdldDogSFRNTElucHV0RWxlbWVudCwgY2xlYXJJbnB1dFZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmlzVmFsaWQocGFnZSkpIHtcbiAgICAgIHRoaXMuZHdQYWdlSW5kZXggPSBwYWdlO1xuICAgICAgdGhpcy5kd1BhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuZHdQYWdlSW5kZXgpO1xuICAgIH1cbiAgICBpZiAoY2xlYXJJbnB1dFZhbHVlKSB7XG4gICAgICB0YXJnZXQudmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQudmFsdWUgPSBgJHt0aGlzLmR3UGFnZUluZGV4fWA7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tMYXN0SW5kZXhPdmVyZmxvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1BhZ2VJbmRleCA+IHRoaXMubGFzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGxhc3RJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5kd1RvdGFsIC8gdGhpcy5kd1BhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKiBnZW5lcmF0ZSBpbmRleGVzIGxpc3QgKi9cbiAgYnVpbGRJbmRleGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHRtcFBhZ2VzID0gW107XG4gICAgaWYgKHRoaXMubGFzdEluZGV4IDw9IDkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IHRoaXMubGFzdEluZGV4IC0gMTsgaSsrKSB7XG4gICAgICAgIHRtcFBhZ2VzLnB1c2goeyBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudCA9ICt0aGlzLmR3UGFnZUluZGV4O1xuICAgICAgbGV0IGxlZnQgPSBNYXRoLm1heCgyLCBjdXJyZW50IC0gMik7XG4gICAgICBsZXQgcmlnaHQgPSBNYXRoLm1pbihjdXJyZW50ICsgMiwgdGhpcy5sYXN0SW5kZXggLSAxKTtcblxuICAgICAgaWYgKGN1cnJlbnQgLSAxIDw9IDIpIHtcbiAgICAgICAgcmlnaHQgPSA1O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYXN0SW5kZXggLSBjdXJyZW50IDw9IDIpIHtcbiAgICAgICAgbGVmdCA9IHRoaXMubGFzdEluZGV4IC0gNDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICB0bXBQYWdlcy5wdXNoKHsgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucGFnZXMgPSB0bXBQYWdlcztcbiAgfVxuXG4gIGdldCBpc0xhc3RJbmRleCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1BhZ2VJbmRleCA9PT0gdGhpcy5sYXN0SW5kZXg7XG4gIH1cblxuICBnZXQgaXNGaXJzdEluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3UGFnZUluZGV4ID09PSB0aGlzLmZpcnN0SW5kZXg7XG4gIH1cblxuICBtaW4odmFsMTogbnVtYmVyLCB2YWwyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbih2YWwxLCB2YWwyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogRHdJMThuU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdQYWdpbmF0aW9uJykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==
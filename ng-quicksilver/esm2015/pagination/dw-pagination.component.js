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
export class DwPaginationComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwItemRender(value) {
        this._itemRender = value;
    }
    /**
     * @return {?}
     */
    get dwItemRender() {
        return this._itemRender;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowSizeChanger(value) {
        this._showSizeChanger = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowSizeChanger() {
        return this._showSizeChanger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwHideOnSinglePage(value) {
        this._hideOnSinglePage = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwHideOnSinglePage() {
        return this._hideOnSinglePage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowQuickJumper(value) {
        this._showQuickJumper = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowQuickJumper() {
        return this._showQuickJumper;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSimple(value) {
        this._simple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwSimple() {
        return this._simple;
    }
    /**
     * page size changer select values
     * @param {?} value
     * @return {?}
     */
    set dwPageSizeOptions(value) {
        if (value && value.length) {
            this._pageSizeOptions = value;
        }
    }
    /**
     * @return {?}
     */
    get dwPageSizeOptions() {
        return this._pageSizeOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPageIndex(value) {
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
    }
    /**
     * @return {?}
     */
    get dwPageIndex() {
        return this._pageIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPageSize(value) {
        if (value === this._pageSize) {
            return;
        }
        this._pageSize = value;
        /** @type {?} */
        const pageIndexOverflow = this.checkLastIndexOverflow();
        if (pageIndexOverflow) {
            this.dwPageIndex = this.lastIndex;
            this.dwPageIndexChange.emit(this.lastIndex);
        }
        this.buildIndexes();
    }
    /**
     * @return {?}
     */
    get dwPageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTotal(value) {
        this._total = value;
        this.buildIndexes();
    }
    /**
     * @return {?}
     */
    get dwTotal() {
        return this._total;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    jumpPage(index) {
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
    }
    /**
     * @return {?}
     */
    jumpPreFive() {
        this.jumpPage(this.dwPageIndex - 5);
    }
    /**
     * @return {?}
     */
    jumpNextFive() {
        this.jumpPage(this.dwPageIndex + 5);
    }
    /**
     * @return {?}
     */
    jumpPreOne() {
        if (this.isFirstIndex) {
            return;
        }
        this.jumpPage(this.dwPageIndex - 1);
    }
    /**
     * @return {?}
     */
    jumpNextOne() {
        if (this.isLastIndex) {
            return;
        }
        this.jumpPage(this.dwPageIndex + 1);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPageSizeChange($event) {
        this.dwPageSize = $event;
        this.dwPageSizeChange.emit($event);
    }
    /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    handleKeyDown(e, input, clearInputValue) {
        /** @type {?} */
        const target = input;
        /** @type {?} */
        const inputValue = target.value;
        /** @type {?} */
        const currentInputValue = this.dwPageIndex;
        /** @type {?} */
        let value;
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
    }
    /**
     * @param {?} page
     * @return {?}
     */
    isValid(page) {
        return isInteger(page) && (page >= 1) && (page !== this.dwPageIndex) && (page <= this.lastIndex);
    }
    /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    handleChange(value, target, clearInputValue) {
        /** @type {?} */
        const page = value;
        if (this.isValid(page)) {
            this.dwPageIndex = page;
            this.dwPageIndexChange.emit(this.dwPageIndex);
        }
        if (clearInputValue) {
            target.value = null;
        }
        else {
            target.value = `${this.dwPageIndex}`;
        }
    }
    /**
     * @return {?}
     */
    checkLastIndexOverflow() {
        return this.dwPageIndex > this.lastIndex;
    }
    /**
     * @return {?}
     */
    get lastIndex() {
        return Math.ceil(this.dwTotal / this.dwPageSize);
    }
    /**
     * generate indexes list
     * @return {?}
     */
    buildIndexes() {
        /** @type {?} */
        const tmpPages = [];
        if (this.lastIndex <= 9) {
            for (let i = 2; i <= this.lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            /** @type {?} */
            const current = +this.dwPageIndex;
            /** @type {?} */
            let left = Math.max(2, current - 2);
            /** @type {?} */
            let right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    }
    /**
     * @return {?}
     */
    get isLastIndex() {
        return this.dwPageIndex === this.lastIndex;
    }
    /**
     * @return {?}
     */
    get isFirstIndex() {
        return this.dwPageIndex === this.firstIndex;
    }
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    min(val1, val2) {
        return Math.min(val1, val2);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Pagination'));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
DwPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-pagination',
                preserveWhitespaces: false,
                template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type!='page'\"></a>\n  <a *ngIf=\"type=='page'\">{{page}}</a>\n</ng-template>\n<ng-container *ngIf=\"(dwHideOnSinglePage&&(dwTotal>dwPageSize))||!dwHideOnSinglePage\">\n  <ul\n    *ngIf=\"dwSimple\"\n    [class.ant-table-pagination]=\"dwInTable\"\n    class=\"ant-pagination ant-pagination-simple\">\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li [attr.title]=\"dwPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\n      <input\n        #simplePagerInput\n        [ngModel]=\"dwPageIndex\"\n        (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\n        size=\"3\">\n      <span class=\"ant-pagination-slash\">\uFF0F</span>\n      {{ lastIndex }}\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n  </ul>\n  <ul\n    *ngIf=\"!dwSimple\"\n    [class.mini]=\"dwSize=='small'\"\n    [class.ant-table-pagination]=\"dwInTable\"\n    class=\"ant-pagination\">\n      <span class=\"ant-pagination-total-text\" *ngIf=\"dwShowTotal\">\n        <ng-template\n          [ngTemplateOutlet]=\"dwShowTotal\"\n          [ngTemplateOutletContext]=\"{ $implicit: dwTotal,range:[(dwPageIndex-1)*dwPageSize+1, min(dwPageIndex*dwPageSize, dwTotal)] }\">\n        </ng-template>\n      </span>\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"firstIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(firstIndex)\"\n      [class.ant-pagination-item-active]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.prev_5\"\n      (click)=\"jumpPreFive()\"\n      class=\"ant-pagination-jump-prev\"\n      *ngIf=\"(lastIndex >9)&&(dwPageIndex-3>firstIndex)\">\n      <a></a>\n    </li>\n    <li\n      *ngFor=\"let page of pages\"\n      [attr.title]=\"page.index\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(page.index)\"\n      [class.ant-pagination-item-active]=\"dwPageIndex==page.index\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page.index }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.next_5\"\n      (click)=\"jumpNextFive()\"\n      class=\"ant-pagination-jump-next\"\n      *ngIf=\"(lastIndex >9)&&(dwPageIndex+3<lastIndex)\">\n      <a></a>\n    </li>\n    <li\n      [attr.title]=\"lastIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(lastIndex)\"\n      *ngIf=\"(lastIndex>0)&&(lastIndex!==firstIndex)\"\n      [class.ant-pagination-item-active]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"dwItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n    <div class=\"ant-pagination-options\" *ngIf=\"dwShowQuickJumper||dwShowSizeChanger\">\n      <dw-select\n        *ngIf=\"dwShowSizeChanger\"\n        [dwSize]=\"dwSize=='small'?'small':''\"\n        class=\"ant-pagination-options-size-changer\"\n        [ngModel]=\"dwPageSize\"\n        (ngModelChange)=\"onPageSizeChange($event)\">\n        <dw-option\n          *ngFor=\"let option of dwPageSizeOptions\"\n          [dwLabel]=\"option + locale.items_per_page\"\n          [dwValue]=\"option\">\n        </dw-option>\n        <dw-option\n          *ngIf=\"dwPageSizeOptions.indexOf(dwPageSize)==-1\"\n          [dwLabel]=\"dwPageSize + locale.items_per_page\"\n          [dwValue]=\"dwPageSize\">\n        </dw-option>\n      </dw-select>\n      <div class=\"ant-pagination-options-quick-jumper\"\n        *ngIf=\"dwShowQuickJumper\">\n        {{ locale.jump_to }}\n        <input #quickJumperInput (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\n        {{ locale.page }}\n      </div>\n    </div>\n  </ul>\n</ng-container>"
            }] }
];
/** @nocollapse */
DwPaginationComponent.ctorParameters = () => [
    { type: DwI18nService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBhZ2luYXRpb24vZHctcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU94RCxNQUFNOzs7O0lBdVBKLFlBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7NEJBdFBoQixJQUFJLE9BQU8sRUFBUTs7c0JBRTVCLEVBQUU7Z0NBRVcsS0FBSztnQ0FDTCxLQUFLO3VCQUNkLEtBQUs7aUNBQ0ssS0FBSzt5QkFDYixFQUFFO2dDQUNLLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFOzBCQUV4QixDQUFDOzBCQUNULENBQUM7cUJBQ04sRUFBRTt5QkFFVyxLQUFLO2dDQUV5QixJQUFJLFlBQVksRUFBRTtpQ0FDakIsSUFBSSxZQUFZLEVBQUU7S0FxT3JFOzs7OztJQW5PRCxJQUNJLFlBQVksQ0FBQyxLQUF5RTtRQUN4RixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxJ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U0wsS0FBSzt1QkFTTCxLQUFLO2dDQVVMLEtBQUs7MEJBV0wsS0FBSzt5QkFtQkwsS0FBSztzQkFrQkwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0ludGVnZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1wYWdpbmF0aW9uJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG4gIEBWaWV3Q2hpbGQoJ3JlbmRlckl0ZW1UZW1wbGF0ZScpIHByaXZhdGUgX2l0ZW1SZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCcsIHBhZ2U6IG51bWJlciB9PjtcbiAgcHJpdmF0ZSBfc2hvd1NpemVDaGFuZ2VyID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dRdWlja0p1bXBlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaW1wbGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDEwO1xuICBwcml2YXRlIF9wYWdlU2l6ZU9wdGlvbnMgPSBbIDEwLCAyMCwgMzAsIDQwIF07XG4gIHByaXZhdGUgX3RvdGFsOiBudW1iZXI7XG4gIHByaXZhdGUgX3BhZ2VJbmRleCA9IDE7XG4gIGZpcnN0SW5kZXggPSAxO1xuICBwYWdlcyA9IFtdO1xuICBASW5wdXQoKSBkd1Nob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciwgcmFuZ2U6IFsgbnVtYmVyLCBudW1iZXIgXSB9PjtcbiAgQElucHV0KCkgZHdJblRhYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3U2l6ZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgZHdQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd1BhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SXRlbVJlbmRlcih2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JywgcGFnZTogbnVtYmVyIH0+KSB7XG4gICAgdGhpcy5faXRlbVJlbmRlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3SXRlbVJlbmRlcigpOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnLCBwYWdlOiBudW1iZXIgfT4ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtUmVuZGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1NpemVDaGFuZ2VyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NpemVDaGFuZ2VyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dTaXplQ2hhbmdlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpemVDaGFuZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SGlkZU9uU2luZ2xlUGFnZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2UgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3SGlkZU9uU2luZ2xlUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZU9uU2luZ2xlUGFnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dRdWlja0p1bXBlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dRdWlja0p1bXBlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93UXVpY2tKdW1wZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXBlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NpbXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NpbXBsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaW1wbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NpbXBsZTtcbiAgfVxuXG4gIC8qKiBwYWdlIHNpemUgY2hhbmdlciBzZWxlY3QgdmFsdWVzICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BhZ2VTaXplT3B0aW9ucyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9wYWdlU2l6ZU9wdGlvbnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdQYWdlU2l6ZU9wdGlvbnMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZU9wdGlvbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9wYWdlSW5kZXggPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZSA+IHRoaXMubGFzdEluZGV4KSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIDwgdGhpcy5maXJzdEluZGV4KSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSB0aGlzLmZpcnN0SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IE51bWJlcih2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuYnVpbGRJbmRleGVzKCk7XG4gIH1cblxuICBnZXQgZHdQYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUluZGV4O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fcGFnZVNpemUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICBjb25zdCBwYWdlSW5kZXhPdmVyZmxvdyA9IHRoaXMuY2hlY2tMYXN0SW5kZXhPdmVyZmxvdygpO1xuICAgIGlmIChwYWdlSW5kZXhPdmVyZmxvdykge1xuICAgICAgdGhpcy5kd1BhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgICAgdGhpcy5kd1BhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMubGFzdEluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGdldCBkd1BhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VG90YWwodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3RvdGFsID0gdmFsdWU7XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGdldCBkd1RvdGFsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsO1xuICB9XG5cbiAganVtcFBhZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCA9PT0gdGhpcy5kd1BhZ2VJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IHRoaXMuZmlyc3RJbmRleCkge1xuICAgICAgdGhpcy5kd1BhZ2VJbmRleCA9IHRoaXMuZmlyc3RJbmRleDtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gdGhpcy5sYXN0SW5kZXgpIHtcbiAgICAgIHRoaXMuZHdQYWdlSW5kZXggPSB0aGlzLmxhc3RJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kd1BhZ2VJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgICB0aGlzLmR3UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5kd1BhZ2VJbmRleCk7XG4gIH1cblxuICBqdW1wUHJlRml2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMuZHdQYWdlSW5kZXggLSA1KTtcbiAgfVxuXG4gIGp1bXBOZXh0Rml2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMuZHdQYWdlSW5kZXggKyA1KTtcbiAgfVxuXG4gIGp1bXBQcmVPbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGaXJzdEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5kd1BhZ2VJbmRleCAtIDEpO1xuICB9XG5cbiAganVtcE5leHRPbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNMYXN0SW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLmR3UGFnZUluZGV4ICsgMSk7XG4gIH1cblxuICBvblBhZ2VTaXplQ2hhbmdlKCRldmVudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5kd1BhZ2VTaXplID0gJGV2ZW50O1xuICAgIHRoaXMuZHdQYWdlU2l6ZUNoYW5nZS5lbWl0KCRldmVudCk7XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGU6IEtleWJvYXJkRXZlbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbnB1dDtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRJbnB1dFZhbHVlID0gdGhpcy5kd1BhZ2VJbmRleDtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlzTmFOKE51bWJlcihpbnB1dFZhbHVlKSkpIHtcbiAgICAgIHZhbHVlID0gY3VycmVudElucHV0VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKGlucHV0VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSh2YWx1ZSwgdGFyZ2V0LCBjbGVhcklucHV0VmFsdWUpO1xuICB9XG5cbiAgaXNWYWxpZChwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNJbnRlZ2VyKHBhZ2UpICYmIChwYWdlID49IDEpICYmIChwYWdlICE9PSB0aGlzLmR3UGFnZUluZGV4KSAmJiAocGFnZSA8PSB0aGlzLmxhc3RJbmRleCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UodmFsdWU6IG51bWJlciwgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50LCBjbGVhcklucHV0VmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaXNWYWxpZChwYWdlKSkge1xuICAgICAgdGhpcy5kd1BhZ2VJbmRleCA9IHBhZ2U7XG4gICAgICB0aGlzLmR3UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5kd1BhZ2VJbmRleCk7XG4gICAgfVxuICAgIGlmIChjbGVhcklucHV0VmFsdWUpIHtcbiAgICAgIHRhcmdldC52YWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC52YWx1ZSA9IGAke3RoaXMuZHdQYWdlSW5kZXh9YDtcbiAgICB9XG4gIH1cblxuICBjaGVja0xhc3RJbmRleE92ZXJmbG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3UGFnZUluZGV4ID4gdGhpcy5sYXN0SW5kZXg7XG4gIH1cblxuICBnZXQgbGFzdEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmR3VG90YWwgLyB0aGlzLmR3UGFnZVNpemUpO1xuICB9XG5cbiAgLyoqIGdlbmVyYXRlIGluZGV4ZXMgbGlzdCAqL1xuICBidWlsZEluZGV4ZXMoKTogdm9pZCB7XG4gICAgY29uc3QgdG1wUGFnZXMgPSBbXTtcbiAgICBpZiAodGhpcy5sYXN0SW5kZXggPD0gOSkge1xuICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gdGhpcy5sYXN0SW5kZXggLSAxOyBpKyspIHtcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gK3RoaXMuZHdQYWdlSW5kZXg7XG4gICAgICBsZXQgbGVmdCA9IE1hdGgubWF4KDIsIGN1cnJlbnQgLSAyKTtcbiAgICAgIGxldCByaWdodCA9IE1hdGgubWluKGN1cnJlbnQgKyAyLCB0aGlzLmxhc3RJbmRleCAtIDEpO1xuXG4gICAgICBpZiAoY3VycmVudCAtIDEgPD0gMikge1xuICAgICAgICByaWdodCA9IDU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhc3RJbmRleCAtIGN1cnJlbnQgPD0gMikge1xuICAgICAgICBsZWZ0ID0gdGhpcy5sYXN0SW5kZXggLSA0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgIHRtcFBhZ2VzLnB1c2goeyBpbmRleDogaSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wYWdlcyA9IHRtcFBhZ2VzO1xuICB9XG5cbiAgZ2V0IGlzTGFzdEluZGV4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3UGFnZUluZGV4ID09PSB0aGlzLmxhc3RJbmRleDtcbiAgfVxuXG4gIGdldCBpc0ZpcnN0SW5kZXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdQYWdlSW5kZXggPT09IHRoaXMuZmlyc3RJbmRleDtcbiAgfVxuXG4gIG1pbih2YWwxOiBudW1iZXIsIHZhbDI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKHZhbDEsIHZhbDIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEd0kxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1BhZ2luYXRpb24nKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19
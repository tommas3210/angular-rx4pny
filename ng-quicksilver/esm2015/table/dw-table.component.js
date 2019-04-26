/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DwMeasureScrollbarService } from '../core/services/dw-measure-scrollbar.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { DwThComponent } from './dw-th.component';
export class DwTableComponent {
    /**
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} dwMeasureScrollbarService
     * @param {?} i18n
     */
    constructor(renderer, ngZone, elementRef, cdr, dwMeasureScrollbarService, i18n) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.dwMeasureScrollbarService = dwMeasureScrollbarService;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        this._bordered = false;
        this._showPagination = true;
        this._loading = false;
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._hideOnSinglePage = false;
        this._scroll = { x: null, y: null };
        this._pageIndex = 1;
        this._pageSize = 10;
        this._widthConfig = [];
        this._frontPagination = true;
        this._simple = false;
        /* tslint:disable-next-line:no-any */
        this.locale = {};
        this.lastScrollLeft = 0;
        /* tslint:disable-next-line:no-any */
        this.rawData = [];
        /* tslint:disable-next-line:no-any */
        this.syncData = [];
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.isWidthConfigSet = false;
        this.dwPageSizeChange = new EventEmitter();
        this.dwPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.dwCurrentPageDataChange = new EventEmitter();
        this.dwSize = 'default';
        /**
         * page size changer select values
         */
        this.dwPageSizeOptions = [10, 20, 30, 40, 50];
        this.dwLoadingDelay = 0;
        this.el = this.elementRef.nativeElement;
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
     * @param {?} value
     * @return {?}
     */
    set dwFrontPagination(value) {
        this._frontPagination = toBoolean(value);
        this.parseInputData();
    }
    /**
     * @return {?}
     */
    get dwFrontPagination() {
        return this._frontPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwWidthConfig(value) {
        this.isWidthConfigSet = true;
        this._widthConfig = value;
    }
    /**
     * @return {?}
     */
    get dwWidthConfig() {
        return this._widthConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get dwTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwFooter(value) {
        this.isFooterString = !(value instanceof TemplateRef);
        this._footer = value;
    }
    /**
     * @return {?}
     */
    get dwFooter() {
        return this._footer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwNoResult(value) {
        this.isNoResultString = !(value instanceof TemplateRef);
        this._noResult = value;
    }
    /**
     * @return {?}
     */
    get dwNoResult() {
        return this._noResult;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwBordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowPagination(value) {
        this._showPagination = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowPagination() {
        return this._showPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLoading(value) {
        this._loading = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwLoading() {
        return this._loading;
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
    set dwScroll(value) {
        if (isNotNil(value)) {
            this._scroll = value;
        }
        else {
            this._scroll = { x: null, y: null };
        }
        this.cdr.detectChanges();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    get dwScroll() {
        return this._scroll;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set dwData(data) {
        if (Array.isArray(data)) {
            this.rawData = data;
            this.parseInputData();
        }
        else {
            console.warn('dwData only accept array');
        }
    }
    /**
     * @return {?}
     */
    parseInputData() {
        if (this.dwFrontPagination) {
            this.syncData = this.rawData;
            this.dwTotal = this.syncData.length;
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
        else {
            this.data = this.rawData;
            this.dwCurrentPageDataChange.emit(this.data);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPageIndex(value) {
        if (this._pageIndex === value) {
            return;
        }
        this._pageIndex = value;
        if (this.dwFrontPagination) {
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get dwPageIndex() {
        return this._pageIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    emitPageIndex(index) {
        this.dwPageIndex = index;
        this.dwPageIndexChange.emit(this.dwPageIndex);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    emitPageSize(size) {
        this.dwPageSize = size;
        this.dwPageSizeChange.emit(this.dwPageSize);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPageSize(value) {
        if (this._pageSize === value) {
            return;
        }
        this._pageSize = value;
        if (this.dwFrontPagination) {
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get dwPageSize() {
        return this._pageSize;
    }
    /**
     * @return {?}
     */
    checkPageIndexBounding() {
        if (this.dwFrontPagination) {
            /** @type {?} */
            const maxPageIndex = Math.ceil(this.syncData.length / this.dwPageSize);
            /** @type {?} */
            const pageIndex = !this.dwPageIndex ? 1 : (this.dwPageIndex > maxPageIndex ? maxPageIndex : this.dwPageIndex);
            if (pageIndex !== this.dwPageIndex) {
                this._pageIndex = pageIndex;
                Promise.resolve().then(() => this.dwPageIndexChange.emit(pageIndex));
            }
        }
    }
    /**
     * @return {?}
     */
    generateSyncDisplayData() {
        this.data = this.syncData.slice((this.dwPageIndex - 1) * this.dwPageSize, this.dwPageIndex * this.dwPageSize);
        this.dwCurrentPageDataChange.emit(this.data);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    syncScrollTable(e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            const target = /** @type {?} */ (e.target);
            if (target.scrollLeft !== this.lastScrollLeft && this.dwScroll && this.dwScroll.x) {
                if (target === this.tableBodyElement.nativeElement && this.tableHeaderElement) {
                    this.tableHeaderElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderElement.nativeElement && this.tableBodyElement) {
                    this.tableBodyElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    }
    /**
     * @return {?}
     */
    setScrollPositionClassName() {
        if (this.tableBodyElement && this.dwScroll && this.dwScroll.x) {
            if ((this.tableBodyElement.nativeElement.scrollWidth === this.tableBodyElement.nativeElement.clientWidth) && (this.tableBodyElement.nativeElement.scrollWidth !== 0)) {
                this.setScrollName();
            }
            else if (this.tableBodyElement.nativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.tableBodyElement.nativeElement.scrollWidth === (this.tableBodyElement.nativeElement.scrollLeft + this.tableBodyElement.nativeElement.clientWidth)) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    setScrollName(position) {
        /** @type {?} */
        const prefix = 'ant-table-scroll-position';
        /** @type {?} */
        const classList = ['left', 'right', 'middle'];
        classList.forEach(name => {
            this.renderer.removeClass(this.tableMainElement.nativeElement, `${prefix}-${name}`);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, `${prefix}-${position}`);
        }
    }
    /**
     * @return {?}
     */
    fitScrollBar() {
        /** @type {?} */
        const scrollbarWidth = this.dwMeasureScrollbarService.scrollBarWidth;
        if (scrollbarWidth) {
            this.headerBottomStyle = {
                marginBottom: `-${scrollbarWidth}px`,
                paddingBottom: `0px`
            };
        }
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.fitScrollBar();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Table'));
        this.fitScrollBar();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => this.setScrollPositionClassName());
        this.ngZone.runOutsideAngular(() => {
            if (this.tableHeaderElement
                && this.tableHeaderElement.nativeElement
                && this.tableBodyElement
                && this.tableBodyElement.nativeElement) {
                merge(fromEvent(this.tableHeaderElement.nativeElement, 'scroll'), fromEvent(this.tableBodyElement.nativeElement, 'scroll')).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
                    this.syncScrollTable(data);
                });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
DwTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-table',
                preserveWhitespaces: false,
                template: "<ng-template #colGroupTemplate>\n  <colgroup *ngIf=\"!isWidthConfigSet\">\n    <col [style.width]=\"th.dwWidth\" [style.minWidth]=\"th.dwWidth\" *ngFor=\"let th of listOfDwThComponent\">\n  </colgroup>\n  <colgroup *ngIf=\"isWidthConfigSet\">\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of dwWidthConfig\">\n  </colgroup>\n</ng-template>\n<ng-template #tableInnerTemplate>\n  <div\n    #tableHeaderElement\n    *ngIf=\"dwScroll.x || dwScroll.y\"\n    class=\"ant-table-header\"\n    [ngStyle]=\"headerBottomStyle\">\n    <table\n      [class.ant-table-fixed]=\"dwScroll.x\"\n      [style.width]=\"dwScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"dwScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"dwTheadComponent?.template\"></ng-template>\n      </thead>\n    </table>\n  </div>\n  <div\n    #tableBodyElement\n    class=\"ant-table-body\"\n    [style.maxHeight]=\"dwScroll.y\"\n    [style.overflow-y]=\"dwScroll.y?'scroll':''\"\n    [style.overflow-x]=\"dwScroll.x?'auto':''\">\n    <table [class.ant-table-fixed]=\"dwScroll.x\" [style.width]=\"dwScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"!dwScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"dwTheadComponent?.template\"></ng-template>\n      </thead>\n      <ng-content></ng-content>\n    </table>\n  </div>\n  <div class=\"ant-table-placeholder\" *ngIf=\"(data.length==0)&&!dwLoading\">\n    <span *ngIf=\"!dwNoResult\">{{ locale.emptyText }}</span>\n    <ng-container *ngIf=\"dwNoResult\">\n      <ng-container *ngIf=\"isNoResultString; else noResultTemplate\">{{ dwNoResult }}</ng-container>\n      <ng-template #noResultTemplate>\n        <ng-template [ngTemplateOutlet]=\"dwNoResult\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </div>\n  <div class=\"ant-table-footer\" *ngIf=\"dwFooter\">\n    <ng-container *ngIf=\"isFooterString; else footerTemplate\">{{ dwFooter }}</ng-container>\n    <ng-template #footerTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwFooter\"></ng-template>\n    </ng-template>\n  </div>\n</ng-template>\n<div\n  class=\"ant-table-wrapper\"\n  [class.ant-table-empty]=\"data.length==0\">\n  <dw-spin\n    [dwDelay]=\"dwLoadingDelay\"\n    [dwSpinning]=\"dwLoading\">\n    <div>\n      <div\n        class=\"ant-table\"\n        #tableMainElement\n        [class.ant-table-fixed-header]=\"dwScroll.x || dwScroll.y\"\n        [class.ant-table-bordered]=\"dwBordered\"\n        [class.ant-table-large]=\"dwSize=='default'\"\n        [class.ant-table-middle]=\"dwSize=='middle'\"\n        [class.ant-table-small]=\"dwSize=='small'\">\n        <div class=\"ant-table-title\" *ngIf=\"dwTitle\">\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n          <ng-template #titleTemplate>\n            <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n          </ng-template>\n        </div>\n        <div class=\"ant-table-content\">\n          <ng-container *ngIf=\"dwScroll.x || dwScroll.y; else tableInnerTemplate\">\n            <div class=\"ant-table-scroll\">\n              <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <dw-pagination\n      *ngIf=\"dwShowPagination&&data.length\"\n      [dwInTable]=\"true\"\n      [dwShowSizeChanger]=\"dwShowSizeChanger\"\n      [dwPageSizeOptions]=\"dwPageSizeOptions\"\n      [dwShowQuickJumper]=\"dwShowQuickJumper\"\n      [dwHideOnSinglePage]=\"dwHideOnSinglePage\"\n      [dwShowTotal]=\"dwShowTotal\"\n      [dwSize]=\"(dwSize=='middle'||dwSize=='small')?'small':''\"\n      [dwPageSize]=\"dwPageSize\"\n      (dwPageSizeChange)=\"emitPageSize($event)\"\n      [dwTotal]=\"dwTotal\"\n      [dwSimple]=\"dwSimple\"\n      [dwPageIndex]=\"dwPageIndex\"\n      (dwPageIndexChange)=\"emitPageIndex($event)\">\n    </dw-pagination>\n  </dw-spin>\n</div>"
            }] }
];
/** @nocollapse */
DwTableComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: DwMeasureScrollbarService },
    { type: DwI18nService }
];
DwTableComponent.propDecorators = {
    tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement',] }],
    tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement',] }],
    tableMainElement: [{ type: ViewChild, args: ['tableMainElement',] }],
    listOfDwThComponent: [{ type: ContentChildren, args: [DwThComponent, { descendants: true },] }],
    dwPageSizeChange: [{ type: Output }],
    dwPageIndexChange: [{ type: Output }],
    dwShowTotal: [{ type: Input }],
    dwCurrentPageDataChange: [{ type: Output }],
    dwSize: [{ type: Input }],
    dwPageSizeOptions: [{ type: Input }],
    dwLoadingDelay: [{ type: Input }],
    dwTotal: [{ type: Input }],
    dwSimple: [{ type: Input }],
    dwFrontPagination: [{ type: Input }],
    dwWidthConfig: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwFooter: [{ type: Input }],
    dwNoResult: [{ type: Input }],
    dwBordered: [{ type: Input }],
    dwShowPagination: [{ type: Input }],
    dwLoading: [{ type: Input }],
    dwShowSizeChanger: [{ type: Input }],
    dwHideOnSinglePage: [{ type: Input }],
    dwShowQuickJumper: [{ type: Input }],
    dwScroll: [{ type: Input }],
    dwData: [{ type: Input }],
    dwPageIndex: [{ type: Input }],
    dwPageSize: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
function DwTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTableComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwTableComponent.prototype._bordered;
    /** @type {?} */
    DwTableComponent.prototype._showPagination;
    /** @type {?} */
    DwTableComponent.prototype._loading;
    /** @type {?} */
    DwTableComponent.prototype._showSizeChanger;
    /** @type {?} */
    DwTableComponent.prototype._showQuickJumper;
    /** @type {?} */
    DwTableComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    DwTableComponent.prototype._scroll;
    /** @type {?} */
    DwTableComponent.prototype._footer;
    /** @type {?} */
    DwTableComponent.prototype._title;
    /** @type {?} */
    DwTableComponent.prototype._noResult;
    /** @type {?} */
    DwTableComponent.prototype._pageIndex;
    /** @type {?} */
    DwTableComponent.prototype._pageSize;
    /** @type {?} */
    DwTableComponent.prototype._widthConfig;
    /** @type {?} */
    DwTableComponent.prototype._frontPagination;
    /** @type {?} */
    DwTableComponent.prototype._simple;
    /** @type {?} */
    DwTableComponent.prototype.locale;
    /** @type {?} */
    DwTableComponent.prototype.dwTheadComponent;
    /** @type {?} */
    DwTableComponent.prototype.isFooterString;
    /** @type {?} */
    DwTableComponent.prototype.isTitleString;
    /** @type {?} */
    DwTableComponent.prototype.isNoResultString;
    /** @type {?} */
    DwTableComponent.prototype.el;
    /** @type {?} */
    DwTableComponent.prototype.lastScrollLeft;
    /** @type {?} */
    DwTableComponent.prototype.rawData;
    /** @type {?} */
    DwTableComponent.prototype.syncData;
    /**
     * public data for ngFor tr
     * @type {?}
     */
    DwTableComponent.prototype.data;
    /** @type {?} */
    DwTableComponent.prototype.headerBottomStyle;
    /** @type {?} */
    DwTableComponent.prototype.isWidthConfigSet;
    /** @type {?} */
    DwTableComponent.prototype.tableHeaderElement;
    /** @type {?} */
    DwTableComponent.prototype.tableBodyElement;
    /** @type {?} */
    DwTableComponent.prototype.tableMainElement;
    /** @type {?} */
    DwTableComponent.prototype.listOfDwThComponent;
    /** @type {?} */
    DwTableComponent.prototype.dwPageSizeChange;
    /** @type {?} */
    DwTableComponent.prototype.dwPageIndexChange;
    /** @type {?} */
    DwTableComponent.prototype.dwShowTotal;
    /** @type {?} */
    DwTableComponent.prototype.dwCurrentPageDataChange;
    /** @type {?} */
    DwTableComponent.prototype.dwSize;
    /**
     * page size changer select values
     * @type {?}
     */
    DwTableComponent.prototype.dwPageSizeOptions;
    /** @type {?} */
    DwTableComponent.prototype.dwLoadingDelay;
    /** @type {?} */
    DwTableComponent.prototype.dwTotal;
    /** @type {?} */
    DwTableComponent.prototype.renderer;
    /** @type {?} */
    DwTableComponent.prototype.ngZone;
    /** @type {?} */
    DwTableComponent.prototype.elementRef;
    /** @type {?} */
    DwTableComponent.prototype.cdr;
    /** @type {?} */
    DwTableComponent.prototype.dwMeasureScrollbarService;
    /** @type {?} */
    DwTableComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRbEQsTUFBTTs7Ozs7Ozs7O0lBc1ZKLFlBQW9CLFFBQW1CLEVBQVUsTUFBYyxFQUFVLFVBQXNCLEVBQVUsR0FBc0IsRUFBVSx5QkFBb0QsRUFBVSxJQUFtQjtRQUF0TSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOzRCQXJWbk0sSUFBSSxPQUFPLEVBQVE7eUJBQ3RCLEtBQUs7K0JBQ0MsSUFBSTt3QkFDWCxLQUFLO2dDQUNHLEtBQUs7Z0NBQ0wsS0FBSztpQ0FDSixLQUFLO3VCQUNXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFOzBCQUkzQyxDQUFDO3lCQUNGLEVBQUU7NEJBQ1csRUFBRTtnQ0FDUixJQUFJO3VCQUNiLEtBQUs7O3NCQUVULEVBQUU7OEJBTUMsQ0FBQzs7dUJBRUQsRUFBRTs7d0JBRUQsRUFBRTs7OztvQkFHTixFQUFFO2dDQUVHLEtBQUs7Z0NBTTJCLElBQUksWUFBWSxFQUFFO2lDQUNqQixJQUFJLFlBQVksRUFBRTs7dUNBSWIsSUFBSSxZQUFZLEVBQUU7c0JBQ2pELFNBQVM7Ozs7aUNBRU4sQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFOzhCQUN6QixDQUFDO1FBdVN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDOzs7OztJQXJTRCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQ0ksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCOzs7OztJQUVELElBQ0ksYUFBYSxDQUFDLEtBQWU7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztLQUMzQjs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBaUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWlDO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxnQkFBZ0IsQ0FBQyxLQUFjO1FBQ2pDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0tBQzdCOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFDSSxpQkFBaUIsQ0FBQyxLQUFjO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxJQUNJLGtCQUFrQixDQUFDLEtBQWM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQzs7OztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBQy9COzs7OztJQUVELElBQ0ksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDOzs7O0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7S0FDOUI7Ozs7O0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBK0I7UUFDMUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUNyQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBRUQsSUFFSSxNQUFNLENBQUMsSUFBVztRQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDMUM7S0FDRjs7OztJQUVELGNBQWM7UUFDWixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUNoQzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDO0tBQ0Y7Ozs7O0lBRUQsSUFDSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO1lBQzdCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO0tBQ0Y7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDL0M7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0M7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYTtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO0tBQ0Y7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7O1lBQzFCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOztZQUN2RSxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUcsSUFBSSxTQUFTLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO1NBQ0Y7S0FDRjs7OztJQUVELHVCQUF1QjtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlDOzs7OztJQUVELGVBQWUsQ0FBQyxDQUFhO1FBQzNCLElBQUksQ0FBQyxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFOztZQUNoQyxNQUFNLE1BQU0scUJBQUcsQ0FBQyxDQUFDLE1BQXFCLEVBQUM7WUFDdkMsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtnQkFDakYsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQzdFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7aUJBQ3RFO3FCQUFNLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUNwRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2lCQUNwRTtnQkFDRCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUN6QztLQUNGOzs7O0lBRUQsMEJBQTBCO1FBQ3hCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDcEssSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVCO2lCQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxXQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNqSyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDOUI7U0FDRjtLQUNGOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFpQjs7UUFDN0IsTUFBTSxNQUFNLEdBQUcsMkJBQTJCLENBQUM7O1FBQzNDLE1BQU0sU0FBUyxHQUFHLENBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUUsQ0FBQztRQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNyRixDQUFDLENBQUM7UUFDSCxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxNQUFNLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RjtLQUNGOzs7O0lBRUQsWUFBWTs7UUFDVixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDO1FBQ3JFLElBQUksY0FBYyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztnQkFDdkIsWUFBWSxFQUFHLElBQUksY0FBYyxJQUFJO2dCQUNyQyxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDO1NBQ0g7S0FDRjs7OztJQUdELGNBQWM7UUFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7S0FDbkM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxrQkFBa0I7bUJBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhO21CQUNyQyxJQUFJLENBQUMsZ0JBQWdCO21CQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFO2dCQUN4QyxLQUFLLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEVBQzFELFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUN6RCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO29CQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QixDQUFDLENBQUM7YUFDSjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7O1lBelZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsVUFBVTtnQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsaWhJQUFnRDthQUNqRDs7OztZQXBCQyxTQUFTO1lBTFQsTUFBTTtZQUpOLFVBQVU7WUFIVixpQkFBaUI7WUFvQlYseUJBQXlCO1lBR3pCLGFBQWE7OztpQ0E0Q25CLFNBQVMsU0FBQyxvQkFBb0I7K0JBQzlCLFNBQVMsU0FBQyxrQkFBa0I7K0JBQzVCLFNBQVMsU0FBQyxrQkFBa0I7a0NBQzVCLGVBQWUsU0FBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOytCQUVwRCxNQUFNO2dDQUNOLE1BQU07MEJBQ04sS0FBSztzQ0FHTCxNQUFNO3FCQUNOLEtBQUs7Z0NBRUwsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBRUwsS0FBSztnQ0FTTCxLQUFLOzRCQVVMLEtBQUs7c0JBVUwsS0FBSzt1QkFVTCxLQUFLO3lCQVVMLEtBQUs7eUJBVUwsS0FBSzsrQkFTTCxLQUFLO3dCQVNMLEtBQUs7Z0NBU0wsS0FBSztpQ0FTTCxLQUFLO2dDQVNMLEtBQUs7dUJBU0wsS0FBSztxQkFlTCxLQUFLOzBCQXVCTCxLQUFLO3lCQXlCTCxLQUFLOzZCQWtGTCxZQUFZLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IER3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2R3LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRHdUaENvbXBvbmVudCB9IGZyb20gJy4vZHctdGguY29tcG9uZW50JztcbmltcG9ydCB7IER3VGhlYWRDb21wb25lbnQgfSBmcm9tICcuL2R3LXRoZWFkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctdGFibGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zY3JvbGw6IHsgeDogc3RyaW5nOyB5OiBzdHJpbmcgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuICBwcml2YXRlIF9mb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX25vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMTtcbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSAxMDtcbiAgcHJpdmF0ZSBfd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2Zyb250UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX3NpbXBsZSA9IGZhbHNlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGxvY2FsZTogYW55ID0ge307XG4gIGR3VGhlYWRDb21wb25lbnQ6IER3VGhlYWRDb21wb25lbnQ7XG4gIGlzRm9vdGVyU3RyaW5nOiBib29sZWFuO1xuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xuICBpc05vUmVzdWx0U3RyaW5nOiBib29sZWFuO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIGxhc3RTY3JvbGxMZWZ0ID0gMDtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICByYXdEYXRhOiBhbnlbXSA9IFtdO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHN5bmNEYXRhOiBhbnlbXSA9IFtdO1xuICAvKiogcHVibGljIGRhdGEgZm9yIG5nRm9yIHRyICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgZGF0YTogYW55W10gPSBbXTtcbiAgaGVhZGVyQm90dG9tU3R5bGU7XG4gIGlzV2lkdGhDb25maWdTZXQgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgndGFibGVIZWFkZXJFbGVtZW50JykgdGFibGVIZWFkZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJsZUJvZHlFbGVtZW50JykgdGFibGVCb2R5RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVNYWluRWxlbWVudCcpIHRhYmxlTWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZEd1RoQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdUaENvbXBvbmVudD47XG5cbiAgQE91dHB1dCgpIGR3UGFnZVNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBkd1Nob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciwgcmFuZ2U6IFsgbnVtYmVyLCBudW1iZXIgXSB9PjtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBkd0N1cnJlbnRQYWdlRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZHdTaXplOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG4gIC8qKiBwYWdlIHNpemUgY2hhbmdlciBzZWxlY3QgdmFsdWVzICovXG4gIEBJbnB1dCgpIGR3UGFnZVNpemVPcHRpb25zID0gWyAxMCwgMjAsIDMwLCA0MCwgNTAgXTtcbiAgQElucHV0KCkgZHdMb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBkd1RvdGFsOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2ltcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2ltcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1NpbXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RnJvbnRQYWdpbmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZnJvbnRQYWdpbmF0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnBhcnNlSW5wdXREYXRhKCk7XG4gIH1cblxuICBnZXQgZHdGcm9udFBhZ2luYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb250UGFnaW5hdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1dpZHRoQ29uZmlnKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuaXNXaWR0aENvbmZpZ1NldCA9IHRydWU7XG4gICAgdGhpcy5fd2lkdGhDb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1dpZHRoQ29uZmlnKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Rm9vdGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNGb290ZXJTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2Zvb3RlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3Rm9vdGVyKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZm9vdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Tm9SZXN1bHQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc05vUmVzdWx0U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9ub1Jlc3VsdCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3Tm9SZXN1bHQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9ub1Jlc3VsdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0JvcmRlcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYm9yZGVyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Qm9yZGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1BhZ2luYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UGFnaW5hdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93UGFnaW5hdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BhZ2luYXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1NpemVDaGFuZ2VyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NpemVDaGFuZ2VyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dTaXplQ2hhbmdlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpemVDaGFuZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SGlkZU9uU2luZ2xlUGFnZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2UgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3SGlkZU9uU2luZ2xlUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZU9uU2luZ2xlUGFnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dRdWlja0p1bXBlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dRdWlja0p1bXBlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93UXVpY2tKdW1wZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXBlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Njcm9sbCh2YWx1ZTogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9KSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fc2Nyb2xsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Njcm9sbCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICB9XG5cbiAgZ2V0IGR3U2Nyb2xsKCk6IHsgeDogc3RyaW5nOyB5OiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IGR3RGF0YShkYXRhOiBhbnlbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5wYXJzZUlucHV0RGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2R3RGF0YSBvbmx5IGFjY2VwdCBhcnJheScpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlSW5wdXREYXRhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnN5bmNEYXRhID0gdGhpcy5yYXdEYXRhO1xuICAgICAgdGhpcy5kd1RvdGFsID0gdGhpcy5zeW5jRGF0YS5sZW5ndGg7XG4gICAgICB0aGlzLmNoZWNrUGFnZUluZGV4Qm91bmRpbmcoKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5yYXdEYXRhO1xuICAgICAgdGhpcy5kd0N1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fcGFnZUluZGV4ID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlSW5kZXggPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5kd0Zyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5nZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1BhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlSW5kZXg7XG4gIH1cblxuICBlbWl0UGFnZUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmR3UGFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5kd1BhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuZHdQYWdlSW5kZXgpO1xuICB9XG5cbiAgZW1pdFBhZ2VTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZHdQYWdlU2l6ZSA9IHNpemU7XG4gICAgdGhpcy5kd1BhZ2VTaXplQ2hhbmdlLmVtaXQodGhpcy5kd1BhZ2VTaXplKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fcGFnZVNpemUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZHdGcm9udFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuY2hlY2tQYWdlSW5kZXhCb3VuZGluZygpO1xuICAgICAgdGhpcy5nZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1BhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgY2hlY2tQYWdlSW5kZXhCb3VuZGluZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0Zyb250UGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHRoaXMuc3luY0RhdGEubGVuZ3RoIC8gdGhpcy5kd1BhZ2VTaXplKTtcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9ICF0aGlzLmR3UGFnZUluZGV4ID8gMSA6ICh0aGlzLmR3UGFnZUluZGV4ID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogdGhpcy5kd1BhZ2VJbmRleCk7XG4gICAgICBpZiAocGFnZUluZGV4ICE9PSB0aGlzLmR3UGFnZUluZGV4KSB7XG4gICAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHBhZ2VJbmRleDtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmR3UGFnZUluZGV4Q2hhbmdlLmVtaXQocGFnZUluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5zeW5jRGF0YS5zbGljZSgodGhpcy5kd1BhZ2VJbmRleCAtIDEpICogdGhpcy5kd1BhZ2VTaXplLCB0aGlzLmR3UGFnZUluZGV4ICogdGhpcy5kd1BhZ2VTaXplKTtcbiAgICB0aGlzLmR3Q3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHN5bmNTY3JvbGxUYWJsZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC5zY3JvbGxMZWZ0ICE9PSB0aGlzLmxhc3RTY3JvbGxMZWZ0ICYmIHRoaXMuZHdTY3JvbGwgJiYgdGhpcy5kd1Njcm9sbC54KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMudGFibGVIZWFkZXJFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMudGFibGVCb2R5RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG5cbiAgc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudCAmJiB0aGlzLmR3U2Nyb2xsICYmIHRoaXMuZHdTY3JvbGwueCkge1xuICAgICAgaWYgKCh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA9PT0gdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpICYmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAhPT0gMCkpIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdsZWZ0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID09PSAodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSkge1xuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ3JpZ2h0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ21pZGRsZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFNjcm9sbE5hbWUocG9zaXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXRhYmxlLXNjcm9sbC1wb3NpdGlvbic7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gWyAnbGVmdCcsICdyaWdodCcsICdtaWRkbGUnIF07XG4gICAgY2xhc3NMaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtwcmVmaXh9LSR7bmFtZX1gKTtcbiAgICB9KTtcbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtwb3NpdGlvbn1gKTtcbiAgICB9XG4gIH1cblxuICBmaXRTY3JvbGxCYXIoKTogdm9pZCB7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmR3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uuc2Nyb2xsQmFyV2lkdGg7XG4gICAgaWYgKHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICB0aGlzLmhlYWRlckJvdHRvbVN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Cb3R0b20gOiBgLSR7c2Nyb2xsYmFyV2lkdGh9cHhgLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBgMHB4YFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25XaW5kb3dSZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5maXRTY3JvbGxCYXIoKTtcbiAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJykpO1xuICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCkpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRhYmxlSGVhZGVyRWxlbWVudFxuICAgICAgICAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgICAgICYmIHRoaXMudGFibGVCb2R5RWxlbWVudFxuICAgICAgICAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICBtZXJnZShcbiAgICAgICAgICBmcm9tRXZlbnQodGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpLFxuICAgICAgICAgIGZyb21FdmVudCh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG4gICAgICAgICkucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKGRhdGE6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnN5bmNTY3JvbGxUYWJsZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogRHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSwgcHJpdmF0ZSBpMThuOiBEd0kxOG5TZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=
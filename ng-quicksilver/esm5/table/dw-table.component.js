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
var DwTableComponent = /** @class */ (function () {
    function DwTableComponent(renderer, ngZone, elementRef, cdr, dwMeasureScrollbarService, i18n) {
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
    Object.defineProperty(DwTableComponent.prototype, "dwSimple", {
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
    Object.defineProperty(DwTableComponent.prototype, "dwFrontPagination", {
        get: /**
         * @return {?}
         */
        function () {
            return this._frontPagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._frontPagination = toBoolean(value);
            this.parseInputData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTableComponent.prototype, "dwWidthConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widthConfig;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isWidthConfigSet = true;
            this._widthConfig = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTableComponent.prototype, "dwTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTableComponent.prototype, "dwFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._footer;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isFooterString = !(value instanceof TemplateRef);
            this._footer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTableComponent.prototype, "dwNoResult", {
        get: /**
         * @return {?}
         */
        function () {
            return this._noResult;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isNoResultString = !(value instanceof TemplateRef);
            this._noResult = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTableComponent.prototype, "dwBordered", {
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
    Object.defineProperty(DwTableComponent.prototype, "dwShowPagination", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showPagination;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showPagination = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTableComponent.prototype, "dwLoading", {
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
    Object.defineProperty(DwTableComponent.prototype, "dwShowSizeChanger", {
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
    Object.defineProperty(DwTableComponent.prototype, "dwHideOnSinglePage", {
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
    Object.defineProperty(DwTableComponent.prototype, "dwShowQuickJumper", {
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
    Object.defineProperty(DwTableComponent.prototype, "dwScroll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scroll;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._scroll = value;
            }
            else {
                this._scroll = { x: null, y: null };
            }
            this.cdr.detectChanges();
            this.setScrollPositionClassName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTableComponent.prototype, "dwData", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (Array.isArray(data)) {
                this.rawData = data;
                this.parseInputData();
            }
            else {
                console.warn('dwData only accept array');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTableComponent.prototype.parseInputData = /**
     * @return {?}
     */
    function () {
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
    };
    Object.defineProperty(DwTableComponent.prototype, "dwPageIndex", {
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
            this._pageIndex = value;
            if (this.dwFrontPagination) {
                this.generateSyncDisplayData();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    DwTableComponent.prototype.emitPageIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.dwPageIndex = index;
        this.dwPageIndexChange.emit(this.dwPageIndex);
    };
    /**
     * @param {?} size
     * @return {?}
     */
    DwTableComponent.prototype.emitPageSize = /**
     * @param {?} size
     * @return {?}
     */
    function (size) {
        this.dwPageSize = size;
        this.dwPageSizeChange.emit(this.dwPageSize);
    };
    Object.defineProperty(DwTableComponent.prototype, "dwPageSize", {
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
            if (this._pageSize === value) {
                return;
            }
            this._pageSize = value;
            if (this.dwFrontPagination) {
                this.checkPageIndexBounding();
                this.generateSyncDisplayData();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTableComponent.prototype.checkPageIndexBounding = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dwFrontPagination) {
            /** @type {?} */
            var maxPageIndex = Math.ceil(this.syncData.length / this.dwPageSize);
            /** @type {?} */
            var pageIndex_1 = !this.dwPageIndex ? 1 : (this.dwPageIndex > maxPageIndex ? maxPageIndex : this.dwPageIndex);
            if (pageIndex_1 !== this.dwPageIndex) {
                this._pageIndex = pageIndex_1;
                Promise.resolve().then(function () { return _this.dwPageIndexChange.emit(pageIndex_1); });
            }
        }
    };
    /**
     * @return {?}
     */
    DwTableComponent.prototype.generateSyncDisplayData = /**
     * @return {?}
     */
    function () {
        this.data = this.syncData.slice((this.dwPageIndex - 1) * this.dwPageSize, this.dwPageIndex * this.dwPageSize);
        this.dwCurrentPageDataChange.emit(this.data);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTableComponent.prototype.syncScrollTable = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            var target = /** @type {?} */ (e.target);
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
    };
    /**
     * @return {?}
     */
    DwTableComponent.prototype.setScrollPositionClassName = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    DwTableComponent.prototype.setScrollName = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        /** @type {?} */
        var prefix = 'ant-table-scroll-position';
        /** @type {?} */
        var classList = ['left', 'right', 'middle'];
        classList.forEach(function (name) {
            _this.renderer.removeClass(_this.tableMainElement.nativeElement, prefix + "-" + name);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, prefix + "-" + position);
        }
    };
    /**
     * @return {?}
     */
    DwTableComponent.prototype.fitScrollBar = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollbarWidth = this.dwMeasureScrollbarService.scrollBarWidth;
        if (scrollbarWidth) {
            this.headerBottomStyle = {
                marginBottom: "-" + scrollbarWidth + "px",
                paddingBottom: "0px"
            };
        }
    };
    /**
     * @return {?}
     */
    DwTableComponent.prototype.onWindowResize = /**
     * @return {?}
     */
    function () {
        this.fitScrollBar();
        this.setScrollPositionClassName();
    };
    /**
     * @return {?}
     */
    DwTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Table'); });
        this.fitScrollBar();
    };
    /**
     * @return {?}
     */
    DwTableComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.setScrollPositionClassName(); });
        this.ngZone.runOutsideAngular(function () {
            if (_this.tableHeaderElement
                && _this.tableHeaderElement.nativeElement
                && _this.tableBodyElement
                && _this.tableBodyElement.nativeElement) {
                merge(fromEvent(_this.tableHeaderElement.nativeElement, 'scroll'), fromEvent(_this.tableBodyElement.nativeElement, 'scroll')).pipe(takeUntil(_this.unsubscribe$)).subscribe(function (data) {
                    _this.syncScrollTable(data);
                });
            }
        });
    };
    /**
     * @return {?}
     */
    DwTableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    DwTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-table',
                    preserveWhitespaces: false,
                    template: "<ng-template #colGroupTemplate>\n  <colgroup *ngIf=\"!isWidthConfigSet\">\n    <col [style.width]=\"th.dwWidth\" [style.minWidth]=\"th.dwWidth\" *ngFor=\"let th of listOfDwThComponent\">\n  </colgroup>\n  <colgroup *ngIf=\"isWidthConfigSet\">\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of dwWidthConfig\">\n  </colgroup>\n</ng-template>\n<ng-template #tableInnerTemplate>\n  <div\n    #tableHeaderElement\n    *ngIf=\"dwScroll.x || dwScroll.y\"\n    class=\"ant-table-header\"\n    [ngStyle]=\"headerBottomStyle\">\n    <table\n      [class.ant-table-fixed]=\"dwScroll.x\"\n      [style.width]=\"dwScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"dwScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"dwTheadComponent?.template\"></ng-template>\n      </thead>\n    </table>\n  </div>\n  <div\n    #tableBodyElement\n    class=\"ant-table-body\"\n    [style.maxHeight]=\"dwScroll.y\"\n    [style.overflow-y]=\"dwScroll.y?'scroll':''\"\n    [style.overflow-x]=\"dwScroll.x?'auto':''\">\n    <table [class.ant-table-fixed]=\"dwScroll.x\" [style.width]=\"dwScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"!dwScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"dwTheadComponent?.template\"></ng-template>\n      </thead>\n      <ng-content></ng-content>\n    </table>\n  </div>\n  <div class=\"ant-table-placeholder\" *ngIf=\"(data.length==0)&&!dwLoading\">\n    <span *ngIf=\"!dwNoResult\">{{ locale.emptyText }}</span>\n    <ng-container *ngIf=\"dwNoResult\">\n      <ng-container *ngIf=\"isNoResultString; else noResultTemplate\">{{ dwNoResult }}</ng-container>\n      <ng-template #noResultTemplate>\n        <ng-template [ngTemplateOutlet]=\"dwNoResult\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </div>\n  <div class=\"ant-table-footer\" *ngIf=\"dwFooter\">\n    <ng-container *ngIf=\"isFooterString; else footerTemplate\">{{ dwFooter }}</ng-container>\n    <ng-template #footerTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwFooter\"></ng-template>\n    </ng-template>\n  </div>\n</ng-template>\n<div\n  class=\"ant-table-wrapper\"\n  [class.ant-table-empty]=\"data.length==0\">\n  <dw-spin\n    [dwDelay]=\"dwLoadingDelay\"\n    [dwSpinning]=\"dwLoading\">\n    <div>\n      <div\n        class=\"ant-table\"\n        #tableMainElement\n        [class.ant-table-fixed-header]=\"dwScroll.x || dwScroll.y\"\n        [class.ant-table-bordered]=\"dwBordered\"\n        [class.ant-table-large]=\"dwSize=='default'\"\n        [class.ant-table-middle]=\"dwSize=='middle'\"\n        [class.ant-table-small]=\"dwSize=='small'\">\n        <div class=\"ant-table-title\" *ngIf=\"dwTitle\">\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n          <ng-template #titleTemplate>\n            <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n          </ng-template>\n        </div>\n        <div class=\"ant-table-content\">\n          <ng-container *ngIf=\"dwScroll.x || dwScroll.y; else tableInnerTemplate\">\n            <div class=\"ant-table-scroll\">\n              <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <dw-pagination\n      *ngIf=\"dwShowPagination&&data.length\"\n      [dwInTable]=\"true\"\n      [dwShowSizeChanger]=\"dwShowSizeChanger\"\n      [dwPageSizeOptions]=\"dwPageSizeOptions\"\n      [dwShowQuickJumper]=\"dwShowQuickJumper\"\n      [dwHideOnSinglePage]=\"dwHideOnSinglePage\"\n      [dwShowTotal]=\"dwShowTotal\"\n      [dwSize]=\"(dwSize=='middle'||dwSize=='small')?'small':''\"\n      [dwPageSize]=\"dwPageSize\"\n      (dwPageSizeChange)=\"emitPageSize($event)\"\n      [dwTotal]=\"dwTotal\"\n      [dwSimple]=\"dwSimple\"\n      [dwPageIndex]=\"dwPageIndex\"\n      (dwPageIndexChange)=\"emitPageIndex($event)\">\n    </dw-pagination>\n  </dw-spin>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwTableComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NgZone },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: DwMeasureScrollbarService },
        { type: DwI18nService }
    ]; };
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
    return DwTableComponent;
}());
export { DwTableComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBOFZoRCwwQkFBb0IsUUFBbUIsRUFBVSxNQUFjLEVBQVUsVUFBc0IsRUFBVSxHQUFzQixFQUFVLHlCQUFvRCxFQUFVLElBQW1CO1FBQXRNLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7NEJBclZuTSxJQUFJLE9BQU8sRUFBUTt5QkFDdEIsS0FB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O3NDQUM1QixlQUFlLFNBQUMsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTttQ0FFcEQsTUFBTTtvQ0FDTixNQUFNOzhCQUNOLEtBQUs7MENBR0wsTUFBTTt5QkFDTixLQUFLO29DQUVMLEtBQUs7aUNBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUVMLEtBQUs7b0NBU0wsS0FBSztnQ0FVTCxLQUFLOzBCQVVMLEtBQUs7MkJBVUwsS0FBSzs2QkFVTCxLQUFLOzZCQVVMLEtBQUs7bUNBU0wsS0FBSzs0QkFTTCxLQUFLO29DQVNMLEtBQUs7cUNBU0wsS0FBSztvQ0FTTCxLQUFLOzJCQVNMLEtBQUs7eUJBZUwsS0FBSzs4QkF1QkwsS0FBSzs2QkF5QkwsS0FBSztpQ0FrRkwsWUFBWSxTQUFDLGVBQWU7OzJCQXhWL0I7O1NBbUNhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IER3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL2R3LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRHdUaENvbXBvbmVudCB9IGZyb20gJy4vZHctdGguY29tcG9uZW50JztcbmltcG9ydCB7IER3VGhlYWRDb21wb25lbnQgfSBmcm9tICcuL2R3LXRoZWFkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctdGFibGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zY3JvbGw6IHsgeDogc3RyaW5nOyB5OiBzdHJpbmcgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuICBwcml2YXRlIF9mb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX25vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMTtcbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSAxMDtcbiAgcHJpdmF0ZSBfd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2Zyb250UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX3NpbXBsZSA9IGZhbHNlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGxvY2FsZTogYW55ID0ge307XG4gIGR3VGhlYWRDb21wb25lbnQ6IER3VGhlYWRDb21wb25lbnQ7XG4gIGlzRm9vdGVyU3RyaW5nOiBib29sZWFuO1xuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xuICBpc05vUmVzdWx0U3RyaW5nOiBib29sZWFuO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIGxhc3RTY3JvbGxMZWZ0ID0gMDtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICByYXdEYXRhOiBhbnlbXSA9IFtdO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHN5bmNEYXRhOiBhbnlbXSA9IFtdO1xuICAvKiogcHVibGljIGRhdGEgZm9yIG5nRm9yIHRyICovXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgZGF0YTogYW55W10gPSBbXTtcbiAgaGVhZGVyQm90dG9tU3R5bGU7XG4gIGlzV2lkdGhDb25maWdTZXQgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgndGFibGVIZWFkZXJFbGVtZW50JykgdGFibGVIZWFkZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJsZUJvZHlFbGVtZW50JykgdGFibGVCb2R5RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVNYWluRWxlbWVudCcpIHRhYmxlTWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZEd1RoQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdUaENvbXBvbmVudD47XG5cbiAgQE91dHB1dCgpIGR3UGFnZVNpemVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdQYWdlSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBkd1Nob3dUb3RhbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IG51bWJlciwgcmFuZ2U6IFsgbnVtYmVyLCBudW1iZXIgXSB9PjtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBPdXRwdXQoKSBkd0N1cnJlbnRQYWdlRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgZHdTaXplOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG4gIC8qKiBwYWdlIHNpemUgY2hhbmdlciBzZWxlY3QgdmFsdWVzICovXG4gIEBJbnB1dCgpIGR3UGFnZVNpemVPcHRpb25zID0gWyAxMCwgMjAsIDMwLCA0MCwgNTAgXTtcbiAgQElucHV0KCkgZHdMb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBkd1RvdGFsOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2ltcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2ltcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1NpbXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RnJvbnRQYWdpbmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZnJvbnRQYWdpbmF0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnBhcnNlSW5wdXREYXRhKCk7XG4gIH1cblxuICBnZXQgZHdGcm9udFBhZ2luYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Zyb250UGFnaW5hdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1dpZHRoQ29uZmlnKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuaXNXaWR0aENvbmZpZ1NldCA9IHRydWU7XG4gICAgdGhpcy5fd2lkdGhDb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1dpZHRoQ29uZmlnKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Rm9vdGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNGb290ZXJTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2Zvb3RlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3Rm9vdGVyKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZm9vdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Tm9SZXN1bHQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc05vUmVzdWx0U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9ub1Jlc3VsdCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3Tm9SZXN1bHQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9ub1Jlc3VsdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0JvcmRlcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYm9yZGVyZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Qm9yZGVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2JvcmRlcmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1BhZ2luYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UGFnaW5hdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93UGFnaW5hdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BhZ2luYXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1NpemVDaGFuZ2VyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NpemVDaGFuZ2VyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dTaXplQ2hhbmdlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpemVDaGFuZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SGlkZU9uU2luZ2xlUGFnZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVPblNpbmdsZVBhZ2UgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3SGlkZU9uU2luZ2xlUGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZU9uU2luZ2xlUGFnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dRdWlja0p1bXBlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dRdWlja0p1bXBlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93UXVpY2tKdW1wZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dRdWlja0p1bXBlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Njcm9sbCh2YWx1ZTogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9KSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fc2Nyb2xsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Njcm9sbCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpO1xuICB9XG5cbiAgZ2V0IGR3U2Nyb2xsKCk6IHsgeDogc3RyaW5nOyB5OiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IGR3RGF0YShkYXRhOiBhbnlbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICB0aGlzLnJhd0RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5wYXJzZUlucHV0RGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2R3RGF0YSBvbmx5IGFjY2VwdCBhcnJheScpO1xuICAgIH1cbiAgfVxuXG4gIHBhcnNlSW5wdXREYXRhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnN5bmNEYXRhID0gdGhpcy5yYXdEYXRhO1xuICAgICAgdGhpcy5kd1RvdGFsID0gdGhpcy5zeW5jRGF0YS5sZW5ndGg7XG4gICAgICB0aGlzLmNoZWNrUGFnZUluZGV4Qm91bmRpbmcoKTtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5yYXdEYXRhO1xuICAgICAgdGhpcy5kd0N1cnJlbnRQYWdlRGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UGFnZUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fcGFnZUluZGV4ID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlSW5kZXggPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5kd0Zyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5nZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1BhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlSW5kZXg7XG4gIH1cblxuICBlbWl0UGFnZUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmR3UGFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5kd1BhZ2VJbmRleENoYW5nZS5lbWl0KHRoaXMuZHdQYWdlSW5kZXgpO1xuICB9XG5cbiAgZW1pdFBhZ2VTaXplKHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuZHdQYWdlU2l6ZSA9IHNpemU7XG4gICAgdGhpcy5kd1BhZ2VTaXplQ2hhbmdlLmVtaXQodGhpcy5kd1BhZ2VTaXplKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BhZ2VTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fcGFnZVNpemUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhZ2VTaXplID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZHdGcm9udFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuY2hlY2tQYWdlSW5kZXhCb3VuZGluZygpO1xuICAgICAgdGhpcy5nZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1BhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgY2hlY2tQYWdlSW5kZXhCb3VuZGluZygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0Zyb250UGFnaW5hdGlvbikge1xuICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHRoaXMuc3luY0RhdGEubGVuZ3RoIC8gdGhpcy5kd1BhZ2VTaXplKTtcbiAgICAgIGNvbnN0IHBhZ2VJbmRleCA9ICF0aGlzLmR3UGFnZUluZGV4ID8gMSA6ICh0aGlzLmR3UGFnZUluZGV4ID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogdGhpcy5kd1BhZ2VJbmRleCk7XG4gICAgICBpZiAocGFnZUluZGV4ICE9PSB0aGlzLmR3UGFnZUluZGV4KSB7XG4gICAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHBhZ2VJbmRleDtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmR3UGFnZUluZGV4Q2hhbmdlLmVtaXQocGFnZUluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVTeW5jRGlzcGxheURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5zeW5jRGF0YS5zbGljZSgodGhpcy5kd1BhZ2VJbmRleCAtIDEpICogdGhpcy5kd1BhZ2VTaXplLCB0aGlzLmR3UGFnZUluZGV4ICogdGhpcy5kd1BhZ2VTaXplKTtcbiAgICB0aGlzLmR3Q3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHN5bmNTY3JvbGxUYWJsZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUuY3VycmVudFRhcmdldCA9PT0gZS50YXJnZXQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRhcmdldC5zY3JvbGxMZWZ0ICE9PSB0aGlzLmxhc3RTY3JvbGxMZWZ0ICYmIHRoaXMuZHdTY3JvbGwgJiYgdGhpcy5kd1Njcm9sbC54KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMudGFibGVIZWFkZXJFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMudGFibGVCb2R5RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG5cbiAgc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudCAmJiB0aGlzLmR3U2Nyb2xsICYmIHRoaXMuZHdTY3JvbGwueCkge1xuICAgICAgaWYgKCh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA9PT0gdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpICYmICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAhPT0gMCkpIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxOYW1lKCdsZWZ0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID09PSAodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCArIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoKSkge1xuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ3JpZ2h0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ21pZGRsZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldFNjcm9sbE5hbWUocG9zaXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwcmVmaXggPSAnYW50LXRhYmxlLXNjcm9sbC1wb3NpdGlvbic7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gWyAnbGVmdCcsICdyaWdodCcsICdtaWRkbGUnIF07XG4gICAgY2xhc3NMaXN0LmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMudGFibGVNYWluRWxlbWVudC5uYXRpdmVFbGVtZW50LCBgJHtwcmVmaXh9LSR7bmFtZX1gKTtcbiAgICB9KTtcbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtwb3NpdGlvbn1gKTtcbiAgICB9XG4gIH1cblxuICBmaXRTY3JvbGxCYXIoKTogdm9pZCB7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmR3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2Uuc2Nyb2xsQmFyV2lkdGg7XG4gICAgaWYgKHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICB0aGlzLmhlYWRlckJvdHRvbVN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Cb3R0b20gOiBgLSR7c2Nyb2xsYmFyV2lkdGh9cHhgLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBgMHB4YFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25XaW5kb3dSZXNpemUoKTogdm9pZCB7XG4gICAgdGhpcy5maXRTY3JvbGxCYXIoKTtcbiAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RhYmxlJykpO1xuICAgIHRoaXMuZml0U2Nyb2xsQmFyKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCkpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRhYmxlSGVhZGVyRWxlbWVudFxuICAgICAgICAmJiB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgICAgICYmIHRoaXMudGFibGVCb2R5RWxlbWVudFxuICAgICAgICAmJiB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICBtZXJnZShcbiAgICAgICAgICBmcm9tRXZlbnQodGhpcy50YWJsZUhlYWRlckVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpLFxuICAgICAgICAgIGZyb21FdmVudCh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcpXG4gICAgICAgICkucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKGRhdGE6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnN5bmNTY3JvbGxUYWJsZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZTogRHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSwgcHJpdmF0ZSBpMThuOiBEd0kxOG5TZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG59XG4iXX0=
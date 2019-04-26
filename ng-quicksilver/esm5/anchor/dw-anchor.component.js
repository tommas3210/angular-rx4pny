/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { DwScrollService } from '../core/scroll/dw-scroll.service';
import { toBoolean, toNumber } from '../core/util/convert';
/**
 * @record
 */
function Section() { }
function Section_tsickle_Closure_declarations() {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var DwAnchorComponent = /** @class */ (function () {
    // endregion
    /* tslint:disable-next-line:no-any */
    function DwAnchorComponent(scrollSrv, doc, cd) {
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cd = cd;
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this._affix = true;
        this._bounds = 5;
        this._showInkInFixed = false;
        this.dwClick = new EventEmitter();
        this.dwScroll = new EventEmitter();
    }
    Object.defineProperty(DwAnchorComponent.prototype, "dwAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._affix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._affix = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAnchorComponent.prototype, "dwBounds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bounds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bounds = toNumber(value, 5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAnchorComponent.prototype, "dwOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAnchorComponent.prototype, "dwShowInkInFixed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showInkInFixed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showInkInFixed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAnchorComponent.prototype, "dwTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} link
     * @return {?}
     */
    DwAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    DwAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @return {?}
     */
    DwAnchorComponent.prototype.getTarget = /**
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    DwAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    DwAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListen();
    };
    /**
     * @return {?}
     */
    DwAnchorComponent.prototype.registerScrollEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll').pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(function (e) { return _this.handleScroll(); });
        // 由于页面刷新时滚动条位置的记忆
        // 倒置在dom未渲染完成，导致计算不正确
        setTimeout(function () { return _this.handleScroll(); });
    };
    /**
     * @return {?}
     */
    DwAnchorComponent.prototype.removeListen = /**
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    DwAnchorComponent.prototype.getOffsetTop = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
            return rect.top;
        }
        return rect.top - element.ownerDocument.documentElement.clientTop;
    };
    /**
     * @return {?}
     */
    DwAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.dwOffsetTop || 0) + this.dwBounds;
        this.links.forEach(function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.dwHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target && _this.getOffsetTop(target) < scope) {
                /** @type {?} */
                var top_1 = _this.getOffsetTop(target);
                sections.push({
                    top: top_1,
                    comp: comp
                });
            }
        });
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cd.detectChanges();
        }
        else {
            /** @type {?} */
            var maxSection = sections.reduce(function (prev, curr) { return curr.top > prev.top ? curr : prev; });
            this.handleActive(maxSection.comp);
        }
    };
    /**
     * @return {?}
     */
    DwAnchorComponent.prototype.clearActive = /**
     * @return {?}
     */
    function () {
        this.links.forEach(function (i) { return i.active = false; });
    };
    /**
     * @param {?} comp
     * @return {?}
     */
    DwAnchorComponent.prototype.handleActive = /**
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.active = true;
        this.cd.detectChanges();
        /** @type {?} */
        var linkNode = /** @type {?} */ ((/** @type {?} */ (comp.el.nativeElement)).querySelector('.ant-anchor-link-title'));
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.dwScroll.emit(comp);
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    DwAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.dwHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        var elOffsetTop = this.scrollSrv.getOffset(el).top;
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.dwOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, null, function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        });
        this.dwClick.emit(linkComp.dwHref);
    };
    DwAnchorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-anchor',
                    preserveWhitespaces: false,
                    template: "<dw-affix *ngIf=\"dwAffix;else content\" [dwOffsetTop]=\"dwOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</dw-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" #wrap [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !dwAffix && !dwShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DwAnchorComponent.ctorParameters = function () { return [
        { type: DwScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
    DwAnchorComponent.propDecorators = {
        wrap: [{ type: ViewChild, args: ['wrap',] }],
        ink: [{ type: ViewChild, args: ['ink',] }],
        dwAffix: [{ type: Input }],
        dwBounds: [{ type: Input }],
        dwOffsetTop: [{ type: Input }],
        dwShowInkInFixed: [{ type: Input }],
        dwTarget: [{ type: Input }],
        dwClick: [{ type: Output }],
        dwScroll: [{ type: Output }]
    };
    return DwAnchorComponent;
}());
export { DwAnchorComponent };
function DwAnchorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAnchorComponent.prototype.links;
    /** @type {?} */
    DwAnchorComponent.prototype.animating;
    /** @type {?} */
    DwAnchorComponent.prototype.target;
    /** @type {?} */
    DwAnchorComponent.prototype.scroll$;
    /** @type {?} */
    DwAnchorComponent.prototype.visible;
    /** @type {?} */
    DwAnchorComponent.prototype.wrapperStyle;
    /** @type {?} */
    DwAnchorComponent.prototype.wrap;
    /** @type {?} */
    DwAnchorComponent.prototype.ink;
    /** @type {?} */
    DwAnchorComponent.prototype._affix;
    /** @type {?} */
    DwAnchorComponent.prototype._bounds;
    /** @type {?} */
    DwAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    DwAnchorComponent.prototype._showInkInFixed;
    /** @type {?} */
    DwAnchorComponent.prototype.dwClick;
    /** @type {?} */
    DwAnchorComponent.prototype.dwScroll;
    /** @type {?} */
    DwAnchorComponent.prototype.scrollSrv;
    /** @type {?} */
    DwAnchorComponent.prototype.doc;
    /** @type {?} */
    DwAnchorComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYW5jaG9yL2R3LWFuY2hvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7QUFTM0QsSUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7O0lBOEVuQyxZQUFZO0lBRVoscUNBQXFDO0lBQ3JDLDJCQUFvQixTQUEwQixFQUE0QixHQUFRLEVBQVUsRUFBcUI7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBNEIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO3FCQXZFeEUsRUFBRTt5QkFDdkIsS0FBSztzQkFDQyxJQUFJO3VCQUNOLElBQUk7dUJBQ2xCLEtBQUs7NEJBQ0ksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFO3NCQU1sQixJQUFJO3VCQVdKLENBQUM7K0JBeUJRLEtBQUs7dUJBaUJFLElBQUksWUFBWSxFQUFFO3dCQUVGLElBQUksWUFBWSxFQUFFO0tBTTNFO0lBM0RELHNCQUNJLHNDQUFPOzs7O1FB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TUFBTTsyQkFFTixNQUFNOzs0QkF0R1Q7O1NBa0NhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IER3U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL2R3LXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3QW5jaG9yTGlua0NvbXBvbmVudCB9IGZyb20gJy4vZHctYW5jaG9yLWxpbmsuY29tcG9uZW50JztcblxuaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBjb21wOiBEd0FuY2hvckxpbmtDb21wb25lbnQ7XG4gIHRvcDogbnVtYmVyO1xufVxuXG5jb25zdCBzaGFycE1hdGNoZXJSZWd4ID0gLyMoW14jXSspJC87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctYW5jaG9yJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWFuY2hvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEd0FuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBsaW5rczogRHdBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0YXJnZXQ6IEVsZW1lbnQgPSBudWxsO1xuICBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICB2aXNpYmxlID0gZmFsc2U7XG4gIHdyYXBwZXJTdHlsZToge30gPSB7ICdtYXgtaGVpZ2h0JzogJzEwMHZoJyB9O1xuICBAVmlld0NoaWxkKCd3cmFwJykgcHJpdmF0ZSB3cmFwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbmsnKSBwcml2YXRlIGluazogRWxlbWVudFJlZjtcblxuICAvLyByZWdpb246IGZpZWxkc1xuXG4gIHByaXZhdGUgX2FmZml4OiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdBZmZpeCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FmZml4ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hZmZpeDtcbiAgfVxuXG4gIHByaXZhdGUgX2JvdW5kczogbnVtYmVyID0gNTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdCb3VuZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2JvdW5kcyA9IHRvTnVtYmVyKHZhbHVlLCA1KTtcbiAgfVxuXG4gIGdldCBkd0JvdW5kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9ib3VuZHM7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgICB0aGlzLndyYXBwZXJTdHlsZSA9IHtcbiAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMuX29mZnNldFRvcH1weClgXG4gICAgfTtcbiAgfVxuXG4gIGdldCBkd09mZnNldFRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIF9zaG93SW5rSW5GaXhlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dJbmtJbkZpeGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0lua0luRml4ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0lua0luRml4ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dJbmtJbkZpeGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGFyZ2V0KGVsOiBFbGVtZW50KSB7XG4gICAgdGhpcy50YXJnZXQgPSBlbDtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBkd0NsaWNrOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgZHdTY3JvbGw6IEV2ZW50RW1pdHRlcjxEd0FuY2hvckxpbmtDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY3JvbGxTcnY6IER3U2Nyb2xsU2VydmljZSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIHJlZ2lzdGVyTGluayhsaW5rOiBEd0FuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XG4gIH1cblxuICB1bnJlZ2lzdGVyTGluayhsaW5rOiBEd0FuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLnNwbGljZSh0aGlzLmxpbmtzLmluZGV4T2YobGluayksIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogRWxlbWVudCB8IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0IHx8IHdpbmRvdztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpLnBpcGUodGhyb3R0bGVUaW1lKDUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gICAgLy8g55Sx5LqO6aG16Z2i5Yi35paw5pe25rua5Yqo5p2h5L2N572u55qE6K6w5b+GXG4gICAgLy8g5YCS572u5ZyoZG9t5pyq5riy5p+T5a6M5oiQ77yM5a+86Ie06K6h566X5LiN5q2j56GuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbCQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0T2Zmc2V0VG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXJlY3Qud2lkdGggJiYgIXJlY3QuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gcmVjdC50b3A7XG4gICAgfVxuICAgIHJldHVybiByZWN0LnRvcCAtIGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcbiAgICBjb25zdCBzY29wZSA9ICh0aGlzLmR3T2Zmc2V0VG9wIHx8IDApICsgdGhpcy5kd0JvdW5kcztcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLmR3SHJlZi50b1N0cmluZygpKTtcbiAgICAgIGlmICghc2hhcnBMaW5rTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoc2hhcnBMaW5rTWF0Y2hbIDEgXSk7XG4gICAgICBpZiAodGFyZ2V0ICYmIHRoaXMuZ2V0T2Zmc2V0VG9wKHRhcmdldCkgPCBzY29wZSkge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpO1xuICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgY29tcFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmlzaWJsZSA9ICEhc2VjdGlvbnMubGVuZ3RoO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWF4U2VjdGlvbiA9IHNlY3Rpb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci50b3AgPiBwcmV2LnRvcCA/IGN1cnIgOiBwcmV2KTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKG1heFNlY3Rpb24uY29tcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goaSA9PiBpLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aXZlKGNvbXA6IER3QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcblxuICAgIGNvbXAuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGNvbnN0IGxpbmtOb2RlID0gKGNvbXAuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1hbmNob3ItbGluay10aXRsZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XG5cbiAgICB0aGlzLmR3U2Nyb2xsLmVtaXQoY29tcCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGxUbyhsaW5rQ29tcDogRHdBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGxpbmtDb21wLmR3SHJlZik7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjb250YWluZXJTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSk7XG4gICAgY29uc3QgZWxPZmZzZXRUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRPZmZzZXQoZWwpLnRvcDtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLmR3T2Zmc2V0VG9wIHx8IDApO1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIHRhcmdldFNjcm9sbFRvcCwgbnVsbCwgKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKGxpbmtDb21wKTtcbiAgICB9KTtcbiAgICB0aGlzLmR3Q2xpY2suZW1pdChsaW5rQ29tcC5kd0hyZWYpO1xuICB9XG5cbn1cbiJdfQ==
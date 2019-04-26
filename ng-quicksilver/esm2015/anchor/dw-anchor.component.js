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
const sharpMatcherRegx = /#([^#]+)$/;
export class DwAnchorComponent {
    /**
     * @param {?} scrollSrv
     * @param {?} doc
     * @param {?} cd
     */
    constructor(scrollSrv, doc, cd) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAffix(value) {
        this._affix = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAffix() {
        return this._affix;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwBounds(value) {
        this._bounds = toNumber(value, 5);
    }
    /**
     * @return {?}
     */
    get dwBounds() {
        return this._bounds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwOffsetTop(value) {
        this._offsetTop = toNumber(value, 0);
        this.wrapperStyle = {
            'max-height': `calc(100vh - ${this._offsetTop}px)`
        };
    }
    /**
     * @return {?}
     */
    get dwOffsetTop() {
        return this._offsetTop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowInkInFixed(value) {
        this._showInkInFixed = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowInkInFixed() {
        return this._showInkInFixed;
    }
    /**
     * @param {?} el
     * @return {?}
     */
    set dwTarget(el) {
        this.target = el;
        this.registerScrollEvent();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    registerLink(link) {
        this.links.push(link);
    }
    /**
     * @param {?} link
     * @return {?}
     */
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    /**
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListen();
    }
    /**
     * @return {?}
     */
    registerScrollEvent() {
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll').pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(e => this.handleScroll());
        // 由于页面刷新时滚动条位置的记忆
        // 倒置在dom未渲染完成，导致计算不正确
        setTimeout(() => this.handleScroll());
    }
    /**
     * @return {?}
     */
    removeListen() {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getOffsetTop(element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        const rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
            return rect.top;
        }
        return rect.top - element.ownerDocument.documentElement.clientTop;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (this.animating) {
            return;
        }
        /** @type {?} */
        const sections = [];
        /** @type {?} */
        const scope = (this.dwOffsetTop || 0) + this.dwBounds;
        this.links.forEach(comp => {
            /** @type {?} */
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.dwHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target && this.getOffsetTop(target) < scope) {
                /** @type {?} */
                const top = this.getOffsetTop(target);
                sections.push({
                    top,
                    comp
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
            const maxSection = sections.reduce((prev, curr) => curr.top > prev.top ? curr : prev);
            this.handleActive(maxSection.comp);
        }
    }
    /**
     * @return {?}
     */
    clearActive() {
        this.links.forEach(i => i.active = false);
    }
    /**
     * @param {?} comp
     * @return {?}
     */
    handleActive(comp) {
        this.clearActive();
        comp.active = true;
        this.cd.detectChanges();
        /** @type {?} */
        const linkNode = /** @type {?} */ ((/** @type {?} */ (comp.el.nativeElement)).querySelector('.ant-anchor-link-title'));
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.dwScroll.emit(comp);
    }
    /**
     * @param {?} linkComp
     * @return {?}
     */
    handleScrollTo(linkComp) {
        /** @type {?} */
        const el = this.doc.querySelector(linkComp.dwHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        const containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        const elOffsetTop = this.scrollSrv.getOffset(el).top;
        /** @type {?} */
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.dwOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, null, () => {
            this.animating = false;
            this.handleActive(linkComp);
        });
        this.dwClick.emit(linkComp.dwHref);
    }
}
DwAnchorComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-anchor',
                preserveWhitespaces: false,
                template: "<dw-affix *ngIf=\"dwAffix;else content\" [dwOffsetTop]=\"dwOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</dw-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" #wrap [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !dwAffix && !dwShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DwAnchorComponent.ctorParameters = () => [
    { type: DwScrollService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYW5jaG9yL2R3LWFuY2hvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7QUFTM0QsTUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7QUFRckMsTUFBTTs7Ozs7O0lBeUVKLFlBQW9CLFNBQTBCLEVBQTRCLEdBQVEsRUFBVSxFQUFxQjtRQUE3RixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7cUJBdkV4RSxFQUFFO3lCQUN2QixLQUFLO3NCQUNDLElBQUk7dUJBQ04sSUFBSTt1QkFDbEIsS0FBSzs0QkFDSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7c0JBTWxCLElBQUk7dUJBV0osQ0FBQzsrQkF5QlEsS0FBSzt1QkFpQkUsSUFBSSxZQUFZLEVBQUU7d0JBRUYsSUFBSSxZQUFZLEVBQUU7S0FNM0U7Ozs7O0lBM0RELElBQ0ksT0FBTyxDQUFDLEtBQWM7UUFD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QyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7O1FBQ3RFLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7UUFDckQsTUFBTSxlQUFlLEdBQUcsa0JBQWtCLEdBQUcsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEM7OztZQS9MRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFdBQVc7Z0JBQ2hDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG1pQkFBaUQ7Z0JBQ2pELGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ3BEOzs7O1lBakJRLGVBQWU7NENBMkYyQixNQUFNLFNBQUMsUUFBUTtZQXZHaEUsaUJBQWlCOzs7bUJBc0NoQixTQUFTLFNBQUMsTUFBTTtrQkFDaEIsU0FBUyxTQUFDLEtBQUs7c0JBTWYsS0FBSzt1QkFXTCxLQUFLOzBCQVdMLEtBQUs7K0JBY0wsS0FBSzt1QkFTTCxLQUFLO3NCQU1MLE1BQU07dUJBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IER3U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL2R3LXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3QW5jaG9yTGlua0NvbXBvbmVudCB9IGZyb20gJy4vZHctYW5jaG9yLWxpbmsuY29tcG9uZW50JztcblxuaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBjb21wOiBEd0FuY2hvckxpbmtDb21wb25lbnQ7XG4gIHRvcDogbnVtYmVyO1xufVxuXG5jb25zdCBzaGFycE1hdGNoZXJSZWd4ID0gLyMoW14jXSspJC87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctYW5jaG9yJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWFuY2hvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEd0FuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBsaW5rczogRHdBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0YXJnZXQ6IEVsZW1lbnQgPSBudWxsO1xuICBzY3JvbGwkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICB2aXNpYmxlID0gZmFsc2U7XG4gIHdyYXBwZXJTdHlsZToge30gPSB7ICdtYXgtaGVpZ2h0JzogJzEwMHZoJyB9O1xuICBAVmlld0NoaWxkKCd3cmFwJykgcHJpdmF0ZSB3cmFwOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbmsnKSBwcml2YXRlIGluazogRWxlbWVudFJlZjtcblxuICAvLyByZWdpb246IGZpZWxkc1xuXG4gIHByaXZhdGUgX2FmZml4OiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdBZmZpeCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FmZml4ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hZmZpeDtcbiAgfVxuXG4gIHByaXZhdGUgX2JvdW5kczogbnVtYmVyID0gNTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdCb3VuZHModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2JvdW5kcyA9IHRvTnVtYmVyKHZhbHVlLCA1KTtcbiAgfVxuXG4gIGdldCBkd0JvdW5kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9ib3VuZHM7XG4gIH1cblxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdPZmZzZXRUb3AodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFRvcCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgICB0aGlzLndyYXBwZXJTdHlsZSA9IHtcbiAgICAgICdtYXgtaGVpZ2h0JzogYGNhbGMoMTAwdmggLSAke3RoaXMuX29mZnNldFRvcH1weClgXG4gICAgfTtcbiAgfVxuXG4gIGdldCBkd09mZnNldFRvcCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXRUb3A7XG4gIH1cblxuICBwcml2YXRlIF9zaG93SW5rSW5GaXhlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dJbmtJbkZpeGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0lua0luRml4ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0lua0luRml4ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dJbmtJbkZpeGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGFyZ2V0KGVsOiBFbGVtZW50KSB7XG4gICAgdGhpcy50YXJnZXQgPSBlbDtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBkd0NsaWNrOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgZHdTY3JvbGw6IEV2ZW50RW1pdHRlcjxEd0FuY2hvckxpbmtDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGVuZHJlZ2lvblxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY3JvbGxTcnY6IER3U2Nyb2xsU2VydmljZSwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIHJlZ2lzdGVyTGluayhsaW5rOiBEd0FuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XG4gIH1cblxuICB1bnJlZ2lzdGVyTGluayhsaW5rOiBEd0FuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLnNwbGljZSh0aGlzLmxpbmtzLmluZGV4T2YobGluayksIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXQoKTogRWxlbWVudCB8IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0IHx8IHdpbmRvdztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpLnBpcGUodGhyb3R0bGVUaW1lKDUwKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gICAgLy8g55Sx5LqO6aG16Z2i5Yi35paw5pe25rua5Yqo5p2h5L2N572u55qE6K6w5b+GXG4gICAgLy8g5YCS572u5ZyoZG9t5pyq5riy5p+T5a6M5oiQ77yM5a+86Ie06K6h566X5LiN5q2j56GuXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbCQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0T2Zmc2V0VG9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXJlY3Qud2lkdGggJiYgIXJlY3QuaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gcmVjdC50b3A7XG4gICAgfVxuICAgIHJldHVybiByZWN0LnRvcCAtIGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3Rpb25zOiBTZWN0aW9uW10gPSBbXTtcbiAgICBjb25zdCBzY29wZSA9ICh0aGlzLmR3T2Zmc2V0VG9wIHx8IDApICsgdGhpcy5kd0JvdW5kcztcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICBjb25zdCBzaGFycExpbmtNYXRjaCA9IHNoYXJwTWF0Y2hlclJlZ3guZXhlYyhjb21wLmR3SHJlZi50b1N0cmluZygpKTtcbiAgICAgIGlmICghc2hhcnBMaW5rTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb2MuZ2V0RWxlbWVudEJ5SWQoc2hhcnBMaW5rTWF0Y2hbIDEgXSk7XG4gICAgICBpZiAodGFyZ2V0ICYmIHRoaXMuZ2V0T2Zmc2V0VG9wKHRhcmdldCkgPCBzY29wZSkge1xuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpO1xuICAgICAgICBzZWN0aW9ucy5wdXNoKHtcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgY29tcFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmlzaWJsZSA9ICEhc2VjdGlvbnMubGVuZ3RoO1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWF4U2VjdGlvbiA9IHNlY3Rpb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci50b3AgPiBwcmV2LnRvcCA/IGN1cnIgOiBwcmV2KTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKG1heFNlY3Rpb24uY29tcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtzLmZvckVhY2goaSA9PiBpLmFjdGl2ZSA9IGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aXZlKGNvbXA6IER3QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcblxuICAgIGNvbXAuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcblxuICAgIGNvbnN0IGxpbmtOb2RlID0gKGNvbXAuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1hbmNob3ItbGluay10aXRsZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XG5cbiAgICB0aGlzLmR3U2Nyb2xsLmVtaXQoY29tcCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGxUbyhsaW5rQ29tcDogRHdBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGxpbmtDb21wLmR3SHJlZik7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjb250YWluZXJTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSk7XG4gICAgY29uc3QgZWxPZmZzZXRUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRPZmZzZXQoZWwpLnRvcDtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLmR3T2Zmc2V0VG9wIHx8IDApO1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIHRhcmdldFNjcm9sbFRvcCwgbnVsbCwgKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKGxpbmtDb21wKTtcbiAgICB9KTtcbiAgICB0aGlzLmR3Q2xpY2suZW1pdChsaW5rQ29tcC5kd0hyZWYpO1xuICB9XG5cbn1cbiJdfQ==
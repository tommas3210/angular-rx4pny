/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DwScrollService } from '../core/scroll/dw-scroll.service';
import { shallowEqual } from '../core/util/check';
import { toNumber } from '../core/util/convert';
import { throttleByAnimationFrameDecorator } from '../core/util/throttleByAnimationFrame';
export class DwAffixComponent {
    /**
     * @param {?} scrollSrv
     * @param {?} _el
     * @param {?} cd
     */
    constructor(scrollSrv, _el, cd) {
        this.scrollSrv = scrollSrv;
        this._el = _el;
        this.cd = cd;
        this.events = [
            'resize',
            'scroll',
            'touchstart',
            'touchmove',
            'touchend',
            'pageshow',
            'load'
        ];
        this._target = window;
        this.dwChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTarget(value) {
        this.clearEventListeners();
        this._target = value || window;
        this.setTargetEventListeners();
        this.updatePosition({});
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwOffsetTop(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this._offsetTop = toNumber(value, null);
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
    set dwOffsetBottom(value) {
        if (typeof value === 'undefined') {
            return;
        }
        this._offsetBottom = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timeout = setTimeout(() => {
            this.setTargetEventListeners();
            this.updatePosition({});
        });
    }
    /**
     * @return {?}
     */
    setTargetEventListeners() {
        this.clearEventListeners();
        this.events.forEach((eventName) => {
            this._target.addEventListener(eventName, this.updatePosition, false);
        });
    }
    /**
     * @return {?}
     */
    clearEventListeners() {
        this.events.forEach(eventName => {
            this._target.removeEventListener(eventName, this.updatePosition, false);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        (/** @type {?} */ (this.updatePosition)).cancel();
    }
    /**
     * @param {?} target
     * @return {?}
     */
    getTargetRect(target) {
        return target !== window ?
            (/** @type {?} */ (target)).getBoundingClientRect() : /** @type {?} */ ({ top: 0, left: 0, bottom: 0 });
    }
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    getOffset(element, target) {
        /** @type {?} */
        const elemRect = element.getBoundingClientRect();
        /** @type {?} */
        const targetRect = this.getTargetRect(target);
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        const scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        const docElem = window.document.body;
        /** @type {?} */
        const clientTop = docElem.clientTop || 0;
        /** @type {?} */
        const clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    }
    /**
     * @param {?} affixStyle
     * @return {?}
     */
    genStyle(affixStyle) {
        if (affixStyle == null) {
            return '';
        }
        return Object.keys(affixStyle).map(key => {
            /** @type {?} */
            const val = affixStyle[key];
            return `${key}:${typeof val === 'string' ? val : val + 'px'}`;
        }).join(';');
    }
    /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    setAffixStyle(e, affixStyle) {
        /** @type {?} */
        const originalAffixStyle = this.affixStyle;
        /** @type {?} */
        const isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        const fixed = !!affixStyle;
        /** @type {?} */
        const wrapEl = /** @type {?} */ (this.wrap.nativeElement);
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        const cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.dwChange.emit(fixed);
        }
    }
    /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    setPlaceholderStyle(placeholderStyle) {
        /** @type {?} */
        const originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        (/** @type {?} */ (this._el.nativeElement)).style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    updatePosition(e) {
        /** @type {?} */
        const targetNode = this._target;
        /** @type {?} */
        let offsetTop = this.dwOffsetTop;
        /** @type {?} */
        const scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        const affixNode = /** @type {?} */ (this._el.nativeElement);
        /** @type {?} */
        const elemOffset = this.getOffset(affixNode, targetNode);
        /** @type {?} */
        const elemSize = {
            width: affixNode.offsetWidth,
            height: affixNode.offsetHeight
        };
        /** @type {?} */
        const offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this._offsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this._offsetBottom === 'number';
        }
        /** @type {?} */
        const targetRect = this.getTargetRect(targetNode);
        /** @type {?} */
        const targetInnerHeight = (/** @type {?} */ (targetNode)).innerHeight || (/** @type {?} */ (targetNode)).clientHeight;
        if (scrollTop > elemOffset.top - (/** @type {?} */ (offsetTop)) && offsetMode.top) {
            /** @type {?} */
            const width = elemOffset.width;
            /** @type {?} */
            const top = targetRect.top + (/** @type {?} */ (offsetTop));
            this.setAffixStyle(e, {
                position: 'fixed',
                top,
                left: targetRect.left + elemOffset.left,
                maxHeight: `calc(100vh - ${top}px)`,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemSize.height
            });
        }
        else if (scrollTop < elemOffset.top + elemSize.height + (/** @type {?} */ (this._offsetBottom)) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
            /** @type {?} */
            const width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + (/** @type {?} */ (this._offsetBottom)),
                left: targetRect.left + elemOffset.left,
                width
            });
            this.setPlaceholderStyle({
                width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, Object.assign({}, this.affixStyle, { width: affixNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }
    }
}
DwAffixComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-affix',
                template: "<div #wrap>\n  <ng-content></ng-content>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`:host {
      display: block;
    }`]
            }] }
];
/** @nocollapse */
DwAffixComponent.ctorParameters = () => [
    { type: DwScrollService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
DwAffixComponent.propDecorators = {
    wrap: [{ type: ViewChild, args: ['wrap',] }],
    dwTarget: [{ type: Input }],
    dwOffsetTop: [{ type: Input }],
    dwOffsetBottom: [{ type: Input }],
    dwChange: [{ type: Output }]
};
tslib_1.__decorate([
    throttleByAnimationFrameDecorator(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DwAffixComponent.prototype, "updatePosition", null);
function DwAffixComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAffixComponent.prototype.timeout;
    /** @type {?} */
    DwAffixComponent.prototype.events;
    /** @type {?} */
    DwAffixComponent.prototype.affixStyle;
    /** @type {?} */
    DwAffixComponent.prototype.placeholderStyle;
    /** @type {?} */
    DwAffixComponent.prototype.wrap;
    /** @type {?} */
    DwAffixComponent.prototype._target;
    /** @type {?} */
    DwAffixComponent.prototype._offsetTop;
    /** @type {?} */
    DwAffixComponent.prototype._offsetBottom;
    /** @type {?} */
    DwAffixComponent.prototype.dwChange;
    /** @type {?} */
    DwAffixComponent.prototype.scrollSrv;
    /** @type {?} */
    DwAffixComponent.prototype._el;
    /** @type {?} */
    DwAffixComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJhZmZpeC9kdy1hZmZpeC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQVkxRixNQUFNOzs7Ozs7SUFxREosWUFBb0IsU0FBMEIsRUFBVSxHQUFlLEVBQVUsRUFBcUI7UUFBbEYsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7c0JBbERyRjtZQUNmLFFBQVE7WUFDUixRQUFRO1lBQ1IsWUFBWTtZQUNaLFdBQVc7WUFDWCxVQUFVO1lBQ1YsVUFBVTtZQUNWLE1BQU07U0FDUDt1QkFNbUMsTUFBTTt3QkFrQ0UsSUFBSSxZQUFZLEVBQUU7S0FHN0Q7Ozs7O0lBbkNELElBQ0ksUUFBUSxDQUFDLEtBQXVCO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQztRQUMvQixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQUlELElBQ0ks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VSxJQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsV0FBVyxJQUFHLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7S0FDRjs7O1lBeE9GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQVMsVUFBVTtnQkFDM0IsNERBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFFN0M7O01BRUU7YUFFTDs7OztZQWRRLGVBQWU7WUFUdEIsVUFBVTtZQUZWLGlCQUFpQjs7O21CQXlDaEIsU0FBUyxTQUFDLE1BQU07dUJBSWhCLEtBQUs7MEJBVUwsS0FBSzs2QkFjTCxLQUFLO3VCQVFMLE1BQU07OztJQTBHTixpQ0FBaUMsRUFBRTs7OztzREFpRW5DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd1Njcm9sbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3Njcm9sbC9kdy1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IgfSBmcm9tICcuLi9jb3JlL3V0aWwvdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgIDogJ2R3LWFmZml4JyxcbiAgdGVtcGxhdGVVcmwgICAgOiAnLi9kdy1hZmZpeC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXMgICAgICAgICA6IFtcbiAgICBgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0FmZml4Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgdGltZW91dDogYW55O1xuICBwcml2YXRlIGV2ZW50cyA9IFtcbiAgICAncmVzaXplJyxcbiAgICAnc2Nyb2xsJyxcbiAgICAndG91Y2hzdGFydCcsXG4gICAgJ3RvdWNobW92ZScsXG4gICAgJ3RvdWNoZW5kJyxcbiAgICAncGFnZXNob3cnLFxuICAgICdsb2FkJ1xuICBdO1xuICBwcml2YXRlIGFmZml4U3R5bGU6IGFueTtcbiAgcHJpdmF0ZSBwbGFjZWhvbGRlclN0eWxlOiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgnd3JhcCcpIHByaXZhdGUgd3JhcDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIF90YXJnZXQ6IEVsZW1lbnQgfCBXaW5kb3cgPSB3aW5kb3c7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGFyZ2V0KHZhbHVlOiBFbGVtZW50IHwgV2luZG93KSB7XG4gICAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fdGFyZ2V0ID0gdmFsdWUgfHwgd2luZG93O1xuICAgIHRoaXMuc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHt9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd09mZnNldFRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgZ2V0IGR3T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldEJvdHRvbTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd09mZnNldEJvdHRvbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb2Zmc2V0Qm90dG9tID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgQE91dHB1dCgpIGR3Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzY3JvbGxTcnY6IER3U2Nyb2xsU2VydmljZSwgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUYXJnZXRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnVwZGF0ZVBvc2l0aW9uLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy5fdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnVwZGF0ZVBvc2l0aW9uLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAodGhpcy51cGRhdGVQb3NpdGlvbiBhcyBhbnkpLmNhbmNlbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUYXJnZXRSZWN0KHRhcmdldDogRWxlbWVudCB8IFdpbmRvdyB8IG51bGwpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGFyZ2V0ICE9PSB3aW5kb3cgP1xuICAgICAgKHRhcmdldCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOlxuICAgICAgeyB0b3A6IDAsIGxlZnQ6IDAsIGJvdHRvbTogMCB9IGFzIENsaWVudFJlY3Q7XG4gIH1cblxuICBnZXRPZmZzZXQoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCk6IHtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfSB7XG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0KTtcblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIHRydWUpO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XG5cbiAgICBjb25zdCBkb2NFbGVtID0gd2luZG93LmRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgY2xpZW50VG9wID0gZG9jRWxlbS5jbGllbnRUb3AgfHwgMDtcbiAgICBjb25zdCBjbGllbnRMZWZ0ID0gZG9jRWxlbS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wICAgOiBlbGVtUmVjdC50b3AgLSB0YXJnZXRSZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCxcbiAgICAgIGxlZnQgIDogZWxlbVJlY3QubGVmdCAtIHRhcmdldFJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0LFxuICAgICAgd2lkdGggOiBlbGVtUmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogZWxlbVJlY3QuaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3R5bGUoYWZmaXhTdHlsZToge30pOiBzdHJpbmcge1xuICAgIGlmIChhZmZpeFN0eWxlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFmZml4U3R5bGUpLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gYWZmaXhTdHlsZVsga2V5IF07XG4gICAgICByZXR1cm4gYCR7a2V5fToke3R5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdmFsICsgJ3B4J31gO1xuICAgIH0pLmpvaW4oJzsnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWZmaXhTdHlsZShlOiBhbnksIGFmZml4U3R5bGU6IHt9KTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxBZmZpeFN0eWxlID0gdGhpcy5hZmZpeFN0eWxlO1xuICAgIGNvbnN0IGlzV2luZG93ID0gdGhpcy5fdGFyZ2V0ID09PSB3aW5kb3c7XG4gICAgaWYgKGUudHlwZSA9PT0gJ3Njcm9sbCcgJiYgb3JpZ2luYWxBZmZpeFN0eWxlICYmIGFmZml4U3R5bGUgJiYgaXNXaW5kb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNoYWxsb3dFcXVhbChvcmlnaW5hbEFmZml4U3R5bGUsIGFmZml4U3R5bGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZml4ZWQgPSAhIWFmZml4U3R5bGU7XG4gICAgY29uc3Qgd3JhcEVsID0gdGhpcy53cmFwLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgd3JhcEVsLnN0eWxlLmNzc1RleHQgPSB0aGlzLmdlblN0eWxlKGFmZml4U3R5bGUpO1xuICAgIHRoaXMuYWZmaXhTdHlsZSA9IGFmZml4U3R5bGU7XG4gICAgY29uc3QgY2xzID0gJ2FudC1hZmZpeCc7XG4gICAgaWYgKGZpeGVkKSB7XG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwRWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgIH1cblxuICAgIGlmICgoYWZmaXhTdHlsZSAmJiAhb3JpZ2luYWxBZmZpeFN0eWxlKSB8fCAoIWFmZml4U3R5bGUgJiYgb3JpZ2luYWxBZmZpeFN0eWxlKSkge1xuICAgICAgdGhpcy5kd0NoYW5nZS5lbWl0KGZpeGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBsYWNlaG9sZGVyU3R5bGUocGxhY2Vob2xkZXJTdHlsZToge30pOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUgPSB0aGlzLnBsYWNlaG9sZGVyU3R5bGU7XG4gICAgaWYgKHNoYWxsb3dFcXVhbChwbGFjZWhvbGRlclN0eWxlLCBvcmlnaW5hbFBsYWNlaG9sZGVyU3R5bGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICh0aGlzLl9lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5jc3NUZXh0ID0gdGhpcy5nZW5TdHlsZShwbGFjZWhvbGRlclN0eWxlKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyU3R5bGUgPSBwbGFjZWhvbGRlclN0eWxlO1xuICB9XG5cbiAgQHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvcigpXG4gIHVwZGF0ZVBvc2l0aW9uKGU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLl90YXJnZXQ7XG4gICAgLy8gQmFja3dhcmRzIHN1cHBvcnRcbiAgICBsZXQgb2Zmc2V0VG9wID0gdGhpcy5kd09mZnNldFRvcDtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0Tm9kZSwgdHJ1ZSk7XG4gICAgY29uc3QgYWZmaXhOb2RlID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBlbGVtT2Zmc2V0ID0gdGhpcy5nZXRPZmZzZXQoYWZmaXhOb2RlLCB0YXJnZXROb2RlKTtcbiAgICBjb25zdCBlbGVtU2l6ZSA9IHtcbiAgICAgIHdpZHRoIDogYWZmaXhOb2RlLm9mZnNldFdpZHRoLFxuICAgICAgaGVpZ2h0OiBhZmZpeE5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgICBjb25zdCBvZmZzZXRNb2RlID0ge1xuICAgICAgdG9wICAgOiBmYWxzZSxcbiAgICAgIGJvdHRvbTogZmFsc2VcbiAgICB9O1xuICAgIC8vIERlZmF1bHQgdG8gYG9mZnNldFRvcD0wYC5cbiAgICBpZiAodHlwZW9mIG9mZnNldFRvcCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXMuX29mZnNldEJvdHRvbSAhPT0gJ251bWJlcicpIHtcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHJ1ZTtcbiAgICAgIG9mZnNldFRvcCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldE1vZGUudG9wID0gdHlwZW9mIG9mZnNldFRvcCA9PT0gJ251bWJlcic7XG4gICAgICBvZmZzZXRNb2RlLmJvdHRvbSA9IHR5cGVvZiB0aGlzLl9vZmZzZXRCb3R0b20gPT09ICdudW1iZXInO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5nZXRUYXJnZXRSZWN0KHRhcmdldE5vZGUpO1xuICAgIGNvbnN0IHRhcmdldElubmVySGVpZ2h0ID1cbiAgICAgICAgICAgICh0YXJnZXROb2RlIGFzIFdpbmRvdykuaW5uZXJIZWlnaHQgfHwgKHRhcmdldE5vZGUgYXMgSFRNTEVsZW1lbnQpLmNsaWVudEhlaWdodDtcbiAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbU9mZnNldC50b3AgLSAob2Zmc2V0VG9wIGFzIG51bWJlcikgJiYgb2Zmc2V0TW9kZS50b3ApIHtcbiAgICAgIGNvbnN0IHdpZHRoID0gZWxlbU9mZnNldC53aWR0aDtcbiAgICAgIGNvbnN0IHRvcCA9IHRhcmdldFJlY3QudG9wICsgKG9mZnNldFRvcCBhcyBudW1iZXIpO1xuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgcG9zaXRpb24gOiAnZml4ZWQnLFxuICAgICAgICB0b3AsXG4gICAgICAgIGxlZnQgICAgIDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxuICAgICAgICBtYXhIZWlnaHQ6IGBjYWxjKDEwMHZoIC0gJHt0b3B9cHgpYCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbVNpemUuaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgc2Nyb2xsVG9wIDwgZWxlbU9mZnNldC50b3AgKyBlbGVtU2l6ZS5oZWlnaHQgKyAodGhpcy5fb2Zmc2V0Qm90dG9tIGFzIG51bWJlcikgLSB0YXJnZXRJbm5lckhlaWdodCAmJlxuICAgICAgb2Zmc2V0TW9kZS5ib3R0b21cbiAgICApIHtcbiAgICAgIGNvbnN0IHRhcmdldEJvdHRvbU9mZmV0ID0gdGFyZ2V0Tm9kZSA9PT0gd2luZG93ID8gMCA6ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YXJnZXRSZWN0LmJvdHRvbSk7XG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XG4gICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgYm90dG9tICA6IHRhcmdldEJvdHRvbU9mZmV0ICsgKHRoaXMuX29mZnNldEJvdHRvbSBhcyBudW1iZXIpLFxuICAgICAgICBsZWZ0ICAgIDogdGFyZ2V0UmVjdC5sZWZ0ICsgZWxlbU9mZnNldC5sZWZ0LFxuICAgICAgICB3aWR0aFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUoe1xuICAgICAgICB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBlbGVtT2Zmc2V0LmhlaWdodFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChlLnR5cGUgPT09ICdyZXNpemUnICYmIHRoaXMuYWZmaXhTdHlsZSAmJiB0aGlzLmFmZml4U3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcgJiYgYWZmaXhOb2RlLm9mZnNldFdpZHRoKSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7IC4uLnRoaXMuYWZmaXhTdHlsZSwgd2lkdGg6IGFmZml4Tm9kZS5vZmZzZXRXaWR0aCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCBudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZShudWxsKTtcbiAgICB9XG4gIH1cblxufVxuIl19
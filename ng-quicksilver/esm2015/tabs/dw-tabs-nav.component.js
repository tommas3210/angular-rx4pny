/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directionality } from '@angular/cdk/bidi';
import { Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Optional, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { auditTime, startWith } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { DwTabLabelDirective } from './dw-tab-label.directive';
import { DwTabsInkBarDirective } from './dw-tabs-ink-bar.directive';
/** @type {?} */
const EXAGGERATED_OVERSCROLL = 64;
export class DwTabsNavComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} dir
     */
    constructor(elementRef, ngZone, renderer, dir) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.dir = dir;
        this._animated = true;
        this._hideBar = false;
        this._showPagination = true;
        this._type = 'line';
        this._tabPositionMode = 'horizontal';
        this._scrollDistance = 0;
        this._selectedIndex = 0;
        this.showPaginationControls = false;
        this.disableScrollAfter = true;
        this.disableScrollBefore = true;
        this.selectedIndexChanged = false;
        this.realignInkBar = null;
        this.dwOnNextClick = new EventEmitter();
        this.dwOnPrevClick = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAnimated(value) {
        this._animated = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAnimated() {
        return this._animated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwHideBar(value) {
        this._hideBar = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwHideBar() {
        return this._hideBar;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwType(value) {
        this._type = value;
        if (this._type !== 'line') {
            this.dwTabsInkBarDirective.setDisplay('none');
        }
        else {
            this.dwTabsInkBarDirective.setDisplay('block');
        }
    }
    /**
     * @return {?}
     */
    get dwType() {
        return this._type;
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
    set dwPositionMode(value) {
        this._tabPositionMode = value;
        this.alignInkBarToSelectedTab();
        if (this.dwShowPagination) {
            this.updatePagination();
        }
    }
    /**
     * @return {?}
     */
    get dwPositionMode() {
        return this._tabPositionMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        this.selectedIndexChanged = this._selectedIndex !== value;
        this._selectedIndex = value;
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    onContentChanges() {
        if (this.dwShowPagination) {
            this.updatePagination();
        }
        this.alignInkBarToSelectedTab();
    }
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    scrollHeader(scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.dwOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.dwOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix / 3;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.tabLabelCount !== this.listOfDwTabLabelDirective.length) {
            if (this.dwShowPagination) {
                this.updatePagination();
            }
            this.tabLabelCount = this.listOfDwTabLabelDirective.length;
        }
        if (this.selectedIndexChanged) {
            this.scrollToLabel(this._selectedIndex);
            if (this.dwShowPagination) {
                this.checkScrollingControls();
            }
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
        }
        if (this.scrollDistanceChanged) {
            if (this.dwShowPagination) {
                this.updateTabScrollPosition();
            }
            this.scrollDistanceChanged = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.realignInkBar = this.ngZone.runOutsideAngular(() => {
            /** @type {?} */
            const dirChange = this.dir ? this.dir.change : observableOf(null);
            /** @type {?} */
            const resize = typeof window !== 'undefined' ?
                fromEvent(window, 'resize').pipe(auditTime(10)) :
                observableOf(null);
            return merge(dirChange, resize).pipe(startWith(null)).subscribe(() => {
                if (this.dwShowPagination) {
                    this.updatePagination();
                }
                this.alignInkBarToSelectedTab();
            });
        });
    }
    /**
     * @return {?}
     */
    updateTabScrollPosition() {
        /** @type {?} */
        const scrollDistance = this.scrollDistance;
        if (this.dwPositionMode === 'horizontal') {
            /** @type {?} */
            const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(${translateX}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', `translate3d(0,${-scrollDistance}px, 0)`);
        }
    }
    /**
     * @return {?}
     */
    updatePagination() {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    }
    /**
     * @return {?}
     */
    checkPaginationEnabled() {
        this.showPaginationControls =
            this.tabListScrollWidthHeightPix > this.elementRefOffSetWidthHeight;
        if (!this.showPaginationControls) {
            this.scrollDistance = 0;
        }
    }
    /**
     * @param {?} labelIndex
     * @return {?}
     */
    scrollToLabel(labelIndex) {
        /** @type {?} */
        const selectedLabel = this.listOfDwTabLabelDirective
            ? this.listOfDwTabLabelDirective.toArray()[labelIndex]
            : null;
        if (selectedLabel) {
            /** @type {?} */
            let labelBeforePos;
            /** @type {?} */
            let labelAfterPos;
            if (this.dwPositionMode === 'horizontal') {
                if (this.getLayoutDirection() === 'ltr') {
                    labelBeforePos = selectedLabel.getOffsetLeft();
                    labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
                }
                else {
                    labelAfterPos = this.navListElement.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
                    labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
                }
            }
            else {
                labelBeforePos = selectedLabel.getOffsetTop();
                labelAfterPos = labelBeforePos + selectedLabel.getOffsetHeight();
            }
            /** @type {?} */
            const beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
            const afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    }
    /**
     * @return {?}
     */
    checkScrollingControls() {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
    }
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    getMaxScrollDistance() {
        return (this.tabListScrollWidthHeightPix - this.viewWidthHeightPix) || 0;
    }
    /**
     * Sets the distance in pixels that the tab header should be transformed in the X-axis.
     * @param {?} v
     * @return {?}
     */
    set scrollDistance(v) {
        this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
        // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.
        this.scrollDistanceChanged = true;
        this.checkScrollingControls();
    }
    /**
     * @return {?}
     */
    get scrollDistance() {
        return this._scrollDistance;
    }
    /**
     * @return {?}
     */
    get viewWidthHeightPix() {
        /** @type {?} */
        let PAGINATION_PIX = 0;
        if (this.showPaginationControls) {
            PAGINATION_PIX = 64;
        }
        if (this.dwPositionMode === 'horizontal') {
            return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
        }
        else {
            return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
        }
    }
    /**
     * @return {?}
     */
    get tabListScrollWidthHeightPix() {
        if (this.dwPositionMode === 'horizontal') {
            return this.navListElement.nativeElement.scrollWidth;
        }
        else {
            return this.navListElement.nativeElement.scrollHeight;
        }
    }
    /**
     * @return {?}
     */
    get elementRefOffSetWidthHeight() {
        if (this.dwPositionMode === 'horizontal') {
            return this.elementRef.nativeElement.offsetWidth;
        }
        else {
            return this.elementRef.nativeElement.offsetHeight;
        }
    }
    /**
     * @return {?}
     */
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /**
     * @return {?}
     */
    alignInkBarToSelectedTab() {
        if (this.dwType === 'line') {
            /** @type {?} */
            const selectedLabelWrapper = this.listOfDwTabLabelDirective && this.listOfDwTabLabelDirective.length
                ? this.listOfDwTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.dwTabsInkBarDirective) {
                this.dwTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    }
}
DwTabsNavComponent.decorators = [
    { type: Component, args: [{
                selector: '[dw-tabs-nav]',
                preserveWhitespaces: false,
                template: "<div style=\"float:right;\" *ngIf=\"dwTabBarExtraContent\" class=\"ant-tabs-extra-content\">\n  <ng-template [ngTemplateOutlet]=\"dwTabBarExtraContent\"></ng-template>\n</div>\n<div class=\"ant-tabs-nav-container\" [class.ant-tabs-nav-container-scrolling]=\"showPaginationControls\" #navContainerElement>\n  <span class=\"ant-tabs-tab-prev\" (click)=\"scrollHeader('before')\" [class.ant-tabs-tab-btn-disabled]=\"disableScrollBefore\" [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\n    <span class=\"ant-tabs-tab-prev-icon\"></span>\n  </span>\n  <span class=\"ant-tabs-tab-next\" (click)=\"scrollHeader('after')\" [class.ant-tabs-tab-btn-disabled]=\"disableScrollAfter\" [class.ant-tabs-tab-arrow-show]=\"showPaginationControls\">\n    <span class=\"ant-tabs-tab-next-icon\"></span>\n  </span>\n  <div class=\"ant-tabs-nav-wrap\">\n    <div class=\"ant-tabs-nav-scroll\">\n      <div\n        class=\"ant-tabs-nav\"\n        [class.ant-tabs-nav-animated]=\"dwAnimated\"\n        #navListElement\n        (cdkObserveContent)=\"onContentChanges()\">\n        <div dw-tabs-ink-bar [hidden]=\"dwHideBar\" [dwAnimated]=\"dwAnimated\" [dwPositionMode]=\"dwPositionMode\" style=\"display: block;\"></div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>",
                host: {
                    '[class.ant-tabs-bar]': 'true'
                }
            }] }
];
/** @nocollapse */
DwTabsNavComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 },
    { type: Directionality, decorators: [{ type: Optional }] }
];
DwTabsNavComponent.propDecorators = {
    listOfDwTabLabelDirective: [{ type: ContentChildren, args: [DwTabLabelDirective,] }],
    dwTabsInkBarDirective: [{ type: ViewChild, args: [DwTabsInkBarDirective,] }],
    navContainerElement: [{ type: ViewChild, args: ['navContainerElement',] }],
    navListElement: [{ type: ViewChild, args: ['navListElement',] }],
    dwOnNextClick: [{ type: Output }],
    dwOnPrevClick: [{ type: Output }],
    dwTabBarExtraContent: [{ type: Input }],
    dwAnimated: [{ type: Input }],
    dwHideBar: [{ type: Input }],
    dwType: [{ type: Input }],
    dwShowPagination: [{ type: Input }],
    dwPositionMode: [{ type: Input }],
    selectedIndex: [{ type: Input }]
};
function DwTabsNavComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTabsNavComponent.prototype._animated;
    /** @type {?} */
    DwTabsNavComponent.prototype._hideBar;
    /** @type {?} */
    DwTabsNavComponent.prototype._showPagination;
    /** @type {?} */
    DwTabsNavComponent.prototype._type;
    /** @type {?} */
    DwTabsNavComponent.prototype._tabPositionMode;
    /** @type {?} */
    DwTabsNavComponent.prototype._scrollDistance;
    /** @type {?} */
    DwTabsNavComponent.prototype._selectedIndex;
    /** @type {?} */
    DwTabsNavComponent.prototype.showPaginationControls;
    /** @type {?} */
    DwTabsNavComponent.prototype.disableScrollAfter;
    /** @type {?} */
    DwTabsNavComponent.prototype.disableScrollBefore;
    /** @type {?} */
    DwTabsNavComponent.prototype.selectedIndexChanged;
    /** @type {?} */
    DwTabsNavComponent.prototype.realignInkBar;
    /** @type {?} */
    DwTabsNavComponent.prototype.tabLabelCount;
    /** @type {?} */
    DwTabsNavComponent.prototype.scrollDistanceChanged;
    /** @type {?} */
    DwTabsNavComponent.prototype.listOfDwTabLabelDirective;
    /** @type {?} */
    DwTabsNavComponent.prototype.dwTabsInkBarDirective;
    /** @type {?} */
    DwTabsNavComponent.prototype.navContainerElement;
    /** @type {?} */
    DwTabsNavComponent.prototype.navListElement;
    /** @type {?} */
    DwTabsNavComponent.prototype.dwOnNextClick;
    /** @type {?} */
    DwTabsNavComponent.prototype.dwOnPrevClick;
    /** @type {?} */
    DwTabsNavComponent.prototype.dwTabBarExtraContent;
    /** @type {?} */
    DwTabsNavComponent.prototype.elementRef;
    /** @type {?} */
    DwTabsNavComponent.prototype.ngZone;
    /** @type {?} */
    DwTabsNavComponent.prototype.renderer;
    /** @type {?} */
    DwTabsNavComponent.prototype.dir;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJzL2R3LXRhYnMtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFHTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFcEUsTUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7QUFhbEMsTUFBTTs7Ozs7OztJQXdGSixZQUFtQixVQUFzQixFQUNyQixRQUNBLFVBQ1ksR0FBbUI7UUFIaEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNyQixXQUFNLEdBQU4sTUFBTTtRQUNOLGFBQVEsR0FBUixRQUFRO1FBQ0ksUUFBRyxHQUFILEdBQUcsQ0FBZ0I7eUJBMUYvQixJQUFJO3dCQUNMLEtBQUs7K0JBQ0UsSUFBSTtxQkFDZCxNQUFNO2dDQUN3QixZQUFZOytCQUNoQyxDQUFDOzhCQUNGLENBQUM7c0NBQ0QsS0FBSztrQ0FDVCxJQUFJO21DQUNILElB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LENBQUMsQ0FBQzthQUNqRTtTQUNGO0tBQ0Y7OztZQW5TRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGVBQWU7Z0JBQ3BDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHV4Q0FBbUQ7Z0JBQ25ELElBQUksRUFBaUI7b0JBQ25CLHNCQUFzQixFQUFFLE1BQU07aUJBQy9CO2FBQ0Y7Ozs7WUEvQkMsVUFBVTtZQUdWLE1BQU07WUFJTixTQUFTO1lBYlMsY0FBYyx1QkFpSW5CLFFBQVE7Ozt3Q0E1RXBCLGVBQWUsU0FBQyxtQkFBbUI7b0NBQ25DLFNBQVMsU0FBQyxxQkFBcUI7a0NBQy9CLFNBQVMsU0FBQyxxQkFBcUI7NkJBQy9CLFNBQVMsU0FBQyxnQkFBZ0I7NEJBQzFCLE1BQU07NEJBQ04sTUFBTTttQ0FDTixLQUFLO3lCQUVMLEtBQUs7d0JBU0wsS0FBSztxQkFTTCxLQUFLOytCQWNMLEtBQUs7NkJBU0wsS0FBSzs0QkFhTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIgKi9cbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBhdWRpdFRpbWUsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd1RhYkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9kdy10YWItbGFiZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IER3VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vZHctdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IEVYQUdHRVJBVEVEX09WRVJTQ1JPTEwgPSA2NDtcbmV4cG9ydCB0eXBlIFNjcm9sbERpcmVjdGlvbiA9ICdhZnRlcicgfCAnYmVmb3JlJztcblxuaW1wb3J0IHsgRHdUYWJQb3NpdGlvbk1vZGUgfSBmcm9tICcuL2R3LXRhYnNldC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tkdy10YWJzLW5hdl0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGFicy1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFicy1iYXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdUYWJzTmF2Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2FuaW1hdGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaGlkZUJhciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX3R5cGUgPSAnbGluZSc7XG4gIHByaXZhdGUgX3RhYlBvc2l0aW9uTW9kZTogRHdUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIHByaXZhdGUgX3Njcm9sbERpc3RhbmNlID0gMDtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleCA9IDA7XG4gIHNob3dQYWdpbmF0aW9uQ29udHJvbHMgPSBmYWxzZTtcbiAgZGlzYWJsZVNjcm9sbEFmdGVyID0gdHJ1ZTtcbiAgZGlzYWJsZVNjcm9sbEJlZm9yZSA9IHRydWU7XG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2VkID0gZmFsc2U7XG4gIHJlYWxpZ25JbmtCYXI6IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuICB0YWJMYWJlbENvdW50OiBudW1iZXI7XG4gIHNjcm9sbERpc3RhbmNlQ2hhbmdlZDogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZHJlbihEd1RhYkxhYmVsRGlyZWN0aXZlKSBsaXN0T2ZEd1RhYkxhYmVsRGlyZWN0aXZlOiBRdWVyeUxpc3Q8RHdUYWJMYWJlbERpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoRHdUYWJzSW5rQmFyRGlyZWN0aXZlKSBkd1RhYnNJbmtCYXJEaXJlY3RpdmU6IER3VGFic0lua0JhckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnbmF2Q29udGFpbmVyRWxlbWVudCcpIG5hdkNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25hdkxpc3RFbGVtZW50JykgbmF2TGlzdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBPdXRwdXQoKSBkd09uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdPblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQElucHV0KCkgZHdUYWJCYXJFeHRyYUNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3QW5pbWF0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FuaW1hdGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SGlkZUJhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVCYXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3SGlkZUJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZUJhcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fdHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICB0aGlzLmR3VGFic0lua0JhckRpcmVjdGl2ZS5zZXREaXNwbGF5KCdub25lJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHdUYWJzSW5rQmFyRGlyZWN0aXZlLnNldERpc3BsYXkoJ2Jsb2NrJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd1BhZ2luYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93UGFnaW5hdGlvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93UGFnaW5hdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1BhZ2luYXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdQb3NpdGlvbk1vZGUodmFsdWU6IER3VGFiUG9zaXRpb25Nb2RlKSB7XG4gICAgdGhpcy5fdGFiUG9zaXRpb25Nb2RlID0gdmFsdWU7XG4gICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICBpZiAodGhpcy5kd1Nob3dQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdQb3NpdGlvbk1vZGUoKTogRHdUYWJQb3NpdGlvbk1vZGUge1xuICAgIHJldHVybiB0aGlzLl90YWJQb3NpdGlvbk1vZGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCA9IHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IHZhbHVlO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyOiBEaXJlY3Rpb25hbGl0eSkge1xuICB9XG5cbiAgb25Db250ZW50Q2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd1Nob3dQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgfVxuXG4gIHNjcm9sbEhlYWRlcihzY3JvbGxEaXI6IFNjcm9sbERpcmVjdGlvbik6IHZvaWQge1xuICAgIGlmIChzY3JvbGxEaXIgPT09ICdiZWZvcmUnICYmICF0aGlzLmRpc2FibGVTY3JvbGxCZWZvcmUpIHtcbiAgICAgIHRoaXMuZHdPblByZXZDbGljay5lbWl0KCk7XG4gICAgfSBlbHNlIGlmIChzY3JvbGxEaXIgPT09ICdhZnRlcicgJiYgIXRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyKSB7XG4gICAgICB0aGlzLmR3T25OZXh0Q2xpY2suZW1pdCgpO1xuICAgIH1cbiAgICAvLyBNb3ZlIHRoZSBzY3JvbGwgZGlzdGFuY2Ugb25lLXRoaXJkIHRoZSBsZW5ndGggb2YgdGhlIHRhYiBsaXN0J3Mgdmlld3BvcnQuXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZSArPSAoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyA/IC0xIDogMSkgKiB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeCAvIDM7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cbiAgICBpZiAodGhpcy50YWJMYWJlbENvdW50ICE9PSB0aGlzLmxpc3RPZkR3VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5kd1Nob3dQYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy50YWJMYWJlbENvdW50ID0gdGhpcy5saXN0T2ZEd1RhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9MYWJlbCh0aGlzLl9zZWxlY3RlZEluZGV4KTtcbiAgICAgIGlmICh0aGlzLmR3U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQpIHtcbiAgICAgIGlmICh0aGlzLmR3U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgdGhpcy51cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWFsaWduSW5rQmFyID0gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgY29uc3QgZGlyQ2hhbmdlID0gdGhpcy5kaXIgPyB0aGlzLmRpci5jaGFuZ2UgOiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICBjb25zdCByZXNpemUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKGF1ZGl0VGltZSgxMCkpIDpcbiAgICAgICAgb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgICAgcmV0dXJuIG1lcmdlKGRpckNoYW5nZSwgcmVzaXplKS5waXBlKHN0YXJ0V2l0aChudWxsKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZHdTaG93UGFnaW5hdGlvbikge1xuICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gdGhpcy5zY3JvbGxEaXN0YW5jZTtcbiAgICBpZiAodGhpcy5kd1Bvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVYID0gdGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicgPyAtc2Nyb2xsRGlzdGFuY2UgOiBzY3JvbGxEaXN0YW5jZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7dHJhbnNsYXRlWH1weCwgMCwgMClgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwkey1zY3JvbGxEaXN0YW5jZX1weCwgMClgKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdpbmF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tQYWdpbmF0aW9uRW5hYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICAgIHRoaXMudXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIGNoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzID1cbiAgICAgIHRoaXMudGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4ID4gdGhpcy5lbGVtZW50UmVmT2ZmU2V0V2lkdGhIZWlnaHQ7XG5cbiAgICBpZiAoIXRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scykge1xuICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG9MYWJlbChsYWJlbEluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZExhYmVsID0gdGhpcy5saXN0T2ZEd1RhYkxhYmVsRGlyZWN0aXZlXG4gICAgICA/IHRoaXMubGlzdE9mRHdUYWJMYWJlbERpcmVjdGl2ZS50b0FycmF5KClbIGxhYmVsSW5kZXggXVxuICAgICAgOiBudWxsO1xuXG4gICAgaWYgKHNlbGVjdGVkTGFiZWwpIHtcbiAgICAgIC8vIFRoZSB2aWV3IGxlbmd0aCBpcyB0aGUgdmlzaWJsZSB3aWR0aCBvZiB0aGUgdGFiIGxhYmVscy5cblxuICAgICAgbGV0IGxhYmVsQmVmb3JlUG9zOiBudW1iZXI7XG4gICAgICBsZXQgbGFiZWxBZnRlclBvczogbnVtYmVyO1xuICAgICAgaWYgKHRoaXMuZHdQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZiAodGhpcy5nZXRMYXlvdXREaXJlY3Rpb24oKSA9PT0gJ2x0cicpIHtcbiAgICAgICAgICBsYWJlbEJlZm9yZVBvcyA9IHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0TGVmdCgpO1xuICAgICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbEFmdGVyUG9zID0gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRMZWZ0KCk7XG4gICAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBsYWJlbEFmdGVyUG9zIC0gc2VsZWN0ZWRMYWJlbC5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbEJlZm9yZVBvcyA9IHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0VG9wKCk7XG4gICAgICAgIGxhYmVsQWZ0ZXJQb3MgPSBsYWJlbEJlZm9yZVBvcyArIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0SGVpZ2h0KCk7XG4gICAgICB9XG4gICAgICBjb25zdCBiZWZvcmVWaXNpYmxlUG9zID0gdGhpcy5zY3JvbGxEaXN0YW5jZTtcbiAgICAgIGNvbnN0IGFmdGVyVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgKyB0aGlzLnZpZXdXaWR0aEhlaWdodFBpeDtcblxuICAgICAgaWYgKGxhYmVsQmVmb3JlUG9zIDwgYmVmb3JlVmlzaWJsZVBvcykge1xuICAgICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGJlZm9yZSBkaXJlY3Rpb25cbiAgICAgICAgdGhpcy5zY3JvbGxEaXN0YW5jZSAtPSBiZWZvcmVWaXNpYmxlUG9zIC0gbGFiZWxCZWZvcmVQb3MgKyBFWEFHR0VSQVRFRF9PVkVSU0NST0xMO1xuICAgICAgfSBlbHNlIGlmIChsYWJlbEFmdGVyUG9zID4gYWZ0ZXJWaXNpYmxlUG9zKSB7XG4gICAgICAgIC8vIFNjcm9sbCBoZWFkZXIgdG8gbW92ZSBsYWJlbCB0byB0aGUgYWZ0ZXIgZGlyZWN0aW9uXG4gICAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgKz0gbGFiZWxBZnRlclBvcyAtIGFmdGVyVmlzaWJsZVBvcyArIEVYQUdHRVJBVEVEX09WRVJTQ1JPTEw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tTY3JvbGxpbmdDb250cm9scygpOiB2b2lkIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcGFnaW5hdGlvbiBhcnJvd3Mgc2hvdWxkIGJlIGFjdGl2YXRlZC5cbiAgICB0aGlzLmRpc2FibGVTY3JvbGxCZWZvcmUgPSB0aGlzLnNjcm9sbERpc3RhbmNlID09PSAwO1xuICAgIHRoaXMuZGlzYWJsZVNjcm9sbEFmdGVyID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gdGhpcy5nZXRNYXhTY3JvbGxEaXN0YW5jZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hhdCBpcyB0aGUgbWF4aW11bSBsZW5ndGggaW4gcGl4ZWxzIHRoYXQgY2FuIGJlIHNldCBmb3IgdGhlIHNjcm9sbCBkaXN0YW5jZS4gVGhpc1xuICAgKiBpcyBlcXVhbCB0byB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRoZSB0YWIgbGlzdCBjb250YWluZXIgYW5kIHRhYiBoZWFkZXIgY29udGFpbmVyLlxuICAgKlxuICAgKiBUaGlzIGlzIGFuIGV4cGVuc2l2ZSBjYWxsIHRoYXQgZm9yY2VzIGEgbGF5b3V0IHJlZmxvdyB0byBjb21wdXRlIGJveCBhbmQgc2Nyb2xsIG1ldHJpY3MgYW5kXG4gICAqIHNob3VsZCBiZSBjYWxsZWQgc3BhcmluZ2x5LlxuICAgKi9cbiAgZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMudGFiTGlzdFNjcm9sbFdpZHRoSGVpZ2h0UGl4IC0gdGhpcy52aWV3V2lkdGhIZWlnaHRQaXgpIHx8IDA7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZGlzdGFuY2UgaW4gcGl4ZWxzIHRoYXQgdGhlIHRhYiBoZWFkZXIgc2hvdWxkIGJlIHRyYW5zZm9ybWVkIGluIHRoZSBYLWF4aXMuICovXG4gIHNldCBzY3JvbGxEaXN0YW5jZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zY3JvbGxEaXN0YW5jZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKSwgdikpO1xuXG4gICAgLy8gTWFyayB0aGF0IHRoZSBzY3JvbGwgZGlzdGFuY2UgaGFzIGNoYW5nZWQgc28gdGhhdCBhZnRlciB0aGUgdmlldyBpcyBjaGVja2VkLCB0aGUgQ1NTXG4gICAgLy8gdHJhbnNmb3JtYXRpb24gY2FuIG1vdmUgdGhlIGhlYWRlci5cbiAgICB0aGlzLnNjcm9sbERpc3RhbmNlQ2hhbmdlZCA9IHRydWU7XG5cbiAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgfVxuXG4gIGdldCBzY3JvbGxEaXN0YW5jZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxEaXN0YW5jZTtcbiAgfVxuXG4gIGdldCB2aWV3V2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcbiAgICBsZXQgUEFHSU5BVElPTl9QSVggPSAwO1xuICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIFBBR0lOQVRJT05fUElYID0gNjQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmR3UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdkNvbnRhaW5lckVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIFBBR0lOQVRJT05fUElYO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gUEFHSU5BVElPTl9QSVg7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmR3UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm5hdkxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGdldCBlbGVtZW50UmVmT2ZmU2V0V2lkdGhIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5kd1Bvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0TGF5b3V0RGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlyICYmIHRoaXMuZGlyLnZhbHVlID09PSAncnRsJyA/ICdydGwnIDogJ2x0cic7XG4gIH1cblxuICBhbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdUeXBlID09PSAnbGluZScpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxXcmFwcGVyID0gdGhpcy5saXN0T2ZEd1RhYkxhYmVsRGlyZWN0aXZlICYmIHRoaXMubGlzdE9mRHdUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLmxpc3RPZkR3VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpWyB0aGlzLnNlbGVjdGVkSW5kZXggXS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgOiBudWxsO1xuICAgICAgaWYgKHRoaXMuZHdUYWJzSW5rQmFyRGlyZWN0aXZlKSB7XG4gICAgICAgIHRoaXMuZHdUYWJzSW5rQmFyRGlyZWN0aXZlLmFsaWduVG9FbGVtZW50KHNlbGVjdGVkTGFiZWxXcmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
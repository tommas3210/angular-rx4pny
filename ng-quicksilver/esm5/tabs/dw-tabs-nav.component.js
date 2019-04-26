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
var EXAGGERATED_OVERSCROLL = 64;
var DwTabsNavComponent = /** @class */ (function () {
    function DwTabsNavComponent(elementRef, ngZone, renderer, dir) {
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
    Object.defineProperty(DwTabsNavComponent.prototype, "dwAnimated", {
        get: /**
         * @return {?}
         */
        function () {
            return this._animated;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animated = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabsNavComponent.prototype, "dwHideBar", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideBar;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideBar = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabsNavComponent.prototype, "dwType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            if (this._type !== 'line') {
                this.dwTabsInkBarDirective.setDisplay('none');
            }
            else {
                this.dwTabsInkBarDirective.setDisplay('block');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabsNavComponent.prototype, "dwShowPagination", {
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
    Object.defineProperty(DwTabsNavComponent.prototype, "dwPositionMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tabPositionMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tabPositionMode = value;
            this.alignInkBarToSelectedTab();
            if (this.dwShowPagination) {
                this.updatePagination();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabsNavComponent.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.selectedIndexChanged = this._selectedIndex !== value;
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.onContentChanges = /**
     * @return {?}
     */
    function () {
        if (this.dwShowPagination) {
            this.updatePagination();
        }
        this.alignInkBarToSelectedTab();
    };
    /**
     * @param {?} scrollDir
     * @return {?}
     */
    DwTabsNavComponent.prototype.scrollHeader = /**
     * @param {?} scrollDir
     * @return {?}
     */
    function (scrollDir) {
        if (scrollDir === 'before' && !this.disableScrollBefore) {
            this.dwOnPrevClick.emit();
        }
        else if (scrollDir === 'after' && !this.disableScrollAfter) {
            this.dwOnNextClick.emit();
        }
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this.viewWidthHeightPix / 3;
    };
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.realignInkBar = this.ngZone.runOutsideAngular(function () {
            /** @type {?} */
            var dirChange = _this.dir ? _this.dir.change : observableOf(null);
            /** @type {?} */
            var resize = typeof window !== 'undefined' ?
                fromEvent(window, 'resize').pipe(auditTime(10)) :
                observableOf(null);
            return merge(dirChange, resize).pipe(startWith(null)).subscribe(function () {
                if (_this.dwShowPagination) {
                    _this.updatePagination();
                }
                _this.alignInkBarToSelectedTab();
            });
        });
    };
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.updateTabScrollPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDistance = this.scrollDistance;
        if (this.dwPositionMode === 'horizontal') {
            /** @type {?} */
            var translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance;
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(" + translateX + "px, 0, 0)");
        }
        else {
            this.renderer.setStyle(this.navListElement.nativeElement, 'transform', "translate3d(0," + -scrollDistance + "px, 0)");
        }
    };
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.updatePagination = /**
     * @return {?}
     */
    function () {
        this.checkPaginationEnabled();
        this.checkScrollingControls();
        this.updateTabScrollPosition();
    };
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.checkPaginationEnabled = /**
     * @return {?}
     */
    function () {
        this.showPaginationControls =
            this.tabListScrollWidthHeightPix > this.elementRefOffSetWidthHeight;
        if (!this.showPaginationControls) {
            this.scrollDistance = 0;
        }
    };
    /**
     * @param {?} labelIndex
     * @return {?}
     */
    DwTabsNavComponent.prototype.scrollToLabel = /**
     * @param {?} labelIndex
     * @return {?}
     */
    function (labelIndex) {
        /** @type {?} */
        var selectedLabel = this.listOfDwTabLabelDirective
            ? this.listOfDwTabLabelDirective.toArray()[labelIndex]
            : null;
        if (selectedLabel) {
            /** @type {?} */
            var labelBeforePos = void 0;
            /** @type {?} */
            var labelAfterPos = void 0;
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
            var beforeVisiblePos = this.scrollDistance;
            /** @type {?} */
            var afterVisiblePos = this.scrollDistance + this.viewWidthHeightPix;
            if (labelBeforePos < beforeVisiblePos) {
                // Scroll header to move label to the before direction
                this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
            }
            else if (labelAfterPos > afterVisiblePos) {
                // Scroll header to move label to the after direction
                this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
            }
        }
    };
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.checkScrollingControls = /**
     * @return {?}
     */
    function () {
        // Check if the pagination arrows should be activated.
        this.disableScrollBefore = this.scrollDistance === 0;
        this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    DwTabsNavComponent.prototype.getMaxScrollDistance = /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     * @return {?}
     */
    function () {
        return (this.tabListScrollWidthHeightPix - this.viewWidthHeightPix) || 0;
    };
    Object.defineProperty(DwTabsNavComponent.prototype, "scrollDistance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._scrollDistance;
        },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: /**
         * Sets the distance in pixels that the tab header should be transformed in the X-axis.
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this.scrollDistanceChanged = true;
            this.checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabsNavComponent.prototype, "viewWidthHeightPix", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var PAGINATION_PIX = 0;
            if (this.showPaginationControls) {
                PAGINATION_PIX = 64;
            }
            if (this.dwPositionMode === 'horizontal') {
                return this.navContainerElement.nativeElement.offsetWidth - PAGINATION_PIX;
            }
            else {
                return this.navContainerElement.nativeElement.offsetHeight - PAGINATION_PIX;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabsNavComponent.prototype, "tabListScrollWidthHeightPix", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwPositionMode === 'horizontal') {
                return this.navListElement.nativeElement.scrollWidth;
            }
            else {
                return this.navListElement.nativeElement.scrollHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabsNavComponent.prototype, "elementRefOffSetWidthHeight", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwPositionMode === 'horizontal') {
                return this.elementRef.nativeElement.offsetWidth;
            }
            else {
                return this.elementRef.nativeElement.offsetHeight;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.getLayoutDirection = /**
     * @return {?}
     */
    function () {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /**
     * @return {?}
     */
    DwTabsNavComponent.prototype.alignInkBarToSelectedTab = /**
     * @return {?}
     */
    function () {
        if (this.dwType === 'line') {
            /** @type {?} */
            var selectedLabelWrapper = this.listOfDwTabLabelDirective && this.listOfDwTabLabelDirective.length
                ? this.listOfDwTabLabelDirective.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
            if (this.dwTabsInkBarDirective) {
                this.dwTabsInkBarDirective.alignToElement(selectedLabelWrapper);
            }
        }
    };
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
    DwTabsNavComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 },
        { type: Directionality, decorators: [{ type: Optional }] }
    ]; };
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
    return DwTabsNavComponent;
}());
export { DwTabsNavComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFicy1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJzL2R3LXRhYnMtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFHTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFcEUsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7O0lBcUdoQyw0QkFBbUIsVUFBc0IsRUFDckIsUUFDQSxVQUNZLEdBQW1CO1FBSGhDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDckIsV0FBTSxHQUFOLE1BQU07UUFDTixhQUFRLEdBQVIsUUFBUTtRQUNJLFFBQUcsR0FBSCxHQUFHLENBQWdCO3lCQTFGL0IsSUFBSTt3QkFDTCxLQUFLOytCQUNFLElBQUk7cUJBQ2QsTUFBTTtnQ0FDd0IsWUFBWTsrQkFDaEMsQ0FBQzs4QkFDRixDQUFDO3NDQUNELEtBQUs7a0NBQ1QsSUFBSTttQ0FDSCxJQUFJO29DQUNILEtBQUs7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QUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYTtnQkFDekYsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNULElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDakU7U0FDRjtLQUNGOztnQkFuU0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxlQUFlO29CQUNwQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQix1eENBQW1EO29CQUNuRCxJQUFJLEVBQWlCO3dCQUNuQixzQkFBc0IsRUFBRSxNQUFNO3FCQUMvQjtpQkFDRjs7OztnQkEvQkMsVUFBVTtnQkFHVixNQUFNO2dCQUlOLFNBQVM7Z0JBYlMsY0FBYyx1QkFpSW5CLFFBQVE7Ozs0Q0E1RXBCLGVBQWUsU0FBQyxtQkFBbUI7d0NBQ25DLFNBQVMsU0FBQyxxQkFBcUI7c0NBQy9CLFNBQVMsU0FBQyxxQkFBcUI7aUNBQy9CLFNBQVMsU0FBQyxnQkFBZ0I7Z0NBQzFCLE1BQU07Z0NBQ04sTUFBTTt1Q0FDTixLQUFLOzZCQUVMLEtBQUs7NEJBU0wsS0FBSzt5QkFTTCxLQUFLO21DQWNMLEtBQUs7aUNBU0wsS0FBSztnQ0FhTCxLQUFLOzs2QkFwSFI7O1NBdUNhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyICovXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdUYWJMYWJlbERpcmVjdGl2ZSB9IGZyb20gJy4vZHctdGFiLWxhYmVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEd1RhYnNJbmtCYXJEaXJlY3RpdmUgfSBmcm9tICcuL2R3LXRhYnMtaW5rLWJhci5kaXJlY3RpdmUnO1xuXG5jb25zdCBFWEFHR0VSQVRFRF9PVkVSU0NST0xMID0gNjQ7XG5leHBvcnQgdHlwZSBTY3JvbGxEaXJlY3Rpb24gPSAnYWZ0ZXInIHwgJ2JlZm9yZSc7XG5cbmltcG9ydCB7IER3VGFiUG9zaXRpb25Nb2RlIH0gZnJvbSAnLi9kdy10YWJzZXQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbZHctdGFicy1uYXZdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRhYnMtbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRhYnMtYmFyXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3VGFic05hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9hbmltYXRlZCA9IHRydWU7XG4gIHByaXZhdGUgX2hpZGVCYXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBwcml2YXRlIF90eXBlID0gJ2xpbmUnO1xuICBwcml2YXRlIF90YWJQb3NpdGlvbk1vZGU6IER3VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnO1xuICBwcml2YXRlIF9zY3JvbGxEaXN0YW5jZSA9IDA7XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXggPSAwO1xuICBzaG93UGFnaW5hdGlvbkNvbnRyb2xzID0gZmFsc2U7XG4gIGRpc2FibGVTY3JvbGxBZnRlciA9IHRydWU7XG4gIGRpc2FibGVTY3JvbGxCZWZvcmUgPSB0cnVlO1xuICBzZWxlY3RlZEluZGV4Q2hhbmdlZCA9IGZhbHNlO1xuICByZWFsaWduSW5rQmFyOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcbiAgdGFiTGFiZWxDb3VudDogbnVtYmVyO1xuICBzY3JvbGxEaXN0YW5jZUNoYW5nZWQ6IGJvb2xlYW47XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdUYWJMYWJlbERpcmVjdGl2ZSkgbGlzdE9mRHdUYWJMYWJlbERpcmVjdGl2ZTogUXVlcnlMaXN0PER3VGFiTGFiZWxEaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkKER3VGFic0lua0JhckRpcmVjdGl2ZSkgZHdUYWJzSW5rQmFyRGlyZWN0aXZlOiBEd1RhYnNJbmtCYXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ25hdkNvbnRhaW5lckVsZW1lbnQnKSBuYXZDb250YWluZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCduYXZMaXN0RWxlbWVudCcpIG5hdkxpc3RFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgZHdPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGR3T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIGR3VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdBbmltYXRlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FuaW1hdGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FuaW1hdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0hpZGVCYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWRlQmFyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0hpZGVCYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZGVCYXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUeXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX3R5cGUgIT09ICdsaW5lJykge1xuICAgICAgdGhpcy5kd1RhYnNJbmtCYXJEaXJlY3RpdmUuc2V0RGlzcGxheSgnbm9uZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR3VGFic0lua0JhckRpcmVjdGl2ZS5zZXREaXNwbGF5KCdibG9jaycpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dQYWdpbmF0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1BhZ2luYXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd1BhZ2luYXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dQYWdpbmF0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UG9zaXRpb25Nb2RlKHZhbHVlOiBEd1RhYlBvc2l0aW9uTW9kZSkge1xuICAgIHRoaXMuX3RhYlBvc2l0aW9uTW9kZSA9IHZhbHVlO1xuICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gICAgaWYgKHRoaXMuZHdTaG93UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3UG9zaXRpb25Nb2RlKCk6IER3VGFiUG9zaXRpb25Nb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fdGFiUG9zaXRpb25Nb2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSB0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSB2YWx1ZTtcblxuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcjogRGlyZWN0aW9uYWxpdHkpIHtcbiAgfVxuXG4gIG9uQ29udGVudENoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdTaG93UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk7XG4gIH1cblxuICBzY3JvbGxIZWFkZXIoc2Nyb2xsRGlyOiBTY3JvbGxEaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoc2Nyb2xsRGlyID09PSAnYmVmb3JlJyAmJiAhdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlKSB7XG4gICAgICB0aGlzLmR3T25QcmV2Q2xpY2suZW1pdCgpO1xuICAgIH0gZWxzZSBpZiAoc2Nyb2xsRGlyID09PSAnYWZ0ZXInICYmICF0aGlzLmRpc2FibGVTY3JvbGxBZnRlcikge1xuICAgICAgdGhpcy5kd09uTmV4dENsaWNrLmVtaXQoKTtcbiAgICB9XG4gICAgLy8gTW92ZSB0aGUgc2Nyb2xsIGRpc3RhbmNlIG9uZS10aGlyZCB0aGUgbGVuZ3RoIG9mIHRoZSB0YWIgbGlzdCdzIHZpZXdwb3J0LlxuICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgKz0gKHNjcm9sbERpciA9PT0gJ2JlZm9yZScgPyAtMSA6IDEpICogdGhpcy52aWV3V2lkdGhIZWlnaHRQaXggLyAzO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXG4gICAgaWYgKHRoaXMudGFiTGFiZWxDb3VudCAhPT0gdGhpcy5saXN0T2ZEd1RhYkxhYmVsRGlyZWN0aXZlLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuZHdTaG93UGFnaW5hdGlvbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFiTGFiZWxDb3VudCA9IHRoaXMubGlzdE9mRHdUYWJMYWJlbERpcmVjdGl2ZS5sZW5ndGg7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvTGFiZWwodGhpcy5fc2VsZWN0ZWRJbmRleCk7XG4gICAgICBpZiAodGhpcy5kd1Nob3dQYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxpbmdDb250cm9scygpO1xuICAgICAgfVxuICAgICAgdGhpcy5hbGlnbklua0JhclRvU2VsZWN0ZWRUYWIoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkKSB7XG4gICAgICBpZiAodGhpcy5kd1Nob3dQYWdpbmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGFiU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2VDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVhbGlnbklua0JhciA9IHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGNvbnN0IGRpckNoYW5nZSA9IHRoaXMuZGlyID8gdGhpcy5kaXIuY2hhbmdlIDogb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgICAgY29uc3QgcmVzaXplID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShhdWRpdFRpbWUoMTApKSA6XG4gICAgICAgIG9ic2VydmFibGVPZihudWxsKTtcbiAgICAgIHJldHVybiBtZXJnZShkaXJDaGFuZ2UsIHJlc2l6ZSkucGlwZShzdGFydFdpdGgobnVsbCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmR3U2hvd1BhZ2luYXRpb24pIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhZ2luYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsaWduSW5rQmFyVG9TZWxlY3RlZFRhYigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVUYWJTY3JvbGxQb3NpdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgaWYgKHRoaXMuZHdQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgdHJhbnNsYXRlWCA9IHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInID8gLXNjcm9sbERpc3RhbmNlIDogc2Nyb2xsRGlzdGFuY2U7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVh9cHgsIDAsIDApYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKDAsJHstc2Nyb2xsRGlzdGFuY2V9cHgsIDApYCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGFnaW5hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrUGFnaW5hdGlvbkVuYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTtcbiAgICB0aGlzLnVwZGF0ZVRhYlNjcm9sbFBvc2l0aW9uKCk7XG4gIH1cblxuICBjaGVja1BhZ2luYXRpb25FbmFibGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd1BhZ2luYXRpb25Db250cm9scyA9XG4gICAgICB0aGlzLnRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCA+IHRoaXMuZWxlbWVudFJlZk9mZlNldFdpZHRoSGVpZ2h0O1xuXG4gICAgaWYgKCF0aGlzLnNob3dQYWdpbmF0aW9uQ29udHJvbHMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvTGFiZWwobGFiZWxJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMYWJlbCA9IHRoaXMubGlzdE9mRHdUYWJMYWJlbERpcmVjdGl2ZVxuICAgICAgPyB0aGlzLmxpc3RPZkR3VGFiTGFiZWxEaXJlY3RpdmUudG9BcnJheSgpWyBsYWJlbEluZGV4IF1cbiAgICAgIDogbnVsbDtcblxuICAgIGlmIChzZWxlY3RlZExhYmVsKSB7XG4gICAgICAvLyBUaGUgdmlldyBsZW5ndGggaXMgdGhlIHZpc2libGUgd2lkdGggb2YgdGhlIHRhYiBsYWJlbHMuXG5cbiAgICAgIGxldCBsYWJlbEJlZm9yZVBvczogbnVtYmVyO1xuICAgICAgbGV0IGxhYmVsQWZ0ZXJQb3M6IG51bWJlcjtcbiAgICAgIGlmICh0aGlzLmR3UG9zaXRpb25Nb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TGF5b3V0RGlyZWN0aW9uKCkgPT09ICdsdHInKSB7XG4gICAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldExlZnQoKTtcbiAgICAgICAgICBsYWJlbEFmdGVyUG9zID0gbGFiZWxCZWZvcmVQb3MgKyBzZWxlY3RlZExhYmVsLmdldE9mZnNldFdpZHRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWxBZnRlclBvcyA9IHRoaXMubmF2TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0TGVmdCgpO1xuICAgICAgICAgIGxhYmVsQmVmb3JlUG9zID0gbGFiZWxBZnRlclBvcyAtIHNlbGVjdGVkTGFiZWwuZ2V0T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxCZWZvcmVQb3MgPSBzZWxlY3RlZExhYmVsLmdldE9mZnNldFRvcCgpO1xuICAgICAgICBsYWJlbEFmdGVyUG9zID0gbGFiZWxCZWZvcmVQb3MgKyBzZWxlY3RlZExhYmVsLmdldE9mZnNldEhlaWdodCgpO1xuICAgICAgfVxuICAgICAgY29uc3QgYmVmb3JlVmlzaWJsZVBvcyA9IHRoaXMuc2Nyb2xsRGlzdGFuY2U7XG4gICAgICBjb25zdCBhZnRlclZpc2libGVQb3MgPSB0aGlzLnNjcm9sbERpc3RhbmNlICsgdGhpcy52aWV3V2lkdGhIZWlnaHRQaXg7XG5cbiAgICAgIGlmIChsYWJlbEJlZm9yZVBvcyA8IGJlZm9yZVZpc2libGVQb3MpIHtcbiAgICAgICAgLy8gU2Nyb2xsIGhlYWRlciB0byBtb3ZlIGxhYmVsIHRvIHRoZSBiZWZvcmUgZGlyZWN0aW9uXG4gICAgICAgIHRoaXMuc2Nyb2xsRGlzdGFuY2UgLT0gYmVmb3JlVmlzaWJsZVBvcyAtIGxhYmVsQmVmb3JlUG9zICsgRVhBR0dFUkFURURfT1ZFUlNDUk9MTDtcbiAgICAgIH0gZWxzZSBpZiAobGFiZWxBZnRlclBvcyA+IGFmdGVyVmlzaWJsZVBvcykge1xuICAgICAgICAvLyBTY3JvbGwgaGVhZGVyIHRvIG1vdmUgbGFiZWwgdG8gdGhlIGFmdGVyIGRpcmVjdGlvblxuICAgICAgICB0aGlzLnNjcm9sbERpc3RhbmNlICs9IGxhYmVsQWZ0ZXJQb3MgLSBhZnRlclZpc2libGVQb3MgKyBFWEFHR0VSQVRFRF9PVkVSU0NST0xMO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2Nyb2xsaW5nQ29udHJvbHMoKTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhZ2luYXRpb24gYXJyb3dzIHNob3VsZCBiZSBhY3RpdmF0ZWQuXG4gICAgdGhpcy5kaXNhYmxlU2Nyb2xsQmVmb3JlID0gdGhpcy5zY3JvbGxEaXN0YW5jZSA9PT0gMDtcbiAgICB0aGlzLmRpc2FibGVTY3JvbGxBZnRlciA9IHRoaXMuc2Nyb2xsRGlzdGFuY2UgPT09IHRoaXMuZ2V0TWF4U2Nyb2xsRGlzdGFuY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoYXQgaXMgdGhlIG1heGltdW0gbGVuZ3RoIGluIHBpeGVscyB0aGF0IGNhbiBiZSBzZXQgZm9yIHRoZSBzY3JvbGwgZGlzdGFuY2UuIFRoaXNcbiAgICogaXMgZXF1YWwgdG8gdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0aGUgdGFiIGxpc3QgY29udGFpbmVyIGFuZCB0YWIgaGVhZGVyIGNvbnRhaW5lci5cbiAgICpcbiAgICogVGhpcyBpcyBhbiBleHBlbnNpdmUgY2FsbCB0aGF0IGZvcmNlcyBhIGxheW91dCByZWZsb3cgdG8gY29tcHV0ZSBib3ggYW5kIHNjcm9sbCBtZXRyaWNzIGFuZFxuICAgKiBzaG91bGQgYmUgY2FsbGVkIHNwYXJpbmdseS5cbiAgICovXG4gIGdldE1heFNjcm9sbERpc3RhbmNlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuICh0aGlzLnRhYkxpc3RTY3JvbGxXaWR0aEhlaWdodFBpeCAtIHRoaXMudmlld1dpZHRoSGVpZ2h0UGl4KSB8fCAwO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIGRpc3RhbmNlIGluIHBpeGVscyB0aGF0IHRoZSB0YWIgaGVhZGVyIHNob3VsZCBiZSB0cmFuc2Zvcm1lZCBpbiB0aGUgWC1heGlzLiAqL1xuICBzZXQgc2Nyb2xsRGlzdGFuY2UodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2Nyb2xsRGlzdGFuY2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLmdldE1heFNjcm9sbERpc3RhbmNlKCksIHYpKTtcblxuICAgIC8vIE1hcmsgdGhhdCB0aGUgc2Nyb2xsIGRpc3RhbmNlIGhhcyBjaGFuZ2VkIHNvIHRoYXQgYWZ0ZXIgdGhlIHZpZXcgaXMgY2hlY2tlZCwgdGhlIENTU1xuICAgIC8vIHRyYW5zZm9ybWF0aW9uIGNhbiBtb3ZlIHRoZSBoZWFkZXIuXG4gICAgdGhpcy5zY3JvbGxEaXN0YW5jZUNoYW5nZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5jaGVja1Njcm9sbGluZ0NvbnRyb2xzKCk7XG4gIH1cblxuICBnZXQgc2Nyb2xsRGlzdGFuY2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRGlzdGFuY2U7XG4gIH1cblxuICBnZXQgdmlld1dpZHRoSGVpZ2h0UGl4KCk6IG51bWJlciB7XG4gICAgbGV0IFBBR0lOQVRJT05fUElYID0gMDtcbiAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbkNvbnRyb2xzKSB7XG4gICAgICBQQUdJTkFUSU9OX1BJWCA9IDY0O1xuICAgIH1cbiAgICBpZiAodGhpcy5kd1Bvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZDb250YWluZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggLSBQQUdJTkFUSU9OX1BJWDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMubmF2Q29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAtIFBBR0lOQVRJT05fUElYO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0YWJMaXN0U2Nyb2xsV2lkdGhIZWlnaHRQaXgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5kd1Bvc2l0aW9uTW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5uYXZMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBnZXQgZWxlbWVudFJlZk9mZlNldFdpZHRoSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuZHdQb3NpdGlvbk1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGdldExheW91dERpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmRpciAmJiB0aGlzLmRpci52YWx1ZSA9PT0gJ3J0bCcgPyAncnRsJyA6ICdsdHInO1xuICB9XG5cbiAgYWxpZ25JbmtCYXJUb1NlbGVjdGVkVGFiKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3VHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZExhYmVsV3JhcHBlciA9IHRoaXMubGlzdE9mRHdUYWJMYWJlbERpcmVjdGl2ZSAmJiB0aGlzLmxpc3RPZkR3VGFiTGFiZWxEaXJlY3RpdmUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5saXN0T2ZEd1RhYkxhYmVsRGlyZWN0aXZlLnRvQXJyYXkoKVsgdGhpcy5zZWxlY3RlZEluZGV4IF0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgIDogbnVsbDtcbiAgICAgIGlmICh0aGlzLmR3VGFic0lua0JhckRpcmVjdGl2ZSkge1xuICAgICAgICB0aGlzLmR3VGFic0lua0JhckRpcmVjdGl2ZS5hbGlnblRvRWxlbWVudChzZWxlY3RlZExhYmVsV3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
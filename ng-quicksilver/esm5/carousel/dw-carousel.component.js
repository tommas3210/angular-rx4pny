/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean, toNumber } from '../core/util/convert';
import { DwCarouselContentDirective } from './dw-carousel-content.directive';
var DwCarouselComponent = /** @class */ (function () {
    function DwCarouselComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._autoPlay = false;
        this._autoPlaySpeed = 3000;
        this._dots = true;
        this._vertical = false;
        this._effect = 'scrollx';
        this.unsubscribe$ = new Subject();
        this.activeIndex = 0;
        this.transform = 'translate3d(0px, 0px, 0px)';
        this.dwAfterChange = new EventEmitter();
        this.dwBeforeChange = new EventEmitter();
        this.dwEnableSwipe = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    DwCarouselComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.renderContent();
    };
    Object.defineProperty(DwCarouselComponent.prototype, "nextIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselComponent.prototype, "prevIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselComponent.prototype, "dwDots", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dots;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dots = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselComponent.prototype, "dwEffect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._effect;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effect = value;
            this.updateMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselComponent.prototype, "dwAutoPlay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoPlay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoPlay = toBoolean(value);
            this.setUpAutoPlay();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselComponent.prototype, "dwAutoPlaySpeed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoPlaySpeed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoPlaySpeed = toNumber(value, null);
            this.setUpAutoPlay();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCarouselComponent.prototype, "dwVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = toBoolean(value);
            this.updateMode();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    DwCarouselComponent.prototype.setActive = /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    function (content, i) {
        if (this.slideContents && this.slideContents.length) {
            this.setUpAutoPlay();
            /** @type {?} */
            var beforeIndex = this.slideContents.toArray().findIndex(function (slide) { return slide.isActive; });
            this.dwBeforeChange.emit({ from: beforeIndex, to: i });
            this.activeIndex = i;
            if (this.dwEffect === 'scrollx') {
                if (this.dwVertical) {
                    this.transform = "translate3d(0px, " + -this.activeIndex * this.elementRef.nativeElement.offsetHeight + "px, 0px)";
                }
                else {
                    this.transform = "translate3d(" + -this.activeIndex * this.elementRef.nativeElement.offsetWidth + "px, 0px, 0px)";
                }
            }
            else {
                this.transform = 'translate3d(0px, 0px, 0px)';
            }
            this.slideContents.forEach(function (slide) { return slide.isActive = slide === content; });
            this.dwAfterChange.emit(i);
        }
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.renderContent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.forEach(function (content, i) {
                content.width = _this.elementRef.nativeElement.offsetWidth;
                if (_this.dwEffect === 'fade') {
                    content.fadeMode = true;
                    if (_this.dwVertical) {
                        content.top = -i * _this.elementRef.nativeElement.offsetHeight;
                    }
                    else {
                        content.left = -i * content.width;
                    }
                }
                else {
                    content.fadeMode = false;
                    content.left = null;
                    content.top = null;
                }
            });
            if (this.dwVertical) {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.setStyle(this.slickList.nativeElement, 'height', this.slideContents.first.el.offsetHeight + "px");
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'height', this.slideContents.length * this.elementRef.nativeElement.offsetHeight + "px");
            }
            else {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'width', this.slideContents.length * this.elementRef.nativeElement.offsetWidth + "px");
            }
            this.setUpAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.setUpAutoPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearTimeout();
        if (this.dwAutoPlay && this.dwAutoPlaySpeed > 0) {
            this.timeout = setTimeout(function (_) {
                _this.setActive(_this.slideContents.toArray()[_this.nextIndex], _this.nextIndex);
            }, this.dwAutoPlaySpeed);
        }
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.updateMode = /**
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.renderContent();
            this.setActive(this.slideContents.first, 0);
        }
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.clearTimeout = /**
     * @return {?}
     */
    function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.pre = /**
     * @return {?}
     */
    function () {
        this.setActive(this.slideContents.toArray()[this.prevIndex], this.prevIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DwCarouselComponent.prototype.goTo = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index >= 0 && index <= this.slideContents.length - 1) {
            this.setActive(this.slideContents.toArray()[index], index);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwCarouselComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === 37) { // Left
            // Left
            this.pre();
            e.preventDefault();
        }
        else if (e.keyCode === 39) { // Right
            // Right
            this.next();
            e.preventDefault();
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    DwCarouselComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = 'swipeleft'; }
        if (!this.dwEnableSwipe) {
            return;
        }
        if (action === 'swipeleft') {
            this.next();
        }
        if (action === 'swiperight') {
            this.pre();
        }
    };
    /* tslint:disable:no-any */
    /**
     * @param {?} e
     * @return {?}
     */
    DwCarouselComponent.prototype.swipeInProgress = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.dwEffect === 'scrollx') {
            /** @type {?} */
            var final = e.isFinal;
            /** @type {?} */
            var scrollWidth = final ? 0 : e.deltaX * 1.2;
            /** @type {?} */
            var totalWidth = this.elementRef.nativeElement.offsetWidth;
            if (this.dwVertical) {
                /** @type {?} */
                var totalHeight = this.elementRef.nativeElement.offsetHeight;
                /** @type {?} */
                var scrollPercent = scrollWidth / totalWidth;
                /** @type {?} */
                var scrollHeight = scrollPercent * totalHeight;
                this.transform = "translate3d(0px, " + (-this.activeIndex * totalHeight + scrollHeight) + "px, 0px)";
            }
            else {
                this.transform = "translate3d(" + (-this.activeIndex * totalWidth + scrollWidth) + "px, 0px, 0px)";
            }
        }
        if (e.isFinal) {
            this.setUpAutoPlay();
        }
        else {
            this.clearTimeout();
        }
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.first.isActive = true;
        }
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slideContents.changes
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(function () {
            _this.renderContent();
        });
        this.renderContent();
    };
    /**
     * @return {?}
     */
    DwCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.clearTimeout();
    };
    DwCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-carousel',
                    preserveWhitespaces: false,
                    template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"dwVertical\">\n  <div class=\"slick-list\" #slickList tabindex=\"-1\" (keydown)=\"onKeyDown($event)\"\n    (swipeleft)=\"swipe('swipeleft')\" (swiperight)=\"swipe('swiperight')\" (pan)=\"swipeInProgress($event);\">\n    <div class=\"slick-track\" [style.transform]=\"transform\" #slickTrack (mousedown)=\"$event.preventDefault()\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ul class=\"slick-dots\" *ngIf=\"dwDots\">\n    <li\n      *ngFor=\"let content of slideContents; let i =index\"\n      [class.slick-active]=\"content.isActive\"\n      (click)=\"setActive(content,i)\">\n      <ng-template [ngTemplateOutlet]=\"dwDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-template #renderDotTemplate let-index>\n  <button>{{index + 1}}</button>\n</ng-template>",
                    host: {
                        '[class.ant-carousel]': 'true'
                    },
                    styles: ["\n      :host {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n        transition: all 0.5s ease;\n      }\n\n      .slick-slide {\n        transition: opacity 500ms ease;\n      }\n\n    "]
                }] }
    ];
    /** @nocollapse */
    DwCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DwCarouselComponent.propDecorators = {
        slideContents: [{ type: ContentChildren, args: [DwCarouselContentDirective,] }],
        slickList: [{ type: ViewChild, args: ['slickList',] }],
        slickTrack: [{ type: ViewChild, args: ['slickTrack',] }],
        dwAfterChange: [{ type: Output }],
        dwBeforeChange: [{ type: Output }],
        dwEnableSwipe: [{ type: Input }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        dwDotRender: [{ type: Input }],
        dwDots: [{ type: Input }],
        dwEffect: [{ type: Input }],
        dwAutoPlay: [{ type: Input }],
        dwAutoPlaySpeed: [{ type: Input }],
        dwVertical: [{ type: Input }, { type: HostBinding, args: ['class.ant-carousel-vertical',] }]
    };
    return DwCarouselComponent;
}());
export { DwCarouselComponent };
function DwCarouselComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCarouselComponent.prototype._autoPlay;
    /** @type {?} */
    DwCarouselComponent.prototype._autoPlaySpeed;
    /** @type {?} */
    DwCarouselComponent.prototype._dots;
    /** @type {?} */
    DwCarouselComponent.prototype._vertical;
    /** @type {?} */
    DwCarouselComponent.prototype._effect;
    /** @type {?} */
    DwCarouselComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    DwCarouselComponent.prototype.transform;
    /** @type {?} */
    DwCarouselComponent.prototype.timeout;
    /** @type {?} */
    DwCarouselComponent.prototype.slideContents;
    /** @type {?} */
    DwCarouselComponent.prototype.slickList;
    /** @type {?} */
    DwCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    DwCarouselComponent.prototype.dwAfterChange;
    /** @type {?} */
    DwCarouselComponent.prototype.dwBeforeChange;
    /** @type {?} */
    DwCarouselComponent.prototype.dwEnableSwipe;
    /** @type {?} */
    DwCarouselComponent.prototype.dwDotRender;
    /** @type {?} */
    DwCarouselComponent.prototype.elementRef;
    /** @type {?} */
    DwCarouselComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjYXJvdXNlbC9kdy1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztJQTBQM0UsNkJBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7eUJBcE5sRCxLQUFLOzhCQUNBLElBQUk7cUJBQ2IsSUFBSTt5QkFDQSxLQUFLO3VCQUNQLFNBQVM7NEJBQ0osSUFBSSxPQUFPLEVBQVE7MkJBRTVCLENBQUM7eUJBQ0gsNEJBQTRCOzZCQU1RLElBQUksWUFBWSxFQUFFOzhCQUNLLElBQUksWUFBWSxFQUFFOzZCQUNoRSxJQUFJO0tBcU01Qjs7Ozs7SUFsTUQsNENBQWM7Ozs7SUFEZCxVQUNlLENBQVU7UUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCO0lBRUQsc0JBQUksMENBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENB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IEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHRvTnVtYmVyIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2R3LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuZXhwb3J0IHR5cGUgU3dpcGVEaXJlY3Rpb24gPSAnc3dpcGVsZWZ0JyB8ICdzd2lwZXJpZ2h0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1jYXJvdXNlbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJvdXNlbF0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLWRvdHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXRyYWNrIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXNsaWRlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuICAgICAgfVxuXG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3Q2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9hdXRvUGxheSA9IGZhbHNlO1xuICBwcml2YXRlIF9hdXRvUGxheVNwZWVkID0gMzAwMDtcbiAgcHJpdmF0ZSBfZG90cyA9IHRydWU7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG4gIHByaXZhdGUgX2VmZmVjdCA9ICdzY3JvbGx4JztcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGFjdGl2ZUluZGV4ID0gMDtcbiAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJztcbiAgdGltZW91dDtcblxuICBAQ29udGVudENoaWxkcmVuKER3Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBzbGlkZUNvbnRlbnRzOiBRdWVyeUxpc3Q8RHdDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnKSBzbGlja0xpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWNrVHJhY2snKSBzbGlja1RyYWNrOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgZHdBZnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd0JlZm9yZUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBkd0VuYWJsZVN3aXBlID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyAnJGV2ZW50JyBdKVxuICBvbldpbmRvd1Jlc2l6ZShlOiBVSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBnZXQgbmV4dEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5kZXggPCB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoIC0gMSA/ICh0aGlzLmFjdGl2ZUluZGV4ICsgMSkgOiAwO1xuICB9XG5cbiAgZ2V0IHByZXZJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluZGV4ID4gMCA/ICh0aGlzLmFjdGl2ZUluZGV4IC0gMSkgOiAodGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgQElucHV0KCkgZHdEb3RSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RG90cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0VmZmVjdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWZmZWN0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gIH1cblxuICBnZXQgZHdFZmZlY3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QXV0b1BsYXkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvUGxheSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRVcEF1dG9QbGF5KCk7XG4gIH1cblxuICBnZXQgZHdBdXRvUGxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1BsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdBdXRvUGxheVNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdXRvUGxheVNwZWVkID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xuICB9XG5cbiAgZ2V0IGR3QXV0b1BsYXlTcGVlZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9hdXRvUGxheVNwZWVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWwnKVxuICBzZXQgZHdWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcbiAgfVxuXG4gIGdldCBkd1ZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIHNldEFjdGl2ZShjb250ZW50OiBEd0Nhcm91c2VsQ29udGVudERpcmVjdGl2ZSwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVDb250ZW50cyAmJiB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFVwQXV0b1BsYXkoKTtcbiAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gdGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKS5maW5kSW5kZXgoc2xpZGUgPT4gc2xpZGUuaXNBY3RpdmUpO1xuICAgICAgdGhpcy5kd0JlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbTogYmVmb3JlSW5kZXgsIHRvOiBpIH0pO1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGk7XG4gICAgICBpZiAodGhpcy5kd0VmZmVjdCA9PT0gJ3Njcm9sbHgnKSB7XG4gICAgICAgIGlmICh0aGlzLmR3VmVydGljYWwpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7LXRoaXMuYWN0aXZlSW5kZXggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHR9cHgsIDBweClgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LXRoaXMuYWN0aXZlSW5kZXggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weCwgMHB4LCAwcHgpYDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknO1xuICAgICAgfVxuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZvckVhY2goc2xpZGUgPT4gc2xpZGUuaXNBY3RpdmUgPSBzbGlkZSA9PT0gY29udGVudCk7XG4gICAgICB0aGlzLmR3QWZ0ZXJDaGFuZ2UuZW1pdChpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDb250ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQsIGkpID0+IHtcbiAgICAgICAgY29udGVudC53aWR0aCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAodGhpcy5kd0VmZmVjdCA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgICAgY29udGVudC5mYWRlTW9kZSA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMuZHdWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY29udGVudC50b3AgPSAtaSAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudC5sZWZ0ID0gLWkgKiBjb250ZW50LndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZW50LmZhZGVNb2RlID0gZmFsc2U7XG4gICAgICAgICAgY29udGVudC5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICBjb250ZW50LnRvcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZHdWZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5maXJzdC5lbC5vZmZzZXRIZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7dGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodH1weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weGApO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRVcEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VXBBdXRvUGxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgIGlmICh0aGlzLmR3QXV0b1BsYXkgJiYgdGhpcy5kd0F1dG9QbGF5U3BlZWQgPiAwKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpWyB0aGlzLm5leHRJbmRleCBdLCB0aGlzLm5leHRJbmRleCk7XG4gICAgICB9LCB0aGlzLmR3QXV0b1BsYXlTcGVlZCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTW9kZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLmZpcnN0LCAwKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKVsgdGhpcy5uZXh0SW5kZXggXSwgdGhpcy5uZXh0SW5kZXgpO1xuICB9XG5cbiAgcHJlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KClbIHRoaXMucHJldkluZGV4IF0sIHRoaXMucHJldkluZGV4KTtcbiAgfVxuXG4gIGdvVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpWyBpbmRleCBdLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNykgeyAvLyBMZWZ0XG4gICAgICB0aGlzLnByZSgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkgeyAvLyBSaWdodFxuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3dpcGUoYWN0aW9uOiBTd2lwZURpcmVjdGlvbiA9ICdzd2lwZWxlZnQnKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmR3RW5hYmxlU3dpcGUpIHsgcmV0dXJuOyB9XG4gICAgaWYgKGFjdGlvbiA9PT0gJ3N3aXBlbGVmdCcpIHsgdGhpcy5uZXh0KCk7IH1cbiAgICBpZiAoYWN0aW9uID09PSAnc3dpcGVyaWdodCcpIHsgdGhpcy5wcmUoKTsgfVxuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHN3aXBlSW5Qcm9ncmVzcyhlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0VmZmVjdCA9PT0gJ3Njcm9sbHgnKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IGUuaXNGaW5hbDtcbiAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gZmluYWwgPyAwIDogZS5kZWx0YVggKiAxLjI7XG4gICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBpZiAodGhpcy5kd1ZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxQZXJjZW50ID0gc2Nyb2xsV2lkdGggLyB0b3RhbFdpZHRoO1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSAgc2Nyb2xsUGVyY2VudCAqIHRvdGFsSGVpZ2h0O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7LXRoaXMuYWN0aXZlSW5kZXggKiB0b3RhbEhlaWdodCArIHNjcm9sbEhlaWdodH1weCwgMHB4KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdG90YWxXaWR0aCArIHNjcm9sbFdpZHRofXB4LCAwcHgsIDBweClgO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLnNldFVwQXV0b1BsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVDb250ZW50cyAmJiB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZmlyc3QuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNsaWRlQ29udGVudHMuY2hhbmdlc1xuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cblxufVxuIl19
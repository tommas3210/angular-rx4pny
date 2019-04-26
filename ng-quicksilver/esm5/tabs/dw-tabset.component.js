/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** get some code from https://github.com/angular/material2 */
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { toNumber } from '../core/util/convert';
import { DwTabsNavComponent } from './dw-tabs-nav.component';
/**
 * @record
 */
export function DwAnimatedInterface() { }
function DwAnimatedInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAnimatedInterface.prototype.inkBar;
    /** @type {?} */
    DwAnimatedInterface.prototype.tabPane;
}
var DwTabChangeEvent = /** @class */ (function () {
    function DwTabChangeEvent() {
    }
    return DwTabChangeEvent;
}());
export { DwTabChangeEvent };
function DwTabChangeEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTabChangeEvent.prototype.index;
    /** @type {?} */
    DwTabChangeEvent.prototype.tab;
}
var DwTabSetComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function DwTabSetComponent(renderer, dwUpdateHostClassService, elementRef, document) {
        this.renderer = renderer;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this.elementRef = elementRef;
        this.document = document;
        this._tabPosition = 'top';
        this._indexToSelect = 0;
        this._selectedIndex = null;
        this._type = 'line';
        this._size = 'default';
        this._animated = true;
        this.prefixCls = 'ant-tabs';
        this.tabPositionMode = 'horizontal';
        this.inkBarAnimated = true;
        this.tabPaneAnimated = true;
        this.isViewInit = false;
        this.listOfDwTabComponent = [];
        this.dwShowPagination = true;
        this.dwHideAll = false;
        this.dwOnNextClick = new EventEmitter();
        this.dwOnPrevClick = new EventEmitter();
        this.dwSelectChange = new EventEmitter(true);
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwTabSetComponent.prototype, "dwAnimated", {
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
            this._animated = value;
            this.setClassMap();
            this.inkBarAnimated = (this.dwAnimated === true) || ((/** @type {?} */ (this.dwAnimated)).inkBar === true);
            this.tabPaneAnimated = (this.dwAnimated === true) || ((/** @type {?} */ (this.dwAnimated)).tabPane === true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabSetComponent.prototype, "dwSelectedIndex", {
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
            this._indexToSelect = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabSetComponent.prototype, "dwSelectedIndexChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSelectChange.pipe(map(function (event) { return event.index; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabSetComponent.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabSetComponent.prototype, "dwTabPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tabPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._tabPosition === value) {
                return;
            }
            this._tabPosition = value;
            if ((this._tabPosition === 'top') || (this._tabPosition === 'bottom')) {
                this.tabPositionMode = 'horizontal';
            }
            else {
                this.tabPositionMode = 'vertical';
            }
            this.setPosition(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTabSetComponent.prototype, "dwType", {
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
            if (this._type === value) {
                return;
            }
            this._type = value;
            if (this._type === 'card') {
                this.dwAnimated = false;
            }
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DwTabSetComponent.prototype.setPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isViewInit) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.dwTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.dwTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    };
    /**
     * @return {?}
     */
    DwTabSetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-vertical"] = (this.dwTabPosition === 'left') || (this.dwTabPosition === 'right'),
            _a[this.prefixCls + "-" + this.dwTabPosition] = this.dwTabPosition,
            _a[this.prefixCls + "-no-animation"] = (this.dwAnimated === false) || ((/** @type {?} */ (this.dwAnimated)).tabPane === false),
            _a[this.prefixCls + "-" + this.dwType] = this.dwType,
            _a[this.prefixCls + "-large"] = this.dwSize === 'large',
            _a[this.prefixCls + "-small"] = this.dwSize === 'small',
            _a);
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    DwTabSetComponent.prototype.clickLabel = /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    function (index, disabled) {
        if (!disabled) {
            this.dwSelectedIndex = index;
            this.listOfDwTabComponent[index].dwClick.emit();
        }
    };
    /**
     * @return {?}
     */
    DwTabSetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    DwTabSetComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var indexToSelect = this._indexToSelect =
            Math.min(this.listOfDwTabComponent.length - 1, Math.max(this._indexToSelect || 0, 0));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex !== indexToSelect && isNotNil(this._selectedIndex)) {
            this.dwSelectChange.emit(this.createChangeEvent(indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.listOfDwTabComponent.forEach(function (tab, index) {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (isNotNil(_this._selectedIndex) && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - _this._selectedIndex;
            }
        });
        this._selectedIndex = indexToSelect;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DwTabSetComponent.prototype.createChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var event = new DwTabChangeEvent();
        event.index = index;
        if (this.listOfDwTabComponent && this.listOfDwTabComponent.length) {
            event.tab = this.listOfDwTabComponent[index];
            this.listOfDwTabComponent.forEach(function (item, i) {
                if (i !== index) {
                    item.dwDeselect.emit();
                }
            });
            event.tab.dwSelect.emit();
        }
        return event;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTabSetComponent.prototype.addTab = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfDwTabComponent.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTabSetComponent.prototype.removeTab = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfDwTabComponent.splice(this.listOfDwTabComponent.indexOf(value), 1);
    };
    // From https://github.com/react-component/tabs/blob/master/src/Tabs.js
    // Prevent focus to make the Tabs scroll offset
    /**
     * @param {?} $event
     * @return {?}
     */
    DwTabSetComponent.prototype.onScroll = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        /** @type {?} */
        var target = /** @type {?} */ ($event.target);
        if (target.scrollLeft > 0) {
            target.scrollLeft = 0;
            if (this.document && this.document.activeElement) {
                (/** @type {?} */ (this.document.activeElement)).blur();
            }
        }
    };
    /**
     * @return {?}
     */
    DwTabSetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isViewInit = true;
        this.setPosition(this.dwTabPosition);
    };
    DwTabSetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-tabset',
                    preserveWhitespaces: false,
                    providers: [DwUpdateHostClassService],
                    template: "<div dw-tabs-nav\n  role=\"tablist\"\n  tabindex=\"0\"\n  [dwType]=\"dwType\"\n  [dwShowPagination]=\"dwShowPagination\"\n  [dwPositionMode]=\"tabPositionMode\"\n  [dwAnimated]=\"inkBarAnimated\"\n  [ngStyle]=\"dwTabBarStyle\"\n  [dwHideBar]=\"dwHideAll\"\n  [dwTabBarExtraContent]=\"dwTabBarExtraContent\"\n  [selectedIndex]=\"dwSelectedIndex\"\n  (dwOnNextClick)=\"dwOnNextClick.emit()\"\n  (dwOnPrevClick)=\"dwOnPrevClick.emit()\">\n  <div\n    dw-tab-label\n    role=\"tab\"\n    [style.margin-right.px]=\"dwTabBarGutter\"\n    [class.ant-tabs-tab-active]=\"(dwSelectedIndex == i) && !dwHideAll\"\n    [disabled]=\"tab.dwDisabled\"\n    (click)=\"clickLabel(i,tab.dwDisabled)\"\n    *ngFor=\"let tab of listOfDwTabComponent; let i = index\">\n    <ng-container *ngIf=\"tab.isTitleString; else titleTemplate\">{{ tab.dwTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"tab.dwTitle\"></ng-template>\n    </ng-template>\n  </div>\n</div>\n<div\n  class=\"ant-tabs-content\"\n  #tabContent\n  [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n  [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n  [style.margin-left.%]=\"tabPaneAnimated&&(-dwSelectedIndex*100)\">\n  <div dw-tab-body\n    class=\"ant-tabs-tabpane\"\n    [class.ant-tabs-tabpane-active]=\"(dwSelectedIndex == i) && !dwHideAll\"\n    [class.ant-tabs-tabpane-inactive]=\"(dwSelectedIndex != i) || dwHideAll\"\n    [content]=\"tab.content\"\n    *ngFor=\"let tab of listOfDwTabComponent; let i = index\">\n  </div>\n</div>",
                    host: {
                        '(scroll)': 'onScroll($event)'
                    },
                    styles: ["\n    :host {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DwTabSetComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: DwUpdateHostClassService },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DwTabSetComponent.propDecorators = {
        dwTabBarExtraContent: [{ type: Input }],
        dwTabsNavComponent: [{ type: ViewChild, args: [DwTabsNavComponent,] }],
        tabContent: [{ type: ViewChild, args: ['tabContent',] }],
        dwShowPagination: [{ type: Input }],
        dwHideAll: [{ type: Input }],
        dwTabBarGutter: [{ type: Input }],
        dwTabBarStyle: [{ type: Input }],
        dwOnNextClick: [{ type: Output }],
        dwOnPrevClick: [{ type: Output }],
        dwAnimated: [{ type: Input }],
        dwSelectedIndex: [{ type: Input }],
        dwSelectedIndexChange: [{ type: Output }],
        dwSelectChange: [{ type: Output }],
        dwSize: [{ type: Input }],
        dwTabPosition: [{ type: Input }],
        dwType: [{ type: Input }]
    };
    return DwTabSetComponent;
}());
export { DwTabSetComponent };
function DwTabSetComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTabSetComponent.prototype._tabPosition;
    /** @type {?} */
    DwTabSetComponent.prototype._indexToSelect;
    /** @type {?} */
    DwTabSetComponent.prototype._selectedIndex;
    /** @type {?} */
    DwTabSetComponent.prototype._type;
    /** @type {?} */
    DwTabSetComponent.prototype._size;
    /** @type {?} */
    DwTabSetComponent.prototype._animated;
    /** @type {?} */
    DwTabSetComponent.prototype.el;
    /** @type {?} */
    DwTabSetComponent.prototype.prefixCls;
    /** @type {?} */
    DwTabSetComponent.prototype.tabPositionMode;
    /** @type {?} */
    DwTabSetComponent.prototype.inkBarAnimated;
    /** @type {?} */
    DwTabSetComponent.prototype.tabPaneAnimated;
    /** @type {?} */
    DwTabSetComponent.prototype.isViewInit;
    /** @type {?} */
    DwTabSetComponent.prototype.listOfDwTabComponent;
    /** @type {?} */
    DwTabSetComponent.prototype.dwTabBarExtraContent;
    /** @type {?} */
    DwTabSetComponent.prototype.dwTabsNavComponent;
    /** @type {?} */
    DwTabSetComponent.prototype.tabContent;
    /** @type {?} */
    DwTabSetComponent.prototype.dwShowPagination;
    /** @type {?} */
    DwTabSetComponent.prototype.dwHideAll;
    /** @type {?} */
    DwTabSetComponent.prototype.dwTabBarGutter;
    /** @type {?} */
    DwTabSetComponent.prototype.dwTabBarStyle;
    /** @type {?} */
    DwTabSetComponent.prototype.dwOnNextClick;
    /** @type {?} */
    DwTabSetComponent.prototype.dwOnPrevClick;
    /** @type {?} */
    DwTabSetComponent.prototype.dwSelectChange;
    /** @type {?} */
    DwTabSetComponent.prototype.renderer;
    /** @type {?} */
    DwTabSetComponent.prototype.dwUpdateHostClassService;
    /** @type {?} */
    DwTabSetComponent.prototype.elementRef;
    /** @type {?} */
    DwTabSetComponent.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFicy9kdy10YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFPN0QsSUFBQTs7OzJCQWpDQTtJQW9DQyxDQUFBO0FBSEQsNEJBR0M7Ozs7Ozs7O0lBbU5DLGtDQUFrQztJQUNsQywyQkFBb0IsUUFBbUIsRUFBVSx3QkFBa0QsRUFBVSxVQUFzQixFQUF3QyxRQUFhO1FBQXBLLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUF3QyxhQUFRLEdBQVIsUUFBUSxDQUFLOzRCQS9MbEosS0FBSzs4QkFDSCxDQUFDOzhCQUNELElBQUk7cUJBQ2pCLE1BQU07cUJBQ2pCLFNBQVM7eUJBQzBCLElBQUk7eUJBRTNDLFVBQVU7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TTtpQ0FLTixNQUFNO3lCQUVOLEtBQUs7Z0NBU0wsS0FBSzt5QkFtQkwsS0FBSzs7NEJBeElSOztTQXdEYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogZ2V0IHNvbWUgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMiAqL1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdUYWJDb21wb25lbnQgfSBmcm9tICcuL2R3LXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdUYWJzTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9kdy10YWJzLW5hdi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIER3QW5pbWF0ZWRJbnRlcmZhY2Uge1xuICBpbmtCYXI6IGJvb2xlYW47XG4gIHRhYlBhbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBEd1RhYkNoYW5nZUV2ZW50IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgdGFiOiBEd1RhYkNvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgRHdUYWJQb3NpdGlvbiA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xuZXhwb3J0IHR5cGUgRHdUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuZXhwb3J0IHR5cGUgRHdUYWJUeXBlID0gJ2xpbmUnIHwgJ2NhcmQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXRhYnNldCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIER3VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy10YWJzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJyhzY3JvbGwpJzogJ29uU2Nyb2xsKCRldmVudCknXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIER3VGFiU2V0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfdGFiUG9zaXRpb246IER3VGFiUG9zaXRpb24gPSAndG9wJztcbiAgcHJpdmF0ZSBfaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF90eXBlOiBEd1RhYlR5cGUgPSAnbGluZSc7XG4gIHByaXZhdGUgX3NpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2FuaW1hdGVkOiBEd0FuaW1hdGVkSW50ZXJmYWNlIHwgYm9vbGVhbiA9IHRydWU7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJlZml4Q2xzID0gJ2FudC10YWJzJztcbiAgdGFiUG9zaXRpb25Nb2RlOiBEd1RhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcbiAgaW5rQmFyQW5pbWF0ZWQgPSB0cnVlO1xuICB0YWJQYW5lQW5pbWF0ZWQgPSB0cnVlO1xuICBpc1ZpZXdJbml0ID0gZmFsc2U7XG4gIGxpc3RPZkR3VGFiQ29tcG9uZW50OiBEd1RhYkNvbXBvbmVudFtdID0gW107XG4gIEBJbnB1dCgpIGR3VGFiQmFyRXh0cmFDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZChEd1RhYnNOYXZDb21wb25lbnQpIGR3VGFic05hdkNvbXBvbmVudDogRHdUYWJzTmF2Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKCd0YWJDb250ZW50JykgdGFiQ29udGVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgZHdTaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGR3SGlkZUFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBkd1RhYkJhckd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBkd1RhYkJhclN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIEBPdXRwdXQoKSBkd09uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdPblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdBbmltYXRlZCh2YWx1ZTogRHdBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbmltYXRlZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLmlua0JhckFuaW1hdGVkID0gKHRoaXMuZHdBbmltYXRlZCA9PT0gdHJ1ZSkgfHwgKCh0aGlzLmR3QW5pbWF0ZWQgYXMgRHdBbmltYXRlZEludGVyZmFjZSkuaW5rQmFyID09PSB0cnVlKTtcbiAgICB0aGlzLnRhYlBhbmVBbmltYXRlZCA9ICh0aGlzLmR3QW5pbWF0ZWQgPT09IHRydWUpIHx8ICgodGhpcy5kd0FuaW1hdGVkIGFzIER3QW5pbWF0ZWRJbnRlcmZhY2UpLnRhYlBhbmUgPT09IHRydWUpO1xuICB9XG5cbiAgZ2V0IGR3QW5pbWF0ZWQoKTogRHdBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbmltYXRlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlciB8IG51bGwpIHtcbiAgICB0aGlzLl9pbmRleFRvU2VsZWN0ID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgZ2V0IGR3U2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgfVxuXG4gIEBPdXRwdXQoKVxuICBnZXQgZHdTZWxlY3RlZEluZGV4Q2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuZHdTZWxlY3RDaGFuZ2UucGlwZShtYXAoZXZlbnQgPT4gZXZlbnQuaW5kZXgpKTtcbiAgfVxuXG4gIEBPdXRwdXQoKSBkd1NlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPER3VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxEd1RhYkNoYW5nZUV2ZW50Pih0cnVlKTtcblxuICBASW5wdXQoKSBzZXQgZHdTaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3U2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGFiUG9zaXRpb24odmFsdWU6IER3VGFiUG9zaXRpb24pIHtcbiAgICBpZiAodGhpcy5fdGFiUG9zaXRpb24gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3RhYlBvc2l0aW9uID0gdmFsdWU7XG4gICAgaWYgKCh0aGlzLl90YWJQb3NpdGlvbiA9PT0gJ3RvcCcpIHx8ICh0aGlzLl90YWJQb3NpdGlvbiA9PT0gJ2JvdHRvbScpKSB7XG4gICAgICB0aGlzLnRhYlBvc2l0aW9uTW9kZSA9ICdob3Jpem9udGFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50YWJQb3NpdGlvbk1vZGUgPSAndmVydGljYWwnO1xuICAgIH1cbiAgICB0aGlzLnNldFBvc2l0aW9uKHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdUYWJQb3NpdGlvbigpOiBEd1RhYlBvc2l0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fdGFiUG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUeXBlKHZhbHVlOiBEd1RhYlR5cGUpIHtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl90eXBlID09PSAnY2FyZCcpIHtcbiAgICAgIHRoaXMuZHdBbmltYXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdUeXBlKCk6IER3VGFiVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBzZXRQb3NpdGlvbih2YWx1ZTogRHdUYWJQb3NpdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVmlld0luaXQpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5lbCwgdGhpcy50YWJDb250ZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHdUYWJzTmF2Q29tcG9uZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluc2VydEJlZm9yZSh0aGlzLmVsLCB0aGlzLmR3VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgIF0gICAgICAgICAgICAgOiAodGhpcy5kd1RhYlBvc2l0aW9uID09PSAnbGVmdCcpIHx8ICh0aGlzLmR3VGFiUG9zaXRpb24gPT09ICdyaWdodCcpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3VGFiUG9zaXRpb259YCBdOiB0aGlzLmR3VGFiUG9zaXRpb24sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1uby1hbmltYXRpb25gIF0gICAgICAgICA6ICh0aGlzLmR3QW5pbWF0ZWQgPT09IGZhbHNlKSB8fCAoKHRoaXMuZHdBbmltYXRlZCBhcyBEd0FuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSBmYWxzZSksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuZHdUeXBlfWAgXSAgICAgICA6IHRoaXMuZHdUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbGFyZ2VgIF0gICAgICAgICAgICAgICAgOiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNtYWxsYCBdICAgICAgICAgICAgICAgIDogdGhpcy5kd1NpemUgPT09ICdzbWFsbCdcbiAgICB9O1xuICAgIHRoaXMuZHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICBjbGlja0xhYmVsKGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgdGhpcy5kd1NlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMubGlzdE9mRHdUYWJDb21wb25lbnRbIGluZGV4IF0uZHdDbGljay5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIC8vIENsYW1wIHRoZSBuZXh0IHNlbGVjdGVkIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoXG4gICAgLy8gZW5zdXJlcyB0aGF0IHZhbHVlcyBsaWtlIE5hTiBjYW4ndCBnZXQgdGhyb3VnaCBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZVxuICAgIC8vIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3AgKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXG4gICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9IHRoaXMuX2luZGV4VG9TZWxlY3QgPVxuICAgICAgTWF0aC5taW4odGhpcy5saXN0T2ZEd1RhYkNvbXBvbmVudC5sZW5ndGggLSAxLCBNYXRoLm1heCh0aGlzLl9pbmRleFRvU2VsZWN0IHx8IDAsIDApKTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcbiAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCAmJiBpc05vdE5pbCh0aGlzLl9zZWxlY3RlZEluZGV4KSkge1xuICAgICAgdGhpcy5kd1NlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xuICAgIH1cblxuICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cbiAgICB0aGlzLmxpc3RPZkR3VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogRHdUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcbiAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXG4gICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXG4gICAgICBpZiAoaXNOb3ROaWwodGhpcy5fc2VsZWN0ZWRJbmRleCkgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XG4gICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcbiAgfVxuXG4gIGNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4OiBudW1iZXIpOiBEd1RhYkNoYW5nZUV2ZW50IHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBEd1RhYkNoYW5nZUV2ZW50KCk7XG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcbiAgICBpZiAodGhpcy5saXN0T2ZEd1RhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZkR3VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgZXZlbnQudGFiID0gdGhpcy5saXN0T2ZEd1RhYkNvbXBvbmVudFsgaW5kZXggXTtcbiAgICAgIHRoaXMubGlzdE9mRHdUYWJDb21wb25lbnQuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICBpdGVtLmR3RGVzZWxlY3QuZW1pdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGV2ZW50LnRhYi5kd1NlbGVjdC5lbWl0KCk7XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIGFkZFRhYih2YWx1ZTogRHdUYWJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZkR3VGFiQ29tcG9uZW50LnB1c2godmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlVGFiKHZhbHVlOiBEd1RhYkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mRHdUYWJDb21wb25lbnQuc3BsaWNlKHRoaXMubGlzdE9mRHdUYWJDb21wb25lbnQuaW5kZXhPZih2YWx1ZSksIDEpO1xuICB9XG5cbiAgLy8gRnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RhYnMvYmxvYi9tYXN0ZXIvc3JjL1RhYnMuanNcbiAgLy8gUHJldmVudCBmb2N1cyB0byBtYWtlIHRoZSBUYWJzIHNjcm9sbCBvZmZzZXRcbiAgb25TY3JvbGwoJGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldDogRWxlbWVudCA9ICRldmVudC50YXJnZXQgYXMgRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0LnNjcm9sbExlZnQgPiAwKSB7XG4gICAgICB0YXJnZXQuc2Nyb2xsTGVmdCA9IDA7XG4gICAgICBpZiAodGhpcy5kb2N1bWVudCAmJiB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgKHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGR3VXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzVmlld0luaXQgPSB0cnVlO1xuICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5kd1RhYlBvc2l0aW9uKTtcbiAgfVxuXG59XG4iXX0=
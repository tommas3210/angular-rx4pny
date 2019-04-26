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
export class DwTabChangeEvent {
}
function DwTabChangeEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTabChangeEvent.prototype.index;
    /** @type {?} */
    DwTabChangeEvent.prototype.tab;
}
export class DwTabSetComponent {
    /**
     * @param {?} renderer
     * @param {?} dwUpdateHostClassService
     * @param {?} elementRef
     * @param {?} document
     */
    constructor(renderer, dwUpdateHostClassService, elementRef, document) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAnimated(value) {
        this._animated = value;
        this.setClassMap();
        this.inkBarAnimated = (this.dwAnimated === true) || ((/** @type {?} */ (this.dwAnimated)).inkBar === true);
        this.tabPaneAnimated = (this.dwAnimated === true) || ((/** @type {?} */ (this.dwAnimated)).tabPane === true);
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
    set dwSelectedIndex(value) {
        this._indexToSelect = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get dwSelectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @return {?}
     */
    get dwSelectedIndexChange() {
        return this.dwSelectChange.pipe(map(event => event.index));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this._size = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTabPosition(value) {
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
    }
    /**
     * @return {?}
     */
    get dwTabPosition() {
        return this._tabPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwType(value) {
        if (this._type === value) {
            return;
        }
        this._type = value;
        if (this._type === 'card') {
            this.dwAnimated = false;
        }
        this.setClassMap();
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
    setPosition(value) {
        if (this.isViewInit) {
            if (value === 'bottom') {
                this.renderer.insertBefore(this.el, this.tabContent.nativeElement, this.dwTabsNavComponent.elementRef.nativeElement);
            }
            else {
                this.renderer.insertBefore(this.el, this.dwTabsNavComponent.elementRef.nativeElement, this.tabContent.nativeElement);
            }
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-vertical`]: (this.dwTabPosition === 'left') || (this.dwTabPosition === 'right'),
            [`${this.prefixCls}-${this.dwTabPosition}`]: this.dwTabPosition,
            [`${this.prefixCls}-no-animation`]: (this.dwAnimated === false) || ((/** @type {?} */ (this.dwAnimated)).tabPane === false),
            [`${this.prefixCls}-${this.dwType}`]: this.dwType,
            [`${this.prefixCls}-large`]: this.dwSize === 'large',
            [`${this.prefixCls}-small`]: this.dwSize === 'small'
        };
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
            this.dwSelectedIndex = index;
            this.listOfDwTabComponent[index].dwClick.emit();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const indexToSelect = this._indexToSelect =
            Math.min(this.listOfDwTabComponent.length - 1, Math.max(this._indexToSelect || 0, 0));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex !== indexToSelect && isNotNil(this._selectedIndex)) {
            this.dwSelectChange.emit(this.createChangeEvent(indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.listOfDwTabComponent.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (isNotNil(this._selectedIndex) && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this._selectedIndex;
            }
        });
        this._selectedIndex = indexToSelect;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    createChangeEvent(index) {
        /** @type {?} */
        const event = new DwTabChangeEvent();
        event.index = index;
        if (this.listOfDwTabComponent && this.listOfDwTabComponent.length) {
            event.tab = this.listOfDwTabComponent[index];
            this.listOfDwTabComponent.forEach((item, i) => {
                if (i !== index) {
                    item.dwDeselect.emit();
                }
            });
            event.tab.dwSelect.emit();
        }
        return event;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addTab(value) {
        this.listOfDwTabComponent.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeTab(value) {
        this.listOfDwTabComponent.splice(this.listOfDwTabComponent.indexOf(value), 1);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onScroll($event) {
        /** @type {?} */
        const target = /** @type {?} */ ($event.target);
        if (target.scrollLeft > 0) {
            target.scrollLeft = 0;
            if (this.document && this.document.activeElement) {
                (/** @type {?} */ (this.document.activeElement)).blur();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isViewInit = true;
        this.setPosition(this.dwTabPosition);
    }
}
DwTabSetComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-tabset',
                preserveWhitespaces: false,
                providers: [DwUpdateHostClassService],
                template: "<div dw-tabs-nav\n  role=\"tablist\"\n  tabindex=\"0\"\n  [dwType]=\"dwType\"\n  [dwShowPagination]=\"dwShowPagination\"\n  [dwPositionMode]=\"tabPositionMode\"\n  [dwAnimated]=\"inkBarAnimated\"\n  [ngStyle]=\"dwTabBarStyle\"\n  [dwHideBar]=\"dwHideAll\"\n  [dwTabBarExtraContent]=\"dwTabBarExtraContent\"\n  [selectedIndex]=\"dwSelectedIndex\"\n  (dwOnNextClick)=\"dwOnNextClick.emit()\"\n  (dwOnPrevClick)=\"dwOnPrevClick.emit()\">\n  <div\n    dw-tab-label\n    role=\"tab\"\n    [style.margin-right.px]=\"dwTabBarGutter\"\n    [class.ant-tabs-tab-active]=\"(dwSelectedIndex == i) && !dwHideAll\"\n    [disabled]=\"tab.dwDisabled\"\n    (click)=\"clickLabel(i,tab.dwDisabled)\"\n    *ngFor=\"let tab of listOfDwTabComponent; let i = index\">\n    <ng-container *ngIf=\"tab.isTitleString; else titleTemplate\">{{ tab.dwTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"tab.dwTitle\"></ng-template>\n    </ng-template>\n  </div>\n</div>\n<div\n  class=\"ant-tabs-content\"\n  #tabContent\n  [class.ant-tabs-content-animated]=\"tabPaneAnimated\"\n  [class.ant-tabs-content-no-animated]=\"!tabPaneAnimated\"\n  [style.margin-left.%]=\"tabPaneAnimated&&(-dwSelectedIndex*100)\">\n  <div dw-tab-body\n    class=\"ant-tabs-tabpane\"\n    [class.ant-tabs-tabpane-active]=\"(dwSelectedIndex == i) && !dwHideAll\"\n    [class.ant-tabs-tabpane-inactive]=\"(dwSelectedIndex != i) || dwHideAll\"\n    [content]=\"tab.content\"\n    *ngFor=\"let tab of listOfDwTabComponent; let i = index\">\n  </div>\n</div>",
                host: {
                    '(scroll)': 'onScroll($event)'
                },
                styles: [`
    :host {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
DwTabSetComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: DwUpdateHostClassService },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFicy9kdy10YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFPN0QsTUFBTTtDQUdMOzs7Ozs7O0FBb0JELE1BQU07Ozs7Ozs7SUFnTUosWUFBb0IsUUFBbUIsRUFBVSx3QkFBa0QsRUFBVSxVQUFzQixFQUF3QyxRQUFhO1FBQXBLLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUF3QyxhQUFRLEdBQVIsUUFBUSxDQUFLOzRCQS9MbEosS0FBSzs4QkFDSCxDQUFDOzhCQUNELElBQUk7cUJBQ2pCLE1BQU07cUJBQ2pCLFNBQVM7eUJBQzBCLElBQUk7eUJBRTNDLFVBQVU7K0JBQ2UsWUFBWTs4QkFDaEMsSUFBSTsr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b20vYW5ndWxhci9tYXRlcmlhbDIgKi9cblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IER3VGFic05hdkNvbXBvbmVudCB9IGZyb20gJy4vZHctdGFicy1uYXYuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBEd0FuaW1hdGVkSW50ZXJmYWNlIHtcbiAgaW5rQmFyOiBib29sZWFuO1xuICB0YWJQYW5lOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRHdUYWJDaGFuZ2VFdmVudCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHRhYjogRHdUYWJDb21wb25lbnQ7XG59XG5cbmV4cG9ydCB0eXBlIER3VGFiUG9zaXRpb24gPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbmV4cG9ydCB0eXBlIER3VGFiUG9zaXRpb25Nb2RlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIER3VGFiVHlwZSA9ICdsaW5lJyB8ICdjYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy10YWJzZXQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGFic2V0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICcoc2Nyb2xsKSc6ICdvblNjcm9sbCgkZXZlbnQpJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1RhYlNldENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX3RhYlBvc2l0aW9uOiBEd1RhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIHByaXZhdGUgX2luZGV4VG9TZWxlY3Q6IG51bWJlciB8IG51bGwgPSAwO1xuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdHlwZTogRHdUYWJUeXBlID0gJ2xpbmUnO1xuICBwcml2YXRlIF9zaXplID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIF9hbmltYXRlZDogRHdBbmltYXRlZEludGVyZmFjZSB8IGJvb2xlYW4gPSB0cnVlO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIHByZWZpeENscyA9ICdhbnQtdGFicyc7XG4gIHRhYlBvc2l0aW9uTW9kZTogRHdUYWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gIGlua0JhckFuaW1hdGVkID0gdHJ1ZTtcbiAgdGFiUGFuZUFuaW1hdGVkID0gdHJ1ZTtcbiAgaXNWaWV3SW5pdCA9IGZhbHNlO1xuICBsaXN0T2ZEd1RhYkNvbXBvbmVudDogRHdUYWJDb21wb25lbnRbXSA9IFtdO1xuICBASW5wdXQoKSBkd1RhYkJhckV4dHJhQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBWaWV3Q2hpbGQoRHdUYWJzTmF2Q29tcG9uZW50KSBkd1RhYnNOYXZDb21wb25lbnQ6IER3VGFic05hdkNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndGFiQ29udGVudCcpIHRhYkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIGR3U2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBkd0hpZGVBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdUYWJCYXJHdXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KCkgZHdUYWJCYXJTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBAT3V0cHV0KCkgZHdPbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGR3T25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QW5pbWF0ZWQodmFsdWU6IER3QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuKSB7XG4gICAgdGhpcy5fYW5pbWF0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5pbmtCYXJBbmltYXRlZCA9ICh0aGlzLmR3QW5pbWF0ZWQgPT09IHRydWUpIHx8ICgodGhpcy5kd0FuaW1hdGVkIGFzIER3QW5pbWF0ZWRJbnRlcmZhY2UpLmlua0JhciA9PT0gdHJ1ZSk7XG4gICAgdGhpcy50YWJQYW5lQW5pbWF0ZWQgPSAodGhpcy5kd0FuaW1hdGVkID09PSB0cnVlKSB8fCAoKHRoaXMuZHdBbmltYXRlZCBhcyBEd0FuaW1hdGVkSW50ZXJmYWNlKS50YWJQYW5lID09PSB0cnVlKTtcbiAgfVxuXG4gIGdldCBkd0FuaW1hdGVkKCk6IER3QW5pbWF0ZWRJbnRlcmZhY2UgfCBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYW5pbWF0ZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5faW5kZXhUb1NlbGVjdCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIGdldCBkd1NlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgZ2V0IGR3U2VsZWN0ZWRJbmRleENoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLmR3U2VsZWN0Q2hhbmdlLnBpcGUobWFwKGV2ZW50ID0+IGV2ZW50LmluZGV4KSk7XG4gIH1cblxuICBAT3V0cHV0KCkgZHdTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEd1RhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHdUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XG5cbiAgQElucHV0KCkgc2V0IGR3U2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd1NpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1RhYlBvc2l0aW9uKHZhbHVlOiBEd1RhYlBvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMuX3RhYlBvc2l0aW9uID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl90YWJQb3NpdGlvbiA9IHZhbHVlO1xuICAgIGlmICgodGhpcy5fdGFiUG9zaXRpb24gPT09ICd0b3AnKSB8fCAodGhpcy5fdGFiUG9zaXRpb24gPT09ICdib3R0b20nKSkge1xuICAgICAgdGhpcy50YWJQb3NpdGlvbk1vZGUgPSAnaG9yaXpvbnRhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFiUG9zaXRpb25Nb2RlID0gJ3ZlcnRpY2FsJztcbiAgICB9XG4gICAgdGhpcy5zZXRQb3NpdGlvbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3VGFiUG9zaXRpb24oKTogRHdUYWJQb3NpdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX3RhYlBvc2l0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHlwZSh2YWx1ZTogRHdUYWJUeXBlKSB7XG4gICAgaWYgKHRoaXMuX3R5cGUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fdHlwZSA9PT0gJ2NhcmQnKSB7XG4gICAgICB0aGlzLmR3QW5pbWF0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3VHlwZSgpOiBEd1RhYlR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgc2V0UG9zaXRpb24odmFsdWU6IER3VGFiUG9zaXRpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1ZpZXdJbml0KSB7XG4gICAgICBpZiAodmFsdWUgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIHRoaXMudGFiQ29udGVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmR3VGFic05hdkNvbXBvbmVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5lbCwgdGhpcy5kd1RhYnNOYXZDb21wb25lbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnRhYkNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXZlcnRpY2FsYCBdICAgICAgICAgICAgIDogKHRoaXMuZHdUYWJQb3NpdGlvbiA9PT0gJ2xlZnQnKSB8fCAodGhpcy5kd1RhYlBvc2l0aW9uID09PSAncmlnaHQnKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5kd1RhYlBvc2l0aW9ufWAgXTogdGhpcy5kd1RhYlBvc2l0aW9uLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbm8tYW5pbWF0aW9uYCBdICAgICAgICAgOiAodGhpcy5kd0FuaW1hdGVkID09PSBmYWxzZSkgfHwgKCh0aGlzLmR3QW5pbWF0ZWQgYXMgRHdBbmltYXRlZEludGVyZmFjZSkudGFiUGFuZSA9PT0gZmFsc2UpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3VHlwZX1gIF0gICAgICAgOiB0aGlzLmR3VHlwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWxhcmdlYCBdICAgICAgICAgICAgICAgIDogdGhpcy5kd1NpemUgPT09ICdsYXJnZScsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1zbWFsbGAgXSAgICAgICAgICAgICAgICA6IHRoaXMuZHdTaXplID09PSAnc21hbGwnXG4gICAgfTtcbiAgICB0aGlzLmR3VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZHdTZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICB0aGlzLmxpc3RPZkR3VGFiQ29tcG9uZW50WyBpbmRleCBdLmR3Q2xpY2suZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAvLyBDbGFtcCB0aGUgbmV4dCBzZWxlY3RlZCBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gTm90ZSB0aGUgYHx8IDBgLCB3aGljaFxuICAgIC8vIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2ggYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGVcbiAgICAvLyBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxuICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSB0aGlzLl9pbmRleFRvU2VsZWN0ID1cbiAgICAgIE1hdGgubWluKHRoaXMubGlzdE9mRHdUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgodGhpcy5faW5kZXhUb1NlbGVjdCB8fCAwLCAwKSk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXG4gICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QgJiYgaXNOb3ROaWwodGhpcy5fc2VsZWN0ZWRJbmRleCkpIHtcbiAgICAgIHRoaXMuZHdTZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXG4gICAgdGhpcy5saXN0T2ZEd1RhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWI6IER3VGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XG4gICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLCB0aGVuIHNldCB1cCBhbiBvcmlnaW4gZm9yIHRoZSBuZXh0IHNlbGVjdGVkIHRhYlxuICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxuICAgICAgaWYgKGlzTm90TmlsKHRoaXMuX3NlbGVjdGVkSW5kZXgpICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xuICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XG4gIH1cblxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogRHdUYWJDaGFuZ2VFdmVudCB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRHdUYWJDaGFuZ2VFdmVudCgpO1xuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XG4gICAgaWYgKHRoaXMubGlzdE9mRHdUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZEd1RhYkNvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mRHdUYWJDb21wb25lbnRbIGluZGV4IF07XG4gICAgICB0aGlzLmxpc3RPZkR3VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgaXRlbS5kd0Rlc2VsZWN0LmVtaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmVudC50YWIuZHdTZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cblxuICBhZGRUYWIodmFsdWU6IER3VGFiQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZEd1RhYkNvbXBvbmVudC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZVRhYih2YWx1ZTogRHdUYWJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZkR3VGFiQ29tcG9uZW50LnNwbGljZSh0aGlzLmxpc3RPZkR3VGFiQ29tcG9uZW50LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIC8vIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90YWJzL2Jsb2IvbWFzdGVyL3NyYy9UYWJzLmpzXG4gIC8vIFByZXZlbnQgZm9jdXMgdG8gbWFrZSB0aGUgVGFicyBzY3JvbGwgb2Zmc2V0XG4gIG9uU2Nyb2xsKCRldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQ6IEVsZW1lbnQgPSAkZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldC5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgdGFyZ2V0LnNjcm9sbExlZnQgPSAwO1xuICAgICAgaWYgKHRoaXMuZG9jdW1lbnQgJiYgdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICh0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBkd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc1ZpZXdJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZHdUYWJQb3NpdGlvbik7XG4gIH1cblxufVxuIl19
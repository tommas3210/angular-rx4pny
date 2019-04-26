/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { DwMenuDirective } from '../menu/dw-menu.directive';
import { DwDropDownDirective } from './dw-dropdown.directive';
var DwDropDownComponent = /** @class */ (function () {
    function DwDropDownComponent(renderer, changeDetector) {
        var _this = this;
        this.renderer = renderer;
        this.changeDetector = changeDetector;
        this._clickHide = true;
        this._visible = false;
        this._disabled = false;
        this.unsubscribe$ = new Subject();
        this.hasFilterButton = false;
        this.triggerWidth = 0;
        this.placement = 'bottomLeft';
        this.dropDownPosition = 'bottom';
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
        this.$subOpen = new BehaviorSubject(false);
        this.$visibleChange = new Subject();
        this.dwTrigger = 'hover';
        this.dwVisibleChange = new EventEmitter();
        this.onVisibleChange = function (visible) {
            if (visible) {
                _this.setTriggerWidth();
            }
            if (_this.dwVisible !== visible) {
                _this.dwVisible = visible;
                _this.dwVisibleChange.emit(_this.dwVisible);
            }
            _this.changeDetector.markForCheck();
        };
    }
    Object.defineProperty(DwDropDownComponent.prototype, "dwClickHide", {
        get: /**
         * @return {?}
         */
        function () {
            return this._clickHide;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clickHide = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDropDownComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            if (this._disabled) {
                this.renderer.setAttribute(this.dwOrigin.elementRef.nativeElement, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(this.dwOrigin.elementRef.nativeElement, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDropDownComponent.prototype, "dwVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visible = toBoolean(value);
            /** handle dwVisible change with mouse event **/
            this.$visibleChange.next(this._visible);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDropDownComponent.prototype, "dwPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this.placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.placement = value;
            this.dropDownPosition = (this.dwPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
            this.positions.unshift(/** @type {?} */ (POSITION_MAP[this.placement]));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.onClickEvent = /**
     * @return {?}
     */
    function () {
        if (this.dwTrigger === 'click') {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.onMouseEnterEvent = /**
     * @return {?}
     */
    function () {
        if (this.dwTrigger === 'hover') {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.onMouseLeaveEvent = /**
     * @return {?}
     */
    function () {
        if (this.dwTrigger === 'hover') {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.$visibleChange.next(false);
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        this.$visibleChange.next(true);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    DwDropDownComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        this.triggerWidth = this.dwOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
            this.cdkOverlay.overlayRef.updateSize({
                minWidth: this.triggerWidth
            });
        }
    };
    /**
     * @param {?} observable$
     * @return {?}
     */
    DwDropDownComponent.prototype.startSubscribe = /**
     * @param {?} observable$
     * @return {?}
     */
    function (observable$) {
        /** @type {?} */
        var $pre = observable$;
        if (this.dwClickHide && this.dwMenu) {
            /** @type {?} */
            var $menuItemClick = this.dwMenu.dwClick.asObservable().pipe(mapTo(false));
            $pre = merge($pre, $menuItemClick);
        }
        /** @type {?} */
        var final$ = combineLatest($pre, this.$subOpen).pipe(map(function (value) { return value[0] || value[1]; }), debounceTime(50), distinctUntilChanged());
        final$.pipe(takeUntil(this.unsubscribe$)).subscribe(this.onVisibleChange);
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.dwMenu) {
            this.dwMenu.dwInDropDown = true;
        }
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    DwDropDownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mouse$;
        if (this.dwTrigger === 'hover') {
            /** @type {?} */
            var mouseEnterOrigin$ = this.dwOrigin.$mouseenter.pipe(mapTo(true));
            /** @type {?} */
            var mouseLeaveOrigin$ = this.dwOrigin.$mouseleave.pipe(mapTo(false));
            mouse$ = merge(mouseLeaveOrigin$, mouseEnterOrigin$);
        }
        if (this.dwTrigger === 'click') {
            mouse$ = this.dwOrigin.$click.pipe(mapTo(true));
        }
        /** @type {?} */
        var observable$ = merge(this.$visibleChange, mouse$);
        this.startSubscribe(observable$);
    };
    Object.defineProperty(DwDropDownComponent.prototype, "hasBackdrop", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwTrigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    DwDropDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-dropdown',
                    preserveWhitespaces: false,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<div>\n  <ng-content select=\"[dw-dropdown]\"></ng-content>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"dwOrigin\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"dwVisible\">\n  <div\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+dwPlacement}}\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <div [class.ant-table-filter-dropdown]=\"hasFilterButton\">\n      <ng-content select=\"[dw-menu]\"></ng-content>\n      <ng-content select=\".ant-table-filter-dropdown-btns\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    styles: ["\n      :host {\n        position: relative;\n        display: inline-block;\n      }\n\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    DwDropDownComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    DwDropDownComponent.propDecorators = {
        hasFilterButton: [{ type: Input }],
        dwOrigin: [{ type: ContentChild, args: [DwDropDownDirective,] }],
        dwMenu: [{ type: ContentChild, args: [DwMenuDirective,] }],
        dwTrigger: [{ type: Input }],
        dwVisibleChange: [{ type: Output }],
        cdkOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        dwClickHide: [{ type: Input }],
        dwDisabled: [{ type: Input }],
        dwVisible: [{ type: Input }],
        dwPlacement: [{ type: Input }]
    };
    return DwDropDownComponent;
}());
export { DwDropDownComponent };
function DwDropDownComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDropDownComponent.prototype._clickHide;
    /** @type {?} */
    DwDropDownComponent.prototype._visible;
    /** @type {?} */
    DwDropDownComponent.prototype._disabled;
    /** @type {?} */
    DwDropDownComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwDropDownComponent.prototype.hasFilterButton;
    /** @type {?} */
    DwDropDownComponent.prototype.triggerWidth;
    /** @type {?} */
    DwDropDownComponent.prototype.placement;
    /** @type {?} */
    DwDropDownComponent.prototype.dropDownPosition;
    /** @type {?} */
    DwDropDownComponent.prototype.positions;
    /** @type {?} */
    DwDropDownComponent.prototype.$subOpen;
    /** @type {?} */
    DwDropDownComponent.prototype.$visibleChange;
    /** @type {?} */
    DwDropDownComponent.prototype.dwOrigin;
    /** @type {?} */
    DwDropDownComponent.prototype.dwMenu;
    /** @type {?} */
    DwDropDownComponent.prototype.dwTrigger;
    /** @type {?} */
    DwDropDownComponent.prototype.dwVisibleChange;
    /** @type {?} */
    DwDropDownComponent.prototype.cdkOverlay;
    /** @type {?} */
    DwDropDownComponent.prototype.onVisibleChange;
    /** @type {?} */
    DwDropDownComponent.prototype.renderer;
    /** @type {?} */
    DwDropDownComponent.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9kdy1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBd0w1RCw2QkFBb0IsUUFBbUIsRUFBWSxjQUFpQztRQUFwRixpQkFDQztRQURtQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVksbUJBQWMsR0FBZCxjQUFjLENBQW1COzBCQXpKL0QsSUFBSTt3QkFDTixLQUFLO3lCQUNKLEtBQUs7NEJBQ0YsSUFBSSxPQUFPLEVBQVE7K0JBRWYsS0FBSzs0QkFDakIsQ0FBQzt5QkFDUyxZQUFZO2dDQUNXLFFB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QU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbEM7SUFFRCxzQkFBSSw0Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQztTQUNuQzs7O09BQUE7O2dCQWxMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGFBQWE7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBVzt3QkFDbkIsaUJBQWlCO3FCQUNsQjtvQkFDRCw0OEJBQW1EOzZCQUVqRCwrUUFjQztpQkFFSjs7OztnQkF4Q0MsU0FBUztnQkFSVCxpQkFBaUI7OztrQ0F3RGhCLEtBQUs7MkJBT0wsWUFBWSxTQUFDLG1CQUFtQjt5QkFDaEMsWUFBWSxTQUFDLGVBQWU7NEJBQzVCLEtBQUs7a0NBQ0wsTUFBTTs2QkFDTixTQUFTLFNBQUMsbUJBQW1COzhCQUU3QixLQUFLOzZCQVNMLEtBQUs7NEJBY0wsS0FBSzs4QkFXTCxLQUFLOzs4QkExR1I7O1NBcURhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgbWFwVG8sIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcbmltcG9ydCB7IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TLCBQT1NJVElPTl9NQVAgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi4vbWVudS9kdy1tZW51LmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IER3RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL2R3LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIER3UGxhY2VtZW50ID0gJ2JvdHRvbUxlZnQnIHwgJ2JvdHRvbUNlbnRlcicgfCAnYm90dG9tUmlnaHQnIHwgJ3RvcExlZnQnIHwgJ3RvcENlbnRlcicgfCAndG9wUmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWRyb3Bkb3duJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICBkcm9wRG93bkFuaW1hdGlvblxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuYW50LWRyb3Bkb3duIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEd0Ryb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9jbGlja0hpZGUgPSB0cnVlO1xuICBwcml2YXRlIF92aXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBASW5wdXQoKSBoYXNGaWx0ZXJCdXR0b24gPSBmYWxzZTtcbiAgdHJpZ2dlcldpZHRoID0gMDtcbiAgcGxhY2VtZW50OiBEd1BsYWNlbWVudCA9ICdib3R0b21MZWZ0JztcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyAuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyBdO1xuICAkc3ViT3BlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICAkdmlzaWJsZUNoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIEBDb250ZW50Q2hpbGQoRHdEcm9wRG93bkRpcmVjdGl2ZSkgZHdPcmlnaW46IER3RHJvcERvd25EaXJlY3RpdmU7XG4gIEBDb250ZW50Q2hpbGQoRHdNZW51RGlyZWN0aXZlKSBkd01lbnU6IER3TWVudURpcmVjdGl2ZTtcbiAgQElucHV0KCkgZHdUcmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdob3Zlcic7XG4gIEBPdXRwdXQoKSBkd1Zpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NsaWNrSGlkZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NsaWNrSGlkZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdDbGlja0hpZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWNrSGlkZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5kd09yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5kd09yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Zpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICAvKiogaGFuZGxlIGR3VmlzaWJsZSBjaGFuZ2Ugd2l0aCBtb3VzZSBldmVudCAqKi9cbiAgICB0aGlzLiR2aXNpYmxlQ2hhbmdlLm5leHQodGhpcy5fdmlzaWJsZSk7XG4gIH1cblxuICBnZXQgZHdWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UGxhY2VtZW50KHZhbHVlOiBEd1BsYWNlbWVudCkge1xuICAgIHRoaXMucGxhY2VtZW50ID0gdmFsdWU7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gKHRoaXMuZHdQbGFjZW1lbnQuaW5kZXhPZigndG9wJykgIT09IC0xKSA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgdGhpcy5wb3NpdGlvbnMudW5zaGlmdChQT1NJVElPTl9NQVBbIHRoaXMucGxhY2VtZW50IF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcik7XG4gIH1cblxuICBnZXQgZHdQbGFjZW1lbnQoKTogRHdQbGFjZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnBsYWNlbWVudDtcbiAgfVxuXG4gIG9uQ2xpY2tFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd1RyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VFbnRlckV2ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3VHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUxlYXZlRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdUcmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuJHZpc2libGVDaGFuZ2UubmV4dChmYWxzZSk7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuJHZpc2libGVDaGFuZ2UubmV4dCh0cnVlKTtcbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblk7XG4gIH1cblxuICBzZXRUcmlnZ2VyV2lkdGgoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyV2lkdGggPSB0aGlzLmR3T3JpZ2luLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAvKiogc2hvdWxkIHJlbW92ZSBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvcHVsbC84NzY1IG1lcmdlZCAqKi9cbiAgICBpZiAodGhpcy5jZGtPdmVybGF5ICYmIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLmNka092ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVTaXplKHtcbiAgICAgICAgbWluV2lkdGg6IHRoaXMudHJpZ2dlcldpZHRoXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGFydFN1YnNjcmliZShvYnNlcnZhYmxlJDogT2JzZXJ2YWJsZTxib29sZWFuPik6IHZvaWQge1xuICAgIGxldCAkcHJlID0gb2JzZXJ2YWJsZSQ7XG4gICAgaWYgKHRoaXMuZHdDbGlja0hpZGUgJiYgdGhpcy5kd01lbnUpIHtcbiAgICAgIGNvbnN0ICRtZW51SXRlbUNsaWNrID0gdGhpcy5kd01lbnUuZHdDbGljay5hc09ic2VydmFibGUoKS5waXBlKG1hcFRvKGZhbHNlKSk7XG4gICAgICAkcHJlID0gbWVyZ2UoJHByZSwgJG1lbnVJdGVtQ2xpY2spO1xuICAgIH1cbiAgICBjb25zdCBmaW5hbCQgPSBjb21iaW5lTGF0ZXN0KCRwcmUsIHRoaXMuJHN1Yk9wZW4pLnBpcGUobWFwKHZhbHVlID0+IHZhbHVlWyAwIF0gfHwgdmFsdWVbIDEgXSksIGRlYm91bmNlVGltZSg1MCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICAgIGZpbmFsJC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSh0aGlzLm9uVmlzaWJsZUNoYW5nZSk7XG4gIH1cblxuICBvblZpc2libGVDaGFuZ2UgPSAodmlzaWJsZTogYm9vbGVhbikgPT4ge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd1Zpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMuZHdWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMuZHdWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5kd1Zpc2libGUpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdNZW51KSB7XG4gICAgICB0aGlzLmR3TWVudS5kd0luRHJvcERvd24gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGxldCBtb3VzZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgaWYgKHRoaXMuZHdUcmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICBjb25zdCBtb3VzZUVudGVyT3JpZ2luJCA9IHRoaXMuZHdPcmlnaW4uJG1vdXNlZW50ZXIucGlwZShtYXBUbyh0cnVlKSk7XG4gICAgICBjb25zdCBtb3VzZUxlYXZlT3JpZ2luJCA9IHRoaXMuZHdPcmlnaW4uJG1vdXNlbGVhdmUucGlwZShtYXBUbyhmYWxzZSkpO1xuICAgICAgbW91c2UkID0gbWVyZ2UobW91c2VMZWF2ZU9yaWdpbiQsIG1vdXNlRW50ZXJPcmlnaW4kKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHdUcmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICBtb3VzZSQgPSB0aGlzLmR3T3JpZ2luLiRjbGljay5waXBlKG1hcFRvKHRydWUpKTtcbiAgICB9XG4gICAgY29uc3Qgb2JzZXJ2YWJsZSQgPSBtZXJnZSh0aGlzLiR2aXNpYmxlQ2hhbmdlLCBtb3VzZSQpO1xuICAgIHRoaXMuc3RhcnRTdWJzY3JpYmUob2JzZXJ2YWJsZSQpO1xuICB9XG5cbiAgZ2V0IGhhc0JhY2tkcm9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3VHJpZ2dlciA9PT0gJ2NsaWNrJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG59XG4iXX0=
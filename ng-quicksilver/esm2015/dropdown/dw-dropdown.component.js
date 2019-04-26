/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, mapTo, takeUntil } from 'rxjs/operators';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DEFAULT_DROPDOWN_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { DwMenuDirective } from '../menu/dw-menu.directive';
import { DwDropDownDirective } from './dw-dropdown.directive';
export class DwDropDownComponent {
    /**
     * @param {?} renderer
     * @param {?} changeDetector
     */
    constructor(renderer, changeDetector) {
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
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        this.$subOpen = new BehaviorSubject(false);
        this.$visibleChange = new Subject();
        this.dwTrigger = 'hover';
        this.dwVisibleChange = new EventEmitter();
        this.onVisibleChange = (visible) => {
            if (visible) {
                this.setTriggerWidth();
            }
            if (this.dwVisible !== visible) {
                this.dwVisible = visible;
                this.dwVisibleChange.emit(this.dwVisible);
            }
            this.changeDetector.markForCheck();
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwClickHide(value) {
        this._clickHide = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwClickHide() {
        return this._clickHide;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
        if (this._disabled) {
            this.renderer.setAttribute(this.dwOrigin.elementRef.nativeElement, 'disabled', '');
        }
        else {
            this.renderer.removeAttribute(this.dwOrigin.elementRef.nativeElement, 'disabled');
        }
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwVisible(value) {
        this._visible = toBoolean(value);
        /** handle dwVisible change with mouse event **/
        this.$visibleChange.next(this._visible);
    }
    /**
     * @return {?}
     */
    get dwVisible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPlacement(value) {
        this.placement = value;
        this.dropDownPosition = (this.dwPlacement.indexOf('top') !== -1) ? 'top' : 'bottom';
        this.positions.unshift(/** @type {?} */ (POSITION_MAP[this.placement]));
    }
    /**
     * @return {?}
     */
    get dwPlacement() {
        return this.placement;
    }
    /**
     * @return {?}
     */
    onClickEvent() {
        if (this.dwTrigger === 'click') {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onMouseEnterEvent() {
        if (this.dwTrigger === 'hover') {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onMouseLeaveEvent() {
        if (this.dwTrigger === 'hover') {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.$visibleChange.next(false);
    }
    /**
     * @return {?}
     */
    show() {
        this.$visibleChange.next(true);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        this.triggerWidth = this.dwOrigin.elementRef.nativeElement.getBoundingClientRect().width;
        /** should remove after https://github.com/angular/material2/pull/8765 merged **/
        if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
            this.cdkOverlay.overlayRef.updateSize({
                minWidth: this.triggerWidth
            });
        }
    }
    /**
     * @param {?} observable$
     * @return {?}
     */
    startSubscribe(observable$) {
        /** @type {?} */
        let $pre = observable$;
        if (this.dwClickHide && this.dwMenu) {
            /** @type {?} */
            const $menuItemClick = this.dwMenu.dwClick.asObservable().pipe(mapTo(false));
            $pre = merge($pre, $menuItemClick);
        }
        /** @type {?} */
        const final$ = combineLatest($pre, this.$subOpen).pipe(map(value => value[0] || value[1]), debounceTime(50), distinctUntilChanged());
        final$.pipe(takeUntil(this.unsubscribe$)).subscribe(this.onVisibleChange);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.dwMenu) {
            this.dwMenu.dwInDropDown = true;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let mouse$;
        if (this.dwTrigger === 'hover') {
            /** @type {?} */
            const mouseEnterOrigin$ = this.dwOrigin.$mouseenter.pipe(mapTo(true));
            /** @type {?} */
            const mouseLeaveOrigin$ = this.dwOrigin.$mouseleave.pipe(mapTo(false));
            mouse$ = merge(mouseLeaveOrigin$, mouseEnterOrigin$);
        }
        if (this.dwTrigger === 'click') {
            mouse$ = this.dwOrigin.$click.pipe(mapTo(true));
        }
        /** @type {?} */
        const observable$ = merge(this.$visibleChange, mouse$);
        this.startSubscribe(observable$);
    }
    /**
     * @return {?}
     */
    get hasBackdrop() {
        return this.dwTrigger === 'click';
    }
}
DwDropDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-dropdown',
                preserveWhitespaces: false,
                animations: [
                    dropDownAnimation
                ],
                template: "<div>\n  <ng-content select=\"[dw-dropdown]\"></ng-content>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"dwOrigin\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"dwVisible\">\n  <div\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+dwPlacement}}\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <div [class.ant-table-filter-dropdown]=\"hasFilterButton\">\n      <ng-content select=\"[dw-menu]\"></ng-content>\n      <ng-content select=\".ant-table-filter-dropdown-btns\"></ng-content>\n    </div>\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                styles: [`
      :host {
        position: relative;
        display: inline-block;
      }

      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
DwDropDownComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9kdy1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBMEQsTUFBTSxzQkFBc0IsQ0FBQztBQUNuSCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQThCOUQsTUFBTTs7Ozs7SUEwSkosWUFBb0IsUUFBbUIsRUFBWSxjQUFpQztRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVksbUJBQWMsR0FBZCxjQUFjLENBQW1COzBCQXpKL0QsSUFBSTt3QkFDTixLQUFLO3lCQUNKLEtBQUs7NEJBQ0YsSUFBSSxPQUFPLEVBQVE7K0JBRWYsS0FBSzs0QkFDakIsQ0FBQzt5QkFDUyxZQUFZO2dDQUNXLFFBQVE7eUJBQ2xCLENBQUUsR0FBRywwQkFBMEIsQ0FBRTt3QkFDNUQsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDOzhCQUM3QixJQUFJLE9BQU8sRUFBVzt5QkFHQyxPQUFPOytCQUNJLElBQUksWUFBWSxFQUFFOytCQWtHbkQsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDckMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7S0FnQ0E7Ozs7O0lBeElELElBQ0ksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ25GO0tBQ0Y7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFFakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQWtCO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxtQkFBQyxZQUFZLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBNEIsRUFBQyxDQUFDO0tBQ2xGOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7OztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUF3QztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7S0FDekQ7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7O1FBRXpGLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRTtZQUNqRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWTthQUM1QixDQUFDLENBQUM7U0FDSjtLQUNGOzs7OztJQUVELGNBQWMsQ0FBQyxXQUFnQzs7UUFDN0MsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUNuQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDcEM7O1FBQ0QsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsSUFBSSxLQUFLLENBQUUsQ0FBQyxDQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQ3pJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDM0U7Ozs7SUFhRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsZUFBZTs7UUFDYixJQUFJLE1BQU0sQ0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTs7WUFDOUIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBQ3RFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7WUFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNqRDs7UUFDRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQztLQUNuQzs7O1lBbExGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsYUFBYTtnQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFXO29CQUNuQixpQkFBaUI7aUJBQ2xCO2dCQUNELDQ4QkFBbUQ7eUJBRWpEOzs7Ozs7Ozs7Ozs7OztLQWNDO2FBRUo7Ozs7WUF4Q0MsU0FBUztZQVJULGlCQUFpQjs7OzhCQXdEaEIsS0FBSzt1QkFPTCxZQUFZLFNBQUMsbUJBQW1CO3FCQUNoQyxZQUFZLFNBQUMsZUFBZTt3QkFDNUIsS0FBSzs4QkFDTCxNQUFNO3lCQUNOLFNBQVMsU0FBQyxtQkFBbUI7MEJBRTdCLEtBQUs7eUJBU0wsS0FBSzt3QkFjTCxLQUFLOzBCQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIG1hcFRvLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUywgUE9TSVRJT05fTUFQIH0gZnJvbSAnLi4vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3TWVudURpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvZHctbWVudS5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBEd0Ryb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kdy1kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5leHBvcnQgdHlwZSBEd1BsYWNlbWVudCA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1kcm9wZG93bicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgLmFudC1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRHdEcm9wRG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY2xpY2tIaWRlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfdmlzaWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQElucHV0KCkgaGFzRmlsdGVyQnV0dG9uID0gZmFsc2U7XG4gIHRyaWdnZXJXaWR0aCA9IDA7XG4gIHBsYWNlbWVudDogRHdQbGFjZW1lbnQgPSAnYm90dG9tTGVmdCc7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsgLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgXTtcbiAgJHN1Yk9wZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgJHZpc2libGVDaGFuZ2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBAQ29udGVudENoaWxkKER3RHJvcERvd25EaXJlY3RpdmUpIGR3T3JpZ2luOiBEd0Ryb3BEb3duRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKER3TWVudURpcmVjdGl2ZSkgZHdNZW51OiBEd01lbnVEaXJlY3RpdmU7XG4gIEBJbnB1dCgpIGR3VHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgPSAnaG92ZXInO1xuICBAT3V0cHV0KCkgZHdWaXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoQ2RrQ29ubmVjdGVkT3ZlcmxheSkgY2RrT3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdDbGlja0hpZGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbGlja0hpZGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q2xpY2tIaWRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbGlja0hpZGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZHdPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZHdPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdWaXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmlzaWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgLyoqIGhhbmRsZSBkd1Zpc2libGUgY2hhbmdlIHdpdGggbW91c2UgZXZlbnQgKiovXG4gICAgdGhpcy4kdmlzaWJsZUNoYW5nZS5uZXh0KHRoaXMuX3Zpc2libGUpO1xuICB9XG5cbiAgZ2V0IGR3VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BsYWNlbWVudCh2YWx1ZTogRHdQbGFjZW1lbnQpIHtcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9ICh0aGlzLmR3UGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpICE9PSAtMSkgPyAndG9wJyA6ICdib3R0b20nO1xuICAgIHRoaXMucG9zaXRpb25zLnVuc2hpZnQoUE9TSVRJT05fTUFQWyB0aGlzLnBsYWNlbWVudCBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIpO1xuICB9XG5cbiAgZ2V0IGR3UGxhY2VtZW50KCk6IER3UGxhY2VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5wbGFjZW1lbnQ7XG4gIH1cblxuICBvbkNsaWNrRXZlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdUcmlnZ2VyID09PSAnY2xpY2snKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRW50ZXJFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd1RyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VMZWF2ZUV2ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3VHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLiR2aXNpYmxlQ2hhbmdlLm5leHQoZmFsc2UpO1xuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLiR2aXNpYmxlQ2hhbmdlLm5leHQodHJ1ZSk7XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xuICB9XG5cbiAgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy5kd09yaWdpbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgLyoqIHNob3VsZCByZW1vdmUgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3B1bGwvODc2NSBtZXJnZWQgKiovXG4gICAgaWYgKHRoaXMuY2RrT3ZlcmxheSAmJiB0aGlzLmNka092ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgIG1pbldpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRTdWJzY3JpYmUob2JzZXJ2YWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBsZXQgJHByZSA9IG9ic2VydmFibGUkO1xuICAgIGlmICh0aGlzLmR3Q2xpY2tIaWRlICYmIHRoaXMuZHdNZW51KSB7XG4gICAgICBjb25zdCAkbWVudUl0ZW1DbGljayA9IHRoaXMuZHdNZW51LmR3Q2xpY2suYXNPYnNlcnZhYmxlKCkucGlwZShtYXBUbyhmYWxzZSkpO1xuICAgICAgJHByZSA9IG1lcmdlKCRwcmUsICRtZW51SXRlbUNsaWNrKTtcbiAgICB9XG4gICAgY29uc3QgZmluYWwkID0gY29tYmluZUxhdGVzdCgkcHJlLCB0aGlzLiRzdWJPcGVuKS5waXBlKG1hcCh2YWx1ZSA9PiB2YWx1ZVsgMCBdIHx8IHZhbHVlWyAxIF0pLCBkZWJvdW5jZVRpbWUoNTApLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgICBmaW5hbCQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUodGhpcy5vblZpc2libGVDaGFuZ2UpO1xuICB9XG5cbiAgb25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHdWaXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLmR3VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLmR3VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMuZHdWaXNpYmxlKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3TWVudSkge1xuICAgICAgdGhpcy5kd01lbnUuZHdJbkRyb3BEb3duID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgbW91c2UkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGlmICh0aGlzLmR3VHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgY29uc3QgbW91c2VFbnRlck9yaWdpbiQgPSB0aGlzLmR3T3JpZ2luLiRtb3VzZWVudGVyLnBpcGUobWFwVG8odHJ1ZSkpO1xuICAgICAgY29uc3QgbW91c2VMZWF2ZU9yaWdpbiQgPSB0aGlzLmR3T3JpZ2luLiRtb3VzZWxlYXZlLnBpcGUobWFwVG8oZmFsc2UpKTtcbiAgICAgIG1vdXNlJCA9IG1lcmdlKG1vdXNlTGVhdmVPcmlnaW4kLCBtb3VzZUVudGVyT3JpZ2luJCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmR3VHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgbW91c2UkID0gdGhpcy5kd09yaWdpbi4kY2xpY2sucGlwZShtYXBUbyh0cnVlKSk7XG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmFibGUkID0gbWVyZ2UodGhpcy4kdmlzaWJsZUNoYW5nZSwgbW91c2UkKTtcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKG9ic2VydmFibGUkKTtcbiAgfVxuXG4gIGdldCBoYXNCYWNrZHJvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1RyaWdnZXIgPT09ICdjbGljayc7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class DwToolTipComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = [...DEFAULT_4_POSITIONS];
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.dwVisibleChange = new EventEmitter();
        this.dwOverlayClassName = '';
        this.dwOverlayStyle = {};
        this.dwMouseEnterDelay = 0.15;
        this.dwMouseLeaveDelay = 0.1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwContent(value) {
        this.isContentString = !(value instanceof TemplateRef);
        this._content = value;
    }
    /**
     * @return {?}
     */
    get dwContent() {
        return this._content;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get dwTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwVisible(value) {
        /** @type {?} */
        const visible = toBoolean(value);
        if (this.visibleSource.value !== visible) {
            this.visibleSource.next(visible);
            this.dwVisibleChange.emit(visible);
        }
    }
    /**
     * @return {?}
     */
    get dwVisible() {
        return this.visibleSource.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTrigger(value) {
        this._trigger = value;
        this._hasBackdrop = this._trigger === 'click';
    }
    /**
     * @return {?}
     */
    get dwTrigger() {
        return this._trigger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPlacement(value) {
        if (value !== this._placement) {
            this._placement = value;
            this._positions.unshift(/** @type {?} */ (POSITION_MAP[this.dwPlacement]));
        }
    }
    /**
     * @return {?}
     */
    get dwPlacement() {
        return this._placement;
    }
    /**
     * @return {?}
     */
    updatePosition() {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        for (const key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.dwPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.isContentEmpty()) {
            this.dwVisible = true;
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.dwVisible = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    _afterVisibilityAnimation(e) {
        if (e.toState === 'false' && !this.dwVisible) {
            this.dwVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.dwVisible) {
            this.dwVisibleChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this._classMap = {
            [this.dwOverlayClassName]: true,
            [`${this._prefix}-${this._placement}`]: true
        };
    }
    /**
     * @param {?} origin
     * @return {?}
     */
    setOverlayOrigin(origin) {
        this.overlayOrigin = origin;
    }
    /**
     * @return {?}
     */
    isContentEmpty() {
        return this.isTitleString ? (this.dwTitle === '' || !isNotNil(this.dwTitle)) : false; // Pity, can't detect whether dwTemplate is empty due to can't get it's content before shown up
    }
}
DwToolTipComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-tooltip',
                animations: [fadeAnimation],
                template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-tooltip\" [ngClass]=\"_classMap\" [ngStyle]=\"dwOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow\"></div>\n      <div class=\"ant-tooltip-inner\">\n        <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n        <ng-template #titleTemplate>\n          <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                preserveWhitespaces: false,
                styles: [`
    .ant-tooltip {
      position: relative;
    }
  `]
            }] }
];
/** @nocollapse */
DwToolTipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DwToolTipComponent.propDecorators = {
    _title: [{ type: ContentChild, args: ['dwTemplate',] }],
    overlay: [{ type: ViewChild, args: ['overlay',] }],
    dwVisibleChange: [{ type: Output }],
    dwOverlayClassName: [{ type: Input }],
    dwOverlayStyle: [{ type: Input }],
    dwMouseEnterDelay: [{ type: Input }],
    dwMouseLeaveDelay: [{ type: Input }],
    dwContent: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwVisible: [{ type: Input }],
    dwTrigger: [{ type: Input }],
    dwPlacement: [{ type: Input }]
};
function DwToolTipComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwToolTipComponent.prototype._hasBackdrop;
    /** @type {?} */
    DwToolTipComponent.prototype._prefix;
    /** @type {?} */
    DwToolTipComponent.prototype._positions;
    /** @type {?} */
    DwToolTipComponent.prototype._classMap;
    /** @type {?} */
    DwToolTipComponent.prototype._placement;
    /** @type {?} */
    DwToolTipComponent.prototype._trigger;
    /** @type {?} */
    DwToolTipComponent.prototype._content;
    /** @type {?} */
    DwToolTipComponent.prototype.overlayOrigin;
    /** @type {?} */
    DwToolTipComponent.prototype.isContentString;
    /** @type {?} */
    DwToolTipComponent.prototype.isTitleString;
    /** @type {?} */
    DwToolTipComponent.prototype.visibleSource;
    /** @type {?} */
    DwToolTipComponent.prototype.visible$;
    /** @type {?} */
    DwToolTipComponent.prototype._title;
    /** @type {?} */
    DwToolTipComponent.prototype.overlay;
    /** @type {?} */
    DwToolTipComponent.prototype.dwVisibleChange;
    /** @type {?} */
    DwToolTipComponent.prototype.dwOverlayClassName;
    /** @type {?} */
    DwToolTipComponent.prototype.dwOverlayStyle;
    /** @type {?} */
    DwToolTipComponent.prototype.dwMouseEnterDelay;
    /** @type {?} */
    DwToolTipComponent.prototype.dwMouseLeaveDelay;
    /** @type {?} */
    DwToolTipComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRvb2x0aXAvZHctdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFDTCxtQkFBbUIsRUFJcEIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWFqRCxNQUFNOzs7O0lBNkhKLFlBQW1CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzRCQTVIMUIsS0FBSzt1QkFDVix1QkFBdUI7MEJBQ00sQ0FBRSxHQUFHLG1CQUFtQixDQUFFO3lCQUNyRCxFQUFFOzBCQUNELEtBQUs7d0JBQ1AsT0FBTzs2QkFLRixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7d0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFOytCQUdkLElBQUksWUFBWSxFQUFFO2tDQUV2QyxFQUFFOzhCQUN1QixFQUFFO2lDQUM1QixJQUFJO2lDQUNKLEdBQUc7S0EwRy9COzs7OztJQXpHRCxJQUNJLFNBQVMsQ0FBQyxLQUFpQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFL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QUMsT0FBTyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLENBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFFLEVBQWUsSUFBSTtZQUM5QyxDQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUUsRUFBRSxJQUFJO1NBQy9DLENBQUM7S0FDSDs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxNQUF3QjtRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztLQUM3Qjs7OztJQUtELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUN0Rjs7O1lBN0lGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsWUFBWTtnQkFDakMsVUFBVSxFQUFXLENBQUUsYUFBYSxDQUFFO2dCQUN0Qyx1L0JBQWtEO2dCQUNsRCxtQkFBbUIsRUFBRSxLQUFLO3lCQUNIOzs7O0dBSXRCO2FBQ0Y7Ozs7WUExQkMsaUJBQWlCOzs7cUJBd0NoQixZQUFZLFNBQUMsWUFBWTtzQkFDekIsU0FBUyxTQUFDLFNBQVM7OEJBQ25CLE1BQU07aUNBRU4sS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQVVMLEtBQUs7d0JBVUwsS0FBSzt3QkFhTCxLQUFLOzBCQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBbmltYXRpb25FdmVudFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZmFkZS1hbmltYXRpb25zJztcbmltcG9ydCB7IERFRkFVTFRfNF9QT1NJVElPTlMsIFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctdG9vbHRpcCcsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgZmFkZUFuaW1hdGlvbiBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIC5hbnQtdG9vbHRpcCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdUb29sVGlwQ29tcG9uZW50IHtcbiAgX2hhc0JhY2tkcm9wID0gZmFsc2U7XG4gIF9wcmVmaXggPSAnYW50LXRvb2x0aXAtcGxhY2VtZW50JztcbiAgX3Bvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyAuLi5ERUZBVUxUXzRfUE9TSVRJT05TIF07XG4gIF9jbGFzc01hcCA9IHt9O1xuICBfcGxhY2VtZW50ID0gJ3RvcCc7XG4gIF90cmlnZ2VyID0gJ2hvdmVyJztcbiAgX2NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBvdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBpc0NvbnRlbnRTdHJpbmc6IGJvb2xlYW47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIHZpc2libGVTb3VyY2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgdmlzaWJsZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnZpc2libGVTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIEBDb250ZW50Q2hpbGQoJ2R3VGVtcGxhdGUnKSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAVmlld0NoaWxkKCdvdmVybGF5Jykgb3ZlcmxheTogQ2RrQ29ubmVjdGVkT3ZlcmxheTtcbiAgQE91dHB1dCgpIGR3VmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIGR3T3ZlcmxheUNsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBkd092ZXJsYXlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9ID0ge307XG4gIEBJbnB1dCgpIGR3TW91c2VFbnRlckRlbGF5ID0gMC4xNTsgLy8gVW5pdDogc2Vjb25kXG4gIEBJbnB1dCgpIGR3TW91c2VMZWF2ZURlbGF5ID0gMC4xOyAvLyBVbml0OiBzZWNvbmRcbiAgQElucHV0KClcbiAgc2V0IGR3Q29udGVudCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQ29udGVudFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3Q29udGVudCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLnZpc2libGVTb3VyY2UudmFsdWUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMudmlzaWJsZVNvdXJjZS5uZXh0KHZpc2libGUpO1xuICAgICAgdGhpcy5kd1Zpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVTb3VyY2UudmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUcmlnZ2VyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gICAgdGhpcy5faGFzQmFja2Ryb3AgPSB0aGlzLl90cmlnZ2VyID09PSAnY2xpY2snO1xuICB9XG5cbiAgZ2V0IGR3VHJpZ2dlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90cmlnZ2VyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3BsYWNlbWVudCkge1xuICAgICAgdGhpcy5fcGxhY2VtZW50ID0gdmFsdWU7XG4gICAgICB0aGlzLl9wb3NpdGlvbnMudW5zaGlmdChQT1NJVElPTl9NQVBbIHRoaXMuZHdQbGFjZW1lbnQgXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdQbGFjZW1lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2VtZW50O1xuICB9XG5cbiAgLy8gTWFudWFsbHkgZm9yY2UgdXBkYXRpbmcgY3VycmVudCBvdmVybGF5J3MgcG9zaXRpb25cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKCRldmVudDogQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gUE9TSVRJT05fTUFQKSB7XG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSA9PT0gSlNPTi5zdHJpbmdpZnkoUE9TSVRJT05fTUFQWyBrZXkgXSkpIHtcbiAgICAgICAgdGhpcy5kd1BsYWNlbWVudCA9IGtleTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICAvKiogVE9ETyBtYXkgY2F1c2UgcGVyZm9ybWFuY2UgcHJvYmxlbSAqL1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ29udGVudEVtcHR5KCkpIHtcbiAgICAgIHRoaXMuZHdWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuZHdWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICBfYWZ0ZXJWaXNpYmlsaXR5QW5pbWF0aW9uKGU6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ2ZhbHNlJyAmJiAhdGhpcy5kd1Zpc2libGUpIHtcbiAgICAgIHRoaXMuZHdWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoZS50b1N0YXRlID09PSAndHJ1ZScgJiYgdGhpcy5kd1Zpc2libGUpIHtcbiAgICAgIHRoaXMuZHdWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMuZHdPdmVybGF5Q2xhc3NOYW1lIF0gICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLl9wcmVmaXh9LSR7dGhpcy5fcGxhY2VtZW50fWAgXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzZXRPdmVybGF5T3JpZ2luKG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbik6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheU9yaWdpbiA9IG9yaWdpbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBpc0NvbnRlbnRFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1RpdGxlU3RyaW5nID8gKHRoaXMuZHdUaXRsZSA9PT0gJycgfHwgIWlzTm90TmlsKHRoaXMuZHdUaXRsZSkpIDogZmFsc2U7IC8vIFBpdHksIGNhbid0IGRldGVjdCB3aGV0aGVyIGR3VGVtcGxhdGUgaXMgZW1wdHkgZHVlIHRvIGNhbid0IGdldCBpdCdzIGNvbnRlbnQgYmVmb3JlIHNob3duIHVwXG4gIH1cbn1cbiJdfQ==
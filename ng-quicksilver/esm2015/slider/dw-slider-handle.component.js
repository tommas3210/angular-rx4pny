/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
import { DwSliderComponent } from './dw-slider.component';
export class DwSliderHandleComponent {
    /**
     * @param {?} _slider
     */
    constructor(_slider) {
        this._slider = _slider;
        this.style = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwActive(value) {
        /** @type {?} */
        const show = toBoolean(value);
        if (this.tooltip) {
            if (show) {
                this.tooltip.show();
            }
            else {
                this.tooltip.hide();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["dwOffset"]) {
            this._updateStyle();
        }
        if (changes["dwValue"]) {
            this._updateTooltipTitle(); // [For tooltip]
            this._updateTooltipPosition(); // [For tooltip]
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseEnter($event) {
        if (!this._slider.isDragging) {
            this.dwActive = true;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onMouseLeave($event) {
        if (!this._slider.isDragging) {
            this.dwActive = false;
        }
    }
    /**
     * @return {?}
     */
    _updateTooltipTitle() {
        // [For tooltip]
        this.tooltipTitle = this.dwTipFormatter ? this.dwTipFormatter(this.dwValue) : `${this.dwValue}`;
    }
    /**
     * @return {?}
     */
    _updateTooltipPosition() {
        // [For tooltip]
        if (this.tooltip) {
            window.setTimeout(() => this.tooltip.updatePosition(), 0); // MAY use ngAfterViewChecked? but this will be called so many times.
        }
    }
    /**
     * @return {?}
     */
    _updateStyle() {
        this.style[this.dwVertical ? 'bottom' : 'left'] = `${this.dwOffset}%`;
    }
}
DwSliderHandleComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-slider-handle',
                preserveWhitespaces: false,
                template: "<dw-tooltip *ngIf=\"dwTipFormatter !== null\" #tooltip [dwTitle]=\"tooltipTitle\" [dwTrigger]=\"null\">\n  <div dw-tooltip [class]=\"dwClassName\" [ngStyle]=\"style\"></div>\n</dw-tooltip>\n<div *ngIf=\"dwTipFormatter === null\" [class]=\"dwClassName\" [ngStyle]=\"style\"></div>"
            }] }
];
/** @nocollapse */
DwSliderHandleComponent.ctorParameters = () => [
    { type: DwSliderComponent }
];
DwSliderHandleComponent.propDecorators = {
    dwClassName: [{ type: Input }],
    dwVertical: [{ type: Input }],
    dwOffset: [{ type: Input }],
    dwValue: [{ type: Input }],
    dwTipFormatter: [{ type: Input }],
    dwActive: [{ type: Input }],
    tooltip: [{ type: ViewChild, args: ['tooltip',] }],
    onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
function DwSliderHandleComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSliderHandleComponent.prototype.dwClassName;
    /** @type {?} */
    DwSliderHandleComponent.prototype.dwVertical;
    /** @type {?} */
    DwSliderHandleComponent.prototype.dwOffset;
    /** @type {?} */
    DwSliderHandleComponent.prototype.dwValue;
    /** @type {?} */
    DwSliderHandleComponent.prototype.dwTipFormatter;
    /** @type {?} */
    DwSliderHandleComponent.prototype.tooltip;
    /** @type {?} */
    DwSliderHandleComponent.prototype.tooltipTitle;
    /** @type {?} */
    DwSliderHandleComponent.prototype.style;
    /** @type {?} */
    DwSliderHandleComponent.prototype._slider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNsaWRlci9kdy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUE0QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBTzFELE1BQU07Ozs7SUF3QkosWUFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7cUJBRjlCLEVBQUU7S0FHakI7Ozs7O0lBakJELElBQWEsUUFBUSxDQUFDLEtBQWM7O1FBQ2xDLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1NBQ0Y7S0FDRjs7Ozs7SUFVRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGNBQVc7WUFDcEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxPQUFPLGFBQVU7WUFDbkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7S0FDRjs7Ozs7SUFJRCxZQUFZLENBQUMsTUFBa0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7O0lBR0QsWUFBWSxDQUFDLE1BQWtCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNGOzs7O0lBRU8sbUJBQW1COztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7SUFHMUYsc0JBQXNCOztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNEOzs7OztJQUdLLFlBQVk7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDOzs7O1lBcEUzRSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGtCQUFrQjtnQkFDdkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbVNBQXdEO2FBQ3pEOzs7O1lBTlEsaUJBQWlCOzs7MEJBVXZCLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQVlMLFNBQVMsU0FBQyxTQUFTOzJCQWtCbkIsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTsyQkFPdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdUb29sVGlwQ29tcG9uZW50IH0gZnJvbSAnLi4vdG9vbHRpcC9kdy10b29sdGlwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IER3U2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1zbGlkZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zbGlkZXItaGFuZGxlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXNsaWRlci1oYW5kbGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3U2xpZGVySGFuZGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBkd0NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkd1ZlcnRpY2FsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3T2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGR3VmFsdWU6IG51bWJlcjsgLy8gW0ZvciB0b29sdGlwXVxuICBASW5wdXQoKSBkd1RpcEZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZzsgLy8gW0ZvciB0b29sdGlwXVxuICBASW5wdXQoKSBzZXQgZHdBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHsgLy8gW0ZvciB0b29sdGlwXVxuICAgIGNvbnN0IHNob3cgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIGlmIChzaG93KSB7XG4gICAgICAgIHRoaXMudG9vbHRpcC5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvb2x0aXAuaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIExvY2Fsc1xuICBAVmlld0NoaWxkKCd0b29sdGlwJykgdG9vbHRpcDogRHdUb29sVGlwQ29tcG9uZW50OyAvLyBbRm9yIHRvb2x0aXBdXG4gIHRvb2x0aXBUaXRsZTogc3RyaW5nOyAvLyBbRm9yIHRvb2x0aXBdXG4gIHN0eWxlOiBvYmplY3QgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zbGlkZXI6IER3U2xpZGVyQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZHdPZmZzZXQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmR3VmFsdWUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVRvb2x0aXBUaXRsZSgpOyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgICB0aGlzLl91cGRhdGVUb29sdGlwUG9zaXRpb24oKTsgLy8gW0ZvciB0b29sdGlwXVxuICAgIH1cbiAgfVxuXG4gIC8vIEhvdmVyIHRvIHRvZ2dsZSB0b29sdGlwIHdoZW4gbm90IGRyYWdnaW5nXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXG4gIG9uTW91c2VFbnRlcigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3NsaWRlci5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLmR3QWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyAnJGV2ZW50JyBdKVxuICBvbk1vdXNlTGVhdmUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zbGlkZXIuaXNEcmFnZ2luZykge1xuICAgICAgdGhpcy5kd0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVRvb2x0aXBUaXRsZSgpOiB2b2lkIHsgLy8gW0ZvciB0b29sdGlwXVxuICAgIHRoaXMudG9vbHRpcFRpdGxlID0gdGhpcy5kd1RpcEZvcm1hdHRlciA/IHRoaXMuZHdUaXBGb3JtYXR0ZXIodGhpcy5kd1ZhbHVlKSA6IGAke3RoaXMuZHdWYWx1ZX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVG9vbHRpcFBvc2l0aW9uKCk6IHZvaWQgeyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy50b29sdGlwLnVwZGF0ZVBvc2l0aW9uKCksIDApOyAvLyBNQVkgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZD8gYnV0IHRoaXMgd2lsbCBiZSBjYWxsZWQgc28gbWFueSB0aW1lcy5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0eWxlWyB0aGlzLmR3VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0JyBdID0gYCR7dGhpcy5kd09mZnNldH0lYDtcbiAgfVxufVxuIl19
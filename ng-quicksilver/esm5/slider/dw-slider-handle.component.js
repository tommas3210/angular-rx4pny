/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
import { DwSliderComponent } from './dw-slider.component';
var DwSliderHandleComponent = /** @class */ (function () {
    function DwSliderHandleComponent(_slider) {
        this._slider = _slider;
        this.style = {};
    }
    Object.defineProperty(DwSliderHandleComponent.prototype, "dwActive", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var show = toBoolean(value);
            if (this.tooltip) {
                if (show) {
                    this.tooltip.show();
                }
                else {
                    this.tooltip.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DwSliderHandleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["dwOffset"]) {
            this._updateStyle();
        }
        if (changes["dwValue"]) {
            this._updateTooltipTitle(); // [For tooltip]
            this._updateTooltipPosition(); // [For tooltip]
        }
    };
    // Hover to toggle tooltip when not dragging
    /**
     * @param {?} $event
     * @return {?}
     */
    DwSliderHandleComponent.prototype.onMouseEnter = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._slider.isDragging) {
            this.dwActive = true;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DwSliderHandleComponent.prototype.onMouseLeave = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._slider.isDragging) {
            this.dwActive = false;
        }
    };
    /**
     * @return {?}
     */
    DwSliderHandleComponent.prototype._updateTooltipTitle = /**
     * @return {?}
     */
    function () {
        // [For tooltip]
        this.tooltipTitle = this.dwTipFormatter ? this.dwTipFormatter(this.dwValue) : "" + this.dwValue;
    };
    /**
     * @return {?}
     */
    DwSliderHandleComponent.prototype._updateTooltipPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // [For tooltip]
        if (this.tooltip) {
            window.setTimeout(function () { return _this.tooltip.updatePosition(); }, 0); // MAY use ngAfterViewChecked? but this will be called so many times.
        }
    };
    /**
     * @return {?}
     */
    DwSliderHandleComponent.prototype._updateStyle = /**
     * @return {?}
     */
    function () {
        this.style[this.dwVertical ? 'bottom' : 'left'] = this.dwOffset + "%";
    };
    DwSliderHandleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-slider-handle',
                    preserveWhitespaces: false,
                    template: "<dw-tooltip *ngIf=\"dwTipFormatter !== null\" #tooltip [dwTitle]=\"tooltipTitle\" [dwTrigger]=\"null\">\n  <div dw-tooltip [class]=\"dwClassName\" [ngStyle]=\"style\"></div>\n</dw-tooltip>\n<div *ngIf=\"dwTipFormatter === null\" [class]=\"dwClassName\" [ngStyle]=\"style\"></div>"
                }] }
    ];
    /** @nocollapse */
    DwSliderHandleComponent.ctorParameters = function () { return [
        { type: DwSliderComponent }
    ]; };
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
    return DwSliderHandleComponent;
}());
export { DwSliderHandleComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNsaWRlci9kdy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUE0QixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQStCeEQsaUNBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO3FCQUY5QixFQUFFO0tBR2pCO0lBakJELHNCQUFhLDZDQUFROzs7OztRQUFyQixVQUFzQixLQUFjOztZQUNsQyxJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7OztPQUFBOzs7OztJQVVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sY0FBVztZQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLE9BQU8sYUFBVTtZQUNuQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQjtLQUNGO0lBRUQsNENBQTRDOzs7OztJQUU1Qyw4Q0FBWTs7OztJQURaLFVBQ2EsTUFBa0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7O0lBR0QsOENBQVk7Ozs7SUFEWixVQUNhLE1BQWtCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNGOzs7O0lBRU8scURBQW1COzs7OztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLENBQUM7Ozs7O0lBRzFGLHdEQUFzQjs7Ozs7O1FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixNQUFNLENBQUMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUE3QixDQUE2QixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNEOzs7OztJQUdLLDhDQUFZOzs7O1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUUsR0FBTSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUM7OztnQkFwRTNFLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsa0JBQWtCO29CQUN2QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixtU0FBd0Q7aUJBQ3pEOzs7O2dCQU5RLGlCQUFpQjs7OzhCQVV2QixLQUFLOzZCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFZTCxTQUFTLFNBQUMsU0FBUzsrQkFrQm5CLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7K0JBT3ZDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7O2tDQXpEMUM7O1NBWWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd1Rvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL2R3LXRvb2x0aXAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRHdTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2R3LXNsaWRlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXNsaWRlci1oYW5kbGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc2xpZGVyLWhhbmRsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdTbGlkZXJIYW5kbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIGR3Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3VmVydGljYWw6IHN0cmluZztcbiAgQElucHV0KCkgZHdPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgZHdWYWx1ZTogbnVtYmVyOyAvLyBbRm9yIHRvb2x0aXBdXG4gIEBJbnB1dCgpIGR3VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nOyAvLyBbRm9yIHRvb2x0aXBdXG4gIEBJbnB1dCgpIHNldCBkd0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikgeyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgY29uc3Qgc2hvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMudG9vbHRpcCkge1xuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgdGhpcy50b29sdGlwLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9vbHRpcC5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTG9jYWxzXG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBEd1Rvb2xUaXBDb21wb25lbnQ7IC8vIFtGb3IgdG9vbHRpcF1cbiAgdG9vbHRpcFRpdGxlOiBzdHJpbmc7IC8vIFtGb3IgdG9vbHRpcF1cbiAgc3R5bGU6IG9iamVjdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NsaWRlcjogRHdTbGlkZXJDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kd09mZnNldCkge1xuICAgICAgdGhpcy5fdXBkYXRlU3R5bGUoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZHdWYWx1ZSkge1xuICAgICAgdGhpcy5fdXBkYXRlVG9vbHRpcFRpdGxlKCk7IC8vIFtGb3IgdG9vbHRpcF1cbiAgICAgIHRoaXMuX3VwZGF0ZVRvb2x0aXBQb3NpdGlvbigpOyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgfVxuICB9XG5cbiAgLy8gSG92ZXIgdG8gdG9nZ2xlIHRvb2x0aXAgd2hlbiBub3QgZHJhZ2dpbmdcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsgJyRldmVudCcgXSlcbiAgb25Nb3VzZUVudGVyKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fc2xpZGVyLmlzRHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZHdBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXG4gIG9uTW91c2VMZWF2ZSgkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3NsaWRlci5pc0RyYWdnaW5nKSB7XG4gICAgICB0aGlzLmR3QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVG9vbHRpcFRpdGxlKCk6IHZvaWQgeyAvLyBbRm9yIHRvb2x0aXBdXG4gICAgdGhpcy50b29sdGlwVGl0bGUgPSB0aGlzLmR3VGlwRm9ybWF0dGVyID8gdGhpcy5kd1RpcEZvcm1hdHRlcih0aGlzLmR3VmFsdWUpIDogYCR7dGhpcy5kd1ZhbHVlfWA7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUb29sdGlwUG9zaXRpb24oKTogdm9pZCB7IC8vIFtGb3IgdG9vbHRpcF1cbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnRvb2x0aXAudXBkYXRlUG9zaXRpb24oKSwgMCk7IC8vIE1BWSB1c2UgbmdBZnRlclZpZXdDaGVja2VkPyBidXQgdGhpcyB3aWxsIGJlIGNhbGxlZCBzbyBtYW55IHRpbWVzLlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVN0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMuc3R5bGVbIHRoaXMuZHdWZXJ0aWNhbCA/ICdib3R0b20nIDogJ2xlZnQnIF0gPSBgJHt0aGlzLmR3T2Zmc2V0fSVgO1xuICB9XG59XG4iXX0=
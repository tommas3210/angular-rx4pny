/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
export class DwTimelineItemComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._color = 'blue';
        this._isLast = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isLast(value) {
        this._isLast = value;
        if (this.isLast) {
            this.renderer.addClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
        }
        else {
            this.renderer.removeClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
        }
    }
    /**
     * @return {?}
     */
    get isLast() {
        return this._isLast;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDot(value) {
        this.isDotString = !(value instanceof TemplateRef);
        this._dot = value;
    }
    /**
     * @return {?}
     */
    get dwDot() {
        return this._dot;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set dwColor(color) {
        this._color = color;
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get dwColor() {
        return this._color;
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        /** @type {?} */
        const defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this._color) === -1) {
            this.renderer.setStyle(circle, 'border-color', this._color);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
        this.classMap = {
            ['ant-timeline-item-head-green']: this.dwColor === 'green',
            ['ant-timeline-item-head-red']: this.dwColor === 'red',
            ['ant-timeline-item-head-blue']: this.dwColor === 'blue'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
}
DwTimelineItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-timeline-item',
                preserveWhitespaces: false,
                template: "<li class=\"ant-timeline-item\" #liTemplate>\n  <div class=\"ant-timeline-item-tail\"></div>\n  <div\n    class=\"ant-timeline-item-head\"\n    [class.ant-timeline-item-head-custom]=\"dwDot\"\n    [ngClass]=\"classMap\">\n    <ng-container *ngIf=\"isDotString; else dotTemplate\">{{ dwDot }}</ng-container>\n    <ng-template #dotTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwDot\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-timeline-item-content\">\n    <ng-content></ng-content>\n  </div>\n</li>"
            }] }
];
/** @nocollapse */
DwTimelineItemComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DwTimelineItemComponent.propDecorators = {
    liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
    dwDot: [{ type: Input }],
    dwColor: [{ type: Input }]
};
function DwTimelineItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTimelineItemComponent.prototype._dot;
    /** @type {?} */
    DwTimelineItemComponent.prototype._color;
    /** @type {?} */
    DwTimelineItemComponent.prototype._isLast;
    /** @type {?} */
    DwTimelineItemComponent.prototype.liTemplate;
    /** @type {?} */
    DwTimelineItemComponent.prototype.isDotString;
    /** @type {?} */
    DwTimelineItemComponent.prototype.classMap;
    /** @type {?} */
    DwTimelineItemComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRpbWVsaW5lL2R3LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFPdkIsTUFBTTs7OztJQTBESixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3NCQXhEZCxNQUFNO3VCQUNiLEtBQUs7S0F3RHRCOzs7OztJQW5ERCxJQUFJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDcEY7S0FDRjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFFRCxJQUNJLEtBQUssQ0FBQyxLQUFpQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7SUFFRCxjQUFjOztRQUVaLE1BQU0sYUFBYSxHQUFHLENBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUUsQ0FBQzs7UUFDakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdEYsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLENBQUUsOEJBQThCLENBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU87WUFDNUQsQ0FBRSw0QkFBNEIsQ0FBRSxFQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSztZQUMxRCxDQUFFLDZCQUE2QixDQUFFLEVBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNO1NBQzVELENBQUM7S0FDSDs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7OztZQXBFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGtCQUFrQjtnQkFDdkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIseWhCQUF3RDthQUN6RDs7OztZQVRDLFNBQVM7Ozt5QkFjUixTQUFTLFNBQUMsWUFBWTtvQkFpQnRCLEtBQUs7c0JBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXRpbWVsaW5lLWl0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGltZWxpbmUtaXRlbS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kb3Q6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJ2JsdWUnO1xuICBwcml2YXRlIF9pc0xhc3QgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnbGlUZW1wbGF0ZScpIGxpVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIGlzRG90U3RyaW5nOiBib29sZWFuO1xuICBjbGFzc01hcDtcblxuICBzZXQgaXNMYXN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNMYXN0ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaXNMYXN0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGlUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LCAnYW50LXRpbWVsaW5lLWl0ZW0tbGFzdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGlUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LCAnYW50LXRpbWVsaW5lLWl0ZW0tbGFzdCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0xhc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTGFzdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RvdCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRG90U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9kb3QgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0RvdCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RvdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0NvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgLy8gU3VwcG9ydCBjdXN0b20gY29sb3JcbiAgICBjb25zdCBkZWZhdWx0Q29sb3JzID0gWyAnYmx1ZScsICdyZWQnLCAnZ3JlZW4nIF07XG4gICAgY29uc3QgY2lyY2xlID0gdGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10aW1lbGluZS1pdGVtLWhlYWQnKTtcbiAgICBpZiAoZGVmYXVsdENvbG9ycy5pbmRleE9mKHRoaXMuX2NvbG9yKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2lyY2xlLCAnYm9yZGVyLWNvbG9yJywgdGhpcy5fY29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicpO1xuICAgIH1cblxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbICdhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWdyZWVuJyBdOiB0aGlzLmR3Q29sb3IgPT09ICdncmVlbicsXG4gICAgICBbICdhbnQtdGltZWxpbmUtaXRlbS1oZWFkLXJlZCcgXSAgOiB0aGlzLmR3Q29sb3IgPT09ICdyZWQnLFxuICAgICAgWyAnYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlJyBdIDogdGhpcy5kd0NvbG9yID09PSAnYmx1ZSdcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxufVxuIl19
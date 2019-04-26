/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';
var DwTimelineItemComponent = /** @class */ (function () {
    function DwTimelineItemComponent(renderer) {
        this.renderer = renderer;
        this._color = 'blue';
        this._isLast = false;
    }
    Object.defineProperty(DwTimelineItemComponent.prototype, "isLast", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isLast;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isLast = value;
            if (this.isLast) {
                this.renderer.addClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
            }
            else {
                this.renderer.removeClass(this.liTemplate.nativeElement, 'ant-timeline-item-last');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTimelineItemComponent.prototype, "dwDot", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dot;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDotString = !(value instanceof TemplateRef);
            this._dot = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTimelineItemComponent.prototype, "dwColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this._color = color;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTimelineItemComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        var circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this._color) === -1) {
            this.renderer.setStyle(circle, 'border-color', this._color);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
        this.classMap = (_a = {},
            _a['ant-timeline-item-head-green'] = this.dwColor === 'green',
            _a['ant-timeline-item-head-red'] = this.dwColor === 'red',
            _a['ant-timeline-item-head-blue'] = this.dwColor === 'blue',
            _a);
    };
    /**
     * @return {?}
     */
    DwTimelineItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    DwTimelineItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-timeline-item',
                    preserveWhitespaces: false,
                    template: "<li class=\"ant-timeline-item\" #liTemplate>\n  <div class=\"ant-timeline-item-tail\"></div>\n  <div\n    class=\"ant-timeline-item-head\"\n    [class.ant-timeline-item-head-custom]=\"dwDot\"\n    [ngClass]=\"classMap\">\n    <ng-container *ngIf=\"isDotString; else dotTemplate\">{{ dwDot }}</ng-container>\n    <ng-template #dotTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwDot\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-timeline-item-content\">\n    <ng-content></ng-content>\n  </div>\n</li>"
                }] }
    ];
    /** @nocollapse */
    DwTimelineItemComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    DwTimelineItemComponent.propDecorators = {
        liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
        dwDot: [{ type: Input }],
        dwColor: [{ type: Input }]
    };
    return DwTimelineItemComponent;
}());
export { DwTimelineItemComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRpbWVsaW5lL2R3LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7O0lBaUVyQixpQ0FBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztzQkF4RGQsTUFBTTt1QkFDYixLQUFLO0tBd0R0QjtJQW5ERCxzQkFBSSwyQ0FBTTs7OztRQVNWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVhELFVBQVcsS0FBYztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQzthQUNqRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQ0ksMENBQUs7Ozs7UUFLVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNsQjs7Ozs7UUFSRCxVQUNVLEtBQWlDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjs7O09BQUE7SUFNRCxzQkFDSSw0Q0FBTzs7OztRQUtYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVJELFVBQ1ksS0FBYTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7OztPQUFBOzs7O0lBTUQsZ0RBQWM7OztJQUFkOzs7UUFFRSxJQUFNLGFBQWEsR0FBRyxDQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFFLENBQUM7O1FBQ2pELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3RGLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksQ0FBQyxRQUFRO1lBQ1gsR0FBRSw4QkFBOEIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU87WUFDNUQsR0FBRSw0QkFBNEIsSUFBTSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUs7WUFDMUQsR0FBRSw2QkFBNkIsSUFBSyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU07ZUFDNUQsQ0FBQztLQUNIOzs7O0lBS0QsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkFwRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxrQkFBa0I7b0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHloQkFBd0Q7aUJBQ3pEOzs7O2dCQVRDLFNBQVM7Ozs2QkFjUixTQUFTLFNBQUMsWUFBWTt3QkFpQnRCLEtBQUs7MEJBVUwsS0FBSzs7a0NBOUNSOztTQWVhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXRpbWVsaW5lLWl0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGltZWxpbmUtaXRlbS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdUaW1lbGluZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kb3Q6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9jb2xvcjogc3RyaW5nID0gJ2JsdWUnO1xuICBwcml2YXRlIF9pc0xhc3QgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnbGlUZW1wbGF0ZScpIGxpVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIGlzRG90U3RyaW5nOiBib29sZWFuO1xuICBjbGFzc01hcDtcblxuICBzZXQgaXNMYXN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNMYXN0ID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaXNMYXN0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGlUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LCAnYW50LXRpbWVsaW5lLWl0ZW0tbGFzdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGlUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LCAnYW50LXRpbWVsaW5lLWl0ZW0tbGFzdCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0xhc3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTGFzdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RvdCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRG90U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9kb3QgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0RvdCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RvdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0NvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgLy8gU3VwcG9ydCBjdXN0b20gY29sb3JcbiAgICBjb25zdCBkZWZhdWx0Q29sb3JzID0gWyAnYmx1ZScsICdyZWQnLCAnZ3JlZW4nIF07XG4gICAgY29uc3QgY2lyY2xlID0gdGhpcy5saVRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFudC10aW1lbGluZS1pdGVtLWhlYWQnKTtcbiAgICBpZiAoZGVmYXVsdENvbG9ycy5pbmRleE9mKHRoaXMuX2NvbG9yKSA9PT0gLTEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2lyY2xlLCAnYm9yZGVyLWNvbG9yJywgdGhpcy5fY29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicpO1xuICAgIH1cblxuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbICdhbnQtdGltZWxpbmUtaXRlbS1oZWFkLWdyZWVuJyBdOiB0aGlzLmR3Q29sb3IgPT09ICdncmVlbicsXG4gICAgICBbICdhbnQtdGltZWxpbmUtaXRlbS1oZWFkLXJlZCcgXSAgOiB0aGlzLmR3Q29sb3IgPT09ICdyZWQnLFxuICAgICAgWyAnYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1ibHVlJyBdIDogdGhpcy5kd0NvbG9yID09PSAnYmx1ZSdcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxufVxuIl19
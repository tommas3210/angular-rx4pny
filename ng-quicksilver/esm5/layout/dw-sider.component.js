/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Host, HostBinding, HostListener, Input, Optional, Output, TemplateRef, ViewChild } from '@angular/core';
import { DwMatchMediaService } from '../core/services/dw-match-media.service';
import { toBoolean } from '../core/util/convert';
import { DwLayoutComponent } from './dw-layout.component';
var DwSiderComponent = /** @class */ (function () {
    function DwSiderComponent(dwLayoutComponent, dwMatchMediaService) {
        this.dwLayoutComponent = dwLayoutComponent;
        this.dwMatchMediaService = dwMatchMediaService;
        this._collapsed = false;
        this._collapsible = false;
        this._reverseArrow = false;
        this.below = false;
        this.isInit = false;
        this.dimensionMap = {
            xs: '480px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1600px'
        };
        this.dwWidth = 200;
        this.dwCollapsedWidth = 80;
        this.dwCollapsedChange = new EventEmitter();
    }
    Object.defineProperty(DwSiderComponent.prototype, "dwReverseArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._reverseArrow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._reverseArrow = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSiderComponent.prototype, "dwTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSiderComponent.prototype, "dwCollapsible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collapsible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._collapsible = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSiderComponent.prototype, "dwCollapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collapsed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._collapsed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSiderComponent.prototype, "setZeroClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwCollapsed && (this.dwCollapsedWidth === 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSiderComponent.prototype, "setFlex", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwCollapsed) {
                return "0 0 " + this.dwCollapsedWidth + "px";
            }
            else {
                return "0 0 " + this.dwWidth + "px";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSiderComponent.prototype, "setWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwCollapsed) {
                return this.dwCollapsedWidth;
            }
            else {
                return this.dwWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    DwSiderComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.watchMatchMedia();
    };
    /**
     * @return {?}
     */
    DwSiderComponent.prototype.watchMatchMedia = /**
     * @return {?}
     */
    function () {
        if (this.dwBreakpoint) {
            /** @type {?} */
            var matchBelow = this.dwMatchMediaService.matchMedia("(max-width: " + this.dimensionMap[this.dwBreakpoint] + ")").matches;
            this.below = matchBelow;
            this.dwCollapsed = matchBelow;
            if (this.isInit) {
                this.dwCollapsedChange.emit(matchBelow);
            }
        }
    };
    /**
     * @return {?}
     */
    DwSiderComponent.prototype.toggleCollapse = /**
     * @return {?}
     */
    function () {
        this.dwCollapsed = !this.dwCollapsed;
        this.dwCollapsedChange.emit(this.dwCollapsed);
    };
    Object.defineProperty(DwSiderComponent.prototype, "isZeroTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwCollapsible && this.dwTrigger && (this.dwCollapsedWidth === 0) && ((this.dwBreakpoint && this.below) || (!this.dwBreakpoint));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSiderComponent.prototype, "isSiderTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwCollapsible && this.dwTrigger && (this.dwCollapsedWidth !== 0);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwSiderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.watchMatchMedia();
        if (this.dwLayoutComponent) {
            this.dwLayoutComponent.hasSider = true;
        }
    };
    /**
     * @return {?}
     */
    DwSiderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
    };
    DwSiderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-sider',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-layout-sider-children\">\n  <ng-content></ng-content>\n</div>\n<span class=\"ant-layout-sider-zero-width-trigger\" *ngIf=\"isZeroTrigger\" (click)=\"toggleCollapse()\">\n  <i class=\"anticon anticon-bars\"></i>\n</span>\n<div class=\"ant-layout-sider-trigger\" *ngIf=\"isSiderTrigger\" (click)=\"toggleCollapse()\" [style.width.px]=\"dwCollapsed?dwCollapsedWidth:dwWidth\">\n  <ng-template [ngTemplateOutlet]=\"dwTrigger\"></ng-template>\n</div>\n<ng-template #defaultTrigger>\n  <i class=\"anticon\" [class.anticon-left]=\"!dwCollapsed\" [class.anticon-right]=\"dwCollapsed\" *ngIf=\"!dwReverseArrow\"></i>\n  <i class=\"anticon\" [class.anticon-left]=\"dwCollapsed\" [class.anticon-right]=\"!dwCollapsed\" *ngIf=\"dwReverseArrow\"></i>\n</ng-template>",
                    host: {
                        '[class.ant-layout-sider]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    DwSiderComponent.ctorParameters = function () { return [
        { type: DwLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: DwMatchMediaService }
    ]; };
    DwSiderComponent.propDecorators = {
        _trigger: [{ type: ViewChild, args: ['defaultTrigger',] }],
        dwWidth: [{ type: Input }],
        dwCollapsedWidth: [{ type: Input }],
        dwBreakpoint: [{ type: Input }],
        dwReverseArrow: [{ type: Input }],
        dwTrigger: [{ type: Input }],
        dwCollapsible: [{ type: Input }],
        dwCollapsed: [{ type: Input }, { type: HostBinding, args: ['class.ant-layout-sider-collapsed',] }],
        dwCollapsedChange: [{ type: Output }],
        setZeroClass: [{ type: HostBinding, args: ['class.ant-layout-sider-zero-width',] }],
        setFlex: [{ type: HostBinding, args: ['style.flex',] }],
        setWidth: [{ type: HostBinding, args: ['style.max-width.px',] }, { type: HostBinding, args: ['style.min-width.px',] }, { type: HostBinding, args: ['style.width.px',] }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return DwSiderComponent;
}());
export { DwSiderComponent };
function DwSiderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSiderComponent.prototype._collapsed;
    /** @type {?} */
    DwSiderComponent.prototype._collapsible;
    /** @type {?} */
    DwSiderComponent.prototype._trigger;
    /** @type {?} */
    DwSiderComponent.prototype._reverseArrow;
    /** @type {?} */
    DwSiderComponent.prototype.below;
    /** @type {?} */
    DwSiderComponent.prototype.isInit;
    /** @type {?} */
    DwSiderComponent.prototype.dimensionMap;
    /** @type {?} */
    DwSiderComponent.prototype.dwWidth;
    /** @type {?} */
    DwSiderComponent.prototype.dwCollapsedWidth;
    /** @type {?} */
    DwSiderComponent.prototype.dwBreakpoint;
    /** @type {?} */
    DwSiderComponent.prototype.dwCollapsedChange;
    /** @type {?} */
    DwSiderComponent.prototype.dwLayoutComponent;
    /** @type {?} */
    DwSiderComponent.prototype.dwMatchMediaService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJsYXlvdXQvZHctc2lkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUE0SHhELDBCQUF3QyxpQkFBb0MsRUFBVSxtQkFBd0M7UUFBdEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7MEJBL0d6RyxLQUFLOzRCQUNILEtBQUs7NkJBRUosS0FBSztxQkFDYixLQUFLO3NCQUNKLEtBQUs7NEJBQ0M7WUFDckIsRUFBRSxFQUFHLE9BQU87WUFDWixFQUFFLEVBQUcsT0FBTztZQUNaLEVBQUUsRUFBRyxPQUFPO1lBQ1osRUFBRSxFQUFHLE9BQU87WUFDWixFQUFFLEVBQUcsUUFBUTtZQUNiLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7dUJBQ2tCLEdBQUc7Z0NBQ00sRUFBRTtpQ0F3Q0EsSUFBSSxZQUFZLEVBQUU7S0F5RC9DO0lBOUZELHNCQUNJLDRDQUFjOzs7O1FBSWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCOzs7OztRQVBELFVBQ21CLEtBQWM7WUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7OztPQUFBO0lB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LGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztLQUNwQjs7Z0JBcElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsVUFBVTtvQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsOHdCQUFnRDtvQkFDaEQsSUFBSSxFQUFpQjt3QkFDbkIsMEJBQTBCLEVBQUUsTUFBTTtxQkFDbkM7aUJBQ0Y7Ozs7Z0JBWFEsaUJBQWlCLHVCQTRIWCxRQUFRLFlBQUksSUFBSTtnQkEvSHRCLG1CQUFtQjs7OzJCQWtCekIsU0FBUyxTQUFDLGdCQUFnQjswQkFZMUIsS0FBSzttQ0FDTCxLQUFLOytCQUNMLEtBQUs7aUNBRUwsS0FBSzs0QkFTTCxLQUFLO2dDQVNMLEtBQUs7OEJBU0wsS0FBSyxZQUNMLFdBQVcsU0FBQyxrQ0FBa0M7b0NBUzlDLE1BQU07K0JBRU4sV0FBVyxTQUFDLG1DQUFtQzswQkFLL0MsV0FBVyxTQUFDLFlBQVk7MkJBU3hCLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsV0FBVyxTQUFDLG9CQUFvQixjQUNoQyxXQUFXLFNBQUMsZ0JBQWdCO2lDQVM1QixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFOzsyQkFqSDdDOztTQThCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdNYXRjaE1lZGlhU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZHctbWF0Y2gtbWVkaWEuc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3TGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9kdy1sYXlvdXQuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgRHdCcmVha1BvaW50ID0gJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zaWRlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1zaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1sYXlvdXQtc2lkZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdTaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2NvbGxhcHNlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9jb2xsYXBzaWJsZSA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdkZWZhdWx0VHJpZ2dlcicpIF90cmlnZ2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfcmV2ZXJzZUFycm93ID0gZmFsc2U7XG4gIHByaXZhdGUgYmVsb3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0luaXQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkaW1lbnNpb25NYXAgPSB7XG4gICAgeHMgOiAnNDgwcHgnLFxuICAgIHNtIDogJzU3NnB4JyxcbiAgICBtZCA6ICc3NjhweCcsXG4gICAgbGcgOiAnOTkycHgnLFxuICAgIHhsIDogJzEyMDBweCcsXG4gICAgeHhsOiAnMTYwMHB4J1xuICB9O1xuICBASW5wdXQoKSBkd1dpZHRoID0gMjAwO1xuICBASW5wdXQoKSBkd0NvbGxhcHNlZFdpZHRoID0gODA7XG4gIEBJbnB1dCgpIGR3QnJlYWtwb2ludDogRHdCcmVha1BvaW50O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1JldmVyc2VBcnJvdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JldmVyc2VBcnJvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdSZXZlcnNlQXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JldmVyc2VBcnJvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1RyaWdnZXIodmFsdWU6IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3VHJpZ2dlcigpOiBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RyaWdnZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdDb2xsYXBzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0NvbGxhcHNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzaWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxheW91dC1zaWRlci1jb2xsYXBzZWQnKVxuICBzZXQgZHdDb2xsYXBzZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWQ7XG4gIH1cblxuICBAT3V0cHV0KCkgZHdDb2xsYXBzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLXplcm8td2lkdGgnKVxuICBnZXQgc2V0WmVyb0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3Q29sbGFwc2VkICYmICh0aGlzLmR3Q29sbGFwc2VkV2lkdGggPT09IDApO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4JylcbiAgZ2V0IHNldEZsZXgoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5kd0NvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuIGAwIDAgJHt0aGlzLmR3Q29sbGFwc2VkV2lkdGh9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYDAgMCAke3RoaXMuZHdXaWR0aH1weGA7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXgtd2lkdGgucHgnKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1pbi13aWR0aC5weCcpXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBnZXQgc2V0V2lkdGgoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5kd0NvbGxhcHNlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHdDb2xsYXBzZWRXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZHdXaWR0aDtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyAnJGV2ZW50JyBdKVxuICBvbldpbmRvd1Jlc2l6ZShlOiBVSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy53YXRjaE1hdGNoTWVkaWEoKTtcbiAgfVxuXG4gIHdhdGNoTWF0Y2hNZWRpYSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0JyZWFrcG9pbnQpIHtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLmR3TWF0Y2hNZWRpYVNlcnZpY2UubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt0aGlzLmRpbWVuc2lvbk1hcFsgdGhpcy5kd0JyZWFrcG9pbnQgXX0pYCkubWF0Y2hlcztcbiAgICAgIHRoaXMuYmVsb3cgPSBtYXRjaEJlbG93O1xuICAgICAgdGhpcy5kd0NvbGxhcHNlZCA9IG1hdGNoQmVsb3c7XG4gICAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgICAgdGhpcy5kd0NvbGxhcHNlZENoYW5nZS5lbWl0KG1hdGNoQmVsb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIHRoaXMuZHdDb2xsYXBzZWQgPSAhdGhpcy5kd0NvbGxhcHNlZDtcbiAgICB0aGlzLmR3Q29sbGFwc2VkQ2hhbmdlLmVtaXQodGhpcy5kd0NvbGxhcHNlZCk7XG4gIH1cblxuICBnZXQgaXNaZXJvVHJpZ2dlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd0NvbGxhcHNpYmxlICYmIHRoaXMuZHdUcmlnZ2VyICYmICh0aGlzLmR3Q29sbGFwc2VkV2lkdGggPT09IDApICYmICgodGhpcy5kd0JyZWFrcG9pbnQgJiYgdGhpcy5iZWxvdykgfHwgKCF0aGlzLmR3QnJlYWtwb2ludCkpO1xuICB9XG5cbiAgZ2V0IGlzU2lkZXJUcmlnZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3Q29sbGFwc2libGUgJiYgdGhpcy5kd1RyaWdnZXIgJiYgKHRoaXMuZHdDb2xsYXBzZWRXaWR0aCAhPT0gMCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASG9zdCgpIHByaXZhdGUgZHdMYXlvdXRDb21wb25lbnQ6IER3TGF5b3V0Q29tcG9uZW50LCBwcml2YXRlIGR3TWF0Y2hNZWRpYVNlcnZpY2U6IER3TWF0Y2hNZWRpYVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2F0Y2hNYXRjaE1lZGlhKCk7XG4gICAgaWYgKHRoaXMuZHdMYXlvdXRDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHdMYXlvdXRDb21wb25lbnQuaGFzU2lkZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gIH1cblxufVxuIl19
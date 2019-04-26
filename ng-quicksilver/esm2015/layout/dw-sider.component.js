/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Host, HostBinding, HostListener, Input, Optional, Output, TemplateRef, ViewChild } from '@angular/core';
import { DwMatchMediaService } from '../core/services/dw-match-media.service';
import { toBoolean } from '../core/util/convert';
import { DwLayoutComponent } from './dw-layout.component';
export class DwSiderComponent {
    /**
     * @param {?} dwLayoutComponent
     * @param {?} dwMatchMediaService
     */
    constructor(dwLayoutComponent, dwMatchMediaService) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwReverseArrow(value) {
        this._reverseArrow = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwReverseArrow() {
        return this._reverseArrow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTrigger(value) {
        this._trigger = value;
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
    set dwCollapsible(value) {
        this._collapsible = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwCollapsible() {
        return this._collapsible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCollapsed(value) {
        this._collapsed = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwCollapsed() {
        return this._collapsed;
    }
    /**
     * @return {?}
     */
    get setZeroClass() {
        return this.dwCollapsed && (this.dwCollapsedWidth === 0);
    }
    /**
     * @return {?}
     */
    get setFlex() {
        if (this.dwCollapsed) {
            return `0 0 ${this.dwCollapsedWidth}px`;
        }
        else {
            return `0 0 ${this.dwWidth}px`;
        }
    }
    /**
     * @return {?}
     */
    get setWidth() {
        if (this.dwCollapsed) {
            return this.dwCollapsedWidth;
        }
        else {
            return this.dwWidth;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onWindowResize(e) {
        this.watchMatchMedia();
    }
    /**
     * @return {?}
     */
    watchMatchMedia() {
        if (this.dwBreakpoint) {
            /** @type {?} */
            const matchBelow = this.dwMatchMediaService.matchMedia(`(max-width: ${this.dimensionMap[this.dwBreakpoint]})`).matches;
            this.below = matchBelow;
            this.dwCollapsed = matchBelow;
            if (this.isInit) {
                this.dwCollapsedChange.emit(matchBelow);
            }
        }
    }
    /**
     * @return {?}
     */
    toggleCollapse() {
        this.dwCollapsed = !this.dwCollapsed;
        this.dwCollapsedChange.emit(this.dwCollapsed);
    }
    /**
     * @return {?}
     */
    get isZeroTrigger() {
        return this.dwCollapsible && this.dwTrigger && (this.dwCollapsedWidth === 0) && ((this.dwBreakpoint && this.below) || (!this.dwBreakpoint));
    }
    /**
     * @return {?}
     */
    get isSiderTrigger() {
        return this.dwCollapsible && this.dwTrigger && (this.dwCollapsedWidth !== 0);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.watchMatchMedia();
        if (this.dwLayoutComponent) {
            this.dwLayoutComponent.hasSider = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
    }
}
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
DwSiderComponent.ctorParameters = () => [
    { type: DwLayoutComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: DwMatchMediaService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2lkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJsYXlvdXQvZHctc2lkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixJQUFJLEVBQ0osV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVkxRCxNQUFNOzs7OztJQWdISixZQUF3QyxpQkFBb0MsRUFBVSxtQkFBd0M7UUFBdEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7MEJBL0d6RyxLQUFLOzRCQUNILEtBQUs7NkJBRUosS0FBSztxQkFDYixLQUFLO3NCQUNKLEtBQUs7NEJBQ0M7WUFDckIsRUFBRSxFQUFHLE9BQU87WUFDWixFQUFFLEVBQUcsT0FBTztZQUNaLEVBQUUsRUFBRyxPQUFPO1lBQ1osRUFBRSxFQUFHLE9BQU87WUFDWixFQUFFLEVBQUcsUUFBUTtZQUNiLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7dUJBQ2tCLEdBQUc7Z0NBQ00sRUFBRTtpQ0F3Q0EsSUFBSSxZQUFZLEVBQUU7S0F5RC9DOzs7OztJQTlGRCxJQUNJLGNBQWMsQ0FBQyxLQUFjO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztL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O1FBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDcEI7OztZQXBJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFVBQVU7Z0JBQy9CLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDh3QkFBZ0Q7Z0JBQ2hELElBQUksRUFBaUI7b0JBQ25CLDBCQUEwQixFQUFFLE1BQU07aUJBQ25DO2FBQ0Y7Ozs7WUFYUSxpQkFBaUIsdUJBNEhYLFFBQVEsWUFBSSxJQUFJO1lBL0h0QixtQkFBbUI7Ozt1QkFrQnpCLFNBQVMsU0FBQyxnQkFBZ0I7c0JBWTFCLEtBQUs7K0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUVMLEtBQUs7d0JBU0wsS0FBSzs0QkFTTCxLQUFLOzBCQVNMLEtBQUssWUFDTCxXQUFXLFNBQUMsa0NBQWtDO2dDQVM5QyxNQUFNOzJCQUVOLFdBQVcsU0FBQyxtQ0FBbUM7c0JBSy9DLFdBQVcsU0FBQyxZQUFZO3VCQVN4QixXQUFXLFNBQUMsb0JBQW9CLGNBQ2hDLFdBQVcsU0FBQyxvQkFBb0IsY0FDaEMsV0FBVyxTQUFDLGdCQUFnQjs2QkFTNUIsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd01hdGNoTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9kdy1tYXRjaC1tZWRpYS5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2R3LWxheW91dC5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBEd0JyZWFrUG9pbnQgPSAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXNpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXNpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWxheW91dC1zaWRlcl0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd1NpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfY29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvbGxhcHNpYmxlID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUcmlnZ2VyJykgX3RyaWdnZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9yZXZlcnNlQXJyb3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBiZWxvdyA9IGZhbHNlO1xuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xuICBwcml2YXRlIGRpbWVuc2lvbk1hcCA9IHtcbiAgICB4cyA6ICc0ODBweCcsXG4gICAgc20gOiAnNTc2cHgnLFxuICAgIG1kIDogJzc2OHB4JyxcbiAgICBsZyA6ICc5OTJweCcsXG4gICAgeGwgOiAnMTIwMHB4JyxcbiAgICB4eGw6ICcxNjAwcHgnXG4gIH07XG4gIEBJbnB1dCgpIGR3V2lkdGggPSAyMDA7XG4gIEBJbnB1dCgpIGR3Q29sbGFwc2VkV2lkdGggPSA4MDtcbiAgQElucHV0KCkgZHdCcmVha3BvaW50OiBEd0JyZWFrUG9pbnQ7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UmV2ZXJzZUFycm93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV2ZXJzZUFycm93ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1JldmVyc2VBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZUFycm93O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHJpZ2dlcih2YWx1ZTogVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLl90cmlnZ2VyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdUcmlnZ2VyKCk6IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbGxhcHNpYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29sbGFwc2libGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q29sbGFwc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbGF5b3V0LXNpZGVyLWNvbGxhcHNlZCcpXG4gIHNldCBkd0NvbGxhcHNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdDb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNlZDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBkd0NvbGxhcHNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1sYXlvdXQtc2lkZXItemVyby13aWR0aCcpXG4gIGdldCBzZXRaZXJvQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdDb2xsYXBzZWQgJiYgKHRoaXMuZHdDb2xsYXBzZWRXaWR0aCA9PT0gMCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmZsZXgnKVxuICBnZXQgc2V0RmxleCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmR3Q29sbGFwc2VkKSB7XG4gICAgICByZXR1cm4gYDAgMCAke3RoaXMuZHdDb2xsYXBzZWRXaWR0aH1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgMCAwICR7dGhpcy5kd1dpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC13aWR0aC5weCcpXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWluLXdpZHRoLnB4JylcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIGdldCBzZXRXaWR0aCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmR3Q29sbGFwc2VkKSB7XG4gICAgICByZXR1cm4gdGhpcy5kd0NvbGxhcHNlZFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kd1dpZHRoO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbICckZXZlbnQnIF0pXG4gIG9uV2luZG93UmVzaXplKGU6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoTWF0Y2hNZWRpYSgpO1xuICB9XG5cbiAgd2F0Y2hNYXRjaE1lZGlhKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3QnJlYWtwb2ludCkge1xuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMuZHdNYXRjaE1lZGlhU2VydmljZS5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke3RoaXMuZGltZW5zaW9uTWFwWyB0aGlzLmR3QnJlYWtwb2ludCBdfSlgKS5tYXRjaGVzO1xuICAgICAgdGhpcy5iZWxvdyA9IG1hdGNoQmVsb3c7XG4gICAgICB0aGlzLmR3Q29sbGFwc2VkID0gbWF0Y2hCZWxvdztcbiAgICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgICB0aGlzLmR3Q29sbGFwc2VkQ2hhbmdlLmVtaXQobWF0Y2hCZWxvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ29sbGFwc2UoKTogdm9pZCB7XG4gICAgdGhpcy5kd0NvbGxhcHNlZCA9ICF0aGlzLmR3Q29sbGFwc2VkO1xuICAgIHRoaXMuZHdDb2xsYXBzZWRDaGFuZ2UuZW1pdCh0aGlzLmR3Q29sbGFwc2VkKTtcbiAgfVxuXG4gIGdldCBpc1plcm9UcmlnZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3Q29sbGFwc2libGUgJiYgdGhpcy5kd1RyaWdnZXIgJiYgKHRoaXMuZHdDb2xsYXBzZWRXaWR0aCA9PT0gMCkgJiYgKCh0aGlzLmR3QnJlYWtwb2ludCAmJiB0aGlzLmJlbG93KSB8fCAoIXRoaXMuZHdCcmVha3BvaW50KSk7XG4gIH1cblxuICBnZXQgaXNTaWRlclRyaWdnZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdDb2xsYXBzaWJsZSAmJiB0aGlzLmR3VHJpZ2dlciAmJiAodGhpcy5kd0NvbGxhcHNlZFdpZHRoICE9PSAwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBIb3N0KCkgcHJpdmF0ZSBkd0xheW91dENvbXBvbmVudDogRHdMYXlvdXRDb21wb25lbnQsIHByaXZhdGUgZHdNYXRjaE1lZGlhU2VydmljZTogRHdNYXRjaE1lZGlhU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy53YXRjaE1hdGNoTWVkaWEoKTtcbiAgICBpZiAodGhpcy5kd0xheW91dENvbXBvbmVudCkge1xuICAgICAgdGhpcy5kd0xheW91dENvbXBvbmVudC5oYXNTaWRlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';
import { DwAnchorComponent } from './dw-anchor.component';
var DwAnchorLinkComponent = /** @class */ (function () {
    function DwAnchorLinkComponent(el, anchorComp) {
        this.el = el;
        this.anchorComp = anchorComp;
        this.dwHref = '#';
        this.titleStr = '';
        this.active = false;
    }
    Object.defineProperty(DwAnchorLinkComponent.prototype, "dwTitle", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.titleTpl = value;
            }
            else {
                this.titleStr = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwAnchorLinkComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.anchorComp.registerLink(this);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwAnchorLinkComponent.prototype.goToClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.anchorComp.handleScrollTo(this);
    };
    /**
     * @return {?}
     */
    DwAnchorLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.anchorComp.unregisterLink(this);
    };
    DwAnchorLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-link',
                    preserveWhitespaces: false,
                    template: "<a (click)=\"goToClick($event)\" href=\"{{dwHref}}\" class=\"ant-anchor-link-title\" title=\"{{titleStr}}\">\n  <span *ngIf=\"titleStr; else (titleTpl || dwTemplate)\">{{ titleStr }}</span>\n</a>\n<ng-content></ng-content>",
                    host: {
                        '[class.ant-anchor-link]': 'true',
                        'style': 'display:block'
                    }
                }] }
    ];
    /** @nocollapse */
    DwAnchorLinkComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DwAnchorComponent }
    ]; };
    DwAnchorLinkComponent.propDecorators = {
        dwHref: [{ type: Input }],
        dwTitle: [{ type: Input }],
        dwTemplate: [{ type: ContentChild, args: ['dwTemplate',] }],
        active: [{ type: HostBinding, args: ['class.ant-anchor-link-active',] }]
    };
    return DwAnchorLinkComponent;
}());
export { DwAnchorLinkComponent };
function DwAnchorLinkComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAnchorLinkComponent.prototype.dwHref;
    /** @type {?} */
    DwAnchorLinkComponent.prototype.titleStr;
    /** @type {?} */
    DwAnchorLinkComponent.prototype.titleTpl;
    /** @type {?} */
    DwAnchorLinkComponent.prototype.dwTemplate;
    /** @type {?} */
    DwAnchorLinkComponent.prototype.active;
    /** @type {?} */
    DwAnchorLinkComponent.prototype.el;
    /** @type {?} */
    DwAnchorLinkComponent.prototype.anchorComp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJhbmNob3IvZHctYW5jaG9yLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFHTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0lBK0J4RCwrQkFBbUIsRUFBYyxFQUFVLFVBQTZCO1FBQXJELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtzQkFsQnRELEdBQUc7d0JBRVYsRUFBRTtzQkFja0QsS0FBSztLQUduRTtJQWRELHNCQUNJLDBDQUFPOzs7OztRQURYLFVBQ1ksS0FBaUM7WUFDM0MsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QjtTQUNGOzs7T0FBQTs7OztJQVNELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxDQUFRO1FBQ2hCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qzs7Z0JBNUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsU0FBUztvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsME9BQXNEO29CQUN0RCxJQUFJLEVBQWlCO3dCQUNuQix5QkFBeUIsRUFBRSxNQUFNO3dCQUNqQyxPQUFPLEVBQW9CLGVBQWU7cUJBQzNDO2lCQUNGOzs7O2dCQWxCQyxVQUFVO2dCQVFILGlCQUFpQjs7O3lCQWF2QixLQUFLOzBCQUtMLEtBQUs7NkJBU0wsWUFBWSxTQUFDLFlBQVk7eUJBRXpCLFdBQVcsU0FBQyw4QkFBOEI7O2dDQXhDN0M7O1NBc0JhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdBbmNob3JDb21wb25lbnQgfSBmcm9tICcuL2R3LWFuY2hvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWxpbmsnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctYW5jaG9yLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtYW5jaG9yLWxpbmtdJzogJ3RydWUnLFxuICAgICdzdHlsZScgICAgICAgICAgICAgICAgICA6ICdkaXNwbGF5OmJsb2NrJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3QW5jaG9yTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBkd0hyZWYgPSAnIyc7XG5cbiAgdGl0bGVTdHIgPSAnJztcbiAgdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1RpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGl0bGVTdHIgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBAQ29udGVudENoaWxkKCdkd1RlbXBsYXRlJykgZHdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtYW5jaG9yLWxpbmstYWN0aXZlJykgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGFuY2hvckNvbXA6IER3QW5jaG9yQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFuY2hvckNvbXAucmVnaXN0ZXJMaW5rKHRoaXMpO1xuICB9XG5cbiAgZ29Ub0NsaWNrKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5hbmNob3JDb21wLmhhbmRsZVNjcm9sbFRvKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JDb21wLnVucmVnaXN0ZXJMaW5rKHRoaXMpO1xuICB9XG5cbn1cbiJdfQ==
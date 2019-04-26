/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ElementRef, HostBinding, Input, TemplateRef } from '@angular/core';
import { DwAnchorComponent } from './dw-anchor.component';
export class DwAnchorLinkComponent {
    /**
     * @param {?} el
     * @param {?} anchorComp
     */
    constructor(el, anchorComp) {
        this.el = el;
        this.anchorComp = anchorComp;
        this.dwHref = '#';
        this.titleStr = '';
        this.active = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.anchorComp.handleScrollTo(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
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
DwAnchorLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: DwAnchorComponent }
];
DwAnchorLinkComponent.propDecorators = {
    dwHref: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwTemplate: [{ type: ContentChild, args: ['dwTemplate',] }],
    active: [{ type: HostBinding, args: ['class.ant-anchor-link-active',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJhbmNob3IvZHctYW5jaG9yLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFHTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFXMUQsTUFBTTs7Ozs7SUFvQkosWUFBbUIsRUFBYyxFQUFVLFVBQTZCO1FBQXJELE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtzQkFsQnRELEdBQUc7d0JBRVYsRUFBRTtzQkFja0QsS0FBSztLQUduRTs7Ozs7SUFkRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQVE7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsU0FBUztnQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsME9BQXNEO2dCQUN0RCxJQUFJLEVBQWlCO29CQUNuQix5QkFBeUIsRUFBRSxNQUFNO29CQUNqQyxPQUFPLEVBQW9CLGVBQWU7aUJBQzNDO2FBQ0Y7Ozs7WUFsQkMsVUFBVTtZQVFILGlCQUFpQjs7O3FCQWF2QixLQUFLO3NCQUtMLEtBQUs7eUJBU0wsWUFBWSxTQUFDLFlBQVk7cUJBRXpCLFdBQVcsU0FBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3QW5jaG9yQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1hbmNob3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1saW5rJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWFuY2hvci1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWFuY2hvci1saW5rXSc6ICd0cnVlJyxcbiAgICAnc3R5bGUnICAgICAgICAgICAgICAgICAgOiAnZGlzcGxheTpibG9jaydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd0FuY2hvckxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgZHdIcmVmID0gJyMnO1xuXG4gIHRpdGxlU3RyID0gJyc7XG4gIHRpdGxlVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy50aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpdGxlU3RyID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZCgnZHdUZW1wbGF0ZScpIGR3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWFuY2hvci1saW5rLWFjdGl2ZScpIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBhbmNob3JDb21wOiBEd0FuY2hvckNvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JDb21wLnJlZ2lzdGVyTGluayh0aGlzKTtcbiAgfVxuXG4gIGdvVG9DbGljayhlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYW5jaG9yQ29tcC5oYW5kbGVTY3JvbGxUbyh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYW5jaG9yQ29tcC51bnJlZ2lzdGVyTGluayh0aGlzKTtcbiAgfVxuXG59XG4iXX0=
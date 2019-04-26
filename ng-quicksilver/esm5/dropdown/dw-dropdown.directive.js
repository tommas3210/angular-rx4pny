/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
var DwDropDownDirective = /** @class */ (function () {
    function DwDropDownDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.$mouseenter = new Subject();
        this.$mouseleave = new Subject();
        this.$click = new Subject();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    DwDropDownDirective.prototype.onMouseEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$mouseenter.next(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwDropDownDirective.prototype.onMouseLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$mouseleave.next(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwDropDownDirective.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.$click.next(e);
    };
    /**
     * @return {?}
     */
    DwDropDownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.elementRef.nativeElement.nodeName === 'A') {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-dropdown-link');
        }
    };
    DwDropDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-dropdown]',
                    host: {
                        '[class.ant-dropdown-trigger]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    DwDropDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    DwDropDownDirective.propDecorators = {
        onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return DwDropDownDirective;
}());
export { DwDropDownDirective };
function DwDropDownDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDropDownDirective.prototype.$mouseenter;
    /** @type {?} */
    DwDropDownDirective.prototype.$mouseleave;
    /** @type {?} */
    DwDropDownDirective.prototype.$click;
    /** @type {?} */
    DwDropDownDirective.prototype.elementRef;
    /** @type {?} */
    DwDropDownDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9kdy1kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUE0QjdCLDZCQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXOzJCQW5CeEQsSUFBSSxPQUFPLEVBQWM7MkJBQ3pCLElBQUksT0FBTyxFQUFjO3NCQUM5QixJQUFJLE9BQU8sRUFBYztLQWtCakM7Ozs7O0lBZkQsMENBQVk7Ozs7SUFEWixVQUNhLENBQWE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBR0QsMENBQVk7Ozs7SUFEWixVQUNhLENBQWE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBR0QscUNBQU87Ozs7SUFEUCxVQUNRLENBQWE7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckI7Ozs7SUFLRCxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztTQUM1RTtLQUNGOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixJQUFJLEVBQU07d0JBQ1IsOEJBQThCLEVBQUUsTUFBTTtxQkFDdkM7aUJBQ0Y7Ozs7Z0JBUm1CLFVBQVU7Z0JBQXdCLFNBQVM7OzsrQkFjNUQsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTsrQkFLdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTswQkFLdkMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTs7OEJBeEJyQzs7U0FTYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2R3LWRyb3Bkb3duXScsXG4gIGhvc3QgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZHJvcGRvd24tdHJpZ2dlcl0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd0Ryb3BEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgJG1vdXNlZW50ZXIgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xuICAkbW91c2VsZWF2ZSA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XG4gICRjbGljayA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsgJyRldmVudCcgXSlcbiAgb25Nb3VzZUVudGVyKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLiRtb3VzZWVudGVyLm5leHQoZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyAnJGV2ZW50JyBdKVxuICBvbk1vdXNlTGVhdmUoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuJG1vdXNlbGVhdmUubmV4dChlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxuICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLiRjbGljay5uZXh0KGUpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lID09PSAnQScpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZHJvcGRvd24tbGluaycpO1xuICAgIH1cbiAgfVxufVxuIl19
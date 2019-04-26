/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class DwMenuDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._selectable = true;
        this._inlineCollapsed = false;
        this._inDropDown = false;
        /**
         * view init flat
         */
        this.isInit = false;
        /**
         * opened index of array
         */
        this.subMenusOpenIndex = [];
        /**
         * collection of menu item
         */
        this.menuItems = [];
        /**
         * collection of sub menu
         */
        this.subMenus = [];
        this.dwTheme = 'light';
        this.dwInlineIndent = 24;
        this.dwMode = 'vertical';
        this.dwClick = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwInDropDown(value) {
        this._inDropDown = toBoolean(value);
        this.dwSelectable = !this._inDropDown;
        this.menuItems.forEach(menu => menu.isInDropDown = this._inDropDown);
        this.subMenus.forEach(subMenu => subMenu.isInDropDown = this._inDropDown);
    }
    /**
     * @return {?}
     */
    get dwInDropDown() {
        return this._inDropDown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSelectable(value) {
        this._selectable = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwSelectable() {
        return this._selectable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwInlineCollapsed(value) {
        this._inlineCollapsed = toBoolean(value);
        if (this.isInit) {
            this.updateInlineCollapse();
        }
    }
    /**
     * @return {?}
     */
    get dwInlineCollapsed() {
        return this._inlineCollapsed;
    }
    /**
     * @return {?}
     */
    updateInlineCollapse() {
        if (this._inlineCollapsed) {
            this.hideSubMenus();
            this.dwMode = 'vertical';
        }
        else {
            this.reductionSubMenus();
            this.dwMode = this.cacheMode;
        }
    }
    /**
     * define host class
     * @return {?}
     */
    get isInDropDownClass() {
        return this.dwInDropDown;
    }
    /**
     * @return {?}
     */
    get isNotInDropDownClass() {
        return !this.dwInDropDown;
    }
    /**
     * @return {?}
     */
    get setDropDownThemeLightClass() {
        return this.dwInDropDown && (this.dwTheme === 'light');
    }
    /**
     * @return {?}
     */
    get setDropDownThemeDarkClass() {
        return this.dwInDropDown && (this.dwTheme === 'dark');
    }
    /**
     * @return {?}
     */
    get setMenuThemeLightClass() {
        return (!this.dwInDropDown) && (this.dwTheme === 'light');
    }
    /**
     * @return {?}
     */
    get setMenuThemeDarkClass() {
        return (!this.dwInDropDown) && (this.dwTheme === 'dark');
    }
    /**
     * @return {?}
     */
    get setMenuVerticalClass() {
        return (!this.dwInDropDown) && (this.dwMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setMenuHorizontalClass() {
        return (!this.dwInDropDown) && (this.dwMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setMenuInlineClass() {
        return (!this.dwInDropDown) && (this.dwMode === 'inline');
    }
    /**
     * @return {?}
     */
    get setMenuInlineCollapsedClass() {
        return (!this.dwInDropDown) && (this.dwMode !== 'horizontal') && this.dwInlineCollapsed;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isInit = true;
        this.cacheMode = this.dwMode;
        this.updateInlineCollapse();
    }
    /**
     * trigger when menu item clicked
     * @return {?}
     */
    clearAllSelected() {
        this.menuItems.forEach(menu => menu.dwSelected = false);
    }
    /**
     * @return {?}
     */
    hideSubMenus() {
        this.subMenusOpenIndex = [];
        this.subMenus.forEach((submenu, index) => {
            if (submenu.dwOpen) {
                this.subMenusOpenIndex.push(index);
            }
            submenu.dwOpen = false;
        });
    }
    /**
     * @return {?}
     */
    reductionSubMenus() {
        this.subMenusOpenIndex.forEach(i => this.subMenus[i].dwOpen = true);
        this.subMenusOpenIndex = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    clickItem(value) {
        this.dwClick.emit(value);
    }
}
DwMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dw-menu]'
            },] }
];
/** @nocollapse */
DwMenuDirective.ctorParameters = () => [
    { type: ElementRef }
];
DwMenuDirective.propDecorators = {
    dwTheme: [{ type: Input }],
    dwInlineIndent: [{ type: Input }],
    dwMode: [{ type: Input }],
    dwClick: [{ type: Output }],
    dwInDropDown: [{ type: Input }],
    dwSelectable: [{ type: Input }],
    dwInlineCollapsed: [{ type: Input }],
    isInDropDownClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu',] }, { type: HostBinding, args: ['class.ant-menu-dropdown-vertical',] }, { type: HostBinding, args: ['class.ant-dropdown-menu-root',] }],
    isNotInDropDownClass: [{ type: HostBinding, args: ['class.ant-menu',] }, { type: HostBinding, args: ['class.ant-menu-root',] }],
    setDropDownThemeLightClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-light',] }],
    setDropDownThemeDarkClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-dark',] }],
    setMenuThemeLightClass: [{ type: HostBinding, args: ['class.ant-menu-light',] }],
    setMenuThemeDarkClass: [{ type: HostBinding, args: ['class.ant-menu-dark',] }],
    setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-vertical',] }],
    setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-horizontal',] }],
    setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-inline',] }],
    setMenuInlineCollapsedClass: [{ type: HostBinding, args: ['class.ant-menu-inline-collapsed',] }]
};
function DwMenuDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMenuDirective.prototype._selectable;
    /** @type {?} */
    DwMenuDirective.prototype._inlineCollapsed;
    /** @type {?} */
    DwMenuDirective.prototype._inDropDown;
    /**
     * view init flat
     * @type {?}
     */
    DwMenuDirective.prototype.isInit;
    /**
     * cache mode
     * @type {?}
     */
    DwMenuDirective.prototype.cacheMode;
    /**
     * opened index of array
     * @type {?}
     */
    DwMenuDirective.prototype.subMenusOpenIndex;
    /**
     * collection of menu item
     * @type {?}
     */
    DwMenuDirective.prototype.menuItems;
    /**
     * collection of sub menu
     * @type {?}
     */
    DwMenuDirective.prototype.subMenus;
    /** @type {?} */
    DwMenuDirective.prototype.dwTheme;
    /** @type {?} */
    DwMenuDirective.prototype.dwInlineIndent;
    /** @type {?} */
    DwMenuDirective.prototype.dwMode;
    /** @type {?} */
    DwMenuDirective.prototype.dwClick;
    /** @type {?} */
    DwMenuDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lbnUvZHctbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFXakQsTUFBTTs7OztJQXFISixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTsyQkFwSFgsSUFBSTtnQ0FDQyxLQUFLOzJCQUNWLEtBQUs7Ozs7c0JBRVYsS0FBSzs7OztpQ0FJTSxFQUFFOzs7O3lCQUdLLEVBQUU7Ozs7d0JBRUosRUFBRTt1QkFDRSxPQUFPOzhCQUNsQixFQUFFO3NCQUNGLFVBQVU7dUJBQ2hCLElBQUksWUFBWSxFQUF1QjtLQXFHMUQ7Ozs7O0lBbkdELElBQ0ksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQzNFOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQ0ksWUFB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LHlCQUF5QjtxQ0FLckMsV0FBVyxTQUFDLDJCQUEyQjtpQ0FLdkMsV0FBVyxTQUFDLHVCQUF1QjswQ0FLbkMsV0FBVyxTQUFDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd01lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9kdy1tZW51LWl0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IER3U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vZHctc3VibWVudS5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBEd01vZGUgPSAndmVydGljYWwnIHwgJ2hvcml6b250YWwnIHwgJ2lubGluZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkdy1tZW51XSdcbn0pXG5cbmV4cG9ydCBjbGFzcyBEd01lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfc2VsZWN0YWJsZSA9IHRydWU7XG4gIHByaXZhdGUgX2lubGluZUNvbGxhcHNlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbkRyb3BEb3duID0gZmFsc2U7XG4gIC8qKiB2aWV3IGluaXQgZmxhdCAqL1xuICBwcml2YXRlIGlzSW5pdCA9IGZhbHNlO1xuICAvKiogY2FjaGUgbW9kZSAqL1xuICBwcml2YXRlIGNhY2hlTW9kZTogRHdNb2RlO1xuICAvKiogb3BlbmVkIGluZGV4IG9mIGFycmF5ICovXG4gIHByaXZhdGUgc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcblxuICAvKiogY29sbGVjdGlvbiBvZiBtZW51IGl0ZW0gKi9cbiAgbWVudUl0ZW1zOiBEd01lbnVJdGVtRGlyZWN0aXZlW10gPSBbXTtcbiAgLyoqIGNvbGxlY3Rpb24gb2Ygc3ViIG1lbnUgKi9cbiAgc3ViTWVudXM6IER3U3ViTWVudUNvbXBvbmVudFtdID0gW107XG4gIEBJbnB1dCgpIGR3VGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xuICBASW5wdXQoKSBkd0lubGluZUluZGVudCA9IDI0O1xuICBASW5wdXQoKSBkd01vZGU6IER3TW9kZSA9ICd2ZXJ0aWNhbCc7XG4gIEBPdXRwdXQoKSBkd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxEd01lbnVJdGVtRGlyZWN0aXZlPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0luRHJvcERvd24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbkRyb3BEb3duID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLmR3U2VsZWN0YWJsZSA9ICF0aGlzLl9pbkRyb3BEb3duO1xuICAgIHRoaXMubWVudUl0ZW1zLmZvckVhY2gobWVudSA9PiBtZW51LmlzSW5Ecm9wRG93biA9IHRoaXMuX2luRHJvcERvd24pO1xuICAgIHRoaXMuc3ViTWVudXMuZm9yRWFjaChzdWJNZW51ID0+IHN1Yk1lbnUuaXNJbkRyb3BEb3duID0gdGhpcy5faW5Ecm9wRG93bik7XG4gIH1cblxuICBnZXQgZHdJbkRyb3BEb3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbkRyb3BEb3duO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2VsZWN0YWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGFibGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2VsZWN0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0YWJsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0lubGluZUNvbGxhcHNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lubGluZUNvbGxhcHNlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XG4gICAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3SW5saW5lQ29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pbmxpbmVDb2xsYXBzZWQ7XG4gIH1cblxuICB1cGRhdGVJbmxpbmVDb2xsYXBzZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmhpZGVTdWJNZW51cygpO1xuICAgICAgdGhpcy5kd01vZGUgPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZHVjdGlvblN1Yk1lbnVzKCk7XG4gICAgICB0aGlzLmR3TW9kZSA9IHRoaXMuY2FjaGVNb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBkZWZpbmUgaG9zdCBjbGFzcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51JylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1kcm9wZG93bi12ZXJ0aWNhbCcpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtcm9vdCcpXG4gIGdldCBpc0luRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd0luRHJvcERvd247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51JylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1yb290JylcbiAgZ2V0IGlzTm90SW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kd0luRHJvcERvd247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LWxpZ2h0JylcbiAgZ2V0IHNldERyb3BEb3duVGhlbWVMaWdodENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3SW5Ecm9wRG93biAmJiAodGhpcy5kd1RoZW1lID09PSAnbGlnaHQnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtZGFyaycpXG4gIGdldCBzZXREcm9wRG93blRoZW1lRGFya0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3SW5Ecm9wRG93biAmJiAodGhpcy5kd1RoZW1lID09PSAnZGFyaycpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1saWdodCcpXG4gIGdldCBzZXRNZW51VGhlbWVMaWdodENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuZHdJbkRyb3BEb3duKSAmJiAodGhpcy5kd1RoZW1lID09PSAnbGlnaHQnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtZGFyaycpXG4gIGdldCBzZXRNZW51VGhlbWVEYXJrQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5kd0luRHJvcERvd24pICYmICh0aGlzLmR3VGhlbWUgPT09ICdkYXJrJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXZlcnRpY2FsJylcbiAgZ2V0IHNldE1lbnVWZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuZHdJbkRyb3BEb3duKSAmJiAodGhpcy5kd01vZGUgPT09ICd2ZXJ0aWNhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1ob3Jpem9udGFsJylcbiAgZ2V0IHNldE1lbnVIb3Jpem9udGFsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5kd0luRHJvcERvd24pICYmICh0aGlzLmR3TW9kZSA9PT0gJ2hvcml6b250YWwnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaW5saW5lJylcbiAgZ2V0IHNldE1lbnVJbmxpbmVDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmR3SW5Ecm9wRG93bikgJiYgKHRoaXMuZHdNb2RlID09PSAnaW5saW5lJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWlubGluZS1jb2xsYXBzZWQnKVxuICBnZXQgc2V0TWVudUlubGluZUNvbGxhcHNlZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuZHdJbkRyb3BEb3duKSAmJiAodGhpcy5kd01vZGUgIT09ICdob3Jpem9udGFsJykgJiYgdGhpcy5kd0lubGluZUNvbGxhcHNlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge1xuXG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMuY2FjaGVNb2RlID0gdGhpcy5kd01vZGU7XG4gICAgdGhpcy51cGRhdGVJbmxpbmVDb2xsYXBzZSgpO1xuICB9XG5cbiAgLyoqIHRyaWdnZXIgd2hlbiBtZW51IGl0ZW0gY2xpY2tlZCAqL1xuICBjbGVhckFsbFNlbGVjdGVkKCk6IHZvaWQge1xuICAgIHRoaXMubWVudUl0ZW1zLmZvckVhY2gobWVudSA9PiBtZW51LmR3U2VsZWN0ZWQgPSBmYWxzZSk7XG4gIH1cblxuICBoaWRlU3ViTWVudXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJNZW51c09wZW5JbmRleCA9IFtdO1xuICAgIHRoaXMuc3ViTWVudXMuZm9yRWFjaCgoc3VibWVudSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChzdWJtZW51LmR3T3Blbikge1xuICAgICAgICB0aGlzLnN1Yk1lbnVzT3BlbkluZGV4LnB1c2goaW5kZXgpO1xuICAgICAgfVxuICAgICAgc3VibWVudS5kd09wZW4gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZHVjdGlvblN1Yk1lbnVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXguZm9yRWFjaChpID0+IHRoaXMuc3ViTWVudXNbIGkgXS5kd09wZW4gPSB0cnVlKTtcbiAgICB0aGlzLnN1Yk1lbnVzT3BlbkluZGV4ID0gW107XG4gIH1cblxuICBjbGlja0l0ZW0odmFsdWU6IER3TWVudUl0ZW1EaXJlY3RpdmUpOiB2b2lkIHtcbiAgICB0aGlzLmR3Q2xpY2suZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==
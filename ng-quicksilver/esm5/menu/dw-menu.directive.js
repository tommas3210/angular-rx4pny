/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var DwMenuDirective = /** @class */ (function () {
    function DwMenuDirective(el) {
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
    Object.defineProperty(DwMenuDirective.prototype, "dwInDropDown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inDropDown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._inDropDown = toBoolean(value);
            this.dwSelectable = !this._inDropDown;
            this.menuItems.forEach(function (menu) { return menu.isInDropDown = _this._inDropDown; });
            this.subMenus.forEach(function (subMenu) { return subMenu.isInDropDown = _this._inDropDown; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "dwSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "dwInlineCollapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inlineCollapsed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._inlineCollapsed = toBoolean(value);
            if (this.isInit) {
                this.updateInlineCollapse();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this._inlineCollapsed) {
            this.hideSubMenus();
            this.dwMode = 'vertical';
        }
        else {
            this.reductionSubMenus();
            this.dwMode = this.cacheMode;
        }
    };
    Object.defineProperty(DwMenuDirective.prototype, "isInDropDownClass", {
        /** define host class */
        get: /**
         * define host class
         * @return {?}
         */
        function () {
            return this.dwInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "isNotInDropDownClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.dwInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setDropDownThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwInDropDown && (this.dwTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setDropDownThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwInDropDown && (this.dwTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setMenuThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.dwInDropDown) && (this.dwTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setMenuThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.dwInDropDown) && (this.dwTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setMenuVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.dwInDropDown) && (this.dwMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setMenuHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.dwInDropDown) && (this.dwMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setMenuInlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.dwInDropDown) && (this.dwMode === 'inline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuDirective.prototype, "setMenuInlineCollapsedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.dwInDropDown) && (this.dwMode !== 'horizontal') && this.dwInlineCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.cacheMode = this.dwMode;
        this.updateInlineCollapse();
    };
    /** trigger when menu item clicked */
    /**
     * trigger when menu item clicked
     * @return {?}
     */
    DwMenuDirective.prototype.clearAllSelected = /**
     * trigger when menu item clicked
     * @return {?}
     */
    function () {
        this.menuItems.forEach(function (menu) { return menu.dwSelected = false; });
    };
    /**
     * @return {?}
     */
    DwMenuDirective.prototype.hideSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex = [];
        this.subMenus.forEach(function (submenu, index) {
            if (submenu.dwOpen) {
                _this.subMenusOpenIndex.push(index);
            }
            submenu.dwOpen = false;
        });
    };
    /**
     * @return {?}
     */
    DwMenuDirective.prototype.reductionSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex.forEach(function (i) { return _this.subMenus[i].dwOpen = true; });
        this.subMenusOpenIndex = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwMenuDirective.prototype.clickItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.dwClick.emit(value);
    };
    DwMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-menu]'
                },] }
    ];
    /** @nocollapse */
    DwMenuDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return DwMenuDirective;
}());
export { DwMenuDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lbnUvZHctbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBZ0kvQyx5QkFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7MkJBcEhYLElBQUk7Z0NBQ0MsS0FBSzsyQkFDVixLQUFLOzs7O3NCQUVWLEtBQUs7Ozs7aUNBSU0sRUFBRTs7Ozt5QkFHSyxFQUFFOzs7O3dCQUVKLEVBQUU7dUJBQ0UsT0FBTzs4QkFDbEIsRUFBRTtzQkFDRixVQUFVO3VCQUNoQixJQUFJLFlBQVksRUFBdUI7S0FxRzFEO0lBbkdELHNCQUNJLHlDQUFZOzs7O1FBT2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVZELFVBQ2lCLEtBQWM7WUFEL0IsaUJBTUM7WUFKQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsV0FBVyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7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Q0wsS0FBSzswQkFDTCxNQUFNOytCQUVOLEtBQUs7K0JBWUwsS0FBSztvQ0FTTCxLQUFLO29DQXVCTCxXQUFXLFNBQUMseUJBQXlCLGNBQ3JDLFdBQVcsU0FBQyxrQ0FBa0MsY0FDOUMsV0FBVyxTQUFDLDhCQUE4Qjt1Q0FLMUMsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixXQUFXLFNBQUMscUJBQXFCOzZDQUtqQyxXQUFXLFNBQUMsK0JBQStCOzRDQUszQyxXQUFXLFNBQUMsOEJBQThCO3lDQUsxQyxXQUFXLFNBQUMsc0JBQXNCO3dDQUtsQyxXQUFXLFNBQUMscUJBQXFCO3VDQUtqQyxXQUFXLFNBQUMseUJBQXlCO3lDQUtyQyxXQUFXLFNBQUMsMkJBQTJCO3FDQUt2QyxXQUFXLFNBQUMsdUJBQXVCOzhDQUtuQyxXQUFXLFNBQUMsaUNBQWlDOzswQkFySWhEOztTQXFCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2R3LW1lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHdTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9kdy1zdWJtZW51LmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIER3TW9kZSA9ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgfCAnaW5saW5lJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2R3LW1lbnVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIER3TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9zZWxlY3RhYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaW5saW5lQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX2luRHJvcERvd24gPSBmYWxzZTtcbiAgLyoqIHZpZXcgaW5pdCBmbGF0ICovXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG4gIC8qKiBjYWNoZSBtb2RlICovXG4gIHByaXZhdGUgY2FjaGVNb2RlOiBEd01vZGU7XG4gIC8qKiBvcGVuZWQgaW5kZXggb2YgYXJyYXkgKi9cbiAgcHJpdmF0ZSBzdWJNZW51c09wZW5JbmRleCA9IFtdO1xuXG4gIC8qKiBjb2xsZWN0aW9uIG9mIG1lbnUgaXRlbSAqL1xuICBtZW51SXRlbXM6IER3TWVudUl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuICAvKiogY29sbGVjdGlvbiBvZiBzdWIgbWVudSAqL1xuICBzdWJNZW51czogRHdTdWJNZW51Q29tcG9uZW50W10gPSBbXTtcbiAgQElucHV0KCkgZHdUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIGR3SW5saW5lSW5kZW50ID0gMjQ7XG4gIEBJbnB1dCgpIGR3TW9kZTogRHdNb2RlID0gJ3ZlcnRpY2FsJztcbiAgQE91dHB1dCgpIGR3Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPER3TWVudUl0ZW1EaXJlY3RpdmU+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5Ecm9wRG93bih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luRHJvcERvd24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuZHdTZWxlY3RhYmxlID0gIXRoaXMuX2luRHJvcERvd247XG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUuaXNJbkRyb3BEb3duID0gdGhpcy5faW5Ecm9wRG93bik7XG4gICAgdGhpcy5zdWJNZW51cy5mb3JFYWNoKHN1Yk1lbnUgPT4gc3ViTWVudS5pc0luRHJvcERvd24gPSB0aGlzLl9pbkRyb3BEb3duKTtcbiAgfVxuXG4gIGdldCBkd0luRHJvcERvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luRHJvcERvd247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5saW5lQ29sbGFwc2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5saW5lQ29sbGFwc2VkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdJbmxpbmVDb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lubGluZUNvbGxhcHNlZDtcbiAgfVxuXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaGlkZVN1Yk1lbnVzKCk7XG4gICAgICB0aGlzLmR3TW9kZSA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVkdWN0aW9uU3ViTWVudXMoKTtcbiAgICAgIHRoaXMuZHdNb2RlID0gdGhpcy5jYWNoZU1vZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqIGRlZmluZSBob3N0IGNsYXNzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWRyb3Bkb3duLXZlcnRpY2FsJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1yb290JylcbiAgZ2V0IGlzSW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3SW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXJvb3QnKVxuICBnZXQgaXNOb3RJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmR3SW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtbGlnaHQnKVxuICBnZXQgc2V0RHJvcERvd25UaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdJbkRyb3BEb3duICYmICh0aGlzLmR3VGhlbWUgPT09ICdsaWdodCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1kYXJrJylcbiAgZ2V0IHNldERyb3BEb3duVGhlbWVEYXJrQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdJbkRyb3BEb3duICYmICh0aGlzLmR3VGhlbWUgPT09ICdkYXJrJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWxpZ2h0JylcbiAgZ2V0IHNldE1lbnVUaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5kd0luRHJvcERvd24pICYmICh0aGlzLmR3VGhlbWUgPT09ICdsaWdodCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1kYXJrJylcbiAgZ2V0IHNldE1lbnVUaGVtZURhcmtDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmR3SW5Ecm9wRG93bikgJiYgKHRoaXMuZHdUaGVtZSA9PT0gJ2RhcmsnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtdmVydGljYWwnKVxuICBnZXQgc2V0TWVudVZlcnRpY2FsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5kd0luRHJvcERvd24pICYmICh0aGlzLmR3TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0TWVudUhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmR3SW5Ecm9wRG93bikgJiYgKHRoaXMuZHdNb2RlID09PSAnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pbmxpbmUnKVxuICBnZXQgc2V0TWVudUlubGluZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuZHdJbkRyb3BEb3duKSAmJiAodGhpcy5kd01vZGUgPT09ICdpbmxpbmUnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZCcpXG4gIGdldCBzZXRNZW51SW5saW5lQ29sbGFwc2VkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5kd0luRHJvcERvd24pICYmICh0aGlzLmR3TW9kZSAhPT0gJ2hvcml6b250YWwnKSAmJiB0aGlzLmR3SW5saW5lQ29sbGFwc2VkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLmR3TW9kZTtcbiAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XG4gIH1cblxuICAvKiogdHJpZ2dlciB3aGVuIG1lbnUgaXRlbSBjbGlja2VkICovXG4gIGNsZWFyQWxsU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUuZHdTZWxlY3RlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIGhpZGVTdWJNZW51cygpOiB2b2lkIHtcbiAgICB0aGlzLnN1Yk1lbnVzT3BlbkluZGV4ID0gW107XG4gICAgdGhpcy5zdWJNZW51cy5mb3JFYWNoKChzdWJtZW51LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHN1Ym1lbnUuZHdPcGVuKSB7XG4gICAgICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXgucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgICBzdWJtZW51LmR3T3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVkdWN0aW9uU3ViTWVudXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJNZW51c09wZW5JbmRleC5mb3JFYWNoKGkgPT4gdGhpcy5zdWJNZW51c1sgaSBdLmR3T3BlbiA9IHRydWUpO1xuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcbiAgfVxuXG4gIGNsaWNrSXRlbSh2YWx1ZTogRHdNZW51SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMuZHdDbGljay5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19
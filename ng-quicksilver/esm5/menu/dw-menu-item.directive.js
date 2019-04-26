/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwMenuDirective } from './dw-menu.directive';
import { DwSubMenuComponent } from './dw-submenu.component';
var DwMenuItemDirective = /** @class */ (function () {
    function DwMenuItemDirective(renderer, cd, dwMenuDirective, dwSubMenuComponent, hostElement) {
        this.renderer = renderer;
        this.cd = cd;
        this.dwMenuDirective = dwMenuDirective;
        this.dwSubMenuComponent = dwSubMenuComponent;
        this.hostElement = hostElement;
        this._disabled = false;
        this._selected = false;
        this.level = 0;
        this.padding = null;
        this.isInDropDown = false;
    }
    Object.defineProperty(DwMenuItemDirective.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuItemDirective.prototype, "dwSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = toBoolean(value);
            if (this._selected) {
                this.renderer.addClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
            }
            else {
                this.renderer.removeClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
            }
        },
        enumerable: true,
        configurable: true
    });
    /** clear all item selected status except this */
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    DwMenuItemDirective.prototype.onClickItem = /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.dwDisabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.dwMenuDirective.clickItem(this);
        if (this.dwMenuDirective.dwSelectable) {
            this.dwMenuDirective.clearAllSelected();
            this.dwSelected = true;
        }
        if (this.dwSubMenuComponent) {
            this.dwSubMenuComponent.clickSubMenuDropDown();
        }
    };
    Object.defineProperty(DwMenuItemDirective.prototype, "isInDropDownClass", {
        /** define host class */
        get: /**
         * define host class
         * @return {?}
         */
        function () {
            return this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuItemDirective.prototype, "isNotInDropDownClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuItemDirective.prototype, "setDropDownDisableClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && this.dwDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuItemDirective.prototype, "setMenuDisableClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && this.dwDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwMenuItemDirective.prototype, "setPaddingLeft", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwMenuDirective.dwMode === 'inline') {
                if (this.dwSubMenuComponent) {
                    /** if in sub menu component and host menu's mode is inline add PADDING_BASE * level padding */
                    return (this.dwSubMenuComponent.level + 1) * this.dwMenuDirective.dwInlineIndent;
                }
                else {
                    /** not in sub menu component but root menu's mode is inline return default padding */
                    return this.dwMenuDirective.dwInlineIndent;
                }
            }
            else {
                return this.padding;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwMenuItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dwMenuDirective.menuItems.push(this);
        /** store origin padding in padding */
        if (this.hostElement.nativeElement.style['padding-left']) {
            this.padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
        }
        this.isInDropDown = this.dwMenuDirective.dwInDropDown;
    };
    DwMenuItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-menu-item]'
                },] }
    ];
    /** @nocollapse */
    DwMenuItemDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: DwMenuDirective },
        { type: DwSubMenuComponent, decorators: [{ type: Optional }] },
        { type: ElementRef }
    ]; };
    DwMenuItemDirective.propDecorators = {
        dwDisabled: [{ type: Input }],
        dwSelected: [{ type: Input }],
        onClickItem: [{ type: HostListener, args: ['click', ['$event'],] }],
        isInDropDownClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-item',] }],
        isNotInDropDownClass: [{ type: HostBinding, args: ['class.ant-menu-item',] }],
        setDropDownDisableClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-item-disabled',] }],
        setMenuDisableClass: [{ type: HostBinding, args: ['class.ant-menu-item-disabled',] }],
        setPaddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }]
    };
    return DwMenuItemDirective;
}());
export { DwMenuItemDirective };
function DwMenuItemDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMenuItemDirective.prototype._disabled;
    /** @type {?} */
    DwMenuItemDirective.prototype._selected;
    /** @type {?} */
    DwMenuItemDirective.prototype.level;
    /** @type {?} */
    DwMenuItemDirective.prototype.padding;
    /** @type {?} */
    DwMenuItemDirective.prototype.isInDropDown;
    /** @type {?} */
    DwMenuItemDirective.prototype.renderer;
    /** @type {?} */
    DwMenuItemDirective.prototype.cd;
    /** @type {?} */
    DwMenuItemDirective.prototype.dwMenuDirective;
    /** @type {?} */
    DwMenuItemDirective.prototype.dwSubMenuComponent;
    /** @type {?} */
    DwMenuItemDirective.prototype.hostElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibWVudS9kdy1tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQXlGMUQsNkJBQW9CLFFBQW1CLEVBQVMsRUFBcUIsRUFBVSxlQUFnQyxFQUFxQixrQkFBc0MsRUFBVSxXQUF1QjtRQUF2TCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBcUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO3lCQW5GdkwsS0FBSzt5QkFDTCxLQUFLO3FCQUNqQixDQUFDO3VCQUNDLElBQUk7NEJBQ0MsS0FBSztLQWdGbkI7SUE5RUQsc0JBQ0ksMkNBQVU7Ozs7UUFJZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFQRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7OztPQUFBO0lBTUQsc0JBQ0ksMkNBQVU7Ozs7UUFTZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFaRCxVQUNlLEtBQWM7WUFDM0Is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O2dCQWpHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBVkMsU0FBUztnQkFSVCxpQkFBaUI7Z0JBYVYsZUFBZTtnQkFDZixrQkFBa0IsdUJBeUZ5RixRQUFRO2dCQXJHMUgsVUFBVTs7OzZCQXdCVCxLQUFLOzZCQVNMLEtBQUs7OEJBZUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTtvQ0FrQmxDLFdBQVcsU0FBQyw4QkFBOEI7dUNBSzFDLFdBQVcsU0FBQyxxQkFBcUI7MENBS2pDLFdBQVcsU0FBQyx1Q0FBdUM7c0NBS25ELFdBQVcsU0FBQyw4QkFBOEI7aUNBSzFDLFdBQVcsU0FBQyx1QkFBdUI7OzhCQXpGdEM7O1NBb0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9kdy1tZW51LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEd1N1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2R3LXN1Ym1lbnUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2R3LW1lbnUtaXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIER3TWVudUl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xuICBsZXZlbCA9IDA7XG4gIHBhZGRpbmcgPSBudWxsO1xuICBpc0luRHJvcERvd24gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NlbGVjdGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuaXNJbkRyb3BEb3duID8gJ2FudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQnIDogJ2FudC1tZW51LWl0ZW0tc2VsZWN0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICAvKiogY2xlYXIgYWxsIGl0ZW0gc2VsZWN0ZWQgc3RhdHVzIGV4Y2VwdCB0aGlzICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxuICBvbkNsaWNrSXRlbShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kd01lbnVEaXJlY3RpdmUuY2xpY2tJdGVtKHRoaXMpO1xuICAgIGlmICh0aGlzLmR3TWVudURpcmVjdGl2ZS5kd1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuZHdNZW51RGlyZWN0aXZlLmNsZWFyQWxsU2VsZWN0ZWQoKTtcbiAgICAgIHRoaXMuZHdTZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmR3U3ViTWVudUNvbXBvbmVudCkge1xuICAgICAgdGhpcy5kd1N1Yk1lbnVDb21wb25lbnQuY2xpY2tTdWJNZW51RHJvcERvd24oKTtcbiAgICB9XG4gIH1cblxuICAvKiogZGVmaW5lIGhvc3QgY2xhc3MgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtJylcbiAgZ2V0IGlzSW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaXRlbScpXG4gIGdldCBpc05vdEluRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNJbkRyb3BEb3duO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkJylcbiAgZ2V0IHNldERyb3BEb3duRGlzYWJsZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93biAmJiB0aGlzLmR3RGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWl0ZW0tZGlzYWJsZWQnKVxuICBnZXQgc2V0TWVudURpc2FibGVDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgdGhpcy5kd0Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgc2V0UGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5kd01lbnVEaXJlY3RpdmUuZHdNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgaWYgKHRoaXMuZHdTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICAgIC8qKiBpZiBpbiBzdWIgbWVudSBjb21wb25lbnQgYW5kIGhvc3QgbWVudSdzIG1vZGUgaXMgaW5saW5lIGFkZCBQQURESU5HX0JBU0UgKiBsZXZlbCBwYWRkaW5nICovXG4gICAgICAgIHJldHVybiAodGhpcy5kd1N1Yk1lbnVDb21wb25lbnQubGV2ZWwgKyAxKSAqIHRoaXMuZHdNZW51RGlyZWN0aXZlLmR3SW5saW5lSW5kZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqIG5vdCBpbiBzdWIgbWVudSBjb21wb25lbnQgYnV0IHJvb3QgbWVudSdzIG1vZGUgaXMgaW5saW5lIHJldHVybiBkZWZhdWx0IHBhZGRpbmcgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuZHdNZW51RGlyZWN0aXZlLmR3SW5saW5lSW5kZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wYWRkaW5nO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBkd01lbnVEaXJlY3RpdmU6IER3TWVudURpcmVjdGl2ZSwgQE9wdGlvbmFsKCkgcHVibGljIGR3U3ViTWVudUNvbXBvbmVudDogRHdTdWJNZW51Q29tcG9uZW50LCBwcml2YXRlIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmR3TWVudURpcmVjdGl2ZS5tZW51SXRlbXMucHVzaCh0aGlzKTtcbiAgICAvKiogc3RvcmUgb3JpZ2luIHBhZGRpbmcgaW4gcGFkZGluZyAqL1xuICAgIGlmICh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGVbICdwYWRkaW5nLWxlZnQnIF0pIHtcbiAgICAgIHRoaXMucGFkZGluZyA9IHBhcnNlSW50KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZVsgJ3BhZGRpbmctbGVmdCcgXSwgMTApO1xuICAgIH1cbiAgICB0aGlzLmlzSW5Ecm9wRG93biA9IHRoaXMuZHdNZW51RGlyZWN0aXZlLmR3SW5Ecm9wRG93bjtcbiAgfVxufVxuIl19
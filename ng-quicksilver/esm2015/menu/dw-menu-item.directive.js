/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, Optional, Renderer2 } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwMenuDirective } from './dw-menu.directive';
import { DwSubMenuComponent } from './dw-submenu.component';
export class DwMenuItemDirective {
    /**
     * @param {?} renderer
     * @param {?} cd
     * @param {?} dwMenuDirective
     * @param {?} dwSubMenuComponent
     * @param {?} hostElement
     */
    constructor(renderer, cd, dwMenuDirective, dwSubMenuComponent, hostElement) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSelected(value) {
        this._selected = toBoolean(value);
        if (this._selected) {
            this.renderer.addClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
        else {
            this.renderer.removeClass(this.hostElement.nativeElement, this.isInDropDown ? 'ant-dropdown-menu-item-selected' : 'ant-menu-item-selected');
        }
    }
    /**
     * @return {?}
     */
    get dwSelected() {
        return this._selected;
    }
    /**
     * clear all item selected status except this
     * @param {?} e
     * @return {?}
     */
    onClickItem(e) {
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
    }
    /**
     * define host class
     * @return {?}
     */
    get isInDropDownClass() {
        return this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get isNotInDropDownClass() {
        return !this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setDropDownDisableClass() {
        return this.isInDropDown && this.dwDisabled;
    }
    /**
     * @return {?}
     */
    get setMenuDisableClass() {
        return (!this.isInDropDown) && this.dwDisabled;
    }
    /**
     * @return {?}
     */
    get setPaddingLeft() {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dwMenuDirective.menuItems.push(this);
        /** store origin padding in padding */
        if (this.hostElement.nativeElement.style['padding-left']) {
            this.padding = parseInt(this.hostElement.nativeElement.style['padding-left'], 10);
        }
        this.isInDropDown = this.dwMenuDirective.dwInDropDown;
    }
}
DwMenuItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[dw-menu-item]'
            },] }
];
/** @nocollapse */
DwMenuItemDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: DwMenuDirective },
    { type: DwSubMenuComponent, decorators: [{ type: Optional }] },
    { type: ElementRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVudS1pdGVtLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibWVudS9kdy1tZW51LWl0ZW0uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFlBQVksRUFDWixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzVELE1BQU07Ozs7Ozs7O0lBb0ZKLFlBQW9CLFFBQW1CLEVBQVMsRUFBcUIsRUFBVSxlQUFnQyxFQUFxQixrQkFBc0MsRUFBVSxXQUF1QjtRQUF2TCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBcUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO3lCQW5GdkwsS0FBSzt5QkFDTCxLQUFLO3FCQUNqQixDQUFDO3VCQUNDLElBQUk7NEJBQ0MsS0FBSztLQWdGbkI7Ozs7O0lBOUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMs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MUgsVUFBVTs7O3lCQXdCVCxLQUFLO3lCQVNMLEtBQUs7MEJBZUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTtnQ0FrQmxDLFdBQVcsU0FBQyw4QkFBOEI7bUNBSzFDLFdBQVcsU0FBQyxxQkFBcUI7c0NBS2pDLFdBQVcsU0FBQyx1Q0FBdUM7a0NBS25ELFdBQVcsU0FBQyw4QkFBOEI7NkJBSzFDLFdBQVcsU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vZHctbWVudS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHdTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9kdy1zdWJtZW51LmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkdy1tZW51LWl0ZW1dJ1xufSlcbmV4cG9ydCBjbGFzcyBEd01lbnVJdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgbGV2ZWwgPSAwO1xuICBwYWRkaW5nID0gbnVsbDtcbiAgaXNJbkRyb3BEb3duID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWxlY3RlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkJyA6ICdhbnQtbWVudS1pdGVtLXNlbGVjdGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLmlzSW5Ecm9wRG93biA/ICdhbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkJyA6ICdhbnQtbWVudS1pdGVtLXNlbGVjdGVkJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3U2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgLyoqIGNsZWFyIGFsbCBpdGVtIHNlbGVjdGVkIHN0YXR1cyBleGNlcHQgdGhpcyAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgb25DbGlja0l0ZW0oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHdNZW51RGlyZWN0aXZlLmNsaWNrSXRlbSh0aGlzKTtcbiAgICBpZiAodGhpcy5kd01lbnVEaXJlY3RpdmUuZHdTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLmR3TWVudURpcmVjdGl2ZS5jbGVhckFsbFNlbGVjdGVkKCk7XG4gICAgICB0aGlzLmR3U2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd1N1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHdTdWJNZW51Q29tcG9uZW50LmNsaWNrU3ViTWVudURyb3BEb3duKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIGRlZmluZSBob3N0IGNsYXNzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaXRlbScpXG4gIGdldCBpc0luRHJvcERvd25DbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWl0ZW0nKVxuICBnZXQgaXNOb3RJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZCcpXG4gIGdldCBzZXREcm9wRG93bkRpc2FibGVDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgdGhpcy5kd0Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pdGVtLWRpc2FibGVkJylcbiAgZ2V0IHNldE1lbnVEaXNhYmxlQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmIHRoaXMuZHdEaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0LnB4JylcbiAgZ2V0IHNldFBhZGRpbmdMZWZ0KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuZHdNZW51RGlyZWN0aXZlLmR3TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIGlmICh0aGlzLmR3U3ViTWVudUNvbXBvbmVudCkge1xuICAgICAgICAvKiogaWYgaW4gc3ViIG1lbnUgY29tcG9uZW50IGFuZCBob3N0IG1lbnUncyBtb2RlIGlzIGlubGluZSBhZGQgUEFERElOR19CQVNFICogbGV2ZWwgcGFkZGluZyAqL1xuICAgICAgICByZXR1cm4gKHRoaXMuZHdTdWJNZW51Q29tcG9uZW50LmxldmVsICsgMSkgKiB0aGlzLmR3TWVudURpcmVjdGl2ZS5kd0lubGluZUluZGVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKiBub3QgaW4gc3ViIG1lbnUgY29tcG9uZW50IGJ1dCByb290IG1lbnUncyBtb2RlIGlzIGlubGluZSByZXR1cm4gZGVmYXVsdCBwYWRkaW5nICovXG4gICAgICAgIHJldHVybiB0aGlzLmR3TWVudURpcmVjdGl2ZS5kd0lubGluZUluZGVudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGFkZGluZztcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZHdNZW51RGlyZWN0aXZlOiBEd01lbnVEaXJlY3RpdmUsIEBPcHRpb25hbCgpIHB1YmxpYyBkd1N1Yk1lbnVDb21wb25lbnQ6IER3U3ViTWVudUNvbXBvbmVudCwgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kd01lbnVEaXJlY3RpdmUubWVudUl0ZW1zLnB1c2godGhpcyk7XG4gICAgLyoqIHN0b3JlIG9yaWdpbiBwYWRkaW5nIGluIHBhZGRpbmcgKi9cbiAgICBpZiAodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlWyAncGFkZGluZy1sZWZ0JyBdKSB7XG4gICAgICB0aGlzLnBhZGRpbmcgPSBwYXJzZUludCh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGVbICdwYWRkaW5nLWxlZnQnIF0sIDEwKTtcbiAgICB9XG4gICAgdGhpcy5pc0luRHJvcERvd24gPSB0aGlzLmR3TWVudURpcmVjdGl2ZS5kd0luRHJvcERvd247XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwInputDirective } from './dw-input.directive';
export class DwInputGroupComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._addOnBefore = '';
        this._addOnAfter = '';
        this._prefix = '';
        this._suffix = '';
        this._size = 'default';
        this._compact = false;
        this._search = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this._size = value;
        this.updateChildrenInputSize();
    }
    /**
     * @return {?}
     */
    get dwSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCompact(value) {
        this._compact = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwCompact() {
        return this._compact;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAddOnBefore(value) {
        this.isAddOnBeforeString = !(value instanceof TemplateRef);
        this._addOnBefore = value;
    }
    /**
     * @return {?}
     */
    get dwAddOnBefore() {
        return this._addOnBefore;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAddOnAfter(value) {
        this.isAddOnAfterString = !(value instanceof TemplateRef);
        this._addOnAfter = value;
    }
    /**
     * @return {?}
     */
    get dwAddOnAfter() {
        return this._addOnAfter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPrefix(value) {
        this.isPrefixString = !(value instanceof TemplateRef);
        this._prefix = value;
    }
    /**
     * @return {?}
     */
    get dwPrefix() {
        return this._prefix;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSuffix(value) {
        this.isSuffixString = !(value instanceof TemplateRef);
        this._suffix = value;
    }
    /**
     * @return {?}
     */
    get dwSuffix() {
        return this._suffix;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSearch(value) {
        this._search = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwSearch() {
        return this._search;
    }
    /**
     * @return {?}
     */
    get isLarge() {
        return this.dwSize === 'large';
    }
    /**
     * @return {?}
     */
    get isSmall() {
        return this.dwSize === 'small';
    }
    /**
     * @return {?}
     */
    get isAffix() {
        return (!!(this.dwSuffix || this.dwPrefix || this.dwPrefixIcon || this.dwSuffixIcon));
    }
    /**
     * @return {?}
     */
    get isAffixWrapper() {
        return (!!(this.dwSuffix || this.dwPrefix || this.dwPrefixIcon || this.dwSuffixIcon)) && !this.isAddOn;
    }
    /**
     * @return {?}
     */
    get isAddOn() {
        return !!(this.dwAddOnAfter || this.dwAddOnBefore || this.dwAddOnAfterIcon || this.dwAddOnBeforeIcon);
    }
    /**
     * @return {?}
     */
    get isGroup() {
        return (!this.isAffix) && (!this.isAddOn);
    }
    /**
     * @return {?}
     */
    get isLargeGroup() {
        return this.isGroup && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeGroupWrapper() {
        return this.isAddOn && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeAffix() {
        return this.isAffixWrapper && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isLargeSearch() {
        return this.dwSearch && this.isLarge;
    }
    /**
     * @return {?}
     */
    get isSmallGroup() {
        return this.isGroup && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallAffix() {
        return this.isAffixWrapper && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallGroupWrapper() {
        return this.isAddOn && this.isSmall;
    }
    /**
     * @return {?}
     */
    get isSmallSearch() {
        return this.dwSearch && this.isSmall;
    }
    /**
     * @return {?}
     */
    updateChildrenInputSize() {
        if (this.dwInputDirectiveQueryList) {
            this.dwInputDirectiveQueryList.forEach(item => item.dwSize = this.dwSize);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenInputSize();
    }
}
DwInputGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-input-group',
                preserveWhitespaces: false,
                template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\n  <span class=\"ant-input-group-addon\" *ngIf=\"dwAddOnBefore || dwAddOnBeforeIcon\">\n    <i [ngClass]=\"dwAddOnBeforeIcon\" *ngIf=\"dwAddOnBeforeIcon\"></i>\n    <ng-container *ngIf=\"isAddOnBeforeString; else addOnBeforeTemplate\">{{ dwAddOnBefore }}</ng-container>\n    <ng-template #addOnBeforeTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwAddOnBefore\"></ng-template>\n    </ng-template>\n  </span>\n  <ng-template [ngIf]=\"!isAffix\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n  </span>\n  <span class=\"ant-input-group-addon\" *ngIf=\"dwAddOnAfter || dwAddOnAfterIcon\">\n    <i [ngClass]=\"dwAddOnAfterIcon\" *ngIf=\"dwAddOnAfterIcon\"></i>\n    <ng-container *ngIf=\"isAddOnAfterString; else addOnAfterTemplate\">{{ dwAddOnAfter }}</ng-container>\n    <ng-template #addOnAfterTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwAddOnAfter\"></ng-template>\n    </ng-template>\n  </span>\n</span>\n<ng-container *ngIf=\"isAffix && !isAddOn\">\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n</ng-container>\n<ng-template #affixTemplate>\n  <span class=\"ant-input-prefix\" *ngIf=\"dwPrefix || dwPrefixIcon\">\n    <i [ngClass]=\"dwPrefixIcon\" *ngIf=\"dwPrefixIcon\"></i>\n    <ng-container *ngIf=\"isPrefixString; else prefixTemplate\">{{ dwPrefix }}</ng-container>\n    <ng-template #prefixTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwPrefix\"></ng-template>\n    </ng-template>\n  </span>\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-suffix\" *ngIf=\"dwSuffix || dwSuffixIcon\">\n    <i [ngClass]=\"dwSuffixIcon\" *ngIf=\"dwSuffixIcon\"></i>\n    <ng-container *ngIf=\"isSuffixString; else suffixTemplate\">{{ dwSuffix }}</ng-container>\n    <ng-template #suffixTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwSuffix\"></ng-template>\n    </ng-template>\n  </span>\n</ng-template>\n<ng-template [ngIf]=\"isGroup\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>"
            }] }
];
/** @nocollapse */
DwInputGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
DwInputGroupComponent.propDecorators = {
    dwInputDirectiveQueryList: [{ type: ContentChildren, args: [DwInputDirective,] }],
    dwAddOnBeforeIcon: [{ type: Input }],
    dwAddOnAfterIcon: [{ type: Input }],
    dwPrefixIcon: [{ type: Input }],
    dwSuffixIcon: [{ type: Input }],
    dwSize: [{ type: Input }],
    dwCompact: [{ type: Input }, { type: HostBinding, args: [`class.ant-input-group-compact`,] }],
    dwAddOnBefore: [{ type: Input }],
    dwAddOnAfter: [{ type: Input }],
    dwPrefix: [{ type: Input }],
    dwSuffix: [{ type: Input }],
    dwSearch: [{ type: Input }, { type: HostBinding, args: [`class.ant-input-search-enter-button`,] }, { type: HostBinding, args: [`class.ant-input-search`,] }],
    isAffixWrapper: [{ type: HostBinding, args: ['class.ant-input-affix-wrapper',] }],
    isAddOn: [{ type: HostBinding, args: ['class.ant-input-group-wrapper',] }],
    isGroup: [{ type: HostBinding, args: ['class.ant-input-group',] }],
    isLargeGroup: [{ type: HostBinding, args: [`class.ant-input-group-lg`,] }],
    isLargeGroupWrapper: [{ type: HostBinding, args: [`class.ant-input-group-wrapper-lg`,] }],
    isLargeAffix: [{ type: HostBinding, args: [`class.ant-input-affix-wrapper-lg`,] }],
    isLargeSearch: [{ type: HostBinding, args: [`class.ant-input-search-lg`,] }],
    isSmallGroup: [{ type: HostBinding, args: [`class.ant-input-group-sm`,] }],
    isSmallAffix: [{ type: HostBinding, args: [`class.ant-input-affix-wrapper-sm`,] }],
    isSmallGroupWrapper: [{ type: HostBinding, args: [`class.ant-input-group-wrapper-sm`,] }],
    isSmallSearch: [{ type: HostBinding, args: [`class.ant-input-search-sm`,] }]
};
function DwInputGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwInputGroupComponent.prototype._addOnBefore;
    /** @type {?} */
    DwInputGroupComponent.prototype._addOnAfter;
    /** @type {?} */
    DwInputGroupComponent.prototype._prefix;
    /** @type {?} */
    DwInputGroupComponent.prototype._suffix;
    /** @type {?} */
    DwInputGroupComponent.prototype._size;
    /** @type {?} */
    DwInputGroupComponent.prototype._compact;
    /** @type {?} */
    DwInputGroupComponent.prototype._search;
    /** @type {?} */
    DwInputGroupComponent.prototype.isAddOnBeforeString;
    /** @type {?} */
    DwInputGroupComponent.prototype.isAddOnAfterString;
    /** @type {?} */
    DwInputGroupComponent.prototype.isPrefixString;
    /** @type {?} */
    DwInputGroupComponent.prototype.isSuffixString;
    /** @type {?} */
    DwInputGroupComponent.prototype.dwInputDirectiveQueryList;
    /** @type {?} */
    DwInputGroupComponent.prototype.dwAddOnBeforeIcon;
    /** @type {?} */
    DwInputGroupComponent.prototype.dwAddOnAfterIcon;
    /** @type {?} */
    DwInputGroupComponent.prototype.dwPrefixIcon;
    /** @type {?} */
    DwInputGroupComponent.prototype.dwSuffixIcon;
    /** @type {?} */
    DwInputGroupComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJpbnB1dC9kdy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBV3hELE1BQU07Ozs7SUFpS0osWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7NEJBaEtpQixFQUFFOzJCQUNILEVBQUU7dUJBQ04sRUFBRTt1QkFDRixFQUFFO3FCQUNWLFNBQVM7d0JBQzVCLEtBQUs7dUJBQ04sS0FBSztLQTRKdEI7Ozs7O0lBakpELElBQWEsTUFBTSxDQUFDLEtBQTJCO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQ2hDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBRUksU0FBUyxDQUFDLEtBQWM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFDSSxhQUFhLENBQUMsS0FBaUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFD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QyxXQUFXLFNBQUMsa0NBQWtDOzJCQUs5QyxXQUFXLFNBQUMsa0NBQWtDOzRCQUs5QyxXQUFXLFNBQUMsMkJBQTJCOzJCQUt2QyxXQUFXLFNBQUMsMEJBQTBCOzJCQUt0QyxXQUFXLFNBQUMsa0NBQWtDO2tDQUs5QyxXQUFXLFNBQUMsa0NBQWtDOzRCQUs5QyxXQUFXLFNBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZHctaW5wdXQuZGlyZWN0aXZlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIFRJbnB1dEdyb3VwSWNvbkNsYXNzID0gc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgWyBrbGFzczogc3RyaW5nIF06IGFueTsgfTtcbmV4cG9ydCB0eXBlIER3SW5wdXRHcm91cFNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctaW5wdXQtZ3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRHdJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2FkZE9uQmVmb3JlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xuICBwcml2YXRlIF9hZGRPbkFmdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xuICBwcml2YXRlIF9wcmVmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XG4gIHByaXZhdGUgX3N1ZmZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnJztcbiAgcHJpdmF0ZSBfc2l6ZTogRHdJbnB1dEdyb3VwU2l6ZVR5cGUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2NvbXBhY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VhcmNoID0gZmFsc2U7XG4gIGlzQWRkT25CZWZvcmVTdHJpbmc6IGJvb2xlYW47XG4gIGlzQWRkT25BZnRlclN0cmluZzogYm9vbGVhbjtcbiAgaXNQcmVmaXhTdHJpbmc6IGJvb2xlYW47XG4gIGlzU3VmZml4U3RyaW5nOiBib29sZWFuO1xuICBAQ29udGVudENoaWxkcmVuKER3SW5wdXREaXJlY3RpdmUpIGR3SW5wdXREaXJlY3RpdmVRdWVyeUxpc3Q6IFF1ZXJ5TGlzdDxEd0lucHV0RGlyZWN0aXZlPjtcbiAgQElucHV0KCkgZHdBZGRPbkJlZm9yZUljb246IFRJbnB1dEdyb3VwSWNvbkNsYXNzO1xuICBASW5wdXQoKSBkd0FkZE9uQWZ0ZXJJY29uOiBUSW5wdXRHcm91cEljb25DbGFzcztcbiAgQElucHV0KCkgZHdQcmVmaXhJY29uOiBUSW5wdXRHcm91cEljb25DbGFzcztcbiAgQElucHV0KCkgZHdTdWZmaXhJY29uOiBUSW5wdXRHcm91cEljb25DbGFzcztcblxuICBASW5wdXQoKSBzZXQgZHdTaXplKHZhbHVlOiBEd0lucHV0R3JvdXBTaXplVHlwZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XG4gIH1cblxuICBnZXQgZHdTaXplKCk6IER3SW5wdXRHcm91cFNpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RgKVxuICBzZXQgZHdDb21wYWN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29tcGFjdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdDb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb21wYWN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QWRkT25CZWZvcmUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0FkZE9uQmVmb3JlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9hZGRPbkJlZm9yZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3QWRkT25CZWZvcmUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZGRPbkJlZm9yZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FkZE9uQWZ0ZXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0FkZE9uQWZ0ZXJTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2FkZE9uQWZ0ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0FkZE9uQWZ0ZXIoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZGRPbkFmdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UHJlZml4KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNQcmVmaXhTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3UHJlZml4KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U3VmZml4KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNTdWZmaXhTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3U3VmZml4KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fc3VmZml4O1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWVudGVyLWJ1dHRvbmApXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LXNlYXJjaGApXG4gIHNldCBkd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaDtcbiAgfVxuXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIGdldCBpc1NtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3U2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIGdldCBpc0FmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoISEodGhpcy5kd1N1ZmZpeCB8fCB0aGlzLmR3UHJlZml4IHx8IHRoaXMuZHdQcmVmaXhJY29uIHx8IHRoaXMuZHdTdWZmaXhJY29uKSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyJylcbiAgZ2V0IGlzQWZmaXhXcmFwcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoISEodGhpcy5kd1N1ZmZpeCB8fCB0aGlzLmR3UHJlZml4IHx8IHRoaXMuZHdQcmVmaXhJY29uIHx8IHRoaXMuZHdTdWZmaXhJY29uKSkgJiYgIXRoaXMuaXNBZGRPbjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXInKVxuICBnZXQgaXNBZGRPbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5kd0FkZE9uQWZ0ZXIgfHwgdGhpcy5kd0FkZE9uQmVmb3JlIHx8IHRoaXMuZHdBZGRPbkFmdGVySWNvbiB8fCB0aGlzLmR3QWRkT25CZWZvcmVJY29uKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWlucHV0LWdyb3VwJylcbiAgZ2V0IGlzR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0FmZml4KSAmJiAoIXRoaXMuaXNBZGRPbik7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC1sZ2ApXG4gIGdldCBpc0xhcmdlR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnYClcbiAgZ2V0IGlzTGFyZ2VHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnYClcbiAgZ2V0IGlzTGFyZ2VBZmZpeCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1zZWFyY2gtbGdgKVxuICBnZXQgaXNMYXJnZVNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1NlYXJjaCAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC1zbWApXG4gIGdldCBpc1NtYWxsR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtYClcbiAgZ2V0IGlzU21hbGxBZmZpeCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXNtYClcbiAgZ2V0IGlzU21hbGxHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1zZWFyY2gtc21gKVxuICBnZXQgaXNTbWFsbFNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1NlYXJjaCAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0lucHV0RGlyZWN0aXZlUXVlcnlMaXN0KSB7XG4gICAgICB0aGlzLmR3SW5wdXREaXJlY3RpdmVRdWVyeUxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uZHdTaXplID0gdGhpcy5kd1NpemUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgfVxufVxuIl19
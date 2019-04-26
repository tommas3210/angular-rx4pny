/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwInputDirective } from './dw-input.directive';
var DwInputGroupComponent = /** @class */ (function () {
    function DwInputGroupComponent(el) {
        this.el = el;
        this._addOnBefore = '';
        this._addOnAfter = '';
        this._prefix = '';
        this._suffix = '';
        this._size = 'default';
        this._compact = false;
        this._search = false;
    }
    Object.defineProperty(DwInputGroupComponent.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.updateChildrenInputSize();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "dwCompact", {
        get: /**
         * @return {?}
         */
        function () {
            return this._compact;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._compact = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "dwAddOnBefore", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addOnBefore;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isAddOnBeforeString = !(value instanceof TemplateRef);
            this._addOnBefore = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "dwAddOnAfter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._addOnAfter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isAddOnAfterString = !(value instanceof TemplateRef);
            this._addOnAfter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "dwPrefix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._prefix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isPrefixString = !(value instanceof TemplateRef);
            this._prefix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "dwSuffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._suffix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isSuffixString = !(value instanceof TemplateRef);
            this._suffix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "dwSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._search;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._search = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return (!!(this.dwSuffix || this.dwPrefix || this.dwPrefixIcon || this.dwSuffixIcon));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isAffixWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return (!!(this.dwSuffix || this.dwPrefix || this.dwPrefixIcon || this.dwSuffixIcon)) && !this.isAddOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isAddOn", {
        get: /**
         * @return {?}
         */
        function () {
            return !!(this.dwAddOnAfter || this.dwAddOnBefore || this.dwAddOnAfterIcon || this.dwAddOnBeforeIcon);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isAffix) && (!this.isAddOn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isLargeGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isLargeGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isLargeAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isLargeSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSearch && this.isLarge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isSmallGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isGroup && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isSmallAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAffixWrapper && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isSmallGroupWrapper", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isAddOn && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwInputGroupComponent.prototype, "isSmallSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSearch && this.isSmall;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwInputGroupComponent.prototype.updateChildrenInputSize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dwInputDirectiveQueryList) {
            this.dwInputDirectiveQueryList.forEach(function (item) { return item.dwSize = _this.dwSize; });
        }
    };
    /**
     * @return {?}
     */
    DwInputGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateChildrenInputSize();
    };
    DwInputGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-input-group',
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-input-wrapper ant-input-group\" *ngIf=\"isAddOn\">\n  <span class=\"ant-input-group-addon\" *ngIf=\"dwAddOnBefore || dwAddOnBeforeIcon\">\n    <i [ngClass]=\"dwAddOnBeforeIcon\" *ngIf=\"dwAddOnBeforeIcon\"></i>\n    <ng-container *ngIf=\"isAddOnBeforeString; else addOnBeforeTemplate\">{{ dwAddOnBefore }}</ng-container>\n    <ng-template #addOnBeforeTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwAddOnBefore\"></ng-template>\n    </ng-template>\n  </span>\n  <ng-template [ngIf]=\"!isAffix\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-affix-wrapper\" [class.ant-input-affix-wrapper-sm]=\"isSmall\" [class.ant-input-affix-wrapper-lg]=\"isLarge\" *ngIf=\"isAffix\">\n    <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n  </span>\n  <span class=\"ant-input-group-addon\" *ngIf=\"dwAddOnAfter || dwAddOnAfterIcon\">\n    <i [ngClass]=\"dwAddOnAfterIcon\" *ngIf=\"dwAddOnAfterIcon\"></i>\n    <ng-container *ngIf=\"isAddOnAfterString; else addOnAfterTemplate\">{{ dwAddOnAfter }}</ng-container>\n    <ng-template #addOnAfterTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwAddOnAfter\"></ng-template>\n    </ng-template>\n  </span>\n</span>\n<ng-container *ngIf=\"isAffix && !isAddOn\">\n  <ng-template *ngTemplateOutlet=\"affixTemplate\"></ng-template>\n</ng-container>\n<ng-template #affixTemplate>\n  <span class=\"ant-input-prefix\" *ngIf=\"dwPrefix || dwPrefixIcon\">\n    <i [ngClass]=\"dwPrefixIcon\" *ngIf=\"dwPrefixIcon\"></i>\n    <ng-container *ngIf=\"isPrefixString; else prefixTemplate\">{{ dwPrefix }}</ng-container>\n    <ng-template #prefixTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwPrefix\"></ng-template>\n    </ng-template>\n  </span>\n  <ng-template *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n  <span class=\"ant-input-suffix\" *ngIf=\"dwSuffix || dwSuffixIcon\">\n    <i [ngClass]=\"dwSuffixIcon\" *ngIf=\"dwSuffixIcon\"></i>\n    <ng-container *ngIf=\"isSuffixString; else suffixTemplate\">{{ dwSuffix }}</ng-container>\n    <ng-template #suffixTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwSuffix\"></ng-template>\n    </ng-template>\n  </span>\n</ng-template>\n<ng-template [ngIf]=\"isGroup\" *ngTemplateOutlet=\"contentTemplate\"></ng-template>\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>"
                }] }
    ];
    /** @nocollapse */
    DwInputGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DwInputGroupComponent.propDecorators = {
        dwInputDirectiveQueryList: [{ type: ContentChildren, args: [DwInputDirective,] }],
        dwAddOnBeforeIcon: [{ type: Input }],
        dwAddOnAfterIcon: [{ type: Input }],
        dwPrefixIcon: [{ type: Input }],
        dwSuffixIcon: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwCompact: [{ type: Input }, { type: HostBinding, args: ["class.ant-input-group-compact",] }],
        dwAddOnBefore: [{ type: Input }],
        dwAddOnAfter: [{ type: Input }],
        dwPrefix: [{ type: Input }],
        dwSuffix: [{ type: Input }],
        dwSearch: [{ type: Input }, { type: HostBinding, args: ["class.ant-input-search-enter-button",] }, { type: HostBinding, args: ["class.ant-input-search",] }],
        isAffixWrapper: [{ type: HostBinding, args: ['class.ant-input-affix-wrapper',] }],
        isAddOn: [{ type: HostBinding, args: ['class.ant-input-group-wrapper',] }],
        isGroup: [{ type: HostBinding, args: ['class.ant-input-group',] }],
        isLargeGroup: [{ type: HostBinding, args: ["class.ant-input-group-lg",] }],
        isLargeGroupWrapper: [{ type: HostBinding, args: ["class.ant-input-group-wrapper-lg",] }],
        isLargeAffix: [{ type: HostBinding, args: ["class.ant-input-affix-wrapper-lg",] }],
        isLargeSearch: [{ type: HostBinding, args: ["class.ant-input-search-lg",] }],
        isSmallGroup: [{ type: HostBinding, args: ["class.ant-input-group-sm",] }],
        isSmallAffix: [{ type: HostBinding, args: ["class.ant-input-affix-wrapper-sm",] }],
        isSmallGroupWrapper: [{ type: HostBinding, args: ["class.ant-input-group-wrapper-sm",] }],
        isSmallSearch: [{ type: HostBinding, args: ["class.ant-input-search-sm",] }]
    };
    return DwInputGroupComponent;
}());
export { DwInputGroupComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaW5wdXQtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJpbnB1dC9kdy1pbnB1dC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQTRLdEQsK0JBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOzRCQWhLaUIsRUFBRTsyQkFDSCxFQUFFO3VCQUNOLEVBQUU7dUJBQ0YsRUFBRTtxQkFDVixTQUFTO3dCQUM1QixLQUFLO3VCQUNOLEtBQUs7S0E0SnRCO0lBakpELHNCQUFhLHlDQUFNOzs7O1FBS25CO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVBELFVBQW9CLEtBQTJCO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDOzs7T0FBQTtJQU1ELHNCQUVJLDRDQUFTOzs7O1FBSWI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBUkQsVUFFYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7T0FBQTtJQU1ELHNCQUNJLGdEQUFhOzs7O1FBS2pCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCOzs7OztRQVJELFVBQ2tCLEtBQWlDO1lBQ2pELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCOzs7T0FBQTtJQU1ELHNCQUNJLCtDQUFZOzs7O1FBS2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVJELFVBQ2lCLEtBQWlDO1lBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCOzs7T0FBQTtJQU1ELHNCQUNJLDJDQUFROzs7O1FBS1o7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBUkQsVUFDYSxLQUFpQztZQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7OztPQUFBO0lBTUQsc0JBQ0ksMkNBQVE7Ozs7UUFLWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFSRCxVQUNhLEtBQWlDO1lBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0Qjs7O09BQUE7SUFNRCxzQkFHSSwyQ0FBUTs7OztRQUlaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVRELFVBR2EsS0FBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7O09BQUE7SUFNRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQztTQUNoQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQ3ZGOzs7T0FBQTtJQUVELHNCQUNJLGlEQUFjOzs7O1FBRGxCO1lBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN4Rzs7O09BQUE7SUFFRCxzQkFDSSwwQ0FBTzs7OztRQURYO1lBRUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZHOzs7T0FBQTtJQUVELHNCQUNJLDBDQUFPOzs7O1FBRFg7WUFFRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQzs7O09BQUE7SUFFRCxzQkFDSSwrQ0FBWTs7OztRQURoQjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JDOzs7T0FBQTtJQUVELHNCQUNJLHNEQUFtQjs7OztRQUR2QjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JDOzs7T0FBQTtJQUVELHNCQUNJLCtDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDNUM7OztPQUFBO0lBRUQsc0JBQ0ksZ0RBQWE7Ozs7UUFEakI7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN0Qzs7O09BQUE7SUFFRCxzQkFDSSwrQ0FBWTs7OztRQURoQjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JDOzs7T0FBQTtJQUVELHNCQUNJLCtDQUFZOzs7O1FBRGhCO1lBRUUsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDNUM7OztPQUFBO0lBRUQsc0JBQ0ksc0RBQW1COzs7O1FBRHZCO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckM7OztPQUFBO0lBRUQsc0JBQ0ksZ0RBQWE7Ozs7UUFEakI7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN0Qzs7O09BQUE7Ozs7SUFFRCx1REFBdUI7OztJQUF2QjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO1NBQzNFO0tBQ0Y7Ozs7SUFNRCxrREFBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQ2hDOztnQkE3S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxnQkFBZ0I7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDZ6RUFBc0Q7aUJBQ3ZEOzs7O2dCQWpCQyxVQUFVOzs7NENBK0JULGVBQWUsU0FBQyxnQkFBZ0I7b0NBQ2hDLEtBQUs7bUNBQ0wsS0FBSzsrQkFDTCxLQUFLOytCQUNMLEtBQUs7eUJBRUwsS0FBSzs0QkFTTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLCtCQUErQjtnQ0FTM0MsS0FBSzsrQkFVTCxLQUFLOzJCQVVMLEtBQUs7MkJBVUwsS0FBSzsyQkFVTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLHFDQUFxQyxjQUNqRCxXQUFXLFNBQUMsd0JBQXdCO2lDQXFCcEMsV0FBVyxTQUFDLCtCQUErQjswQkFLM0MsV0FBVyxTQUFDLCtCQUErQjswQkFLM0MsV0FBVyxTQUFDLHVCQUF1QjsrQkFLbkMsV0FBVyxTQUFDLDBCQUEwQjtzQ0FLdEMsV0FBVyxTQUFDLGtDQUFrQzsrQkFLOUMsV0FBVyxTQUFDLGtDQUFrQztnQ0FLOUMsV0FBVyxTQUFDLDJCQUEyQjsrQkFLdkMsV0FBVyxTQUFDLDBCQUEwQjsrQkFLdEMsV0FBVyxTQUFDLGtDQUFrQztzQ0FLOUMsV0FBVyxTQUFDLGtDQUFrQztnQ0FLOUMsV0FBVyxTQUFDLDJCQUEyQjs7Z0NBN0sxQzs7U0F1QmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vZHctaW5wdXQuZGlyZWN0aXZlJztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCB0eXBlIFRJbnB1dEdyb3VwSWNvbkNsYXNzID0gc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgWyBrbGFzczogc3RyaW5nIF06IGFueTsgfTtcbmV4cG9ydCB0eXBlIER3SW5wdXRHcm91cFNpemVUeXBlID0gJ2xhcmdlJyB8ICdkZWZhdWx0JyB8ICdzbWFsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctaW5wdXQtZ3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctaW5wdXQtZ3JvdXAuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRHdJbnB1dEdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2FkZE9uQmVmb3JlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xuICBwcml2YXRlIF9hZGRPbkFmdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xuICBwcml2YXRlIF9wcmVmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XG4gIHByaXZhdGUgX3N1ZmZpeDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAnJztcbiAgcHJpdmF0ZSBfc2l6ZTogRHdJbnB1dEdyb3VwU2l6ZVR5cGUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2NvbXBhY3QgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VhcmNoID0gZmFsc2U7XG4gIGlzQWRkT25CZWZvcmVTdHJpbmc6IGJvb2xlYW47XG4gIGlzQWRkT25BZnRlclN0cmluZzogYm9vbGVhbjtcbiAgaXNQcmVmaXhTdHJpbmc6IGJvb2xlYW47XG4gIGlzU3VmZml4U3RyaW5nOiBib29sZWFuO1xuICBAQ29udGVudENoaWxkcmVuKER3SW5wdXREaXJlY3RpdmUpIGR3SW5wdXREaXJlY3RpdmVRdWVyeUxpc3Q6IFF1ZXJ5TGlzdDxEd0lucHV0RGlyZWN0aXZlPjtcbiAgQElucHV0KCkgZHdBZGRPbkJlZm9yZUljb246IFRJbnB1dEdyb3VwSWNvbkNsYXNzO1xuICBASW5wdXQoKSBkd0FkZE9uQWZ0ZXJJY29uOiBUSW5wdXRHcm91cEljb25DbGFzcztcbiAgQElucHV0KCkgZHdQcmVmaXhJY29uOiBUSW5wdXRHcm91cEljb25DbGFzcztcbiAgQElucHV0KCkgZHdTdWZmaXhJY29uOiBUSW5wdXRHcm91cEljb25DbGFzcztcblxuICBASW5wdXQoKSBzZXQgZHdTaXplKHZhbHVlOiBEd0lucHV0R3JvdXBTaXplVHlwZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuSW5wdXRTaXplKCk7XG4gIH1cblxuICBnZXQgZHdTaXplKCk6IER3SW5wdXRHcm91cFNpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RgKVxuICBzZXQgZHdDb21wYWN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29tcGFjdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdDb21wYWN0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb21wYWN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QWRkT25CZWZvcmUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0FkZE9uQmVmb3JlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9hZGRPbkJlZm9yZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3QWRkT25CZWZvcmUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZGRPbkJlZm9yZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FkZE9uQWZ0ZXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0FkZE9uQWZ0ZXJTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2FkZE9uQWZ0ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0FkZE9uQWZ0ZXIoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9hZGRPbkFmdGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UHJlZml4KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNQcmVmaXhTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3ByZWZpeCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3UHJlZml4KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZml4O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U3VmZml4KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNTdWZmaXhTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3U3VmZml4KCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fc3VmZml4O1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKGBjbGFzcy5hbnQtaW5wdXQtc2VhcmNoLWVudGVyLWJ1dHRvbmApXG4gIEBIb3N0QmluZGluZyhgY2xhc3MuYW50LWlucHV0LXNlYXJjaGApXG4gIHNldCBkd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaDtcbiAgfVxuXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIGdldCBpc1NtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3U2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIGdldCBpc0FmZml4KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoISEodGhpcy5kd1N1ZmZpeCB8fCB0aGlzLmR3UHJlZml4IHx8IHRoaXMuZHdQcmVmaXhJY29uIHx8IHRoaXMuZHdTdWZmaXhJY29uKSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyJylcbiAgZ2V0IGlzQWZmaXhXcmFwcGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoISEodGhpcy5kd1N1ZmZpeCB8fCB0aGlzLmR3UHJlZml4IHx8IHRoaXMuZHdQcmVmaXhJY29uIHx8IHRoaXMuZHdTdWZmaXhJY29uKSkgJiYgIXRoaXMuaXNBZGRPbjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWlucHV0LWdyb3VwLXdyYXBwZXInKVxuICBnZXQgaXNBZGRPbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5kd0FkZE9uQWZ0ZXIgfHwgdGhpcy5kd0FkZE9uQmVmb3JlIHx8IHRoaXMuZHdBZGRPbkFmdGVySWNvbiB8fCB0aGlzLmR3QWRkT25CZWZvcmVJY29uKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWlucHV0LWdyb3VwJylcbiAgZ2V0IGlzR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0FmZml4KSAmJiAoIXRoaXMuaXNBZGRPbik7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC1sZ2ApXG4gIGdldCBpc0xhcmdlR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLWxnYClcbiAgZ2V0IGlzTGFyZ2VHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnYClcbiAgZ2V0IGlzTGFyZ2VBZmZpeCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1zZWFyY2gtbGdgKVxuICBnZXQgaXNMYXJnZVNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1NlYXJjaCAmJiB0aGlzLmlzTGFyZ2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC1zbWApXG4gIGdldCBpc1NtYWxsR3JvdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNHcm91cCAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLXNtYClcbiAgZ2V0IGlzU21hbGxBZmZpeCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0FmZml4V3JhcHBlciAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1ncm91cC13cmFwcGVyLXNtYClcbiAgZ2V0IGlzU21hbGxHcm91cFdyYXBwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNBZGRPbiAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoYGNsYXNzLmFudC1pbnB1dC1zZWFyY2gtc21gKVxuICBnZXQgaXNTbWFsbFNlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1NlYXJjaCAmJiB0aGlzLmlzU21hbGw7XG4gIH1cblxuICB1cGRhdGVDaGlsZHJlbklucHV0U2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0lucHV0RGlyZWN0aXZlUXVlcnlMaXN0KSB7XG4gICAgICB0aGlzLmR3SW5wdXREaXJlY3RpdmVRdWVyeUxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uZHdTaXplID0gdGhpcy5kd1NpemUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcblxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5JbnB1dFNpemUoKTtcbiAgfVxufVxuIl19
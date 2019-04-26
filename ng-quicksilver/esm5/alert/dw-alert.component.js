/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { toBoolean } from '../core/util/convert';
var DwAlertComponent = /** @class */ (function () {
    function DwAlertComponent() {
        this._banner = false;
        this._closeable = false;
        this._showIcon = false;
        this._type = 'info';
        this.display = true;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.prefixClass = 'ant-alert';
        this.dwOnClose = new EventEmitter();
    }
    Object.defineProperty(DwAlertComponent.prototype, "dwDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._description;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDescriptionString = !(value instanceof TemplateRef);
            this._description = value;
            this.updateOuterClassMap();
            this.updateIconClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAlertComponent.prototype, "dwCloseText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._closeText;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isCloseTextString = !(value instanceof TemplateRef);
            this._closeText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAlertComponent.prototype, "dwMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._message;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isMessageString = !(value instanceof TemplateRef);
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAlertComponent.prototype, "dwType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.isTypeSet = true;
            this.updateOuterClassMap();
            this.updateIconClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAlertComponent.prototype, "dwBanner", {
        get: /**
         * @return {?}
         */
        function () {
            return this._banner;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._banner = toBoolean(value);
            if (!this.isTypeSet) {
                this.dwType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.dwShowIcon = true;
            }
            this.updateOuterClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAlertComponent.prototype, "dwCloseable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._closeable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._closeable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAlertComponent.prototype, "dwShowIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showIcon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showIcon = toBoolean(value);
            this.isShowIconSet = true;
            this.updateOuterClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwAlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.display = false;
    };
    /**
     * @return {?}
     */
    DwAlertComponent.prototype.onFadeAnimationDone = /**
     * @return {?}
     */
    function () {
        if (!this.display) {
            this.dwOnClose.emit(true);
        }
    };
    /**
     * @return {?}
     */
    DwAlertComponent.prototype.updateOuterClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.outerClassMap = (_a = {},
            _a["" + this.prefixClass] = true,
            _a[this.prefixClass + "-" + this.dwType] = true,
            _a[this.prefixClass + "-no-icon"] = !this.dwShowIcon,
            _a[this.prefixClass + "-banner"] = this.dwBanner,
            _a[this.prefixClass + "-with-description"] = !!this.dwDescription,
            _a);
    };
    /**
     * @return {?}
     */
    DwAlertComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
        this.iconClassMap = {
            'anticon-cross-circle-o': this.dwDescription && this.dwType === 'error',
            'anticon-check-circle-o': this.dwDescription && this.dwType === 'success',
            'anticon-info-circle-o': this.dwDescription && this.dwType === 'info',
            'anticon-exclamation-circle-o': this.dwDescription && this.dwType === 'warning',
            'anticon-cross-circle': (!this.dwDescription) && this.dwType === 'error',
            'anticon-check-circle': (!this.dwDescription) && this.dwType === 'success',
            'anticon-info-circle': (!this.dwDescription) && this.dwType === 'info',
            'anticon-exclamation-circle': (!this.dwDescription) && this.dwType === 'warning'
        };
    };
    /**
     * @return {?}
     */
    DwAlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateIconClassMap();
        this.updateOuterClassMap();
    };
    DwAlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-alert',
                    animations: [fadeAnimation],
                    preserveWhitespaces: false,
                    template: "<div [ngClass]=\"outerClassMap\" *ngIf=\"display\" [@fadeAnimation] (@fadeAnimation.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"dwShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"dwIconType\" *ngIf=\"dwIconType; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i class=\"ant-alert-icon anticon\" [ngClass]=\"iconClassMap\">\n      </i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"dwMessage\">\n        <ng-container *ngIf=\"isMessageString; else messageTemplate\">{{ dwMessage }}</ng-container>\n        <ng-template #messageTemplate>\n          <ng-template [ngTemplateOutlet]=\"dwMessage\"></ng-template>\n        </ng-template>\n      </span>\n  <span class=\"ant-alert-description\" *ngIf=\"dwDescription\">\n        <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ dwDescription }}</ng-container>\n        <ng-template #descriptionTemplate>\n          <ng-template [ngTemplateOutlet]=\"dwDescription\"></ng-template>\n        </ng-template>\n      </span>\n  <a\n    *ngIf=\"dwCloseable || dwCloseText\"\n    (click)=\"closeAlert()\"\n    class=\"ant-alert-close-icon\">\n    <ng-template #closeDefaultTemplate>\n      <i class=\"anticon anticon-cross\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"dwCloseText; else closeDefaultTemplate\">\n      <ng-container *ngIf=\"isCloseTextString; else closeTextTemplate\">{{ dwCloseText }}</ng-container>\n      <ng-template #closeTextTemplate>\n        <ng-template [ngTemplateOutlet]=\"dwCloseText\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </a>\n</div>",
                    styles: [":host {\n      display: block;\n    }"]
                }] }
    ];
    DwAlertComponent.propDecorators = {
        dwOnClose: [{ type: Output }],
        dwIconType: [{ type: Input }],
        dwDescription: [{ type: Input }],
        dwCloseText: [{ type: Input }],
        dwMessage: [{ type: Input }],
        dwType: [{ type: Input }],
        dwBanner: [{ type: Input }],
        dwCloseable: [{ type: Input }],
        dwShowIcon: [{ type: Input }]
    };
    return DwAlertComponent;
}());
export { DwAlertComponent };
function DwAlertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAlertComponent.prototype._banner;
    /** @type {?} */
    DwAlertComponent.prototype._closeable;
    /** @type {?} */
    DwAlertComponent.prototype._showIcon;
    /** @type {?} */
    DwAlertComponent.prototype._type;
    /** @type {?} */
    DwAlertComponent.prototype._description;
    /** @type {?} */
    DwAlertComponent.prototype._message;
    /** @type {?} */
    DwAlertComponent.prototype._closeText;
    /** @type {?} */
    DwAlertComponent.prototype.display;
    /** @type {?} */
    DwAlertComponent.prototype.isTypeSet;
    /** @type {?} */
    DwAlertComponent.prototype.isShowIconSet;
    /** @type {?} */
    DwAlertComponent.prototype.prefixClass;
    /** @type {?} */
    DwAlertComponent.prototype.isDescriptionString;
    /** @type {?} */
    DwAlertComponent.prototype.isMessageString;
    /** @type {?} */
    DwAlertComponent.prototype.isCloseTextString;
    /** @type {?} */
    DwAlertComponent.prototype.outerClassMap;
    /** @type {?} */
    DwAlertComponent.prototype.iconClassMap;
    /** @type {?} */
    DwAlertComponent.prototype.dwOnClose;
    /** @type {?} */
    DwAlertComponent.prototype.dwIconType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJhbGVydC9kdy1hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt1QkFjN0IsS0FBSzswQkFDRixLQUFLO3lCQUNOLEtBQUs7cUJBQ1QsTUFBTTt1QkFJWixJQUFJO3lCQUNGLEtBQUs7NkJBQ0QsS0FBSzsyQkFDUCxXQUFXO3lCQU1vQixJQUFJLFlBQVksRUFBRTs7SUFHL0Qsc0JBQ0ksMkNBQWE7Ozs7UUFPakI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7Ozs7O1FBVkQsVUFDa0IsS0FBaUM7WUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7OztPQUFBO0lBTUQsc0JBQ0kseUNBQVc7Ozs7UUFLZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7Ozs7UUFSRCxVQUNnQixLQUFpQztZQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6Qjs7O09BQUE7SUFNRCxzQkFDSSx1Q0FB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SUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU07WUFDNUUsOEJBQThCLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDL0Usc0JBQXNCLEVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDaEYsc0JBQXNCLEVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFDbEYscUJBQXFCLEVBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU07WUFDL0UsNEJBQTRCLEVBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVM7U0FDbkYsQ0FBQztLQUNIOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7O2dCQW5KRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFVBQVU7b0JBQy9CLFVBQVUsRUFBVyxDQUFFLGFBQWEsQ0FBRTtvQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsNG1EQUFnRDs2QkFFOUMsdUNBRUU7aUJBRUw7Ozs0QkFrQkUsTUFBTTs2QkFDTixLQUFLO2dDQUVMLEtBQUs7OEJBWUwsS0FBSzs0QkFVTCxLQUFLO3lCQVVMLEtBQUs7MkJBWUwsS0FBSzs4QkFnQkwsS0FBSzs2QkFTTCxLQUFLOzsyQkFuSFI7O1NBMEJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgdHlwZSBOZ0NsYXNzVHlwZSA9IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFsga2xhc3M6IHN0cmluZyBdOiBhbnk7IH07XG5cbmltcG9ydCB7IGZhZGVBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9mYWRlLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWFsZXJ0JyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0FsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfYmFubmVyID0gZmFsc2U7XG4gIHByaXZhdGUgX2Nsb3NlYWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93SWNvbiA9IGZhbHNlO1xuICBwcml2YXRlIF90eXBlID0gJ2luZm8nO1xuICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9jbG9zZVRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBkaXNwbGF5ID0gdHJ1ZTtcbiAgaXNUeXBlU2V0ID0gZmFsc2U7XG4gIGlzU2hvd0ljb25TZXQgPSBmYWxzZTtcbiAgcHJlZml4Q2xhc3MgPSAnYW50LWFsZXJ0JztcbiAgaXNEZXNjcmlwdGlvblN0cmluZzogYm9vbGVhbjtcbiAgaXNNZXNzYWdlU3RyaW5nOiBib29sZWFuO1xuICBpc0Nsb3NlVGV4dFN0cmluZzogYm9vbGVhbjtcbiAgb3V0ZXJDbGFzc01hcDtcbiAgaWNvbkNsYXNzTWFwO1xuICBAT3V0cHV0KCkgZHdPbkNsb3NlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGR3SWNvblR5cGU6IE5nQ2xhc3NUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEZXNjcmlwdGlvblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3RGVzY3JpcHRpb24oKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Nsb3NlVGV4dCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQ2xvc2VUZXh0U3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9jbG9zZVRleHQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0Nsb3NlVGV4dCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2Nsb3NlVGV4dDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd01lc3NhZ2UodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc01lc3NhZ2VTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd01lc3NhZ2UoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuaXNUeXBlU2V0ID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3QmFubmVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYmFubmVyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAoIXRoaXMuaXNUeXBlU2V0KSB7XG4gICAgICB0aGlzLmR3VHlwZSA9ICd3YXJuaW5nJztcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzU2hvd0ljb25TZXQpIHtcbiAgICAgIHRoaXMuZHdTaG93SWNvbiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlT3V0ZXJDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3QmFubmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9iYW5uZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdDbG9zZWFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jbG9zZWFibGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q2xvc2VhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jbG9zZWFibGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93SWNvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dJY29uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLmlzU2hvd0ljb25TZXQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlT3V0ZXJDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dJY29uO1xuICB9XG5cbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgfVxuXG4gIG9uRmFkZUFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc3BsYXkpIHtcbiAgICAgIHRoaXMuZHdPbkNsb3NlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlT3V0ZXJDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm91dGVyQ2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9YCBdICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LSR7dGhpcy5kd1R5cGV9YCBdICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LW5vLWljb25gIF0gICAgICAgICA6ICF0aGlzLmR3U2hvd0ljb24sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LWJhbm5lcmAgXSAgICAgICAgICA6IHRoaXMuZHdCYW5uZXIsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xhc3N9LXdpdGgtZGVzY3JpcHRpb25gIF06ICEhdGhpcy5kd0Rlc2NyaXB0aW9uXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUljb25DbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmljb25DbGFzc01hcCA9IHtcbiAgICAgICdhbnRpY29uLWNyb3NzLWNpcmNsZS1vJyAgICAgIDogdGhpcy5kd0Rlc2NyaXB0aW9uICYmIHRoaXMuZHdUeXBlID09PSAnZXJyb3InLFxuICAgICAgJ2FudGljb24tY2hlY2stY2lyY2xlLW8nICAgICAgOiB0aGlzLmR3RGVzY3JpcHRpb24gJiYgdGhpcy5kd1R5cGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICdhbnRpY29uLWluZm8tY2lyY2xlLW8nICAgICAgIDogdGhpcy5kd0Rlc2NyaXB0aW9uICYmIHRoaXMuZHdUeXBlID09PSAnaW5mbycsXG4gICAgICAnYW50aWNvbi1leGNsYW1hdGlvbi1jaXJjbGUtbyc6IHRoaXMuZHdEZXNjcmlwdGlvbiAmJiB0aGlzLmR3VHlwZSA9PT0gJ3dhcm5pbmcnLFxuICAgICAgJ2FudGljb24tY3Jvc3MtY2lyY2xlJyAgICAgICAgOiAoIXRoaXMuZHdEZXNjcmlwdGlvbikgJiYgdGhpcy5kd1R5cGUgPT09ICdlcnJvcicsXG4gICAgICAnYW50aWNvbi1jaGVjay1jaXJjbGUnICAgICAgICA6ICghdGhpcy5kd0Rlc2NyaXB0aW9uKSAmJiB0aGlzLmR3VHlwZSA9PT0gJ3N1Y2Nlc3MnLFxuICAgICAgJ2FudGljb24taW5mby1jaXJjbGUnICAgICAgICAgOiAoIXRoaXMuZHdEZXNjcmlwdGlvbikgJiYgdGhpcy5kd1R5cGUgPT09ICdpbmZvJyxcbiAgICAgICdhbnRpY29uLWV4Y2xhbWF0aW9uLWNpcmNsZScgIDogKCF0aGlzLmR3RGVzY3JpcHRpb24pICYmIHRoaXMuZHdUeXBlID09PSAnd2FybmluZydcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { toBoolean } from '../core/util/convert';
export class DwAlertComponent {
    constructor() {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDescription(value) {
        this.isDescriptionString = !(value instanceof TemplateRef);
        this._description = value;
        this.updateOuterClassMap();
        this.updateIconClassMap();
    }
    /**
     * @return {?}
     */
    get dwDescription() {
        return this._description;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCloseText(value) {
        this.isCloseTextString = !(value instanceof TemplateRef);
        this._closeText = value;
    }
    /**
     * @return {?}
     */
    get dwCloseText() {
        return this._closeText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwMessage(value) {
        this.isMessageString = !(value instanceof TemplateRef);
        this._message = value;
    }
    /**
     * @return {?}
     */
    get dwMessage() {
        return this._message;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwType(value) {
        this._type = value;
        this.isTypeSet = true;
        this.updateOuterClassMap();
        this.updateIconClassMap();
    }
    /**
     * @return {?}
     */
    get dwType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwBanner(value) {
        this._banner = toBoolean(value);
        if (!this.isTypeSet) {
            this.dwType = 'warning';
        }
        if (!this.isShowIconSet) {
            this.dwShowIcon = true;
        }
        this.updateOuterClassMap();
    }
    /**
     * @return {?}
     */
    get dwBanner() {
        return this._banner;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCloseable(value) {
        this._closeable = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwCloseable() {
        return this._closeable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowIcon(value) {
        this._showIcon = toBoolean(value);
        this.isShowIconSet = true;
        this.updateOuterClassMap();
    }
    /**
     * @return {?}
     */
    get dwShowIcon() {
        return this._showIcon;
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.display = false;
    }
    /**
     * @return {?}
     */
    onFadeAnimationDone() {
        if (!this.display) {
            this.dwOnClose.emit(true);
        }
    }
    /**
     * @return {?}
     */
    updateOuterClassMap() {
        this.outerClassMap = {
            [`${this.prefixClass}`]: true,
            [`${this.prefixClass}-${this.dwType}`]: true,
            [`${this.prefixClass}-no-icon`]: !this.dwShowIcon,
            [`${this.prefixClass}-banner`]: this.dwBanner,
            [`${this.prefixClass}-with-description`]: !!this.dwDescription
        };
    }
    /**
     * @return {?}
     */
    updateIconClassMap() {
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateIconClassMap();
        this.updateOuterClassMap();
    }
}
DwAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-alert',
                animations: [fadeAnimation],
                preserveWhitespaces: false,
                template: "<div [ngClass]=\"outerClassMap\" *ngIf=\"display\" [@fadeAnimation] (@fadeAnimation.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"dwShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"dwIconType\" *ngIf=\"dwIconType; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i class=\"ant-alert-icon anticon\" [ngClass]=\"iconClassMap\">\n      </i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"dwMessage\">\n        <ng-container *ngIf=\"isMessageString; else messageTemplate\">{{ dwMessage }}</ng-container>\n        <ng-template #messageTemplate>\n          <ng-template [ngTemplateOutlet]=\"dwMessage\"></ng-template>\n        </ng-template>\n      </span>\n  <span class=\"ant-alert-description\" *ngIf=\"dwDescription\">\n        <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ dwDescription }}</ng-container>\n        <ng-template #descriptionTemplate>\n          <ng-template [ngTemplateOutlet]=\"dwDescription\"></ng-template>\n        </ng-template>\n      </span>\n  <a\n    *ngIf=\"dwCloseable || dwCloseText\"\n    (click)=\"closeAlert()\"\n    class=\"ant-alert-close-icon\">\n    <ng-template #closeDefaultTemplate>\n      <i class=\"anticon anticon-cross\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"dwCloseText; else closeDefaultTemplate\">\n      <ng-container *ngIf=\"isCloseTextString; else closeTextTemplate\">{{ dwCloseText }}</ng-container>\n      <ng-template #closeTextTemplate>\n        <ng-template [ngTemplateOutlet]=\"dwCloseText\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </a>\n</div>",
                styles: [`:host {
      display: block;
    }`]
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJhbGVydC9kdy1hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFhakQsTUFBTTs7dUJBQ2MsS0FBSzswQkFDRixLQUFLO3lCQUNOLEtBQUs7cUJBQ1QsTUFBTTt1QkFJWixJQUFJO3lCQUNGLEtBQUs7NkJBQ0QsS0FBSzsyQkFDUCxXQUFXO3lCQU1vQixJQUFJLFlBQVksRUFBRTs7Ozs7O0lBRy9ELElBQ0ksYUFBYSxDQUFDLEtBQWlDO1FBQ2pELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQWlDO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7OztJQUVELElBQ0ksU0FB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RUFBUyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTTtZQUM1RSw4QkFBOEIsRUFBRSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUztZQUMvRSxzQkFBc0IsRUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTztZQUNoRixzQkFBc0IsRUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUztZQUNsRixxQkFBcUIsRUFBVyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTTtZQUMvRSw0QkFBNEIsRUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUztTQUNuRixDQUFDO0tBQ0g7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7OztZQW5KRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFVBQVU7Z0JBQy9CLFVBQVUsRUFBVyxDQUFFLGFBQWEsQ0FBRTtnQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsNG1EQUFnRDt5QkFFOUM7O01BRUU7YUFFTDs7O3dCQWtCRSxNQUFNO3lCQUNOLEtBQUs7NEJBRUwsS0FBSzswQkFZTCxLQUFLO3dCQVVMLEtBQUs7cUJBVUwsS0FBSzt1QkFZTCxLQUFLOzBCQWdCTCxLQUFLO3lCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IHR5cGUgTmdDbGFzc1R5cGUgPSBzdHJpbmcgfCBzdHJpbmdbXSB8IFNldDxzdHJpbmc+IHwgeyBbIGtsYXNzOiBzdHJpbmcgXTogYW55OyB9O1xuXG5pbXBvcnQgeyBmYWRlQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZmFkZS1hbmltYXRpb25zJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1hbGVydCcsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgZmFkZUFuaW1hdGlvbiBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Jhbm5lciA9IGZhbHNlO1xuICBwcml2YXRlIF9jbG9zZWFibGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0ljb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdHlwZSA9ICdpbmZvJztcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfY2xvc2VUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgZGlzcGxheSA9IHRydWU7XG4gIGlzVHlwZVNldCA9IGZhbHNlO1xuICBpc1Nob3dJY29uU2V0ID0gZmFsc2U7XG4gIHByZWZpeENsYXNzID0gJ2FudC1hbGVydCc7XG4gIGlzRGVzY3JpcHRpb25TdHJpbmc6IGJvb2xlYW47XG4gIGlzTWVzc2FnZVN0cmluZzogYm9vbGVhbjtcbiAgaXNDbG9zZVRleHRTdHJpbmc6IGJvb2xlYW47XG4gIG91dGVyQ2xhc3NNYXA7XG4gIGljb25DbGFzc01hcDtcbiAgQE91dHB1dCgpIGR3T25DbG9zZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBkd0ljb25UeXBlOiBOZ0NsYXNzVHlwZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdEZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzRGVzY3JpcHRpb25TdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVPdXRlckNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0Rlc2NyaXB0aW9uKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdDbG9zZVRleHQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0Nsb3NlVGV4dFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fY2xvc2VUZXh0ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdDbG9zZVRleHQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jbG9zZVRleHQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdNZXNzYWdlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNNZXNzYWdlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdNZXNzYWdlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1R5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB0aGlzLmlzVHlwZVNldCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVPdXRlckNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Jhbm5lcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Jhbm5lciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xuICAgICAgdGhpcy5kd1R5cGUgPSAnd2FybmluZyc7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1Nob3dJY29uU2V0KSB7XG4gICAgICB0aGlzLmR3U2hvd0ljb24gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0Jhbm5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYmFubmVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q2xvc2VhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2xvc2VhYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Nsb3NlYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY2xvc2VhYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd0ljb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93SWNvbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5pc1Nob3dJY29uU2V0ID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZU91dGVyQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93SWNvbjtcbiAgfVxuXG4gIGNsb3NlQWxlcnQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gIH1cblxuICBvbkZhZGVBbmltYXRpb25Eb25lKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNwbGF5KSB7XG4gICAgICB0aGlzLmR3T25DbG9zZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU91dGVyQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5vdXRlckNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfWAgXSAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS0ke3RoaXMuZHdUeXBlfWAgXSAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS1uby1pY29uYCBdICAgICAgICAgOiAhdGhpcy5kd1Nob3dJY29uLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS1iYW5uZXJgIF0gICAgICAgICAgOiB0aGlzLmR3QmFubmVyLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsYXNzfS13aXRoLWRlc2NyaXB0aW9uYCBdOiAhIXRoaXMuZHdEZXNjcmlwdGlvblxuICAgIH07XG4gIH1cblxuICB1cGRhdGVJY29uQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5pY29uQ2xhc3NNYXAgPSB7XG4gICAgICAnYW50aWNvbi1jcm9zcy1jaXJjbGUtbycgICAgICA6IHRoaXMuZHdEZXNjcmlwdGlvbiAmJiB0aGlzLmR3VHlwZSA9PT0gJ2Vycm9yJyxcbiAgICAgICdhbnRpY29uLWNoZWNrLWNpcmNsZS1vJyAgICAgIDogdGhpcy5kd0Rlc2NyaXB0aW9uICYmIHRoaXMuZHdUeXBlID09PSAnc3VjY2VzcycsXG4gICAgICAnYW50aWNvbi1pbmZvLWNpcmNsZS1vJyAgICAgICA6IHRoaXMuZHdEZXNjcmlwdGlvbiAmJiB0aGlzLmR3VHlwZSA9PT0gJ2luZm8nLFxuICAgICAgJ2FudGljb24tZXhjbGFtYXRpb24tY2lyY2xlLW8nOiB0aGlzLmR3RGVzY3JpcHRpb24gJiYgdGhpcy5kd1R5cGUgPT09ICd3YXJuaW5nJyxcbiAgICAgICdhbnRpY29uLWNyb3NzLWNpcmNsZScgICAgICAgIDogKCF0aGlzLmR3RGVzY3JpcHRpb24pICYmIHRoaXMuZHdUeXBlID09PSAnZXJyb3InLFxuICAgICAgJ2FudGljb24tY2hlY2stY2lyY2xlJyAgICAgICAgOiAoIXRoaXMuZHdEZXNjcmlwdGlvbikgJiYgdGhpcy5kd1R5cGUgPT09ICdzdWNjZXNzJyxcbiAgICAgICdhbnRpY29uLWluZm8tY2lyY2xlJyAgICAgICAgIDogKCF0aGlzLmR3RGVzY3JpcHRpb24pICYmIHRoaXMuZHdUeXBlID09PSAnaW5mbycsXG4gICAgICAnYW50aWNvbi1leGNsYW1hdGlvbi1jaXJjbGUnICA6ICghdGhpcy5kd0Rlc2NyaXB0aW9uKSAmJiB0aGlzLmR3VHlwZSA9PT0gJ3dhcm5pbmcnXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVPdXRlckNsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==
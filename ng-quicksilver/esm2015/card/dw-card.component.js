/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwCardTabComponent } from './dw-card-tab.component';
export class DwCardComponent {
    constructor() {
        this._bordered = true;
        this._loading = false;
        this._hoverable = false;
        this.dwActions = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get dwTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwExtra(value) {
        this.isExtraString = !(value instanceof TemplateRef);
        this._extra = value;
    }
    /**
     * @return {?}
     */
    get dwExtra() {
        return this._extra;
    }
    /**
     * @return {?}
     */
    get isInner() {
        return this.dwType === 'inner';
    }
    /**
     * @return {?}
     */
    get isTabs() {
        return !!this.tab;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwBordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLoading(value) {
        this._loading = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwLoading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwHoverable(value) {
        this._hoverable = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwHoverable() {
        return this._hoverable;
    }
}
DwCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-card',
                preserveWhitespaces: false,
                template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]=\"dwExtra\"></ng-template>\n</ng-template>\n<div class=\"ant-card-head\" *ngIf=\"dwTitle||dwExtra||tab\">\n  <div class=\"ant-card-head-wrapper\">\n    <div class=\"ant-card-head-title\" *ngIf=\"dwTitle\">\n      <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n    </div>\n    <div class=\"ant-card-extra\" *ngIf=\"dwExtra\">\n      <ng-container *ngIf=\"isExtraString; else extraTemplate\">{{ dwExtra }}</ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"tab\">\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\n  </ng-container>\n</div>\n<div class=\"ant-card-cover\" *ngIf=\"dwCover\">\n  <ng-template [ngTemplateOutlet]=\"dwCover\"></ng-template>\n</div>\n<div class=\"ant-card-body\" [ngStyle]=\"dwBodyStyle\">\n  <ng-container *ngIf=\"!dwLoading\">\n    <ng-content></ng-content>\n  </ng-container>\n  <dw-card-loading *ngIf=\"dwLoading\"></dw-card-loading>\n</div>\n<ul class=\"ant-card-actions\" *ngIf=\"dwActions.length\">\n  <li *ngFor=\"let action of dwActions\" [style.width.%]=\"100/dwActions.length\">\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n  </li>\n</ul>",
                host: {
                    '[class.ant-card]': 'true',
                    '[class.ant-card-loading]': 'dwLoading'
                },
                styles: [`
    :host {
      display: block;
      position: relative;
    }
  `]
            }] }
];
DwCardComponent.propDecorators = {
    tab: [{ type: ContentChild, args: [DwCardTabComponent,] }],
    dwBodyStyle: [{ type: Input }],
    dwCover: [{ type: Input }],
    dwActions: [{ type: Input }],
    dwType: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwExtra: [{ type: Input }],
    isInner: [{ type: HostBinding, args: ['class.ant-card-type-inner',] }],
    isTabs: [{ type: HostBinding, args: ['class.ant-card-contain-tabs',] }],
    dwBordered: [{ type: Input }, { type: HostBinding, args: ['class.ant-card-bordered',] }],
    dwLoading: [{ type: Input }],
    dwHoverable: [{ type: Input }, { type: HostBinding, args: ['class.ant-card-hoverable',] }]
};
function DwCardComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCardComponent.prototype._bordered;
    /** @type {?} */
    DwCardComponent.prototype._loading;
    /** @type {?} */
    DwCardComponent.prototype._hoverable;
    /** @type {?} */
    DwCardComponent.prototype._title;
    /** @type {?} */
    DwCardComponent.prototype._extra;
    /** @type {?} */
    DwCardComponent.prototype.isTitleString;
    /** @type {?} */
    DwCardComponent.prototype.isExtraString;
    /** @type {?} */
    DwCardComponent.prototype.tab;
    /** @type {?} */
    DwCardComponent.prototype.dwBodyStyle;
    /** @type {?} */
    DwCardComponent.prototype.dwCover;
    /** @type {?} */
    DwCardComponent.prototype.dwActions;
    /** @type {?} */
    DwCardComponent.prototype.dwType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNhcmQvZHctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWlCN0QsTUFBTTs7eUJBQ2dCLElBQUk7d0JBQ0wsS0FBSzswQkFDSCxLQUFLO3lCQVFxQixFQUFFOzs7Ozs7SUFHakQsSUFDSSxPQUFPLENBQUMsS0FBaUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7OztJQUVELElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNyQjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7OztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUM7S0FDaEM7Ozs7SUFFRCxJQUNJLE1BQU07UUFDUixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0tBQ25COzs7OztJQUVELElBRUksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxTQUFTLENBQUMsS0FBYztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUVJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7WUF0RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxTQUFTO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixrMUNBQStDO2dCQU8vQyxJQUFJLEVBQWlCO29CQUNuQixrQkFBa0IsRUFBVSxNQUFNO29CQUNsQywwQkFBMEIsRUFBRSxXQUFXO2lCQUN4Qzt5QkFUc0I7Ozs7O0dBS3RCO2FBS0Y7OztrQkFTRSxZQUFZLFNBQUMsa0JBQWtCOzBCQUMvQixLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUVMLEtBQUs7c0JBVUwsS0FBSztzQkFVTCxXQUFXLFNBQUMsMkJBQTJCO3FCQUt2QyxXQUFXLFNBQUMsNkJBQTZCO3lCQUt6QyxLQUFLLFlBQ0wsV0FBVyxTQUFDLHlCQUF5Qjt3QkFTckMsS0FBSzswQkFTTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3Q2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vZHctY2FyZC10YWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1jYXJkJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhcmRdJyAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1sb2FkaW5nXSc6ICdkd0xvYWRpbmcnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdDYXJkQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSB0cnVlO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2hvdmVyYWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX2V4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgaXNUaXRsZVN0cmluZzogYm9vbGVhbjtcbiAgaXNFeHRyYVN0cmluZzogYm9vbGVhbjtcbiAgQENvbnRlbnRDaGlsZChEd0NhcmRUYWJDb21wb25lbnQpIHRhYjogRHdDYXJkVGFiQ29tcG9uZW50O1xuICBASW5wdXQoKSBkd0JvZHlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBASW5wdXQoKSBkd0NvdmVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZHdBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQElucHV0KCkgZHdUeXBlOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0V4dHJhKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNFeHRyYVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZXh0cmEgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0V4dHJhKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZXh0cmE7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJkLXR5cGUtaW5uZXInKVxuICBnZXQgaXNJbm5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1R5cGUgPT09ICdpbm5lcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tdGFicycpXG4gIGdldCBpc1RhYnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy50YWI7XG4gIH1cblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkJylcbiAgc2V0IGR3Qm9yZGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdCb3JkZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdMb2FkaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkaW5nO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGUnKVxuICBzZXQgZHdIb3ZlcmFibGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ob3ZlcmFibGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3SG92ZXJhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ob3ZlcmFibGU7XG4gIH1cbn1cbiJdfQ==
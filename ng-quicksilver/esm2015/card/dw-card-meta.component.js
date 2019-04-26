/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class DwCardMetaComponent {
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
    set dwDescription(value) {
        this.isDescriptionString = !(value instanceof TemplateRef);
        this._description = value;
    }
    /**
     * @return {?}
     */
    get dwDescription() {
        return this._description;
    }
}
DwCardMetaComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-card-meta',
                preserveWhitespaces: false,
                template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"dwAvatar\">\n  <ng-template [ngTemplateOutlet]=\"dwAvatar\"></ng-template>\n</div>\n<div class=\"ant-card-meta-detail\" *ngIf=\"dwTitle || dwDescription\">\n  <div class=\"ant-card-meta-title\" *ngIf=\"dwTitle\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n    <ng-template #titleTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n    </ng-template>\n  </div>\n  <div class=\"ant-card-meta-description\" *ngIf=\"dwDescription\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ dwDescription }}</ng-container>\n    <ng-template #descriptionTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwDescription\"></ng-template>\n    </ng-template>\n  </div>\n</div>",
                host: {
                    '[class.ant-card-meta]': 'true'
                },
                styles: [`
    :host {
      display: block;
    }
  `]
            }] }
];
DwCardMetaComponent.propDecorators = {
    dwAvatar: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwDescription: [{ type: Input }]
};
function DwCardMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCardMetaComponent.prototype.isDescriptionString;
    /** @type {?} */
    DwCardMetaComponent.prototype.isTitleString;
    /** @type {?} */
    DwCardMetaComponent.prototype._title;
    /** @type {?} */
    DwCardMetaComponent.prototype._description;
    /** @type {?} */
    DwCardMetaComponent.prototype.dwAvatar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY2FyZC9kdy1jYXJkLW1ldGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFldkIsTUFBTTs7Ozs7SUFPSixJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDckI7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBRUQsSUFDSSxhQUFhLENBQUMsS0FBaUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDM0I7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGNBQWM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG16QkFBb0Q7Z0JBTXBELElBQUksRUFBaUI7b0JBQ25CLHVCQUF1QixFQUFFLE1BQU07aUJBQ2hDO3lCQVBzQjs7OztHQUl0QjthQUlGOzs7dUJBTUUsS0FBSztzQkFFTCxLQUFLOzRCQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1jYXJkLW1ldGEnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctY2FyZC1tZXRhLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICBgIF0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJkLW1ldGFdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdDYXJkTWV0YUNvbXBvbmVudCB7XG4gIGlzRGVzY3JpcHRpb25TdHJpbmc6IGJvb2xlYW47XG4gIGlzVGl0bGVTdHJpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkd0F2YXRhcjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEZXNjcmlwdGlvblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0Rlc2NyaXB0aW9uKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cbn1cbiJdfQ==
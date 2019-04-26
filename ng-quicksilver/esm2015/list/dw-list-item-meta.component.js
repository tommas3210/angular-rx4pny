/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
export class DwListItemMetaComponent {
    constructor() {
        this.isAvatar = false;
        this.avatarStr = '';
        this.isTitle = false;
        this.titleStr = '';
        this.isDesc = false;
        this.descStr = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = null;
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
        this.isAvatar = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
        this.isTitle = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDescription(value) {
        if (value instanceof TemplateRef) {
            this.descStr = null;
            this.descTpl = value;
        }
        else {
            this.descStr = value;
        }
        this.isDesc = !!value;
    }
}
DwListItemMetaComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-list-item-meta',
                template: "<div *ngIf=\"isAvatar\" class=\"ant-list-item-meta-avatar\">\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\n    <dw-avatar [dwSrc]=\"avatarStr\"></dw-avatar>\n  </ng-container>\n</div>\n<div *ngIf=\"isTitle || isDesc\" class=\"ant-list-item-meta-content\">\n  <h4 *ngIf=\"isTitle\" class=\"ant-list-item-meta-title\">\n    <ng-container *ngIf=\"titleStr; else titleTpl\">{{ titleStr }}</ng-container>\n  </h4>\n  <div *ngIf=\"isDesc\" class=\"ant-list-item-meta-description\">\n    <ng-container *ngIf=\"descStr; else descTpl\">{{ descStr }}</ng-container>\n  </div>\n</div>",
                preserveWhitespaces: false,
                host: {
                    '[class.ant-list-item-meta]': 'true'
                }
            }] }
];
DwListItemMetaComponent.propDecorators = {
    dwAvatar: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwDescription: [{ type: Input }]
};
function DwListItemMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwListItemMetaComponent.prototype.isAvatar;
    /** @type {?} */
    DwListItemMetaComponent.prototype.avatarStr;
    /** @type {?} */
    DwListItemMetaComponent.prototype.avatarTpl;
    /** @type {?} */
    DwListItemMetaComponent.prototype.isTitle;
    /** @type {?} */
    DwListItemMetaComponent.prototype.titleStr;
    /** @type {?} */
    DwListItemMetaComponent.prototype.titleTpl;
    /** @type {?} */
    DwListItemMetaComponent.prototype.isDesc;
    /** @type {?} */
    DwListItemMetaComponent.prototype.descStr;
    /** @type {?} */
    DwListItemMetaComponent.prototype.descTpl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJsaXN0L2R3LWxpc3QtaXRlbS1tZXRhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBVTlELE1BQU07O3dCQUVPLEtBQUs7eUJBQ0osRUFBRTt1QkFlSixLQUFLO3dCQUNKLEVBQUU7c0JBZUosS0FBSzt1QkFDSixFQUFFOzs7Ozs7SUE3QlosSUFDSSxRQUFRLENBQUMsS0FBaUM7UUFDNUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUN6Qjs7Ozs7SUFNRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3hCOzs7OztJQU1ELElBQ0ksYUFBYSxDQUFDLEtBQWlDO1FBQ2pELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDdkI7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLG1CQUFtQjtnQkFDeEMsa2xCQUF5RDtnQkFDekQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsSUFBSSxFQUFpQjtvQkFDbkIsNEJBQTRCLEVBQUUsTUFBTTtpQkFDckM7YUFDRjs7O3VCQU9FLEtBQUs7c0JBZ0JMLEtBQUs7NEJBZ0JMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWxpc3QtaXRlbS1tZXRhJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWxpc3QtaXRlbS1tZXRhXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3TGlzdEl0ZW1NZXRhQ29tcG9uZW50IHtcblxuICBpc0F2YXRhciA9IGZhbHNlO1xuICBhdmF0YXJTdHIgPSAnJztcbiAgYXZhdGFyVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdBdmF0YXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gbnVsbDtcbiAgICAgIHRoaXMuYXZhdGFyVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXZhdGFyU3RyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5pc0F2YXRhciA9ICEhdmFsdWU7XG4gIH1cblxuICBpc1RpdGxlID0gZmFsc2U7XG4gIHRpdGxlU3RyID0gJyc7XG4gIHRpdGxlVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy50aXRsZVN0ciA9IG51bGw7XG4gICAgICB0aGlzLnRpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGl0bGVTdHIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmlzVGl0bGUgPSAhIXZhbHVlO1xuICB9XG5cbiAgaXNEZXNjID0gZmFsc2U7XG4gIGRlc2NTdHIgPSAnJztcbiAgZGVzY1RwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RGVzY3JpcHRpb24odmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuZGVzY1N0ciA9IG51bGw7XG4gICAgICB0aGlzLmRlc2NUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZXNjU3RyID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5pc0Rlc2MgPSAhIXZhbHVlO1xuICB9XG59XG4iXX0=
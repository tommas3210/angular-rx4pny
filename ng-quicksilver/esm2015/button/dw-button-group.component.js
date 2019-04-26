/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
export class DwButtonGroupComponent {
    constructor() {
        this.prefixCls = 'ant-btn-group';
        this.sizeMap = { large: 'lg', small: 'sm' };
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.dwSize]}`]: this.sizeMap[this.dwSize]
        };
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
    set dwSize(value) {
        this._size = value;
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.dwSize]}`]: this.sizeMap[this.dwSize]
        };
    }
}
DwButtonGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-button-group',
                preserveWhitespaces: false,
                template: "<div [ngClass]=\"classMap\" #groupWrapper>\n  <ng-content></ng-content>\n</div>"
            }] }
];
DwButtonGroupComponent.propDecorators = {
    groupWrapper: [{ type: ViewChild, args: ['groupWrapper',] }],
    dwSize: [{ type: Input }]
};
function DwButtonGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwButtonGroupComponent.prototype._size;
    /** @type {?} */
    DwButtonGroupComponent.prototype.prefixCls;
    /** @type {?} */
    DwButtonGroupComponent.prototype.sizeMap;
    /** @type {?} */
    DwButtonGroupComponent.prototype.classMap;
    /** @type {?} */
    DwButtonGroupComponent.prototype.groupWrapper;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYnV0dG9uL2R3LWJ1dHRvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEUsTUFBTTs7eUJBRWdCLGVBQWU7dUJBQ2pCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUNuQztZQUNULENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUFzQyxJQUFJO1lBQzVELENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUU7U0FDcEY7Ozs7O0lBR0QsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQXdCO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBc0MsSUFBSTtZQUM1RCxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFO1NBQ3BGLENBQUM7S0FDSDs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsaUJBQWlCO2dCQUN0QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiwyRkFBdUQ7YUFDeEQ7OzsyQkFTRSxTQUFTLFNBQUMsY0FBYztxQkFFeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBEd0J1dHRvbkdyb3VwU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnIDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1idXR0b24tZ3JvdXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd0J1dHRvbkdyb3VwQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc2l6ZTogRHdCdXR0b25Hcm91cFNpemU7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1idG4tZ3JvdXAnO1xuICBwcml2YXRlIHNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xuICBjbGFzc01hcCA9IHtcbiAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMuZHdTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMuZHdTaXplIF1cbiAgfTtcbiAgQFZpZXdDaGlsZCgnZ3JvdXBXcmFwcGVyJykgZ3JvdXBXcmFwcGVyOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkd1NpemUoKTogRHdCdXR0b25Hcm91cFNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgc2V0IGR3U2l6ZSh2YWx1ZTogRHdCdXR0b25Hcm91cFNpemUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5zaXplTWFwWyB0aGlzLmR3U2l6ZSBdfWAgXTogdGhpcy5zaXplTWFwWyB0aGlzLmR3U2l6ZSBdXG4gICAgfTtcbiAgfVxufVxuIl19
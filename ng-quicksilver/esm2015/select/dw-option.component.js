/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class DwOptionComponent {
    constructor() {
        this._disabled = false;
        this._customContent = false;
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
    set dwCustomContent(value) {
        this._customContent = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwCustomContent() {
        return this._customContent;
    }
}
DwOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-option',
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>"
            }] }
];
DwOptionComponent.propDecorators = {
    template: [{ type: ViewChild, args: [TemplateRef,] }],
    dwLabel: [{ type: Input }],
    dwValue: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwCustomContent: [{ type: Input }]
};
function DwOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwOptionComponent.prototype._disabled;
    /** @type {?} */
    DwOptionComponent.prototype._customContent;
    /** @type {?} */
    DwOptionComponent.prototype.template;
    /** @type {?} */
    DwOptionComponent.prototype.dwLabel;
    /** @type {?} */
    DwOptionComponent.prototype.dwValue;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTWpELE1BQU07O3lCQUNnQixLQUFLOzhCQUNBLEtBQUs7Ozs7OztJQU05QixJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ksZUFBZSxDQUFDLEtBQWM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVCOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxXQUFXO2dCQUN4QixzRUFBeUM7YUFDMUM7Ozt1QkFJRSxTQUFTLFNBQUMsV0FBVztzQkFDckIsS0FBSztzQkFFTCxLQUFLO3lCQUVMLEtBQUs7OEJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctb3B0aW9uLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd09wdGlvbkNvbXBvbmVudCB7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1c3RvbUNvbnRlbnQgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkd0xhYmVsOiBzdHJpbmc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgZHdWYWx1ZTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q3VzdG9tQ29udGVudCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2N1c3RvbUNvbnRlbnQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q3VzdG9tQ29udGVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY3VzdG9tQ29udGVudDtcbiAgfVxufVxuIl19
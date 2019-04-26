/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
export class DwDropdownContextComponent {
    constructor() {
        this.dropDownPosition = 'bottom';
        this.open = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTemplateRef(value) {
        this.template = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setControl(value) {
        this.control = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDropDownPosition(value) {
        this.dropDownPosition = value;
    }
    /**
     * @return {?}
     */
    close() {
        this.open = false;
    }
    /**
     * @return {?}
     */
    afterAnimation() {
        if (!this.open) {
            this.control.close();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
    }
}
DwDropdownContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-dropdown-context',
                animations: [
                    dropDownAnimation
                ],
                template: "<div class=\"ant-dropdown ant-dropdown-placement-bottomLeft\" [@dropDownAnimation]=\"dropDownPosition\" (@dropDownAnimation.done)=\"afterAnimation()\" *ngIf=\"open\">\n  <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n</div>",
                styles: [`
      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
function DwDropdownContextComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDropdownContextComponent.prototype.dropDownPosition;
    /** @type {?} */
    DwDropdownContextComponent.prototype.control;
    /** @type {?} */
    DwDropdownContextComponent.prototype.template;
    /** @type {?} */
    DwDropdownContextComponent.prototype.open;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL2R3LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXVCMUUsTUFBTTs7Z0NBQ2lDLFFBQVE7b0JBR3RDLElBQUk7Ozs7OztJQUVYLGNBQWMsQ0FBQyxLQUF3QjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2Qjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBd0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7Ozs7O0lBRUQsbUJBQW1CLENBQUMsS0FBdUI7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztLQUMvQjs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztLQUNuQjs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7S0FDRjs7OztJQUVELGVBQWU7OztLQUdkOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxxQkFBcUI7Z0JBQ2xDLFVBQVUsRUFBRztvQkFDWCxpQkFBaUI7aUJBQ2xCO2dCQUNELHlQQUFtRDt5QkFFakQ7Ozs7Ozs7OztLQVNDO2FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IER3RHJvcGRvd25TZXJ2aWNlIH0gZnJvbSAnLi9kdy1kcm9wZG93bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctZHJvcGRvd24tY29udGV4dCcsXG4gIGFuaW1hdGlvbnMgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgIDogW1xuICAgIGBcbiAgICAgIC5hbnQtZHJvcGRvd24ge1xuICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0Ryb3Bkb3duQ29udGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIGNvbnRyb2w6IER3RHJvcGRvd25TZXJ2aWNlO1xuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIG9wZW4gPSB0cnVlO1xuXG4gIHNldFRlbXBsYXRlUmVmKHZhbHVlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xuICAgIHRoaXMudGVtcGxhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIHNldENvbnRyb2wodmFsdWU6IER3RHJvcGRvd25TZXJ2aWNlKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sID0gdmFsdWU7XG4gIH1cblxuICBzZXREcm9wRG93blBvc2l0aW9uKHZhbHVlOiAndG9wJyB8ICdib3R0b20nKTogdm9pZCB7XG4gICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGFmdGVyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmNvbnRyb2wuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gVE9ETyBhdXRvIHNldCBkcm9wZG93biBjbGFzcyBhZnRlciB0aGUgYnVnIHJlc29sdmVkXG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE0ODQyICoqL1xuICB9XG59XG4iXX0=
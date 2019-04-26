/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
var DwDropdownContextComponent = /** @class */ (function () {
    function DwDropdownContextComponent() {
        this.dropDownPosition = 'bottom';
        this.open = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DwDropdownContextComponent.prototype.setTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.template = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwDropdownContextComponent.prototype.setControl = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.control = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwDropdownContextComponent.prototype.setDropDownPosition = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.dropDownPosition = value;
    };
    /**
     * @return {?}
     */
    DwDropdownContextComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open = false;
    };
    /**
     * @return {?}
     */
    DwDropdownContextComponent.prototype.afterAnimation = /**
     * @return {?}
     */
    function () {
        if (!this.open) {
            this.control.close();
        }
    };
    /**
     * @return {?}
     */
    DwDropdownContextComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
    };
    DwDropdownContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-dropdown-context',
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<div class=\"ant-dropdown ant-dropdown-placement-bottomLeft\" [@dropDownAnimation]=\"dropDownPosition\" (@dropDownAnimation.done)=\"afterAnimation()\" *ngIf=\"open\">\n  <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n</div>",
                    styles: ["\n      .ant-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    return DwDropdownContextComponent;
}());
export { DwDropdownContextComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImRyb3Bkb3duL2R3LWRyb3Bkb3duLWNvbnRleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O2dDQXdCbkMsUUFBUTtvQkFHdEMsSUFBSTs7Ozs7O0lBRVgsbURBQWM7Ozs7SUFBZCxVQUFlLEtBQXdCO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3ZCOzs7OztJQUVELCtDQUFVOzs7O0lBQVYsVUFBVyxLQUF3QjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCx3REFBbUI7Ozs7SUFBbkIsVUFBb0IsS0FBdUI7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztLQUMvQjs7OztJQUVELDBDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQ25COzs7O0lBRUQsbURBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7SUFFRCxvREFBZTs7O0lBQWY7OztLQUdDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxxQkFBcUI7b0JBQ2xDLFVBQVUsRUFBRzt3QkFDWCxpQkFBaUI7cUJBQ2xCO29CQUNELHlQQUFtRDs2QkFFakQsd0xBU0M7aUJBRUo7O3FDQXhCRDs7U0F5QmEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBEd0Ryb3Bkb3duU2VydmljZSB9IGZyb20gJy4vZHctZHJvcGRvd24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2R3LWRyb3Bkb3duLWNvbnRleHQnLFxuICBhbmltYXRpb25zIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy1kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICA6IFtcbiAgICBgXG4gICAgICAuYW50LWRyb3Bkb3duIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdEcm9wZG93bkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBjb250cm9sOiBEd0Ryb3Bkb3duU2VydmljZTtcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBvcGVuID0gdHJ1ZTtcblxuICBzZXRUZW1wbGF0ZVJlZih2YWx1ZTogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdmFsdWU7XG4gIH1cblxuICBzZXRDb250cm9sKHZhbHVlOiBEd0Ryb3Bkb3duU2VydmljZSk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0RHJvcERvd25Qb3NpdGlvbih2YWx1ZTogJ3RvcCcgfCAnYm90dG9tJyk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBhZnRlckFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgdGhpcy5jb250cm9sLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIFRPRE8gYXV0byBzZXQgZHJvcGRvd24gY2xhc3MgYWZ0ZXIgdGhlIGJ1ZyByZXNvbHZlZFxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDg0MiAqKi9cbiAgfVxufVxuIl19
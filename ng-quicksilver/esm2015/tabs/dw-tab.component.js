/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwTabSetComponent } from './dw-tabset.component';
export class DwTabComponent {
    /**
     * @param {?} dwTabSetComponent
     */
    constructor(dwTabSetComponent) {
        this.dwTabSetComponent = dwTabSetComponent;
        this._disabled = false;
        this.position = null;
        this.origin = null;
        this.dwClick = new EventEmitter();
        this.dwSelect = new EventEmitter();
        this.dwDeselect = new EventEmitter();
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
     * @return {?}
     */
    ngOnInit() {
        this.dwTabSetComponent.addTab(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dwTabSetComponent.removeTab(this);
    }
}
DwTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-tab',
                preserveWhitespaces: false,
                template: "<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                host: {
                    '[class.ant-tabs-tabpane]': 'true'
                }
            }] }
];
/** @nocollapse */
DwTabComponent.ctorParameters = () => [
    { type: DwTabSetComponent }
];
DwTabComponent.propDecorators = {
    dwDisabled: [{ type: Input }],
    dwClick: [{ type: Output }],
    dwSelect: [{ type: Output }],
    dwDeselect: [{ type: Output }],
    content: [{ type: ViewChild, args: [TemplateRef,] }],
    dwTitle: [{ type: Input }]
};
function DwTabComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTabComponent.prototype._title;
    /** @type {?} */
    DwTabComponent.prototype._disabled;
    /** @type {?} */
    DwTabComponent.prototype.position;
    /** @type {?} */
    DwTabComponent.prototype.origin;
    /** @type {?} */
    DwTabComponent.prototype.isTitleString;
    /** @type {?} */
    DwTabComponent.prototype.dwClick;
    /** @type {?} */
    DwTabComponent.prototype.dwSelect;
    /** @type {?} */
    DwTabComponent.prototype.dwDeselect;
    /** @type {?} */
    DwTabComponent.prototype.content;
    /** @type {?} */
    DwTabComponent.prototype.dwTabSetComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFicy9kdy10YWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBVTFELE1BQU07Ozs7SUErQkosWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7eUJBN0JwQyxLQUFLO3dCQUNDLElBQUk7c0JBQ04sSUFBSTt1QkFZUixJQUFJLFlBQVksRUFBUTt3QkFDdkIsSUFBSSxZQUFZLEVBQVE7MEJBQ3RCLElBQUksWUFBWSxFQUFRO0tBYzlDOzs7OztJQXpCRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQU9ELElBQ0ksT0FBTyxDQUFDLEtBQWlDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztLQUNyQjs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFFBQVE7Z0JBQzdCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHNFQUE4QztnQkFDOUMsSUFBSSxFQUFpQjtvQkFDbkIsMEJBQTBCLEVBQUUsTUFBTTtpQkFDbkM7YUFDRjs7OztZQVRRLGlCQUFpQjs7O3lCQWlCdkIsS0FBSztzQkFTTCxNQUFNO3VCQUNOLE1BQU07eUJBQ04sTUFBTTtzQkFDTixTQUFTLFNBQUMsV0FBVztzQkFFckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd1RhYlNldENvbXBvbmVudCB9IGZyb20gJy4vZHctdGFic2V0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctdGFiJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRhYi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC10YWJzLXRhYnBhbmVdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdUYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcG9zaXRpb246IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBvcmlnaW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQE91dHB1dCgpIGR3Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBkd1NlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGR3RGVzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1RpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1RpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGR3VGFiU2V0Q29tcG9uZW50OiBEd1RhYlNldENvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kd1RhYlNldENvbXBvbmVudC5hZGRUYWIodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmR3VGFiU2V0Q29tcG9uZW50LnJlbW92ZVRhYih0aGlzKTtcbiAgfVxuXG59XG4iXX0=
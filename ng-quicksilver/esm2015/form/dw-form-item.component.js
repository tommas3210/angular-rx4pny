/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { DwRowComponent } from '../grid/dw-row.component';
/**
 * should add dw-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
export class DwFormItemComponent extends DwRowComponent {
    constructor() {
        super(...arguments);
        this._flex = false;
        this.withHelp = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwFlex(value) {
        this._flex = toBoolean(value);
        if (this._flex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    /**
     * @return {?}
     */
    enableHelp() {
        this.withHelp++;
    }
    /**
     * @return {?}
     */
    disableHelp() {
        this.withHelp--;
    }
}
DwFormItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-form-item',
                preserveWhitespaces: false,
                providers: [DwUpdateHostClassService],
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-form-item]': 'true',
                    '[class.ant-form-item-with-help]': 'withHelp>0'
                },
                styles: [`:host {
    display: block;
  }`]
            }] }
];
DwFormItemComponent.propDecorators = {
    dwFlex: [{ type: Input }]
};
function DwFormItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwFormItemComponent.prototype._flex;
    /** @type {?} */
    DwFormItemComponent.prototype.withHelp;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZm9ybS9kdy1mb3JtLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBZ0IxRCxNQUFNLDBCQUEyQixTQUFRLGNBQWM7OztxQkFDckMsS0FBSzt3QkFDVixDQUFDOzs7Ozs7SUFFWixJQUNJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDckU7S0FDRjs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxjQUFjO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDakQscUNBQW9EO2dCQUNwRCxJQUFJLEVBQWlCO29CQUNuQix1QkFBdUIsRUFBWSxNQUFNO29CQUN6QyxpQ0FBaUMsRUFBRSxZQUFZO2lCQUNoRDt5QkFDc0I7O0lBRXJCO2FBQ0g7OztxQkFLRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3Um93Q29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9kdy1yb3cuY29tcG9uZW50JztcblxuLyoqIHNob3VsZCBhZGQgZHctcm93IGRpcmVjdGl2ZSB0byBob3N0LCB0cmFjayBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84Nzg1ICoqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1mb3JtLWl0ZW0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctZm9ybS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbV0nICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS13aXRoLWhlbHBdJzogJ3dpdGhIZWxwPjAnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfWAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0Zvcm1JdGVtQ29tcG9uZW50IGV4dGVuZHMgRHdSb3dDb21wb25lbnQge1xuICBwcml2YXRlIF9mbGV4ID0gZmFsc2U7XG4gIHdpdGhIZWxwID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgZHdGbGV4KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxleCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2ZsZXgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICB9XG4gIH1cblxuICBlbmFibGVIZWxwKCk6IHZvaWQge1xuICAgIHRoaXMud2l0aEhlbHArKztcbiAgfVxuXG4gIGRpc2FibGVIZWxwKCk6IHZvaWQge1xuICAgIHRoaXMud2l0aEhlbHAtLTtcbiAgfVxufVxuIl19
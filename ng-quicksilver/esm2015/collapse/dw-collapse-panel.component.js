/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Host, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwCollapseComponent } from './dw-collapse.component';
export class DwCollapsePanelComponent {
    /**
     * @param {?} dwCollapseComponent
     * @param {?} elementRef
     */
    constructor(dwCollapseComponent, elementRef) {
        this.dwCollapseComponent = dwCollapseComponent;
        this.elementRef = elementRef;
        this._disabled = false;
        this._showArrow = true;
        this._active = false;
        this.dwActiveChange = new EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowArrow(value) {
        this._showArrow = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowArrow() {
        return this._showArrow;
    }
    /**
     * @return {?}
     */
    get isNoArrow() {
        return !this.dwShowArrow;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwHeader(value) {
        this.isHeaderString = !(value instanceof TemplateRef);
        this._header = value;
    }
    /**
     * @return {?}
     */
    get dwHeader() {
        return this._header;
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
    set dwActive(value) {
        this._active = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwActive() {
        return this._active;
    }
    /**
     * @return {?}
     */
    clickHeader() {
        if (!this.dwDisabled) {
            this.dwCollapseComponent.click(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dwCollapseComponent.addCollapse(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dwCollapseComponent.removeCollapse(this);
    }
}
DwCollapsePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-collapse-panel',
                template: "<div\n  role=\"tab\"\n  [attr.aria-expanded]=\"dwActive\"\n  class=\"ant-collapse-header\"\n  (click)=\"clickHeader()\">\n  <i class=\"arrow\" *ngIf=\"dwShowArrow\"></i>\n  <ng-container *ngIf=\"isHeaderString; else headerTemplate\">{{ dwHeader }}</ng-container>\n  <ng-template #headerTemplate>\n    <ng-template [ngTemplateOutlet]=\"dwHeader\"></ng-template>\n  </ng-template>\n</div>\n<div\n  class=\"ant-collapse-content\"\n  [class.ant-collapse-content-active]=\"dwActive\"\n  [@collapseState]=\"dwActive?'active':'inactive'\">\n  <div class=\"ant-collapse-content-box\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                animations: [
                    trigger('collapseState', [
                        state('inactive', style({
                            opacity: '0',
                            height: 0
                        })),
                        state('active', style({
                            opacity: '1',
                            height: '*'
                        })),
                        transition('inactive => active', animate('150ms ease-in')),
                        transition('active => inactive', animate('150ms ease-out'))
                    ])
                ],
                host: {
                    '[class.ant-collapse-item]': 'true',
                    '[attr.role]': '"tablist"'
                },
                styles: [`
      :host {
        display: block
      }`]
            }] }
];
/** @nocollapse */
DwCollapsePanelComponent.ctorParameters = () => [
    { type: DwCollapseComponent, decorators: [{ type: Host }] },
    { type: ElementRef }
];
DwCollapsePanelComponent.propDecorators = {
    dwActiveChange: [{ type: Output }],
    dwShowArrow: [{ type: Input }],
    isNoArrow: [{ type: HostBinding, args: ['class.ant-collapse-no-arrow',] }],
    dwHeader: [{ type: Input }],
    dwDisabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-disabled',] }],
    dwActive: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-active',] }]
};
function DwCollapsePanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCollapsePanelComponent.prototype._disabled;
    /** @type {?} */
    DwCollapsePanelComponent.prototype._showArrow;
    /** @type {?} */
    DwCollapsePanelComponent.prototype._active;
    /** @type {?} */
    DwCollapsePanelComponent.prototype._header;
    /** @type {?} */
    DwCollapsePanelComponent.prototype.isHeaderString;
    /** @type {?} */
    DwCollapsePanelComponent.prototype.el;
    /** @type {?} */
    DwCollapsePanelComponent.prototype.dwActiveChange;
    /** @type {?} */
    DwCollapsePanelComponent.prototype.dwCollapseComponent;
    /** @type {?} */
    DwCollapsePanelComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjb2xsYXBzZS9kdy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBK0I5RCxNQUFNOzs7OztJQTBESixZQUE0QixtQkFBd0MsRUFBVSxVQUFzQjtRQUF4RSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTt5QkF6RGhGLEtBQUs7MEJBQ0osSUFBSTt1QkFDUCxLQUFLOzhCQUlJLElBQUksWUFBWSxFQUFXO1FBb0RwRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDOzs7OztJQW5ERCxJQUFhLFdBQVcsQ0FBQyxLQUFjO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFDSSxTQUFTO1FBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDMUI7Ozs7O0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBaUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBRUksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFFSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Ozs7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9DOzs7WUFqR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxtQkFBbUI7Z0JBQ2hDLDZuQkFBaUQ7Z0JBQ2pELFVBQVUsRUFBRztvQkFDWCxPQUFPLENBQUMsZUFBZSxFQUFFO3dCQUN2QixLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQzs0QkFDdEIsT0FBTyxFQUFFLEdBQUc7NEJBQ1osTUFBTSxFQUFHLENBQUM7eUJBQ1gsQ0FBQyxDQUFDO3dCQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDOzRCQUNwQixPQUFPLEVBQUUsR0FBRzs0QkFDWixNQUFNLEVBQUcsR0FBRzt5QkFDYixDQUFDLENBQUM7d0JBQ0gsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDMUQsVUFBVSxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3FCQUM1RCxDQUFDO2lCQUNIO2dCQU9ELElBQUksRUFBUztvQkFDWCwyQkFBMkIsRUFBRSxNQUFNO29CQUNuQyxhQUFhLEVBQWdCLFdBQVc7aUJBQ3pDO3lCQVJDOzs7UUFHSTthQU1QOzs7O1lBN0JRLG1CQUFtQix1QkF5RmIsSUFBSTtZQXRHakIsVUFBVTs7OzZCQW1EVCxNQUFNOzBCQUVOLEtBQUs7d0JBUUwsV0FBVyxTQUFDLDZCQUE2Qjt1QkFLekMsS0FBSzt5QkFVTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLGtDQUFrQzt1QkFTOUMsS0FBSyxZQUNMLFdBQVcsU0FBQyxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd0NvbGxhcHNlQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1jb2xsYXBzZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy1jb2xsYXBzZS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnMgOiBbXG4gICAgdHJpZ2dlcignY29sbGFwc2VTdGF0ZScsIFtcbiAgICAgIHN0YXRlKCdpbmFjdGl2ZScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICBoZWlnaHQgOiAwXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgIGhlaWdodCA6ICcqJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnMTUwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzE1MG1zIGVhc2Utb3V0JykpXG4gICAgXSlcbiAgXSxcbiAgc3R5bGVzICAgICA6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICB9YFxuICBdLFxuICBob3N0ICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW1dJzogJ3RydWUnLFxuICAgICdbYXR0ci5yb2xlXScgICAgICAgICAgICAgIDogJ1widGFibGlzdFwiJ1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgRHdDb2xsYXBzZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93QXJyb3cgPSB0cnVlO1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgaXNIZWFkZXJTdHJpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBAT3V0cHV0KCkgZHdBY3RpdmVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgc2V0IGR3U2hvd0Fycm93KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0Fycm93ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0Fycm93O1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY29sbGFwc2Utbm8tYXJyb3cnKVxuICBnZXQgaXNOb0Fycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kd1Nob3dBcnJvdztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0hlYWRlcih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzSGVhZGVyU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9oZWFkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0hlYWRlcigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tZGlzYWJsZWQnKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNvbGxhcHNlLWl0ZW0tYWN0aXZlJylcbiAgc2V0IGR3QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICB9XG5cbiAgY2xpY2tIZWFkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZHdDb2xsYXBzZUNvbXBvbmVudC5jbGljayh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgZHdDb2xsYXBzZUNvbXBvbmVudDogRHdDb2xsYXBzZUNvbXBvbmVudCwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kd0NvbGxhcHNlQ29tcG9uZW50LmFkZENvbGxhcHNlKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kd0NvbGxhcHNlQ29tcG9uZW50LnJlbW92ZUNvbGxhcHNlKHRoaXMpO1xuICB9XG59XG4iXX0=
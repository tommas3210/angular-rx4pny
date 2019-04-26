/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Host, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { DwCollapseComponent } from './dw-collapse.component';
var DwCollapsePanelComponent = /** @class */ (function () {
    function DwCollapsePanelComponent(dwCollapseComponent, elementRef) {
        this.dwCollapseComponent = dwCollapseComponent;
        this.elementRef = elementRef;
        this._disabled = false;
        this._showArrow = true;
        this._active = false;
        this.dwActiveChange = new EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwCollapsePanelComponent.prototype, "dwShowArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showArrow;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showArrow = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCollapsePanelComponent.prototype, "isNoArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.dwShowArrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCollapsePanelComponent.prototype, "dwHeader", {
        get: /**
         * @return {?}
         */
        function () {
            return this._header;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isHeaderString = !(value instanceof TemplateRef);
            this._header = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCollapsePanelComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCollapsePanelComponent.prototype, "dwActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCollapsePanelComponent.prototype.clickHeader = /**
     * @return {?}
     */
    function () {
        if (!this.dwDisabled) {
            this.dwCollapseComponent.click(this);
        }
    };
    /**
     * @return {?}
     */
    DwCollapsePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dwCollapseComponent.addCollapse(this);
    };
    /**
     * @return {?}
     */
    DwCollapsePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dwCollapseComponent.removeCollapse(this);
    };
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
                    styles: ["\n      :host {\n        display: block\n      }"]
                }] }
    ];
    /** @nocollapse */
    DwCollapsePanelComponent.ctorParameters = function () { return [
        { type: DwCollapseComponent, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    DwCollapsePanelComponent.propDecorators = {
        dwActiveChange: [{ type: Output }],
        dwShowArrow: [{ type: Input }],
        isNoArrow: [{ type: HostBinding, args: ['class.ant-collapse-no-arrow',] }],
        dwHeader: [{ type: Input }],
        dwDisabled: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-disabled',] }],
        dwActive: [{ type: Input }, { type: HostBinding, args: ['class.ant-collapse-item-active',] }]
    };
    return DwCollapsePanelComponent;
}());
export { DwCollapsePanelComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY29sbGFwc2UtcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjb2xsYXBzZS9kdy1jb2xsYXBzZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQXlGNUQsa0NBQTRCLG1CQUF3QyxFQUFVLFVBQXNCO1FBQXhFLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO3lCQXpEaEYsS0FBSzswQkFDSixJQUFJO3VCQUNQLEtBQUs7OEJBSUksSUFBSSxZQUFZLEVBQVc7UUFvRHBELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDekM7SUFuREQsc0JBQWEsaURBQVc7Ozs7UUFJeEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7Ozs7O1FBTkQsVUFBeUIsS0FBYztZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQzs7O09BQUE7SUFNRCxzQkFDSSwrQ0FBUzs7OztRQURiO1lBRUUsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDMUI7OztPQUFBO0lBRUQsc0JBQ0ksOENBQVE7Ozs7UUFLWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFSRCxVQUNhLEtBQWlDO1lBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0Qjs7O09BQUE7SUFNRCxzQkFFSSxnREFBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVJELFVBRWUsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFFSSw4Q0FBUTs7OztRQUlaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVJELFVBRWEsS0FBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7O09BQUE7Ozs7SUFNRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0tBQ0Y7Ozs7SUFNRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQzs7Z0JBakdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUssbUJBQW1CO29CQUNoQyw2bkJBQWlEO29CQUNqRCxVQUFVLEVBQUc7d0JBQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRTs0QkFDdkIsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7Z0NBQ3RCLE9BQU8sRUFBRSxHQUFHO2dDQUNaLE1BQU0sRUFBRyxDQUFDOzZCQUNYLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztnQ0FDcEIsT0FBTyxFQUFFLEdBQUc7Z0NBQ1osTUFBTSxFQUFHLEdBQUc7NkJBQ2IsQ0FBQyxDQUFDOzRCQUNILFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQzFELFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt5QkFDNUQsQ0FBQztxQkFDSDtvQkFPRCxJQUFJLEVBQVM7d0JBQ1gsMkJBQTJCLEVBQUUsTUFBTTt3QkFDbkMsYUFBYSxFQUFnQixXQUFXO3FCQUN6Qzs2QkFSQyxrREFHSTtpQkFNUDs7OztnQkE3QlEsbUJBQW1CLHVCQXlGYixJQUFJO2dCQXRHakIsVUFBVTs7O2lDQW1EVCxNQUFNOzhCQUVOLEtBQUs7NEJBUUwsV0FBVyxTQUFDLDZCQUE2QjsyQkFLekMsS0FBSzs2QkFVTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLGtDQUFrQzsyQkFTOUMsS0FBSyxZQUNMLFdBQVcsU0FBQyxnQ0FBZ0M7O21DQWhHL0M7O1NBcURhLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IER3Q29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2R3LWNvbGxhcHNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2R3LWNvbGxhcHNlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LWNvbGxhcHNlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9ucyA6IFtcbiAgICB0cmlnZ2VyKCdjb2xsYXBzZVN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIGhlaWdodCA6IDBcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgaGVpZ2h0IDogJyonXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxNTBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMTUwbXMgZWFzZS1vdXQnKSlcbiAgICBdKVxuICBdLFxuICBzdHlsZXMgICAgIDogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgIH1gXG4gIF0sXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY29sbGFwc2UtaXRlbV0nOiAndHJ1ZScsXG4gICAgJ1thdHRyLnJvbGVdJyAgICAgICAgICAgICAgOiAnXCJ0YWJsaXN0XCInXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEd0NvbGxhcHNlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dBcnJvdyA9IHRydWU7XG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuICBwcml2YXRlIF9oZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBpc0hlYWRlclN0cmluZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIEBPdXRwdXQoKSBkd0FjdGl2ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKSBzZXQgZHdTaG93QXJyb3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93QXJyb3cgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0Fycm93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93QXJyb3c7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1jb2xsYXBzZS1uby1hcnJvdycpXG4gIGdldCBpc05vQXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmR3U2hvd0Fycm93O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SGVhZGVyKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNIZWFkZXJTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2hlYWRlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3SGVhZGVyKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1kaXNhYmxlZCcpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY29sbGFwc2UtaXRlbS1hY3RpdmUnKVxuICBzZXQgZHdBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3QWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBjbGlja0hlYWRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kd0NvbGxhcHNlQ29tcG9uZW50LmNsaWNrKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBkd0NvbGxhcHNlQ29tcG9uZW50OiBEd0NvbGxhcHNlQ29tcG9uZW50LCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmR3Q29sbGFwc2VDb21wb25lbnQuYWRkQ29sbGFwc2UodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmR3Q29sbGFwc2VDb21wb25lbnQucmVtb3ZlQ29sbGFwc2UodGhpcyk7XG4gIH1cbn1cbiJdfQ==
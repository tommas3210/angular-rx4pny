/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class DwTdComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._showExpand = false;
        this._expand = false;
        this._showCheckbox = false;
        this.isIndentSizeSet = false;
        this.dwChecked = false;
        this.dwDisabled = false;
        this.dwIndeterminate = false;
        this.dwCheckedChange = new EventEmitter();
        this.dwExpandChange = new EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwIndentSize(value) {
        this._indentSize = value;
        this.isIndentSizeSet = isNotNil(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get dwIndentSize() {
        return this._indentSize;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwExpand(value) {
        this._expand = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwExpand() {
        return this._expand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowExpand(value) {
        this._showExpand = toBoolean(value);
        this.updateExpandIconClass();
    }
    /**
     * @return {?}
     */
    get dwShowExpand() {
        return this._showExpand;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowCheckbox(value) {
        this._showCheckbox = toBoolean(value);
        if (this._showCheckbox) {
            this.renderer.addClass(this.el, 'ant-table-selection-column');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-selection-column');
        }
    }
    /**
     * @return {?}
     */
    get dwShowCheckbox() {
        return this._showCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLeft(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.setStyle(this.el, 'left', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-left-sticky');
            this.renderer.removeStyle(this.el, 'left');
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwRight(value) {
        if (isNotNil(value)) {
            this.renderer.addClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.setStyle(this.el, 'right', value);
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-td-right-sticky');
            this.renderer.removeStyle(this.el, 'right');
        }
    }
    /**
     * @return {?}
     */
    updateExpandIconClass() {
        if (this.dwShowExpand && !this.isIndentSizeSet) {
            this.renderer.addClass(this.el, 'ant-table-row-expand-icon-cell');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-row-expand-icon-cell');
        }
    }
    /**
     * @return {?}
     */
    expandChange() {
        this.dwExpand = !this.dwExpand;
        this.dwExpandChange.emit(this.dwExpand);
    }
}
DwTdComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'td:not(.dw-disable-td)',
                template: "<span class=\"ant-table-row-indent\" *ngIf=\"dwIndentSize >= 0\" [style.padding-left.px]=\"dwIndentSize\"></span>\n<label\n  *ngIf=\"dwShowCheckbox\"\n  dw-checkbox\n  [dwDisabled]=\"dwDisabled\"\n  [(ngModel)]=\"dwChecked\"\n  [dwIndeterminate]=\"dwIndeterminate\"\n  (ngModelChange)=\"dwCheckedChange.emit($event)\">\n</label>\n<span\n  *ngIf=\"!dwShowExpand && dwIndentSize != null\"\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\"></span>\n<span\n  *ngIf=\"dwShowExpand\"\n  class=\"ant-table-row-expand-icon\"\n  (click)=\"expandChange()\"\n  [class.ant-table-row-expanded]=\"dwExpand\"\n  [class.ant-table-row-collapsed]=\"!dwExpand\"></span>\n<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
DwTdComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
DwTdComponent.propDecorators = {
    dwChecked: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwIndeterminate: [{ type: Input }],
    dwCheckedChange: [{ type: Output }],
    dwExpandChange: [{ type: Output }],
    dwIndentSize: [{ type: Input }],
    dwExpand: [{ type: Input }],
    dwShowExpand: [{ type: Input }],
    dwShowCheckbox: [{ type: Input }],
    dwLeft: [{ type: Input }],
    dwRight: [{ type: Input }]
};
function DwTdComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTdComponent.prototype._showExpand;
    /** @type {?} */
    DwTdComponent.prototype._indentSize;
    /** @type {?} */
    DwTdComponent.prototype._expand;
    /** @type {?} */
    DwTdComponent.prototype._showCheckbox;
    /** @type {?} */
    DwTdComponent.prototype.isIndentSizeSet;
    /** @type {?} */
    DwTdComponent.prototype.el;
    /** @type {?} */
    DwTdComponent.prototype.dwChecked;
    /** @type {?} */
    DwTdComponent.prototype.dwDisabled;
    /** @type {?} */
    DwTdComponent.prototype.dwIndeterminate;
    /** @type {?} */
    DwTdComponent.prototype.dwCheckedChange;
    /** @type {?} */
    DwTdComponent.prototype.dwExpandChange;
    /** @type {?} */
    DwTdComponent.prototype.elementRef;
    /** @type {?} */
    DwTdComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10ZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT2pELE1BQU07Ozs7O0lBNEZKLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7MkJBM0ZqRCxLQUFLO3VCQUVULEtBQUs7NkJBQ0MsS0FBSzsrQkFDWCxLQUFLO3lCQUVGLEtBQUs7MEJBQ0osS0FBSzsrQkFDQSxLQUFLOytCQUNKLElBQUksWUFBWSxFQUFXOzhCQUM1QixJQUFJLFlBQVksRUFBVztRQWtGcEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6Qzs7Ozs7SUFqRkQsSUFDSSxZQUFZLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztLQUM5Qjs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQ0ksWUFBWSxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7S0FDekI7Ozs7O0lBRUQsSUFDSSxjQUFjLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLDRCQUE0QixDQUFDLENBQUM7U0FDbEU7S0FDRjs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7O0lBRUQsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLDBCQUEwQixDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO0tBQ0Y7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLDJCQUEyQixDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdDO0tBQ0Y7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztTQUN0RTtLQUNGOzs7O0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN6Qzs7O1lBL0ZGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFLLHdCQUF3QjtnQkFDckMsMnJCQUFxQzthQUN0Qzs7OztZQWRDLFVBQVU7WUFJVixTQUFTOzs7d0JBa0JSLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLE1BQU07NkJBQ04sTUFBTTsyQkFFTixLQUFLO3VCQVdMLEtBQUs7MkJBU0wsS0FBSzs2QkFVTCxLQUFLO3FCQWNMLEtBQUs7c0JBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3IgICA6ICd0ZDpub3QoLmR3LWRpc2FibGUtdGQpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LXRkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1RkQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc2hvd0V4cGFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmRlbnRTaXplOiBudW1iZXI7XG4gIHByaXZhdGUgX2V4cGFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93Q2hlY2tib3ggPSBmYWxzZTtcbiAgaXNJbmRlbnRTaXplU2V0ID0gZmFsc2U7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgQElucHV0KCkgZHdDaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBkd0NoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBkd0V4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdJbmRlbnRTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9pbmRlbnRTaXplID0gdmFsdWU7XG4gICAgdGhpcy5pc0luZGVudFNpemVTZXQgPSBpc05vdE5pbCh2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVFeHBhbmRJY29uQ2xhc3MoKTtcbiAgfVxuXG4gIGdldCBkd0luZGVudFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5kZW50U2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0V4cGFuZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2V4cGFuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdFeHBhbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2V4cGFuZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93RXhwYW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUV4cGFuZEljb25DbGFzcygpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0V4cGFuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0V4cGFuZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dDaGVja2JveCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dDaGVja2JveCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX3Nob3dDaGVja2JveCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdTaG93Q2hlY2tib3goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dDaGVja2JveDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0xlZnQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10ZC1sZWZ0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGVmdCcsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLWxlZnQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdsZWZ0Jyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UmlnaHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10ZC1yaWdodC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ3JpZ2h0JywgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtcmlnaHQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdyaWdodCcpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUV4cGFuZEljb25DbGFzcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd1Nob3dFeHBhbmQgJiYgIXRoaXMuaXNJbmRlbnRTaXplU2V0KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtcm93LWV4cGFuZC1pY29uLWNlbGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwYW5kQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuZHdFeHBhbmQgPSAhdGhpcy5kd0V4cGFuZDtcbiAgICB0aGlzLmR3RXhwYW5kQ2hhbmdlLmVtaXQodGhpcy5kd0V4cGFuZCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuIl19
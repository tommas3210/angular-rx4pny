/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var DwTdComponent = /** @class */ (function () {
    function DwTdComponent(elementRef, renderer) {
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
    Object.defineProperty(DwTdComponent.prototype, "dwIndentSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._indentSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._indentSize = value;
            this.isIndentSizeSet = isNotNil(value);
            this.updateExpandIconClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTdComponent.prototype, "dwExpand", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expand;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expand = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTdComponent.prototype, "dwShowExpand", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showExpand;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showExpand = toBoolean(value);
            this.updateExpandIconClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTdComponent.prototype, "dwShowCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showCheckbox = toBoolean(value);
            if (this._showCheckbox) {
                this.renderer.addClass(this.el, 'ant-table-selection-column');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTdComponent.prototype, "dwLeft", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-td-left-sticky');
                this.renderer.setStyle(this.el, 'left', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-td-left-sticky');
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTdComponent.prototype, "dwRight", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-td-right-sticky');
                this.renderer.setStyle(this.el, 'right', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-td-right-sticky');
                this.renderer.removeStyle(this.el, 'right');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTdComponent.prototype.updateExpandIconClass = /**
     * @return {?}
     */
    function () {
        if (this.dwShowExpand && !this.isIndentSizeSet) {
            this.renderer.addClass(this.el, 'ant-table-row-expand-icon-cell');
        }
        else {
            this.renderer.removeClass(this.el, 'ant-table-row-expand-icon-cell');
        }
    };
    /**
     * @return {?}
     */
    DwTdComponent.prototype.expandChange = /**
     * @return {?}
     */
    function () {
        this.dwExpand = !this.dwExpand;
        this.dwExpandChange.emit(this.dwExpand);
    };
    DwTdComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'td:not(.dw-disable-td)',
                    template: "<span class=\"ant-table-row-indent\" *ngIf=\"dwIndentSize >= 0\" [style.padding-left.px]=\"dwIndentSize\"></span>\n<label\n  *ngIf=\"dwShowCheckbox\"\n  dw-checkbox\n  [dwDisabled]=\"dwDisabled\"\n  [(ngModel)]=\"dwChecked\"\n  [dwIndeterminate]=\"dwIndeterminate\"\n  (ngModelChange)=\"dwCheckedChange.emit($event)\">\n</label>\n<span\n  *ngIf=\"!dwShowExpand && dwIndentSize != null\"\n  class=\"ant-table-row-expand-icon ant-table-row-spaced\"></span>\n<span\n  *ngIf=\"dwShowExpand\"\n  class=\"ant-table-row-expand-icon\"\n  (click)=\"expandChange()\"\n  [class.ant-table-row-expanded]=\"dwExpand\"\n  [class.ant-table-row-collapsed]=\"!dwExpand\"></span>\n<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    DwTdComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return DwTdComponent;
}());
export { DwTdComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10ZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQW1HL0MsdUJBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7MkJBM0ZqRCxLQUFLO3VCQUVULEtBQUs7NkJBQ0MsS0FBSzsrQkFDWCxLQUFLO3lCQUVGLEtBQUs7MEJBQ0osS0FBSzsrQkFDQSxLQUFLOytCQUNKLElBQUksWUFBWSxFQUFXOzhCQUM1QixJQUFJLFlBQVksRUFBVztRQWtGcEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6QztJQWpGRCxzQkFDSSx1Q0FBWTs7OztRQU1oQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7UUFURCxVQUNpQixLQUFhO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQzlCOzs7T0FBQTtJQU1ELHNCQUNJLG1DQUFROzs7O1FBSVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBUEQsVUFDYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxP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QUNyQywyckJBQXFDO2lCQUN0Qzs7OztnQkFkQyxVQUFVO2dCQUlWLFNBQVM7Ozs0QkFrQlIsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLEtBQUs7a0NBQ0wsTUFBTTtpQ0FDTixNQUFNOytCQUVOLEtBQUs7MkJBV0wsS0FBSzsrQkFTTCxLQUFLO2lDQVVMLEtBQUs7eUJBY0wsS0FBSzswQkFXTCxLQUFLOzt3QkFyRlI7O1NBaUJhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yICAgOiAndGQ6bm90KC5kdy1kaXNhYmxlLXRkKScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy10ZC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdUZENvbXBvbmVudCB7XG4gIHByaXZhdGUgX3Nob3dFeHBhbmQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5kZW50U2l6ZTogbnVtYmVyO1xuICBwcml2YXRlIF9leHBhbmQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0NoZWNrYm94ID0gZmFsc2U7XG4gIGlzSW5kZW50U2l6ZVNldCA9IGZhbHNlO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIEBJbnB1dCgpIGR3Q2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkd0Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3SW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgZHdDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgZHdFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5kZW50U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5kZW50U2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMuaXNJbmRlbnRTaXplU2V0ID0gaXNOb3ROaWwodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlRXhwYW5kSWNvbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgZHdJbmRlbnRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGVudFNpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9leHBhbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RXhwYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9leHBhbmQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93RXhwYW5kKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0V4cGFuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVFeHBhbmRJY29uQ2xhc3MoKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dFeHBhbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dFeHBhbmQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93Q2hlY2tib3godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Q2hlY2tib3ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLl9zaG93Q2hlY2tib3gpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3U2hvd0NoZWNrYm94KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93Q2hlY2tib3g7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMZWZ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtbGVmdC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10ZC1sZWZ0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnbGVmdCcpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1JpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGQtcmlnaHQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdyaWdodCcsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRkLXJpZ2h0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncmlnaHQnKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVFeHBhbmRJY29uQ2xhc3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdTaG93RXhwYW5kICYmICF0aGlzLmlzSW5kZW50U2l6ZVNldCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1yb3ctZXhwYW5kLWljb24tY2VsbCcpO1xuICAgIH1cbiAgfVxuXG4gIGV4cGFuZENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmR3RXhwYW5kID0gIXRoaXMuZHdFeHBhbmQ7XG4gICAgdGhpcy5kd0V4cGFuZENoYW5nZS5lbWl0KHRoaXMuZHdFeHBhbmQpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==
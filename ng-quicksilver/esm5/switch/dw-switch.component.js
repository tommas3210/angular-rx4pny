/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, HostListener, Input, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
var DwSwitchComponent = /** @class */ (function () {
    function DwSwitchComponent() {
        this._disabled = false;
        this._loading = false;
        this._control = false;
        this.prefixCls = 'ant-switch';
        this.checked = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(DwSwitchComponent.prototype, "dwControl", {
        get: /**
         * @return {?}
         */
        function () {
            return this._control;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._control = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSwitchComponent.prototype, "dwCheckedChildren", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checkedChildren;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isCheckedChildrenString = !(value instanceof TemplateRef);
            this._checkedChildren = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSwitchComponent.prototype, "dwUnCheckedChildren", {
        get: /**
         * @return {?}
         */
        function () {
            return this._unCheckedChildren;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isUnCheckedChildrenString = !(value instanceof TemplateRef);
            this._unCheckedChildren = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSwitchComponent.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSwitchComponent.prototype, "dwLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSwitchComponent.prototype, "dwDisabled", {
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
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    DwSwitchComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if ((!this.dwDisabled) && (!this.dwLoading) && (!this.dwControl)) {
            this.updateValue(!this.checked, true);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    DwSwitchComponent.prototype.updateValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (this.checked === value) {
            return;
        }
        this.checked = value;
        this.setClassMap();
        if (emit) {
            this.onChange(this.checked);
        }
    };
    /**
     * @return {?}
     */
    DwSwitchComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-checked"] = this.checked,
            _a[this.prefixCls + "-loading"] = this.dwLoading,
            _a[this.prefixCls + "-disabled"] = this.dwDisabled,
            _a[this.prefixCls + "-small"] = this.dwSize === 'small',
            _a);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwSwitchComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.dwControl) {
            if (e.keyCode === 37) { // Left
                // Left
                this.updateValue(false, true);
                e.preventDefault();
            }
            else if (e.keyCode === 39) { // Right
                // Right
                this.updateValue(true, true);
                e.preventDefault();
            }
            else if (e.keyCode === 32 || e.keyCode === 13) { // Space, Enter
                // Space, Enter
                this.updateValue(!this.checked, true);
                e.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    DwSwitchComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.switchElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    DwSwitchComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.switchElement.nativeElement.blur();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateValue(value, false);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DwSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.dwDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    DwSwitchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    DwSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-switch',
                    preserveWhitespaces: false,
                    template: "<span dw-wave [dwWaveExtraNode]=\"true\" [ngClass]=\"classMap\" [tabindex]=\"dwDisabled?-1:0\" #switchElement (keydown)=\"onKeyDown($event)\">\n  <span class=\"ant-switch-inner\">\n    <span *ngIf=\"checked\">\n      <ng-container *ngIf=\"isCheckedChildrenString; else checkedChildrenTemplate\">{{ dwCheckedChildren }}</ng-container>\n      <ng-template #checkedChildrenTemplate>\n        <ng-template [ngTemplateOutlet]=\"dwCheckedChildren\"></ng-template>\n      </ng-template>\n    </span>\n    <span *ngIf=\"!checked\">\n      <ng-container *ngIf=\"isUnCheckedChildrenString; else unCheckedChildrenTemplate\">{{ dwUnCheckedChildren }}</ng-container>\n      <ng-template #unCheckedChildrenTemplate>\n        <ng-template [ngTemplateOutlet]=\"dwUnCheckedChildren\"></ng-template>\n      </ng-template>\n    </span>\n  </span>\n</span>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwSwitchComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["\n    :host {\n      display: inline-block;\n    }\n  "]
                }] }
    ];
    DwSwitchComponent.propDecorators = {
        switchElement: [{ type: ViewChild, args: ['switchElement',] }],
        dwControl: [{ type: Input }],
        dwCheckedChildren: [{ type: Input }],
        dwUnCheckedChildren: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwLoading: [{ type: Input }],
        dwDisabled: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return DwSwitchComponent;
}());
export { DwSwitchComponent };
function DwSwitchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSwitchComponent.prototype._disabled;
    /** @type {?} */
    DwSwitchComponent.prototype._size;
    /** @type {?} */
    DwSwitchComponent.prototype._loading;
    /** @type {?} */
    DwSwitchComponent.prototype._control;
    /** @type {?} */
    DwSwitchComponent.prototype._checkedChildren;
    /** @type {?} */
    DwSwitchComponent.prototype._unCheckedChildren;
    /** @type {?} */
    DwSwitchComponent.prototype.prefixCls;
    /** @type {?} */
    DwSwitchComponent.prototype.classMap;
    /** @type {?} */
    DwSwitchComponent.prototype.checked;
    /** @type {?} */
    DwSwitchComponent.prototype.isCheckedChildrenString;
    /** @type {?} */
    DwSwitchComponent.prototype.isUnCheckedChildrenString;
    /** @type {?} */
    DwSwitchComponent.prototype.switchElement;
    /** @type {?} */
    DwSwitchComponent.prototype.onChange;
    /** @type {?} */
    DwSwitchComponent.prototype.onTouched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic3dpdGNoL2R3LXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O3lCQXNCM0IsS0FBSzt3QkFFTixLQUFLO3dCQUNMLEtBQUs7eUJBR1osWUFBWTt1QkFFZCxLQUFLO3dCQUtzQixjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUk7eUJBQ3ZCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSTs7SUFFbEMsc0JBQ0ksd0NBQVM7Ozs7UUFJYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFQRCxVQUNjLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7OztPQUFBO0lBTUQsc0JBQ0ksZ0RBQWlCOzs7O1FBS3JCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7Ozs7O1FBUkQsVUFDc0IsS0FBaUM7WUFDckQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUMvQjs7O09BQUE7SUFNRCxzQkFDSSxrREFBbUI7Ozs7UUFLdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztTQUNoQzs7Ozs7UUFSRCxVQUN3QixLQUFpQztZQUN2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QUFpQixDQUFDOzRCQUNoRCxLQUFLLEVBQVEsSUFBSTt5QkFDbEI7cUJBQ0Y7NkJBWHNCLHdEQUl0QjtpQkFRRjs7O2dDQWFFLFNBQVMsU0FBQyxlQUFlOzRCQUt6QixLQUFLO29DQVNMLEtBQUs7c0NBVUwsS0FBSzt5QkFVTCxLQUFLOzRCQVVMLEtBQUs7NkJBVUwsS0FBSzswQkFVTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFOzs0QkE3R3JDOztTQWlDYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5leHBvcnQgdHlwZSBEd1N3aXRjaFNpemVUeXBlID0gJ2RlZmF1bHQnIHwgJ3NtYWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zd2l0Y2gnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgYCBdLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdTd2l0Y2hDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2l6ZTogRHdTd2l0Y2hTaXplVHlwZTtcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIF9jb250cm9sID0gZmFsc2U7XG4gIHByaXZhdGUgX2NoZWNrZWRDaGlsZHJlbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX3VuQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJlZml4Q2xzID0gJ2FudC1zd2l0Y2gnO1xuICBjbGFzc01hcDtcbiAgY2hlY2tlZCA9IGZhbHNlO1xuICBpc0NoZWNrZWRDaGlsZHJlblN0cmluZzogYm9vbGVhbjtcbiAgaXNVbkNoZWNrZWRDaGlsZHJlblN0cmluZzogYm9vbGVhbjtcbiAgQFZpZXdDaGlsZCgnc3dpdGNoRWxlbWVudCcpXG4gIHByaXZhdGUgc3dpdGNoRWxlbWVudDogRWxlbWVudFJlZjtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q29udHJvbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbnRyb2wgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q29udHJvbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29udHJvbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NoZWNrZWRDaGlsZHJlbih2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzQ2hlY2tlZENoaWxkcmVuU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl9jaGVja2VkQ2hpbGRyZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0NoZWNrZWRDaGlsZHJlbigpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrZWRDaGlsZHJlbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1VuQ2hlY2tlZENoaWxkcmVuKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNVbkNoZWNrZWRDaGlsZHJlblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fdW5DaGVja2VkQ2hpbGRyZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1VuQ2hlY2tlZENoaWxkcmVuKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdW5DaGVja2VkQ2hpbGRyZW47XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaXplKHZhbHVlOiBEd1N3aXRjaFNpemVUeXBlKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd1NpemUoKTogRHdTd2l0Y2hTaXplVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3TG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxuICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCghdGhpcy5kd0Rpc2FibGVkKSAmJiAoIXRoaXMuZHdMb2FkaW5nKSAmJiAoIXRoaXMuZHdDb250cm9sKSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5jaGVja2VkLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbiwgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrZWQgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWNoZWNrZWRgIF0gOiB0aGlzLmNoZWNrZWQsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYCBdIDogdGhpcy5kd0xvYWRpbmcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAgXTogdGhpcy5kd0Rpc2FibGVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc21hbGxgIF0gICA6IHRoaXMuZHdTaXplID09PSAnc21hbGwnXG4gICAgfTtcbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmR3Q29udHJvbCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHsgLy8gTGVmdFxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM5KSB7IC8vIFJpZ2h0XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzMiB8fCBlLmtleUNvZGUgPT09IDEzKSB7IC8vIFNwYWNlLCBFbnRlclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmNoZWNrZWQsIHRydWUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5zd2l0Y2hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5zd2l0Y2hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kd0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxufVxuIl19
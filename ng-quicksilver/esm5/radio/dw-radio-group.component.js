/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var DwRadioGroupComponent = /** @class */ (function () {
    function DwRadioGroupComponent(elementRef) {
        this.elementRef = elementRef;
        this._size = 'default';
        // ngModel Access
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.radios = [];
        this.dwButtonStyle = 'outline';
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(DwRadioGroupComponent.prototype, "dwSize", {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRadioGroupComponent.prototype, "dwDisabled", {
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
            this.updateDisabledState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRadioGroupComponent.prototype, "dwName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this.updateChildrenName();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwRadioGroupComponent.prototype.updateDisabledState = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isNotNil(this.dwDisabled)) {
            this.radios.forEach(function (radio) {
                radio.dwDisabled = _this.dwDisabled;
            });
        }
    };
    /**
     * @return {?}
     */
    DwRadioGroupComponent.prototype.updateChildrenName = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dwName) {
            this.radios.forEach(function (item) {
                item.name = _this.dwName;
            });
        }
    };
    /**
     * @return {?}
     */
    DwRadioGroupComponent.prototype.syncCheckedValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.radios.forEach(function (item) {
            item.dwChecked = item.dwValue === _this.value;
        });
    };
    Object.defineProperty(DwRadioGroupComponent.prototype, "isLarge", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'large';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRadioGroupComponent.prototype, "isSmall", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwSize === 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwRadioGroupComponent.prototype, "isSolid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwButtonStyle === 'solid';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} radio
     * @return {?}
     */
    DwRadioGroupComponent.prototype.addRadio = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) {
        this.radios.push(radio);
        radio.dwChecked = radio.dwValue === this.value;
    };
    /**
     * @param {?} radio
     * @return {?}
     */
    DwRadioGroupComponent.prototype.selectRadio = /**
     * @param {?} radio
     * @return {?}
     */
    function (radio) {
        this.updateValue(radio.dwValue, true);
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    DwRadioGroupComponent.prototype.updateValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.value = value;
        this.syncCheckedValue();
        if (emit) {
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    DwRadioGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.syncCheckedValue();
        this.updateChildrenName();
        Promise.resolve().then(function () {
            _this.updateDisabledState();
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwRadioGroupComponent.prototype.writeValue = /**
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
    DwRadioGroupComponent.prototype.registerOnChange = /**
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
    DwRadioGroupComponent.prototype.registerOnTouched = /**
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
    DwRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.dwDisabled = isDisabled;
    };
    DwRadioGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-radio-group',
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>",
                    host: {
                        '[class.ant-radio-group]': 'true'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwRadioGroupComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    DwRadioGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    DwRadioGroupComponent.propDecorators = {
        dwSize: [{ type: Input }],
        dwDisabled: [{ type: Input }],
        dwName: [{ type: Input }],
        dwButtonStyle: [{ type: Input }],
        isLarge: [{ type: HostBinding, args: ['class.ant-radio-group-large',] }],
        isSmall: [{ type: HostBinding, args: ['class.ant-radio-group-small',] }],
        isSolid: [{ type: HostBinding, args: ['class.ant-radio-group-solid',] }]
    };
    return DwRadioGroupComponent;
}());
export { DwRadioGroupComponent };
function DwRadioGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRadioGroupComponent.prototype._size;
    /** @type {?} */
    DwRadioGroupComponent.prototype._name;
    /** @type {?} */
    DwRadioGroupComponent.prototype._disabled;
    /** @type {?} */
    DwRadioGroupComponent.prototype.el;
    /** @type {?} */
    DwRadioGroupComponent.prototype.value;
    /** @type {?} */
    DwRadioGroupComponent.prototype.onChange;
    /** @type {?} */
    DwRadioGroupComponent.prototype.onTouched;
    /** @type {?} */
    DwRadioGroupComponent.prototype.radios;
    /** @type {?} */
    DwRadioGroupComponent.prototype.dwButtonStyle;
    /** @type {?} */
    DwRadioGroupComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJyYWRpby9kdy1yYWRpby1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXlIL0MsK0JBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7cUJBakdKLFNBQVM7O3dCQU9mLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSTt5QkFDbEIsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJO3NCQUV5QixFQUFFOzZCQStCaEIsU0FBUztRQXlEcEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6QztJQXZGRCxzQkFDSSx5Q0FBTTs7OztRQUlWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVBELFVBQ1csS0FBMkI7WUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7OztPQUFBO0lBTUQsc0JBQ0ksNkNBQVU7Ozs7UUFLZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN2Qjs7Ozs7UUFSRCxVQUNlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7OztPQUFBO0lBTUQsc0JB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QUcsRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztLQUM5Qjs7Z0JBM0lGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsZ0JBQWdCO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixxQ0FBc0Q7b0JBQ3RELElBQUksRUFBaUI7d0JBQ25CLHlCQUF5QixFQUFFLE1BQU07cUJBQ2xDO29CQUNELFNBQVMsRUFBWTt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7NEJBQ3BELEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtpQkFDRjs7OztnQkE1QkMsVUFBVTs7O3lCQTBDVCxLQUFLOzZCQVNMLEtBQUs7eUJBVUwsS0FBSztnQ0FVTCxLQUFLOzBCQXdCTCxXQUFXLFNBQUMsNkJBQTZCOzBCQUt6QyxXQUFXLFNBQUMsNkJBQTZCOzBCQUt6QyxXQUFXLFNBQUMsNkJBQTZCOztnQ0E3RzVDOztTQWlDYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZXhwb3J0IHR5cGUgRHdSYWRpb0dyb3VwU2l6ZVR5cGUgPSAnbGFyZ2UnIHwgJ2RlZmF1bHQnIHwgJ3NtYWxsJztcbmV4cG9ydCB0eXBlIER3UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJyB8ICdzb2xpZCc7XG5cbmltcG9ydCB7IER3UmFkaW9CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2R3LXJhZGlvLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vZHctcmFkaW8uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1yYWRpby1ncm91cCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1yYWRpby1ncm91cF0nOiAndHJ1ZSdcbiAgfSxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER3UmFkaW9Hcm91cENvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1JhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIHByaXZhdGUgX3NpemU6IER3UmFkaW9Hcm91cFNpemVUeXBlID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgLy8gbmdNb2RlbCBBY2Nlc3NcbiAgb25DaGFuZ2U6IChfOiBzdHJpbmcpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIHJhZGlvczogQXJyYXk8RHdSYWRpb0NvbXBvbmVudCB8IER3UmFkaW9CdXR0b25Db21wb25lbnQ+ID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2l6ZSh2YWx1ZTogRHdSYWRpb0dyb3VwU2l6ZVR5cGUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdTaXplKCk6IER3UmFkaW9Hcm91cFNpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5OYW1lKCk7XG4gIH1cblxuICBnZXQgZHdOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBASW5wdXQoKSBkd0J1dHRvblN0eWxlOiBEd1JhZGlvQnV0dG9uU3R5bGUgPSAnb3V0bGluZSc7XG5cbiAgdXBkYXRlRGlzYWJsZWRTdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5kd0Rpc2FibGVkKSkge1xuICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgcmFkaW8uZHdEaXNhYmxlZCA9IHRoaXMuZHdEaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuTmFtZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd05hbWUpIHtcbiAgICAgIHRoaXMucmFkaW9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5uYW1lID0gdGhpcy5kd05hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzeW5jQ2hlY2tlZFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMucmFkaW9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uZHdDaGVja2VkID0gaXRlbS5kd1ZhbHVlID09PSB0aGlzLnZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtbGFyZ2UnKVxuICBnZXQgaXNMYXJnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1NpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1yYWRpby1ncm91cC1zbWFsbCcpXG4gIGdldCBpc1NtYWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3U2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXJhZGlvLWdyb3VwLXNvbGlkJylcbiAgZ2V0IGlzU29saWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdCdXR0b25TdHlsZSA9PT0gJ3NvbGlkJztcbiAgfVxuXG4gIGFkZFJhZGlvKHJhZGlvOiBEd1JhZGlvQ29tcG9uZW50IHwgRHdSYWRpb0J1dHRvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMucmFkaW9zLnB1c2gocmFkaW8pO1xuICAgIHJhZGlvLmR3Q2hlY2tlZCA9IHJhZGlvLmR3VmFsdWUgPT09IHRoaXMudmFsdWU7XG4gIH1cblxuICBzZWxlY3RSYWRpbyhyYWRpbzogRHdSYWRpb0NvbXBvbmVudCB8IER3UmFkaW9CdXR0b25Db21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHJhZGlvLmR3VmFsdWUsIHRydWUpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnN5bmNDaGVja2VkVmFsdWUoKTtcbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3luY0NoZWNrZWRWYWx1ZSgpO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5OYW1lKCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmR3RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, ElementRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class DwRadioGroupComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._size = 'default';
        // ngModel Access
        this.onChange = () => null;
        this.onTouched = () => null;
        this.radios = [];
        this.dwButtonStyle = 'outline';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this._size = value;
    }
    /**
     * @return {?}
     */
    get dwSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
        this.updateDisabledState();
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
    set dwName(value) {
        this._name = value;
        this.updateChildrenName();
    }
    /**
     * @return {?}
     */
    get dwName() {
        return this._name;
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        if (isNotNil(this.dwDisabled)) {
            this.radios.forEach((radio) => {
                radio.dwDisabled = this.dwDisabled;
            });
        }
    }
    /**
     * @return {?}
     */
    updateChildrenName() {
        if (this.dwName) {
            this.radios.forEach((item) => {
                item.name = this.dwName;
            });
        }
    }
    /**
     * @return {?}
     */
    syncCheckedValue() {
        this.radios.forEach((item) => {
            item.dwChecked = item.dwValue === this.value;
        });
    }
    /**
     * @return {?}
     */
    get isLarge() {
        return this.dwSize === 'large';
    }
    /**
     * @return {?}
     */
    get isSmall() {
        return this.dwSize === 'small';
    }
    /**
     * @return {?}
     */
    get isSolid() {
        return this.dwButtonStyle === 'solid';
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    addRadio(radio) {
        this.radios.push(radio);
        radio.dwChecked = radio.dwValue === this.value;
    }
    /**
     * @param {?} radio
     * @return {?}
     */
    selectRadio(radio) {
        this.updateValue(radio.dwValue, true);
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    updateValue(value, emit) {
        this.value = value;
        this.syncCheckedValue();
        if (emit) {
            this.onChange(value);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.syncCheckedValue();
        this.updateChildrenName();
        Promise.resolve().then(() => {
            this.updateDisabledState();
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateValue(value, false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dwDisabled = isDisabled;
    }
}
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
                        useExisting: forwardRef(() => DwRadioGroupComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
DwRadioGroupComponent.ctorParameters = () => [
    { type: ElementRef }
];
DwRadioGroupComponent.propDecorators = {
    dwSize: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwName: [{ type: Input }],
    dwButtonStyle: [{ type: Input }],
    isLarge: [{ type: HostBinding, args: ['class.ant-radio-group-large',] }],
    isSmall: [{ type: HostBinding, args: ['class.ant-radio-group-small',] }],
    isSolid: [{ type: HostBinding, args: ['class.ant-radio-group-solid',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJyYWRpby9kdy1yYWRpby1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBdUJqRCxNQUFNOzs7O0lBa0dKLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7cUJBakdKLFNBQVM7O3dCQU9mLEdBQUcsRUFBRSxDQUFDLElBQUk7eUJBQ2xCLEdBQUcsRUFBRSxDQUFDLElBQUk7c0JBRXlCLEVBQUU7NkJBK0JoQixTQUFTO1FBeURwRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3pDOzs7OztJQXZGRCxJQUNJLE1BQU0sQ0FBQyxLQUEyQjtRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ks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LEVBQUUsS0FBSztnQkFDMUIscUNBQXNEO2dCQUN0RCxJQUFJLEVBQWlCO29CQUNuQix5QkFBeUIsRUFBRSxNQUFNO2lCQUNsQztnQkFDRCxTQUFTLEVBQVk7b0JBQ25CO3dCQUNFLE9BQU8sRUFBTSxpQkFBaUI7d0JBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3BELEtBQUssRUFBUSxJQUFJO3FCQUNsQjtpQkFDRjthQUNGOzs7O1lBNUJDLFVBQVU7OztxQkEwQ1QsS0FBSzt5QkFTTCxLQUFLO3FCQVVMLEtBQUs7NEJBVUwsS0FBSztzQkF3QkwsV0FBVyxTQUFDLDZCQUE2QjtzQkFLekMsV0FBVyxTQUFDLDZCQUE2QjtzQkFLekMsV0FBVyxTQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5leHBvcnQgdHlwZSBEd1JhZGlvR3JvdXBTaXplVHlwZSA9ICdsYXJnZScgfCAnZGVmYXVsdCcgfCAnc21hbGwnO1xuZXhwb3J0IHR5cGUgRHdSYWRpb0J1dHRvblN0eWxlID0gJ291dGxpbmUnIHwgJ3NvbGlkJztcblxuaW1wb3J0IHsgRHdSYWRpb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZHctcmFkaW8tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1JhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1yYWRpby5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXJhZGlvLWdyb3VwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXJhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXJhZGlvLWdyb3VwXSc6ICd0cnVlJ1xuICB9LFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdSYWRpb0dyb3VwQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3UmFkaW9Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfc2l6ZTogRHdSYWRpb0dyb3VwU2l6ZVR5cGUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgdmFsdWU6IHN0cmluZztcblxuICAvLyBuZ01vZGVsIEFjY2Vzc1xuICBvbkNoYW5nZTogKF86IHN0cmluZykgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgcmFkaW9zOiBBcnJheTxEd1JhZGlvQ29tcG9uZW50IHwgRHdSYWRpb0J1dHRvbkNvbXBvbmVudD4gPSBbXTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTaXplKHZhbHVlOiBEd1JhZGlvR3JvdXBTaXplVHlwZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1NpemUoKTogRHdSYWRpb0dyb3VwU2l6ZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gIH1cblxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbk5hbWUoKTtcbiAgfVxuXG4gIGdldCBkd05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGR3QnV0dG9uU3R5bGU6IER3UmFkaW9CdXR0b25TdHlsZSA9ICdvdXRsaW5lJztcblxuICB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xuICAgIGlmIChpc05vdE5pbCh0aGlzLmR3RGlzYWJsZWQpKSB7XG4gICAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICByYWRpby5kd0Rpc2FibGVkID0gdGhpcy5kd0Rpc2FibGVkO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5OYW1lKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3TmFtZSkge1xuICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLm5hbWUgPSB0aGlzLmR3TmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN5bmNDaGVja2VkVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5kd0NoZWNrZWQgPSBpdGVtLmR3VmFsdWUgPT09IHRoaXMudmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1yYWRpby1ncm91cC1sYXJnZScpXG4gIGdldCBpc0xhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXJhZGlvLWdyb3VwLXNtYWxsJylcbiAgZ2V0IGlzU21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdTaXplID09PSAnc21hbGwnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtcmFkaW8tZ3JvdXAtc29saWQnKVxuICBnZXQgaXNTb2xpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd0J1dHRvblN0eWxlID09PSAnc29saWQnO1xuICB9XG5cbiAgYWRkUmFkaW8ocmFkaW86IER3UmFkaW9Db21wb25lbnQgfCBEd1JhZGlvQnV0dG9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5yYWRpb3MucHVzaChyYWRpbyk7XG4gICAgcmFkaW8uZHdDaGVja2VkID0gcmFkaW8uZHdWYWx1ZSA9PT0gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHNlbGVjdFJhZGlvKHJhZGlvOiBEd1JhZGlvQ29tcG9uZW50IHwgRHdSYWRpb0J1dHRvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlVmFsdWUocmFkaW8uZHdWYWx1ZSwgdHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuc3luY0NoZWNrZWRWYWx1ZSgpO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zeW5jQ2hlY2tlZFZhbHVlKCk7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbk5hbWUoKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHdEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==
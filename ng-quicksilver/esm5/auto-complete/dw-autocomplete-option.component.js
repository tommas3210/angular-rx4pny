/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var DwOptionSelectionChange = /** @class */ (function () {
    function DwOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return DwOptionSelectionChange;
}());
export { DwOptionSelectionChange };
function DwOptionSelectionChange_tsickle_Closure_declarations() {
    /** @type {?} */
    DwOptionSelectionChange.prototype.source;
    /** @type {?} */
    DwOptionSelectionChange.prototype.isUserInput;
}
var DwAutocompleteOptionComponent = /** @class */ (function () {
    function DwAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.disabled = false;
        this.active = false;
        this.selected = false;
        this.selectionChange = new EventEmitter();
    }
    Object.defineProperty(DwAutocompleteOptionComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /** 选择 */
    /**
     * 选择
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.select = /**
     * 选择
     * @return {?}
     */
    function () {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** 取消选择 */
    /**
     * 取消选择
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.deselect = /**
     * 取消选择
     * @return {?}
     */
    function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** 获取用于显示的 label */
    /**
     * 获取用于显示的 label
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.getLabel = /**
     * 获取用于显示的 label
     * @return {?}
     */
    function () {
        return this.dwLabel || this.dwValue.toString();
    };
    /** 设置激活样式 (仅限样式) */
    /**
     * 设置激活样式 (仅限样式)
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.setActiveStyles = /**
     * 设置激活样式 (仅限样式)
     * @return {?}
     */
    function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** 设置非激活样式 (仅限样式) */
    /**
     * 设置非激活样式 (仅限样式)
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.setInactiveStyles = /**
     * 设置非激活样式 (仅限样式)
     * @return {?}
     */
    function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /* tslint:disable-next-line:no-string-literal */
        if (this.element.nativeElement && this.element.nativeElement['scrollIntoViewIfNeeded']) {
            /* tslint:disable-next-line:no-string-literal */
            setTimeout(function () { return _this.element.nativeElement['scrollIntoViewIfNeeded'](false); }, 150);
        }
    };
    /**
     * @param {?=} isUserInput
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = /**
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new DwOptionSelectionChange(this, isUserInput));
    };
    /**
     * @return {?}
     */
    DwAutocompleteOptionComponent.prototype.selectViaInteraction = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    };
    DwAutocompleteOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-auto-option',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<ng-content></ng-content>",
                    host: {
                        'role': 'menuitem',
                        'class': 'ant-select-dropdown-menu-item',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                        '[class.ant-select-dropdown-menu-item-active]': 'active',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'dwDisabled',
                        '[attr.aria-selected]': 'selected.toString()',
                        '[attr.aria-disabled]': 'dwDisabled.toString()',
                        '(click)': 'selectViaInteraction()'
                    }
                }] }
    ];
    /** @nocollapse */
    DwAutocompleteOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    DwAutocompleteOptionComponent.propDecorators = {
        dwValue: [{ type: Input }],
        dwLabel: [{ type: Input }],
        dwDisabled: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return DwAutocompleteOptionComponent;
}());
export { DwAutocompleteOptionComponent };
function DwAutocompleteOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.disabled;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.selected;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.dwValue;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.dwLabel;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.changeDetectorRef;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImF1dG8tY29tcGxldGUvZHctYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUNuQyxLQUFLLEVBQUUsTUFBTSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxJQUFBO0lBQ0UsaUNBQ1MsUUFDQTs7UUFEQSxXQUFNLEdBQU4sTUFBTTtRQUNOLGdCQUFXLEdBQVgsV0FBVztLQUVuQjtrQ0FkSDtJQWVDLENBQUE7QUFORCxtQ0FNQzs7Ozs7Ozs7SUF1Q0MsdUNBQW9CLGlCQUFvQyxFQUFVLE9BQW1CO1FBQWpFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO3dCQXBCbEUsS0FBSztzQkFFZixLQUFLO3dCQUNILEtBQUs7K0JBZVksSUFBSSxZQUFZLEVBQTJCO0tBR3RFO0lBWkQsc0JBQ0kscURBQVU7Ozs7UUFEZDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFFRCxVQUFlLEtBQWM7WUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7OztPQUpBO0lBV0QsU0FBUzs7Ozs7SUFDVCw4Q0FBTTs7OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDO0lBRUQsV0FBVzs7Ozs7SUFDWCxnREFBUTs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDO0lBRUQsb0JBQW9COzs7OztJQUNwQixnREFBUTs7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDaEQ7SUFFRCxvQkFBb0I7Ozs7O0lBQ3BCLHVEQUFlOzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjtJQUVELHFCQUFxQjs7Ozs7SUFDckIseURBQWlCOzs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7SUFFRCw4REFBc0I7OztJQUF0QjtRQUFBLGlCQU1DOztRQUpDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsRUFBRTs7WUFFdEYsVUFBVSxDQUFDLGNBQU8sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRSx3QkFBd0IsQ0FBRSxDQUFDLEtBQUssQ0FBQyxFQUE3RCxDQUE2RCxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZGO0tBQ0Y7Ozs7O0lBRU8sZ0VBQXdCOzs7O2NBQUMsV0FBNEI7UUFBNUIsNEJBQUEsRUFBQSxtQkFBNEI7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHNUUsNERBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsZ0JBQWdCO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQscUNBQThEO29CQUM5RCxJQUFJLEVBQWlCO3dCQUNuQixNQUFNLEVBQTRDLFVBQVU7d0JBQzVELE9BQU8sRUFBMkMsK0JBQStCO3dCQUNqRixnREFBZ0QsRUFBRSxVQUFVO3dCQUM1RCw4Q0FBOEMsRUFBSSxRQUFRO3dCQUMxRCxnREFBZ0QsRUFBRSxZQUFZO3dCQUM5RCxzQkFBc0IsRUFBNEIscUJBQXFCO3dCQUN2RSxzQkFBc0IsRUFBNEIsdUJBQXVCO3dCQUN6RSxTQUFTLEVBQXlDLHdCQUF3QjtxQkFDM0U7aUJBQ0Y7Ozs7Z0JBOUJDLGlCQUFpQjtnQkFDTixVQUFVOzs7MEJBcUNwQixLQUFLOzBCQUNMLEtBQUs7NkJBRUwsS0FBSztrQ0FTTCxNQUFNOzt3Q0FwRFQ7O1NBaUNhLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXG4gIElucHV0LCBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZXhwb3J0IGNsYXNzIER3T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNvdXJjZTogRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsXG4gICAgcHVibGljIGlzVXNlcklucHV0OiBib29sZWFuID0gZmFsc2VcbiAgKSB7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1hdXRvLW9wdGlvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWF1dG9jb21wbGV0ZS1vcHRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ3JvbGUnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbWVudWl0ZW0nLFxuICAgICdjbGFzcycgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2FudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmVdJyAgOiAnYWN0aXZlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkXSc6ICdkd0Rpc2FibGVkJyxcbiAgICAnW2F0dHIuYXJpYS1zZWxlY3RlZF0nICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWxlY3RlZC50b1N0cmluZygpJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdkd0Rpc2FibGVkLnRvU3RyaW5nKCknLFxuICAgICcoY2xpY2spJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3NlbGVjdFZpYUludGVyYWN0aW9uKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQge1xuICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgYWN0aXZlID0gZmFsc2U7XG4gIHNlbGVjdGVkID0gZmFsc2U7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBASW5wdXQoKSBkd1ZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIGR3TGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgZHdEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEd09wdGlvblNlbGVjdGlvbkNoYW5nZT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICAvKiog6YCJ5oupICovXG4gIHNlbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KCk7XG4gIH1cblxuICAvKiog5Y+W5raI6YCJ5oupICovXG4gIGRlc2VsZWN0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KCk7XG4gIH1cblxuICAvKiog6I635Y+W55So5LqO5pi+56S655qEIGxhYmVsICovXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZHdMYWJlbCB8fCB0aGlzLmR3VmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKiDorr7nva7mv4DmtLvmoLflvI8gKOS7hemZkOagt+W8jykgKi9cbiAgc2V0QWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOiuvue9rumdnua/gOa0u+agt+W8jyAo5LuF6ZmQ5qC35byPKSAqL1xuICBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgaWYgKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50WydzY3JvbGxJbnRvVmlld0lmTmVlZGVkJ10pIHtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgc2V0VGltZW91dCgoKSA9PiAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnRbICdzY3JvbGxJbnRvVmlld0lmTmVlZGVkJyBdKGZhbHNlKSwgMTUwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudChpc1VzZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChuZXcgRHdPcHRpb25TZWxlY3Rpb25DaGFuZ2UodGhpcywgaXNVc2VySW5wdXQpKTtcbiAgfVxuXG4gIHNlbGVjdFZpYUludGVyYWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9ICF0aGlzLnNlbGVjdGVkO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0SW5hY3RpdmVTdHlsZXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdFNlbGVjdGlvbkNoYW5nZUV2ZW50KHRydWUpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxufVxuIl19
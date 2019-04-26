/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var DwTransferSearchComponent = /** @class */ (function () {
    function DwTransferSearchComponent() {
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    // endregion
    /**
     * @return {?}
     */
    DwTransferSearchComponent.prototype._handle = /**
     * @return {?}
     */
    function () {
        this.valueChanged.emit(this.value);
    };
    /**
     * @return {?}
     */
    DwTransferSearchComponent.prototype._clear = /**
     * @return {?}
     */
    function () {
        this.value = '';
        this.valueClear.emit();
    };
    DwTransferSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dw-transfer-search]',
                    preserveWhitespaces: false,
                    template: "<input dw-input [(ngModel)]=\"value\" (ngModelChange)=\"_handle()\"\n  [placeholder]=\"placeholder\" class=\"ant-transfer-list-search\">\n<a *ngIf=\"value && value.length > 0; else def\" class=\"ant-transfer-list-search-action\" (click)=\"_clear()\">\n  <i class=\"anticon anticon-cross-circle\"></i>\n</a>\n<ng-template #def>\n  <span class=\"ant-transfer-list-search-action\"><i class=\"anticon anticon-search\"></i></span>\n</ng-template>"
                }] }
    ];
    DwTransferSearchComponent.propDecorators = {
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        valueChanged: [{ type: Output }],
        valueClear: [{ type: Output }]
    };
    return DwTransferSearchComponent;
}());
export { DwTransferSearchComponent };
function DwTransferSearchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTransferSearchComponent.prototype.placeholder;
    /** @type {?} */
    DwTransferSearchComponent.prototype.value;
    /** @type {?} */
    DwTransferSearchComponent.prototype.valueChanged;
    /** @type {?} */
    DwTransferSearchComponent.prototype.valueClear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidHJhbnNmZXIvZHctdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OzRCQWM1QyxJQUFJLFlBQVksRUFBVTswQkFDNUIsSUFBSSxZQUFZLEVBQUU7O0lBRXpDLFlBQVk7Ozs7SUFFWiwyQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEM7Ozs7SUFFRCwwQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxzQkFBc0I7b0JBQzNDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLHFjQUEwRDtpQkFDM0Q7Ozs4QkFLRSxLQUFLO3dCQUNMLEtBQUs7K0JBRUwsTUFBTTs2QkFDTixNQUFNOztvQ0FmVDs7U0FPYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tkdy10cmFuc2Zlci1zZWFyY2hdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRyYW5zZmVyLXNlYXJjaC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdUcmFuc2ZlclNlYXJjaENvbXBvbmVudCB7XG5cbiAgLy8gcmVnaW9uOiBmaWVsZHNcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHZhbHVlQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgX2hhbmRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlZC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgX2NsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB0aGlzLnZhbHVlQ2xlYXIuZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==
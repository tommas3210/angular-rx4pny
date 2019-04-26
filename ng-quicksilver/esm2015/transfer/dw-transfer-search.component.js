/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class DwTransferSearchComponent {
    constructor() {
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    /**
     * @return {?}
     */
    _handle() {
        this.valueChanged.emit(this.value);
    }
    /**
     * @return {?}
     */
    _clear() {
        this.value = '';
        this.valueClear.emit();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidHJhbnNmZXIvZHctdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNOzs0QkFPcUIsSUFBSSxZQUFZLEVBQVU7MEJBQzVCLElBQUksWUFBWSxFQUFFOzs7OztJQUl6QyxPQUFPO1FBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDeEI7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLHNCQUFzQjtnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIscWNBQTBEO2FBQzNEOzs7MEJBS0UsS0FBSztvQkFDTCxLQUFLOzJCQUVMLE1BQU07eUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW2R3LXRyYW5zZmVyLXNlYXJjaF0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1RyYW5zZmVyU2VhcmNoQ29tcG9uZW50IHtcblxuICAvLyByZWdpb246IGZpZWxkc1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgdmFsdWVDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBlbmRyZWdpb25cblxuICBfaGFuZGxlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWVDaGFuZ2VkLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBfY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIHRoaXMudmFsdWVDbGVhci5lbWl0KCk7XG4gIH1cblxufVxuIl19
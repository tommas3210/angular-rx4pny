/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { DwRadioComponent } from './dw-radio.component';
export class DwRadioButtonComponent extends DwRadioComponent {
    constructor() {
        super(...arguments);
        this.prefixCls = 'ant-radio-button';
    }
}
DwRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[dw-radio-button]',
                preserveWhitespaces: false,
                template: "<span [ngClass]=\"classMap\">\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"dwDisabled\" [(ngModel)]=\"dwChecked\" (blur)=\"onBlur()\" [attr.name]=\"name\">\n  <span class=\"ant-radio-button-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                host: {
                    '[class.ant-radio-button-wrapper]': 'true',
                    '[class.ant-radio-button-wrapper-checked]': 'dwChecked',
                    '[class.ant-radio-button-wrapper-disabled]': 'dwDisabled'
                }
            }] }
];
function DwRadioButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRadioButtonComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsicmFkaW8vZHctcmFkaW8tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVl4RCxNQUFNLDZCQUE4QixTQUFRLGdCQUFnQjs7O3lCQUM5QyxrQkFBa0I7Ozs7WUFYL0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxtQkFBbUI7Z0JBQ3hDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGtUQUF1RDtnQkFDdkQsSUFBSSxFQUFpQjtvQkFDbkIsa0NBQWtDLEVBQVcsTUFBTTtvQkFDbkQsMENBQTBDLEVBQUcsV0FBVztvQkFDeEQsMkNBQTJDLEVBQUUsWUFBWTtpQkFDMUQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHdSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vZHctcmFkaW8uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbZHctcmFkaW8tYnV0dG9uXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXJdJyAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWRdJyA6ICdkd0NoZWNrZWQnLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXSc6ICdkd0Rpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3UmFkaW9CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBEd1JhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJlZml4Q2xzID0gJ2FudC1yYWRpby1idXR0b24nO1xufVxuIl19
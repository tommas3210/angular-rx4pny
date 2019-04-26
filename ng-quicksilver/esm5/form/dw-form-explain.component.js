/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { DwFormItemComponent } from './dw-form-item.component';
var DwFormExplainComponent = /** @class */ (function () {
    function DwFormExplainComponent(dwFormItemComponent) {
        this.dwFormItemComponent = dwFormItemComponent;
    }
    /**
     * @return {?}
     */
    DwFormExplainComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dwFormItemComponent.disableHelp();
    };
    /**
     * @return {?}
     */
    DwFormExplainComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dwFormItemComponent.enableHelp();
    };
    DwFormExplainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-form-explain',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('formExplainAnimation', [
                            transition('void => *', [
                                style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)'
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }))
                            ]),
                            transition('* => void', [
                                style({
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)'
                                }))
                            ])
                        ])
                    ],
                    template: "<div [@formExplainAnimation]>\n  <ng-content></ng-content>\n</div>",
                    host: {
                        '[class.ant-form-explain]': 'true'
                    },
                    styles: [":host{\n      display:block;\n    }"]
                }] }
    ];
    /** @nocollapse */
    DwFormExplainComponent.ctorParameters = function () { return [
        { type: DwFormItemComponent }
    ]; };
    return DwFormExplainComponent;
}());
export { DwFormExplainComponent };
function DwFormExplainComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwFormExplainComponent.prototype.dwFormItemComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZm9ybS9kdy1mb3JtLWV4cGxhaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBd0M3RCxnQ0FBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7S0FDM0Q7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDeEM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDdkM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtvQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFXO3dCQUNuQixPQUFPLENBQUMsc0JBQXNCLEVBQUU7NEJBQzlCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUksQ0FBQztvQ0FDWixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDO2dDQUNGLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLENBQUM7b0NBQ3pELE9BQU8sRUFBSSxDQUFDO29DQUNaLFNBQVMsRUFBRSxlQUFlO2lDQUMzQixDQUFDLENBQUM7NkJBQ0osQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUM7b0NBQ0osT0FBTyxFQUFJLENBQUM7b0NBQ1osU0FBUyxFQUFFLGVBQWU7aUNBQzNCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLDJDQUEyQyxFQUFFLEtBQUssQ0FBQztvQ0FDekQsT0FBTyxFQUFJLENBQUM7b0NBQ1osU0FBUyxFQUFFLGtCQUFrQjtpQ0FDOUIsQ0FBQyxDQUFDOzZCQUNKLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtvQkFDRCw4RUFBdUQ7b0JBQ3ZELElBQUksRUFBaUI7d0JBQ25CLDBCQUEwQixFQUFFLE1BQU07cUJBQ25DOzZCQUVDLHFDQUVFO2lCQUVMOzs7O2dCQXRDUSxtQkFBbUI7O2lDQVA1Qjs7U0E4Q2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEd0Zvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1mb3JtLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1mb3JtLWV4cGxhaW4nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2Zvcm1FeHBsYWluQW5pbWF0aW9uJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1leHBsYWluXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYDpob3N0e1xuICAgICAgZGlzcGxheTpibG9jaztcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3Rm9ybUV4cGxhaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHdGb3JtSXRlbUNvbXBvbmVudDogRHdGb3JtSXRlbUNvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kd0Zvcm1JdGVtQ29tcG9uZW50LmRpc2FibGVIZWxwKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmR3Rm9ybUl0ZW1Db21wb25lbnQuZW5hYmxlSGVscCgpO1xuICB9XG59XG4iXX0=
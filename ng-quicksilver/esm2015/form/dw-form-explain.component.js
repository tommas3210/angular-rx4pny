/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { DwFormItemComponent } from './dw-form-item.component';
export class DwFormExplainComponent {
    /**
     * @param {?} dwFormItemComponent
     */
    constructor(dwFormItemComponent) {
        this.dwFormItemComponent = dwFormItemComponent;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dwFormItemComponent.disableHelp();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dwFormItemComponent.enableHelp();
    }
}
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
                styles: [`:host{
      display:block;
    }`]
            }] }
];
/** @nocollapse */
DwFormExplainComponent.ctorParameters = () => [
    { type: DwFormItemComponent }
];
function DwFormExplainComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwFormExplainComponent.prototype.dwFormItemComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZm9ybS9kdy1mb3JtLWV4cGxhaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUF1Qy9ELE1BQU07Ozs7SUFDSixZQUFvQixtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtLQUMzRDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDeEM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ3ZDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxpQkFBaUI7Z0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBVztvQkFDbkIsT0FBTyxDQUFDLHNCQUFzQixFQUFFO3dCQUM5QixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFJLENBQUM7Z0NBQ1osU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxDQUFDO2dDQUN6RCxPQUFPLEVBQUksQ0FBQztnQ0FDWixTQUFTLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUFDO3lCQUNKLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxlQUFlOzZCQUMzQixDQUFDOzRCQUNGLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLENBQUM7Z0NBQ3pELE9BQU8sRUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FBQzt5QkFDSixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsOEVBQXVEO2dCQUN2RCxJQUFJLEVBQWlCO29CQUNuQiwwQkFBMEIsRUFBRSxNQUFNO2lCQUNuQzt5QkFFQzs7TUFFRTthQUVMOzs7O1lBdENRLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHdGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZHctZm9ybS1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctZm9ybS1leHBsYWluJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdmb3JtRXhwbGFpbkFuaW1hdGlvbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICAgIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0tZXhwbGFpbl0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgIGA6aG9zdHtcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0Zvcm1FeHBsYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGR3Rm9ybUl0ZW1Db21wb25lbnQ6IER3Rm9ybUl0ZW1Db21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZHdGb3JtSXRlbUNvbXBvbmVudC5kaXNhYmxlSGVscCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kd0Zvcm1JdGVtQ29tcG9uZW50LmVuYWJsZUhlbHAoKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { DwMessageContainerComponent } from '../message/dw-message-container.component';
import { DW_NOTIFICATION_CONFIG, DW_NOTIFICATION_DEFAULT_CONFIG } from './dw-notification-config';
var DwNotificationContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwNotificationContainerComponent, _super);
    function DwNotificationContainerComponent(defaultConfig, config) {
        return _super.call(this, defaultConfig, config) || this;
    }
    DwNotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-notification-container',
                    preserveWhitespaces: false,
                    template: "<div\n  class=\"ant-notification ant-notification-{{config.dwPlacement}}\"\n  [style.top]=\"(config.dwPlacement==='topLeft'||config.dwPlacement=='topRight')? config.dwTop:null\"\n  [style.bottom]=\"(config.dwPlacement==='bottomLeft'||config.dwPlacement=='bottomRight')? config.dwBottom:null\"\n  [style.right]=\"(config.dwPlacement==='bottomRight'||config.dwPlacement=='topRight')?'0px':null\"\n  [style.left]=\"(config.dwPlacement==='topLeft'||config.dwPlacement=='bottomLeft')?'0px':null\">\n  <dw-notification *ngFor=\"let message of messages; let i = index\" [dwMessage]=\"message\" [dwIndex]=\"i\"></dw-notification>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwNotificationContainerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_NOTIFICATION_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_NOTIFICATION_CONFIG,] }] }
    ]; };
    return DwNotificationContainerComponent;
}(DwMessageContainerComponent));
export { DwNotificationContainerComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi9kdy1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUV4RixPQUFPLEVBQXdCLHNCQUFzQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBT2xFLDREQUEyQjtJQUUvRSwwQ0FBZ0UsYUFBbUMsRUFDM0MsTUFBNEI7ZUFDbEYsa0JBQU0sYUFBYSxFQUFFLE1BQU0sQ0FBQztLQUM3Qjs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSwyQkFBMkI7b0JBQ2hELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGlvQkFBaUU7aUJBQ2xFOzs7O2dEQUdjLFFBQVEsWUFBSSxNQUFNLFNBQUMsOEJBQThCO2dEQUNqRCxRQUFRLFlBQUksTUFBTSxTQUFDLHNCQUFzQjs7MkNBZHhEO0VBV3NELDJCQUEyQjtTQUFwRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vbWVzc2FnZS9kdy1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEd05vdGlmaWNhdGlvbkNvbmZpZywgRFdfTk9USUZJQ0FUSU9OX0NPTkZJRywgRFdfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9kdy1ub3RpZmljYXRpb24tY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgRHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERXX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogRHdOb3RpZmljYXRpb25Db25maWcsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRFdfTk9USUZJQ0FUSU9OX0NPTkZJRykgY29uZmlnOiBEd05vdGlmaWNhdGlvbkNvbmZpZykge1xuICAgIHN1cGVyKGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gIH1cblxufVxuIl19
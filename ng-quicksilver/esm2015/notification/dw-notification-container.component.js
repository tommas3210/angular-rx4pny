/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Inject, Optional } from '@angular/core';
import { DwMessageContainerComponent } from '../message/dw-message-container.component';
import { DW_NOTIFICATION_CONFIG, DW_NOTIFICATION_DEFAULT_CONFIG } from './dw-notification-config';
export class DwNotificationContainerComponent extends DwMessageContainerComponent {
    /**
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(defaultConfig, config) {
        super(defaultConfig, config);
    }
}
DwNotificationContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-notification-container',
                preserveWhitespaces: false,
                template: "<div\n  class=\"ant-notification ant-notification-{{config.dwPlacement}}\"\n  [style.top]=\"(config.dwPlacement==='topLeft'||config.dwPlacement=='topRight')? config.dwTop:null\"\n  [style.bottom]=\"(config.dwPlacement==='bottomLeft'||config.dwPlacement=='bottomRight')? config.dwBottom:null\"\n  [style.right]=\"(config.dwPlacement==='bottomRight'||config.dwPlacement=='topRight')?'0px':null\"\n  [style.left]=\"(config.dwPlacement==='topLeft'||config.dwPlacement=='bottomLeft')?'0px':null\">\n  <dw-notification *ngFor=\"let message of messages; let i = index\" [dwMessage]=\"message\" [dwIndex]=\"i\"></dw-notification>\n</div>"
            }] }
];
/** @nocollapse */
DwNotificationContainerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_NOTIFICATION_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DW_NOTIFICATION_CONFIG,] }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi9kdy1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRXhGLE9BQU8sRUFBd0Isc0JBQXNCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU94SCxNQUFNLHVDQUF3QyxTQUFRLDJCQUEyQjs7Ozs7SUFFL0UsWUFBZ0UsYUFBbUMsRUFDM0MsTUFBNEI7UUFDbEYsS0FBSyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM5Qjs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSwyQkFBMkI7Z0JBQ2hELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGlvQkFBaUU7YUFDbEU7Ozs7NENBR2MsUUFBUSxZQUFJLE1BQU0sU0FBQyw4QkFBOEI7NENBQ2pELFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL21lc3NhZ2UvZHctbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgRHdOb3RpZmljYXRpb25Db25maWcsIERXX05PVElGSUNBVElPTl9DT05GSUcsIERXX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vZHctbm90aWZpY2F0aW9uLWNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctbm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd05vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIER3TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChEV19OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IER3Tm90aWZpY2F0aW9uQ29uZmlnLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERXX05PVElGSUNBVElPTl9DT05GSUcpIGNvbmZpZzogRHdOb3RpZmljYXRpb25Db25maWcpIHtcbiAgICBzdXBlcihkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICB9XG5cbn1cbiJdfQ==
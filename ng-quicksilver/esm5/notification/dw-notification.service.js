/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DwMessageBaseService } from '../message/dw-message.service';
import { DwNotificationContainerComponent } from './dw-notification-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
var DwNotificationService = /** @class */ (function (_super) {
    tslib_1.__extends(DwNotificationService, _super);
    function DwNotificationService(overlay, injector, cfr, appRef) {
        return _super.call(this, overlay, DwNotificationContainerComponent, injector, cfr, appRef, 'notification-') || this;
    }
    // Shortcut methods
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwNotificationService.prototype.success = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'success', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwNotificationService.prototype.error = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'error', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwNotificationService.prototype.info = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'info', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwNotificationService.prototype.warning = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'warning', title: title, content: content }, options));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwNotificationService.prototype.blank = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: 'blank', title: title, content: content }, options));
    };
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwNotificationService.prototype.create = /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, title, content, options) {
        return /** @type {?} */ (this.createMessage({ type: type, title: title, content: content }, options));
    };
    // For content with template
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    DwNotificationService.prototype.template = /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    function (template, options) {
        return /** @type {?} */ (this.createMessage({ template: template }, options));
    };
    DwNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DwNotificationService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ DwNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function DwNotificationService_Factory() { return new i1.DwNotificationService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.DwNotificationService, providedIn: "root" });
    return DwNotificationService;
}(DwMessageBaseService));
export { DwNotificationService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi9kdy1ub3RpZmljYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFFNUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHckUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7Ozs7O0lBTTlDLGlEQUFnRztJQUV6SSwrQkFDRSxPQUFnQixFQUNoQixRQUFrQixFQUNsQixHQUE2QixFQUM3QixNQUFzQjtlQUV0QixrQkFBTSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDO0tBQ3pGO0lBRUQsbUJBQW1COzs7Ozs7O0lBQ25CLHVDQUFPOzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDekUseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQTZCLEVBQUM7S0FDckc7Ozs7Ozs7SUFFRCxxQ0FBSzs7Ozs7O0lBQUwsVUFBTSxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3ZFLHlCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQ25HOzs7Ozs7O0lBRUQsb0NBQUk7Ozs7OztJQUFKLFVBQUssS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztRQUN0RSx5QkFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLE9BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBNkIsRUFBQztLQUNsRzs7Ozs7OztJQUVELHVDQUFPOzs7Ozs7SUFBUCxVQUFRLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDekUseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQTZCLEVBQUM7S0FDckc7Ozs7Ozs7SUFFRCxxQ0FBSzs7Ozs7O0lBQUwsVUFBTSxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO1FBQ3ZFLHlCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQ25HOzs7Ozs7OztJQUVELHNDQUFNOzs7Ozs7O0lBQU4sVUFBTyxJQUFpRSxFQUFFLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7UUFDM0kseUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUE2QixFQUFDO0tBQzFGO0lBRUQsNEJBQTRCOzs7Ozs7SUFDNUIsd0NBQVE7Ozs7O0lBQVIsVUFBUyxRQUF5QixFQUFFLE9BQW1DO1FBQ3JFLHlCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBNkIsRUFBQztLQUM5RTs7Z0JBMUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWFEsT0FBTztnQkFDK0MsUUFBUTtnQkFBOUMsd0JBQXdCO2dCQUF4QyxjQUFjOzs7Z0NBRHZCO0VBWTJDLG9CQUFvQjtTQUFsRCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3TWVzc2FnZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vbWVzc2FnZS9kdy1tZXNzYWdlLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBEd05vdGlmaWNhdGlvbkNvbmZpZyB9IGZyb20gJy4vZHctbm90aWZpY2F0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBEd05vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHctbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdOb3RpZmljYXRpb25EYXRhLCBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQsIER3Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMgfSBmcm9tICcuL2R3LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIER3Tm90aWZpY2F0aW9uU2VydmljZSBleHRlbmRzIER3TWVzc2FnZUJhc2VTZXJ2aWNlPER3Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBEd05vdGlmaWNhdGlvbkRhdGEsIER3Tm90aWZpY2F0aW9uQ29uZmlnPiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge1xuXG4gICAgc3VwZXIob3ZlcmxheSwgRHdOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQsIGluamVjdG9yLCBjZnIsIGFwcFJlZiwgJ25vdGlmaWNhdGlvbi0nKTtcbiAgfVxuXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcbiAgc3VjY2Vzcyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBEd05vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XG4gIH1cblxuICBlcnJvcih0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBEd05vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2Vycm9yJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucykgYXMgRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xuICB9XG5cbiAgaW5mbyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBEd05vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XG4gIH1cblxuICB3YXJuaW5nKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IER3Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpIGFzIER3Tm90aWZpY2F0aW9uRGF0YUZpbGxlZDtcbiAgfVxuXG4gIGJsYW5rKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IER3Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnYmxhbmsnLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XG4gIH1cblxuICBjcmVhdGUodHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdibGFuaycgfCBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IER3Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKSBhcyBEd05vdGlmaWNhdGlvbkRhdGFGaWxsZWQ7XG4gIH1cblxuICAvLyBGb3IgY29udGVudCB3aXRoIHRlbXBsYXRlXG4gIHRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT4sIG9wdGlvbnM/OiBEd05vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdGVtcGxhdGUgfSwgb3B0aW9ucykgYXMgRHdOb3RpZmljYXRpb25EYXRhRmlsbGVkO1xuICB9XG59XG4iXX0=
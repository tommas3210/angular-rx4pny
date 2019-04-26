/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DwMessageContainerComponent } from './dw-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
/** @type {?} */
var globalCounter = 0;
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
var 
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
DwMessageBaseService = /** @class */ (function () {
    function DwMessageBaseService(overlay, containerClass, injector, cfr, appRef, _idPrefix) {
        if (_idPrefix === void 0) { _idPrefix = ''; }
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this._idPrefix = _idPrefix;
        // this._container = overlay.create().attach(new ComponentPortal(containerClass)).instance;
        this._container = this.createContainer();
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    DwMessageBaseService.prototype.remove = /**
     * @param {?=} messageId
     * @return {?}
     */
    function (messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    };
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    DwMessageBaseService.prototype.createMessage = /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    function (message, options) {
        /** @type {?} */
        var resultMessage = tslib_1.__assign({}, (/** @type {?} */ (message)), {
            messageId: this._generateMessageId(),
            options: options,
            createdAt: new Date()
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DwMessageBaseService.prototype.config = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this._container.setConfig(config);
    };
    /**
     * @return {?}
     */
    DwMessageBaseService.prototype._generateMessageId = /**
     * @return {?}
     */
    function () {
        return this._idPrefix + globalCounter++;
    };
    /**
     * @return {?}
     */
    DwMessageBaseService.prototype.createContainer = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        var componentRef = factory.create(this.injector); // Use root injector
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild(/** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]));
        return componentRef.instance;
    };
    return DwMessageBaseService;
}());
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export { DwMessageBaseService };
function DwMessageBaseService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMessageBaseService.prototype._container;
    /** @type {?} */
    DwMessageBaseService.prototype.overlay;
    /** @type {?} */
    DwMessageBaseService.prototype.containerClass;
    /** @type {?} */
    DwMessageBaseService.prototype.injector;
    /** @type {?} */
    DwMessageBaseService.prototype.cfr;
    /** @type {?} */
    DwMessageBaseService.prototype.appRef;
    /** @type {?} */
    DwMessageBaseService.prototype._idPrefix;
}
var DwMessageService = /** @class */ (function (_super) {
    tslib_1.__extends(DwMessageService, _super);
    function DwMessageService(overlay, injector, cfr, appRef) {
        return _super.call(this, overlay, DwMessageContainerComponent, injector, cfr, appRef, 'message-') || this;
    }
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwMessageService.prototype.success = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'success', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwMessageService.prototype.error = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'error', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwMessageService.prototype.info = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'info', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwMessageService.prototype.warning = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'warning', content: content }, options);
    };
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwMessageService.prototype.loading = /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (content, options) {
        return this.createMessage({ type: 'loading', content: content }, options);
    };
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    DwMessageService.prototype.create = /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, content, options) {
        return this.createMessage({ type: type, content: content }, options);
    };
    DwMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DwMessageService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ DwMessageService.ngInjectableDef = i0.defineInjectable({ factory: function DwMessageService_Factory() { return new i1.DwMessageService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.DwMessageService, providedIn: "root" });
    return DwMessageService;
}(DwMessageBaseService));
export { DwMessageService };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtZXNzYWdlL2R3LW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLHdCQUF3QixFQUFtQixVQUFVLEVBQUUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBR3RILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQUcvRSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7Ozs7OztBQUV0Qjs7Ozs7O0FBQUE7SUFHRSw4QkFDVSxTQUNBLGdCQUNBLFVBQ0EsS0FDQSxRQUNBOztRQUxBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsYUFBUSxHQUFSLFFBQVE7UUFDUixRQUFHLEdBQUgsR0FBRztRQUNILFdBQU0sR0FBTixNQUFNO1FBQ04sY0FBUyxHQUFULFNBQVM7O1FBR2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzFDOzs7OztJQUVELHFDQUFNOzs7O0lBQU4sVUFBTyxTQUFrQjtRQUN2QixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDcEM7S0FDRjs7Ozs7O0lBRUQsNENBQWE7Ozs7O0lBQWIsVUFBYyxPQUFvQixFQUFFLE9BQThCOztRQUVoRSxJQUFNLGFBQWEsd0JBQ2QsbUJBQUMsT0FBYSxFQUFDLEVBQUs7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNwQyxPQUFPLFNBQUE7WUFDUCxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDdEIsRUFDRDtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sYUFBYSxDQUFDO0tBQ3RCOzs7OztJQUVELHFDQUFNOzs7O0lBQU4sVUFBTyxNQUFxQjtRQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNuQzs7OztJQUVTLGlEQUFrQjs7O0lBQTVCO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsRUFBRSxDQUFDO0tBQ3pDOzs7O0lBSU8sOENBQWU7Ozs7O1FBQ3JCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztRQUN0RSxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztRQUM5QyxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsQ0FBQztRQUN6RCxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbEMsV0FBVyxDQUFDLFdBQVcsbUJBQUMsbUJBQUMsWUFBWSxDQUFDLFFBQStCLEVBQUMsQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFpQixFQUFDLENBQUM7UUFFdEcsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDOzsrQkFsRWpDO0lBb0VDLENBQUE7Ozs7OztBQTFERCxnQ0EwREM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtxQyw0Q0FBaUY7SUFFckgsMEJBQ0UsT0FBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0I7ZUFFdEIsa0JBQU0sT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQztLQUMvRTtJQUVELG1CQUFtQjs7Ozs7O0lBQ25CLGtDQUFPOzs7OztJQUFQLFVBQVEsT0FBZSxFQUFFLE9BQThCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNsRTs7Ozs7O0lBRUQsZ0NBQUs7Ozs7O0lBQUwsVUFBTSxPQUFlLEVBQUUsT0FBOEI7UUFDbkQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2hFOzs7Ozs7SUFFRCwrQkFBSTs7Ozs7SUFBSixVQUFLLE9BQWUsRUFBRSxPQUE4QjtRQUNsRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sU0FBQSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDL0Q7Ozs7OztJQUVELGtDQUFPOzs7OztJQUFQLFVBQVEsT0FBZSxFQUFFLE9BQThCO1FBQ3JELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNsRTs7Ozs7O0lBRUQsa0NBQU87Ozs7O0lBQVAsVUFBUSxPQUFlLEVBQUUsT0FBOEI7UUFDckQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLFNBQUEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2xFOzs7Ozs7O0lBRUQsaUNBQU07Ozs7OztJQUFOLFVBQU8sSUFBbUUsRUFBRSxPQUFlLEVBQUUsT0FBOEI7UUFDekgsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN2RDs7Z0JBckNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBeEVRLE9BQU87Z0JBRWdFLFFBQVE7Z0JBQS9ELHdCQUF3QjtnQkFBeEMsY0FBYzs7OzJCQUZ2QjtFQXlFc0Msb0JBQW9CO1NBQTdDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdNZXNzYWdlQ29uZmlnIH0gZnJvbSAnLi9kdy1tZXNzYWdlLWNvbmZpZyc7XG5pbXBvcnQgeyBEd01lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2R3LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd01lc3NhZ2VEYXRhLCBEd01lc3NhZ2VEYXRhRmlsbGVkLCBEd01lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vZHctbWVzc2FnZS5kZWZpbml0aW9ucyc7XG5cbmxldCBnbG9iYWxDb3VudGVyID0gMDsgLy8gZ2xvYmFsIElEIGNvdW50ZXIgZm9yIG1lc3NhZ2VzXG5cbmV4cG9ydCBjbGFzcyBEd01lc3NhZ2VCYXNlU2VydmljZTxDb250YWluZXJDbGFzcyBleHRlbmRzIER3TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgTWVzc2FnZURhdGEsIE1lc3NhZ2VDb25maWcgZXh0ZW5kcyBEd01lc3NhZ2VDb25maWc+IHtcbiAgcHJvdGVjdGVkIF9jb250YWluZXI6IENvbnRhaW5lckNsYXNzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNvbnRhaW5lckNsYXNzOiBUeXBlPENvbnRhaW5lckNsYXNzPixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICBwcml2YXRlIF9pZFByZWZpeDogc3RyaW5nID0gJycpIHtcblxuICAgIC8vIHRoaXMuX2NvbnRhaW5lciA9IG92ZXJsYXkuY3JlYXRlKCkuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoY29udGFpbmVyQ2xhc3MpKS5pbnN0YW5jZTtcbiAgICB0aGlzLl9jb250YWluZXIgPSB0aGlzLmNyZWF0ZUNvbnRhaW5lcigpO1xuICB9XG5cbiAgcmVtb3ZlKG1lc3NhZ2VJZD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlKG1lc3NhZ2VJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlRGF0YSwgb3B0aW9ucz86IER3TWVzc2FnZURhdGFPcHRpb25zKTogRHdNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgLy8gVE9ETzogc3ByZWFkIG9uIGxpdGVyYWwgaGFzIGJlZW4gZGlzYWxsb3cgb24gbGF0ZXN0IHByb3Bvc2FsXG4gICAgY29uc3QgcmVzdWx0TWVzc2FnZTogRHdNZXNzYWdlRGF0YUZpbGxlZCA9IHtcbiAgICAgIC4uLihtZXNzYWdlIGFzIHt9KSwgLi4ue1xuICAgICAgICBtZXNzYWdlSWQ6IHRoaXMuX2dlbmVyYXRlTWVzc2FnZUlkKCksXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5fY29udGFpbmVyLmNyZWF0ZU1lc3NhZ2UocmVzdWx0TWVzc2FnZSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWVzc2FnZTtcbiAgfVxuXG4gIGNvbmZpZyhjb25maWc6IE1lc3NhZ2VDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jb250YWluZXIuc2V0Q29uZmlnKGNvbmZpZyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dlbmVyYXRlTWVzc2FnZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkUHJlZml4ICsgZ2xvYmFsQ291bnRlcisrO1xuICB9XG5cbiAgLy8gTWFudWFsbHkgY3JlYXRpbmcgY29udGFpbmVyIGZvciBvdmVybGF5IHRvIGF2b2lkIG11bHRpLWNoZWNraW5nIGVycm9yLCBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8zOTFcbiAgLy8gTk9URTogd2UgbmV2ZXIgY2xlYW4gdXAgdGhlIGNvbnRhaW5lciBjb21wb25lbnQgYW5kIGl0J3Mgb3ZlcmxheSByZXNvdXJjZXMsIGlmIHdlIHNob3VsZCwgd2UgbmVlZCB0byBkbyBpdCBieSBvdXIgb3duIGNvZGVzLlxuICBwcml2YXRlIGNyZWF0ZUNvbnRhaW5lcigpOiBDb250YWluZXJDbGFzcyB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29udGFpbmVyQ2xhc3MpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpOyAvLyBVc2Ugcm9vdCBpbmplY3RvclxuICAgIGNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7IC8vIEltbWVkaWF0ZWx5IGNoYW5nZSBkZXRlY3Rpb24gdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3JcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7IC8vIExvYWQgdmlldyBpbnRvIGFwcCByb290XG4gICAgY29uc3Qgb3ZlcmxheVBhbmUgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCkub3ZlcmxheUVsZW1lbnQ7XG4gICAgb3ZlcmxheVBhbmUuc3R5bGUuekluZGV4ID0gJzEwMTAnOyAvLyBQYXRjaGluZzogYXNzaWduIHRoZSBzYW1lIHpJbmRleCBvZiBhbnQtbWVzc2FnZSB0byBpdCdzIHBhcmVudCBvdmVybGF5IHBhbmVsLCB0byB0aGUgYW50LW1lc3NhZ2UncyB6aW5kZXggd29yay5cbiAgICBvdmVybGF5UGFuZS5hcHBlbmRDaGlsZCgoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjx7fT4pLnJvb3ROb2Rlc1sgMCBdIGFzIEhUTUxFbGVtZW50KTtcblxuICAgIHJldHVybiBjb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRHdNZXNzYWdlU2VydmljZSBleHRlbmRzIER3TWVzc2FnZUJhc2VTZXJ2aWNlPER3TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgRHdNZXNzYWdlRGF0YSwgRHdNZXNzYWdlQ29uZmlnPiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge1xuXG4gICAgc3VwZXIob3ZlcmxheSwgRHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LCBpbmplY3RvciwgY2ZyLCBhcHBSZWYsICdtZXNzYWdlLScpO1xuICB9XG5cbiAgLy8gU2hvcnRjdXQgbWV0aG9kc1xuICBzdWNjZXNzKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IER3TWVzc2FnZURhdGFPcHRpb25zKTogRHdNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdzdWNjZXNzJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGVycm9yKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IER3TWVzc2FnZURhdGFPcHRpb25zKTogRHdNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBpbmZvKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IER3TWVzc2FnZURhdGFPcHRpb25zKTogRHdNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHdhcm5pbmcoY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogRHdNZXNzYWdlRGF0YU9wdGlvbnMpOiBEd01lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3dhcm5pbmcnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgbG9hZGluZyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBEd01lc3NhZ2VEYXRhT3B0aW9ucyk6IER3TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnbG9hZGluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGUodHlwZTogJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJyB8ICdsb2FkaW5nJyB8IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogRHdNZXNzYWdlRGF0YU9wdGlvbnMpOiBEd01lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZSwgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxufVxuIl19
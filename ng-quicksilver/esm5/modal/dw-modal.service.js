/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { LoggerService } from '../core/util/logger/logger.service';
import { DwModalControlService } from './dw-modal-control.service';
import { DwModalComponent } from './dw-modal.component';
var ModalBuilderForService = /** @class */ (function () {
    function ModalBuilderForService(overlay, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.overlay = overlay;
        this.createModal();
        if (!('dwGetContainer' in options)) { // As we use CDK to create modal in service by force, there is no need to use dwGetContainer
            // As we use CDK to create modal in service by force, there is no need to use dwGetContainer
            options.dwGetContainer = null; // Override dwGetContainer's default value to prevent creating another overlay
        }
        this.changeProps(options);
        this.modalRef.instance.open();
        this.modalRef.instance.dwAfterClose.subscribe(function () { return _this.destroyModal(); }); // [NOTE] By default, close equals destroy when using as Service
    }
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this.modalRef && this.modalRef.instance;
    };
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.destroyModal = /**
     * @return {?}
     */
    function () {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    ModalBuilderForService.prototype.changeProps = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (this.modalRef) {
            Object.assign(this.modalRef.instance, options); // DANGER: here not limit user's inputs at runtime
        }
    };
    /**
     * @return {?}
     */
    ModalBuilderForService.prototype.createModal = /**
     * @return {?}
     */
    function () {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new ComponentPortal(DwModalComponent));
    };
    return ModalBuilderForService;
}());
export { ModalBuilderForService };
function ModalBuilderForService_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalBuilderForService.prototype.modalRef;
    /** @type {?} */
    ModalBuilderForService.prototype.overlayRef;
    /** @type {?} */
    ModalBuilderForService.prototype.overlay;
}
var DwModalService = /** @class */ (function () {
    function DwModalService(overlay, logger, modalControl) {
        this.overlay = overlay;
        this.logger = logger;
        this.modalControl = modalControl;
    }
    Object.defineProperty(DwModalService.prototype, "openModals", {
        // Track of the current close modals (we assume invisible is close this time)
        get: /**
         * @return {?}
         */
        function () {
            return this.modalControl.openModals;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwModalService.prototype, "afterAllClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalControl.afterAllClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // Closes all of the currently-open dialogs
    /**
     * @return {?}
     */
    DwModalService.prototype.closeAll = /**
     * @return {?}
     */
    function () {
        this.modalControl.closeAll();
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    DwModalService.prototype.create = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.dwOnCancel !== 'function') {
            options.dwOnCancel = function () {
            }; // Leave a empty function to close this modal by default
        }
        /** @type {?} */
        var modalRef = new ModalBuilderForService(this.overlay, options).getInstance(); // NOTE: use DwModalComponent as the DwModalRef by now, we may need archive the real DwModalRef object in the future
        return modalRef;
    };
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    DwModalService.prototype.confirm = /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (confirmType === void 0) { confirmType = 'confirm'; }
        if ('dwFooter' in options) {
            this.logger.warn("The Confirm-Modal doesn't support \"dwFooter\", this property will be ignored.");
        }
        if (!('dwWidth' in options)) {
            options.dwWidth = 416;
        }
        if (typeof options.dwOnOk !== 'function') { // NOTE: only support function currently by calling confirm()
            // NOTE: only support function currently by calling confirm()
            options.dwOnOk = function () {
            }; // Leave a empty function to close this modal by default
        }
        options.dwModalType = 'confirm';
        options.dwClassName = "ant-confirm ant-confirm-" + confirmType + " " + (options.dwClassName || '');
        options.dwMaskClosable = false;
        return this.create(options);
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    DwModalService.prototype.info = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'info');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    DwModalService.prototype.success = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'success');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    DwModalService.prototype.error = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'error');
    };
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    DwModalService.prototype.warning = /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return this.simpleConfirm(options, 'warning');
    };
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    DwModalService.prototype.simpleConfirm = /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    function (options, confirmType) {
        if (options === void 0) { options = {}; }
        if (!('dwIconType' in options)) {
            options.dwIconType = {
                'info': 'info-circle',
                'success': 'check-circle',
                'error': 'cross-circle',
                'warning': 'exclamation-circle'
            }[confirmType];
        }
        if (!('dwCancelText' in options)) { // Remove the Cancel button if the user not specify a Cancel button
            // Remove the Cancel button if the user not specify a Cancel button
            options.dwCancelText = null;
        }
        return this.confirm(options, confirmType);
    };
    DwModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DwModalService.ctorParameters = function () { return [
        { type: Overlay },
        { type: LoggerService },
        { type: DwModalControlService }
    ]; };
    return DwModalService;
}());
export { DwModalService };
function DwModalService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwModalService.prototype.overlay;
    /** @type {?} */
    DwModalService.prototype.logger;
    /** @type {?} */
    DwModalService.prototype.modalControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibW9kYWwvZHctbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJeEQsSUFBQTtJQUlFLGdDQUFvQixPQUFnQixFQUFFLE9BQW9DO1FBQXBDLHdCQUFBLEVBQUEsWUFBb0M7UUFBMUUsaUJBVUM7UUFWbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSw0RkFBNEY7O1lBQ2hJLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztLQUMxRTs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJ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IjpbImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS91dGlsL2xvZ2dlci9sb2dnZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IER3TW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vZHctbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcbmltcG9ydCB7IER3TW9kYWxSZWYgfSBmcm9tICcuL2R3LW1vZGFsLXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBEd01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybVR5cGUsIE1vZGFsT3B0aW9ucywgTW9kYWxPcHRpb25zRm9yU2VydmljZSB9IGZyb20gJy4vZHctbW9kYWwudHlwZSc7XG5cbi8vIEEgYnVpbGRlciB1c2VkIGZvciBtYW5hZ2luZyBzZXJ2aWNlIGNyZWF0aW5nIG1vZGFsc1xuZXhwb3J0IGNsYXNzIE1vZGFsQnVpbGRlckZvclNlcnZpY2Uge1xuICBwcml2YXRlIG1vZGFsUmVmOiBDb21wb25lbnRSZWY8RHdNb2RhbENvbXBvbmVudD47IC8vIE1vZGFsIENvbXBvbmVudFJlZiwgXCJudWxsXCIgbWVhbnMgaXQgaGFzIGJlZW4gZGVzdHJveWVkXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7fSkge1xuICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcblxuICAgIGlmICghKCdkd0dldENvbnRhaW5lcicgaW4gb3B0aW9ucykpIHsgLy8gQXMgd2UgdXNlIENESyB0byBjcmVhdGUgbW9kYWwgaW4gc2VydmljZSBieSBmb3JjZSwgdGhlcmUgaXMgbm8gbmVlZCB0byB1c2UgZHdHZXRDb250YWluZXJcbiAgICAgIG9wdGlvbnMuZHdHZXRDb250YWluZXIgPSBudWxsOyAvLyBPdmVycmlkZSBkd0dldENvbnRhaW5lcidzIGRlZmF1bHQgdmFsdWUgdG8gcHJldmVudCBjcmVhdGluZyBhbm90aGVyIG92ZXJsYXlcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZVByb3BzKG9wdGlvbnMpO1xuICAgIHRoaXMubW9kYWxSZWYuaW5zdGFuY2Uub3BlbigpO1xuICAgIHRoaXMubW9kYWxSZWYuaW5zdGFuY2UuZHdBZnRlckNsb3NlLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRlc3Ryb3lNb2RhbCgpKTsgLy8gW05PVEVdIEJ5IGRlZmF1bHQsIGNsb3NlIGVxdWFscyBkZXN0cm95IHdoZW4gdXNpbmcgYXMgU2VydmljZVxuICB9XG5cbiAgZ2V0SW5zdGFuY2UoKTogRHdNb2RhbENvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxSZWYgJiYgdGhpcy5tb2RhbFJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIGRlc3Ryb3lNb2RhbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tb2RhbFJlZikge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMubW9kYWxSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlUHJvcHMob3B0aW9uczogTW9kYWxPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5tb2RhbFJlZi5pbnN0YW5jZSwgb3B0aW9ucyk7IC8vIERBTkdFUjogaGVyZSBub3QgbGltaXQgdXNlcidzIGlucHV0cyBhdCBydW50aW1lXG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGNvbXBvbmVudCB0byBBcHBsaWNhdGlvblJlZlxuICBwcml2YXRlIGNyZWF0ZU1vZGFsKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcbiAgICB0aGlzLm1vZGFsUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKER3TW9kYWxDb21wb25lbnQpKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHdNb2RhbFNlcnZpY2Uge1xuICAvLyBUcmFjayBvZiB0aGUgY3VycmVudCBjbG9zZSBtb2RhbHMgKHdlIGFzc3VtZSBpbnZpc2libGUgaXMgY2xvc2UgdGhpcyB0aW1lKVxuICBnZXQgb3Blbk1vZGFscygpOiBEd01vZGFsUmVmW10ge1xuICAgIHJldHVybiB0aGlzLm1vZGFsQ29udHJvbC5vcGVuTW9kYWxzO1xuICB9XG5cbiAgZ2V0IGFmdGVyQWxsQ2xvc2UoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sLmFmdGVyQWxsQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IER3TW9kYWxDb250cm9sU2VydmljZSkge1xuICB9XG5cbiAgLy8gQ2xvc2VzIGFsbCBvZiB0aGUgY3VycmVudGx5LW9wZW4gZGlhbG9nc1xuICBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5jbG9zZUFsbCgpO1xuICB9XG5cbiAgY3JlYXRlPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IER3TW9kYWxSZWY8VD4ge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kd09uQ2FuY2VsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvcHRpb25zLmR3T25DYW5jZWwgPSAoKSA9PiB7XG4gICAgICB9OyAvLyBMZWF2ZSBhIGVtcHR5IGZ1bmN0aW9uIHRvIGNsb3NlIHRoaXMgbW9kYWwgYnkgZGVmYXVsdFxuICAgIH1cblxuICAgIGNvbnN0IG1vZGFsUmVmID0gbmV3IE1vZGFsQnVpbGRlckZvclNlcnZpY2UodGhpcy5vdmVybGF5LCBvcHRpb25zKS5nZXRJbnN0YW5jZSgpOyAvLyBOT1RFOiB1c2UgRHdNb2RhbENvbXBvbmVudCBhcyB0aGUgRHdNb2RhbFJlZiBieSBub3csIHdlIG1heSBuZWVkIGFyY2hpdmUgdGhlIHJlYWwgRHdNb2RhbFJlZiBvYmplY3QgaW4gdGhlIGZ1dHVyZVxuXG4gICAgcmV0dXJuIG1vZGFsUmVmO1xuICB9XG5cbiAgY29uZmlybTxUPihvcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlPFQ+ID0ge30sIGNvbmZpcm1UeXBlOiBDb25maXJtVHlwZSA9ICdjb25maXJtJyk6IER3TW9kYWxSZWY8VD4ge1xuICAgIGlmICgnZHdGb290ZXInIGluIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oYFRoZSBDb25maXJtLU1vZGFsIGRvZXNuJ3Qgc3VwcG9ydCBcImR3Rm9vdGVyXCIsIHRoaXMgcHJvcGVydHkgd2lsbCBiZSBpZ25vcmVkLmApO1xuICAgIH1cbiAgICBpZiAoISgnZHdXaWR0aCcgaW4gb3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMuZHdXaWR0aCA9IDQxNjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmR3T25PayAhPT0gJ2Z1bmN0aW9uJykgeyAvLyBOT1RFOiBvbmx5IHN1cHBvcnQgZnVuY3Rpb24gY3VycmVudGx5IGJ5IGNhbGxpbmcgY29uZmlybSgpXG4gICAgICBvcHRpb25zLmR3T25PayA9ICgpID0+IHtcbiAgICAgIH07IC8vIExlYXZlIGEgZW1wdHkgZnVuY3Rpb24gdG8gY2xvc2UgdGhpcyBtb2RhbCBieSBkZWZhdWx0XG4gICAgfVxuXG4gICAgb3B0aW9ucy5kd01vZGFsVHlwZSA9ICdjb25maXJtJztcbiAgICBvcHRpb25zLmR3Q2xhc3NOYW1lID0gYGFudC1jb25maXJtIGFudC1jb25maXJtLSR7Y29uZmlybVR5cGV9ICR7b3B0aW9ucy5kd0NsYXNzTmFtZSB8fCAnJ31gO1xuICAgIG9wdGlvbnMuZHdNYXNrQ2xvc2FibGUgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUob3B0aW9ucyk7XG4gIH1cblxuICBpbmZvPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSk6IER3TW9kYWxSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLnNpbXBsZUNvbmZpcm0ob3B0aW9ucywgJ2luZm8nKTtcbiAgfVxuXG4gIHN1Y2Nlc3M8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogRHdNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnc3VjY2VzcycpO1xuICB9XG5cbiAgZXJyb3I8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogRHdNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnZXJyb3InKTtcbiAgfVxuXG4gIHdhcm5pbmc8VD4ob3B0aW9uczogTW9kYWxPcHRpb25zRm9yU2VydmljZTxUPiA9IHt9KTogRHdNb2RhbFJlZjxUPiB7XG4gICAgcmV0dXJuIHRoaXMuc2ltcGxlQ29uZmlybShvcHRpb25zLCAnd2FybmluZycpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaW1wbGVDb25maXJtPFQ+KG9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2U8VD4gPSB7fSwgY29uZmlybVR5cGU6IENvbmZpcm1UeXBlKTogRHdNb2RhbFJlZjxUPiB7XG4gICAgaWYgKCEoJ2R3SWNvblR5cGUnIGluIG9wdGlvbnMpKSB7XG4gICAgICBvcHRpb25zLmR3SWNvblR5cGUgPSB7XG4gICAgICAgICdpbmZvJyAgIDogJ2luZm8tY2lyY2xlJyxcbiAgICAgICAgJ3N1Y2Nlc3MnOiAnY2hlY2stY2lyY2xlJyxcbiAgICAgICAgJ2Vycm9yJyAgOiAnY3Jvc3MtY2lyY2xlJyxcbiAgICAgICAgJ3dhcm5pbmcnOiAnZXhjbGFtYXRpb24tY2lyY2xlJ1xuICAgICAgfVsgY29uZmlybVR5cGUgXTtcbiAgICB9XG4gICAgaWYgKCEoJ2R3Q2FuY2VsVGV4dCcgaW4gb3B0aW9ucykpIHsgLy8gUmVtb3ZlIHRoZSBDYW5jZWwgYnV0dG9uIGlmIHRoZSB1c2VyIG5vdCBzcGVjaWZ5IGEgQ2FuY2VsIGJ1dHRvblxuICAgICAgb3B0aW9ucy5kd0NhbmNlbFRleHQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maXJtKG9wdGlvbnMsIGNvbmZpcm1UeXBlKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { DwMessageContainerComponent } from './dw-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
/** @type {?} */
let globalCounter = 0;
// unsupported: template constraints.
// unsupported: template constraints.
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class DwMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} _idPrefix
     */
    constructor(overlay, containerClass, injector, cfr, appRef, _idPrefix = '') {
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
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, (/** @type {?} */ (message)), {
            messageId: this._generateMessageId(),
            options,
            createdAt: new Date()
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        this._container.setConfig(config);
    }
    /**
     * @return {?}
     */
    _generateMessageId() {
        return this._idPrefix + globalCounter++;
    }
    /**
     * @return {?}
     */
    createContainer() {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector); // Use root injector
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild(/** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]));
        return componentRef.instance;
    }
}
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
export class DwMessageService extends DwMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(overlay, injector, cfr, appRef) {
        super(overlay, DwMessageContainerComponent, injector, cfr, appRef, 'message-');
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
DwMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DwMessageService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ DwMessageService.ngInjectableDef = i0.defineInjectable({ factory: function DwMessageService_Factory() { return new i1.DwMessageService(i0.inject(i2.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: i1.DwMessageService, providedIn: "root" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtZXNzYWdlL2R3LW1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsd0JBQXdCLEVBQW1CLFVBQVUsRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFHdEgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBRy9FLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQzs7Ozs7O0FBRXRCLE1BQU07Ozs7Ozs7OztJQUdKLFlBQ1UsU0FDQSxnQkFDQSxVQUNBLEtBQ0EsUUFDQSxZQUFvQixFQUFFO1FBTHRCLFlBQU8sR0FBUCxPQUFPO1FBQ1AsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsYUFBUSxHQUFSLFFBQVE7UUFDUixRQUFHLEdBQUgsR0FBRztRQUNILFdBQU0sR0FBTixNQUFNO1FBQ04sY0FBUyxHQUFULFNBQVM7O1FBR2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzFDOzs7OztJQUVELE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDcEM7S0FDRjs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQW9CLEVBQUUsT0FBOEI7O1FBRWhFLE1BQU0sYUFBYSxxQkFDZCxtQkFBQyxPQUFhLEVBQUMsRUFBSztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLE9BQU87WUFDUCxTQUFTLEVB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QUF3QjtZQUF4QyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd01lc3NhZ2VDb25maWcgfSBmcm9tICcuL2R3LW1lc3NhZ2UtY29uZmlnJztcbmltcG9ydCB7IER3TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHctbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IER3TWVzc2FnZURhdGEsIER3TWVzc2FnZURhdGFGaWxsZWQsIER3TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9kdy1tZXNzYWdlLmRlZmluaXRpb25zJztcblxubGV0IGdsb2JhbENvdW50ZXIgPSAwOyAvLyBnbG9iYWwgSUQgY291bnRlciBmb3IgbWVzc2FnZXNcblxuZXhwb3J0IGNsYXNzIER3TWVzc2FnZUJhc2VTZXJ2aWNlPENvbnRhaW5lckNsYXNzIGV4dGVuZHMgRHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LCBNZXNzYWdlRGF0YSwgTWVzc2FnZUNvbmZpZyBleHRlbmRzIER3TWVzc2FnZUNvbmZpZz4ge1xuICBwcm90ZWN0ZWQgX2NvbnRhaW5lcjogQ29udGFpbmVyQ2xhc3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgY29udGFpbmVyQ2xhc3M6IFR5cGU8Q29udGFpbmVyQ2xhc3M+LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgIHByaXZhdGUgX2lkUHJlZml4OiBzdHJpbmcgPSAnJykge1xuXG4gICAgLy8gdGhpcy5fY29udGFpbmVyID0gb3ZlcmxheS5jcmVhdGUoKS5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChjb250YWluZXJDbGFzcykpLmluc3RhbmNlO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuY3JlYXRlQ29udGFpbmVyKCk7XG4gIH1cblxuICByZW1vdmUobWVzc2FnZUlkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKG1lc3NhZ2VJZCkge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2VBbGwoKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2VEYXRhLCBvcHRpb25zPzogRHdNZXNzYWdlRGF0YU9wdGlvbnMpOiBEd01lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICAvLyBUT0RPOiBzcHJlYWQgb24gbGl0ZXJhbCBoYXMgYmVlbiBkaXNhbGxvdyBvbiBsYXRlc3QgcHJvcG9zYWxcbiAgICBjb25zdCByZXN1bHRNZXNzYWdlOiBEd01lc3NhZ2VEYXRhRmlsbGVkID0ge1xuICAgICAgLi4uKG1lc3NhZ2UgYXMge30pLCAuLi57XG4gICAgICAgIG1lc3NhZ2VJZDogdGhpcy5fZ2VuZXJhdGVNZXNzYWdlSWQoKSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLl9jb250YWluZXIuY3JlYXRlTWVzc2FnZShyZXN1bHRNZXNzYWdlKTtcblxuICAgIHJldHVybiByZXN1bHRNZXNzYWdlO1xuICB9XG5cbiAgY29uZmlnKGNvbmZpZzogTWVzc2FnZUNvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuX2NvbnRhaW5lci5zZXRDb25maWcoY29uZmlnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2VuZXJhdGVNZXNzYWdlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faWRQcmVmaXggKyBnbG9iYWxDb3VudGVyKys7XG4gIH1cblxuICAvLyBNYW51YWxseSBjcmVhdGluZyBjb250YWluZXIgZm9yIG92ZXJsYXkgdG8gYXZvaWQgbXVsdGktY2hlY2tpbmcgZXJyb3IsIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvaXNzdWVzLzM5MVxuICAvLyBOT1RFOiB3ZSBuZXZlciBjbGVhbiB1cCB0aGUgY29udGFpbmVyIGNvbXBvbmVudCBhbmQgaXQncyBvdmVybGF5IHJlc291cmNlcywgaWYgd2Ugc2hvdWxkLCB3ZSBuZWVkIHRvIGRvIGl0IGJ5IG91ciBvd24gY29kZXMuXG4gIHByaXZhdGUgY3JlYXRlQ29udGFpbmVyKCk6IENvbnRhaW5lckNsYXNzIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb250YWluZXJDbGFzcyk7XG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7IC8vIFVzZSByb290IGluamVjdG9yXG4gICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTsgLy8gSW1tZWRpYXRlbHkgY2hhbmdlIGRldGVjdGlvbiB0byBhdm9pZCBtdWx0aS1jaGVja2luZyBlcnJvclxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTsgLy8gTG9hZCB2aWV3IGludG8gYXBwIHJvb3RcbiAgICBjb25zdCBvdmVybGF5UGFuZSA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKS5vdmVybGF5RWxlbWVudDtcbiAgICBvdmVybGF5UGFuZS5zdHlsZS56SW5kZXggPSAnMTAxMCc7IC8vIFBhdGNoaW5nOiBhc3NpZ24gdGhlIHNhbWUgekluZGV4IG9mIGFudC1tZXNzYWdlIHRvIGl0J3MgcGFyZW50IG92ZXJsYXkgcGFuZWwsIHRvIHRoZSBhbnQtbWVzc2FnZSdzIHppbmRleCB3b3JrLlxuICAgIG92ZXJsYXlQYW5lLmFwcGVuZENoaWxkKChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPHt9Pikucm9vdE5vZGVzWyAwIF0gYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEd01lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgRHdNZXNzYWdlQmFzZVNlcnZpY2U8RHdNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LCBEd01lc3NhZ2VEYXRhLCBEd01lc3NhZ2VDb25maWc+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBvdmVybGF5OiBPdmVybGF5LFxuICAgIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7XG5cbiAgICBzdXBlcihvdmVybGF5LCBEd01lc3NhZ2VDb250YWluZXJDb21wb25lbnQsIGluamVjdG9yLCBjZnIsIGFwcFJlZiwgJ21lc3NhZ2UtJyk7XG4gIH1cblxuICAvLyBTaG9ydGN1dCBtZXRob2RzXG4gIHN1Y2Nlc3MoY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogRHdNZXNzYWdlRGF0YU9wdGlvbnMpOiBEd01lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgZXJyb3IoY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogRHdNZXNzYWdlRGF0YU9wdGlvbnMpOiBEd01lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2Vycm9yJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGluZm8oY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogRHdNZXNzYWdlRGF0YU9wdGlvbnMpOiBEd01lc3NhZ2VEYXRhRmlsbGVkIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2luZm8nLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgd2FybmluZyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBEd01lc3NhZ2VEYXRhT3B0aW9ucyk6IER3TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnd2FybmluZycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBsb2FkaW5nKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IER3TWVzc2FnZURhdGFPcHRpb25zKTogRHdNZXNzYWdlRGF0YUZpbGxlZCB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdsb2FkaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZSh0eXBlOiAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZXJyb3InIHwgJ2xvYWRpbmcnIHwgc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBEd01lc3NhZ2VEYXRhT3B0aW9ucyk6IER3TWVzc2FnZURhdGFGaWxsZWQge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
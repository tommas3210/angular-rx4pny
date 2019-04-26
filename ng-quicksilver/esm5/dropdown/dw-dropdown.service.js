/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { DwDropdownContextComponent } from './dw-dropdown-context.component';
import * as i0 from "@angular/core";
import * as i1 from "./public-api";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/common";
var DwDropdownService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function DwDropdownService(overlay, document, zone) {
        this.overlay = overlay;
        this.document = document;
        this.zone = zone;
        this.positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
        ];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    DwDropdownService.prototype.createOverlay = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.createPoint($event);
        /** @type {?} */
        var fakeElementRef = new ElementRef(this.locatePoint);
        this.positionStrategy = this.overlay.position().flexibleConnectedTo(fakeElementRef);
        this.handlePositionChanges(this.positionStrategy);
        /** @type {?} */
        var overlayConfig = new OverlayConfig({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.close(),
            positionStrategy: this.positionStrategy
        });
        return this.overlay.create(overlayConfig);
    };
    /**
     * @param {?} strategy
     * @return {?}
     */
    DwDropdownService.prototype.handlePositionChanges = /**
     * @param {?} strategy
     * @return {?}
     */
    function (strategy) {
        var _this = this;
        strategy.withPositions(this.positions);
        this.onPositionChangeSubscription = this.positionStrategy.positionChanges.subscribe(function (data) {
            /** @type {?} */
            var position = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            _this.instance.setDropDownPosition(position);
        });
    };
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    DwDropdownService.prototype.handleCloseEvent = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        this.backdropClickSubscription = overlayRef.backdropClick().subscribe(function (_) { return _this.instance.close(); });
        this.detachmentsSubscription = overlayRef.detachments().subscribe(function (_) { return _this.close(); });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwDropdownService.prototype.createPoint = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.locatePoint) {
            /** @type {?} */
            var container = this.document.createElement('span');
            this.document.body.appendChild(container);
            this.locatePoint = container;
        }
        this.locatePoint.style.position = "fixed";
        this.locatePoint.style.top = e.clientY + "px";
        this.locatePoint.style.left = e.clientX + "px";
    };
    /**
     * @return {?}
     */
    DwDropdownService.prototype.removePoint = /**
     * @return {?}
     */
    function () {
        if (this.locatePoint) {
            this.document.body.removeChild(this.locatePoint);
            this.locatePoint = null;
        }
    };
    /**
     * @param {?} instance
     * @param {?} template
     * @return {?}
     */
    DwDropdownService.prototype.setInstanceValue = /**
     * @param {?} instance
     * @param {?} template
     * @return {?}
     */
    function (instance, template) {
        instance.open = true;
        instance.setTemplateRef(template);
        instance.setControl(this);
    };
    /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    DwDropdownService.prototype.create = /**
     * @param {?} $event
     * @param {?} template
     * @return {?}
     */
    function ($event, template) {
        var _this = this;
        $event.preventDefault();
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.dispose();
        }
        else {
            this.overlayRef = this.createOverlay($event);
            setTimeout(function () {
                if (_this.overlayRef.backdropElement) {
                    _this.zone.runOutsideAngular(function () {
                        _this.overlayRef.backdropElement.addEventListener('contextmenu', function (e) { return e.preventDefault(); });
                    });
                }
            });
            this.instance = this.overlayRef.attach(new ComponentPortal(DwDropdownContextComponent)).instance;
            this.setInstanceValue(this.instance, template);
            this.handleCloseEvent(this.overlayRef);
            return this.instance;
        }
    };
    /**
     * @return {?}
     */
    DwDropdownService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.removePoint();
        this.overlayRef.dispose();
        if (this.backdropClickSubscription) {
            this.backdropClickSubscription.unsubscribe();
            this.backdropClickSubscription = null;
        }
        if (this.detachmentsSubscription) {
            this.detachmentsSubscription.unsubscribe();
            this.detachmentsSubscription = null;
        }
        if (this.onPositionChangeSubscription) {
            this.onPositionChangeSubscription.unsubscribe();
            this.onPositionChangeSubscription = null;
        }
    };
    DwDropdownService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DwDropdownService.ctorParameters = function () { return [
        { type: Overlay },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: NgZone }
    ]; };
    /** @nocollapse */ DwDropdownService.ngInjectableDef = i0.defineInjectable({ factory: function DwDropdownService_Factory() { return new i1.DwDropdownService(i0.inject(i2.Overlay), i0.inject(i3.DOCUMENT), i0.inject(i0.NgZone)); }, token: i1.DwDropdownService, providedIn: "root" });
    return DwDropdownService;
}());
export { DwDropdownService };
function DwDropdownService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDropdownService.prototype.instance;
    /** @type {?} */
    DwDropdownService.prototype.overlayRef;
    /** @type {?} */
    DwDropdownService.prototype.locatePoint;
    /** @type {?} */
    DwDropdownService.prototype.positionStrategy;
    /** @type {?} */
    DwDropdownService.prototype.backdropClickSubscription;
    /** @type {?} */
    DwDropdownService.prototype.detachmentsSubscription;
    /** @type {?} */
    DwDropdownService.prototype.onPositionChangeSubscription;
    /** @type {?} */
    DwDropdownService.prototype.positions;
    /** @type {?} */
    DwDropdownService.prototype.overlay;
    /** @type {?} */
    DwDropdownService.prototype.document;
    /** @type {?} */
    DwDropdownService.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vZHctZHJvcGRvd24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUVkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBR3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7Ozs7SUE0QjNFLHFDQUFxQztJQUNyQywyQkFBb0IsT0FBZ0IsRUFBNEIsUUFBYSxFQUFVLElBQVk7UUFBL0UsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTt5QkFoQi9FO1lBQ2xCLElBQUksc0JBQXNCLENBQ3hCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3BDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDekMsSUFBSSxzQkFBc0IsQ0FDeEIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztZQUM1QyxJQUFJLHNCQUFzQixDQUN4QixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNwQyxFQUFFLFFBQVEs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QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7SUFFRCxpQ0FBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNsQyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUU7WUFDckMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7U0FDMUM7S0FDRjs7Z0JBbkhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBYkMsT0FBTztnREFzQ2dDLE1BQU0sU0FBQyxRQUFRO2dCQWhDZixNQUFNOzs7NEJBVC9DOztTQWlCYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3QsIEluamVjdGFibGUsIE5nWm9uZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEd0Ryb3Bkb3duQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vZHctZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEd0Ryb3Bkb3duU2VydmljZSB7XG4gIHByb3RlY3RlZCBpbnN0YW5jZTogRHdEcm9wZG93bkNvbnRleHRDb21wb25lbnQ7XG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcHJpdmF0ZSBsb2NhdGVQb2ludDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuICBwcml2YXRlIGJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkZXRhY2htZW50c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwb3NpdGlvbnMgPSBbXG4gICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXG4gICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXG4gICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nIH0pLFxuICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxuICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgICAgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICBdO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoJGV2ZW50OiBNb3VzZUV2ZW50KTogT3ZlcmxheVJlZiB7XG4gICAgdGhpcy5jcmVhdGVQb2ludCgkZXZlbnQpO1xuICAgIGNvbnN0IGZha2VFbGVtZW50UmVmID0gbmV3IEVsZW1lbnRSZWYodGhpcy5sb2NhdGVQb2ludCk7XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZmxleGlibGVDb25uZWN0ZWRUbyhmYWtlRWxlbWVudFJlZik7XG4gICAgdGhpcy5oYW5kbGVQb3NpdGlvbkNoYW5nZXModGhpcy5wb3NpdGlvblN0cmF0ZWd5KTtcbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgaGFzQmFja2Ryb3AgICAgIDogdHJ1ZSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5ICA6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmNsb3NlKCksXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3lcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9zaXRpb25DaGFuZ2VzKHN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kpOiB2b2lkIHtcbiAgICBzdHJhdGVneS53aXRoUG9zaXRpb25zKHRoaXMucG9zaXRpb25zKTtcbiAgICB0aGlzLm9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gZGF0YS5jb25uZWN0aW9uUGFpci5vdmVybGF5WSA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXREcm9wRG93blBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xvc2VFdmVudChvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZCB7XG4gICAgdGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKF8gPT4gdGhpcy5pbnN0YW5jZS5jbG9zZSgpKTtcbiAgICB0aGlzLmRldGFjaG1lbnRzU3Vic2NyaXB0aW9uID0gb3ZlcmxheVJlZi5kZXRhY2htZW50cygpLnN1YnNjcmliZShfID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvaW50KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubG9jYXRlUG9pbnQpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLmxvY2F0ZVBvaW50ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICB0aGlzLmxvY2F0ZVBvaW50LnN0eWxlLnBvc2l0aW9uID0gYGZpeGVkYDtcbiAgICB0aGlzLmxvY2F0ZVBvaW50LnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WX1weGA7XG4gICAgdGhpcy5sb2NhdGVQb2ludC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYfXB4YDtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUG9pbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9jYXRlUG9pbnQpIHtcbiAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmxvY2F0ZVBvaW50KTtcbiAgICAgIHRoaXMubG9jYXRlUG9pbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0SW5zdGFuY2VWYWx1ZShpbnN0YW5jZTogRHdEcm9wZG93bkNvbnRleHRDb21wb25lbnQsIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPik6IHZvaWQge1xuICAgIGluc3RhbmNlLm9wZW4gPSB0cnVlO1xuICAgIGluc3RhbmNlLnNldFRlbXBsYXRlUmVmKHRlbXBsYXRlKTtcbiAgICBpbnN0YW5jZS5zZXRDb250cm9sKHRoaXMpO1xuICB9XG5cbiAgY3JlYXRlKCRldmVudDogTW91c2VFdmVudCwgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+KTogRHdEcm9wZG93bkNvbnRleHRDb21wb25lbnQge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheSgkZXZlbnQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCAoZTogTW91c2VFdmVudCkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmluc3RhbmNlID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKER3RHJvcGRvd25Db250ZXh0Q29tcG9uZW50KSkuaW5zdGFuY2U7XG4gICAgICB0aGlzLnNldEluc3RhbmNlVmFsdWUodGhpcy5pbnN0YW5jZSwgdGVtcGxhdGUpO1xuICAgICAgdGhpcy5oYW5kbGVDbG9zZUV2ZW50KHRoaXMub3ZlcmxheVJlZik7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZVBvaW50KCk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICBpZiAodGhpcy5iYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuYmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLmRldGFjaG1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmRldGFjaG1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRldGFjaG1lbnRzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMub25Qb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vblBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm9uUG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19
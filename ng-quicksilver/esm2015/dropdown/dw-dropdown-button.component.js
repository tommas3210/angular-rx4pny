/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DwDropDownComponent } from './dw-dropdown.component';
import { DwDropDownDirective } from './dw-dropdown.directive';
export class DwDropDownButtonComponent extends DwDropDownComponent {
    constructor() {
        super(...arguments);
        this.dwSize = 'default';
        this.dwType = 'default';
        this.dwClick = new EventEmitter();
        this.onVisibleChange = (visible) => {
            if (this.dwDisabled) {
                return;
            }
            if (visible) {
                this.setTriggerWidth();
            }
            if (this.dwVisible !== visible) {
                this.dwVisible = visible;
                this.dwVisibleChange.emit(this.dwVisible);
            }
            this.changeDetector.markForCheck();
        };
    }
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    ngAfterViewInit() {
        this.startSubscribe(this.$visibleChange);
    }
}
DwDropDownButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-dropdown-button',
                preserveWhitespaces: false,
                animations: [
                    dropDownAnimation
                ],
                template: "<div class=\"ant-btn-group ant-dropdown-button\" dw-dropdown>\n  <button\n    type=\"button\"\n    dw-button\n    [disabled]=\"dwDisabled\"\n    [dwType]=\"dwType\"\n    [dwSize]=\"dwSize\"\n    (click)=\"dwClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button\n    dw-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [dwType]=\"dwType\"\n    [dwSize]=\"dwSize\"\n    [disabled]=\"dwDisabled\"\n    (click)=\"onClickEvent()\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\">\n    <i class=\"anticon anticon-ellipsis\"></i>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"dwOrigin\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"dwVisible\">\n  <div\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+dwPlacement}}\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[dw-menu]\"></ng-content>\n  </div>\n</ng-template>",
                styles: [`
    :host {
      position: relative;
      display: inline-block;
    }

    .ant-dropdown {
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
    }
  `]
            }] }
];
DwDropDownButtonComponent.propDecorators = {
    dwSize: [{ type: Input }],
    dwType: [{ type: Input }],
    content: [{ type: ViewChild, args: ['content',] }],
    dwClick: [{ type: Output }],
    dwOrigin: [{ type: ViewChild, args: [DwDropDownDirective,] }]
};
function DwDropDownButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwSize;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwType;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.content;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwClick;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.dwOrigin;
    /** @type {?} */
    DwDropDownButtonComponent.prototype.onVisibleChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vZHctZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUEwQjlELE1BQU0sZ0NBQWlDLFNBQVEsbUJBQW1COzs7c0JBQzlDLFNBQVM7c0JBQ1QsU0FBUzt1QkFFUCxJQUFJLFlBQVksRUFBYzsrQkFHaEMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixPQUFPO2FBQ1I7WUFDRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNwQzs7Ozs7O0lBR0QsZUFBZTtRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxvQkFBb0I7Z0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBVztvQkFDbkIsaUJBQWlCO2lCQUNsQjtnQkFDRCwwMENBQTBEO3lCQUNuQzs7Ozs7Ozs7Ozs7Ozs7R0FjdEI7YUFDRjs7O3FCQUdFLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxTQUFTLFNBQUMsU0FBUztzQkFDbkIsTUFBTTt1QkFDTixTQUFTLFNBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IER3RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuL2R3LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0Ryb3BEb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kdy1kcm9wZG93bi5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWRyb3Bkb3duLWJ1dHRvbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgOmhvc3Qge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5hbnQtZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgYCBdXG59KVxuXG5leHBvcnQgY2xhc3MgRHdEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIER3RHJvcERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGR3U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZHdUeXBlID0gJ2RlZmF1bHQnO1xuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDtcbiAgQE91dHB1dCgpIGR3Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIEBWaWV3Q2hpbGQoRHdEcm9wRG93bkRpcmVjdGl2ZSkgZHdPcmlnaW47XG5cbiAgb25WaXNpYmxlQ2hhbmdlID0gKHZpc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAodGhpcy5kd0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd1Zpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMuZHdWaXNpYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMuZHdWaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy5kd1Zpc2libGUpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIHJld3JpdGUgYWZ0ZXJWaWV3SW5pdCBob29rICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0U3Vic2NyaWJlKHRoaXMuJHZpc2libGVDaGFuZ2UpO1xuICB9XG59XG4iXX0=
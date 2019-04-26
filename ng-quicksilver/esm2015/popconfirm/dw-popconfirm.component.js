/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { toBoolean } from '../core/util/convert';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
export class DwPopconfirmComponent extends DwToolTipComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
        this._condition = false;
        this._prefix = 'ant-popover-placement';
        this._trigger = 'click';
        this._hasBackdrop = true;
        this.dwOnCancel = new EventEmitter();
        this.dwOnConfirm = new EventEmitter();
        this.dwOkType = 'primary';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCondition(value) {
        this._condition = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwCondition() {
        return this._condition;
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.dwCondition) {
            this.dwVisible = true;
        }
        else {
            this.onConfirm();
        }
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.dwOnCancel.emit();
        this.dwVisible = false;
    }
    /**
     * @return {?}
     */
    onConfirm() {
        this.dwOnConfirm.emit();
        this.dwVisible = false;
    }
}
DwPopconfirmComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-popconfirm',
                preserveWhitespaces: false,
                animations: [fadeAnimation],
                template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"dwOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div>\n          <div class=\"ant-popover-inner-content\">\n            <div class=\"ant-popover-message\">\n              <ng-container *ngIf=\"isTitleString; else titleTemplate\">\n                <i class=\"anticon anticon-exclamation-circle\"></i>\n                <div class=\"ant-popover-message-title\">{{ dwTitle }}</div>\n              </ng-container>\n              <ng-template #titleTemplate>\n                <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n              </ng-template>\n            </div>\n            <div class=\"ant-popover-buttons\">\n              <button dw-button [dwSize]=\"'small'\" (click)=\"onCancel()\">\n                <ng-container *ngIf=\"dwCancelText\">{{ dwCancelText }}</ng-container>\n                <ng-container *ngIf=\"!dwCancelText\">{{ 'Modal.cancelText' | dwI18n }}</ng-container>\n              </button>\n              <button dw-button [dwSize]=\"'small'\" [dwType]=\"dwOkType\" (click)=\"onConfirm()\">\n                <ng-container *ngIf=\"dwOkText\">{{ dwOkText }}</ng-container>\n                <ng-container *ngIf=\"!dwOkText\">{{ 'Modal.okText' | dwI18n }}</ng-container>\n              </button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                styles: [`
    .ant-popover {
      position: relative;
    }
  `]
            }] }
];
/** @nocollapse */
DwPopconfirmComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DwPopconfirmComponent.propDecorators = {
    dwOnCancel: [{ type: Output }],
    dwOnConfirm: [{ type: Output }],
    dwOkText: [{ type: Input }],
    dwOkType: [{ type: Input }],
    dwCancelText: [{ type: Input }],
    dwCondition: [{ type: Input }]
};
function DwPopconfirmComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwPopconfirmComponent.prototype._condition;
    /** @type {?} */
    DwPopconfirmComponent.prototype._prefix;
    /** @type {?} */
    DwPopconfirmComponent.prototype._trigger;
    /** @type {?} */
    DwPopconfirmComponent.prototype._hasBackdrop;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOnCancel;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOnConfirm;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOkText;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwOkType;
    /** @type {?} */
    DwPopconfirmComponent.prototype.dwCancelText;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcG9wY29uZmlybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBvcGNvbmZpcm0vZHctcG9wY29uZmlybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFhckUsTUFBTSw0QkFBNkIsU0FBUSxrQkFBa0I7Ozs7SUF1QzNELFlBQVksR0FBc0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzBCQXZDQSxLQUFLO3VCQUNSLHVCQUF1Qjt3QkFDdEIsT0FBTzs0QkFDSCxJQUFJOzBCQUN3QixJQUFJLFlBQVksRUFBRTsyQkFDakIsSUFBSSxZQUFZLEVBQUU7d0JBR2xDLFNBQVM7S0FnQ3BDOzs7OztJQTdCRCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7S0FDRjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDeEI7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGVBQWU7Z0JBQ3BDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBVyxDQUFFLGFBQWEsQ0FBRTtnQkFDdEMsNitEQUFxRDt5QkFDOUI7Ozs7R0FJdEI7YUFDRjs7OztZQXBCQyxpQkFBaUI7Ozt5QkEwQmhCLE1BQU07MEJBQ04sTUFBTTt1QkFFTixLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd1Rvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL2R3LXRvb2x0aXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1wb3Bjb25maXJtJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFsgZmFkZUFuaW1hdGlvbiBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1wb3Bjb25maXJtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1wb3BvdmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1BvcGNvbmZpcm1Db21wb25lbnQgZXh0ZW5kcyBEd1Rvb2xUaXBDb21wb25lbnQge1xuICBfY29uZGl0aW9uID0gZmFsc2U7XG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXItcGxhY2VtZW50JztcbiAgX3RyaWdnZXIgPSAnY2xpY2snO1xuICBfaGFzQmFja2Ryb3AgPSB0cnVlO1xuICBAT3V0cHV0KCkgZHdPbkNhbmNlbDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdPbkNvbmZpcm06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBkd09rVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBkd09rVHlwZTogc3RyaW5nID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBkd0NhbmNlbFRleHQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgZHdDb25kaXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb25kaXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q29uZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25kaXRpb247XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5kd0NvbmRpdGlvbikge1xuICAgICAgdGhpcy5kd1Zpc2libGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQ29uZmlybSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuZHdPbkNhbmNlbC5lbWl0KCk7XG4gICAgdGhpcy5kd1Zpc2libGUgPSBmYWxzZTtcbiAgfVxuXG4gIG9uQ29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmR3T25Db25maXJtLmVtaXQoKTtcbiAgICB0aGlzLmR3VmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGNkcik7XG4gIH1cblxufVxuIl19
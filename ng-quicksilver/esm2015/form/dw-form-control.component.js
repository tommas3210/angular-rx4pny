/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { DwColComponent } from '../grid/dw-col.component';
export class DwFormControlComponent extends DwColComponent {
    constructor() {
        super(...arguments);
        this._hasFeedback = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    get dwHasFeedback() {
        return this._hasFeedback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwValidateStatus(value) {
        if (value instanceof FormControl) {
            this.validateControl = value;
            this.validateString = null;
            this.controlStatus = null;
            this.setControlClassMap();
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.removeSubscribe();
            this.setControlClassMap();
        }
    }
    /**
     * @return {?}
     */
    removeSubscribe() {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    updateValidateStatus(status) {
        if (this.validateControl.dirty || this.validateControl.touched) {
            this.controlStatus = status;
            this.setControlClassMap();
        }
        else {
            this.controlStatus = null;
            this.setControlClassMap();
        }
    }
    /**
     * @return {?}
     */
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.subscribe(data => this.updateValidateStatus(data));
        }
    }
    /**
     * @return {?}
     */
    setControlClassMap() {
        this.controlClassMap = {
            [`has-warning`]: this.validateString === 'warning',
            [`is-validating`]: this.validateString === 'validating' || this.validateString === 'pending' || this.controlStatus === 'PENDING',
            [`has-error`]: this.validateString === 'error' || this.controlStatus === 'INVALID',
            [`has-success`]: this.validateString === 'success' || this.controlStatus === 'VALID',
            [`has-feedback`]: this.dwHasFeedback
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeSubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.watchControl();
        if (this.validateControl) {
            this.updateValidateStatus(this.validateControl.status);
        }
    }
}
DwFormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-form-control',
                providers: [DwUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n  </span>\n  <ng-content select=\"dw-form-explain\"></ng-content>\n</div>",
                host: {
                    '[class.ant-form-item-control-wrapper]': 'true'
                },
                styles: [`:host {
    display: block;
  }`]
            }] }
];
DwFormControlComponent.propDecorators = {
    validateControl: [{ type: ContentChild, args: [NgControl,] }],
    dwHasFeedback: [{ type: Input }],
    dwValidateStatus: [{ type: Input }]
};
function DwFormControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwFormControlComponent.prototype._hasFeedback;
    /** @type {?} */
    DwFormControlComponent.prototype.validateChanges;
    /** @type {?} */
    DwFormControlComponent.prototype.validateString;
    /** @type {?} */
    DwFormControlComponent.prototype.controlStatus;
    /** @type {?} */
    DwFormControlComponent.prototype.controlClassMap;
    /** @type {?} */
    DwFormControlComponent.prototype.validateControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZm9ybS9kdy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFjMUQsTUFBTSw2QkFBOEIsU0FBUSxjQUFjOzs7NEJBQ2pDLEtBQUs7Ozs7OztJQU81QixJQUNJLGFBQWEsQ0FBQyxLQUFjO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0tBQzFCOzs7OztJQUVELElBQ0ksZ0JBQWdCLENBQUMsS0FBMkI7UUFDOUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDN0I7S0FDRjs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxNQUFjO1FBQ2pDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0Y7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUV2QixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5RztLQUVGOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDckIsQ0FBRSxhQUFhLENBQUUsRUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVM7WUFDdEQsQ0FBRSxlQUFlLENBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVM7WUFDbEksQ0FBRSxXQUFXLENBQUUsRUFBTSxJQUFJLENBQUMsY0FBYyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVM7WUFDeEYsQ0FBRSxhQUFhLENBQUUsRUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLE9BQU87WUFDeEYsQ0FBRSxjQUFjLENBQUUsRUFBRyxJQUFJLENBQUMsYUFBYTtTQUN4QyxDQUFDO0tBQ0g7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEO0tBQ0Y7OztZQWhHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtnQkFDdEMsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLG9PQUF1RDtnQkFDdkQsSUFBSSxFQUFpQjtvQkFDbkIsdUNBQXVDLEVBQUUsTUFBTTtpQkFDaEQ7eUJBQ3NCOztJQUVyQjthQUNIOzs7OEJBT0UsWUFBWSxTQUFDLFNBQVM7NEJBRXRCLEtBQUs7K0JBVUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd0NvbENvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQvZHctY29sLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctZm9ybS1jb250cm9sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWZvcm0tY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIER3Q29sQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xuICB2YWxpZGF0ZUNoYW5nZXM6IFN1YnNjcmlwdGlvbjtcbiAgdmFsaWRhdGVTdHJpbmc6IHN0cmluZztcbiAgY29udHJvbFN0YXR1czogc3RyaW5nO1xuICBjb250cm9sQ2xhc3NNYXA7XG4gIEBDb250ZW50Q2hpbGQoTmdDb250cm9sKSB2YWxpZGF0ZUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0hhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzRmVlZGJhY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdIYXNGZWVkYmFjaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzRmVlZGJhY2s7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdWYWxpZGF0ZVN0YXR1cyh2YWx1ZTogc3RyaW5nIHwgRm9ybUNvbnRyb2wpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xuICAgICAgdGhpcy5jb250cm9sU3RhdHVzID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IG51bGw7XG4gICAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVTdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGVDaGFuZ2VzKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbGlkYXRlU3RhdHVzKHN0YXR1czogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sLmRpcnR5IHx8IHRoaXMudmFsaWRhdGVDb250cm9sLnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuY29udHJvbFN0YXR1cyA9IHN0YXR1cztcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbFN0YXR1cyA9IG51bGw7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHdhdGNoQ29udHJvbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xuICAgIC8qKiBtaXNzIGRldGVjdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMDg4NyAqKi9cbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcykge1xuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMgPSB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZShkYXRhID0+IHRoaXMudXBkYXRlVmFsaWRhdGVTdGF0dXMoZGF0YSkpO1xuICAgIH1cblxuICB9XG5cbiAgc2V0Q29udHJvbENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbENsYXNzTWFwID0ge1xuICAgICAgWyBgaGFzLXdhcm5pbmdgIF0gIDogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnLFxuICAgICAgWyBgaXMtdmFsaWRhdGluZ2AgXTogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3ZhbGlkYXRpbmcnIHx8IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLmNvbnRyb2xTdGF0dXMgPT09ICdQRU5ESU5HJyxcbiAgICAgIFsgYGhhcy1lcnJvcmAgXSAgICA6IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdlcnJvcicgfHwgdGhpcy5jb250cm9sU3RhdHVzID09PSAnSU5WQUxJRCcsXG4gICAgICBbIGBoYXMtc3VjY2Vzc2AgXSAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnc3VjY2VzcycgfHwgdGhpcy5jb250cm9sU3RhdHVzID09PSAnVkFMSUQnLFxuICAgICAgWyBgaGFzLWZlZWRiYWNrYCBdIDogdGhpcy5kd0hhc0ZlZWRiYWNrXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCkge1xuICAgICAgdGhpcy51cGRhdGVWYWxpZGF0ZVN0YXR1cyh0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXMpO1xuICAgIH1cbiAgfVxufVxuIl19
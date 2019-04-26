/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, Input } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { DwColComponent } from '../grid/dw-col.component';
var DwFormControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwFormControlComponent, _super);
    function DwFormControlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hasFeedback = false;
        return _this;
    }
    Object.defineProperty(DwFormControlComponent.prototype, "dwHasFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFeedback;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwFormControlComponent.prototype, "dwValidateStatus", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwFormControlComponent.prototype.removeSubscribe = /**
     * @return {?}
     */
    function () {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    };
    /**
     * @param {?} status
     * @return {?}
     */
    DwFormControlComponent.prototype.updateValidateStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        if (this.validateControl.dirty || this.validateControl.touched) {
            this.controlStatus = status;
            this.setControlClassMap();
        }
        else {
            this.controlStatus = null;
            this.setControlClassMap();
        }
    };
    /**
     * @return {?}
     */
    DwFormControlComponent.prototype.watchControl = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.subscribe(function (data) { return _this.updateValidateStatus(data); });
        }
    };
    /**
     * @return {?}
     */
    DwFormControlComponent.prototype.setControlClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.validateString === 'warning',
            _a["is-validating"] = this.validateString === 'validating' || this.validateString === 'pending' || this.controlStatus === 'PENDING',
            _a["has-error"] = this.validateString === 'error' || this.controlStatus === 'INVALID',
            _a["has-success"] = this.validateString === 'success' || this.controlStatus === 'VALID',
            _a["has-feedback"] = this.dwHasFeedback,
            _a);
    };
    /**
     * @return {?}
     */
    DwFormControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.setControlClassMap();
    };
    /**
     * @return {?}
     */
    DwFormControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeSubscribe();
    };
    /**
     * @return {?}
     */
    DwFormControlComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.watchControl();
        if (this.validateControl) {
            this.updateValidateStatus(this.validateControl.status);
        }
    };
    DwFormControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-form-control',
                    providers: [DwUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n  </span>\n  <ng-content select=\"dw-form-explain\"></ng-content>\n</div>",
                    host: {
                        '[class.ant-form-item-control-wrapper]': 'true'
                    },
                    styles: [":host {\n    display: block;\n  }"]
                }] }
    ];
    DwFormControlComponent.propDecorators = {
        validateControl: [{ type: ContentChild, args: [NgControl,] }],
        dwHasFeedback: [{ type: Input }],
        dwValidateStatus: [{ type: Input }]
    };
    return DwFormControlComponent;
}(DwColComponent));
export { DwFormControlComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZm9ybS9kdy1mb3JtLWNvbnRyb2wuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQWNkLGtEQUFjOzs7NkJBQ2pDLEtBQUs7OztJQU81QixzQkFDSSxpREFBYTs7OztRQUtqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7Ozs7UUFSRCxVQUNrQixLQUFjO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCOzs7T0FBQTtJQU1ELHNCQUNJLG9EQUFnQjs7Ozs7UUFEcEIsVUFDcUIsS0FBMkI7WUFDOUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdB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aW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3Q29sQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9kdy1jb2wuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1mb3JtLWNvbnRyb2wnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIER3VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctZm9ybS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXJdJzogJ3RydWUnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfWAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0Zvcm1Db250cm9sQ29tcG9uZW50IGV4dGVuZHMgRHdDb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX2hhc0ZlZWRiYWNrID0gZmFsc2U7XG4gIHZhbGlkYXRlQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xuICB2YWxpZGF0ZVN0cmluZzogc3RyaW5nO1xuICBjb250cm9sU3RhdHVzOiBzdHJpbmc7XG4gIGNvbnRyb2xDbGFzc01hcDtcbiAgQENvbnRlbnRDaGlsZChOZ0NvbnRyb2wpIHZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SGFzRmVlZGJhY2sodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNGZWVkYmFjayA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0hhc0ZlZWRiYWNrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNGZWVkYmFjaztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ZhbGlkYXRlU3RhdHVzKHZhbHVlOiBzdHJpbmcgfCBGb3JtQ29udHJvbCkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XG4gICAgICB0aGlzLmNvbnRyb2xTdGF0dXMgPSBudWxsO1xuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcbiAgICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNoYW5nZXMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsaWRhdGVTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNvbnRyb2wuZGlydHkgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2wudG91Y2hlZCkge1xuICAgICAgdGhpcy5jb250cm9sU3RhdHVzID0gc3RhdHVzO1xuICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sU3RhdHVzID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgd2F0Y2hDb250cm9sKCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XG4gICAgLyoqIG1pc3MgZGV0ZWN0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODg3ICoqL1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy51cGRhdGVWYWxpZGF0ZVN0YXR1cyhkYXRhKSk7XG4gICAgfVxuXG4gIH1cblxuICBzZXRDb250cm9sQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sQ2xhc3NNYXAgPSB7XG4gICAgICBbIGBoYXMtd2FybmluZ2AgXSAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnd2FybmluZycsXG4gICAgICBbIGBpcy12YWxpZGF0aW5nYCBdOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHwgdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8IHRoaXMuY29udHJvbFN0YXR1cyA9PT0gJ1BFTkRJTkcnLFxuICAgICAgWyBgaGFzLWVycm9yYCBdICAgIDogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ2Vycm9yJyB8fCB0aGlzLmNvbnRyb2xTdGF0dXMgPT09ICdJTlZBTElEJyxcbiAgICAgIFsgYGhhcy1zdWNjZXNzYCBdICA6IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdzdWNjZXNzJyB8fCB0aGlzLmNvbnRyb2xTdGF0dXMgPT09ICdWQUxJRCcsXG4gICAgICBbIGBoYXMtZmVlZGJhY2tgIF0gOiB0aGlzLmR3SGFzRmVlZGJhY2tcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbGlkYXRlU3RhdHVzKHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1cyk7XG4gICAgfVxuICB9XG59XG4iXX0=
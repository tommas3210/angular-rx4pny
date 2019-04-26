/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { DwStepComponent } from './dw-step.component';
export class DwStepsComponent {
    constructor() {
        this._status = 'process';
        this._current = 0;
        this._size = 'default';
        this._direction = 'horizontal';
        this._startIndex = 0;
        this.unsubscribe$ = new Subject();
        this.showProcessDot = false;
        this.updateChildrenSteps = () => {
            if (this.steps) {
                this.steps.toArray().forEach((step, index, arr) => {
                    Promise.resolve().then(() => {
                        step.outStatus = this.dwStatus;
                        step.showProcessDot = this.showProcessDot;
                        if (this.customProcessDotTemplate) {
                            step.customProcessTemplate = this.customProcessDotTemplate;
                        }
                        step.direction = this.dwDirection;
                        step.index = index + this.dwStartIndex;
                        step.currentIndex = this.dwCurrent;
                        step.last = arr.length === index + 1;
                        step.updateClassMap();
                    });
                });
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this._size = value;
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get dwSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwStartIndex(value) {
        this._startIndex = value;
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get dwStartIndex() {
        return this._startIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDirection(value) {
        this._direction = value;
        this.updateClassMap();
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get dwDirection() {
        return this._direction;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwProgressDot(value) {
        if (value instanceof TemplateRef) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = toBoolean(value);
        }
        this.updateChildrenSteps();
        this.updateClassMap();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    set dwStatus(status) {
        this._status = status;
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get dwStatus() {
        return this._status;
    }
    /**
     * @param {?} current
     * @return {?}
     */
    set dwCurrent(current) {
        this._current = current;
        this.updateChildrenSteps();
    }
    /**
     * @return {?}
     */
    get dwCurrent() {
        return this._current;
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        this.stepsClassMap = {
            [`ant-steps-${this.dwDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.dwDirection === 'horizontal',
            [`ant-steps-label-vertical`]: this.showProcessDot && (this.dwDirection === 'horizontal'),
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.dwSize === 'small'
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(this.updateChildrenSteps);
        }
    }
}
DwStepsComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-steps',
                preserveWhitespaces: false,
                template: "<div class=\"ant-steps\" [ngClass]=\"stepsClassMap\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
DwStepsComponent.propDecorators = {
    steps: [{ type: ContentChildren, args: [DwStepComponent,] }],
    dwSize: [{ type: Input }],
    dwStartIndex: [{ type: Input }],
    dwDirection: [{ type: Input }],
    dwProgressDot: [{ type: Input }],
    dwStatus: [{ type: Input }],
    dwCurrent: [{ type: Input }]
};
function DwStepsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwStepsComponent.prototype._status;
    /** @type {?} */
    DwStepsComponent.prototype._current;
    /** @type {?} */
    DwStepsComponent.prototype._size;
    /** @type {?} */
    DwStepsComponent.prototype._direction;
    /** @type {?} */
    DwStepsComponent.prototype._startIndex;
    /** @type {?} */
    DwStepsComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwStepsComponent.prototype.stepsClassMap;
    /** @type {?} */
    DwStepsComponent.prototype.showProcessDot;
    /** @type {?} */
    DwStepsComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    DwStepsComponent.prototype.steps;
    /** @type {?} */
    DwStepsComponent.prototype.updateChildrenSteps;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJzdGVwcy9kdy1zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFXdEQsTUFBTTs7dUJBQzRCLFNBQVM7d0JBQ3RCLENBQUM7cUJBQ1EsU0FBUzswQkFDQyxZQUFZOzJCQUM1QixDQUFDOzRCQUNBLElBQUksT0FBTyxFQUFROzhCQUd6QixLQUFLO21DQTRFQSxHQUFHLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtvQkFDaEQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO3dCQUMxQyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRTs0QkFDakMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQzt5QkFDNUQ7d0JBQ0QsSUFBSSxDQUFDLFNBQVMs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LENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM1RjtLQUNGOzs7WUEzSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxVQUFVO2dCQUMvQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixzR0FBZ0Q7YUFDakQ7OztvQkFZRSxlQUFlLFNBQUMsZUFBZTtxQkFFL0IsS0FBSzsyQkFTTCxLQUFLOzBCQVVMLEtBQUs7NEJBV0wsS0FBSzt1QkFZTCxLQUFLO3dCQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgRHdTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1zdGVwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIER3RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBEd1N0YXR1c1R5cGUgPSAnd2FpdCcgfCAncHJvY2VzcycgfCAnZmluaXNoJyB8ICdlcnJvcic7XG5leHBvcnQgdHlwZSBEd1NpemVUeXBlID0gJ2RlZmF1bHQnIHwgJ3NtYWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zdGVwcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1zdGVwcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdTdGVwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfc3RhdHVzOiBEd1N0YXR1c1R5cGUgPSAncHJvY2Vzcyc7XG4gIHByaXZhdGUgX2N1cnJlbnQgPSAwO1xuICBwcml2YXRlIF9zaXplOiBEd1NpemVUeXBlID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIF9kaXJlY3Rpb246IER3RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJztcbiAgcHJpdmF0ZSBfc3RhcnRJbmRleCA9IDA7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBzdGVwc0NsYXNzTWFwOiBvYmplY3Q7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG4gIGN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+LCBzdGF0dXM6IHN0cmluZywgaW5kZXg6IG51bWJlciB9PjtcbiAgQENvbnRlbnRDaGlsZHJlbihEd1N0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8RHdTdGVwQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBzZXQgZHdTaXplKHZhbHVlOiBEd1NpemVUeXBlKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd1NpemUoKTogRHdTaXplVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTdGFydEluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydEluZGV4ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBnZXQgZHdTdGFydEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0SW5kZXg7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdEaXJlY3Rpb24odmFsdWU6IER3RGlyZWN0aW9uVHlwZSkge1xuICAgIHRoaXMuX2RpcmVjdGlvbiA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIGdldCBkd0RpcmVjdGlvbigpOiBEd0RpcmVjdGlvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdQcm9ncmVzc0RvdCh2YWx1ZTogYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPiwgc3RhdHVzOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U3RhdHVzKHN0YXR1czogRHdTdGF0dXNUeXBlKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICB9XG5cbiAgZ2V0IGR3U3RhdHVzKCk6IER3U3RhdHVzVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0N1cnJlbnQoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudCA9IGN1cnJlbnQ7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBnZXQgZHdDdXJyZW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0ZXBzQ2xhc3NNYXAgPSB7XG4gICAgICBbIGBhbnQtc3RlcHMtJHt0aGlzLmR3RGlyZWN0aW9ufWAgXTogdHJ1ZSxcbiAgICAgIFsgYGFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsYCBdICAgOiB0aGlzLmR3RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsXG4gICAgICBbIGBhbnQtc3RlcHMtbGFiZWwtdmVydGljYWxgIF0gICAgIDogdGhpcy5zaG93UHJvY2Vzc0RvdCAmJiAodGhpcy5kd0RpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSxcbiAgICAgIFsgYGFudC1zdGVwcy1kb3RgIF0gICAgICAgICAgICAgICAgOiB0aGlzLnNob3dQcm9jZXNzRG90LFxuICAgICAgWyAnYW50LXN0ZXBzLXNtYWxsJyBdICAgICAgICAgICAgICA6IHRoaXMuZHdTaXplID09PSAnc21hbGwnXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUNoaWxkcmVuU3RlcHMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcbiAgICAgIHRoaXMuc3RlcHMudG9BcnJheSgpLmZvckVhY2goKHN0ZXAsIGluZGV4LCBhcnIpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc3RlcC5vdXRTdGF0dXMgPSB0aGlzLmR3U3RhdHVzO1xuICAgICAgICAgIHN0ZXAuc2hvd1Byb2Nlc3NEb3QgPSB0aGlzLnNob3dQcm9jZXNzRG90O1xuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSkge1xuICAgICAgICAgICAgc3RlcC5jdXN0b21Qcm9jZXNzVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RlcC5kaXJlY3Rpb24gPSB0aGlzLmR3RGlyZWN0aW9uO1xuICAgICAgICAgIHN0ZXAuaW5kZXggPSBpbmRleCArIHRoaXMuZHdTdGFydEluZGV4O1xuICAgICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gdGhpcy5kd0N1cnJlbnQ7XG4gICAgICAgICAgc3RlcC5sYXN0ID0gYXJyLmxlbmd0aCA9PT0gaW5kZXggKyAxO1xuICAgICAgICAgIHN0ZXAudXBkYXRlQ2xhc3NNYXAoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgICBpZiAodGhpcy5zdGVwcykge1xuICAgICAgIHRoaXMuc3RlcHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMpO1xuICAgIH1cbiAgfVxufVxuIl19
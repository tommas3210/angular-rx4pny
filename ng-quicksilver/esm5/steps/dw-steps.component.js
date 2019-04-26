/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { DwStepComponent } from './dw-step.component';
var DwStepsComponent = /** @class */ (function () {
    function DwStepsComponent() {
        var _this = this;
        this._status = 'process';
        this._current = 0;
        this._size = 'default';
        this._direction = 'horizontal';
        this._startIndex = 0;
        this.unsubscribe$ = new Subject();
        this.showProcessDot = false;
        this.updateChildrenSteps = function () {
            if (_this.steps) {
                _this.steps.toArray().forEach(function (step, index, arr) {
                    Promise.resolve().then(function () {
                        step.outStatus = _this.dwStatus;
                        step.showProcessDot = _this.showProcessDot;
                        if (_this.customProcessDotTemplate) {
                            step.customProcessTemplate = _this.customProcessDotTemplate;
                        }
                        step.direction = _this.dwDirection;
                        step.index = index + _this.dwStartIndex;
                        step.currentIndex = _this.dwCurrent;
                        step.last = arr.length === index + 1;
                        step.updateClassMap();
                    });
                });
            }
        };
    }
    Object.defineProperty(DwStepsComponent.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepsComponent.prototype, "dwStartIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._startIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startIndex = value;
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepsComponent.prototype, "dwDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._direction;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._direction = value;
            this.updateClassMap();
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepsComponent.prototype, "dwProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepsComponent.prototype, "dwStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepsComponent.prototype, "dwCurrent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._current;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._current = current;
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwStepsComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.stepsClassMap = (_a = {},
            _a["ant-steps-" + this.dwDirection] = true,
            _a["ant-steps-label-horizontal"] = this.dwDirection === 'horizontal',
            _a["ant-steps-label-vertical"] = this.showProcessDot && (this.dwDirection === 'horizontal'),
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.dwSize === 'small',
            _a);
    };
    /**
     * @return {?}
     */
    DwStepsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    DwStepsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    DwStepsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(this.updateChildrenSteps);
        }
    };
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
    return DwStepsComponent;
}());
export { DwStepsComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJzdGVwcy9kdy1zdGVwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFHTCxTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7dUJBWXBCLFNBQVM7d0JBQ3RCLENBQUM7cUJBQ1EsU0FBUzswQkFDQyxZQUFZOzJCQUM1QixDQUFDOzRCQUNBLElBQUksT0FBTyxFQUFROzhCQUd6QixLQUFLO21DQTRFQTtZQUNwQixJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUc7b0JBQzVDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO3dCQUMxQyxJQUFJLEtBQUksQ0FBQyx3QkFBd0IsRUFBRTs0QkFDakMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQzt5QkFDNUQ7d0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO3dCQUNsQyxJQUFJLENB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QztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsNkNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUM1RjtLQUNGOztnQkEzSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxVQUFVO29CQUMvQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixzR0FBZ0Q7aUJBQ2pEOzs7d0JBWUUsZUFBZSxTQUFDLGVBQWU7eUJBRS9CLEtBQUs7K0JBU0wsS0FBSzs4QkFVTCxLQUFLO2dDQVdMLEtBQUs7MkJBWUwsS0FBSzs0QkFVTCxLQUFLOzsyQkE1RlI7O1NBMkJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBEd1N0ZXBDb21wb25lbnQgfSBmcm9tICcuL2R3LXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgRHdEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIER3U3RhdHVzVHlwZSA9ICd3YWl0JyB8ICdwcm9jZXNzJyB8ICdmaW5pc2gnIHwgJ2Vycm9yJztcbmV4cG9ydCB0eXBlIER3U2l6ZVR5cGUgPSAnZGVmYXVsdCcgfCAnc21hbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXN0ZXBzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXN0ZXBzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1N0ZXBzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9zdGF0dXM6IER3U3RhdHVzVHlwZSA9ICdwcm9jZXNzJztcbiAgcHJpdmF0ZSBfY3VycmVudCA9IDA7XG4gIHByaXZhdGUgX3NpemU6IER3U2l6ZVR5cGUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX2RpcmVjdGlvbjogRHdEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnO1xuICBwcml2YXRlIF9zdGFydEluZGV4ID0gMDtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHN0ZXBzQ2xhc3NNYXA6IG9iamVjdDtcbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD4sIHN0YXR1czogc3RyaW5nLCBpbmRleDogbnVtYmVyIH0+O1xuICBAQ29udGVudENoaWxkcmVuKER3U3RlcENvbXBvbmVudCkgc3RlcHM6IFF1ZXJ5TGlzdDxEd1N0ZXBDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIHNldCBkd1NpemUodmFsdWU6IER3U2l6ZVR5cGUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3U2l6ZSgpOiBEd1NpemVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1N0YXJ0SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0YXJ0SW5kZXggPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIGdldCBkd1N0YXJ0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRJbmRleDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RpcmVjdGlvbih2YWx1ZTogRHdEaXJlY3Rpb25UeXBlKSB7XG4gICAgdGhpcy5fZGlyZWN0aW9uID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICB9XG5cbiAgZ2V0IGR3RGlyZWN0aW9uKCk6IER3RGlyZWN0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Byb2dyZXNzRG90KHZhbHVlOiBib29sZWFuIHwgVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+LCBzdGF0dXM6IHN0cmluZywgaW5kZXg6IG51bWJlciB9Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1Byb2Nlc3NEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTdGF0dXMoc3RhdHVzOiBEd1N0YXR1c1R5cGUpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBnZXQgZHdTdGF0dXMoKTogRHdTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q3VycmVudChjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdXJyZW50ID0gY3VycmVudDtcbiAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuU3RlcHMoKTtcbiAgfVxuXG4gIGdldCBkd0N1cnJlbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcbiAgfVxuXG4gIHVwZGF0ZUNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuc3RlcHNDbGFzc01hcCA9IHtcbiAgICAgIFsgYGFudC1zdGVwcy0ke3RoaXMuZHdEaXJlY3Rpb259YCBdOiB0cnVlLFxuICAgICAgWyBgYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWxgIF0gICA6IHRoaXMuZHdEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcbiAgICAgIFsgYGFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbGAgXSAgICAgOiB0aGlzLnNob3dQcm9jZXNzRG90ICYmICh0aGlzLmR3RGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpLFxuICAgICAgWyBgYW50LXN0ZXBzLWRvdGAgXSAgICAgICAgICAgICAgICA6IHRoaXMuc2hvd1Byb2Nlc3NEb3QsXG4gICAgICBbICdhbnQtc3RlcHMtc21hbGwnIF0gICAgICAgICAgICAgIDogdGhpcy5kd1NpemUgPT09ICdzbWFsbCdcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ2hpbGRyZW5TdGVwcyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGVwcykge1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcCwgaW5kZXgsIGFycikgPT4ge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzdGVwLm91dFN0YXR1cyA9IHRoaXMuZHdTdGF0dXM7XG4gICAgICAgICAgc3RlcC5zaG93UHJvY2Vzc0RvdCA9IHRoaXMuc2hvd1Byb2Nlc3NEb3Q7XG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBzdGVwLmN1c3RvbVByb2Nlc3NUZW1wbGF0ZSA9IHRoaXMuY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGVwLmRpcmVjdGlvbiA9IHRoaXMuZHdEaXJlY3Rpb247XG4gICAgICAgICAgc3RlcC5pbmRleCA9IGluZGV4ICsgdGhpcy5kd1N0YXJ0SW5kZXg7XG4gICAgICAgICAgc3RlcC5jdXJyZW50SW5kZXggPSB0aGlzLmR3Q3VycmVudDtcbiAgICAgICAgICBzdGVwLmxhc3QgPSBhcnIubGVuZ3RoID09PSBpbmRleCArIDE7XG4gICAgICAgICAgc3RlcC51cGRhdGVDbGFzc01hcCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcygpO1xuICAgIGlmICh0aGlzLnN0ZXBzKSB7XG4gICAgICAgdGhpcy5zdGVwcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHRoaXMudXBkYXRlQ2hpbGRyZW5TdGVwcyk7XG4gICAgfVxuICB9XG59XG4iXX0=
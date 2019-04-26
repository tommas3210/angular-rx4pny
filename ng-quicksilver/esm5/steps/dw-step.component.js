/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
var DwStepComponent = /** @class */ (function () {
    function DwStepComponent(elementRef, dwUpdateHostClassService) {
        this.elementRef = elementRef;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this._status = 'wait';
        this._currentIndex = 0;
        this.isCustomStatus = false;
        this.isDescriptionString = true;
        this.isTitleString = true;
        this.isIconString = true;
        this.last = false;
        this.showProcessDot = false;
        this.direction = 'horizontal';
        this.outStatus = 'process';
        this.index = 0;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(DwStepComponent.prototype, "dwTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepComponent.prototype, "dwIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isIconString = !(value instanceof TemplateRef);
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepComponent.prototype, "dwStatus", {
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
            this.isCustomStatus = true;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepComponent.prototype, "dwDescription", {
        get: /**
         * @return {?}
         */
        function () {
            return this._description;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isDescriptionString = !(value instanceof TemplateRef);
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                if (current > this.index) {
                    this._status = 'finish';
                }
                else if (current === this.index) {
                    if (this.outStatus) {
                        this._status = this.outStatus;
                    }
                }
                else {
                    this._status = 'wait';
                }
            }
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwStepComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a['ant-steps-item'] = true,
            _a["ant-steps-item-wait"] = this.dwStatus === 'wait',
            _a["ant-steps-item-process"] = this.dwStatus === 'process',
            _a["ant-steps-item-finish"] = this.dwStatus === 'finish',
            _a["ant-steps-item-error"] = this.dwStatus === 'error',
            _a['ant-steps-custom'] = !!this.dwIcon,
            _a['ant-steps-next-error'] = (this.outStatus === 'error') && (this.currentIndex === this.index + 1),
            _a);
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    DwStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-step',
                    providers: [DwUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n</ng-template>\n<ng-template #descriptionTemplate>\n  <ng-template [ngTemplateOutlet]=\"dwDescription\"></ng-template>\n</ng-template>\n<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n<div class=\"ant-steps-item-icon\">\n  <ng-template [ngIf]=\"!showProcessDot\">\n    <span class=\"ant-steps-icon anticon anticon-check\" *ngIf=\"dwStatus === 'finish' && !dwIcon\"></span>\n    <span class=\"ant-steps-icon anticon anticon-cross\" *ngIf=\"dwStatus === 'error'\"></span>\n    <span class=\"ant-steps-icon\" *ngIf=\"(dwStatus === 'process' || dwStatus === 'wait') && !dwIcon\">{{ index + 1 }}</span>\n    <span class=\"ant-steps-icon\" *ngIf=\"dwIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i [ngClass]=\"dwIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n      <ng-template [ngTemplateOutlet]=\"dwIcon\"></ng-template>\n    </ng-template>\n    </span>\n  </ng-template>\n  <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:dwStatus, index:index }\"></ng-template>\n    </span>\n  </ng-template>\n</div>\n<div class=\"ant-steps-item-content\">\n  <div class=\"ant-steps-item-title\">\n    <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n  </div>\n  <div class=\"ant-steps-item-description\">\n    <ng-container *ngIf=\"isDescriptionString; else descriptionTemplate\">{{ dwDescription }}</ng-container>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwStepComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DwUpdateHostClassService }
    ]; };
    DwStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        dwTitle: [{ type: Input }],
        dwIcon: [{ type: Input }],
        dwStatus: [{ type: Input }],
        dwDescription: [{ type: Input }]
    };
    return DwStepComponent;
}());
export { DwStepComponent };
function DwStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwStepComponent.prototype._status;
    /** @type {?} */
    DwStepComponent.prototype._currentIndex;
    /** @type {?} */
    DwStepComponent.prototype._description;
    /** @type {?} */
    DwStepComponent.prototype._icon;
    /** @type {?} */
    DwStepComponent.prototype._title;
    /** @type {?} */
    DwStepComponent.prototype.el;
    /** @type {?} */
    DwStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    DwStepComponent.prototype.isDescriptionString;
    /** @type {?} */
    DwStepComponent.prototype.isTitleString;
    /** @type {?} */
    DwStepComponent.prototype.isIconString;
    /** @type {?} */
    DwStepComponent.prototype.last;
    /** @type {?} */
    DwStepComponent.prototype.showProcessDot;
    /** @type {?} */
    DwStepComponent.prototype.direction;
    /** @type {?} */
    DwStepComponent.prototype.outStatus;
    /** @type {?} */
    DwStepComponent.prototype.index;
    /** @type {?} */
    DwStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    DwStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    DwStepComponent.prototype.elementRef;
    /** @type {?} */
    DwStepComponent.prototype.dwUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInN0ZXBzL2R3LXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUF3R3BGLHlCQUFvQixVQUFzQixFQUFVLHdCQUFrRDtRQUFsRixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjt1QkE1RnBGLE1BQU07NkJBQ0EsQ0FBQzs4QkFLUixLQUFLO21DQUNBLElBQUk7NkJBQ1YsSUFBSTs0QkFDTCxJQUFJO29CQUNaLEtBQUs7OEJBQ0ssS0FBSzt5QkFDVixZQUFZO3lCQUNaLFNBQVM7cUJBQ2IsQ0FBQztRQStFUCxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDcEM7SUE1RUQsc0JBQ0ksb0NBQU87Ozs7UUFLWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFSRCxVQUNZLEtBQWlDO1lBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7O09BQUE7SUFNRCxzQkFDSSxtQ0FBTTs7OztRQUtWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVJELFVBQ1csS0FBMEM7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCOzs7T0FBQTtJQU1ELHNCQUNJLHFDQUFROzs7O1FBTVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBVEQsVUFDYSxNQUFjO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2Qjs7O09BQUE7SUFNRCxzQkFDSSwwQ0FBYTs7OztRQUtqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7Ozs7UUFSRCxVQUNrQixLQUFpQztZQUNqRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjs7O09BQUE7SUFNRCxzQkFBSSx5Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjs7Ozs7UUFFRCxVQUFpQixPQUFlO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztpQkFDekI7cUJBQU0sSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQy9CO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2lCQUN2QjthQUNGO1lBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3ZCOzs7T0FoQkE7Ozs7SUFrQkQsd0NBQWM7OztJQUFkOzs7UUFDRSxJQUFNLFFBQVE7WUFDWixHQUFFLGdCQUFnQixJQUFZLElBQUk7WUFDbEMsR0FBRSxxQkFBcUIsSUFBTyxJQUFJLENBQUMsUUFBUSxLQUFLLE1BQU07WUFDdEQsR0FBRSx3QkFBd0IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVM7WUFDekQsR0FBRSx1QkFBdUIsSUFBSyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVE7WUFDeEQsR0FBRSxzQkFBc0IsSUFBTSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU87WUFDdkQsR0FBRSxrQkFBa0IsSUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDM0MsR0FBRSxzQkFBc0IsSUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNwRztRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsRTs7Z0JBakdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsU0FBUztvQkFDOUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDB5REFBK0M7aUJBQ2hEOzs7O2dCQWhCQyxVQUFVO2dCQU1ILHdCQUF3Qjs7O3FDQTJCOUIsU0FBUyxTQUFDLG9CQUFvQjswQkFHOUIsS0FBSzt5QkFVTCxLQUFLOzJCQVVMLEtBQUs7Z0NBV0wsS0FBSzs7MEJBckVSOztTQW1CYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IHR5cGUgU3RlcE5nQ2xhc3NUeXBlID0gc3RyaW5nIHwgc3RyaW5nW10gfCBTZXQ8c3RyaW5nPiB8IHsgWyBrbGFzczogc3RyaW5nIF06IGFueTsgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zdGVwJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXN0ZXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3U3RlcENvbXBvbmVudCB7XG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4ID0gMDtcbiAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF9pY29uOiBTdGVwTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgaXNDdXN0b21TdGF0dXMgPSBmYWxzZTtcbiAgaXNEZXNjcmlwdGlvblN0cmluZyA9IHRydWU7XG4gIGlzVGl0bGVTdHJpbmcgPSB0cnVlO1xuICBpc0ljb25TdHJpbmcgPSB0cnVlO1xuICBsYXN0ID0gZmFsc2U7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG4gIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgb3V0U3RhdHVzID0gJ3Byb2Nlc3MnO1xuICBpbmRleCA9IDA7XG4gIEBWaWV3Q2hpbGQoJ3Byb2Nlc3NEb3RUZW1wbGF0ZScpIHByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIGN1c3RvbVByb2Nlc3NUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFRlbXBsYXRlUmVmPHZvaWQ+LCBzdGF0dXM6IHN0cmluZywgaW5kZXg6IG51bWJlciB9PjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdUaXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzVGl0bGVTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdUaXRsZSgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SWNvbih2YWx1ZTogU3RlcE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzSWNvblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5faWNvbiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3SWNvbigpOiBTdGVwTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5pc0N1c3RvbVN0YXR1cyA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3U3RhdHVzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNEZXNjcmlwdGlvblN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0Rlc2NyaXB0aW9uKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRJbmRleDtcbiAgfVxuXG4gIHNldCBjdXJyZW50SW5kZXgoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudEluZGV4ID0gY3VycmVudDtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcbiAgICAgIGlmIChjdXJyZW50ID4gdGhpcy5pbmRleCkge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnZmluaXNoJztcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gdGhpcy5pbmRleCkge1xuICAgICAgICBpZiAodGhpcy5vdXRTdGF0dXMpIHtcbiAgICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLm91dFN0YXR1cztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJ3dhaXQnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1zdGVwcy1pdGVtJyBdICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtc3RlcHMtaXRlbS13YWl0YCBdICAgOiB0aGlzLmR3U3RhdHVzID09PSAnd2FpdCcsXG4gICAgICBbIGBhbnQtc3RlcHMtaXRlbS1wcm9jZXNzYCBdOiB0aGlzLmR3U3RhdHVzID09PSAncHJvY2VzcycsXG4gICAgICBbIGBhbnQtc3RlcHMtaXRlbS1maW5pc2hgIF0gOiB0aGlzLmR3U3RhdHVzID09PSAnZmluaXNoJyxcbiAgICAgIFsgYGFudC1zdGVwcy1pdGVtLWVycm9yYCBdICA6IHRoaXMuZHdTdGF0dXMgPT09ICdlcnJvcicsXG4gICAgICBbICdhbnQtc3RlcHMtY3VzdG9tJyBdICAgICAgOiAhIXRoaXMuZHdJY29uLFxuICAgICAgWyAnYW50LXN0ZXBzLW5leHQtZXJyb3InIF0gIDogKHRoaXMub3V0U3RhdHVzID09PSAnZXJyb3InKSAmJiAodGhpcy5jdXJyZW50SW5kZXggPT09IHRoaXMuaW5kZXggKyAxKVxuICAgIH07XG4gICAgdGhpcy5kd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBkd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==
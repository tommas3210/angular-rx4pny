/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
var DwProgressComponent = /** @class */ (function () {
    function DwProgressComponent() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = function (percent) { return percent + "%"; };
        this.isStatusSet = false;
        this.isStrokeWidthSet = false;
        this.isFormatSet = false;
        this.isGapDegreeSet = false;
        this.isGapPositionSet = false;
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.dwShowInfo = true;
        this.dwWidth = 132;
        this.dwSuccessPercent = 0;
    }
    Object.defineProperty(DwProgressComponent.prototype, "dwSize", {
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
            if (this.dwSize === 'small' && !this.isStrokeWidthSet) {
                this._strokeWidth = 6;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "dwFormat", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.isFormatSet = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "dwPercent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = value;
            if (isNotNil(value)) {
                /** @type {?} */
                var fillAll = parseInt(value.toString(), 10) >= 100;
                if (fillAll && !this.isStatusSet) {
                    this._status = 'success';
                }
                else {
                    this._status = this._cacheStatus;
                }
                this.updatePathStyles();
                this.updateIconClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "dwStrokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._strokeWidth = value;
                this.isStrokeWidthSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "dwStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._status = value;
                this._cacheStatus = value;
                this.isStatusSet = true;
                this.updateIconClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "dwType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            if (!this.isStrokeWidthSet) {
                if (this.dwType !== 'line') {
                    this._strokeWidth = 6;
                }
            }
            if (this.dwType === 'dashboard') {
                if (!this.isGapPositionSet) {
                    this._gapPosition = 'bottom';
                }
                if (!this.isGapDegreeSet) {
                    this._gapDegree = 75;
                }
            }
            this.updateIconClassMap();
            this.updatePathStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "dwGapDegree", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapDegree;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapDegree = value;
                this.isGapDegreeSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "dwGapPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapPosition = value;
                this.isGapPositionSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwProgressComponent.prototype, "isCirCleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwType === 'circle' || this.dwType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwProgressComponent.prototype.updatePathStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var radius = 50 - (this.dwStrokeWidth / 2);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
        switch (this.dwGapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: len - this.dwGapDegree + "px " + len + "px",
            strokeDashoffset: "-" + this.dwGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: (this.dwPercent / 100) * (len - this.dwGapDegree) + "px " + len + "px",
            strokeDashoffset: "-" + this.dwGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    };
    /**
     * @return {?}
     */
    DwProgressComponent.prototype.updateIconClassMap = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCircle = (this.dwType === 'circle' || this.dwType === 'dashboard');
        this.iconClassMap = {
            'anticon-check': (this.dwStatus === 'success') && isCircle,
            'anticon-cross': (this.dwStatus === 'exception') && isCircle,
            'anticon-check-circle': (this.dwStatus === 'success') && !isCircle,
            'anticon-cross-circle': (this.dwStatus === 'exception') && !isCircle
        };
    };
    /**
     * @return {?}
     */
    DwProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePathStyles();
        this.updateIconClassMap();
    };
    DwProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-progress',
                    preserveWhitespaces: false,
                    template: "<ng-template #progressInfoTemplate>\n  <span class=\"ant-progress-text\" *ngIf=\"dwShowInfo\">\n    <ng-container *ngIf=\"(dwStatus=='exception')||(dwStatus=='success')&&(!isFormatSet); else formatTemplate\">\n      <i class=\"anticon\" [ngClass]=\"iconClassMap\"></i>\n    </ng-container>\n    <ng-template #formatTemplate>\n      {{ dwFormat(dwPercent) }}\n    </ng-template>\n  </span>\n</ng-template>\n<div [ngClass]=\"'ant-progress ant-progress-status-'+dwStatus\"\n  [class.ant-progress-line]=\"dwType=='line'\"\n  [class.ant-progress-small]=\"dwSize=='small'\"\n  [class.ant-progress-show-info]=\"dwShowInfo\"\n  [class.ant-progress-circle]=\"isCirCleStyle\">\n  <div *ngIf=\"dwType=='line'\">\n    <div class=\"ant-progress-outer\">\n      <div class=\"ant-progress-inner\">\n        <div class=\"ant-progress-bg\" [style.width.%]=\"dwPercent\" [style.height.px]=\"dwStrokeWidth\"></div>\n        <div class=\"ant-progress-success-bg\" [style.width.%]=\"dwSuccessPercent\" [style.height.px]=\"dwStrokeWidth\"></div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n  <div\n    [style.width.px]=\"this.dwWidth\"\n    [style.height.px]=\"this.dwWidth\"\n    [style.fontSize.px]=\"this.dwWidth*0.15+6\"\n    class=\"ant-progress-inner\"\n    *ngIf=\"isCirCleStyle\">\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n      <path\n        class=\"ant-progress-circle-trail\"\n        stroke=\"#f3f3f3\"\n        fill-opacity=\"0\"\n        [attr.stroke-width]=\"dwStrokeWidth\"\n        [ngStyle]=\"trailPathStyle\"\n        [attr.d]=\"pathString\">\n      </path>\n      <path\n        class=\"ant-progress-circle-path\"\n        [attr.d]=\"pathString\"\n        stroke-linecap=\"round\"\n        fill-opacity=\"0\"\n        [attr.stroke]=\"statusColorMap[dwStatus]\"\n        [attr.stroke-width]=\"dwPercent?dwStrokeWidth:0\"\n        [ngStyle]=\"strokePathStyle\">\n      </path>\n    </svg>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n</div>"
                }] }
    ];
    DwProgressComponent.propDecorators = {
        dwShowInfo: [{ type: Input }],
        dwWidth: [{ type: Input }],
        dwSuccessPercent: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwFormat: [{ type: Input }],
        dwPercent: [{ type: Input }],
        dwStrokeWidth: [{ type: Input }],
        dwStatus: [{ type: Input }],
        dwType: [{ type: Input }],
        dwGapDegree: [{ type: Input }],
        dwGapPosition: [{ type: Input }]
    };
    return DwProgressComponent;
}());
export { DwProgressComponent };
function DwProgressComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwProgressComponent.prototype._gapDegree;
    /** @type {?} */
    DwProgressComponent.prototype._gapPosition;
    /** @type {?} */
    DwProgressComponent.prototype._percent;
    /** @type {?} */
    DwProgressComponent.prototype._status;
    /** @type {?} */
    DwProgressComponent.prototype._cacheStatus;
    /** @type {?} */
    DwProgressComponent.prototype._strokeWidth;
    /** @type {?} */
    DwProgressComponent.prototype._size;
    /** @type {?} */
    DwProgressComponent.prototype._type;
    /** @type {?} */
    DwProgressComponent.prototype._format;
    /** @type {?} */
    DwProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    DwProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    DwProgressComponent.prototype.pathString;
    /** @type {?} */
    DwProgressComponent.prototype.iconClassMap;
    /** @type {?} */
    DwProgressComponent.prototype.isStatusSet;
    /** @type {?} */
    DwProgressComponent.prototype.isStrokeWidthSet;
    /** @type {?} */
    DwProgressComponent.prototype.isFormatSet;
    /** @type {?} */
    DwProgressComponent.prototype.isGapDegreeSet;
    /** @type {?} */
    DwProgressComponent.prototype.isGapPositionSet;
    /** @type {?} */
    DwProgressComponent.prototype.statusColorMap;
    /** @type {?} */
    DwProgressComponent.prototype.dwShowInfo;
    /** @type {?} */
    DwProgressComponent.prototype.dwWidth;
    /** @type {?} */
    DwProgressComponent.prototype.dwSuccessPercent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJwcm9ncmVzcy9kdy1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OzBCQVF2QixDQUFDOzRCQUM0QixLQUFLO3dCQUNwQyxDQUFDO3VCQUNvQixRQUFROzRCQUNILFFBQVE7NEJBQzlCLENBQUM7cUJBQ1IsU0FBUztxQkFDVyxNQUFNO3VCQUN4QixVQUFDLE9BQWUsSUFBYSxPQUFHLE9BQU8sTUFBRyxFQUFiLENBQWE7MkJBSzlDLEtBQUs7Z0NBQ0EsS0FBSzsyQkFDVixLQUFLOzhCQUNGLEtBQUs7Z0NBQ0gsS0FBSzs4QkFDUDtZQUNmLE1BQU0sRUFBSyxTQUFTO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBSSxTQUFTO1NBQ3JCOzBCQUNxQixJQUFJO3VCQUNQLEdBQUc7Z0NBQ00sQ0FBQzs7SUFFN0Isc0JBQ0ksdUNBQU07Ozs7UUFPVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUFWRCxVQUNXLEtBQWE7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjs7O09BQUE7SUFNRCxzQkFDSSx5Q0FBUTs7OztRQU9aO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVZELFVBQ2EsS0FBa0M7WUFDN0MsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUN6QjtTQUNGOzs7T0FBQTtJQU1ELHNCQUNJLDBDQUFTOzs7O1FBY2I7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBakJELFVBQ2MsS0FBYTtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTs7Z0JBQ25CLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDO2dCQUN0RCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7aUJBQ2xDO2dCQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtTQUNGOzs7T0FBQTtJQU1ELHNCQUNJLDhDQUFhOzs7O1FBUWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCOzs7OztRQVhELFVBQ2tCLEtBQWE7WUFDN0IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtTQUNGOzs7T0FBQTtJQU1ELHNCQUNJLHlDQUFROzs7O1FBU1o7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBWkQsVUFDYSxLQUEyQjtZQUN0QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDM0I7U0FDRjs7O09BQUE7SUFNRCxzQkFDSSx1Q0FBTTs7OztRQW1CVjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjs7Ozs7UUF0QkQsVUFDVyxLQUF5QjtZQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO29CQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztpQkFDdkI7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO2lCQUM5QjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6Qjs7O09BQUE7SUFNRCxzQkFDSSw0Q0FBVzs7OztRQVNmO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7OztRQVpELFVBQ2dCLEtBQWE7WUFDM0IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7U0FFRjs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBYTs7OztRQVFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7Ozs7UUFYRCxVQUNrQixLQUFnQztZQUNoRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1NBQ0Y7OztPQUFBO0lBTUQsc0JBQUksOENBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO1NBQ2hFOzs7T0FBQTs7OztJQUVELDhDQUFnQjs7O0lBQWhCOztRQUNFLElBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQzdDLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQzs7UUFDdkIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUM7O1FBQzdCLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQzs7UUFDckIsSUFBSSxZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLFFBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMxQixLQUFLLE1BQU07Z0JBQ1QsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUN6QixjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLGNBQWMsR0FBRyxNQUFNLENBQUM7Z0JBQ3hCLFlBQVksR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1IsUUFBUTtTQUNUO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFhLGNBQWMsU0FBSSxjQUFjLGlCQUMxRCxNQUFNLFNBQUksTUFBTSxlQUFVLFlBQVksU0FBSSxDQUFDLFlBQVksaUJBQ3ZELE1BQU0sU0FBSSxNQUFNLGVBQVUsQ0FBQyxZQUFZLFNBQUksWUFBYyxDQUFDOztRQUMvRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixlQUFlLEVBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLFdBQU0sR0FBRyxPQUFJO1lBQ3hELGdCQUFnQixFQUFFLE1BQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLE9BQUk7WUFDOUMsVUFBVSxFQUFRLHlFQUF5RTtTQUM1RixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNyQixlQUFlLEVBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBTSxHQUFHLE9BQUk7WUFDbkYsZ0JBQWdCLEVBQUUsTUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsT0FBSTtZQUM5QyxVQUFVLEVBQVEscUdBQXFHO1NBQ3hILENBQUM7S0FDSDs7OztJQUVELGdEQUFrQjs7O0lBQWxCOztRQUNFLElBQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLGVBQWUsRUFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLElBQUksUUFBUTtZQUNqRSxlQUFlLEVBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxJQUFJLFFBQVE7WUFDbkUsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNsRSxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQ3JFLENBQUM7S0FDSDs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOztnQkFwTkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxhQUFhO29CQUNsQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQix1aUVBQW1EO2lCQUNwRDs7OzZCQXlCRSxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSzt5QkFFTCxLQUFLOzJCQVlMLEtBQUs7NEJBWUwsS0FBSztnQ0FtQkwsS0FBSzsyQkFhTCxLQUFLO3lCQWNMLEtBQUs7OEJBd0JMLEtBQUs7Z0NBY0wsS0FBSzs7OEJBeEpSOztTQWdCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIER3UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbmV4cG9ydCB0eXBlIER3UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2V4Y2VwdGlvbicgfCAnYWN0aXZlJyB8ICdub3JtYWwnO1xuZXhwb3J0IHR5cGUgRHdQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnIHwgJ2NpcmNsZScgfCAnZGFzaGJvYXJkJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1wcm9ncmVzcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2dhcERlZ3JlZSA9IDA7XG4gIHByaXZhdGUgX2dhcFBvc2l0aW9uOiBEd1Byb2dyZXNzR2FwUG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gIHByaXZhdGUgX3BlcmNlbnQgPSAwO1xuICBwcml2YXRlIF9zdGF0dXM6IER3UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgX2NhY2hlU3RhdHVzOiBEd1Byb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIF9zdHJva2VXaWR0aCA9IDg7XG4gIHByaXZhdGUgX3NpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX3R5cGU6IER3UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwZXJjZW50fSVgO1xuICB0cmFpbFBhdGhTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBzdHJva2VQYXRoU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgcGF0aFN0cmluZzogc3RyaW5nO1xuICBpY29uQ2xhc3NNYXA7XG4gIGlzU3RhdHVzU2V0ID0gZmFsc2U7XG4gIGlzU3Ryb2tlV2lkdGhTZXQgPSBmYWxzZTtcbiAgaXNGb3JtYXRTZXQgPSBmYWxzZTtcbiAgaXNHYXBEZWdyZWVTZXQgPSBmYWxzZTtcbiAgaXNHYXBQb3NpdGlvblNldCA9IGZhbHNlO1xuICBzdGF0dXNDb2xvck1hcCA9IHtcbiAgICBub3JtYWwgICA6ICcjMTA4ZWU5JyxcbiAgICBleGNlcHRpb246ICcjZmY1NTAwJyxcbiAgICBzdWNjZXNzICA6ICcjODdkMDY4J1xuICB9O1xuICBASW5wdXQoKSBkd1Nob3dJbmZvID0gdHJ1ZTtcbiAgQElucHV0KCkgZHdXaWR0aCA9IDEzMjtcbiAgQElucHV0KCkgZHdTdWNjZXNzUGVyY2VudCA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmR3U2l6ZSA9PT0gJ3NtYWxsJyAmJiAhdGhpcy5pc1N0cm9rZVdpZHRoU2V0KSB7XG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3U2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Rm9ybWF0KHZhbHVlOiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNGb3JtYXRTZXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd0Zvcm1hdCgpOiAocGVyY2VudDogbnVtYmVyKSA9PiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdQZXJjZW50KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wZXJjZW50ID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgY29uc3QgZmlsbEFsbCA9IHBhcnNlSW50KHZhbHVlLnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XG4gICAgICBpZiAoZmlsbEFsbCAmJiAhdGhpcy5pc1N0YXR1c1NldCkge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSB0aGlzLl9jYWNoZVN0YXR1cztcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdQZXJjZW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTdHJva2VXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNTdHJva2VXaWR0aFNldCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1N0YXR1cyh2YWx1ZTogRHdQcm9ncmVzc1N0YXR1c1R5cGUpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2NhY2hlU3RhdHVzID0gdmFsdWU7XG4gICAgICB0aGlzLmlzU3RhdHVzU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3U3RhdHVzKCk6IER3UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHlwZSh2YWx1ZTogRHdQcm9ncmVzc1R5cGVUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5pc1N0cm9rZVdpZHRoU2V0KSB7XG4gICAgICBpZiAodGhpcy5kd1R5cGUgIT09ICdsaW5lJykge1xuICAgICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmR3VHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgIGlmICghdGhpcy5pc0dhcFBvc2l0aW9uU2V0KSB7XG4gICAgICAgIHRoaXMuX2dhcFBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNHYXBEZWdyZWVTZXQpIHtcbiAgICAgICAgdGhpcy5fZ2FwRGVncmVlID0gNzU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gIH1cblxuICBnZXQgZHdUeXBlKCk6IER3UHJvZ3Jlc3NUeXBlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdHYXBEZWdyZWUodmFsdWU6IG51bWJlcikge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2dhcERlZ3JlZSA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0dhcERlZ3JlZVNldCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB9XG5cbiAgfVxuXG4gIGdldCBkd0dhcERlZ3JlZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9nYXBEZWdyZWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdHYXBQb3NpdGlvbih2YWx1ZTogRHdQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2dhcFBvc2l0aW9uID0gdmFsdWU7XG4gICAgICB0aGlzLmlzR2FwUG9zaXRpb25TZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3R2FwUG9zaXRpb24oKTogRHdQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhcFBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IGlzQ2lyQ2xlU3R5bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLmR3VHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gIH1cblxuICB1cGRhdGVQYXRoU3R5bGVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gKHRoaXMuZHdTdHJva2VXaWR0aCAvIDIpO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcbiAgICBsZXQgZW5kUG9zaXRpb25YID0gMDtcbiAgICBsZXQgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogLTI7XG4gICAgc3dpdGNoICh0aGlzLmR3R2FwUG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XG4gICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gICAgdGhpcy50cmFpbFBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheSA6IGAke2xlbiAtIHRoaXMuZHdHYXBEZWdyZWV9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke3RoaXMuZHdHYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb24gICAgICA6ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcbiAgICB9O1xuICAgIHRoaXMuc3Ryb2tlUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5IDogYCR7KHRoaXMuZHdQZXJjZW50IC8gMTAwKSAqIChsZW4gLSB0aGlzLmR3R2FwRGVncmVlKX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7dGhpcy5kd0dhcERlZ3JlZSAvIDJ9cHhgLFxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH07XG4gIH1cblxuICB1cGRhdGVJY29uQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgaXNDaXJjbGUgPSAodGhpcy5kd1R5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMuZHdUeXBlID09PSAnZGFzaGJvYXJkJyk7XG4gICAgdGhpcy5pY29uQ2xhc3NNYXAgPSB7XG4gICAgICAnYW50aWNvbi1jaGVjaycgICAgICAgOiAodGhpcy5kd1N0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSAmJiBpc0NpcmNsZSxcbiAgICAgICdhbnRpY29uLWNyb3NzJyAgICAgICA6ICh0aGlzLmR3U3RhdHVzID09PSAnZXhjZXB0aW9uJykgJiYgaXNDaXJjbGUsXG4gICAgICAnYW50aWNvbi1jaGVjay1jaXJjbGUnOiAodGhpcy5kd1N0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSAmJiAhaXNDaXJjbGUsXG4gICAgICAnYW50aWNvbi1jcm9zcy1jaXJjbGUnOiAodGhpcy5kd1N0YXR1cyA9PT0gJ2V4Y2VwdGlvbicpICYmICFpc0NpcmNsZVxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xuICB9XG5cbn1cbiJdfQ==
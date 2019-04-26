/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class DwProgressComponent {
    constructor() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = (percent) => `${percent}%`;
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this._size = value;
        if (this.dwSize === 'small' && !this.isStrokeWidthSet) {
            this._strokeWidth = 6;
        }
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
    set dwFormat(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.isFormatSet = true;
        }
    }
    /**
     * @return {?}
     */
    get dwFormat() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPercent(value) {
        this._percent = value;
        if (isNotNil(value)) {
            /** @type {?} */
            const fillAll = parseInt(value.toString(), 10) >= 100;
            if (fillAll && !this.isStatusSet) {
                this._status = 'success';
            }
            else {
                this._status = this._cacheStatus;
            }
            this.updatePathStyles();
            this.updateIconClassMap();
        }
    }
    /**
     * @return {?}
     */
    get dwPercent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwStrokeWidth(value) {
        if (isNotNil(value)) {
            this._strokeWidth = value;
            this.isStrokeWidthSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get dwStrokeWidth() {
        return this._strokeWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwStatus(value) {
        if (isNotNil(value)) {
            this._status = value;
            this._cacheStatus = value;
            this.isStatusSet = true;
            this.updateIconClassMap();
        }
    }
    /**
     * @return {?}
     */
    get dwStatus() {
        return this._status;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwType(value) {
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
    }
    /**
     * @return {?}
     */
    get dwType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwGapDegree(value) {
        if (isNotNil(value)) {
            this._gapDegree = value;
            this.isGapDegreeSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get dwGapDegree() {
        return this._gapDegree;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwGapPosition(value) {
        if (isNotNil(value)) {
            this._gapPosition = value;
            this.isGapPositionSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get dwGapPosition() {
        return this._gapPosition;
    }
    /**
     * @return {?}
     */
    get isCirCleStyle() {
        return this.dwType === 'circle' || this.dwType === 'dashboard';
    }
    /**
     * @return {?}
     */
    updatePathStyles() {
        /** @type {?} */
        const radius = 50 - (this.dwStrokeWidth / 2);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
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
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
     a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
     a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: `${len - this.dwGapDegree}px ${len}px`,
            strokeDashoffset: `-${this.dwGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: `${(this.dwPercent / 100) * (len - this.dwGapDegree)}px ${len}px`,
            strokeDashoffset: `-${this.dwGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    }
    /**
     * @return {?}
     */
    updateIconClassMap() {
        /** @type {?} */
        const isCircle = (this.dwType === 'circle' || this.dwType === 'dashboard');
        this.iconClassMap = {
            'anticon-check': (this.dwStatus === 'success') && isCircle,
            'anticon-cross': (this.dwStatus === 'exception') && isCircle,
            'anticon-check-circle': (this.dwStatus === 'success') && !isCircle,
            'anticon-cross-circle': (this.dwStatus === 'exception') && !isCircle
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePathStyles();
        this.updateIconClassMap();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJwcm9ncmVzcy9kdy1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU85QyxNQUFNOzswQkFDaUIsQ0FBQzs0QkFDNEIsS0FBSzt3QkFDcEMsQ0FBQzt1QkFDb0IsUUFBUTs0QkFDSCxRQUFROzRCQUM5QixDQUFDO3FCQUNSLFNBQVM7cUJBQ1csTUFBTTt1QkFDeEIsQ0FBQyxPQUFlLEVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHOzJCQUs5QyxLQUFLO2dDQUNBLEtBQUs7MkJBQ1YsS0FBSzs4QkFDRixLQUFLO2dDQUNILEtBQUs7OEJBQ1A7WUFDZixNQUFNLEVBQUssU0FBUztZQUNwQixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUksU0FBUztTQUNyQjswQkFDcUIsSUFBSTt1QkFDUCxHQUFHO2dDQUNNLENBQUM7Ozs7OztJQUU3QixJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDdkI7S0FDRjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUFrQztRQUM3QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtLQUNGOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBQ25CLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDO1lBQ3RELElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7S0FDRjs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7Ozs7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7S0FDRjs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7Ozs7SUFFRCxJQUNJLFFBQVEsQ0FBQyxLQUEyQjtRQUN0QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUVELElBQ0ksTUFBTSxDQUFDLEtBQXlCO1FBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7YUFDOUI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7S0FFRjs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN4Qjs7Ozs7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFnQztRQUNoRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Y7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDMUI7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO0tBQ2hFOzs7O0lBRUQsZ0JBQWdCOztRQUNkLE1BQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1FBQzdDLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQzs7UUFDdkIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUM7O1FBQzdCLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQzs7UUFDckIsSUFBSSxZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLFFBQVEsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMxQixLQUFLLE1BQU07Z0JBQ1QsY0FBYyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUN6QixjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDMUIsWUFBWSxHQUFHLENBQUMsQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssT0FBTztnQkFDVixjQUFjLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixZQUFZLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLGNBQWMsR0FBRyxNQUFNLENBQUM7Z0JBQ3hCLFlBQVksR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixNQUFNO1lBQ1IsUUFBUTtTQUNUO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLGNBQWMsSUFBSSxjQUFjO1NBQzFELE1BQU0sSUFBSSxNQUFNLFVBQVUsWUFBWSxJQUFJLENBQUMsWUFBWTtTQUN2RCxNQUFNLElBQUksTUFBTSxVQUFVLENBQUMsWUFBWSxJQUFJLFlBQVksRUFBRSxDQUFDOztRQUMvRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixlQUFlLEVBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsTUFBTSxHQUFHLElBQUk7WUFDeEQsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSTtZQUM5QyxVQUFVLEVBQVEseUVBQXlFO1NBQzVGLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ3JCLGVBQWUsRUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ25GLGdCQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUk7WUFDOUMsVUFBVSxFQUFRLHFHQUFxRztTQUN4SCxDQUFDO0tBQ0g7Ozs7SUFFRCxrQkFBa0I7O1FBQ2hCLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLGVBQWUsRUFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLElBQUksUUFBUTtZQUNqRSxlQUFlLEVBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxJQUFJLFFBQVE7WUFDbkUsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUNsRSxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQ3JFLENBQUM7S0FDSDs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7O1lBcE5GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsYUFBYTtnQkFDbEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsdWlFQUFtRDthQUNwRDs7O3lCQXlCRSxLQUFLO3NCQUNMLEtBQUs7K0JBQ0wsS0FBSztxQkFFTCxLQUFLO3VCQVlMLEtBQUs7d0JBWUwsS0FBSzs0QkFtQkwsS0FBSzt1QkFhTCxLQUFLO3FCQWNMLEtBQUs7MEJBd0JMLEtBQUs7NEJBY0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgRHdQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xuZXhwb3J0IHR5cGUgRHdQcm9ncmVzc1N0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXhjZXB0aW9uJyB8ICdhY3RpdmUnIHwgJ25vcm1hbCc7XG5leHBvcnQgdHlwZSBEd1Byb2dyZXNzVHlwZVR5cGUgPSAnbGluZScgfCAnY2lyY2xlJyB8ICdkYXNoYm9hcmQnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXByb2dyZXNzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1Byb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZ2FwRGVncmVlID0gMDtcbiAgcHJpdmF0ZSBfZ2FwUG9zaXRpb246IER3UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgcHJpdmF0ZSBfcGVyY2VudCA9IDA7XG4gIHByaXZhdGUgX3N0YXR1czogRHdQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBfY2FjaGVTdGF0dXM6IER3UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoID0gODtcbiAgcHJpdmF0ZSBfc2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfdHlwZTogRHdQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBwcml2YXRlIF9mb3JtYXQgPSAocGVyY2VudDogbnVtYmVyKTogc3RyaW5nID0+IGAke3BlcmNlbnR9JWA7XG4gIHRyYWlsUGF0aFN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIHN0cm9rZVBhdGhTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBwYXRoU3RyaW5nOiBzdHJpbmc7XG4gIGljb25DbGFzc01hcDtcbiAgaXNTdGF0dXNTZXQgPSBmYWxzZTtcbiAgaXNTdHJva2VXaWR0aFNldCA9IGZhbHNlO1xuICBpc0Zvcm1hdFNldCA9IGZhbHNlO1xuICBpc0dhcERlZ3JlZVNldCA9IGZhbHNlO1xuICBpc0dhcFBvc2l0aW9uU2V0ID0gZmFsc2U7XG4gIHN0YXR1c0NvbG9yTWFwID0ge1xuICAgIG5vcm1hbCAgIDogJyMxMDhlZTknLFxuICAgIGV4Y2VwdGlvbjogJyNmZjU1MDAnLFxuICAgIHN1Y2Nlc3MgIDogJyM4N2QwNjgnXG4gIH07XG4gIEBJbnB1dCgpIGR3U2hvd0luZm8gPSB0cnVlO1xuICBASW5wdXQoKSBkd1dpZHRoID0gMTMyO1xuICBASW5wdXQoKSBkd1N1Y2Nlc3NQZXJjZW50ID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZHdTaXplID09PSAnc21hbGwnICYmICF0aGlzLmlzU3Ryb2tlV2lkdGhTZXQpIHtcbiAgICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gNjtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdTaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdGb3JtYXQodmFsdWU6IChwZXJjZW50OiBudW1iZXIpID0+IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0Zvcm1hdFNldCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3Rm9ybWF0KCk6IChwZXJjZW50OiBudW1iZXIpID0+IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BlcmNlbnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BlcmNlbnQgPSB2YWx1ZTtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICBjb25zdCBmaWxsQWxsID0gcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApID49IDEwMDtcbiAgICAgIGlmIChmaWxsQWxsICYmICF0aGlzLmlzU3RhdHVzU2V0KSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuX2NhY2hlU3RhdHVzO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUljb25DbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1BlcmNlbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1N0cm9rZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IHZhbHVlO1xuICAgICAgdGhpcy5pc1N0cm9rZVdpZHRoU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd1N0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U3RhdHVzKHZhbHVlOiBEd1Byb2dyZXNzU3RhdHVzVHlwZSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2FjaGVTdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNTdGF0dXNTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdTdGF0dXMoKTogRHdQcm9ncmVzc1N0YXR1c1R5cGUge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdUeXBlKHZhbHVlOiBEd1Byb2dyZXNzVHlwZVR5cGUpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgaWYgKCF0aGlzLmlzU3Ryb2tlV2lkdGhTZXQpIHtcbiAgICAgIGlmICh0aGlzLmR3VHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gNjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZHdUeXBlID09PSAnZGFzaGJvYXJkJykge1xuICAgICAgaWYgKCF0aGlzLmlzR2FwUG9zaXRpb25TZXQpIHtcbiAgICAgICAgdGhpcy5fZ2FwUG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pc0dhcERlZ3JlZVNldCkge1xuICAgICAgICB0aGlzLl9nYXBEZWdyZWUgPSA3NTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVJY29uQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgfVxuXG4gIGdldCBkd1R5cGUoKTogRHdQcm9ncmVzc1R5cGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0dhcERlZ3JlZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZ2FwRGVncmVlID0gdmFsdWU7XG4gICAgICB0aGlzLmlzR2FwRGVncmVlU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0IGR3R2FwRGVncmVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2dhcERlZ3JlZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0dhcFBvc2l0aW9uKHZhbHVlOiBEd1Byb2dyZXNzR2FwUG9zaXRpb25UeXBlKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZ2FwUG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNHYXBQb3NpdGlvblNldCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdHYXBQb3NpdGlvbigpOiBEd1Byb2dyZXNzR2FwUG9zaXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwUG9zaXRpb247XG4gIH1cblxuICBnZXQgaXNDaXJDbGVTdHlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd1R5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMuZHdUeXBlID09PSAnZGFzaGJvYXJkJztcbiAgfVxuXG4gIHVwZGF0ZVBhdGhTdHlsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgcmFkaXVzID0gNTAgLSAodGhpcy5kd1N0cm9rZVdpZHRoIC8gMik7XG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcbiAgICBzd2l0Y2ggKHRoaXMuZHdHYXBQb3NpdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5IDogYCR7bGVuIC0gdGhpcy5kd0dhcERlZ3JlZX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7dGhpcy5kd0dhcERlZ3JlZSAvIDJ9cHhgLFxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xuICAgIH07XG4gICAgdGhpcy5zdHJva2VQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXkgOiBgJHsodGhpcy5kd1BlcmNlbnQgLyAxMDApICogKGxlbiAtIHRoaXMuZHdHYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHt0aGlzLmR3R2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUljb25DbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NpcmNsZSA9ICh0aGlzLmR3VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5kd1R5cGUgPT09ICdkYXNoYm9hcmQnKTtcbiAgICB0aGlzLmljb25DbGFzc01hcCA9IHtcbiAgICAgICdhbnRpY29uLWNoZWNrJyAgICAgICA6ICh0aGlzLmR3U3RhdHVzID09PSAnc3VjY2VzcycpICYmIGlzQ2lyY2xlLFxuICAgICAgJ2FudGljb24tY3Jvc3MnICAgICAgIDogKHRoaXMuZHdTdGF0dXMgPT09ICdleGNlcHRpb24nKSAmJiBpc0NpcmNsZSxcbiAgICAgICdhbnRpY29uLWNoZWNrLWNpcmNsZSc6ICh0aGlzLmR3U3RhdHVzID09PSAnc3VjY2VzcycpICYmICFpc0NpcmNsZSxcbiAgICAgICdhbnRpY29uLWNyb3NzLWNpcmNsZSc6ICh0aGlzLmR3U3RhdHVzID09PSAnZXhjZXB0aW9uJykgJiYgIWlzQ2lyY2xlXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XG4gIH1cblxufVxuIl19
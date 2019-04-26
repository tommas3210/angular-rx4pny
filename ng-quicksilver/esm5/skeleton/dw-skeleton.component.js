/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var DwSkeletonComponent = /** @class */ (function () {
    function DwSkeletonComponent() {
        this.rowsList = [];
        this.widthList = [];
        this.dwActive = false;
        this.dwLoading = true;
        this.dwTitle = true;
        this.dwAvatar = false;
        this.dwParagraph = true;
    }
    /**
     * @return {?}
     */
    DwSkeletonComponent.prototype.getTitleProps = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.dwAvatar;
        /** @type {?} */
        var hasParagraph = !!this.dwParagraph;
        /** @type {?} */
        var width;
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return tslib_1.__assign({ width: width }, this.getProps(this.dwTitle));
    };
    /**
     * @return {?}
     */
    DwSkeletonComponent.prototype.getAvatarProps = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shape = (!!this.dwTitle && !this.dwParagraph) ? 'square' : 'circle';
        /** @type {?} */
        var size = 'large';
        return tslib_1.__assign({ shape: shape, size: size }, this.getProps(this.dwAvatar));
    };
    /**
     * @return {?}
     */
    DwSkeletonComponent.prototype.getParagraphProps = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.dwAvatar;
        /** @type {?} */
        var hasTitle = !!this.dwTitle;
        /** @type {?} */
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return tslib_1.__assign({}, basicProps, this.getProps(this.dwParagraph));
    };
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    DwSkeletonComponent.prototype.getProps = /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        if (prop && typeof prop === 'object') {
            return prop;
        }
        return {};
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    DwSkeletonComponent.prototype.toCSSUnit = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (typeof value === 'number') {
            return value + "px";
        }
        else if (typeof value === 'string') {
            return value;
        }
    };
    /**
     * @return {?}
     */
    DwSkeletonComponent.prototype.getWidthList = /**
     * @return {?}
     */
    function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        /** @type {?} */
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    };
    /**
     * @return {?}
     */
    DwSkeletonComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.avatarClassMap = (_a = {},
            _a["ant-skeleton-avatar-lg"] = this.avatar.size === 'large',
            _a["ant-skeleton-avatar-sm "] = this.avatar.size === 'small',
            _a["ant-skeleton-avatar-circle"] = this.avatar.shape === 'circle',
            _a["ant-skeleton-avatar-square "] = this.avatar.shape === 'square',
            _a);
    };
    /**
     * @return {?}
     */
    DwSkeletonComponent.prototype.updateProps = /**
     * @return {?}
     */
    function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = tslib_1.__spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
    };
    /**
     * @return {?}
     */
    DwSkeletonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateProps();
        this.updateClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwSkeletonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["dwTitle"] || changes["dwAvatar"] || changes["dwParagraph"]) {
            this.updateProps();
            this.updateClassMap();
        }
    };
    DwSkeletonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-skeleton',
                    template: "<ng-container *ngIf=\"dwLoading\">\n  <div class=\"ant-skeleton-header\">\n    <span *ngIf=\"!!dwAvatar\"\n      class=\"ant-skeleton-avatar\"\n      [ngClass]=\"avatarClassMap\">\n    </span>\n  </div>\n  <div class=\"ant-skeleton-content\">\n    <h3 *ngIf=\"!!dwTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n    <ul *ngIf=\"!!dwParagraph\" class=\"ant-skeleton-paragraph\">\n      <li *ngFor=\"let row of rowsList;let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\n      </li>\n    </ul>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!dwLoading\">\n  <ng-content></ng-content>\n</ng-container>",
                    host: {
                        '[class.ant-skeleton]': 'true',
                        '[class.ant-skeleton-with-avatar]': '!!dwAvatar',
                        '[class.ant-skeleton-active]': 'dwActive'
                    }
                }] }
    ];
    DwSkeletonComponent.propDecorators = {
        dwActive: [{ type: Input }],
        dwLoading: [{ type: Input }],
        dwTitle: [{ type: Input }],
        dwAvatar: [{ type: Input }],
        dwParagraph: [{ type: Input }]
    };
    return DwSkeletonComponent;
}());
export { DwSkeletonComponent };
function DwSkeletonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSkeletonComponent.prototype.title;
    /** @type {?} */
    DwSkeletonComponent.prototype.avatar;
    /** @type {?} */
    DwSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    DwSkeletonComponent.prototype.avatarClassMap;
    /** @type {?} */
    DwSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    DwSkeletonComponent.prototype.widthList;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwActive;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwLoading;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwTitle;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwAvatar;
    /** @type {?} */
    DwSkeletonComponent.prototype.dwParagraph;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJza2VsZXRvbi9kdy1za2VsZXRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7Ozt3QkFpQjVELEVBQUU7eUJBQ2EsRUFBRTt3QkFFbEIsS0FBSzt5QkFDSixJQUFJO3VCQUNxQixJQUFJO3dCQUNGLEtBQUs7MkJBQ0MsSUFBSTs7Ozs7SUFFbEQsMkNBQWE7Ozs7O1FBQ25CLElBQU0sU0FBUyxHQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOztRQUMzQyxJQUFNLFlBQVksR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7UUFDakQsSUFBSSxLQUFLLENBQVM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxZQUFZLEVBQUU7WUFDOUIsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNmO2FBQU0sSUFBSSxTQUFTLElBQUksWUFBWSxFQUFFO1lBQ3BDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDZjtRQUNELDBCQUFTLEtBQUssT0FBQSxJQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFHOzs7OztJQUczQyw0Q0FBYzs7Ozs7UUFDcEIsSUFBTSxLQUFLLEdBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDOztRQUN2RixJQUFNLElBQUksR0FBZSxPQUFPLENBQUM7UUFDakMsMEJBQVMsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVB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LE9BQXNCO1FBQ2hDLElBQUksT0FBTyxlQUFZLE9BQU8sWUFBUyxJQUFJLE9BQU8sZUFBWSxFQUFFO1lBQzlELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7S0FDRjs7Z0JBaEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsaXBCQUEyQztvQkFDM0MsSUFBSSxFQUFFO3dCQUNKLHNCQUFzQixFQUFFLE1BQU07d0JBQzlCLGtDQUFrQyxFQUFFLFlBQVk7d0JBQ2hELDZCQUE2QixFQUFFLFVBQVU7cUJBQzFDO2lCQUNGOzs7MkJBU0UsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzs4QkF4QlI7O1NBWWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF2YXRhclNoYXBlLCBBdmF0YXJTaXplLCBEd1NrZWxldG9uQXZhdGFyLCBEd1NrZWxldG9uUGFyYWdyYXBoLCBEd1NrZWxldG9uVGl0bGUgfSBmcm9tICcuL2R3LXNrZWxldG9uLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkdy1za2VsZXRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy1za2VsZXRvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbl0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24td2l0aC1hdmF0YXJdJzogJyEhZHdBdmF0YXInLFxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nOiAnZHdBY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdTa2VsZXRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgdGl0bGU6IER3U2tlbGV0b25UaXRsZTtcbiAgYXZhdGFyOiBEd1NrZWxldG9uQXZhdGFyO1xuICBwYXJhZ3JhcGg6IER3U2tlbGV0b25QYXJhZ3JhcGg7XG4gIGF2YXRhckNsYXNzTWFwO1xuICByb3dzTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG5cbiAgQElucHV0KCkgZHdBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdMb2FkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgZHdUaXRsZTogRHdTa2VsZXRvblRpdGxlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGR3QXZhdGFyOiBEd1NrZWxldG9uQXZhdGFyIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkd1BhcmFncmFwaDogRHdTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHByaXZhdGUgZ2V0VGl0bGVQcm9wcygpOiBEd1NrZWxldG9uVGl0bGUge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5kd0F2YXRhcjtcbiAgICBjb25zdCBoYXNQYXJhZ3JhcGg6IGJvb2xlYW4gPSAhIXRoaXMuZHdQYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoOiBzdHJpbmc7XG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgICB3aWR0aCA9ICczOCUnO1xuICAgIH0gZWxzZSBpZiAoaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnNTAlJztcbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGgsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5kd1RpdGxlKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdmF0YXJQcm9wcygpOiBEd1NrZWxldG9uQXZhdGFyIHtcbiAgICBjb25zdCBzaGFwZTogQXZhdGFyU2hhcGUgPSAoISF0aGlzLmR3VGl0bGUgJiYgIXRoaXMuZHdQYXJhZ3JhcGgpID8gJ3NxdWFyZScgOiAnY2lyY2xlJztcbiAgICBjb25zdCBzaXplOiBBdmF0YXJTaXplID0gJ2xhcmdlJztcbiAgICByZXR1cm4geyBzaGFwZSwgc2l6ZSwgLi4udGhpcy5nZXRQcm9wcyh0aGlzLmR3QXZhdGFyKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhZ3JhcGhQcm9wcygpOiBEd1NrZWxldG9uUGFyYWdyYXBoIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMuZHdBdmF0YXI7XG4gICAgY29uc3QgaGFzVGl0bGU6IGJvb2xlYW4gPSAhIXRoaXMuZHdUaXRsZTtcbiAgICBjb25zdCBiYXNpY1Byb3BzOiBEd1NrZWxldG9uUGFyYWdyYXBoID0ge307XG4gICAgLy8gV2lkdGhcbiAgICBpZiAoIWhhc0F2YXRhciB8fCAhaGFzVGl0bGUpIHtcbiAgICAgIGJhc2ljUHJvcHMud2lkdGggPSAnNjElJztcbiAgICB9XG4gICAgLy8gUm93c1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1RpdGxlKSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAzO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAyO1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5iYXNpY1Byb3BzLCAuLi50aGlzLmdldFByb3BzKHRoaXMuZHdQYXJhZ3JhcGgpIH07XG4gIH1cblxuICBwcml2YXRlIGdldFByb3BzPFQ+KHByb3A6IFQgfCBib29sZWFuIHwgdW5kZWZpbmVkKTogVCB8IHt9ICB7XG4gICAgaWYgKHByb3AgJiYgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcHJvcDtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdG9DU1NVbml0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgPSAnJyk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBgJHt2YWx1ZX1weGA7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaWR0aExpc3QoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XG4gICAgY29uc3QgeyB3aWR0aCwgcm93cyB9ID0gdGhpcy5wYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoTGlzdCA9IFtdO1xuICAgIGlmICh3aWR0aCAmJiBBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgd2lkdGhMaXN0ID0gd2lkdGg7XG4gICAgfSBlbHNlIGlmICh3aWR0aCAmJiAhQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcbiAgICAgIHdpZHRoTGlzdCA9IFtdO1xuICAgICAgd2lkdGhMaXN0W3Jvd3MgLSAxXSA9IHdpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gd2lkdGhMaXN0O1xuICB9XG5cbiAgdXBkYXRlQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5hdmF0YXJDbGFzc01hcCA9IHtcbiAgICAgIFsgYGFudC1za2VsZXRvbi1hdmF0YXItbGdgIF0gICAgIDogdGhpcy5hdmF0YXIuc2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYGFudC1za2VsZXRvbi1hdmF0YXItc20gYCBdICAgIDogdGhpcy5hdmF0YXIuc2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIFsgYGFudC1za2VsZXRvbi1hdmF0YXItY2lyY2xlYCBdIDogdGhpcy5hdmF0YXIuc2hhcGUgPT09ICdjaXJjbGUnLFxuICAgICAgWyBgYW50LXNrZWxldG9uLWF2YXRhci1zcXVhcmUgYCBdOiB0aGlzLmF2YXRhci5zaGFwZSA9PT0gJ3NxdWFyZSdcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlUHJvcHMoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSAgICAgPSB0aGlzLmdldFRpdGxlUHJvcHMoKTtcbiAgICB0aGlzLmF2YXRhciAgICA9IHRoaXMuZ2V0QXZhdGFyUHJvcHMoKTtcbiAgICB0aGlzLnBhcmFncmFwaCA9IHRoaXMuZ2V0UGFyYWdyYXBoUHJvcHMoKTtcbiAgICB0aGlzLnJvd3NMaXN0ICA9IFsuLi5BcnJheSh0aGlzLnBhcmFncmFwaC5yb3dzKV07XG4gICAgdGhpcy53aWR0aExpc3QgPSB0aGlzLmdldFdpZHRoTGlzdCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kd1RpdGxlIHx8IGNoYW5nZXMuZHdBdmF0YXIgfHwgY2hhbmdlcy5kd1BhcmFncmFwaCkge1xuICAgICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICAgICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxufVxuIl19
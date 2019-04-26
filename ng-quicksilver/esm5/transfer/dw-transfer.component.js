/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { DwI18nService } from '../i18n/dw-i18n.service';
var DwTransferComponent = /** @class */ (function () {
    // endregion
    function DwTransferComponent(i18n, el) {
        var _this = this;
        this.i18n = i18n;
        this.el = el;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._showSearch = false;
        this.leftFilter = '';
        this.rightFilter = '';
        // region: fields
        this.dwDataSource = [];
        this.dwTitles = ['', ''];
        this.dwOperations = [];
        this.dwCanMove = function (arg) { return of(arg.list); };
        // events
        this.dwChange = new EventEmitter();
        this.dwSearchChange = new EventEmitter();
        this.dwSelectChange = new EventEmitter();
        // endregion
        // region: process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = function (checked) { return _this.handleSelect('left', checked); };
        this.handleRightSelectAll = function (checked) { return _this.handleSelect('right', checked); };
        this.handleLeftSelect = function (item) { return _this.handleSelect('left', item.checked, item); };
        this.handleRightSelect = function (item) { return _this.handleSelect('right', item.checked, item); };
        // endregion
        // region: operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = function () { return _this.moveTo('left'); };
        this.moveToRight = function () { return _this.moveTo('right'); };
    }
    Object.defineProperty(DwTransferComponent.prototype, "dwShowSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSearch;
        },
        // search
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTransferComponent.prototype.splitDataSource = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.dwDataSource.forEach(function (record) {
            if (record.direction === 'right') {
                _this.rightDataSource.push(record);
            }
            else {
                _this.leftDataSource.push(record);
            }
        });
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    DwTransferComponent.prototype.getCheckedData = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(function (w) { return w.checked; });
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    DwTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.dwSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    DwTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.dwSearchChange.emit(ret);
    };
    /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    DwTransferComponent.prototype.updateOperationStatus = /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] = (typeof count === 'undefined' ? this.getCheckedData(direction).filter(function (w) { return !w.disabled; }).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    DwTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter(function (item) { return item.checked === true && !item.disabled; });
        this.dwCanMove({ direction: direction, list: moveList })
            .subscribe(function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter(function (i) { return !!i; })); }, function () { return moveList.forEach(function (i) { return i.checked = false; }); });
    };
    /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    DwTransferComponent.prototype.truthMoveTo = /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                targetDatasource.push(item);
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.updateOperationStatus(oppositeDirection);
        this.dwChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
    };
    /**
     * @return {?}
     */
    DwTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Transfer'); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('dwDataSource' in changes) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
        }
    };
    /**
     * @return {?}
     */
    DwTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    DwTransferComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-transfer',
                    preserveWhitespaces: false,
                    template: "<dw-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"dwListStyle\" data-direction=\"left\"\n  [titleText]=\"dwTitles[0]\"\n  [dataSource]=\"leftDataSource\"\n  [filter]=\"leftFilter\"\n  [filterOption]=\"dwFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [render]=\"dwRender\"\n  [showSearch]=\"dwShowSearch\"\n  [searchPlaceholder]=\"dwSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"dwNotFoundContent || locale.notFoundContent\"\n  [itemUnit]=\"dwItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"dwItemsUnit || locale.itemsUnit\"\n  [footer]=\"dwFooter\"\n  (handleSelect)=\"handleLeftSelect($event)\"\n  (handleSelectAll)=\"handleLeftSelectAll($event)\"></dw-transfer-list>\n<div class=\"ant-transfer-operation\">\n  <button dw-button (click)=\"moveToLeft()\" [disabled]=\"!leftActive\" [dwType]=\"'primary'\" [dwSize]=\"'small'\">\n    <i class=\"anticon anticon-left\"></i><span *ngIf=\"dwOperations[1]\">{{ dwOperations[1] }}</span>\n  </button>\n  <button dw-button (click)=\"moveToRight()\" [disabled]=\"!rightActive\" [dwType]=\"'primary'\" [dwSize]=\"'small'\">\n    <i class=\"anticon anticon-right\"></i><span *ngIf=\"dwOperations[0]\">{{ dwOperations[0] }}</span>\n  </button>\n</div>\n<dw-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"dwListStyle\" data-direction=\"right\"\n  [titleText]=\"dwTitles[1]\"\n  [dataSource]=\"rightDataSource\"\n  [filter]=\"rightFilter\"\n  [filterOption]=\"dwFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [render]=\"dwRender\"\n  [showSearch]=\"dwShowSearch\"\n  [searchPlaceholder]=\"dwSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"dwNotFoundContent || locale.notFoundContent\"\n  [itemUnit]=\"dwItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"dwItemsUnit || locale.itemsUnit\"\n  [footer]=\"dwFooter\"\n  (handleSelect)=\"handleRightSelect($event)\"\n  (handleSelectAll)=\"handleRightSelectAll($event)\"></dw-transfer-list>",
                    host: {
                        '[class.ant-transfer]': 'true'
                    }
                }] }
    ];
    /** @nocollapse */
    DwTransferComponent.ctorParameters = function () { return [
        { type: DwI18nService },
        { type: ElementRef }
    ]; };
    DwTransferComponent.propDecorators = {
        dwDataSource: [{ type: Input }],
        dwTitles: [{ type: Input }],
        dwOperations: [{ type: Input }],
        dwListStyle: [{ type: Input }],
        dwItemUnit: [{ type: Input }],
        dwItemsUnit: [{ type: Input }],
        dwCanMove: [{ type: Input }],
        dwRender: [{ type: Input }],
        dwFooter: [{ type: Input }],
        dwShowSearch: [{ type: Input }],
        dwFilterOption: [{ type: Input }],
        dwSearchPlaceholder: [{ type: Input }],
        dwNotFoundContent: [{ type: Input }],
        dwChange: [{ type: Output }],
        dwSearchChange: [{ type: Output }],
        dwSelectChange: [{ type: Output }]
    };
    return DwTransferComponent;
}());
export { DwTransferComponent };
function DwTransferComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTransferComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwTransferComponent.prototype.locale;
    /** @type {?} */
    DwTransferComponent.prototype._showSearch;
    /** @type {?} */
    DwTransferComponent.prototype.leftFilter;
    /** @type {?} */
    DwTransferComponent.prototype.rightFilter;
    /** @type {?} */
    DwTransferComponent.prototype.dwDataSource;
    /** @type {?} */
    DwTransferComponent.prototype.dwTitles;
    /** @type {?} */
    DwTransferComponent.prototype.dwOperations;
    /** @type {?} */
    DwTransferComponent.prototype.dwListStyle;
    /** @type {?} */
    DwTransferComponent.prototype.dwItemUnit;
    /** @type {?} */
    DwTransferComponent.prototype.dwItemsUnit;
    /** @type {?} */
    DwTransferComponent.prototype.dwCanMove;
    /** @type {?} */
    DwTransferComponent.prototype.dwRender;
    /** @type {?} */
    DwTransferComponent.prototype.dwFooter;
    /** @type {?} */
    DwTransferComponent.prototype.dwFilterOption;
    /** @type {?} */
    DwTransferComponent.prototype.dwSearchPlaceholder;
    /** @type {?} */
    DwTransferComponent.prototype.dwNotFoundContent;
    /** @type {?} */
    DwTransferComponent.prototype.dwChange;
    /** @type {?} */
    DwTransferComponent.prototype.dwSearchChange;
    /** @type {?} */
    DwTransferComponent.prototype.dwSelectChange;
    /** @type {?} */
    DwTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    DwTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    DwTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    DwTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    DwTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    DwTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    DwTransferComponent.prototype.leftActive;
    /** @type {?} */
    DwTransferComponent.prototype.rightActive;
    /** @type {?} */
    DwTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    DwTransferComponent.prototype.moveToRight;
    /** @type {?} */
    DwTransferComponent.prototype.i18n;
    /** @type {?} */
    DwTransferComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0cmFuc2Zlci9kdy10cmFuc2Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBeUl0RCxZQUFZO0lBRVosNkJBQW9CLElBQW1CLEVBQVUsRUFBYztRQUEvRCxpQkFDQztRQURtQixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTs0QkE5SHhDLElBQUksT0FBTyxFQUFROztzQkFFNUIsRUFBRTsyQkFDTSxLQUFLOzBCQUVkLEVBQUU7MkJBQ0QsRUFBRTs7NEJBSXdCLEVBQUU7d0JBQ1osQ0FBRSxFQUFFLEVBQUUsRUFBRSxDQUFFOzRCQUNOLEVBQUU7eUJBSXVDLFVBQUMsR0FBb0IsSUFBSyxPQUFBLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQVosQ0FBWTs7d0JBbUI5RCxJQUFJLFlBQVksRUFBRTs4QkFDTixJQUFJLFlBQVksRUFBRTs4QkFDbEIsSUFBSSxZQUFZLEVBQUU7Ozs7OEJBT2hELEVBQUU7OytCQUdELEVBQUU7bUNBa0JkLFVBQUMsT0FBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFsQyxDQUFrQztvQ0FDdkQsVUFBQyxPQUFnQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQW5DLENBQW1DO2dDQUU3RCxVQUFDLElBQWtCLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUE3QyxDQUE2QztpQ0FDcEUsVUFBQyxJQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBOUMsQ0FBOEM7OzswQkFnQjdFLEtBQUs7MkJBQ0osS0FBSzswQkFNTixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbkIsQ0FBbUI7MkJBQ3hCLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFwQixDQUFvQjtLQWtDdkM7SUExR0Qsc0JBQ0ksNkNBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7UUFSRCxTQUFTOzs7OztRQUNULFVBQ2lCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7OztPQUFBOzs7O0lBeUJPLDZDQUFlOzs7OztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07WUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtnQkFDaEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEM7U0FDRixDQUFDLENBQUM7Ozs7OztJQUdHLDRDQUFjOzs7O2NBQUMsU0FBaUI7UUFDdEMsT0FBTyxJQUFJLENBQUUsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFFLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQzs7Ozs7Ozs7SUFTcEcsMENBQVk7Ozs7OztJQUFaLFVBQWEsU0FBMkIsRUFBRSxPQUFnQixFQUFFLElBQW1COztRQUM3RSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0tBQzlEOzs7OztJQUVELGdEQUFrQjs7OztJQUFsQixVQUFtQixHQUF5QztRQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMvQjs7Ozs7O0lBU08sbURBQXFCOzs7OztjQUFDLFNBQWlCLEVBQUUsS0FBYztRQUM3RCxJQUFJLENBQUUsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUUsR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQVgsQ0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7OztJQU03SyxvQ0FBTTs7OztJQUFOLFVBQU8sU0FBaUI7UUFBeEIsaUJBVUM7O1FBVEMsSUFBTSxpQkFBaUIsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRSxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBQ2pELElBQU0sVUFBVSxHQUFHLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7O1FBQ3JGLElBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQXZDLENBQXVDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzVDLFNBQVMsQ0FDUixVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsQ0FBQyxDQUFDLEVBQXpELENBQXlELEVBQ3hFLGNBQU0sT0FBQSxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQWpCLENBQWlCLENBQUMsRUFBeEMsQ0FBd0MsQ0FDL0MsQ0FBQztLQUNIOzs7Ozs7SUFFTyx5Q0FBVzs7Ozs7Y0FBQyxTQUFpQixFQUFFLElBQW9COzs7UUFDekQsSUFBTSxpQkFBaUIsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7UUFDbEUsSUFBTSxVQUFVLEdBQUcsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzs7UUFDckYsSUFBTSxnQkFBZ0IsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDOztZQUMzRixLQUFtQixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO2dCQUFwQixJQUFNLElBQUksaUJBQUE7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2hEOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLEVBQUUsRUFBSSxTQUFTO1lBQ2YsSUFBSSxNQUFBO1NBQ0wsQ0FBQyxDQUFDOzs7OztJQVFMLHNDQUFROzs7SUFBUjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQWpELENBQWlELENBQUMsQ0FBQztLQUM5SDs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxjQUFjLElBQUksT0FBTyxFQUFFO1lBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7O2dCQXpKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGFBQWE7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDQ3REFBbUQ7b0JBQ25ELElBQUksRUFBaUI7d0JBQ25CLHNCQUFzQixFQUFFLE1BQU07cUJBQy9CO2lCQUNGOzs7O2dCQVhRLGFBQWE7Z0JBZnBCLFVBQVU7OzsrQkFzQ1QsS0FBSzsyQkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBR0wsS0FBSztpQ0FTTCxLQUFLO3NDQUNMLEtBQUs7b0NBQ0wsS0FBSzsyQkFHTCxNQUFNO2lDQUNOLE1BQU07aUNBQ04sTUFBTTs7OEJBbkVUOztTQTZCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2R3LWkxOG4uc2VydmljZSc7XG5cbmltcG9ydCB7IFRyYW5zZmVyQ2FuTW92ZSwgVHJhbnNmZXJDaGFuZ2UsIFRyYW5zZmVySXRlbSwgVHJhbnNmZXJTZWFyY2hDaGFuZ2UsIFRyYW5zZmVyU2VsZWN0Q2hhbmdlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXRyYW5zZmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRyYW5zZmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3VHJhbnNmZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgX3Nob3dTZWFyY2ggPSBmYWxzZTtcblxuICBsZWZ0RmlsdGVyID0gJyc7XG4gIHJpZ2h0RmlsdGVyID0gJyc7XG5cbiAgLy8gcmVnaW9uOiBmaWVsZHNcblxuICBASW5wdXQoKSBkd0RhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG4gIEBJbnB1dCgpIGR3VGl0bGVzOiBzdHJpbmdbXSA9IFsgJycsICcnIF07XG4gIEBJbnB1dCgpIGR3T3BlcmF0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgZHdMaXN0U3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgZHdJdGVtVW5pdDogc3RyaW5nO1xuICBASW5wdXQoKSBkd0l0ZW1zVW5pdDogc3RyaW5nO1xuICBASW5wdXQoKSBkd0Nhbk1vdmU6IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gT2JzZXJ2YWJsZTxUcmFuc2Zlckl0ZW1bXT4gPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IG9mKGFyZy5saXN0KTtcbiAgQElucHV0KCkgZHdSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBkd0Zvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLy8gc2VhcmNoXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U2VhcmNoID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dTZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTZWFyY2g7XG4gIH1cblxuICBASW5wdXQoKSBkd0ZpbHRlck9wdGlvbjogKGlucHV0VmFsdWU6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBkd1NlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG5cbiAgLy8gZXZlbnRzXG4gIEBPdXRwdXQoKSBkd0NoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zZmVyQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3U2VhcmNoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWFyY2hDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdTZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2ZlclNlbGVjdENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBwcm9jZXNzIGRhdGFcblxuICAvLyBsZWZ0XG4gIGxlZnREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIC8vIHJpZ2h0XG4gIHJpZ2h0RGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICBwcml2YXRlIHNwbGl0RGF0YVNvdXJjZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxlZnREYXRhU291cmNlID0gW107XG4gICAgdGhpcy5yaWdodERhdGFTb3VyY2UgPSBbXTtcbiAgICB0aGlzLmR3RGF0YVNvdXJjZS5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICBpZiAocmVjb3JkLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZS5wdXNoKHJlY29yZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlZnREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hlY2tlZERhdGEoZGlyZWN0aW9uOiBzdHJpbmcpOiBUcmFuc2Zlckl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXNbIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2xlZnREYXRhU291cmNlJyA6ICdyaWdodERhdGFTb3VyY2UnIF0uZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgfVxuXG4gIGhhbmRsZUxlZnRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBjaGVja2VkKTtcbiAgaGFuZGxlUmlnaHRTZWxlY3RBbGwgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ3JpZ2h0JywgY2hlY2tlZCk7XG5cbiAgaGFuZGxlTGVmdFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdsZWZ0JywgaXRlbS5jaGVja2VkLCBpdGVtKTtcbiAgaGFuZGxlUmlnaHRTZWxlY3QgPSAoaXRlbTogVHJhbnNmZXJJdGVtKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuXG4gIGhhbmRsZVNlbGVjdChkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcsIGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW0/OiBUcmFuc2Zlckl0ZW0pOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5nZXRDaGVja2VkRGF0YShkaXJlY3Rpb24pO1xuICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKGRpcmVjdGlvbiwgbGlzdC5sZW5ndGgpO1xuICAgIHRoaXMuZHdTZWxlY3RDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbiwgY2hlY2tlZCwgbGlzdCwgaXRlbSB9KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZShyZXQ6IHsgZGlyZWN0aW9uOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIHRoaXMuZHdTZWFyY2hDaGFuZ2UuZW1pdChyZXQpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLy8gcmVnaW9uOiBvcGVyYXRpb25cblxuICBsZWZ0QWN0aXZlID0gZmFsc2U7XG4gIHJpZ2h0QWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSB1cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uOiBzdHJpbmcsIGNvdW50PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpc1sgZGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnRBY3RpdmUnIDogJ3JpZ2h0QWN0aXZlJyBdID0gKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbikuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aCA6IGNvdW50KSA+IDA7XG4gIH1cblxuICBtb3ZlVG9MZWZ0ID0gKCkgPT4gdGhpcy5tb3ZlVG8oJ2xlZnQnKTtcbiAgbW92ZVRvUmlnaHQgPSAoKSA9PiB0aGlzLm1vdmVUbygncmlnaHQnKTtcblxuICBtb3ZlVG8oZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbiwgMCk7XG4gICAgY29uc3QgZGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5yaWdodERhdGFTb3VyY2UgOiB0aGlzLmxlZnREYXRhU291cmNlO1xuICAgIGNvbnN0IG1vdmVMaXN0ID0gZGF0YXNvdXJjZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUgJiYgIWl0ZW0uZGlzYWJsZWQpO1xuICAgIHRoaXMuZHdDYW5Nb3ZlKHsgZGlyZWN0aW9uLCBsaXN0OiBtb3ZlTGlzdCB9KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBuZXdNb3ZlTGlzdCA9PiB0aGlzLnRydXRoTW92ZVRvKGRpcmVjdGlvbiwgbmV3TW92ZUxpc3QuZmlsdGVyKGkgPT4gISFpKSksXG4gICAgICAoKSA9PiBtb3ZlTGlzdC5mb3JFYWNoKGkgPT4gaS5jaGVja2VkID0gZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ1dGhNb3ZlVG8oZGlyZWN0aW9uOiBzdHJpbmcsIGxpc3Q6IFRyYW5zZmVySXRlbVtdKTogdm9pZCB7XG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgZGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5yaWdodERhdGFTb3VyY2UgOiB0aGlzLmxlZnREYXRhU291cmNlO1xuICAgIGNvbnN0IHRhcmdldERhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubGVmdERhdGFTb3VyY2UgOiB0aGlzLnJpZ2h0RGF0YVNvdXJjZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB0YXJnZXREYXRhc291cmNlLnB1c2goaXRlbSk7XG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbik7XG4gICAgdGhpcy5kd0NoYW5nZS5lbWl0KHtcbiAgICAgIGZyb206IG9wcG9zaXRlRGlyZWN0aW9uLFxuICAgICAgdG8gIDogZGlyZWN0aW9uLFxuICAgICAgbGlzdFxuICAgIH0pO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBEd0kxOG5TZXJ2aWNlLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1RyYW5zZmVyJykpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICgnZHdEYXRhU291cmNlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnNwbGl0RGF0YVNvdXJjZSgpO1xuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ2xlZnQnKTtcbiAgICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKCdyaWdodCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
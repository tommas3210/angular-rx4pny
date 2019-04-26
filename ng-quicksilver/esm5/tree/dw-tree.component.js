/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { isNotNil } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
import { DwTreeNode } from './dw-tree-node';
import { DwTreeService } from './dw-tree.service';
var DwTreeComponent = /** @class */ (function () {
    function DwTreeComponent(dwTreeService) {
        this.dwTreeService = dwTreeService;
        this.dwShowIcon = false;
        this.dwShowLine = false;
        this.dwCheckStrictly = false;
        this.dwCheckable = false;
        this.dwShowExpand = true;
        this.dwAsyncData = false;
        this.dwDraggable = false;
        this.dwMultiple = false;
        this.dwExpandAll = false;
        /**
         * @deprecated use
         * dwExpandAll instead
         */
        this.dwDefaultExpandAll = false;
        // model bind
        this.dwExpandedKeysChange = new EventEmitter();
        this.dwSelectedKeysChange = new EventEmitter();
        this.dwCheckedKeysChange = new EventEmitter();
        this.dwSearchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * dwSearchValueChange instead
         */
        this.dwOnSearchNode = new EventEmitter();
        this.dwClick = new EventEmitter();
        this.dwDblClick = new EventEmitter();
        this.dwContextMenu = new EventEmitter();
        this.dwCheckBoxChange = new EventEmitter();
        this.dwExpandChange = new EventEmitter();
        this.dwOnDragStart = new EventEmitter();
        this.dwOnDragEnter = new EventEmitter();
        this.dwOnDragOver = new EventEmitter();
        this.dwOnDragLeave = new EventEmitter();
        this.dwOnDrop = new EventEmitter();
        this.dwOnDragEnd = new EventEmitter();
        this._searchValue = '';
        // tslint:disable-next-line:no-any
        this.dwDefaultSubject = new Subject();
        this.dwNodes = [];
        this.prefixCls = 'ant-tree';
        this.dwTreeClass = {};
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(DwTreeComponent.prototype, "dwData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value) && value.length > 0) {
                if (!this.dwTreeService.isArrayOfDwTreeNode(value)) {
                    // has not been new DwTreeNode
                    this.dwNodes = value.map(function (item) { return (new DwTreeNode(item)); });
                }
                else {
                    this.dwNodes = value;
                }
                this.dwTreeService.conductOption.isCheckStrictly = this.dwCheckStrictly;
                this.dwTreeService.initTree(this.dwNodes);
            }
            else {
                if (value !== null) {
                    console.warn('ngModel only accepts an array and should be not empty');
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeComponent.prototype, "dwDefaultExpandedKeys", {
        /**
         * @deprecated use
         * dwExpandedKeys instead
         */
        set: /**
         * @deprecated use
         * dwExpandedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.dwDefaultSubject.next({ type: 'dwExpandedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeComponent.prototype, "dwDefaultSelectedKeys", {
        /**
         * @deprecated use
         * dwSelectedKeys instead
         */
        set: /**
         * @deprecated use
         * dwSelectedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.dwDefaultSubject.next({ type: 'dwSelectedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeComponent.prototype, "dwDefaultCheckedKeys", {
        /**
         * @deprecated use
         * dwCheckedKeys instead
         */
        set: /**
         * @deprecated use
         * dwCheckedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.dwDefaultSubject.next({ type: 'dwCheckedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeComponent.prototype, "dwExpandedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.dwDefaultSubject.next({ type: 'dwExpandedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeComponent.prototype, "dwSelectedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.dwDefaultSubject.next({ type: 'dwSelectedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeComponent.prototype, "dwCheckedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout(function () {
                _this.dwDefaultSubject.next({ type: 'dwCheckedKeys', keys: value });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeComponent.prototype, "dwSearchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.dwTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.dwSearchValueChange.emit(this.dwTreeService.formatEvent('search', null, null));
                this.dwOnSearchNode.emit(this.dwTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.getTreeNodes = /**
     * @return {?}
     */
    function () {
        return this.dwNodes;
    };
    /**
     * public function
     */
    /**
     * public function
     * @return {?}
     */
    DwTreeComponent.prototype.getCheckedNodeList = /**
     * public function
     * @return {?}
     */
    function () {
        return this.dwTreeService.getCheckedNodeList();
    };
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.getSelectedNodeList = /**
     * @return {?}
     */
    function () {
        return this.dwTreeService.getSelectedNodeList();
    };
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.dwTreeService.getHalfCheckedNodeList();
    };
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.getExpandedNodeList = /**
     * @return {?}
     */
    function () {
        return this.dwTreeService.getExpandedNodeList();
    };
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.getMatchedNodeList = /**
     * @return {?}
     */
    function () {
        return this.dwTreeService.getMatchedNodeList();
    };
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.dwTreeClass = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.dwShowLine,
            _a[this.prefixCls + "-icon-hide"] = !this.dwShowIcon,
            _a['draggable-tree'] = this.dwDraggable,
            _a);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value) && value.length > 0) {
            this.dwNodes = value;
            this.dwTreeService.conductOption.isCheckStrictly = this.dwCheckStrictly;
            this.dwTreeService.initTree(this.dwNodes);
        }
        else {
            if (value !== null) {
                console.warn('ngModel only accepts an array and should be not empty');
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwTreeComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.dwDefaultSubscription = this.dwDefaultSubject.subscribe(function (data) {
            if (data.keys.length === 0) {
                return;
            }
            switch (data.type) {
                case 'dwExpandedKeys':
                    _this.dwTreeService.calcExpandedKeys(data.keys, _this.dwNodes);
                    _this.dwExpandedKeysChange.emit(data.keys);
                    break;
                case 'dwSelectedKeys':
                    _this.dwTreeService.calcSelectedKeys(data.keys, _this.dwNodes, _this.dwMultiple);
                    _this.dwSelectedKeysChange.emit(data.keys);
                    break;
                case 'dwCheckedKeys':
                    _this.dwTreeService.calcCheckedKeys(data.keys, _this.dwNodes, _this.dwCheckStrictly);
                    _this.dwCheckedKeysChange.emit(data.keys);
                    break;
            }
        });
    };
    /**
     * @return {?}
     */
    DwTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.dwDefaultSubscription) {
            this.dwDefaultSubscription.unsubscribe();
            this.dwDefaultSubscription = null;
        }
    };
    DwTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-tree',
                    template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"dwTreeClass\">\n  <dw-tree-node\n    *ngFor=\"let node of dwNodes\"\n    [dwTreeNode]=\"node\"\n    [dwShowLine]=\"dwShowLine\"\n    [dwDraggable]=\"dwDraggable\"\n    [dwCheckable]=\"dwCheckable\"\n    [dwShowExpand]=\"dwShowExpand\"\n    [dwAsyncData]=\"dwAsyncData\"\n    [dwMultiple]=\"dwMultiple\"\n    [dwSearchValue]=\"dwSearchValue\"\n    [dwBeforeDrop]=\"dwBeforeDrop\"\n    [dwCheckStrictly]=\"dwCheckStrictly\"\n    [dwExpandAll]=\"dwExpandAll\"\n    [dwDefaultExpandAll]=\"dwDefaultExpandAll\"\n    [dwTreeTemplate]=\"dwTreeTemplate\"\n    (clickNode)=\"dwClick.emit($event)\"\n    (dblClick)=\"dwDblClick.emit($event)\"\n    (contextMenu)=\"dwContextMenu.emit($event)\"\n    (clickExpand)=\"dwExpandChange.emit($event)\"\n    (clickCheckBox)=\"dwCheckBoxChange.emit($event)\"\n    (dwDragStart)=\"dwOnDragStart.emit($event)\"\n    (dwDragEnter)=\"dwOnDragEnter.emit($event)\"\n    (dwDragOver)=\"dwOnDragOver.emit($event)\"\n    (dwDragLeave)=\"dwOnDragLeave.emit($event)\"\n    (dwDrop)=\"dwOnDrop.emit($event)\"\n    (dwDragEnd)=\"dwOnDragEnd.emit($event)\">\n  </dw-tree-node>\n</ul>",
                    providers: [
                        DwTreeService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwTreeComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    DwTreeComponent.ctorParameters = function () { return [
        { type: DwTreeService }
    ]; };
    DwTreeComponent.propDecorators = {
        dwShowIcon: [{ type: Input }],
        dwShowLine: [{ type: Input }],
        dwCheckStrictly: [{ type: Input }],
        dwCheckable: [{ type: Input }],
        dwShowExpand: [{ type: Input }],
        dwAsyncData: [{ type: Input }],
        dwDraggable: [{ type: Input }],
        dwMultiple: [{ type: Input }],
        dwExpandAll: [{ type: Input }],
        dwDefaultExpandAll: [{ type: Input }],
        dwBeforeDrop: [{ type: Input }],
        dwData: [{ type: Input }],
        dwDefaultExpandedKeys: [{ type: Input }],
        dwDefaultSelectedKeys: [{ type: Input }],
        dwDefaultCheckedKeys: [{ type: Input }],
        dwExpandedKeys: [{ type: Input }],
        dwSelectedKeys: [{ type: Input }],
        dwCheckedKeys: [{ type: Input }],
        dwSearchValue: [{ type: Input }],
        dwExpandedKeysChange: [{ type: Output }],
        dwSelectedKeysChange: [{ type: Output }],
        dwCheckedKeysChange: [{ type: Output }],
        dwSearchValueChange: [{ type: Output }],
        dwOnSearchNode: [{ type: Output }],
        dwClick: [{ type: Output }],
        dwDblClick: [{ type: Output }],
        dwContextMenu: [{ type: Output }],
        dwCheckBoxChange: [{ type: Output }],
        dwExpandChange: [{ type: Output }],
        dwOnDragStart: [{ type: Output }],
        dwOnDragEnter: [{ type: Output }],
        dwOnDragOver: [{ type: Output }],
        dwOnDragLeave: [{ type: Output }],
        dwOnDrop: [{ type: Output }],
        dwOnDragEnd: [{ type: Output }],
        dwTreeTemplate: [{ type: ContentChild, args: ['dwTreeTemplate',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwShowIcon", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwCheckStrictly", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwDraggable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeComponent.prototype, "dwMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeComponent.prototype, "dwExpandAll", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeComponent.prototype, "dwDefaultExpandAll", void 0);
    return DwTreeComponent;
}());
export { DwTreeComponent };
function DwTreeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTreeComponent.prototype.dwShowIcon;
    /** @type {?} */
    DwTreeComponent.prototype.dwShowLine;
    /** @type {?} */
    DwTreeComponent.prototype.dwCheckStrictly;
    /** @type {?} */
    DwTreeComponent.prototype.dwCheckable;
    /** @type {?} */
    DwTreeComponent.prototype.dwShowExpand;
    /** @type {?} */
    DwTreeComponent.prototype.dwAsyncData;
    /** @type {?} */
    DwTreeComponent.prototype.dwDraggable;
    /** @type {?} */
    DwTreeComponent.prototype.dwMultiple;
    /** @type {?} */
    DwTreeComponent.prototype.dwExpandAll;
    /**
     * @deprecated use
     * dwExpandAll instead
     * @type {?}
     */
    DwTreeComponent.prototype.dwDefaultExpandAll;
    /** @type {?} */
    DwTreeComponent.prototype.dwBeforeDrop;
    /** @type {?} */
    DwTreeComponent.prototype.dwExpandedKeysChange;
    /** @type {?} */
    DwTreeComponent.prototype.dwSelectedKeysChange;
    /** @type {?} */
    DwTreeComponent.prototype.dwCheckedKeysChange;
    /** @type {?} */
    DwTreeComponent.prototype.dwSearchValueChange;
    /**
     * @deprecated use
     * dwSearchValueChange instead
     * @type {?}
     */
    DwTreeComponent.prototype.dwOnSearchNode;
    /** @type {?} */
    DwTreeComponent.prototype.dwClick;
    /** @type {?} */
    DwTreeComponent.prototype.dwDblClick;
    /** @type {?} */
    DwTreeComponent.prototype.dwContextMenu;
    /** @type {?} */
    DwTreeComponent.prototype.dwCheckBoxChange;
    /** @type {?} */
    DwTreeComponent.prototype.dwExpandChange;
    /** @type {?} */
    DwTreeComponent.prototype.dwOnDragStart;
    /** @type {?} */
    DwTreeComponent.prototype.dwOnDragEnter;
    /** @type {?} */
    DwTreeComponent.prototype.dwOnDragOver;
    /** @type {?} */
    DwTreeComponent.prototype.dwOnDragLeave;
    /** @type {?} */
    DwTreeComponent.prototype.dwOnDrop;
    /** @type {?} */
    DwTreeComponent.prototype.dwOnDragEnd;
    /** @type {?} */
    DwTreeComponent.prototype.dwTreeTemplate;
    /** @type {?} */
    DwTreeComponent.prototype._searchValue;
    /** @type {?} */
    DwTreeComponent.prototype.dwDefaultSubject;
    /** @type {?} */
    DwTreeComponent.prototype.dwDefaultSubscription;
    /** @type {?} */
    DwTreeComponent.prototype.dwNodes;
    /** @type {?} */
    DwTreeComponent.prototype.prefixCls;
    /** @type {?} */
    DwTreeComponent.prototype.dwTreeClass;
    /** @type {?} */
    DwTreeComponent.prototype.onChange;
    /** @type {?} */
    DwTreeComponent.prototype.onTouched;
    /** @type {?} */
    DwTreeComponent.prototype.dwTreeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRyZWUvZHctdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFRyxNQUFNLEVBQUUsV0FBVyxFQUM1QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBcU5oRCx5QkFBbUIsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7MEJBck1ULEtBQUs7MEJBQ0wsS0FBSzsrQkFDQSxLQUFLOzJCQUNULEtBQUs7NEJBQ0osSUFBSTsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ04sS0FBSzsyQkFDSyxLQUFLOzs7OztrQ0FLRSxLQUFLOztvQ0EyRkgsSUFBSSxZQUFZLEVBQVk7b0NBQzVCLElBQUksWUFBWSxFQUFZO21DQUM3QixJQUFJLFlBQVksRUFBWTttQ0FFbkIsSUFBSSxZQUFZLEVBQUU7Ozs7OzhCQUt2QixJQUFJLFlBQVksRUFBRTt1QkFFekIsSUFBSSxZQUFZLEVBQUU7MEJBQ2YsSUFBSSxZQUFZLEVBQUU7NkJBQ2YsSUFBSSxZQUFZLEVBQUU7Z0NBQ2YsSUFBSSxZQUFZLEVBQUU7OEJBQ3BCLElBQUksWUFBWSxFQUFFOzZCQUVuQixJ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ZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFLZCxZQUFZLEVBQUU7OzswQkE1QzFCOztTQThCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LCBPdXRwdXQsIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LCBEd0Zvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4uL3RyZWUvaW50ZXJmYWNlJztcbmltcG9ydCB7IER3VHJlZU5vZGUgfSBmcm9tICcuL2R3LXRyZWUtbm9kZSc7XG5pbXBvcnQgeyBEd1RyZWVTZXJ2aWNlIH0gZnJvbSAnLi9kdy10cmVlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgIDogW1xuICAgIER3VHJlZVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdUcmVlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRHdUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdTaG93SWNvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdTaG93TGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdDaGVja1N0cmljdGx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0NoZWNrYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdTaG93RXhwYW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3QXN5bmNEYXRhID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0RyYWdnYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdNdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdFeHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBkd0V4cGFuZEFsbCBpbnN0ZWFkXG4gICAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdEZWZhdWx0RXhwYW5kQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3QmVmb3JlRHJvcDogKGNvbmZpcm06IER3Rm9ybWF0QmVmb3JlRHJvcEV2ZW50KSA9PiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IGR3RGF0YSh2YWx1ZTogYW55W10pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKCF0aGlzLmR3VHJlZVNlcnZpY2UuaXNBcnJheU9mRHdUcmVlTm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gaGFzIG5vdCBiZWVuIG5ldyBEd1RyZWVOb2RlXG4gICAgICAgIHRoaXMuZHdOb2RlcyA9IHZhbHVlLm1hcChpdGVtID0+IChuZXcgRHdUcmVlTm9kZShpdGVtKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kd05vZGVzID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuY29uZHVjdE9wdGlvbi5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLmR3Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmR3Tm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCduZ01vZGVsIG9ubHkgYWNjZXB0cyBhbiBhcnJheSBhbmQgc2hvdWxkIGJlIG5vdCBlbXB0eScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogZHdFeHBhbmRlZEtleXMgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGR3RGVmYXVsdEV4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZHdEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ2R3RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIGR3U2VsZWN0ZWRLZXlzIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RlZmF1bHRTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmR3RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICdkd1NlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBkd0NoZWNrZWRLZXlzIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZHdEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ2R3Q2hlY2tlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0V4cGFuZGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZHdEZWZhdWx0U3ViamVjdC5uZXh0KHsgdHlwZTogJ2R3RXhwYW5kZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWxlY3RlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmR3RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICdkd1NlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmR3RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICdkd0NoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2VhcmNoRXhwYW5kKHZhbHVlKTtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLmR3U2VhcmNoVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcbiAgICAgIHRoaXMuZHdPblNlYXJjaE5vZGUuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ3NlYXJjaCcsIG51bGwsIG51bGwpKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdTZWFyY2hWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcbiAgfVxuXG4gIC8vIG1vZGVsIGJpbmRcbiAgQE91dHB1dCgpIGR3RXhwYW5kZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIGR3U2VsZWN0ZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIGR3Q2hlY2tlZEtleXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIEBPdXRwdXQoKSBkd1NlYXJjaFZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIGR3U2VhcmNoVmFsdWVDaGFuZ2UgaW5zdGVhZFxuICAgKi9cbiAgQE91dHB1dCgpIGR3T25TZWFyY2hOb2RlOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBkd0NsaWNrOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdEYmxDbGljazogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3Q29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd0NoZWNrQm94Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdFeHBhbmRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpIGR3T25EcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd09uRHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdPbkRyYWdPdmVyOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdPbkRyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3T25Ecm9wOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdPbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAQ29udGVudENoaWxkKCdkd1RyZWVUZW1wbGF0ZScpIGR3VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBfc2VhcmNoVmFsdWUgPSAnJztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBkd0RlZmF1bHRTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgZHdEZWZhdWx0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGR3Tm9kZXM6IER3VHJlZU5vZGVbXSA9IFtdO1xuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xuICBkd1RyZWVDbGFzcyA9IHt9O1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IER3VHJlZU5vZGVbXSkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgZ2V0VHJlZU5vZGVzKCk6IER3VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZHdOb2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBwdWJsaWMgZnVuY3Rpb25cbiAgICovXG4gIGdldENoZWNrZWROb2RlTGlzdCgpOiBEd1RyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmR3VHJlZVNlcnZpY2UuZ2V0Q2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRTZWxlY3RlZE5vZGVMaXN0KCk6IER3VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZHdUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk6IER3VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZHdUcmVlU2VydmljZS5nZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRFeHBhbmRlZE5vZGVMaXN0KCk6IER3VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZHdUcmVlU2VydmljZS5nZXRFeHBhbmRlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBnZXRNYXRjaGVkTm9kZUxpc3QoKTogRHdUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5kd1RyZWVTZXJ2aWNlLmdldE1hdGNoZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5kd1RyZWVDbGFzcyA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgKyAnLXNob3ctbGluZScgXTogdGhpcy5kd1Nob3dMaW5lLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbi1oaWRlYCBdOiAhdGhpcy5kd1Nob3dJY29uLFxuICAgICAgWyAnZHJhZ2dhYmxlLXRyZWUnIF0gICAgICAgICAgICAgOiB0aGlzLmR3RHJhZ2dhYmxlXG4gICAgfTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IER3VHJlZU5vZGVbXSk6IHZvaWQge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmR3Tm9kZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMuZHdDaGVja1N0cmljdGx5O1xuICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMuZHdOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25nTW9kZWwgb25seSBhY2NlcHRzIGFuIGFycmF5IGFuZCBzaG91bGQgYmUgbm90IGVtcHR5Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IER3VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkd1RyZWVTZXJ2aWNlOiBEd1RyZWVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5kd0RlZmF1bHRTdWJzY3JpcHRpb24gPSB0aGlzLmR3RGVmYXVsdFN1YmplY3Quc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZywga2V5czogc3RyaW5nW10gfSkgPT4ge1xuICAgICAgaWYgKGRhdGEua2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnZHdFeHBhbmRlZEtleXMnOlxuICAgICAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5kd05vZGVzKTtcbiAgICAgICAgICB0aGlzLmR3RXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZHdTZWxlY3RlZEtleXMnOlxuICAgICAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5kd05vZGVzLCB0aGlzLmR3TXVsdGlwbGUpO1xuICAgICAgICAgIHRoaXMuZHdTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkd0NoZWNrZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5kd05vZGVzLCB0aGlzLmR3Q2hlY2tTdHJpY3RseSk7XG4gICAgICAgICAgdGhpcy5kd0NoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGVmYXVsdFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5kd0RlZmF1bHRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZHdEZWZhdWx0U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
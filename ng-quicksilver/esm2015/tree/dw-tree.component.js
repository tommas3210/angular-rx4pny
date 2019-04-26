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
export class DwTreeComponent {
    /**
     * @param {?} dwTreeService
     */
    constructor(dwTreeService) {
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
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwData(value) {
        if (Array.isArray(value) && value.length > 0) {
            if (!this.dwTreeService.isArrayOfDwTreeNode(value)) {
                // has not been new DwTreeNode
                this.dwNodes = value.map(item => (new DwTreeNode(item)));
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
    }
    /**
     * @deprecated use
     * dwExpandedKeys instead
     * @param {?} value
     * @return {?}
     */
    set dwDefaultExpandedKeys(value) {
        setTimeout(() => {
            this.dwDefaultSubject.next({ type: 'dwExpandedKeys', keys: value });
        });
    }
    /**
     * @deprecated use
     * dwSelectedKeys instead
     * @param {?} value
     * @return {?}
     */
    set dwDefaultSelectedKeys(value) {
        setTimeout(() => {
            this.dwDefaultSubject.next({ type: 'dwSelectedKeys', keys: value });
        });
    }
    /**
     * @deprecated use
     * dwCheckedKeys instead
     * @param {?} value
     * @return {?}
     */
    set dwDefaultCheckedKeys(value) {
        setTimeout(() => {
            this.dwDefaultSubject.next({ type: 'dwCheckedKeys', keys: value });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwExpandedKeys(value) {
        setTimeout(() => {
            this.dwDefaultSubject.next({ type: 'dwExpandedKeys', keys: value });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSelectedKeys(value) {
        setTimeout(() => {
            this.dwDefaultSubject.next({ type: 'dwSelectedKeys', keys: value });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCheckedKeys(value) {
        setTimeout(() => {
            this.dwDefaultSubject.next({ type: 'dwCheckedKeys', keys: value });
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSearchValue(value) {
        this._searchValue = value;
        this.dwTreeService.searchExpand(value);
        if (isNotNil(value)) {
            this.dwSearchValueChange.emit(this.dwTreeService.formatEvent('search', null, null));
            this.dwOnSearchNode.emit(this.dwTreeService.formatEvent('search', null, null));
        }
    }
    /**
     * @return {?}
     */
    get dwSearchValue() {
        return this._searchValue;
    }
    /**
     * @return {?}
     */
    getTreeNodes() {
        return this.dwNodes;
    }
    /**
     * public function
     * @return {?}
     */
    getCheckedNodeList() {
        return this.dwTreeService.getCheckedNodeList();
    }
    /**
     * @return {?}
     */
    getSelectedNodeList() {
        return this.dwTreeService.getSelectedNodeList();
    }
    /**
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.dwTreeService.getHalfCheckedNodeList();
    }
    /**
     * @return {?}
     */
    getExpandedNodeList() {
        return this.dwTreeService.getExpandedNodeList();
    }
    /**
     * @return {?}
     */
    getMatchedNodeList() {
        return this.dwTreeService.getMatchedNodeList();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.dwTreeClass = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.dwShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.dwShowIcon,
            ['draggable-tree']: this.dwDraggable
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
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
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.dwDefaultSubscription = this.dwDefaultSubject.subscribe((data) => {
            if (data.keys.length === 0) {
                return;
            }
            switch (data.type) {
                case 'dwExpandedKeys':
                    this.dwTreeService.calcExpandedKeys(data.keys, this.dwNodes);
                    this.dwExpandedKeysChange.emit(data.keys);
                    break;
                case 'dwSelectedKeys':
                    this.dwTreeService.calcSelectedKeys(data.keys, this.dwNodes, this.dwMultiple);
                    this.dwSelectedKeysChange.emit(data.keys);
                    break;
                case 'dwCheckedKeys':
                    this.dwTreeService.calcCheckedKeys(data.keys, this.dwNodes, this.dwCheckStrictly);
                    this.dwCheckedKeysChange.emit(data.keys);
                    break;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dwDefaultSubscription) {
            this.dwDefaultSubscription.unsubscribe();
            this.dwDefaultSubscription = null;
        }
    }
}
DwTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-tree',
                template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"dwTreeClass\">\n  <dw-tree-node\n    *ngFor=\"let node of dwNodes\"\n    [dwTreeNode]=\"node\"\n    [dwShowLine]=\"dwShowLine\"\n    [dwDraggable]=\"dwDraggable\"\n    [dwCheckable]=\"dwCheckable\"\n    [dwShowExpand]=\"dwShowExpand\"\n    [dwAsyncData]=\"dwAsyncData\"\n    [dwMultiple]=\"dwMultiple\"\n    [dwSearchValue]=\"dwSearchValue\"\n    [dwBeforeDrop]=\"dwBeforeDrop\"\n    [dwCheckStrictly]=\"dwCheckStrictly\"\n    [dwExpandAll]=\"dwExpandAll\"\n    [dwDefaultExpandAll]=\"dwDefaultExpandAll\"\n    [dwTreeTemplate]=\"dwTreeTemplate\"\n    (clickNode)=\"dwClick.emit($event)\"\n    (dblClick)=\"dwDblClick.emit($event)\"\n    (contextMenu)=\"dwContextMenu.emit($event)\"\n    (clickExpand)=\"dwExpandChange.emit($event)\"\n    (clickCheckBox)=\"dwCheckBoxChange.emit($event)\"\n    (dwDragStart)=\"dwOnDragStart.emit($event)\"\n    (dwDragEnter)=\"dwOnDragEnter.emit($event)\"\n    (dwDragOver)=\"dwOnDragOver.emit($event)\"\n    (dwDragLeave)=\"dwOnDragLeave.emit($event)\"\n    (dwDrop)=\"dwOnDrop.emit($event)\"\n    (dwDragEnd)=\"dwOnDragEnd.emit($event)\">\n  </dw-tree-node>\n</ul>",
                providers: [
                    DwTreeService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DwTreeComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
DwTreeComponent.ctorParameters = () => [
    { type: DwTreeService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRyZWUvZHctdHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFRyxNQUFNLEVBQUUsV0FBVyxFQUM1QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQWMsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFlbEQsTUFBTTs7OztJQXNNSixZQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTswQkFyTVQsS0FBSzswQkFDTCxLQUFLOytCQUNBLEtBQUs7MkJBQ1QsS0FBSzs0QkFDSixJQUFJOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTixLQUFLOzJCQUNLLEtBQUs7Ozs7O2tDQUtFLEtBQUs7O29DQTJGSCxJQUFJLFlBQVksRUFBWTtvQ0FDNUIsSUFBSSxZQUFZLEVBQVk7bUNBQzdCLElBQUksWUFBWSxFQUFZO21DQUVuQixJQUFJLFlBQVksRUFBRTs7Ozs7OEJBS3ZCLElBQUksWUFBWSxFQUFFO3VCQUV6QixJQUFJLFlBQVksRUFBRTswQkFDZixJQUFJLFlBQVksRUFBRTs2QkFDZixJQUFJLFlBQVksRUFBRTtnQ0FDZixJQUFJLFlBQVksRUFBRTs4QkFDcEIsSUFBSSxZQUFZLEVB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TyxFQUFNLGlCQUFpQjt3QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQzlDLEtBQUssRUFBUSxJQUFJO3FCQUNsQjtpQkFDRjthQUNGOzs7O1lBYlEsYUFBYTs7O3lCQWdCbkIsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBS0wsS0FBSzsyQkFDTCxLQUFLO3FCQUVMLEtBQUs7b0NBdUJMLEtBQUs7b0NBV0wsS0FBSzttQ0FXTCxLQUFLOzZCQU9MLEtBQUs7NkJBT0wsS0FBSzs0QkFPTCxLQUFLOzRCQU9MLEtBQUs7bUNBZUwsTUFBTTttQ0FDTixNQUFNO2tDQUNOLE1BQU07a0NBRU4sTUFBTTs2QkFLTixNQUFNO3NCQUVOLE1BQU07eUJBQ04sTUFBTTs0QkFDTixNQUFNOytCQUNOLE1BQU07NkJBQ04sTUFBTTs0QkFFTixNQUFNOzRCQUNOLE1BQU07MkJBQ04sTUFBTTs0QkFDTixNQUFNO3VCQUNOLE1BQU07MEJBQ04sTUFBTTs2QkFHTixZQUFZLFNBQUMsZ0JBQWdCOzs7SUFqSXBCLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQUtkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd0Zvcm1hdEJlZm9yZURyb3BFdmVudCwgRHdGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi90cmVlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEd1RyZWVOb2RlIH0gZnJvbSAnLi9kdy10cmVlLW5vZGUnO1xuaW1wb3J0IHsgRHdUcmVlU2VydmljZSB9IGZyb20gJy4vZHctdHJlZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFtcbiAgICBEd1RyZWVTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER3VHJlZUNvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIER3VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3U2hvd0ljb24gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3U2hvd0xpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3Q2hlY2tTdHJpY3RseSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdDaGVja2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3U2hvd0V4cGFuZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0FzeW5jRGF0YSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdEcmFnZ2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RXhwYW5kQWxsOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogZHdFeHBhbmRBbGwgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RGVmYXVsdEV4cGFuZEFsbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkd0JlZm9yZURyb3A6IChjb25maXJtOiBEd0Zvcm1hdEJlZm9yZURyb3BFdmVudCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBkd0RhdGEodmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICghdGhpcy5kd1RyZWVTZXJ2aWNlLmlzQXJyYXlPZkR3VHJlZU5vZGUodmFsdWUpKSB7XG4gICAgICAgIC8vIGhhcyBub3QgYmVlbiBuZXcgRHdUcmVlTm9kZVxuICAgICAgICB0aGlzLmR3Tm9kZXMgPSB2YWx1ZS5tYXAoaXRlbSA9PiAobmV3IER3VHJlZU5vZGUoaXRlbSkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHdOb2RlcyA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5ID0gdGhpcy5kd0NoZWNrU3RyaWN0bHk7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuaW5pdFRyZWUodGhpcy5kd05vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignbmdNb2RlbCBvbmx5IGFjY2VwdHMgYW4gYXJyYXkgYW5kIHNob3VsZCBiZSBub3QgZW1wdHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIGR3RXhwYW5kZWRLZXlzIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmR3RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICdkd0V4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBkd1NlbGVjdGVkS2V5cyBpbnN0ZWFkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdEZWZhdWx0U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kd0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnZHdTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogZHdDaGVja2VkS2V5cyBpbnN0ZWFkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdEZWZhdWx0Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmR3RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICdkd0NoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmR3RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICdkd0V4cGFuZGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2VsZWN0ZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kd0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnZHdTZWxlY3RlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NoZWNrZWRLZXlzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kd0RlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnZHdDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5kd1RyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5kd1NlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5kd1RyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgICB0aGlzLmR3T25TZWFyY2hOb2RlLmVtaXQodGhpcy5kd1RyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICAvLyBtb2RlbCBiaW5kXG4gIEBPdXRwdXQoKSBkd0V4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSBkd1NlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSBkd0NoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICBAT3V0cHV0KCkgZHdTZWFyY2hWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBkd1NlYXJjaFZhbHVlQ2hhbmdlIGluc3RlYWRcbiAgICovXG4gIEBPdXRwdXQoKSBkd09uU2VhcmNoTm9kZTogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgZHdDbGljazogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd0NvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdDaGVja0JveENoYW5nZTogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSBkd09uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdPbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3T25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3T25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd09uRHJvcDogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3T25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQENvbnRlbnRDaGlsZCgnZHdUcmVlVGVtcGxhdGUnKSBkd1RyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgX3NlYXJjaFZhbHVlID0gJyc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZHdEZWZhdWx0U3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gIGR3RGVmYXVsdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBkd05vZGVzOiBEd1RyZWVOb2RlW10gPSBbXTtcbiAgcHJlZml4Q2xzID0gJ2FudC10cmVlJztcbiAgZHdUcmVlQ2xhc3MgPSB7fTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBEd1RyZWVOb2RlW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIGdldFRyZWVOb2RlcygpOiBEd1RyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmR3Tm9kZXM7XG4gIH1cblxuICAvKipcbiAgICogcHVibGljIGZ1bmN0aW9uXG4gICAqL1xuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogRHdUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5kd1RyZWVTZXJ2aWNlLmdldENoZWNrZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWROb2RlTGlzdCgpOiBEd1RyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmR3VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpOiBEd1RyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmR3VHJlZVNlcnZpY2UuZ2V0SGFsZkNoZWNrZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBEd1RyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmR3VHJlZVNlcnZpY2UuZ2V0RXhwYW5kZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IER3VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZHdUcmVlU2VydmljZS5nZXRNYXRjaGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuZHdUcmVlQ2xhc3MgPSB7XG4gICAgICBbIHRoaXMucHJlZml4Q2xzIF0gICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIHRoaXMucHJlZml4Q2xzICsgJy1zaG93LWxpbmUnIF06IHRoaXMuZHdTaG93TGluZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb24taGlkZWAgXTogIXRoaXMuZHdTaG93SWNvbixcbiAgICAgIFsgJ2RyYWdnYWJsZS10cmVlJyBdICAgICAgICAgICAgIDogdGhpcy5kd0RyYWdnYWJsZVxuICAgIH07XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEd1RyZWVOb2RlW10pOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kd05vZGVzID0gdmFsdWU7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuY29uZHVjdE9wdGlvbi5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLmR3Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLmR3Tm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCduZ01vZGVsIG9ubHkgYWNjZXB0cyBhbiBhcnJheSBhbmQgc2hvdWxkIGJlIG5vdCBlbXB0eScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBEd1RyZWVOb2RlW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHdUcmVlU2VydmljZTogRHdUcmVlU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuZHdEZWZhdWx0U3Vic2NyaXB0aW9uID0gdGhpcy5kd0RlZmF1bHRTdWJqZWN0LnN1YnNjcmliZSgoZGF0YTogeyB0eXBlOiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdIH0pID0+IHtcbiAgICAgIGlmIChkYXRhLmtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoZGF0YS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2R3RXhwYW5kZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuY2FsY0V4cGFuZGVkS2V5cyhkYXRhLmtleXMsIHRoaXMuZHdOb2Rlcyk7XG4gICAgICAgICAgdGhpcy5kd0V4cGFuZGVkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2R3U2VsZWN0ZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuY2FsY1NlbGVjdGVkS2V5cyhkYXRhLmtleXMsIHRoaXMuZHdOb2RlcywgdGhpcy5kd011bHRpcGxlKTtcbiAgICAgICAgICB0aGlzLmR3U2VsZWN0ZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZHdDaGVja2VkS2V5cyc6XG4gICAgICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLmNhbGNDaGVja2VkS2V5cyhkYXRhLmtleXMsIHRoaXMuZHdOb2RlcywgdGhpcy5kd0NoZWNrU3RyaWN0bHkpO1xuICAgICAgICAgIHRoaXMuZHdDaGVja2VkS2V5c0NoYW5nZS5lbWl0KGRhdGEua2V5cyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0RlZmF1bHRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZHdEZWZhdWx0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmR3RGVmYXVsdFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=
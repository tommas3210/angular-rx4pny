/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { InputBoolean } from '../core/util/convert';
import { DwTreeNode } from './dw-tree-node';
import { isCheckDisabled } from './dw-tree-util';
import { DwTreeService } from './dw-tree.service';
var DwTreeNodeComponent = /** @class */ (function () {
    function DwTreeNodeComponent(dwTreeService, ngZone, renderer, elRef) {
        var _this = this;
        this.dwTreeService = dwTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        // Output
        this.clickNode = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.contextMenu = new EventEmitter();
        this.clickCheckBox = new EventEmitter();
        this.clickExpand = new EventEmitter();
        this.dwDragStart = new EventEmitter();
        this.dwDragEnter = new EventEmitter();
        this.dwDragOver = new EventEmitter();
        this.dwDragLeave = new EventEmitter();
        this.dwDrop = new EventEmitter();
        this.dwDragEnd = new EventEmitter();
        // default var
        this.prefixCls = 'ant-tree';
        this.highlightKeys = [];
        this.dwNodeClass = {};
        this.dwNodeSwitcherClass = {};
        this.dwNodeContentClass = {};
        this.dwNodeContentIconClass = {};
        this.dwNodeContentLoadingClass = {};
        this.dwNodeChildrenClass = {};
        /**
         * drag var
         */
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        this._searchValue = '';
        this._dwExpandAll = false;
        ngZone.runOutsideAngular(function () {
            fromEvent(_this.elRef.nativeElement, 'dragstart').subscribe(function (e) { return _this.handleDragStart(e); });
            fromEvent(_this.elRef.nativeElement, 'dragenter').subscribe(function (e) { return _this.handleDragEnter(e); });
            fromEvent(_this.elRef.nativeElement, 'dragover').subscribe(function (e) { return _this.handleDragOver(e); });
            fromEvent(_this.elRef.nativeElement, 'dragleave').subscribe(function (e) { return _this.handleDragLeave(e); });
            fromEvent(_this.elRef.nativeElement, 'drop').subscribe(function (e) { return _this.handleDragDrop(e); });
            fromEvent(_this.elRef.nativeElement, 'dragend').subscribe(function (e) { return _this.handleDragEnd(e); });
        });
    }
    Object.defineProperty(DwTreeNodeComponent.prototype, "dwTreeNode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dwTreeNode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // add to checked list & selected list
            if (value.isChecked) {
                this.dwTreeService.setCheckedNodeList(value);
            }
            // add select list
            if (value.isSelected) {
                this.dwTreeService.setSelectedNodeList(value, this.dwMultiple);
            }
            if (!value.isLeaf) {
                this.dwTreeService.setExpandedNodeList(value);
            }
            this._dwTreeNode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeNodeComponent.prototype, "dwDefaultExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dwExpandAll;
        },
        /**
         * @deprecated use
         * dwExpandAll instead
         */
        set: /**
         * @deprecated use
         * dwExpandAll instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dwExpandAll = value;
            if (value && this.dwTreeNode && !this.dwTreeNode.isLeaf) {
                this.dwTreeNode.setExpanded(true);
                this.dwTreeService.setExpandedNodeList(this.dwTreeNode);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeNodeComponent.prototype, "dwExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dwExpandAll;
        },
        // default set
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dwExpandAll = value;
            if (value && this.dwTreeNode && !this.dwTreeNode.isLeaf) {
                this.dwTreeNode.setExpanded(true);
                this.dwTreeService.setExpandedNodeList(this.dwTreeNode);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeNodeComponent.prototype, "dwSearchValue", {
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
            this.highlightKeys = [];
            if (value && this.dwTreeNode.title.includes(value)) {
                this.dwTreeNode.isMatched = true;
                /** @type {?} */
                var index = this.dwTreeNode.title.indexOf(value);
                this.highlightKeys.push(this.dwTreeNode.title.slice(0, index));
                this.highlightKeys.push(this.dwTreeNode.title.slice(index + value.length, this.dwTreeNode.title.length));
            }
            else {
                // close the node if title does't contain search value
                this.dwTreeNode.isMatched = false;
            }
            this._searchValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeNodeComponent.prototype, "canDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.dwDraggable && this.dwTreeNode && !this.dwTreeNode.isDisabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.dwTreeNode.isExpanded && !this.dwTreeNode.isLeaf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeNodeComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.dwTreeNode.isExpanded && !this.dwTreeNode.isLeaf);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset node class
     */
    /**
     * reset node class
     * @return {?}
     */
    DwTreeNodeComponent.prototype.setClassMap = /**
     * reset node class
     * @return {?}
     */
    function () {
        var _a, _b, _c, _d, _e, _f;
        this.dwNodeClass = (_a = {},
            _a[this.prefixCls + "-treenode-disabled"] = this.dwTreeNode.isDisabled,
            _a);
        this.dwNodeSwitcherClass = (_b = {},
            _b[this.prefixCls + "-switcher"] = true,
            _b[this.prefixCls + "-switcher-noop"] = this.dwTreeNode.isLeaf,
            _b);
        this.dwNodeContentClass = (_c = {},
            _c[this.prefixCls + "-node-content-wrapper"] = true,
            _c);
        this.dwNodeContentIconClass = (_d = {},
            _d[this.prefixCls + "-iconEle"] = true,
            _d[this.prefixCls + "-icon__customize"] = true,
            _d);
        this.dwNodeContentLoadingClass = (_e = {},
            _e[this.prefixCls + "-iconEle"] = true,
            _e);
        this.dwNodeChildrenClass = (_f = {},
            _f[this.prefixCls + "-child-tree"] = true,
            _f[this.prefixCls + "-child-tree-open"] = true,
            _f);
    };
    /**
     * click node to select, 200ms to dbl click
     */
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    DwTreeNodeComponent.prototype.dwClick = /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.dwTreeNode.isSelectable) {
            this.dwTreeService.setNodeActive(this.dwTreeNode, this.dwMultiple);
        }
        this.clickNode.emit(this.dwTreeService.formatEvent('click', this.dwTreeNode, event));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DwTreeNodeComponent.prototype.dwDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.dblClick.emit(this.dwTreeService.formatEvent('dblclick', this.dwTreeNode, event));
    };
    /**
     * @param event
     */
    /**
     * @param {?} event
     * @return {?}
     */
    DwTreeNodeComponent.prototype.dwContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.contextMenu.emit(this.dwTreeService.formatEvent('contextmenu', this.dwTreeNode, event));
    };
    /**
     * collapse node
     * @param event
     */
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    DwTreeNodeComponent.prototype._clickExpand = /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.dwTreeNode.isLoading && !this.dwTreeNode.isLeaf) {
            // set async state
            if (this.dwAsyncData && this.dwTreeNode.getChildren().length === 0 && !this.dwTreeNode.isExpanded) {
                this.dwTreeNode.isLoading = true;
            }
            this.dwTreeNode.setExpanded(!this.dwTreeNode.isExpanded);
            this.dwTreeService.setExpandedNodeList(this.dwTreeNode);
            this.clickExpand.emit(this.dwTreeService.formatEvent('expand', this.dwTreeNode, event));
        }
    };
    /**
     * check node
     * @param event
     */
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    DwTreeNodeComponent.prototype._clickCheckBox = /**
     * check node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (isCheckDisabled(this.dwTreeNode)) {
            return;
        }
        this.dwTreeNode.setChecked(!this.dwTreeNode.isChecked);
        this.dwTreeService.setCheckedNodeList(this.dwTreeNode);
        if (!this.dwCheckStrictly) {
            this.dwTreeService.conduct(this.dwTreeNode);
        }
        this.clickCheckBox.emit(this.dwTreeService.formatEvent('check', this.dwTreeNode, event));
    };
    /**
     * drag event
     * @param e
     */
    /**
     * drag event
     * @return {?}
     */
    DwTreeNodeComponent.prototype.clearDragClass = /**
     * drag event
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(function (e) {
            _this.renderer.removeClass(_this.dragElement.nativeElement, e);
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTreeNodeComponent.prototype.handleDragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', '');
        }
        catch (error) {
            // empty
        }
        this.dwTreeService.setSelectedNode(this.dwTreeNode);
        this.dwTreeNode.setExpanded(false);
        this.dwDragStart.emit(this.dwTreeService.formatEvent('dragstart', null, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTreeNodeComponent.prototype.handleDragEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(function () {
            if ((_this.dwTreeNode !== _this.dwTreeService.getSelectedNode()) && !_this.dwTreeNode.isLeaf) {
                _this.dwTreeNode.setExpanded(true);
            }
        });
        this.dwDragEnter.emit(this.dwTreeService.formatEvent('dragenter', this.dwTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTreeNodeComponent.prototype.handleDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var dropPosition = this.dwTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.dwTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        this.dwDragOver.emit(this.dwTreeService.formatEvent('dragover', this.dwTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTreeNodeComponent.prototype.handleDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
        });
        this.dwDragLeave.emit(this.dwTreeService.formatEvent('dragleave', this.dwTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTreeNodeComponent.prototype.handleDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
            if (_this.dwTreeService.getSelectedNode() === _this.dwTreeNode) {
                return;
            }
            else if (_this.dragPos === 0 && _this.dwTreeNode.isLeaf) {
                return;
            }
            // pass if node is leafNo
            if (_this.dwBeforeDrop) {
                _this.dwBeforeDrop({
                    dragNode: _this.dwTreeService.getSelectedNode(),
                    node: _this.dwTreeNode,
                    pos: _this.dragPos
                }).subscribe(function (canDrop) {
                    if (canDrop) {
                        _this.dwTreeService.dropAndApply(_this.dwTreeNode, _this.dragPos);
                    }
                    _this.dwDrop.emit(_this.dwTreeService.formatEvent('drop', _this.dwTreeNode, e));
                    _this.dwDragEnd.emit(_this.dwTreeService.formatEvent('dragend', _this.dwTreeNode, e));
                });
            }
            else if (_this.dwTreeNode) {
                _this.dwTreeService.dropAndApply(_this.dwTreeNode, _this.dragPos);
                _this.dwDrop.emit(_this.dwTreeService.formatEvent('drop', _this.dwTreeNode, e));
            }
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTreeNodeComponent.prototype.handleDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            // if user do not custom beforeDrop
            if (!_this.dwBeforeDrop) {
                _this.dwTreeService.setSelectedNode(null);
                _this.dwDragEnd.emit(_this.dwTreeService.formatEvent('dragend', _this.dwTreeNode, e));
            }
        });
    };
    /**
     * @return {?}
     */
    DwTreeNodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwTreeNodeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
    };
    DwTreeNodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-tree-node',
                    template: "<li\n  #dragElement\n  role=\"treeitem\"\n  [ngClass]=\"dwNodeClass\"\n  [class.ant-tree-treenode-switcher-open]=\"isSwitcherOpen\"\n  [class.ant-tree-treenode-switcher-close]=\"isSwitcherClose\"\n  [class.ant-tree-treenode-checkbox-checked]=\"dwTreeNode.isChecked\"\n  [class.ant-tree-treenode-checkbox-indeterminate]=\"dwTreeNode.isHalfChecked\"\n  [class.ant-tree-treenode-selected]=\"dwTreeNode.isSelected\"\n  [class.ant-tree-treenode-loading]=\"dwTreeNode.isLoading\">\n  <ng-container *ngIf=\"dwShowExpand\">\n    <span\n      [ngClass]=\"dwNodeSwitcherClass\"\n      [class.ant-tree-switcher_open]=\"isSwitcherOpen\"\n      [class.ant-tree-switcher_close]=\"isSwitcherClose\"\n      (click)=\"_clickExpand($event)\">\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"dwCheckable\">\n    <span\n      class=\"ant-tree-checkbox\"\n      [class.ant-tree-checkbox-checked]=\"dwTreeNode.isChecked\"\n      [class.ant-tree-checkbox-indeterminate]=\"dwTreeNode.isHalfChecked\"\n      [class.ant-tree-checkbox-disabled]=\"(dwTreeNode.isDisabled || dwTreeNode.isDisableCheckbox)\"\n      (click)=\"_clickCheckBox($event)\">\n      <span class=\"ant-tree-checkbox-inner\"></span>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"!dwTreeTemplate\">\n    <span\n      title=\"{{dwTreeNode.title}}\"\n      [attr.draggable]=\"canDraggable\"\n      [attr.aria-grabbed]=\"canDraggable\"\n      [ngClass]=\"dwNodeContentClass\"\n      [class.ant-tree-node-content-wrapper-open]=\"isSwitcherOpen\"\n      [class.ant-tree-node-content-wrapper-close]=\"isSwitcherClose\"\n      [class.ant-tree-node-selected]=\"dwTreeNode.isSelected\"\n      [class.draggable]=\"canDraggable\">\n      <span\n        *ngIf=\"dwTreeNode.origin.icon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"dwTreeNode.isLoading\"\n        [ngClass]=\"dwNodeContentLoadingClass\">\n        <span\n          [ngClass]=\"dwNodeContentIconClass\">\n          <i class=\"anticon\" [ngClass]=\"dwTreeNode.origin.icon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\">\n        <ng-container *ngIf=\"dwTreeNode.isMatched\">\n          <span>\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{dwSearchValue}}</span>{{highlightKeys[1]}}\n          </span>\n        </ng-container>\n        <ng-container *ngIf=\"!dwTreeNode.isMatched\">\n          {{dwTreeNode.title}}\n        </ng-container>\n      </span>\n    </span>\n  </ng-container>\n  <ng-template\n    [ngTemplateOutlet]=\"dwTreeTemplate\"\n    [ngTemplateOutletContext]=\"{ $implicit: dwTreeNode }\">\n  </ng-template>\n\n  <ul\n    role=\"group\"\n    [attr.data-expanded]=\"dwTreeNode.isExpanded\"\n    [ngClass]=\"dwNodeChildrenClass\"\n    [@nodeState]=\"dwTreeNode.isExpanded ? 'active' : 'inactive'\">\n    <dw-tree-node\n      *ngFor=\"let node of dwTreeNode.getChildren()\"\n      [dwTreeNode]=\"node\"\n      [dwShowLine]=\"dwShowLine\"\n      [dwDraggable]=\"dwDraggable\"\n      [dwCheckable]=\"dwCheckable\"\n      [dwShowExpand]=\"dwShowExpand\"\n      [dwAsyncData]=\"dwAsyncData\"\n      [dwMultiple]=\"dwMultiple\"\n      [dwExpandAll]=\"dwExpandAll\"\n      [dwDefaultExpandAll]=\"dwDefaultExpandAll\"\n      [dwSearchValue]=\"dwSearchValue\"\n      [dwBeforeDrop]=\"dwBeforeDrop\"\n      [dwCheckStrictly]=\"dwCheckStrictly\"\n      [dwTreeTemplate]=\"dwTreeTemplate\"\n      (clickNode)=\"clickNode.emit($event)\"\n      (dblClick)=\"dblClick.emit($event)\"\n      (contextMenu)=\"contextMenu.emit($event)\"\n      (clickExpand)=\"clickExpand.emit($event)\"\n      (clickCheckBox)=\"clickCheckBox.emit($event)\"\n      (dwDragStart)=\"dwDragStart.emit($event)\"\n      (dwDragEnter)=\"dwDragEnter.emit($event)\"\n      (dwDragOver)=\"dwDragOver.emit($event)\"\n      (dwDragLeave)=\"dwDragLeave.emit($event)\"\n      (dwDrop)=\"dwDrop.emit($event)\"\n      (dwDragEnd)=\"dwDragEnd.emit($event)\">\n    </dw-tree-node>\n  </ul>\n</li>",
                    preserveWhitespaces: false,
                    animations: [
                        trigger('nodeState', [
                            state('inactive', style({
                                opacity: '0',
                                height: '0',
                                display: 'none'
                            })),
                            state('active', style({
                                opacity: '1',
                                height: '*'
                            })),
                            transition('inactive => active', animate('100ms ease-in')),
                            transition('active => inactive', animate('100ms ease-out'))
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    DwTreeNodeComponent.ctorParameters = function () { return [
        { type: DwTreeService },
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    DwTreeNodeComponent.propDecorators = {
        dragElement: [{ type: ViewChild, args: ['dragElement',] }],
        dwShowLine: [{ type: Input }],
        dwShowExpand: [{ type: Input }],
        dwDraggable: [{ type: Input }],
        dwMultiple: [{ type: Input }],
        dwCheckable: [{ type: Input }],
        dwAsyncData: [{ type: Input }],
        dwCheckStrictly: [{ type: Input }],
        dwTreeTemplate: [{ type: Input }],
        dwBeforeDrop: [{ type: Input }],
        dwTreeNode: [{ type: Input }],
        dwDefaultExpandAll: [{ type: Input }],
        dwExpandAll: [{ type: Input }],
        dwSearchValue: [{ type: Input }],
        clickNode: [{ type: Output }],
        dblClick: [{ type: Output }],
        contextMenu: [{ type: Output }],
        clickCheckBox: [{ type: Output }],
        clickExpand: [{ type: Output }],
        dwDragStart: [{ type: Output }],
        dwDragEnter: [{ type: Output }],
        dwDragOver: [{ type: Output }],
        dwDragLeave: [{ type: Output }],
        dwDrop: [{ type: Output }],
        dwDragEnd: [{ type: Output }],
        dwClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        dwDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
        dwContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeNodeComponent.prototype, "dwShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeNodeComponent.prototype, "dwShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeNodeComponent.prototype, "dwDraggable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeNodeComponent.prototype, "dwMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeNodeComponent.prototype, "dwCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeNodeComponent.prototype, "dwAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], DwTreeNodeComponent.prototype, "dwCheckStrictly", void 0);
    return DwTreeNodeComponent;
}());
export { DwTreeNodeComponent };
function DwTreeNodeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTreeNodeComponent.prototype.dragElement;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwShowLine;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwShowExpand;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwDraggable;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwMultiple;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwCheckable;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwAsyncData;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwCheckStrictly;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwTreeTemplate;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwBeforeDrop;
    /** @type {?} */
    DwTreeNodeComponent.prototype.clickNode;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dblClick;
    /** @type {?} */
    DwTreeNodeComponent.prototype.contextMenu;
    /** @type {?} */
    DwTreeNodeComponent.prototype.clickCheckBox;
    /** @type {?} */
    DwTreeNodeComponent.prototype.clickExpand;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwDragStart;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwDragEnter;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwDragOver;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwDragLeave;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwDrop;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwDragEnd;
    /** @type {?} */
    DwTreeNodeComponent.prototype.prefixCls;
    /** @type {?} */
    DwTreeNodeComponent.prototype.highlightKeys;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwNodeClass;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwNodeSwitcherClass;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwNodeContentClass;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwNodeContentIconClass;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwNodeContentLoadingClass;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwNodeChildrenClass;
    /**
     * drag var
     * @type {?}
     */
    DwTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dragPosClass;
    /**
     * default set
     * @type {?}
     */
    DwTreeNodeComponent.prototype._dwTreeNode;
    /** @type {?} */
    DwTreeNodeComponent.prototype._searchValue;
    /** @type {?} */
    DwTreeNodeComponent.prototype._dwExpandAll;
    /** @type {?} */
    DwTreeNodeComponent.prototype.dwTreeService;
    /** @type {?} */
    DwTreeNodeComponent.prototype.ngZone;
    /** @type {?} */
    DwTreeNodeComponent.prototype.renderer;
    /** @type {?} */
    DwTreeNodeComponent.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidHJlZS9kdy10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUNqRCxLQUFLLEVBQUUsTUFBTSxFQUVMLE1BQU0sRUFBRSxTQUFTLEVBRXpCLFdBQVcsRUFBRSxTQUFTLEVBQ3ZCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQW1XaEQsNkJBQW9CLGFBQTRCLEVBQVUsTUFBYyxFQUFVLFFBQW1CLEVBQVUsS0FBaUI7UUFBaEksaUJBU0M7UUFUbUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7O3lCQXZQekUsSUFBSSxZQUFZLEVBQUU7d0JBQ25CLElBQUksWUFBWSxFQUFFOzJCQUNmLElBQUksWUFBWSxFQUFFOzZCQUNoQixJQUFJLFlBQVksRUFBRTsyQkFDcEIsSUFBSSxZQUFZLEVBQUU7MkJBQ2xCLElBQUksWUFBWSxFQUFFOzJCQUNsQixJQUFJLFlB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YSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXG4gIElucHV0LCBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdGb3JtYXRCZWZvcmVEcm9wRXZlbnQsIER3Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi4vdHJlZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHdUcmVlTm9kZSB9IGZyb20gJy4vZHctdHJlZS1ub2RlJztcbmltcG9ydCB7IGlzQ2hlY2tEaXNhYmxlZCB9IGZyb20gJy4vZHctdHJlZS11dGlsJztcbmltcG9ydCB7IER3VHJlZVNlcnZpY2UgfSBmcm9tICcuL2R3LXRyZWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctdHJlZS1ub2RlJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdHJlZS1ub2RlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdub2RlU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgaGVpZ2h0IDogJzAnLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgaGVpZ2h0IDogJyonXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1vdXQnKSlcbiAgICBdKVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRHdUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnZHJhZ0VsZW1lbnQnKSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdTaG93TGluZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3U2hvd0V4cGFuZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RHJhZ2dhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdNdWx0aXBsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3Q2hlY2thYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdBc3luY0RhdGE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0NoZWNrU3RyaWN0bHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGR3VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZHdCZWZvcmVEcm9wOiAoY29uZmlybTogRHdGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHJlZU5vZGUodmFsdWU6IER3VHJlZU5vZGUpIHtcbiAgICAvLyBhZGQgdG8gY2hlY2tlZCBsaXN0ICYgc2VsZWN0ZWQgbGlzdFxuICAgIGlmICh2YWx1ZS5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodmFsdWUpO1xuICAgIH1cbiAgICAvLyBhZGQgc2VsZWN0IGxpc3RcbiAgICBpZiAodmFsdWUuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3QodmFsdWUsIHRoaXMuZHdNdWx0aXBsZSk7XG4gICAgfVxuICAgIGlmICghdmFsdWUuaXNMZWFmKSB7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2R3VHJlZU5vZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1RyZWVOb2RlKCk6IER3VHJlZU5vZGUge1xuICAgIHJldHVybiB0aGlzLl9kd1RyZWVOb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBkd0V4cGFuZEFsbCBpbnN0ZWFkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdEZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZHdFeHBhbmRBbGwgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5kd1RyZWVOb2RlICYmICF0aGlzLmR3VHJlZU5vZGUuaXNMZWFmKSB7XG4gICAgICB0aGlzLmR3VHJlZU5vZGUuc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLmR3VHJlZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd0RlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2R3RXhwYW5kQWxsO1xuICB9XG5cbiAgLy8gZGVmYXVsdCBzZXRcbiAgQElucHV0KClcbiAgc2V0IGR3RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZHdFeHBhbmRBbGwgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5kd1RyZWVOb2RlICYmICF0aGlzLmR3VHJlZU5vZGUuaXNMZWFmKSB7XG4gICAgICB0aGlzLmR3VHJlZU5vZGUuc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLmR3VHJlZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd0V4cGFuZEFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZHdFeHBhbmRBbGw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XG4gICAgaWYgKHZhbHVlICYmIHRoaXMuZHdUcmVlTm9kZS50aXRsZS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZHdUcmVlTm9kZS5pc01hdGNoZWQgPSB0cnVlO1xuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmR3VHJlZU5vZGUudGl0bGUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMucHVzaCh0aGlzLmR3VHJlZU5vZGUudGl0bGUuc2xpY2UoMCwgaW5kZXgpKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cy5wdXNoKHRoaXMuZHdUcmVlTm9kZS50aXRsZS5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgdGhpcy5kd1RyZWVOb2RlLnRpdGxlLmxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjbG9zZSB0aGUgbm9kZSBpZiB0aXRsZSBkb2VzJ3QgY29udGFpbiBzZWFyY2ggdmFsdWVcbiAgICAgIHRoaXMuZHdUcmVlTm9kZS5pc01hdGNoZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1NlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgLy8gT3V0cHV0XG4gIEBPdXRwdXQoKSBjbGlja05vZGU6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkYmxDbGljazogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xpY2tDaGVja0JveDogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsaWNrRXhwYW5kOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd0RyYWdFbnRlcjogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd0RyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RHJvcDogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RHJhZ0VuZDogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBkZWZhdWx0IHZhclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xuICBoaWdobGlnaHRLZXlzID0gW107XG4gIGR3Tm9kZUNsYXNzID0ge307XG4gIGR3Tm9kZVN3aXRjaGVyQ2xhc3MgPSB7fTtcbiAgZHdOb2RlQ29udGVudENsYXNzID0ge307XG4gIGR3Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7fTtcbiAgZHdOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHt9O1xuICBkd05vZGVDaGlsZHJlbkNsYXNzID0ge307XG5cbiAgLyoqXG4gICAqIGRyYWcgdmFyXG4gICAqL1xuICBkcmFnUG9zID0gMjtcbiAgZHJhZ1Bvc0NsYXNzOiBvYmplY3QgPSB7XG4gICAgJzAnIDogJ2RyYWctb3ZlcicsXG4gICAgJzEnIDogJ2RyYWctb3Zlci1nYXAtYm90dG9tJyxcbiAgICAnLTEnOiAnZHJhZy1vdmVyLWdhcC10b3AnXG4gIH07XG5cbiAgLyoqXG4gICAqIGRlZmF1bHQgc2V0XG4gICAqL1xuICBfZHdUcmVlTm9kZTogRHdUcmVlTm9kZTtcbiAgX3NlYXJjaFZhbHVlID0gJyc7XG4gIF9kd0V4cGFuZEFsbCA9IGZhbHNlO1xuXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiAodGhpcy5kd0RyYWdnYWJsZSAmJiB0aGlzLmR3VHJlZU5vZGUgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0Rpc2FibGVkKSA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5kd1RyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0xlYWYpO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmR3VHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5kd1RyZWVOb2RlLmlzTGVhZik7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgbm9kZSBjbGFzc1xuICAgKi9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5kd05vZGVDbGFzcyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWRpc2FibGVkYCBdOiB0aGlzLmR3VHJlZU5vZGUuaXNEaXNhYmxlZFxuICAgIH07XG4gICAgdGhpcy5kd05vZGVTd2l0Y2hlckNsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJgIF0gICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyLW5vb3BgIF06IHRoaXMuZHdUcmVlTm9kZS5pc0xlYWZcbiAgICB9O1xuICAgIHRoaXMuZHdOb2RlQ29udGVudENsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXJgIF06IHRydWVcbiAgICB9O1xuICAgIHRoaXMuZHdOb2RlQ29udGVudEljb25DbGFzcyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgIF0gICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25fX2N1c3RvbWl6ZWAgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5kd05vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWAgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5kd05vZGVDaGlsZHJlbkNsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tY2hpbGQtdHJlZWAgXSAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tY2hpbGQtdHJlZS1vcGVuYCBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgZHdDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZHdUcmVlTm9kZS5pc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMuZHdUcmVlTm9kZSwgdGhpcy5kd011bHRpcGxlKTtcbiAgICB9XG4gICAgdGhpcy5jbGlja05vZGUuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIGR3RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZGJsQ2xpY2suZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbICckZXZlbnQnIF0pXG4gIGR3Q29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY29udGV4dE1lbnUuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbGxhcHNlIG5vZGVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBfY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5kd1RyZWVOb2RlLmlzTG9hZGluZyAmJiAhdGhpcy5kd1RyZWVOb2RlLmlzTGVhZikge1xuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXG4gICAgICBpZiAodGhpcy5kd0FzeW5jRGF0YSAmJiB0aGlzLmR3VHJlZU5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPT09IDAgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMuZHdUcmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kd1RyZWVOb2RlLnNldEV4cGFuZGVkKCF0aGlzLmR3VHJlZU5vZGUuaXNFeHBhbmRlZCk7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLmR3VHJlZU5vZGUpO1xuICAgICAgdGhpcy5jbGlja0V4cGFuZC5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgX2NsaWNrQ2hlY2tCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHJldHVybiBpZiBub2RlIGlzIGRpc2FibGVkXG4gICAgaWYgKGlzQ2hlY2tEaXNhYmxlZCh0aGlzLmR3VHJlZU5vZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHdUcmVlTm9kZS5zZXRDaGVja2VkKCF0aGlzLmR3VHJlZU5vZGUuaXNDaGVja2VkKTtcbiAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMuZHdUcmVlTm9kZSk7XG4gICAgaWYgKCF0aGlzLmR3Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy5kd1RyZWVOb2RlKTtcbiAgICB9XG4gICAgdGhpcy5jbGlja0NoZWNrQm94LmVtaXQodGhpcy5kd1RyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjaGVjaycsIHRoaXMuZHdUcmVlTm9kZSwgZXZlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkcmFnIGV2ZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbGVhckRyYWdDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkcmFnQ2xhc3MgPSBbICdkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInIF07XG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgZSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICcnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZW1wdHlcbiAgICB9XG4gICAgdGhpcy5kd1RyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZSh0aGlzLmR3VHJlZU5vZGUpO1xuICAgIHRoaXMuZHdUcmVlTm9kZS5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgdGhpcy5kd0RyYWdTdGFydC5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgbnVsbCwgZSkpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0VudGVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHJlc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKCh0aGlzLmR3VHJlZU5vZGUgIT09IHRoaXMuZHdUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSkgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgdGhpcy5kd1RyZWVOb2RlLnNldEV4cGFuZGVkKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZHdEcmFnRW50ZXIuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbnRlcicsIHRoaXMuZHdUcmVlTm9kZSwgZSkpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZHJvcFBvc2l0aW9uID0gdGhpcy5kd1RyZWVTZXJ2aWNlLmNhbGNEcm9wUG9zaXRpb24oZSk7XG4gICAgaWYgKHRoaXMuZHJhZ1BvcyAhPT0gZHJvcFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgICB0aGlzLmRyYWdQb3MgPSBkcm9wUG9zaXRpb247XG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy5kd1RyZWVOb2RlLmlzTGVhZikpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzWyB0aGlzLmRyYWdQb3MgXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZHdEcmFnT3Zlci5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgfVxuXG4gIGhhbmRsZURyYWdMZWF2ZShlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kd0RyYWdMZWF2ZS5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy5kd1RyZWVOb2RlLCBlKSk7XG4gIH1cblxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgICAgaWYgKHRoaXMuZHdUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSA9PT0gdGhpcy5kd1RyZWVOb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMuZHdUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gcGFzcyBpZiBub2RlIGlzIGxlYWZOb1xuICAgICAgaWYgKHRoaXMuZHdCZWZvcmVEcm9wKSB7XG4gICAgICAgIHRoaXMuZHdCZWZvcmVEcm9wKHtcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5kd1RyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpLFxuICAgICAgICAgIG5vZGUgICAgOiB0aGlzLmR3VHJlZU5vZGUsXG4gICAgICAgICAgcG9zICAgICA6IHRoaXMuZHJhZ1Bvc1xuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoY2FuRHJvcCkge1xuICAgICAgICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLmR3VHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHdEcm9wLmVtaXQodGhpcy5kd1RyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcm9wJywgdGhpcy5kd1RyZWVOb2RlLCBlKSk7XG4gICAgICAgICAgdGhpcy5kd0RyYWdFbmQuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZHdUcmVlTm9kZSkge1xuICAgICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMuZHdUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcbiAgICAgICAgdGhpcy5kd0Ryb3AuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgLy8gaWYgdXNlciBkbyBub3QgY3VzdG9tIGJlZm9yZURyb3BcbiAgICAgIGlmICghdGhpcy5kd0JlZm9yZURyb3ApIHtcbiAgICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZShudWxsKTtcbiAgICAgICAgdGhpcy5kd0RyYWdFbmQuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHdUcmVlU2VydmljZTogRHdUcmVlU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZyb21FdmVudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSkpO1xuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbnRlcihlKSk7XG4gICAgICBmcm9tRXZlbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnT3ZlcihlKSk7XG4gICAgICBmcm9tRXZlbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJykuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0xlYXZlKGUpKTtcbiAgICAgIGZyb21FdmVudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcm9wJykuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0Ryb3AoZSkpO1xuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==
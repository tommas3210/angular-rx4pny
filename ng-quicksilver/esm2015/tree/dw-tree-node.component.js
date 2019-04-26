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
export class DwTreeNodeComponent {
    /**
     * @param {?} dwTreeService
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elRef
     */
    constructor(dwTreeService, ngZone, renderer, elRef) {
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
        ngZone.runOutsideAngular(() => {
            fromEvent(this.elRef.nativeElement, 'dragstart').subscribe((e) => this.handleDragStart(e));
            fromEvent(this.elRef.nativeElement, 'dragenter').subscribe((e) => this.handleDragEnter(e));
            fromEvent(this.elRef.nativeElement, 'dragover').subscribe((e) => this.handleDragOver(e));
            fromEvent(this.elRef.nativeElement, 'dragleave').subscribe((e) => this.handleDragLeave(e));
            fromEvent(this.elRef.nativeElement, 'drop').subscribe((e) => this.handleDragDrop(e));
            fromEvent(this.elRef.nativeElement, 'dragend').subscribe((e) => this.handleDragEnd(e));
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwTreeNode(value) {
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
    }
    /**
     * @return {?}
     */
    get dwTreeNode() {
        return this._dwTreeNode;
    }
    /**
     * @deprecated use
     * dwExpandAll instead
     * @param {?} value
     * @return {?}
     */
    set dwDefaultExpandAll(value) {
        this._dwExpandAll = value;
        if (value && this.dwTreeNode && !this.dwTreeNode.isLeaf) {
            this.dwTreeNode.setExpanded(true);
            this.dwTreeService.setExpandedNodeList(this.dwTreeNode);
        }
    }
    /**
     * @return {?}
     */
    get dwDefaultExpandAll() {
        return this._dwExpandAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwExpandAll(value) {
        this._dwExpandAll = value;
        if (value && this.dwTreeNode && !this.dwTreeNode.isLeaf) {
            this.dwTreeNode.setExpanded(true);
            this.dwTreeService.setExpandedNodeList(this.dwTreeNode);
        }
    }
    /**
     * @return {?}
     */
    get dwExpandAll() {
        return this._dwExpandAll;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSearchValue(value) {
        this.highlightKeys = [];
        if (value && this.dwTreeNode.title.includes(value)) {
            this.dwTreeNode.isMatched = true;
            /** @type {?} */
            const index = this.dwTreeNode.title.indexOf(value);
            this.highlightKeys.push(this.dwTreeNode.title.slice(0, index));
            this.highlightKeys.push(this.dwTreeNode.title.slice(index + value.length, this.dwTreeNode.title.length));
        }
        else {
            // close the node if title does't contain search value
            this.dwTreeNode.isMatched = false;
        }
        this._searchValue = value;
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
    get canDraggable() {
        return (this.dwDraggable && this.dwTreeNode && !this.dwTreeNode.isDisabled) ? true : null;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return (this.dwTreeNode.isExpanded && !this.dwTreeNode.isLeaf);
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return (!this.dwTreeNode.isExpanded && !this.dwTreeNode.isLeaf);
    }
    /**
     * reset node class
     * @return {?}
     */
    setClassMap() {
        this.dwNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.dwTreeNode.isDisabled
        };
        this.dwNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.dwTreeNode.isLeaf
        };
        this.dwNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true
        };
        this.dwNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.dwNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
        this.dwNodeChildrenClass = {
            [`${this.prefixCls}-child-tree`]: true,
            [`${this.prefixCls}-child-tree-open`]: true
        };
    }
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    dwClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.dwTreeNode.isSelectable) {
            this.dwTreeService.setNodeActive(this.dwTreeNode, this.dwMultiple);
        }
        this.clickNode.emit(this.dwTreeService.formatEvent('click', this.dwTreeNode, event));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dwDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dblClick.emit(this.dwTreeService.formatEvent('dblclick', this.dwTreeNode, event));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dwContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        this.contextMenu.emit(this.dwTreeService.formatEvent('contextmenu', this.dwTreeNode, event));
    }
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    _clickExpand(event) {
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
    }
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    _clickCheckBox(event) {
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
    }
    /**
     * drag event
     * @return {?}
     */
    clearDragClass() {
        /** @type {?} */
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragStart(e) {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(() => {
            if ((this.dwTreeNode !== this.dwTreeService.getSelectedNode()) && !this.dwTreeNode.isLeaf) {
                this.dwTreeNode.setExpanded(true);
            }
        });
        this.dwDragEnter.emit(this.dwTreeService.formatEvent('dragenter', this.dwTreeNode, e));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const dropPosition = this.dwTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.dwTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        this.dwDragOver.emit(this.dwTreeService.formatEvent('dragover', this.dwTreeNode, e));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
        });
        this.dwDragLeave.emit(this.dwTreeService.formatEvent('dragleave', this.dwTreeNode, e));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
            if (this.dwTreeService.getSelectedNode() === this.dwTreeNode) {
                return;
            }
            else if (this.dragPos === 0 && this.dwTreeNode.isLeaf) {
                return;
            }
            // pass if node is leafNo
            if (this.dwBeforeDrop) {
                this.dwBeforeDrop({
                    dragNode: this.dwTreeService.getSelectedNode(),
                    node: this.dwTreeNode,
                    pos: this.dragPos
                }).subscribe((canDrop) => {
                    if (canDrop) {
                        this.dwTreeService.dropAndApply(this.dwTreeNode, this.dragPos);
                    }
                    this.dwDrop.emit(this.dwTreeService.formatEvent('drop', this.dwTreeNode, e));
                    this.dwDragEnd.emit(this.dwTreeService.formatEvent('dragend', this.dwTreeNode, e));
                });
            }
            else if (this.dwTreeNode) {
                this.dwTreeService.dropAndApply(this.dwTreeNode, this.dragPos);
                this.dwDrop.emit(this.dwTreeService.formatEvent('drop', this.dwTreeNode, e));
            }
        });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            // if user do not custom beforeDrop
            if (!this.dwBeforeDrop) {
                this.dwTreeService.setSelectedNode(null);
                this.dwDragEnd.emit(this.dwTreeService.formatEvent('dragend', this.dwTreeNode, e));
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
    }
}
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
DwTreeNodeComponent.ctorParameters = () => [
    { type: DwTreeService },
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidHJlZS9kdy10cmVlLW5vZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUNqRCxLQUFLLEVBQUUsTUFBTSxFQUVMLE1BQU0sRUFBRSxTQUFTLEVBRXpCLFdBQVcsRUFBRSxTQUFTLEVBQ3ZCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBdUJsRCxNQUFNOzs7Ozs7O0lBNFVKLFlBQW9CLGFBQTRCLEVBQVUsTUFBYyxFQUFVLFFBQW1CLEVBQVUsS0FBaUI7UUFBNUcsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFVBQUssR0FBTCxLQUFLLENBQVk7O3lCQXZQekUsSUFBSSxZQUFZLEVBQUU7d0JBQ25CLElBQUksWUFBWSxFQUFFOzJCQUNmLElBQUksWUFBWSxFQUFFOzZCQUNoQixJQUFJLFlBQVksRUFBRTsyQkFDcEIsSUFBSSxZQUFZLEVBQUU7MkJBQ2xCLElBQUksWUFBWSxFQUFFOzJCQUNsQixJQUFJ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QUMxRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzVELENBQUM7aUJBQ0g7YUFDRjs7OztZQXJCUSxhQUFhO1lBWGIsTUFBTTtZQUVHLFNBQVM7WUFIZCxVQUFVOzs7MEJBb0NwQixTQUFTLFNBQUMsYUFBYTt5QkFFdkIsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBRUwsS0FBSztpQ0F3QkwsS0FBSzswQkFjTCxLQUFLOzRCQWFMLEtBQUs7d0JBcUJMLE1BQU07dUJBQ04sTUFBTTswQkFDTixNQUFNOzRCQUNOLE1BQU07MEJBQ04sTUFBTTswQkFDTixNQUFNOzBCQUNOLE1BQU07eUJBQ04sTUFBTTswQkFDTixNQUFNO3FCQUNOLE1BQU07d0JBQ04sTUFBTTtzQkF1RU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTt5QkFVbEMsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFFLFFBQVEsQ0FBRTs0QkFVckMsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7O0lBdkwvQixZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsXG4gIElucHV0LCBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdGb3JtYXRCZWZvcmVEcm9wRXZlbnQsIER3Rm9ybWF0RW1pdEV2ZW50IH0gZnJvbSAnLi4vdHJlZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHdUcmVlTm9kZSB9IGZyb20gJy4vZHctdHJlZS1ub2RlJztcbmltcG9ydCB7IGlzQ2hlY2tEaXNhYmxlZCB9IGZyb20gJy4vZHctdHJlZS11dGlsJztcbmltcG9ydCB7IER3VHJlZVNlcnZpY2UgfSBmcm9tICcuL2R3LXRyZWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctdHJlZS1ub2RlJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdHJlZS1ub2RlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdub2RlU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcwJyxcbiAgICAgICAgaGVpZ2h0IDogJzAnLFxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdhY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgaGVpZ2h0IDogJyonXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IGluYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1vdXQnKSlcbiAgICBdKVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRHdUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnZHJhZ0VsZW1lbnQnKSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdTaG93TGluZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3U2hvd0V4cGFuZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RHJhZ2dhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdNdWx0aXBsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3Q2hlY2thYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdBc3luY0RhdGE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0NoZWNrU3RyaWN0bHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGR3VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZHdCZWZvcmVEcm9wOiAoY29uZmlybTogRHdGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHJlZU5vZGUodmFsdWU6IER3VHJlZU5vZGUpIHtcbiAgICAvLyBhZGQgdG8gY2hlY2tlZCBsaXN0ICYgc2VsZWN0ZWQgbGlzdFxuICAgIGlmICh2YWx1ZS5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodmFsdWUpO1xuICAgIH1cbiAgICAvLyBhZGQgc2VsZWN0IGxpc3RcbiAgICBpZiAodmFsdWUuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3QodmFsdWUsIHRoaXMuZHdNdWx0aXBsZSk7XG4gICAgfVxuICAgIGlmICghdmFsdWUuaXNMZWFmKSB7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2R3VHJlZU5vZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1RyZWVOb2RlKCk6IER3VHJlZU5vZGUge1xuICAgIHJldHVybiB0aGlzLl9kd1RyZWVOb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBkd0V4cGFuZEFsbCBpbnN0ZWFkXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdEZWZhdWx0RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZHdFeHBhbmRBbGwgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5kd1RyZWVOb2RlICYmICF0aGlzLmR3VHJlZU5vZGUuaXNMZWFmKSB7XG4gICAgICB0aGlzLmR3VHJlZU5vZGUuc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLmR3VHJlZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd0RlZmF1bHRFeHBhbmRBbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2R3RXhwYW5kQWxsO1xuICB9XG5cbiAgLy8gZGVmYXVsdCBzZXRcbiAgQElucHV0KClcbiAgc2V0IGR3RXhwYW5kQWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZHdFeHBhbmRBbGwgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5kd1RyZWVOb2RlICYmICF0aGlzLmR3VHJlZU5vZGUuaXNMZWFmKSB7XG4gICAgICB0aGlzLmR3VHJlZU5vZGUuc2V0RXhwYW5kZWQodHJ1ZSk7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLmR3VHJlZU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd0V4cGFuZEFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZHdFeHBhbmRBbGw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XG4gICAgaWYgKHZhbHVlICYmIHRoaXMuZHdUcmVlTm9kZS50aXRsZS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZHdUcmVlTm9kZS5pc01hdGNoZWQgPSB0cnVlO1xuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmR3VHJlZU5vZGUudGl0bGUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMucHVzaCh0aGlzLmR3VHJlZU5vZGUudGl0bGUuc2xpY2UoMCwgaW5kZXgpKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cy5wdXNoKHRoaXMuZHdUcmVlTm9kZS50aXRsZS5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgdGhpcy5kd1RyZWVOb2RlLnRpdGxlLmxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjbG9zZSB0aGUgbm9kZSBpZiB0aXRsZSBkb2VzJ3QgY29udGFpbiBzZWFyY2ggdmFsdWVcbiAgICAgIHRoaXMuZHdUcmVlTm9kZS5pc01hdGNoZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1NlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgLy8gT3V0cHV0XG4gIEBPdXRwdXQoKSBjbGlja05vZGU6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkYmxDbGljazogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY2xpY2tDaGVja0JveDogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsaWNrRXhwYW5kOiBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHdEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd0RyYWdFbnRlcjogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RHJhZ092ZXI6IEV2ZW50RW1pdHRlcjxEd0Zvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkd0RyYWdMZWF2ZTogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RHJvcDogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGR3RHJhZ0VuZDogRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBkZWZhdWx0IHZhclxuICBwcmVmaXhDbHMgPSAnYW50LXRyZWUnO1xuICBoaWdobGlnaHRLZXlzID0gW107XG4gIGR3Tm9kZUNsYXNzID0ge307XG4gIGR3Tm9kZVN3aXRjaGVyQ2xhc3MgPSB7fTtcbiAgZHdOb2RlQ29udGVudENsYXNzID0ge307XG4gIGR3Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7fTtcbiAgZHdOb2RlQ29udGVudExvYWRpbmdDbGFzcyA9IHt9O1xuICBkd05vZGVDaGlsZHJlbkNsYXNzID0ge307XG5cbiAgLyoqXG4gICAqIGRyYWcgdmFyXG4gICAqL1xuICBkcmFnUG9zID0gMjtcbiAgZHJhZ1Bvc0NsYXNzOiBvYmplY3QgPSB7XG4gICAgJzAnIDogJ2RyYWctb3ZlcicsXG4gICAgJzEnIDogJ2RyYWctb3Zlci1nYXAtYm90dG9tJyxcbiAgICAnLTEnOiAnZHJhZy1vdmVyLWdhcC10b3AnXG4gIH07XG5cbiAgLyoqXG4gICAqIGRlZmF1bHQgc2V0XG4gICAqL1xuICBfZHdUcmVlTm9kZTogRHdUcmVlTm9kZTtcbiAgX3NlYXJjaFZhbHVlID0gJyc7XG4gIF9kd0V4cGFuZEFsbCA9IGZhbHNlO1xuXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiAodGhpcy5kd0RyYWdnYWJsZSAmJiB0aGlzLmR3VHJlZU5vZGUgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0Rpc2FibGVkKSA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5kd1RyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0xlYWYpO1xuICB9XG5cbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmR3VHJlZU5vZGUuaXNFeHBhbmRlZCAmJiAhdGhpcy5kd1RyZWVOb2RlLmlzTGVhZik7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgbm9kZSBjbGFzc1xuICAgKi9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5kd05vZGVDbGFzcyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWRpc2FibGVkYCBdOiB0aGlzLmR3VHJlZU5vZGUuaXNEaXNhYmxlZFxuICAgIH07XG4gICAgdGhpcy5kd05vZGVTd2l0Y2hlckNsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJgIF0gICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyLW5vb3BgIF06IHRoaXMuZHdUcmVlTm9kZS5pc0xlYWZcbiAgICB9O1xuICAgIHRoaXMuZHdOb2RlQ29udGVudENsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXJgIF06IHRydWVcbiAgICB9O1xuICAgIHRoaXMuZHdOb2RlQ29udGVudEljb25DbGFzcyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgIF0gICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25fX2N1c3RvbWl6ZWAgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5kd05vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWAgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5kd05vZGVDaGlsZHJlbkNsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tY2hpbGQtdHJlZWAgXSAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tY2hpbGQtdHJlZS1vcGVuYCBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgZHdDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZHdUcmVlTm9kZS5pc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMuZHdUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMuZHdUcmVlTm9kZSwgdGhpcy5kd011bHRpcGxlKTtcbiAgICB9XG4gICAgdGhpcy5jbGlja05vZGUuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIGR3RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZGJsQ2xpY2suZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbICckZXZlbnQnIF0pXG4gIGR3Q29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY29udGV4dE1lbnUuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbGxhcHNlIG5vZGVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBfY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5kd1RyZWVOb2RlLmlzTG9hZGluZyAmJiAhdGhpcy5kd1RyZWVOb2RlLmlzTGVhZikge1xuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXG4gICAgICBpZiAodGhpcy5kd0FzeW5jRGF0YSAmJiB0aGlzLmR3VHJlZU5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPT09IDAgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMuZHdUcmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kd1RyZWVOb2RlLnNldEV4cGFuZGVkKCF0aGlzLmR3VHJlZU5vZGUuaXNFeHBhbmRlZCk7XG4gICAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLmR3VHJlZU5vZGUpO1xuICAgICAgdGhpcy5jbGlja0V4cGFuZC5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy5kd1RyZWVOb2RlLCBldmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgX2NsaWNrQ2hlY2tCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHJldHVybiBpZiBub2RlIGlzIGRpc2FibGVkXG4gICAgaWYgKGlzQ2hlY2tEaXNhYmxlZCh0aGlzLmR3VHJlZU5vZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHdUcmVlTm9kZS5zZXRDaGVja2VkKCF0aGlzLmR3VHJlZU5vZGUuaXNDaGVja2VkKTtcbiAgICB0aGlzLmR3VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMuZHdUcmVlTm9kZSk7XG4gICAgaWYgKCF0aGlzLmR3Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy5kd1RyZWVOb2RlKTtcbiAgICB9XG4gICAgdGhpcy5jbGlja0NoZWNrQm94LmVtaXQodGhpcy5kd1RyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjaGVjaycsIHRoaXMuZHdUcmVlTm9kZSwgZXZlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkcmFnIGV2ZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbGVhckRyYWdDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkcmFnQ2xhc3MgPSBbICdkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInIF07XG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgZSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICcnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZW1wdHlcbiAgICB9XG4gICAgdGhpcy5kd1RyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZSh0aGlzLmR3VHJlZU5vZGUpO1xuICAgIHRoaXMuZHdUcmVlTm9kZS5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgdGhpcy5kd0RyYWdTdGFydC5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgbnVsbCwgZSkpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0VudGVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHJlc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKCh0aGlzLmR3VHJlZU5vZGUgIT09IHRoaXMuZHdUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSkgJiYgIXRoaXMuZHdUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgdGhpcy5kd1RyZWVOb2RlLnNldEV4cGFuZGVkKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZHdEcmFnRW50ZXIuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbnRlcicsIHRoaXMuZHdUcmVlTm9kZSwgZSkpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZHJvcFBvc2l0aW9uID0gdGhpcy5kd1RyZWVTZXJ2aWNlLmNhbGNEcm9wUG9zaXRpb24oZSk7XG4gICAgaWYgKHRoaXMuZHJhZ1BvcyAhPT0gZHJvcFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgICB0aGlzLmRyYWdQb3MgPSBkcm9wUG9zaXRpb247XG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy5kd1RyZWVOb2RlLmlzTGVhZikpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzWyB0aGlzLmRyYWdQb3MgXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZHdEcmFnT3Zlci5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgfVxuXG4gIGhhbmRsZURyYWdMZWF2ZShlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kd0RyYWdMZWF2ZS5lbWl0KHRoaXMuZHdUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy5kd1RyZWVOb2RlLCBlKSk7XG4gIH1cblxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgICAgaWYgKHRoaXMuZHdUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSA9PT0gdGhpcy5kd1RyZWVOb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMuZHdUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gcGFzcyBpZiBub2RlIGlzIGxlYWZOb1xuICAgICAgaWYgKHRoaXMuZHdCZWZvcmVEcm9wKSB7XG4gICAgICAgIHRoaXMuZHdCZWZvcmVEcm9wKHtcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5kd1RyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpLFxuICAgICAgICAgIG5vZGUgICAgOiB0aGlzLmR3VHJlZU5vZGUsXG4gICAgICAgICAgcG9zICAgICA6IHRoaXMuZHJhZ1Bvc1xuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoY2FuRHJvcCkge1xuICAgICAgICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLmR3VHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHdEcm9wLmVtaXQodGhpcy5kd1RyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcm9wJywgdGhpcy5kd1RyZWVOb2RlLCBlKSk7XG4gICAgICAgICAgdGhpcy5kd0RyYWdFbmQuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZHdUcmVlTm9kZSkge1xuICAgICAgICB0aGlzLmR3VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMuZHdUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcbiAgICAgICAgdGhpcy5kd0Ryb3AuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgLy8gaWYgdXNlciBkbyBub3QgY3VzdG9tIGJlZm9yZURyb3BcbiAgICAgIGlmICghdGhpcy5kd0JlZm9yZURyb3ApIHtcbiAgICAgICAgdGhpcy5kd1RyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZShudWxsKTtcbiAgICAgICAgdGhpcy5kd0RyYWdFbmQuZW1pdCh0aGlzLmR3VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLmR3VHJlZU5vZGUsIGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHdUcmVlU2VydmljZTogRHdUcmVlU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmKSB7XG4gICAgbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGZyb21FdmVudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnc3RhcnQnKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSkpO1xuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbnRlcihlKSk7XG4gICAgICBmcm9tRXZlbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnT3ZlcihlKSk7XG4gICAgICBmcm9tRXZlbnQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ2xlYXZlJykuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0xlYXZlKGUpKTtcbiAgICAgIGZyb21FdmVudCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcm9wJykuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0Ryb3AoZSkpO1xuICAgICAgZnJvbUV2ZW50KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW5kKGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==
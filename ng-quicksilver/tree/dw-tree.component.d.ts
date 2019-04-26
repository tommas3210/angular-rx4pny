import { EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { DwFormatBeforeDropEvent, DwFormatEmitEvent } from '../tree/interface';
import { DwTreeNode } from './dw-tree-node';
import { DwTreeService } from './dw-tree.service';
export declare class DwTreeComponent implements OnInit, OnDestroy {
    dwTreeService: DwTreeService;
    dwShowIcon: boolean;
    dwShowLine: boolean;
    dwCheckStrictly: boolean;
    dwCheckable: boolean;
    dwShowExpand: boolean;
    dwAsyncData: boolean;
    dwDraggable: boolean;
    dwMultiple: boolean;
    dwExpandAll: boolean;
    /**
     * @deprecated use
     * dwExpandAll instead
     */
    dwDefaultExpandAll: boolean;
    dwBeforeDrop: (confirm: DwFormatBeforeDropEvent) => Observable<boolean>;
    dwData: any[];
    /**
     * @deprecated use
     * dwExpandedKeys instead
     */
    dwDefaultExpandedKeys: string[];
    /**
     * @deprecated use
     * dwSelectedKeys instead
     */
    dwDefaultSelectedKeys: string[];
    /**
     * @deprecated use
     * dwCheckedKeys instead
     */
    dwDefaultCheckedKeys: string[];
    dwExpandedKeys: string[];
    dwSelectedKeys: string[];
    dwCheckedKeys: string[];
    dwSearchValue: string;
    dwExpandedKeysChange: EventEmitter<string[]>;
    dwSelectedKeysChange: EventEmitter<string[]>;
    dwCheckedKeysChange: EventEmitter<string[]>;
    dwSearchValueChange: EventEmitter<DwFormatEmitEvent>;
    /**
     * @deprecated use
     * dwSearchValueChange instead
     */
    dwOnSearchNode: EventEmitter<DwFormatEmitEvent>;
    dwClick: EventEmitter<DwFormatEmitEvent>;
    dwDblClick: EventEmitter<DwFormatEmitEvent>;
    dwContextMenu: EventEmitter<DwFormatEmitEvent>;
    dwCheckBoxChange: EventEmitter<DwFormatEmitEvent>;
    dwExpandChange: EventEmitter<DwFormatEmitEvent>;
    dwOnDragStart: EventEmitter<DwFormatEmitEvent>;
    dwOnDragEnter: EventEmitter<DwFormatEmitEvent>;
    dwOnDragOver: EventEmitter<DwFormatEmitEvent>;
    dwOnDragLeave: EventEmitter<DwFormatEmitEvent>;
    dwOnDrop: EventEmitter<DwFormatEmitEvent>;
    dwOnDragEnd: EventEmitter<DwFormatEmitEvent>;
    dwTreeTemplate: TemplateRef<any>;
    _searchValue: string;
    dwDefaultSubject: Subject<{}>;
    dwDefaultSubscription: Subscription;
    dwNodes: DwTreeNode[];
    prefixCls: string;
    dwTreeClass: {};
    onChange: (value: DwTreeNode[]) => void;
    onTouched: () => void;
    getTreeNodes(): DwTreeNode[];
    /**
     * public function
     */
    getCheckedNodeList(): DwTreeNode[];
    getSelectedNodeList(): DwTreeNode[];
    getHalfCheckedNodeList(): DwTreeNode[];
    getExpandedNodeList(): DwTreeNode[];
    getMatchedNodeList(): DwTreeNode[];
    setClassMap(): void;
    writeValue(value: DwTreeNode[]): void;
    registerOnChange(fn: (_: DwTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    constructor(dwTreeService: DwTreeService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

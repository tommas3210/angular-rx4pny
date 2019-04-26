import { ElementRef, EventEmitter, NgZone, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DwFormatBeforeDropEvent, DwFormatEmitEvent } from '../tree/interface';
import { DwTreeNode } from './dw-tree-node';
import { DwTreeService } from './dw-tree.service';
export declare class DwTreeNodeComponent implements OnInit, OnChanges {
    private dwTreeService;
    private ngZone;
    private renderer;
    private elRef;
    dragElement: ElementRef;
    dwShowLine: boolean;
    dwShowExpand: boolean;
    dwDraggable: boolean;
    dwMultiple: boolean;
    dwCheckable: boolean;
    dwAsyncData: boolean;
    dwCheckStrictly: boolean;
    dwTreeTemplate: TemplateRef<void>;
    dwBeforeDrop: (confirm: DwFormatBeforeDropEvent) => Observable<boolean>;
    dwTreeNode: DwTreeNode;
    /**
     * @deprecated use
     * dwExpandAll instead
     */
    dwDefaultExpandAll: boolean;
    dwExpandAll: boolean;
    dwSearchValue: string;
    clickNode: EventEmitter<DwFormatEmitEvent>;
    dblClick: EventEmitter<DwFormatEmitEvent>;
    contextMenu: EventEmitter<DwFormatEmitEvent>;
    clickCheckBox: EventEmitter<DwFormatEmitEvent>;
    clickExpand: EventEmitter<DwFormatEmitEvent>;
    dwDragStart: EventEmitter<DwFormatEmitEvent>;
    dwDragEnter: EventEmitter<DwFormatEmitEvent>;
    dwDragOver: EventEmitter<DwFormatEmitEvent>;
    dwDragLeave: EventEmitter<DwFormatEmitEvent>;
    dwDrop: EventEmitter<DwFormatEmitEvent>;
    dwDragEnd: EventEmitter<DwFormatEmitEvent>;
    prefixCls: string;
    highlightKeys: any[];
    dwNodeClass: {};
    dwNodeSwitcherClass: {};
    dwNodeContentClass: {};
    dwNodeContentIconClass: {};
    dwNodeContentLoadingClass: {};
    dwNodeChildrenClass: {};
    /**
     * drag var
     */
    dragPos: number;
    dragPosClass: object;
    /**
     * default set
     */
    _dwTreeNode: DwTreeNode;
    _searchValue: string;
    _dwExpandAll: boolean;
    readonly canDraggable: boolean | null;
    readonly isSwitcherOpen: boolean;
    readonly isSwitcherClose: boolean;
    /**
     * reset node class
     */
    setClassMap(): void;
    /**
     * click node to select, 200ms to dbl click
     */
    dwClick(event: MouseEvent): void;
    dwDblClick(event: MouseEvent): void;
    /**
     * @param event
     */
    dwContextMenu(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event: MouseEvent): void;
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event: MouseEvent): void;
    /**
     * drag event
     * @param e
     */
    clearDragClass(): void;
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    handleDragEnd(e: DragEvent): void;
    constructor(dwTreeService: DwTreeService, ngZone: NgZone, renderer: Renderer2, elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}

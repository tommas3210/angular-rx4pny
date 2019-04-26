import { DwFormatEmitEvent } from './interface';
import { DwTreeNode } from './dw-tree-node';
export declare class DwTreeService {
    DRAG_SIDE_RANGE: number;
    DRAG_MIN_GAP: number;
    conductOption: {
        isCheckStrictly: boolean;
    };
    selectedNode: DwTreeNode;
    targetNode: DwTreeNode;
    rootNodes: DwTreeNode[];
    selectedNodeList: DwTreeNode[];
    expandedNodeList: DwTreeNode[];
    checkedNodeList: DwTreeNode[];
    halfCheckedNodeList: DwTreeNode[];
    matchedNodeList: DwTreeNode[];
    /**
     * reset tree nodes will clear default node list
     */
    initTree(dwNodes: DwTreeNode[]): void;
    getSelectedNode(): DwTreeNode | null;
    /**
     * get some list
     */
    getSelectedNodeList(): DwTreeNode[];
    /**
     * return checked nodes
     */
    getCheckedNodeList(): DwTreeNode[];
    getHalfCheckedNodeList(): DwTreeNode[];
    /**
     * return expanded nodes
     */
    getExpandedNodeList(): DwTreeNode[];
    /**
     * return search matched nodes
     */
    getMatchedNodeList(): DwTreeNode[];
    isArrayOfDwTreeNode(value: any[]): boolean;
    /**
     * reset selectedNodeList
     */
    calcSelectedKeys(selectedKeys: string[], dwNodes: DwTreeNode[], isMulti?: boolean): void;
    /**
     * reset expandedNodeList
     */
    calcExpandedKeys(expandedKeys: string[], dwNodes: DwTreeNode[]): void;
    /**
     * reset checkedNodeList
     */
    calcCheckedKeys(checkedKeys: string[], dwNodes: DwTreeNode[], isCheckStrictly?: boolean): void;
    /**
     * set drag node
     */
    setSelectedNode(node?: DwTreeNode): void;
    /**
     * set node selected status
     */
    setNodeActive(node: DwTreeNode, isMultiple?: boolean): void;
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node: DwTreeNode, isMultiple?: boolean): void;
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node: DwTreeNode): void;
    setCheckedNodeList(node: DwTreeNode): void;
    /**
     * conduct checked keys
     */
    conductCheck(type?: string): DwTreeNode[];
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node: DwTreeNode): void;
    /**
     * check state
     * @param node
     */
    refreshCheckState(isCheckStrictly?: boolean): void;
    conduct(node: DwTreeNode): void;
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node: DwTreeNode): void;
    /**
     * reset child check state
     */
    conductDown(node: DwTreeNode, value: boolean): void;
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value: string): void;
    /**
     * drag event
     */
    refreshDragNode(node: DwTreeNode): void;
    resetNodeLevel(node: DwTreeNode): void;
    calcDropPosition(event: DragEvent): number;
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode: DwTreeNode, dragPos?: number): void;
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName: string, node: DwTreeNode, event: MouseEvent | DragEvent): DwFormatEmitEvent;
}

import { DwTreeNode } from './dw-tree-node';
export interface DwFormatEmitEvent {
    eventName: string;
    node: DwTreeNode;
    event: MouseEvent | DragEvent;
    dragNode?: DwTreeNode;
    selectedKeys?: DwTreeNode[];
    checkedKeys?: DwTreeNode[];
    matchedKeys?: DwTreeNode[];
    nodes?: DwTreeNode[];
    keys?: string[];
}
export interface DwFormatBeforeDropEvent {
    dragNode: DwTreeNode;
    node: DwTreeNode;
    pos: number;
}

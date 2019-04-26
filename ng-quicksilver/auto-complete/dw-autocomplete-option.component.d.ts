import { ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
export declare class DwOptionSelectionChange {
    source: DwAutocompleteOptionComponent;
    isUserInput: boolean;
    constructor(source: DwAutocompleteOptionComponent, isUserInput?: boolean);
}
export declare class DwAutocompleteOptionComponent {
    private changeDetectorRef;
    private element;
    private disabled;
    active: boolean;
    selected: boolean;
    dwValue: any;
    dwLabel: string;
    dwDisabled: boolean;
    selectionChange: EventEmitter<DwOptionSelectionChange>;
    constructor(changeDetectorRef: ChangeDetectorRef, element: ElementRef);
    /** 选择 */
    select(): void;
    /** 取消选择 */
    deselect(): void;
    /** 获取用于显示的 label */
    getLabel(): string;
    /** 设置激活样式 (仅限样式) */
    setActiveStyles(): void;
    /** 设置非激活样式 (仅限样式) */
    setInactiveStyles(): void;
    scrollIntoViewIfNeeded(): void;
    private emitSelectionChangeEvent;
    selectViaInteraction(): void;
}

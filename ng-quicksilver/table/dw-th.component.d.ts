import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { DwDropDownComponent } from '../dropdown/dw-dropdown.component';
export declare type DwThFilterType = Array<{
    text: string;
    value: any;
    byDefault?: boolean;
}>;
export interface DwThItemInterface {
    text: string;
    value: any;
    checked: boolean;
}
export declare class DwThComponent {
    private elementRef;
    private renderer;
    private _sort;
    private _filters;
    private _showSort;
    private _showFilter;
    private _showCheckbox;
    private _showRowSelection;
    private _hasDefaultFilter;
    el: HTMLElement;
    hasFilterValue: boolean;
    multipleFilterList: DwThItemInterface[];
    singleFilterList: DwThItemInterface[];
    dwSelections: Array<{
        text: string;
        onSelect: any;
    }>;
    dwChecked: boolean;
    dwDisabled: boolean;
    dwIndeterminate: boolean;
    dwSortKey: string;
    dwFilterMultiple: boolean;
    dwWidth: string;
    dwCheckedChange: EventEmitter<boolean>;
    dwDropDownComponent: DwDropDownComponent;
    dwSortChange: EventEmitter<string>;
    dwSortChangeWithKey: EventEmitter<{
        key: string;
        value: string;
    }>;
    dwFilterChange: EventEmitter<any>;
    readonly hasFiltersClass: boolean;
    dwShowSort: boolean;
    dwShowFilter: boolean;
    dwShowRowSelection: boolean;
    dwLeft: string;
    dwRight: string;
    dwExpand: boolean;
    dwShowCheckbox: boolean;
    dwSort: string;
    setSortValue(value: string): void;
    readonly filterList: DwThItemInterface[];
    readonly filterValue: any;
    updateFilterStatus(): void;
    search(): void;
    reset(): void;
    checkMultiple(filter: DwThItemInterface): void;
    checkSingle(filter: DwThItemInterface): void;
    hideDropDown(): void;
    dropDownVisibleChange(value: boolean): void;
    dwFilters: DwThFilterType;
    initMultipleFilterList(force?: boolean): void;
    initSingleFilterList(force?: boolean): void;
    checkDefaultFilters(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}

import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { AfterViewInit, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DwOptionContainerComponent } from './dw-option-container.component';
import { DwOptionGroupComponent } from './dw-option-group.component';
import { DwOptionComponent } from './dw-option.component';
import { TFilterOption } from './dw-option.pipe';
import { DwSelectTopControlComponent } from './dw-select-top-control.component';
export declare class DwSelectComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    private renderer;
    private _disabled;
    private _allowClear;
    private _showSearch;
    private _open;
    private _placeholder;
    private _autoFocus;
    private _dropdownClassName;
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    dropDownPosition: 'top' | 'center' | 'bottom';
    listOfSelectedValue: any[];
    listOfTemplateOption: DwOptionComponent[];
    value: any | any[];
    overlayWidth: number;
    overlayMinWidth: number;
    searchValue: string;
    isDestroy: boolean;
    isInit: boolean;
    dropDownClassMap: any;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    dwSelectTopControlComponent: DwSelectTopControlComponent;
    dwOptionContainerComponent: DwOptionContainerComponent;
    /** should move to dw-option-container when https://github.com/angular/angular/issues/20810 resolved **/
    listOfDwOptionComponent: QueryList<DwOptionComponent>;
    listOfDwOptionGroupComponent: QueryList<DwOptionGroupComponent>;
    dwOnSearch: EventEmitter<string>;
    dwScrollToBottom: EventEmitter<void>;
    dwOpenChange: EventEmitter<boolean>;
    dwSize: string;
    dwServerSearch: boolean;
    dwMode: 'default' | 'multiple' | 'tags';
    dwDropdownMatchSelectWidth: boolean;
    dwFilterOption: TFilterOption;
    dwMaxMultipleCount: number;
    dwDropdownStyle: {
        [key: string]: string;
    };
    dwNotFoundContent: string;
    /** https://github.com/angular/angular/pull/13349/files **/
    compareWith: (o1: any, o2: any) => boolean;
    dwDropdownClassName: string;
    dwAutoFocus: boolean;
    dwOpen: boolean;
    dwDisabled: boolean;
    dwAllowClear: boolean;
    dwShowSearch: boolean;
    dwPlaceHolder: string;
    onClick(): void;
    _handleKeydown(event: KeyboardEvent): void;
    updateAutoFocus(): void;
    focus(): void;
    blur(): void;
    /** overlay can not be always open , reopen overlay after press esc **/
    handleEscBug(): void;
    onKeyDownCdkOverlayOrigin(e: KeyboardEvent): void;
    closeDropDown(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    onClickOptionFromOptionContainer(): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    readonly isSingleMode: boolean;
    readonly isMultipleOrTags: boolean;
    /** option container dwListOfSelectedValueChange -> update ngModel **/
    updateListOfSelectedValueFromOptionContainer(value: any[]): void;
    /** option container dwListOfSelectedValueChange -> update ngModel **/
    updateListOfSelectedValueFromTopControl(value: any[]): void;
    updateFromSelectedList(value: any[]): void;
    onSearch(value: string, emit: boolean): void;
    clearNgModel(): void;
    updateNgModel(list: any[], value: string | string[]): void;
    listOfTemplateOptionChange(value: DwOptionComponent[]): void;
    updateDropDownClassMap(): void;
    onClearSelection(e: MouseEvent): void;
    clearSearchValue(): void;
    constructor(renderer: Renderer2);
    /** update ngModel -> update listOfSelectedValue **/
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}

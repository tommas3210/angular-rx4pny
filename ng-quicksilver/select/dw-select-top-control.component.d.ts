import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { DwOptionComponent } from './dw-option.component';
export declare class DwSelectTopControlComponent {
    private renderer;
    private _listOfSelectedValue;
    private _listTemplateOfOption;
    listOfCachedSelectedOption: DwOptionComponent[];
    inputValue: string;
    isComposing: boolean;
    inputElement: ElementRef;
    dwListOfSelectedValueChange: EventEmitter<any[]>;
    dwOnSearch: EventEmitter<{
        value: string;
        emit: boolean;
    }>;
    dwMode: string;
    dwShowSearch: boolean;
    dwDisabled: boolean;
    dwPlaceHolder: string;
    dwOpen: boolean;
    compareWith: (o1: any, o2: any) => boolean;
    dwListOfSelectedValue: any[];
    dwListTemplateOfOption: DwOptionComponent[];
    /** cached selected option list **/
    updateListOfCachedOption(): void;
    setInputValue(value: string, emit: boolean): void;
    readonly isSingleMode: boolean;
    readonly isMultipleOrTags: boolean;
    readonly placeHolderDisplay: string;
    readonly selectedValueDisplay: {
        [key: string]: string;
    };
    readonly singleValueLabel: string;
    focusOnInput(): void;
    getPropertyFromValue(value: any, prop: string): string;
    isOptionDisplay(value: any): boolean;
    removeValueFormSelected(value: any): void;
    updateWidth(): void;
    onKeyDownInput(e: KeyboardEvent): void;
    constructor(renderer: Renderer2);
}

import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface DwCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class DwCheckboxGroupComponent implements ControlValueAccessor, OnInit {
    private elementRef;
    private renderer;
    private _disabled;
    private el;
    private prefixCls;
    private onChange;
    private onTouched;
    options: DwCheckBoxOptionInterface[];
    dwDisabled: boolean;
    onOptionChange(): void;
    writeValue(value: DwCheckBoxOptionInterface[]): void;
    registerOnChange(fn: (_: DwCheckBoxOptionInterface[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
}

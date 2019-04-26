import { AfterViewInit, EventEmitter, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class DwRateComponent implements OnInit, ControlValueAccessor, AfterViewInit {
    private renderer;
    private _allowClear;
    private _allowHalf;
    private _disabled;
    private _count;
    private _value;
    private _autoFocus;
    dwCharacter: TemplateRef<void>;
    dwOnBlur: EventEmitter<FocusEvent>;
    dwOnFocus: EventEmitter<FocusEvent>;
    dwOnKeyDown: EventEmitter<KeyboardEvent>;
    dwOnHoverChange: EventEmitter<number>;
    private ulElement;
    prefixCls: string;
    isInit: boolean;
    hasHalf: boolean;
    innerPrefixCls: string;
    classMap: any;
    starArray: number[];
    hoverValue: number;
    isFocused: boolean;
    floatReg: RegExp;
    onChange: (value: number) => void;
    onTouched: () => void;
    dwAutoFocus: boolean;
    dwCount: number;
    dwAllowHalf: boolean;
    dwAllowClear: boolean;
    dwValue: number;
    dwDisabled: boolean;
    setClassMap(): void;
    updateAutoFocus(): void;
    clickRate(e: MouseEvent, index: number, isFull: boolean): void;
    hoverRate(e: MouseEvent, index: number, isFull: boolean): void;
    leaveRate(e: MouseEvent): void;
    onFocus(e: FocusEvent): void;
    onBlur(e: FocusEvent): void;
    focus(): void;
    blur(): void;
    onKeyDown(e: KeyboardEvent): void;
    setClasses(i: number): object;
    updateStarArray(): void;
    writeValue(value: number | null): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
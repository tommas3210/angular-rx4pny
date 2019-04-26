import { ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DwI18nService } from '../i18n/dw-i18n.service';
export declare class DwTimeValueAccessorDirective implements ControlValueAccessor {
    private i18n;
    private elementRef;
    private _onChange;
    private _onTouch;
    format: string;
    keyup(): void;
    blur(): void;
    changed(): void;
    touched(): void;
    setRange(): void;
    constructor(i18n: DwI18nService, elementRef: ElementRef);
    writeValue(value: Date): void;
    registerOnChange(fn: (value: Date) => void): void;
    registerOnTouched(fn: () => void): void;
}

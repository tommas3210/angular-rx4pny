import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { DwDatePickerI18nInterface } from '../i18n/dw-i18n.interface';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { CandyDate } from './lib/candy-date';
import { DwPickerComponent } from './picker.component';
/**
 * The base picker for all common APIs
 */
export declare abstract class AbstractPickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    protected i18n: DwI18nService;
    dwAllowClear: boolean;
    dwAutoFocus: boolean;
    dwDisabled: boolean;
    dwOpen: boolean;
    dwClassName: string;
    dwDisabledDate: (d: Date) => boolean;
    dwLocale: DwDatePickerI18nInterface;
    dwPlaceHolder: string | string[];
    dwPopupStyle: object;
    dwDropdownClassName: string;
    dwSize: 'large' | 'small';
    dwStyle: object;
    dwOnOpenChange: EventEmitter<boolean>;
    dwFormat: string;
    dwValue: CompatibleValue;
    protected picker: DwPickerComponent;
    isRange: boolean;
    readonly realOpenState: boolean;
    initValue(): void;
    protected destroyed$: Subject<void>;
    protected isCustomPlaceHolder: boolean;
    constructor(i18n: DwI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    closeOverlay(): void;
    /**
     * Common handle for value changes
     * @param value changed value
     */
    onValueChange(value: CompatibleValue): void;
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open: boolean): void;
    onChangeFn: (val: CompatibleDate) => void;
    onTouchedFn: () => void;
    writeValue(value: CompatibleDate): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    private setLocale;
    private setDefaultPlaceHolder;
    private formatDate;
    private setValue;
}
export declare type CompatibleValue = CandyDate | CandyDate[];
export declare type CompatibleDate = Date | Date[];

import { EventEmitter } from '@angular/core';
import { DwCheckboxComponent } from './dw-checkbox.component';
export declare class DwCheckboxWrapperComponent {
    dwOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: DwCheckboxComponent): void;
    removeCheckbox(value: DwCheckboxComponent): void;
    outputValue(): string[];
    onChange(): void;
}

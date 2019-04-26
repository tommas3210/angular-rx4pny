import { EventEmitter } from '@angular/core';
export declare class DwTransferSearchComponent {
    placeholder: string;
    value: string;
    valueChanged: EventEmitter<string>;
    valueClear: EventEmitter<{}>;
    _handle(): void;
    _clear(): void;
}

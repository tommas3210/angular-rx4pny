import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
export declare class DwPopconfirmComponent extends DwToolTipComponent {
    _condition: boolean;
    _prefix: string;
    _trigger: string;
    _hasBackdrop: boolean;
    dwOnCancel: EventEmitter<void>;
    dwOnConfirm: EventEmitter<void>;
    dwOkText: string;
    dwOkType: string;
    dwCancelText: string;
    dwCondition: boolean;
    show(): void;
    onCancel(): void;
    onConfirm(): void;
    constructor(cdr: ChangeDetectorRef);
}

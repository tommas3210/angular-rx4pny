import { QueryList, TemplateRef } from '@angular/core';
import { DwOptionComponent } from './dw-option.component';
export declare class DwOptionGroupComponent {
    _label: string | TemplateRef<void>;
    isLabelString: boolean;
    listOfDwOptionComponent: QueryList<DwOptionComponent>;
    dwLabel: string | TemplateRef<void>;
}

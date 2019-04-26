import { AfterViewInit, TemplateRef } from '@angular/core';
import { DwDropdownService } from './dw-dropdown.service';
export declare class DwDropdownContextComponent implements AfterViewInit {
    dropDownPosition: 'top' | 'bottom';
    control: DwDropdownService;
    template: TemplateRef<void>;
    open: boolean;
    setTemplateRef(value: TemplateRef<void>): void;
    setControl(value: DwDropdownService): void;
    setDropDownPosition(value: 'top' | 'bottom'): void;
    close(): void;
    afterAnimation(): void;
    ngAfterViewInit(): void;
}

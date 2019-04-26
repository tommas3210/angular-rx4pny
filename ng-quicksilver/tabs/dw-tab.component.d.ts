import { EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DwTabSetComponent } from './dw-tabset.component';
export declare class DwTabComponent implements OnDestroy, OnInit {
    private dwTabSetComponent;
    private _title;
    private _disabled;
    position: number | null;
    origin: number | null;
    isTitleString: boolean;
    dwDisabled: boolean;
    dwClick: EventEmitter<void>;
    dwSelect: EventEmitter<void>;
    dwDeselect: EventEmitter<void>;
    content: TemplateRef<void>;
    dwTitle: string | TemplateRef<void>;
    constructor(dwTabSetComponent: DwTabSetComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

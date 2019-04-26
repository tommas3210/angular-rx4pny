import { OnDestroy, OnInit } from '@angular/core';
import { DwFormItemComponent } from './dw-form-item.component';
export declare class DwFormExplainComponent implements OnDestroy, OnInit {
    private dwFormItemComponent;
    constructor(dwFormItemComponent: DwFormItemComponent);
    ngOnDestroy(): void;
    ngOnInit(): void;
}

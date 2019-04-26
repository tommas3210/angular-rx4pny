import { AfterContentInit, EventEmitter, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { DwThComponent } from './dw-th.component';
import { DwTableComponent } from './dw-table.component';
export declare class DwTheadComponent implements AfterContentInit, OnDestroy {
    dwTableComponent: DwTableComponent;
    private _singleSort;
    private unsubscribe$;
    template: TemplateRef<void>;
    listOfDwThComponent: QueryList<DwThComponent>;
    dwSortChange: EventEmitter<{
        key: string;
        value: string;
    }>;
    dwSingleSort: boolean;
    constructor(dwTableComponent: DwTableComponent);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}

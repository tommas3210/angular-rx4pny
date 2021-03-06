import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { TransferCanMove, TransferChange, TransferItem, TransferSearchChange, TransferSelectChange } from './interface';
export declare class DwTransferComponent implements OnInit, OnChanges, OnDestroy {
    private i18n;
    private el;
    private unsubscribe$;
    locale: any;
    private _showSearch;
    leftFilter: string;
    rightFilter: string;
    dwDataSource: TransferItem[];
    dwTitles: string[];
    dwOperations: string[];
    dwListStyle: object;
    dwItemUnit: string;
    dwItemsUnit: string;
    dwCanMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    dwRender: TemplateRef<void>;
    dwFooter: TemplateRef<void>;
    dwShowSearch: boolean;
    dwFilterOption: (inputValue: string, item: TransferItem) => boolean;
    dwSearchPlaceholder: string;
    dwNotFoundContent: string;
    dwChange: EventEmitter<TransferChange>;
    dwSearchChange: EventEmitter<TransferSearchChange>;
    dwSelectChange: EventEmitter<TransferSelectChange>;
    leftDataSource: TransferItem[];
    rightDataSource: TransferItem[];
    private splitDataSource;
    private getCheckedData;
    handleLeftSelectAll: (checked: boolean) => void;
    handleRightSelectAll: (checked: boolean) => void;
    handleLeftSelect: (item: TransferItem) => void;
    handleRightSelect: (item: TransferItem) => void;
    handleSelect(direction: 'left' | 'right', checked: boolean, item?: TransferItem): void;
    handleFilterChange(ret: {
        direction: string;
        value: string;
    }): void;
    leftActive: boolean;
    rightActive: boolean;
    private updateOperationStatus;
    moveToLeft: () => void;
    moveToRight: () => void;
    moveTo(direction: string): void;
    private truthMoveTo;
    constructor(i18n: DwI18nService, el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}

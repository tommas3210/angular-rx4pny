import { EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { DwI18nService } from '../i18n/dw-i18n.service';
export declare class DwPaginationComponent implements OnInit, OnDestroy {
    private i18n;
    private unsubscribe$;
    locale: any;
    private _itemRender;
    private _showSizeChanger;
    private _showQuickJumper;
    private _simple;
    private _hideOnSinglePage;
    private _pageSize;
    private _pageSizeOptions;
    private _total;
    private _pageIndex;
    firstIndex: number;
    pages: any[];
    dwShowTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    dwInTable: boolean;
    dwSize: string;
    dwPageSizeChange: EventEmitter<number>;
    dwPageIndexChange: EventEmitter<number>;
    dwItemRender: TemplateRef<{
        $implicit: 'page' | 'prev' | 'next';
        page: number;
    }>;
    dwShowSizeChanger: boolean;
    dwHideOnSinglePage: boolean;
    dwShowQuickJumper: boolean;
    dwSimple: boolean;
    /** page size changer select values */
    dwPageSizeOptions: number[];
    dwPageIndex: number;
    dwPageSize: number;
    dwTotal: number;
    jumpPage(index: number): void;
    jumpPreFive(): void;
    jumpNextFive(): void;
    jumpPreOne(): void;
    jumpNextOne(): void;
    onPageSizeChange($event: number): void;
    handleKeyDown(e: KeyboardEvent, input: HTMLInputElement, clearInputValue: boolean): void;
    isValid(page: number): boolean;
    handleChange(value: number, target: HTMLInputElement, clearInputValue: boolean): void;
    checkLastIndexOverflow(): boolean;
    readonly lastIndex: number;
    /** generate indexes list */
    buildIndexes(): void;
    readonly isLastIndex: boolean;
    readonly isFirstIndex: boolean;
    min(val1: number, val2: number): number;
    constructor(i18n: DwI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}

import { ElementRef, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { ShowUploadListInterface, UploadFile, UploadListType } from './interface';
export declare class DwUploadListComponent implements OnChanges {
    private el;
    private updateHostClassService;
    locale: any;
    listType: UploadListType;
    items: UploadFile[];
    icons: ShowUploadListInterface;
    onPreview: (file: UploadFile) => void;
    onRemove: (file: UploadFile) => void;
    private prefixCls;
    setClassMap(): void;
    handlePreview(file: UploadFile, e: Event): void;
    handleRemove(file: UploadFile, e: Event): void;
    constructor(el: ElementRef, updateHostClassService: DwUpdateHostClassService);
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
}

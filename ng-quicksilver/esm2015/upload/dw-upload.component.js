/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { toBoolean, toNumber, InputBoolean } from '../core/util/convert';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { DwUploadBtnComponent } from './dw-upload-btn.component';
export class DwUploadComponent {
    /**
     * @param {?} cd
     * @param {?} i18n
     */
    constructor(cd, i18n) {
        this.cd = cd;
        this.i18n = i18n;
        this.locale = {};
        // region: fields
        this.dwType = 'select';
        this._limit = 0;
        this._size = 0;
        this.dwDirectory = false;
        this.dwFilter = [];
        this.dwFileList = [];
        this.dwFileListChange = new EventEmitter();
        this._disabled = false;
        this.dwListType = 'text';
        this._multiple = false;
        this.dwName = 'file';
        this._showUploadList = true;
        this._showBtn = true;
        this._withCredentials = false;
        this.dwChange = new EventEmitter();
        this.onStart = (file) => {
            if (!this.dwFileList) {
                this.dwFileList = [];
            }
            /** @type {?} */
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.dwFileList.push(targetItem);
            this.genThumb(targetItem);
            this.dwFileListChange.emit(this.dwFileList);
            this.dwChange.emit({ file: targetItem, fileList: this.dwFileList, type: 'start' });
            this.cd.detectChanges();
        };
        this.onProgress = (e, file) => {
            /** @type {?} */
            const fileList = this.dwFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.dwChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.dwFileList,
                type: 'progress'
            });
            this.cd.detectChanges();
        };
        this.onSuccess = (res, file, xhr) => {
            /** @type {?} */
            const fileList = this.dwFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.dwChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.cd.detectChanges();
        };
        this.onError = (err, file) => {
            /** @type {?} */
            const fileList = this.dwFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem["message"] = this.genErr(targetItem);
            this.dwChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.cd.detectChanges();
        };
        // endregion
        // region: list
        this.onRemove = (file) => {
            this.upload.abort(file);
            file.status = 'removed';
            /** @type {?} */
            const fnRes = typeof this.dwRemove === 'function' ?
                this.dwRemove(file) : this.dwRemove == null ? true : this.dwRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes))
                .pipe(filter((res) => res))
                .subscribe(() => {
                this.dwFileList = this.removeFileItem(file, this.dwFileList);
                this.dwChange.emit({
                    file,
                    fileList: this.dwFileList,
                    type: 'removed'
                });
                this.dwFileListChange.emit(this.dwFileList);
                this.cd.detectChanges();
            });
        };
        // endregion
        // region: styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLimit(value) {
        this._limit = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get dwLimit() {
        return this._limit;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this._size = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get dwSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwMultiple(value) {
        this._multiple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwMultiple() {
        return this._multiple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
    }
    /**
     * @return {?}
     */
    get dwShowUploadList() {
        return this._showUploadList;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowButton(value) {
        this._showBtn = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowButton() {
        return this._showBtn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwWithCredentials(value) {
        this._withCredentials = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwWithCredentials() {
        return this._withCredentials;
    }
    /**
     * @return {?}
     */
    zipOptions() {
        if (typeof this.dwShowUploadList === 'boolean' && this.dwShowUploadList) {
            this.dwShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        /** @type {?} */
        const filters = this.dwFilter.slice();
        if (this.dwMultiple && this.dwLimit > 0 && filters.findIndex(w => w.name === 'limit') === -1) {
            filters.push({
                name: 'limit',
                fn: (fileList) => fileList.slice(-this.dwLimit)
            });
        }
        if (this.dwSize > 0 && filters.findIndex(w => w.name === 'size') === -1) {
            filters.push({
                name: 'size',
                fn: (fileList) => fileList.filter(w => (w.size / 1024) <= this.dwSize)
            });
        }
        if (this.dwFileType && this.dwFileType.length > 0 && filters.findIndex(w => w.name === 'type') === -1) {
            /** @type {?} */
            const types = this.dwFileType.split(',');
            filters.push({
                name: 'type',
                fn: (fileList) => fileList.filter(w => ~types.indexOf(w.type))
            });
        }
        this._btnOptions = {
            disabled: this.dwDisabled,
            accept: this.dwAccept,
            action: this.dwAction,
            directory: this.dwDirectory,
            beforeUpload: this.dwBeforeUpload,
            customRequest: this.dwCustomRequest,
            data: this.dwData,
            headers: this.dwHeaders,
            name: this.dwName,
            multiple: this.dwMultiple,
            withCredentials: this.dwWithCredentials,
            filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-angle-bracket-type-assertion
            originFileObj: /** @type {?} */ (file)
        };
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    getFileItem(file, fileList) {
        return fileList.filter(item => item.uid === file.uid)[0];
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    removeFileItem(file, fileList) {
        return fileList.filter(item => item.uid !== file.uid);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    genErr(file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.locale.uploadError;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    genThumb(file) {
        if (typeof document === 'undefined' ||
            typeof window === 'undefined' ||
            !(/** @type {?} */ (window)).FileReader || !(/** @type {?} */ (window)).File ||
            !(file.originFileObj instanceof File) ||
            file.thumbUrl !== undefined) {
            return;
        }
        file.thumbUrl = '';
        /** @type {?} */
        const reader = new FileReader();
        reader.onloadend = () => file.thumbUrl = /** @type {?} */ (reader.result);
        reader.readAsDataURL(file.originFileObj);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const isDrag = this.dwType === 'drag';
        /** @type {?} */
        let subCls = [];
        if (this.dwType === 'drag') {
            subCls = [
                this.dwFileList.some(file => file.status === 'uploading') && `${this.prefixCls}-drag-uploading`,
                this.dragState === 'dragover' && `${this.prefixCls}-drag-hover`
            ];
        }
        else {
            subCls = [
                `${this.prefixCls}-select-${this.dwListType}`
            ];
        }
        this.classList = [
            this.prefixCls,
            `${this.prefixCls}-${this.dwType}`,
            ...subCls,
            this.dwDisabled && `${this.prefixCls}-disabled`
        ].filter(item => !!item);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe(() => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.cd.detectChanges();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dwFileList) {
            (this.dwFileList || []).forEach(file => file["message"] = this.genErr(file));
        }
        this.zipOptions().setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
DwUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-upload',
                template: "<ng-template #list>\n  <dw-upload-list *ngIf=\"dwShowUploadList\"\n    [locale]=\"locale\"\n    [listType]=\"dwListType\"\n    [items]=\"dwFileList\"\n    [icons]=\"dwShowUploadList\"\n    [onPreview]=\"dwPreview\"\n    [onRemove]=\"onRemove\"></dw-upload-list>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"dwShowButton ? '' : 'none'\">\n    <div dw-upload-btn #upload [options]=\"_btnOptions\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"dwType === 'drag'; else select\">\n  <div [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\">\n    <div dw-upload-btn #upload [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"dwListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DwUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DwI18nService }
];
DwUploadComponent.propDecorators = {
    upload: [{ type: ViewChild, args: ['upload',] }],
    dwType: [{ type: Input }],
    dwLimit: [{ type: Input }],
    dwSize: [{ type: Input }],
    dwFileType: [{ type: Input }],
    dwAccept: [{ type: Input }],
    dwAction: [{ type: Input }],
    dwDirectory: [{ type: Input }],
    dwBeforeUpload: [{ type: Input }],
    dwCustomRequest: [{ type: Input }],
    dwData: [{ type: Input }],
    dwFilter: [{ type: Input }],
    dwFileList: [{ type: Input }],
    dwFileListChange: [{ type: Output }],
    dwDisabled: [{ type: Input }],
    dwHeaders: [{ type: Input }],
    dwListType: [{ type: Input }],
    dwMultiple: [{ type: Input }],
    dwName: [{ type: Input }],
    dwShowUploadList: [{ type: Input }],
    dwShowButton: [{ type: Input }],
    dwWithCredentials: [{ type: Input }],
    dwRemove: [{ type: Input }],
    dwPreview: [{ type: Input }],
    dwChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DwUploadComponent.prototype, "dwDirectory", void 0);
function DwUploadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwUploadComponent.prototype.i18n$;
    /** @type {?} */
    DwUploadComponent.prototype.locale;
    /** @type {?} */
    DwUploadComponent.prototype.upload;
    /** @type {?} */
    DwUploadComponent.prototype.dwType;
    /** @type {?} */
    DwUploadComponent.prototype._limit;
    /** @type {?} */
    DwUploadComponent.prototype._size;
    /** @type {?} */
    DwUploadComponent.prototype.dwFileType;
    /** @type {?} */
    DwUploadComponent.prototype.dwAccept;
    /** @type {?} */
    DwUploadComponent.prototype.dwAction;
    /** @type {?} */
    DwUploadComponent.prototype.dwDirectory;
    /** @type {?} */
    DwUploadComponent.prototype.dwBeforeUpload;
    /** @type {?} */
    DwUploadComponent.prototype.dwCustomRequest;
    /** @type {?} */
    DwUploadComponent.prototype.dwData;
    /** @type {?} */
    DwUploadComponent.prototype.dwFilter;
    /** @type {?} */
    DwUploadComponent.prototype.dwFileList;
    /** @type {?} */
    DwUploadComponent.prototype.dwFileListChange;
    /** @type {?} */
    DwUploadComponent.prototype._disabled;
    /** @type {?} */
    DwUploadComponent.prototype.dwHeaders;
    /** @type {?} */
    DwUploadComponent.prototype.dwListType;
    /** @type {?} */
    DwUploadComponent.prototype._multiple;
    /** @type {?} */
    DwUploadComponent.prototype.dwName;
    /** @type {?} */
    DwUploadComponent.prototype._showUploadList;
    /** @type {?} */
    DwUploadComponent.prototype._showBtn;
    /** @type {?} */
    DwUploadComponent.prototype._withCredentials;
    /** @type {?} */
    DwUploadComponent.prototype.dwRemove;
    /** @type {?} */
    DwUploadComponent.prototype.dwPreview;
    /** @type {?} */
    DwUploadComponent.prototype.dwChange;
    /** @type {?} */
    DwUploadComponent.prototype._btnOptions;
    /** @type {?} */
    DwUploadComponent.prototype.onStart;
    /** @type {?} */
    DwUploadComponent.prototype.onProgress;
    /** @type {?} */
    DwUploadComponent.prototype.onSuccess;
    /** @type {?} */
    DwUploadComponent.prototype.onError;
    /** @type {?} */
    DwUploadComponent.prototype.dragState;
    /** @type {?} */
    DwUploadComponent.prototype.onRemove;
    /** @type {?} */
    DwUploadComponent.prototype.prefixCls;
    /** @type {?} */
    DwUploadComponent.prototype.classList;
    /** @type {?} */
    DwUploadComponent.prototype.cd;
    /** @type {?} */
    DwUploadComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidXBsb2FkL2R3LXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBV3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBUWpFLE1BQU07Ozs7O0lBNkpKLFlBQW9CLEVBQXFCLEVBQVUsSUFBbUI7UUFBbEQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO3NCQTNKeEQsRUFBRTs7c0JBSWMsUUFBUTtzQkFDYixDQUFDO3FCQVdGLENBQUM7MkJBY3VCLEtBQUs7d0JBSWpCLEVBQUU7MEJBQ0YsRUFBRTtnQ0FDbUIsSUFBSSxZQUFZLEVBQWdCO3lCQUVyRSxLQUFLOzBCQVlhLE1BQU07eUJBRXhCLEtBQUs7c0JBV1AsTUFBTTsrQkFFcUMsSUFBSTt3QkFXOUMsSUFBSTtnQ0FXSSxLQUFLO3dCQWNzQixJQUFJLFlBQVksRUFBcUI7dUJBeUd6RSxDQUFDLElBQVMsRUFBUSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFH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O1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQjs7O1lBMVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsV0FBVztnQkFDaEMsdy9DQUFpRDtnQkFDakQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07YUFDcEQ7Ozs7WUFsQ0MsaUJBQWlCO1lBZ0JWLGFBQWE7OztxQkFzQm5CLFNBQVMsU0FBQyxRQUFRO3FCQUdsQixLQUFLO3NCQUdMLEtBQUs7cUJBV0wsS0FBSzt5QkFTTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxNQUFNO3lCQUlOLEtBQUs7d0JBU0wsS0FBSzt5QkFDTCxLQUFLO3lCQUlMLEtBQUs7cUJBU0wsS0FBSzsrQkFJTCxLQUFLOzJCQVdMLEtBQUs7Z0NBV0wsS0FBSzt1QkFTTCxLQUFLO3dCQUNMLEtBQUs7dUJBRUwsTUFBTTs7O0lBdkVHLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHRvTnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9kdy1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBTaG93VXBsb2FkTGlzdEludGVyZmFjZSxcbiAgVXBsb2FkQ2hhbmdlUGFyYW0sXG4gIFVwbG9hZEZpbGUsXG4gIFVwbG9hZEZpbHRlcixcbiAgVXBsb2FkTGlzdFR5cGUsXG4gIFVwbG9hZFR5cGUsXG4gIFppcEJ1dHRvbk9wdGlvbnNcbn0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRHdVcGxvYWRCdG5Db21wb25lbnQgfSBmcm9tICcuL2R3LXVwbG9hZC1idG4uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy11cGxvYWQnLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIER3VXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQFZpZXdDaGlsZCgndXBsb2FkJykgdXBsb2FkOiBEd1VwbG9hZEJ0bkNvbXBvbmVudDtcblxuICAvLyByZWdpb246IGZpZWxkc1xuICBASW5wdXQoKSBkd1R5cGU6IFVwbG9hZFR5cGUgPSAnc2VsZWN0JztcbiAgcHJpdmF0ZSBfbGltaXQ6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TGltaXQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2xpbWl0ID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgZ2V0IGR3TGltaXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGltaXQ7XG4gIH1cblxuICBwcml2YXRlIF9zaXplOiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NpemUodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NpemUgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBnZXQgZHdTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKSBkd0ZpbGVUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3QWNjZXB0OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgZHdBY3Rpb246IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RGlyZWN0b3J5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3QmVmb3JlVXBsb2FkOiAoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8YW55PjtcbiAgQElucHV0KCkgZHdDdXN0b21SZXF1ZXN0OiAoaXRlbTogYW55KSA9PiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIGR3RGF0YToge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcbiAgQElucHV0KCkgZHdGaWx0ZXI6IFVwbG9hZEZpbHRlcltdID0gW107XG4gIEBJbnB1dCgpIGR3RmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBAT3V0cHV0KCkgZHdGaWxlTGlzdENoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4oKTtcblxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KCkgZHdIZWFkZXJzOiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuICBASW5wdXQoKSBkd0xpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZSA9ICd0ZXh0JztcblxuICBwcml2YXRlIF9tdWx0aXBsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd011bHRpcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3TXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG5cbiAgQElucHV0KCkgZHdOYW1lID0gJ2ZpbGUnO1xuXG4gIHByaXZhdGUgX3Nob3dVcGxvYWRMaXN0OiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dVcGxvYWRMaXN0KHZhbHVlOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UpIHtcbiAgICB0aGlzLl9zaG93VXBsb2FkTGlzdCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gdG9Cb29sZWFuKHZhbHVlKSA6IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3U2hvd1VwbG9hZExpc3QoKTogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1VwbG9hZExpc3Q7XG4gIH1cblxuICBwcml2YXRlIF9zaG93QnRuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93QnV0dG9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0J0biA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93QnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93QnRuO1xuICB9XG5cbiAgcHJpdmF0ZSBfd2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3V2l0aENyZWRlbnRpYWxzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fd2l0aENyZWRlbnRpYWxzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1dpdGhDcmVkZW50aWFscygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fd2l0aENyZWRlbnRpYWxzO1xuICB9XG5cbiAgQElucHV0KCkgZHdSZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgZHdQcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcblxuICBAT3V0cHV0KCkgZHdDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPigpO1xuXG4gIF9idG5PcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xuXG4gIHByaXZhdGUgemlwT3B0aW9ucygpOiB0aGlzIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZHdTaG93VXBsb2FkTGlzdCA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMuZHdTaG93VXBsb2FkTGlzdCkge1xuICAgICAgdGhpcy5kd1Nob3dVcGxvYWRMaXN0ID0ge1xuICAgICAgICBzaG93UHJldmlld0ljb246IHRydWUsXG4gICAgICAgIHNob3dSZW1vdmVJY29uIDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gZmlsdGVyc1xuICAgIGNvbnN0IGZpbHRlcnM6IFVwbG9hZEZpbHRlcltdID0gdGhpcy5kd0ZpbHRlci5zbGljZSgpO1xuICAgIGlmICh0aGlzLmR3TXVsdGlwbGUgJiYgdGhpcy5kd0xpbWl0ID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ2xpbWl0JykgPT09IC0xKSB7XG4gICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnbGltaXQnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3Quc2xpY2UoLXRoaXMuZHdMaW1pdClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd1NpemUgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnc2l6ZScpID09PSAtMSkge1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3NpemUnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gKHcuc2l6ZSAvIDEwMjQpIDw9IHRoaXMuZHdTaXplKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmR3RmlsZVR5cGUgJiYgdGhpcy5kd0ZpbGVUeXBlLmxlbmd0aCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICd0eXBlJykgPT09IC0xKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IHRoaXMuZHdGaWxlVHlwZS5zcGxpdCgnLCcpO1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3R5cGUnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gfnR5cGVzLmluZGV4T2Yody50eXBlKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9idG5PcHRpb25zID0ge1xuICAgICAgZGlzYWJsZWQgICAgICAgOiB0aGlzLmR3RGlzYWJsZWQsXG4gICAgICBhY2NlcHQgICAgICAgICA6IHRoaXMuZHdBY2NlcHQsXG4gICAgICBhY3Rpb24gICAgICAgICA6IHRoaXMuZHdBY3Rpb24sXG4gICAgICBkaXJlY3RvcnkgICAgICA6IHRoaXMuZHdEaXJlY3RvcnksXG4gICAgICBiZWZvcmVVcGxvYWQgICA6IHRoaXMuZHdCZWZvcmVVcGxvYWQsXG4gICAgICBjdXN0b21SZXF1ZXN0ICA6IHRoaXMuZHdDdXN0b21SZXF1ZXN0LFxuICAgICAgZGF0YSAgICAgICAgICAgOiB0aGlzLmR3RGF0YSxcbiAgICAgIGhlYWRlcnMgICAgICAgIDogdGhpcy5kd0hlYWRlcnMsXG4gICAgICBuYW1lICAgICAgICAgICA6IHRoaXMuZHdOYW1lLFxuICAgICAgbXVsdGlwbGUgICAgICAgOiB0aGlzLmR3TXVsdGlwbGUsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuZHdXaXRoQ3JlZGVudGlhbHMsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgb25TdGFydCAgICAgICAgOiB0aGlzLm9uU3RhcnQsXG4gICAgICBvblByb2dyZXNzICAgICA6IHRoaXMub25Qcm9ncmVzcyxcbiAgICAgIG9uU3VjY2VzcyAgICAgIDogdGhpcy5vblN1Y2Nlc3MsXG4gICAgICBvbkVycm9yICAgICAgICA6IHRoaXMub25FcnJvclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgaTE4bjogRHdJMThuU2VydmljZSkge1xuICB9XG5cbiAgLy8gcmVnaW9uOiB1cGxvYWRcbiAgcHJpdmF0ZSBmaWxlVG9PYmplY3QoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0TW9kaWZpZWQgICAgOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgIG5hbWUgICAgICAgICAgICA6IGZpbGUuZmlsZW5hbWUgfHwgZmlsZS5uYW1lLFxuICAgICAgc2l6ZSAgICAgICAgICAgIDogZmlsZS5zaXplLFxuICAgICAgdHlwZSAgICAgICAgICAgIDogZmlsZS50eXBlLFxuICAgICAgdWlkICAgICAgICAgICAgIDogZmlsZS51aWQsXG4gICAgICByZXNwb25zZSAgICAgICAgOiBmaWxlLnJlc3BvbnNlLFxuICAgICAgZXJyb3IgICAgICAgICAgIDogZmlsZS5lcnJvcixcbiAgICAgIHBlcmNlbnQgICAgICAgICA6IDAsXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW5nbGUtYnJhY2tldC10eXBlLWFzc2VydGlvblxuICAgICAgb3JpZ2luRmlsZU9iaiAgIDogPGFueT4gZmlsZVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldEZpbGVJdGVtKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgPT09IGZpbGUudWlkKVsgMCBdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZVtdIHtcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgIT09IGZpbGUudWlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuRXJyKGZpbGU6IFVwbG9hZEZpbGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaWxlLnJlc3BvbnNlICYmIHR5cGVvZiBmaWxlLnJlc3BvbnNlID09PSAnc3RyaW5nJyA/XG4gICAgICBmaWxlLnJlc3BvbnNlIDpcbiAgICAgIChmaWxlLmVycm9yICYmIGZpbGUuZXJyb3Iuc3RhdHVzVGV4dCkgfHwgdGhpcy5sb2NhbGUudXBsb2FkRXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGdlblRodW1iKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICEod2luZG93IGFzIGFueSkuRmlsZVJlYWRlciB8fCAhKHdpbmRvdyBhcyBhbnkpLkZpbGUgfHxcbiAgICAgICEoZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSkgfHxcbiAgICAgIGZpbGUudGh1bWJVcmwgIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGUudGh1bWJVcmwgPSAnJztcblxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IGZpbGUudGh1bWJVcmwgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLm9yaWdpbkZpbGVPYmopO1xuICB9XG5cbiAgcHJpdmF0ZSBvblN0YXJ0ID0gKGZpbGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5kd0ZpbGVMaXN0KSB7XG4gICAgICB0aGlzLmR3RmlsZUxpc3QgPSBbXTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZmlsZVRvT2JqZWN0KGZpbGUpO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ3VwbG9hZGluZyc7XG4gICAgdGhpcy5kd0ZpbGVMaXN0LnB1c2godGFyZ2V0SXRlbSk7XG4gICAgdGhpcy5nZW5UaHVtYih0YXJnZXRJdGVtKTtcbiAgICB0aGlzLmR3RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLmR3RmlsZUxpc3QpO1xuICAgIHRoaXMuZHdDaGFuZ2UuZW1pdCh7IGZpbGU6IHRhcmdldEl0ZW0sIGZpbGVMaXN0OiB0aGlzLmR3RmlsZUxpc3QsIHR5cGU6ICdzdGFydCcgfSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIG9uUHJvZ3Jlc3MgPSAoZTogeyBwZXJjZW50OiBudW1iZXIgfSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5kd0ZpbGVMaXN0O1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcbiAgICB0YXJnZXRJdGVtLnBlcmNlbnQgPSBlLnBlcmNlbnQ7XG4gICAgdGhpcy5kd0NoYW5nZS5lbWl0KHtcbiAgICAgIGV2ZW50ICAgOiBlLFxuICAgICAgZmlsZSAgICA6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3Q6IHRoaXMuZHdGaWxlTGlzdCxcbiAgICAgIHR5cGUgICAgOiAncHJvZ3Jlc3MnXG4gICAgfSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIG9uU3VjY2VzcyA9IChyZXM6IGFueSwgZmlsZTogYW55LCB4aHI/OiBhbnkpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMuZHdGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZG9uZSc7XG4gICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlcztcbiAgICB0aGlzLmR3Q2hhbmdlLmVtaXQoe1xuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXG4gICAgICBmaWxlTGlzdCxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkVycm9yID0gKGVycjogYW55LCBmaWxlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMuZHdGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5lcnJvciA9IGVycjtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdlcnJvcic7XG4gICAgdGFyZ2V0SXRlbS5tZXNzYWdlID0gdGhpcy5nZW5FcnIodGFyZ2V0SXRlbSk7XG4gICAgdGhpcy5kd0NoYW5nZS5lbWl0KHtcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3QsXG4gICAgICB0eXBlOiAnZXJyb3InXG4gICAgfSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgLy8gcmVnaW9uOiBkcmFnXG4gIHByaXZhdGUgZHJhZ1N0YXRlOiBzdHJpbmc7XG5cbiAgZmlsZURyb3AoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudHlwZSA9PT0gdGhpcy5kcmFnU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmFnU3RhdGUgPSBlLnR5cGU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIC8vIHJlZ2lvbjogbGlzdFxuICBvblJlbW92ZSA9IChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XG4gICAgdGhpcy51cGxvYWQuYWJvcnQoZmlsZSk7XG4gICAgZmlsZS5zdGF0dXMgPSAncmVtb3ZlZCc7XG4gICAgY29uc3QgZm5SZXMgPSB0eXBlb2YgdGhpcy5kd1JlbW92ZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLmR3UmVtb3ZlKGZpbGUpIDogdGhpcy5kd1JlbW92ZSA9PSBudWxsID8gdHJ1ZSA6IHRoaXMuZHdSZW1vdmU7XG4gICAgKGZuUmVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGZuUmVzIDogb2YoZm5SZXMpKVxuICAgIC5waXBlKGZpbHRlcigocmVzOiBib29sZWFuKSA9PiByZXMpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5kd0ZpbGVMaXN0ID0gdGhpcy5yZW1vdmVGaWxlSXRlbShmaWxlLCB0aGlzLmR3RmlsZUxpc3QpO1xuICAgICAgdGhpcy5kd0NoYW5nZS5lbWl0KHtcbiAgICAgICAgZmlsZSxcbiAgICAgICAgZmlsZUxpc3Q6IHRoaXMuZHdGaWxlTGlzdCxcbiAgICAgICAgdHlwZSAgICA6ICdyZW1vdmVkJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLmR3RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLmR3RmlsZUxpc3QpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgLy8gcmVnaW9uOiBzdHlsZXNcbiAgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xuICBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW107XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgaXNEcmFnID0gdGhpcy5kd1R5cGUgPT09ICdkcmFnJztcbiAgICBsZXQgc3ViQ2xzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh0aGlzLmR3VHlwZSA9PT0gJ2RyYWcnKSB7XG4gICAgICBzdWJDbHMgPSBbXG4gICAgICAgIHRoaXMuZHdGaWxlTGlzdC5zb21lKGZpbGUgPT4gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnKSAmJiBgJHt0aGlzLnByZWZpeENsc30tZHJhZy11cGxvYWRpbmdgLFxuICAgICAgICB0aGlzLmRyYWdTdGF0ZSA9PT0gJ2RyYWdvdmVyJyAmJiBgJHt0aGlzLnByZWZpeENsc30tZHJhZy1ob3ZlcmBcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YkNscyA9IFtcbiAgICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdC0ke3RoaXMuZHdMaXN0VHlwZX1gXG4gICAgICBdO1xuICAgIH1cblxuICAgIHRoaXMuY2xhc3NMaXN0ID0gW1xuICAgICAgdGhpcy5wcmVmaXhDbHMsXG4gICAgICBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3VHlwZX1gLFxuICAgICAgLi4uc3ViQ2xzLFxuICAgICAgdGhpcy5kd0Rpc2FibGVkICYmIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGBcbiAgICBdLmZpbHRlcihpdGVtID0+ICEhaXRlbSk7XG5cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVXBsb2FkJyk7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kd0ZpbGVMaXN0KSB7XG4gICAgICAodGhpcy5kd0ZpbGVMaXN0IHx8IFtdKS5mb3JFYWNoKGZpbGUgPT4gZmlsZS5tZXNzYWdlID0gdGhpcy5nZW5FcnIoZmlsZSkpO1xuICAgIH1cbiAgICB0aGlzLnppcE9wdGlvbnMoKS5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=
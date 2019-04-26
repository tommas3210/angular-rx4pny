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
var DwUploadComponent = /** @class */ (function () {
    // endregion
    function DwUploadComponent(cd, i18n) {
        var _this = this;
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
        this.onStart = function (file) {
            if (!_this.dwFileList) {
                _this.dwFileList = [];
            }
            /** @type {?} */
            var targetItem = _this.fileToObject(file);
            targetItem.status = 'uploading';
            _this.dwFileList.push(targetItem);
            _this.genThumb(targetItem);
            _this.dwFileListChange.emit(_this.dwFileList);
            _this.dwChange.emit({ file: targetItem, fileList: _this.dwFileList, type: 'start' });
            _this.cd.detectChanges();
        };
        this.onProgress = function (e, file) {
            /** @type {?} */
            var fileList = _this.dwFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            _this.dwChange.emit({
                event: e,
                file: tslib_1.__assign({}, targetItem),
                fileList: _this.dwFileList,
                type: 'progress'
            });
            _this.cd.detectChanges();
        };
        this.onSuccess = function (res, file, xhr) {
            /** @type {?} */
            var fileList = _this.dwFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            _this.dwChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'success'
            });
            _this.cd.detectChanges();
        };
        this.onError = function (err, file) {
            /** @type {?} */
            var fileList = _this.dwFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem["message"] = _this.genErr(targetItem);
            _this.dwChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'error'
            });
            _this.cd.detectChanges();
        };
        // endregion
        // region: list
        this.onRemove = function (file) {
            _this.upload.abort(file);
            file.status = 'removed';
            /** @type {?} */
            var fnRes = typeof _this.dwRemove === 'function' ?
                _this.dwRemove(file) : _this.dwRemove == null ? true : _this.dwRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes))
                .pipe(filter(function (res) { return res; }))
                .subscribe(function () {
                _this.dwFileList = _this.removeFileItem(file, _this.dwFileList);
                _this.dwChange.emit({
                    file: file,
                    fileList: _this.dwFileList,
                    type: 'removed'
                });
                _this.dwFileListChange.emit(_this.dwFileList);
                _this.cd.detectChanges();
            });
        };
        // endregion
        // region: styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    Object.defineProperty(DwUploadComponent.prototype, "dwLimit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._limit;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._limit = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwUploadComponent.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwUploadComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwUploadComponent.prototype, "dwMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._multiple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwUploadComponent.prototype, "dwShowUploadList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showUploadList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwUploadComponent.prototype, "dwShowButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showBtn;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showBtn = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwUploadComponent.prototype, "dwWithCredentials", {
        get: /**
         * @return {?}
         */
        function () {
            return this._withCredentials;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._withCredentials = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwUploadComponent.prototype.zipOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof this.dwShowUploadList === 'boolean' && this.dwShowUploadList) {
            this.dwShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        /** @type {?} */
        var filters = this.dwFilter.slice();
        if (this.dwMultiple && this.dwLimit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
            filters.push({
                name: 'limit',
                fn: function (fileList) { return fileList.slice(-_this.dwLimit); }
            });
        }
        if (this.dwSize > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
            filters.push({
                name: 'size',
                fn: function (fileList) { return fileList.filter(function (w) { return (w.size / 1024) <= _this.dwSize; }); }
            });
        }
        if (this.dwFileType && this.dwFileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
            /** @type {?} */
            var types_1 = this.dwFileType.split(',');
            filters.push({
                name: 'type',
                fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
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
            filters: filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    DwUploadComponent.prototype.fileToObject = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
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
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    DwUploadComponent.prototype.getFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid === file.uid; })[0];
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    DwUploadComponent.prototype.removeFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid !== file.uid; });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    DwUploadComponent.prototype.genErr = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.locale.uploadError;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    DwUploadComponent.prototype.genThumb = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (typeof document === 'undefined' ||
            typeof window === 'undefined' ||
            !(/** @type {?} */ (window)).FileReader || !(/** @type {?} */ (window)).File ||
            !(file.originFileObj instanceof File) ||
            file.thumbUrl !== undefined) {
            return;
        }
        file.thumbUrl = '';
        /** @type {?} */
        var reader = new FileReader();
        reader.onloadend = function () { return file.thumbUrl = /** @type {?} */ (reader.result); };
        reader.readAsDataURL(file.originFileObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwUploadComponent.prototype.fileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    DwUploadComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDrag = this.dwType === 'drag';
        /** @type {?} */
        var subCls = [];
        if (this.dwType === 'drag') {
            subCls = [
                this.dwFileList.some(function (file) { return file.status === 'uploading'; }) && this.prefixCls + "-drag-uploading",
                this.dragState === 'dragover' && this.prefixCls + "-drag-hover"
            ];
        }
        else {
            subCls = [
                this.prefixCls + "-select-" + this.dwListType
            ];
        }
        this.classList = tslib_1.__spread([
            this.prefixCls,
            this.prefixCls + "-" + this.dwType
        ], subCls, [
            this.dwDisabled && this.prefixCls + "-disabled"
        ]).filter(function (item) { return !!item; });
        this.cd.detectChanges();
    };
    // endregion
    /**
     * @return {?}
     */
    DwUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.localeChange.subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Upload');
            _this.cd.detectChanges();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwUploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.dwFileList) {
            (this.dwFileList || []).forEach(function (file) { return file["message"] = _this.genErr(file); });
        }
        this.zipOptions().setClassMap();
    };
    /**
     * @return {?}
     */
    DwUploadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
    DwUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-upload',
                    template: "<ng-template #list>\n  <dw-upload-list *ngIf=\"dwShowUploadList\"\n    [locale]=\"locale\"\n    [listType]=\"dwListType\"\n    [items]=\"dwFileList\"\n    [icons]=\"dwShowUploadList\"\n    [onPreview]=\"dwPreview\"\n    [onRemove]=\"onRemove\"></dw-upload-list>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"dwShowButton ? '' : 'none'\">\n    <div dw-upload-btn #upload [options]=\"_btnOptions\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"dwType === 'drag'; else select\">\n  <div [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\">\n    <div dw-upload-btn #upload [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"dwListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DwUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: DwI18nService }
    ]; };
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
    return DwUploadComponent;
}());
export { DwUploadComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidXBsb2FkL2R3LXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBV3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQW9LL0QsWUFBWTtJQUNaLDJCQUFvQixFQUFxQixFQUFVLElBQW1CO1FBQXRFLGlCQUNDO1FBRG1CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtzQkEzSnhELEVBQUU7O3NCQUljLFFBQVE7c0JBQ2IsQ0FBQztxQkFXRixDQUFDOzJCQWN1QixLQUFLO3dCQUlqQixFQUFFOzBCQUNGLEVBQUU7Z0NBQ21CLElBQUksWUFBWSxFQUFnQjt5QkFFckUsS0FBSzswQkFZYSxNQUFNO3lCQUV4QixLQUFLO3NCQVdQLE1BQU07K0JBRXFDLElBQUk7d0JBVzlDLElBQUk7Z0NBV0ksS0FBSzt3QkFjc0IsSUFBSSxZQUFZLEVBQXFCO3VCQXlHekUsVUFBQyxJQUFTO1lBQzFCLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixLQUFJLENBQUMsVUFBVSxHQUFH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QyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxjQUFXLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNqQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDMUI7O2dCQTFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFdBQVc7b0JBQ2hDLHcvQ0FBaUQ7b0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNwRDs7OztnQkFsQ0MsaUJBQWlCO2dCQWdCVixhQUFhOzs7eUJBc0JuQixTQUFTLFNBQUMsUUFBUTt5QkFHbEIsS0FBSzswQkFHTCxLQUFLO3lCQVdMLEtBQUs7NkJBU0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsTUFBTTs2QkFJTixLQUFLOzRCQVNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFJTCxLQUFLO3lCQVNMLEtBQUs7bUNBSUwsS0FBSzsrQkFXTCxLQUFLO29DQVdMLEtBQUs7MkJBU0wsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLE1BQU07OztRQXZFRyxZQUFZLEVBQUU7Ozs0QkF0RTFCOztTQXNDYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuLCB0b051bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsXG4gIFVwbG9hZENoYW5nZVBhcmFtLFxuICBVcGxvYWRGaWxlLFxuICBVcGxvYWRGaWx0ZXIsXG4gIFVwbG9hZExpc3RUeXBlLFxuICBVcGxvYWRUeXBlLFxuICBaaXBCdXR0b25PcHRpb25zXG59IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IER3VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9kdy11cGxvYWQtYnRuLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEd1VwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIGxvY2FsZTogYW55ID0ge307XG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZCcpIHVwbG9hZDogRHdVcGxvYWRCdG5Db21wb25lbnQ7XG5cbiAgLy8gcmVnaW9uOiBmaWVsZHNcbiAgQElucHV0KCkgZHdUeXBlOiBVcGxvYWRUeXBlID0gJ3NlbGVjdCc7XG4gIHByaXZhdGUgX2xpbWl0OiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0xpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIGdldCBkd0xpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zaXplID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgZ2V0IGR3U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KCkgZHdGaWxlVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBkd0FjY2VwdDogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGR3QWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0RpcmVjdG9yeTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkd0JlZm9yZVVwbG9hZDogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGFueT47XG4gIEBJbnB1dCgpIGR3Q3VzdG9tUmVxdWVzdDogKGl0ZW06IGFueSkgPT4gU3Vic2NyaXB0aW9uO1xuICBASW5wdXQoKSBkd0RhdGE6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG4gIEBJbnB1dCgpIGR3RmlsdGVyOiBVcGxvYWRGaWx0ZXJbXSA9IFtdO1xuICBASW5wdXQoKSBkd0ZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcbiAgQE91dHB1dCgpIGR3RmlsZUxpc3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRGaWxlW10+KCk7XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpIGR3SGVhZGVyczoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcbiAgQElucHV0KCkgZHdMaXN0VHlwZTogVXBsb2FkTGlzdFR5cGUgPSAndGV4dCc7XG5cbiAgcHJpdmF0ZSBfbXVsdGlwbGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdNdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX211bHRpcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd011bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIEBJbnB1dCgpIGR3TmFtZSA9ICdmaWxlJztcblxuICBwcml2YXRlIF9zaG93VXBsb2FkTGlzdDogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93VXBsb2FkTGlzdCh2YWx1ZTogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5fc2hvd1VwbG9hZExpc3QgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyA/IHRvQm9vbGVhbih2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd1Nob3dVcGxvYWRMaXN0KCk6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dVcGxvYWRMaXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd0J0biA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd0J1dHRvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dCdG4gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0J1dHRvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0J0bjtcbiAgfVxuXG4gIHByaXZhdGUgX3dpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1dpdGhDcmVkZW50aWFscyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdXaXRoQ3JlZGVudGlhbHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpdGhDcmVkZW50aWFscztcbiAgfVxuXG4gIEBJbnB1dCgpIGR3UmVtb3ZlOiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIEBJbnB1dCgpIGR3UHJldmlldzogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgQE91dHB1dCgpIGR3Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkQ2hhbmdlUGFyYW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4oKTtcblxuICBfYnRuT3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcblxuICBwcml2YXRlIHppcE9wdGlvbnMoKTogdGhpcyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmR3U2hvd1VwbG9hZExpc3QgPT09ICdib29sZWFuJyAmJiB0aGlzLmR3U2hvd1VwbG9hZExpc3QpIHtcbiAgICAgIHRoaXMuZHdTaG93VXBsb2FkTGlzdCA9IHtcbiAgICAgICAgc2hvd1ByZXZpZXdJY29uOiB0cnVlLFxuICAgICAgICBzaG93UmVtb3ZlSWNvbiA6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGZpbHRlcnNcbiAgICBjb25zdCBmaWx0ZXJzOiBVcGxvYWRGaWx0ZXJbXSA9IHRoaXMuZHdGaWx0ZXIuc2xpY2UoKTtcbiAgICBpZiAodGhpcy5kd011bHRpcGxlICYmIHRoaXMuZHdMaW1pdCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdsaW1pdCcpID09PSAtMSkge1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2xpbWl0JyxcbiAgICAgICAgZm4gIDogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LnNsaWNlKC10aGlzLmR3TGltaXQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHdTaXplID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ3NpemUnKSA9PT0gLTEpIHtcbiAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdzaXplJyxcbiAgICAgICAgZm4gIDogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+ICh3LnNpemUgLyAxMDI0KSA8PSB0aGlzLmR3U2l6ZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd0ZpbGVUeXBlICYmIHRoaXMuZHdGaWxlVHlwZS5sZW5ndGggPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAndHlwZScpID09PSAtMSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB0aGlzLmR3RmlsZVR5cGUuc3BsaXQoJywnKTtcbiAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgZm4gIDogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IH50eXBlcy5pbmRleE9mKHcudHlwZSkpXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fYnRuT3B0aW9ucyA9IHtcbiAgICAgIGRpc2FibGVkICAgICAgIDogdGhpcy5kd0Rpc2FibGVkLFxuICAgICAgYWNjZXB0ICAgICAgICAgOiB0aGlzLmR3QWNjZXB0LFxuICAgICAgYWN0aW9uICAgICAgICAgOiB0aGlzLmR3QWN0aW9uLFxuICAgICAgZGlyZWN0b3J5ICAgICAgOiB0aGlzLmR3RGlyZWN0b3J5LFxuICAgICAgYmVmb3JlVXBsb2FkICAgOiB0aGlzLmR3QmVmb3JlVXBsb2FkLFxuICAgICAgY3VzdG9tUmVxdWVzdCAgOiB0aGlzLmR3Q3VzdG9tUmVxdWVzdCxcbiAgICAgIGRhdGEgICAgICAgICAgIDogdGhpcy5kd0RhdGEsXG4gICAgICBoZWFkZXJzICAgICAgICA6IHRoaXMuZHdIZWFkZXJzLFxuICAgICAgbmFtZSAgICAgICAgICAgOiB0aGlzLmR3TmFtZSxcbiAgICAgIG11bHRpcGxlICAgICAgIDogdGhpcy5kd011bHRpcGxlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmR3V2l0aENyZWRlbnRpYWxzLFxuICAgICAgZmlsdGVycyxcbiAgICAgIG9uU3RhcnQgICAgICAgIDogdGhpcy5vblN0YXJ0LFxuICAgICAgb25Qcm9ncmVzcyAgICAgOiB0aGlzLm9uUHJvZ3Jlc3MsXG4gICAgICBvblN1Y2Nlc3MgICAgICA6IHRoaXMub25TdWNjZXNzLFxuICAgICAgb25FcnJvciAgICAgICAgOiB0aGlzLm9uRXJyb3JcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IER3STE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vIHJlZ2lvbjogdXBsb2FkXG4gIHByaXZhdGUgZmlsZVRvT2JqZWN0KGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdE1vZGlmaWVkICAgIDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICBsYXN0TW9kaWZpZWREYXRlOiBmaWxlLmxhc3RNb2RpZmllZERhdGUsXG4gICAgICBuYW1lICAgICAgICAgICAgOiBmaWxlLmZpbGVuYW1lIHx8IGZpbGUubmFtZSxcbiAgICAgIHNpemUgICAgICAgICAgICA6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGUgICAgICAgICAgICA6IGZpbGUudHlwZSxcbiAgICAgIHVpZCAgICAgICAgICAgICA6IGZpbGUudWlkLFxuICAgICAgcmVzcG9uc2UgICAgICAgIDogZmlsZS5yZXNwb25zZSxcbiAgICAgIGVycm9yICAgICAgICAgICA6IGZpbGUuZXJyb3IsXG4gICAgICBwZXJjZW50ICAgICAgICAgOiAwLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFuZ2xlLWJyYWNrZXQtdHlwZS1hc3NlcnRpb25cbiAgICAgIG9yaWdpbkZpbGVPYmogICA6IDxhbnk+IGZpbGVcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZSB7XG4gICAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udWlkID09PSBmaWxlLnVpZClbIDAgXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRmlsZUl0ZW0oZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IFVwbG9hZEZpbGVbXSB7XG4gICAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udWlkICE9PSBmaWxlLnVpZCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkVycihmaWxlOiBVcGxvYWRGaWxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZycgP1xuICAgICAgZmlsZS5yZXNwb25zZSA6XG4gICAgICAoZmlsZS5lcnJvciAmJiBmaWxlLmVycm9yLnN0YXR1c1RleHQpIHx8IHRoaXMubG9jYWxlLnVwbG9hZEVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UaHVtYihmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAhKHdpbmRvdyBhcyBhbnkpLkZpbGVSZWFkZXIgfHwgISh3aW5kb3cgYXMgYW55KS5GaWxlIHx8XG4gICAgICAhKGZpbGUub3JpZ2luRmlsZU9iaiBpbnN0YW5jZW9mIEZpbGUpIHx8XG4gICAgICBmaWxlLnRodW1iVXJsICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWxlLnRodW1iVXJsID0gJyc7XG5cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiBmaWxlLnRodW1iVXJsID0gcmVhZGVyLnJlc3VsdCBhcyBzdHJpbmc7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZS5vcmlnaW5GaWxlT2JqKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TdGFydCA9IChmaWxlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuZHdGaWxlTGlzdCkge1xuICAgICAgdGhpcy5kd0ZpbGVMaXN0ID0gW107XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmZpbGVUb09iamVjdChmaWxlKTtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICd1cGxvYWRpbmcnO1xuICAgIHRoaXMuZHdGaWxlTGlzdC5wdXNoKHRhcmdldEl0ZW0pO1xuICAgIHRoaXMuZ2VuVGh1bWIodGFyZ2V0SXRlbSk7XG4gICAgdGhpcy5kd0ZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5kd0ZpbGVMaXN0KTtcbiAgICB0aGlzLmR3Q2hhbmdlLmVtaXQoeyBmaWxlOiB0YXJnZXRJdGVtLCBmaWxlTGlzdDogdGhpcy5kd0ZpbGVMaXN0LCB0eXBlOiAnc3RhcnQnIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblByb2dyZXNzID0gKGU6IHsgcGVyY2VudDogbnVtYmVyIH0sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMuZHdGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xuICAgIHRoaXMuZHdDaGFuZ2UuZW1pdCh7XG4gICAgICBldmVudCAgIDogZSxcbiAgICAgIGZpbGUgICAgOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0OiB0aGlzLmR3RmlsZUxpc3QsXG4gICAgICB0eXBlICAgIDogJ3Byb2dyZXNzJ1xuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblN1Y2Nlc3MgPSAocmVzOiBhbnksIGZpbGU6IGFueSwgeGhyPzogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLmR3RmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXM7XG4gICAgdGhpcy5kd0NoYW5nZS5lbWl0KHtcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3QsXG4gICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICB9KTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25FcnJvciA9IChlcnI6IGFueSwgZmlsZTogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLmR3RmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIHRhcmdldEl0ZW0uZXJyb3IgPSBlcnI7XG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZXJyb3InO1xuICAgIHRhcmdldEl0ZW0ubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKHRhcmdldEl0ZW0pO1xuICAgIHRoaXMuZHdDaGFuZ2UuZW1pdCh7XG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0LFxuICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIC8vIHJlZ2lvbjogZHJhZ1xuICBwcml2YXRlIGRyYWdTdGF0ZTogc3RyaW5nO1xuXG4gIGZpbGVEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGlmIChlLnR5cGUgPT09IHRoaXMuZHJhZ1N0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhZ1N0YXRlID0gZS50eXBlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICAvLyByZWdpb246IGxpc3RcbiAgb25SZW1vdmUgPSAoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMudXBsb2FkLmFib3J0KGZpbGUpO1xuICAgIGZpbGUuc3RhdHVzID0gJ3JlbW92ZWQnO1xuICAgIGNvbnN0IGZuUmVzID0gdHlwZW9mIHRoaXMuZHdSZW1vdmUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgdGhpcy5kd1JlbW92ZShmaWxlKSA6IHRoaXMuZHdSZW1vdmUgPT0gbnVsbCA/IHRydWUgOiB0aGlzLmR3UmVtb3ZlO1xuICAgIChmblJlcyBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBmblJlcyA6IG9mKGZuUmVzKSlcbiAgICAucGlwZShmaWx0ZXIoKHJlczogYm9vbGVhbikgPT4gcmVzKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuZHdGaWxlTGlzdCA9IHRoaXMucmVtb3ZlRmlsZUl0ZW0oZmlsZSwgdGhpcy5kd0ZpbGVMaXN0KTtcbiAgICAgIHRoaXMuZHdDaGFuZ2UuZW1pdCh7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIGZpbGVMaXN0OiB0aGlzLmR3RmlsZUxpc3QsXG4gICAgICAgIHR5cGUgICAgOiAncmVtb3ZlZCdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kd0ZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5kd0ZpbGVMaXN0KTtcbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIC8vIHJlZ2lvbjogc3R5bGVzXG4gIHByZWZpeENscyA9ICdhbnQtdXBsb2FkJztcbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzRHJhZyA9IHRoaXMuZHdUeXBlID09PSAnZHJhZyc7XG4gICAgbGV0IHN1YkNsczogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAodGhpcy5kd1R5cGUgPT09ICdkcmFnJykge1xuICAgICAgc3ViQ2xzID0gW1xuICAgICAgICB0aGlzLmR3RmlsZUxpc3Quc29tZShmaWxlID0+IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctdXBsb2FkaW5nYCxcbiAgICAgICAgdGhpcy5kcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctaG92ZXJgXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJDbHMgPSBbXG4gICAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1zZWxlY3QtJHt0aGlzLmR3TGlzdFR5cGV9YFxuICAgICAgXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzTGlzdCA9IFtcbiAgICAgIHRoaXMucHJlZml4Q2xzLFxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5kd1R5cGV9YCxcbiAgICAgIC4uLnN1YkNscyxcbiAgICAgIHRoaXMuZHdEaXNhYmxlZCAmJiBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXG4gICAgXS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ1VwbG9hZCcpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZHdGaWxlTGlzdCkge1xuICAgICAgKHRoaXMuZHdGaWxlTGlzdCB8fCBbXSkuZm9yRWFjaChmaWxlID0+IGZpbGUubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKGZpbGUpKTtcbiAgICB9XG4gICAgdGhpcy56aXBPcHRpb25zKCkuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
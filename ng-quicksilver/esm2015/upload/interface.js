/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 文件对象
 * @record
 */
export function UploadFile() { }
function UploadFile_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadFile.prototype.uid;
    /** @type {?} */
    UploadFile.prototype.size;
    /** @type {?} */
    UploadFile.prototype.name;
    /** @type {?|undefined} */
    UploadFile.prototype.filename;
    /** @type {?|undefined} */
    UploadFile.prototype.lastModified;
    /** @type {?|undefined} */
    UploadFile.prototype.lastModifiedDate;
    /** @type {?|undefined} */
    UploadFile.prototype.url;
    /** @type {?|undefined} */
    UploadFile.prototype.status;
    /** @type {?|undefined} */
    UploadFile.prototype.originFileObj;
    /** @type {?|undefined} */
    UploadFile.prototype.percent;
    /** @type {?|undefined} */
    UploadFile.prototype.thumbUrl;
    /** @type {?|undefined} */
    UploadFile.prototype.response;
    /** @type {?|undefined} */
    UploadFile.prototype.error;
    /** @type {?|undefined} */
    UploadFile.prototype.linkProps;
    /** @type {?} */
    UploadFile.prototype.type;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
/**
 * @record
 */
export function UploadChangeParam() { }
function UploadChangeParam_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadChangeParam.prototype.file;
    /** @type {?} */
    UploadChangeParam.prototype.fileList;
    /** @type {?|undefined} */
    UploadChangeParam.prototype.event;
    /**
     * 回调类型
     * @type {?|undefined}
     */
    UploadChangeParam.prototype.type;
}
/**
 * @record
 */
export function ShowUploadListInterface() { }
function ShowUploadListInterface_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ShowUploadListInterface.prototype.showRemoveIcon;
    /** @type {?|undefined} */
    ShowUploadListInterface.prototype.showPreviewIcon;
}
/**
 * @record
 */
export function ZipButtonOptions() { }
function ZipButtonOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.disabled;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.accept;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.action;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.directory;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.beforeUpload;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.customRequest;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.data;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.headers;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.name;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.multiple;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.withCredentials;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.filters;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onStart;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onProgress;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onSuccess;
    /** @type {?|undefined} */
    ZipButtonOptions.prototype.onError;
}
/**
 * @record
 */
export function UploadFilter() { }
function UploadFilter_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadFilter.prototype.name;
    /** @type {?} */
    UploadFilter.prototype.fn;
}
/**
 * @record
 */
export function UploadXHRArgs() { }
function UploadXHRArgs_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.action;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.name;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.headers;
    /** @type {?} */
    UploadXHRArgs.prototype.file;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.data;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.withCredentials;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.onProgress;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.onSuccess;
    /** @type {?|undefined} */
    UploadXHRArgs.prototype.onError;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ1cGxvYWQvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgcHJlZmVyLW1ldGhvZC1zaWduYXR1cmVcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG4vKiog54q25oCBICovXG5leHBvcnQgdHlwZSBVcGxvYWRGaWxlU3RhdHVzID0gJ2Vycm9yJyB8ICdzdWNjZXNzJyB8ICdkb25lJyB8ICd1cGxvYWRpbmcnIHwgJ3JlbW92ZWQnO1xuXG4vKiog5LiK5Lyg5pa55byPICovXG5leHBvcnQgdHlwZSBVcGxvYWRUeXBlID0gJ3NlbGVjdCcgfCAnZHJhZyc7XG5cbi8qKiDkuIrkvKDliJfooajnmoTlhoXlu7rmoLflvI8gKi9cbmV4cG9ydCB0eXBlIFVwbG9hZExpc3RUeXBlID0gJ3RleHQnIHwgJ3BpY3R1cmUnIHwgJ3BpY3R1cmUtY2FyZCc7XG5cbi8qKiDmlofku7blr7nosaEgKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkRmlsZSB7XG4gIHVpZDogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gIGxhc3RNb2RpZmllZD86IHN0cmluZztcbiAgbGFzdE1vZGlmaWVkRGF0ZT86IERhdGU7XG4gIHVybD86IHN0cmluZztcbiAgc3RhdHVzPzogVXBsb2FkRmlsZVN0YXR1cztcbiAgb3JpZ2luRmlsZU9iaj86IEZpbGU7XG4gIHBlcmNlbnQ/OiBudW1iZXI7XG4gIHRodW1iVXJsPzogc3RyaW5nO1xuICByZXNwb25zZT86IGFueTtcbiAgZXJyb3I/OiBhbnk7XG4gIGxpbmtQcm9wcz86IGFueTtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIFsga2V5OiBzdHJpbmcgXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZENoYW5nZVBhcmFtIHtcbiAgZmlsZTogVXBsb2FkRmlsZTtcbiAgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXTtcbiAgZXZlbnQ/OiB7IHBlcmNlbnQ6IG51bWJlciB9O1xuICAvKiog5Zue6LCD57G75Z6LICovXG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2Uge1xuICBzaG93UmVtb3ZlSWNvbj86IGJvb2xlYW47XG4gIHNob3dQcmV2aWV3SWNvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWmlwQnV0dG9uT3B0aW9ucyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgYWNjZXB0Pzogc3RyaW5nIHwgc3RyaW5nW107XG4gIGFjdGlvbj86IHN0cmluZztcbiAgZGlyZWN0b3J5PzogYm9vbGVhbjtcbiAgYmVmb3JlVXBsb2FkPzogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGFueT47XG4gIGN1c3RvbVJlcXVlc3Q/OiAoaXRlbTogYW55KSA9PiBTdWJzY3JpcHRpb247XG4gIGRhdGE/OiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuICBoZWFkZXJzPzoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcbiAgbmFtZT86IHN0cmluZztcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICBmaWx0ZXJzPzogVXBsb2FkRmlsdGVyW107XG4gIG9uU3RhcnQ/OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcbiAgb25Qcm9ncmVzcz86IChlOiBhbnksIGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG4gIG9uU3VjY2Vzcz86IChyZXQ6IGFueSwgZmlsZTogVXBsb2FkRmlsZSwgeGhyOiBhbnkpID0+IHZvaWQ7XG4gIG9uRXJyb3I/OiAoZXJyOiBhbnksIGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkRmlsdGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBmbjogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IFVwbG9hZEZpbGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRYSFJBcmdzIHtcbiAgYWN0aW9uPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBoZWFkZXJzPzoge307XG4gIGZpbGU6IFVwbG9hZEZpbGU7XG4gIGRhdGE/OiB7fTtcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgb25Qcm9ncmVzcz86IChlOiBhbnksIGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG4gIG9uU3VjY2Vzcz86IChyZXQ6IGFueSwgZmlsZTogVXBsb2FkRmlsZSwgeGhyOiBhbnkpID0+IHZvaWQ7XG4gIG9uRXJyb3I/OiAoZXJyOiBhbnksIGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG59XG4iXX0=
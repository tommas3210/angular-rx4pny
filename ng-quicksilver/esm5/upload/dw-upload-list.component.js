/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
var DwUploadListComponent = /** @class */ (function () {
    // endregion
    function DwUploadListComponent(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        // region: fields
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.prefixCls = 'ant-upload-list';
    }
    /**
     * @return {?}
     */
    DwUploadListComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.listType] = true,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    // endregion
    // region: render
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    DwUploadListComponent.prototype.handlePreview = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    };
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    DwUploadListComponent.prototype.handleRemove = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwUploadListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
    };
    DwUploadListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-upload-list',
                    template: "<div *ngFor=\"let file of items\" class=\"ant-upload-list-item ant-upload-list-item-{{file.status}}\" @itemState>\n  <ng-template #icon>\n    <ng-container *ngIf=\"listType === 'picture' || listType === 'picture-card'; else defIcon\">\n      <ng-container *ngIf=\"file.status === 'uploading' || (!file.thumbUrl && !file.url); else thumbIcon\">\n        <div *ngIf=\"listType === 'picture-card'\" class=\"ant-upload-list-item-uploading-text\">{{ locale.uploading }}</div>\n        <i *ngIf=\"listType !== 'picture-card'\" class=\"anticon anticon-picture ant-upload-list-item-thumbnail\"></i>\n      </ng-container>\n    </ng-container>\n    <ng-template #defIcon>\n      <i class=\"anticon anticon-{{file.status === 'uploading' ? 'loading anticon-spin' : 'paper-clip'}}\"></i>\n    </ng-template>\n    <ng-template #thumbIcon>\n      <a class=\"ant-upload-list-item-thumbnail\" target=\"_blank\" rel=\"noopener noreferrer\"\n        [href]=\"file.thumbUrl || file.url\"\n        (click)=\"handlePreview(file, $event)\">\n        <img [src]=\"file.thumbUrl || file.url\" [attr.alt]=\"file.name\" />\n      </a>\n    </ng-template>\n  </ng-template>\n  <ng-template #preview>\n    <ng-container *ngIf=\"file.url; else prevText\">\n      <a [href]=\"file.thumbUrl || file.url\" target=\"_blank\" rel=\"noopener noreferrer\"\n        (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</a>\n    </ng-container>\n    <ng-template #prevText>\n      <span (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</span>\n    </ng-template>\n  </ng-template>\n  <div class=\"ant-upload-list-item-info\">\n    <dw-tooltip *ngIf=\"file.status === 'error'\" [dwTitle]=\"file.message\">\n        <span dw-tooltip>\n          <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n          <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n        </span>\n    </dw-tooltip>\n    <span *ngIf=\"file.status !== 'error'\">\n        <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n      </span>\n  </div>\n  <ng-container *ngIf=\"listType === 'picture-card' && file.status !== 'uploading'; else cross\">\n      <span class=\"ant-upload-list-item-actions\">\n        <a *ngIf=\"icons.showPreviewIcon\" [href]=\"file.thumbUrl || file.url\"\n          target=\"_blank\" rel=\"noopener noreferrer\"\n          title=\"{{ locale.previewFile }}\"\n          [ngStyle]=\"!(file.url || file.thumbUrl) && {'opacity': .5, 'pointer-events': 'none'}\"\n          (click)=\"handlePreview(file, $event)\">\n            <i class=\"anticon anticon-eye-o\"></i>\n        </a>\n        <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" class=\"anticon anticon-delete\" title=\"{{ locale.removeFile }}\"></i>\n      </span>\n  </ng-container>\n  <ng-template #cross>\n    <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" class=\"anticon anticon-cross\" title=\"{{ locale.removeFile }}\"></i>\n  </ng-template>\n  <div *ngIf=\"file.status === 'uploading'\" class=\"ant-upload-list-item-progress\">\n    <dw-progress [dwPercent]=\"file.percent\" [dwShowInfo]=\"false\" [dwStrokeWidth]=\"2\"></dw-progress>\n  </div>\n</div>",
                    providers: [DwUpdateHostClassService],
                    animations: [
                        trigger('itemState', [
                            transition(':enter', [
                                style({ height: '0', width: '0', opacity: 0 }),
                                animate(150, style({ height: '*', width: '*', opacity: 1 }))
                            ]),
                            transition(':leave', [
                                animate(150, style({ height: '0', width: '0', opacity: 0 }))
                            ])
                        ])
                    ],
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    DwUploadListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DwUpdateHostClassService }
    ]; };
    DwUploadListComponent.propDecorators = {
        locale: [{ type: Input }],
        listType: [{ type: Input }],
        items: [{ type: Input }],
        icons: [{ type: Input }],
        onPreview: [{ type: Input }],
        onRemove: [{ type: Input }]
    };
    return DwUploadListComponent;
}());
export { DwUploadListComponent };
function DwUploadListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwUploadListComponent.prototype.locale;
    /** @type {?} */
    DwUploadListComponent.prototype.listType;
    /** @type {?} */
    DwUploadListComponent.prototype.items;
    /** @type {?} */
    DwUploadListComponent.prototype.icons;
    /** @type {?} */
    DwUploadListComponent.prototype.onPreview;
    /** @type {?} */
    DwUploadListComponent.prototype.onRemove;
    /** @type {?} */
    DwUploadListComponent.prototype.prefixCls;
    /** @type {?} */
    DwUploadListComponent.prototype.el;
    /** @type {?} */
    DwUploadListComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ1cGxvYWQvZHctdXBsb2FkLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUEwQyxNQUFNLGVBQWUsQ0FBQztBQUVyRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUErRHBGLFlBQVk7SUFDWiwrQkFBb0IsRUFBYyxFQUFVLHNCQUFnRDtRQUF4RSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjs7O3NCQXhDckUsRUFBRTt5QkFTTCxpQkFBaUI7S0FnQ3BDOzs7O0lBOUJELDJDQUFXOzs7SUFBWDs7O1FBQ0UsSUFBTSxRQUFRO1lBQ1osR0FBRSxJQUFJLENBQUMsU0FBUyxJQUEwQixJQUFJO1lBQzlDLEdBQUssSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxJQUFJLElBQUk7Z0JBQzlDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUM5RTtJQUVELFlBQVk7SUFDWixpQkFBaUI7Ozs7OztJQUVqQiw2Q0FBYTs7Ozs7SUFBYixVQUFjLElBQWdCLEVBQUUsQ0FBUTtRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7Ozs7SUFFRCw0Q0FBWTs7Ozs7SUFBWixVQUFhLElBQWdCLEVBQUUsQ0FBUTtRQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPO0tBQ1I7Ozs7O0lBTUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQTZEO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Z0JBakVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsZ0JBQWdCO29CQUNyQyxpeUdBQXNEO29CQUN0RCxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDakQsVUFBVSxFQUFXO3dCQUNuQixPQUFPLENBQUMsV0FBVyxFQUFFOzRCQUNuQixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO2dDQUM5QyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDN0QsQ0FBQzs0QkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO2dDQUNuQixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs2QkFDN0QsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQXRCbUIsVUFBVTtnQkFFckIsd0JBQXdCOzs7eUJBd0I5QixLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7Z0NBaENSOztTQXdCYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsIFVwbG9hZEZpbGUsIFVwbG9hZExpc3RUeXBlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXVwbG9hZC1saXN0JyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdXBsb2FkLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIER3VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignaXRlbVN0YXRlJywgW1xuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xuICAgICAgICBzdHlsZSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCBvcGFjaXR5OiAwIH0pLFxuICAgICAgICBhbmltYXRlKDE1MCwgc3R5bGUoeyBoZWlnaHQ6ICcqJywgd2lkdGg6ICcqJywgb3BhY2l0eTogMSB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xuICAgICAgICBhbmltYXRlKDE1MCwgc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgRHdVcGxvYWRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLy8gcmVnaW9uOiBmaWVsZHNcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBsb2NhbGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSBsaXN0VHlwZTogVXBsb2FkTGlzdFR5cGU7XG4gIEBJbnB1dCgpIGl0ZW1zOiBVcGxvYWRGaWxlW107XG4gIEBJbnB1dCgpIGljb25zOiBTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcbiAgQElucHV0KCkgb25QcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcbiAgQElucHV0KCkgb25SZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuXG4gIC8vIGVuZHJlZ2lvblxuICAvLyByZWdpb246IHN0eWxlc1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkLWxpc3QnO1xuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5saXN0VHlwZX1gIF06IHRydWVcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cbiAgLy8gcmVnaW9uOiByZW5kZXJcblxuICBoYW5kbGVQcmV2aWV3KGZpbGU6IFVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9uUHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gdGhpcy5vblByZXZpZXcoZmlsZSk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmUoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUoZmlsZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxufVxuIl19
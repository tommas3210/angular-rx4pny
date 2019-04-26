/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwI18nModule } from '../i18n/dw-i18n.module';
import { DwToolTipModule } from '../tooltip/dw-tooltip.module';
import { DwProgressModule } from './../progress/dw-progress.module';
import { DwUploadBtnComponent } from './dw-upload-btn.component';
import { DwUploadListComponent } from './dw-upload-list.component';
import { DwUploadComponent } from './dw-upload.component';
var DwUploadModule = /** @class */ (function () {
    function DwUploadModule() {
    }
    DwUploadModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, DwToolTipModule, DwProgressModule, DwI18nModule],
                    declarations: [DwUploadComponent, DwUploadBtnComponent, DwUploadListComponent],
                    exports: [DwUploadComponent]
                },] }
    ];
    return DwUploadModule;
}());
export { DwUploadModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdXBsb2FkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidXBsb2FkL2R3LXVwbG9hZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztnQkFFekQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBTyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQztvQkFDMUYsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLENBQUM7b0JBQzlFLE9BQU8sRUFBTyxDQUFDLGlCQUFpQixDQUFDO2lCQUNsQzs7eUJBaEJEOztTQWlCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRHdJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9kdy1pMThuLm1vZHVsZSc7XG5pbXBvcnQgeyBEd1Rvb2xUaXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL2R3LXRvb2x0aXAubW9kdWxlJztcblxuaW1wb3J0IHsgRHdQcm9ncmVzc01vZHVsZSB9IGZyb20gJy4vLi4vcHJvZ3Jlc3MvZHctcHJvZ3Jlc3MubW9kdWxlJztcbmltcG9ydCB7IER3VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9kdy11cGxvYWQtYnRuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1VwbG9hZExpc3RDb21wb25lbnQgfSBmcm9tICcuL2R3LXVwbG9hZC1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1VwbG9hZENvbXBvbmVudCB9IGZyb20gJy4vZHctdXBsb2FkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIER3VG9vbFRpcE1vZHVsZSwgRHdQcm9ncmVzc01vZHVsZSwgRHdJMThuTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRHdVcGxvYWRDb21wb25lbnQsIER3VXBsb2FkQnRuQ29tcG9uZW50LCBEd1VwbG9hZExpc3RDb21wb25lbnRdLFxuICBleHBvcnRzOiAgICAgIFtEd1VwbG9hZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRHdVcGxvYWRNb2R1bGUgeyB9XG4iXX0=
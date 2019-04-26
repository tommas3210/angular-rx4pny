/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwButtonModule } from '../button/dw-button.module';
import { DwCheckboxModule } from '../checkbox/dw-checkbox.module';
import { DwI18nModule } from '../i18n/dw-i18n.module';
import { DwInputModule } from '../input/dw-input.module';
import { DwTransferListComponent } from './dw-transfer-list.component';
import { DwTransferSearchComponent } from './dw-transfer-search.component';
import { DwTransferComponent } from './dw-transfer.component';
var DwTransferModule = /** @class */ (function () {
    function DwTransferModule() {
    }
    DwTransferModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, DwCheckboxModule, DwButtonModule, DwInputModule, DwI18nModule],
                    declarations: [DwTransferComponent, DwTransferListComponent, DwTransferSearchComponent],
                    exports: [DwTransferComponent]
                },] }
    ];
    return DwTransferModule;
}());
export { DwTransferModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJhbnNmZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0cmFuc2Zlci9kdy10cmFuc2Zlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Z0JBRTdELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQU8sQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFDO29CQUN4RyxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSx5QkFBeUIsQ0FBQztvQkFDdkYsT0FBTyxFQUFPLENBQUMsbUJBQW1CLENBQUM7aUJBQ3BDOzsyQkFqQkQ7O1NBa0JhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IER3QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2R3LWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRHdDaGVja2JveE1vZHVsZSB9IGZyb20gJy4uL2NoZWNrYm94L2R3LWNoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQgeyBEd0kxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL2R3LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IER3SW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9kdy1pbnB1dC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEd1RyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZHctdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdUcmFuc2ZlclNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vZHctdHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1RyYW5zZmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10cmFuc2Zlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiAgICAgIFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBEd0NoZWNrYm94TW9kdWxlLCBEd0J1dHRvbk1vZHVsZSwgRHdJbnB1dE1vZHVsZSwgRHdJMThuTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRHdUcmFuc2ZlckNvbXBvbmVudCwgRHdUcmFuc2Zlckxpc3RDb21wb25lbnQsIER3VHJhbnNmZXJTZWFyY2hDb21wb25lbnRdLFxuICBleHBvcnRzOiAgICAgIFtEd1RyYW5zZmVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEd1RyYW5zZmVyTW9kdWxlIHsgfVxuIl19
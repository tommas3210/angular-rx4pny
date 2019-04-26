/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwButtonModule } from '../button/dw-button.module';
import { DwMenuModule } from '../menu/dw-menu.module';
import { DwDropDownButtonComponent } from './dw-dropdown-button.component';
import { DwDropdownContextComponent } from './dw-dropdown-context.component';
import { DwDropDownComponent } from './dw-dropdown.component';
import { DwDropDownDirective } from './dw-dropdown.directive';
var DwDropDownModule = /** @class */ (function () {
    function DwDropDownModule() {
    }
    DwDropDownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, FormsModule, DwButtonModule, DwMenuModule],
                    declarations: [DwDropDownComponent, DwDropDownButtonComponent, DwDropDownDirective, DwDropdownContextComponent],
                    entryComponents: [DwDropdownContextComponent],
                    exports: [DwDropDownComponent, DwDropDownButtonComponent, DwDropDownDirective]
                },] }
    ];
    return DwDropDownModule;
}());
export { DwDropDownModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJvcGRvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkcm9wZG93bi9kdy1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Z0JBRTdELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFFO29CQUMzRixZQUFZLEVBQUssQ0FBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSwwQkFBMEIsQ0FBRTtvQkFDcEgsZUFBZSxFQUFFLENBQUUsMEJBQTBCLENBQUU7b0JBQy9DLE9BQU8sRUFBVSxDQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixDQUFFO2lCQUN6Rjs7MkJBbEJEOztTQW1CYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRHdCdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vZHctYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBEd01lbnVNb2R1bGUgfSBmcm9tICcuLi9tZW51L2R3LW1lbnUubW9kdWxlJztcblxuaW1wb3J0IHsgRHdEcm9wRG93bkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZHctZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0Ryb3Bkb3duQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vZHctZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdEcm9wRG93bkNvbXBvbmVudCB9IGZyb20gJy4vZHctZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IER3RHJvcERvd25EaXJlY3RpdmUgfSBmcm9tICcuL2R3LWRyb3Bkb3duLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEZvcm1zTW9kdWxlLCBEd0J1dHRvbk1vZHVsZSwgRHdNZW51TW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9ucyAgIDogWyBEd0Ryb3BEb3duQ29tcG9uZW50LCBEd0Ryb3BEb3duQnV0dG9uQ29tcG9uZW50LCBEd0Ryb3BEb3duRGlyZWN0aXZlLCBEd0Ryb3Bkb3duQ29udGV4dENvbXBvbmVudCBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgRHdEcm9wZG93bkNvbnRleHRDb21wb25lbnQgXSxcbiAgZXhwb3J0cyAgICAgICAgOiBbIER3RHJvcERvd25Db21wb25lbnQsIER3RHJvcERvd25CdXR0b25Db21wb25lbnQsIER3RHJvcERvd25EaXJlY3RpdmUgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0Ryb3BEb3duTW9kdWxlIHtcbn1cbiJdfQ==
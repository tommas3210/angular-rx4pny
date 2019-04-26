/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwCheckboxModule } from '../checkbox/dw-checkbox.module';
import { DwDropDownModule } from '../dropdown/dw-dropdown.module';
import { DwI18nModule } from '../i18n/dw-i18n.module';
import { DwMenuModule } from '../menu/dw-menu.module';
import { DwPaginationModule } from '../pagination/dw-pagination.module';
import { DwRadioModule } from '../radio/dw-radio.module';
import { DwSpinModule } from '../spin/dw-spin.module';
import { DwTableComponent } from './dw-table.component';
import { DwTbodyDirective } from './dw-tbody.directive';
import { DwTdComponent } from './dw-td.component';
import { DwThComponent } from './dw-th.component';
import { DwTheadComponent } from './dw-thead.component';
import { DwTrDirective } from './dw-tr.directive';
var DwTableModule = /** @class */ (function () {
    function DwTableModule() {
    }
    DwTableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DwTableComponent, DwThComponent, DwTdComponent, DwTheadComponent, DwTbodyDirective, DwTrDirective],
                    exports: [DwTableComponent, DwThComponent, DwTdComponent, DwTheadComponent, DwTbodyDirective, DwTrDirective],
                    imports: [DwMenuModule, FormsModule, DwRadioModule, DwCheckboxModule, DwDropDownModule, CommonModule, DwPaginationModule, DwSpinModule, DwI18nModule]
                },] }
    ];
    return DwTableModule;
}());
export { DwTableModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O2dCQUVqRCxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUU7b0JBQ25ILE9BQU8sRUFBTyxDQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFFO29CQUNuSCxPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBRTtpQkFDN0o7O3dCQXZCRDs7U0F3QmEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IER3Q2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9kdy1jaGVja2JveC5tb2R1bGUnO1xuaW1wb3J0IHsgRHdEcm9wRG93bk1vZHVsZSB9IGZyb20gJy4uL2Ryb3Bkb3duL2R3LWRyb3Bkb3duLm1vZHVsZSc7XG5pbXBvcnQgeyBEd0kxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL2R3LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IER3TWVudU1vZHVsZSB9IGZyb20gJy4uL21lbnUvZHctbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgRHdQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vcGFnaW5hdGlvbi9kdy1wYWdpbmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBEd1JhZGlvTW9kdWxlIH0gZnJvbSAnLi4vcmFkaW8vZHctcmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IER3U3Bpbk1vZHVsZSB9IGZyb20gJy4uL3NwaW4vZHctc3Bpbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEd1RhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdUYm9keURpcmVjdGl2ZSB9IGZyb20gJy4vZHctdGJvZHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IER3VGRDb21wb25lbnQgfSBmcm9tICcuL2R3LXRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1RoQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vZHctdGhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IER3VHJEaXJlY3RpdmUgfSBmcm9tICcuL2R3LXRyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBEd1RhYmxlQ29tcG9uZW50LCBEd1RoQ29tcG9uZW50LCBEd1RkQ29tcG9uZW50LCBEd1RoZWFkQ29tcG9uZW50LCBEd1Rib2R5RGlyZWN0aXZlLCBEd1RyRGlyZWN0aXZlIF0sXG4gIGV4cG9ydHMgICAgIDogWyBEd1RhYmxlQ29tcG9uZW50LCBEd1RoQ29tcG9uZW50LCBEd1RkQ29tcG9uZW50LCBEd1RoZWFkQ29tcG9uZW50LCBEd1Rib2R5RGlyZWN0aXZlLCBEd1RyRGlyZWN0aXZlIF0sXG4gIGltcG9ydHMgICAgIDogWyBEd01lbnVNb2R1bGUsIEZvcm1zTW9kdWxlLCBEd1JhZGlvTW9kdWxlLCBEd0NoZWNrYm94TW9kdWxlLCBEd0Ryb3BEb3duTW9kdWxlLCBDb21tb25Nb2R1bGUsIER3UGFnaW5hdGlvbk1vZHVsZSwgRHdTcGluTW9kdWxlLCBEd0kxOG5Nb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1RhYmxlTW9kdWxlIHtcbn1cbiJdfQ==
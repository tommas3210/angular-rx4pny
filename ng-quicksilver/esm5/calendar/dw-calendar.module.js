/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwI18nModule } from '../i18n/dw-i18n.module';
import { DwRadioModule } from '../radio/dw-radio.module';
import { DwSelectModule } from '../select/dw-select.module';
import { DwDateCellDirective, DwDateFullCellDirective, DwMonthCellDirective, DwMonthFullCellDirective } from './dw-calendar-cells';
import { DwCalendarHeaderComponent } from './dw-calendar-header.component';
import { DwCalendarComponent } from './dw-calendar.component';
var DwCalendarModule = /** @class */ (function () {
    function DwCalendarModule() {
    }
    DwCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        DwCalendarHeaderComponent,
                        DwCalendarComponent,
                        DwDateCellDirective,
                        DwDateFullCellDirective,
                        DwMonthCellDirective,
                        DwMonthFullCellDirective
                    ],
                    exports: [
                        DwCalendarComponent,
                        DwDateCellDirective,
                        DwDateFullCellDirective,
                        DwMonthCellDirective,
                        DwMonthFullCellDirective
                    ],
                    imports: [CommonModule, FormsModule, DwI18nModule, DwRadioModule, DwSelectModule]
                },] }
    ];
    return DwCalendarModule;
}());
export { DwCalendarModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjYWxlbmRhci9kdy1jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuSSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Z0JBRTdELFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1oseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFPO3dCQUNaLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFFO2lCQUN6Rjs7MkJBM0JEOztTQTRCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRHdJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9kdy1pMThuLm1vZHVsZSc7XG5pbXBvcnQgeyBEd1JhZGlvTW9kdWxlIH0gZnJvbSAnLi4vcmFkaW8vZHctcmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IER3U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc2VsZWN0L2R3LXNlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgRHdEYXRlQ2VsbERpcmVjdGl2ZSwgRHdEYXRlRnVsbENlbGxEaXJlY3RpdmUsIER3TW9udGhDZWxsRGlyZWN0aXZlLCBEd01vbnRoRnVsbENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2R3LWNhbGVuZGFyLWNlbGxzJztcbmltcG9ydCB7IER3Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2R3LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vZHctY2FsZW5kYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHdDYWxlbmRhckhlYWRlckNvbXBvbmVudCxcbiAgICBEd0NhbGVuZGFyQ29tcG9uZW50LFxuICAgIER3RGF0ZUNlbGxEaXJlY3RpdmUsXG4gICAgRHdEYXRlRnVsbENlbGxEaXJlY3RpdmUsXG4gICAgRHdNb250aENlbGxEaXJlY3RpdmUsXG4gICAgRHdNb250aEZ1bGxDZWxsRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHMgICAgIDogW1xuICAgIER3Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgRHdEYXRlQ2VsbERpcmVjdGl2ZSxcbiAgICBEd0RhdGVGdWxsQ2VsbERpcmVjdGl2ZSxcbiAgICBEd01vbnRoQ2VsbERpcmVjdGl2ZSxcbiAgICBEd01vbnRoRnVsbENlbGxEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIER3STE4bk1vZHVsZSwgRHdSYWRpb01vZHVsZSwgRHdTZWxlY3RNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0NhbGVuZGFyTW9kdWxlIHsgfVxuIl19
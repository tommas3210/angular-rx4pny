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
export class DwCalendarModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjYWxlbmRhci9kdy1jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuSSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQW9COUQsTUFBTTs7O1lBbEJMLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFPO29CQUNaLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFFO2FBQ3pGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IER3STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5tb2R1bGUnO1xuaW1wb3J0IHsgRHdSYWRpb01vZHVsZSB9IGZyb20gJy4uL3JhZGlvL2R3LXJhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBEd1NlbGVjdE1vZHVsZSB9IGZyb20gJy4uL3NlbGVjdC9kdy1zZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IER3RGF0ZUNlbGxEaXJlY3RpdmUsIER3RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLCBEd01vbnRoQ2VsbERpcmVjdGl2ZSwgRHdNb250aEZ1bGxDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kdy1jYWxlbmRhci1jZWxscyc7XG5pbXBvcnQgeyBEd0NhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IER3Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2R3LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIER3Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXG4gICAgRHdDYWxlbmRhckNvbXBvbmVudCxcbiAgICBEd0RhdGVDZWxsRGlyZWN0aXZlLFxuICAgIER3RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxuICAgIER3TW9udGhDZWxsRGlyZWN0aXZlLFxuICAgIER3TW9udGhGdWxsQ2VsbERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzICAgICA6IFtcbiAgICBEd0NhbGVuZGFyQ29tcG9uZW50LFxuICAgIER3RGF0ZUNlbGxEaXJlY3RpdmUsXG4gICAgRHdEYXRlRnVsbENlbGxEaXJlY3RpdmUsXG4gICAgRHdNb250aENlbGxEaXJlY3RpdmUsXG4gICAgRHdNb250aEZ1bGxDZWxsRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBEd0kxOG5Nb2R1bGUsIER3UmFkaW9Nb2R1bGUsIER3U2VsZWN0TW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdDYWxlbmRhck1vZHVsZSB7IH1cbiJdfQ==
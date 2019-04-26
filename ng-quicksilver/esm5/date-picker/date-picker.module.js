/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibPackerModule } from './lib/lib-packer.module';
import { DwDatePickerComponent } from './date-picker.component';
import { DateRangePickerComponent } from './date-range-picker.component';
import { HeaderPickerComponent } from './header-picker.component';
import { DwMonthPickerComponent } from './month-picker.component';
import { DwPickerComponent } from './picker.component';
import { DwRangePickerComponent } from './range-picker.component';
import { DwWeekPickerComponent } from './week-picker.component';
import { DwYearPickerComponent } from './year-picker.component';
var DwDatePickerModule = /** @class */ (function () {
    function DwDatePickerModule() {
    }
    DwDatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        OverlayModule,
                        LibPackerModule
                    ],
                    exports: [
                        DwDatePickerComponent,
                        DwRangePickerComponent,
                        DwMonthPickerComponent,
                        DwYearPickerComponent,
                        DwWeekPickerComponent
                    ],
                    declarations: [
                        HeaderPickerComponent,
                        DateRangePickerComponent,
                        DwPickerComponent,
                        DwDatePickerComponent,
                        DwMonthPickerComponent,
                        DwYearPickerComponent,
                        DwWeekPickerComponent,
                        DwRangePickerComponent
                    ],
                    providers: []
                },] }
    ];
    return DwDatePickerModule;
}());
export { DwDatePickerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O2dCQUUvRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFFYixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixxQkFBcUI7cUJBQ3RCO29CQUNELFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIsaUJBQWlCO3dCQUVqQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7OzZCQXpDRDs7U0EwQ2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaWJQYWNrZXJNb2R1bGUgfSBmcm9tICcuL2xpYi9saWItcGFja2VyLm1vZHVsZSc7XG5cbmltcG9ydCB7IER3RGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdNb250aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1JhbmdlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5nZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IER3V2Vla1BpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vd2Vlay1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IER3WWVhclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4veWVhci1waWNrZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuXG4gICAgTGliUGFja2VyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEd0RhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRHdSYW5nZVBpY2tlckNvbXBvbmVudCxcbiAgICBEd01vbnRoUGlja2VyQ29tcG9uZW50LFxuICAgIER3WWVhclBpY2tlckNvbXBvbmVudCxcbiAgICBEd1dlZWtQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSGVhZGVyUGlja2VyQ29tcG9uZW50LFxuICAgIERhdGVSYW5nZVBpY2tlckNvbXBvbmVudCxcbiAgICBEd1BpY2tlckNvbXBvbmVudCxcblxuICAgIER3RGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBEd01vbnRoUGlja2VyQ29tcG9uZW50LFxuICAgIER3WWVhclBpY2tlckNvbXBvbmVudCxcbiAgICBEd1dlZWtQaWNrZXJDb21wb25lbnQsXG4gICAgRHdSYW5nZVBpY2tlckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIER3RGF0ZVBpY2tlck1vZHVsZSB7IH1cbiJdfQ==
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
export class DwDatePickerModule {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9kYXRlLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUE2QmhFLE1BQU07OztZQTNCTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFFYixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixxQkFBcUI7aUJBQ3RCO2dCQUNELFlBQVksRUFBRTtvQkFDWixxQkFBcUI7b0JBQ3JCLHdCQUF3QjtvQkFDeEIsaUJBQWlCO29CQUVqQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGliUGFja2VyTW9kdWxlIH0gZnJvbSAnLi9saWIvbGliLXBhY2tlci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEd0RhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IER3TW9udGhQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1dlZWtQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3dlZWstcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1llYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3llYXItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcblxuICAgIExpYlBhY2tlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRHdEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIER3UmFuZ2VQaWNrZXJDb21wb25lbnQsXG4gICAgRHdNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBEd1llYXJQaWNrZXJDb21wb25lbnQsXG4gICAgRHdXZWVrUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlYWRlclBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQsXG4gICAgRHdQaWNrZXJDb21wb25lbnQsXG5cbiAgICBEd0RhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgRHdNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBEd1llYXJQaWNrZXJDb21wb25lbnQsXG4gICAgRHdXZWVrUGlja2VyQ29tcG9uZW50LFxuICAgIER3UmFuZ2VQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEd0RhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=
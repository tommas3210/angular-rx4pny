/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwI18nModule } from '../i18n/dw-i18n.module';
import { DwTimePickerPanelComponent } from './dw-time-picker-panel.component';
import { DwTimePickerComponent } from './dw-time-picker.component';
import { DwTimeValueAccessorDirective } from './dw-time-value-accessor.directive';
export class DwTimePickerModule {
}
DwTimePickerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DwTimePickerComponent,
                    DwTimePickerPanelComponent,
                    DwTimeValueAccessorDirective
                ],
                exports: [
                    DwTimePickerPanelComponent,
                    DwTimePickerComponent
                ],
                imports: [CommonModule, FormsModule, DwI18nModule, OverlayModule],
                entryComponents: []
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0aW1lLXBpY2tlci9kdy10aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBZWxGLE1BQU07OztZQWJMLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUs7b0JBQ2YscUJBQXFCO29CQUNyQiwwQkFBMEI7b0JBQzFCLDRCQUE0QjtpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFVO29CQUNmLDBCQUEwQjtvQkFDMUIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQVUsQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUU7Z0JBQzNFLGVBQWUsRUFBRSxFQUFFO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEd0kxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL2R3LWkxOG4ubW9kdWxlJztcbmltcG9ydCB7IER3VGltZVBpY2tlclBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kdy10aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vZHctdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMgICA6IFtcbiAgICBEd1RpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgRHdUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsXG4gICAgRHdUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzICAgICAgICA6IFtcbiAgICBEd1RpbWVQaWNrZXJQYW5lbENvbXBvbmVudCxcbiAgICBEd1RpbWVQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0cyAgICAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIER3STE4bk1vZHVsZSwgT3ZlcmxheU1vZHVsZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIER3VGltZVBpY2tlck1vZHVsZSB7XG59XG4iXX0=
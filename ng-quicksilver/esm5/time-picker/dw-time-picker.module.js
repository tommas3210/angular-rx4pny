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
var DwTimePickerModule = /** @class */ (function () {
    function DwTimePickerModule() {
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
    return DwTimePickerModule;
}());
export { DwTimePickerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0aW1lLXBpY2tlci9kdy10aW1lLXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztnQkFFakYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBSzt3QkFDZixxQkFBcUI7d0JBQ3JCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQVU7d0JBQ2YsMEJBQTBCO3dCQUMxQixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBVSxDQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBRTtvQkFDM0UsZUFBZSxFQUFFLEVBQUU7aUJBQ3BCOzs2QkFyQkQ7O1NBc0JhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRHdJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9kdy1pMThuLm1vZHVsZSc7XG5pbXBvcnQgeyBEd1RpbWVQaWNrZXJQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vZHctdGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IER3VGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZHctdGltZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IER3VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUgfSBmcm9tICcuL2R3LXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zICAgOiBbXG4gICAgRHdUaW1lUGlja2VyQ29tcG9uZW50LFxuICAgIER3VGltZVBpY2tlclBhbmVsQ29tcG9uZW50LFxuICAgIER3VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0cyAgICAgICAgOiBbXG4gICAgRHdUaW1lUGlja2VyUGFuZWxDb21wb25lbnQsXG4gICAgRHdUaW1lUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBEd0kxOG5Nb2R1bGUsIE92ZXJsYXlNb2R1bGUgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEd1RpbWVQaWNrZXJNb2R1bGUge1xufVxuIl19
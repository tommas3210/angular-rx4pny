/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DW_NOTIFICATION_DEFAULT_CONFIG_PROVIDER } from './dw-notification-config';
import { DwNotificationContainerComponent } from './dw-notification-container.component';
import { DwNotificationComponent } from './dw-notification.component';
import { DwNotificationService } from './dw-notification.service';
var DwNotificationModule = /** @class */ (function () {
    function DwNotificationModule() {
    }
    DwNotificationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule],
                    declarations: [DwNotificationComponent, DwNotificationContainerComponent],
                    providers: [DW_NOTIFICATION_DEFAULT_CONFIG_PROVIDER, DwNotificationService],
                    entryComponents: [DwNotificationContainerComponent]
                },] }
    ];
    return DwNotificationModule;
}());
export { DwNotificationModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbm90aWZpY2F0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibm90aWZpY2F0aW9uL2R3LW5vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Z0JBRWpFLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxDQUFFO29CQUN4QyxZQUFZLEVBQUUsQ0FBRSx1QkFBdUIsRUFBRSxnQ0FBZ0MsQ0FBRTtvQkFDM0UsU0FBUyxFQUFFLENBQUUsdUNBQXVDLEVBQUUscUJBQXFCLENBQUU7b0JBQzdFLGVBQWUsRUFBRSxDQUFFLGdDQUFnQyxDQUFFO2lCQUN0RDs7K0JBZEQ7O1NBZWEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEV19OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUdfUFJPVklERVIgfSBmcm9tICcuL2R3LW5vdGlmaWNhdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgRHdOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2R3LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IER3Tm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1ub3RpZmljYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IER3Tm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vZHctbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgRHdOb3RpZmljYXRpb25Db21wb25lbnQsIER3Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IF0sXG4gIHByb3ZpZGVyczogWyBEV19OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUdfUFJPVklERVIsIER3Tm90aWZpY2F0aW9uU2VydmljZSBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFsgRHdOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBEd05vdGlmaWNhdGlvbk1vZHVsZSB7IH1cbiJdfQ==
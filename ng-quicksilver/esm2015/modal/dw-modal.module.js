/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DwButtonModule } from '../button/dw-button.module';
import { LoggerModule } from '../core/util/logger/logger.module';
import { DwI18nModule } from '../i18n/dw-i18n.module';
import { CssUnitPipe } from './css-unit.pipe';
import { DwModalControlService } from './dw-modal-control.service';
import { DwModalComponent } from './dw-modal.component';
import { DwModalService } from './dw-modal.service';
export class DwModalModule {
}
DwModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, DwI18nModule, DwButtonModule, LoggerModule],
                exports: [DwModalComponent],
                declarations: [DwModalComponent, CssUnitPipe],
                entryComponents: [DwModalComponent],
                providers: [DwModalControlService, DwModalService]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtb2RhbC9kdy1tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU3BELE1BQU07OztZQVBMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFFO2dCQUNwRixPQUFPLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtnQkFDN0IsWUFBWSxFQUFFLENBQUUsZ0JBQWdCLEVBQUUsV0FBVyxDQUFFO2dCQUMvQyxlQUFlLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTtnQkFDckMsU0FBUyxFQUFFLENBQUUscUJBQXFCLEVBQUUsY0FBYyxDQUFFO2FBQ3JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9kdy1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IExvZ2dlck1vZHVsZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLm1vZHVsZSc7XG5pbXBvcnQgeyBEd0kxOG5Nb2R1bGUgfSBmcm9tICcuLi9pMThuL2R3LWkxOG4ubW9kdWxlJztcblxuaW1wb3J0IHsgQ3NzVW5pdFBpcGUgfSBmcm9tICcuL2Nzcy11bml0LnBpcGUnO1xuaW1wb3J0IHsgRHdNb2RhbENvbnRyb2xTZXJ2aWNlIH0gZnJvbSAnLi9kdy1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xuaW1wb3J0IHsgRHdNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vZHctbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IER3TW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9kdy1tb2RhbC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIER3STE4bk1vZHVsZSwgRHdCdXR0b25Nb2R1bGUsIExvZ2dlck1vZHVsZSBdLFxuICBleHBvcnRzOiBbIER3TW9kYWxDb21wb25lbnQgXSxcbiAgZGVjbGFyYXRpb25zOiBbIER3TW9kYWxDb21wb25lbnQsIENzc1VuaXRQaXBlIF0sXG4gIGVudHJ5Q29tcG9uZW50czogWyBEd01vZGFsQ29tcG9uZW50IF0sXG4gIHByb3ZpZGVyczogWyBEd01vZGFsQ29udHJvbFNlcnZpY2UsIER3TW9kYWxTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdNb2RhbE1vZHVsZSB7IH1cbiJdfQ==
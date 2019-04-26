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
var DwModalModule = /** @class */ (function () {
    function DwModalModule() {
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
    return DwModalModule;
}());
export { DwModalModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtb2RhbC9kdy1tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztnQkFFbkQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxZQUFZLENBQUU7b0JBQ3BGLE9BQU8sRUFBRSxDQUFFLGdCQUFnQixDQUFFO29CQUM3QixZQUFZLEVBQUUsQ0FBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUU7b0JBQy9DLGVBQWUsRUFBRSxDQUFFLGdCQUFnQixDQUFFO29CQUNyQyxTQUFTLEVBQUUsQ0FBRSxxQkFBcUIsRUFBRSxjQUFjLENBQUU7aUJBQ3JEOzt3QkFuQkQ7O1NBb0JhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2R3LWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vY29yZS91dGlsL2xvZ2dlci9sb2dnZXIubW9kdWxlJztcbmltcG9ydCB7IER3STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDc3NVbml0UGlwZSB9IGZyb20gJy4vY3NzLXVuaXQucGlwZSc7XG5pbXBvcnQgeyBEd01vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2R3LW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XG5pbXBvcnQgeyBEd01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2R3LW1vZGFsLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgRHdJMThuTW9kdWxlLCBEd0J1dHRvbk1vZHVsZSwgTG9nZ2VyTW9kdWxlIF0sXG4gIGV4cG9ydHM6IFsgRHdNb2RhbENvbXBvbmVudCBdLFxuICBkZWNsYXJhdGlvbnM6IFsgRHdNb2RhbENvbXBvbmVudCwgQ3NzVW5pdFBpcGUgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIER3TW9kYWxDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzOiBbIER3TW9kYWxDb250cm9sU2VydmljZSwgRHdNb2RhbFNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBEd01vZGFsTW9kdWxlIHsgfVxuIl19
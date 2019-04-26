/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DwButtonModule } from '../button/dw-button.module';
import { DwI18nModule } from '../i18n/dw-i18n.module';
import { DwPopconfirmComponent } from './dw-popconfirm.component';
import { DwPopconfirmDirective } from './dw-popconfirm.directive';
var DwPopconfirmModule = /** @class */ (function () {
    function DwPopconfirmModule() {
    }
    DwPopconfirmModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DwPopconfirmComponent, DwPopconfirmDirective],
                    exports: [DwPopconfirmComponent, DwPopconfirmDirective],
                    imports: [CommonModule, DwButtonModule, OverlayModule, DwI18nModule],
                    entryComponents: [DwPopconfirmComponent]
                },] }
    ];
    return DwPopconfirmModule;
}());
export { DwPopconfirmModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcG9wY29uZmlybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInBvcGNvbmZpcm0vZHctcG9wY29uZmlybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7OztnQkFFakUsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBSyxDQUFFLHFCQUFxQixFQUFFLHFCQUFxQixDQUFFO29CQUNqRSxPQUFPLEVBQVUsQ0FBRSxxQkFBcUIsRUFBRSxxQkFBcUIsQ0FBRTtvQkFDakUsT0FBTyxFQUFVLENBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsWUFBWSxDQUFFO29CQUM5RSxlQUFlLEVBQUUsQ0FBRSxxQkFBcUIsQ0FBRTtpQkFFM0M7OzZCQWhCRDs7U0FrQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9kdy1idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IER3STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEd1BvcGNvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuL2R3LXBvcGNvbmZpcm0uY29tcG9uZW50JztcbmltcG9ydCB7IER3UG9wY29uZmlybURpcmVjdGl2ZSB9IGZyb20gJy4vZHctcG9wY29uZmlybS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnMgICA6IFsgRHdQb3Bjb25maXJtQ29tcG9uZW50LCBEd1BvcGNvbmZpcm1EaXJlY3RpdmUgXSxcbiAgZXhwb3J0cyAgICAgICAgOiBbIER3UG9wY29uZmlybUNvbXBvbmVudCwgRHdQb3Bjb25maXJtRGlyZWN0aXZlIF0sXG4gIGltcG9ydHMgICAgICAgIDogWyBDb21tb25Nb2R1bGUsIER3QnV0dG9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBEd0kxOG5Nb2R1bGUgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbIER3UG9wY29uZmlybUNvbXBvbmVudCBdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBEd1BvcGNvbmZpcm1Nb2R1bGUge1xufVxuIl19
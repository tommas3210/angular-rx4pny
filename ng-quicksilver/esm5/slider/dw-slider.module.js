/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DwToolTipModule } from '../tooltip/dw-tooltip.module';
import { DwSliderHandleComponent } from './dw-slider-handle.component';
import { DwSliderMarksComponent } from './dw-slider-marks.component';
import { DwSliderStepComponent } from './dw-slider-step.component';
import { DwSliderTrackComponent } from './dw-slider-track.component';
import { DwSliderComponent } from './dw-slider.component';
import { DwSliderService } from './dw-slider.service';
var DwSliderModule = /** @class */ (function () {
    function DwSliderModule() {
    }
    DwSliderModule.decorators = [
        { type: NgModule, args: [{
                    exports: [DwSliderComponent, DwSliderTrackComponent, DwSliderHandleComponent, DwSliderStepComponent, DwSliderMarksComponent],
                    declarations: [DwSliderComponent, DwSliderTrackComponent, DwSliderHandleComponent, DwSliderStepComponent, DwSliderMarksComponent],
                    imports: [CommonModule, DwToolTipModule],
                    providers: [DwSliderService]
                },] }
    ];
    return DwSliderModule;
}());
export { DwSliderModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2xpZGVyL2R3LXNsaWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O2dCQUVyRCxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLENBQUU7b0JBQzlILFlBQVksRUFBRSxDQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixDQUFFO29CQUNuSSxPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsZUFBZSxDQUFFO29CQUMxQyxTQUFTLEVBQUUsQ0FBRSxlQUFlLENBQUU7aUJBQy9COzt5QkFqQkQ7O1NBa0JhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdUb29sVGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9kdy10b29sdGlwLm1vZHVsZSc7XG5cbmltcG9ydCB7IER3U2xpZGVySGFuZGxlQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1zbGlkZXItaGFuZGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1NsaWRlck1hcmtzQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1zbGlkZXItbWFya3MuY29tcG9uZW50JztcbmltcG9ydCB7IER3U2xpZGVyU3RlcENvbXBvbmVudCB9IGZyb20gJy4vZHctc2xpZGVyLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IER3U2xpZGVyVHJhY2tDb21wb25lbnQgfSBmcm9tICcuL2R3LXNsaWRlci10cmFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL2R3LXNsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdTbGlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9kdy1zbGlkZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFsgRHdTbGlkZXJDb21wb25lbnQsIER3U2xpZGVyVHJhY2tDb21wb25lbnQsIER3U2xpZGVySGFuZGxlQ29tcG9uZW50LCBEd1NsaWRlclN0ZXBDb21wb25lbnQsIER3U2xpZGVyTWFya3NDb21wb25lbnQgXSxcbiAgZGVjbGFyYXRpb25zOiBbIER3U2xpZGVyQ29tcG9uZW50LCBEd1NsaWRlclRyYWNrQ29tcG9uZW50LCBEd1NsaWRlckhhbmRsZUNvbXBvbmVudCwgRHdTbGlkZXJTdGVwQ29tcG9uZW50LCBEd1NsaWRlck1hcmtzQ29tcG9uZW50IF0sXG4gIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBEd1Rvb2xUaXBNb2R1bGUgXSxcbiAgcHJvdmlkZXJzOiBbIER3U2xpZGVyU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIER3U2xpZGVyTW9kdWxlIHsgfVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DwMatchMediaService } from '../core/services/dw-match-media.service';
import { DwContentComponent } from './dw-content.component';
import { DwFooterComponent } from './dw-footer.component';
import { DwHeaderComponent } from './dw-header.component';
import { DwLayoutComponent } from './dw-layout.component';
import { DwSiderComponent } from './dw-sider.component';
var DwLayoutModule = /** @class */ (function () {
    function DwLayoutModule() {
    }
    DwLayoutModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DwLayoutComponent, DwHeaderComponent, DwContentComponent, DwFooterComponent, DwSiderComponent],
                    exports: [DwLayoutComponent, DwHeaderComponent, DwContentComponent, DwFooterComponent, DwSiderComponent],
                    providers: [DwMatchMediaService],
                    imports: [CommonModule]
                },] }
    ];
    return DwLayoutModule;
}());
export { DwLayoutModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsibGF5b3V0L2R3LWxheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7OztnQkFFdkQsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixDQUFFO29CQUMvRyxPQUFPLEVBQU8sQ0FBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBRTtvQkFDL0csU0FBUyxFQUFLLENBQUUsbUJBQW1CLENBQUU7b0JBQ3JDLE9BQU8sRUFBTyxDQUFFLFlBQVksQ0FBRTtpQkFDL0I7O3lCQWhCRDs7U0FpQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd01hdGNoTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9kdy1tYXRjaC1tZWRpYS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRHdDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kdy1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZHctZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZHctaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vZHctbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd1NpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1zaWRlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgRHdMYXlvdXRDb21wb25lbnQsIER3SGVhZGVyQ29tcG9uZW50LCBEd0NvbnRlbnRDb21wb25lbnQsIER3Rm9vdGVyQ29tcG9uZW50LCBEd1NpZGVyQ29tcG9uZW50IF0sXG4gIGV4cG9ydHMgICAgIDogWyBEd0xheW91dENvbXBvbmVudCwgRHdIZWFkZXJDb21wb25lbnQsIER3Q29udGVudENvbXBvbmVudCwgRHdGb290ZXJDb21wb25lbnQsIER3U2lkZXJDb21wb25lbnQgXSxcbiAgcHJvdmlkZXJzICAgOiBbIER3TWF0Y2hNZWRpYVNlcnZpY2UgXSxcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIER3TGF5b3V0TW9kdWxlIHtcbn1cbiJdfQ==
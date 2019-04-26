/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwButtonModule } from '../button/dw-button.module';
import { DwMenuDividerDirective } from '../menu/dw-menu-divider.directive';
import { DwMenuGroupComponent } from '../menu/dw-menu-group.component';
import { DwMenuItemDirective } from '../menu/dw-menu-item.directive';
import { DwMenuDirective } from '../menu/dw-menu.directive';
import { DwSubMenuComponent } from '../menu/dw-submenu.component';
var DwMenuModule = /** @class */ (function () {
    function DwMenuModule() {
    }
    DwMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, DwButtonModule, OverlayModule],
                    declarations: [DwMenuDirective, DwMenuItemDirective, DwSubMenuComponent, DwMenuDividerDirective, DwMenuGroupComponent],
                    exports: [DwMenuDirective, DwMenuItemDirective, DwSubMenuComponent, DwMenuDividerDirective, DwMenuGroupComponent]
                },] }
    ];
    return DwMenuModule;
}());
export { DwMenuModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lbnUvZHctbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Z0JBRWpFLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUU7b0JBQzFFLFlBQVksRUFBRSxDQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsQ0FBRTtvQkFDeEgsT0FBTyxFQUFPLENBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixDQUFFO2lCQUN6SDs7dUJBaEJEOztTQWlCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IER3QnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vYnV0dG9uL2R3LWJ1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRHdNZW51RGl2aWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvZHctbWVudS1kaXZpZGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEd01lbnVHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL21lbnUvZHctbWVudS1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdNZW51SXRlbURpcmVjdGl2ZSB9IGZyb20gJy4uL21lbnUvZHctbWVudS1pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEd01lbnVEaXJlY3RpdmUgfSBmcm9tICcuLi9tZW51L2R3LW1lbnUuZGlyZWN0aXZlJztcbmltcG9ydCB7IER3U3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4uL21lbnUvZHctc3VibWVudS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRHdCdXR0b25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbIER3TWVudURpcmVjdGl2ZSwgRHdNZW51SXRlbURpcmVjdGl2ZSwgRHdTdWJNZW51Q29tcG9uZW50LCBEd01lbnVEaXZpZGVyRGlyZWN0aXZlLCBEd01lbnVHcm91cENvbXBvbmVudCBdLFxuICBleHBvcnRzICAgICA6IFsgRHdNZW51RGlyZWN0aXZlLCBEd01lbnVJdGVtRGlyZWN0aXZlLCBEd1N1Yk1lbnVDb21wb25lbnQsIER3TWVudURpdmlkZXJEaXJlY3RpdmUsIER3TWVudUdyb3VwQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgRHdNZW51TW9kdWxlIHtcbn1cbiJdfQ==
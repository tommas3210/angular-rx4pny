/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DwAvatarModule } from '../avatar/dw-avatar.module';
import { DwGridModule } from '../grid/dw-grid.module';
import { DwSpinModule } from '../spin/dw-spin.module';
import { DwListItemMetaComponent } from './dw-list-item-meta.component';
import { DwListItemComponent } from './dw-list-item.component';
import { DwListComponent } from './dw-list.component';
var DwListModule = /** @class */ (function () {
    function DwListModule() {
    }
    DwListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DwSpinModule, DwGridModule, DwAvatarModule],
                    declarations: [DwListComponent, DwListItemComponent, DwListItemMetaComponent],
                    exports: [DwListComponent, DwListItemComponent, DwListItemMetaComponent]
                },] }
    ];
    return DwListModule;
}());
export { DwListModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImxpc3QvZHctbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Z0JBRXJELFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQVMsQ0FBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUU7b0JBQzVFLFlBQVksRUFBSSxDQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsQ0FBRTtvQkFDakYsT0FBTyxFQUFTLENBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixDQUFFO2lCQUNwRjs7dUJBZkQ7O1NBZ0JhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdBdmF0YXJNb2R1bGUgfSBmcm9tICcuLi9hdmF0YXIvZHctYXZhdGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBEd0dyaWRNb2R1bGUgfSBmcm9tICcuLi9ncmlkL2R3LWdyaWQubW9kdWxlJztcbmltcG9ydCB7IER3U3Bpbk1vZHVsZSB9IGZyb20gJy4uL3NwaW4vZHctc3Bpbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEd0xpc3RJdGVtTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vZHctbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50JztcbmltcG9ydCB7IER3TGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2R3LWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9kdy1saXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogICAgICAgIFsgQ29tbW9uTW9kdWxlLCBEd1NwaW5Nb2R1bGUsIER3R3JpZE1vZHVsZSwgRHdBdmF0YXJNb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6ICAgWyBEd0xpc3RDb21wb25lbnQsIER3TGlzdEl0ZW1Db21wb25lbnQsIER3TGlzdEl0ZW1NZXRhQ29tcG9uZW50IF0sXG4gICAgZXhwb3J0czogICAgICAgIFsgRHdMaXN0Q29tcG9uZW50LCBEd0xpc3RJdGVtQ29tcG9uZW50LCBEd0xpc3RJdGVtTWV0YUNvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIER3TGlzdE1vZHVsZSB7XG59XG4iXX0=
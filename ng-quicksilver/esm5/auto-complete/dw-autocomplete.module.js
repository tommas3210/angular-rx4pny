/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwAutocompleteOptgroupComponent } from './dw-autocomplete-optgroup.component';
import { DwAutocompleteOptionComponent } from './dw-autocomplete-option.component';
import { DwAutocompleteTriggerDirective } from './dw-autocomplete-trigger.directive';
import { DwAutocompleteComponent } from './dw-autocomplete.component';
var DwAutocompleteModule = /** @class */ (function () {
    function DwAutocompleteModule() {
    }
    DwAutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DwAutocompleteComponent, DwAutocompleteOptionComponent, DwAutocompleteTriggerDirective, DwAutocompleteOptgroupComponent],
                    exports: [DwAutocompleteComponent, DwAutocompleteOptionComponent, DwAutocompleteTriggerDirective, DwAutocompleteOptgroupComponent],
                    imports: [CommonModule, OverlayModule, FormsModule]
                },] }
    ];
    return DwAutocompleteModule;
}());
export { DwAutocompleteModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9kdy1hdXRvY29tcGxldGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztnQkFFckUsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDZCQUE2QixFQUFFLDhCQUE4QixFQUFFLCtCQUErQixDQUFDO29CQUN2SSxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSw2QkFBNkIsRUFBRSw4QkFBOEIsRUFBRSwrQkFBK0IsQ0FBQztvQkFDbEksT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7aUJBQ3BEOzsrQkFkRDs7U0FlYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRHdBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudCB9IGZyb20gJy4vZHctYXV0b2NvbXBsZXRlLW9wdGdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZHctYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kdy1hdXRvY29tcGxldGUtdHJpZ2dlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHdBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2R3LWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEd0F1dG9jb21wbGV0ZUNvbXBvbmVudCwgRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIER3QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSwgRHdBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEd0F1dG9jb21wbGV0ZUNvbXBvbmVudCwgRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIER3QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSwgRHdBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIEZvcm1zTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBEd0F1dG9jb21wbGV0ZU1vZHVsZSB7XG59XG4iXX0=
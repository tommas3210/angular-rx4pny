/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DwMentionSuggestionDirective } from './mention-suggestions';
import { DwMentionTriggerDirective } from './mention-trigger';
import { DwMentionComponent } from './mention.component';
/** @type {?} */
const COMPONENTS = [DwMentionComponent, DwMentionTriggerDirective, DwMentionSuggestionDirective];
export class DwMentionModule {
}
DwMentionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, OverlayModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lbnRpb24vbWVudGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRXpELE1BQU0sVUFBVSxHQUFHLENBQUMsa0JBQWtCLEVBQUUseUJBQXlCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztBQU9qRyxNQUFNOzs7WUFMTCxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFPLENBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUU7Z0JBQzFELFlBQVksRUFBRSxDQUFFLEdBQUcsVUFBVSxDQUFFO2dCQUMvQixPQUFPLEVBQU8sQ0FBRSxHQUFHLFVBQVUsQ0FBRTthQUNoQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRHdNZW50aW9uU3VnZ2VzdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vbWVudGlvbi1zdWdnZXN0aW9ucyc7XG5pbXBvcnQgeyBEd01lbnRpb25UcmlnZ2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW50aW9uLXRyaWdnZXInO1xuaW1wb3J0IHsgRHdNZW50aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9tZW50aW9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRHdNZW50aW9uQ29tcG9uZW50LCBEd01lbnRpb25UcmlnZ2VyRGlyZWN0aXZlLCBEd01lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE92ZXJsYXlNb2R1bGUgXSxcbiAgZGVjbGFyYXRpb25zOiBbIC4uLkNPTVBPTkVOVFMgXSxcbiAgZXhwb3J0cyAgICAgOiBbIC4uLkNPTVBPTkVOVFMgXVxufSlcbmV4cG9ydCBjbGFzcyBEd01lbnRpb25Nb2R1bGUge1xufVxuIl19
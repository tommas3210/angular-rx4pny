/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class DwOptionPipe {
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(o => filterOption(input, o));
        }
    }
}
DwOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'dwFilterOptionPipe' },] }
];
export class DwSubOptionPipe {
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(g => {
                return g.listOfDwOptionComponent.some(o => filterOption(input, o));
            });
        }
    }
}
DwSubOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'dwSubFilterOptionPipe' },] }
];
/**
 * @param {?} input
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(input, option) {
    if (option && option.dwLabel) {
        return option.dwLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNlbGVjdC9kdy1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFRL0QsTUFBTTs7Ozs7Ozs7SUFDSixTQUFTLENBQUMsT0FBMkQsRUFBRSxLQUFhLEVBQUUsWUFBMkIsRUFBRSxZQUFxQjtRQUN0SSxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLE9BQU8sQ0FBQztTQUNoQjthQUFNO1lBQ0wsT0FBTyxtQkFBQyxPQUE4QixFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdFO0tBQ0Y7OztZQVJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs7QUFZcEMsTUFBTTs7Ozs7Ozs7SUFDSixTQUFTLENBQUMsTUFBb0UsRUFBRSxLQUFhLEVBQUUsWUFBMkIsRUFBRSxZQUFxQjtRQUMvSSxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLG1CQUFDLE1BQWtDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRSxDQUFDLENBQUM7U0FDSjtLQUNGOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7Ozs7Ozs7QUFhdkMsTUFBTSw4QkFBOEIsS0FBYSxFQUFFLE1BQXlCO0lBQzFFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN2RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER3T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2R3LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2R3LW9wdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgdHlwZSBURmlsdGVyT3B0aW9uID0gKGlucHV0Pzogc3RyaW5nLCBvcHRpb24/OiBEd09wdGlvbkNvbXBvbmVudCkgPT4gYm9vbGVhbjtcblxuLy8gVE9ETzogY2FuIG5vdCBkeW5hbWljIGNoYW5nZSBwaXBlIHB1cmUgeWV0XG5AUGlwZSh7IG5hbWU6ICdkd0ZpbHRlck9wdGlvblBpcGUnIH0pXG5leHBvcnQgY2xhc3MgRHdPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShvcHRpb25zOiBEd09wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PER3T3B0aW9uQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBEd09wdGlvbkNvbXBvbmVudFtdIHwgUXVlcnlMaXN0PER3T3B0aW9uQ29tcG9uZW50PiB7XG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhaW5wdXQpIHtcbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKG9wdGlvbnMgYXMgRHdPcHRpb25Db21wb25lbnRbXSkuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uKGlucHV0LCBvKSk7XG4gICAgfVxuICB9XG59XG5cbkBQaXBlKHsgbmFtZTogJ2R3U3ViRmlsdGVyT3B0aW9uUGlwZScgfSlcbmV4cG9ydCBjbGFzcyBEd1N1Yk9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGdyb3VwczogRHdPcHRpb25Hcm91cENvbXBvbmVudFtdIHwgUXVlcnlMaXN0PER3T3B0aW9uR3JvdXBDb21wb25lbnQ+LCBpbnB1dDogc3RyaW5nLCBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sIHNlcnZlclNlYXJjaDogYm9vbGVhbik6IER3T3B0aW9uR3JvdXBDb21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxEd09wdGlvbkdyb3VwQ29tcG9uZW50PiB7XG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhaW5wdXQpIHtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoZ3JvdXBzIGFzIER3T3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xuICAgICAgICByZXR1cm4gZy5saXN0T2ZEd09wdGlvbkNvbXBvbmVudC5zb21lKG8gPT4gZmlsdGVyT3B0aW9uKGlucHV0LCBvKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJPcHRpb24oaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBEd09wdGlvbkNvbXBvbmVudCk6IGJvb2xlYW4ge1xuICBpZiAob3B0aW9uICYmIG9wdGlvbi5kd0xhYmVsKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5kd0xhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dC50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19
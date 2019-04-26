/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var DwOptionPipe = /** @class */ (function () {
    function DwOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    DwOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(function (o) { return filterOption(input, o); });
        }
    };
    DwOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'dwFilterOptionPipe' },] }
    ];
    return DwOptionPipe;
}());
export { DwOptionPipe };
var DwSubOptionPipe = /** @class */ (function () {
    function DwSubOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    DwSubOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(function (g) {
                return g.listOfDwOptionComponent.some(function (o) { return filterOption(input, o); });
            });
        }
    };
    DwSubOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'dwSubFilterOptionPipe' },] }
    ];
    return DwSubOptionPipe;
}());
export { DwSubOptionPipe };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNlbGVjdC9kdy1vcHRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBNEIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lBUzdELGdDQUFTOzs7Ozs7O0lBQVQsVUFBVSxPQUEyRCxFQUFFLEtBQWEsRUFBRSxZQUEyQixFQUFFLFlBQXFCO1FBQ3RJLElBQUksWUFBWSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzFCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLG1CQUFDLE9BQThCLEVBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7U0FDN0U7S0FDRjs7Z0JBUkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFOzt1QkFScEM7O1NBU2EsWUFBWTs7Ozs7Ozs7Ozs7SUFZdkIsbUNBQVM7Ozs7Ozs7SUFBVCxVQUFVLE1BQW9FLEVBQUUsS0FBYSxFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDL0ksSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxtQkFBQyxNQUFrQyxFQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQztnQkFDbEQsT0FBTyxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO2FBQ3BFLENBQUMsQ0FBQztTQUNKO0tBQ0Y7O2dCQVZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRTs7MEJBbkJ2Qzs7U0FvQmEsZUFBZTs7Ozs7O0FBWTVCLE1BQU0sOEJBQThCLEtBQWEsRUFBRSxNQUF5QjtJQUMxRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdkU7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEd09wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IER3T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dD86IHN0cmluZywgb3B0aW9uPzogRHdPcHRpb25Db21wb25lbnQpID0+IGJvb2xlYW47XG5cbi8vIFRPRE86IGNhbiBub3QgZHluYW1pYyBjaGFuZ2UgcGlwZSBwdXJlIHlldFxuQFBpcGUoeyBuYW1lOiAnZHdGaWx0ZXJPcHRpb25QaXBlJyB9KVxuZXhwb3J0IGNsYXNzIER3T3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob3B0aW9uczogRHdPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxEd09wdGlvbkNvbXBvbmVudD4sIGlucHV0OiBzdHJpbmcsIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiwgc2VydmVyU2VhcmNoOiBib29sZWFuKTogRHdPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxEd09wdGlvbkNvbXBvbmVudD4ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIWlucHV0KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvcHRpb25zIGFzIER3T3B0aW9uQ29tcG9uZW50W10pLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbihpbnB1dCwgbykpO1xuICAgIH1cbiAgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICdkd1N1YkZpbHRlck9wdGlvblBpcGUnIH0pXG5leHBvcnQgY2xhc3MgRHdTdWJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShncm91cHM6IER3T3B0aW9uR3JvdXBDb21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxEd09wdGlvbkdyb3VwQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBEd09wdGlvbkdyb3VwQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8RHdPcHRpb25Hcm91cENvbXBvbmVudD4ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIWlucHV0KSB7XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGdyb3VwcyBhcyBEd09wdGlvbkdyb3VwQ29tcG9uZW50W10pLmZpbHRlcihnID0+IHtcbiAgICAgICAgcmV0dXJuIGcubGlzdE9mRHdPcHRpb25Db21wb25lbnQuc29tZShvID0+IGZpbHRlck9wdGlvbihpbnB1dCwgbykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RmlsdGVyT3B0aW9uKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogRHdPcHRpb25Db21wb25lbnQpOiBib29sZWFuIHtcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZHdMYWJlbCkge1xuICAgIHJldHVybiBvcHRpb24uZHdMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
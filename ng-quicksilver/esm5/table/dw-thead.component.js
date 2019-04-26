/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Host, Input, Optional, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { DwThComponent } from './dw-th.component';
import { DwTableComponent } from './dw-table.component';
var DwTheadComponent = /** @class */ (function () {
    function DwTheadComponent(dwTableComponent) {
        this.dwTableComponent = dwTableComponent;
        this._singleSort = false;
        this.unsubscribe$ = new Subject();
        this.dwSortChange = new EventEmitter();
        if (this.dwTableComponent) {
            this.dwTableComponent.dwTheadComponent = this;
        }
    }
    Object.defineProperty(DwTheadComponent.prototype, "dwSingleSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._singleSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._singleSort = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTheadComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sortChange = new Subject().asObservable();
        /** @type {?} */
        var listOfTh = this.listOfDwThComponent.toArray();
        /** @type {?} */
        var sortChangeArray = listOfTh.map(function (th) { return th.dwSortChangeWithKey; });
        if (sortChangeArray.length) {
            sortChangeArray.forEach(function (sort) {
                sortChange = merge(sort.asObservable(), sortChange);
            });
        }
        sortChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function (data) {
            _this.dwSortChange.emit(data);
            if (_this.dwSingleSort) {
                listOfTh.forEach(function (th) { return th.dwSort = (th.dwSortKey === data.key ? th.dwSort : null); });
            }
        });
    };
    /**
     * @return {?}
     */
    DwTheadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    DwTheadComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'thead:not(.ant-table-thead)',
                    template: "<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!dwTableComponent\">\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    DwTheadComponent.ctorParameters = function () { return [
        { type: DwTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    DwTheadComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['contentTemplate',] }],
        listOfDwThComponent: [{ type: ContentChildren, args: [DwThComponent, { descendants: true },] }],
        dwSortChange: [{ type: Output }],
        dwSingleSort: [{ type: Input }]
    };
    return DwTheadComponent;
}());
export { DwTheadComponent };
function DwTheadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTheadComponent.prototype._singleSort;
    /** @type {?} */
    DwTheadComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwTheadComponent.prototype.template;
    /** @type {?} */
    DwTheadComponent.prototype.listOfDwThComponent;
    /** @type {?} */
    DwTheadComponent.prototype.dwSortChange;
    /** @type {?} */
    DwTheadComponent.prototype.dwTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10aGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBd0J0RCwwQkFBdUMsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7MkJBaEJuRCxLQUFLOzRCQUNKLElBQUksT0FBTyxFQUFROzRCQUlqQixJQUFJLFlBQVksRUFBa0M7UUFZekUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUMvQztLQUNGO0lBYkQsc0JBQ0ksMENBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7Ozs7O1FBUEQsVUFDaUIsS0FBYztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzs7O09BQUE7Ozs7SUFZRCw2Q0FBa0I7OztJQUFsQjtRQUFBLGlCQWVDOztRQWRDLElBQUksVUFBVSxHQUFHLElBQUksT0FBTyxFQUFrQyxDQUFDLFlBQVksRUFBRSxDQUFDOztRQUM5RSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3BELElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsbUJBQW1CLEVBQXRCLENBQXNCLENBQUMsQ0FBQztRQUNuRSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDMUIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQzFCLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3JELENBQUMsQ0FBQztTQUNKO1FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUMxRCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBMUQsQ0FBMEQsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7O2dCQWhERixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBSyw2QkFBNkI7b0JBQzFDLDBOQUF3QztpQkFDekM7Ozs7Z0JBTlEsZ0JBQWdCLHVCQXdCVixJQUFJLFlBQUksUUFBUTs7OzJCQWI1QixTQUFTLFNBQUMsaUJBQWlCO3NDQUMzQixlQUFlLFNBQUMsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsrQkFDcEQsTUFBTTsrQkFFTixLQUFLOzsyQkFwQ1I7O1NBNEJhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdUaENvbXBvbmVudCB9IGZyb20gJy4vZHctdGguY29tcG9uZW50JztcblxuaW1wb3J0IHsgRHdUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vZHctdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3IgICA6ICd0aGVhZDpub3QoLmFudC10YWJsZS10aGVhZCknLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctdGhlYWQuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3VGhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zaW5nbGVTb3J0ID0gZmFsc2U7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKCdjb250ZW50VGVtcGxhdGUnKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdUaENvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBsaXN0T2ZEd1RoQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdUaENvbXBvbmVudD47XG4gIEBPdXRwdXQoKSBkd1NvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTaW5nbGVTb3J0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2luZ2xlU29ydCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaW5nbGVTb3J0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW5nbGVTb3J0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgZHdUYWJsZUNvbXBvbmVudDogRHdUYWJsZUNvbXBvbmVudCkge1xuICAgIGlmICh0aGlzLmR3VGFibGVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHdUYWJsZUNvbXBvbmVudC5kd1RoZWFkQ29tcG9uZW50ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgbGV0IHNvcnRDaGFuZ2UgPSBuZXcgU3ViamVjdDx7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCkuYXNPYnNlcnZhYmxlKCk7XG4gICAgY29uc3QgbGlzdE9mVGggPSB0aGlzLmxpc3RPZkR3VGhDb21wb25lbnQudG9BcnJheSgpO1xuICAgIGNvbnN0IHNvcnRDaGFuZ2VBcnJheSA9IGxpc3RPZlRoLm1hcCh0aCA9PiB0aC5kd1NvcnRDaGFuZ2VXaXRoS2V5KTtcbiAgICBpZiAoc29ydENoYW5nZUFycmF5Lmxlbmd0aCkge1xuICAgICAgc29ydENoYW5nZUFycmF5LmZvckVhY2goc29ydCA9PiB7XG4gICAgICAgIHNvcnRDaGFuZ2UgPSBtZXJnZShzb3J0LmFzT2JzZXJ2YWJsZSgpLCBzb3J0Q2hhbmdlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzb3J0Q2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5kd1NvcnRDaGFuZ2UuZW1pdChkYXRhKTtcbiAgICAgIGlmICh0aGlzLmR3U2luZ2xlU29ydCkge1xuICAgICAgICBsaXN0T2ZUaC5mb3JFYWNoKHRoID0+IHRoLmR3U29ydCA9ICh0aC5kd1NvcnRLZXkgPT09IGRhdGEua2V5ID8gdGguZHdTb3J0IDogbnVsbCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==
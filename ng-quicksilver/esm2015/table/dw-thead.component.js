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
export class DwTheadComponent {
    /**
     * @param {?} dwTableComponent
     */
    constructor(dwTableComponent) {
        this.dwTableComponent = dwTableComponent;
        this._singleSort = false;
        this.unsubscribe$ = new Subject();
        this.dwSortChange = new EventEmitter();
        if (this.dwTableComponent) {
            this.dwTableComponent.dwTheadComponent = this;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSingleSort(value) {
        this._singleSort = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwSingleSort() {
        return this._singleSort;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        let sortChange = new Subject().asObservable();
        /** @type {?} */
        const listOfTh = this.listOfDwThComponent.toArray();
        /** @type {?} */
        const sortChangeArray = listOfTh.map(th => th.dwSortChangeWithKey);
        if (sortChangeArray.length) {
            sortChangeArray.forEach(sort => {
                sortChange = merge(sort.asObservable(), sortChange);
            });
        }
        sortChange.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
            this.dwSortChange.emit(data);
            if (this.dwSingleSort) {
                listOfTh.forEach(th => th.dwSort = (th.dwSortKey === data.key ? th.dwSort : null));
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
DwTheadComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'thead:not(.ant-table-thead)',
                template: "<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!dwTableComponent\">\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n</ng-container>"
            }] }
];
/** @nocollapse */
DwTheadComponent.ctorParameters = () => [
    { type: DwTableComponent, decorators: [{ type: Host }, { type: Optional }] }
];
DwTheadComponent.propDecorators = {
    template: [{ type: ViewChild, args: ['contentTemplate',] }],
    listOfDwThComponent: [{ type: ContentChildren, args: [DwThComponent, { descendants: true },] }],
    dwSortChange: [{ type: Output }],
    dwSingleSort: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0YWJsZS9kdy10aGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixJQUFJLEVBQ0osS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPeEQsTUFBTTs7OztJQWlCSixZQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjsyQkFoQm5ELEtBQUs7NEJBQ0osSUFBSSxPQUFPLEVBQVE7NEJBSWpCLElBQUksWUFBWSxFQUFrQztRQVl6RSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQy9DO0tBQ0Y7Ozs7O0lBYkQsSUFDSSxZQUFZLENBQUMsS0FBYztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7OztJQVFELGtCQUFrQjs7UUFDaEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQWtDLENBQUMsWUFBWSxFQUFFLENBQUM7O1FBQzlFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDcEQsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ25FLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUMxQixlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QixVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNyRCxDQUFDLENBQUM7U0FDSjtRQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOzs7WUFoREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUssNkJBQTZCO2dCQUMxQywwTkFBd0M7YUFDekM7Ozs7WUFOUSxnQkFBZ0IsdUJBd0JWLElBQUksWUFBSSxRQUFROzs7dUJBYjVCLFNBQVMsU0FBQyxpQkFBaUI7a0NBQzNCLGVBQWUsU0FBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzJCQUNwRCxNQUFNOzJCQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3VGhDb21wb25lbnQgfSBmcm9tICcuL2R3LXRoLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IER3VGFibGVDb21wb25lbnQgfSBmcm9tICcuL2R3LXRhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yICAgOiAndGhlYWQ6bm90KC5hbnQtdGFibGUtdGhlYWQpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R3LXRoZWFkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1RoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc2luZ2xlU29ydCA9IGZhbHNlO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJykgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAQ29udGVudENoaWxkcmVuKER3VGhDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mRHdUaENvbXBvbmVudDogUXVlcnlMaXN0PER3VGhDb21wb25lbnQ+O1xuICBAT3V0cHV0KCkgZHdTb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2luZ2xlU29ydCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NpbmdsZVNvcnQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2luZ2xlU29ydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2luZ2xlU29ydDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIGR3VGFibGVDb21wb25lbnQ6IER3VGFibGVDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5kd1RhYmxlQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmR3VGFibGVDb21wb25lbnQuZHdUaGVhZENvbXBvbmVudCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGxldCBzb3J0Q2hhbmdlID0gbmV3IFN1YmplY3Q8eyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PigpLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGNvbnN0IGxpc3RPZlRoID0gdGhpcy5saXN0T2ZEd1RoQ29tcG9uZW50LnRvQXJyYXkoKTtcbiAgICBjb25zdCBzb3J0Q2hhbmdlQXJyYXkgPSBsaXN0T2ZUaC5tYXAodGggPT4gdGguZHdTb3J0Q2hhbmdlV2l0aEtleSk7XG4gICAgaWYgKHNvcnRDaGFuZ2VBcnJheS5sZW5ndGgpIHtcbiAgICAgIHNvcnRDaGFuZ2VBcnJheS5mb3JFYWNoKHNvcnQgPT4ge1xuICAgICAgICBzb3J0Q2hhbmdlID0gbWVyZ2Uoc29ydC5hc09ic2VydmFibGUoKSwgc29ydENoYW5nZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc29ydENoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuZHdTb3J0Q2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICBpZiAodGhpcy5kd1NpbmdsZVNvcnQpIHtcbiAgICAgICAgbGlzdE9mVGguZm9yRWFjaCh0aCA9PiB0aC5kd1NvcnQgPSAodGguZHdTb3J0S2V5ID09PSBkYXRhLmtleSA/IHRoLmR3U29ydCA6IG51bGwpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
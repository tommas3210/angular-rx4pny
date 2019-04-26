/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DwTimelineItemComponent } from './dw-timeline-item.component';
export class DwTimelineComponent {
    constructor() {
        this.unsubscribe$ = new Subject();
        this.isPendingBoolean = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPending(value) {
        this.isPendingString = !(value instanceof TemplateRef);
        this.isPendingBoolean = value === true;
        this._pending = value;
    }
    /**
     * @return {?}
     */
    get dwPending() {
        return this._pending;
    }
    /**
     * @return {?}
     */
    updateChildrenTimeLine() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            this.listOfTimeLine.toArray().forEach((item, index) => item.isLast = index === this.listOfTimeLine.length - 1);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildrenTimeLine();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
                this.updateChildrenTimeLine();
            });
        }
    }
}
DwTimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-timeline',
                preserveWhitespaces: false,
                template: "<ul class=\"ant-timeline\" [class.ant-timeline-pending]=\"dwPending\">\n  <ng-content></ng-content>\n  <li *ngIf=\"dwPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\n    <div class=\"ant-timeline-item-tail\"></div>\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\n      <i class=\"anticon anticon-spin anticon-loading\"></i>\n    </div>\n    <div class=\"ant-timeline-item-content\">\n      <ng-container *ngIf=\"isPendingString; else pendingTemplate\">{{ isPendingBoolean ? '' : dwPending }}</ng-container>\n      <ng-template #pendingTemplate>\n        <ng-template [ngTemplateOutlet]=\"dwPending\"></ng-template>\n      </ng-template>\n    </div>\n  </li>\n</ul>"
            }] }
];
DwTimelineComponent.propDecorators = {
    dwPending: [{ type: Input }],
    listOfTimeLine: [{ type: ContentChildren, args: [DwTimelineItemComponent,] }],
    _pendingContent: [{ type: ContentChild, args: ['pending',] }]
};
function DwTimelineComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTimelineComponent.prototype._pending;
    /** @type {?} */
    DwTimelineComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwTimelineComponent.prototype.isPendingString;
    /** @type {?} */
    DwTimelineComponent.prototype.isPendingBoolean;
    /** @type {?} */
    DwTimelineComponent.prototype.listOfTimeLine;
    /** @type {?} */
    DwTimelineComponent.prototype._pendingContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0aW1lbGluZS9kdy10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixLQUFLLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU92RSxNQUFNOzs0QkFFbUIsSUFBSSxPQUFPLEVBQVE7Z0NBRWQsS0FBSzs7Ozs7O0lBRWpDLElBQ0ksU0FBUyxDQUFDLEtBQTJDO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN2Qjs7OztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztLQUN0Qjs7OztJQUtELHNCQUFzQjtRQUNwQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoSDtLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUM1RSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQixDQUFDLENBQUM7U0FDSjtLQUNGOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxhQUFhO2dCQUNsQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiw0dUJBQW1EO2FBQ3BEOzs7d0JBT0UsS0FBSzs2QkFXTCxlQUFlLFNBQUMsdUJBQXVCOzhCQUN2QyxZQUFZLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRHdUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2R3LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy10aW1lbGluZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy10aW1lbGluZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3BlbmRpbmc6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc1BlbmRpbmdTdHJpbmc6IGJvb2xlYW47XG4gIGlzUGVuZGluZ0Jvb2xlYW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdQZW5kaW5nKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzUGVuZGluZ1N0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5pc1BlbmRpbmdCb29sZWFuID0gdmFsdWUgPT09IHRydWU7XG4gICAgdGhpcy5fcGVuZGluZyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3UGVuZGluZygpOiBzdHJpbmcgfCBib29sZWFuIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9wZW5kaW5nO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihEd1RpbWVsaW5lSXRlbUNvbXBvbmVudCkgbGlzdE9mVGltZUxpbmU6IFF1ZXJ5TGlzdDxEd1RpbWVsaW5lSXRlbUNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGQoJ3BlbmRpbmcnKSBfcGVuZGluZ0NvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIHVwZGF0ZUNoaWxkcmVuVGltZUxpbmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUgJiYgdGhpcy5saXN0T2ZUaW1lTGluZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdE9mVGltZUxpbmUudG9BcnJheSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiBpdGVtLmlzTGFzdCA9IGluZGV4ID09PSB0aGlzLmxpc3RPZlRpbWVMaW5lLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5UaW1lTGluZSgpO1xuICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lKSB7XG4gICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuVGltZUxpbmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
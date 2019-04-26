/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DwTimelineItemComponent } from './dw-timeline-item.component';
var DwTimelineComponent = /** @class */ (function () {
    function DwTimelineComponent() {
        this.unsubscribe$ = new Subject();
        this.isPendingBoolean = false;
    }
    Object.defineProperty(DwTimelineComponent.prototype, "dwPending", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pending;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isPendingString = !(value instanceof TemplateRef);
            this.isPendingBoolean = value === true;
            this._pending = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTimelineComponent.prototype.updateChildrenTimeLine = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            this.listOfTimeLine.toArray().forEach(function (item, index) { return item.isLast = index === _this.listOfTimeLine.length - 1; });
        }
    };
    /**
     * @return {?}
     */
    DwTimelineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @return {?}
     */
    DwTimelineComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildrenTimeLine();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
                _this.updateChildrenTimeLine();
            });
        }
    };
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
    return DwTimelineComponent;
}());
export { DwTimelineComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0aW1lbGluZS9kdy10aW1lbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixLQUFLLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OzRCQVM5QyxJQUFJLE9BQU8sRUFBUTtnQ0FFZCxLQUFLOztJQUVqQyxzQkFDSSwwQ0FBUzs7OztRQU1iO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVRELFVBQ2MsS0FBMkM7WUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCOzs7T0FBQTs7OztJQVNELG9EQUFzQjs7O0lBQXRCO1FBQUEsaUJBSUM7UUFIQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDckQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLE9BQUEsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEtBQUssS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQUM7U0FDaEg7S0FDRjs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3ZFLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQy9CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGFBQWE7b0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDR1QkFBbUQ7aUJBQ3BEOzs7NEJBT0UsS0FBSztpQ0FXTCxlQUFlLFNBQUMsdUJBQXVCO2tDQUN2QyxZQUFZLFNBQUMsU0FBUzs7OEJBdkN6Qjs7U0FxQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEd1RpbWVsaW5lSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZHctdGltZWxpbmUtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXRpbWVsaW5lJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXRpbWVsaW5lLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1RpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcGVuZGluZzogc3RyaW5nIHwgYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzUGVuZGluZ1N0cmluZzogYm9vbGVhbjtcbiAgaXNQZW5kaW5nQm9vbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BlbmRpbmcodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNQZW5kaW5nU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLmlzUGVuZGluZ0Jvb2xlYW4gPSB2YWx1ZSA9PT0gdHJ1ZTtcbiAgICB0aGlzLl9wZW5kaW5nID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdQZW5kaW5nKCk6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BlbmRpbmc7XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKER3VGltZWxpbmVJdGVtQ29tcG9uZW50KSBsaXN0T2ZUaW1lTGluZTogUXVlcnlMaXN0PER3VGltZWxpbmVJdGVtQ29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZCgncGVuZGluZycpIF9wZW5kaW5nQ29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgdXBkYXRlQ2hpbGRyZW5UaW1lTGluZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZUaW1lTGluZSAmJiB0aGlzLmxpc3RPZlRpbWVMaW5lLmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0T2ZUaW1lTGluZS50b0FycmF5KCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IGl0ZW0uaXNMYXN0ID0gaW5kZXggPT09IHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblRpbWVMaW5lKCk7XG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUpIHtcbiAgICAgIHRoaXMubGlzdE9mVGltZUxpbmUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW5UaW1lTGluZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
import { AfterContentInit, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { DwTimelineItemComponent } from './dw-timeline-item.component';
export declare class DwTimelineComponent implements AfterContentInit, OnDestroy {
    private _pending;
    private unsubscribe$;
    isPendingString: boolean;
    isPendingBoolean: boolean;
    dwPending: string | boolean | TemplateRef<void>;
    listOfTimeLine: QueryList<DwTimelineItemComponent>;
    _pendingContent: TemplateRef<void>;
    updateChildrenTimeLine(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}

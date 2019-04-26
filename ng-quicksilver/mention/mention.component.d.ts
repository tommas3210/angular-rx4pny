import { Overlay } from '@angular/cdk/overlay';
import { AfterContentInit, EventEmitter, NgZone, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
export interface MentionOnSearchTypes {
    value: string;
    prefix: string;
}
export declare class DwMentionComponent implements OnDestroy, AfterContentInit {
    private document;
    private ngZone;
    private overlay;
    private viewContainerRef;
    dwOnSelect: EventEmitter<string | {}>;
    dwOnSearchChange: EventEmitter<MentionOnSearchTypes>;
    dwValueWith: (value: any) => string;
    dwPrefix: string | string[];
    dwLoading: boolean;
    dwNotFoundContent: string;
    dwSuggestions: string[];
    dwPlacement: MentionPlacement;
    trigger: any;
    suggestionsTemp: any;
    suggestionChild: TemplateRef<{
        $implicit: any;
    }>;
    isOpen: boolean;
    filteredSuggestions: string[];
    suggestionTemplate: TemplateRef<{
        $implicit: any;
    }> | null;
    activeIndex: number;
    private _suggestions;
    private _placement;
    private previousValue;
    private cursorMention;
    private cursorMentionStart;
    private cursorMentionEnd;
    private overlayRef;
    private portal;
    private positionStrategy;
    private overlayBackdropClickSubscription;
    private readonly triggerNativeElement;
    constructor(document: any, // tslint:disable-line:no-any
    ngZone: NgZone, overlay: Overlay, viewContainerRef: ViewContainerRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    closeDropdown(): void;
    openDropdown(): void;
    getMentions(): string[];
    selectSuggestion(suggestion: string | {}): void;
    private handleInput;
    private handleKeydown;
    private handleClick;
    private bindTriggerEvents;
    private suggestionsFilter;
    private resetDropdown;
    private setNextItemActive;
    private setPreviousItemActive;
    private canOpen;
    private resetCursorMention;
    private updatePositions;
    private subscribeOverlayBackdropClick;
    private attachOverlay;
    private getOverlayConfig;
    private getOverlayPosition;
}
export interface Mention {
    startPos: number;
    endPos: number;
    mention: string;
}
export declare type MentionPlacement = 'top' | 'bottom';

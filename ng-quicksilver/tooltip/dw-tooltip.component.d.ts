import { AnimationEvent } from '@angular/animations';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class DwToolTipComponent {
    cdr: ChangeDetectorRef;
    _hasBackdrop: boolean;
    _prefix: string;
    _positions: ConnectionPositionPair[];
    _classMap: {};
    _placement: string;
    _trigger: string;
    _content: string | TemplateRef<void>;
    overlayOrigin: CdkOverlayOrigin;
    isContentString: boolean;
    isTitleString: boolean;
    visibleSource: BehaviorSubject<boolean>;
    visible$: Observable<boolean>;
    _title: string | TemplateRef<void>;
    overlay: CdkConnectedOverlay;
    dwVisibleChange: EventEmitter<boolean>;
    dwOverlayClassName: string;
    dwOverlayStyle: {
        [key: string]: string;
    };
    dwMouseEnterDelay: number;
    dwMouseLeaveDelay: number;
    dwContent: string | TemplateRef<void>;
    dwTitle: string | TemplateRef<void>;
    dwVisible: boolean;
    dwTrigger: string;
    dwPlacement: string;
    updatePosition(): void;
    onPositionChange($event: ConnectedOverlayPositionChange): void;
    show(): void;
    hide(): void;
    _afterVisibilityAnimation(e: AnimationEvent): void;
    setClassMap(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    constructor(cdr: ChangeDetectorRef);
    isContentEmpty(): boolean;
}

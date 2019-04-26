import { OnDestroy, OnInit } from '@angular/core';
import { DwMessageContainerComponent } from './dw-message-container.component';
import { DwMessageDataFilled, DwMessageDataOptions } from './dw-message.definitions';
export declare class DwMessageComponent implements OnInit, OnDestroy {
    private _messageContainer;
    dwMessage: DwMessageDataFilled;
    dwIndex: number;
    protected _options: DwMessageDataOptions;
    private _autoErase;
    private _eraseTimer;
    private _eraseTimingStart;
    private _eraseTTL;
    constructor(_messageContainer: DwMessageContainerComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onEnter(): void;
    onLeave(): void;
    protected _destroy(): void;
    private _initErase;
    private _updateTTL;
    private _startEraseTimeout;
    private _clearEraseTimeout;
}

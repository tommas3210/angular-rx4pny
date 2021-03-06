import { NgZone } from '@angular/core';
export declare class DwWaveRenderer {
    private triggerElement;
    private ngZone;
    private insertExtraNode;
    readonly waveTransitionDuration: number;
    private styleForPseudo;
    private extraNode;
    private lastTime;
    readonly waveAttributeName: string;
    constructor(triggerElement: HTMLElement, ngZone: NgZone, insertExtraNode: boolean);
    onClick: (event: MouseEvent) => void;
    bindTriggerEvent(): void;
    removeTriggerEvent(): void;
    removeStyleAndExtraNode(): void;
    destroy(): void;
    private fadeOutWave;
    private isValidColor;
    private isNotGrey;
    private getWaveColor;
    private runTimeoutOutsideZone;
}

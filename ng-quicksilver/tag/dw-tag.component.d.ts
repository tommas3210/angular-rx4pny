import { AnimationEvent } from '@angular/animations';
import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
export declare type TagType = 'default' | 'closeable' | 'checkable';
export declare class DwTagComponent implements OnInit, AfterViewInit {
    private renderer;
    private _color;
    private _checked;
    private isPreset;
    private _mode;
    classMap: any;
    closed: boolean;
    wrapperElement: ElementRef;
    dwAfterClose: EventEmitter<void>;
    dwOnClose: EventEmitter<MouseEvent>;
    dwCheckedChange: EventEmitter<boolean>;
    dwMode: TagType;
    dwColor: string;
    dwChecked: boolean;
    isPresetColor(color?: string): boolean;
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    afterAnimation(e: AnimationEvent): void;
    updateClassMap(): void;
    updateColorStatus(): void;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}

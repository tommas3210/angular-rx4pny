import { ChangeDetectorRef, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type DwAvatarShape = 'square' | 'circle';
export declare type DwAvatarSize = 'small' | 'large' | 'default';
export declare class DwAvatarComponent implements OnChanges {
    private cd;
    private updateHostClassService;
    private el;
    private prefixCls;
    private sizeMap;
    hasText: boolean;
    hasSrc: boolean;
    hasIcon: boolean;
    textStyles: {};
    textEl: ElementRef;
    dwShape: DwAvatarShape;
    dwSize: DwAvatarSize;
    dwText: string;
    dwSrc: string;
    dwIcon: string;
    setClass(): this;
    imgError(): void;
    private calcStringSize;
    private notifyCalc;
    constructor(elementRef: ElementRef, cd: ChangeDetectorRef, updateHostClassService: DwUpdateHostClassService);
    ngOnChanges(changes: SimpleChanges): void;
}

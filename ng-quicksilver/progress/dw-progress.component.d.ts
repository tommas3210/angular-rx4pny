import { OnInit } from '@angular/core';
export declare type DwProgressGapPositionType = 'top' | 'bottom' | 'left' | 'right';
export declare type DwProgressStatusType = 'success' | 'exception' | 'active' | 'normal';
export declare type DwProgressTypeType = 'line' | 'circle' | 'dashboard';
export declare class DwProgressComponent implements OnInit {
    private _gapDegree;
    private _gapPosition;
    private _percent;
    private _status;
    private _cacheStatus;
    private _strokeWidth;
    private _size;
    private _type;
    private _format;
    trailPathStyle: {
        [key: string]: string;
    };
    strokePathStyle: {
        [key: string]: string;
    };
    pathString: string;
    iconClassMap: any;
    isStatusSet: boolean;
    isStrokeWidthSet: boolean;
    isFormatSet: boolean;
    isGapDegreeSet: boolean;
    isGapPositionSet: boolean;
    statusColorMap: {
        normal: string;
        exception: string;
        success: string;
    };
    dwShowInfo: boolean;
    dwWidth: number;
    dwSuccessPercent: number;
    dwSize: string;
    dwFormat: (percent: number) => string;
    dwPercent: number;
    dwStrokeWidth: number;
    dwStatus: DwProgressStatusType;
    dwType: DwProgressTypeType;
    dwGapDegree: number;
    dwGapPosition: DwProgressGapPositionType;
    readonly isCirCleStyle: boolean;
    updatePathStyles(): void;
    updateIconClassMap(): void;
    ngOnInit(): void;
}

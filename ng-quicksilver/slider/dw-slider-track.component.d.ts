import { OnChanges, SimpleChanges } from '@angular/core';
export declare class DwSliderTrackComponent implements OnChanges {
    private _vertical;
    private _included;
    dwOffset: any;
    dwLength: any;
    dwClassName: any;
    dwVertical: boolean;
    dwIncluded: boolean;
    style: {
        bottom?: string;
        height?: string;
        left?: string;
        width?: string;
        visibility?: string;
    };
    ngOnChanges(changes: SimpleChanges): void;
}

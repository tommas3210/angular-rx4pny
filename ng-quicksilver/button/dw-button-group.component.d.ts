import { ElementRef } from '@angular/core';
export declare type DwButtonGroupSize = 'small' | 'large' | 'default';
export declare class DwButtonGroupComponent {
    private _size;
    private prefixCls;
    private sizeMap;
    classMap: {
        [x: string]: any;
    };
    groupWrapper: ElementRef;
    dwSize: DwButtonGroupSize;
}

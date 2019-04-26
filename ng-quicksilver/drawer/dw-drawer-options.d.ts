import { TemplateRef, Type } from '@angular/core';
import { DwDrawerRef } from './dw-drawer-ref';
export declare type DwDrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export interface DwDrawerOptions<T = any, D = any> {
    dwClosable?: boolean;
    dwMaskClosable?: boolean;
    dwMask?: boolean;
    dwTitle?: string | TemplateRef<{}>;
    dwContent?: TemplateRef<{
        $implicit: D;
        drawerRef: DwDrawerRef;
    }> | Type<T>;
    dwContentParams?: D;
    dwMaskStyle?: object;
    dwBodyStyle?: object;
    dwWrapClassName?: string;
    dwWidth?: number | string;
    dwHeight?: number | string;
    dwPlacement?: DwDrawerPlacement;
    dwZIndex?: number;
    dwOffsetX?: number;
    dwOffsetY?: number;
}

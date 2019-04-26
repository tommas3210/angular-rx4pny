import { InjectionToken } from '@angular/core';
export interface DwMessageConfig {
    dwDuration?: number;
    dwPauseOnHover?: boolean;
    dwAnimate?: boolean;
    dwMaxStack?: number;
    [index: string]: any;
}
export declare const DW_MESSAGE_DEFAULT_CONFIG: InjectionToken<DwMessageConfig>;
export declare const DW_MESSAGE_CONFIG: InjectionToken<DwMessageConfig>;
export declare const DW_MESSAGE_DEFAULT_CONFIG_PROVIDER: {
    provide: InjectionToken<DwMessageConfig>;
    useValue: {
        dwDuration: number;
        dwAnimate: boolean;
        dwPauseOnHover: boolean;
        dwMaxStack: number;
    };
};

import { InjectionToken } from '@angular/core';
import { DwMessageConfig } from '../message/dw-message-config';
export interface DwNotificationConfig extends DwMessageConfig {
    dwTop?: string;
    dwBottom?: string;
    dwPlacement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | string;
}
export declare const DW_NOTIFICATION_DEFAULT_CONFIG: InjectionToken<DwNotificationConfig>;
export declare const DW_NOTIFICATION_CONFIG: InjectionToken<DwNotificationConfig>;
export declare const DW_NOTIFICATION_DEFAULT_CONFIG_PROVIDER: {
    provide: InjectionToken<DwNotificationConfig>;
    useValue: {
        dwTop: string;
        dwBottom: string;
        dwPlacement: string;
        dwDuration: number;
        dwMaxStack: number;
        dwPauseOnHover: boolean;
        dwAnimate: boolean;
    };
};

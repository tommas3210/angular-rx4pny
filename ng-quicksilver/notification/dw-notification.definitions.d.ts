import { TemplateRef } from '@angular/core';
import { DwMessageData, DwMessageDataOptions } from '../message/dw-message.definitions';
export interface DwNotificationData extends DwMessageData {
    template?: TemplateRef<{}>;
    type?: 'success' | 'info' | 'warning' | 'error' | 'blank' | string;
    title?: string;
}
export interface DwNotificationDataOptions extends DwMessageDataOptions {
    dwStyle?: any;
    dwClass?: any;
}
export interface DwNotificationDataFilled extends DwNotificationData {
    messageId: string;
    state?: 'enter' | 'leave';
    options?: DwNotificationDataOptions;
    createdAt: Date;
}

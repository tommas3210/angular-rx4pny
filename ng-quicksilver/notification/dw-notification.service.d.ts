import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injector, TemplateRef } from '@angular/core';
import { DwMessageBaseService } from '../message/dw-message.service';
import { DwNotificationConfig } from './dw-notification-config';
import { DwNotificationContainerComponent } from './dw-notification-container.component';
import { DwNotificationData, DwNotificationDataFilled, DwNotificationDataOptions } from './dw-notification.definitions';
export declare class DwNotificationService extends DwMessageBaseService<DwNotificationContainerComponent, DwNotificationData, DwNotificationConfig> {
    constructor(overlay: Overlay, injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef);
    success(title: string, content: string, options?: DwNotificationDataOptions): DwNotificationDataFilled;
    error(title: string, content: string, options?: DwNotificationDataOptions): DwNotificationDataFilled;
    info(title: string, content: string, options?: DwNotificationDataOptions): DwNotificationDataFilled;
    warning(title: string, content: string, options?: DwNotificationDataOptions): DwNotificationDataFilled;
    blank(title: string, content: string, options?: DwNotificationDataOptions): DwNotificationDataFilled;
    create(type: 'success' | 'info' | 'warning' | 'error' | 'blank' | string, title: string, content: string, options?: DwNotificationDataOptions): DwNotificationDataFilled;
    template(template: TemplateRef<{}>, options?: DwNotificationDataOptions): DwNotificationDataFilled;
}

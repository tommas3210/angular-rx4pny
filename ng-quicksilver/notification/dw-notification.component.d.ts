import { DwMessageComponent } from '../message/dw-message.component';
import { DwNotificationContainerComponent } from './dw-notification-container.component';
import { DwNotificationDataFilled } from './dw-notification.definitions';
export declare class DwNotificationComponent extends DwMessageComponent {
    private container;
    dwMessage: DwNotificationDataFilled;
    constructor(container: DwNotificationContainerComponent);
    close(): void;
    readonly state: string;
}

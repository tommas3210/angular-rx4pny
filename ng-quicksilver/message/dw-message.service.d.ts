import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injector, Type } from '@angular/core';
import { DwMessageConfig } from './dw-message-config';
import { DwMessageContainerComponent } from './dw-message-container.component';
import { DwMessageData, DwMessageDataFilled, DwMessageDataOptions } from './dw-message.definitions';
export declare class DwMessageBaseService<ContainerClass extends DwMessageContainerComponent, MessageData, MessageConfig extends DwMessageConfig> {
    private overlay;
    private containerClass;
    private injector;
    private cfr;
    private appRef;
    private _idPrefix;
    protected _container: ContainerClass;
    constructor(overlay: Overlay, containerClass: Type<ContainerClass>, injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef, _idPrefix?: string);
    remove(messageId?: string): void;
    createMessage(message: MessageData, options?: DwMessageDataOptions): DwMessageDataFilled;
    config(config: MessageConfig): void;
    protected _generateMessageId(): string;
    private createContainer;
}
export declare class DwMessageService extends DwMessageBaseService<DwMessageContainerComponent, DwMessageData, DwMessageConfig> {
    constructor(overlay: Overlay, injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef);
    success(content: string, options?: DwMessageDataOptions): DwMessageDataFilled;
    error(content: string, options?: DwMessageDataOptions): DwMessageDataFilled;
    info(content: string, options?: DwMessageDataOptions): DwMessageDataFilled;
    warning(content: string, options?: DwMessageDataOptions): DwMessageDataFilled;
    loading(content: string, options?: DwMessageDataOptions): DwMessageDataFilled;
    create(type: 'success' | 'info' | 'warning' | 'error' | 'loading' | string, content: string, options?: DwMessageDataOptions): DwMessageDataFilled;
}

import { DwMessageConfig } from './dw-message-config';
import { DwMessageDataFilled, DwMessageDataOptions } from './dw-message.definitions';
export declare class DwMessageContainerComponent {
    messages: DwMessageDataFilled[];
    config: DwMessageConfig;
    constructor(defaultConfig: DwMessageConfig, config: DwMessageConfig);
    setConfig(config: DwMessageConfig): void;
    createMessage(message: DwMessageDataFilled): void;
    removeMessage(messageId: string): void;
    removeMessageAll(): void;
    protected _mergeMessageOptions(options: DwMessageDataOptions): DwMessageDataOptions;
}

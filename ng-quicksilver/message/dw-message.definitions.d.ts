export interface DwMessageDataOptions {
    dwDuration?: number;
    dwAnimate?: boolean;
    dwPauseOnHover?: boolean;
}
export interface DwMessageData {
    type?: 'success' | 'info' | 'warning' | 'error' | 'loading' | string;
    content?: string;
}
export interface DwMessageDataFilled extends DwMessageData {
    messageId: string;
    state?: 'enter' | 'leave';
    options?: DwMessageDataOptions;
    createdAt: Date;
}

import { OverlayRef } from '@angular/cdk/overlay';
import { EventEmitter, TemplateRef, Type } from '@angular/core';
export declare type OnClickCallback<T> = ((instance: T) => (false | void | {}) | Promise<false | void | {}>);
export declare type ModalType = 'default' | 'confirm';
export declare type ConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning';
export interface ModalOptions<T = any, R = any> {
    dwModalType?: ModalType;
    dwVisible?: boolean;
    dwZIndex?: number;
    dwWidth?: number | string;
    dwWrapClassName?: string;
    dwClassName?: string;
    dwStyle?: object;
    dwIconType?: string;
    dwTitle?: string | TemplateRef<{}>;
    dwContent?: string | TemplateRef<{}> | Type<T>;
    dwComponentParams?: Partial<T>;
    dwClosable?: boolean;
    dwMask?: boolean;
    dwMaskClosable?: boolean;
    dwMaskStyle?: object;
    dwBodyStyle?: object;
    dwFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>>;
    dwGetContainer?: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    dwAfterOpen?: EventEmitter<void>;
    dwAfterClose?: EventEmitter<R>;
    dwOkText?: string;
    dwOkType?: string;
    dwOkLoading?: boolean;
    dwOnOk?: EventEmitter<T> | OnClickCallback<T>;
    dwCancelText?: string;
    dwCancelLoading?: boolean;
    dwOnCancel?: EventEmitter<T> | OnClickCallback<T>;
}
export interface ModalOptionsForService<T = any> extends ModalOptions<T> {
    dwOnOk?: OnClickCallback<T>;
    dwOnCancel?: OnClickCallback<T>;
}
export interface ModalButtonOptions<T = any> {
    label: string;
    type?: string;
    shape?: string;
    ghost?: boolean;
    size?: string;
    autoLoading?: boolean;
    show?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    loading?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    disabled?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    onClick?(this: ModalButtonOptions<T>, contentComponentInstance?: T): (void | {}) | Promise<(void | {})>;
}

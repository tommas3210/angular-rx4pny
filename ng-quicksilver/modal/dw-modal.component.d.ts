import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DwMeasureScrollbarService } from '../core/services/dw-measure-scrollbar.service';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { DwModalConfig } from './dw-modal-config';
import { DwModalControlService } from './dw-modal-control.service';
import { DwModalRef } from './dw-modal-ref.class';
import { ModalButtonOptions, ModalOptions, ModalType, OnClickCallback } from './dw-modal.type';
export declare const MODAL_ANIMATE_DURATION = 200;
export declare class DwModalComponent<T = any, R = any> extends DwModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, ModalOptions<T> {
    private overlay;
    private i18n;
    private renderer;
    private cfr;
    private elementRef;
    private viewContainer;
    private dwMeasureScrollbarService;
    private modalControl;
    private config;
    private document;
    private unsubscribe$;
    locale: any;
    dwModalType: ModalType;
    dwContent: string | TemplateRef<{}> | Type<T>;
    dwComponentParams: T;
    dwFooter: string | TemplateRef<{}> | Array<ModalButtonOptions<T>>;
    dwGetContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    dwVisible: boolean;
    dwVisibleChange: EventEmitter<boolean>;
    dwZIndex: number;
    dwWidth: number | string;
    dwWrapClassName: string;
    dwClassName: string;
    dwStyle: object;
    dwIconType: string;
    dwTitle: string | TemplateRef<{}>;
    dwClosable: boolean;
    dwMask: boolean;
    dwMaskClosable: boolean;
    dwMaskStyle: object;
    dwBodyStyle: object;
    dwAfterOpen: EventEmitter<void>;
    dwAfterClose: EventEmitter<R>;
    readonly afterOpen: Observable<void>;
    readonly afterClose: Observable<R>;
    dwOkText: string;
    readonly okText: string;
    dwOkType: string;
    dwOkLoading: boolean;
    dwOnOk: EventEmitter<T> | OnClickCallback<T>;
    autoFocusButtonOk: ElementRef;
    dwCancelText: string;
    readonly cancelText: string;
    dwCancelLoading: boolean;
    dwOnCancel: EventEmitter<T> | OnClickCallback<T>;
    modalContainer: ElementRef;
    bodyContainer: ViewContainerRef;
    readonly hidden: boolean;
    maskAnimationClassMap: object;
    modalAnimationClassMap: object;
    transformOrigin: string;
    private contentComponentRef;
    private animationState;
    private container;
    constructor(overlay: Overlay, i18n: DwI18nService, renderer: Renderer2, cfr: ComponentFactoryResolver, elementRef: ElementRef, viewContainer: ViewContainerRef, dwMeasureScrollbarService: DwMeasureScrollbarService, modalControl: DwModalControlService, config: DwModalConfig, document: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getInstance(): DwModalComponent;
    getContentComponentRef(): ComponentRef<T>;
    getContentComponent(): T;
    getElement(): HTMLElement;
    onClickMask($event: MouseEvent): void;
    isModalType(type: ModalType): boolean;
    onClickCloseBtn(): void;
    onClickOkCancel(type: 'ok' | 'cancel'): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    isComponent(value: {}): boolean;
    isModalButtons(value: {}): boolean;
    private handleVisibleStateChange;
    getButtonCallableProp(options: ModalButtonOptions<T>, prop: string): {};
    onButtonClick(button: ModalButtonOptions<T>): void;
    private changeVisibleFromInside;
    private changeAnimationState;
    private animateTo;
    private formatModalButtons;
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    private createDynamicComponent;
    private updateTransformOrigin;
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param plusNum The number that the openModals.length will increase soon
     */
    private changeBodyOverflow;
    /**
     * Check whether the body element is able to has the scroll bar (if the body content height exceeds the window's height)
     * Exceptional Cases: users can show the scroll bar by their own permanently (eg. overflow: scroll)
     */
    private hasBodyScrollBar;
    private mergeDefaultConfig;
}

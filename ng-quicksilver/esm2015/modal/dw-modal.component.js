/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, ComponentFactoryResolver, ElementRef, EventEmitter, Inject, Injector, Input, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DwMeasureScrollbarService } from '../core/services/dw-measure-scrollbar.service';
import { InputBoolean } from '../core/util/convert';
import { DwI18nService } from '../i18n/dw-i18n.service';
import ModalUtil from './modal-util';
import { DW_MODAL_CONFIG, DW_MODAL_DEFAULT_CONFIG } from './dw-modal-config';
import { DwModalControlService } from './dw-modal-control.service';
import { DwModalRef } from './dw-modal-ref.class';
/** @type {?} */
export const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
/**
 * @template T, R
 */
// tslint:disable-next-line:no-any
export class DwModalComponent extends DwModalRef {
    /**
     * @param {?} overlay
     * @param {?} i18n
     * @param {?} renderer
     * @param {?} cfr
     * @param {?} elementRef
     * @param {?} viewContainer
     * @param {?} dwMeasureScrollbarService
     * @param {?} modalControl
     * @param {?} config
     * @param {?} document
     */
    constructor(overlay, i18n, renderer, cfr, elementRef, viewContainer, dwMeasureScrollbarService, modalControl, config, document) {
        // tslint:disable-line:no-any
        super();
        this.overlay = overlay;
        this.i18n = i18n;
        this.renderer = renderer;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.dwMeasureScrollbarService = dwMeasureScrollbarService;
        this.modalControl = modalControl;
        this.config = config;
        this.document = document;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.dwModalType = 'default';
        this.dwGetContainer = () => this.overlay.create();
        this.dwVisible = false;
        this.dwVisibleChange = new EventEmitter();
        this.dwZIndex = 1000;
        this.dwWidth = 520;
        this.dwIconType = 'question-circle';
        this.dwClosable = true;
        this.dwMask = true;
        this.dwMaskClosable = true;
        this.dwAfterOpen = new EventEmitter();
        this.dwAfterClose = new EventEmitter();
        this.dwOkType = 'primary';
        this.dwOkLoading = false;
        this.dwOnOk = new EventEmitter();
        this.dwCancelLoading = false;
        this.dwOnCancel = new EventEmitter();
        this.transformOrigin = '0px 0px 0px';
        this.config = this.mergeDefaultConfig(this.config);
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        // Observable alias for dwAfterOpen
        return this.dwAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        // Observable alias for dwAfterClose
        return this.dwAfterClose.asObservable();
    }
    /**
     * @return {?}
     */
    get okText() {
        return this.dwOkText || this.locale.okText;
    }
    /**
     * @return {?}
     */
    get cancelText() {
        return this.dwCancelText || this.locale.cancelText;
    }
    /**
     * @return {?}
     */
    get hidden() {
        return !this.dwVisible && !this.animationState;
    } // Indicate whether this dialog should hidden
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Modal'));
        if (this.isComponent(this.dwContent)) {
            this.createDynamicComponent(/** @type {?} */ (this.dwContent)); // Create component along without View
        }
        if (this.isModalButtons(this.dwFooter)) { // Setup default button options
            // Setup default button options
            this.dwFooter = this.formatModalButtons(/** @type {?} */ (this.dwFooter));
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.dwGetContainer === 'function' ? this.dwGetContainer() : this.dwGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
        }
        else if (this.container instanceof OverlayRef) { // NOTE: only attach the dom to overlay, the view container is not changed actually
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["dwVisible"]) {
            this.handleVisibleStateChange(this.dwVisible, !changes["dwVisible"].firstChange); // Do not trigger animation while initializing
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            (/** @type {?} */ (this.autoFocusButtonOk.nativeElement)).focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Close self before destructing
        this.changeVisibleFromInside(false).then(() => {
            this.modalControl.deregisterModal(this);
            if (this.container instanceof OverlayRef) {
                this.container.dispose();
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    /**
     * @return {?}
     */
    open() {
        this.changeVisibleFromInside(true);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    /**
     * @return {?}
     */
    getInstance() {
        return this;
    }
    /**
     * @return {?}
     */
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClickMask($event) {
        if (this.dwMask &&
            this.dwMaskClosable &&
            (/** @type {?} */ ($event.target)).classList.contains('ant-modal-wrap') &&
            this.dwVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isModalType(type) {
        return this.dwModalType === type;
    }
    /**
     * @return {?}
     */
    onClickCloseBtn() {
        if (this.dwVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    onClickOkCancel(type) {
        /** @type {?} */
        const trigger = { 'ok': this.dwOnOk, 'cancel': this.dwOnCancel }[type];
        /** @type {?} */
        const loadingKey = { 'ok': 'dwOkLoading', 'cancel': 'dwCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            const result = trigger(this.getContentComponent());
            /** @type {?} */
            const caseClose = (doClose) => (doClose !== false) && this.close(/** @type {?} */ (doClose)); // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                /** @type {?} */
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                (/** @type {?} */ (result)).then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isComponent(value) {
        return value instanceof Type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    /**
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    handleVisibleStateChange(visible, animation = true, closeResult) {
        if (visible) { // Hide scrollbar at the first time when shown up
            // Hide scrollbar at the first time when shown up
            this.changeBodyOverflow(1);
        }
        return Promise
            .resolve(animation && this.animateTo(visible))
            .then(() => {
            // Emit open/close event after animations over
            if (visible) {
                this.dwAfterOpen.emit();
            }
            else {
                this.dwAfterClose.emit(closeResult);
                this.changeBodyOverflow(); // Show/hide scrollbar when animation is over
            }
        });
        // .then(() => this.changeBodyOverflow());
    }
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    getButtonCallableProp(options, prop) {
        /** @type {?} */
        const value = options[prop];
        /** @type {?} */
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    /**
     * @param {?} button
     * @return {?}
     */
    onButtonClick(button) {
        /** @type {?} */
        const result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            (/** @type {?} */ (result)).then(() => button.loading = false).catch(() => button.loading = false);
        }
    }
    /**
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    changeVisibleFromInside(visible, closeResult) {
        if (this.dwVisible !== visible) {
            // Change dwVisible value immediately
            this.dwVisible = visible;
            this.dwVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    /**
     * @param {?} isVisible
     * @return {?}
     */
    animateTo(isVisible) {
        if (isVisible) { // Figure out the lastest click position when shows up
            // Figure out the lastest click position when shows up
            window.setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise((resolve) => window.setTimeout(() => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }, MODAL_ANIMATE_DURATION));
    }
    /**
     * @param {?} buttons
     * @return {?}
     */
    formatModalButtons(buttons) {
        return buttons.map((button) => {
            /** @type {?} */
            const mixedButton = Object.assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
            // if (mixedButton.autoLoading) { mixedButton.loading = false; } // Force loading to false when autoLoading=true
            return mixedButton;
        });
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param {?} component Component class
     * @return {?}
     */
    createDynamicComponent(component) {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(component);
        /** @type {?} */
        const childInjector = Injector.create({
            providers: [{ provide: DwModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.dwComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.dwComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    updateTransformOrigin() {
        /** @type {?} */
        const modalElement = /** @type {?} */ (this.modalContainer.nativeElement);
        /** @type {?} */
        const lastPosition = ModalUtil.getLastClickPosition();
        if (lastPosition) {
            this.transformOrigin = `${lastPosition.x - modalElement.offsetLeft}px ${lastPosition.y - modalElement.offsetTop}px 0px`;
        }
        // else {
        //   this.transformOrigin = '0px 0px 0px';
        // }
    }
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param {?=} plusNum The number that the openModals.length will increase soon
     * @return {?}
     */
    changeBodyOverflow(plusNum = 0) {
        if (this.config.autoBodyPadding) {
            /** @type {?} */
            const openModals = this.modalControl.openModals;
            if (openModals.length + plusNum > 0) {
                if (this.hasBodyScrollBar()) { // Adding padding-right only when body's scrollbar is able to shown up
                    // Adding padding-right only when body's scrollbar is able to shown up
                    this.renderer.setStyle(this.document.body, 'padding-right', `${this.dwMeasureScrollbarService.scrollBarWidth}px`);
                    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
                }
            }
            else { // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                this.renderer.removeStyle(this.document.body, 'padding-right');
                this.renderer.removeStyle(this.document.body, 'overflow');
            }
        }
    }
    /**
     * Check whether the body element is able to has the scroll bar (if the body content height exceeds the window's height)
     * Exceptional Cases: users can show the scroll bar by their own permanently (eg. overflow: scroll)
     * @return {?}
     */
    hasBodyScrollBar() {
        return this.document.body.scrollHeight > (window.innerHeight || this.document.documentElement.clientHeight);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    mergeDefaultConfig(config) {
        return Object.assign({}, DW_MODAL_DEFAULT_CONFIG, config);
    }
}
DwModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-modal',
                template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\n\n<div>\n  <div *ngIf=\"dwMask\"\n    class=\"ant-modal-mask\"\n    [ngClass]=\"maskAnimationClassMap\"\n    [class.ant-modal-mask-hidden]=\"hidden\"\n    [ngStyle]=\"dwMaskStyle\"\n    [style.zIndex]=\"dwZIndex\"\n  ></div>\n  <div\n    (click)=\"onClickMask($event)\"\n    class=\"ant-modal-wrap {{ dwWrapClassName }}\"\n    [style.zIndex]=\"dwZIndex\"\n    [style.display]=\"hidden ? 'none' : ''\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n  >\n    <div #modalContainer\n      class=\"ant-modal {{ dwClassName }}\"\n      [ngClass]=\"modalAnimationClassMap\"\n      [ngStyle]=\"dwStyle\"\n      [style.width]=\"dwWidth | toCssUnit\"\n      [style.transform-origin]=\"transformOrigin\"\n      role=\"document\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"dwClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\n          <span class=\"ant-modal-close-x\"></span>\n        </button>\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinel</div>\n  </div>\n</div>\n\n<!-- [Predefined] Default Modal Content -->\n<ng-template #tplContentDefault>\n  <div *ngIf=\"dwTitle\" class=\"ant-modal-header\">\n    <div class=\"ant-modal-title\">\n      <ng-container [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(dwTitle)\" [ngTemplateOutlet]=\"dwTitle\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(dwTitle)\"><div [innerHTML]=\"dwTitle\"></div></ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"ant-modal-body\" [ngStyle]=\"dwBodyStyle\">\n    <ng-container #bodyContainer>\n      <ng-container *ngIf=\"!isComponent(dwContent)\" [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(dwContent)\" [ngTemplateOutlet]=\"dwContent\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(dwContent)\"><div [innerHTML]=\"dwContent\"></div></ng-container>\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div *ngIf=\"dwFooter !== null\" class=\"ant-modal-footer\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(dwFooter)\" [ngTemplateOutlet]=\"dwFooter\"></ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(dwFooter)\"><div [innerHTML]=\"dwFooter\"></div></ng-container>\n      <ng-container *ngSwitchCase=\"isModalButtons(dwFooter)\">\n        <button *ngFor=\"let button of dwFooter\" dw-button\n          (click)=\"onButtonClick(button)\"\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\n          [dwLoading]=\"getButtonCallableProp(button, 'loading')\"\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n          [dwType]=\"button.type\"\n          [dwShape]=\"button.shape\"\n          [dwSize]=\"button.size\"\n          [dwGhost]=\"button.ghost\"\n        >{{ button.label }}</button>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button *ngIf=\"dwCancelText!==null\" dw-button (click)=\"onClickOkCancel('cancel')\" [dwLoading]=\"dwCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"dwOkText!==null\" dw-button [dwType]=\"dwOkType\" (click)=\"onClickOkCancel('ok')\" [dwLoading]=\"dwOkLoading\">\n          {{ okText }}\n        </button>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-template>\n<!-- /[Predefined] Default Modal Content -->\n\n<!-- [Predefined] Confirm Modal Content -->\n<ng-template #tplContentConfirm>\n  <div class=\"ant-modal-body\" [ngStyle]=\"dwBodyStyle\">\n    <div class=\"ant-confirm-body-wrapper\">\n      <div class=\"ant-confirm-body\">\n        <i class=\"anticon anticon-{{ dwIconType }}\"></i>\n        <span class=\"ant-confirm-title\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"isTemplateRef(dwTitle)\" [ngTemplateOutlet]=\"dwTitle\"></ng-container>\n            <ng-container *ngSwitchCase=\"isNonEmptyString(dwTitle)\"><span [innerHTML]=\"dwTitle\"></span></ng-container>\n          </ng-container>\n        </span>\n        <div class=\"ant-confirm-content\">\n          <ng-container #bodyContainer>\n            <ng-container *ngIf=\"!isComponent(dwContent)\" [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(dwContent)\" [ngTemplateOutlet]=\"dwContent\"></ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(dwContent)\"><div [innerHTML]=\"dwContent\"></div></ng-container>\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"ant-confirm-btns\">\n        <button dw-button *ngIf=\"dwCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [dwLoading]=\"dwCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"dwOkText!==null\" #autoFocusButtonOk dw-button [dwType]=\"dwOkType\" (click)=\"onClickOkCancel('ok')\" [dwLoading]=\"dwOkLoading\">\n          {{ okText }}\n        </button>\n      </div>\n    </div> <!-- /.ant-confirm-body-wrapper -->\n  </div>\n</ng-template>\n<!-- /[Predefined] Confirm Modal Content -->\n"
            }] }
];
/** @nocollapse */
DwModalComponent.ctorParameters = () => [
    { type: Overlay },
    { type: DwI18nService },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: DwMeasureScrollbarService },
    { type: DwModalControlService },
    { type: undefined, decorators: [{ type: Inject, args: [DW_MODAL_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
DwModalComponent.propDecorators = {
    dwModalType: [{ type: Input }],
    dwContent: [{ type: Input }],
    dwComponentParams: [{ type: Input }],
    dwFooter: [{ type: Input }],
    dwGetContainer: [{ type: Input }],
    dwVisible: [{ type: Input }],
    dwVisibleChange: [{ type: Output }],
    dwZIndex: [{ type: Input }],
    dwWidth: [{ type: Input }],
    dwWrapClassName: [{ type: Input }],
    dwClassName: [{ type: Input }],
    dwStyle: [{ type: Input }],
    dwIconType: [{ type: Input }],
    dwTitle: [{ type: Input }],
    dwClosable: [{ type: Input }],
    dwMask: [{ type: Input }],
    dwMaskClosable: [{ type: Input }],
    dwMaskStyle: [{ type: Input }],
    dwBodyStyle: [{ type: Input }],
    dwAfterOpen: [{ type: Output }],
    dwAfterClose: [{ type: Output }],
    dwOkText: [{ type: Input }],
    dwOkType: [{ type: Input }],
    dwOkLoading: [{ type: Input }],
    dwOnOk: [{ type: Input }, { type: Output }],
    autoFocusButtonOk: [{ type: ViewChild, args: ['autoFocusButtonOk', { read: ElementRef },] }],
    dwCancelText: [{ type: Input }],
    dwCancelLoading: [{ type: Input }],
    dwOnCancel: [{ type: Input }, { type: Output }],
    modalContainer: [{ type: ViewChild, args: ['modalContainer',] }],
    bodyContainer: [{ type: ViewChild, args: ['bodyContainer', { read: ViewContainerRef },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DwModalComponent.prototype, "dwVisible", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DwModalComponent.prototype, "dwClosable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DwModalComponent.prototype, "dwMask", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DwModalComponent.prototype, "dwMaskClosable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DwModalComponent.prototype, "dwOkLoading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DwModalComponent.prototype, "dwCancelLoading", void 0);
function DwModalComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwModalComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwModalComponent.prototype.locale;
    /** @type {?} */
    DwModalComponent.prototype.dwModalType;
    /** @type {?} */
    DwModalComponent.prototype.dwContent;
    /** @type {?} */
    DwModalComponent.prototype.dwComponentParams;
    /** @type {?} */
    DwModalComponent.prototype.dwFooter;
    /** @type {?} */
    DwModalComponent.prototype.dwGetContainer;
    /** @type {?} */
    DwModalComponent.prototype.dwVisible;
    /** @type {?} */
    DwModalComponent.prototype.dwVisibleChange;
    /** @type {?} */
    DwModalComponent.prototype.dwZIndex;
    /** @type {?} */
    DwModalComponent.prototype.dwWidth;
    /** @type {?} */
    DwModalComponent.prototype.dwWrapClassName;
    /** @type {?} */
    DwModalComponent.prototype.dwClassName;
    /** @type {?} */
    DwModalComponent.prototype.dwStyle;
    /** @type {?} */
    DwModalComponent.prototype.dwIconType;
    /** @type {?} */
    DwModalComponent.prototype.dwTitle;
    /** @type {?} */
    DwModalComponent.prototype.dwClosable;
    /** @type {?} */
    DwModalComponent.prototype.dwMask;
    /** @type {?} */
    DwModalComponent.prototype.dwMaskClosable;
    /** @type {?} */
    DwModalComponent.prototype.dwMaskStyle;
    /** @type {?} */
    DwModalComponent.prototype.dwBodyStyle;
    /** @type {?} */
    DwModalComponent.prototype.dwAfterOpen;
    /** @type {?} */
    DwModalComponent.prototype.dwAfterClose;
    /** @type {?} */
    DwModalComponent.prototype.dwOkText;
    /** @type {?} */
    DwModalComponent.prototype.dwOkType;
    /** @type {?} */
    DwModalComponent.prototype.dwOkLoading;
    /** @type {?} */
    DwModalComponent.prototype.dwOnOk;
    /** @type {?} */
    DwModalComponent.prototype.autoFocusButtonOk;
    /** @type {?} */
    DwModalComponent.prototype.dwCancelText;
    /** @type {?} */
    DwModalComponent.prototype.dwCancelLoading;
    /** @type {?} */
    DwModalComponent.prototype.dwOnCancel;
    /** @type {?} */
    DwModalComponent.prototype.modalContainer;
    /** @type {?} */
    DwModalComponent.prototype.bodyContainer;
    /** @type {?} */
    DwModalComponent.prototype.maskAnimationClassMap;
    /** @type {?} */
    DwModalComponent.prototype.modalAnimationClassMap;
    /** @type {?} */
    DwModalComponent.prototype.transformOrigin;
    /** @type {?} */
    DwModalComponent.prototype.contentComponentRef;
    /** @type {?} */
    DwModalComponent.prototype.animationState;
    /** @type {?} */
    DwModalComponent.prototype.container;
    /** @type {?} */
    DwModalComponent.prototype.overlay;
    /** @type {?} */
    DwModalComponent.prototype.i18n;
    /** @type {?} */
    DwModalComponent.prototype.renderer;
    /** @type {?} */
    DwModalComponent.prototype.cfr;
    /** @type {?} */
    DwModalComponent.prototype.elementRef;
    /** @type {?} */
    DwModalComponent.prototype.viewContainer;
    /** @type {?} */
    DwModalComponent.prototype.dwMeasureScrollbarService;
    /** @type {?} */
    DwModalComponent.prototype.modalControl;
    /** @type {?} */
    DwModalComponent.prototype.config;
    /** @type {?} */
    DwModalComponent.prototype.document;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof (/** @type {?} */ (obj)).then === 'function' && typeof (/** @type {?} */ (obj)).catch === 'function';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtb2RhbC9kdy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsU0FBUyxFQUNULHdCQUF3QixFQUV4QixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBaUIsZUFBZSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUdsRCxhQUFhLHNCQUFzQixHQUFHLEdBQUcsQ0FBQzs7OztBQUkxQztBQU1BLE1BQU0sdUJBQTBDLFNBQVEsVUFBZ0I7Ozs7Ozs7Ozs7Ozs7SUFzRXRFLFlBQ1UsU0FD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LE9BQU8sbUJBQUMsR0FBa0IsRUFBQyxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksT0FBTyxtQkFBQyxHQUFrQixFQUFDLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUMvSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy9kdy1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vZHctaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IE1vZGFsVXRpbCBmcm9tICcuL21vZGFsLXV0aWwnO1xuaW1wb3J0IHsgRHdNb2RhbENvbmZpZywgRFdfTU9EQUxfQ09ORklHLCBEV19NT0RBTF9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vZHctbW9kYWwtY29uZmlnJztcbmltcG9ydCB7IER3TW9kYWxDb250cm9sU2VydmljZSB9IGZyb20gJy4vZHctbW9kYWwtY29udHJvbC5zZXJ2aWNlJztcbmltcG9ydCB7IER3TW9kYWxSZWYgfSBmcm9tICcuL2R3LW1vZGFsLXJlZi5jbGFzcyc7XG5pbXBvcnQgeyBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsT3B0aW9ucywgTW9kYWxUeXBlLCBPbkNsaWNrQ2FsbGJhY2sgfSBmcm9tICcuL2R3LW1vZGFsLnR5cGUnO1xuXG5leHBvcnQgY29uc3QgTU9EQUxfQU5JTUFURV9EVVJBVElPTiA9IDIwMDsgLy8gRHVyYXRpb24gd2hlbiBwZXJmb3JtIGFuaW1hdGlvbnMgKG1zKVxuXG50eXBlIEFuaW1hdGlvblN0YXRlID0gJ2VudGVyJyB8ICdsZWF2ZScgfCBudWxsO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkdy1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy1tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjbGFzcyBEd01vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgRHdNb2RhbFJlZjxULCBSPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE1vZGFsT3B0aW9uczxUPiB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG4gIEBJbnB1dCgpIGR3TW9kYWxUeXBlOiBNb2RhbFR5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGR3Q29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgVHlwZTxUPjsgLy8gW1NUQVRJQ10gSWYgbm90IHNwZWNpZmllZCwgd2lsbCB1c2UgPG5nLWNvbnRlbnQ+XG4gIEBJbnB1dCgpIGR3Q29tcG9uZW50UGFyYW1zOiBUOyAvLyBbU1RBVElDXSBPTkxZIGF2YWxpYWJsZSB3aGVuIGR3Q29udGVudCBpcyBhIGNvbXBvbmVudFxuICBASW5wdXQoKSBkd0Zvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+IHwgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PjsgLy8gW1NUQVRJQ10gRGVmYXVsdCBNb2RhbCBPTkxZXG4gIEBJbnB1dCgpIGR3R2V0Q29udGFpbmVyOiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYgfCAoKCkgPT4gSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmKSA9ICgpID0+IHRoaXMub3ZlcmxheS5jcmVhdGUoKTsgLy8gW1NUQVRJQ11cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBkd1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgZHdaSW5kZXg6IG51bWJlciA9IDEwMDA7XG4gIEBJbnB1dCgpIGR3V2lkdGg6IG51bWJlciB8IHN0cmluZyA9IDUyMDtcbiAgQElucHV0KCkgZHdXcmFwQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3U3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgZHdJY29uVHlwZTogc3RyaW5nID0gJ3F1ZXN0aW9uLWNpcmNsZSc7IC8vIENvbmZpcm0gTW9kYWwgT05MWVxuICBASW5wdXQoKSBkd1RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0Nsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3TWFzazogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd01hc2tDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGR3TWFza1N0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIGR3Qm9keVN0eWxlOiBvYmplY3Q7XG5cbiAgQE91dHB1dCgpIGR3QWZ0ZXJPcGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgb3Blbih2aXNpYmxlKSBhZnRlciBhbmltYXRpb25zXG4gIEBPdXRwdXQoKSBkd0FmdGVyQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPFI+KCk7IC8vIFRyaWdnZXIgd2hlbiBtb2RhbCBsZWF2ZS1hbmltYXRpb24gb3ZlclxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4geyAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBkd0FmdGVyT3BlblxuICAgIHJldHVybiB0aGlzLmR3QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7IC8vIE9ic2VydmFibGUgYWxpYXMgZm9yIGR3QWZ0ZXJDbG9zZVxuICAgIHJldHVybiB0aGlzLmR3QWZ0ZXJDbG9zZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8vIC0tLSBQcmVkZWZpbmVkIE9LICYgQ2FuY2VsIGJ1dHRvbnNcbiAgQElucHV0KCkgZHdPa1RleHQ6IHN0cmluZztcblxuICBnZXQgb2tUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZHdPa1RleHQgfHwgdGhpcy5sb2NhbGUub2tUZXh0O1xuICB9XG5cbiAgQElucHV0KCkgZHdPa1R5cGUgPSAncHJpbWFyeSc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd09rTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAT3V0cHV0KCkgZHdPbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ2F1dG9Gb2N1c0J1dHRvbk9rJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGF1dG9Gb2N1c0J1dHRvbk9rOiBFbGVtZW50UmVmOyAvLyBPbmx5IGFpbSB0byBmb2N1cyB0aGUgb2sgYnV0dG9uIHRoYXQgbmVlZHMgdG8gYmUgYXV0byBmb2N1c2VkXG4gIEBJbnB1dCgpIGR3Q2FuY2VsVGV4dDogc3RyaW5nO1xuXG4gIGdldCBjYW5jZWxUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZHdDYW5jZWxUZXh0IHx8IHRoaXMubG9jYWxlLmNhbmNlbFRleHQ7XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdDYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBPdXRwdXQoKSBkd09uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJykgbW9kYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JvZHlDb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgYm9keUNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5kd1Zpc2libGUgJiYgIXRoaXMuYW5pbWF0aW9uU3RhdGU7XG4gIH0gLy8gSW5kaWNhdGUgd2hldGhlciB0aGlzIGRpYWxvZyBzaG91bGQgaGlkZGVuXG4gIG1hc2tBbmltYXRpb25DbGFzc01hcDogb2JqZWN0O1xuICBtb2RhbEFuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3Q7XG4gIHRyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4IDBweCc7IC8vIFRoZSBvcmlnaW4gcG9pbnQgdGhhdCBhbmltYXRpb24gYmFzZWQgb25cblxuICBwcml2YXRlIGNvbnRlbnRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjsgLy8gSGFuZGxlIHRoZSByZWZlcmVuY2Ugd2hlbiB1c2luZyBkd0NvbnRlbnQgYXMgQ29tcG9uZW50XG4gIHByaXZhdGUgYW5pbWF0aW9uU3RhdGU6IEFuaW1hdGlvblN0YXRlOyAvLyBDdXJyZW50IGFuaW1hdGlvbiBzdGF0ZVxuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGkxOG46IER3STE4blNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGR3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2U6IER3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbENvbnRyb2w6IER3TW9kYWxDb250cm9sU2VydmljZSxcbiAgICBASW5qZWN0KERXX01PREFMX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IER3TW9kYWxDb25maWcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLm1lcmdlRGVmYXVsdENvbmZpZyh0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJykpO1xuXG4gICAgaWYgKHRoaXMuaXNDb21wb25lbnQodGhpcy5kd0NvbnRlbnQpKSB7XG4gICAgICB0aGlzLmNyZWF0ZUR5bmFtaWNDb21wb25lbnQodGhpcy5kd0NvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5kd0Zvb3RlcikpIHsgLy8gU2V0dXAgZGVmYXVsdCBidXR0b24gb3B0aW9uc1xuICAgICAgdGhpcy5kd0Zvb3RlciA9IHRoaXMuZm9ybWF0TW9kYWxCdXR0b25zKHRoaXMuZHdGb290ZXIgYXMgQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik7XG4gICAgfVxuXG4gICAgLy8gUGxhY2UgdGhlIG1vZGFsIGRvbSB0byBlbHNld2hlcmVcbiAgICB0aGlzLmNvbnRhaW5lciA9IHR5cGVvZiB0aGlzLmR3R2V0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nID8gdGhpcy5kd0dldENvbnRhaW5lcigpIDogdGhpcy5kd0dldENvbnRhaW5lcjtcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7IC8vIE5PVEU6IG9ubHkgYXR0YWNoIHRoZSBkb20gdG8gb3ZlcmxheSwgdGhlIHZpZXcgY29udGFpbmVyIGlzIG5vdCBjaGFuZ2VkIGFjdHVhbGx5XG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgbW9kYWwgd2hlbiBhZnRlck9wZW4vYWZ0ZXJDbG9zZSBpcyBzdGFibGVcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5yZWdpc3Rlck1vZGFsKHRoaXMpO1xuICB9XG5cbiAgLy8gW05PVEVdIE5PVCBhdmFpbGFibGUgd2hlbiB1c2luZyBieSBzZXJ2aWNlIVxuICAvLyBCZWNhdXNlIG5nT25DaGFuZ2VzIG5ldmVyIGJlIGNhbGxlZCB3aGVuIHVzaW5nIGJ5IHNlcnZpY2UsXG4gIC8vIGhlcmUgd2UgY2FuJ3Qgc3VwcG9ydCBcImR3Q29udGVudFwiKENvbXBvbmVudCkgZXRjLiBhcyBpbnB1dHMgdGhhdCBpbml0aWFsaXplZCBkeW5hbWljYWxseS5cbiAgLy8gQlVUOiBVc2VyIGFsc28gY2FuIGNoYW5nZSBcImR3Q29udGVudFwiIGR5bmFtaWNhbGx5IHRvIHRyaWdnZXIgVUkgY2hhbmdlcyAocHJvdmlkZWQgeW91IGRvbid0IHVzZSBcYkNvbXBvbmVudCB0aGF0IG5lZWRzIGluaXRpYWxpemF0aW9ucylcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmR3VmlzaWJsZSkge1xuICAgICAgdGhpcy5oYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodGhpcy5kd1Zpc2libGUsICFjaGFuZ2VzLmR3VmlzaWJsZS5maXJzdENoYW5nZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGFuaW1hdGlvbiB3aGlsZSBpbml0aWFsaXppbmdcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gSWYgdXNpbmcgQ29tcG9uZW50LCBpdCBpcyB0aGUgdGltZSB0byBhdHRhY2ggVmlldyB3aGlsZSBib2R5Q29udGFpbmVyIGlzIHJlYWR5XG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgdGhpcy5ib2R5Q29udGFpbmVyLmluc2VydCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1c0J1dHRvbk9rKSB7XG4gICAgICAodGhpcy5hdXRvRm9jdXNCdXR0b25Pay5uYXRpdmVFbGVtZW50IGFzIEhUTUxCdXR0b25FbGVtZW50KS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIENsb3NlIHNlbGYgYmVmb3JlIGRlc3RydWN0aW5nXG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZShmYWxzZSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lciBpbnN0YW5jZW9mIE92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHRydWUpO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UsIHJlc3VsdCk7XG4gIH1cblxuICBkZXN0cm95KHJlc3VsdD86IFIpOiB2b2lkIHsgLy8gRGVzdHJveSBlcXVhbHMgQ2xvc2VcbiAgICB0aGlzLmNsb3NlKHJlc3VsdCk7XG4gIH1cblxuICB0cmlnZ2VyT2soKTogdm9pZCB7XG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ29rJyk7XG4gIH1cblxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcbiAgfVxuXG4gIGdldEluc3RhbmNlKCk6IER3TW9kYWxDb21wb25lbnQge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q29udGVudENvbXBvbmVudFJlZigpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWY7XG4gIH1cblxuICBnZXRDb250ZW50Q29tcG9uZW50KCk6IFQge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xuICB9XG5cbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZiAmJiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG9uQ2xpY2tNYXNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZHdNYXNrICYmXG4gICAgICB0aGlzLmR3TWFza0Nsb3NhYmxlICYmXG4gICAgICAoJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnQtbW9kYWwtd3JhcCcpICYmXG4gICAgICB0aGlzLmR3VmlzaWJsZVxuICAgICkge1xuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xuICAgIH1cbiAgfVxuXG4gIGlzTW9kYWxUeXBlKHR5cGU6IE1vZGFsVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3TW9kYWxUeXBlID09PSB0eXBlO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tDbG9zZUJ0bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd1Zpc2libGUpIHtcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25DbGlja09rQ2FuY2VsKHR5cGU6ICdvaycgfCAnY2FuY2VsJyk6IHZvaWQge1xuICAgIGNvbnN0IHRyaWdnZXIgPSB7ICdvayc6IHRoaXMuZHdPbk9rLCAnY2FuY2VsJzogdGhpcy5kd09uQ2FuY2VsIH1bIHR5cGUgXTtcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyAnb2snOiAnZHdPa0xvYWRpbmcnLCAnY2FuY2VsJzogJ2R3Q2FuY2VsTG9hZGluZycgfVsgdHlwZSBdO1xuICAgIGlmICh0cmlnZ2VyIGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICB0cmlnZ2VyLmVtaXQodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyaWdnZXIodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xuICAgICAgY29uc3QgY2FzZUNsb3NlID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IChkb0Nsb3NlICE9PSBmYWxzZSkgJiYgdGhpcy5jbG9zZShkb0Nsb3NlIGFzIFIpOyAvLyBVc2VycyBjYW4gcmV0dXJuIFwiZmFsc2VcIiB0byBwcmV2ZW50IGNsb3NpbmcgYnkgZGVmYXVsdFxuICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHRoaXNbIGxvYWRpbmdLZXkgXSA9IHRydWU7XG4gICAgICAgIGNvbnN0IGhhbmRsZVRoZW4gPSAoZG9DbG9zZSkgPT4ge1xuICAgICAgICAgIHRoaXNbIGxvYWRpbmdLZXkgXSA9IGZhbHNlO1xuICAgICAgICAgIGNhc2VDbG9zZShkb0Nsb3NlKTtcbiAgICAgICAgfTtcbiAgICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHZvaWQ+KS50aGVuKGhhbmRsZVRoZW4pLmNhdGNoKGhhbmRsZVRoZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FzZUNsb3NlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzTm9uRW1wdHlTdHJpbmcodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xuICB9XG5cbiAgcHVibGljIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XG4gIH1cblxuICBwdWJsaWMgaXNDb21wb25lbnQodmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBpc01vZGFsQnV0dG9ucyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8vIERvIHJlc3QgdGhpbmdzIHdoZW4gdmlzaWJsZSBzdGF0ZSBjaGFuZ2VkXG4gIHByaXZhdGUgaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGU6IGJvb2xlYW4sIGFuaW1hdGlvbjogYm9vbGVhbiA9IHRydWUsIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh2aXNpYmxlKSB7IC8vIEhpZGUgc2Nyb2xsYmFyIGF0IHRoZSBmaXJzdCB0aW1lIHdoZW4gc2hvd24gdXBcbiAgICAgIHRoaXMuY2hhbmdlQm9keU92ZXJmbG93KDEpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlXG4gICAgLnJlc29sdmUoYW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0ZVRvKHZpc2libGUpKVxuICAgIC50aGVuKCgpID0+IHsgLy8gRW1pdCBvcGVuL2Nsb3NlIGV2ZW50IGFmdGVyIGFuaW1hdGlvbnMgb3ZlclxuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5kd0FmdGVyT3Blbi5lbWl0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmR3QWZ0ZXJDbG9zZS5lbWl0KGNsb3NlUmVzdWx0KTtcbiAgICAgICAgdGhpcy5jaGFuZ2VCb2R5T3ZlcmZsb3coKTsgLy8gU2hvdy9oaWRlIHNjcm9sbGJhciB3aGVuIGFuaW1hdGlvbiBpcyBvdmVyXG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gLnRoZW4oKCkgPT4gdGhpcy5jaGFuZ2VCb2R5T3ZlcmZsb3coKSk7XG4gIH1cblxuICAvLyBMb29rdXAgYSBidXR0b24ncyBwcm9wZXJ0eSwgaWYgdGhlIHByb3AgaXMgYSBmdW5jdGlvbiwgY2FsbCAmIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQsIG90aGVyd2lzZSwgcmV0dXJuIGl0c2VsZi5cbiAgcHVibGljIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4sIHByb3A6IHN0cmluZyk6IHt9IHtcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnNbIHByb3AgXTtcbiAgICBjb25zdCBhcmdzID0gW107XG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xuICAgICAgYXJncy5wdXNoKHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseShvcHRpb25zLCBhcmdzKSA6IHZhbHVlO1xuICB9XG5cbiAgLy8gT24gZHdGb290ZXIncyBtb2RhbCBidXR0b24gY2xpY2tcbiAgcHVibGljIG9uQnV0dG9uQ2xpY2soYnV0dG9uOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4pOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChidXR0b24sICdvbkNsaWNrJyk7IC8vIENhbGwgb25DbGljayBkaXJlY3RseVxuICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgYnV0dG9uLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgKHJlc3VsdCBhcyBQcm9taXNlPHt9PikudGhlbigoKSA9PiBidXR0b24ubG9hZGluZyA9IGZhbHNlKS5jYXRjaCgoKSA9PiBidXR0b24ubG9hZGluZyA9IGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDaGFuZ2UgZHdWaXNpYmxlIGZyb20gaW5zaWRlXG4gIHByaXZhdGUgY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodmlzaWJsZTogYm9vbGVhbiwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuZHdWaXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICAvLyBDaGFuZ2UgZHdWaXNpYmxlIHZhbHVlIGltbWVkaWF0ZWx5XG4gICAgICB0aGlzLmR3VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLmR3VmlzaWJsZUNoYW5nZS5lbWl0KHZpc2libGUpO1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHZpc2libGUsIHRydWUsIGNsb3NlUmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VBbmltYXRpb25TdGF0ZShzdGF0ZTogQW5pbWF0aW9uU3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gc3RhdGU7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHtcbiAgICAgICAgWyBgZmFkZS0ke3N0YXRlfWAgXSAgICAgICA6IHRydWUsXG4gICAgICAgIFsgYGZhZGUtJHtzdGF0ZX0tYWN0aXZlYCBdOiB0cnVlXG4gICAgICB9O1xuICAgICAgdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0ge1xuICAgICAgICBbIGB6b29tLSR7c3RhdGV9YCBdICAgICAgIDogdHJ1ZSxcbiAgICAgICAgWyBgem9vbS0ke3N0YXRlfS1hY3RpdmVgIF06IHRydWVcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0gdGhpcy5tb2RhbEFuaW1hdGlvbkNsYXNzTWFwID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFuaW1hdGVUbyhpc1Zpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaXNWaXNpYmxlKSB7IC8vIEZpZ3VyZSBvdXQgdGhlIGxhc3Rlc3QgY2xpY2sgcG9zaXRpb24gd2hlbiBzaG93cyB1cFxuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKSk7IC8vIFtOT1RFXSBVc2luZyB0aW1lb3V0IGR1ZSB0byB0aGUgZG9jdW1lbnQuY2xpY2sgZXZlbnQgaXMgZmlyZWQgbGF0ZXIgdGhhbiB2aXNpYmxlIGNoYW5nZSwgc28gaWYgbm90IHBvc3Rwb25lZCB0byBuZXh0IGV2ZW50LWxvb3AsIHdlIGNhbid0IGdldCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUoaXNWaXNpYmxlID8gJ2VudGVyJyA6ICdsZWF2ZScpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyAvLyBSZXR1cm4gd2hlbiBhbmltYXRpb24gaXMgb3ZlclxuICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShudWxsKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9LCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OKSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdE1vZGFsQnV0dG9ucyhidXR0b25zOiBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+PiB7XG4gICAgcmV0dXJuIGJ1dHRvbnMubWFwKChidXR0b24pID0+IHtcbiAgICAgIGNvbnN0IG1peGVkQnV0dG9uID0ge1xuICAgICAgICAuLi57XG4gICAgICAgICAgdHlwZSAgICAgICA6ICdkZWZhdWx0JyxcbiAgICAgICAgICBzaXplICAgICAgIDogJ2RlZmF1bHQnLFxuICAgICAgICAgIGF1dG9Mb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIHNob3cgICAgICAgOiB0cnVlLFxuICAgICAgICAgIGxvYWRpbmcgICAgOiBmYWxzZSxcbiAgICAgICAgICBkaXNhYmxlZCAgIDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgLi4uYnV0dG9uXG4gICAgICB9O1xuXG4gICAgICAvLyBpZiAobWl4ZWRCdXR0b24uYXV0b0xvYWRpbmcpIHsgbWl4ZWRCdXR0b24ubG9hZGluZyA9IGZhbHNlOyB9IC8vIEZvcmNlIGxvYWRpbmcgdG8gZmFsc2Ugd2hlbiBhdXRvTG9hZGluZz10cnVlXG5cbiAgICAgIHJldHVybiBtaXhlZEJ1dHRvbjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjb21wb25lbnQgZHluYW1pY2FsbHkgYnV0IG5vdCBhdHRhY2ggdG8gYW55IFZpZXcgKHRoaXMgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBib2R5Q29udGFpbmVyIGlzIHJlYWR5KVxuICAgKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCBjbGFzc1xuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVEeW5hbWljQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxUPik6IHZvaWQge1xuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpO1xuICAgIGNvbnN0IGNoaWxkSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbIHsgcHJvdmlkZTogRHdNb2RhbFJlZiwgdXNlVmFsdWU6IHRoaXMgfSBdLFxuICAgICAgcGFyZW50ICAgOiB0aGlzLnZpZXdDb250YWluZXIucGFyZW50SW5qZWN0b3JcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZShjaGlsZEluamVjdG9yKTtcbiAgICBpZiAodGhpcy5kd0NvbXBvbmVudFBhcmFtcykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UsIHRoaXMuZHdDb21wb25lbnRQYXJhbXMpO1xuICAgIH1cbiAgICAvLyBEbyB0aGUgZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBpbW1lZGlhdGVseSAob3Igd2UgZG8gZGV0ZWN0aW9uIGF0IG5nQWZ0ZXJWaWV3SW5pdCwgbXVsdGktY2hhbmdlcyBlcnJvciB3aWxsIGJlIHRocm93bilcbiAgICB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRyYW5zZm9ybS1vcmlnaW4gdG8gdGhlIGxhc3QgY2xpY2sgcG9zaXRpb24gb24gZG9jdW1lbnRcbiAgcHJpdmF0ZSB1cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IE1vZGFsVXRpbC5nZXRMYXN0Q2xpY2tQb3NpdGlvbigpO1xuICAgIGlmIChsYXN0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gYCR7bGFzdFBvc2l0aW9uLnggLSBtb2RhbEVsZW1lbnQub2Zmc2V0TGVmdH1weCAke2xhc3RQb3NpdGlvbi55IC0gbW9kYWxFbGVtZW50Lm9mZnNldFRvcH1weCAwcHhgO1xuICAgIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHggMHB4JztcbiAgICAvLyB9XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBjYXJlIG9mIHRoZSBib2R5J3Mgb3ZlcmZsb3cgdG8gZGVjaWRlIHRoZSBleGlzdGVuc2Ugb2Ygc2Nyb2xsYmFyXG4gICAqIEBwYXJhbSBwbHVzTnVtIFRoZSBudW1iZXIgdGhhdCB0aGUgb3Blbk1vZGFscy5sZW5ndGggd2lsbCBpbmNyZWFzZSBzb29uXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZUJvZHlPdmVyZmxvdyhwbHVzTnVtOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmF1dG9Cb2R5UGFkZGluZykge1xuICAgICAgY29uc3Qgb3Blbk1vZGFscyA9IHRoaXMubW9kYWxDb250cm9sLm9wZW5Nb2RhbHM7XG5cbiAgICAgIGlmIChvcGVuTW9kYWxzLmxlbmd0aCArIHBsdXNOdW0gPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0JvZHlTY3JvbGxCYXIoKSkgeyAvLyBBZGRpbmcgcGFkZGluZy1yaWdodCBvbmx5IHdoZW4gYm9keSdzIHNjcm9sbGJhciBpcyBhYmxlIHRvIHNob3duIHVwXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdwYWRkaW5nLXJpZ2h0JywgYCR7dGhpcy5kd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLnNjcm9sbEJhcldpZHRofXB4YCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gTk9URTogd2UgbmVlZCB0byBhbHdheXMgcmVtb3ZlIHRoZSBwYWRkaW5nIGR1ZSB0byB0aGUgc2Nyb2xsIGJhciBtYXkgYmUgZGlzYXBwZWFyIGJ5IHdpbmRvdyByZXNpemluZyBiZWZvcmUgbW9kYWwgY2xvc2VkXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ292ZXJmbG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIGJvZHkgZWxlbWVudCBpcyBhYmxlIHRvIGhhcyB0aGUgc2Nyb2xsIGJhciAoaWYgdGhlIGJvZHkgY29udGVudCBoZWlnaHQgZXhjZWVkcyB0aGUgd2luZG93J3MgaGVpZ2h0KVxuICAgKiBFeGNlcHRpb25hbCBDYXNlczogdXNlcnMgY2FuIHNob3cgdGhlIHNjcm9sbCBiYXIgYnkgdGhlaXIgb3duIHBlcm1hbmVudGx5IChlZy4gb3ZlcmZsb3c6IHNjcm9sbClcbiAgICovXG4gIHByaXZhdGUgaGFzQm9keVNjcm9sbEJhcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VEZWZhdWx0Q29uZmlnKGNvbmZpZzogRHdNb2RhbENvbmZpZyk6IER3TW9kYWxDb25maWcge1xuICAgIHJldHVybiB7IC4uLkRXX01PREFMX0RFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfTtcbiAgfVxufVxuXG4vLy8vLy8vLy8vLy9cblxuZnVuY3Rpb24gaXNQcm9taXNlKG9iajoge30gfCB2b2lkKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIChvYmogYXMgUHJvbWlzZTx7fT4pLnRoZW4gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIChvYmogYXMgUHJvbWlzZTx7fT4pLmNhdGNoID09PSAnZnVuY3Rpb24nO1xufVxuIl19
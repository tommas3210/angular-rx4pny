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
export var MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
/**
 * @template T, R
 */
var DwModalComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwModalComponent, _super);
    function DwModalComponent(overlay, i18n, renderer, cfr, elementRef, viewContainer, dwMeasureScrollbarService, modalControl, config, document) {
        // tslint:disable-line:no-any
        var _this = _super.call(this) || this;
        _this.overlay = overlay;
        _this.i18n = i18n;
        _this.renderer = renderer;
        _this.cfr = cfr;
        _this.elementRef = elementRef;
        _this.viewContainer = viewContainer;
        _this.dwMeasureScrollbarService = dwMeasureScrollbarService;
        _this.modalControl = modalControl;
        _this.config = config;
        _this.document = document;
        _this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        _this.locale = {};
        _this.dwModalType = 'default';
        _this.dwGetContainer = function () { return _this.overlay.create(); };
        _this.dwVisible = false;
        _this.dwVisibleChange = new EventEmitter();
        _this.dwZIndex = 1000;
        _this.dwWidth = 520;
        _this.dwIconType = 'question-circle';
        _this.dwClosable = true;
        _this.dwMask = true;
        _this.dwMaskClosable = true;
        _this.dwAfterOpen = new EventEmitter();
        _this.dwAfterClose = new EventEmitter();
        _this.dwOkType = 'primary';
        _this.dwOkLoading = false;
        _this.dwOnOk = new EventEmitter();
        _this.dwCancelLoading = false;
        _this.dwOnCancel = new EventEmitter();
        _this.transformOrigin = '0px 0px 0px';
        _this.config = _this.mergeDefaultConfig(_this.config);
        return _this;
    }
    Object.defineProperty(DwModalComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for dwAfterOpen
            return this.dwAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwModalComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            // Observable alias for dwAfterClose
            return this.dwAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwModalComponent.prototype, "okText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwOkText || this.locale.okText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwModalComponent.prototype, "cancelText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwCancelText || this.locale.cancelText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwModalComponent.prototype, "hidden", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.dwVisible && !this.animationState;
        } // Indicate whether this dialog should hidden
        // Indicate whether this dialog should hidden
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Modal'); });
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
    };
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "dwContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "dwContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    /**
     * @param {?} changes
     * @return {?}
     */
    DwModalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["dwVisible"]) {
            this.handleVisibleStateChange(this.dwVisible, !changes["dwVisible"].firstChange); // Do not trigger animation while initializing
        }
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            (/** @type {?} */ (this.autoFocusButtonOk.nativeElement)).focus();
        }
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Close self before destructing
        this.changeVisibleFromInside(false).then(function () {
            _this.modalControl.deregisterModal(_this);
            if (_this.container instanceof OverlayRef) {
                _this.container.dispose();
            }
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        });
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.changeVisibleFromInside(true);
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    DwModalComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        this.changeVisibleFromInside(false, result);
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    DwModalComponent.prototype.destroy = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        // Destroy equals Close
        this.close(result);
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.triggerOk = /**
     * @return {?}
     */
    function () {
        this.onClickOkCancel('ok');
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.triggerCancel = /**
     * @return {?}
     */
    function () {
        this.onClickOkCancel('cancel');
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return this;
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.getContentComponentRef = /**
     * @return {?}
     */
    function () {
        return this.contentComponentRef;
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.getContentComponent = /**
     * @return {?}
     */
    function () {
        return this.contentComponentRef && this.contentComponentRef.instance;
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.getElement = /**
     * @return {?}
     */
    function () {
        return this.elementRef && this.elementRef.nativeElement;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DwModalComponent.prototype.onClickMask = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.dwMask &&
            this.dwMaskClosable &&
            (/** @type {?} */ ($event.target)).classList.contains('ant-modal-wrap') &&
            this.dwVisible) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    DwModalComponent.prototype.isModalType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.dwModalType === type;
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.onClickCloseBtn = /**
     * @return {?}
     */
    function () {
        if (this.dwVisible) {
            this.onClickOkCancel('cancel');
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    DwModalComponent.prototype.onClickOkCancel = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        /** @type {?} */
        var trigger = { 'ok': this.dwOnOk, 'cancel': this.dwOnCancel }[type];
        /** @type {?} */
        var loadingKey = { 'ok': 'dwOkLoading', 'cancel': 'dwCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            var result = trigger(this.getContentComponent());
            /** @type {?} */
            var caseClose_1 = function (doClose) { return (doClose !== false) && _this.close(/** @type {?} */ (doClose)); }; // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                /** @type {?} */
                var handleThen = function (doClose) {
                    _this[loadingKey] = false;
                    caseClose_1(doClose);
                };
                (/** @type {?} */ (result)).then(handleThen).catch(handleThen);
            }
            else {
                caseClose_1(result);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwModalComponent.prototype.isNonEmptyString = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' && value !== '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwModalComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwModalComponent.prototype.isComponent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof Type;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwModalComponent.prototype.isModalButtons = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Array.isArray(value) && value.length > 0;
    };
    /**
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    DwModalComponent.prototype.handleVisibleStateChange = /**
     * @param {?} visible
     * @param {?=} animation
     * @param {?=} closeResult
     * @return {?}
     */
    function (visible, animation, closeResult) {
        var _this = this;
        if (animation === void 0) { animation = true; }
        if (visible) { // Hide scrollbar at the first time when shown up
            // Hide scrollbar at the first time when shown up
            this.changeBodyOverflow(1);
        }
        return Promise
            .resolve(animation && this.animateTo(visible))
            .then(function () {
            // Emit open/close event after animations over
            if (visible) {
                _this.dwAfterOpen.emit();
            }
            else {
                _this.dwAfterClose.emit(closeResult);
                _this.changeBodyOverflow(); // Show/hide scrollbar when animation is over
            }
        });
        // .then(() => this.changeBodyOverflow());
    };
    /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    DwModalComponent.prototype.getButtonCallableProp = /**
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    function (options, prop) {
        /** @type {?} */
        var value = options[prop];
        /** @type {?} */
        var args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    };
    /**
     * @param {?} button
     * @return {?}
     */
    DwModalComponent.prototype.onButtonClick = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        /** @type {?} */
        var result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            (/** @type {?} */ (result)).then(function () { return button.loading = false; }).catch(function () { return button.loading = false; });
        }
    };
    /**
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    DwModalComponent.prototype.changeVisibleFromInside = /**
     * @param {?} visible
     * @param {?=} closeResult
     * @return {?}
     */
    function (visible, closeResult) {
        if (this.dwVisible !== visible) {
            // Change dwVisible value immediately
            this.dwVisible = visible;
            this.dwVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    };
    /**
     * @param {?} state
     * @return {?}
     */
    DwModalComponent.prototype.changeAnimationState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var _a, _b;
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = (_a = {},
                _a["fade-" + state] = true,
                _a["fade-" + state + "-active"] = true,
                _a);
            this.modalAnimationClassMap = (_b = {},
                _b["zoom-" + state] = true,
                _b["zoom-" + state + "-active"] = true,
                _b);
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    };
    /**
     * @param {?} isVisible
     * @return {?}
     */
    DwModalComponent.prototype.animateTo = /**
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        var _this = this;
        if (isVisible) { // Figure out the lastest click position when shows up
            // Figure out the lastest click position when shows up
            window.setTimeout(function () { return _this.updateTransformOrigin(); }); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(function (resolve) { return window.setTimeout(function () {
            // Return when animation is over
            _this.changeAnimationState(null);
            resolve();
        }, MODAL_ANIMATE_DURATION); });
    };
    /**
     * @param {?} buttons
     * @return {?}
     */
    DwModalComponent.prototype.formatModalButtons = /**
     * @param {?} buttons
     * @return {?}
     */
    function (buttons) {
        return buttons.map(function (button) {
            /** @type {?} */
            var mixedButton = tslib_1.__assign({
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
    };
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param {?} component Component class
     * @return {?}
     */
    DwModalComponent.prototype.createDynamicComponent = /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param {?} component Component class
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var factory = this.cfr.resolveComponentFactory(component);
        /** @type {?} */
        var childInjector = Injector.create({
            providers: [{ provide: DwModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.dwComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.dwComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    DwModalComponent.prototype.updateTransformOrigin = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalElement = /** @type {?} */ (this.modalContainer.nativeElement);
        /** @type {?} */
        var lastPosition = ModalUtil.getLastClickPosition();
        if (lastPosition) {
            this.transformOrigin = lastPosition.x - modalElement.offsetLeft + "px " + (lastPosition.y - modalElement.offsetTop) + "px 0px";
        }
        // else {
        //   this.transformOrigin = '0px 0px 0px';
        // }
    };
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param {?=} plusNum The number that the openModals.length will increase soon
     * @return {?}
     */
    DwModalComponent.prototype.changeBodyOverflow = /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param {?=} plusNum The number that the openModals.length will increase soon
     * @return {?}
     */
    function (plusNum) {
        if (plusNum === void 0) { plusNum = 0; }
        if (this.config.autoBodyPadding) {
            /** @type {?} */
            var openModals = this.modalControl.openModals;
            if (openModals.length + plusNum > 0) {
                if (this.hasBodyScrollBar()) { // Adding padding-right only when body's scrollbar is able to shown up
                    // Adding padding-right only when body's scrollbar is able to shown up
                    this.renderer.setStyle(this.document.body, 'padding-right', this.dwMeasureScrollbarService.scrollBarWidth + "px");
                    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
                }
            }
            else { // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                // NOTE: we need to always remove the padding due to the scroll bar may be disappear by window resizing before modal closed
                this.renderer.removeStyle(this.document.body, 'padding-right');
                this.renderer.removeStyle(this.document.body, 'overflow');
            }
        }
    };
    /**
     * Check whether the body element is able to has the scroll bar (if the body content height exceeds the window's height)
     * Exceptional Cases: users can show the scroll bar by their own permanently (eg. overflow: scroll)
     * @return {?}
     */
    DwModalComponent.prototype.hasBodyScrollBar = /**
     * Check whether the body element is able to has the scroll bar (if the body content height exceeds the window's height)
     * Exceptional Cases: users can show the scroll bar by their own permanently (eg. overflow: scroll)
     * @return {?}
     */
    function () {
        return this.document.body.scrollHeight > (window.innerHeight || this.document.documentElement.clientHeight);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    DwModalComponent.prototype.mergeDefaultConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return tslib_1.__assign({}, DW_MODAL_DEFAULT_CONFIG, config);
    };
    DwModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-modal',
                    template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\n\n<div>\n  <div *ngIf=\"dwMask\"\n    class=\"ant-modal-mask\"\n    [ngClass]=\"maskAnimationClassMap\"\n    [class.ant-modal-mask-hidden]=\"hidden\"\n    [ngStyle]=\"dwMaskStyle\"\n    [style.zIndex]=\"dwZIndex\"\n  ></div>\n  <div\n    (click)=\"onClickMask($event)\"\n    class=\"ant-modal-wrap {{ dwWrapClassName }}\"\n    [style.zIndex]=\"dwZIndex\"\n    [style.display]=\"hidden ? 'none' : ''\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n  >\n    <div #modalContainer\n      class=\"ant-modal {{ dwClassName }}\"\n      [ngClass]=\"modalAnimationClassMap\"\n      [ngStyle]=\"dwStyle\"\n      [style.width]=\"dwWidth | toCssUnit\"\n      [style.transform-origin]=\"transformOrigin\"\n      role=\"document\"\n    >\n      <div class=\"ant-modal-content\">\n        <button *ngIf=\"dwClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\n          <span class=\"ant-modal-close-x\"></span>\n        </button>\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n    <div tabindex=\"0\" style=\"width: 0px; height: 0px; overflow: hidden;\">sentinel</div>\n  </div>\n</div>\n\n<!-- [Predefined] Default Modal Content -->\n<ng-template #tplContentDefault>\n  <div *ngIf=\"dwTitle\" class=\"ant-modal-header\">\n    <div class=\"ant-modal-title\">\n      <ng-container [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(dwTitle)\" [ngTemplateOutlet]=\"dwTitle\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(dwTitle)\"><div [innerHTML]=\"dwTitle\"></div></ng-container>\n      </ng-container>\n    </div>\n  </div>\n  <div class=\"ant-modal-body\" [ngStyle]=\"dwBodyStyle\">\n    <ng-container #bodyContainer>\n      <ng-container *ngIf=\"!isComponent(dwContent)\" [ngSwitch]=\"true\">\n        <ng-container *ngSwitchCase=\"isTemplateRef(dwContent)\" [ngTemplateOutlet]=\"dwContent\"></ng-container>\n        <ng-container *ngSwitchCase=\"isNonEmptyString(dwContent)\"><div [innerHTML]=\"dwContent\"></div></ng-container>\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div *ngIf=\"dwFooter !== null\" class=\"ant-modal-footer\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(dwFooter)\" [ngTemplateOutlet]=\"dwFooter\"></ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(dwFooter)\"><div [innerHTML]=\"dwFooter\"></div></ng-container>\n      <ng-container *ngSwitchCase=\"isModalButtons(dwFooter)\">\n        <button *ngFor=\"let button of dwFooter\" dw-button\n          (click)=\"onButtonClick(button)\"\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\n          [dwLoading]=\"getButtonCallableProp(button, 'loading')\"\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n          [dwType]=\"button.type\"\n          [dwShape]=\"button.shape\"\n          [dwSize]=\"button.size\"\n          [dwGhost]=\"button.ghost\"\n        >{{ button.label }}</button>\n      </ng-container>\n      <ng-container *ngSwitchDefault>\n        <button *ngIf=\"dwCancelText!==null\" dw-button (click)=\"onClickOkCancel('cancel')\" [dwLoading]=\"dwCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"dwOkText!==null\" dw-button [dwType]=\"dwOkType\" (click)=\"onClickOkCancel('ok')\" [dwLoading]=\"dwOkLoading\">\n          {{ okText }}\n        </button>\n      </ng-container>\n    </ng-container>\n  </div>\n</ng-template>\n<!-- /[Predefined] Default Modal Content -->\n\n<!-- [Predefined] Confirm Modal Content -->\n<ng-template #tplContentConfirm>\n  <div class=\"ant-modal-body\" [ngStyle]=\"dwBodyStyle\">\n    <div class=\"ant-confirm-body-wrapper\">\n      <div class=\"ant-confirm-body\">\n        <i class=\"anticon anticon-{{ dwIconType }}\"></i>\n        <span class=\"ant-confirm-title\">\n          <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"isTemplateRef(dwTitle)\" [ngTemplateOutlet]=\"dwTitle\"></ng-container>\n            <ng-container *ngSwitchCase=\"isNonEmptyString(dwTitle)\"><span [innerHTML]=\"dwTitle\"></span></ng-container>\n          </ng-container>\n        </span>\n        <div class=\"ant-confirm-content\">\n          <ng-container #bodyContainer>\n            <ng-container *ngIf=\"!isComponent(dwContent)\" [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(dwContent)\" [ngTemplateOutlet]=\"dwContent\"></ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(dwContent)\"><div [innerHTML]=\"dwContent\"></div></ng-container>\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </div>\n      <div class=\"ant-confirm-btns\">\n        <button dw-button *ngIf=\"dwCancelText!==null\" (click)=\"onClickOkCancel('cancel')\" [dwLoading]=\"dwCancelLoading\">\n          {{ cancelText }}\n        </button>\n        <button *ngIf=\"dwOkText!==null\" #autoFocusButtonOk dw-button [dwType]=\"dwOkType\" (click)=\"onClickOkCancel('ok')\" [dwLoading]=\"dwOkLoading\">\n          {{ okText }}\n        </button>\n      </div>\n    </div> <!-- /.ant-confirm-body-wrapper -->\n  </div>\n</ng-template>\n<!-- /[Predefined] Confirm Modal Content -->\n"
                }] }
    ];
    /** @nocollapse */
    DwModalComponent.ctorParameters = function () { return [
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
    ]; };
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
    return DwModalComponent;
}(DwModalRef));
export { DwModalComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJtb2RhbC9kdy1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsU0FBUyxFQUNULHdCQUF3QixFQUV4QixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixRQUFRLEVBQ1IsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFeEQsT0FBTyxTQUFTLE1BQU0sY0FBYyxDQUFDO0FBQ3JDLE9BQU8sRUFBaUIsZUFBZSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUdsRCxXQUFhLHNCQUFzQixHQUFHLEdBQUcsQ0FBQzs7Ozs7SUFVYyw0Q0FBZ0I7SUFzRXRFLDBCQUNVLFNBQ0EsTUFDQSxVQUNBLEtBQ0EsWUFDQSxlQUNBLDJCQUNB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QTlDNUMsWUFBWSxFQUFFOzs7O1FBVWQsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBc0JkLFlBQVksRUFBRTs7OztRQVNkLFlBQVksRUFBRTs7OzJCQXRHMUI7RUFnRHdELFVBQVU7U0FBckQsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpWjdCLG1CQUFtQixHQUFjO0lBQy9CLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVLENBQUMsSUFBSSxPQUFPLG1CQUFDLEdBQWtCLEVBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLE9BQU8sbUJBQUMsR0FBa0IsRUFBQyxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDL0siLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5LCBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvZHctbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL2R3LWkxOG4uc2VydmljZSc7XG5cbmltcG9ydCBNb2RhbFV0aWwgZnJvbSAnLi9tb2RhbC11dGlsJztcbmltcG9ydCB7IER3TW9kYWxDb25maWcsIERXX01PREFMX0NPTkZJRywgRFdfTU9EQUxfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL2R3LW1vZGFsLWNvbmZpZyc7XG5pbXBvcnQgeyBEd01vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2R3LW1vZGFsLWNvbnRyb2wuc2VydmljZSc7XG5pbXBvcnQgeyBEd01vZGFsUmVmIH0gZnJvbSAnLi9kdy1tb2RhbC1yZWYuY2xhc3MnO1xuaW1wb3J0IHsgTW9kYWxCdXR0b25PcHRpb25zLCBNb2RhbE9wdGlvbnMsIE1vZGFsVHlwZSwgT25DbGlja0NhbGxiYWNrIH0gZnJvbSAnLi9kdy1tb2RhbC50eXBlJztcblxuZXhwb3J0IGNvbnN0IE1PREFMX0FOSU1BVEVfRFVSQVRJT04gPSAyMDA7IC8vIER1cmF0aW9uIHdoZW4gcGVyZm9ybSBhbmltYXRpb25zIChtcylcblxudHlwZSBBbmltYXRpb25TdGF0ZSA9ICdlbnRlcicgfCAnbGVhdmUnIHwgbnVsbDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctbW9kYWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG5leHBvcnQgY2xhc3MgRHdNb2RhbENvbXBvbmVudDxUID0gYW55LCBSID0gYW55PiBleHRlbmRzIER3TW9kYWxSZWY8VCwgUj4gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBNb2RhbE9wdGlvbnM8VD4ge1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2NhbGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSBkd01vZGFsVHlwZTogTW9kYWxUeXBlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBkd0NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47IC8vIFtTVEFUSUNdIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgdXNlIDxuZy1jb250ZW50PlxuICBASW5wdXQoKSBkd0NvbXBvbmVudFBhcmFtczogVDsgLy8gW1NUQVRJQ10gT05MWSBhdmFsaWFibGUgd2hlbiBkd0NvbnRlbnQgaXMgYSBjb21wb25lbnRcbiAgQElucHV0KCkgZHdGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj47IC8vIFtTVEFUSUNdIERlZmF1bHQgTW9kYWwgT05MWVxuICBASW5wdXQoKSBkd0dldENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBPdmVybGF5UmVmIHwgKCgpID0+IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZikgPSAoKSA9PiB0aGlzLm92ZXJsYXkuY3JlYXRlKCk7IC8vIFtTVEFUSUNdXG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgZHdWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIGR3WkluZGV4OiBudW1iZXIgPSAxMDAwO1xuICBASW5wdXQoKSBkd1dpZHRoOiBudW1iZXIgfCBzdHJpbmcgPSA1MjA7XG4gIEBJbnB1dCgpIGR3V3JhcENsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkd0NsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkd1N0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIGR3SWNvblR5cGU6IHN0cmluZyA9ICdxdWVzdGlvbi1jaXJjbGUnOyAvLyBDb25maXJtIE1vZGFsIE9OTFlcbiAgQElucHV0KCkgZHdUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8e30+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdDbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd01hc2s6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdNYXNrQ2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkd01hc2tTdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBkd0JvZHlTdHlsZTogb2JqZWN0O1xuXG4gIEBPdXRwdXQoKSBkd0FmdGVyT3BlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIG9wZW4odmlzaWJsZSkgYWZ0ZXIgYW5pbWF0aW9uc1xuICBAT3V0cHV0KCkgZHdBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSPigpOyAvLyBUcmlnZ2VyIHdoZW4gbW9kYWwgbGVhdmUtYW5pbWF0aW9uIG92ZXJcbiAgZ2V0IGFmdGVyT3BlbigpOiBPYnNlcnZhYmxlPHZvaWQ+IHsgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgZHdBZnRlck9wZW5cbiAgICByZXR1cm4gdGhpcy5kd0FmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4geyAvLyBPYnNlcnZhYmxlIGFsaWFzIGZvciBkd0FmdGVyQ2xvc2VcbiAgICByZXR1cm4gdGhpcy5kd0FmdGVyQ2xvc2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvLyAtLS0gUHJlZGVmaW5lZCBPSyAmIENhbmNlbCBidXR0b25zXG4gIEBJbnB1dCgpIGR3T2tUZXh0OiBzdHJpbmc7XG5cbiAgZ2V0IG9rVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmR3T2tUZXh0IHx8IHRoaXMubG9jYWxlLm9rVGV4dDtcbiAgfVxuXG4gIEBJbnB1dCgpIGR3T2tUeXBlID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdPa0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQE91dHB1dCgpIGR3T25PazogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAVmlld0NoaWxkKCdhdXRvRm9jdXNCdXR0b25PaycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBhdXRvRm9jdXNCdXR0b25PazogRWxlbWVudFJlZjsgLy8gT25seSBhaW0gdG8gZm9jdXMgdGhlIG9rIGJ1dHRvbiB0aGF0IG5lZWRzIHRvIGJlIGF1dG8gZm9jdXNlZFxuICBASW5wdXQoKSBkd0NhbmNlbFRleHQ6IHN0cmluZztcblxuICBnZXQgY2FuY2VsVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmR3Q2FuY2VsVGV4dCB8fCB0aGlzLmxvY2FsZS5jYW5jZWxUZXh0O1xuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3Q2FuY2VsTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBAT3V0cHV0KCkgZHdPbkNhbmNlbDogRXZlbnRFbWl0dGVyPFQ+IHwgT25DbGlja0NhbGxiYWNrPFQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUPigpO1xuICBAVmlld0NoaWxkKCdtb2RhbENvbnRhaW5lcicpIG1vZGFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdib2R5Q29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGJvZHlDb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZHdWaXNpYmxlICYmICF0aGlzLmFuaW1hdGlvblN0YXRlO1xuICB9IC8vIEluZGljYXRlIHdoZXRoZXIgdGhpcyBkaWFsb2cgc2hvdWxkIGhpZGRlblxuICBtYXNrQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdDtcbiAgbW9kYWxBbmltYXRpb25DbGFzc01hcDogb2JqZWN0O1xuICB0cmFuc2Zvcm1PcmlnaW4gPSAnMHB4IDBweCAwcHgnOyAvLyBUaGUgb3JpZ2luIHBvaW50IHRoYXQgYW5pbWF0aW9uIGJhc2VkIG9uXG5cbiAgcHJpdmF0ZSBjb250ZW50Q29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD47IC8vIEhhbmRsZSB0aGUgcmVmZXJlbmNlIHdoZW4gdXNpbmcgZHdDb250ZW50IGFzIENvbXBvbmVudFxuICBwcml2YXRlIGFuaW1hdGlvblN0YXRlOiBBbmltYXRpb25TdGF0ZTsgLy8gQ3VycmVudCBhbmltYXRpb24gc3RhdGVcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBpMThuOiBEd0kxOG5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBkd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBEd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sOiBEd01vZGFsQ29udHJvbFNlcnZpY2UsXG4gICAgQEluamVjdChEV19NT0RBTF9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBEd01vZGFsQ29uZmlnLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5tZXJnZURlZmF1bHRDb25maWcodGhpcy5jb25maWcpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdNb2RhbCcpKTtcblxuICAgIGlmICh0aGlzLmlzQ29tcG9uZW50KHRoaXMuZHdDb250ZW50KSkge1xuICAgICAgdGhpcy5jcmVhdGVEeW5hbWljQ29tcG9uZW50KHRoaXMuZHdDb250ZW50IGFzIFR5cGU8VD4pOyAvLyBDcmVhdGUgY29tcG9uZW50IGFsb25nIHdpdGhvdXQgVmlld1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTW9kYWxCdXR0b25zKHRoaXMuZHdGb290ZXIpKSB7IC8vIFNldHVwIGRlZmF1bHQgYnV0dG9uIG9wdGlvbnNcbiAgICAgIHRoaXMuZHdGb290ZXIgPSB0aGlzLmZvcm1hdE1vZGFsQnV0dG9ucyh0aGlzLmR3Rm9vdGVyIGFzIEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4pO1xuICAgIH1cblxuICAgIC8vIFBsYWNlIHRoZSBtb2RhbCBkb20gdG8gZWxzZXdoZXJlXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5kd0dldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuZHdHZXRDb250YWluZXIoKSA6IHRoaXMuZHdHZXRDb250YWluZXI7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikgeyAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxuICAgICAgdGhpcy5jb250YWluZXIub3ZlcmxheUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXG4gICAgdGhpcy5tb2RhbENvbnRyb2wucmVnaXN0ZXJNb2RhbCh0aGlzKTtcbiAgfVxuXG4gIC8vIFtOT1RFXSBOT1QgYXZhaWxhYmxlIHdoZW4gdXNpbmcgYnkgc2VydmljZSFcbiAgLy8gQmVjYXVzZSBuZ09uQ2hhbmdlcyBuZXZlciBiZSBjYWxsZWQgd2hlbiB1c2luZyBieSBzZXJ2aWNlLFxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJkd0NvbnRlbnRcIihDb21wb25lbnQpIGV0Yy4gYXMgaW5wdXRzIHRoYXQgaW5pdGlhbGl6ZWQgZHluYW1pY2FsbHkuXG4gIC8vIEJVVDogVXNlciBhbHNvIGNhbiBjaGFuZ2UgXCJkd0NvbnRlbnRcIiBkeW5hbWljYWxseSB0byB0cmlnZ2VyIFVJIGNoYW5nZXMgKHByb3ZpZGVkIHlvdSBkb24ndCB1c2UgXGJDb21wb25lbnQgdGhhdCBuZWVkcyBpbml0aWFsaXphdGlvbnMpXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kd1Zpc2libGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHRoaXMuZHdWaXNpYmxlLCAhY2hhbmdlcy5kd1Zpc2libGUuZmlyc3RDaGFuZ2UpOyAvLyBEbyBub3QgdHJpZ2dlciBhbmltYXRpb24gd2hpbGUgaW5pdGlhbGl6aW5nXG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgIHRoaXMuYm9keUNvbnRhaW5lci5pbnNlcnQodGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXNCdXR0b25Paykge1xuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBDbG9zZSBzZWxmIGJlZm9yZSBkZXN0cnVjdGluZ1xuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbENvbnRyb2wuZGVyZWdpc3Rlck1vZGFsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VWaXNpYmxlRnJvbUluc2lkZSh0cnVlKTtcbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IFIpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlLCByZXN1bHQpO1xuICB9XG5cbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7IC8vIERlc3Ryb3kgZXF1YWxzIENsb3NlXG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xuICB9XG5cbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xuICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdvaycpO1xuICB9XG5cbiAgdHJpZ2dlckNhbmNlbCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XG4gIH1cblxuICBnZXRJbnN0YW5jZSgpOiBEd01vZGFsQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldENvbnRlbnRDb21wb25lbnRSZWYoKTogQ29tcG9uZW50UmVmPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmO1xuICB9XG5cbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmICYmIHRoaXMuY29udGVudENvbXBvbmVudFJlZi5pbnN0YW5jZTtcbiAgfVxuXG4gIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBvbkNsaWNrTWFzaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmR3TWFzayAmJlxuICAgICAgdGhpcy5kd01hc2tDbG9zYWJsZSAmJlxuICAgICAgKCRldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnYW50LW1vZGFsLXdyYXAnKSAmJlxuICAgICAgdGhpcy5kd1Zpc2libGVcbiAgICApIHtcbiAgICAgIHRoaXMub25DbGlja09rQ2FuY2VsKCdjYW5jZWwnKTtcbiAgICB9XG4gIH1cblxuICBpc01vZGFsVHlwZSh0eXBlOiBNb2RhbFR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd01vZGFsVHlwZSA9PT0gdHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrQ2xvc2VCdG4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdWaXNpYmxlKSB7XG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2tPa0NhbmNlbCh0eXBlOiAnb2snIHwgJ2NhbmNlbCcpOiB2b2lkIHtcbiAgICBjb25zdCB0cmlnZ2VyID0geyAnb2snOiB0aGlzLmR3T25PaywgJ2NhbmNlbCc6IHRoaXMuZHdPbkNhbmNlbCB9WyB0eXBlIF07XG4gICAgY29uc3QgbG9hZGluZ0tleSA9IHsgJ29rJzogJ2R3T2tMb2FkaW5nJywgJ2NhbmNlbCc6ICdkd0NhbmNlbExvYWRpbmcnIH1bIHR5cGUgXTtcbiAgICBpZiAodHJpZ2dlciBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xuICAgICAgdHJpZ2dlci5lbWl0KHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0cmlnZ2VyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0cmlnZ2VyKHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcbiAgICAgIGNvbnN0IGNhc2VDbG9zZSA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiAoZG9DbG9zZSAhPT0gZmFsc2UpICYmIHRoaXMuY2xvc2UoZG9DbG9zZSBhcyBSKTsgLy8gVXNlcnMgY2FuIHJldHVybiBcImZhbHNlXCIgdG8gcHJldmVudCBjbG9zaW5nIGJ5IGRlZmF1bHRcbiAgICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xuICAgICAgICB0aGlzWyBsb2FkaW5nS2V5IF0gPSB0cnVlO1xuICAgICAgICBjb25zdCBoYW5kbGVUaGVuID0gKGRvQ2xvc2UpID0+IHtcbiAgICAgICAgICB0aGlzWyBsb2FkaW5nS2V5IF0gPSBmYWxzZTtcbiAgICAgICAgICBjYXNlQ2xvc2UoZG9DbG9zZSk7XG4gICAgICAgIH07XG4gICAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx2b2lkPikudGhlbihoYW5kbGVUaGVuKS5jYXRjaChoYW5kbGVUaGVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhc2VDbG9zZShyZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJztcbiAgfVxuXG4gIHB1YmxpYyBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgcHVibGljIGlzQ29tcG9uZW50KHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFR5cGU7XG4gIH1cblxuICBwdWJsaWMgaXNNb2RhbEJ1dHRvbnModmFsdWU6IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvLyBEbyByZXN0IHRoaW5ncyB3aGVuIHZpc2libGUgc3RhdGUgY2hhbmdlZFxuICBwcml2YXRlIGhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlOiBib29sZWFuLCBhbmltYXRpb246IGJvb2xlYW4gPSB0cnVlLCBjbG9zZVJlc3VsdD86IFIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodmlzaWJsZSkgeyAvLyBIaWRlIHNjcm9sbGJhciBhdCB0aGUgZmlyc3QgdGltZSB3aGVuIHNob3duIHVwXG4gICAgICB0aGlzLmNoYW5nZUJvZHlPdmVyZmxvdygxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZVxuICAgIC5yZXNvbHZlKGFuaW1hdGlvbiAmJiB0aGlzLmFuaW1hdGVUbyh2aXNpYmxlKSlcbiAgICAudGhlbigoKSA9PiB7IC8vIEVtaXQgb3Blbi9jbG9zZSBldmVudCBhZnRlciBhbmltYXRpb25zIG92ZXJcbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZHdBZnRlck9wZW4uZW1pdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kd0FmdGVyQ2xvc2UuZW1pdChjbG9zZVJlc3VsdCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQm9keU92ZXJmbG93KCk7IC8vIFNob3cvaGlkZSBzY3JvbGxiYXIgd2hlbiBhbmltYXRpb24gaXMgb3ZlclxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIC50aGVuKCgpID0+IHRoaXMuY2hhbmdlQm9keU92ZXJmbG93KCkpO1xuICB9XG5cbiAgLy8gTG9va3VwIGEgYnV0dG9uJ3MgcHJvcGVydHksIGlmIHRoZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGNhbGwgJiB0aGVuIHJldHVybiB0aGUgcmVzdWx0LCBvdGhlcndpc2UsIHJldHVybiBpdHNlbGYuXG4gIHB1YmxpYyBnZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9uczogTW9kYWxCdXR0b25PcHRpb25zPFQ+LCBwcm9wOiBzdHJpbmcpOiB7fSB7XG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zWyBwcm9wIF07XG4gICAgY29uc3QgYXJncyA9IFtdO1xuICAgIGlmICh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYpIHtcbiAgICAgIGFyZ3MucHVzaCh0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYuaW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkob3B0aW9ucywgYXJncykgOiB2YWx1ZTtcbiAgfVxuXG4gIC8vIE9uIGR3Rm9vdGVyJ3MgbW9kYWwgYnV0dG9uIGNsaWNrXG4gIHB1YmxpYyBvbkJ1dHRvbkNsaWNrKGJ1dHRvbjogTW9kYWxCdXR0b25PcHRpb25zPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnb25DbGljaycpOyAvLyBDYWxsIG9uQ2xpY2sgZGlyZWN0bHlcbiAgICBpZiAoaXNQcm9taXNlKHJlc3VsdCkpIHtcbiAgICAgIGJ1dHRvbi5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx7fT4pLnRoZW4oKCkgPT4gYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkuY2F0Y2goKCkgPT4gYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hhbmdlIGR3VmlzaWJsZSBmcm9tIGluc2lkZVxuICBwcml2YXRlIGNoYW5nZVZpc2libGVGcm9tSW5zaWRlKHZpc2libGU6IGJvb2xlYW4sIGNsb3NlUmVzdWx0PzogUik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmR3VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgLy8gQ2hhbmdlIGR3VmlzaWJsZSB2YWx1ZSBpbW1lZGlhdGVseVxuICAgICAgdGhpcy5kd1Zpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5kd1Zpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlLCB0cnVlLCBjbG9zZVJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlQW5pbWF0aW9uU3RhdGUoc3RhdGU6IEFuaW1hdGlvblN0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgdGhpcy5tYXNrQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XG4gICAgICAgIFsgYGZhZGUtJHtzdGF0ZX1gIF0gICAgICAgOiB0cnVlLFxuICAgICAgICBbIGBmYWRlLSR7c3RhdGV9LWFjdGl2ZWAgXTogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IHtcbiAgICAgICAgWyBgem9vbS0ke3N0YXRlfWAgXSAgICAgICA6IHRydWUsXG4gICAgICAgIFsgYHpvb20tJHtzdGF0ZX0tYWN0aXZlYCBdOiB0cnVlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlVG8oaXNWaXNpYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGlzVmlzaWJsZSkgeyAvLyBGaWd1cmUgb3V0IHRoZSBsYXN0ZXN0IGNsaWNrIHBvc2l0aW9uIHdoZW4gc2hvd3MgdXBcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlVHJhbnNmb3JtT3JpZ2luKCkpOyAvLyBbTk9URV0gVXNpbmcgdGltZW91dCBkdWUgdG8gdGhlIGRvY3VtZW50LmNsaWNrIGV2ZW50IGlzIGZpcmVkIGxhdGVyIHRoYW4gdmlzaWJsZSBjaGFuZ2UsIHNvIGlmIG5vdCBwb3N0cG9uZWQgdG8gbmV4dCBldmVudC1sb29wLCB3ZSBjYW4ndCBnZXQgdGhlIGxhc3Rlc3QgY2xpY2sgcG9zaXRpb25cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUFuaW1hdGlvblN0YXRlKGlzVmlzaWJsZSA/ICdlbnRlcicgOiAnbGVhdmUnKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgLy8gUmV0dXJuIHdoZW4gYW5pbWF0aW9uIGlzIG92ZXJcbiAgICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUobnVsbCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgTU9EQUxfQU5JTUFURV9EVVJBVElPTikpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRNb2RhbEJ1dHRvbnMoYnV0dG9uczogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4ge1xuICAgIHJldHVybiBidXR0b25zLm1hcCgoYnV0dG9uKSA9PiB7XG4gICAgICBjb25zdCBtaXhlZEJ1dHRvbiA9IHtcbiAgICAgICAgLi4ue1xuICAgICAgICAgIHR5cGUgICAgICAgOiAnZGVmYXVsdCcsXG4gICAgICAgICAgc2l6ZSAgICAgICA6ICdkZWZhdWx0JyxcbiAgICAgICAgICBhdXRvTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICBzaG93ICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICBsb2FkaW5nICAgIDogZmFsc2UsXG4gICAgICAgICAgZGlzYWJsZWQgICA6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmJ1dHRvblxuICAgICAgfTtcblxuICAgICAgLy8gaWYgKG1peGVkQnV0dG9uLmF1dG9Mb2FkaW5nKSB7IG1peGVkQnV0dG9uLmxvYWRpbmcgPSBmYWxzZTsgfSAvLyBGb3JjZSBsb2FkaW5nIHRvIGZhbHNlIHdoZW4gYXV0b0xvYWRpbmc9dHJ1ZVxuXG4gICAgICByZXR1cm4gbWl4ZWRCdXR0b247XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgY29tcG9uZW50IGR5bmFtaWNhbGx5IGJ1dCBub3QgYXR0YWNoIHRvIGFueSBWaWV3ICh0aGlzIGFjdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYm9keUNvbnRhaW5lciBpcyByZWFkeSlcbiAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgY2xhc3NcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlRHluYW1pY0NvbXBvbmVudChjb21wb25lbnQ6IFR5cGU8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcbiAgICBjb25zdCBjaGlsZEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgIHByb3ZpZGVyczogWyB7IHByb3ZpZGU6IER3TW9kYWxSZWYsIHVzZVZhbHVlOiB0aGlzIH0gXSxcbiAgICAgIHBhcmVudCAgIDogdGhpcy52aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yXG4gICAgfSk7XG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmID0gZmFjdG9yeS5jcmVhdGUoY2hpbGRJbmplY3Rvcik7XG4gICAgaWYgKHRoaXMuZHdDb21wb25lbnRQYXJhbXMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlLCB0aGlzLmR3Q29tcG9uZW50UGFyYW1zKTtcbiAgICB9XG4gICAgLy8gRG8gdGhlIGZpcnN0IGNoYW5nZSBkZXRlY3Rpb24gaW1tZWRpYXRlbHkgKG9yIHdlIGRvIGRldGVjdGlvbiBhdCBuZ0FmdGVyVmlld0luaXQsIG11bHRpLWNoYW5nZXMgZXJyb3Igd2lsbCBiZSB0aHJvd24pXG4gICAgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0cmFuc2Zvcm0tb3JpZ2luIHRvIHRoZSBsYXN0IGNsaWNrIHBvc2l0aW9uIG9uIGRvY3VtZW50XG4gIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtT3JpZ2luKCk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IHRoaXMubW9kYWxDb250YWluZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBsYXN0UG9zaXRpb24gPSBNb2RhbFV0aWwuZ2V0TGFzdENsaWNrUG9zaXRpb24oKTtcbiAgICBpZiAobGFzdFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IGAke2xhc3RQb3NpdGlvbi54IC0gbW9kYWxFbGVtZW50Lm9mZnNldExlZnR9cHggJHtsYXN0UG9zaXRpb24ueSAtIG1vZGFsRWxlbWVudC5vZmZzZXRUb3B9cHggMHB4YDtcbiAgICB9XG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9ICcwcHggMHB4IDBweCc7XG4gICAgLy8gfVxuICB9XG5cbiAgLyoqXG4gICAqIFRha2UgY2FyZSBvZiB0aGUgYm9keSdzIG92ZXJmbG93IHRvIGRlY2lkZSB0aGUgZXhpc3RlbnNlIG9mIHNjcm9sbGJhclxuICAgKiBAcGFyYW0gcGx1c051bSBUaGUgbnVtYmVyIHRoYXQgdGhlIG9wZW5Nb2RhbHMubGVuZ3RoIHdpbGwgaW5jcmVhc2Ugc29vblxuICAgKi9cbiAgcHJpdmF0ZSBjaGFuZ2VCb2R5T3ZlcmZsb3cocGx1c051bTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvQm9keVBhZGRpbmcpIHtcbiAgICAgIGNvbnN0IG9wZW5Nb2RhbHMgPSB0aGlzLm1vZGFsQ29udHJvbC5vcGVuTW9kYWxzO1xuXG4gICAgICBpZiAob3Blbk1vZGFscy5sZW5ndGggKyBwbHVzTnVtID4gMCkge1xuICAgICAgICBpZiAodGhpcy5oYXNCb2R5U2Nyb2xsQmFyKCkpIHsgLy8gQWRkaW5nIHBhZGRpbmctcmlnaHQgb25seSB3aGVuIGJvZHkncyBzY3JvbGxiYXIgaXMgYWJsZSB0byBzaG93biB1cFxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAncGFkZGluZy1yaWdodCcsIGAke3RoaXMuZHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZS5zY3JvbGxCYXJXaWR0aH1weGApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIE5PVEU6IHdlIG5lZWQgdG8gYWx3YXlzIHJlbW92ZSB0aGUgcGFkZGluZyBkdWUgdG8gdGhlIHNjcm9sbCBiYXIgbWF5IGJlIGRpc2FwcGVhciBieSB3aW5kb3cgcmVzaXppbmcgYmVmb3JlIG1vZGFsIGNsb3NlZFxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmRvY3VtZW50LmJvZHksICdvdmVyZmxvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBib2R5IGVsZW1lbnQgaXMgYWJsZSB0byBoYXMgdGhlIHNjcm9sbCBiYXIgKGlmIHRoZSBib2R5IGNvbnRlbnQgaGVpZ2h0IGV4Y2VlZHMgdGhlIHdpbmRvdydzIGhlaWdodClcbiAgICogRXhjZXB0aW9uYWwgQ2FzZXM6IHVzZXJzIGNhbiBzaG93IHRoZSBzY3JvbGwgYmFyIGJ5IHRoZWlyIG93biBwZXJtYW5lbnRseSAoZWcuIG92ZXJmbG93OiBzY3JvbGwpXG4gICAqL1xuICBwcml2YXRlIGhhc0JvZHlTY3JvbGxCYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiAod2luZG93LmlubmVySGVpZ2h0IHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIG1lcmdlRGVmYXVsdENvbmZpZyhjb25maWc6IER3TW9kYWxDb25maWcpOiBEd01vZGFsQ29uZmlnIHtcbiAgICByZXR1cm4geyAuLi5EV19NT0RBTF9ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH07XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmo6IHt9IHwgdm9pZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiAob2JqIGFzIFByb21pc2U8e30+KS50aGVuID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiAob2JqIGFzIFByb21pc2U8e30+KS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJztcbn1cbiJdfQ==
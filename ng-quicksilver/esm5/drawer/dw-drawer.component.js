/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, Renderer2, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs';
import { DwScrollStrategyOptions } from '../core/overlay/scroll/dw-scroll-strategy-options';
import { toCssPixel, InputBoolean } from '../core/util/convert';
import { DwDrawerRef } from './dw-drawer-ref';
/** @type {?} */
export var DRAWER_ANIMATE_DURATION = 300;
/**
 * @template T, R, D
 */
var DwDrawerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DwDrawerComponent, _super);
    function DwDrawerComponent(
    // tslint:disable-next-line:no-any
    document, renderer, overlay, elementRef, injector, changeDetectorRef, focusTrapFactory, dwScrollStrategyOptions, viewContainerRef) {
        var _this = _super.call(this) || this;
        _this.document = document;
        _this.renderer = renderer;
        _this.overlay = overlay;
        _this.elementRef = elementRef;
        _this.injector = injector;
        _this.changeDetectorRef = changeDetectorRef;
        _this.focusTrapFactory = focusTrapFactory;
        _this.dwScrollStrategyOptions = dwScrollStrategyOptions;
        _this.viewContainerRef = viewContainerRef;
        _this.isOpen = false;
        _this.templateContext = {
            $implicit: undefined,
            drawerRef: /** @type {?} */ (_this)
        };
        _this.dwClosable = true;
        _this.dwMaskClosable = true;
        _this.dwMask = true;
        _this.dwPlacement = 'right';
        _this.dwMaskStyle = {};
        _this.dwBodyStyle = {};
        _this.dwWidth = 256;
        _this.dwHeight = 256;
        _this.dwZIndex = 1000;
        _this.dwOffsetX = 0;
        _this.dwOffsetY = 0;
        _this.dwOnViewInit = new EventEmitter();
        _this.dwOnClose = new EventEmitter();
        _this.dwAfterOpen = new Subject();
        _this.dwAfterClose = new Subject();
        return _this;
    }
    Object.defineProperty(DwDrawerComponent.prototype, "transform", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.dwPlacement) {
                case 'left':
                    return this.isOpen ? "translateX(" + this.dwOffsetX + "px)" : "translateX(-" + this.width + ")";
                case 'right':
                    return this.isOpen ? "translateX(-" + this.dwOffsetX + "px)" : "translateX(" + this.width + ")";
                case 'top':
                    return this.isOpen ? "translateY(" + this.dwOffsetY + "px)" : "translateY(-" + this.height + ")";
                case 'bottom':
                    return this.isOpen ? "translateY(-" + this.dwOffsetY + "px)" : "translateY(" + this.height + ")";
                default:
                    return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDrawerComponent.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isLeftOrRight ? toCssPixel(this.dwWidth) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDrawerComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isLeftOrRight ? toCssPixel(this.dwHeight) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDrawerComponent.prototype, "isLeftOrRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwPlacement === 'left' || this.dwPlacement === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDrawerComponent.prototype, "dwVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDrawerComponent.prototype, "afterOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwAfterOpen.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDrawerComponent.prototype, "afterClose", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwAfterClose.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DwDrawerComponent.prototype.isNonEmptyString = /**
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
    DwDrawerComponent.prototype.isTemplateRef = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value instanceof TemplateRef;
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.dwContentParams, drawerRef: /** @type {?} */ (this) };
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.attachBodyContent();
        setTimeout(function () {
            _this.dwOnViewInit.emit();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwDrawerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('dwVisible')) {
            /** @type {?} */
            var value = changes["dwVisible"].currentValue;
            this.updateOverlayStyle();
            if (value) {
                this.updateBodyOverflow();
                this.savePreviouslyFocusedElement();
                this.trapFocus();
            }
            else {
                setTimeout(function () {
                    _this.updateBodyOverflow();
                    _this.restoreFocus();
                }, DRAWER_ANIMATE_DURATION);
            }
        }
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.disposeOverlay();
    };
    /**
     * @param {?=} result
     * @return {?}
     */
    DwDrawerComponent.prototype.close = /**
     * @param {?=} result
     * @return {?}
     */
    function (result) {
        var _this = this;
        this.isOpen = false;
        this.updateOverlayStyle();
        this.changeDetectorRef.detectChanges();
        setTimeout(function () {
            _this.updateBodyOverflow();
            _this.restoreFocus();
            _this.dwAfterClose.next(result);
            _this.dwAfterClose.complete();
        }, DRAWER_ANIMATE_DURATION);
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isOpen = true;
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(function () {
            _this.dwAfterOpen.next();
        }, DRAWER_ANIMATE_DURATION);
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.closeClick = /**
     * @return {?}
     */
    function () {
        this.dwOnClose.emit();
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.maskClick = /**
     * @return {?}
     */
    function () {
        if (this.dwMaskClosable && this.dwMask) {
            this.dwOnClose.emit();
        }
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.attachBodyContent = /**
     * @return {?}
     */
    function () {
        this.bodyPortalOutlet.dispose();
        if (this.dwContent instanceof Type) {
            /** @type {?} */
            var childInjector = new PortalInjector(this.injector, new WeakMap([[DwDrawerRef, this]]));
            /** @type {?} */
            var componentPortal = new ComponentPortal(this.dwContent, null, childInjector);
            /** @type {?} */
            var componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            if (this.dwContentParams) {
                Object.assign(componentRef.instance, this.dwContentParams);
            }
            componentRef.changeDetectorRef.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.attachOverlay = /**
     * @return {?}
     */
    function () {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
        }
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.disposeOverlay = /**
     * @return {?}
     */
    function () {
        this.overlayRef.dispose();
        this.overlayRef = null;
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.getOverlayConfig = /**
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            scrollStrategy: this.dwScrollStrategyOptions.block()
        });
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.updateOverlayStyle = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.updateBodyOverflow = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.savePreviouslyFocusedElement = /**
     * @return {?}
     */
    function () {
        if (this.document) {
            this.previouslyFocusedElement = /** @type {?} */ (this.document.activeElement);
            this.previouslyFocusedElement.blur();
        }
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.trapFocus = /**
     * @return {?}
     */
    function () {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    };
    /**
     * @return {?}
     */
    DwDrawerComponent.prototype.restoreFocus = /**
     * @return {?}
     */
    function () {
        if (this.previouslyFocusedElement) {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    };
    DwDrawerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-drawer',
                    template: "<ng-template #drawerTemplate>\n  <div\n    class=\"ant-drawer\"\n    [class.ant-drawer-open]=\"isOpen\"\n    [class.ant-drawer-top]=\"dwPlacement === 'top'\"\n    [class.ant-drawer-bottom]=\"dwPlacement === 'bottom'\"\n    [class.ant-drawer-right]=\"dwPlacement === 'right'\"\n    [class.ant-drawer-left]=\"dwPlacement === 'left'\">\n    <div  class=\"ant-drawer-mask\" (click)=\"maskClick()\" *ngIf=\"dwMask\" [style.zIndex]=\"dwZIndex\" [ngStyle]=\"dwMaskStyle\"></div>\n    <div class=\"ant-drawer-content-wrapper {{ dwWrapClassName }}\"\n         [style.zIndex]=\"dwZIndex\"\n         [style.width]=\"width\"\n         [style.height]=\"height\"\n         [style.transform]=\"transform\">\n      <div class=\"ant-drawer-content\">\n        <div class=\"ant-drawer-wrapper-body\"\n          [style.overflow]=\"isLeftOrRight ? 'auto' : null\"\n          [style.height]=\"isLeftOrRight ? '100%' : null\">\n          <div *ngIf=\"dwTitle\" class=\"ant-drawer-header\">\n            <div class=\"ant-drawer-title\">\n              <ng-container [ngSwitch]=\"true\">\n                <ng-container *ngSwitchCase=\"isTemplateRef(dwTitle)\" [ngTemplateOutlet]=\"dwTitle\"></ng-container>\n                <ng-container *ngSwitchCase=\"isNonEmptyString(dwTitle)\"><div [innerHTML]=\"dwTitle\"></div></ng-container>\n              </ng-container>\n            </div>\n          </div>\n          <button *ngIf=\"dwClosable\" (click)=\"closeClick()\" aria-label=\"Close\" class=\"ant-drawer-close\"><span class=\"ant-drawer-close-x\"></span></button>\n          <div class=\"ant-drawer-body\" [ngStyle]=\"dwBodyStyle\">\n            <ng-template cdkPortalOutlet></ng-template>\n            <ng-container *ngIf=\"isTemplateRef(dwContent)\">\n              <ng-container *ngTemplateOutlet=\"dwContent; context: templateContext\"></ng-container>\n            </ng-container>\n            <ng-content *ngIf=\"!dwContent\"></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DwDrawerComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: Overlay },
        { type: ElementRef },
        { type: Injector },
        { type: ChangeDetectorRef },
        { type: FocusTrapFactory },
        { type: DwScrollStrategyOptions },
        { type: ViewContainerRef }
    ]; };
    DwDrawerComponent.propDecorators = {
        drawerTemplate: [{ type: ViewChild, args: ['drawerTemplate',] }],
        contentTemplate: [{ type: ViewChild, args: ['contentTemplate',] }],
        bodyPortalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet,] }],
        dwContent: [{ type: Input }],
        dwClosable: [{ type: Input }],
        dwMaskClosable: [{ type: Input }],
        dwMask: [{ type: Input }],
        dwTitle: [{ type: Input }],
        dwPlacement: [{ type: Input }],
        dwMaskStyle: [{ type: Input }],
        dwBodyStyle: [{ type: Input }],
        dwWrapClassName: [{ type: Input }],
        dwWidth: [{ type: Input }],
        dwHeight: [{ type: Input }],
        dwZIndex: [{ type: Input }],
        dwOffsetX: [{ type: Input }],
        dwOffsetY: [{ type: Input }],
        dwVisible: [{ type: Input }],
        dwOnViewInit: [{ type: Output }],
        dwOnClose: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwDrawerComponent.prototype, "dwClosable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwDrawerComponent.prototype, "dwMaskClosable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwDrawerComponent.prototype, "dwMask", void 0);
    return DwDrawerComponent;
}(DwDrawerRef));
export { DwDrawerComponent };
function DwDrawerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDrawerComponent.prototype.previouslyFocusedElement;
    /** @type {?} */
    DwDrawerComponent.prototype.dwContentParams;
    /** @type {?} */
    DwDrawerComponent.prototype.overlayRef;
    /** @type {?} */
    DwDrawerComponent.prototype.portal;
    /** @type {?} */
    DwDrawerComponent.prototype.focusTrap;
    /** @type {?} */
    DwDrawerComponent.prototype.isOpen;
    /** @type {?} */
    DwDrawerComponent.prototype.templateContext;
    /** @type {?} */
    DwDrawerComponent.prototype.drawerTemplate;
    /** @type {?} */
    DwDrawerComponent.prototype.contentTemplate;
    /** @type {?} */
    DwDrawerComponent.prototype.bodyPortalOutlet;
    /** @type {?} */
    DwDrawerComponent.prototype.dwContent;
    /** @type {?} */
    DwDrawerComponent.prototype.dwClosable;
    /** @type {?} */
    DwDrawerComponent.prototype.dwMaskClosable;
    /** @type {?} */
    DwDrawerComponent.prototype.dwMask;
    /** @type {?} */
    DwDrawerComponent.prototype.dwTitle;
    /** @type {?} */
    DwDrawerComponent.prototype.dwPlacement;
    /** @type {?} */
    DwDrawerComponent.prototype.dwMaskStyle;
    /** @type {?} */
    DwDrawerComponent.prototype.dwBodyStyle;
    /** @type {?} */
    DwDrawerComponent.prototype.dwWrapClassName;
    /** @type {?} */
    DwDrawerComponent.prototype.dwWidth;
    /** @type {?} */
    DwDrawerComponent.prototype.dwHeight;
    /** @type {?} */
    DwDrawerComponent.prototype.dwZIndex;
    /** @type {?} */
    DwDrawerComponent.prototype.dwOffsetX;
    /** @type {?} */
    DwDrawerComponent.prototype.dwOffsetY;
    /** @type {?} */
    DwDrawerComponent.prototype.dwOnViewInit;
    /** @type {?} */
    DwDrawerComponent.prototype.dwOnClose;
    /** @type {?} */
    DwDrawerComponent.prototype.dwAfterOpen;
    /** @type {?} */
    DwDrawerComponent.prototype.dwAfterClose;
    /** @type {?} */
    DwDrawerComponent.prototype.document;
    /** @type {?} */
    DwDrawerComponent.prototype.renderer;
    /** @type {?} */
    DwDrawerComponent.prototype.overlay;
    /** @type {?} */
    DwDrawerComponent.prototype.elementRef;
    /** @type {?} */
    DwDrawerComponent.prototype.injector;
    /** @type {?} */
    DwDrawerComponent.prototype.changeDetectorRef;
    /** @type {?} */
    DwDrawerComponent.prototype.focusTrapFactory;
    /** @type {?} */
    DwDrawerComponent.prototype.dwScrollStrategyOptions;
    /** @type {?} */
    DwDrawerComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZHJhd2VyL2R3LWRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLElBQUksRUFDSixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sc0JBQXNCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZHLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTlDLFdBQWEsdUJBQXVCLEdBQUcsR0FBRyxDQUFDOzs7OztJQVN1Qiw2Q0FBYztJQXdGOUU7O0lBRXdDLFFBQWEsRUFDM0MsVUFDQSxTQUNBLFlBQ0EsVUFDQSxtQkFDQSxrQkFDQSx5QkFDQTtRQVZWLFlBV0UsaUJBQU8sU0FDUjtRQVZ1QyxjQUFRLEdBQVIsUUFBUSxDQUFLO1FB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NEJBQ0wsS0FBSzs0QkFFTCxLQUFLOytCQVNMLE1BQU07NEJBQ04sTUFBTTs7O1FBeEJHLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzRCQTFGMUI7RUE0Q2tFLFdBQVc7U0FBaEUsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEd1Njcm9sbFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9zY3JvbGwvZHctc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMnO1xuaW1wb3J0IHsgdG9Dc3NQaXhlbCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdEcmF3ZXJPcHRpb25zLCBEd0RyYXdlclBsYWNlbWVudCB9IGZyb20gJy4vZHctZHJhd2VyLW9wdGlvbnMnO1xuaW1wb3J0IHsgRHdEcmF3ZXJSZWYgfSBmcm9tICcuL2R3LWRyYXdlci1yZWYnO1xuXG5leHBvcnQgY29uc3QgRFJBV0VSX0FOSU1BVEVfRFVSQVRJT04gPSAzMDA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctZHJhd2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmV4cG9ydCBjbGFzcyBEd0RyYXdlckNvbXBvbmVudDxUID0gYW55LCBSID0gYW55LCBEID0gYW55PiBleHRlbmRzIER3RHJhd2VyUmVmPFI+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgRHdEcmF3ZXJPcHRpb25zIHtcbiAgcHJldmlvdXNseUZvY3VzZWRFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgZHdDb250ZW50UGFyYW1zOiBEOyAvLyBvbmx5IHNlcnZpY2VcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcbiAgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG4gIGlzT3BlbiA9IGZhbHNlO1xuICB0ZW1wbGF0ZUNvbnRleHQ6IHsgJGltcGxpY2l0OiBEOyBkcmF3ZXJSZWY6IER3RHJhd2VyUmVmPFI+IH0gPSB7XG4gICAgJGltcGxpY2l0OiB1bmRlZmluZWQsXG4gICAgZHJhd2VyUmVmOiB0aGlzIGFzIER3RHJhd2VyUmVmPFI+XG4gIH07XG5cbiAgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcge1xuXG4gICAgc3dpdGNoICh0aGlzLmR3UGxhY2VtZW50KSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuID8gYHRyYW5zbGF0ZVgoJHt0aGlzLmR3T2Zmc2V0WH1weClgIDogYHRyYW5zbGF0ZVgoLSR7dGhpcy53aWR0aH0pYDtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuID8gYHRyYW5zbGF0ZVgoLSR7dGhpcy5kd09mZnNldFh9cHgpYCA6IGB0cmFuc2xhdGVYKCR7dGhpcy53aWR0aH0pYDtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHJldHVybiB0aGlzLmlzT3BlbiA/IGB0cmFuc2xhdGVZKCR7dGhpcy5kd09mZnNldFl9cHgpYCA6IGB0cmFuc2xhdGVZKC0ke3RoaXMuaGVpZ2h0fSlgO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuID8gYHRyYW5zbGF0ZVkoLSR7dGhpcy5kd09mZnNldFl9cHgpYCA6IGB0cmFuc2xhdGVZKCR7dGhpcy5oZWlnaHR9KWA7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaXNMZWZ0T3JSaWdodCA/IHRvQ3NzUGl4ZWwodGhpcy5kd1dpZHRoKSA6IG51bGw7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICF0aGlzLmlzTGVmdE9yUmlnaHQgPyB0b0Nzc1BpeGVsKHRoaXMuZHdIZWlnaHQpIDogbnVsbDtcbiAgfVxuXG4gIGdldCBpc0xlZnRPclJpZ2h0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3UGxhY2VtZW50ID09PSAnbGVmdCcgfHwgdGhpcy5kd1BsYWNlbWVudCA9PT0gJ3JpZ2h0JztcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2RyYXdlclRlbXBsYXRlJykgZHJhd2VyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJykgY29udGVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7fT47XG4gIEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0KSBib2R5UG9ydGFsT3V0bGV0OiBDZGtQb3J0YWxPdXRsZXQ7XG4gIEBJbnB1dCgpIGR3Q29udGVudDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IEQsIGRyYXdlclJlZjogRHdEcmF3ZXJSZWY8Uj4gfT4gfCBUeXBlPFQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdDbG9zYWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd01hc2tDbG9zYWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd01hc2sgPSB0cnVlO1xuICBASW5wdXQoKSBkd1RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XG4gIEBJbnB1dCgpIGR3UGxhY2VtZW50OiBEd0RyYXdlclBsYWNlbWVudCA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIGR3TWFza1N0eWxlOiBvYmplY3QgPSB7fTtcbiAgQElucHV0KCkgZHdCb2R5U3R5bGU6IG9iamVjdCA9IHt9O1xuICBASW5wdXQoKSBkd1dyYXBDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZHdXaWR0aDogbnVtYmVyIHwgc3RyaW5nID0gMjU2O1xuICBASW5wdXQoKSBkd0hlaWdodDogbnVtYmVyIHwgc3RyaW5nID0gMjU2O1xuICBASW5wdXQoKSBkd1pJbmRleCA9IDEwMDA7XG4gIEBJbnB1dCgpIGR3T2Zmc2V0WCA9IDA7XG4gIEBJbnB1dCgpIGR3T2Zmc2V0WSA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcbiAgfVxuXG4gIEBPdXRwdXQoKSBkd09uVmlld0luaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBkd09uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIGR3QWZ0ZXJPcGVuID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZHdBZnRlckNsb3NlID0gbmV3IFN1YmplY3Q8Uj4oKTtcblxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmR3QWZ0ZXJPcGVuLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGFmdGVyQ2xvc2UoKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgcmV0dXJuIHRoaXMuZHdBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgaXNOb25FbXB0eVN0cmluZyh2YWx1ZToge30pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gJyc7XG4gIH1cblxuICBpc1RlbXBsYXRlUmVmKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZvY3VzVHJhcEZhY3Rvcnk6IEZvY3VzVHJhcEZhY3RvcnksXG4gICAgcHJpdmF0ZSBkd1Njcm9sbFN0cmF0ZWd5T3B0aW9uczogRHdTY3JvbGxTdHJhdGVneU9wdGlvbnMsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xuICAgIHRoaXMudXBkYXRlT3ZlcmxheVN0eWxlKCk7XG4gICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dCA9IHsgJGltcGxpY2l0OiB0aGlzLmR3Q29udGVudFBhcmFtcywgZHJhd2VyUmVmOiB0aGlzIGFzIER3RHJhd2VyUmVmPFI+IH07XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hCb2R5Q29udGVudCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kd09uVmlld0luaXQuZW1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkd1Zpc2libGUnKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBjaGFuZ2VzLmR3VmlzaWJsZS5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZU92ZXJsYXlTdHlsZSgpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XG4gICAgICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xuICAgICAgICB0aGlzLnRyYXBGb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVCb2R5T3ZlcmZsb3coKTtcbiAgICAgICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xuICAgICAgICB9LCBEUkFXRVJfQU5JTUFURV9EVVJBVElPTik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwb3NlT3ZlcmxheSgpO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogUik6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVPdmVybGF5U3R5bGUoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XG4gICAgICB0aGlzLnJlc3RvcmVGb2N1cygpO1xuICAgICAgdGhpcy5kd0FmdGVyQ2xvc2UubmV4dChyZXN1bHQpO1xuICAgICAgdGhpcy5kd0FmdGVyQ2xvc2UuY29tcGxldGUoKTtcbiAgICB9LCBEUkFXRVJfQU5JTUFURV9EVVJBVElPTik7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZU92ZXJsYXlTdHlsZSgpO1xuICAgIHRoaXMudXBkYXRlQm9keU92ZXJmbG93KCk7XG4gICAgdGhpcy5zYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk7XG4gICAgdGhpcy50cmFwRm9jdXMoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZHdBZnRlck9wZW4ubmV4dCgpO1xuICAgIH0sIERSQVdFUl9BTklNQVRFX0RVUkFUSU9OKTtcbiAgfVxuXG4gIGNsb3NlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kd09uQ2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgbWFza0NsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3TWFza0Nsb3NhYmxlICYmIHRoaXMuZHdNYXNrKSB7XG4gICAgICB0aGlzLmR3T25DbG9zZS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hCb2R5Q29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLmJvZHlQb3J0YWxPdXRsZXQuZGlzcG9zZSgpO1xuXG4gICAgaWYgKHRoaXMuZHdDb250ZW50IGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgY29uc3QgY2hpbGRJbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBuZXcgV2Vha01hcChbIFsgRHdEcmF3ZXJSZWYsIHRoaXMgXSBdKSk7XG4gICAgICBjb25zdCBjb21wb25lbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsPFQ+KHRoaXMuZHdDb250ZW50LCBudWxsLCBjaGlsZEluamVjdG9yKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuYm9keVBvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwoY29tcG9uZW50UG9ydGFsKTtcbiAgICAgIGlmICh0aGlzLmR3Q29udGVudFBhcmFtcykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFJlZi5pbnN0YW5jZSwgdGhpcy5kd0NvbnRlbnRQYXJhbXMpO1xuICAgICAgfVxuICAgICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJhd2VyVGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwb3NlT3ZlcmxheSgpOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLmR3U2Nyb2xsU3RyYXRlZ3lPcHRpb25zLmJsb2NrKClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlT3ZlcmxheVN0eWxlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudCwgJ3BvaW50ZXItZXZlbnRzJywgdGhpcy5pc09wZW4gPyAnYXV0bycgOiAnbm9uZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQm9keU92ZXJmbG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYuZ2V0Q29uZmlnKCkuc2Nyb2xsU3RyYXRlZ3kuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNhdmVQcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQpIHtcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhcEZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mb2N1c1RyYXApIHtcbiAgICAgIHRoaXMuZm9jdXNUcmFwID0gdGhpcy5mb2N1c1RyYXBGYWN0b3J5LmNyZWF0ZSh0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzVHJhcC5mb2N1c0luaXRpYWxFbGVtZW50V2hlblJlYWR5KCk7XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xuICAgICAgdGhpcy5mb2N1c1RyYXAuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIl19
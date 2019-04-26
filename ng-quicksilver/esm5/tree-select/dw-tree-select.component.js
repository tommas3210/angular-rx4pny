/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, Input, Optional, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { selectDropDownAnimation } from '../core/animation/select-dropdown-animations';
import { selectTagAnimation } from '../core/animation/select-tag-animations';
import { InputBoolean } from '../core/util/convert';
import { DwTreeComponent } from '../tree/dw-tree.component';
var DwTreeSelectComponent = /** @class */ (function () {
    function DwTreeSelectComponent(document, // tslint:disable-line:no-any
    // tslint:disable-line:no-any
    element, renderer, cdr, overlay, viewContainerRef) {
        this.document = document;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nodes = [];
        this.isComposing = false;
        this.isDestroy = true;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.value = [];
        this.dwAllowClear = true;
        this.dwShowExpand = true;
        this.dwDropdownMatchSelectWidth = true;
        this.dwCheckable = false;
        this.dwShowSearch = false;
        this.dwDisabled = false;
        this.dwShowLine = false;
        this.dwAsyncData = false;
        this.dwMultiple = false;
        this.dwDefaultExpandAll = false;
        this.dwOpen = false;
        this.dwSize = 'default';
        this.dwPlaceHolder = '';
        this.dwDefaultExpandedKeys = [];
        this.dwDisplayWith = function (node) { return node.title; };
        this.dwOpenChange = new EventEmitter();
        this.dwCleared = new EventEmitter();
        this.dwRemoved = new EventEmitter();
        this.dwExpandChange = new EventEmitter();
        this.dwTreeClick = new EventEmitter();
        this.dwTreeCheckBoxChange = new EventEmitter();
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(DwTreeSelectComponent.prototype, "dwNodes", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nodes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this.nodes = value;
            if (this.treeRef) {
                setTimeout(function () { return _this.updateSelectedNodes(); }, 0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeSelectComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeSelectComponent.prototype, "searchDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwOpen ? 'block' : 'none';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeSelectComponent.prototype, "isMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwMultiple || this.dwCheckable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTreeSelectComponent.prototype, "selectedValueDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var showSelectedValue = false;
            /** @type {?} */
            var opacity = 1;
            if (!this.dwShowSearch) {
                showSelectedValue = true;
            }
            else {
                if (this.dwOpen) {
                    showSelectedValue = !(this.inputValue || this.isComposing);
                    if (showSelectedValue) {
                        opacity = 0.4;
                    }
                }
                else {
                    showSelectedValue = true;
                }
            }
            return {
                display: showSelectedValue ? 'block' : 'none',
                opacity: "" + opacity
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        if (this.dwDisabled || (!this.dwDisabled && this.dwOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.dwShowSearch) {
                this.focusOnInput();
            }
        }
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.openDropdown = /**
     * @return {?}
     */
    function () {
        if (!this.dwDisabled) {
            this.dwOpen = true;
            this.dwOpenChange.emit(this.dwOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
            this.updateDropDownClassMap();
        }
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        this.dwOpen = false;
        this.dwOpenChange.emit(this.dwOpen);
        this.updateCdkConnectedOverlayStatus();
        this.cdr.markForCheck();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTreeSelectComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = /** @type {?} */ (e.target);
        if (this.isMultiple &&
            !eventTarget.value &&
            keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                this.removeSelected(this.selectedNodes[this.selectedNodes.length - 1]);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTreeSelectComponent.prototype.setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.detachOverlay = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.onTouched();
            this.dwOpen = false;
            this.dwOpenChange.emit(this.dwOpen);
        }
    };
    /**
     * @param {?} node
     * @param {?=} emit
     * @return {?}
     */
    DwTreeSelectComponent.prototype.removeSelected = /**
     * @param {?} node
     * @param {?=} emit
     * @return {?}
     */
    function (node, emit) {
        if (emit === void 0) { emit = true; }
        node.isSelected = false;
        node.isChecked = false;
        if (this.dwCheckable) {
            this.treeRef.dwTreeService.conduct(node);
            this.treeRef.dwTreeService.setCheckedNodeList(node);
        }
        else {
            this.treeRef.dwTreeService.setSelectedNodeList(node, this.dwMultiple);
        }
        if (emit) {
            this.dwRemoved.emit(node);
        }
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.focusOnInput = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            if (_this.inputElement) {
                _this.inputElement.nativeElement.focus();
            }
        });
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.attachOverlay = /**
     * @return {?}
     */
    function () {
        this.portal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.portal);
        this.cdr.detectChanges();
        this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.getOverlayConfig = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        return new OverlayConfig((_a = {
                positionStrategy: this.getOverlayPosition(),
                scrollStrategy: this.overlay.scrollStrategies.reposition()
            },
            _a[this.dwDropdownMatchSelectWidth ? 'width' : 'minWidth'] = overlayWidth,
            _a.hasBackdrop = true,
            _a));
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.getOverlayPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.treeSelect)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.subscribeOverlayBackdropClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.overlayRef.backdropClick()
            .subscribe(function () {
            _this.closeDropDown();
        });
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.subscribeSelectionChange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(this.dwTreeClick.pipe(tap(function (event) {
            /** @type {?} */
            var node = event.node;
            if (_this.dwCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                _this.treeRef.dwTreeService.conduct(node);
                _this.treeRef.dwTreeService.setCheckedNodeList(node);
            }
            if (_this.dwCheckable) {
                node.isSelected = false;
            }
        }), filter(function (event) {
            return _this.dwCheckable ? (!event.node.isDisabled && !event.node.isDisableCheckbox) : !event.node.isDisabled;
        })), this.dwCheckable ? this.dwTreeCheckBoxChange : observableOf(), this.dwCleared, this.dwRemoved).subscribe(function () {
            _this.updateSelectedNodes();
            /** @type {?} */
            var value = _this.selectedNodes.map(function (node) { return node.key; });
            _this.value = tslib_1.__spread(value);
            if (_this.dwShowSearch) {
                _this.inputValue = '';
            }
            if (_this.isMultiple) {
                _this.onChange(value);
                if (_this.dwShowSearch) {
                    _this.focusOnInput();
                }
            }
            else {
                _this.closeDropDown();
                _this.onChange(value.length ? value[0] : null);
            }
        });
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.updateSelectedNodes = /**
     * @return {?}
     */
    function () {
        this.selectedNodes = tslib_1.__spread((this.dwCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList()));
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        this.overlayRef.updatePosition();
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.updateInputWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.onClearSelection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectedNodes.forEach(function (node) {
            _this.removeSelected(node, false);
        });
        this.dwCleared.emit();
        this.closeDropDown();
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.updateDropDownClassMap = /**
     * @return {?}
     */
    function () {
        var _a, _b;
        if (this.treeRef && !this.treeRef.dwTreeClass['ant-select-tree']) {
            this.treeRef.dwTreeClass = tslib_1.__assign({}, this.treeRef.dwTreeClass, (_a = {}, _a['ant-select-tree'] = true, _a));
        }
        this.dropDownClassMap = (_b = {},
            _b['ant-select-dropdown'] = true,
            _b['ant-select-tree-dropdown'] = true,
            _b["ant-select-dropdown--single"] = !this.dwMultiple,
            _b["ant-select-dropdown--multiple"] = this.dwMultiple,
            _b["ant-select-dropdown-placement-bottomLeft"] = this.dropDownPosition === 'bottom',
            _b["ant-select-dropdown-placement-topLeft"] = this.dropDownPosition === 'top',
            _b);
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        if (this.dwDropdownMatchSelectWidth) {
            this.overlayRef.updateSize({ width: overlayWidth });
        }
        else {
            this.overlayRef.updateSize({ minWidth: overlayWidth });
        }
        if (this.dwOpen) {
            this.renderer.removeStyle(this.overlayRef.backdropElement, 'display');
        }
        else {
            this.renderer.setStyle(this.overlayRef.backdropElement, 'display', 'none');
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTreeSelectComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            setTimeout(function () { return _this.updateSelectedNodes(); }, 100);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(function (node) {
                _this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwTreeSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwTreeSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        Promise.resolve().then(function () {
            _this.updateDropDownClassMap();
            _this.updateCdkConnectedOverlayStatus();
        });
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
        this.detachOverlay();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayBackdropClickSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    DwTreeSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DwTreeSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.dwDisabled = isDisabled;
        this.closeDropDown();
    };
    DwTreeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-tree-select',
                    animations: [selectDropDownAnimation, selectTagAnimation],
                    template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"off\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"dwDisabled\">\n</ng-template>\n\n<ng-template #dropdownTemplate>\n  <div [ngClass]=\"dropDownClassMap\" [@selectDropDownAnimation]=\"dwOpen ? dropDownPosition : 'hidden'\"\n    [ngStyle]=\"dwDropdownStyle\">\n    <dw-tree\n      #treeRef\n      [dwData]=\"dwNodes\"\n      [dwMultiple]=\"dwMultiple\"\n      [dwSearchValue]=\"inputValue\"\n      [dwCheckable]=\"dwCheckable\"\n      [dwAsyncData]=\"dwAsyncData\"\n      [dwShowExpand]=\"dwShowExpand\"\n      [dwShowLine]=\"dwShowLine\"\n      [dwExpandAll]=\"dwDefaultExpandAll\"\n      [dwExpandedKeys]=\"dwDefaultExpandedKeys\"\n      [dwCheckedKeys]=\"dwCheckable ? value : []\"\n      [dwSelectedKeys]=\"!dwCheckable ? value : []\"\n      (dwExpandChange)=\"dwExpandChange.emit($event)\"\n      (dwClick)=\"dwTreeClick.emit($event)\"\n      (dwCheckBoxChange)=\"dwTreeCheckBoxChange.emit($event)\">\n    </dw-tree>\n  </div>\n</ng-template>\n\n<div\n  #treeSelect\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"!isMultiple\"\n  [class.ant-select-selection--multiple]=\"isMultiple\"\n  tabindex=\"0\">\n  <ng-container *ngIf=\"!isMultiple\">\n    <div class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"dwPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ dwPlaceHolder }}\n      </div>\n\n      <div\n        *ngIf=\"selectedNodes.length === 1\"\n        class=\"ant-select-selection-selected-value\"\n        [attr.title]=\"dwDisplayWith(selectedNodes[0])\"\n        [ngStyle]=\"selectedValueDisplay\">\n        {{ dwDisplayWith(selectedNodes[0]) }}\n      </div>\n\n      <div\n        *ngIf=\"dwShowSearch\"\n        [style.display]=\"searchDisplay\"\n        class=\"ant-select-search ant-select-search--inline\">\n        <div class=\"ant-select-search__field__wrap\">\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isMultiple\">\n    <ul class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"dwPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ dwPlaceHolder }}\n      </div>\n      <ng-container *ngFor=\"let node of selectedNodes\">\n        <li\n          [@selectTagAnimation]\n          (@selectTagAnimation.done)=\"updatePosition()\"\n          [attr.title]=\"dwDisplayWith(node)\"\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\n          class=\"ant-select-selection__choice\">\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\n                 (click)=\"removeSelected(node)\"></span>\n          <span class=\"ant-select-selection__choice__content\">{{ dwDisplayWith(node) }}</span>\n        </li>\n      </ng-container>\n      <li class=\"ant-select-search ant-select-search--inline\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </li>\n    </ul>\n  </ng-container>\n  <span *ngIf=\"dwAllowClear\" class=\"ant-select-selection__clear\"\n    (click)=\"onClearSelection()\"></span>\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\"><b></b></span>\n</div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return DwTreeSelectComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-select]': 'true',
                        '[class.ant-select-lg]': 'dwSize==="large"',
                        '[class.ant-select-sm]': 'dwSize==="small"',
                        '[class.ant-select-enabled]': '!dwDisabled',
                        '[class.ant-select-disabled]': 'dwDisabled',
                        '[class.ant-select-allow-clear]': 'dwAllowClear',
                        '[class.ant-select-open]': 'dwOpen'
                    },
                    styles: ["\n    .ant-select-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n      overflow: auto;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DwTreeSelectComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef, decorators: [{ type: Optional }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: Overlay },
        { type: ViewContainerRef }
    ]; };
    DwTreeSelectComponent.propDecorators = {
        dwAllowClear: [{ type: Input }],
        dwShowExpand: [{ type: Input }],
        dwDropdownMatchSelectWidth: [{ type: Input }],
        dwCheckable: [{ type: Input }],
        dwShowSearch: [{ type: Input }],
        dwDisabled: [{ type: Input }],
        dwShowLine: [{ type: Input }],
        dwAsyncData: [{ type: Input }],
        dwMultiple: [{ type: Input }],
        dwDefaultExpandAll: [{ type: Input }],
        dwOpen: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwPlaceHolder: [{ type: Input }],
        dwDropdownStyle: [{ type: Input }],
        dwDefaultExpandedKeys: [{ type: Input }],
        dwDisplayWith: [{ type: Input }],
        dwOpenChange: [{ type: Output }],
        dwCleared: [{ type: Output }],
        dwRemoved: [{ type: Output }],
        dwExpandChange: [{ type: Output }],
        dwTreeClick: [{ type: Output }],
        dwTreeCheckBoxChange: [{ type: Output }],
        dwNodes: [{ type: Input }],
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        treeSelect: [{ type: ViewChild, args: ['treeSelect',] }],
        dropdownTemplate: [{ type: ViewChild, args: ['dropdownTemplate', { read: TemplateRef },] }],
        treeRef: [{ type: ViewChild, args: ['treeRef',] }],
        trigger: [{ type: HostListener, args: ['click',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwDropdownMatchSelectWidth", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwShowSearch", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], DwTreeSelectComponent.prototype, "dwDefaultExpandAll", void 0);
    return DwTreeSelectComponent;
}());
export { DwTreeSelectComponent };
function DwTreeSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTreeSelectComponent.prototype.nodes;
    /** @type {?} */
    DwTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    DwTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    DwTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    DwTreeSelectComponent.prototype.overlayRef;
    /** @type {?} */
    DwTreeSelectComponent.prototype.portal;
    /** @type {?} */
    DwTreeSelectComponent.prototype.positionStrategy;
    /** @type {?} */
    DwTreeSelectComponent.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    DwTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    DwTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    DwTreeSelectComponent.prototype.value;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwAllowClear;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwShowExpand;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwDropdownMatchSelectWidth;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwCheckable;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwShowSearch;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwDisabled;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwShowLine;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwAsyncData;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwMultiple;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwDefaultExpandAll;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwOpen;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwSize;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwPlaceHolder;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwDropdownStyle;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwDefaultExpandedKeys;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwDisplayWith;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwOpenChange;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwCleared;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwRemoved;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwExpandChange;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwTreeClick;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dwTreeCheckBoxChange;
    /** @type {?} */
    DwTreeSelectComponent.prototype.inputElement;
    /** @type {?} */
    DwTreeSelectComponent.prototype.treeSelect;
    /** @type {?} */
    DwTreeSelectComponent.prototype.dropdownTemplate;
    /** @type {?} */
    DwTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    DwTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    DwTreeSelectComponent.prototype.onTouched;
    /** @type {?} */
    DwTreeSelectComponent.prototype.document;
    /** @type {?} */
    DwTreeSelectComponent.prototype.element;
    /** @type {?} */
    DwTreeSelectComponent.prototype.renderer;
    /** @type {?} */
    DwTreeSelectComponent.prototype.cdr;
    /** @type {?} */
    DwTreeSelectComponent.prototype.overlay;
    /** @type {?} */
    DwTreeSelectComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0cmVlLXNlbGVjdC9kdy10cmVlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUNMLEtBQUssRUFDTCxFQUFFLElBQUksWUFBWSxFQUVuQixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUErSDFELCtCQUN3QyxRQUFhLEVBQUUs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Ozs7UUFyRlgsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7Z0NBeEcxQjs7U0E4RWEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQkFDS1NQQUNFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG4gIG1lcmdlLFxuICBvZiBhcyBvYnNlcnZhYmxlT2YsXG4gIFN1YnNjcmlwdGlvblxufSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBzZWxlY3REcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL3NlbGVjdC1kcm9wZG93bi1hbmltYXRpb25zJztcbmltcG9ydCB7IHNlbGVjdFRhZ0FuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL3NlbGVjdC10YWctYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd0Zvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4uL3RyZWUvaW50ZXJmYWNlJztcbmltcG9ydCB7IER3VHJlZU5vZGUgfSBmcm9tICcuLi90cmVlL2R3LXRyZWUtbm9kZSc7XG5pbXBvcnQgeyBEd1RyZWVDb21wb25lbnQgfSBmcm9tICcuLi90cmVlL2R3LXRyZWUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnZHctdHJlZS1zZWxlY3QnLFxuICBhbmltYXRpb25zIDogWyBzZWxlY3REcm9wRG93bkFuaW1hdGlvbiwgc2VsZWN0VGFnQW5pbWF0aW9uIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9kdy10cmVlLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdUcmVlU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0ICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdF0nICAgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXScgICAgICAgICA6ICdkd1NpemU9PT1cImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nICAgICAgICAgOiAnZHdTaXplPT09XCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nICAgIDogJyFkd0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJyAgIDogJ2R3RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnZHdBbGxvd0NsZWFyJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nICAgICAgIDogJ2R3T3BlbidcbiAgfSxcbiAgc3R5bGVzICAgICA6IFsgYFxuICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIER3VHJlZVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBub2RlcyA9IFtdO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBpc0Rlc3Ryb3kgPSB0cnVlO1xuICBpbnB1dFZhbHVlID0gJyc7XG4gIGRyb3BEb3duQ2xhc3NNYXA6IHsgWyBjbGFzc05hbWU6IHN0cmluZyBdOiBib29sZWFuIH07XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBvdmVybGF5UmVmOiBPdmVybGF5UmVmO1xuICBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHt9PjtcbiAgcG9zaXRpb25TdHJhdGVneTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5O1xuICBvdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBzZWxlY3RlZE5vZGVzOiBEd1RyZWVOb2RlW10gPSBbXTtcbiAgdmFsdWU6IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd1Nob3dFeHBhbmQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdDaGVja2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3U2hvd1NlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdTaG93TGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBkd09wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZHdTaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBkd1BsYWNlSG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGR3RHJvcGRvd25TdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZzsgfTtcbiAgQElucHV0KCkgZHdEZWZhdWx0RXhwYW5kZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBkd0Rpc3BsYXlXaXRoOiAobm9kZTogRHdUcmVlTm9kZSkgPT4gc3RyaW5nID0gKG5vZGU6IER3VHJlZU5vZGUpID0+IG5vZGUudGl0bGU7XG4gIEBPdXRwdXQoKSBkd09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBkd0NsZWFyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSBkd1JlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPER3VHJlZU5vZGU+KCk7XG4gIEBPdXRwdXQoKSBkd0V4cGFuZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkd1RyZWVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBkd1RyZWVDaGVja0JveENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHdGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Tm9kZXModmFsdWU6IER3VHJlZU5vZGVbXSkge1xuICAgIHRoaXMubm9kZXMgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy50cmVlUmVmKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpLCAwKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdOb2RlcygpOiBEd1RyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JykgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0cmVlU2VsZWN0JykgdHJlZVNlbGVjdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25UZW1wbGF0ZScsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgZHJvcGRvd25UZW1wbGF0ZTtcbiAgQFZpZXdDaGlsZCgndHJlZVJlZicpIHRyZWVSZWY6IER3VHJlZUNvbXBvbmVudDtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZykgPT4gdm9pZDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlYXJjaERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kd09wZW4gPyAnYmxvY2snIDogJ25vbmUnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdNdWx0aXBsZSB8fCB0aGlzLmR3Q2hlY2thYmxlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSB7XG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG9wYWNpdHkgPSAxO1xuICAgIGlmICghdGhpcy5kd1Nob3dTZWFyY2gpIHtcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHdPcGVuKSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQgfHwgKCF0aGlzLmR3RGlzYWJsZWQgJiYgdGhpcy5kd09wZW4pKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgIGlmICh0aGlzLmR3U2hvd1NlYXJjaCkge1xuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kd09wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5kd09wZW5DaGFuZ2UuZW1pdCh0aGlzLmR3T3Blbik7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmR3T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNNdWx0aXBsZSAmJlxuICAgICAgIWV2ZW50VGFyZ2V0LnZhbHVlICYmXG4gICAgICBrZXlDb2RlID09PSBCQUNLU1BBQ0VcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQodGhpcy5zZWxlY3RlZE5vZGVzWyB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMSBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICBkZXRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLmR3T3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5kd09wZW5DaGFuZ2UuZW1pdCh0aGlzLmR3T3Blbik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogRHdUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmR3Q2hlY2thYmxlKSB7XG4gICAgICB0aGlzLnRyZWVSZWYuZHdUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xuICAgICAgdGhpcy50cmVlUmVmLmR3VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRyZWVSZWYuZHdUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUsIHRoaXMuZHdNdWx0aXBsZSk7XG4gICAgfVxuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLmR3UmVtb3ZlZC5lbWl0KG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuZHJvcGRvd25UZW1wbGF0ZSwgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHRoaXMucG9ydGFsKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcbiAgfVxuXG4gIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3Qgb3ZlcmxheVdpZHRoID0gdGhpcy50cmVlU2VsZWN0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXG4gICAgICBzY3JvbGxTdHJhdGVneSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKCksXG4gICAgICBbIHRoaXMuZHdEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyAnd2lkdGgnIDogJ21pbldpZHRoJyBdOiBvdmVybGF5V2lkdGgsXG4gICAgICBoYXNCYWNrZHJvcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBnZXRPdmVybGF5UG9zaXRpb24oKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxuICAgIF07XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLnRyZWVTZWxlY3QpXG4gICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxuICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgIC53aXRoUHVzaChmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKClcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgdGhpcy5kd1RyZWVDbGljay5waXBlKFxuICAgICAgICB0YXAoKGV2ZW50OiBEd0Zvcm1hdEVtaXRFdmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5ub2RlO1xuICAgICAgICAgIGlmICh0aGlzLmR3Q2hlY2thYmxlICYmICFub2RlLmlzRGlzYWJsZWQgJiYgIW5vZGUuaXNEaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gIW5vZGUuaXNDaGVja2VkO1xuICAgICAgICAgICAgdGhpcy50cmVlUmVmLmR3VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcbiAgICAgICAgICAgIHRoaXMudHJlZVJlZi5kd1RyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuZHdDaGVja2FibGUpIHtcbiAgICAgICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IER3Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZHdDaGVja2FibGUgPyAoIWV2ZW50Lm5vZGUuaXNEaXNhYmxlZCAmJiAhZXZlbnQubm9kZS5pc0Rpc2FibGVDaGVja2JveCkgOiAhZXZlbnQubm9kZS5pc0Rpc2FibGVkO1xuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIHRoaXMuZHdDaGVja2FibGUgPyB0aGlzLmR3VHJlZUNoZWNrQm94Q2hhbmdlIDogb2JzZXJ2YWJsZU9mKCksXG4gICAgICB0aGlzLmR3Q2xlYXJlZCxcbiAgICAgIHRoaXMuZHdSZW1vdmVkXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5tYXAobm9kZSA9PiBub2RlLmtleSk7XG4gICAgICB0aGlzLnZhbHVlID0gWyAuLi52YWx1ZSBdO1xuICAgICAgaWYgKHRoaXMuZHdTaG93U2VhcmNoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuZHdTaG93U2VhcmNoKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUubGVuZ3RoID8gdmFsdWVbIDAgXSA6IG51bGwpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZE5vZGVzKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFsgLi4uKHRoaXMuZHdDaGVja2FibGUgPyB0aGlzLnRyZWVSZWYuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkgOiB0aGlzLnRyZWVSZWYuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpKSBdO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMuZHdDbGVhcmVkLmVtaXQoKTtcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxuXG4gIHVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJlZVJlZiAmJiAhdGhpcy50cmVlUmVmLmR3VHJlZUNsYXNzWyAnYW50LXNlbGVjdC10cmVlJyBdKSB7XG4gICAgICB0aGlzLnRyZWVSZWYuZHdUcmVlQ2xhc3MgPSB7IC4uLnRoaXMudHJlZVJlZi5kd1RyZWVDbGFzcywgWyAnYW50LXNlbGVjdC10cmVlJyBdOiB0cnVlIH07XG4gICAgfVxuICAgIHRoaXMuZHJvcERvd25DbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1zZWxlY3QtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbICdhbnQtc2VsZWN0LXRyZWUtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlYCBdICAgICAgICAgICAgIDogIXRoaXMuZHdNdWx0aXBsZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlYCBdICAgICAgICAgICA6IHRoaXMuZHdNdWx0aXBsZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRgIF06IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbScsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0YCBdICAgOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheVdpZHRoID0gdGhpcy50cmVlU2VsZWN0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKHRoaXMuZHdEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IG92ZXJsYXlXaWR0aCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyBtaW5XaWR0aDogb3ZlcmxheVdpZHRoIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmR3T3Blbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gWyAodmFsdWUgYXMgc3RyaW5nKSBdO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKSwgMTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbXTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogc3RyaW5nW10gfCBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSB0cnVlO1xuICAgIHRoaXMuZGV0YWNoT3ZlcmxheSgpO1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT3ZlcmxheSgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kd0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxufVxuIl19
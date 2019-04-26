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
export class DwTreeSelectComponent {
    /**
     * @param {?} document
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} overlay
     * @param {?} viewContainerRef
     */
    constructor(document, // tslint:disable-line:no-any
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
        this.dwDisplayWith = (node) => node.title;
        this.dwOpenChange = new EventEmitter();
        this.dwCleared = new EventEmitter();
        this.dwRemoved = new EventEmitter();
        this.dwExpandChange = new EventEmitter();
        this.dwTreeClick = new EventEmitter();
        this.dwTreeCheckBoxChange = new EventEmitter();
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwNodes(value) {
        this.nodes = value;
        if (this.treeRef) {
            setTimeout(() => this.updateSelectedNodes(), 0);
        }
    }
    /**
     * @return {?}
     */
    get dwNodes() {
        return this.nodes;
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get searchDisplay() {
        return this.dwOpen ? 'block' : 'none';
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.dwMultiple || this.dwCheckable;
    }
    /**
     * @return {?}
     */
    get selectedValueDisplay() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
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
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    trigger() {
        if (this.dwDisabled || (!this.dwDisabled && this.dwOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.dwShowSearch) {
                this.focusOnInput();
            }
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        if (!this.dwDisabled) {
            this.dwOpen = true;
            this.dwOpenChange.emit(this.dwOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
            this.updateDropDownClassMap();
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.onTouched();
        this.dwOpen = false;
        this.dwOpenChange.emit(this.dwOpen);
        this.updateCdkConnectedOverlayStatus();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownInput(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = /** @type {?} */ (e.target);
        if (this.isMultiple &&
            !eventTarget.value &&
            keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                this.removeSelected(this.selectedNodes[this.selectedNodes.length - 1]);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    /**
     * @return {?}
     */
    detachOverlay() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.onTouched();
            this.dwOpen = false;
            this.dwOpenChange.emit(this.dwOpen);
        }
    }
    /**
     * @param {?} node
     * @param {?=} emit
     * @return {?}
     */
    removeSelected(node, emit = true) {
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
    }
    /**
     * @return {?}
     */
    focusOnInput() {
        setTimeout(() => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
        this.portal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.portal);
        this.cdr.detectChanges();
        this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            [this.dwDropdownMatchSelectWidth ? 'width' : 'minWidth']: overlayWidth,
            hasBackdrop: true
        });
    }
    /**
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.treeSelect)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
    /**
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return this.overlayRef.backdropClick()
            .subscribe(() => {
            this.closeDropDown();
        });
    }
    /**
     * @return {?}
     */
    subscribeSelectionChange() {
        return merge(this.dwTreeClick.pipe(tap((event) => {
            /** @type {?} */
            const node = event.node;
            if (this.dwCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                this.treeRef.dwTreeService.conduct(node);
                this.treeRef.dwTreeService.setCheckedNodeList(node);
            }
            if (this.dwCheckable) {
                node.isSelected = false;
            }
        }), filter((event) => {
            return this.dwCheckable ? (!event.node.isDisabled && !event.node.isDisableCheckbox) : !event.node.isDisabled;
        })), this.dwCheckable ? this.dwTreeCheckBoxChange : observableOf(), this.dwCleared, this.dwRemoved).subscribe(() => {
            this.updateSelectedNodes();
            /** @type {?} */
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.dwShowSearch) {
                this.inputValue = '';
            }
            if (this.isMultiple) {
                this.onChange(value);
                if (this.dwShowSearch) {
                    this.focusOnInput();
                }
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    /**
     * @return {?}
     */
    updateSelectedNodes() {
        this.selectedNodes = [...(this.dwCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList())];
    }
    /**
     * @return {?}
     */
    updatePosition() {
        this.overlayRef.updatePosition();
    }
    /**
     * @return {?}
     */
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @return {?}
     */
    onClearSelection() {
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.dwCleared.emit();
        this.closeDropDown();
    }
    /**
     * @return {?}
     */
    updateDropDownClassMap() {
        if (this.treeRef && !this.treeRef.dwTreeClass['ant-select-tree']) {
            this.treeRef.dwTreeClass = Object.assign({}, this.treeRef.dwTreeClass, { ['ant-select-tree']: true });
        }
        this.dropDownClassMap = {
            ['ant-select-dropdown']: true,
            ['ant-select-tree-dropdown']: true,
            [`ant-select-dropdown--single`]: !this.dwMultiple,
            [`ant-select-dropdown--multiple`]: this.dwMultiple,
            [`ant-select-dropdown-placement-bottomLeft`]: this.dropDownPosition === 'bottom',
            [`ant-select-dropdown-placement-topLeft`]: this.dropDownPosition === 'top'
        };
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            setTimeout(() => this.updateSelectedNodes(), 100);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        Promise.resolve().then(() => {
            this.updateDropDownClassMap();
            this.updateCdkConnectedOverlayStatus();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
        this.detachOverlay();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayBackdropClickSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.attachOverlay();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dwDisabled = isDisabled;
        this.closeDropDown();
    }
}
DwTreeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-tree-select',
                animations: [selectDropDownAnimation, selectTagAnimation],
                template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"off\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"dwDisabled\">\n</ng-template>\n\n<ng-template #dropdownTemplate>\n  <div [ngClass]=\"dropDownClassMap\" [@selectDropDownAnimation]=\"dwOpen ? dropDownPosition : 'hidden'\"\n    [ngStyle]=\"dwDropdownStyle\">\n    <dw-tree\n      #treeRef\n      [dwData]=\"dwNodes\"\n      [dwMultiple]=\"dwMultiple\"\n      [dwSearchValue]=\"inputValue\"\n      [dwCheckable]=\"dwCheckable\"\n      [dwAsyncData]=\"dwAsyncData\"\n      [dwShowExpand]=\"dwShowExpand\"\n      [dwShowLine]=\"dwShowLine\"\n      [dwExpandAll]=\"dwDefaultExpandAll\"\n      [dwExpandedKeys]=\"dwDefaultExpandedKeys\"\n      [dwCheckedKeys]=\"dwCheckable ? value : []\"\n      [dwSelectedKeys]=\"!dwCheckable ? value : []\"\n      (dwExpandChange)=\"dwExpandChange.emit($event)\"\n      (dwClick)=\"dwTreeClick.emit($event)\"\n      (dwCheckBoxChange)=\"dwTreeCheckBoxChange.emit($event)\">\n    </dw-tree>\n  </div>\n</ng-template>\n\n<div\n  #treeSelect\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"!isMultiple\"\n  [class.ant-select-selection--multiple]=\"isMultiple\"\n  tabindex=\"0\">\n  <ng-container *ngIf=\"!isMultiple\">\n    <div class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"dwPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ dwPlaceHolder }}\n      </div>\n\n      <div\n        *ngIf=\"selectedNodes.length === 1\"\n        class=\"ant-select-selection-selected-value\"\n        [attr.title]=\"dwDisplayWith(selectedNodes[0])\"\n        [ngStyle]=\"selectedValueDisplay\">\n        {{ dwDisplayWith(selectedNodes[0]) }}\n      </div>\n\n      <div\n        *ngIf=\"dwShowSearch\"\n        [style.display]=\"searchDisplay\"\n        class=\"ant-select-search ant-select-search--inline\">\n        <div class=\"ant-select-search__field__wrap\">\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isMultiple\">\n    <ul class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"dwPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ dwPlaceHolder }}\n      </div>\n      <ng-container *ngFor=\"let node of selectedNodes\">\n        <li\n          [@selectTagAnimation]\n          (@selectTagAnimation.done)=\"updatePosition()\"\n          [attr.title]=\"dwDisplayWith(node)\"\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\n          class=\"ant-select-selection__choice\">\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\"\n                 (click)=\"removeSelected(node)\"></span>\n          <span class=\"ant-select-selection__choice__content\">{{ dwDisplayWith(node) }}</span>\n        </li>\n      </ng-container>\n      <li class=\"ant-select-search ant-select-search--inline\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </li>\n    </ul>\n  </ng-container>\n  <span *ngIf=\"dwAllowClear\" class=\"ant-select-selection__clear\"\n    (click)=\"onClearSelection()\"></span>\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\"><b></b></span>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DwTreeSelectComponent),
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
                styles: [`
    .ant-select-dropdown {
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: auto;
    }
  `]
            }] }
];
/** @nocollapse */
DwTreeSelectComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef, decorators: [{ type: Optional }] },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Overlay },
    { type: ViewContainerRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJ0cmVlLXNlbGVjdC9kdy10cmVlLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEQsT0FBTyxFQUNMLHNCQUFzQixFQUV0QixPQUFPLEVBQ1AsYUFBYSxFQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUNMLEtBQUssRUFDTCxFQUFFLElBQUksWUFBWSxFQUVuQixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQWtDNUQsTUFBTTs7Ozs7Ozs7O0lBNkZK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cyc7XG5pbXBvcnQge1xuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFBvc2l0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICBtZXJnZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBTdWJzY3JpcHRpb25cbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgc2VsZWN0RHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9zZWxlY3QtZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RUYWdBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9zZWxlY3QtdGFnLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi90cmVlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBEd1RyZWVOb2RlIH0gZnJvbSAnLi4vdHJlZS9kdy10cmVlLW5vZGUnO1xuaW1wb3J0IHsgRHdUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi4vdHJlZS9kdy10cmVlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ2R3LXRyZWUtc2VsZWN0JyxcbiAgYW5pbWF0aW9ucyA6IFsgc2VsZWN0RHJvcERvd25BbmltYXRpb24sIHNlbGVjdFRhZ0FuaW1hdGlvbiBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZHctdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER3VHJlZVNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3RdJyAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nICAgICAgICAgOiAnZHdTaXplPT09XCJsYXJnZVwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJyAgICAgICAgIDogJ2R3U2l6ZT09PVwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJyAgICA6ICchZHdEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXScgICA6ICdkd0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ2R3QWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJyAgICAgICA6ICdkd09wZW4nXG4gIH0sXG4gIHN0eWxlcyAgICAgOiBbIGBcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd1RyZWVTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgbm9kZXMgPSBbXTtcbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcbiAgaW5wdXRWYWx1ZSA9ICcnO1xuICBkcm9wRG93bkNsYXNzTWFwOiB7IFsgY2xhc3NOYW1lOiBzdHJpbmcgXTogYm9vbGVhbiB9O1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDx7fT47XG4gIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgc2VsZWN0ZWROb2RlczogRHdUcmVlTm9kZVtdID0gW107XG4gIHZhbHVlOiBzdHJpbmdbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0FsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZHdTaG93RXhwYW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3Q2hlY2thYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd1Nob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3U2hvd0xpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGR3QXN5bmNEYXRhID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd011bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkd0RlZmF1bHRFeHBhbmRBbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgZHdPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZHdQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBkd0Ryb3Bkb3duU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIGR3RGVmYXVsdEV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgZHdEaXNwbGF5V2l0aDogKG5vZGU6IER3VHJlZU5vZGUpID0+IHN0cmluZyA9IChub2RlOiBEd1RyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xuICBAT3V0cHV0KCkgZHdPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgZHdDbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdSZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxEd1RyZWVOb2RlPigpO1xuICBAT3V0cHV0KCkgZHdFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHdUcmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHdUcmVlQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPER3Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd05vZGVzKHZhbHVlOiBEd1RyZWVOb2RlW10pIHtcbiAgICB0aGlzLm5vZGVzID0gdmFsdWU7XG4gICAgaWYgKHRoaXMudHJlZVJlZikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3Tm9kZXMoKTogRHdUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndHJlZVNlbGVjdCcpIHRyZWVTZWxlY3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGRyb3Bkb3duVGVtcGxhdGU7XG4gIEBWaWV3Q2hpbGQoJ3RyZWVSZWYnKSB0cmVlUmVmOiBEd1RyZWVDb21wb25lbnQ7XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgfVxuXG4gIGdldCBzZWFyY2hEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZHdPcGVuID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3TXVsdGlwbGUgfHwgdGhpcy5kd0NoZWNrYWJsZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZFZhbHVlRGlzcGxheSgpOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH0ge1xuICAgIGxldCBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGxldCBvcGFjaXR5ID0gMTtcbiAgICBpZiAoIXRoaXMuZHdTaG93U2VhcmNoKSB7XG4gICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmR3T3Blbikge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9ICEodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpO1xuICAgICAgICBpZiAoc2hvd1NlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBvcGFjaXR5ID0gMC40O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBzaG93U2VsZWN0ZWRWYWx1ZSA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICBvcGFjaXR5OiBgJHtvcGFjaXR5fWBcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LCAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdHJpZ2dlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0Rpc2FibGVkIHx8ICghdGhpcy5kd0Rpc2FibGVkICYmIHRoaXMuZHdPcGVuKSkge1xuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICBpZiAodGhpcy5kd1Nob3dTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5mb2N1c09uSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZHdPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZURyb3BEb3duKCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy5kd09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmR3T3BlbkNoYW5nZS5lbWl0KHRoaXMuZHdPcGVuKTtcbiAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoXG4gICAgICB0aGlzLmlzTXVsdGlwbGUgJiZcbiAgICAgICFldmVudFRhcmdldC52YWx1ZSAmJlxuICAgICAga2V5Q29kZSA9PT0gQkFDS1NQQUNFXG4gICAgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHRoaXMuc2VsZWN0ZWROb2Rlc1sgdGhpcy5zZWxlY3RlZE5vZGVzLmxlbmd0aCAtIDEgXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVJbnB1dFdpZHRoKCk7XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgZGV0YWNoT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgdGhpcy5kd09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkKG5vZGU6IER3VHJlZU5vZGUsIGVtaXQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgbm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5kd0NoZWNrYWJsZSkge1xuICAgICAgdGhpcy50cmVlUmVmLmR3VHJlZVNlcnZpY2UuY29uZHVjdChub2RlKTtcbiAgICAgIHRoaXMudHJlZVJlZi5kd1RyZWVTZXJ2aWNlLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmVlUmVmLmR3VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCB0aGlzLmR3TXVsdGlwbGUpO1xuICAgIH1cbiAgICBpZiAoZW1pdCkge1xuICAgICAgdGhpcy5kd1JlbW92ZWQuZW1pdChub2RlKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcbiAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLmRyb3Bkb3duVGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk7XG4gIH1cblxuICBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIGNvbnN0IG92ZXJsYXlXaWR0aCA9IHRoaXMudHJlZVNlbGVjdC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbigpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgICAgWyB0aGlzLmR3RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID8gJ3dpZHRoJyA6ICdtaW5XaWR0aCcgXTogb3ZlcmxheVdpZHRoLFxuICAgICAgaGFzQmFja2Ryb3AgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICBdO1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy50cmVlU2VsZWN0KVxuICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcbiAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAud2l0aFB1c2goZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICBzdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBtZXJnZShcbiAgICAgIHRoaXMuZHdUcmVlQ2xpY2sucGlwZShcbiAgICAgICAgdGFwKChldmVudDogRHdGb3JtYXRFbWl0RXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQubm9kZTtcbiAgICAgICAgICBpZiAodGhpcy5kd0NoZWNrYWJsZSAmJiAhbm9kZS5pc0Rpc2FibGVkICYmICFub2RlLmlzRGlzYWJsZUNoZWNrYm94KSB7XG4gICAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9ICFub2RlLmlzQ2hlY2tlZDtcbiAgICAgICAgICAgIHRoaXMudHJlZVJlZi5kd1RyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgICAgICAgICB0aGlzLnRyZWVSZWYuZHdUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3Qobm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmR3Q2hlY2thYmxlKSB7XG4gICAgICAgICAgICBub2RlLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBEd0Zvcm1hdEVtaXRFdmVudCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmR3Q2hlY2thYmxlID8gKCFldmVudC5ub2RlLmlzRGlzYWJsZWQgJiYgIWV2ZW50Lm5vZGUuaXNEaXNhYmxlQ2hlY2tib3gpIDogIWV2ZW50Lm5vZGUuaXNEaXNhYmxlZDtcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICB0aGlzLmR3Q2hlY2thYmxlID8gdGhpcy5kd1RyZWVDaGVja0JveENoYW5nZSA6IG9ic2VydmFibGVPZigpLFxuICAgICAgdGhpcy5kd0NsZWFyZWQsXG4gICAgICB0aGlzLmR3UmVtb3ZlZFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkTm9kZXMubWFwKG5vZGUgPT4gbm9kZS5rZXkpO1xuICAgICAgdGhpcy52YWx1ZSA9IFsgLi4udmFsdWUgXTtcbiAgICAgIGlmICh0aGlzLmR3U2hvd1NlYXJjaCkge1xuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmR3U2hvd1NlYXJjaCkge1xuICAgICAgICAgIHRoaXMuZm9jdXNPbklucHV0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlLmxlbmd0aCA/IHZhbHVlWyAwIF0gOiBudWxsKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWROb2RlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMgPSBbIC4uLih0aGlzLmR3Q2hlY2thYmxlID8gdGhpcy50cmVlUmVmLmdldENoZWNrZWROb2RlTGlzdCgpIDogdGhpcy50cmVlUmVmLmdldFNlbGVjdGVkTm9kZUxpc3QoKSkgXTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXRXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2xlYXJTZWxlY3Rpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLmR3Q2xlYXJlZC5lbWl0KCk7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gIH1cblxuICB1cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRyZWVSZWYgJiYgIXRoaXMudHJlZVJlZi5kd1RyZWVDbGFzc1sgJ2FudC1zZWxlY3QtdHJlZScgXSkge1xuICAgICAgdGhpcy50cmVlUmVmLmR3VHJlZUNsYXNzID0geyAuLi50aGlzLnRyZWVSZWYuZHdUcmVlQ2xhc3MsIFsgJ2FudC1zZWxlY3QtdHJlZScgXTogdHJ1ZSB9O1xuICAgIH1cbiAgICB0aGlzLmRyb3BEb3duQ2xhc3NNYXAgPSB7XG4gICAgICBbICdhbnQtc2VsZWN0LWRyb3Bkb3duJyBdICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyAnYW50LXNlbGVjdC10cmVlLWRyb3Bkb3duJyBdICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tLXNpbmdsZWAgXSAgICAgICAgICAgICA6ICF0aGlzLmR3TXVsdGlwbGUsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1tdWx0aXBsZWAgXSAgICAgICAgICAgOiB0aGlzLmR3TXVsdGlwbGUsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0YCBdOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wTGVmdGAgXSAgIDogdGhpcy5kcm9wRG93blBvc2l0aW9uID09PSAndG9wJ1xuICAgIH07XG4gIH1cblxuICB1cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5U3RhdHVzKCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJsYXlXaWR0aCA9IHRoaXMudHJlZVNlbGVjdC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGlmICh0aGlzLmR3RHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiBvdmVybGF5V2lkdGggfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgbWluV2lkdGg6IG92ZXJsYXlXaWR0aCB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kd09wZW4pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFsgKHZhbHVlIGFzIHN0cmluZykgXTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVTZWxlY3RlZE5vZGVzKCksIDEwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKG5vZGUsIGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW107XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IHN0cmluZ1tdIHwgc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcbiAgICB0aGlzLmRldGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZHdEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gIH1cbn1cbiJdfQ==
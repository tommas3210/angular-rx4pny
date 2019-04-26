/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOWN_ARROW, SPACE, TAB } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, Component, ContentChildren, EventEmitter, HostListener, Input, Output, QueryList, Renderer2, SimpleChange, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { DwOptionContainerComponent } from './dw-option-container.component';
import { DwOptionGroupComponent } from './dw-option-group.component';
import { DwOptionComponent } from './dw-option.component';
import { defaultFilterOption } from './dw-option.pipe';
import { DwSelectTopControlComponent } from './dw-select-top-control.component';
export class DwSelectComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._disabled = false;
        this._allowClear = false;
        this._showSearch = false;
        this._open = false;
        this._autoFocus = false;
        this.onChange = () => null;
        this.onTouched = () => null;
        this.dropDownPosition = 'bottom';
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        this.listOfTemplateOption = [];
        this.searchValue = '';
        this.isDestroy = true;
        this.isInit = false;
        this.dwOnSearch = new EventEmitter();
        this.dwScrollToBottom = new EventEmitter();
        this.dwOpenChange = new EventEmitter();
        this.dwSize = 'default';
        this.dwServerSearch = false;
        this.dwMode = 'default';
        this.dwDropdownMatchSelectWidth = true;
        this.dwFilterOption = defaultFilterOption;
        this.dwMaxMultipleCount = Infinity;
        /**
         * https://github.com/angular/angular/pull/13349/files *
         */
        this.compareWith = (o1, o2) => o1 === o2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDropdownClassName(value) {
        this._dropdownClassName = value;
        this.updateDropDownClassMap();
    }
    /**
     * @return {?}
     */
    get dwDropdownClassName() {
        return this._dropdownClassName;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAutoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get dwAutoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwOpen(value) {
        this._open = value;
        this.handleEscBug();
        this.updateCdkConnectedOverlayStatus();
        this.updateDropDownClassMap();
        if (this.dwOpen) {
            if (this.dwSelectTopControlComponent) {
                this.dwSelectTopControlComponent.focusOnInput();
                this.dwSelectTopControlComponent.setInputValue('', true);
            }
            if (this.dwOptionContainerComponent) {
                this.dwOptionContainerComponent.scrollIntoView();
            }
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
                /** @type {?} */
                const backdropElement = this.cdkConnectedOverlay.overlayRef.backdropElement;
                /** @type {?} */
                const parentNode = this.renderer.parentNode(backdropElement);
                /** @type {?} */
                const hostElement = this.cdkConnectedOverlay.overlayRef.hostElement;
                this.renderer.appendChild(parentNode, backdropElement);
                this.renderer.appendChild(parentNode, hostElement);
            }
        }
        else {
            if (this.dwSelectTopControlComponent) {
                this.dwSelectTopControlComponent.setInputValue('', false);
            }
            if (this.dwOptionContainerComponent) {
                this.dwOptionContainerComponent.resetActiveOption();
            }
        }
    }
    /**
     * @return {?}
     */
    get dwOpen() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
        if (this.dwDisabled) {
            this.closeDropDown();
        }
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAllowClear(value) {
        this._allowClear = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAllowClear() {
        return this._allowClear;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowSearch(value) {
        this._showSearch = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowSearch() {
        return this._showSearch;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwPlaceHolder(value) {
        this._placeholder = value;
    }
    /**
     * @return {?}
     */
    get dwPlaceHolder() {
        return this._placeholder;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (!this.dwDisabled) {
            this.dwOpen = !this.dwOpen;
            this.dwOpenChange.emit(this.dwOpen);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleKeydown(event) {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        const keyCode = event.keyCode;
        if (!this._open) {
            if (keyCode === SPACE || keyCode === DOWN_ARROW) {
                this.dwOpen = true;
                this.dwOpenChange.emit(this.dwOpen);
                event.preventDefault();
            }
        }
        else {
            if (keyCode === SPACE || keyCode === TAB) {
                this.dwOpen = false;
                this.dwOpenChange.emit(this.dwOpen);
                event.preventDefault();
            }
        }
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && this.dwSelectTopControlComponent.inputElement) {
            if (this.dwAutoFocus) {
                this.renderer.setAttribute(this.dwSelectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.dwSelectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.dwSelectTopControlComponent.inputElement) {
            this.dwSelectTopControlComponent.inputElement.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.dwSelectTopControlComponent.inputElement) {
            this.dwSelectTopControlComponent.inputElement.nativeElement.blur();
        }
    }
    /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    handleEscBug() {
        if (this.dwOpen && this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && !this.cdkConnectedOverlay.overlayRef.backdropElement) {
            this.cdkConnectedOverlay.open = true;
            this.cdkConnectedOverlay.ngOnChanges({ open: new SimpleChange(false, true, false) });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownCdkOverlayOrigin(e) {
        if (this.dwOptionContainerComponent) {
            this.dwOptionContainerComponent.onKeyDownUl(e);
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        if (this.dwOpen) {
            this.onTouched();
            this.dwOpen = false;
            this.dwOpenChange.emit(this.dwOpen);
            this.blur();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updateDropDownClassMap();
    }
    /**
     * @return {?}
     */
    onClickOptionFromOptionContainer() {
        if (this.isSingleMode) {
            this.closeDropDown();
        }
        else if (this.dwMode === 'tags') {
            this.onSearch('', true);
        }
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        if (this.isInit && this.dwOpen && this.cdkOverlayOrigin) {
            if (this.dwDropdownMatchSelectWidth) {
                this.overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ width: this.overlayWidth });
            }
            else {
                this.overlayMinWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ minWidth: this.overlayMinWidth });
            }
        }
        this.updateCdkConnectedOverlayPositions();
        if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && this.cdkConnectedOverlay.overlayRef.backdropElement) {
            if (this.dwOpen) {
                this.renderer.removeStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display');
            }
            else {
                this.renderer.setStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display', 'none');
            }
        }
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayPositions() {
        /** wait for input size change **/
        setTimeout(() => this.cdkConnectedOverlay.overlayRef.updatePosition(), 160);
    }
    /**
     * @return {?}
     */
    get isSingleMode() {
        return this.dwMode === 'default';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.dwMode === 'tags' || this.dwMode === 'multiple';
    }
    /**
     * option container dwListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    updateListOfSelectedValueFromOptionContainer(value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    }
    /**
     * option container dwListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    updateListOfSelectedValueFromTopControl(value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateFromSelectedList(value) {
        /** @type {?} */
        let modelValue;
        if (this.isSingleMode) {
            if (value.length) {
                modelValue = value[0];
            }
        }
        else {
            modelValue = value;
            this.updateCdkConnectedOverlayPositions();
        }
        this.updateNgModel(value, modelValue);
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    onSearch(value, emit) {
        if (emit && (this.searchValue !== value)) {
            this.dwOnSearch.emit(value);
            this.searchValue = value;
        }
    }
    /**
     * @return {?}
     */
    clearNgModel() {
        if (this.isSingleMode) {
            this.updateNgModel([], null);
        }
        else {
            this.updateNgModel([], []);
        }
    }
    /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    updateNgModel(list, value) {
        this.listOfSelectedValue = list;
        if (value !== this.value) {
            this.value = value;
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    listOfTemplateOptionChange(value) {
        this.listOfTemplateOption = value;
    }
    /**
     * @return {?}
     */
    updateDropDownClassMap() {
        this.dropDownClassMap = {
            ['ant-select-dropdown']: true,
            [`ant-select-dropdown--single`]: this.isSingleMode,
            [`ant-select-dropdown--multiple`]: this.isMultipleOrTags,
            [`ant-select-dropdown-placement-bottomLeft`]: this.dropDownPosition === 'bottom',
            [`ant-select-dropdown-placement-topLeft`]: this.dropDownPosition === 'top',
            [`${this.dwDropdownClassName}`]: !!this.dwDropdownClassName
        };
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClearSelection(e) {
        // TODO: should not clear disabled option ?
        e.stopPropagation();
        this.clearNgModel();
    }
    /**
     * @return {?}
     */
    clearSearchValue() {
        if (this.isSingleMode) {
            this.dwSelectTopControlComponent.setInputValue('', false);
        }
        else {
            this.dwSelectTopControlComponent.setInputValue('', false);
        }
    }
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                this.listOfSelectedValue = value;
            }
            else {
                this.listOfSelectedValue = [value];
            }
        }
        else {
            this.listOfSelectedValue = [];
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
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.dwDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.updateDropDownClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        Promise.resolve().then(() => this.updateCdkConnectedOverlayStatus());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
    }
}
DwSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-select',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DwSelectComponent),
                        multi: true
                    }
                ],
                animations: [
                    trigger('dropDownAnimation', [
                        state('hidden', style({
                            opacity: 0,
                            display: 'none'
                        })),
                        state('bottom', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 0%'
                        })),
                        state('top', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 100%'
                        })),
                        transition('hidden => bottom', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                        ]),
                        transition('bottom => hidden', [
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }))
                        ]),
                        transition('hidden => top', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 100%'
                            }),
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                        ]),
                        transition('top => hidden', [
                            animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 100%'
                            }))
                        ])
                    ])
                ],
                template: "<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"isSingleMode\"\n  [class.ant-select-selection--multiple]=\"isMultipleOrTags\"\n  (keydown)=\"onKeyDownCdkOverlayOrigin($event)\"\n  tabindex=\"0\">\n  <div\n    dw-select-top-control\n    [dwOpen]=\"dwOpen\"\n    [compareWith]=\"compareWith\"\n    [dwPlaceHolder]=\"dwPlaceHolder\"\n    [dwShowSearch]=\"dwShowSearch\"\n    [dwDisabled]=\"dwDisabled\"\n    [dwMode]=\"dwMode\"\n    [dwListTemplateOfOption]=\"listOfTemplateOption\"\n    [dwListOfSelectedValue]=\"listOfSelectedValue\"\n    (dwOnSearch)=\"onSearch($event.value,$event.emit)\"\n    (dwListOfSelectedValueChange)=\"updateListOfSelectedValueFromTopControl($event)\">\n  </div>\n  <span *ngIf=\"dwAllowClear\" class=\"ant-select-selection__clear\" dw-select-unselectable (click)=\"onClearSelection($event)\"></span>\n  <span class=\"ant-select-arrow\" dw-select-unselectable><b></b></span>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown();\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayWidth]=\"overlayWidth\"\n  [cdkConnectedOverlayMinWidth]=\"overlayMinWidth\"\n  [cdkConnectedOverlayOpen]=\"!isDestroy\">\n  <div [ngClass]=\"dropDownClassMap\" [@dropDownAnimation]=\"dwOpen ? dropDownPosition : 'hidden' \" [ngStyle]=\"dwDropdownStyle\">\n    <div\n      style=\"overflow: auto\"\n      dw-option-container\n      [listOfDwOptionComponent]=\"listOfDwOptionComponent\"\n      [listOfDwOptionGroupComponent]=\"listOfDwOptionGroupComponent\"\n      [dwSearchValue]=\"searchValue\"\n      [dwFilterOption]=\"dwFilterOption\"\n      [dwServerSearch]=\"dwServerSearch\"\n      [compareWith]=\"compareWith\"\n      [dwNotFoundContent]=\"dwNotFoundContent\"\n      [dwMaxMultipleCount]=\"dwMaxMultipleCount\"\n      [dwMode]=\"dwMode\"\n      (dwScrollToBottom)=\"dwScrollToBottom.emit()\"\n      (dwClickOption)=\"onClickOptionFromOptionContainer()\"\n      (dwListOfTemplateOptionChange)=\"listOfTemplateOptionChange($event)\"\n      (dwListOfSelectedValueChange)=\"updateListOfSelectedValueFromOptionContainer($event)\"\n      [dwListOfSelectedValue]=\"listOfSelectedValue\">\n    </div>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
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
    }
  `]
            }] }
];
/** @nocollapse */
DwSelectComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DwSelectComponent.propDecorators = {
    cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin,] }],
    cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    dwSelectTopControlComponent: [{ type: ViewChild, args: [DwSelectTopControlComponent,] }],
    dwOptionContainerComponent: [{ type: ViewChild, args: [DwOptionContainerComponent,] }],
    listOfDwOptionComponent: [{ type: ContentChildren, args: [DwOptionComponent,] }],
    listOfDwOptionGroupComponent: [{ type: ContentChildren, args: [DwOptionGroupComponent,] }],
    dwOnSearch: [{ type: Output }],
    dwScrollToBottom: [{ type: Output }],
    dwOpenChange: [{ type: Output }],
    dwSize: [{ type: Input }],
    dwServerSearch: [{ type: Input }],
    dwMode: [{ type: Input }],
    dwDropdownMatchSelectWidth: [{ type: Input }],
    dwFilterOption: [{ type: Input }],
    dwMaxMultipleCount: [{ type: Input }],
    dwDropdownStyle: [{ type: Input }],
    dwNotFoundContent: [{ type: Input }],
    compareWith: [{ type: Input }],
    dwDropdownClassName: [{ type: Input }],
    dwAutoFocus: [{ type: Input }],
    dwOpen: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwAllowClear: [{ type: Input }],
    dwShowSearch: [{ type: Input }],
    dwPlaceHolder: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    _handleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
function DwSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSelectComponent.prototype._disabled;
    /** @type {?} */
    DwSelectComponent.prototype._allowClear;
    /** @type {?} */
    DwSelectComponent.prototype._showSearch;
    /** @type {?} */
    DwSelectComponent.prototype._open;
    /** @type {?} */
    DwSelectComponent.prototype._placeholder;
    /** @type {?} */
    DwSelectComponent.prototype._autoFocus;
    /** @type {?} */
    DwSelectComponent.prototype._dropdownClassName;
    /** @type {?} */
    DwSelectComponent.prototype.onChange;
    /** @type {?} */
    DwSelectComponent.prototype.onTouched;
    /** @type {?} */
    DwSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    DwSelectComponent.prototype.listOfSelectedValue;
    /** @type {?} */
    DwSelectComponent.prototype.listOfTemplateOption;
    /** @type {?} */
    DwSelectComponent.prototype.value;
    /** @type {?} */
    DwSelectComponent.prototype.overlayWidth;
    /** @type {?} */
    DwSelectComponent.prototype.overlayMinWidth;
    /** @type {?} */
    DwSelectComponent.prototype.searchValue;
    /** @type {?} */
    DwSelectComponent.prototype.isDestroy;
    /** @type {?} */
    DwSelectComponent.prototype.isInit;
    /** @type {?} */
    DwSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    DwSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    DwSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    DwSelectComponent.prototype.dwSelectTopControlComponent;
    /** @type {?} */
    DwSelectComponent.prototype.dwOptionContainerComponent;
    /**
     * should move to dw-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    DwSelectComponent.prototype.listOfDwOptionComponent;
    /** @type {?} */
    DwSelectComponent.prototype.listOfDwOptionGroupComponent;
    /** @type {?} */
    DwSelectComponent.prototype.dwOnSearch;
    /** @type {?} */
    DwSelectComponent.prototype.dwScrollToBottom;
    /** @type {?} */
    DwSelectComponent.prototype.dwOpenChange;
    /** @type {?} */
    DwSelectComponent.prototype.dwSize;
    /** @type {?} */
    DwSelectComponent.prototype.dwServerSearch;
    /** @type {?} */
    DwSelectComponent.prototype.dwMode;
    /** @type {?} */
    DwSelectComponent.prototype.dwDropdownMatchSelectWidth;
    /** @type {?} */
    DwSelectComponent.prototype.dwFilterOption;
    /** @type {?} */
    DwSelectComponent.prototype.dwMaxMultipleCount;
    /** @type {?} */
    DwSelectComponent.prototype.dwDropdownStyle;
    /** @type {?} */
    DwSelectComponent.prototype.dwNotFoundContent;
    /**
     * https://github.com/angular/angular/pull/13349/files *
     * @type {?}
     */
    DwSelectComponent.prototype.compareWith;
    /** @type {?} */
    DwSelectComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFrQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdHLE9BQU8sRUFDTCxVQUFVLEVBRVYsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEVBQ1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWlGaEYsTUFBTTs7OztJQXFWSixZQUFvQixRQUFtQjtRQUFuQixhQUFRLEdB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QkFDL0MsNkJBQTZCLEVBQUssWUFBWTtvQkFDOUMsZ0NBQWdDLEVBQUUsY0FBYztvQkFDaEQseUJBQXlCLEVBQVMsUUFBUTtpQkFDM0M7eUJBQ3NCOzs7Ozs7Ozs7R0FTdEI7YUFDRjs7OztZQTNGQyxTQUFTOzs7K0JBa0hSLFNBQVMsU0FBQyxnQkFBZ0I7a0NBQzFCLFNBQVMsU0FBQyxtQkFBbUI7MENBQzdCLFNBQVMsU0FBQywyQkFBMkI7eUNBQ3JDLFNBQVMsU0FBQywwQkFBMEI7c0NBRXBDLGVBQWUsU0FBQyxpQkFBaUI7MkNBQ2pDLGVBQWUsU0FBQyxzQkFBc0I7eUJBQ3RDLE1BQU07K0JBQ04sTUFBTTsyQkFDTixNQUFNO3FCQUNOLEtBQUs7NkJBQ0wsS0FBSztxQkFDTCxLQUFLO3lDQUNMLEtBQUs7NkJBQ0wsS0FBSztpQ0FDTCxLQUFLOzhCQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFHTCxLQUFLO2tDQUVMLEtBQUs7MEJBVUwsS0FBSztxQkFVTCxLQUFLO3lCQW9DTCxLQUFLOzJCQVlMLEtBQUs7MkJBU0wsS0FBSzs0QkFTTCxLQUFLO3NCQVNMLFlBQVksU0FBQyxPQUFPOzZCQVFwQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgU1BBQ0UsIFRBQiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd09wdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZHctb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vZHctb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZHctb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0RmlsdGVyT3B0aW9uLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9kdy1vcHRpb24ucGlwZSc7XG5pbXBvcnQgeyBEd1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2R3LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXNlbGVjdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF0sXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdkcm9wRG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCd0b3AnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdib3R0b20gPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndG9wID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdF0nICAgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXScgICAgICAgICA6ICdkd1NpemU9PT1cImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nICAgICAgICAgOiAnZHdTaXplPT09XCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nICAgIDogJyFkd0Rpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJyAgIDogJ2R3RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnZHdBbGxvd0NsZWFyJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nICAgICAgIDogJ2R3T3BlbidcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIER3U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWxsb3dDbGVhciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93U2VhcmNoID0gZmFsc2U7XG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgX2Ryb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W10gPSBbXTtcbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IER3T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB2YWx1ZTogYW55IHwgYW55W107XG4gIG92ZXJsYXlXaWR0aDogbnVtYmVyO1xuICBvdmVybGF5TWluV2lkdGg6IG51bWJlcjtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xuICBpc0Rlc3Ryb3kgPSB0cnVlO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgZHJvcERvd25DbGFzc01hcDtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoRHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSBkd1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ6IER3U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChEd09wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkgZHdPcHRpb25Db250YWluZXJDb21wb25lbnQ6IER3T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50O1xuICAvKiogc2hvdWxkIG1vdmUgdG8gZHctb3B0aW9uLWNvbnRhaW5lciB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwODEwIHJlc29sdmVkICoqL1xuICBAQ29udGVudENoaWxkcmVuKER3T3B0aW9uQ29tcG9uZW50KSBsaXN0T2ZEd09wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PER3T3B0aW9uQ29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihEd09wdGlvbkdyb3VwQ29tcG9uZW50KSBsaXN0T2ZEd09wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIEBPdXRwdXQoKSBkd09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBkd1Njcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBkd1NpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGR3U2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIGR3TW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZHdEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xuICBASW5wdXQoKSBkd0ZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIGR3TWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBASW5wdXQoKSBkd0Ryb3Bkb3duU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIGR3Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMTMzNDkvZmlsZXMgKiovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RHJvcGRvd25DbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Ryb3Bkb3duQ2xhc3NOYW1lID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdEcm9wZG93bkNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bkNsYXNzTmFtZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0F1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIGdldCBkd0F1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3T3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX29wZW4gPSB2YWx1ZTtcbiAgICB0aGlzLmhhbmRsZUVzY0J1ZygpO1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICAgIGlmICh0aGlzLmR3T3Blbikge1xuICAgICAgaWYgKHRoaXMuZHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmZvY3VzT25JbnB1dCgpO1xuICAgICAgICB0aGlzLmR3U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmR3T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZHdPcHRpb25Db250YWluZXJDb21wb25lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKGJhY2tkcm9wRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuaG9zdEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50Tm9kZSwgYmFja2Ryb3BFbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnROb2RlLCBob3N0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmR3U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmR3U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kd09wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmR3T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LnJlc2V0QWN0aXZlT3B0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3T3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FsbG93Q2xlYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd0NsZWFyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FsbG93Q2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93Q2xlYXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93U2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93U2VhcmNoO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3UGxhY2VIb2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdQbGFjZUhvbGRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kd09wZW4gPSAhdGhpcy5kd09wZW47XG4gICAgICB0aGlzLmR3T3BlbkNoYW5nZS5lbWl0KHRoaXMuZHdPcGVuKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyAnJGV2ZW50JyBdKVxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKCF0aGlzLl9vcGVuKSB7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gU1BBQ0UgfHwga2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICB0aGlzLmR3T3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gU1BBQ0UgfHwga2V5Q29kZSA9PT0gVEFCKSB7XG4gICAgICAgIHRoaXMuZHdPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgdGhpcy5kd1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5kd0F1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmR3U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuZHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5kd1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICAvKiogb3ZlcmxheSBjYW4gbm90IGJlIGFsd2F5cyBvcGVuICwgcmVvcGVuIG92ZXJsYXkgYWZ0ZXIgcHJlc3MgZXNjICoqL1xuICBoYW5kbGVFc2NCdWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdPcGVuICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZiAmJiAhdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkubmdPbkNoYW5nZXMoeyBvcGVuOiBuZXcgU2ltcGxlQ2hhbmdlKGZhbHNlLCB0cnVlLCBmYWxzZSkgfSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duQ2RrT3ZlcmxheU9yaWdpbihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdPcHRpb25Db250YWluZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHdPcHRpb25Db250YWluZXJDb21wb25lbnQub25LZXlEb3duVWwoZSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd09wZW4pIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLmR3T3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5kd09wZW5DaGFuZ2UuZW1pdCh0aGlzLmR3T3Blbik7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xuICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICB9XG5cbiAgb25DbGlja09wdGlvbkZyb21PcHRpb25Db250YWluZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZHdNb2RlID09PSAndGFncycpIHtcbiAgICAgIHRoaXMub25TZWFyY2goJycsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmIHRoaXMuZHdPcGVuICYmIHRoaXMuY2RrT3ZlcmxheU9yaWdpbikge1xuICAgICAgaWYgKHRoaXMuZHdEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5V2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IHRoaXMub3ZlcmxheVdpZHRoIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVybGF5TWluV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgbWluV2lkdGg6IHRoaXMub3ZlcmxheU1pbldpZHRoIH0pO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xuICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5kd09wZW4pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTogdm9pZCB7XG4gICAgLyoqIHdhaXQgZm9yIGlucHV0IHNpemUgY2hhbmdlICoqL1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKSwgMTYwKTtcbiAgfVxuXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdNb2RlID09PSAnZGVmYXVsdCc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd01vZGUgPT09ICd0YWdzJyB8fCB0aGlzLmR3TW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxuXG4gIC8qKiBvcHRpb24gY29udGFpbmVyIGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSAtPiB1cGRhdGUgbmdNb2RlbCAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlRnJvbU9wdGlvbkNvbnRhaW5lcih2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyU2VhcmNoVmFsdWUoKTtcbiAgICB0aGlzLnVwZGF0ZUZyb21TZWxlY3RlZExpc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqIG9wdGlvbiBjb250YWluZXIgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlIC0+IHVwZGF0ZSBuZ01vZGVsICoqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWVGcm9tVG9wQ29udHJvbCh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyU2VhcmNoVmFsdWUoKTtcbiAgICB0aGlzLnVwZGF0ZUZyb21TZWxlY3RlZExpc3QodmFsdWUpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVGcm9tU2VsZWN0ZWRMaXN0KHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIGxldCBtb2RlbFZhbHVlO1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBtb2RlbFZhbHVlID0gdmFsdWVbIDAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbW9kZWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTmdNb2RlbCh2YWx1ZSwgbW9kZWxWYWx1ZSk7XG4gIH1cblxuICBvblNlYXJjaCh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGVtaXQgJiYgKHRoaXMuc2VhcmNoVmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgdGhpcy5kd09uU2VhcmNoLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyTmdNb2RlbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIHRoaXMudXBkYXRlTmdNb2RlbChbXSwgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlTmdNb2RlbChbXSwgW10pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlTmdNb2RlbChsaXN0OiBhbnlbXSwgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gbGlzdDtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UodmFsdWU6IER3T3B0aW9uQ29tcG9uZW50W10pOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uID0gdmFsdWU7XG4gIH1cblxuICB1cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25DbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1zZWxlY3QtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVgIF0gICAgICAgICAgICAgOiB0aGlzLmlzU2luZ2xlTW9kZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlYCBdICAgICAgICAgICA6IHRoaXMuaXNNdWx0aXBsZU9yVGFncyxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRgIF06IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbScsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0YCBdICAgOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnLFxuICAgICAgWyBgJHt0aGlzLmR3RHJvcGRvd25DbGFzc05hbWV9YCBdICAgICAgICAgICAgIDogISF0aGlzLmR3RHJvcGRvd25DbGFzc05hbWVcbiAgICB9O1xuICB9XG5cbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gVE9ETzogc2hvdWxkIG5vdCBjbGVhciBkaXNhYmxlZCBvcHRpb24gP1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jbGVhck5nTW9kZWwoKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoVmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICB0aGlzLmR3U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIC8qKiB1cGRhdGUgbmdNb2RlbCAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbIHZhbHVlIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmR3RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XG4gIH1cbn1cbiJdfQ==
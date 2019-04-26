/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { DEFAULT_DROPDOWN_POSITIONS } from '../core/overlay/overlay-position-map';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function toArray(value) {
    /** @type {?} */
    let ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @return {?}
 */
function arrayEquals(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    /** @type {?} */
    const len = array1.length;
    for (let i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/** @type {?} */
const defaultDisplayRender = label => label.join(' / ');
const ɵ0 = defaultDisplayRender;
/**
 * @record
 */
export function CascaderOption() { }
function CascaderOption_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
/**
 * @record
 */
export function CascaderSearchOption() { }
function CascaderSearchOption_tsickle_Closure_declarations() {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function DwShowSearchOptions() { }
function DwShowSearchOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DwShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    DwShowSearchOptions.prototype.sorter;
}
export class DwCascaderComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} dwUpdateHostClassService
     */
    constructor(elementRef, cdr, dwUpdateHostClassService) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this.allowClear = true;
        this.autoFocus = false;
        this.disabled = false;
        this.enableCache = true;
        this.showArrow = true;
        this.showInput = true;
        this.size = 'default';
        this.prefixCls = 'ant-cascader';
        this.inputPrefixCls = 'ant-input';
        this.changeOnSelect = false;
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.isOpening = false;
        this.isFocused = false;
        this.isLabelRenderTemplate = false;
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dwColumns = [];
        /**
         * 搜索相关的输入值
         */
        this._inputValue = '';
        // ngModel Access
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = [...DEFAULT_DROPDOWN_POSITIONS];
        /**
         * If cascader is in search mode.
         */
        this.inSearch = false;
        /**
         * Hover text for the clear icon
         */
        this.dwClearText = 'Clear';
        /**
         * Expand column item when click or hover, one of 'click' 'hover'
         */
        this.dwExpandTrigger = 'click';
        /**
         * Specify content to show when no result matches.
         */
        this.dwNotFoundContent = 'Not Found';
        /**
         * Input placeholder
         */
        this.dwPlaceHolder = 'Please select';
        /**
         * Delay time to show when mouse enter, when `dwExpandTrigger` is `hover`.
         */
        this.dwMouseEnterDelay = 150;
        /**
         * Delay time to hide when mouse enter, when `dwExpandTrigger` is `hover`.
         */
        this.dwMouseLeaveDelay = 150;
        /**
         * Triggering mode: can be Array<'click'|'hover'>
         */
        this.dwTriggerAction = ['click'];
        /**
         * Property name for getting `value` in the option
         */
        this.dwValueProperty = 'value';
        /**
         * Property name for getting `label` in the option
         */
        this.dwLabelProperty = 'label';
        /**
         * Event: emit on popup show or hide
         */
        this.dwVisibleChange = new EventEmitter();
        /**
         * Event: emit on values changed
         */
        this.dwChange = new EventEmitter();
        /**
         * Event: emit on values and selection changed
         */
        this.dwSelectionChange = new EventEmitter();
        /**
         * Event: emit on option selected, event data：{option: any, index: number}
         */
        this.dwSelect = new EventEmitter();
        /**
         * Event: emit on the clear button clicked
         */
        this.dwClear = new EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get inputValue() {
        return this._inputValue;
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        this._inputValue = inputValue;
        /** @type {?} */
        const willBeInSearch = !!inputValue;
        // 搜索状态变动之前，如要进入则要保留之前激活选项的快照，退出搜索状态要还原该快照
        if (!this.inSearch && willBeInSearch) {
            this.oldActivatedOptions = this.activatedOptions;
            this.activatedOptions = [];
            this.searchWidthStyle = `${this.input.nativeElement.offsetWidth}px`;
        }
        else if (this.inSearch && !willBeInSearch) {
            this.activatedOptions = this.oldActivatedOptions;
        }
        // 搜索状态变更之后
        this.inSearch = !!willBeInSearch;
        if (this.inSearch) {
            this.prepareSearchValue();
        }
        else {
            if (this.showSearch) {
                this.dwColumns = this.oldColumnsHolder;
            }
            this.searchWidthStyle = '';
        }
        this.setClassMap();
    }
    /**
     * Display Render ngTemplate
     * @param {?} value
     * @return {?}
     */
    set dwLabelRender(value) {
        this.labelRenderTpl = value;
        this.isLabelRenderTemplate = (value instanceof TemplateRef);
    }
    /**
     * @return {?}
     */
    get dwLabelRender() {
        return this.labelRenderTpl;
    }
    /**
     * prefixCls
     * @param {?} prefixCls
     * @return {?}
     */
    set dwPrefixCls(prefixCls) {
        this.prefixCls = prefixCls;
        this.setClassMap();
        this.setLabelClass();
        this.setArrowClass();
        this.setLoadingClass();
        this.setClearClass();
        this.setInputClass();
        this.setMenuClass();
        this.setMenuColumnClass();
    }
    /**
     * @return {?}
     */
    get dwPrefixCls() {
        return this.prefixCls;
    }
    /**
     * Whether is disabled
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this.disabled = toBoolean(value);
        this.setClassMap();
        this.setInputClass();
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this.disabled;
    }
    /**
     * Input size, one of `large` `default` `small`
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this.size = value;
        this.setClassMap();
        this.setInputClass();
    }
    /**
     * @return {?}
     */
    get dwSize() {
        return this.size;
    }
    /**
     * Whether show input box. Defaults to `true`.
     * @param {?} value
     * @return {?}
     */
    set dwShowInput(value) {
        this.showInput = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowInput() {
        return this.showInput;
    }
    /**
     * Whether can search. Defaults to `false`.
     * @param {?} value
     * @return {?}
     */
    set dwShowSearch(value) {
        this.showSearch = value;
    }
    /**
     * @return {?}
     */
    get dwShowSearch() {
        return this.showSearch;
    }
    /**
     * Whether allow clear. Defaults to `true`.
     * @param {?} value
     * @return {?}
     */
    set dwAllowClear(value) {
        this.allowClear = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAllowClear() {
        return this.allowClear;
    }
    /**
     * Whether auto focus.
     * @param {?} value
     * @return {?}
     */
    set dwAutoFocus(value) {
        this.autoFocus = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwAutoFocus() {
        return this.autoFocus;
    }
    /**
     * Whether to show arrow
     * @param {?} value
     * @return {?}
     */
    set dwShowArrow(value) {
        this.showArrow = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowArrow() {
        return this.showArrow;
    }
    /**
     * Additional className of popup overlay
     * @param {?} value
     * @return {?}
     */
    set dwMenuClassName(value) {
        this.menuClassName = value;
        this.setMenuClass();
    }
    /**
     * @return {?}
     */
    get dwMenuClassName() {
        return this.menuClassName;
    }
    /**
     * Additional className of popup overlay column
     * @param {?} value
     * @return {?}
     */
    set dwColumnClassName(value) {
        this.columnClassName = value;
        this.setMenuColumnClass();
    }
    /**
     * @return {?}
     */
    get dwColumnClassName() {
        return this.columnClassName;
    }
    /**
     * Options for first column, sub column will be load async
     * @param {?} options
     * @return {?}
     */
    set dwOptions(options) {
        this.oldColumnsHolder = this.dwColumns = options && options.length ? [options] : [];
        if (this.defaultValue && this.dwColumns.length) {
            this.initOptions(0);
        }
    }
    /**
     * @return {?}
     */
    get dwOptions() {
        return this.dwColumns[0];
    }
    /**
     * Change value on each selection if set to true
     * @param {?} value
     * @return {?}
     */
    set dwChangeOnSelect(value) {
        this.changeOnSelect = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwChangeOnSelect() {
        return this.changeOnSelect;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (!this.isFocused) {
            /** @type {?} */
            const input = /** @type {?} */ (this.el.querySelector(`.${this.prefixCls}-input`));
            if (input && input.focus) {
                input.focus();
            }
            else {
                this.el.focus();
            }
            this.isFocused = true;
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.isFocused) {
            /** @type {?} */
            const input = /** @type {?} */ (this.el.querySelector(`.${this.prefixCls}-input`));
            if (input && input.blur) {
                input.blur();
            }
            else {
                this.el.blur();
            }
            this.isFocused = false;
            this.setClassMap();
            this.setLabelClass();
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: 1,
            [`${this.prefixCls}-picker`]: 1,
            [`${this.prefixCls}-lg`]: this.dwSize === 'large',
            [`${this.prefixCls}-sm`]: this.dwSize === 'small',
            [`${this.prefixCls}-picker-disabled`]: this.disabled,
            [`${this.prefixCls}-focused`]: this.isFocused,
            [`${this.prefixCls}-picker-open`]: this.menuVisible,
            [`${this.prefixCls}-picker-with-value`]: this.inputValue && this.inputValue.length
        };
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * 标签 样式
     * @return {?}
     */
    get labelCls() {
        return this._labelCls;
    }
    /**
     * @return {?}
     */
    setLabelClass() {
        this._labelCls = {
            [`${this.prefixCls}-picker-label`]: true,
            [`${this.prefixCls}-show-search`]: !!this.dwShowSearch,
            [`${this.prefixCls}-focused`]: !!this.dwShowSearch && this.isFocused && !this._inputValue
        };
    }
    /**
     * 箭头 样式
     * @return {?}
     */
    get arrowCls() {
        return this._arrowCls;
    }
    /**
     * @return {?}
     */
    setArrowClass() {
        this._arrowCls = {
            [`${this.prefixCls}-picker-arrow`]: true,
            [`${this.prefixCls}-picker-arrow-expand`]: this.menuVisible
        };
    }
    /**
     * 加载中图标 样式
     * @return {?}
     */
    get loadingCls() {
        return this._loadingCls;
    }
    /**
     * @return {?}
     */
    setLoadingClass() {
        this._loadingCls = {
            [`${this.prefixCls}-picker-arrow`]: true
        };
    }
    /**
     * 清除图标 样式
     * @return {?}
     */
    get clearCls() {
        return this._clearCls;
    }
    /**
     * @return {?}
     */
    setClearClass() {
        this._clearCls = {
            [`${this.prefixCls}-picker-clear`]: true
        };
    }
    /**
     * 输入框 样式
     * @return {?}
     */
    get inputCls() {
        return this._inputCls;
    }
    /**
     * @return {?}
     */
    setInputClass() {
        this._inputCls = {
            [`${this.prefixCls}-input`]: 1,
            [`${this.inputPrefixCls}-disabled`]: this.dwDisabled,
            [`${this.inputPrefixCls}-lg`]: this.dwSize === 'large',
            [`${this.inputPrefixCls}-sm`]: this.dwSize === 'small'
        };
    }
    /**
     * 浮层 样式
     * @return {?}
     */
    get menuCls() {
        return this._menuCls;
    }
    /**
     * @return {?}
     */
    setMenuClass() {
        this._menuCls = {
            [`${this.prefixCls}-menus`]: true,
            [`${this.prefixCls}-menus-hidden`]: !this.menuVisible,
            [`${this.dwMenuClassName}`]: this.dwMenuClassName
        };
    }
    /**
     * 浮层列 样式
     * @return {?}
     */
    get menuColumnCls() {
        return this._menuColumnCls;
    }
    /**
     * @return {?}
     */
    setMenuColumnClass() {
        this._menuColumnCls = {
            [`${this.prefixCls}-menu`]: true,
            [`${this.dwColumnClassName}`]: this.dwColumnClassName
        };
    }
    /**
     * 获取列中Option的样式
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    getOptionCls(option, index) {
        return {
            [`${this.prefixCls}-menu-item`]: true,
            [`${this.prefixCls}-menu-item-expand`]: !option.isLeaf,
            [`${this.prefixCls}-menu-item-active`]: this.isActivedOption(option, index),
            [`${this.prefixCls}-menu-item-disabled`]: option.disabled,
            [`${this.prefixCls}-menu-item-loading`]: option.loading
        };
    }
    /**
     * prevent input change event
     * @param {?} event
     * @return {?}
     */
    handlerInputChange(event) {
        event.stopPropagation();
    }
    /**
     * input element blur
     * @param {?} event
     * @return {?}
     */
    handleInputBlur(event) {
        /*
            if (!this.dwShowSearch) {
              return;
            }
            */
        if (this.menuVisible) {
            this.focus(); // keep input has focus when menu opened
        }
        else {
            this.blur();
        }
    }
    /**
     * input element focus
     * @param {?} event
     * @return {?}
     */
    handleInputFocus(event) {
        /*
            if (!this.dwShowSearch) {
              return;
            }
            */
        this.focus();
        this.setLabelClass();
    }
    /**
     * @return {?}
     */
    hasInput() {
        return this.inputValue.length > 0;
    }
    /**
     * @return {?}
     */
    hasValue() {
        return this.value && this.value.length > 0;
    }
    /**
     * Whether to show input element placeholder
     * @return {?}
     */
    get showPlaceholder() {
        return !(this.hasInput() || this.hasValue());
    }
    /**
     * Whether the clear button is visible
     * @return {?}
     */
    get showClearIcon() {
        /** @type {?} */
        const isHasValue = this.hasValue();
        /** @type {?} */
        const isHasInput = this.hasInput();
        return this.dwAllowClear && !this.dwDisabled && (isHasValue || isHasInput);
    }
    /**
     * clear the input box and selected options
     * @param {?=} event
     * @return {?}
     */
    clearSelection(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        // this.isLabelRenderTemplate = false;
        // clear custom context
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.inputValue = '';
        this.setMenuVisible(false);
        // trigger change event
        this.onValueChange();
    }
    /**
     * @return {?}
     */
    buildDisplayLabel() {
        /** @type {?} */
        const selectedOptions = this.selectedOptions;
        /** @type {?} */
        const labels = selectedOptions.map(o => this.getOptionLabel(o));
        // 设置当前控件的显示值
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        if (this.inSearch && (keyCode === BACKSPACE ||
            keyCode === LEFT_ARROW ||
            keyCode === RIGHT_ARROW)) {
            return;
        }
        // Press any keys above to reopen menu
        if (!this.isMenuVisible() &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            this.setMenuVisible(true);
            return;
        }
        // Press ESC to close menu
        if (keyCode === ESCAPE) {
            // this.setMenuVisible(false); // already call by cdk-overlay detach
            return;
        }
        if (this.isMenuVisible()) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveDown();
            }
            else if (keyCode === UP_ARROW) {
                this.moveUp();
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerClick(event) {
        if (this.dwDisabled) {
            return;
        }
        this.onTouched(); // set your control to 'touched'
        if (this.dwShowSearch) {
            this.focus();
        }
        if (this.isClickTiggerAction()) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseEnter(event) {
        if (this.dwDisabled) {
            return;
        }
        if (this.isPointerTiggerAction()) {
            this.delaySetMenuVisible(true, this.dwMouseEnterDelay, true);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseLeave(event) {
        if (this.dwDisabled) {
            return;
        }
        if (!this.isMenuVisible() || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isPointerTiggerAction()) {
            /** @type {?} */
            const mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            const hostEl = this.el;
            /** @type {?} */
            const menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))
            /*|| mouseTarget.parentElement.contains(menuEl)*/ ) {
                // 因为浮层的backdrop出现，暂时没有办法自动消失
                return;
            }
            this.delaySetMenuVisible(false, this.dwMouseLeaveDelay);
        }
    }
    /**
     * @return {?}
     */
    isClickTiggerAction() {
        if (typeof this.dwTriggerAction === 'string') {
            return this.dwTriggerAction === 'click';
        }
        return this.dwTriggerAction.indexOf('click') !== -1;
    }
    /**
     * @return {?}
     */
    isPointerTiggerAction() {
        if (typeof this.dwTriggerAction === 'string') {
            return this.dwTriggerAction === 'hover';
        }
        return this.dwTriggerAction.indexOf('hover') !== -1;
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.blur();
        this.clearDelayTimer();
        this.setMenuVisible(false);
    }
    /**
     * @return {?}
     */
    clearDelayTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
    }
    /**
     * 显示或者隐藏菜单
     *
     * @param {?} visible true-显示，false-隐藏
     * @param {?} delay 延迟时间
     * @param {?=} setOpening
     * @return {?}
     */
    delaySetMenuVisible(visible, delay, setOpening = false) {
        this.clearDelayTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayTimer = setTimeout(() => {
                this.setMenuVisible(visible);
                this.clearDelayTimer();
                if (visible) {
                    setTimeout(() => {
                        this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    /**
     * @return {?}
     */
    isMenuVisible() {
        return this.menuVisible;
    }
    /**
     * @param {?} menuVisible
     * @return {?}
     */
    setMenuVisible(menuVisible) {
        if (this.dwDisabled) {
            return;
        }
        if (this.menuVisible !== menuVisible) {
            this.menuVisible = menuVisible;
            // update class
            this.setClassMap();
            this.setArrowClass();
            this.setMenuClass();
            if (menuVisible) {
                this.beforeVisible();
            }
            this.dwVisibleChange.emit(menuVisible);
        }
    }
    /**
     * load init data if necessary
     * @return {?}
     */
    beforeVisible() {
        this.loadRootOptions();
    }
    /**
     * @return {?}
     */
    loadRootOptions() {
        if (!this.dwColumns.length) {
            /** @type {?} */
            const root = {};
            this.loadChildren(root, -1);
        }
    }
    /**
     * 获取Option的值，例如，可以指定labelProperty="name"来取Name
     * @param {?} option
     * @return {?}
     */
    getOptionLabel(option) {
        return option[this.dwLabelProperty || 'label'];
    }
    /**
     * 获取Option的值，例如，可以指定valueProperty="id"来取ID
     * @param {?} option
     * @return {?}
     */
    getOptionValue(option) {
        return option[this.dwValueProperty || 'value'];
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isActivedOption(option, index) {
        /** @type {?} */
        const activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    }
    /**
     * 设置某列的激活的菜单选项
     *
     * @param {?} option 菜单选项
     * @param {?} index  选项所在的列组的索引
     * @param {?=} select 是否触发选择结点
     * @param {?=} loadChildren
     * @return {?}
     */
    setActiveOption(option, index, select = false, loadChildren = true) {
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[index] = option;
        // 当直接选择最后一级时，前面的选项要补全。例如，选择“城市”，则自动补全“国家”、“省份”
        for (let i = index - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
        // 截断多余的选项，如选择“省份”，则只会有“国家”、“省份”，去掉“城市”、“区县”
        if (index < this.activatedOptions.length - 1) {
            this.activatedOptions = this.activatedOptions.slice(0, index + 1);
        }
        // load children
        if (option.children && option.children.length) {
            option.isLeaf = false;
            option.children.forEach(child => child.parent = option);
            this.setColumnData(option.children, index + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildren(option, index);
        }
        else {
            // clicking leaf node will remove any children columns
            if (index < this.dwColumns.length - 1) {
                this.dwColumns = this.dwColumns.slice(0, index + 1);
            }
        }
        // trigger select event, and display label
        if (select) {
            this.onSelectOption(option, index);
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildren(option, index, success, failure) {
        if (this.dwLoadData) {
            this.isLoading = index < 0;
            option.loading = true;
            this.dwLoadData(option, index).then(() => {
                option.loading = this.isLoading = false;
                if (option.children) {
                    option.children.forEach(child => child.parent = index < 0 ? undefined : option);
                    this.setColumnData(option.children, index + 1);
                }
                if (success) {
                    success();
                }
            }, () => {
                option.loading = this.isLoading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
            });
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    onSelectOption(option, index) {
        // trigger `dwSelect` event
        this.dwSelect.emit({ option, index });
        // 生成显示
        if (option.isLeaf || this.dwChangeOnSelect || this.isChangeOn(option, index)) {
            this.selectedOptions = this.activatedOptions;
            // 设置当前控件的显示值
            this.buildDisplayLabel();
            // 触发变更事件
            this.onValueChange();
        }
        // close menu if click on leaf
        if (option.isLeaf) {
            this.delaySetMenuVisible(false, this.dwMouseLeaveDelay);
        }
    }
    /**
     * 由用户来定义点击后是否变更
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isChangeOn(option, index) {
        if (typeof this.dwChangeOn === 'function') {
            return this.dwChangeOn(option, index) === true;
        }
        return false;
    }
    /**
     * @param {?} options
     * @param {?} index
     * @return {?}
     */
    setColumnData(options, index) {
        if (!arrayEquals(this.dwColumns[index], options)) {
            this.dwColumns[index] = options;
            if (index < this.dwColumns.length - 1) {
                this.dwColumns = this.dwColumns.slice(0, index + 1);
            }
        }
    }
    /**
     * 鼠标点击选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    onOptionClick(option, index, event) {
        if (event) {
            event.preventDefault();
        }
        // Keep focused state for keyboard support
        this.el.focus();
        if (option && option.disabled) {
            return;
        }
        if (this.inSearch) {
            this.setSearchActiveOption(/** @type {?} */ (option), event);
        }
        else {
            this.setActiveOption(option, index, true);
        }
    }
    /**
     * 按下回车键时选择
     * @return {?}
     */
    onEnter() {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.activatedOptions[columnIndex];
        if (activeOption && !activeOption.disabled) {
            if (this.inSearch) {
                this.setSearchActiveOption(/** @type {?} */ (activeOption), null);
            }
            else {
                this.onSelectOption(activeOption, columnIndex);
            }
        }
    }
    /**
     * press `up` or `down` arrow to activate the sibling option.
     * @param {?} isUp
     * @return {?}
     */
    moveUpOrDown(isUp) {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        const options = this.dwColumns[columnIndex] || [];
        /** @type {?} */
        const length = options.length;
        /** @type {?} */
        let nextIndex = -1;
        if (!activeOption) { // 该列还没有选中的选项
            // 该列还没有选中的选项
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setActiveOption(nextOption, columnIndex);
            break;
        }
    }
    /**
     * @return {?}
     */
    moveUp() {
        this.moveUpOrDown(true);
    }
    /**
     * @return {?}
     */
    moveDown() {
        this.moveUpOrDown(false);
    }
    /**
     * press `left` arrow to remove the last selected option.
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    /**
     * press `right` arrow to select the next column option.
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const length = this.activatedOptions.length;
        /** @type {?} */
        const options = this.dwColumns[length];
        if (options && options.length) {
            /** @type {?} */
            const nextOpt = options.find(o => !o.disabled);
            if (nextOpt) {
                this.setActiveOption(nextOpt, length);
            }
        }
    }
    /**
     * 鼠标划入选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    onOptionMouseEnter(option, index, event) {
        event.preventDefault();
        if (this.dwExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, true);
        }
    }
    /**
     * 鼠标划出选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    onOptionMouseLeave(option, index, event) {
        event.preventDefault();
        if (this.dwExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, false);
        }
    }
    /**
     * @return {?}
     */
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    delaySelect(option, index, doSelect) {
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(() => {
                // 鼠标滑入只展开，不进行选中操作
                this.setActiveOption(option, index);
                this.delaySelectTimer = null;
            }, 150);
        }
    }
    /**
     * @return {?}
     */
    getSubmitValue() {
        /** @type {?} */
        const values = [];
        this.selectedOptions.forEach(option => {
            values.push(this.getOptionValue(option));
        });
        return values;
    }
    /**
     * @return {?}
     */
    onValueChange() {
        /** @type {?} */
        const value = this.getSubmitValue();
        if (!arrayEquals(this.value, value)) {
            this.defaultValue = null; // clear the init-value
            this.value = value;
            this.onChange(value); // Angular need this
            if (value.length === 0) {
                this.dwClear.emit(); // first trigger `clear` and then `change`
            }
            this.dwSelectionChange.emit(this.selectedOptions);
            this.dwChange.emit(value);
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    findOption(option, index) {
        /** @type {?} */
        const options = this.dwColumns[index];
        if (options) {
            /** @type {?} */
            const value = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(o => value === this.getOptionValue(o));
        }
        return null;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.dwColumns[index] && this.dwColumns[index].length > 0;
    }
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    activateOnInit(index, value) {
        /** @type {?} */
        let option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : {
                [`${this.dwValueProperty || 'value'}`]: value,
                [`${this.dwLabelProperty || 'label'}`]: value
            };
        }
        this.setActiveOption(option, index, false, false);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    initOptions(index) {
        /** @type {?} */
        const vs = this.defaultValue;
        /** @type {?} */
        const load = () => {
            this.activateOnInit(index, vs[index]);
            if (index < vs.length - 1) {
                this.initOptions(index + 1);
            }
            if (index === vs.length - 1) {
                this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.dwLoadData) {
            load();
        }
        else {
            /** @type {?} */
            const node = this.activatedOptions[index - 1] || {};
            this.loadChildren(node, index - 1, load, this.afterWriteValue);
        }
    }
    /**
     * @return {?}
     */
    afterWriteValue() {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    }
    /**
     * Write a new value to the element.
     *
     * \@Override (From ControlValueAccessor interface)
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
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
        if (isDisabled) {
            this.closeMenu();
        }
        this.dwDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    prepareSearchValue() {
        /** @type {?} */
        const results = [];
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (inputValue, p) => {
            /** @type {?} */
            let flag = false;
            p.forEach(n => {
                if (n.label.indexOf(inputValue) > -1) {
                    flag = true;
                }
            });
            return flag;
        };
        /** @type {?} */
        const filter = this.dwShowSearch instanceof Object && (/** @type {?} */ (this.dwShowSearch)).filter ?
            (/** @type {?} */ (this.dwShowSearch)).filter :
            defaultFilter;
        /** @type {?} */
        const sorter = this.dwShowSearch instanceof Object && (/** @type {?} */ (this.dwShowSearch)).sorter;
        /** @type {?} */
        const loopParent = (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach((sNode) => {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                /** 搜索的同时建立 parent 连接，因为用户直接搜索的话是没有建立连接的，会提升从叶子节点回溯的难度 */
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            });
            path.pop();
        };
        /** @type {?} */
        const loopChild = (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(this._inputValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                results.push(/** @type {?} */ ({
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    label: cPath.map(p => p.label).join(' / ')
                }));
            }
            path.pop();
        };
        this.oldColumnsHolder[0].forEach(node => (node.isLeaf || !node.children || !node.children.length) ? loopChild(node) : loopParent(node));
        if (sorter) {
            results.sort((a, b) => sorter(a.path, b.path, this._inputValue));
        }
        this.dwColumns = [results];
    }
    /**
     * @param {?} str
     * @return {?}
     */
    renderSearchString(str) {
        return str.replace(new RegExp(this._inputValue, 'g'), `<span class="ant-cascader-menu-item-keyword">${this._inputValue}</span>`);
    }
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    setSearchActiveOption(result, event) {
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(() => {
            this.inputValue = '';
            /** @type {?} */
            const index = result.path.length - 1;
            /** @type {?} */
            const destiNode = result.path[index];
            /** @type {?} */
            const mockClickParent = (node, cIndex) => {
                if (node && node.parent) {
                    mockClickParent(node.parent, cIndex - 1);
                }
                this.onOptionClick(node, cIndex, event);
            };
            mockClickParent(destiNode, index);
        }, 300);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // 设置样式
        this.setClassMap();
        this.setLabelClass();
        this.setArrowClass();
        this.setLoadingClass();
        this.setClearClass();
        this.setInputClass();
        this.setMenuClass();
        this.setMenuColumnClass();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearDelayTimer();
        this.clearDelaySelectTimer();
    }
}
DwCascaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-cascader,[dw-cascader]',
                preserveWhitespaces: false,
                animations: [
                    dropDownAnimation
                ],
                template: "<div\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  #trigger>\n  <div *ngIf=\"dwShowInput\">\n    <input #input\n      dw-input\n      [attr.autoComplete]=\"'off'\"\n      [attr.placeholder]=\"showPlaceholder ? dwPlaceHolder : null\"\n      [attr.autofocus]=\"dwAutoFocus ? 'autofocus' : null\"\n      [readonly]=\"!dwShowSearch\"\n      [disabled]=\"dwDisabled\"\n      [dwSize]=\"dwSize\"\n      [ngClass]=\"inputCls\"\n      [(ngModel)]=\"inputValue\"\n      (blur)=\"handleInputBlur($event)\"\n      (focus)=\"handleInputFocus($event)\"\n      (change)=\"handlerInputChange($event)\">\n    <i *ngIf=\"showClearIcon\"\n      [class]=\"'anticon anticon-cross-circle'\"\n      [ngClass]=\"clearCls\"\n      [attr.title]=\"dwClearText\"\n      (click)=\"clearSelection($event)\"></i>\n    <i *ngIf=\"dwShowArrow && !isLoading\"\n      class=\"anticon anticon-down\"\n      [ngClass]=\"arrowCls\"></i>\n    <i *ngIf=\"isLoading\"\n      class=\"anticon anticon-loading anticon-spin\"\n      [ngClass]=\"loadingCls\"></i>\n    <span [ngClass]=\"labelCls\">\n          <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\n          <ng-template #labelTemplate>\n            <ng-template [ngTemplateOutlet]=\"dwLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\n          </ng-template>\n        </span>\n  </div>\n  <ng-content></ng-content>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  (backdropClick)=\"closeMenu()\"\n  (detach)=\"closeMenu()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\n  <div #menu\n    [ngClass]=\"menuCls\" [ngStyle]=\"dwMenuStyle\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\n    <ul *ngFor=\"let options of dwColumns; let i = index;\" [ngClass]=\"menuColumnCls\"\n      [style.height]=\"inSearch && !dwColumns[0].length ? 'auto': ''\" [style.width]=\"searchWidthStyle\">\n      <li *ngFor=\"let option of options\"\n        [attr.title]=\"option.title || getOptionLabel(option)\"\n        [ngClass]=\"getOptionCls(option, i)\"\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\n        (click)=\"onOptionClick(option, i, $event)\">\n        <ng-container *ngIf=\"inSearch\">\n          <span [innerHTML]=\"renderSearchString(getOptionLabel(option))\"></span>\n        </ng-container>\n        <ng-container *ngIf=\"!inSearch\">\n          {{ getOptionLabel(option) }}\n        </ng-container>\n      </li>\n      <li *ngIf=\"inSearch && !dwColumns[0].length\" class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\n        Not Found\n      </li>\n    </ul>\n  </div>\n</ng-template>\n",
                providers: [
                    DwUpdateHostClassService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DwCascaderComponent),
                        multi: true
                    }
                ],
                host: {
                    '[attr.tabIndex]': '"0"'
                },
                styles: [`.ant-cascader-menus {
      margin-top: 4px;
      margin-bottom: 4px;
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
    }`]
            }] }
];
/** @nocollapse */
DwCascaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: DwUpdateHostClassService }
];
DwCascaderComponent.propDecorators = {
    dwLabelRender: [{ type: Input }],
    dwPrefixCls: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwSize: [{ type: Input }],
    dwShowInput: [{ type: Input }],
    dwShowSearch: [{ type: Input }],
    dwAllowClear: [{ type: Input }],
    dwAutoFocus: [{ type: Input }],
    dwShowArrow: [{ type: Input }],
    dwMenuClassName: [{ type: Input }],
    dwColumnClassName: [{ type: Input }],
    dwOptions: [{ type: Input }],
    dwChangeOnSelect: [{ type: Input }],
    dwClearText: [{ type: Input }],
    dwExpandTrigger: [{ type: Input }],
    dwNotFoundContent: [{ type: Input }],
    dwPlaceHolder: [{ type: Input }],
    dwMenuStyle: [{ type: Input }],
    dwChangeOn: [{ type: Input }],
    dwMouseEnterDelay: [{ type: Input }],
    dwMouseLeaveDelay: [{ type: Input }],
    dwTriggerAction: [{ type: Input }],
    dwValueProperty: [{ type: Input }],
    dwLabelProperty: [{ type: Input }],
    dwLoadData: [{ type: Input }],
    dwVisibleChange: [{ type: Output }],
    dwChange: [{ type: Output }],
    dwSelectionChange: [{ type: Output }],
    dwSelect: [{ type: Output }],
    dwClear: [{ type: Output }],
    input: [{ type: ViewChild, args: ['input',] }],
    menu: [{ type: ViewChild, args: ['menu',] }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onTriggerClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
    onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
};
function DwCascaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwCascaderComponent.prototype.allowClear;
    /** @type {?} */
    DwCascaderComponent.prototype.autoFocus;
    /** @type {?} */
    DwCascaderComponent.prototype.disabled;
    /** @type {?} */
    DwCascaderComponent.prototype.enableCache;
    /** @type {?} */
    DwCascaderComponent.prototype.showArrow;
    /** @type {?} */
    DwCascaderComponent.prototype.showInput;
    /** @type {?} */
    DwCascaderComponent.prototype.size;
    /** @type {?} */
    DwCascaderComponent.prototype.prefixCls;
    /** @type {?} */
    DwCascaderComponent.prototype.inputPrefixCls;
    /** @type {?} */
    DwCascaderComponent.prototype.menuClassName;
    /** @type {?} */
    DwCascaderComponent.prototype.columnClassName;
    /** @type {?} */
    DwCascaderComponent.prototype.changeOnSelect;
    /** @type {?} */
    DwCascaderComponent.prototype.showSearch;
    /** @type {?} */
    DwCascaderComponent.prototype.defaultValue;
    /** @type {?} */
    DwCascaderComponent.prototype.dropDownPosition;
    /** @type {?} */
    DwCascaderComponent.prototype.menuVisible;
    /** @type {?} */
    DwCascaderComponent.prototype.isLoading;
    /** @type {?} */
    DwCascaderComponent.prototype.isOpening;
    /** @type {?} */
    DwCascaderComponent.prototype._arrowCls;
    /** @type {?} */
    DwCascaderComponent.prototype._clearCls;
    /** @type {?} */
    DwCascaderComponent.prototype._inputCls;
    /** @type {?} */
    DwCascaderComponent.prototype._labelCls;
    /** @type {?} */
    DwCascaderComponent.prototype._loadingCls;
    /** @type {?} */
    DwCascaderComponent.prototype._menuCls;
    /** @type {?} */
    DwCascaderComponent.prototype._menuColumnCls;
    /** @type {?} */
    DwCascaderComponent.prototype.el;
    /** @type {?} */
    DwCascaderComponent.prototype.isFocused;
    /**
     * 选择选项后，渲染显示文本
     * @type {?}
     */
    DwCascaderComponent.prototype.labelRenderTpl;
    /** @type {?} */
    DwCascaderComponent.prototype.isLabelRenderTemplate;
    /** @type {?} */
    DwCascaderComponent.prototype.labelRenderText;
    /** @type {?} */
    DwCascaderComponent.prototype.labelRenderContext;
    /** @type {?} */
    DwCascaderComponent.prototype.value;
    /** @type {?} */
    DwCascaderComponent.prototype.selectedOptions;
    /** @type {?} */
    DwCascaderComponent.prototype.activatedOptions;
    /** @type {?} */
    DwCascaderComponent.prototype.dwColumns;
    /** @type {?} */
    DwCascaderComponent.prototype.delayTimer;
    /** @type {?} */
    DwCascaderComponent.prototype.delaySelectTimer;
    /**
     * 搜索相关的输入值
     * @type {?}
     */
    DwCascaderComponent.prototype._inputValue;
    /** @type {?} */
    DwCascaderComponent.prototype.onChange;
    /** @type {?} */
    DwCascaderComponent.prototype.onTouched;
    /** @type {?} */
    DwCascaderComponent.prototype.positions;
    /** @type {?} */
    DwCascaderComponent.prototype.searchWidthStyle;
    /** @type {?} */
    DwCascaderComponent.prototype.oldColumnsHolder;
    /** @type {?} */
    DwCascaderComponent.prototype.oldActivatedOptions;
    /**
     * If cascader is in search mode.
     * @type {?}
     */
    DwCascaderComponent.prototype.inSearch;
    /**
     * Hover text for the clear icon
     * @type {?}
     */
    DwCascaderComponent.prototype.dwClearText;
    /**
     * Expand column item when click or hover, one of 'click' 'hover'
     * @type {?}
     */
    DwCascaderComponent.prototype.dwExpandTrigger;
    /**
     * Specify content to show when no result matches.
     * @type {?}
     */
    DwCascaderComponent.prototype.dwNotFoundContent;
    /**
     * Input placeholder
     * @type {?}
     */
    DwCascaderComponent.prototype.dwPlaceHolder;
    /**
     * Additional style of popup overlay
     * @type {?}
     */
    DwCascaderComponent.prototype.dwMenuStyle;
    /**
     * Change value on selection only if this function returns `true`
     * @type {?}
     */
    DwCascaderComponent.prototype.dwChangeOn;
    /**
     * Delay time to show when mouse enter, when `dwExpandTrigger` is `hover`.
     * @type {?}
     */
    DwCascaderComponent.prototype.dwMouseEnterDelay;
    /**
     * Delay time to hide when mouse enter, when `dwExpandTrigger` is `hover`.
     * @type {?}
     */
    DwCascaderComponent.prototype.dwMouseLeaveDelay;
    /**
     * Triggering mode: can be Array<'click'|'hover'>
     * @type {?}
     */
    DwCascaderComponent.prototype.dwTriggerAction;
    /**
     * Property name for getting `value` in the option
     * @type {?}
     */
    DwCascaderComponent.prototype.dwValueProperty;
    /**
     * Property name for getting `label` in the option
     * @type {?}
     */
    DwCascaderComponent.prototype.dwLabelProperty;
    /**
     * 异步加载数据
     * @type {?}
     */
    DwCascaderComponent.prototype.dwLoadData;
    /**
     * Event: emit on popup show or hide
     * @type {?}
     */
    DwCascaderComponent.prototype.dwVisibleChange;
    /**
     * Event: emit on values changed
     * @type {?}
     */
    DwCascaderComponent.prototype.dwChange;
    /**
     * Event: emit on values and selection changed
     * @type {?}
     */
    DwCascaderComponent.prototype.dwSelectionChange;
    /**
     * Event: emit on option selected, event data：{option: any, index: number}
     * @type {?}
     */
    DwCascaderComponent.prototype.dwSelect;
    /**
     * Event: emit on the clear button clicked
     * @type {?}
     */
    DwCascaderComponent.prototype.dwClear;
    /** @type {?} */
    DwCascaderComponent.prototype.input;
    /**
     * 浮层菜单
     * @type {?}
     */
    DwCascaderComponent.prototype.menu;
    /** @type {?} */
    DwCascaderComponent.prototype.elementRef;
    /** @type {?} */
    DwCascaderComponent.prototype.cdr;
    /** @type {?} */
    DwCascaderComponent.prototype.dwUpdateHostClassService;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjYXNjYWRlci9kdy1jYXNjYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoSCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUVqRCxpQkFBb0IsS0FBYzs7SUFDaEMsSUFBSSxHQUFHLENBQU07SUFDYixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNWO1NBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDaEMsR0FBRyxHQUFHLENBQUUsS0FBSyxDQUFFLENBQUM7S0FDakI7U0FBTTtRQUNMLEdBQUcsR0FBRyxLQUFLLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxDQUFDO0NBQ1o7Ozs7Ozs7QUFFRCxxQkFBd0IsTUFBVyxFQUFFLE1BQVc7SUFDOUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDekQsT0FBTyxLQUFLLENBQUM7S0FDZDs7SUFFRCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsSUFBSSxNQUFNLENBQUUsQ0FBQyxDQUFFLEtBQUssTUFBTSxDQUFFLENBQUMsQ0FBRSxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEeEQsTUFBTTs7Ozs7O0lBNitCSixZQUFvQixVQUFzQixFQUN0QixLQUNBO1FBRkEsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixRQUFHLEdBQUgsR0FBRztRQUNILDZCQUF3QixHQUF4Qix3QkFBd0I7MEJBOStCdkIsSUFBSTt5QkFDTCxLQUFLO3dCQUNOLEtBQUs7MkJBQ0YsSUFBSTt5QkFDTixJQUFJO3lCQUNKLElBQUk7b0JBQ08sU0FBUzt5QkFDcEIsY0FBYzs4QkFDVCxXQUFXOzhCQUdYLEtBQUs7Z0NBSUosUUFBUTsyQkFDYixLQUFLO3lCQUNQLEtBQUs7eUJBQ0osS0FBSzt5QkFZTCxLQUFLO3FDQUlNLEtBQUs7a0NBRUgsRUFBRTsrQkFLUyxFQUFFO2dDQUVELEVBQUU7eUJBRVIsRUFBRTs7OzsyQkFPbkIsRUFBRTs7d0JBZ0NSLFFBQVEsQ0FBQyxTQUFTO3lCQUNqQixRQUFRLENBQUMsU0FBUzt5QkFDRyxDQUFFLEdBQUcsMEJBQTBCLENBQUU7Ozs7d0JBZ0ZyRCxLQUFLOzs7OzJCQTZFQSxPQUFPOzs7OytCQUdzQixPQUFPOzs7O2lDQUc5QixXQUFXOzs7OzZCQUdmLGVBQWU7Ozs7aUNBU1gsR0FBRzs7OztpQ0FHSCxHQUFHOzs7OytCQUc0QyxDQUFFLE9BQU8sQ0FBRTs7OzsrQkFHNUQsT0FBTzs7OzsrQkFHUCxPQUFPOzs7OytCQU1OLElBQUksWUFBWSxFQUFXOzs7O3dCQUdsQyxJQUFJLFlBQVksRUFBUzs7OztpQ0FHaEIsSUFBSSxZQUFZLEVBQW9COzs7O3dCQUs3QyxJQUFJLFlBQVksRUFHakM7Ozs7dUJBR2dCLElBQUksWUFBWSxFQUFRO1FBdXNCMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6Qzs7OztJQTM3QkQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0tBQ3pCOzs7OztJQUVELElBQUksVUFBVSxDQUFDLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDOztRQUM5QixNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDOztRQUdwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxjQUFjLEVBQUU7WUFDcEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDO1NBQ3JFO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDbEQ7O1FBR0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7OztJQVFELElBQ0ksYUFBYSxDQUFDLEtBQXVCO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsQ0FBQztLQUM3RDs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUM1Qjs7Ozs7O0lBR0QsSUFDSSxXQUFXLENBQUMsU0FBaUI7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7Ozs7SUFHRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7OztJQUdELElBQ0ksTUFBTSxDQUFDLEtBQXFCO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7Ozs7OztJQUdELElBQ0ksV0FBVyxDQUFDLEtBQWM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7OztJQUdELElBQ0ksWUFBWSxDQUFDLEtBQW9DO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7Ozs7SUFVRCxJQUNJLFlBQVksQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7Ozs7SUFHRCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7Ozs7SUFHRCxJQUNJLFdBQVcsQ0FBQyxLQUFjO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7Ozs7SUFHRCxJQUNJLGVBQWUsQ0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7OztJQUdELElBQ0ksaUJBQWlCLENBQUMsS0FBYTtRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztLQUM3Qjs7Ozs7O0lBR0QsSUFBYSxTQUFTLENBQUMsT0FBZ0M7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUUsT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBRSxDQUFDO0tBQzVCOzs7Ozs7SUFHRCxJQUNJLGdCQUFnQixDQUFDLEtBQWM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEM7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDNUI7Ozs7O0lBOERNLGdCQUFnQixDQUFDLFFBQXdDOztRQUM5RCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pGLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDMUI7Ozs7O0lBR0ksS0FBSztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFOztZQUNuQixNQUFNLEtBQUsscUJBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxRQUFRLENBQWdCLEVBQUM7WUFDL0UsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDeEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7Ozs7SUFHSSxJQUFJO1FBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztZQUNsQixNQUFNLEtBQUsscUJBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxRQUFRLENBQWdCLEVBQUM7WUFDL0UsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDdkIsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Q7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7Ozs7O0lBR0ssV0FBVzs7UUFDakIsTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFFLEVBQW9CLENBQUM7WUFDNUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBRSxFQUFhLENBQUM7WUFDNUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBRSxFQUFpQixJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDbEUsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBRSxFQUFpQixJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDbEUsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLGtCQUFrQixDQUFFLEVBQUksSUFBSSxDQUFDLFFBQVE7WUFDeEQsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBRSxFQUFZLElBQUksQ0FBQyxTQUFTO1lBQ3pELENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxjQUFjLENBQUUsRUFBUSxJQUFJLENBQUMsV0FBVztZQUMzRCxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsb0JBQW9CLENBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtTQUNyRixDQUFDO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7UUFJeEQsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7O0lBR2hCLGFBQWE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxlQUFlLENBQUUsRUFBRSxJQUFJO1lBQzFDLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxjQUFjLENBQUUsRUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDekQsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBRSxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNqRyxDQUFDOzs7Ozs7UUFJTyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFHaEIsYUFBYTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLGVBQWUsQ0FBRSxFQUFTLElBQUk7WUFDakQsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLHNCQUFzQixDQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUQsQ0FBQzs7Ozs7O1FBSU8sVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7O0lBR2xCLGVBQWU7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsZUFBZSxDQUFFLEVBQUUsSUFBSTtTQUMzQyxDQUFDOzs7Ozs7UUFJTyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7SUFHaEIsYUFBYTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLGVBQWUsQ0FBRSxFQUFFLElBQUk7U0FDM0MsQ0FBQzs7Ozs7O1FBSU8sUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7O0lBR2hCLGFBQWE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxRQUFRLENBQUUsRUFBVSxDQUFDO1lBQ3hDLENBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxXQUFXLENBQUUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN0RCxDQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsS0FBSyxDQUFFLEVBQVEsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO1lBQzlELENBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxLQUFLLENBQUUsRUFBUSxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87U0FDL0QsQ0FBQzs7Ozs7O1FBSU8sT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7O0lBR2YsWUFBWTtRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsQ0FBRSxFQUFTLElBQUk7WUFDMUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLGVBQWUsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDdkQsQ0FBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBRSxFQUFTLElBQUksQ0FBQyxlQUFlO1NBQzNELENBQUM7Ozs7OztRQUlPLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDOzs7OztJQUdyQixrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFFLEVBQUssSUFBSTtZQUNyQyxDQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUUsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ3hELENBQUM7Ozs7Ozs7O0lBSUcsWUFBWSxDQUFDLE1BQXNCLEVBQUUsS0FBYTtRQUN2RCxPQUFPO1lBQ0wsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksQ0FBRSxFQUFXLElBQUk7WUFDaEQsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLG1CQUFtQixDQUFFLEVBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUMxRCxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsbUJBQW1CLENBQUUsRUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7WUFDL0UsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLHFCQUFxQixDQUFFLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDM0QsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLG9CQUFvQixDQUFFLEVBQUcsTUFBTSxDQUFDLE9BQU87U0FDM0QsQ0FBQzs7Ozs7OztJQUlHLGtCQUFrQixDQUFDLEtBQVk7UUFDcEMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOzs7Ozs7O0lBSW5CLGVBQWUsQ0FBQyxLQUFZOzs7Ozs7UUFNakMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjs7Ozs7OztJQUlJLGdCQUFnQixDQUFDLEtBQVk7Ozs7OztRQU1sQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O0lBR2YsUUFBUTtRQUNkLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUc1QixRQUFRO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Ozs7O1FBSWxDLGVBQWU7UUFDeEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7UUFJcEMsYUFBYTs7UUFDdEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUNuQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsQ0FBQzs7Ozs7OztJQUl0RSxjQUFjLENBQUMsS0FBYTtRQUNqQyxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQzs7O1FBRzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUczQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O0lBR2YsaUJBQWlCOztRQUN2QixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDOztRQUM3QyxNQUFNLE1BQU0sR0FBYSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUUxRSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLENBQUM7U0FDdkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDakY7Ozs7OztJQUlJLFNBQVMsQ0FBQyxLQUFvQjs7UUFDbkMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QixJQUFJLE9BQU8sS0FBSyxVQUFVO1lBQ3hCLE9BQU8sS0FBSyxRQUFRO1lBQ3BCLE9BQU8sS0FBSyxVQUFVO1lBQ3RCLE9BQU8sS0FBSyxXQUFXO1lBQ3ZCLE9BQU8sS0FBSyxLQUFLO1lBQ2pCLE9BQU8sS0FBSyxTQUFTO1lBQ3JCLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQ25CLE9BQU8sS0FBSyxTQUFTO1lBQ3JCLE9BQU8sS0FBSyxVQUFVO1lBQ3RCLE9BQU8sS0FBSyxXQUFXLENBQ3hCLEVBQUU7WUFDRCxPQUFPO1NBQ1I7O1FBR0QsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsT0FBTyxLQUFLLFNBQVM7WUFDckIsT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLE9BQU87U0FDUjs7UUFFRCxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7O1lBRXRCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO2lCQUFNLElBQUksT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ2pCO2lCQUFNLElBQUksT0FBTyxLQUFLLFdBQVcsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO2lCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjs7Ozs7SUFHTSxjQUFjLENBQUMsS0FBaUI7UUFDckMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFFRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEQ7S0FDRjs7Ozs7SUFHTSxtQkFBbUIsQ0FBQyxLQUFpQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RDtLQUNGOzs7OztJQUdNLG1CQUFtQixDQUFDLEtBQWlCO1FBQzFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDM0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7O1lBQ2hDLE1BQU0sV0FBVyxxQkFBRyxLQUFLLENBQUMsYUFBNEIsRUFBQzs7WUFDdkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs7WUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksc0JBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUE0QixDQUFBLENBQUM7WUFDbkUsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUUsaURBQWlELEdBQUU7O2dCQUVqRCxPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pEO0tBQ0Y7Ozs7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztJQUc5QyxxQkFBcUI7UUFDM0IsSUFBSSxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssUUFBUSxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7OztJQUcvQyxTQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBR3JCLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7Ozs7Ozs7Ozs7SUFTSSxtQkFBbUIsQ0FBQyxPQUFnQixFQUFFLEtBQWEsRUFBRSxhQUFzQixLQUFLO1FBQ3JGLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsVUFBVSxDQUFDLEdBQUcsRUFBRTt3QkFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztxQkFDeEIsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDVDthQUNGLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDWDthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5Qjs7Ozs7SUFHSSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Ozs7O0lBR25CLGNBQWMsQ0FBQyxXQUFvQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7WUFHL0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEIsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7Ozs7OztJQUlLLGFBQWE7UUFDbkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOzs7OztJQUdqQixlQUFlO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTs7WUFDMUIsTUFBTSxJQUFJLEdBQVEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7Ozs7Ozs7SUFJSSxjQUFjLENBQUMsTUFBc0I7UUFDMUMsT0FBTyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUUsQ0FBQzs7Ozs7OztJQUk1QyxjQUFjLENBQUMsTUFBc0I7UUFDMUMsT0FBTyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUUsQ0FBQzs7Ozs7OztJQUczQyxlQUFlLENBQUMsTUFBc0IsRUFBRSxLQUFhOztRQUMzRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDakQsT0FBTyxTQUFTLEtBQUssTUFBTSxDQUFDOzs7Ozs7Ozs7OztJQVV0QixlQUFlLENBQUMsTUFBc0IsRUFBRSxLQUFhLEVBQUUsU0FBa0IsS0FBSyxFQUFFLGVBQXdCLElBQUk7UUFDbEgsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxLQUFLLENBQUUsR0FBRyxNQUFNLENBQUM7O1FBR3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBQzthQUNwRTtTQUNGOztRQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkU7O1FBR0QsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzdDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksWUFBWSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO2FBQU07O1lBRUwsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDckQ7U0FDRjs7UUFHRCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7Ozs7Ozs7SUFHSyxZQUFZLENBQUMsTUFBc0IsRUFBRSxLQUFhLEVBQUUsT0FBb0IsRUFBRSxPQUFvQjtRQUNwRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hGLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ2hEO2dCQUNELElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDO2lCQUNYO2FBQ0YsRUFBRSxHQUFHLEVBQUU7Z0JBQ04sTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDeEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksT0FBTyxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDO2lCQUNYO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7Ozs7Ozs7SUFHSyxjQUFjLENBQUMsTUFBc0IsRUFBRSxLQUFhOztRQUUxRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDOztRQUd0QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzVFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztZQUU3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7WUFFekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCOztRQUdELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pEOzs7Ozs7OztJQUlLLFVBQVUsQ0FBQyxNQUFzQixFQUFFLEtBQWE7UUFDdEQsSUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxLQUFLLENBQUM7Ozs7Ozs7SUFHUCxhQUFhLENBQUMsT0FBeUIsRUFBRSxLQUFhO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBRSxHQUFHLE9BQU8sQ0FBQztZQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyRDtTQUNGOzs7Ozs7Ozs7O0lBVUgsYUFBYSxDQUFDLE1BQXNCLEVBQUUsS0FBYSxFQUFFLEtBQVk7UUFDL0QsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7O1FBR0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoQixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzdCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMscUJBQXFCLG1CQUFDLE1BQThCLEdBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkU7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQztLQUNGOzs7OztJQUdPLE9BQU87O1FBQ2IsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDbEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLFdBQVcsQ0FBRSxDQUFDO1FBQzFELElBQUksWUFBWSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxxQkFBcUIsbUJBQUMsWUFBb0MsR0FBRSxJQUFJLENBQUMsQ0FBQzthQUN4RTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNoRDtTQUNGOzs7Ozs7O0lBTUssWUFBWSxDQUFDLElBQWE7O1FBQ2hDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBRWxFLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxXQUFXLENBQUUsQ0FBQzs7UUFFMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxXQUFXLENBQUUsSUFBSSxFQUFFLENBQUM7O1FBQ3BELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7O1FBQzlCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxhQUFhOztZQUNoQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU8sSUFBSSxFQUFFO1lBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNqRCxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtnQkFDeEMsTUFBTTthQUNQOztZQUNELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBRSxTQUFTLENBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxJQUFJLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RDLFNBQVM7YUFDVjtZQUNELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLE1BQU07U0FDUDs7Ozs7SUFHSyxNQUFNO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHbEIsUUFBUTtRQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQU1uQixRQUFROztRQUNkLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2Y7Ozs7OztJQU1LLFNBQVM7O1FBQ2YsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzs7UUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxNQUFNLENBQUUsQ0FBQztRQUN6QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFOztZQUM3QixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdkM7U0FDRjs7Ozs7Ozs7OztJQVVILGtCQUFrQixDQUFDLE1BQXNCLEVBQUUsS0FBYSxFQUFFLEtBQVk7UUFDcEUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztLQUNGOzs7Ozs7Ozs7SUFTRCxrQkFBa0IsQ0FBQyxNQUFzQixFQUFFLEtBQWEsRUFBRSxLQUFZO1FBQ3BFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUN0RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDeEM7S0FDRjs7OztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5Qjs7Ozs7Ozs7SUFHSyxXQUFXLENBQUMsTUFBc0IsRUFBRSxLQUFhLEVBQUUsUUFBaUI7UUFDMUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTs7Z0JBRXRDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2FBQzlCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDs7Ozs7SUFHSSxjQUFjOztRQUNuQixNQUFNLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7Ozs7O0lBR1IsYUFBYTs7UUFDbkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjs7Ozs7OztJQVNLLFVBQVUsQ0FBQyxNQUFXLEVBQUUsS0FBYTs7UUFDM0MsTUFBTSxPQUFPLEdBQXFCLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDMUQsSUFBSSxPQUFPLEVBQUU7O1lBQ1gsTUFBTSxLQUFLLEdBQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEYsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1RDtRQUNELE9BQU8sSUFBSSxDQUFDOzs7Ozs7SUFHTixRQUFRLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUUsS0FBSyxDQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBRSxLQUFLLENBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7O0lBRy9ELGNBQWMsQ0FBQyxLQUFhLEVBQUUsS0FBVTs7UUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLENBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sRUFBRSxDQUFFLEVBQUUsS0FBSztnQkFDL0MsQ0FBRSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxFQUFFLENBQUUsRUFBRSxLQUFLO2FBQ2hELENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUc1QyxXQUFXLENBQUMsS0FBYTs7UUFDL0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7UUFDN0IsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBRSxLQUFLLENBQUUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksS0FBSyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7U0FDRixDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM1QyxJQUFJLEVBQUUsQ0FBQztTQUNSO2FBQU07O1lBQ0wsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLEtBQUssR0FBRyxDQUFDLENBQUUsSUFBSSxFQUFFLENBQUM7WUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hFOzs7OztJQUdILGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7Ozs7Ozs7SUFPRCxVQUFVLENBQUMsS0FBVTs7UUFDbkIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7S0FDRjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFrQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFTyxrQkFBa0I7O1FBQ3hCLE1BQU0sT0FBTyxHQUEyQixFQUFFLENBQUM7O1FBQzNDLE1BQU0sSUFBSSxHQUFxQixFQUFFLENBQUM7O1FBQ2xDLE1BQU0sYUFBYSxHQUFHLENBQUMsVUFBa0IsRUFBRSxDQUFtQixFQUFXLEVBQUU7O1lBQ3pFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNaLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQ2I7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQztTQUNiLENBQUM7O1FBQ0YsTUFBTSxNQUFNLEdBQ1YsSUFBSSxDQUFDLFlBQVksWUFBWSxNQUFNLElBQUksbUJBQUMsSUFBSSxDQUFDLFlBQW1DLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RixtQkFBQyxJQUFJLENBQUMsWUFBbUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELGFBQWEsQ0FBQzs7UUFDbEIsTUFBTSxNQUFNLEdBQ1YsSUFBSSxDQUFDLFlBQVksWUFBWSxNQUFNLElBQUksbUJBQUMsSUFBSSxDQUFDLFlBQW1DLEVBQUMsQ0FBQyxNQUFNLENBQUM7O1FBQzNGLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBb0IsRUFBRSxhQUFhLEdBQUcsS0FBSyxFQUFFLEVBQUU7O1lBQ2pFLE1BQU0sUUFBUSxHQUFHLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNyQjs7Z0JBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQzdCO2dCQUNELElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDN0QsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDNUI7YUFDRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWixDQUFDOztRQUNGLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBb0IsRUFBRSxhQUFhLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDaEIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFOztnQkFDbkMsTUFBTSxRQUFRLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxJQUFJLG1CQUFDO29CQUNYLFFBQVE7b0JBQ1IsTUFBTSxFQUFFLElBQUk7b0JBQ1osSUFBSSxFQUFJLEtBQUs7b0JBQ2IsS0FBSyxFQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDcEIsRUFBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLENBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxSSxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFFLE9BQU8sQ0FBRSxDQUFDOzs7Ozs7SUFHL0Isa0JBQWtCLENBQUMsR0FBVztRQUM1QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsRUFDbEQsZ0RBQWdELElBQUksQ0FBQyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0tBQzlFOzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxNQUE0QixFQUFFLEtBQVk7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUUsTUFBTSxDQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVyQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O1lBQ3JCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7WUFDckMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQzs7WUFDdkMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxJQUFvQixFQUFFLE1BQWMsRUFBRSxFQUFFO2dCQUMvRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN2QixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2dCQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN6QyxDQUFDO1lBQ0YsZUFBZSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7Ozs7SUFFRCxRQUFROztRQUVOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDOUI7OztZQWhzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSwyQkFBMkI7Z0JBQ2hELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBVztvQkFDbkIsaUJBQWlCO2lCQUNsQjtnQkFDRCxtNUZBQW1EO2dCQUNuRCxTQUFTLEVBQVk7b0JBQ25CLHdCQUF3QjtvQkFDeEI7d0JBQ0UsT0FBTyxFQUFNLGlCQUFpQjt3QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbEQsS0FBSyxFQUFRLElBQUk7cUJBQ2xCO2lCQUNGO2dCQUNELElBQUksRUFBaUI7b0JBQ25CLGlCQUFpQixFQUFFLEtBQUs7aUJBQ3pCO3lCQUVHOzs7Ozs7O01BT0E7YUFFTDs7OztZQXRHQyxVQUFVO1lBRlYsaUJBQWlCO1lBbUJWLHdCQUF3Qjs7OzRCQWdMOUIsS0FBSzswQkFXTCxLQUFLO3lCQWtCTCxLQUFLO3FCQVlMLEtBQUs7MEJBWUwsS0FBSzsyQkFVTCxLQUFLOzJCQWlCTCxLQUFLOzBCQVVMLEtBQUs7MEJBVUwsS0FBSzs4QkFVTCxLQUFLO2dDQVdMLEtBQUs7d0JBV0wsS0FBSzsrQkFZTCxLQUFLOzBCQVVMLEtBQUs7OEJBR0wsS0FBSztnQ0FHTCxLQUFLOzRCQUdMLEtBQUs7MEJBR0wsS0FBSzt5QkFHTCxLQUFLO2dDQUdMLEtBQUs7Z0NBR0wsS0FBSzs4QkFHTCxLQUFLOzhCQUdMLEtBQUs7OEJBR0wsS0FBSzt5QkFHTCxLQUFLOzhCQUdMLE1BQU07dUJBR04sTUFBTTtnQ0FHTixNQUFNO3VCQUtOLE1BQU07c0JBTU4sTUFBTTtvQkFFTixTQUFTLFNBQUMsT0FBTzttQkFFakIsU0FBUyxTQUFDLE1BQU07d0JBcU9oQixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFOzZCQWtEcEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTtrQ0FlbEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTtrQ0FVdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5mdW5jdGlvbiB0b0FycmF5PFQ+KHZhbHVlOiBUIHwgVFtdKTogVFtdIHtcbiAgbGV0IHJldDogVFtdO1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldCA9IFtdO1xuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldCA9IFsgdmFsdWUgXTtcbiAgfSBlbHNlIHtcbiAgICByZXQgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhcnJheUVxdWFsczxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10pOiBib29sZWFuIHtcbiAgaWYgKCFhcnJheTEgfHwgIWFycmF5MiB8fCBhcnJheTEubGVuZ3RoICE9PSBhcnJheTIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgbGVuID0gYXJyYXkxLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheTFbIGkgXSAhPT0gYXJyYXkyWyBpIF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5UmVuZGVyID0gbGFiZWwgPT4gbGFiZWwuam9pbignIC8gJyk7XG5cbmV4cG9ydCB0eXBlIER3Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBEd0Nhc2NhZGVyVHJpZ2dlclR5cGUgPSAnY2xpY2snIHwgJ2hvdmVyJztcbmV4cG9ydCB0eXBlIER3Q2FzY2FkZXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCcgO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyT3B0aW9uIHtcbiAgdmFsdWU/OiBhbnk7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgaXNMZWFmPzogYm9vbGVhbjtcbiAgcGFyZW50PzogQ2FzY2FkZXJPcHRpb247XG4gIGNoaWxkcmVuPzogQ2FzY2FkZXJPcHRpb25bXTtcblxuICBbIGtleTogc3RyaW5nIF06IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlclNlYXJjaE9wdGlvbiBleHRlbmRzIENhc2NhZGVyT3B0aW9uIHtcbiAgcGF0aDogQ2FzY2FkZXJPcHRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEd1Nob3dTZWFyY2hPcHRpb25zIHtcbiAgZmlsdGVyPyhpbnB1dFZhbHVlOiBzdHJpbmcsIHBhdGg6IENhc2NhZGVyT3B0aW9uW10pOiBib29sZWFuO1xuICBzb3J0ZXI/KGE6IENhc2NhZGVyT3B0aW9uW10sIGI6IENhc2NhZGVyT3B0aW9uW10sIGlucHV0VmFsdWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1jYXNjYWRlcixbZHctY2FzY2FkZXJdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICBkcm9wRG93bkFuaW1hdGlvblxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1jYXNjYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdDYXNjYWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbYXR0ci50YWJJbmRleF0nOiAnXCIwXCInXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICAgIGAuYW50LWNhc2NhZGVyLW1lbnVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3Q2FzY2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIGFsbG93Q2xlYXIgPSB0cnVlO1xuICBwcml2YXRlIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIGRpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgZW5hYmxlQ2FjaGUgPSB0cnVlO1xuICBwcml2YXRlIHNob3dBcnJvdyA9IHRydWU7XG4gIHByaXZhdGUgc2hvd0lucHV0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzaXplOiBEd0Nhc2NhZGVyU2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNhc2NhZGVyJztcbiAgcHJpdmF0ZSBpbnB1dFByZWZpeENscyA9ICdhbnQtaW5wdXQnO1xuICBwcml2YXRlIG1lbnVDbGFzc05hbWU7XG4gIHByaXZhdGUgY29sdW1uQ2xhc3NOYW1lO1xuICBwcml2YXRlIGNoYW5nZU9uU2VsZWN0ID0gZmFsc2U7XG4gIHByaXZhdGUgc2hvd1NlYXJjaDogYm9vbGVhbiB8IER3U2hvd1NlYXJjaE9wdGlvbnM7XG4gIHByaXZhdGUgZGVmYXVsdFZhbHVlOiBhbnlbXTtcblxuICBwdWJsaWMgZHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xuICBwdWJsaWMgbWVudVZpc2libGUgPSBmYWxzZTtcbiAgcHVibGljIGlzTG9hZGluZyA9IGZhbHNlO1xuICBwcml2YXRlIGlzT3BlbmluZyA9IGZhbHNlO1xuXG4gIC8vIOWGhemDqOagt+W8j1xuICBwcml2YXRlIF9hcnJvd0NsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfY2xlYXJDbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG4gIHByaXZhdGUgX2lucHV0Q2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuICBwcml2YXRlIF9sYWJlbENsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfbG9hZGluZ0NsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfbWVudUNsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfbWVudUNvbHVtbkNsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcblxuICBwdWJsaWMgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGlzRm9jdXNlZCA9IGZhbHNlO1xuXG4gIC8qKiDpgInmi6npgInpobnlkI7vvIzmuLLmn5PmmL7npLrmlofmnKwgKi9cbiAgcHJpdmF0ZSBsYWJlbFJlbmRlclRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgcHVibGljIGlzTGFiZWxSZW5kZXJUZW1wbGF0ZSA9IGZhbHNlO1xuICBwdWJsaWMgbGFiZWxSZW5kZXJUZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyBsYWJlbFJlbmRlckNvbnRleHQ6IGFueSA9IHt9O1xuXG4gIC8vIOW9k+WJjeWAvFxuICBwcml2YXRlIHZhbHVlOiBhbnlbXTtcbiAgLy8g5bey6YCJ5oup55qE6YCJ6aG56KGo56S65b2T5YmN5bey56Gu6K6k55qE6YCJ6aG577yac2VsZWN0aW9uIHdpbGwgdHJpZ2dlciB2YWx1ZSBjaGFuZ2VcbiAgcHJpdmF0ZSBzZWxlY3RlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcbiAgLy8g5bey5r+A5rS755qE6YCJ6aG56KGo56S66YCa6L+H6ZSu55uY5pa55ZCR6ZSu6YCJ5oup55qE6YCJ6aG577yM5bm25pyq5pyA57uI56Gu6K6k77yI6Zmk6Z2e5oyJRU5URVLplK7vvInvvJphY3RpdmFjdGlvbiB3aWxsIG5vdCB0cmlnZ2VyIHZhbHVlIGNoYW5nZVxuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcbiAgLy8g6KGo56S65b2T5YmN6I+c5Y2V55qE5pWw5o2u5YiX77yaYWxsIGRhdGEgY29sdW1uc1xuICBwdWJsaWMgZHdDb2x1bW5zOiBDYXNjYWRlck9wdGlvbltdW10gPSBbXTtcblxuICAvLyDmmL7npLrmiJbpmpDol4/oj5zljZXorqHml7blmahcbiAgcHJpdmF0ZSBkZWxheVRpbWVyOiBhbnk7XG4gIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjogYW55O1xuXG4gIC8qKiDmkJzntKLnm7jlhbPnmoTovpPlhaXlgLwgKi9cbiAgcHJpdmF0ZSBfaW5wdXRWYWx1ZSA9ICcnO1xuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dFZhbHVlO1xuICB9XG5cbiAgc2V0IGlucHV0VmFsdWUoaW5wdXRWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgY29uc3Qgd2lsbEJlSW5TZWFyY2ggPSAhIWlucHV0VmFsdWU7XG5cbiAgICAvLyDmkJzntKLnirbmgIHlj5jliqjkuYvliY3vvIzlpoLopoHov5vlhaXliJnopoHkv53nlZnkuYvliY3mv4DmtLvpgInpobnnmoTlv6vnhafvvIzpgIDlh7rmkJzntKLnirbmgIHopoHov5jljp/or6Xlv6vnhadcbiAgICBpZiAoIXRoaXMuaW5TZWFyY2ggJiYgd2lsbEJlSW5TZWFyY2gpIHtcbiAgICAgIHRoaXMub2xkQWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5zZWFyY2hXaWR0aFN0eWxlID0gYCR7dGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5TZWFyY2ggJiYgIXdpbGxCZUluU2VhcmNoKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLm9sZEFjdGl2YXRlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgLy8g5pCc57Si54q25oCB5Y+Y5pu05LmL5ZCOXG4gICAgdGhpcy5pblNlYXJjaCA9ICEhd2lsbEJlSW5TZWFyY2g7XG4gICAgaWYgKHRoaXMuaW5TZWFyY2gpIHtcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNob3dTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5kd0NvbHVtbnMgPSB0aGlzLm9sZENvbHVtbnNIb2xkZXI7XG4gICAgICB9XG4gICAgICB0aGlzLnNlYXJjaFdpZHRoU3R5bGUgPSAnJztcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gbmdNb2RlbCBBY2Nlc3NcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyAuLi5ERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyBdO1xuXG4gIC8qKiBEaXNwbGF5IFJlbmRlciBuZ1RlbXBsYXRlICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0xhYmVsUmVuZGVyKHZhbHVlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5sYWJlbFJlbmRlclRwbCA9IHZhbHVlO1xuICAgIHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlID0gKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICB9XG5cbiAgZ2V0IGR3TGFiZWxSZW5kZXIoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxSZW5kZXJUcGw7XG4gIH1cblxuICAvKiogcHJlZml4Q2xzICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ByZWZpeENscyhwcmVmaXhDbHM6IHN0cmluZykge1xuICAgIHRoaXMucHJlZml4Q2xzID0gcHJlZml4Q2xzO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnNldExhYmVsQ2xhc3MoKTtcbiAgICB0aGlzLnNldEFycm93Q2xhc3MoKTtcbiAgICB0aGlzLnNldExvYWRpbmdDbGFzcygpO1xuICAgIHRoaXMuc2V0Q2xlYXJDbGFzcygpO1xuICAgIHRoaXMuc2V0SW5wdXRDbGFzcygpO1xuICAgIHRoaXMuc2V0TWVudUNsYXNzKCk7XG4gICAgdGhpcy5zZXRNZW51Q29sdW1uQ2xhc3MoKTtcbiAgfVxuXG4gIGdldCBkd1ByZWZpeENscygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnByZWZpeENscztcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGlzIGRpc2FibGVkICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0SW5wdXRDbGFzcygpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKiogSW5wdXQgc2l6ZSwgb25lIG9mIGBsYXJnZWAgYGRlZmF1bHRgIGBzbWFsbGAgKi9cbiAgQElucHV0KClcbiAgc2V0IGR3U2l6ZSh2YWx1ZTogRHdDYXNjYWRlclNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRJbnB1dENsYXNzKCk7XG4gIH1cblxuICBnZXQgZHdTaXplKCk6IER3Q2FzY2FkZXJTaXplIHtcbiAgICByZXR1cm4gdGhpcy5zaXplO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgc2hvdyBpbnB1dCBib3guIERlZmF1bHRzIHRvIGB0cnVlYC4gKi9cbiAgQElucHV0KClcbiAgc2V0IGR3U2hvd0lucHV0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zaG93SW5wdXQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd0lucHV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dJbnB1dDtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGNhbiBzZWFyY2guIERlZmF1bHRzIHRvIGBmYWxzZWAuICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dTZWFyY2godmFsdWU6IGJvb2xlYW4gfCBEd1Nob3dTZWFyY2hPcHRpb25zKSB7XG4gICAgdGhpcy5zaG93U2VhcmNoID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZHdTaG93U2VhcmNoKCk6IGJvb2xlYW4gfCBEd1Nob3dTZWFyY2hPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5zaG93U2VhcmNoO1xuICB9XG5cbiAgcHVibGljIHNlYXJjaFdpZHRoU3R5bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBvbGRDb2x1bW5zSG9sZGVyO1xuICBwcml2YXRlIG9sZEFjdGl2YXRlZE9wdGlvbnM7XG5cbiAgLyoqIElmIGNhc2NhZGVyIGlzIGluIHNlYXJjaCBtb2RlLiAqL1xuICBwdWJsaWMgaW5TZWFyY2ggPSBmYWxzZTtcblxuICAvKiogV2hldGhlciBhbGxvdyBjbGVhci4gRGVmYXVsdHMgdG8gYHRydWVgLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdBbGxvd0NsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5hbGxvd0NsZWFyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0FsbG93Q2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWxsb3dDbGVhcjtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGF1dG8gZm9jdXMuICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0F1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0F1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hdXRvRm9jdXM7XG4gIH1cblxuICAvKiogV2hldGhlciB0byBzaG93IGFycm93ICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dBcnJvdyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd0Fycm93ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dBcnJvdygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93QXJyb3c7XG4gIH1cblxuICAvKiogQWRkaXRpb25hbCBjbGFzc05hbWUgb2YgcG9wdXAgb3ZlcmxheSAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdNZW51Q2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lbnVDbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuICB9XG5cbiAgZ2V0IGR3TWVudUNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1lbnVDbGFzc05hbWU7XG4gIH1cblxuICAvKiogQWRkaXRpb25hbCBjbGFzc05hbWUgb2YgcG9wdXAgb3ZlcmxheSBjb2x1bW4gKi9cbiAgQElucHV0KClcbiAgc2V0IGR3Q29sdW1uQ2xhc3NOYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbHVtbkNsYXNzTmFtZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0TWVudUNvbHVtbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgZHdDb2x1bW5DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5DbGFzc05hbWU7XG4gIH1cblxuICAvKiogT3B0aW9ucyBmb3IgZmlyc3QgY29sdW1uLCBzdWIgY29sdW1uIHdpbGwgYmUgbG9hZCBhc3luYyAqL1xuICBASW5wdXQoKSBzZXQgZHdPcHRpb25zKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XG4gICAgdGhpcy5vbGRDb2x1bW5zSG9sZGVyID0gdGhpcy5kd0NvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gWyBvcHRpb25zIF0gOiBbXTtcbiAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUgJiYgdGhpcy5kd0NvbHVtbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXRPcHRpb25zKDApO1xuICAgIH1cbiAgfVxuXG4gIGdldCBkd09wdGlvbnMoKTogQ2FzY2FkZXJPcHRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuZHdDb2x1bW5zWyAwIF07XG4gIH1cblxuICAvKiogQ2hhbmdlIHZhbHVlIG9uIGVhY2ggc2VsZWN0aW9uIGlmIHNldCB0byB0cnVlICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NoYW5nZU9uU2VsZWN0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGFuZ2VPblNlbGVjdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdDaGFuZ2VPblNlbGVjdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VPblNlbGVjdDtcbiAgfVxuXG4gIC8qKiBIb3ZlciB0ZXh0IGZvciB0aGUgY2xlYXIgaWNvbiAqL1xuICBASW5wdXQoKSBkd0NsZWFyVGV4dCA9ICdDbGVhcic7XG5cbiAgLyoqIEV4cGFuZCBjb2x1bW4gaXRlbSB3aGVuIGNsaWNrIG9yIGhvdmVyLCBvbmUgb2YgJ2NsaWNrJyAnaG92ZXInICovXG4gIEBJbnB1dCgpIGR3RXhwYW5kVHJpZ2dlcjogRHdDYXNjYWRlckV4cGFuZFRyaWdnZXIgPSAnY2xpY2snO1xuXG4gIC8qKiBTcGVjaWZ5IGNvbnRlbnQgdG8gc2hvdyB3aGVuIG5vIHJlc3VsdCBtYXRjaGVzLiAqL1xuICBASW5wdXQoKSBkd05vdEZvdW5kQ29udGVudCA9ICdOb3QgRm91bmQnO1xuXG4gIC8qKiBJbnB1dCBwbGFjZWhvbGRlciAqL1xuICBASW5wdXQoKSBkd1BsYWNlSG9sZGVyID0gJ1BsZWFzZSBzZWxlY3QnO1xuXG4gIC8qKiBBZGRpdGlvbmFsIHN0eWxlIG9mIHBvcHVwIG92ZXJsYXkgKi9cbiAgQElucHV0KCkgZHdNZW51U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG5cbiAgLyoqIENoYW5nZSB2YWx1ZSBvbiBzZWxlY3Rpb24gb25seSBpZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgICovXG4gIEBJbnB1dCgpIGR3Q2hhbmdlT246IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuXG4gIC8qKiBEZWxheSB0aW1lIHRvIHNob3cgd2hlbiBtb3VzZSBlbnRlciwgd2hlbiBgZHdFeHBhbmRUcmlnZ2VyYCBpcyBgaG92ZXJgLiAqL1xuICBASW5wdXQoKSBkd01vdXNlRW50ZXJEZWxheSA9IDE1MDsgLy8gbXNcblxuICAvKiogRGVsYXkgdGltZSB0byBoaWRlIHdoZW4gbW91c2UgZW50ZXIsIHdoZW4gYGR3RXhwYW5kVHJpZ2dlcmAgaXMgYGhvdmVyYC4gKi9cbiAgQElucHV0KCkgZHdNb3VzZUxlYXZlRGVsYXkgPSAxNTA7IC8vIG1zXG5cbiAgLyoqIFRyaWdnZXJpbmcgbW9kZTogY2FuIGJlIEFycmF5PCdjbGljayd8J2hvdmVyJz4gKi9cbiAgQElucHV0KCkgZHdUcmlnZ2VyQWN0aW9uOiBEd0Nhc2NhZGVyVHJpZ2dlclR5cGUgfCBEd0Nhc2NhZGVyVHJpZ2dlclR5cGVbXSA9IFsgJ2NsaWNrJyBdO1xuXG4gIC8qKiBQcm9wZXJ0eSBuYW1lIGZvciBnZXR0aW5nIGB2YWx1ZWAgaW4gdGhlIG9wdGlvbiAqL1xuICBASW5wdXQoKSBkd1ZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xuXG4gIC8qKiBQcm9wZXJ0eSBuYW1lIGZvciBnZXR0aW5nIGBsYWJlbGAgaW4gdGhlIG9wdGlvbiAqL1xuICBASW5wdXQoKSBkd0xhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xuXG4gIC8qKiDlvILmraXliqDovb3mlbDmja4gKi9cbiAgQElucHV0KCkgZHdMb2FkRGF0YTogKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjtcblxuICAvKiogRXZlbnQ6IGVtaXQgb24gcG9wdXAgc2hvdyBvciBoaWRlICovXG4gIEBPdXRwdXQoKSBkd1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLyoqIEV2ZW50OiBlbWl0IG9uIHZhbHVlcyBjaGFuZ2VkICovXG4gIEBPdXRwdXQoKSBkd0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG5cbiAgLyoqIEV2ZW50OiBlbWl0IG9uIHZhbHVlcyBhbmQgc2VsZWN0aW9uIGNoYW5nZWQgKi9cbiAgQE91dHB1dCgpIGR3U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYXNjYWRlck9wdGlvbltdPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudDogZW1pdCBvbiBvcHRpb24gc2VsZWN0ZWQsIGV2ZW50IGRhdGHvvJp7b3B0aW9uOiBhbnksIGluZGV4OiBudW1iZXJ9XG4gICAqL1xuICBAT3V0cHV0KCkgZHdTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBvcHRpb246IENhc2NhZGVyT3B0aW9uLFxuICAgIGluZGV4OiBudW1iZXJcbiAgfT4oKTtcblxuICAvKiogRXZlbnQ6IGVtaXQgb24gdGhlIGNsZWFyIGJ1dHRvbiBjbGlja2VkICovXG4gIEBPdXRwdXQoKSBkd0NsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIC8qKiDmta7lsYLoj5zljZUgKi9cbiAgQFZpZXdDaGlsZCgnbWVudScpIG1lbnU6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSA9PT0gJ2JvdHRvbScgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgIGlmICh0aGlzLmRyb3BEb3duUG9zaXRpb24gIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMucHJlZml4Q2xzfS1pbnB1dGApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmZvY3VzKSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5wcmVmaXhDbHN9LWlucHV0YCkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuYmx1cikge1xuICAgICAgICBpbnB1dC5ibHVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLmJsdXIoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICB0aGlzLnNldExhYmVsQ2xhc3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc31gIF0gICAgICAgICAgICAgICAgICA6IDEsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXJgIF0gICAgICAgICAgIDogMSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWxnYCBdICAgICAgICAgICAgICAgOiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNtYCBdICAgICAgICAgICAgICAgOiB0aGlzLmR3U2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1kaXNhYmxlZGAgXSAgOiB0aGlzLmRpc2FibGVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZm9jdXNlZGAgXSAgICAgICAgICA6IHRoaXMuaXNGb2N1c2VkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLW9wZW5gIF0gICAgICA6IHRoaXMubWVudVZpc2libGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItd2l0aC12YWx1ZWAgXTogdGhpcy5pbnB1dFZhbHVlICYmIHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGhcbiAgICB9O1xuICAgIHRoaXMuZHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gIH1cblxuICAvKiog5qCH562+IOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IGxhYmVsQ2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsQ2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRMYWJlbENsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX2xhYmVsQ2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWxhYmVsYCBdOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc2hvdy1zZWFyY2hgIF0gOiAhIXRoaXMuZHdTaG93U2VhcmNoLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZm9jdXNlZGAgXSAgICAgOiAhIXRoaXMuZHdTaG93U2VhcmNoICYmIHRoaXMuaXNGb2N1c2VkICYmICF0aGlzLl9pbnB1dFZhbHVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDnrq3lpLQg5qC35byPICovXG4gIHB1YmxpYyBnZXQgYXJyb3dDbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fYXJyb3dDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldEFycm93Q2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fYXJyb3dDbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItYXJyb3dgIF0gICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWFycm93LWV4cGFuZGAgXTogdGhpcy5tZW51VmlzaWJsZVxuICAgIH07XG4gIH1cblxuICAvKiog5Yqg6L295Lit5Zu+5qCHIOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IGxvYWRpbmdDbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZ0NscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGluZ0NsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX2xvYWRpbmdDbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItYXJyb3dgIF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOa4hemZpOWbvuaghyDmoLflvI8gKi9cbiAgcHVibGljIGdldCBjbGVhckNscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9jbGVhckNscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xlYXJDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhckNscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1jbGVhcmAgXTogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKiog6L6T5YWl5qGGIOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IGlucHV0Q2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0Q2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJbnB1dENsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX2lucHV0Q2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taW5wdXRgIF0gICAgICAgIDogMSxcbiAgICAgIFsgYCR7dGhpcy5pbnB1dFByZWZpeENsc30tZGlzYWJsZWRgIF06IHRoaXMuZHdEaXNhYmxlZCxcbiAgICAgIFsgYCR7dGhpcy5pbnB1dFByZWZpeENsc30tbGdgIF0gICAgICA6IHRoaXMuZHdTaXplID09PSAnbGFyZ2UnLFxuICAgICAgWyBgJHt0aGlzLmlucHV0UHJlZml4Q2xzfS1zbWAgXSAgICAgIDogdGhpcy5kd1NpemUgPT09ICdzbWFsbCdcbiAgICB9O1xuICB9XG5cbiAgLyoqIOa1ruWxgiDmoLflvI8gKi9cbiAgcHVibGljIGdldCBtZW51Q2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldE1lbnVDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9tZW51Q2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudXNgIF0gICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudXMtaGlkZGVuYCBdOiAhdGhpcy5tZW51VmlzaWJsZSxcbiAgICAgIFsgYCR7dGhpcy5kd01lbnVDbGFzc05hbWV9YCBdICAgICAgIDogdGhpcy5kd01lbnVDbGFzc05hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOa1ruWxguWIlyDmoLflvI8gKi9cbiAgcHVibGljIGdldCBtZW51Q29sdW1uQ2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVDb2x1bW5DbHM7XG4gIH1cblxuICBwcml2YXRlIHNldE1lbnVDb2x1bW5DbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9tZW51Q29sdW1uQ2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudWAgXSAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5kd0NvbHVtbkNsYXNzTmFtZX1gIF06IHRoaXMuZHdDb2x1bW5DbGFzc05hbWVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOiOt+WPluWIl+S4rU9wdGlvbueahOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0T3B0aW9uQ2xzKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51LWl0ZW1gIF0gICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51LWl0ZW0tZXhwYW5kYCBdICA6ICFvcHRpb24uaXNMZWFmLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudS1pdGVtLWFjdGl2ZWAgXSAgOiB0aGlzLmlzQWN0aXZlZE9wdGlvbihvcHRpb24sIGluZGV4KSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnUtaXRlbS1kaXNhYmxlZGAgXTogb3B0aW9uLmRpc2FibGVkLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudS1pdGVtLWxvYWRpbmdgIF0gOiBvcHRpb24ubG9hZGluZ1xuICAgIH07XG4gIH1cblxuICAvKiogcHJldmVudCBpbnB1dCBjaGFuZ2UgZXZlbnQgKi9cbiAgcHVibGljIGhhbmRsZXJJbnB1dENoYW5nZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKiBpbnB1dCBlbGVtZW50IGJsdXIgKi9cbiAgcHVibGljIGhhbmRsZUlucHV0Qmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvKlxuICAgIGlmICghdGhpcy5kd1Nob3dTZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKi9cbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSkge1xuICAgICAgdGhpcy5mb2N1cygpOyAvLyBrZWVwIGlucHV0IGhhcyBmb2N1cyB3aGVuIG1lbnUgb3BlbmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBpbnB1dCBlbGVtZW50IGZvY3VzICovXG4gIHB1YmxpYyBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIC8qXG4gICAgaWYgKCF0aGlzLmR3U2hvd1NlYXJjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAqL1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgICB0aGlzLnNldExhYmVsQ2xhc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFzSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKiogV2hldGhlciB0byBzaG93IGlucHV0IGVsZW1lbnQgcGxhY2Vob2xkZXIgKi9cbiAgcHVibGljIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5oYXNJbnB1dCgpIHx8IHRoaXMuaGFzVmFsdWUoKSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgY2xlYXIgYnV0dG9uIGlzIHZpc2libGUgKi9cbiAgcHVibGljIGdldCBzaG93Q2xlYXJJY29uKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzSGFzVmFsdWUgPSB0aGlzLmhhc1ZhbHVlKCk7XG4gICAgY29uc3QgaXNIYXNJbnB1dCA9IHRoaXMuaGFzSW5wdXQoKTtcbiAgICByZXR1cm4gdGhpcy5kd0FsbG93Q2xlYXIgJiYgIXRoaXMuZHdEaXNhYmxlZCAmJiAoaXNIYXNWYWx1ZSB8fCBpc0hhc0lucHV0KTtcbiAgfVxuXG4gIC8qKiBjbGVhciB0aGUgaW5wdXQgYm94IGFuZCBzZWxlY3RlZCBvcHRpb25zICovXG4gIHB1YmxpYyBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcbiAgICAvLyB0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSA9IGZhbHNlO1xuICAgIC8vIGNsZWFyIGN1c3RvbSBjb250ZXh0XG4gICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuXG4gICAgLy8gdHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGREaXNwbGF5TGFiZWwoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnM7XG4gICAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IHNlbGVjdGVkT3B0aW9ucy5tYXAobyA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKG8pKTtcbiAgICAvLyDorr7nva7lvZPliY3mjqfku7bnmoTmmL7npLrlgLxcbiAgICBpZiAodGhpcy5pc0xhYmVsUmVuZGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0geyBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9IGRlZmF1bHREaXNwbGF5UmVuZGVyLmNhbGwodGhpcywgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBpZiAoa2V5Q29kZSAhPT0gRE9XTl9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gVVBfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IExFRlRfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IFJJR0hUX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBFTlRFUiAmJlxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pblNlYXJjaCAmJiAoXG4gICAgICBrZXlDb2RlID09PSBCQUNLU1BBQ0UgfHxcbiAgICAgIGtleUNvZGUgPT09IExFRlRfQVJST1cgfHxcbiAgICAgIGtleUNvZGUgPT09IFJJR0hUX0FSUk9XXG4gICAgKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXNzIGFueSBrZXlzIGFib3ZlIHRvIHJlb3BlbiBtZW51XG4gICAgaWYgKCF0aGlzLmlzTWVudVZpc2libGUoKSAmJlxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEUpIHtcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFByZXNzIEVTQyB0byBjbG9zZSBtZW51XG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRSkge1xuICAgICAgLy8gdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7IC8vIGFscmVhZHkgY2FsbCBieSBjZGstb3ZlcmxheSBkZXRhY2hcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc01lbnVWaXNpYmxlKCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVVwKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICB0aGlzLm9uRW50ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgcHVibGljIG9uVHJpZ2dlckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZCgpOyAvLyBzZXQgeW91ciBjb250cm9sIHRvICd0b3VjaGVkJ1xuICAgIGlmICh0aGlzLmR3U2hvd1NlYXJjaCkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2xpY2tUaWdnZXJBY3Rpb24oKSkge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKCF0aGlzLm1lbnVWaXNpYmxlLCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvblRyaWdnZXJNb3VzZUVudGVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1BvaW50ZXJUaWdnZXJBY3Rpb24oKSkge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKHRydWUsIHRoaXMuZHdNb3VzZUVudGVyRGVsYXksIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvblRyaWdnZXJNb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNNZW51VmlzaWJsZSgpIHx8IHRoaXMuaXNPcGVuaW5nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1BvaW50ZXJUaWdnZXJBY3Rpb24oKSkge1xuICAgICAgY29uc3QgbW91c2VUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgaG9zdEVsID0gdGhpcy5lbDtcbiAgICAgIGNvbnN0IG1lbnVFbCA9IHRoaXMubWVudSAmJiB0aGlzLm1lbnUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChob3N0RWwuY29udGFpbnMobW91c2VUYXJnZXQpIHx8IChtZW51RWwgJiYgbWVudUVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSlcbiAgICAgIC8qfHwgbW91c2VUYXJnZXQucGFyZW50RWxlbWVudC5jb250YWlucyhtZW51RWwpKi8pIHtcbiAgICAgICAgLy8g5Zug5Li65rWu5bGC55qEYmFja2Ryb3Dlh7rnjrDvvIzmmoLml7bmsqHmnInlip7ms5Xoh6rliqjmtojlpLFcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLmR3TW91c2VMZWF2ZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzQ2xpY2tUaWdnZXJBY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmR3VHJpZ2dlckFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmR3VHJpZ2dlckFjdGlvbiA9PT0gJ2NsaWNrJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZHdUcmlnZ2VyQWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1BvaW50ZXJUaWdnZXJBY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmR3VHJpZ2dlckFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmR3VHJpZ2dlckFjdGlvbiA9PT0gJ2hvdmVyJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZHdUcmlnZ2VyQWN0aW9uLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xO1xuICB9XG5cbiAgcHVibGljIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmmL7npLrmiJbogIXpmpDol4/oj5zljZVcbiAgICpcbiAgICogQHBhcmFtIHZpc2libGUgdHJ1ZS3mmL7npLrvvIxmYWxzZS3pmpDol49cbiAgICogQHBhcmFtIGRlbGF5IOW7tui/n+aXtumXtFxuICAgKi9cbiAgcHVibGljIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGlmICh2aXNpYmxlICYmIHNldE9wZW5pbmcpIHtcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbmluZyA9IGZhbHNlO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZW51VmlzaWJsZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRNZW51VmlzaWJsZShtZW51VmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSAhPT0gbWVudVZpc2libGUpIHtcbiAgICAgIHRoaXMubWVudVZpc2libGUgPSBtZW51VmlzaWJsZTtcblxuICAgICAgLy8gdXBkYXRlIGNsYXNzXG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgICB0aGlzLnNldEFycm93Q2xhc3MoKTtcbiAgICAgIHRoaXMuc2V0TWVudUNsYXNzKCk7XG5cbiAgICAgIGlmIChtZW51VmlzaWJsZSkge1xuICAgICAgICB0aGlzLmJlZm9yZVZpc2libGUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHdWaXNpYmxlQ2hhbmdlLmVtaXQobWVudVZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBsb2FkIGluaXQgZGF0YSBpZiBuZWNlc3NhcnkgKi9cbiAgcHJpdmF0ZSBiZWZvcmVWaXNpYmxlKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZFJvb3RPcHRpb25zKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRSb290T3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHdDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgY29uc3Qgcm9vdDogYW55ID0ge307XG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihyb290LCAtMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPlk9wdGlvbueahOWAvO+8jOS+i+Wmgu+8jOWPr+S7peaMh+WummxhYmVsUHJvcGVydHk9XCJuYW1lXCLmnaXlj5ZOYW1lICovXG4gIHB1YmxpYyBnZXRPcHRpb25MYWJlbChvcHRpb246IENhc2NhZGVyT3B0aW9uKTogYW55IHtcbiAgICByZXR1cm4gb3B0aW9uWyB0aGlzLmR3TGFiZWxQcm9wZXJ0eSB8fCAnbGFiZWwnIF07XG4gIH1cblxuICAvKiog6I635Y+WT3B0aW9u55qE5YC877yM5L6L5aaC77yM5Y+v5Lul5oyH5a6admFsdWVQcm9wZXJ0eT1cImlkXCLmnaXlj5ZJRCAqL1xuICBwdWJsaWMgZ2V0T3B0aW9uVmFsdWUob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5kd1ZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJyBdO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FjdGl2ZWRPcHRpb24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFjdGl2ZU9wdCA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaW5kZXggXTtcbiAgICByZXR1cm4gYWN0aXZlT3B0ID09PSBvcHRpb247XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5p+Q5YiX55qE5r+A5rS755qE6I+c5Y2V6YCJ6aG5XG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb24g6I+c5Y2V6YCJ6aG5XG4gICAqIEBwYXJhbSBpbmRleCAg6YCJ6aG55omA5Zyo55qE5YiX57uE55qE57Si5byVXG4gICAqIEBwYXJhbSBzZWxlY3Qg5piv5ZCm6Kem5Y+R6YCJ5oup57uT54K5XG4gICAqL1xuICBwcml2YXRlIHNldEFjdGl2ZU9wdGlvbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSwgbG9hZENoaWxkcmVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICghb3B0aW9uIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaW5kZXggXSA9IG9wdGlvbjtcblxuICAgIC8vIOW9k+ebtOaOpemAieaLqeacgOWQjuS4gOe6p+aXtu+8jOWJjemdoueahOmAiemhueimgeihpeWFqOOAguS+i+Wmgu+8jOmAieaLqeKAnOWfjuW4guKAne+8jOWImeiHquWKqOihpeWFqOKAnOWbveWutuKAneOAgeKAnOecgeS7veKAnVxuICAgIGZvciAobGV0IGkgPSBpbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoIXRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSBdKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSBdID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpICsgMSBdLnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5oiq5pat5aSa5L2Z55qE6YCJ6aG577yM5aaC6YCJ5oup4oCc55yB5Lu94oCd77yM5YiZ5Y+q5Lya5pyJ4oCc5Zu95a624oCd44CB4oCc55yB5Lu94oCd77yM5Y675o6J4oCc5Z+O5biC4oCd44CB4oCc5Yy65Y6/4oCdXG4gICAgaWYgKGluZGV4IDwgdGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zbGljZSgwLCBpbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8vIGxvYWQgY2hpbGRyZW5cbiAgICBpZiAob3B0aW9uLmNoaWxkcmVuICYmIG9wdGlvbi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIG9wdGlvbi5pc0xlYWYgPSBmYWxzZTtcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IG9wdGlvbik7XG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBpbmRleCArIDEpO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZENoaWxkcmVuKSB7XG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbihvcHRpb24sIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2xpY2tpbmcgbGVhZiBub2RlIHdpbGwgcmVtb3ZlIGFueSBjaGlsZHJlbiBjb2x1bW5zXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmR3Q29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuZHdDb2x1bW5zID0gdGhpcy5kd0NvbHVtbnMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0cmlnZ2VyIHNlbGVjdCBldmVudCwgYW5kIGRpc3BsYXkgbGFiZWxcbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICB0aGlzLm9uU2VsZWN0T3B0aW9uKG9wdGlvbiwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZENoaWxkcmVuKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIHN1Y2Nlc3M/OiAoKSA9PiB2b2lkLCBmYWlsdXJlPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3TG9hZERhdGEpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gaW5kZXggPCAwO1xuICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5kd0xvYWREYXRhKG9wdGlvbiwgaW5kZXgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb24uY2hpbGRyZW4pIHtcbiAgICAgICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBvcHRpb24pO1xuICAgICAgICAgIHRoaXMuc2V0Q29sdW1uRGF0YShvcHRpb24uY2hpbGRyZW4sIGluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBvcHRpb24uaXNMZWFmID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZhaWx1cmUpIHtcbiAgICAgICAgICBmYWlsdXJlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25TZWxlY3RPcHRpb24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIC8vIHRyaWdnZXIgYGR3U2VsZWN0YCBldmVudFxuICAgIHRoaXMuZHdTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXggfSk7XG5cbiAgICAvLyDnlJ/miJDmmL7npLpcbiAgICBpZiAob3B0aW9uLmlzTGVhZiB8fCB0aGlzLmR3Q2hhbmdlT25TZWxlY3QgfHwgdGhpcy5pc0NoYW5nZU9uKG9wdGlvbiwgaW5kZXgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICAgIC8vIOiuvue9ruW9k+WJjeaOp+S7tueahOaYvuekuuWAvFxuICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICAgICAgLy8g6Kem5Y+R5Y+Y5pu05LqL5Lu2XG4gICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNrIG9uIGxlYWZcbiAgICBpZiAob3B0aW9uLmlzTGVhZikge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCB0aGlzLmR3TW91c2VMZWF2ZURlbGF5KTtcbiAgICB9XG4gIH1cblxuICAvKiog55Sx55So5oi35p2l5a6a5LmJ54K55Ye75ZCO5piv5ZCm5Y+Y5pu0ICovXG4gIHByaXZhdGUgaXNDaGFuZ2VPbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmR3Q2hhbmdlT24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLmR3Q2hhbmdlT24ob3B0aW9uLCBpbmRleCkgPT09IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29sdW1uRGF0YShvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFhcnJheUVxdWFscyh0aGlzLmR3Q29sdW1uc1sgaW5kZXggXSwgb3B0aW9ucykpIHtcbiAgICAgIHRoaXMuZHdDb2x1bW5zWyBpbmRleCBdID0gb3B0aW9ucztcbiAgICAgIGlmIChpbmRleCA8IHRoaXMuZHdDb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5kd0NvbHVtbnMgPSB0aGlzLmR3Q29sdW1ucy5zbGljZSgwLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIfngrnlh7vpgInpoblcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbiDoj5zljZXpgInpoblcbiAgICogQHBhcmFtIGluZGV4IOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gZXZlbnQg6byg5qCH5LqL5Lu2XG4gICAqL1xuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvLyBLZWVwIGZvY3VzZWQgc3RhdGUgZm9yIGtleWJvYXJkIHN1cHBvcnRcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG5cbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluU2VhcmNoKSB7XG4gICAgICB0aGlzLnNldFNlYXJjaEFjdGl2ZU9wdGlvbihvcHRpb24gYXMgQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uLCBpbmRleCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOaMieS4i+Wbnui9pumUruaXtumAieaLqSAqL1xuICBwcml2YXRlIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XG4gICAgY29uc3QgYWN0aXZlT3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdO1xuICAgIGlmIChhY3RpdmVPcHRpb24gJiYgIWFjdGl2ZU9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMuaW5TZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zZXRTZWFyY2hBY3RpdmVPcHRpb24oYWN0aXZlT3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25TZWxlY3RPcHRpb24oYWN0aXZlT3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHByZXNzIGB1cGAgb3IgYGRvd25gIGFycm93IHRvIGFjdGl2YXRlIHRoZSBzaWJsaW5nIG9wdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbW92ZVVwT3JEb3duKGlzVXA6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcbiAgICAvLyDor6Xnu4TkuK3lt7Lnu4/ooqvmv4DmtLvnmoTpgInpoblcbiAgICBjb25zdCBhY3RpdmVPcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGNvbHVtbkluZGV4IF07XG4gICAgLy8g6K+l57uE5omA5pyJ55qE6YCJ6aG577yM55So5LqO6YGN5Y6G6I635Y+W5LiL5LiA5Liq6KKr5r+A5rS755qE6YCJ6aG5XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZHdDb2x1bW5zWyBjb2x1bW5JbmRleCBdIHx8IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcbiAgICBpZiAoIWFjdGl2ZU9wdGlvbikgeyAvLyDor6XliJfov5jmsqHmnInpgInkuK3nmoTpgInpoblcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBsZW5ndGggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGFjdGl2ZU9wdGlvbik7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBuZXh0SW5kZXggLSAxIDogbmV4dEluZGV4ICsgMTtcbiAgICAgIGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0T3B0aW9uID0gb3B0aW9uc1sgbmV4dEluZGV4IF07XG4gICAgICBpZiAoIW5leHRPcHRpb24gfHwgbmV4dE9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG5leHRPcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVVwKCk6IHZvaWQge1xuICAgIHRoaXMubW92ZVVwT3JEb3duKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlRG93bigpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmVVcE9yRG93bihmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogcHJlc3MgYGxlZnRgIGFycm93IHRvIHJlbW92ZSB0aGUgbGFzdCBzZWxlY3RlZCBvcHRpb24uXG4gICAqL1xuICBwcml2YXRlIG1vdmVMZWZ0KCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBvcHRpb25zLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGxhc3Qgb25lXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHByZXNzIGByaWdodGAgYXJyb3cgdG8gc2VsZWN0IHRoZSBuZXh0IGNvbHVtbiBvcHRpb24uXG4gICAqL1xuICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmR3Q29sdW1uc1sgbGVuZ3RoIF07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRPcHQgPSBvcHRpb25zLmZpbmQobyA9PiAhby5kaXNhYmxlZCk7XG4gICAgICBpZiAobmV4dE9wdCkge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihuZXh0T3B0LCBsZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIfliJLlhaXpgInpoblcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbiDoj5zljZXpgInpoblcbiAgICogQHBhcmFtIGluZGV4IOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gZXZlbnQg6byg5qCH5LqL5Lu2XG4gICAqL1xuICBvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5kd0V4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3Qob3B0aW9uLCBpbmRleCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOm8oOagh+WIkuWHuumAiemhuVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uIOiPnOWNlemAiemhuVxuICAgKiBAcGFyYW0gaW5kZXgg6YCJ6aG55omA5Zyo55qE5YiX57uE55qE57Si5byVXG4gICAqIEBwYXJhbSBldmVudCDpvKDmoIfkuovku7ZcbiAgICovXG4gIG9uT3B0aW9uTW91c2VMZWF2ZShvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLmR3RXhwYW5kVHJpZ2dlciA9PT0gJ2hvdmVyJyAmJiAhb3B0aW9uLmlzTGVhZikge1xuICAgICAgdGhpcy5kZWxheVNlbGVjdChvcHRpb24sIGluZGV4LCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5U2VsZWN0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlTZWxlY3RUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlTZWxlY3RUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVsYXlTZWxlY3Qob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgZG9TZWxlY3Q6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICAgIGlmIChkb1NlbGVjdCkge1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIOm8oOagh+a7keWFpeWPquWxleW8gO+8jOS4jei/m+ihjOmAieS4reaTjeS9nFxuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihvcHRpb24sIGluZGV4KTtcbiAgICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldFN1Ym1pdFZhbHVlKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXM6IGFueVtdID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRTdWJtaXRWYWx1ZSgpO1xuICAgIGlmICghYXJyYXlFcXVhbHModGhpcy52YWx1ZSwgdmFsdWUpKSB7XG4gICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG51bGw7IC8vIGNsZWFyIHRoZSBpbml0LXZhbHVlXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTsgLy8gQW5ndWxhciBuZWVkIHRoaXNcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5kd0NsZWFyLmVtaXQoKTsgLy8gZmlyc3QgdHJpZ2dlciBgY2xlYXJgIGFuZCB0aGVuIGBjaGFuZ2VgXG4gICAgICB9XG4gICAgICB0aGlzLmR3U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgdGhpcy5kd0NoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBkd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE9wdGlvbihvcHRpb246IGFueSwgaW5kZXg6IG51bWJlcik6IENhc2NhZGVyT3B0aW9uIHtcbiAgICBjb25zdCBvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gdGhpcy5kd0NvbHVtbnNbIGluZGV4IF07XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgPyB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikgOiBvcHRpb247XG4gICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgaXNMb2FkZWQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3Q29sdW1uc1sgaW5kZXggXSAmJiB0aGlzLmR3Q29sdW1uc1sgaW5kZXggXS5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZU9uSW5pdChpbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih2YWx1ZSwgaW5kZXgpO1xuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBvcHRpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7XG4gICAgICAgIFsgYCR7dGhpcy5kd1ZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJ31gIF06IHZhbHVlLFxuICAgICAgICBbIGAke3RoaXMuZHdMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCd9YCBdOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uLCBpbmRleCwgZmFsc2UsIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE9wdGlvbnMoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHZzID0gdGhpcy5kZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVPbkluaXQoaW5kZXgsIHZzWyBpbmRleCBdKTtcbiAgICAgIGlmIChpbmRleCA8IHZzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhpbmRleCArIDEpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSB2cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzTG9hZGVkKGluZGV4KSB8fCAhdGhpcy5kd0xvYWREYXRhKSB7XG4gICAgICBsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IC0gMSBdIHx8IHt9O1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4obm9kZSwgaW5kZXggLSAxLCBsb2FkLCB0aGlzLmFmdGVyV3JpdGVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJXcml0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFN1Ym1pdFZhbHVlKCk7XG4gICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IHZhbHVlIHRvIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBAT3ZlcnJpZGUgKEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlKVxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdnMgPSB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xuICAgIGlmICh2cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdE9wdGlvbnMoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2cztcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5hZnRlcldyaXRlVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5kd0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNlYXJjaFZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdHM6IENhc2NhZGVyU2VhcmNoT3B0aW9uW10gPSBbXTtcbiAgICBjb25zdCBwYXRoOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gICAgY29uc3QgZGVmYXVsdEZpbHRlciA9IChpbnB1dFZhbHVlOiBzdHJpbmcsIHA6IENhc2NhZGVyT3B0aW9uW10pOiBib29sZWFuID0+IHtcbiAgICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgICBwLmZvckVhY2gobiA9PiB7XG4gICAgICAgIGlmIChuLmxhYmVsLmluZGV4T2YoaW5wdXRWYWx1ZSkgPiAtMSkge1xuICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmbGFnO1xuICAgIH07XG4gICAgY29uc3QgZmlsdGVyOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBwOiBDYXNjYWRlck9wdGlvbltdKSA9PiBib29sZWFuID1cbiAgICAgIHRoaXMuZHdTaG93U2VhcmNoIGluc3RhbmNlb2YgT2JqZWN0ICYmICh0aGlzLmR3U2hvd1NlYXJjaCBhcyBEd1Nob3dTZWFyY2hPcHRpb25zKS5maWx0ZXIgP1xuICAgICAgICAodGhpcy5kd1Nob3dTZWFyY2ggYXMgRHdTaG93U2VhcmNoT3B0aW9ucykuZmlsdGVyIDpcbiAgICAgICAgZGVmYXVsdEZpbHRlcjtcbiAgICBjb25zdCBzb3J0ZXI6IChhOiBDYXNjYWRlck9wdGlvbltdLCBiOiBDYXNjYWRlck9wdGlvbltdLCBpbnB1dFZhbHVlOiBzdHJpbmcpID0+IG51bWJlciA9XG4gICAgICB0aGlzLmR3U2hvd1NlYXJjaCBpbnN0YW5jZW9mIE9iamVjdCAmJiAodGhpcy5kd1Nob3dTZWFyY2ggYXMgRHdTaG93U2VhcmNoT3B0aW9ucykuc29ydGVyO1xuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICBwYXRoLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKHNOb2RlKSA9PiB7XG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7XG4gICAgICAgICAgc05vZGUucGFyZW50ID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvKiog5pCc57Si55qE5ZCM5pe25bu656uLIHBhcmVudCDov57mjqXvvIzlm6DkuLrnlKjmiLfnm7TmjqXmkJzntKLnmoTor53mmK/msqHmnInlu7rnq4vov57mjqXnmoTvvIzkvJrmj5DljYfku47lj7blrZDoioLngrnlm57muq/nmoTpmr7luqYgKi9cbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgICBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIGxvb3BDaGlsZChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcbiAgICBjb25zdCBsb29wQ2hpbGQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xuICAgICAgaWYgKGZpbHRlcih0aGlzLl9pbnB1dFZhbHVlLCBjUGF0aCkpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgaXNMZWFmOiB0cnVlLFxuICAgICAgICAgIHBhdGggIDogY1BhdGgsXG4gICAgICAgICAgbGFiZWwgOiBjUGF0aC5tYXAocCA9PiBwLmxhYmVsKS5qb2luKCcgLyAnKVxuICAgICAgICB9IGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcblxuICAgIHRoaXMub2xkQ29sdW1uc0hvbGRlclsgMCBdLmZvckVhY2gobm9kZSA9PiAobm9kZS5pc0xlYWYgfHwgIW5vZGUuY2hpbGRyZW4gfHwgIW5vZGUuY2hpbGRyZW4ubGVuZ3RoKSA/IGxvb3BDaGlsZChub2RlKSA6IGxvb3BQYXJlbnQobm9kZSkpO1xuICAgIGlmIChzb3J0ZXIpIHtcbiAgICAgIHJlc3VsdHMuc29ydCgoYSwgYikgPT4gc29ydGVyKGEucGF0aCwgYi5wYXRoLCB0aGlzLl9pbnB1dFZhbHVlKSk7XG4gICAgfVxuICAgIHRoaXMuZHdDb2x1bW5zID0gWyByZXN1bHRzIF07XG4gIH1cblxuICByZW5kZXJTZWFyY2hTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuX2lucHV0VmFsdWUsICdnJyksXG4gICAgICBgPHNwYW4gY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudS1pdGVtLWtleXdvcmRcIj4ke3RoaXMuX2lucHV0VmFsdWV9PC9zcGFuPmApO1xuICB9XG5cbiAgc2V0U2VhcmNoQWN0aXZlT3B0aW9uKHJlc3VsdDogQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFsgcmVzdWx0IF07XG4gICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKGZhbHNlLCAyMDApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJzsgLy8gTm90IG9ubHkgcmVtb3ZlIGBpbnB1dFZhbHVlYCBidXQgYWxzbyByZXZlcnNlIGBkd0NvbHVtbnNgIGluIHRoZSBob29rLlxuICAgICAgY29uc3QgaW5kZXggPSByZXN1bHQucGF0aC5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgZGVzdGlOb2RlID0gcmVzdWx0LnBhdGhbIGluZGV4IF07XG4gICAgICBjb25zdCBtb2NrQ2xpY2tQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGNJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUucGFyZW50KSB7XG4gICAgICAgICAgbW9ja0NsaWNrUGFyZW50KG5vZGUucGFyZW50LCBjSW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uT3B0aW9uQ2xpY2sobm9kZSwgY0luZGV4LCBldmVudCk7XG4gICAgICB9O1xuICAgICAgbW9ja0NsaWNrUGFyZW50KGRlc3RpTm9kZSwgaW5kZXgpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyDorr7nva7moLflvI9cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gICAgdGhpcy5zZXRBcnJvd0NsYXNzKCk7XG4gICAgdGhpcy5zZXRMb2FkaW5nQ2xhc3MoKTtcbiAgICB0aGlzLnNldENsZWFyQ2xhc3MoKTtcbiAgICB0aGlzLnNldElucHV0Q2xhc3MoKTtcbiAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuICAgIHRoaXMuc2V0TWVudUNvbHVtbkNsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gIH1cblxufVxuIl19
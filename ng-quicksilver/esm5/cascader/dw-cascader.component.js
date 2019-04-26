/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    var ret;
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
    var len = array1.length;
    for (var i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
/** @type {?} */
var defaultDisplayRender = function (label) { return label.join(' / '); };
var ɵ0 = defaultDisplayRender;
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
var DwCascaderComponent = /** @class */ (function () {
    function DwCascaderComponent(elementRef, cdr, dwUpdateHostClassService) {
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
        this.positions = tslib_1.__spread(DEFAULT_DROPDOWN_POSITIONS);
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
    Object.defineProperty(DwCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inputValue;
        },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this._inputValue = inputValue;
            /** @type {?} */
            var willBeInSearch = !!inputValue;
            // 搜索状态变动之前，如要进入则要保留之前激活选项的快照，退出搜索状态要还原该快照
            if (!this.inSearch && willBeInSearch) {
                this.oldActivatedOptions = this.activatedOptions;
                this.activatedOptions = [];
                this.searchWidthStyle = this.input.nativeElement.offsetWidth + "px";
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwLabelRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this.labelRenderTpl;
        },
        /** Display Render ngTemplate */
        set: /**
         * Display Render ngTemplate
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.labelRenderTpl = value;
            this.isLabelRenderTemplate = (value instanceof TemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwPrefixCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.prefixCls;
        },
        /** prefixCls */
        set: /**
         * prefixCls
         * @param {?} prefixCls
         * @return {?}
         */
        function (prefixCls) {
            this.prefixCls = prefixCls;
            this.setClassMap();
            this.setLabelClass();
            this.setArrowClass();
            this.setLoadingClass();
            this.setClearClass();
            this.setInputClass();
            this.setMenuClass();
            this.setMenuColumnClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        /** Whether is disabled */
        set: /**
         * Whether is disabled
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.disabled = toBoolean(value);
            this.setClassMap();
            this.setInputClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.size;
        },
        /** Input size, one of `large` `default` `small` */
        set: /**
         * Input size, one of `large` `default` `small`
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.size = value;
            this.setClassMap();
            this.setInputClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwShowInput", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showInput;
        },
        /** Whether show input box. Defaults to `true`. */
        set: /**
         * Whether show input box. Defaults to `true`.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showInput = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwShowSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showSearch;
        },
        /** Whether can search. Defaults to `false`. */
        set: /**
         * Whether can search. Defaults to `false`.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showSearch = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwAllowClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.allowClear;
        },
        /** Whether allow clear. Defaults to `true`. */
        set: /**
         * Whether allow clear. Defaults to `true`.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.allowClear = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this.autoFocus;
        },
        /** Whether auto focus. */
        set: /**
         * Whether auto focus.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.autoFocus = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwShowArrow", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showArrow;
        },
        /** Whether to show arrow */
        set: /**
         * Whether to show arrow
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.showArrow = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwMenuClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.menuClassName;
        },
        /** Additional className of popup overlay */
        set: /**
         * Additional className of popup overlay
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.menuClassName = value;
            this.setMenuClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwColumnClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.columnClassName;
        },
        /** Additional className of popup overlay column */
        set: /**
         * Additional className of popup overlay column
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.columnClassName = value;
            this.setMenuColumnClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwColumns[0];
        },
        /** Options for first column, sub column will be load async */
        set: /**
         * Options for first column, sub column will be load async
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.oldColumnsHolder = this.dwColumns = options && options.length ? [options] : [];
            if (this.defaultValue && this.dwColumns.length) {
                this.initOptions(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "dwChangeOnSelect", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changeOnSelect;
        },
        /** Change value on each selection if set to true */
        set: /**
         * Change value on each selection if set to true
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.changeOnSelect = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} position
     * @return {?}
     */
    DwCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            /** @type {?} */
            var input = /** @type {?} */ (this.el.querySelector("." + this.prefixCls + "-input"));
            if (input && input.focus) {
                input.focus();
            }
            else {
                this.el.focus();
            }
            this.isFocused = true;
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            /** @type {?} */
            var input = /** @type {?} */ (this.el.querySelector("." + this.prefixCls + "-input"));
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
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = 1,
            _a[this.prefixCls + "-picker"] = 1,
            _a[this.prefixCls + "-lg"] = this.dwSize === 'large',
            _a[this.prefixCls + "-sm"] = this.dwSize === 'small',
            _a[this.prefixCls + "-picker-disabled"] = this.disabled,
            _a[this.prefixCls + "-focused"] = this.isFocused,
            _a[this.prefixCls + "-picker-open"] = this.menuVisible,
            _a[this.prefixCls + "-picker-with-value"] = this.inputValue && this.inputValue.length,
            _a);
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    Object.defineProperty(DwCascaderComponent.prototype, "labelCls", {
        get: /**
         * 标签 样式
         * @return {?}
         */
        function () {
            return this._labelCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setLabelClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._labelCls = (_a = {},
            _a[this.prefixCls + "-picker-label"] = true,
            _a[this.prefixCls + "-show-search"] = !!this.dwShowSearch,
            _a[this.prefixCls + "-focused"] = !!this.dwShowSearch && this.isFocused && !this._inputValue,
            _a);
    };
    Object.defineProperty(DwCascaderComponent.prototype, "arrowCls", {
        get: /**
         * 箭头 样式
         * @return {?}
         */
        function () {
            return this._arrowCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setArrowClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._arrowCls = (_a = {},
            _a[this.prefixCls + "-picker-arrow"] = true,
            _a[this.prefixCls + "-picker-arrow-expand"] = this.menuVisible,
            _a);
    };
    Object.defineProperty(DwCascaderComponent.prototype, "loadingCls", {
        get: /**
         * 加载中图标 样式
         * @return {?}
         */
        function () {
            return this._loadingCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setLoadingClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._loadingCls = (_a = {},
            _a[this.prefixCls + "-picker-arrow"] = true,
            _a);
    };
    Object.defineProperty(DwCascaderComponent.prototype, "clearCls", {
        get: /**
         * 清除图标 样式
         * @return {?}
         */
        function () {
            return this._clearCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setClearClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._clearCls = (_a = {},
            _a[this.prefixCls + "-picker-clear"] = true,
            _a);
    };
    Object.defineProperty(DwCascaderComponent.prototype, "inputCls", {
        get: /**
         * 输入框 样式
         * @return {?}
         */
        function () {
            return this._inputCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setInputClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._inputCls = (_a = {},
            _a[this.prefixCls + "-input"] = 1,
            _a[this.inputPrefixCls + "-disabled"] = this.dwDisabled,
            _a[this.inputPrefixCls + "-lg"] = this.dwSize === 'large',
            _a[this.inputPrefixCls + "-sm"] = this.dwSize === 'small',
            _a);
    };
    Object.defineProperty(DwCascaderComponent.prototype, "menuCls", {
        get: /**
         * 浮层 样式
         * @return {?}
         */
        function () {
            return this._menuCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setMenuClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._menuCls = (_a = {},
            _a[this.prefixCls + "-menus"] = true,
            _a[this.prefixCls + "-menus-hidden"] = !this.menuVisible,
            _a["" + this.dwMenuClassName] = this.dwMenuClassName,
            _a);
    };
    Object.defineProperty(DwCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * 浮层列 样式
         * @return {?}
         */
        function () {
            return this._menuColumnCls;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.setMenuColumnClass = /**
     * @return {?}
     */
    function () {
        var _a;
        this._menuColumnCls = (_a = {},
            _a[this.prefixCls + "-menu"] = true,
            _a["" + this.dwColumnClassName] = this.dwColumnClassName,
            _a);
    };
    /**
     * 获取列中Option的样式
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.getOptionCls = /**
     * 获取列中Option的样式
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        var _a;
        return _a = {},
            _a[this.prefixCls + "-menu-item"] = true,
            _a[this.prefixCls + "-menu-item-expand"] = !option.isLeaf,
            _a[this.prefixCls + "-menu-item-active"] = this.isActivedOption(option, index),
            _a[this.prefixCls + "-menu-item-disabled"] = option.disabled,
            _a[this.prefixCls + "-menu-item-loading"] = option.loading,
            _a;
    };
    /**
     * prevent input change event
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.handlerInputChange = /**
     * prevent input change event
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * input element blur
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.handleInputBlur = /**
     * input element blur
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * input element focus
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.handleInputFocus = /**
     * input element focus
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /*
            if (!this.dwShowSearch) {
              return;
            }
            */
        this.focus();
        this.setLabelClass();
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.hasInput = /**
     * @return {?}
     */
    function () {
        return this.inputValue.length > 0;
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.hasValue = /**
     * @return {?}
     */
    function () {
        return this.value && this.value.length > 0;
    };
    Object.defineProperty(DwCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * Whether to show input element placeholder
         * @return {?}
         */
        function () {
            return !(this.hasInput() || this.hasValue());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwCascaderComponent.prototype, "showClearIcon", {
        get: /**
         * Whether the clear button is visible
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isHasValue = this.hasValue();
            /** @type {?} */
            var isHasInput = this.hasInput();
            return this.dwAllowClear && !this.dwDisabled && (isHasValue || isHasInput);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * clear the input box and selected options
     * @param {?=} event
     * @return {?}
     */
    DwCascaderComponent.prototype.clearSelection = /**
     * clear the input box and selected options
     * @param {?=} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.buildDisplayLabel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map(function (o) { return _this.getOptionLabel(o); });
        // 设置当前控件的显示值
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.onTriggerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dwDisabled) {
            return;
        }
        if (this.isPointerTiggerAction()) {
            this.delaySetMenuVisible(true, this.dwMouseEnterDelay, true);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dwDisabled) {
            return;
        }
        if (!this.isMenuVisible() || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isPointerTiggerAction()) {
            /** @type {?} */
            var mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            var hostEl = this.el;
            /** @type {?} */
            var menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))
            /*|| mouseTarget.parentElement.contains(menuEl)*/ ) {
                // 因为浮层的backdrop出现，暂时没有办法自动消失
                return;
            }
            this.delaySetMenuVisible(false, this.dwMouseLeaveDelay);
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.isClickTiggerAction = /**
     * @return {?}
     */
    function () {
        if (typeof this.dwTriggerAction === 'string') {
            return this.dwTriggerAction === 'click';
        }
        return this.dwTriggerAction.indexOf('click') !== -1;
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.isPointerTiggerAction = /**
     * @return {?}
     */
    function () {
        if (typeof this.dwTriggerAction === 'string') {
            return this.dwTriggerAction === 'hover';
        }
        return this.dwTriggerAction.indexOf('hover') !== -1;
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayTimer();
        this.setMenuVisible(false);
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.clearDelayTimer = /**
     * @return {?}
     */
    function () {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
        }
    };
    /**
     * 显示或者隐藏菜单
     *
     * @param {?} visible true-显示，false-隐藏
     * @param {?} delay 延迟时间
     * @param {?=} setOpening
     * @return {?}
     */
    DwCascaderComponent.prototype.delaySetMenuVisible = /**
     * 显示或者隐藏菜单
     *
     * @param {?} visible true-显示，false-隐藏
     * @param {?} delay 延迟时间
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayTimer = setTimeout(function () {
                _this.setMenuVisible(visible);
                _this.clearDelayTimer();
                if (visible) {
                    setTimeout(function () {
                        _this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.isMenuVisible = /**
     * @return {?}
     */
    function () {
        return this.menuVisible;
    };
    /**
     * @param {?} menuVisible
     * @return {?}
     */
    DwCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} menuVisible
     * @return {?}
     */
    function (menuVisible) {
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
    };
    /**
     * load init data if necessary
     * @return {?}
     */
    DwCascaderComponent.prototype.beforeVisible = /**
     * load init data if necessary
     * @return {?}
     */
    function () {
        this.loadRootOptions();
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.loadRootOptions = /**
     * @return {?}
     */
    function () {
        if (!this.dwColumns.length) {
            /** @type {?} */
            var root = {};
            this.loadChildren(root, -1);
        }
    };
    /**
     * 获取Option的值，例如，可以指定labelProperty="name"来取Name
     * @param {?} option
     * @return {?}
     */
    DwCascaderComponent.prototype.getOptionLabel = /**
     * 获取Option的值，例如，可以指定labelProperty="name"来取Name
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.dwLabelProperty || 'label'];
    };
    /**
     * 获取Option的值，例如，可以指定valueProperty="id"来取ID
     * @param {?} option
     * @return {?}
     */
    DwCascaderComponent.prototype.getOptionValue = /**
     * 获取Option的值，例如，可以指定valueProperty="id"来取ID
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.dwValueProperty || 'value'];
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.isActivedOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * 设置某列的激活的菜单选项
     *
     * @param {?} option 菜单选项
     * @param {?} index  选项所在的列组的索引
     * @param {?=} select 是否触发选择结点
     * @param {?=} loadChildren
     * @return {?}
     */
    DwCascaderComponent.prototype.setActiveOption = /**
     * 设置某列的激活的菜单选项
     *
     * @param {?} option 菜单选项
     * @param {?} index  选项所在的列组的索引
     * @param {?=} select 是否触发选择结点
     * @param {?=} loadChildren
     * @return {?}
     */
    function (option, index, select, loadChildren) {
        if (select === void 0) { select = false; }
        if (loadChildren === void 0) { loadChildren = true; }
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[index] = option;
        // 当直接选择最后一级时，前面的选项要补全。例如，选择“城市”，则自动补全“国家”、“省份”
        for (var i = index - 1; i >= 0; i--) {
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
            option.children.forEach(function (child) { return child.parent = option; });
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
    };
    /**
     * @param {?} option
     * @param {?} index
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    DwCascaderComponent.prototype.loadChildren = /**
     * @param {?} option
     * @param {?} index
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, index, success, failure) {
        var _this = this;
        if (this.dwLoadData) {
            this.isLoading = index < 0;
            option.loading = true;
            this.dwLoadData(option, index).then(function () {
                option.loading = _this.isLoading = false;
                if (option.children) {
                    option.children.forEach(function (child) { return child.parent = index < 0 ? undefined : option; });
                    _this.setColumnData(option.children, index + 1);
                }
                if (success) {
                    success();
                }
            }, function () {
                option.loading = _this.isLoading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
            });
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.onSelectOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        // trigger `dwSelect` event
        this.dwSelect.emit({ option: option, index: index });
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
    };
    /**
     * 由用户来定义点击后是否变更
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.isChangeOn = /**
     * 由用户来定义点击后是否变更
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        if (typeof this.dwChangeOn === 'function') {
            return this.dwChangeOn(option, index) === true;
        }
        return false;
    };
    /**
     * @param {?} options
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.setColumnData = /**
     * @param {?} options
     * @param {?} index
     * @return {?}
     */
    function (options, index) {
        if (!arrayEquals(this.dwColumns[index], options)) {
            this.dwColumns[index] = options;
            if (index < this.dwColumns.length - 1) {
                this.dwColumns = this.dwColumns.slice(0, index + 1);
            }
        }
    };
    /**
     * 鼠标点击选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    /**
     * 鼠标点击选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    DwCascaderComponent.prototype.onOptionClick = /**
     * 鼠标点击选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    function (option, index, event) {
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
    };
    /**
     * 按下回车键时选择
     * @return {?}
     */
    DwCascaderComponent.prototype.onEnter = /**
     * 按下回车键时选择
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.activatedOptions[columnIndex];
        if (activeOption && !activeOption.disabled) {
            if (this.inSearch) {
                this.setSearchActiveOption(/** @type {?} */ (activeOption), null);
            }
            else {
                this.onSelectOption(activeOption, columnIndex);
            }
        }
    };
    /**
     * press `up` or `down` arrow to activate the sibling option.
     * @param {?} isUp
     * @return {?}
     */
    DwCascaderComponent.prototype.moveUpOrDown = /**
     * press `up` or `down` arrow to activate the sibling option.
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.dwColumns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
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
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setActiveOption(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.moveUp = /**
     * @return {?}
     */
    function () {
        this.moveUpOrDown(true);
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.moveDown = /**
     * @return {?}
     */
    function () {
        this.moveUpOrDown(false);
    };
    /**
     * press `left` arrow to remove the last selected option.
     * @return {?}
     */
    DwCascaderComponent.prototype.moveLeft = /**
     * press `left` arrow to remove the last selected option.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * press `right` arrow to select the next column option.
     * @return {?}
     */
    DwCascaderComponent.prototype.moveRight = /**
     * press `right` arrow to select the next column option.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.activatedOptions.length;
        /** @type {?} */
        var options = this.dwColumns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find(function (o) { return !o.disabled; });
            if (nextOpt) {
                this.setActiveOption(nextOpt, length);
            }
        }
    };
    /**
     * 鼠标划入选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    /**
     * 鼠标划入选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    DwCascaderComponent.prototype.onOptionMouseEnter = /**
     * 鼠标划入选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    function (option, index, event) {
        event.preventDefault();
        if (this.dwExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, true);
        }
    };
    /**
     * 鼠标划出选项
     *
     * @param option 菜单选项
     * @param index 选项所在的列组的索引
     * @param event 鼠标事件
     */
    /**
     * 鼠标划出选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    DwCascaderComponent.prototype.onOptionMouseLeave = /**
     * 鼠标划出选项
     *
     * @param {?} option 菜单选项
     * @param {?} index 选项所在的列组的索引
     * @param {?} event 鼠标事件
     * @return {?}
     */
    function (option, index, event) {
        event.preventDefault();
        if (this.dwExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelect(option, index, false);
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    DwCascaderComponent.prototype.delaySelect = /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    function (option, index, doSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(function () {
                // 鼠标滑入只展开，不进行选中操作
                // 鼠标滑入只展开，不进行选中操作
                _this.setActiveOption(option, index);
                _this.delaySelectTimer = null;
            }, 150);
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.getSubmitValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var values = [];
        this.selectedOptions.forEach(function (option) {
            values.push(_this.getOptionValue(option));
        });
        return values;
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.onValueChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getSubmitValue();
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
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.findOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        var _this = this;
        /** @type {?} */
        var options = this.dwColumns[index];
        if (options) {
            /** @type {?} */
            var value_1 = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(function (o) { return value_1 === _this.getOptionValue(o); });
        }
        return null;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.isLoaded = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.dwColumns[index] && this.dwColumns[index].length > 0;
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    DwCascaderComponent.prototype.activateOnInit = /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function (index, value) {
        var _a;
        /** @type {?} */
        var option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : (_a = {},
                _a["" + (this.dwValueProperty || 'value')] = value,
                _a["" + (this.dwLabelProperty || 'label')] = value,
                _a);
        }
        this.setActiveOption(option, index, false, false);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DwCascaderComponent.prototype.initOptions = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var vs = this.defaultValue;
        /** @type {?} */
        var load = function () {
            _this.activateOnInit(index, vs[index]);
            if (index < vs.length - 1) {
                _this.initOptions(index + 1);
            }
            if (index === vs.length - 1) {
                _this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.dwLoadData) {
            load();
        }
        else {
            /** @type {?} */
            var node = this.activatedOptions[index - 1] || {};
            this.loadChildren(node, index - 1, load, this.afterWriteValue);
        }
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.afterWriteValue = /**
     * @return {?}
     */
    function () {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    };
    /**
     * Write a new value to the element.
     *
     * @Override (From ControlValueAccessor interface)
     */
    /**
     * Write a new value to the element.
     *
     * \@Override (From ControlValueAccessor interface)
     * @param {?} value
     * @return {?}
     */
    DwCascaderComponent.prototype.writeValue = /**
     * Write a new value to the element.
     *
     * \@Override (From ControlValueAccessor interface)
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwCascaderComponent.prototype.registerOnChange = /**
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
    DwCascaderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DwCascaderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.dwDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.prepareSearchValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var results = [];
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = function (inputValue, p) {
            /** @type {?} */
            var flag = false;
            p.forEach(function (n) {
                if (n.label.indexOf(inputValue) > -1) {
                    flag = true;
                }
            });
            return flag;
        };
        /** @type {?} */
        var filter = this.dwShowSearch instanceof Object && (/** @type {?} */ (this.dwShowSearch)).filter ?
            (/** @type {?} */ (this.dwShowSearch)).filter :
            defaultFilter;
        /** @type {?} */
        var sorter = this.dwShowSearch instanceof Object && (/** @type {?} */ (this.dwShowSearch)).sorter;
        /** @type {?} */
        var loopParent = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach(function (sNode) {
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
        var loopChild = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(_this._inputValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                results.push(/** @type {?} */ ({
                    disabled: disabled,
                    isLeaf: true,
                    path: cPath,
                    label: cPath.map(function (p) { return p.label; }).join(' / ')
                }));
            }
            path.pop();
        };
        this.oldColumnsHolder[0].forEach(function (node) { return (node.isLeaf || !node.children || !node.children.length) ? loopChild(node) : loopParent(node); });
        if (sorter) {
            results.sort(function (a, b) { return sorter(a.path, b.path, _this._inputValue); });
        }
        this.dwColumns = [results];
    };
    /**
     * @param {?} str
     * @return {?}
     */
    DwCascaderComponent.prototype.renderSearchString = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(new RegExp(this._inputValue, 'g'), "<span class=\"ant-cascader-menu-item-keyword\">" + this._inputValue + "</span>");
    };
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    DwCascaderComponent.prototype.setSearchActiveOption = /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    function (result, event) {
        var _this = this;
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(function () {
            _this.inputValue = '';
            /** @type {?} */
            var index = result.path.length - 1;
            /** @type {?} */
            var destiNode = result.path[index];
            /** @type {?} */
            var mockClickParent = function (node, cIndex) {
                if (node && node.parent) {
                    mockClickParent(node.parent, cIndex - 1);
                }
                _this.onOptionClick(node, cIndex, event);
            };
            mockClickParent(destiNode, index);
        }, 300);
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // 设置样式
        this.setClassMap();
        this.setLabelClass();
        this.setArrowClass();
        this.setLoadingClass();
        this.setClearClass();
        this.setInputClass();
        this.setMenuClass();
        this.setMenuColumnClass();
    };
    /**
     * @return {?}
     */
    DwCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearDelayTimer();
        this.clearDelaySelectTimer();
    };
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
                            useExisting: forwardRef(function () { return DwCascaderComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"'
                    },
                    styles: [".ant-cascader-menus {\n      margin-top: 4px;\n      margin-bottom: 4px;\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n    }"]
                }] }
    ];
    /** @nocollapse */
    DwCascaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: DwUpdateHostClassService }
    ]; };
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
    return DwCascaderComponent;
}());
export { DwCascaderComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjYXNjYWRlci9kdy1jYXNjYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUFFakQsaUJBQW9CLEtBQWM7O0lBQ2hDLElBQUksR0FBRyxDQUFNO0lBQ2IsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLEdBQUcsR0FBRyxFQUFFLENBQUM7S0FDVjtTQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2hDLEdBQUcsR0FBRyxDQUFFLEtBQUssQ0FBRSxDQUFDO0tBQ2pCO1NBQU07UUFDTCxHQUFHLEdBQUcsS0FBSyxDQUFDO0tBQ2I7SUFDRCxPQUFPLEdBQUcsQ0FBQztDQUNaOzs7Ozs7O0FBRUQscUJBQXdCLE1BQVcs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RU4sU0FBUyxTQUFDLE9BQU87dUJBRWpCLFNBQVMsU0FBQyxNQUFNOzRCQXFPaEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFFLFFBQVEsQ0FBRTtpQ0FrRHBDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBRSxRQUFRLENBQUU7c0NBZWxDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7c0NBVXZDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7OzhCQXpzQjFDOztTQTRHYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQkFDS1NQQUNFLCBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVVBfQVJST1cgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9uQ2hhbmdlLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuZnVuY3Rpb24gdG9BcnJheTxUPih2YWx1ZTogVCB8IFRbXSk6IFRbXSB7XG4gIGxldCByZXQ6IFRbXTtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXQgPSBbXTtcbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXQgPSBbIHZhbHVlIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0ID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYXJyYXlFcXVhbHM8VD4oYXJyYXkxOiBUW10sIGFycmF5MjogVFtdKTogYm9vbGVhbiB7XG4gIGlmICghYXJyYXkxIHx8ICFhcnJheTIgfHwgYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IGFycmF5MS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyYXkxWyBpIF0gIT09IGFycmF5MlsgaSBdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheVJlbmRlciA9IGxhYmVsID0+IGxhYmVsLmpvaW4oJyAvICcpO1xuXG5leHBvcnQgdHlwZSBEd0Nhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljaycgfCAnaG92ZXInO1xuZXhwb3J0IHR5cGUgRHdDYXNjYWRlclRyaWdnZXJUeXBlID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBEd0Nhc2NhZGVyU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnIDtcblxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlck9wdGlvbiB7XG4gIHZhbHVlPzogYW55O1xuICBsYWJlbD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbG9hZGluZz86IGJvb2xlYW47XG4gIGlzTGVhZj86IGJvb2xlYW47XG4gIHBhcmVudD86IENhc2NhZGVyT3B0aW9uO1xuICBjaGlsZHJlbj86IENhc2NhZGVyT3B0aW9uW107XG5cbiAgWyBrZXk6IHN0cmluZyBdOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FzY2FkZXJTZWFyY2hPcHRpb24gZXh0ZW5kcyBDYXNjYWRlck9wdGlvbiB7XG4gIHBhdGg6IENhc2NhZGVyT3B0aW9uW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHdTaG93U2VhcmNoT3B0aW9ucyB7XG4gIGZpbHRlcj8oaW5wdXRWYWx1ZTogc3RyaW5nLCBwYXRoOiBDYXNjYWRlck9wdGlvbltdKTogYm9vbGVhbjtcbiAgc29ydGVyPyhhOiBDYXNjYWRlck9wdGlvbltdLCBiOiBDYXNjYWRlck9wdGlvbltdLCBpbnB1dFZhbHVlOiBzdHJpbmcpOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctY2FzY2FkZXIsW2R3LWNhc2NhZGVyXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctY2FzY2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IER3Q2FzY2FkZXJDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2F0dHIudGFiSW5kZXhdJzogJ1wiMFwiJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgICBgLmFudC1jYXNjYWRlci1tZW51cyB7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfWBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0Nhc2NhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBhbGxvd0NsZWFyID0gdHJ1ZTtcbiAgcHJpdmF0ZSBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkaXNhYmxlZCA9IGZhbHNlO1xuICBwcml2YXRlIGVuYWJsZUNhY2hlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzaG93QXJyb3cgPSB0cnVlO1xuICBwcml2YXRlIHNob3dJbnB1dCA9IHRydWU7XG4gIHByaXZhdGUgc2l6ZTogRHdDYXNjYWRlclNpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1jYXNjYWRlcic7XG4gIHByaXZhdGUgaW5wdXRQcmVmaXhDbHMgPSAnYW50LWlucHV0JztcbiAgcHJpdmF0ZSBtZW51Q2xhc3NOYW1lO1xuICBwcml2YXRlIGNvbHVtbkNsYXNzTmFtZTtcbiAgcHJpdmF0ZSBjaGFuZ2VPblNlbGVjdCA9IGZhbHNlO1xuICBwcml2YXRlIHNob3dTZWFyY2g6IGJvb2xlYW4gfCBEd1Nob3dTZWFyY2hPcHRpb25zO1xuICBwcml2YXRlIGRlZmF1bHRWYWx1ZTogYW55W107XG5cbiAgcHVibGljIGRyb3BEb3duUG9zaXRpb24gPSAnYm90dG9tJztcbiAgcHVibGljIG1lbnVWaXNpYmxlID0gZmFsc2U7XG4gIHB1YmxpYyBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc09wZW5pbmcgPSBmYWxzZTtcblxuICAvLyDlhoXpg6jmoLflvI9cbiAgcHJpdmF0ZSBfYXJyb3dDbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG4gIHByaXZhdGUgX2NsZWFyQ2xzOiB7IFsgbmFtZTogc3RyaW5nIF06IGFueSB9O1xuICBwcml2YXRlIF9pbnB1dENsczogeyBbIG5hbWU6IHN0cmluZyBdOiBhbnkgfTtcbiAgcHJpdmF0ZSBfbGFiZWxDbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG4gIHByaXZhdGUgX2xvYWRpbmdDbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG4gIHByaXZhdGUgX21lbnVDbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG4gIHByaXZhdGUgX21lbnVDb2x1bW5DbHM6IHsgWyBuYW1lOiBzdHJpbmcgXTogYW55IH07XG5cbiAgcHVibGljIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICAvKiog6YCJ5oup6YCJ6aG55ZCO77yM5riy5p+T5pi+56S65paH5pysICovXG4gIHByaXZhdGUgbGFiZWxSZW5kZXJUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIHB1YmxpYyBpc0xhYmVsUmVuZGVyVGVtcGxhdGUgPSBmYWxzZTtcbiAgcHVibGljIGxhYmVsUmVuZGVyVGV4dDogc3RyaW5nO1xuICBwdWJsaWMgbGFiZWxSZW5kZXJDb250ZXh0OiBhbnkgPSB7fTtcblxuICAvLyDlvZPliY3lgLxcbiAgcHJpdmF0ZSB2YWx1ZTogYW55W107XG4gIC8vIOW3sumAieaLqeeahOmAiemhueihqOekuuW9k+WJjeW3suehruiupOeahOmAiemhue+8mnNlbGVjdGlvbiB3aWxsIHRyaWdnZXIgdmFsdWUgY2hhbmdlXG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gIC8vIOW3sua/gOa0u+eahOmAiemhueihqOekuumAmui/h+mUruebmOaWueWQkemUrumAieaLqeeahOmAiemhue+8jOW5tuacquacgOe7iOehruiupO+8iOmZpOmdnuaMiUVOVEVS6ZSu77yJ77yaYWN0aXZhY3Rpb24gd2lsbCBub3QgdHJpZ2dlciB2YWx1ZSBjaGFuZ2VcbiAgcHJpdmF0ZSBhY3RpdmF0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gIC8vIOihqOekuuW9k+WJjeiPnOWNleeahOaVsOaNruWIl++8mmFsbCBkYXRhIGNvbHVtbnNcbiAgcHVibGljIGR3Q29sdW1uczogQ2FzY2FkZXJPcHRpb25bXVtdID0gW107XG5cbiAgLy8g5pi+56S65oiW6ZqQ6JeP6I+c5Y2V6K6h5pe25ZmoXG4gIHByaXZhdGUgZGVsYXlUaW1lcjogYW55O1xuICBwcml2YXRlIGRlbGF5U2VsZWN0VGltZXI6IGFueTtcblxuICAvKiog5pCc57Si55u45YWz55qE6L6T5YWl5YC8ICovXG4gIHByaXZhdGUgX2lucHV0VmFsdWUgPSAnJztcbiAgZ2V0IGlucHV0VmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRWYWx1ZTtcbiAgfVxuXG4gIHNldCBpbnB1dFZhbHVlKGlucHV0VmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0VmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgIGNvbnN0IHdpbGxCZUluU2VhcmNoID0gISFpbnB1dFZhbHVlO1xuXG4gICAgLy8g5pCc57Si54q25oCB5Y+Y5Yqo5LmL5YmN77yM5aaC6KaB6L+b5YWl5YiZ6KaB5L+d55WZ5LmL5YmN5r+A5rS76YCJ6aG555qE5b+r54Wn77yM6YCA5Ye65pCc57Si54q25oCB6KaB6L+Y5Y6f6K+l5b+r54WnXG4gICAgaWYgKCF0aGlzLmluU2VhcmNoICYmIHdpbGxCZUluU2VhcmNoKSB7XG4gICAgICB0aGlzLm9sZEFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2VhcmNoV2lkdGhTdHlsZSA9IGAke3RoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weGA7XG4gICAgfSBlbHNlIGlmICh0aGlzLmluU2VhcmNoICYmICF3aWxsQmVJblNlYXJjaCkge1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gdGhpcy5vbGRBY3RpdmF0ZWRPcHRpb25zO1xuICAgIH1cblxuICAgIC8vIOaQnOe0oueKtuaAgeWPmOabtOS5i+WQjlxuICAgIHRoaXMuaW5TZWFyY2ggPSAhIXdpbGxCZUluU2VhcmNoO1xuICAgIGlmICh0aGlzLmluU2VhcmNoKSB7XG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hWYWx1ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zaG93U2VhcmNoKSB7XG4gICAgICAgIHRoaXMuZHdDb2x1bW5zID0gdGhpcy5vbGRDb2x1bW5zSG9sZGVyO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWFyY2hXaWR0aFN0eWxlID0gJyc7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vIG5nTW9kZWwgQWNjZXNzXG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsgLi4uREVGQVVMVF9EUk9QRE9XTl9QT1NJVElPTlMgXTtcblxuICAvKiogRGlzcGxheSBSZW5kZXIgbmdUZW1wbGF0ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdMYWJlbFJlbmRlcih2YWx1ZTogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXMubGFiZWxSZW5kZXJUcGwgPSB2YWx1ZTtcbiAgICB0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSA9ICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgfVxuXG4gIGdldCBkd0xhYmVsUmVuZGVyKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxhYmVsUmVuZGVyVHBsO1xuICB9XG5cbiAgLyoqIHByZWZpeENscyAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdQcmVmaXhDbHMocHJlZml4Q2xzOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByZWZpeENscyA9IHByZWZpeENscztcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gICAgdGhpcy5zZXRBcnJvd0NsYXNzKCk7XG4gICAgdGhpcy5zZXRMb2FkaW5nQ2xhc3MoKTtcbiAgICB0aGlzLnNldENsZWFyQ2xhc3MoKTtcbiAgICB0aGlzLnNldElucHV0Q2xhc3MoKTtcbiAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuICAgIHRoaXMuc2V0TWVudUNvbHVtbkNsYXNzKCk7XG4gIH1cblxuICBnZXQgZHdQcmVmaXhDbHMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wcmVmaXhDbHM7XG4gIH1cblxuICAvKiogV2hldGhlciBpcyBkaXNhYmxlZCAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnNldElucHV0Q2xhc3MoKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgLyoqIElucHV0IHNpemUsIG9uZSBvZiBgbGFyZ2VgIGBkZWZhdWx0YCBgc21hbGxgICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NpemUodmFsdWU6IER3Q2FzY2FkZXJTaXplKSB7XG4gICAgdGhpcy5zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0SW5wdXRDbGFzcygpO1xuICB9XG5cbiAgZ2V0IGR3U2l6ZSgpOiBEd0Nhc2NhZGVyU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHNob3cgaW5wdXQgYm94LiBEZWZhdWx0cyB0byBgdHJ1ZWAuICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3dJbnB1dCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3dJbnB1dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93SW5wdXQ7XG4gIH1cblxuICAvKiogV2hldGhlciBjYW4gc2VhcmNoLiBEZWZhdWx0cyB0byBgZmFsc2VgLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdTaG93U2VhcmNoKHZhbHVlOiBib29sZWFuIHwgRHdTaG93U2VhcmNoT3B0aW9ucykge1xuICAgIHRoaXMuc2hvd1NlYXJjaCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3U2hvd1NlYXJjaCgpOiBib29sZWFuIHwgRHdTaG93U2VhcmNoT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd1NlYXJjaDtcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2hXaWR0aFN0eWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgb2xkQ29sdW1uc0hvbGRlcjtcbiAgcHJpdmF0ZSBvbGRBY3RpdmF0ZWRPcHRpb25zO1xuXG4gIC8qKiBJZiBjYXNjYWRlciBpcyBpbiBzZWFyY2ggbW9kZS4gKi9cbiAgcHVibGljIGluU2VhcmNoID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgYWxsb3cgY2xlYXIuIERlZmF1bHRzIHRvIGB0cnVlYC4gKi9cbiAgQElucHV0KClcbiAgc2V0IGR3QWxsb3dDbGVhcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYWxsb3dDbGVhciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdBbGxvd0NsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFsbG93Q2xlYXI7XG4gIH1cblxuICAvKiogV2hldGhlciBhdXRvIGZvY3VzLiAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmF1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0b0ZvY3VzO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyBhcnJvdyAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdTaG93QXJyb3codmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNob3dBcnJvdyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdTaG93QXJyb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hvd0Fycm93O1xuICB9XG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3NOYW1lIG9mIHBvcHVwIG92ZXJsYXkgKi9cbiAgQElucHV0KClcbiAgc2V0IGR3TWVudUNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZW51Q2xhc3NOYW1lID0gdmFsdWU7XG4gICAgdGhpcy5zZXRNZW51Q2xhc3MoKTtcbiAgfVxuXG4gIGdldCBkd01lbnVDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZW51Q2xhc3NOYW1lO1xuICB9XG5cbiAgLyoqIEFkZGl0aW9uYWwgY2xhc3NOYW1lIG9mIHBvcHVwIG92ZXJsYXkgY29sdW1uICovXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbHVtbkNsYXNzTmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2x1bW5DbGFzc05hbWUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldE1lbnVDb2x1bW5DbGFzcygpO1xuICB9XG5cbiAgZ2V0IGR3Q29sdW1uQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uQ2xhc3NOYW1lO1xuICB9XG5cbiAgLyoqIE9wdGlvbnMgZm9yIGZpcnN0IGNvbHVtbiwgc3ViIGNvbHVtbiB3aWxsIGJlIGxvYWQgYXN5bmMgKi9cbiAgQElucHV0KCkgc2V0IGR3T3B0aW9ucyhvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdIHwgbnVsbCkge1xuICAgIHRoaXMub2xkQ29sdW1uc0hvbGRlciA9IHRoaXMuZHdDb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFsgb3B0aW9ucyBdIDogW107XG4gICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlICYmIHRoaXMuZHdDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbml0T3B0aW9ucygwKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZHdPcHRpb25zKCk6IENhc2NhZGVyT3B0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmR3Q29sdW1uc1sgMCBdO1xuICB9XG5cbiAgLyoqIENoYW5nZSB2YWx1ZSBvbiBlYWNoIHNlbGVjdGlvbiBpZiBzZXQgdG8gdHJ1ZSAqL1xuICBASW5wdXQoKVxuICBzZXQgZHdDaGFuZ2VPblNlbGVjdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuY2hhbmdlT25TZWxlY3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3Q2hhbmdlT25TZWxlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlT25TZWxlY3Q7XG4gIH1cblxuICAvKiogSG92ZXIgdGV4dCBmb3IgdGhlIGNsZWFyIGljb24gKi9cbiAgQElucHV0KCkgZHdDbGVhclRleHQgPSAnQ2xlYXInO1xuXG4gIC8qKiBFeHBhbmQgY29sdW1uIGl0ZW0gd2hlbiBjbGljayBvciBob3Zlciwgb25lIG9mICdjbGljaycgJ2hvdmVyJyAqL1xuICBASW5wdXQoKSBkd0V4cGFuZFRyaWdnZXI6IER3Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJztcblxuICAvKiogU3BlY2lmeSBjb250ZW50IHRvIHNob3cgd2hlbiBubyByZXN1bHQgbWF0Y2hlcy4gKi9cbiAgQElucHV0KCkgZHdOb3RGb3VuZENvbnRlbnQgPSAnTm90IEZvdW5kJztcblxuICAvKiogSW5wdXQgcGxhY2Vob2xkZXIgKi9cbiAgQElucHV0KCkgZHdQbGFjZUhvbGRlciA9ICdQbGVhc2Ugc2VsZWN0JztcblxuICAvKiogQWRkaXRpb25hbCBzdHlsZSBvZiBwb3B1cCBvdmVybGF5ICovXG4gIEBJbnB1dCgpIGR3TWVudVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nOyB9O1xuXG4gIC8qKiBDaGFuZ2UgdmFsdWUgb24gc2VsZWN0aW9uIG9ubHkgaWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCAqL1xuICBASW5wdXQoKSBkd0NoYW5nZU9uOiAob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcikgPT4gYm9vbGVhbjtcblxuICAvKiogRGVsYXkgdGltZSB0byBzaG93IHdoZW4gbW91c2UgZW50ZXIsIHdoZW4gYGR3RXhwYW5kVHJpZ2dlcmAgaXMgYGhvdmVyYC4gKi9cbiAgQElucHV0KCkgZHdNb3VzZUVudGVyRGVsYXkgPSAxNTA7IC8vIG1zXG5cbiAgLyoqIERlbGF5IHRpbWUgdG8gaGlkZSB3aGVuIG1vdXNlIGVudGVyLCB3aGVuIGBkd0V4cGFuZFRyaWdnZXJgIGlzIGBob3ZlcmAuICovXG4gIEBJbnB1dCgpIGR3TW91c2VMZWF2ZURlbGF5ID0gMTUwOyAvLyBtc1xuXG4gIC8qKiBUcmlnZ2VyaW5nIG1vZGU6IGNhbiBiZSBBcnJheTwnY2xpY2snfCdob3Zlcic+ICovXG4gIEBJbnB1dCgpIGR3VHJpZ2dlckFjdGlvbjogRHdDYXNjYWRlclRyaWdnZXJUeXBlIHwgRHdDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbICdjbGljaycgXTtcblxuICAvKiogUHJvcGVydHkgbmFtZSBmb3IgZ2V0dGluZyBgdmFsdWVgIGluIHRoZSBvcHRpb24gKi9cbiAgQElucHV0KCkgZHdWYWx1ZVByb3BlcnR5ID0gJ3ZhbHVlJztcblxuICAvKiogUHJvcGVydHkgbmFtZSBmb3IgZ2V0dGluZyBgbGFiZWxgIGluIHRoZSBvcHRpb24gKi9cbiAgQElucHV0KCkgZHdMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcblxuICAvKiog5byC5q2l5Yqg6L295pWw5o2uICovXG4gIEBJbnB1dCgpIGR3TG9hZERhdGE6IChub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg/OiBudW1iZXIpID0+IFByb21pc2VMaWtlPGFueT47XG5cbiAgLyoqIEV2ZW50OiBlbWl0IG9uIHBvcHVwIHNob3cgb3IgaGlkZSAqL1xuICBAT3V0cHV0KCkgZHdWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKiBFdmVudDogZW1pdCBvbiB2YWx1ZXMgY2hhbmdlZCAqL1xuICBAT3V0cHV0KCkgZHdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gIC8qKiBFdmVudDogZW1pdCBvbiB2YWx1ZXMgYW5kIHNlbGVjdGlvbiBjaGFuZ2VkICovXG4gIEBPdXRwdXQoKSBkd1NlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZXJPcHRpb25bXT4oKTtcblxuICAvKipcbiAgICogRXZlbnQ6IGVtaXQgb24gb3B0aW9uIHNlbGVjdGVkLCBldmVudCBkYXRh77yae29wdGlvbjogYW55LCBpbmRleDogbnVtYmVyfVxuICAgKi9cbiAgQE91dHB1dCgpIGR3U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgb3B0aW9uOiBDYXNjYWRlck9wdGlvbixcbiAgICBpbmRleDogbnVtYmVyXG4gIH0+KCk7XG5cbiAgLyoqIEV2ZW50OiBlbWl0IG9uIHRoZSBjbGVhciBidXR0b24gY2xpY2tlZCAqL1xuICBAT3V0cHV0KCkgZHdDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xuICAvKiog5rWu5bGC6I+c5Y2VICovXG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBtZW51OiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICdib3R0b20nID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICBpZiAodGhpcy5kcm9wRG93blBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLnByZWZpeENsc30taW5wdXRgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5mb2N1cykge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMucHJlZml4Q2xzfS1pbnB1dGApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmJsdXIpIHtcbiAgICAgICAgaW5wdXQuYmx1cigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5ibHVyKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9YCBdICAgICAgICAgICAgICAgICAgOiAxLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyYCBdICAgICAgICAgICA6IDEsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1sZ2AgXSAgICAgICAgICAgICAgIDogdGhpcy5kd1NpemUgPT09ICdsYXJnZScsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1zbWAgXSAgICAgICAgICAgICAgIDogdGhpcy5kd1NpemUgPT09ICdzbWFsbCcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItZGlzYWJsZWRgIF0gIDogdGhpcy5kaXNhYmxlZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWZvY3VzZWRgIF0gICAgICAgICAgOiB0aGlzLmlzRm9jdXNlZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1vcGVuYCBdICAgICAgOiB0aGlzLm1lbnVWaXNpYmxlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLXdpdGgtdmFsdWVgIF06IHRoaXMuaW5wdXRWYWx1ZSAmJiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoXG4gICAgfTtcbiAgICB0aGlzLmR3VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgLyoqIOagh+etviDmoLflvI8gKi9cbiAgcHVibGljIGdldCBsYWJlbENscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbENscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0TGFiZWxDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9sYWJlbENscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1sYWJlbGAgXTogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXNob3ctc2VhcmNoYCBdIDogISF0aGlzLmR3U2hvd1NlYXJjaCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWZvY3VzZWRgIF0gICAgIDogISF0aGlzLmR3U2hvd1NlYXJjaCAmJiB0aGlzLmlzRm9jdXNlZCAmJiAhdGhpcy5faW5wdXRWYWx1ZVxuICAgIH07XG4gIH1cblxuICAvKiog566t5aS0IOagt+W8jyAqL1xuICBwdWJsaWMgZ2V0IGFycm93Q2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fycm93Q2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBcnJvd0NsYXNzKCk6IHZvaWQge1xuICAgIHRoaXMuX2Fycm93Q2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWFycm93YCBdICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXBpY2tlci1hcnJvdy1leHBhbmRgIF06IHRoaXMubWVudVZpc2libGVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOWKoOi9veS4reWbvuaghyDmoLflvI8gKi9cbiAgcHVibGljIGdldCBsb2FkaW5nQ2xzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmdDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmdDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2FkaW5nQ2xzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcGlja2VyLWFycm93YCBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDmuIXpmaTlm77moIcg5qC35byPICovXG4gIHB1YmxpYyBnZXQgY2xlYXJDbHMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fY2xlYXJDbHM7XG4gIH1cblxuICBwcml2YXRlIHNldENsZWFyQ2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xlYXJDbHMgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1waWNrZXItY2xlYXJgIF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqIOi+k+WFpeahhiDmoLflvI8gKi9cbiAgcHVibGljIGdldCBpbnB1dENscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dENscztcbiAgfVxuXG4gIHByaXZhdGUgc2V0SW5wdXRDbGFzcygpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnB1dENscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWlucHV0YCBdICAgICAgICA6IDEsXG4gICAgICBbIGAke3RoaXMuaW5wdXRQcmVmaXhDbHN9LWRpc2FibGVkYCBdOiB0aGlzLmR3RGlzYWJsZWQsXG4gICAgICBbIGAke3RoaXMuaW5wdXRQcmVmaXhDbHN9LWxnYCBdICAgICAgOiB0aGlzLmR3U2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgIFsgYCR7dGhpcy5pbnB1dFByZWZpeENsc30tc21gIF0gICAgICA6IHRoaXMuZHdTaXplID09PSAnc21hbGwnXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDmta7lsYIg5qC35byPICovXG4gIHB1YmxpYyBnZXQgbWVudUNscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tZW51Q2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNZW51Q2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVudUNscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnVzYCBdICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnVzLWhpZGRlbmAgXTogIXRoaXMubWVudVZpc2libGUsXG4gICAgICBbIGAke3RoaXMuZHdNZW51Q2xhc3NOYW1lfWAgXSAgICAgICA6IHRoaXMuZHdNZW51Q2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDmta7lsYLliJcg5qC35byPICovXG4gIHB1YmxpYyBnZXQgbWVudUNvbHVtbkNscygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tZW51Q29sdW1uQ2xzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRNZW51Q29sdW1uQ2xhc3MoKTogdm9pZCB7XG4gICAgdGhpcy5fbWVudUNvbHVtbkNscyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnVgIF0gICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMuZHdDb2x1bW5DbGFzc05hbWV9YCBdOiB0aGlzLmR3Q29sdW1uQ2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8qKiDojrflj5bliJfkuK1PcHRpb27nmoTmoLflvI8gKi9cbiAgcHVibGljIGdldE9wdGlvbkNscyhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudS1pdGVtYCBdICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbWVudS1pdGVtLWV4cGFuZGAgXSAgOiAhb3B0aW9uLmlzTGVhZixcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnUtaXRlbS1hY3RpdmVgIF0gIDogdGhpcy5pc0FjdGl2ZWRPcHRpb24ob3B0aW9uLCBpbmRleCksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1tZW51LWl0ZW0tZGlzYWJsZWRgIF06IG9wdGlvbi5kaXNhYmxlZCxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW1lbnUtaXRlbS1sb2FkaW5nYCBdIDogb3B0aW9uLmxvYWRpbmdcbiAgICB9O1xuICB9XG5cbiAgLyoqIHByZXZlbnQgaW5wdXQgY2hhbmdlIGV2ZW50ICovXG4gIHB1YmxpYyBoYW5kbGVySW5wdXRDaGFuZ2UoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICAvKiogaW5wdXQgZWxlbWVudCBibHVyICovXG4gIHB1YmxpYyBoYW5kbGVJbnB1dEJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgLypcbiAgICBpZiAoIXRoaXMuZHdTaG93U2VhcmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICovXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTsgLy8ga2VlcCBpbnB1dCBoYXMgZm9jdXMgd2hlbiBtZW51IG9wZW5lZFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICAvKiogaW5wdXQgZWxlbWVudCBmb2N1cyAqL1xuICBwdWJsaWMgaGFuZGxlSW5wdXRGb2N1cyhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAvKlxuICAgIGlmICghdGhpcy5kd1Nob3dTZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKi9cbiAgICB0aGlzLmZvY3VzKCk7XG4gICAgdGhpcy5zZXRMYWJlbENsYXNzKCk7XG4gIH1cblxuICBwcml2YXRlIGhhc0lucHV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdG8gc2hvdyBpbnB1dCBlbGVtZW50IHBsYWNlaG9sZGVyICovXG4gIHB1YmxpYyBnZXQgc2hvd1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKHRoaXMuaGFzSW5wdXQoKSB8fCB0aGlzLmhhc1ZhbHVlKCkpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNsZWFyIGJ1dHRvbiBpcyB2aXNpYmxlICovXG4gIHB1YmxpYyBnZXQgc2hvd0NsZWFySWNvbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0hhc1ZhbHVlID0gdGhpcy5oYXNWYWx1ZSgpO1xuICAgIGNvbnN0IGlzSGFzSW5wdXQgPSB0aGlzLmhhc0lucHV0KCk7XG4gICAgcmV0dXJuIHRoaXMuZHdBbGxvd0NsZWFyICYmICF0aGlzLmR3RGlzYWJsZWQgJiYgKGlzSGFzVmFsdWUgfHwgaXNIYXNJbnB1dCk7XG4gIH1cblxuICAvKiogY2xlYXIgdGhlIGlucHV0IGJveCBhbmQgc2VsZWN0ZWQgb3B0aW9ucyAqL1xuICBwdWJsaWMgY2xlYXJTZWxlY3Rpb24oZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gJyc7XG4gICAgLy8gdGhpcy5pc0xhYmVsUmVuZGVyVGVtcGxhdGUgPSBmYWxzZTtcbiAgICAvLyBjbGVhciBjdXN0b20gY29udGV4dFxuICAgIHRoaXMubGFiZWxSZW5kZXJDb250ZXh0ID0ge307XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcblxuICAgIC8vIHRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRGlzcGxheUxhYmVsKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zO1xuICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBzZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5nZXRPcHRpb25MYWJlbChvKSk7XG4gICAgLy8g6K6+572u5b2T5YmN5o6n5Lu255qE5pi+56S65YC8XG4gICAgaWYgKHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSBkZWZhdWx0RGlzcGxheVJlbmRlci5jYWxsKHRoaXMsIGxhYmVscywgc2VsZWN0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgaWYgKGtleUNvZGUgIT09IERPV05fQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IFVQX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBMRUZUX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBSSUdIVF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gRU5URVIgJiZcbiAgICAgIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJlxuICAgICAga2V5Q29kZSAhPT0gRVNDQVBFKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5TZWFyY2ggJiYgKFxuICAgICAga2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8XG4gICAgICBrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8XG4gICAgICBrZXlDb2RlID09PSBSSUdIVF9BUlJPV1xuICAgICkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmVzcyBhbnkga2V5cyBhYm92ZSB0byByZW9wZW4gbWVudVxuICAgIGlmICghdGhpcy5pc01lbnVWaXNpYmxlKCkgJiZcbiAgICAgIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJlxuICAgICAga2V5Q29kZSAhPT0gRVNDQVBFKSB7XG4gICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBQcmVzcyBFU0MgdG8gY2xvc2UgbWVudVxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIC8vIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpOyAvLyBhbHJlYWR5IGNhbGwgYnkgY2RrLW92ZXJsYXkgZGV0YWNoXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNZW51VmlzaWJsZSgpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlRG93bigpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVVcCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZUxlZnQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgICAgdGhpcy5vbkVudGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIHB1YmxpYyBvblRyaWdnZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vblRvdWNoZWQoKTsgLy8gc2V0IHlvdXIgY29udHJvbCB0byAndG91Y2hlZCdcbiAgICBpZiAodGhpcy5kd1Nob3dTZWFyY2gpIHtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NsaWNrVGlnZ2VyQWN0aW9uKCkpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSghdGhpcy5tZW51VmlzaWJsZSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25UcmlnZ2VyTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNQb2ludGVyVGlnZ2VyQWN0aW9uKCkpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSh0cnVlLCB0aGlzLmR3TW91c2VFbnRlckRlbGF5LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyAnJGV2ZW50JyBdKVxuICBwdWJsaWMgb25UcmlnZ2VyTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzTWVudVZpc2libGUoKSB8fCB0aGlzLmlzT3BlbmluZykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNQb2ludGVyVGlnZ2VyQWN0aW9uKCkpIHtcbiAgICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGhvc3RFbCA9IHRoaXMuZWw7XG4gICAgICBjb25zdCBtZW51RWwgPSB0aGlzLm1lbnUgJiYgdGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpXG4gICAgICAvKnx8IG1vdXNlVGFyZ2V0LnBhcmVudEVsZW1lbnQuY29udGFpbnMobWVudUVsKSovKSB7XG4gICAgICAgIC8vIOWboOS4uua1ruWxgueahGJhY2tkcm9w5Ye6546w77yM5pqC5pe25rKh5pyJ5Yqe5rOV6Ieq5Yqo5raI5aSxXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5kd01vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0NsaWNrVGlnZ2VyQWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5kd1RyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kd1RyaWdnZXJBY3Rpb24gPT09ICdjbGljayc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmR3VHJpZ2dlckFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgfVxuXG4gIHByaXZhdGUgaXNQb2ludGVyVGlnZ2VyQWN0aW9uKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5kd1RyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kd1RyaWdnZXJBY3Rpb24gPT09ICdob3Zlcic7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmR3VHJpZ2dlckFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5ibHVyKCk7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheVRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5pi+56S65oiW6ICF6ZqQ6JeP6I+c5Y2VXG4gICAqXG4gICAqIEBwYXJhbSB2aXNpYmxlIHRydWUt5pi+56S677yMZmFsc2Ut6ZqQ6JePXG4gICAqIEBwYXJhbSBkZWxheSDlu7bov5/ml7bpl7RcbiAgICovXG4gIHB1YmxpYyBkZWxheVNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHNldE9wZW5pbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzTWVudVZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWVudVZpc2libGU7XG4gIH1cblxuICBwdWJsaWMgc2V0TWVudVZpc2libGUobWVudVZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUgIT09IG1lbnVWaXNpYmxlKSB7XG4gICAgICB0aGlzLm1lbnVWaXNpYmxlID0gbWVudVZpc2libGU7XG5cbiAgICAgIC8vIHVwZGF0ZSBjbGFzc1xuICAgICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgICAgdGhpcy5zZXRBcnJvd0NsYXNzKCk7XG4gICAgICB0aGlzLnNldE1lbnVDbGFzcygpO1xuXG4gICAgICBpZiAobWVudVZpc2libGUpIHtcbiAgICAgICAgdGhpcy5iZWZvcmVWaXNpYmxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmR3VmlzaWJsZUNoYW5nZS5lbWl0KG1lbnVWaXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICAvKiogbG9hZCBpbml0IGRhdGEgaWYgbmVjZXNzYXJ5ICovXG4gIHByaXZhdGUgYmVmb3JlVmlzaWJsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRSb290T3B0aW9ucygpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUm9vdE9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmR3Q29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJvb3Q6IGFueSA9IHt9O1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ocm9vdCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5ZPcHRpb27nmoTlgLzvvIzkvovlpoLvvIzlj6/ku6XmjIflrppsYWJlbFByb3BlcnR5PVwibmFtZVwi5p2l5Y+WTmFtZSAqL1xuICBwdWJsaWMgZ2V0T3B0aW9uTGFiZWwob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5kd0xhYmVsUHJvcGVydHkgfHwgJ2xhYmVsJyBdO1xuICB9XG5cbiAgLyoqIOiOt+WPlk9wdGlvbueahOWAvO+8jOS+i+Wmgu+8jOWPr+S7peaMh+WumnZhbHVlUHJvcGVydHk9XCJpZFwi5p2l5Y+WSUQgKi9cbiAgcHVibGljIGdldE9wdGlvblZhbHVlKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24pOiBhbnkge1xuICAgIHJldHVybiBvcHRpb25bIHRoaXMuZHdWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZScgXTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBY3RpdmVkT3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBhY3RpdmVPcHQgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IF07XG4gICAgcmV0dXJuIGFjdGl2ZU9wdCA9PT0gb3B0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruafkOWIl+eahOa/gOa0u+eahOiPnOWNlemAiemhuVxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9uIOiPnOWNlemAiemhuVxuICAgKiBAcGFyYW0gaW5kZXggIOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gc2VsZWN0IOaYr+WQpuinpuWPkemAieaLqee7k+eCuVxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBY3RpdmVPcHRpb24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgc2VsZWN0OiBib29sZWFuID0gZmFsc2UsIGxvYWRDaGlsZHJlbjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBpZiAoIW9wdGlvbiB8fCBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IF0gPSBvcHRpb247XG5cbiAgICAvLyDlvZPnm7TmjqXpgInmi6nmnIDlkI7kuIDnuqfml7bvvIzliY3pnaLnmoTpgInpobnopoHooaXlhajjgILkvovlpoLvvIzpgInmi6nigJzln47luILigJ3vvIzliJnoh6rliqjooaXlhajigJzlm73lrrbigJ3jgIHigJznnIHku73igJ1cbiAgICBmb3IgKGxldCBpID0gaW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgXSkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSArIDEgXS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOaIquaWreWkmuS9meeahOmAiemhue+8jOWmgumAieaLqeKAnOecgeS7veKAne+8jOWImeWPquS8muacieKAnOWbveWutuKAneOAgeKAnOecgeS7veKAne+8jOWOu+aOieKAnOWfjuW4guKAneOAgeKAnOWMuuWOv+KAnVxuICAgIGlmIChpbmRleCA8IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkIGNoaWxkcmVuXG4gICAgaWYgKG9wdGlvbi5jaGlsZHJlbiAmJiBvcHRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBvcHRpb24uaXNMZWFmID0gZmFsc2U7XG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBvcHRpb24pO1xuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgaW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb24uaXNMZWFmICYmIGxvYWRDaGlsZHJlbikge1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW4ob3B0aW9uLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNsaWNraW5nIGxlYWYgbm9kZSB3aWxsIHJlbW92ZSBhbnkgY2hpbGRyZW4gY29sdW1uc1xuICAgICAgaWYgKGluZGV4IDwgdGhpcy5kd0NvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmR3Q29sdW1ucyA9IHRoaXMuZHdDb2x1bW5zLnNsaWNlKDAsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJpZ2dlciBzZWxlY3QgZXZlbnQsIGFuZCBkaXNwbGF5IGxhYmVsXG4gICAgaWYgKHNlbGVjdCkge1xuICAgICAgdGhpcy5vblNlbGVjdE9wdGlvbihvcHRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRDaGlsZHJlbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBzdWNjZXNzPzogKCkgPT4gdm9pZCwgZmFpbHVyZT86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0xvYWREYXRhKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGluZGV4IDwgMDtcbiAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHdMb2FkRGF0YShvcHRpb24sIGluZGV4KS50aGVuKCgpID0+IHtcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgICAgb3B0aW9uLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGFyZW50ID0gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogb3B0aW9uKTtcbiAgICAgICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICB9XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgb3B0aW9uLmlzTGVhZiA9IHRydWU7XG4gICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uU2VsZWN0T3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAvLyB0cmlnZ2VyIGBkd1NlbGVjdGAgZXZlbnRcbiAgICB0aGlzLmR3U2VsZWN0LmVtaXQoeyBvcHRpb24sIGluZGV4IH0pO1xuXG4gICAgLy8g55Sf5oiQ5pi+56S6XG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5kd0NoYW5nZU9uU2VsZWN0IHx8IHRoaXMuaXNDaGFuZ2VPbihvcHRpb24sIGluZGV4KSkge1xuICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgICAvLyDorr7nva7lvZPliY3mjqfku7bnmoTmmL7npLrlgLxcbiAgICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcbiAgICAgIC8vIOinpuWPkeWPmOabtOS6i+S7tlxuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGljayBvbiBsZWFmXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5kd01vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIOeUseeUqOaIt+adpeWumuS5ieeCueWHu+WQjuaYr+WQpuWPmOabtCAqL1xuICBwcml2YXRlIGlzQ2hhbmdlT24ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5kd0NoYW5nZU9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5kd0NoYW5nZU9uKG9wdGlvbiwgaW5kZXgpID09PSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHNldENvbHVtbkRhdGEob3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghYXJyYXlFcXVhbHModGhpcy5kd0NvbHVtbnNbIGluZGV4IF0sIG9wdGlvbnMpKSB7XG4gICAgICB0aGlzLmR3Q29sdW1uc1sgaW5kZXggXSA9IG9wdGlvbnM7XG4gICAgICBpZiAoaW5kZXggPCB0aGlzLmR3Q29sdW1ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuZHdDb2x1bW5zID0gdGhpcy5kd0NvbHVtbnMuc2xpY2UoMCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6byg5qCH54K55Ye76YCJ6aG5XG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb24g6I+c5Y2V6YCJ6aG5XG4gICAqIEBwYXJhbSBpbmRleCDpgInpobnmiYDlnKjnmoTliJfnu4TnmoTntKLlvJVcbiAgICogQHBhcmFtIGV2ZW50IOm8oOagh+S6i+S7tlxuICAgKi9cbiAgb25PcHRpb25DbGljayhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgLy8gS2VlcCBmb2N1c2VkIHN0YXRlIGZvciBrZXlib2FyZCBzdXBwb3J0XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuXG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pblNlYXJjaCkge1xuICAgICAgdGhpcy5zZXRTZWFyY2hBY3RpdmVPcHRpb24ob3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG9wdGlvbiwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmjInkuIvlm57ovabplK7ml7bpgInmi6kgKi9cbiAgcHJpdmF0ZSBvbkVudGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xuICAgIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXTtcbiAgICBpZiAoYWN0aXZlT3B0aW9uICYmICFhY3RpdmVPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLmluU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuc2V0U2VhcmNoQWN0aXZlT3B0aW9uKGFjdGl2ZU9wdGlvbiBhcyBDYXNjYWRlclNlYXJjaE9wdGlvbiwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uU2VsZWN0T3B0aW9uKGFjdGl2ZU9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwcmVzcyBgdXBgIG9yIGBkb3duYCBhcnJvdyB0byBhY3RpdmF0ZSB0aGUgc2libGluZyBvcHRpb24uXG4gICAqL1xuICBwcml2YXRlIG1vdmVVcE9yRG93bihpc1VwOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XG4gICAgLy8g6K+l57uE5Lit5bey57uP6KKr5r+A5rS755qE6YCJ6aG5XG4gICAgY29uc3QgYWN0aXZlT3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdO1xuICAgIC8vIOivpee7hOaJgOacieeahOmAiemhue+8jOeUqOS6jumBjeWOhuiOt+WPluS4i+S4gOS4quiiq+a/gOa0u+eahOmAiemhuVxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmR3Q29sdW1uc1sgY29sdW1uSW5kZXggXSB8fCBbXTtcbiAgICBjb25zdCBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XG4gICAgaWYgKCFhY3RpdmVPcHRpb24pIHsgLy8g6K+l5YiX6L+Y5rKh5pyJ6YCJ5Lit55qE6YCJ6aG5XG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbGVuZ3RoIDogLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMuaW5kZXhPZihhY3RpdmVPcHRpb24pO1xuICAgIH1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBuZXh0SW5kZXggPSBpc1VwID8gbmV4dEluZGV4IC0gMSA6IG5leHRJbmRleCArIDE7XG4gICAgICBpZiAobmV4dEluZGV4IDwgMCB8fCBuZXh0SW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV4dE9wdGlvbiA9IG9wdGlvbnNbIG5leHRJbmRleCBdO1xuICAgICAgaWYgKCFuZXh0T3B0aW9uIHx8IG5leHRPcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihuZXh0T3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVVcCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmVVcE9yRG93bih0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgbW92ZURvd24oKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlVXBPckRvd24oZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIHByZXNzIGBsZWZ0YCBhcnJvdyB0byByZW1vdmUgdGhlIGxhc3Qgc2VsZWN0ZWQgb3B0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlTGVmdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwcmVzcyBgcmlnaHRgIGFycm93IHRvIHNlbGVjdCB0aGUgbmV4dCBjb2x1bW4gb3B0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlUmlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aDtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5kd0NvbHVtbnNbIGxlbmd0aCBdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0T3B0ID0gb3B0aW9ucy5maW5kKG8gPT4gIW8uZGlzYWJsZWQpO1xuICAgICAgaWYgKG5leHRPcHQpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24obmV4dE9wdCwgbGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6byg5qCH5YiS5YWl6YCJ6aG5XG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb24g6I+c5Y2V6YCJ6aG5XG4gICAqIEBwYXJhbSBpbmRleCDpgInpobnmiYDlnKjnmoTliJfnu4TnmoTntKLlvJVcbiAgICogQHBhcmFtIGV2ZW50IOm8oOagh+S6i+S7tlxuICAgKi9cbiAgb25PcHRpb25Nb3VzZUVudGVyKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuZHdFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInICYmICFvcHRpb24uaXNMZWFmKSB7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0KG9wdGlvbiwgaW5kZXgsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpvKDmoIfliJLlh7rpgInpoblcbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbiDoj5zljZXpgInpoblcbiAgICogQHBhcmFtIGluZGV4IOmAiemhueaJgOWcqOeahOWIl+e7hOeahOe0ouW8lVxuICAgKiBAcGFyYW0gZXZlbnQg6byg5qCH5LqL5Lu2XG4gICAqL1xuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5kd0V4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3Qob3B0aW9uLCBpbmRleCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5U2VsZWN0VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGF5U2VsZWN0KG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGRvU2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcbiAgICBpZiAoZG9TZWxlY3QpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyDpvKDmoIfmu5HlhaXlj6rlsZXlvIDvvIzkuI3ov5vooYzpgInkuK3mk43kvZxcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XG4gICAgICB9LCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRTdWJtaXRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgY29uc3QgdmFsdWVzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcbiAgICBpZiAoIWFycmF5RXF1YWxzKHRoaXMudmFsdWUsIHZhbHVlKSkge1xuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBudWxsOyAvLyBjbGVhciB0aGUgaW5pdC12YWx1ZVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7IC8vIEFuZ3VsYXIgbmVlZCB0aGlzXG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZHdDbGVhci5lbWl0KCk7IC8vIGZpcnN0IHRyaWdnZXIgYGNsZWFyYCBhbmQgdGhlbiBgY2hhbmdlYFxuICAgICAgfVxuICAgICAgdGhpcy5kd1NlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgIHRoaXMuZHdDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgZHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIGZpbmRPcHRpb24ob3B0aW9uOiBhbnksIGluZGV4OiBudW1iZXIpOiBDYXNjYWRlck9wdGlvbiB7XG4gICAgY29uc3Qgb3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IHRoaXMuZHdDb2x1bW5zWyBpbmRleCBdO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBvcHRpb24gPT09ICdvYmplY3QnID8gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pIDogb3B0aW9uO1xuICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZChvID0+IHZhbHVlID09PSB0aGlzLmdldE9wdGlvblZhbHVlKG8pKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGlzTG9hZGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd0NvbHVtbnNbIGluZGV4IF0gJiYgdGhpcy5kd0NvbHVtbnNbIGluZGV4IF0ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVPbkluaXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBvcHRpb24gPSB0aGlzLmZpbmRPcHRpb24odmFsdWUsIGluZGV4KTtcbiAgICBpZiAoIW9wdGlvbikge1xuICAgICAgb3B0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge1xuICAgICAgICBbIGAke3RoaXMuZHdWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZSd9YCBdOiB2YWx1ZSxcbiAgICAgICAgWyBgJHt0aGlzLmR3TGFiZWxQcm9wZXJ0eSB8fCAnbGFiZWwnfWAgXTogdmFsdWVcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG9wdGlvbiwgaW5kZXgsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRPcHRpb25zKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB2cyA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICAgIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRlT25Jbml0KGluZGV4LCB2c1sgaW5kZXggXSk7XG4gICAgICBpZiAoaW5kZXggPCB2cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gdnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmFmdGVyV3JpdGVWYWx1ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0xvYWRlZChpbmRleCkgfHwgIXRoaXMuZHdMb2FkRGF0YSkge1xuICAgICAgbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpbmRleCAtIDEgXSB8fCB7fTtcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuKG5vZGUsIGluZGV4IC0gMSwgbG9hZCwgdGhpcy5hZnRlcldyaXRlVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGFmdGVyV3JpdGVWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRTdWJtaXRWYWx1ZSgpO1xuICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cbiAgICpcbiAgICogQE92ZXJyaWRlIChGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSlcbiAgICovXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHZzID0gdGhpcy5kZWZhdWx0VmFsdWUgPSB0b0FycmF5KHZhbHVlKTtcbiAgICBpZiAodnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXRPcHRpb25zKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdnM7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfVxuICAgIHRoaXMuZHdEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVTZWFyY2hWYWx1ZSgpOiB2b2lkIHtcbiAgICBjb25zdCByZXN1bHRzOiBDYXNjYWRlclNlYXJjaE9wdGlvbltdID0gW107XG4gICAgY29uc3QgcGF0aDogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXIgPSAoaW5wdXRWYWx1ZTogc3RyaW5nLCBwOiBDYXNjYWRlck9wdGlvbltdKTogYm9vbGVhbiA9PiB7XG4gICAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgICAgcC5mb3JFYWNoKG4gPT4ge1xuICAgICAgICBpZiAobi5sYWJlbC5pbmRleE9mKGlucHV0VmFsdWUpID4gLTEpIHtcbiAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmxhZztcbiAgICB9O1xuICAgIGNvbnN0IGZpbHRlcjogKGlucHV0VmFsdWU6IHN0cmluZywgcDogQ2FzY2FkZXJPcHRpb25bXSkgPT4gYm9vbGVhbiA9XG4gICAgICB0aGlzLmR3U2hvd1NlYXJjaCBpbnN0YW5jZW9mIE9iamVjdCAmJiAodGhpcy5kd1Nob3dTZWFyY2ggYXMgRHdTaG93U2VhcmNoT3B0aW9ucykuZmlsdGVyID9cbiAgICAgICAgKHRoaXMuZHdTaG93U2VhcmNoIGFzIER3U2hvd1NlYXJjaE9wdGlvbnMpLmZpbHRlciA6XG4gICAgICAgIGRlZmF1bHRGaWx0ZXI7XG4gICAgY29uc3Qgc29ydGVyOiAoYTogQ2FzY2FkZXJPcHRpb25bXSwgYjogQ2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXIgPVxuICAgICAgdGhpcy5kd1Nob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMuZHdTaG93U2VhcmNoIGFzIER3U2hvd1NlYXJjaE9wdGlvbnMpLnNvcnRlcjtcbiAgICBjb25zdCBsb29wUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChzTm9kZSkgPT4ge1xuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkge1xuICAgICAgICAgIHNOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqIOaQnOe0oueahOWQjOaXtuW7uueriyBwYXJlbnQg6L+e5o6l77yM5Zug5Li655So5oi355u05o6l5pCc57Si55qE6K+d5piv5rKh5pyJ5bu656uL6L+e5o6l55qE77yM5Lya5o+Q5Y2H5LuO5Y+25a2Q6IqC54K55Zue5rqv55qE6Zq+5bqmICovXG4gICAgICAgIGlmICghc05vZGUuaXNMZWFmKSB7XG4gICAgICAgICAgbG9vcFBhcmVudChzTm9kZSwgZGlzYWJsZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzTm9kZS5pc0xlYWYgfHwgIXNOb2RlLmNoaWxkcmVuIHx8ICFzTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICBsb29wQ2hpbGQoc05vZGUsIGRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIGNvbnN0IGNQYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcbiAgICAgIGlmIChmaWx0ZXIodGhpcy5faW5wdXRWYWx1ZSwgY1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGlzTGVhZjogdHJ1ZSxcbiAgICAgICAgICBwYXRoICA6IGNQYXRoLFxuICAgICAgICAgIGxhYmVsIDogY1BhdGgubWFwKHAgPT4gcC5sYWJlbCkuam9pbignIC8gJylcbiAgICAgICAgfSBhcyBDYXNjYWRlclNlYXJjaE9wdGlvbik7XG4gICAgICB9XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG5cbiAgICB0aGlzLm9sZENvbHVtbnNIb2xkZXJbIDAgXS5mb3JFYWNoKG5vZGUgPT4gKG5vZGUuaXNMZWFmIHx8ICFub2RlLmNoaWxkcmVuIHx8ICFub2RlLmNoaWxkcmVuLmxlbmd0aCkgPyBsb29wQ2hpbGQobm9kZSkgOiBsb29wUGFyZW50KG5vZGUpKTtcbiAgICBpZiAoc29ydGVyKSB7XG4gICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHNvcnRlcihhLnBhdGgsIGIucGF0aCwgdGhpcy5faW5wdXRWYWx1ZSkpO1xuICAgIH1cbiAgICB0aGlzLmR3Q29sdW1ucyA9IFsgcmVzdWx0cyBdO1xuICB9XG5cbiAgcmVuZGVyU2VhcmNoU3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLl9pbnB1dFZhbHVlLCAnZycpLFxuICAgICAgYDxzcGFuIGNsYXNzPVwiYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1rZXl3b3JkXCI+JHt0aGlzLl9pbnB1dFZhbHVlfTwvc3Bhbj5gKTtcbiAgfVxuXG4gIHNldFNlYXJjaEFjdGl2ZU9wdGlvbihyZXN1bHQ6IENhc2NhZGVyU2VhcmNoT3B0aW9uLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbIHJlc3VsdCBdO1xuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgMjAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7IC8vIE5vdCBvbmx5IHJlbW92ZSBgaW5wdXRWYWx1ZWAgYnV0IGFsc28gcmV2ZXJzZSBgZHdDb2x1bW5zYCBpbiB0aGUgaG9vay5cbiAgICAgIGNvbnN0IGluZGV4ID0gcmVzdWx0LnBhdGgubGVuZ3RoIC0gMTtcbiAgICAgIGNvbnN0IGRlc3RpTm9kZSA9IHJlc3VsdC5wYXRoWyBpbmRleCBdO1xuICAgICAgY29uc3QgbW9ja0NsaWNrUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBjSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAobm9kZSAmJiBub2RlLnBhcmVudCkge1xuICAgICAgICAgIG1vY2tDbGlja1BhcmVudChub2RlLnBhcmVudCwgY0luZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrKG5vZGUsIGNJbmRleCwgZXZlbnQpO1xuICAgICAgfTtcbiAgICAgIG1vY2tDbGlja1BhcmVudChkZXN0aU5vZGUsIGluZGV4KTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8g6K6+572u5qC35byPXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuc2V0TGFiZWxDbGFzcygpO1xuICAgIHRoaXMuc2V0QXJyb3dDbGFzcygpO1xuICAgIHRoaXMuc2V0TG9hZGluZ0NsYXNzKCk7XG4gICAgdGhpcy5zZXRDbGVhckNsYXNzKCk7XG4gICAgdGhpcy5zZXRJbnB1dENsYXNzKCk7XG4gICAgdGhpcy5zZXRNZW51Q2xhc3MoKTtcbiAgICB0aGlzLnNldE1lbnVDb2x1bW5DbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICB9XG5cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { DwOptionComponent } from './dw-option.component';
import { merge, Subject } from 'rxjs';
import { DwOptionLiComponent } from './dw-option-li.component';
import { defaultFilterOption, DwOptionPipe } from './dw-option.pipe';
var DwOptionContainerComponent = /** @class */ (function () {
    function DwOptionContainerComponent() {
        this.isInit = false;
        this.isAddTagOptionDisplay = false;
        this.listOfAllTemplateOption = [];
        this.listOfTagOption = [];
        this.listOfFilterOption = [];
        // tslint:disable-next-line:no-any
        this.dwListOfSelectedValueChange = new EventEmitter();
        this.dwListOfTemplateOptionChange = new EventEmitter();
        this.dwClickOption = new EventEmitter();
        this.dwScrollToBottom = new EventEmitter();
        this.dwMode = 'default';
        this.dwServerSearch = false;
        this.dwFilterOption = defaultFilterOption;
        this.dwMaxMultipleCount = Infinity;
        // tslint:disable-next-line:no-any
        this.compareWith = function (o1, o2) { return o1 === o2; };
    }
    Object.defineProperty(DwOptionContainerComponent.prototype, "dwSearchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.updateAddTagOptionDisplay();
            this.updateListOfFilterOption();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwOptionContainerComponent.prototype, "dwListOfSelectedValue", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this._listOfSelectedValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._listOfSelectedValue !== value) {
                this._listOfSelectedValue = value;
                /** should clear activedOption when listOfSelectedValue change **/
                this.clearActivatedOption();
                this.refreshAllOptionStatus(false);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.addTagOption = /**
     * @return {?}
     */
    function () {
        if (this.dwListOfSelectedValue.length < this.dwMaxMultipleCount) {
            this.dwListOfSelectedValue = tslib_1.__spread(this.dwListOfSelectedValue, [this.dwSearchValue]);
            this.dwListOfSelectedValueChange.emit(this.dwListOfSelectedValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    DwOptionContainerComponent.prototype.clickOption = /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    function (option, isPressEnter) {
        this.updateSelectedOption(option, isPressEnter);
        this.dwClickOption.emit();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwOptionContainerComponent.prototype.onKeyDownUl = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if ([38, 40, 13].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            /** @type {?} */
            var activeIndex = this.listOfFilterOption.findIndex(function (item) { return item === _this.activatedOption; });
            if (e.keyCode === 38) {
                /** @type {?} */
                var preIndex = activeIndex > 0 ? (activeIndex - 1) : (this.listOfFilterOption.length - 1);
                this.setActiveOption(this.listOfFilterOption[preIndex]);
            }
            else if (e.keyCode === 40) {
                /** @type {?} */
                var nextIndex = activeIndex < this.listOfFilterOption.length - 1 ? (activeIndex + 1) : 0;
                this.setActiveOption(this.listOfFilterOption[nextIndex]);
            }
            else if (e.keyCode === 13) {
                // enter
                if (this.isTagsMode) {
                    if (!this.isAddTagOptionDisplay) {
                        this.clickOption(this.activatedOption, true);
                    }
                    else {
                        this.addTagOption();
                        this.dwClickOption.emit();
                    }
                }
                else {
                    this.clickOption(this.activatedOption, true);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.resetActiveOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var firstActiveOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).find(function (item) { return _this.compareWith(item.dwValue, _this.dwListOfSelectedValue[0]); });
        this.setActiveOption(firstActiveOption);
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.clearActivatedOption = /**
     * @return {?}
     */
    function () {
        this.setActiveOption(null);
    };
    /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    DwOptionContainerComponent.prototype.setActiveOption = /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    function (option, scroll) {
        if (scroll === void 0) { scroll = true; }
        this.activatedOption = option;
        if (scroll) {
            this.scrollIntoView();
        }
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.scrollIntoView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfDwOptionLiComponent && this.listOfDwOptionLiComponent.length) {
            /** @type {?} */
            var targetOption_1 = this.listOfDwOptionLiComponent.find(function (o) { return o.dwOption === _this.activatedOption; });
            /* tslint:disable-next-line:no-string-literal */
            if (targetOption_1 && targetOption_1.el && targetOption_1.el['scrollIntoViewIfNeeded']) {
                /* tslint:disable-next-line:no-string-literal */
                setTimeout(function () { return targetOption_1.el['scrollIntoViewIfNeeded'](false); }, 150);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    DwOptionContainerComponent.prototype.updateSelectedOption = /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    function (option, isPressEnter) {
        var _this = this;
        /** update listOfSelectedOption -> update dwListOfSelectedValue -> emit dwListOfSelectedValueChange **/
        if (option && !option.dwDisabled) {
            /** @type {?} */
            var changed = false;
            this.setActiveOption(option);
            /** @type {?} */
            var listOfSelectedValue = tslib_1.__spread(this.dwListOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.dwValue); });
                if (isNotNil(targetValue)) {
                    if (!isPressEnter) {
                        /** should not toggle option when press enter **/
                        listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                        changed = true;
                    }
                }
                else if (this.dwListOfSelectedValue.length < this.dwMaxMultipleCount) {
                    listOfSelectedValue.push(option.dwValue);
                    changed = true;
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.dwValue)) {
                listOfSelectedValue = [option.dwValue];
                changed = true;
            }
            /** update selectedValues when click option **/
            if (changed) {
                this._listOfSelectedValue = listOfSelectedValue;
                this.dwListOfSelectedValueChange.emit(this.dwListOfSelectedValue);
                if (this.isTagsMode) {
                    this.refreshAllOptionStatus(false);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.refreshListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** *
             * refresh tags option *
              @type {?} */
            var listOfTagsOption_1 = [];
            this.dwListOfSelectedValue.forEach(function (value) {
                /** @type {?} */
                var existedOption = _this.listOfAllTemplateOption.find(function (o) { return _this.compareWith(o.dwValue, value); });
                if (!existedOption) {
                    /** @type {?} */
                    var dwOptionComponent = new DwOptionComponent();
                    dwOptionComponent.dwValue = value;
                    dwOptionComponent.dwLabel = value;
                    listOfTagsOption_1.push(dwOptionComponent);
                }
            });
            this.listOfTagOption = listOfTagsOption_1;
        }
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.refreshListOfAllTemplateOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfAllTemplateOption = this.listOfDwOptionComponent.toArray().concat(this.listOfDwOptionGroupComponent.toArray().reduce(function (pre, cur) { return tslib_1.__spread(pre, cur.listOfDwOptionComponent.toArray()); }, []));
        Promise.resolve().then(function () { return _this.dwListOfTemplateOptionChange.emit(_this.listOfAllTemplateOption); });
    };
    /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    DwOptionContainerComponent.prototype.refreshAllOptionStatus = /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    function (isTemplateOptionChange) {
        /** update dwListOfSelectedValue | update option list -> update listOfAllTemplateOption -> update listOfSelectedOption -> update activatedOption **/
        if (this.isInit) {
            if (isTemplateOptionChange) {
                this.refreshListOfAllTemplateOption();
            }
            this.refreshListOfTagOption();
            this.updateListOfFilterOption();
            this.updateAddTagOptionDisplay();
        }
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.updateListOfFilterOption = /**
     * @return {?}
     */
    function () {
        this.listOfFilterOption = /** @type {?} */ (new DwOptionPipe().transform(this.listOfAllTemplateOption.concat(this.listOfTagOption), this.dwSearchValue, this.dwFilterOption, this.dwServerSearch));
        if (this.dwSearchValue) {
            this.setActiveOption(this.listOfFilterOption[0]);
        }
    };
    /** watch options change in option group **/
    /**
     * watch options change in option group *
     * @return {?}
     */
    DwOptionContainerComponent.prototype.watchSubOptionChanges = /**
     * watch options change in option group *
     * @return {?}
     */
    function () {
        var _this = this;
        this.unsubscribeOption();
        /** @type {?} */
        var optionChanges$ = merge(new Subject().asObservable(), this.listOfDwOptionGroupComponent.changes, this.listOfDwOptionComponent.changes);
        if (this.listOfDwOptionGroupComponent.length) {
            this.listOfDwOptionGroupComponent.forEach(function (group) { return optionChanges$ = group.listOfDwOptionComponent ? merge(group.listOfDwOptionComponent.changes, optionChanges$) : optionChanges$; });
        }
        this.optionSubscription = optionChanges$.subscribe(function () { return _this.refreshAllOptionStatus(true); });
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.unsubscribeGroup = /**
     * @return {?}
     */
    function () {
        if (this.groupSubscription) {
            this.groupSubscription.unsubscribe();
            this.groupSubscription = null;
        }
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.unsubscribeOption = /**
     * @return {?}
     */
    function () {
        if (this.optionSubscription) {
            this.optionSubscription.unsubscribe();
            this.optionSubscription = null;
        }
    };
    Object.defineProperty(DwOptionContainerComponent.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwMode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwOptionContainerComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwMode === 'tags' || this.dwMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwOptionContainerComponent.prototype, "isNotFoundDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isTagsMode) && (!this.listOfFilterOption.length);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.updateAddTagOptionDisplay = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listOfAllOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).map(function (item) { return item.dwLabel; });
        /** @type {?} */
        var isMatch = listOfAllOption.indexOf(this.dwSearchValue) > -1;
        this.isAddTagOptionDisplay = this.isTagsMode && this.dwSearchValue && (!isMatch);
    };
    /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    DwOptionContainerComponent.prototype.dropDownScroll = /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    function (e, ul) {
        e.preventDefault();
        e.stopPropagation();
        if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
            this.dwScrollToBottom.emit();
        }
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInit = true;
        this.refreshAllOptionStatus(true);
        this.watchSubOptionChanges();
        this.groupSubscription = this.listOfDwOptionGroupComponent.changes.subscribe(function () { return _this.watchSubOptionChanges(); });
    };
    /**
     * @return {?}
     */
    DwOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeGroup();
        this.unsubscribeOption();
    };
    DwOptionContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dw-option-container]',
                    preserveWhitespaces: false,
                    template: "<ul\n  #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  (keydown)=\"onKeyDownUl($event)\"\n  (scroll)=\"dropDownScroll($event,dropdownUl)\"\n  tabindex=\"0\">\n  <li\n    *ngIf=\"isNotFoundDisplay\"\n    dw-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\n    {{ dwNotFoundContent ? dwNotFoundContent : ('Select.notFoundContent' | dwI18n) }}\n  </li>\n  <li\n    *ngIf=\"isAddTagOptionDisplay\"\n    dw-select-unselectable\n    (click)=\"addTagOption()\"\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active\">\n    {{ dwSearchValue }}\n  </li>\n  <li\n    dw-option-li\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfDwOptionComponent | dwFilterOptionPipe : dwSearchValue : dwFilterOption : dwServerSearch \"\n    (click)=\"clickOption(option,false)\"\n    [dwActiveOption]=\"activatedOption\"\n    [dwOption]=\"option\"\n    [dwListOfSelectedValue]=\"dwListOfSelectedValue\">\n  </li>\n  <li\n    *ngFor=\"let group of listOfDwOptionGroupComponent | dwSubFilterOptionPipe : dwSearchValue : dwFilterOption : dwServerSearch\"\n    class=\"ant-select-dropdown-menu-item-group\">\n    <div\n      class=\"ant-select-dropdown-menu-item-group-title\"\n      [attr.title]=\"group.isLabelString ? group.dwLabel : ''\">\n      <ng-container *ngIf=\"group.isLabelString; else labelTemplate\">{{ group.dwLabel }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"group.dwLabel\"></ng-template>\n      </ng-template>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <li\n        dw-option-li\n        [compareWith]=\"compareWith\"\n        *ngFor=\"let option of group.listOfDwOptionComponent | dwFilterOptionPipe : dwSearchValue : dwFilterOption : dwServerSearch\"\n        (click)=\"clickOption(option,false)\"\n        [dwActiveOption]=\"activatedOption\"\n        [dwShowActive]=\"!isAddTagOptionDisplay\"\n        [dwOption]=\"option\"\n        [dwListOfSelectedValue]=\"dwListOfSelectedValue\">\n      </li>\n    </ul>\n  </li>\n  <li\n    dw-option-li\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfTagOption | dwFilterOptionPipe : dwSearchValue : dwFilterOption : dwServerSearch \"\n    (click)=\"clickOption(option,false)\"\n    [dwActiveOption]=\"activatedOption\"\n    [dwShowActive]=\"!isAddTagOptionDisplay\"\n    [dwOption]=\"option\"\n    [dwListOfSelectedValue]=\"dwListOfSelectedValue\">\n  </li>\n</ul>"
                }] }
    ];
    DwOptionContainerComponent.propDecorators = {
        listOfDwOptionLiComponent: [{ type: ViewChildren, args: [DwOptionLiComponent,] }],
        listOfDwOptionComponent: [{ type: Input }],
        listOfDwOptionGroupComponent: [{ type: Input }],
        dwListOfSelectedValueChange: [{ type: Output }],
        dwListOfTemplateOptionChange: [{ type: Output }],
        dwClickOption: [{ type: Output }],
        dwScrollToBottom: [{ type: Output }],
        dwMode: [{ type: Input }],
        dwServerSearch: [{ type: Input }],
        dwFilterOption: [{ type: Input }],
        dwMaxMultipleCount: [{ type: Input }],
        dwNotFoundContent: [{ type: Input }],
        compareWith: [{ type: Input }],
        dwSearchValue: [{ type: Input }],
        dwListOfSelectedValue: [{ type: Input }]
    };
    return DwOptionContainerComponent;
}());
export { DwOptionContainerComponent };
function DwOptionContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwOptionContainerComponent.prototype._listOfSelectedValue;
    /** @type {?} */
    DwOptionContainerComponent.prototype._searchValue;
    /** @type {?} */
    DwOptionContainerComponent.prototype.isInit;
    /** @type {?} */
    DwOptionContainerComponent.prototype.isAddTagOptionDisplay;
    /** @type {?} */
    DwOptionContainerComponent.prototype.listOfAllTemplateOption;
    /** @type {?} */
    DwOptionContainerComponent.prototype.optionSubscription;
    /** @type {?} */
    DwOptionContainerComponent.prototype.groupSubscription;
    /** @type {?} */
    DwOptionContainerComponent.prototype.listOfTagOption;
    /** @type {?} */
    DwOptionContainerComponent.prototype.listOfFilterOption;
    /** @type {?} */
    DwOptionContainerComponent.prototype.activatedOption;
    /**
     * can not use ViewChild since it will match sub options in option group *
     * @type {?}
     */
    DwOptionContainerComponent.prototype.listOfDwOptionLiComponent;
    /** @type {?} */
    DwOptionContainerComponent.prototype.listOfDwOptionComponent;
    /** @type {?} */
    DwOptionContainerComponent.prototype.listOfDwOptionGroupComponent;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwListOfSelectedValueChange;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwListOfTemplateOptionChange;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwClickOption;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwScrollToBottom;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwMode;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwServerSearch;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwFilterOption;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwMaxMultipleCount;
    /** @type {?} */
    DwOptionContainerComponent.prototype.dwNotFoundContent;
    /** @type {?} */
    DwOptionContainerComponent.prototype.compareWith;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNlbGVjdC9kdy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQWlCLE1BQU0sa0JBQWtCLENBQUM7OztzQkFXekUsS0FBSztxQ0FDVSxLQUFLO3VDQUNrQixFQUFFOytCQUdWLEVBQUU7a0NBQ0MsRUFBRTs7MkNBT0osSUFBSSxZQUFZLEVBQVM7NENBQ3hCLElBQUksWUFBWSxFQUF1Qjs2QkFDdEQsSUFBSSxZQUFZLEVBQVE7Z0NBQ3JCLElBQUksWUFBWSxFQUFRO3NCQUNuQyxTQUFTOzhCQUNELEtBQUs7OEJBQ1UsbUJBQW1CO2tDQUM5QixRQUFROzsyQkFHZixVQUFDLEVBQU8sRUFBRSxFQUFPLElBQUssT0FBQSxFQUFFLEtBQUssRUFBRSxFQUFULENBQVM7O0lBRXRELHNCQUNJLHFEQUFhOzs7O1FBTWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCOzs7OztRQVRELFVBQ2tCLEtBQWE7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLHlC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QyxZQUFZLEdBQUcsRUFBRSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDOUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7SUFFRCx1REFBa0I7OztJQUFsQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLHFCQUFxQixFQUFFLEVBQTVCLENBQTRCLENBQUMsQ0FBQztLQUNsSDs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOztnQkEzUUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSx1QkFBdUI7b0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGlqRkFBMkQ7aUJBQzVEOzs7NENBY0UsWUFBWSxTQUFDLG1CQUFtQjswQ0FDaEMsS0FBSzsrQ0FDTCxLQUFLOzhDQUVMLE1BQU07K0NBQ04sTUFBTTtnQ0FDTixNQUFNO21DQUNOLE1BQU07eUJBQ04sS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUVMLEtBQUs7Z0NBRUwsS0FBSzt3Q0FXTCxLQUFLOztxQ0EvRFI7O1NBdUJhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgRHdPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vZHctb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZHctb3B0aW9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IER3T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL2R3LW9wdGlvbi1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgRHdPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9kdy1vcHRpb24ucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW2R3LW9wdGlvbi1jb250YWluZXJdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9saXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXTtcbiAgcHJpdmF0ZSBfc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IGZhbHNlO1xuICBsaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbjogRHdPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBvcHRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgZ3JvdXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbGlzdE9mVGFnT3B0aW9uOiBEd09wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGxpc3RPZkZpbHRlck9wdGlvbjogRHdPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBhY3RpdmF0ZWRPcHRpb246IER3T3B0aW9uQ29tcG9uZW50O1xuICAvKiogY2FuIG5vdCB1c2UgVmlld0NoaWxkIHNpbmNlIGl0IHdpbGwgbWF0Y2ggc3ViIG9wdGlvbnMgaW4gb3B0aW9uIGdyb3VwICoqL1xuICBAVmlld0NoaWxkcmVuKER3T3B0aW9uTGlDb21wb25lbnQpIGxpc3RPZkR3T3B0aW9uTGlDb21wb25lbnQ6IFF1ZXJ5TGlzdDxEd09wdGlvbkxpQ29tcG9uZW50PjtcbiAgQElucHV0KCkgbGlzdE9mRHdPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxEd09wdGlvbkNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGxpc3RPZkR3T3B0aW9uR3JvdXBDb21wb25lbnQ6IFF1ZXJ5TGlzdDxEd09wdGlvbkdyb3VwQ29tcG9uZW50PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAT3V0cHV0KCkgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIGR3TGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPER3T3B0aW9uQ29tcG9uZW50W10+KCk7XG4gIEBPdXRwdXQoKSBkd0NsaWNrT3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQElucHV0KCkgZHdNb2RlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBkd1NlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBkd0ZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIGR3TWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBASW5wdXQoKSBkd05vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xuICB9XG5cbiAgZ2V0IGR3U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBkd0xpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgICAvKiogc2hvdWxkIGNsZWFyIGFjdGl2ZWRPcHRpb24gd2hlbiBsaXN0T2ZTZWxlY3RlZFZhbHVlIGNoYW5nZSAqKi9cbiAgICAgIHRoaXMuY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTtcbiAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgfVxuXG4gIGFkZFRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5kd01heE11bHRpcGxlQ291bnQpIHtcbiAgICAgIHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlID0gWyAuLi50aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdGhpcy5kd1NlYXJjaFZhbHVlIF07XG4gICAgICB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjbGlja09wdGlvbihvcHRpb246IER3T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbiwgaXNQcmVzc0VudGVyKTtcbiAgICB0aGlzLmR3Q2xpY2tPcHRpb24uZW1pdCgpO1xuICB9XG5cbiAgb25LZXlEb3duVWwoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChbIDM4LCA0MCwgMTMgXS5pbmRleE9mKGUua2V5Q29kZSkgPiAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAvLyBhcnJvdyB1cFxuICAgICAgICBjb25zdCBwcmVJbmRleCA9IGFjdGl2ZUluZGV4ID4gMCA/IChhY3RpdmVJbmRleCAtIDEpIDogKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvblsgcHJlSW5kZXggXSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgLy8gYXJyb3cgZG93blxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSBhY3RpdmVJbmRleCA8IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDEgPyAoYWN0aXZlSW5kZXggKyAxKSA6IDA7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uWyBuZXh0SW5kZXggXSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xuICAgICAgICAgIGlmICghdGhpcy5pc0FkZFRhZ09wdGlvbkRpc3BsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24sIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZFRhZ09wdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5kd0NsaWNrT3B0aW9uLmVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNldEFjdGl2ZU9wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBmaXJzdEFjdGl2ZU9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKS5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLmR3VmFsdWUsIHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlWyAwIF0pKTtcbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihmaXJzdEFjdGl2ZU9wdGlvbik7XG4gIH1cblxuICBjbGVhckFjdGl2YXRlZE9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihudWxsKTtcbiAgfVxuXG4gIHNldEFjdGl2ZU9wdGlvbihvcHRpb246IER3T3B0aW9uQ29tcG9uZW50LCBzY3JvbGw6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxpc3RPZkR3T3B0aW9uTGlDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZEd09wdGlvbkxpQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZEd09wdGlvbkxpQ29tcG9uZW50LmZpbmQobyA9PiBvLmR3T3B0aW9uID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgIGlmICh0YXJnZXRPcHRpb24gJiYgdGFyZ2V0T3B0aW9uLmVsICYmIHRhcmdldE9wdGlvbi5lbFsgJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnIF0pIHtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFyZ2V0T3B0aW9uLmVsWyAnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCcgXShmYWxzZSksIDE1MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU2VsZWN0ZWRPcHRpb24ob3B0aW9uOiBEd09wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XG4gICAgLyoqIHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlIC0+IGVtaXQgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlICoqL1xuICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5kd0Rpc2FibGVkKSB7XG4gICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24ob3B0aW9uKTtcbiAgICAgIGxldCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWyAuLi50aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSBdO1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aXBsZU9yVGFncykge1xuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgobywgb3B0aW9uLmR3VmFsdWUpKTtcbiAgICAgICAgaWYgKGlzTm90TmlsKHRhcmdldFZhbHVlKSkge1xuICAgICAgICAgIGlmICghaXNQcmVzc0VudGVyKSB7XG4gICAgICAgICAgICAvKiogc2hvdWxkIG5vdCB0b2dnbGUgb3B0aW9uIHdoZW4gcHJlc3MgZW50ZXIgKiovXG4gICAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnNwbGljZShsaXN0T2ZTZWxlY3RlZFZhbHVlLmluZGV4T2YodGFyZ2V0VmFsdWUpLCAxKTtcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPCB0aGlzLmR3TWF4TXVsdGlwbGVDb3VudCkge1xuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUucHVzaChvcHRpb24uZHdWYWx1ZSk7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuY29tcGFyZVdpdGgobGlzdE9mU2VsZWN0ZWRWYWx1ZVsgMCBdLCBvcHRpb24uZHdWYWx1ZSkpIHtcbiAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsgb3B0aW9uLmR3VmFsdWUgXTtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvKiogdXBkYXRlIHNlbGVjdGVkVmFsdWVzIHdoZW4gY2xpY2sgb3B0aW9uICoqL1xuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGxpc3RPZlNlbGVjdGVkVmFsdWU7XG4gICAgICAgIHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xuICAgICAgLyoqIHJlZnJlc2ggdGFncyBvcHRpb24gKiovXG4gICAgICBjb25zdCBsaXN0T2ZUYWdzT3B0aW9uID0gW107XG4gICAgICB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgZXhpc3RlZE9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5kd1ZhbHVlLCB2YWx1ZSkpO1xuICAgICAgICBpZiAoIWV4aXN0ZWRPcHRpb24pIHtcbiAgICAgICAgICBjb25zdCBkd09wdGlvbkNvbXBvbmVudCA9IG5ldyBEd09wdGlvbkNvbXBvbmVudCgpO1xuICAgICAgICAgIGR3T3B0aW9uQ29tcG9uZW50LmR3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICBkd09wdGlvbkNvbXBvbmVudC5kd0xhYmVsID0gdmFsdWU7XG4gICAgICAgICAgbGlzdE9mVGFnc09wdGlvbi5wdXNoKGR3T3B0aW9uQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RPZlRhZ09wdGlvbiA9IGxpc3RPZlRhZ3NPcHRpb247XG4gICAgfVxuXG4gIH1cblxuICByZWZyZXNoTGlzdE9mQWxsVGVtcGxhdGVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbiA9IHRoaXMubGlzdE9mRHdPcHRpb25Db21wb25lbnQudG9BcnJheSgpLmNvbmNhdCh0aGlzLmxpc3RPZkR3T3B0aW9uR3JvdXBDb21wb25lbnQudG9BcnJheSgpLnJlZHVjZSgocHJlLCBjdXIpID0+IFsgLi4ucHJlLCAuLi5jdXIubGlzdE9mRHdPcHRpb25Db21wb25lbnQudG9BcnJheSgpIF0sIFtdKSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmR3TGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UuZW1pdCh0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKSk7XG4gIH1cblxuICByZWZyZXNoQWxsT3B0aW9uU3RhdHVzKGlzVGVtcGxhdGVPcHRpb25DaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSB8IHVwZGF0ZSBvcHRpb24gbGlzdCAtPiB1cGRhdGUgbGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gLT4gdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBhY3RpdmF0ZWRPcHRpb24gKiovXG4gICAgaWYgKHRoaXMuaXNJbml0KSB7XG4gICAgICBpZiAoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZSkge1xuICAgICAgICB0aGlzLnJlZnJlc2hMaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWZyZXNoTGlzdE9mVGFnT3B0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uID0gbmV3IER3T3B0aW9uUGlwZSgpLnRyYW5zZm9ybSh0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbiksIHRoaXMuZHdTZWFyY2hWYWx1ZSwgdGhpcy5kd0ZpbHRlck9wdGlvbiwgdGhpcy5kd1NlcnZlclNlYXJjaCkgYXMgRHdPcHRpb25Db21wb25lbnRbXTtcbiAgICBpZiAodGhpcy5kd1NlYXJjaFZhbHVlKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvblsgMCBdKTtcbiAgICB9XG4gIH1cblxuICAvKiogd2F0Y2ggb3B0aW9ucyBjaGFuZ2UgaW4gb3B0aW9uIGdyb3VwICoqL1xuICB3YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xuICAgIGxldCBvcHRpb25DaGFuZ2VzJCA9IG1lcmdlKFxuICAgICAgbmV3IFN1YmplY3QoKS5hc09ic2VydmFibGUoKSxcbiAgICAgIHRoaXMubGlzdE9mRHdPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLFxuICAgICAgdGhpcy5saXN0T2ZEd09wdGlvbkNvbXBvbmVudC5jaGFuZ2VzXG4gICAgKTtcbiAgICBpZiAodGhpcy5saXN0T2ZEd09wdGlvbkdyb3VwQ29tcG9uZW50Lmxlbmd0aCkge1xuICAgICAgdGhpcy5saXN0T2ZEd09wdGlvbkdyb3VwQ29tcG9uZW50LmZvckVhY2goZ3JvdXAgPT4gb3B0aW9uQ2hhbmdlcyQgPSBncm91cC5saXN0T2ZEd09wdGlvbkNvbXBvbmVudCA/IG1lcmdlKGdyb3VwLmxpc3RPZkR3T3B0aW9uQ29tcG9uZW50LmNoYW5nZXMsIG9wdGlvbkNoYW5nZXMkKSA6IG9wdGlvbkNoYW5nZXMkKTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24gPSBvcHRpb25DaGFuZ2VzJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKHRydWUpKTtcbiAgfVxuXG4gIHVuc3Vic2NyaWJlR3JvdXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvblN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd01vZGUgPT09ICd0YWdzJztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMuZHdNb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgZ2V0IGlzTm90Rm91bmREaXNwbGF5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNUYWdzTW9kZSkgJiYgKCF0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGgpO1xuICB9XG5cbiAgdXBkYXRlQWRkVGFnT3B0aW9uRGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0T2ZBbGxPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbikubWFwKGl0ZW0gPT4gaXRlbS5kd0xhYmVsKTtcbiAgICBjb25zdCBpc01hdGNoID0gbGlzdE9mQWxsT3B0aW9uLmluZGV4T2YodGhpcy5kd1NlYXJjaFZhbHVlKSA+IC0xO1xuICAgIHRoaXMuaXNBZGRUYWdPcHRpb25EaXNwbGF5ID0gdGhpcy5pc1RhZ3NNb2RlICYmIHRoaXMuZHdTZWFyY2hWYWx1ZSAmJiAoIWlzTWF0Y2gpO1xuICB9XG5cbiAgZHJvcERvd25TY3JvbGwoZTogTW91c2VFdmVudCwgdWw6IEhUTUxVTGlzdEVsZW1lbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodWwgJiYgKHVsLnNjcm9sbEhlaWdodCAtIHVsLnNjcm9sbFRvcCA9PT0gdWwuY2xpZW50SGVpZ2h0KSkge1xuICAgICAgdGhpcy5kd1Njcm9sbFRvQm90dG9tLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyh0cnVlKTtcbiAgICB0aGlzLndhdGNoU3ViT3B0aW9uQ2hhbmdlcygpO1xuICAgIHRoaXMuZ3JvdXBTdWJzY3JpcHRpb24gPSB0aGlzLmxpc3RPZkR3T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlR3JvdXAoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT3B0aW9uKCk7XG4gIH1cbn1cbiJdfQ==
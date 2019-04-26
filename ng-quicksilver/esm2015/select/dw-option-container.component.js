/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { DwOptionComponent } from './dw-option.component';
import { merge, Subject } from 'rxjs';
import { DwOptionLiComponent } from './dw-option-li.component';
import { defaultFilterOption, DwOptionPipe } from './dw-option.pipe';
export class DwOptionContainerComponent {
    constructor() {
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
        this.compareWith = (o1, o2) => o1 === o2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSearchValue(value) {
        this._searchValue = value;
        this.updateAddTagOptionDisplay();
        this.updateListOfFilterOption();
    }
    /**
     * @return {?}
     */
    get dwSearchValue() {
        return this._searchValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwListOfSelectedValue(value) {
        if (this._listOfSelectedValue !== value) {
            this._listOfSelectedValue = value;
            /** should clear activedOption when listOfSelectedValue change **/
            this.clearActivatedOption();
            this.refreshAllOptionStatus(false);
        }
    }
    /**
     * @return {?}
     */
    get dwListOfSelectedValue() {
        return this._listOfSelectedValue;
    }
    /**
     * @return {?}
     */
    addTagOption() {
        if (this.dwListOfSelectedValue.length < this.dwMaxMultipleCount) {
            this.dwListOfSelectedValue = [...this.dwListOfSelectedValue, this.dwSearchValue];
            this.dwListOfSelectedValueChange.emit(this.dwListOfSelectedValue);
        }
    }
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    clickOption(option, isPressEnter) {
        this.updateSelectedOption(option, isPressEnter);
        this.dwClickOption.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownUl(e) {
        if ([38, 40, 13].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            /** @type {?} */
            const activeIndex = this.listOfFilterOption.findIndex(item => item === this.activatedOption);
            if (e.keyCode === 38) {
                /** @type {?} */
                const preIndex = activeIndex > 0 ? (activeIndex - 1) : (this.listOfFilterOption.length - 1);
                this.setActiveOption(this.listOfFilterOption[preIndex]);
            }
            else if (e.keyCode === 40) {
                /** @type {?} */
                const nextIndex = activeIndex < this.listOfFilterOption.length - 1 ? (activeIndex + 1) : 0;
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
    }
    /**
     * @return {?}
     */
    resetActiveOption() {
        /** @type {?} */
        const firstActiveOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).find(item => this.compareWith(item.dwValue, this.dwListOfSelectedValue[0]));
        this.setActiveOption(firstActiveOption);
    }
    /**
     * @return {?}
     */
    clearActivatedOption() {
        this.setActiveOption(null);
    }
    /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    setActiveOption(option, scroll = true) {
        this.activatedOption = option;
        if (scroll) {
            this.scrollIntoView();
        }
    }
    /**
     * @return {?}
     */
    scrollIntoView() {
        if (this.listOfDwOptionLiComponent && this.listOfDwOptionLiComponent.length) {
            /** @type {?} */
            const targetOption = this.listOfDwOptionLiComponent.find(o => o.dwOption === this.activatedOption);
            /* tslint:disable-next-line:no-string-literal */
            if (targetOption && targetOption.el && targetOption.el['scrollIntoViewIfNeeded']) {
                /* tslint:disable-next-line:no-string-literal */
                setTimeout(() => targetOption.el['scrollIntoViewIfNeeded'](false), 150);
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    updateSelectedOption(option, isPressEnter) {
        /** update listOfSelectedOption -> update dwListOfSelectedValue -> emit dwListOfSelectedValueChange **/
        if (option && !option.dwDisabled) {
            /** @type {?} */
            let changed = false;
            this.setActiveOption(option);
            /** @type {?} */
            let listOfSelectedValue = [...this.dwListOfSelectedValue];
            if (this.isMultipleOrTags) {
                /** @type {?} */
                const targetValue = listOfSelectedValue.find(o => this.compareWith(o, option.dwValue));
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
    }
    /**
     * @return {?}
     */
    refreshListOfTagOption() {
        if (this.isTagsMode) {
            /** *
             * refresh tags option *
              @type {?} */
            const listOfTagsOption = [];
            this.dwListOfSelectedValue.forEach(value => {
                /** @type {?} */
                const existedOption = this.listOfAllTemplateOption.find(o => this.compareWith(o.dwValue, value));
                if (!existedOption) {
                    /** @type {?} */
                    const dwOptionComponent = new DwOptionComponent();
                    dwOptionComponent.dwValue = value;
                    dwOptionComponent.dwLabel = value;
                    listOfTagsOption.push(dwOptionComponent);
                }
            });
            this.listOfTagOption = listOfTagsOption;
        }
    }
    /**
     * @return {?}
     */
    refreshListOfAllTemplateOption() {
        this.listOfAllTemplateOption = this.listOfDwOptionComponent.toArray().concat(this.listOfDwOptionGroupComponent.toArray().reduce((pre, cur) => [...pre, ...cur.listOfDwOptionComponent.toArray()], []));
        Promise.resolve().then(() => this.dwListOfTemplateOptionChange.emit(this.listOfAllTemplateOption));
    }
    /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    refreshAllOptionStatus(isTemplateOptionChange) {
        /** update dwListOfSelectedValue | update option list -> update listOfAllTemplateOption -> update listOfSelectedOption -> update activatedOption **/
        if (this.isInit) {
            if (isTemplateOptionChange) {
                this.refreshListOfAllTemplateOption();
            }
            this.refreshListOfTagOption();
            this.updateListOfFilterOption();
            this.updateAddTagOptionDisplay();
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilterOption() {
        this.listOfFilterOption = /** @type {?} */ (new DwOptionPipe().transform(this.listOfAllTemplateOption.concat(this.listOfTagOption), this.dwSearchValue, this.dwFilterOption, this.dwServerSearch));
        if (this.dwSearchValue) {
            this.setActiveOption(this.listOfFilterOption[0]);
        }
    }
    /**
     * watch options change in option group *
     * @return {?}
     */
    watchSubOptionChanges() {
        this.unsubscribeOption();
        /** @type {?} */
        let optionChanges$ = merge(new Subject().asObservable(), this.listOfDwOptionGroupComponent.changes, this.listOfDwOptionComponent.changes);
        if (this.listOfDwOptionGroupComponent.length) {
            this.listOfDwOptionGroupComponent.forEach(group => optionChanges$ = group.listOfDwOptionComponent ? merge(group.listOfDwOptionComponent.changes, optionChanges$) : optionChanges$);
        }
        this.optionSubscription = optionChanges$.subscribe(() => this.refreshAllOptionStatus(true));
    }
    /**
     * @return {?}
     */
    unsubscribeGroup() {
        if (this.groupSubscription) {
            this.groupSubscription.unsubscribe();
            this.groupSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOption() {
        if (this.optionSubscription) {
            this.optionSubscription.unsubscribe();
            this.optionSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    get isTagsMode() {
        return this.dwMode === 'tags';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.dwMode === 'tags' || this.dwMode === 'multiple';
    }
    /**
     * @return {?}
     */
    get isNotFoundDisplay() {
        return (!this.isTagsMode) && (!this.listOfFilterOption.length);
    }
    /**
     * @return {?}
     */
    updateAddTagOptionDisplay() {
        /** @type {?} */
        const listOfAllOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).map(item => item.dwLabel);
        /** @type {?} */
        const isMatch = listOfAllOption.indexOf(this.dwSearchValue) > -1;
        this.isAddTagOptionDisplay = this.isTagsMode && this.dwSearchValue && (!isMatch);
    }
    /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    dropDownScroll(e, ul) {
        e.preventDefault();
        e.stopPropagation();
        if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
            this.dwScrollToBottom.emit();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isInit = true;
        this.refreshAllOptionStatus(true);
        this.watchSubOptionChanges();
        this.groupSubscription = this.listOfDwOptionGroupComponent.changes.subscribe(() => this.watchSubOptionChanges());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeGroup();
        this.unsubscribeOption();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNlbGVjdC9kdy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQztBQU9wRixNQUFNOztzQkFJSyxLQUFLO3FDQUNVLEtBQUs7dUNBQ2tCLEVBQUU7K0JBR1YsRUFBRTtrQ0FDQyxFQUFFOzsyQ0FPSixJQUFJLFlBQVksRUFBUzs0Q0FDeEIsSUFBSSxZQUFZLEVBQXVCOzZCQUN0RCxJQUFJLFlBQVksRUFBUTtnQ0FDckIsSUFBSSxZQUFZLEVBQVE7c0JBQ25DLFNBQVM7OEJBQ0QsS0FBSzs4QkFDVSxtQkFBbUI7a0NBQzlCLFFBQVE7OzJCQUdmLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUU7Ozs7OztJQUV0RCxJQUNJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tB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QUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7WUEzUUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSx1QkFBdUI7Z0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGlqRkFBMkQ7YUFDNUQ7Ozt3Q0FjRSxZQUFZLFNBQUMsbUJBQW1CO3NDQUNoQyxLQUFLOzJDQUNMLEtBQUs7MENBRUwsTUFBTTsyQ0FDTixNQUFNOzRCQUNOLE1BQU07K0JBQ04sTUFBTTtxQkFDTixLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLO29DQVdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IER3T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2R3LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHdPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL2R3LW9wdGlvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEd09wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1vcHRpb24tbGkuY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIER3T3B0aW9uUGlwZSwgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vZHctb3B0aW9uLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tkdy1vcHRpb24tY29udGFpbmVyXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd09wdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBfbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W107XG4gIHByaXZhdGUgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBpc0FkZFRhZ09wdGlvbkRpc3BsYXkgPSBmYWxzZTtcbiAgbGlzdE9mQWxsVGVtcGxhdGVPcHRpb246IER3T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgb3B0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGdyb3VwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGxpc3RPZlRhZ09wdGlvbjogRHdPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBsaXN0T2ZGaWx0ZXJPcHRpb246IER3T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgYWN0aXZhdGVkT3B0aW9uOiBEd09wdGlvbkNvbXBvbmVudDtcbiAgLyoqIGNhbiBub3QgdXNlIFZpZXdDaGlsZCBzaW5jZSBpdCB3aWxsIG1hdGNoIHN1YiBvcHRpb25zIGluIG9wdGlvbiBncm91cCAqKi9cbiAgQFZpZXdDaGlsZHJlbihEd09wdGlvbkxpQ29tcG9uZW50KSBsaXN0T2ZEd09wdGlvbkxpQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdPcHRpb25MaUNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGxpc3RPZkR3T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdPcHRpb25Db21wb25lbnQ+O1xuICBASW5wdXQoKSBsaXN0T2ZEd09wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8RHdPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQE91dHB1dCgpIGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSBkd0xpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEd09wdGlvbkNvbXBvbmVudFtdPigpO1xuICBAT3V0cHV0KCkgZHdDbGlja09wdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIGR3U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIGR3TW9kZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZHdTZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgZHdGaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xuICBASW5wdXQoKSBkd01heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgZHdOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTtcbiAgfVxuXG4gIGdldCBkd1NlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmICh0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgLyoqIHNob3VsZCBjbGVhciBhY3RpdmVkT3B0aW9uIHdoZW4gbGlzdE9mU2VsZWN0ZWRWYWx1ZSBjaGFuZ2UgKiovXG4gICAgICB0aGlzLmNsZWFyQWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWU7XG4gIH1cblxuICBhZGRUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA8IHRoaXMuZHdNYXhNdWx0aXBsZUNvdW50KSB7XG4gICAgICB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsgLi4udGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUsIHRoaXMuZHdTZWFyY2hWYWx1ZSBdO1xuICAgICAgdGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBEd09wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbihvcHRpb24sIGlzUHJlc3NFbnRlcik7XG4gICAgdGhpcy5kd0NsaWNrT3B0aW9uLmVtaXQoKTtcbiAgfVxuXG4gIG9uS2V5RG93blVsKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWyAzOCwgNDAsIDEzIF0uaW5kZXhPZihlLmtleUNvZGUpID4gLTEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24uZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgLy8gYXJyb3cgdXBcbiAgICAgICAgY29uc3QgcHJlSW5kZXggPSBhY3RpdmVJbmRleCA+IDAgPyAoYWN0aXZlSW5kZXggLSAxKSA6ICh0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGggLSAxKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJPcHRpb25bIHByZUluZGV4IF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgIC8vIGFycm93IGRvd25cbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPCB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGggLSAxID8gKGFjdGl2ZUluZGV4ICsgMSkgOiAwO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvblsgbmV4dEluZGV4IF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIC8vIGVudGVyXG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNBZGRUYWdPcHRpb25EaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUYWdPcHRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZHdDbGlja09wdGlvbi5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBY3RpdmVPcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZmlyc3RBY3RpdmVPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbikuZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5kd1ZhbHVlLCB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgMCBdKSk7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24oZmlyc3RBY3RpdmVPcHRpb24pO1xuICB9XG5cbiAgY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24obnVsbCk7XG4gIH1cblxuICBzZXRBY3RpdmVPcHRpb24ob3B0aW9uOiBEd09wdGlvbkNvbXBvbmVudCwgc2Nyb2xsOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxJbnRvVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZEd09wdGlvbkxpQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mRHdPcHRpb25MaUNvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mRHdPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT4gby5kd09wdGlvbiA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiB0YXJnZXRPcHRpb24uZWxbICdzY3JvbGxJbnRvVmlld0lmTmVlZGVkJyBdKSB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldE9wdGlvbi5lbFsgJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnIF0oZmFsc2UpLCAxNTApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbjogRHdPcHRpb25Db21wb25lbnQsIGlzUHJlc3NFbnRlcjogYm9vbGVhbik6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSAtPiBlbWl0IGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSAqKi9cbiAgICBpZiAob3B0aW9uICYmICFvcHRpb24uZHdEaXNhYmxlZCkge1xuICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG9wdGlvbik7XG4gICAgICBsZXQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsgLi4udGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUgXTtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5kd1ZhbHVlKSk7XG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICBpZiAoIWlzUHJlc3NFbnRlcikge1xuICAgICAgICAgICAgLyoqIHNob3VsZCBub3QgdG9nZ2xlIG9wdGlvbiB3aGVuIHByZXNzIGVudGVyICoqL1xuICAgICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zcGxpY2UobGlzdE9mU2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKSwgMSk7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5kd01heE11bHRpcGxlQ291bnQpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLmR3VmFsdWUpO1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbIDAgXSwgb3B0aW9uLmR3VmFsdWUpKSB7XG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbIG9wdGlvbi5kd1ZhbHVlIF07XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLyoqIHVwZGF0ZSBzZWxlY3RlZFZhbHVlcyB3aGVuIGNsaWNrIG9wdGlvbiAqKi9cbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlO1xuICAgICAgICB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xuICAgICAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWZyZXNoTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgIC8qKiByZWZyZXNoIHRhZ3Mgb3B0aW9uICoqL1xuICAgICAgY29uc3QgbGlzdE9mVGFnc09wdGlvbiA9IFtdO1xuICAgICAgdGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uZHdWYWx1ZSwgdmFsdWUpKTtcbiAgICAgICAgaWYgKCFleGlzdGVkT3B0aW9uKSB7XG4gICAgICAgICAgY29uc3QgZHdPcHRpb25Db21wb25lbnQgPSBuZXcgRHdPcHRpb25Db21wb25lbnQoKTtcbiAgICAgICAgICBkd09wdGlvbkNvbXBvbmVudC5kd1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgZHdPcHRpb25Db21wb25lbnQuZHdMYWJlbCA9IHZhbHVlO1xuICAgICAgICAgIGxpc3RPZlRhZ3NPcHRpb24ucHVzaChkd09wdGlvbkNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0T2ZUYWdPcHRpb24gPSBsaXN0T2ZUYWdzT3B0aW9uO1xuICAgIH1cblxuICB9XG5cbiAgcmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZkR3T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKS5jb25jYXQodGhpcy5saXN0T2ZEd09wdGlvbkdyb3VwQ29tcG9uZW50LnRvQXJyYXkoKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiBbIC4uLnByZSwgLi4uY3VyLmxpc3RPZkR3T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKSBdLCBbXSkpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5kd0xpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlLmVtaXQodGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbikpO1xuICB9XG5cbiAgcmVmcmVzaEFsbE9wdGlvblN0YXR1cyhpc1RlbXBsYXRlT3B0aW9uQ2hhbmdlOiBib29sZWFuKTogdm9pZCB7XG4gICAgLyoqIHVwZGF0ZSBkd0xpc3RPZlNlbGVjdGVkVmFsdWUgfCB1cGRhdGUgb3B0aW9uIGxpc3QgLT4gdXBkYXRlIGxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgYWN0aXZhdGVkT3B0aW9uICoqL1xuICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgaWYgKGlzVGVtcGxhdGVPcHRpb25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoTGlzdE9mQWxsVGVtcGxhdGVPcHRpb24oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVmcmVzaExpc3RPZlRhZ09wdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlQWRkVGFnT3B0aW9uRGlzcGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbiA9IG5ldyBEd09wdGlvblBpcGUoKS50cmFuc2Zvcm0odGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLCB0aGlzLmR3U2VhcmNoVmFsdWUsIHRoaXMuZHdGaWx0ZXJPcHRpb24sIHRoaXMuZHdTZXJ2ZXJTZWFyY2gpIGFzIER3T3B0aW9uQ29tcG9uZW50W107XG4gICAgaWYgKHRoaXMuZHdTZWFyY2hWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJPcHRpb25bIDAgXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHdhdGNoIG9wdGlvbnMgY2hhbmdlIGluIG9wdGlvbiBncm91cCAqKi9cbiAgd2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVPcHRpb24oKTtcbiAgICBsZXQgb3B0aW9uQ2hhbmdlcyQgPSBtZXJnZShcbiAgICAgIG5ldyBTdWJqZWN0KCkuYXNPYnNlcnZhYmxlKCksXG4gICAgICB0aGlzLmxpc3RPZkR3T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcyxcbiAgICAgIHRoaXMubGlzdE9mRHdPcHRpb25Db21wb25lbnQuY2hhbmdlc1xuICAgICk7XG4gICAgaWYgKHRoaXMubGlzdE9mRHdPcHRpb25Hcm91cENvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdE9mRHdPcHRpb25Hcm91cENvbXBvbmVudC5mb3JFYWNoKGdyb3VwID0+IG9wdGlvbkNoYW5nZXMkID0gZ3JvdXAubGlzdE9mRHdPcHRpb25Db21wb25lbnQgPyBtZXJnZShncm91cC5saXN0T2ZEd09wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLCBvcHRpb25DaGFuZ2VzJCkgOiBvcHRpb25DaGFuZ2VzJCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uID0gb3B0aW9uQ2hhbmdlcyQuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyh0cnVlKSk7XG4gIH1cblxuICB1bnN1YnNjcmliZUdyb3VwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyb3VwU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZU9wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzVGFnc01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdNb2RlID09PSAndGFncyc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd01vZGUgPT09ICd0YWdzJyB8fCB0aGlzLmR3TW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxuXG4gIGdldCBpc05vdEZvdW5kRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzVGFnc01vZGUpICYmICghdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoKTtcbiAgfVxuXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mQWxsT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLm1hcChpdGVtID0+IGl0ZW0uZHdMYWJlbCk7XG4gICAgY29uc3QgaXNNYXRjaCA9IGxpc3RPZkFsbE9wdGlvbi5pbmRleE9mKHRoaXMuZHdTZWFyY2hWYWx1ZSkgPiAtMTtcbiAgICB0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLmR3U2VhcmNoVmFsdWUgJiYgKCFpc01hdGNoKTtcbiAgfVxuXG4gIGRyb3BEb3duU2Nyb2xsKGU6IE1vdXNlRXZlbnQsIHVsOiBIVE1MVUxpc3RFbGVtZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHVsICYmICh1bC5zY3JvbGxIZWlnaHQgLSB1bC5zY3JvbGxUb3AgPT09IHVsLmNsaWVudEhlaWdodCkpIHtcbiAgICAgIHRoaXMuZHdTY3JvbGxUb0JvdHRvbS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSk7XG4gICAgdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTtcbiAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gdGhpcy5saXN0T2ZEd09wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZUdyb3VwKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xuICB9XG59XG4iXX0=
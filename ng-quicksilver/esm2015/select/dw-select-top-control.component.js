/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class DwSelectTopControlComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._listTemplateOfOption = [];
        this.listOfCachedSelectedOption = [];
        this.isComposing = false;
        // tslint:disable-next-line:no-any
        this.dwListOfSelectedValueChange = new EventEmitter();
        this.dwOnSearch = new EventEmitter();
        this.dwMode = 'default';
        this.dwShowSearch = false;
        this.dwDisabled = false;
        this.dwOpen = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwListOfSelectedValue(value) {
        this._listOfSelectedValue = value;
        this.updateListOfCachedOption();
    }
    /**
     * @return {?}
     */
    get dwListOfSelectedValue() {
        return this._listOfSelectedValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwListTemplateOfOption(value) {
        this._listTemplateOfOption = value;
        this.updateListOfCachedOption();
    }
    /**
     * @return {?}
     */
    get dwListTemplateOfOption() {
        return this._listTemplateOfOption;
    }
    /**
     * cached selected option list *
     * @return {?}
     */
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            /** @type {?} */
            const selectedOption = this.dwListTemplateOfOption.find(o => this.compareWith(o.dwValue, this.dwListOfSelectedValue[0]));
            if (isNotNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            const listOfCachedOptionFromLatestTemplate = this.dwListTemplateOfOption.filter(o => isNotNil(this.dwListOfSelectedValue.find(v => this.compareWith(v, o.dwValue))));
            /** @type {?} */
            const restSelectedValue = this.dwListOfSelectedValue.filter(v => !isNotNil(listOfCachedOptionFromLatestTemplate.find(o => this.compareWith(o.dwValue, v))));
            /** @type {?} */
            const listOfCachedOptionFromOld = this.listOfCachedSelectedOption.filter(o => isNotNil(restSelectedValue.find(v => this.compareWith(o.dwValue, v))));
            this.listOfCachedSelectedOption = listOfCachedOptionFromLatestTemplate.concat(listOfCachedOptionFromOld);
        }
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    setInputValue(value, emit) {
        this.inputValue = value;
        this.updateWidth();
        this.dwOnSearch.emit({ value, emit });
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
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.dwListOfSelectedValue.length ? 'none' : 'block';
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
    get singleValueLabel() {
        return this.getPropertyFromValue(this.dwListOfSelectedValue[0], 'dwLabel');
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
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    getPropertyFromValue(value, prop) {
        /** @type {?} */
        const targetOption = this.listOfCachedSelectedOption.find(item => this.compareWith(item.dwValue, value));
        return targetOption ? targetOption[prop] : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isOptionDisplay(value) {
        return (this.dwMode === 'tags') || !!this.getPropertyFromValue(value, 'dwLabel');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeValueFormSelected(value) {
        if (this.dwDisabled || this.getPropertyFromValue(value, 'dwDisabled')) {
            return;
        }
        this._listOfSelectedValue = this.dwListOfSelectedValue.filter(item => item !== value);
        this.dwListOfSelectedValueChange.emit(this.dwListOfSelectedValue);
    }
    /**
     * @return {?}
     */
    updateWidth() {
        if (this.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
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
        if (this.isMultipleOrTags &&
            !eventTarget.value &&
            // BackSpace
            keyCode === 8) {
            e.preventDefault();
            if (this.dwListOfSelectedValue.length) {
                this.removeValueFormSelected(this.dwListOfSelectedValue[this.dwListOfSelectedValue.length - 1]);
            }
        }
    }
}
DwSelectTopControlComponent.decorators = [
    { type: Component, args: [{
                selector: '[dw-select-top-control]',
                preserveWhitespaces: false,
                animations: [
                    trigger('tagAnimation', [
                        state('*', style({ opacity: 1, transform: 'scale(1)' })),
                        transition('void => *', [
                            style({ opacity: 0, transform: 'scale(0)' }),
                            animate('150ms linear')
                        ]),
                        state('void', style({ opacity: 0, transform: 'scale(0)' })),
                        transition('* => void', [
                            style({ opacity: 1, transform: 'scale(1)' }),
                            animate('150ms linear')
                        ])
                    ])
                ],
                template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"something-new\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (input)=\"updateWidth()\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event,true)\"\n    [disabled]=\"dwDisabled\">\n</ng-template>\n<div\n  *ngIf=\"dwPlaceHolder\"\n  dw-select-unselectable\n  [style.display]=\"placeHolderDisplay\"\n  (click)=\"focusOnInput()\"\n  class=\"ant-select-selection__placeholder\">{{ dwPlaceHolder }}</div>\n<!--single mode-->\n<ng-container *ngIf=\"isSingleMode\">\n  <!--selected label-->\n  <div\n    *ngIf=\"dwListOfSelectedValue.length\"\n    class=\"ant-select-selection-selected-value\"\n    [attr.title]=\"dwListOfSelectedValue[0].dwLabel\"\n    [ngStyle]=\"selectedValueDisplay\">\n    {{ singleValueLabel }}\n  </div>\n  <!--show search-->\n  <div\n    *ngIf=\"dwShowSearch\"\n    class=\"ant-select-search ant-select-search--inline\">\n    <div class=\"ant-select-search__field__wrap\">\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n    </div>\n  </div>\n</ng-container>\n<!--multiple or tags mode-->\n<ul *ngIf=\"isMultipleOrTags\">\n  <ng-container *ngFor=\"let value of dwListOfSelectedValue\">\n    <li\n      *ngIf=\"isOptionDisplay(value)\"\n      [@tagAnimation]\n      [attr.title]=\"getPropertyFromValue(value,'dwLabel')\"\n      [class.ant-select-selection__choice__disabled]=\"getPropertyFromValue(value,'dwDisabled')\"\n      class=\"ant-select-selection__choice\">\n      <div class=\"ant-select-selection__choice__content\">{{ getPropertyFromValue(value, 'dwLabel') || value }}</div>\n      <span *ngIf=\"!getPropertyFromValue(value,'dwDisabled')\" class=\"ant-select-selection__choice__remove\" (click)=\"removeValueFormSelected(value)\"></span>\n    </li>\n  </ng-container>\n\n  <li class=\"ant-select-search ant-select-search--inline\">\n    <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n  </li>\n</ul>",
                host: {
                    '[class.ant-select-selection__rendered]': 'true'
                }
            }] }
];
/** @nocollapse */
DwSelectTopControlComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DwSelectTopControlComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    dwListOfSelectedValueChange: [{ type: Output }],
    dwOnSearch: [{ type: Output }],
    dwMode: [{ type: Input }],
    dwShowSearch: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    dwPlaceHolder: [{ type: Input }],
    dwOpen: [{ type: Input }],
    compareWith: [{ type: Input }],
    dwListOfSelectedValue: [{ type: Input }],
    dwListTemplateOfOption: [{ type: Input }]
};
function DwSelectTopControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSelectTopControlComponent.prototype._listOfSelectedValue;
    /** @type {?} */
    DwSelectTopControlComponent.prototype._listTemplateOfOption;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.listOfCachedSelectedOption;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.inputValue;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.isComposing;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.inputElement;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.dwListOfSelectedValueChange;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.dwOnSearch;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.dwMode;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.dwShowSearch;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.dwDisabled;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.dwPlaceHolder;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.dwOpen;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.compareWith;
    /** @type {?} */
    DwSelectTopControlComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUF5QjlDLE1BQU07Ozs7SUEwSkosWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQ0F2SmMsRUFBRTswQ0FDTCxFQUFFOzJCQUV0QyxLQUFLOzsyQ0FHcUIsSUFBSSxZQUFZLEVBQVM7MEJBQzFDLElBQUksWUFBWSxFQUFvQztzQkFDekQsU0FBUzs0QkFDSCxLQUFLOzBCQUNQLEtBQUs7c0JBR1QsS0FBSztLQTRJdEI7Ozs7O0lBeElELElBRUkscUJBQXFCLENBQUMsS0FBWTtRQUNwQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBR0QsSUFBSSxxQkFBcUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7S0FDbEM7Ozs7O0lBRUQsSUFDSSxzQkFBc0IsQ0FBQyxLQUEwQjtRQUNuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7S0FDbkM7Ozs7O0lBR0Qsd0JBQXdCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFDckIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNILElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsMEJBQTBCLEdBQUcsQ0FBRSxjQUFjLENBQUUsQ0FBQzthQUN0RDtTQUNGO2FBQU07O1lBQ0wsTUFBTSxvQ0FBb0MsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ3JLLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG9DQUFvQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFDNUosTUFBTSx5QkFBeUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNySixJQUFJLENBQUMsMEJBQTBCLEdBQUcsb0NBQW9DLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDMUc7S0FDRjs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFhO1FBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQztLQUNsQzs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUM7S0FDN0Q7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztLQUNwRzs7OztJQUVELElBQUksb0JBQW9COztRQUN0QixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQzs7UUFDOUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLGlCQUFpQixHQUFHLElBQUksQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxpQkFBaUIsRUFBRTtvQkFDckIsT0FBTyxHQUFHLEdBQUcsQ0FBQztpQkFDZjthQUNGO2lCQUFNO2dCQUNMLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUMxQjtTQUNGO1FBQ0QsT0FBTztZQUNMLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzdDLE9BQU8sRUFBRSxHQUFHLE9BQU8sRUFBRTtTQUN0QixDQUFDO0tBQ0g7Ozs7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUUsQ0FBQyxDQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDOUU7Ozs7SUFFRCxZQUFZO1FBQ1YsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDekM7U0FDRixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBR0Qsb0JBQW9CLENBQUMsS0FBVSxFQUFFLElBQVk7O1FBQzNDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RyxPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7S0FDakQ7Ozs7O0lBR0QsZUFBZSxDQUFDLEtBQVU7UUFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDbEY7Ozs7O0lBR0QsdUJBQXVCLENBQUMsS0FBVTtRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyRSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBQ25FOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7YUFDdEg7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDckU7U0FDRjtLQUNGOzs7OztJQUVELGNBQWMsQ0FBQyxDQUFnQjs7UUFDN0IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7UUFDMUIsTUFBTSxXQUFXLHFCQUFHLENBQUMsQ0FBQyxNQUEwQixFQUFDO1FBQ2pELElBQ0UsSUFBSSxDQUFDLGdCQUFnQjtZQUNyQixDQUFDLFdBQVcsQ0FBQyxLQUFLOztZQUVsQixPQUFPLEtBQUssQ0FBQyxFQUNiO1lBQ0EsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRTtnQkFDckMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUM7YUFDbkc7U0FDRjtLQUNGOzs7WUE5S0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSx5QkFBeUI7Z0JBQzlDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFVBQVUsRUFBVztvQkFDbkIsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDdEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO3dCQUN4RCxVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQzs0QkFDNUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzt5QkFDeEIsQ0FBQzt3QkFDRixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7d0JBQzNELFVBQVUsQ0FBQyxXQUFXLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDOzRCQUM1QyxPQUFPLENBQUMsY0FBYyxDQUFDO3lCQUN4QixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QseXBFQUE2RDtnQkFDN0QsSUFBSSxFQUFpQjtvQkFDbkIsd0NBQXdDLEVBQUUsTUFBTTtpQkFDakQ7YUFDRjs7OztZQXpCNEQsU0FBUzs7OzJCQWlDbkUsU0FBUyxTQUFDLGNBQWM7MENBRXhCLE1BQU07eUJBQ04sTUFBTTtxQkFDTixLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFFTCxLQUFLO3FCQUNMLEtBQUs7MEJBRUwsS0FBSztvQ0FFTCxLQUFLO3FDQVlMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IER3T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1vcHRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbZHctc2VsZWN0LXRvcC1jb250cm9sXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcigndGFnQW5pbWF0aW9uJywgW1xuICAgICAgc3RhdGUoJyonLCBzdHlsZSh7IG9wYWNpdHk6IDEsIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pLFxuICAgICAgICBhbmltYXRlKCcxNTBtcyBsaW5lYXInKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGxpbmVhcicpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZF0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEd1NlbGVjdFRvcENvbnRyb2xDb21wb25lbnQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgX2xpc3RPZlNlbGVjdGVkVmFsdWU6IGFueVtdO1xuICBwcml2YXRlIF9saXN0VGVtcGxhdGVPZk9wdGlvbjogRHdPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjogRHdPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBpbnB1dFZhbHVlOiBzdHJpbmc7XG4gIGlzQ29tcG9zaW5nID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAT3V0cHV0KCkgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIGR3T25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbiB9PigpO1xuICBASW5wdXQoKSBkd01vZGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGR3U2hvd1NlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBkd0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZHdQbGFjZUhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBkd09wZW4gPSBmYWxzZTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aDogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSkge1xuICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0xpc3RUZW1wbGF0ZU9mT3B0aW9uKHZhbHVlOiBEd09wdGlvbkNvbXBvbmVudFtdKSB7XG4gICAgdGhpcy5fbGlzdFRlbXBsYXRlT2ZPcHRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpO1xuICB9XG5cbiAgZ2V0IGR3TGlzdFRlbXBsYXRlT2ZPcHRpb24oKTogRHdPcHRpb25Db21wb25lbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RUZW1wbGF0ZU9mT3B0aW9uO1xuICB9XG5cbiAgLyoqIGNhY2hlZCBzZWxlY3RlZCBvcHRpb24gbGlzdCAqKi9cbiAgdXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmR3TGlzdFRlbXBsYXRlT2ZPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5kd1ZhbHVlLCB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgMCBdKSk7XG4gICAgICBpZiAoaXNOb3ROaWwoc2VsZWN0ZWRPcHRpb24pKSB7XG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBbIHNlbGVjdGVkT3B0aW9uIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxpc3RPZkNhY2hlZE9wdGlvbkZyb21MYXRlc3RUZW1wbGF0ZSA9IHRoaXMuZHdMaXN0VGVtcGxhdGVPZk9wdGlvbi5maWx0ZXIobyA9PiBpc05vdE5pbCh0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBvLmR3VmFsdWUpKSkpO1xuICAgICAgY29uc3QgcmVzdFNlbGVjdGVkVmFsdWUgPSB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIodiA9PiAhaXNOb3ROaWwobGlzdE9mQ2FjaGVkT3B0aW9uRnJvbUxhdGVzdFRlbXBsYXRlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uZHdWYWx1ZSwgdikpKSk7XG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tT2xkID0gdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5maWx0ZXIobyA9PiBpc05vdE5pbChyZXN0U2VsZWN0ZWRWYWx1ZS5maW5kKHYgPT4gdGhpcy5jb21wYXJlV2l0aChvLmR3VmFsdWUsIHYpKSkpO1xuICAgICAgdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbiA9IGxpc3RPZkNhY2hlZE9wdGlvbkZyb21MYXRlc3RUZW1wbGF0ZS5jb25jYXQobGlzdE9mQ2FjaGVkT3B0aW9uRnJvbU9sZCk7XG4gICAgfVxuICB9XG5cbiAgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgIHRoaXMuZHdPblNlYXJjaC5lbWl0KHsgdmFsdWUsIGVtaXQgfSk7XG4gIH1cblxuICBnZXQgaXNTaW5nbGVNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3TW9kZSA9PT0gJ2RlZmF1bHQnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdNb2RlID09PSAndGFncycgfHwgdGhpcy5kd01vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cblxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA/ICdub25lJyA6ICdibG9jayc7XG4gIH1cblxuICBnZXQgc2VsZWN0ZWRWYWx1ZURpc3BsYXkoKTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9IHtcbiAgICBsZXQgc2hvd1NlbGVjdGVkVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgaWYgKCF0aGlzLmR3U2hvd1NlYXJjaCkge1xuICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kd09wZW4pIHtcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhKHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nKTtcbiAgICAgICAgaWYgKHNob3dTZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgb3BhY2l0eSA9IDAuNDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGlzcGxheTogc2hvd1NlbGVjdGVkVmFsdWUgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgb3BhY2l0eTogYCR7b3BhY2l0eX1gXG4gICAgfTtcbiAgfVxuXG4gIGdldCBzaW5nbGVWYWx1ZUxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHlGcm9tVmFsdWUodGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWVbIDAgXSwgJ2R3TGFiZWwnKTtcbiAgfVxuXG4gIGZvY3VzT25JbnB1dCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldFByb3BlcnR5RnJvbVZhbHVlKHZhbHVlOiBhbnksIHByb3A6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdGFyZ2V0T3B0aW9uID0gdGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbi5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLmR3VmFsdWUsIHZhbHVlKSk7XG4gICAgcmV0dXJuIHRhcmdldE9wdGlvbiA/IHRhcmdldE9wdGlvblsgcHJvcCBdIDogJyc7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGlzT3B0aW9uRGlzcGxheSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmR3TW9kZSA9PT0gJ3RhZ3MnKSB8fCAhIXRoaXMuZ2V0UHJvcGVydHlGcm9tVmFsdWUodmFsdWUsICdkd0xhYmVsJyk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0Rpc2FibGVkIHx8IHRoaXMuZ2V0UHJvcGVydHlGcm9tVmFsdWUodmFsdWUsICdkd0Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcbiAgICB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJlxuICAgICAgIWV2ZW50VGFyZ2V0LnZhbHVlICYmXG4gICAgICAvLyBCYWNrU3BhY2VcbiAgICAgIGtleUNvZGUgPT09IDhcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZCh0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgdGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMSBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblxuICB9XG59XG4iXX0=
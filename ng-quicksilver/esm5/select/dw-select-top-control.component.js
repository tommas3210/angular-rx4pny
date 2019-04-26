/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
var DwSelectTopControlComponent = /** @class */ (function () {
    function DwSelectTopControlComponent(renderer) {
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
    Object.defineProperty(DwSelectTopControlComponent.prototype, "dwListOfSelectedValue", {
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
            this._listOfSelectedValue = value;
            this.updateListOfCachedOption();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSelectTopControlComponent.prototype, "dwListTemplateOfOption", {
        get: /**
         * @return {?}
         */
        function () {
            return this._listTemplateOfOption;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._listTemplateOfOption = value;
            this.updateListOfCachedOption();
        },
        enumerable: true,
        configurable: true
    });
    /** cached selected option list **/
    /**
     * cached selected option list *
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.updateListOfCachedOption = /**
     * cached selected option list *
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isSingleMode) {
            /** @type {?} */
            var selectedOption = this.dwListTemplateOfOption.find(function (o) { return _this.compareWith(o.dwValue, _this.dwListOfSelectedValue[0]); });
            if (isNotNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            /** @type {?} */
            var listOfCachedOptionFromLatestTemplate_1 = this.dwListTemplateOfOption.filter(function (o) { return isNotNil(_this.dwListOfSelectedValue.find(function (v) { return _this.compareWith(v, o.dwValue); })); });
            /** @type {?} */
            var restSelectedValue_1 = this.dwListOfSelectedValue.filter(function (v) { return !isNotNil(listOfCachedOptionFromLatestTemplate_1.find(function (o) { return _this.compareWith(o.dwValue, v); })); });
            /** @type {?} */
            var listOfCachedOptionFromOld = this.listOfCachedSelectedOption.filter(function (o) { return isNotNil(restSelectedValue_1.find(function (v) { return _this.compareWith(o.dwValue, v); })); });
            this.listOfCachedSelectedOption = listOfCachedOptionFromLatestTemplate_1.concat(listOfCachedOptionFromOld);
        }
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.setInputValue = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        this.inputValue = value;
        this.updateWidth();
        this.dwOnSearch.emit({ value: value, emit: emit });
    };
    Object.defineProperty(DwSelectTopControlComponent.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwMode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSelectTopControlComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwMode === 'tags' || this.dwMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSelectTopControlComponent.prototype, "placeHolderDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inputValue || this.isComposing || this.dwListOfSelectedValue.length ? 'none' : 'block';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSelectTopControlComponent.prototype, "selectedValueDisplay", {
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
    Object.defineProperty(DwSelectTopControlComponent.prototype, "singleValueLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.getPropertyFromValue(this.dwListOfSelectedValue[0], 'dwLabel');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.focusOnInput = /**
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
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.getPropertyFromValue = /**
     * @param {?} value
     * @param {?} prop
     * @return {?}
     */
    function (value, prop) {
        var _this = this;
        /** @type {?} */
        var targetOption = this.listOfCachedSelectedOption.find(function (item) { return _this.compareWith(item.dwValue, value); });
        return targetOption ? targetOption[prop] : '';
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.isOptionDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (this.dwMode === 'tags') || !!this.getPropertyFromValue(value, 'dwLabel');
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.removeValueFormSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.dwDisabled || this.getPropertyFromValue(value, 'dwDisabled')) {
            return;
        }
        this._listOfSelectedValue = this.dwListOfSelectedValue.filter(function (item) { return item !== value; });
        this.dwListOfSelectedValueChange.emit(this.dwListOfSelectedValue);
    };
    /**
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        if (this.isMultipleOrTags && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwSelectTopControlComponent.prototype.onKeyDownInput = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var keyCode = e.keyCode;
        /** @type {?} */
        var eventTarget = /** @type {?} */ (e.target);
        if (this.isMultipleOrTags &&
            !eventTarget.value &&
            // BackSpace
            keyCode === 8) {
            e.preventDefault();
            if (this.dwListOfSelectedValue.length) {
                this.removeValueFormSelected(this.dwListOfSelectedValue[this.dwListOfSelectedValue.length - 1]);
            }
        }
    };
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
    DwSelectTopControlComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
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
    return DwSelectTopControlComponent;
}());
export { DwSelectTopControlComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2VsZWN0LXRvcC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2VsZWN0L2R3LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBbUw1QyxxQ0FBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztxQ0F2SmMsRUFBRTswQ0FDTCxFQUFFOzJCQUV0QyxLQUFLOzsyQ0FHcUIsSUFBSSxZQUFZLEVBQVM7MEJBQzFDLElBQUksWUFBWSxFQUFvQztzQkFDekQsU0FBUzs0QkFDSCxLQUFLOzBCQUNQLEtBQUs7c0JBR1QsS0FBSztLQTRJdEI7SUF4SUQsc0JBRUksOERBQXFCO1FBS3pCLGtDQUFrQzs7OztRQUNsQztZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDOzs7OztRQVZELFVBRTBCLEtBQVk7WUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNqQzs7O09BQUE7SUFPRCxzQkFDSSwrREFBc0I7Ozs7UUFLMUI7WUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQzs7Ozs7UUFSRCxVQUMyQixLQUEwQjtZQUNuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ2pDOzs7T0FBQTtJQU1ELG1DQUFtQzs7Ozs7SUFDbkMsOERBQXdCOzs7O0lBQXhCO1FBQUEsaUJBWUM7UUFYQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBQ3JCLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixDQUFFLENBQUMsQ0FBRSxDQUFDLEVBQTVELENBQTRELENBQUMsQ0FBQztZQUMzSCxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUUsY0FBYyxDQUFFLENBQUM7YUFDdEQ7U0FDRjthQUFNOztZQUNMLElBQU0sc0NBQW9DLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUMsRUFBOUUsQ0FBOEUsQ0FBQyxDQUFDOztZQUNySyxJQUFNLG1CQUFpQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLFFBQVEsQ0FBQyxzQ0FBb0MsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQyxFQUF6RixDQUF5RixDQUFDLENBQUM7O1lBQzVKLElBQU0seUJBQXlCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxtQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQyxFQUFyRSxDQUFxRSxDQUFDLENBQUM7WUFDckosSUFBSSxDQUFDLDBCQUEwQixHQUFHLHNDQUFvQyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzFHO0tBQ0Y7Ozs7OztJQUVELG1EQUFhOzs7OztJQUFiLFVBQWMsS0FBYSxFQUFFLElBQWE7UUFDeEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsc0JBQUkscURBQVk7Ozs7UUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO1NBQ2xDOzs7T0FBQTtJQUVELHNCQUFJLHlEQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUM7U0FDN0Q7OztPQUFBO0lBRUQsc0JBQUksMkRBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDcEc7OztPQUFBO0lBRUQsc0JBQUksNkRBQW9COzs7O1FBQXhCOztZQUNFLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDOztZQUM5QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLGlCQUFpQixHQUFHLElBQUksQ0FBQzthQUMxQjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLGlCQUFpQixFQUFFO3dCQUNyQixPQUFPLEdBQUcsR0FBRyxDQUFDO3FCQUNmO2lCQUNGO3FCQUFNO29CQUNMLGlCQUFpQixHQUFHLElBQUksQ0FBQztpQkFDMUI7YUFDRjtZQUNELE9BQU87Z0JBQ0wsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU07Z0JBQzdDLE9BQU8sRUFBRSxLQUFHLE9BQVM7YUFDdEIsQ0FBQztTQUNIOzs7T0FBQTtJQUVELHNCQUFJLHlEQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBRSxDQUFDLENBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM5RTs7O09BQUE7Ozs7SUFFRCxrREFBWTs7O0lBQVo7UUFBQSxpQkFNQztRQUxDLFVBQVUsQ0FBQztZQUNULElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDekM7U0FDRixDQUFDLENBQUM7S0FDSjtJQUVELGtDQUFrQzs7Ozs7O0lBQ2xDLDBEQUFvQjs7Ozs7SUFBcEIsVUFBcUIsS0FBVSxFQUFFLElBQVk7UUFBN0MsaUJBR0M7O1FBRkMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO1FBQ3pHLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUNqRDtJQUVELGtDQUFrQzs7Ozs7SUFDbEMscURBQWU7Ozs7SUFBZixVQUFnQixLQUFVO1FBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2xGO0lBRUQsa0NBQWtDOzs7OztJQUNsQyw2REFBdUI7Ozs7SUFBdkIsVUFBd0IsS0FBVTtRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyRSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxLQUFLLEVBQWQsQ0FBYyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztLQUNuRTs7OztJQUVELGlEQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLE9BQUksQ0FBQyxDQUFDO2FBQ3RIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3JFO1NBQ0Y7S0FDRjs7Ozs7SUFFRCxvREFBYzs7OztJQUFkLFVBQWUsQ0FBZ0I7O1FBQzdCLElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7O1FBQzFCLElBQU0sV0FBVyxxQkFBRyxDQUFDLENBQUMsTUFBMEIsRUFBQztRQUNqRCxJQUNFLElBQUksQ0FBQyxnQkFBZ0I7WUFDckIsQ0FBQyxXQUFXLENBQUMsS0FBSzs7WUFFbEIsT0FBTyxLQUFLLENBQUMsRUFDYjtZQUNBLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDO2FBQ25HO1NBQ0Y7S0FDRjs7Z0JBOUtGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEseUJBQXlCO29CQUM5QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixVQUFVLEVBQVc7d0JBQ25CLE9BQU8sQ0FBQyxjQUFjLEVBQUU7NEJBQ3RCLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQzs0QkFDeEQsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0NBQzVDLE9BQU8sQ0FBQyxjQUFjLENBQUM7NkJBQ3hCLENBQUM7NEJBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDOzRCQUMzRCxVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsQ0FBQztnQ0FDNUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzs2QkFDeEIsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELHlwRUFBNkQ7b0JBQzdELElBQUksRUFBaUI7d0JBQ25CLHdDQUF3QyxFQUFFLE1BQU07cUJBQ2pEO2lCQUNGOzs7O2dCQXpCNEQsU0FBUzs7OytCQWlDbkUsU0FBUyxTQUFDLGNBQWM7OENBRXhCLE1BQU07NkJBQ04sTUFBTTt5QkFDTixLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FFTCxLQUFLO3lCQUNMLEtBQUs7OEJBRUwsS0FBSzt3Q0FFTCxLQUFLO3lDQVlMLEtBQUs7O3NDQWpFUjs7U0FpQ2EsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBEd09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZHctb3B0aW9uLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW2R3LXNlbGVjdC10b3AtY29udHJvbF0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ3RhZ0FuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgbGluZWFyJylcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDApJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSwgdHJhbnNmb3JtOiAnc2NhbGUoMSknIH0pLFxuICAgICAgICBhbmltYXRlKCcxNTBtcyBsaW5lYXInKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1zZWxlY3QtdG9wLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWRdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9saXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXTtcbiAgcHJpdmF0ZSBfbGlzdFRlbXBsYXRlT2ZPcHRpb246IER3T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IER3T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xuICBpc0NvbXBvc2luZyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQE91dHB1dCgpIGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSBkd09uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlOiBzdHJpbmcsIGVtaXQ6IGJvb2xlYW4gfT4oKTtcbiAgQElucHV0KCkgZHdNb2RlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBkd1Nob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgZHdEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGR3UGxhY2VIb2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgZHdPcGVuID0gZmFsc2U7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgY29tcGFyZVdpdGg6IChvMTogYW55LCBvMjogYW55KSA9PiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSh2YWx1ZTogYW55W10pIHtcbiAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IGR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMaXN0VGVtcGxhdGVPZk9wdGlvbih2YWx1ZTogRHdPcHRpb25Db21wb25lbnRbXSkge1xuICAgIHRoaXMuX2xpc3RUZW1wbGF0ZU9mT3B0aW9uID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZDYWNoZWRPcHRpb24oKTtcbiAgfVxuXG4gIGdldCBkd0xpc3RUZW1wbGF0ZU9mT3B0aW9uKCk6IER3T3B0aW9uQ29tcG9uZW50W10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0VGVtcGxhdGVPZk9wdGlvbjtcbiAgfVxuXG4gIC8qKiBjYWNoZWQgc2VsZWN0ZWQgb3B0aW9uIGxpc3QgKiovXG4gIHVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5kd0xpc3RUZW1wbGF0ZU9mT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8uZHdWYWx1ZSwgdGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWVbIDAgXSkpO1xuICAgICAgaWYgKGlzTm90TmlsKHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gWyBzZWxlY3RlZE9wdGlvbiBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUgPSB0aGlzLmR3TGlzdFRlbXBsYXRlT2ZPcHRpb24uZmlsdGVyKG8gPT4gaXNOb3ROaWwodGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgby5kd1ZhbHVlKSkpKTtcbiAgICAgIGNvbnN0IHJlc3RTZWxlY3RlZFZhbHVlID0gdGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKHYgPT4gIWlzTm90TmlsKGxpc3RPZkNhY2hlZE9wdGlvbkZyb21MYXRlc3RUZW1wbGF0ZS5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLmR3VmFsdWUsIHYpKSkpO1xuICAgICAgY29uc3QgbGlzdE9mQ2FjaGVkT3B0aW9uRnJvbU9sZCA9IHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uZmlsdGVyKG8gPT4gaXNOb3ROaWwocmVzdFNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgoby5kd1ZhbHVlLCB2KSkpKTtcbiAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBsaXN0T2ZDYWNoZWRPcHRpb25Gcm9tTGF0ZXN0VGVtcGxhdGUuY29uY2F0KGxpc3RPZkNhY2hlZE9wdGlvbkZyb21PbGQpO1xuICAgIH1cbiAgfVxuXG4gIHNldElucHV0VmFsdWUodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgICB0aGlzLmR3T25TZWFyY2guZW1pdCh7IHZhbHVlLCBlbWl0IH0pO1xuICB9XG5cbiAgZ2V0IGlzU2luZ2xlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kd01vZGUgPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3TW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMuZHdNb2RlID09PSAnbXVsdGlwbGUnO1xuICB9XG5cbiAgZ2V0IHBsYWNlSG9sZGVyRGlzcGxheSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyB8fCB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZS5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSB7XG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG9wYWNpdHkgPSAxO1xuICAgIGlmICghdGhpcy5kd1Nob3dTZWFyY2gpIHtcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZHdPcGVuKSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxuICAgIH07XG4gIH1cblxuICBnZXQgc2luZ2xlVmFsdWVMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlWyAwIF0sICdkd0xhYmVsJyk7XG4gIH1cblxuICBmb2N1c09uSW5wdXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRQcm9wZXJ0eUZyb21WYWx1ZSh2YWx1ZTogYW55LCBwcm9wOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5kd1ZhbHVlLCB2YWx1ZSkpO1xuICAgIHJldHVybiB0YXJnZXRPcHRpb24gPyB0YXJnZXRPcHRpb25bIHByb3AgXSA6ICcnO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBpc09wdGlvbkRpc3BsYXkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5kd01vZGUgPT09ICd0YWdzJykgfHwgISF0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHZhbHVlLCAnZHdMYWJlbCcpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICByZW1vdmVWYWx1ZUZvcm1TZWxlY3RlZCh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCB8fCB0aGlzLmdldFByb3BlcnR5RnJvbVZhbHVlKHZhbHVlLCAnZHdEaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XG4gICAgdGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmR3TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5pbnB1dFZhbHVlIHx8IHRoaXMuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRofXB4YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bklucHV0KGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoXG4gICAgICB0aGlzLmlzTXVsdGlwbGVPclRhZ3MgJiZcbiAgICAgICFldmVudFRhcmdldC52YWx1ZSAmJlxuICAgICAgLy8gQmFja1NwYWNlXG4gICAgICBrZXlDb2RlID09PSA4XG4gICAgKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5kd0xpc3RPZlNlbGVjdGVkVmFsdWVbIHRoaXMuZHdMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDEgXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxufVxuIl19
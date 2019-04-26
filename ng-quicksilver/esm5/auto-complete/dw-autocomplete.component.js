/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, NgZone, Output, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { defer, merge } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { DwAutocompleteOptionComponent } from './dw-autocomplete-option.component';
/**
 * @record
 */
export function AutocompleteDataSourceItem() { }
function AutocompleteDataSourceItem_tsickle_Closure_declarations() {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
var DwAutocompleteComponent = /** @class */ (function () {
    function DwAutocompleteComponent(changeDetectorRef, _ngZone) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this._ngZone = _ngZone;
        this.activeItemIndex = -1;
        this.showPanel = false;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this._defaultActiveFirstOption = true;
        this._backfill = false;
        /**
         * 选择时发出的事件
         */
        this.selectionChange = new EventEmitter();
        /**
         * 用于组件内部监听 options 的选择变化
         */
        this.optionSelectionChanges = defer(function () {
            if (_this.options) {
                return merge.apply(void 0, tslib_1.__spread(_this.options.map(function (option) { return option.selectionChange; })));
            }
            return _this._ngZone.onStable
                .asObservable()
                .pipe(take(1), switchMap(function () { return _this.optionSelectionChanges; }));
        });
    }
    Object.defineProperty(DwAutocompleteComponent.prototype, "options", {
        /** 组件支持设置 dataSource 和 content 设置 options
         *  这个属性为其提供方便的访问方式 */
        get: /**
         * 组件支持设置 dataSource 和 content 设置 options
         *  这个属性为其提供方便的访问方式
         * @return {?}
         */
        function () {
            // 优先使用 dataSource
            if (this.dwDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAutocompleteComponent.prototype, "dwDefaultActiveFirstOption", {
        /** 是否默认高亮第一个选项，默认 `true` */
        get: /**
         * 是否默认高亮第一个选项，默认 `true`
         * @return {?}
         */
        function () {
            return this._defaultActiveFirstOption;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._defaultActiveFirstOption = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAutocompleteComponent.prototype, "dwBackfill", {
        /** 使用键盘选择选项的时候把选中项回填到输入框中，默认 `false` */
        get: /**
         * 使用键盘选择选项的时候把选中项回填到输入框中，默认 `false`
         * @return {?}
         */
        function () {
            return this._backfill;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._backfill = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwAutocompleteComponent.prototype, "dwDataSource", {
        /** 自动完成的数据源 */
        get: /**
         * 自动完成的数据源
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dataSource = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.optionsInit();
    };
    /**
     * @return {?}
     */
    DwAutocompleteComponent.prototype.setVisibility = /**
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DwAutocompleteComponent.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    DwAutocompleteComponent.prototype.setNextItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    /**
     * @return {?}
     */
    DwAutocompleteComponent.prototype.setPreviousItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    DwAutocompleteComponent.prototype.getOptionIndex = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /**
     * @return {?}
     */
    DwAutocompleteComponent.prototype.optionsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        var changes = this.dwDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // 用于处理动态/异步的 options
        changes.subscribe(function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout(function (_) { return _this.setVisibility(); });
            }
            _this.subscribeOptionChanges();
        });
    };
    /**
     * 清除 Options 的激活状态
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    DwAutocompleteComponent.prototype.clearSelectedOptions = /**
     * 清除 Options 的激活状态
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach(function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    };
    /**
     * @return {?}
     */
    DwAutocompleteComponent.prototype.subscribeOptionChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter(function (event) { return event.isUserInput; }))
            .subscribe(function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        });
    };
    DwAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-autocomplete',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<ng-template>\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\n    #panel\n    [@dropDownAnimation]=\"dropDownPosition\"\n    [class.ant-select-dropdown-hidden]=\"!showPanel\">\n    <div style=\"overflow: auto;\">\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n        role=\"menu\"\n        aria-activedescendant>\n        <ng-template *ngTemplateOutlet=\"dwDataSource ? optionsTemplate : contentTemplate\"></ng-template>\n      </ul>\n    </div>\n  </div>\n  <ng-template #contentTemplate>\n    <ng-content></ng-content>\n  </ng-template>\n  <ng-template #optionsTemplate>\n    <dw-auto-option *ngFor=\"let option of dwDataSource\" [dwValue]=\"option\">{{option}}</dw-auto-option>\n  </ng-template>\n</ng-template>",
                    styles: ["\n    .ant-select-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    DwAutocompleteComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    DwAutocompleteComponent.propDecorators = {
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        panel: [{ type: ViewChild, args: ['panel',] }],
        content: [{ type: ViewChild, args: ['content',] }],
        fromContentOptions: [{ type: ContentChildren, args: [DwAutocompleteOptionComponent, { descendants: true },] }],
        fromDataSourceOptions: [{ type: ViewChildren, args: [DwAutocompleteOptionComponent,] }],
        dwWidth: [{ type: Input }],
        dwDefaultActiveFirstOption: [{ type: Input }],
        dwBackfill: [{ type: Input }],
        dwDataSource: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    return DwAutocompleteComponent;
}());
export { DwAutocompleteComponent };
function DwAutocompleteComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAutocompleteComponent.prototype.activeItemIndex;
    /** @type {?} */
    DwAutocompleteComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    DwAutocompleteComponent.prototype.showPanel;
    /** @type {?} */
    DwAutocompleteComponent.prototype.isOpen;
    /** @type {?} */
    DwAutocompleteComponent.prototype.activeItem;
    /** @type {?} */
    DwAutocompleteComponent.prototype.dropDownPosition;
    /**
     * 提供给 cdk-overlay 用于渲染
     * @type {?}
     */
    DwAutocompleteComponent.prototype.template;
    /** @type {?} */
    DwAutocompleteComponent.prototype.panel;
    /** @type {?} */
    DwAutocompleteComponent.prototype.content;
    /**
     * 由 Content 提供 options
     * @type {?}
     */
    DwAutocompleteComponent.prototype.fromContentOptions;
    /**
     * 由 dwDataSource 提供 options
     * @type {?}
     */
    DwAutocompleteComponent.prototype.fromDataSourceOptions;
    /**
     * 自定义宽度单位 px
     * @type {?}
     */
    DwAutocompleteComponent.prototype.dwWidth;
    /** @type {?} */
    DwAutocompleteComponent.prototype._defaultActiveFirstOption;
    /** @type {?} */
    DwAutocompleteComponent.prototype._backfill;
    /** @type {?} */
    DwAutocompleteComponent.prototype._dataSource;
    /**
     * 选择时发出的事件
     * @type {?}
     */
    DwAutocompleteComponent.prototype.selectionChange;
    /**
     * 用于组件内部监听 options 的选择变化
     * @type {?}
     */
    DwAutocompleteComponent.prototype.optionSelectionChanges;
    /** @type {?} */
    DwAutocompleteComponent.prototype.changeDetectorRef;
    /** @type {?} */
    DwAutocompleteComponent.prototype._ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9kdy1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUFFLFlBQVksRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQTJCLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7OztJQWtIMUcsaUNBQW9CLGlCQUFvQyxFQUFVLE9BQWU7UUFBakYsaUJBQ0M7UUFEbUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7K0JBbkYvQyxDQUFDLENBQUM7eUJBR2YsS0FBSztzQkFDUixLQUFLO2dDQUV5QixRQUFRO3lDQXNDbkIsSUFBSTt5QkFZcEIsS0FBSzs7OzsrQkFlK0MsSUFBSSxZQUFZLEVBQWlDOzs7O3NDQUduRCxLQUFLLENBQUM7WUFDM0UsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixPQUFPLEtBQUssZ0NBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsZUFBZSxFQUF0QixDQUFzQixDQUFDLEdBQUU7YUFDckU7WUFDRCxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtpQkFDM0IsWUFBWSxFQUFFO2lCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsc0JBQXNCLEVBQTNCLENBQTJCLENBQUMsQ0FBQyxDQUFDO1NBQzlELENBQUM7S0FHRDtJQTFFRCxzQkFBSSw0Q0FBTztRQUZYOzhCQUNzQjs7Ozs7O1FBQ3RCOztZQUVFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDaEM7U0FDRjs7O09BQUE7SUFrQkQsc0JBQ0ksK0RBQTBCO1FBRjlCLDRCQUE0Qjs7Ozs7UUFDNUI7WUFFRSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztTQUN2Qzs7Ozs7UUFFRCxVQUErQixLQUFjO1lBQzNDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkQ7OztPQUpBO0lBU0Qsc0JBQ0ksK0NBQVU7UUFGZCx3Q0FBd0M7Ozs7O1FBQ3hDO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQUVELFVBQWUsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BSkE7SUFTRCxzQkFDSSxpREFBWTtRQUZoQixlQUFlOzs7OztRQUNmO1lBRUUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQUVELFVBQWlCLEtBQTZCO1lBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCOzs7T0FKQTs7OztJQXdCRCxpREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCwrQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDdkM7Ozs7O0lBRUQsK0NBQWE7Ozs7SUFBYixVQUFjLEtBQWE7O1FBQ3pCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDbkQsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjs7OztJQUVELG1EQUFpQjs7O0lBQWpCOztRQUNFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsdURBQXFCOzs7SUFBckI7O1FBQ0UsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBRUQsZ0RBQWM7Ozs7SUFBZCxVQUFlLE1BQXFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFjLEVBQUUsT0FBc0MsRUFBRSxLQUFhO1lBQy9GLE9BQU8sTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDakYsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNmOzs7O0lBRU8sNkNBQVc7Ozs7O1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzs7UUFDOUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzs7UUFHekcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDM0IsVUFBVSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUM7YUFDdkM7WUFDRCxLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUMvQixDQUFDLENBQUM7Ozs7Ozs7O0lBTUcsc0RBQW9COzs7Ozs7Y0FBQyxJQUFvQyxFQUFFLFFBQXlCO1FBQXpCLHlCQUFBLEVBQUEsZ0JBQXlCO1FBQzFGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUN6QixJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLElBQUksUUFBUSxFQUFFO29CQUNaLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDbkI7Z0JBQ0QsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDNUI7U0FDRixDQUFDLENBQUM7Ozs7O0lBR0csd0RBQXNCOzs7OztRQUM1QixJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQjthQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBOEIsSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQUMsQ0FBQzthQUNuRSxTQUFTLENBQUMsVUFBQyxLQUE4QjtZQUN4QyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDL0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDLENBQUMsQ0FBQzs7O2dCQXRMTixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtvQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELFVBQVUsRUFBVzt3QkFDbkIsaUJBQWlCO3FCQUNsQjtvQkFDRCxvMUJBQXVEOzZCQUVyRCwrS0FTQztpQkFFSjs7OztnQkE5Q0MsaUJBQWlCO2dCQUtWLE1BQU07OzsyQkErRFosU0FBUyxTQUFDLFdBQVc7d0JBRXJCLFNBQVMsU0FBQyxPQUFPOzBCQUNqQixTQUFTLFNBQUMsU0FBUztxQ0FHbkIsZUFBZSxTQUFDLDZCQUE2QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTt3Q0FHcEUsWUFBWSxTQUFDLDZCQUE2QjswQkFHMUMsS0FBSzs2Q0FHTCxLQUFLOzZCQVlMLEtBQUs7K0JBWUwsS0FBSztrQ0FZTCxNQUFNOztrQ0ExSFQ7O1NBa0RhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZmVyLCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIER3T3B0aW9uU2VsZWN0aW9uQ2hhbmdlIH0gZnJvbSAnLi9kdy1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZUl0ZW0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBdXRvY29tcGxldGVEYXRhU291cmNlID0gQXV0b2NvbXBsZXRlRGF0YVNvdXJjZUl0ZW1bXSB8IHN0cmluZ1tdIHwgbnVtYmVyW107XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctYXV0b2NvbXBsZXRlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBhY3RpdmVJdGVtSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHNob3dQYW5lbDogYm9vbGVhbiA9IGZhbHNlO1xuICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWN0aXZlSXRlbTogRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ7XG4gIGRyb3BEb3duUG9zaXRpb246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuXG4gIC8qKiDnu4Tku7bmlK/mjIHorr7nva4gZGF0YVNvdXJjZSDlkowgY29udGVudCDorr7nva4gb3B0aW9uc1xuICAgKiAg6L+Z5Liq5bGe5oCn5Li65YW25o+Q5L6b5pa55L6/55qE6K6/6Zeu5pa55byPICovXG4gIGdldCBvcHRpb25zKCk6IFF1ZXJ5TGlzdDxEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4ge1xuICAgIC8vIOS8mOWFiOS9v+eUqCBkYXRhU291cmNlXG4gICAgaWYgKHRoaXMuZHdEYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5mcm9tRGF0YVNvdXJjZU9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmZyb21Db250ZW50T3B0aW9ucztcbiAgICB9XG4gIH1cblxuICAvKiog5o+Q5L6b57uZIGNkay1vdmVybGF5IOeUqOS6jua4suafkyAqL1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+O1xuXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJykgcGFuZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIC8qKiDnlLEgQ29udGVudCDmj5Dkvpsgb3B0aW9ucyAqL1xuICBAQ29udGVudENoaWxkcmVuKER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGZyb21Db250ZW50T3B0aW9uczogUXVlcnlMaXN0PER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcblxuICAvKiog55SxIGR3RGF0YVNvdXJjZSDmj5Dkvpsgb3B0aW9ucyAqL1xuICBAVmlld0NoaWxkcmVuKER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSBmcm9tRGF0YVNvdXJjZU9wdGlvbnM6IFF1ZXJ5TGlzdDxEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XG5cbiAgLyoqIOiHquWumuS5ieWuveW6puWNleS9jSBweCAqL1xuICBASW5wdXQoKSBkd1dpZHRoOiBudW1iZXI7XG5cbiAgLyoqIOaYr+WQpum7mOiupOmrmOS6ruesrOS4gOS4qumAiemhue+8jOm7mOiupCBgdHJ1ZWAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGR3RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb247XG4gIH1cblxuICBzZXQgZHdEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgX2RlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIOS9v+eUqOmUruebmOmAieaLqemAiemhueeahOaXtuWAmeaKiumAieS4remhueWbnuWhq+WIsOi+k+WFpeahhuS4re+8jOm7mOiupCBgZmFsc2VgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkd0JhY2tmaWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9iYWNrZmlsbDtcbiAgfVxuXG4gIHNldCBkd0JhY2tmaWxsKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYmFja2ZpbGwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgX2JhY2tmaWxsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIOiHquWKqOWujOaIkOeahOaVsOaNrua6kCAqL1xuICBASW5wdXQoKVxuICBnZXQgZHdEYXRhU291cmNlKCk6IEF1dG9jb21wbGV0ZURhdGFTb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU291cmNlO1xuICB9XG5cbiAgc2V0IGR3RGF0YVNvdXJjZSh2YWx1ZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZSkge1xuICAgIHRoaXMuX2RhdGFTb3VyY2UgPSB2YWx1ZTtcbiAgfVxuXG4gIF9kYXRhU291cmNlOiBBdXRvY29tcGxldGVEYXRhU291cmNlO1xuXG4gIC8qKiDpgInmi6nml7blj5Hlh7rnmoTkuovku7YgKi9cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+KCk7XG5cbiAgLyoqIOeUqOS6jue7hOS7tuWGhemDqOebkeWQrCBvcHRpb25zIOeahOmAieaLqeWPmOWMliAqL1xuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPER3T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiA9IGRlZmVyKCgpID0+IHtcbiAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gbWVyZ2UoLi4udGhpcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGlvbkNoYW5nZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbmdab25lLm9uU3RhYmxlXG4gICAgLmFzT2JzZXJ2YWJsZSgpXG4gICAgLnBpcGUodGFrZSgxKSwgc3dpdGNoTWFwKCgpID0+IHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcykpO1xuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnNJbml0KCk7XG4gIH1cblxuICBzZXRWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd1BhbmVsID0gISF0aGlzLm9wdGlvbnMubGVuZ3RoO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZXRBY3RpdmVJdGVtKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBhY3RpdmVJdGVtID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKVsgaW5kZXggXTtcbiAgICBpZiAoYWN0aXZlSXRlbSAmJiAhYWN0aXZlSXRlbS5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGFjdGl2ZUl0ZW07XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGVkT3B0aW9ucyh0aGlzLmFjdGl2ZUl0ZW0pO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgPD0gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgPyB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgOiAwO1xuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShuZXh0SW5kZXgpO1xuICB9XG5cbiAgc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzSW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDEgPCAwID8gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUl0ZW1JbmRleCAtIDE7XG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKHByZXZpb3VzSW5kZXgpO1xuICB9XG5cbiAgZ2V0T3B0aW9uSW5kZXgob3B0aW9uOiBEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWR1Y2UoKHJlc3VsdDogbnVtYmVyLCBjdXJyZW50OiBEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gKG9wdGlvbiA9PT0gY3VycmVudCA/IGluZGV4IDogdW5kZWZpbmVkKSA6IHJlc3VsdDtcbiAgICB9LCB1bmRlZmluZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpb25zSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcbiAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5kd0RhdGFTb3VyY2UgPyB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucy5jaGFuZ2VzIDogdGhpcy5mcm9tQ29udGVudE9wdGlvbnMuY2hhbmdlcztcblxuICAgIC8vIOeUqOS6juWkhOeQhuWKqOaAgS/lvILmraXnmoQgb3B0aW9uc1xuICAgIGNoYW5nZXMuc3Vic2NyaWJlKGUgPT4ge1xuICAgICAgaWYgKCFlLmRpcnR5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoXyA9PiB0aGlzLnNldFZpc2liaWxpdHkoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaQgT3B0aW9ucyDnmoTmv4DmtLvnirbmgIFcbiAgICovXG4gIHByaXZhdGUgY2xlYXJTZWxlY3RlZE9wdGlvbnMoc2tpcD86IER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBkZXNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIGlmIChvcHRpb24gIT09IHNraXApIHtcbiAgICAgICAgaWYgKGRlc2VsZWN0KSB7XG4gICAgICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXNcbiAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBEd09wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4gZXZlbnQuaXNVc2VySW5wdXQpKVxuICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBEd09wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xuICAgICAgZXZlbnQuc291cmNlLnNlbGVjdCgpO1xuICAgICAgZXZlbnQuc291cmNlLnNldEFjdGl2ZVN0eWxlcygpO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtID0gZXZlbnQuc291cmNlO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSB0aGlzLmdldE9wdGlvbkluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0ZWRPcHRpb25zKGV2ZW50LnNvdXJjZSwgdHJ1ZSk7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGV2ZW50LnNvdXJjZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export class DwAutocompleteComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} _ngZone
     */
    constructor(changeDetectorRef, _ngZone) {
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
        this.optionSelectionChanges = defer(() => {
            if (this.options) {
                return merge(...this.options.map(option => option.selectionChange));
            }
            return this._ngZone.onStable
                .asObservable()
                .pipe(take(1), switchMap(() => this.optionSelectionChanges));
        });
    }
    /**
     * 组件支持设置 dataSource 和 content 设置 options
     *  这个属性为其提供方便的访问方式
     * @return {?}
     */
    get options() {
        // 优先使用 dataSource
        if (this.dwDataSource) {
            return this.fromDataSourceOptions;
        }
        else {
            return this.fromContentOptions;
        }
    }
    /**
     * 是否默认高亮第一个选项，默认 `true`
     * @return {?}
     */
    get dwDefaultActiveFirstOption() {
        return this._defaultActiveFirstOption;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDefaultActiveFirstOption(value) {
        this._defaultActiveFirstOption = toBoolean(value);
    }
    /**
     * 使用键盘选择选项的时候把选中项回填到输入框中，默认 `false`
     * @return {?}
     */
    get dwBackfill() {
        return this._backfill;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwBackfill(value) {
        this._backfill = toBoolean(value);
    }
    /**
     * 自动完成的数据源
     * @return {?}
     */
    get dwDataSource() {
        return this._dataSource;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDataSource(value) {
        this._dataSource = value;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.optionsInit();
    }
    /**
     * @return {?}
     */
    setVisibility() {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveItem(index) {
        /** @type {?} */
        const activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    setNextItemActive() {
        /** @type {?} */
        const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    }
    /**
     * @return {?}
     */
    setPreviousItemActive() {
        /** @type {?} */
        const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionIndex(option) {
        return this.options.reduce((result, current, index) => {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    }
    /**
     * @return {?}
     */
    optionsInit() {
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        const changes = this.dwDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // 用于处理动态/异步的 options
        changes.subscribe(e => {
            if (!e.dirty && this.isOpen) {
                setTimeout(_ => this.setVisibility());
            }
            this.subscribeOptionChanges();
        });
    }
    /**
     * 清除 Options 的激活状态
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    clearSelectedOptions(skip, deselect = false) {
        this.options.forEach(option => {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        });
    }
    /**
     * @return {?}
     */
    subscribeOptionChanges() {
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((event) => event.isUserInput))
            .subscribe((event) => {
            event.source.select();
            event.source.setActiveStyles();
            this.activeItem = event.source;
            this.activeItemIndex = this.getOptionIndex(this.activeItem);
            this.clearSelectedOptions(event.source, true);
            this.selectionChange.emit(event.source);
        });
    }
}
DwAutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-autocomplete',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    dropDownAnimation
                ],
                template: "<ng-template>\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\n    #panel\n    [@dropDownAnimation]=\"dropDownPosition\"\n    [class.ant-select-dropdown-hidden]=\"!showPanel\">\n    <div style=\"overflow: auto;\">\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n        role=\"menu\"\n        aria-activedescendant>\n        <ng-template *ngTemplateOutlet=\"dwDataSource ? optionsTemplate : contentTemplate\"></ng-template>\n      </ul>\n    </div>\n  </div>\n  <ng-template #contentTemplate>\n    <ng-content></ng-content>\n  </ng-template>\n  <ng-template #optionsTemplate>\n    <dw-auto-option *ngFor=\"let option of dwDataSource\" [dwValue]=\"option\">{{option}}</dw-auto-option>\n  </ng-template>\n</ng-template>",
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
DwAutocompleteComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9kdy1hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUFFLE1BQU0sRUFDYixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQUUsWUFBWSxFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBMkIsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7QUE4QjVHLE1BQU07Ozs7O0lBb0ZKLFlBQW9CLGlCQUFvQyxFQUFVLE9BQWU7UUFBN0Qsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7K0JBbkYvQyxDQUFDLENBQUM7eUJBR2YsS0FBSztzQkFDUixLQUFLO2dDQUV5QixRQUFRO3lDQXNDbkIsSUFBSTt5QkFZcEIsS0FBSzs7OzsrQkFlK0MsSUFBSSxZQUFZLEVBQWlDOzs7O3NDQUduRCxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2hGLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMs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TCxLQUFLOzhCQVlMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LCBOZ1pvbmUsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZlciwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcbmltcG9ydCB7IER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBEd09wdGlvblNlbGVjdGlvbkNoYW5nZSB9IGZyb20gJy4vZHctYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZSA9IEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtW10gfCBzdHJpbmdbXSB8IG51bWJlcltdO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWF1dG9jb21wbGV0ZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICBkcm9wRG93bkFuaW1hdGlvblxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYFxuICAgIC5hbnQtc2VsZWN0LWRyb3Bkb3duIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3QXV0b2NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgYWN0aXZlSXRlbUluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBzaG93UGFuZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIGFjdGl2ZUl0ZW06IER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50O1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcblxuICAvKiog57uE5Lu25pSv5oyB6K6+572uIGRhdGFTb3VyY2Ug5ZKMIGNvbnRlbnQg6K6+572uIG9wdGlvbnNcbiAgICogIOi/meS4quWxnuaAp+S4uuWFtuaPkOS+m+aWueS+v+eahOiuv+mXruaWueW8jyAqL1xuICBnZXQgb3B0aW9ucygpOiBRdWVyeUxpc3Q8RHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+IHtcbiAgICAvLyDkvJjlhYjkvb/nlKggZGF0YVNvdXJjZVxuICAgIGlmICh0aGlzLmR3RGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZnJvbURhdGFTb3VyY2VPcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5mcm9tQ29udGVudE9wdGlvbnM7XG4gICAgfVxuICB9XG5cbiAgLyoqIOaPkOS+m+e7mSBjZGstb3ZlcmxheSDnlKjkuo7muLLmn5MgKi9cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcblxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudDogRWxlbWVudFJlZjtcblxuICAvKiog55SxIENvbnRlbnQg5o+Q5L6bIG9wdGlvbnMgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBmcm9tQ29udGVudE9wdGlvbnM6IFF1ZXJ5TGlzdDxEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD47XG5cbiAgLyoqIOeUsSBkd0RhdGFTb3VyY2Ug5o+Q5L6bIG9wdGlvbnMgKi9cbiAgQFZpZXdDaGlsZHJlbihEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkgZnJvbURhdGFTb3VyY2VPcHRpb25zOiBRdWVyeUxpc3Q8RHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ+O1xuXG4gIC8qKiDoh6rlrprkuYnlrr3luqbljZXkvY0gcHggKi9cbiAgQElucHV0KCkgZHdXaWR0aDogbnVtYmVyO1xuXG4gIC8qKiDmmK/lkKbpu5jorqTpq5jkuq7nrKzkuIDkuKrpgInpobnvvIzpu5jorqQgYHRydWVgICovXG4gIEBJbnB1dCgpXG4gIGdldCBkd0RlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uO1xuICB9XG5cbiAgc2V0IGR3RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIF9kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiDkvb/nlKjplK7nm5jpgInmi6npgInpobnnmoTml7blgJnmiorpgInkuK3pobnlm57loavliLDovpPlhaXmoYbkuK3vvIzpu5jorqQgYGZhbHNlYCAqL1xuICBASW5wdXQoKVxuICBnZXQgZHdCYWNrZmlsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYmFja2ZpbGw7XG4gIH1cblxuICBzZXQgZHdCYWNrZmlsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2JhY2tmaWxsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIF9iYWNrZmlsbDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiDoh6rliqjlrozmiJDnmoTmlbDmja7mupAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGR3RGF0YVNvdXJjZSgpOiBBdXRvY29tcGxldGVEYXRhU291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNvdXJjZTtcbiAgfVxuXG4gIHNldCBkd0RhdGFTb3VyY2UodmFsdWU6IEF1dG9jb21wbGV0ZURhdGFTb3VyY2UpIHtcbiAgICB0aGlzLl9kYXRhU291cmNlID0gdmFsdWU7XG4gIH1cblxuICBfZGF0YVNvdXJjZTogQXV0b2NvbXBsZXRlRGF0YVNvdXJjZTtcblxuICAvKiog6YCJ5oup5pe25Y+R5Ye655qE5LqL5Lu2ICovXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2U6IEV2ZW50RW1pdHRlcjxEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PigpO1xuXG4gIC8qKiDnlKjkuo7nu4Tku7blhoXpg6jnm5HlkKwgb3B0aW9ucyDnmoTpgInmi6nlj5jljJYgKi9cbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxEd09wdGlvblNlbGVjdGlvbkNoYW5nZT4gPSBkZWZlcigoKSA9PiB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgcmV0dXJuIG1lcmdlKC4uLnRoaXMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5zZWxlY3Rpb25DaGFuZ2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX25nWm9uZS5vblN0YWJsZVxuICAgIC5hc09ic2VydmFibGUoKVxuICAgIC5waXBlKHRha2UoMSksIHN3aXRjaE1hcCgoKSA9PiB0aGlzLm9wdGlvblNlbGVjdGlvbkNoYW5nZXMpKTtcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zSW5pdCgpO1xuICB9XG5cbiAgc2V0VmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dQYW5lbCA9ICEhdGhpcy5vcHRpb25zLmxlbmd0aDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2V0QWN0aXZlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMub3B0aW9ucy50b0FycmF5KClbIGluZGV4IF07XG4gICAgaWYgKGFjdGl2ZUl0ZW0gJiYgIWFjdGl2ZUl0ZW0uYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBhY3RpdmVJdGVtO1xuICAgICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnModGhpcy5hY3RpdmVJdGVtKTtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0TmV4dEl0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5hY3RpdmVJdGVtSW5kZXggKyAxIDw9IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxID8gdGhpcy5hY3RpdmVJdGVtSW5kZXggKyAxIDogMDtcbiAgICB0aGlzLnNldEFjdGl2ZUl0ZW0obmV4dEluZGV4KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzSXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5hY3RpdmVJdGVtSW5kZXggLSAxIDwgMCA/IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxIDogdGhpcy5hY3RpdmVJdGVtSW5kZXggLSAxO1xuICAgIHRoaXMuc2V0QWN0aXZlSXRlbShwcmV2aW91c0luZGV4KTtcbiAgfVxuXG4gIGdldE9wdGlvbkluZGV4KG9wdGlvbjogRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVkdWNlKChyZXN1bHQ6IG51bWJlciwgY3VycmVudDogRHdBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IChvcHRpb24gPT09IGN1cnJlbnQgPyBpbmRleCA6IHVuZGVmaW5lZCkgOiByZXN1bHQ7XG4gICAgfSwgdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgb3B0aW9uc0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWaXNpYmlsaXR5KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk7XG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZHdEYXRhU291cmNlID8gdGhpcy5mcm9tRGF0YVNvdXJjZU9wdGlvbnMuY2hhbmdlcyA6IHRoaXMuZnJvbUNvbnRlbnRPcHRpb25zLmNoYW5nZXM7XG5cbiAgICAvLyDnlKjkuo7lpITnkIbliqjmgIEv5byC5q2l55qEIG9wdGlvbnNcbiAgICBjaGFuZ2VzLnN1YnNjcmliZShlID0+IHtcbiAgICAgIGlmICghZS5kaXJ0eSAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgICBzZXRUaW1lb3V0KF8gPT4gdGhpcy5zZXRWaXNpYmlsaXR5KCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5riF6ZmkIE9wdGlvbnMg55qE5r+A5rS754q25oCBXG4gICAqL1xuICBwcml2YXRlIGNsZWFyU2VsZWN0ZWRPcHRpb25zKHNraXA/OiBEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgZGVzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBpZiAob3B0aW9uICE9PSBza2lwKSB7XG4gICAgICAgIGlmIChkZXNlbGVjdCkge1xuICAgICAgICAgIG9wdGlvbi5kZXNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5zZXRJbmFjdGl2ZVN0eWxlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzXG4gICAgLnBpcGUoZmlsdGVyKChldmVudDogRHdPcHRpb25TZWxlY3Rpb25DaGFuZ2UpID0+IGV2ZW50LmlzVXNlcklucHV0KSlcbiAgICAuc3Vic2NyaWJlKChldmVudDogRHdPcHRpb25TZWxlY3Rpb25DaGFuZ2UpID0+IHtcbiAgICAgIGV2ZW50LnNvdXJjZS5zZWxlY3QoKTtcbiAgICAgIGV2ZW50LnNvdXJjZS5zZXRBY3RpdmVTdHlsZXMoKTtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGV2ZW50LnNvdXJjZTtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5nZXRPcHRpb25JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGVkT3B0aW9ucyhldmVudC5zb3VyY2UsIHRydWUpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdChldmVudC5zb3VyY2UpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
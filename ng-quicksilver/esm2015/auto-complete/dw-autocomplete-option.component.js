/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class DwOptionSelectionChange {
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
    }
}
function DwOptionSelectionChange_tsickle_Closure_declarations() {
    /** @type {?} */
    DwOptionSelectionChange.prototype.source;
    /** @type {?} */
    DwOptionSelectionChange.prototype.isUserInput;
}
export class DwAutocompleteOptionComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} element
     */
    constructor(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.disabled = false;
        this.active = false;
        this.selected = false;
        this.selectionChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this.disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this.disabled = toBoolean(value);
    }
    /**
     * 选择
     * @return {?}
     */
    select() {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    }
    /**
     * 取消选择
     * @return {?}
     */
    deselect() {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    }
    /**
     * 获取用于显示的 label
     * @return {?}
     */
    getLabel() {
        return this.dwLabel || this.dwValue.toString();
    }
    /**
     * 设置激活样式 (仅限样式)
     * @return {?}
     */
    setActiveStyles() {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * 设置非激活样式 (仅限样式)
     * @return {?}
     */
    setInactiveStyles() {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    scrollIntoViewIfNeeded() {
        /* tslint:disable-next-line:no-string-literal */
        if (this.element.nativeElement && this.element.nativeElement['scrollIntoViewIfNeeded']) {
            /* tslint:disable-next-line:no-string-literal */
            setTimeout(() => this.element.nativeElement['scrollIntoViewIfNeeded'](false), 150);
        }
    }
    /**
     * @param {?=} isUserInput
     * @return {?}
     */
    emitSelectionChangeEvent(isUserInput = false) {
        this.selectionChange.emit(new DwOptionSelectionChange(this, isUserInput));
    }
    /**
     * @return {?}
     */
    selectViaInteraction() {
        if (!this.disabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    }
}
DwAutocompleteOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-auto-option',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-content></ng-content>",
                host: {
                    'role': 'menuitem',
                    'class': 'ant-select-dropdown-menu-item',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                    '[class.ant-select-dropdown-menu-item-active]': 'active',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'dwDisabled',
                    '[attr.aria-selected]': 'selected.toString()',
                    '[attr.aria-disabled]': 'dwDisabled.toString()',
                    '(click)': 'selectViaInteraction()'
                }
            }] }
];
/** @nocollapse */
DwAutocompleteOptionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
DwAutocompleteOptionComponent.propDecorators = {
    dwValue: [{ type: Input }],
    dwLabel: [{ type: Input }],
    dwDisabled: [{ type: Input }],
    selectionChange: [{ type: Output }]
};
function DwAutocompleteOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.disabled;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.selected;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.dwValue;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.dwLabel;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.changeDetectorRef;
    /** @type {?} */
    DwAutocompleteOptionComponent.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImF1dG8tY29tcGxldGUvZHctYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUNuQyxLQUFLLEVBQUUsTUFBTSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxNQUFNOzs7OztJQUNKLFlBQ1MsUUFDQSxjQUF1QixLQUFLO1FBRDVCLFdBQU0sR0FBTixNQUFNO1FBQ04sZ0JBQVcsR0FBWCxXQUFXO0tBRW5CO0NBQ0Y7Ozs7Ozs7QUFrQkQsTUFBTTs7Ozs7SUFxQkosWUFBb0IsaUJBQW9DLEVBQVUsT0FBbUI7UUFBakUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7d0JBcEJsRSxLQUFLO3NCQUVmLEtBQUs7d0JBQ0gsS0FBSzsrQkFlWSxJQUFJLFlBQVksRUFBMkI7S0FHdEU7Ozs7SUFaRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFRRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDOzs7OztJQUdELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7S0FDakM7Ozs7O0lBR0QsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2hEOzs7OztJQUdELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFHRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjs7OztJQUVELHNCQUFzQjs7UUFFcEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFOztZQUV0RixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUUsd0JBQXdCLENBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN2RjtLQUNGOzs7OztJQUVPLHdCQUF3QixDQUFDLGNBQXVCLEtBQUs7UUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFHNUUsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN2QztLQUNGOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxnQkFBZ0I7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxxQ0FBOEQ7Z0JBQzlELElBQUksRUFBaUI7b0JBQ25CLE1BQU0sRUFBNEMsVUFBVTtvQkFDNUQsT0FBTyxFQUEyQywrQkFBK0I7b0JBQ2pGLGdEQUFnRCxFQUFFLFVBQVU7b0JBQzVELDhDQUE4QyxFQUFJLFFBQVE7b0JBQzFELGdEQUFnRCxFQUFFLFlBQVk7b0JBQzlELHNCQUFzQixFQUE0QixxQkFBcUI7b0JBQ3ZFLHNCQUFzQixFQUE0Qix1QkFBdUI7b0JBQ3pFLFNBQVMsRUFBeUMsd0JBQXdCO2lCQUMzRTthQUNGOzs7O1lBOUJDLGlCQUFpQjtZQUNOLFVBQVU7OztzQkFxQ3BCLEtBQUs7c0JBQ0wsS0FBSzt5QkFFTCxLQUFLOzhCQVNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmV4cG9ydCBjbGFzcyBEd09wdGlvblNlbGVjdGlvbkNoYW5nZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzb3VyY2U6IER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LFxuICAgIHB1YmxpYyBpc1VzZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctYXV0by1vcHRpb24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdyb2xlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ21lbnVpdGVtJyxcbiAgICAnY2xhc3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXScgIDogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnZHdEaXNhYmxlZCcsXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2VsZWN0ZWQudG9TdHJpbmcoKScsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnZHdEaXNhYmxlZC50b1N0cmluZygpJyxcbiAgICAnKGNsaWNrKScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWxlY3RWaWFJbnRlcmFjdGlvbigpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGFjdGl2ZSA9IGZhbHNlO1xuICBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQElucHV0KCkgZHdWYWx1ZTogYW55O1xuICBASW5wdXQoKSBkd0xhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHdPcHRpb25TZWxlY3Rpb25DaGFuZ2U+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgLyoqIOmAieaLqSAqL1xuICBzZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCgpO1xuICB9XG5cbiAgLyoqIOWPlua2iOmAieaLqSAqL1xuICBkZXNlbGVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCgpO1xuICB9XG5cbiAgLyoqIOiOt+WPlueUqOS6juaYvuekuueahCBsYWJlbCAqL1xuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmR3TGFiZWwgfHwgdGhpcy5kd1ZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKiog6K6+572u5r+A5rS75qC35byPICjku4XpmZDmoLflvI8pICovXG4gIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDorr7nva7pnZ7mv4DmtLvmoLflvI8gKOS7hemZkOagt+W8jykgKi9cbiAgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgIGlmICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFsnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCddKSB7XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50WyAnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCcgXShmYWxzZSksIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoaXNVc2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobmV3IER3T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKHRoaXMsIGlzVXNlcklucHV0KSk7XG4gIH1cblxuICBzZWxlY3RWaWFJbnRlcmFjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCh0cnVlKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOWN_ARROW, ENTER, ESCAPE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { forwardRef, Directive, ElementRef, Inject, Input, Optional, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { delay, distinct, map } from 'rxjs/operators';
import { DwAutocompleteComponent } from './dw-autocomplete.component';
/** @type {?} */
export var DW_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return DwAutocompleteTriggerDirective; }),
    multi: true
};
/**
 * @return {?}
 */
export function getDwAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `dw-autocomplete`. ' +
        'Make sure that the id passed to the `dwAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
var DwAutocompleteTriggerDirective = /** @class */ (function () {
    function DwAutocompleteTriggerDirective(_element, _overlay, _viewContainerRef, 
    // tslint:disable-next-line:no-any
    _document) {
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._onChange = function () { };
        this._onTouched = function () { };
        this.panelOpen = false;
    }
    Object.defineProperty(DwAutocompleteTriggerDirective.prototype, "activeOption", {
        /**
         * 当前被激活的 Option
         */
        get: /**
         * 当前被激活的 Option
         * @return {?}
         */
        function () {
            if (this.dwAutocomplete && this.dwAutocomplete.options.length) {
                return this.dwAutocomplete.activeItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        if (this.panelOpen) {
            this.dwAutocomplete.isOpen = this.panelOpen = false;
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.overlayRef.detach();
                this.selectionChangeSubscription.unsubscribe();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.overlayPositionChangeSubscription.unsubscribe();
                this.optionsChangeSubscription.unsubscribe();
            }
        }
    };
    /**
     * 订阅数据源改变事件
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.subscribeOptionsChange = /**
     * 订阅数据源改变事件
     * @return {?}
     */
    function () {
        var _this = this;
        return this.dwAutocomplete.options.changes.pipe(delay(0)).subscribe(function () {
            _this.resetActiveItem();
        });
    };
    /**
     * 订阅 option 选择事件
     * 并设置值
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.subscribeSelectionChange = /**
     * 订阅 option 选择事件
     * 并设置值
     * @return {?}
     */
    function () {
        var _this = this;
        return this.dwAutocomplete.selectionChange
            .subscribe(function (option) {
            _this.setValueAndClose(option);
        });
    };
    /**
     * 订阅组件外部的单击事件
     * 并关闭弹窗
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = /**
     * 订阅组件外部的单击事件
     * 并关闭弹窗
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend'))
            .subscribe(function (event) {
            /** @type {?} */
            var clickTarget = /** @type {?} */ (event.target);
            // 确保不是点击组件自身
            if (clickTarget !== _this._element.nativeElement && !_this.overlayRef.overlayElement.contains(clickTarget) && _this.panelOpen) {
                _this.closePanel();
            }
        });
    };
    /**
     * 订阅 Overlay 位置改变事件
     * 并重新设置动画方向
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = /**
     * 订阅 Overlay 位置改变事件
     * 并重新设置动画方向
     * @return {?}
     */
    function () {
        var _this = this;
        return this.positionStrategy.positionChanges
            .pipe(map(function (position) { return position.connectionPair.originY; }), distinct())
            .subscribe(function (position) {
            _this.dwAutocomplete.dropDownPosition = position;
        });
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.attachOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.dwAutocomplete) {
            throw getDwAutocompleteMissingPanelError();
        }
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.dwAutocomplete.template, this._viewContainerRef);
            this.overlayRef = this._overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
            this.selectionChangeSubscription = this.subscribeSelectionChange();
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            this.optionsChangeSubscription = this.subscribeOptionsChange();
        }
        this.dwAutocomplete.isOpen = this.panelOpen = true;
        this.dwAutocomplete.setVisibility();
        this.overlayRef.updateSize({ width: this.dwAutocomplete.dwWidth || this.getHostWidth() });
        setTimeout(function () {
            if (_this.overlayRef) {
                _this.overlayRef.updatePosition();
            }
        }, 150);
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.destroyPanel = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.closePanel();
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.getOverlayConfig = /**
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            // 如果没有设置 dwWidth 则使用 Host 元素的宽度
            width: this.dwAutocomplete.dwWidth || this.getHostWidth()
        });
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.getConnectedElement = /**
     * @return {?}
     */
    function () {
        return this._element;
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.getHostWidth = /**
     * @return {?}
     */
    function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.getOverlayPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this._overlay.position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.resetActiveItem = /**
     * @return {?}
     */
    function () {
        if (this.dwAutocomplete.activeItem && this.dwAutocomplete.getOptionIndex(this.dwAutocomplete.activeItem)) {
            this.dwAutocomplete.setActiveItem(this.dwAutocomplete.getOptionIndex(this.dwAutocomplete.activeItem));
        }
        else {
            this.dwAutocomplete.setActiveItem(this.dwAutocomplete.dwDefaultActiveFirstOption ? 0 : -1);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
        if (keyCode === ESCAPE) {
            event.preventDefault();
        }
        if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
            // 通过 tab / ESC 关闭，重置输入标签 value
            if (this.activeOption.getLabel() !== this.previousValue) {
                this.setTriggerValue(this.previousValue);
            }
            this.closePanel();
        }
        else if (this.panelOpen && keyCode === ENTER) {
            event.preventDefault();
            if (this.dwAutocomplete.showPanel && this.activeOption) {
                this.activeOption.selectViaInteraction();
            }
        }
        else if (this.panelOpen && isArrowKey && this.dwAutocomplete.showPanel) {
            event.stopPropagation();
            if (keyCode === UP_ARROW) {
                this.dwAutocomplete.setPreviousItemActive();
            }
            else {
                this.dwAutocomplete.setNextItemActive();
            }
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
            this.doBackfill();
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.setValueAndClose = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var value = option.dwValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this._element.nativeElement.focus();
        this.closePanel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.setTriggerValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._element.nativeElement.value = value || '';
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.doBackfill = /**
     * @return {?}
     */
    function () {
        if (this.dwAutocomplete.dwBackfill) {
            // 只设置标签显示值
            this.setTriggerValue(this.dwAutocomplete.activeItem.getLabel());
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = /** @type {?} */ (event.target);
        /** @type {?} */
        var value = target.value;
        if (target.type === 'number') {
            value = value === '' ? null : parseFloat(value);
        }
        if (this.canOpen() && document.activeElement === event.target &&
            this.previousValue !== value) {
            this.previousValue = value;
            this._onChange(value);
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        if (this.canOpen()) {
            this.previousValue = this._element.nativeElement.value;
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.canOpen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this._element.nativeElement;
        return !element.readOnly && !element.disabled;
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setTriggerValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        /** @type {?} */
        var element = this._element.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    };
    /**
     * @return {?}
     */
    DwAutocompleteTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyPanel();
    };
    DwAutocompleteTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[dwAutocomplete], textarea[dwAutocomplete]",
                    providers: [DW_AUTOCOMPLETE_VALUE_ACCESSOR],
                    host: {
                        'autocomplete': 'off',
                        'aria-autocomplete': 'list',
                        '(focusin)': 'handleFocus()',
                        '(blur)': 'handleBlur()',
                        '(input)': 'handleInput($event)',
                        '(keydown)': 'handleKeydown($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    DwAutocompleteTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DwAutocompleteTriggerDirective.propDecorators = {
        dwAutocomplete: [{ type: Input }]
    };
    return DwAutocompleteTriggerDirective;
}());
export { DwAutocompleteTriggerDirective };
function DwAutocompleteTriggerDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.overlayRef;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.portal;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.positionStrategy;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.previousValue;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.selectionChangeSubscription;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.optionsChangeSubscription;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.overlayPositionChangeSubscription;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype._onChange;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype._onTouched;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype.panelOpen;
    /**
     * 用于绑定 dwAutocomplete 组件
     * @type {?}
     */
    DwAutocompleteTriggerDirective.prototype.dwAutocomplete;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype._element;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype._overlay;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype._viewContainerRef;
    /** @type {?} */
    DwAutocompleteTriggerDirective.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJhdXRvLWNvbXBsZXRlL2R3LWF1dG9jb21wbGV0ZS10cmlnZ2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRixPQUFPLEVBRUwsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBSWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFFVixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFdEUsV0FBYSw4QkFBOEIsR0FBcUI7SUFDOUQsT0FBTyxFQUFNLGlCQUFpQjtJQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw4QkFBOEIsRUFBOUIsQ0FBOEIsQ0FBQztJQUM3RCxLQUFLLEVBQVEsSUFBSTtDQUNsQixDQUFDOzs7O0FBRUYsTUFBTTtJQUNKLE9BQU8sS0FBSyxD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Z0JBN1NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUcsaURBQWlEO29CQUM1RCxTQUFTLEVBQUUsQ0FBRSw4QkFBOEIsQ0FBRTtvQkFDN0MsSUFBSSxFQUFPO3dCQUNULGNBQWMsRUFBTyxLQUFLO3dCQUMxQixtQkFBbUIsRUFBRSxNQUFNO3dCQUMzQixXQUFXLEVBQVUsZUFBZTt3QkFDcEMsUUFBUSxFQUFhLGNBQWM7d0JBQ25DLFNBQVMsRUFBWSxxQkFBcUI7d0JBQzFDLFdBQVcsRUFBVSx1QkFBdUI7cUJBQzdDO2lCQUNGOzs7O2dCQXZDQyxVQUFVO2dCQVhWLE9BQU87Z0JBaUJQLGdCQUFnQjtnREFpRUgsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7aUNBZHZDLEtBQUs7O3lDQXpFUjs7U0F3RGEsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneSxcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV4aXN0aW5nUHJvdmlkZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kdy1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0F1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vZHctYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBEV19BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHdBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlKSxcbiAgbXVsdGkgICAgICA6IHRydWVcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREd0F1dG9jb21wbGV0ZU1pc3NpbmdQYW5lbEVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIEVycm9yKCdBdHRlbXB0aW5nIHRvIG9wZW4gYW4gdW5kZWZpbmVkIGluc3RhbmNlIG9mIGBkdy1hdXRvY29tcGxldGVgLiAnICtcbiAgICAnTWFrZSBzdXJlIHRoYXQgdGhlIGlkIHBhc3NlZCB0byB0aGUgYGR3QXV0b2NvbXBsZXRlYCBpcyBjb3JyZWN0IGFuZCB0aGF0ICcgK1xuICAgICd5b3VcXCdyZSBhdHRlbXB0aW5nIHRvIG9wZW4gaXQgYWZ0ZXIgdGhlIG5nQWZ0ZXJDb250ZW50SW5pdCBob29rLicpO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiBgaW5wdXRbZHdBdXRvY29tcGxldGVdLCB0ZXh0YXJlYVtkd0F1dG9jb21wbGV0ZV1gLFxuICBwcm92aWRlcnM6IFsgRFdfQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SIF0sXG4gIGhvc3QgICAgIDoge1xuICAgICdhdXRvY29tcGxldGUnICAgICA6ICdvZmYnLFxuICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAnKGZvY3VzaW4pJyAgICAgICAgOiAnaGFuZGxlRm9jdXMoKScsXG4gICAgJyhibHVyKScgICAgICAgICAgIDogJ2hhbmRsZUJsdXIoKScsXG4gICAgJyhpbnB1dCknICAgICAgICAgIDogJ2hhbmRsZUlucHV0KCRldmVudCknLFxuICAgICcoa2V5ZG93biknICAgICAgICA6ICdoYW5kbGVLZXlkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRHdBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHt9PjtcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBvcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBfb25DaGFuZ2U6ICh2YWx1ZToge30pID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHBhbmVsT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiDnlKjkuo7nu5HlrpogZHdBdXRvY29tcGxldGUg57uE5Lu2ICovXG4gIEBJbnB1dCgpIGR3QXV0b2NvbXBsZXRlOiBEd0F1dG9jb21wbGV0ZUNvbXBvbmVudDtcblxuICAvKipcbiAgICog5b2T5YmN6KKr5r+A5rS755qEIE9wdGlvblxuICAgKi9cbiAgZ2V0IGFjdGl2ZU9wdGlvbigpOiBEd0F1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB7XG4gICAgaWYgKHRoaXMuZHdBdXRvY29tcGxldGUgJiYgdGhpcy5kd0F1dG9jb21wbGV0ZS5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHdBdXRvY29tcGxldGUuYWN0aXZlSXRlbTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcbiAgfVxuXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgfVxuXG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLmR3QXV0b2NvbXBsZXRlLmlzT3BlbiA9IHRoaXMucGFuZWxPcGVuID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMub3B0aW9uc0NoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorqLpmIXmlbDmja7mupDmlLnlj5jkuovku7ZcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLmR3QXV0b2NvbXBsZXRlLm9wdGlvbnMuY2hhbmdlcy5waXBlKFxuICAgICAgZGVsYXkoMClcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuoumYhSBvcHRpb24g6YCJ5oup5LqL5Lu2XG4gICAqIOW5tuiuvue9ruWAvFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kd0F1dG9jb21wbGV0ZS5zZWxlY3Rpb25DaGFuZ2VcbiAgICAuc3Vic2NyaWJlKChvcHRpb246IER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlQW5kQ2xvc2Uob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorqLpmIXnu4Tku7blpJbpg6jnmoTljZXlh7vkuovku7ZcbiAgICog5bm25YWz6Zet5by556qXXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgIGZyb21FdmVudCh0aGlzLl9kb2N1bWVudCwgJ3RvdWNoZW5kJylcbiAgICApXG4gICAgLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgLy8g56Gu5L+d5LiN5piv54K55Ye757uE5Lu26Ieq6LqrXG4gICAgICBpZiAoY2xpY2tUYXJnZXQgIT09IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCAmJiAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KSAmJiB0aGlzLnBhbmVsT3Blbikge1xuICAgICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorqLpmIUgT3ZlcmxheSDkvY3nva7mlLnlj5jkuovku7ZcbiAgICog5bm26YeN5paw6K6+572u5Yqo55S75pa55ZCRXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlQb3NpdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VzXG4gICAgLnBpcGUoXG4gICAgICBtYXAoKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpID0+IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpLFxuICAgICAgZGlzdGluY3QoKVxuICAgIClcbiAgICAuc3Vic2NyaWJlKChwb3NpdGlvbjogVmVydGljYWxDb25uZWN0aW9uUG9zKSA9PiB7XG4gICAgICB0aGlzLmR3QXV0b2NvbXBsZXRlLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZHdBdXRvY29tcGxldGUpIHtcbiAgICAgIHRocm93IGdldER3QXV0b2NvbXBsZXRlTWlzc2luZ1BhbmVsRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5kd0F1dG9jb21wbGV0ZS50ZW1wbGF0ZSwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlQb3NpdGlvbkNoYW5nZSgpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcbiAgICAgIHRoaXMub3B0aW9uc0NoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZHdBdXRvY29tcGxldGUuaXNPcGVuID0gdGhpcy5wYW5lbE9wZW4gPSB0cnVlO1xuICAgIHRoaXMuZHdBdXRvY29tcGxldGUuc2V0VmlzaWJpbGl0eSgpO1xuICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IHRoaXMuZHdBdXRvY29tcGxldGUuZHdXaWR0aCB8fCB0aGlzLmdldEhvc3RXaWR0aCgpIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9LCAxNTApO1xuICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKCk7XG4gICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95UGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXG4gICAgICBzY3JvbGxTdHJhdGVneSAgOiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgICAgLy8g5aaC5p6c5rKh5pyJ6K6+572uIGR3V2lkdGgg5YiZ5L2/55SoIEhvc3Qg5YWD57Sg55qE5a695bqmXG4gICAgICB3aWR0aCAgICAgICAgICAgOiB0aGlzLmR3QXV0b2NvbXBsZXRlLmR3V2lkdGggfHwgdGhpcy5nZXRIb3N0V2lkdGgoKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25uZWN0ZWRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3N0V2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pLFxuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICBdO1xuICAgIHRoaXMucG9zaXRpb25TdHJhdGVneSA9IHRoaXMuX292ZXJsYXkucG9zaXRpb24oKVxuICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpKVxuICAgIC53aXRoUG9zaXRpb25zKHBvc2l0aW9ucylcbiAgICAud2l0aEZsZXhpYmxlRGltZW5zaW9ucyhmYWxzZSlcbiAgICAud2l0aFB1c2goZmFsc2UpO1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0QWN0aXZlSXRlbSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0F1dG9jb21wbGV0ZS5hY3RpdmVJdGVtICYmIHRoaXMuZHdBdXRvY29tcGxldGUuZ2V0T3B0aW9uSW5kZXgodGhpcy5kd0F1dG9jb21wbGV0ZS5hY3RpdmVJdGVtKSkge1xuICAgICAgdGhpcy5kd0F1dG9jb21wbGV0ZS5zZXRBY3RpdmVJdGVtKHRoaXMuZHdBdXRvY29tcGxldGUuZ2V0T3B0aW9uSW5kZXgodGhpcy5kd0F1dG9jb21wbGV0ZS5hY3RpdmVJdGVtKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHdBdXRvY29tcGxldGUuc2V0QWN0aXZlSXRlbSh0aGlzLmR3QXV0b2NvbXBsZXRlLmR3RGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID8gMCA6IC0xKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgaXNBcnJvd0tleSA9IGtleUNvZGUgPT09IFVQX0FSUk9XIHx8IGtleUNvZGUgPT09IERPV05fQVJST1c7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhbmVsT3BlbiAmJiAoa2V5Q29kZSA9PT0gRVNDQVBFIHx8IGtleUNvZGUgPT09IFRBQikpIHtcbiAgICAgIC8vIOmAmui/hyB0YWIgLyBFU0Mg5YWz6Zet77yM6YeN572u6L6T5YWl5qCH562+IHZhbHVlXG4gICAgICBpZiAodGhpcy5hY3RpdmVPcHRpb24uZ2V0TGFiZWwoKSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKHRoaXMucHJldmlvdXNWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWxPcGVuICYmIGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuZHdBdXRvY29tcGxldGUuc2hvd1BhbmVsICYmIHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNlbGVjdFZpYUludGVyYWN0aW9uKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhbmVsT3BlbiAmJiBpc0Fycm93S2V5ICYmIHRoaXMuZHdBdXRvY29tcGxldGUuc2hvd1BhbmVsKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLmR3QXV0b2NvbXBsZXRlLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kd0F1dG9jb21wbGV0ZS5zZXROZXh0SXRlbUFjdGl2ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZG9CYWNrZmlsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsdWVBbmRDbG9zZShvcHRpb246IER3QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb24uZHdWYWx1ZTtcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZShvcHRpb24uZ2V0TGFiZWwoKSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUcmlnZ2VyVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgfVxuXG4gIHByaXZhdGUgZG9CYWNrZmlsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kd0F1dG9jb21wbGV0ZS5kd0JhY2tmaWxsKSB7XG4gICAgICAvLyDlj6rorr7nva7moIfnrb7mmL7npLrlgLxcbiAgICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKHRoaXMuZHdBdXRvY29tcGxldGUuYWN0aXZlSXRlbS5nZXRMYWJlbCgpKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGxldCB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FuT3BlbigpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbk9wZW4oKSkge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuICFlbGVtZW50LnJlYWRPbmx5ICYmICFlbGVtZW50LmRpc2FibGVkO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHt9KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lQYW5lbCgpO1xuICB9XG59XG4iXX0=
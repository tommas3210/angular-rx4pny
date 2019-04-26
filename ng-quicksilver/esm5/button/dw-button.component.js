/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { DwWaveDirective } from '../core/wave/dw-wave.directive';
var DwButtonComponent = /** @class */ (function () {
    function DwButtonComponent(elementRef, cdr, renderer, dwUpdateHostClassService, ngZone) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this.ngZone = ngZone;
        this._ghost = false;
        this._search = false;
        this._loading = false;
        this._block = false;
        this.iconOnly = false;
        this.prefixCls = 'ant-btn';
        this.sizeMap = { large: 'lg', small: 'sm' };
        this.dwWave = new DwWaveDirective(this.ngZone, this.elementRef);
        this.el = this.elementRef.nativeElement;
        this.renderer.addClass(this.el, this.prefixCls);
    }
    Object.defineProperty(DwButtonComponent.prototype, "dwBlock", {
        get: /**
         * @return {?}
         */
        function () {
            return this._block;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._block = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwButtonComponent.prototype, "dwGhost", {
        get: /**
         * @return {?}
         */
        function () {
            return this._ghost;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._ghost = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwButtonComponent.prototype, "dwSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._search;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._search = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwButtonComponent.prototype, "dwType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwButtonComponent.prototype, "dwShape", {
        get: /**
         * @return {?}
         */
        function () {
            return this._shape;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._shape = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwButtonComponent.prototype, "dwSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwButtonComponent.prototype, "dwLoading", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loading;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._loading = toBoolean(value);
            this.setClassMap();
            this.updateIconDisplay(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    DwButtonComponent.prototype.updateIconDisplay = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    DwButtonComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls + "-" + this.dwType] = this.dwType,
            _a[this.prefixCls + "-" + this.dwShape] = this.dwShape,
            _a[this.prefixCls + "-" + this.sizeMap[this.dwSize]] = this.sizeMap[this.dwSize],
            _a[this.prefixCls + "-loading"] = this.dwLoading,
            _a[this.prefixCls + "-icon-only"] = this.iconOnly,
            _a[this.prefixCls + "-background-ghost"] = this.dwGhost,
            _a["ant-input-search-button"] = this.dwSearch,
            _a["ant-btn-block"] = this.dwBlock,
            _a);
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    DwButtonComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        this.moveIcon();
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!this.iconElement;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.dwLoading);
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    DwButtonComponent.prototype.moveIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstChildElement = this.findFirstNotEmptyNode(this.contentElement.nativeElement);
        /** @type {?} */
        var lastChildElement = this.findLastNotEmptyNode(this.contentElement.nativeElement);
        if (firstChildElement && (firstChildElement.nodeName === 'I')) {
            this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
            this.iconElement = /** @type {?} */ (firstChildElement);
        }
        else if (lastChildElement && (lastChildElement.nodeName === 'I')) {
            this.renderer.appendChild(this.el, lastChildElement);
            this.iconElement = /** @type {?} */ (lastChildElement);
        }
        else {
            this.iconElement = null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwButtonComponent.prototype.findFirstNotEmptyNode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var children = value.childNodes;
        for (var i = 0; i < children.length; i++) {
            /** @type {?} */
            var node = children.item(i);
            if (node && (node.nodeType === 1) && ((/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0)) {
                return node;
            }
            else if (node && (node.nodeType === 3) && ((node.textContent.toString().trim().length !== 0))) {
                return node;
            }
        }
        return null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwButtonComponent.prototype.findLastNotEmptyNode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var children = value.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            var node = children.item(i);
            if (node && (node.nodeType === 1) && ((/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0)) {
                return node;
            }
            else if (node && (node.nodeType === 3) && ((node.textContent.toString().trim().length !== 0))) {
                return node;
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    DwButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    DwButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dwWave.ngOnInit();
    };
    /**
     * @return {?}
     */
    DwButtonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dwWave.ngOnDestroy();
    };
    DwButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dw-button]',
                    providers: [DwUpdateHostClassService],
                    preserveWhitespaces: false,
                    template: "<i class=\"anticon anticon-spin anticon-loading\" *ngIf=\"dwLoading\"></i>\n<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>"
                }] }
    ];
    /** @nocollapse */
    DwButtonComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: DwUpdateHostClassService },
        { type: NgZone }
    ]; };
    DwButtonComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        dwBlock: [{ type: Input }],
        dwGhost: [{ type: Input }],
        dwSearch: [{ type: Input }],
        dwType: [{ type: Input }],
        dwShape: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwLoading: [{ type: Input }],
        dwWave: [{ type: HostBinding, args: ['attr.dw-wave',] }]
    };
    return DwButtonComponent;
}());
export { DwButtonComponent };
function DwButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwButtonComponent.prototype._ghost;
    /** @type {?} */
    DwButtonComponent.prototype._search;
    /** @type {?} */
    DwButtonComponent.prototype._type;
    /** @type {?} */
    DwButtonComponent.prototype._shape;
    /** @type {?} */
    DwButtonComponent.prototype._size;
    /** @type {?} */
    DwButtonComponent.prototype._loading;
    /** @type {?} */
    DwButtonComponent.prototype._block;
    /** @type {?} */
    DwButtonComponent.prototype.el;
    /** @type {?} */
    DwButtonComponent.prototype.iconElement;
    /** @type {?} */
    DwButtonComponent.prototype.iconOnly;
    /** @type {?} */
    DwButtonComponent.prototype.prefixCls;
    /** @type {?} */
    DwButtonComponent.prototype.sizeMap;
    /** @type {?} */
    DwButtonComponent.prototype.contentElement;
    /** @type {?} */
    DwButtonComponent.prototype.dwWave;
    /** @type {?} */
    DwButtonComponent.prototype.elementRef;
    /** @type {?} */
    DwButtonComponent.prototype.cdr;
    /** @type {?} */
    DwButtonComponent.prototype.renderer;
    /** @type {?} */
    DwButtonComponent.prototype.dwUpdateHostClassService;
    /** @type {?} */
    DwButtonComponent.prototype.ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYnV0dG9uL2R3LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUFFLE1BQU0sRUFDYixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQWlML0QsMkJBQW9CLFVBQXNCLEVBQVUsR0FBc0IsRUFBVSxRQUFtQixFQUFVLHdCQUFrRCxFQUFVLE1BQWM7UUFBdkssZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO3NCQXBLMUssS0FBSzt1QkFDSixLQUFLO3dCQUlKLEtBQUs7c0JBQ1AsS0FBSzt3QkFHSCxLQUFLO3lCQUNKLFNBQVM7dUJBQ1gsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7c0JBMEVSLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQWdGckYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFD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QUFDLEVBQUU7Z0JBQy9GLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7SUFPRCw4Q0FBa0I7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7OztJQUVELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzNCOztnQkExTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxhQUFhO29CQUNsQyxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDakQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIscUxBQWlEO2lCQUNsRDs7OztnQkFyQkMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBS2pCLFNBQVM7Z0JBSUYsd0JBQXdCO2dCQUx4QixNQUFNOzs7aUNBaUNaLFNBQVMsU0FBQyxnQkFBZ0I7MEJBRTFCLEtBQUs7MEJBVUwsS0FBSzsyQkFVTCxLQUFLO3lCQVVMLEtBQUs7MEJBVUwsS0FBSzt5QkFVTCxLQUFLOzRCQVVMLEtBQUs7eUJBV0wsV0FBVyxTQUFDLGNBQWM7OzRCQWhIN0I7O1NBMEJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3V2F2ZURpcmVjdGl2ZSB9IGZyb20gJy4uL2NvcmUvd2F2ZS9kdy13YXZlLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIER3QnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdkYXNoZWQnIHwgJ2Rhbmdlcic7XG5leHBvcnQgdHlwZSBEd0J1dHRvblNoYXBlID0gJ2NpcmNsZScgfCBudWxsIDtcbmV4cG9ydCB0eXBlIER3QnV0dG9uU2l6ZSA9ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnIDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbZHctYnV0dG9uXScsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIER3QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9naG9zdCA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWFyY2ggPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdHlwZTogRHdCdXR0b25UeXBlO1xuICBwcml2YXRlIF9zaGFwZTogRHdCdXR0b25TaGFwZTtcbiAgcHJpdmF0ZSBfc2l6ZTogRHdCdXR0b25TaXplO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX2Jsb2NrID0gZmFsc2U7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGljb25FbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpY29uT25seSA9IGZhbHNlO1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtYnRuJztcbiAgcHJpdmF0ZSBzaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnKSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdCbG9jayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Jsb2NrID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdCbG9jaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYmxvY2s7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdHaG9zdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2dob3N0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdHaG9zdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZ2hvc3Q7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTZWFyY2godmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zZWFyY2ggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd1NlYXJjaCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGR3VHlwZSgpOiBEd0J1dHRvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgc2V0IGR3VHlwZSh2YWx1ZTogRHdCdXR0b25UeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkd1NoYXBlKCk6IER3QnV0dG9uU2hhcGUge1xuICAgIHJldHVybiB0aGlzLl9zaGFwZTtcbiAgfVxuXG4gIHNldCBkd1NoYXBlKHZhbHVlOiBEd0J1dHRvblNoYXBlKSB7XG4gICAgdGhpcy5fc2hhcGUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdTaXplKHZhbHVlOiBEd0J1dHRvblNpemUpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3U2l6ZSgpOiBEd0J1dHRvblNpemUge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUljb25EaXNwbGF5KHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0xvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZHctd2F2ZScpIGR3V2F2ZSA9IG5ldyBEd1dhdmVEaXJlY3RpdmUodGhpcy5uZ1pvbmUsIHRoaXMuZWxlbWVudFJlZik7XG5cbiAgdXBkYXRlSWNvbkRpc3BsYXkodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pY29uRWxlbWVudCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmljb25FbGVtZW50LCAnZGlzcGxheScsIHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jaycpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5ICovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3VHlwZX1gIF0gICAgICAgICAgICAgICAgOiB0aGlzLmR3VHlwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5kd1NoYXBlfWAgXSAgICAgICAgICAgICAgIDogdGhpcy5kd1NoYXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMuZHdTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMuZHdTaXplIF0sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1sb2FkaW5nYCBdICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZHdMb2FkaW5nLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbi1vbmx5YCBdICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmljb25Pbmx5LFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tYmFja2dyb3VuZC1naG9zdGAgXSAgICAgICAgICAgICAgOiB0aGlzLmR3R2hvc3QsXG4gICAgICBbIGBhbnQtaW5wdXQtc2VhcmNoLWJ1dHRvbmAgXSAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZHdTZWFyY2gsXG4gICAgICBbIGBhbnQtYnRuLWJsb2NrYCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZHdCbG9ja1xuICAgIH07XG4gICAgdGhpcy5kd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmVJY29uKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgLyoqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEyNTMwICoqL1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB0aGlzLmljb25Pbmx5ID0gISF0aGlzLmljb25FbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodGhpcy5kd0xvYWRpbmcpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG1vdmVJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGRFbGVtZW50ID0gdGhpcy5maW5kRmlyc3ROb3RFbXB0eU5vZGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICBjb25zdCBsYXN0Q2hpbGRFbGVtZW50ID0gdGhpcy5maW5kTGFzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGlmIChmaXJzdENoaWxkRWxlbWVudCAmJiAoZmlyc3RDaGlsZEVsZW1lbnQubm9kZU5hbWUgPT09ICdJJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIGZpcnN0Q2hpbGRFbGVtZW50LCB0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgdGhpcy5pY29uRWxlbWVudCA9IGZpcnN0Q2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAobGFzdENoaWxkRWxlbWVudCAmJiAobGFzdENoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0knKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLCBsYXN0Q2hpbGRFbGVtZW50KTtcbiAgICAgIHRoaXMuaWNvbkVsZW1lbnQgPSBsYXN0Q2hpbGRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb25FbGVtZW50ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmaW5kRmlyc3ROb3RFbXB0eU5vZGUodmFsdWU6IEhUTUxFbGVtZW50KTogTm9kZSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2YWx1ZS5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgaWYgKG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDEpICYmICgobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDMpICYmICgobm9kZS50ZXh0Q29udGVudC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApKSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmaW5kTGFzdE5vdEVtcHR5Tm9kZSh2YWx1ZTogSFRNTEVsZW1lbnQpOiBOb2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHZhbHVlLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBub2RlID0gY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgIGlmIChub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAxKSAmJiAoKG5vZGUgYXMgSFRNTEVsZW1lbnQpLm91dGVySFRNTC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfSBlbHNlIGlmIChub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAzKSAmJiAoKG5vZGUudGV4dENvbnRlbnQudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwKSkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBkd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIHRoaXMucHJlZml4Q2xzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kd1dhdmUubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZHdXYXZlLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==
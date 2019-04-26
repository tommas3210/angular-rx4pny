/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var DwTagComponent = /** @class */ (function () {
    function DwTagComponent(renderer) {
        this.renderer = renderer;
        this._checked = false;
        this._mode = 'default';
        this.closed = false;
        this.dwAfterClose = new EventEmitter();
        this.dwOnClose = new EventEmitter();
        this.dwCheckedChange = new EventEmitter();
    }
    Object.defineProperty(DwTagComponent.prototype, "dwMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mode = value;
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTagComponent.prototype, "dwColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._color;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value;
            this.isPreset = this.isPresetColor(value);
            this.updateClassMap();
            this.updateColorStatus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwTagComponent.prototype, "dwChecked", {
        get: /**
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._checked = toBoolean(value);
            this.updateClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} color
     * @return {?}
     */
    DwTagComponent.prototype.isPresetColor = /**
     * @param {?=} color
     * @return {?}
     */
    function (color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
            .test(color));
    };
    /**
     * @return {?}
     */
    DwTagComponent.prototype.updateCheckedStatus = /**
     * @return {?}
     */
    function () {
        if (this.dwMode === 'checkable') {
            this.dwChecked = !this.dwChecked;
            this.dwCheckedChange.emit(this.dwChecked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTagComponent.prototype.closeTag = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.dwOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.closed = true;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwTagComponent.prototype.afterAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.closed && !e.fromState) {
            this.dwAfterClose.emit();
        }
    };
    /**
     * @return {?}
     */
    DwTagComponent.prototype.updateClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var isPresetColor = this.isPresetColor(this.dwColor);
        this.classMap = (_a = {},
            _a["ant-tag"] = true,
            _a["ant-tag-has-color"] = this.dwColor && !isPresetColor,
            _a["ant-tag-" + this.dwColor] = isPresetColor,
            _a["ant-tag-checkable"] = this.dwMode === 'checkable',
            _a["ant-tag-checkable-checked"] = this.dwChecked,
            _a);
    };
    /**
     * @return {?}
     */
    DwTagComponent.prototype.updateColorStatus = /**
     * @return {?}
     */
    function () {
        if (this.wrapperElement && this.dwColor) {
            if (this.isPreset) {
                this.renderer.removeStyle(this.wrapperElement.nativeElement, 'background-color');
            }
            else {
                this.renderer.setStyle(this.wrapperElement.nativeElement, 'background-color', this.dwColor);
            }
        }
    };
    /**
     * @return {?}
     */
    DwTagComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateClassMap();
    };
    /**
     * @return {?}
     */
    DwTagComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateColorStatus();
    };
    DwTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-tag',
                    preserveWhitespaces: false,
                    animations: [trigger('tagAnimation', [
                            state('*', style({ opacity: 1 })),
                            transition('void => *', [
                                style({ opacity: 0 }),
                                animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                            ]),
                            state('void', style({ opacity: 0 })),
                            transition('* => void', [
                                style({ opacity: 1 }),
                                animate('300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)')
                            ])
                        ])],
                    template: "<div\n  *ngIf=\"!closed\"\n  [ngClass]=\"classMap\"\n  #wrapperElement\n  [@tagAnimation]\n  (@tagAnimation.done)=\"afterAnimation($event)\"\n  (click)=\"updateCheckedStatus()\">\n  <ng-content></ng-content>\n  <i class=\"anticon anticon-cross\" *ngIf=\"dwMode==='closeable'\" (click)=\"closeTag($event)\"></i>\n</div>"
                }] }
    ];
    /** @nocollapse */
    DwTagComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    DwTagComponent.propDecorators = {
        wrapperElement: [{ type: ViewChild, args: ['wrapperElement',] }],
        dwAfterClose: [{ type: Output }],
        dwOnClose: [{ type: Output }],
        dwCheckedChange: [{ type: Output }],
        dwMode: [{ type: Input }],
        dwColor: [{ type: Input }],
        dwChecked: [{ type: Input }]
    };
    return DwTagComponent;
}());
export { DwTagComponent };
function DwTagComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTagComponent.prototype._color;
    /** @type {?} */
    DwTagComponent.prototype._checked;
    /** @type {?} */
    DwTagComponent.prototype.isPreset;
    /** @type {?} */
    DwTagComponent.prototype._mode;
    /** @type {?} */
    DwTagComponent.prototype.classMap;
    /** @type {?} */
    DwTagComponent.prototype.closed;
    /** @type {?} */
    DwTagComponent.prototype.wrapperElement;
    /** @type {?} */
    DwTagComponent.prototype.dwAfterClose;
    /** @type {?} */
    DwTagComponent.prototype.dwOnClose;
    /** @type {?} */
    DwTagComponent.prototype.dwCheckedChange;
    /** @type {?} */
    DwTagComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFnL2R3LXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBa0gvQyx3QkFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVzt3QkE3RnBCLEtBQUs7cUJBRUMsU0FBUztzQkFFekIsS0FBSzs0QkFFVyxJQUFJLFlBQVksRUFBUTt5QkFDM0IsSUFBSSxZQUFZLEVBQWM7K0JBQ3hCLElBQUksWUFBWSxFQUFXO0tBdUZ0RDtJQXJGRCxzQkFDSSxrQ0FBTTs7OztRQUtWO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVJELFVBQ1csS0FBYztZQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7OztPQUFBO0lBTUQsc0JBQ0ksbUNBQU87Ozs7UUFPWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUNwQjs7Ozs7UUFWRCxVQUNZLEtBQWE7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJ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OzRCQUNqQyxVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQzs2QkFDdEQsQ0FBQzs0QkFDRixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNwQyxVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQzs2QkFDdEQsQ0FBQzt5QkFDSCxDQUFDLENBQUU7b0JBQ0osMFVBQThDO2lCQUMvQzs7OztnQkF2QkMsU0FBUzs7O2lDQStCUixTQUFTLFNBQUMsZ0JBQWdCOytCQUMxQixNQUFNOzRCQUNOLE1BQU07a0NBQ04sTUFBTTt5QkFFTixLQUFLOzBCQVVMLEtBQUs7NEJBWUwsS0FBSzs7eUJBMUVSOztTQXdDYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxuICBBbmltYXRpb25FdmVudFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBUYWdUeXBlID0gJ2RlZmF1bHQnIHwgJ2Nsb3NlYWJsZScgfCAnY2hlY2thYmxlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy10YWcnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyB0cmlnZ2VyKCd0YWdBbmltYXRpb24nLCBbXG4gICAgc3RhdGUoJyonLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgIGFuaW1hdGUoJzMwMG1zIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KScpXG4gICAgXSksXG4gICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgIGFuaW1hdGUoJzMwMG1zIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KScpXG4gICAgXSlcbiAgXSkgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGFnLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1RhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc1ByZXNldDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbW9kZTogVGFnVHlwZSA9ICdkZWZhdWx0JztcbiAgY2xhc3NNYXA7XG4gIGNsb3NlZCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCd3cmFwcGVyRWxlbWVudCcpIHdyYXBwZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgZHdBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHdDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd01vZGUodmFsdWU6IFRhZ1R5cGUpIHtcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3TW9kZSgpOiBUYWdUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIHRoaXMuaXNQcmVzZXQgPSB0aGlzLmlzUHJlc2V0Q29sb3IodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yU3RhdHVzKCk7XG4gIH1cblxuICBnZXQgZHdDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG5cbiAgaXNQcmVzZXRDb2xvcihjb2xvcj86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIC9eKHBpbmt8cmVkfHllbGxvd3xvcmFuZ2V8Y3lhbnxncmVlbnxibHVlfHB1cnBsZXxnZWVrYmx1ZXxtYWdlbnRhfHZvbGNhbm98Z29sZHxsaW1lKSgtaW52ZXJzZSk/JC9cbiAgICAgIC50ZXN0KGNvbG9yKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcbiAgICAgIHRoaXMuZHdDaGVja2VkID0gIXRoaXMuZHdDaGVja2VkO1xuICAgICAgdGhpcy5kd0NoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmR3Q2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VUYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZHdPbkNsb3NlLmVtaXQoZSk7XG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBhZnRlckFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlZCAmJiAhZS5mcm9tU3RhdGUpIHtcbiAgICAgIHRoaXMuZHdBZnRlckNsb3NlLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc1ByZXNldENvbG9yID0gdGhpcy5pc1ByZXNldENvbG9yKHRoaXMuZHdDb2xvcik7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgYGFudC10YWdgIF0gICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtdGFnLWhhcy1jb2xvcmAgXSAgICAgICAgOiB0aGlzLmR3Q29sb3IgJiYgIWlzUHJlc2V0Q29sb3IsXG4gICAgICBbIGBhbnQtdGFnLSR7dGhpcy5kd0NvbG9yfWAgXSAgOiBpc1ByZXNldENvbG9yLFxuICAgICAgWyBgYW50LXRhZy1jaGVja2FibGVgIF0gICAgICAgIDogdGhpcy5kd01vZGUgPT09ICdjaGVja2FibGUnLFxuICAgICAgWyBgYW50LXRhZy1jaGVja2FibGUtY2hlY2tlZGAgXTogdGhpcy5kd0NoZWNrZWRcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ29sb3JTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMud3JhcHBlckVsZW1lbnQgJiYgdGhpcy5kd0NvbG9yKSB7XG4gICAgICBpZiAodGhpcy5pc1ByZXNldCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMud3JhcHBlckVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy53cmFwcGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuZHdDb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yU3RhdHVzKCk7XG4gIH1cbn1cbiJdfQ==
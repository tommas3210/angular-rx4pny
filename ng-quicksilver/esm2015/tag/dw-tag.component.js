/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class DwTagComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this._checked = false;
        this._mode = 'default';
        this.closed = false;
        this.dwAfterClose = new EventEmitter();
        this.dwOnClose = new EventEmitter();
        this.dwCheckedChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwMode(value) {
        this._mode = value;
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get dwMode() {
        return this._mode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwColor(value) {
        this._color = value;
        this.isPreset = this.isPresetColor(value);
        this.updateClassMap();
        this.updateColorStatus();
    }
    /**
     * @return {?}
     */
    get dwColor() {
        return this._color;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwChecked(value) {
        this._checked = toBoolean(value);
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    get dwChecked() {
        return this._checked;
    }
    /**
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/
            .test(color));
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.dwMode === 'checkable') {
            this.dwChecked = !this.dwChecked;
            this.dwCheckedChange.emit(this.dwChecked);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.dwOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.closed = true;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (this.closed && !e.fromState) {
            this.dwAfterClose.emit();
        }
    }
    /**
     * @return {?}
     */
    updateClassMap() {
        /** @type {?} */
        const isPresetColor = this.isPresetColor(this.dwColor);
        this.classMap = {
            [`ant-tag`]: true,
            [`ant-tag-has-color`]: this.dwColor && !isPresetColor,
            [`ant-tag-${this.dwColor}`]: isPresetColor,
            [`ant-tag-checkable`]: this.dwMode === 'checkable',
            [`ant-tag-checkable-checked`]: this.dwChecked
        };
    }
    /**
     * @return {?}
     */
    updateColorStatus() {
        if (this.wrapperElement && this.dwColor) {
            if (this.isPreset) {
                this.renderer.removeStyle(this.wrapperElement.nativeElement, 'background-color');
            }
            else {
                this.renderer.setStyle(this.wrapperElement.nativeElement, 'background-color', this.dwColor);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateColorStatus();
    }
}
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
DwTagComponent.ctorParameters = () => [
    { type: Renderer2 }
];
DwTagComponent.propDecorators = {
    wrapperElement: [{ type: ViewChild, args: ['wrapperElement',] }],
    dwAfterClose: [{ type: Output }],
    dwOnClose: [{ type: Output }],
    dwCheckedChange: [{ type: Output }],
    dwMode: [{ type: Input }],
    dwColor: [{ type: Input }],
    dwChecked: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsidGFnL2R3LXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFtQmpELE1BQU07Ozs7SUErRkosWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVzt3QkE3RnBCLEtBQUs7cUJBRUMsU0FBUztzQkFFekIsS0FBSzs0QkFFVyxJQUFJLFlBQVksRUFBUTt5QkFDM0IsSUFBSSxZQUFZLEVBQWM7K0JBQ3hCLElBQUksWUFBWSxFQUFXO0tBdUZ0RDs7Ozs7SUFyRkQsSUFDSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzFCOzs7O0lBRUQsSUFB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dEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzRCQUNyQixPQUFPLENBQUMsNENBQTRDLENBQUM7eUJBQ3RELENBQUM7d0JBQ0YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDcEMsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDOzRCQUNyQixPQUFPLENBQUMsNENBQTRDLENBQUM7eUJBQ3RELENBQUM7cUJBQ0gsQ0FBQyxDQUFFO2dCQUNKLDBVQUE4QzthQUMvQzs7OztZQXZCQyxTQUFTOzs7NkJBK0JSLFNBQVMsU0FBQyxnQkFBZ0I7MkJBQzFCLE1BQU07d0JBQ04sTUFBTTs4QkFDTixNQUFNO3FCQUVOLEtBQUs7c0JBVUwsS0FBSzt3QkFZTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyLFxuICBBbmltYXRpb25FdmVudFxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgdHlwZSBUYWdUeXBlID0gJ2RlZmF1bHQnIHwgJ2Nsb3NlYWJsZScgfCAnY2hlY2thYmxlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy10YWcnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyB0cmlnZ2VyKCd0YWdBbmltYXRpb24nLCBbXG4gICAgc3RhdGUoJyonLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxuICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgIGFuaW1hdGUoJzMwMG1zIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KScpXG4gICAgXSksXG4gICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcbiAgICAgIGFuaW1hdGUoJzMwMG1zIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KScpXG4gICAgXSlcbiAgXSkgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdGFnLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1RhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc1ByZXNldDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfbW9kZTogVGFnVHlwZSA9ICdkZWZhdWx0JztcbiAgY2xhc3NNYXA7XG4gIGNsb3NlZCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCd3cmFwcGVyRWxlbWVudCcpIHdyYXBwZXJFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgZHdBZnRlckNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgZHdPbkNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAT3V0cHV0KCkgZHdDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd01vZGUodmFsdWU6IFRhZ1R5cGUpIHtcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3TW9kZSgpOiBUYWdUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jb2xvciA9IHZhbHVlO1xuICAgIHRoaXMuaXNQcmVzZXQgPSB0aGlzLmlzUHJlc2V0Q29sb3IodmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yU3RhdHVzKCk7XG4gIH1cblxuICBnZXQgZHdDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb2xvcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NoZWNrZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jaGVja2VkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdDaGVja2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICB9XG5cbiAgaXNQcmVzZXRDb2xvcihjb2xvcj86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIC9eKHBpbmt8cmVkfHllbGxvd3xvcmFuZ2V8Y3lhbnxncmVlbnxibHVlfHB1cnBsZXxnZWVrYmx1ZXxtYWdlbnRhfHZvbGNhbm98Z29sZHxsaW1lKSgtaW52ZXJzZSk/JC9cbiAgICAgIC50ZXN0KGNvbG9yKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3TW9kZSA9PT0gJ2NoZWNrYWJsZScpIHtcbiAgICAgIHRoaXMuZHdDaGVja2VkID0gIXRoaXMuZHdDaGVja2VkO1xuICAgICAgdGhpcy5kd0NoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmR3Q2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VUYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZHdPbkNsb3NlLmVtaXQoZSk7XG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBhZnRlckFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlZCAmJiAhZS5mcm9tU3RhdGUpIHtcbiAgICAgIHRoaXMuZHdBZnRlckNsb3NlLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc1ByZXNldENvbG9yID0gdGhpcy5pc1ByZXNldENvbG9yKHRoaXMuZHdDb2xvcik7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgYGFudC10YWdgIF0gICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtdGFnLWhhcy1jb2xvcmAgXSAgICAgICAgOiB0aGlzLmR3Q29sb3IgJiYgIWlzUHJlc2V0Q29sb3IsXG4gICAgICBbIGBhbnQtdGFnLSR7dGhpcy5kd0NvbG9yfWAgXSAgOiBpc1ByZXNldENvbG9yLFxuICAgICAgWyBgYW50LXRhZy1jaGVja2FibGVgIF0gICAgICAgIDogdGhpcy5kd01vZGUgPT09ICdjaGVja2FibGUnLFxuICAgICAgWyBgYW50LXRhZy1jaGVja2FibGUtY2hlY2tlZGAgXTogdGhpcy5kd0NoZWNrZWRcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlQ29sb3JTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMud3JhcHBlckVsZW1lbnQgJiYgdGhpcy5kd0NvbG9yKSB7XG4gICAgICBpZiAodGhpcy5pc1ByZXNldCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMud3JhcHBlckVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2JhY2tncm91bmQtY29sb3InKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy53cmFwcGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuZHdDb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNvbG9yU3RhdHVzKCk7XG4gIH1cbn1cbiJdfQ==
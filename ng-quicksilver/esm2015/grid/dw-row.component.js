/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { matchMedia } from '../core/polyfill/match-media';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
/**
 * @record
 */
export function BreakpointMap() { }
function BreakpointMap_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BreakpointMap.prototype.xs;
    /** @type {?|undefined} */
    BreakpointMap.prototype.sm;
    /** @type {?|undefined} */
    BreakpointMap.prototype.md;
    /** @type {?|undefined} */
    BreakpointMap.prototype.lg;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xl;
    /** @type {?|undefined} */
    BreakpointMap.prototype.xxl;
}
/** @type {?} */
const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
export class DwRowComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} dwUpdateHostClassService
     */
    constructor(elementRef, renderer, dwUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dwUpdateHostClassService = dwUpdateHostClassService;
        this._align = 'top';
        this._justify = 'start';
        this.prefixCls = 'ant-row';
        this.el = this.elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwType(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwAlign(value) {
        this._align = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwAlign() {
        return this._align;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwJustify(value) {
        this._justify = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwJustify() {
        return this._justify;
    }
    /**
     * @return {?}
     */
    get dwGutter() {
        return this._gutter;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwGutter(value) {
        this._gutter = value;
        this.updateGutter();
        this.setStyle();
    }
    /**
     * @return {?}
     */
    setStyle() {
        this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
        this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
    }
    /**
     * @return {?}
     */
    calculateGutter() {
        if (typeof this.dwGutter !== 'object') {
            return this.dwGutter;
        }
        else if (this.breakPoint && this.dwGutter[this.breakPoint]) {
            return this.dwGutter[this.breakPoint];
        }
        else {
            return;
        }
    }
    /**
     * @return {?}
     */
    updateGutter() {
        this.actualGutter = this.calculateGutter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onWindowResize(e) {
        this.watchMedia();
    }
    /**
     * @return {?}
     */
    watchMedia() {
        Object.keys(responsiveMap).map((screen) => {
            /** @type {?} */
            const matchBelow = matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                this.breakPoint = screen;
            }
        });
        this.updateGutter();
        this.setStyle();
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}`]: !this.dwType,
            [`${this.prefixCls}-${this.dwType}`]: this.dwType,
            [`${this.prefixCls}-${this.dwType}-${this.dwAlign}`]: this.dwType && this.dwAlign,
            [`${this.prefixCls}-${this.dwType}-${this.dwJustify}`]: this.dwType && this.dwJustify
        };
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
}
DwRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-row',
                preserveWhitespaces: false,
                providers: [DwUpdateHostClassService],
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
DwRowComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: DwUpdateHostClassService }
];
DwRowComponent.propDecorators = {
    dwType: [{ type: Input }],
    dwAlign: [{ type: Input }],
    dwJustify: [{ type: Input }],
    dwGutter: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
function DwRowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwRowComponent.prototype._gutter;
    /** @type {?} */
    DwRowComponent.prototype._type;
    /** @type {?} */
    DwRowComponent.prototype._align;
    /** @type {?} */
    DwRowComponent.prototype._justify;
    /** @type {?} */
    DwRowComponent.prototype.el;
    /** @type {?} */
    DwRowComponent.prototype.prefixCls;
    /** @type {?} */
    DwRowComponent.prototype.breakPoint;
    /** @type {?} */
    DwRowComponent.prototype.actualGutter;
    /** @type {?} */
    DwRowComponent.prototype.elementRef;
    /** @type {?} */
    DwRowComponent.prototype.renderer;
    /** @type {?} */
    DwRowComponent.prototype.dwUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZ3JpZC9kdy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J0RixNQUFNLGFBQWEsR0FBa0I7SUFDbkMsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcscUJBQXFCO0lBQzFCLEdBQUcsRUFBRSxxQkFBcUI7Q0FDM0IsQ0FBQztBQVFGLE1BQU07Ozs7OztJQWlHSixZQUFtQixVQUFzQixFQUFTLFFBQW1CLEVBQVMsd0JBQWtEO1FBQTdHLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtzQkE5RnRHLEtBQUs7d0JBQ0QsT0FBTzt5QkFFakIsU0FBUztRQTRGM0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztLQUN6Qzs7Ozs7SUF6RkQsSUFDSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDbkI7Ozs7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LEVBQUUsQ0FBRSxFQUFFLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVM7U0FDeEYsQ0FBQztRQUNGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNsRTs7OztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7WUE5R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxRQUFRO2dCQUM3QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDakQscUNBQThDO2FBQy9DOzs7O1lBdENDLFVBQVU7WUFJVixTQUFTO1lBSUYsd0JBQXdCOzs7cUJBeUM5QixLQUFLO3NCQVVMLEtBQUs7d0JBVUwsS0FBSzt1QkFVTCxLQUFLOzZCQThCTCxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWF0Y2hNZWRpYSB9IGZyb20gJy4uL2NvcmUvcG9seWZpbGwvbWF0Y2gtbWVkaWEnO1xuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgRHdKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcbmV4cG9ydCB0eXBlIER3QWxpZ24gPSAndG9wJyB8ICdtaWRkbGUnIHwgJ2JvdHRvbSc7XG5leHBvcnQgdHlwZSBEd1R5cGUgPSAnZmxleCcgfCBudWxsO1xuZXhwb3J0IHR5cGUgQnJlYWtwb2ludCA9ICd4eGwnIHwgJ3hsJyB8ICdsZycgfCAnbWQnIHwgJ3NtJyB8ICd4cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWtwb2ludE1hcCB7XG4gIHhzPzogc3RyaW5nO1xuICBzbT86IHN0cmluZztcbiAgbWQ/OiBzdHJpbmc7XG4gIGxnPzogc3RyaW5nO1xuICB4bD86IHN0cmluZztcbiAgeHhsPzogc3RyaW5nO1xufVxuXG5jb25zdCByZXNwb25zaXZlTWFwOiBCcmVha3BvaW50TWFwID0ge1xuICB4cyA6ICcobWF4LXdpZHRoOiA1NzVweCknLFxuICBzbSA6ICcobWluLXdpZHRoOiA1NzZweCknLFxuICBtZCA6ICcobWluLXdpZHRoOiA3NjhweCknLFxuICBsZyA6ICcobWluLXdpZHRoOiA5OTJweCknLFxuICB4bCA6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgeHhsOiAnKG1pbi13aWR0aDogMTYwMHB4KSdcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctcm93JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXJvdy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlciB8IG9iamVjdDtcbiAgcHJpdmF0ZSBfdHlwZTogRHdUeXBlO1xuICBwcml2YXRlIF9hbGlnbjogRHdBbGlnbiA9ICd0b3AnO1xuICBwcml2YXRlIF9qdXN0aWZ5OiBEd0p1c3RpZnkgPSAnc3RhcnQnO1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXJvdyc7XG4gIHByaXZhdGUgYnJlYWtQb2ludDogQnJlYWtwb2ludDtcbiAgYWN0dWFsR3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHlwZSh2YWx1ZTogRHdUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd1R5cGUoKTogRHdUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0FsaWduKHZhbHVlOiBEd0FsaWduKSB7XG4gICAgdGhpcy5fYWxpZ24gPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdBbGlnbigpOiBEd0FsaWduIHtcbiAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdKdXN0aWZ5KHZhbHVlOiBEd0p1c3RpZnkpIHtcbiAgICB0aGlzLl9qdXN0aWZ5ID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3SnVzdGlmeSgpOiBEd0p1c3RpZnkge1xuICAgIHJldHVybiB0aGlzLl9qdXN0aWZ5O1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGR3R3V0dGVyKCk6IG51bWJlciB8IG9iamVjdCB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIHNldCBkd0d1dHRlcih2YWx1ZTogbnVtYmVyIHwgb2JqZWN0KSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBzZXRTdHlsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tbGVmdCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tcmlnaHQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZHdHdXR0ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5kd0d1dHRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLmR3R3V0dGVyWyB0aGlzLmJyZWFrUG9pbnQgXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZHdHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlR3V0dGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0dWFsR3V0dGVyID0gdGhpcy5jYWxjdWxhdGVHdXR0ZXIoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbICckZXZlbnQnIF0pXG4gIG9uV2luZG93UmVzaXplKGU6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoTWVkaWEoKTtcbiAgfVxuXG4gIHdhdGNoTWVkaWEoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChzY3JlZW46IEJyZWFrcG9pbnQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSBtYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbIHNjcmVlbiBdKS5tYXRjaGVzO1xuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcbiAgICAgICAgdGhpcy5icmVha1BvaW50ID0gc2NyZWVuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkqL1xuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9YCBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAhdGhpcy5kd1R5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuZHdUeXBlfWAgXSAgICAgICAgICAgICAgICAgIDogdGhpcy5kd1R5cGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuZHdUeXBlfS0ke3RoaXMuZHdBbGlnbn1gIF0gIDogdGhpcy5kd1R5cGUgJiYgdGhpcy5kd0FsaWduLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3VHlwZX0tJHt0aGlzLmR3SnVzdGlmeX1gIF06IHRoaXMuZHdUeXBlICYmIHRoaXMuZHdKdXN0aWZ5XG4gICAgfTtcbiAgICB0aGlzLmR3VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgZHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy53YXRjaE1lZGlhKCk7XG4gIH1cbn1cbiJdfQ==
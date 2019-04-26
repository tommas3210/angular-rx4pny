/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { DwWaveDirective } from '../core/wave/dw-wave.directive';
export class DwButtonComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} dwUpdateHostClassService
     * @param {?} ngZone
     */
    constructor(elementRef, cdr, renderer, dwUpdateHostClassService, ngZone) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwBlock(value) {
        this._block = toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwBlock() {
        return this._block;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwGhost(value) {
        this._ghost = toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwGhost() {
        return this._ghost;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSearch(value) {
        this._search = toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwSearch() {
        return this._search;
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
    set dwType(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwShape() {
        return this._shape;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShape(value) {
        this._shape = value;
        this.setClassMap();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwSize(value) {
        this._size = value;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get dwSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwLoading(value) {
        this._loading = toBoolean(value);
        this.setClassMap();
        this.updateIconDisplay(value);
    }
    /**
     * @return {?}
     */
    get dwLoading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [`${this.prefixCls}-${this.dwType}`]: this.dwType,
            [`${this.prefixCls}-${this.dwShape}`]: this.dwShape,
            [`${this.prefixCls}-${this.sizeMap[this.dwSize]}`]: this.sizeMap[this.dwSize],
            [`${this.prefixCls}-loading`]: this.dwLoading,
            [`${this.prefixCls}-icon-only`]: this.iconOnly,
            [`${this.prefixCls}-background-ghost`]: this.dwGhost,
            [`ant-input-search-button`]: this.dwSearch,
            [`ant-btn-block`]: this.dwBlock
        };
        this.dwUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    checkContent() {
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
    }
    /**
     * @return {?}
     */
    moveIcon() {
        /** @type {?} */
        const firstChildElement = this.findFirstNotEmptyNode(this.contentElement.nativeElement);
        /** @type {?} */
        const lastChildElement = this.findLastNotEmptyNode(this.contentElement.nativeElement);
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    findFirstNotEmptyNode(value) {
        /** @type {?} */
        const children = value.childNodes;
        for (let i = 0; i < children.length; i++) {
            /** @type {?} */
            const node = children.item(i);
            if (node && (node.nodeType === 1) && ((/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0)) {
                return node;
            }
            else if (node && (node.nodeType === 3) && ((node.textContent.toString().trim().length !== 0))) {
                return node;
            }
        }
        return null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    findLastNotEmptyNode(value) {
        /** @type {?} */
        const children = value.childNodes;
        for (let i = children.length - 1; i >= 0; i--) {
            /** @type {?} */
            const node = children.item(i);
            if (node && (node.nodeType === 1) && ((/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0)) {
                return node;
            }
            else if (node && (node.nodeType === 3) && ((node.textContent.toString().trim().length !== 0))) {
                return node;
            }
        }
        return null;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dwWave.ngOnInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.dwWave.ngOnDestroy();
    }
}
DwButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[dw-button]',
                providers: [DwUpdateHostClassService],
                preserveWhitespaces: false,
                template: "<i class=\"anticon anticon-spin anticon-loading\" *ngIf=\"dwLoading\"></i>\n<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>"
            }] }
];
/** @nocollapse */
DwButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: DwUpdateHostClassService },
    { type: NgZone }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYnV0dG9uL2R3LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUFFLE1BQU0sRUFDYixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBWWpFLE1BQU07Ozs7Ozs7O0lBcUtKLFlBQW9CLFVBQXNCLEVBQVUsR0FBc0IsRUFBVSxRQUFtQixFQUFVLHdCQUFrRCxFQUFVLE1BQWM7UUFBdkssZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO3NCQXBLMUssS0FBSzt1QkFDSixLQUFLO3dCQUlKLEtBQUs7c0JBQ1AsS0FBSzt3QkFHSCxLQUFLO3lCQUNKLFNBQVM7dUJBQ1gsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7c0JBMEVSLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQWdGckYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJ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LENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9GLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7SUFPRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JCOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDeEI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMzQjs7O1lBMUxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsYUFBYTtnQkFDbEMsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHFMQUFpRDthQUNsRDs7OztZQXJCQyxVQUFVO1lBRlYsaUJBQWlCO1lBS2pCLFNBQVM7WUFJRix3QkFBd0I7WUFMeEIsTUFBTTs7OzZCQWlDWixTQUFTLFNBQUMsZ0JBQWdCO3NCQUUxQixLQUFLO3NCQVVMLEtBQUs7dUJBVUwsS0FBSztxQkFVTCxLQUFLO3NCQVVMLEtBQUs7cUJBVUwsS0FBSzt3QkFVTCxLQUFLO3FCQVdMLFdBQVcsU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgRHdXYXZlRGlyZWN0aXZlIH0gZnJvbSAnLi4vY29yZS93YXZlL2R3LXdhdmUuZGlyZWN0aXZlJztcblxuZXhwb3J0IHR5cGUgRHdCdXR0b25UeXBlID0gJ3ByaW1hcnknIHwgJ2Rhc2hlZCcgfCAnZGFuZ2VyJztcbmV4cG9ydCB0eXBlIER3QnV0dG9uU2hhcGUgPSAnY2lyY2xlJyB8IG51bGwgO1xuZXhwb3J0IHR5cGUgRHdCdXR0b25TaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCcgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tkdy1idXR0b25dJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRHdCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2dob3N0ID0gZmFsc2U7XG4gIHByaXZhdGUgX3NlYXJjaCA9IGZhbHNlO1xuICBwcml2YXRlIF90eXBlOiBEd0J1dHRvblR5cGU7XG4gIHByaXZhdGUgX3NoYXBlOiBEd0J1dHRvblNoYXBlO1xuICBwcml2YXRlIF9zaXplOiBEd0J1dHRvblNpemU7XG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYmxvY2sgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaWNvbkVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIGljb25Pbmx5ID0gZmFsc2U7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1idG4nO1xuICBwcml2YXRlIHNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Jsb2NrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYmxvY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0Jsb2NrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ibG9jaztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0dob3N0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZ2hvc3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGdldCBkd0dob3N0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9naG9zdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NlYXJjaCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IGR3U2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2g7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZHdUeXBlKCk6IER3QnV0dG9uVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBzZXQgZHdUeXBlKHZhbHVlOiBEd0J1dHRvblR5cGUpIHtcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGR3U2hhcGUoKTogRHdCdXR0b25TaGFwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NoYXBlO1xuICB9XG5cbiAgc2V0IGR3U2hhcGUodmFsdWU6IER3QnV0dG9uU2hhcGUpIHtcbiAgICB0aGlzLl9zaGFwZSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1NpemUodmFsdWU6IER3QnV0dG9uU2l6ZSkge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgZHdTaXplKCk6IER3QnV0dG9uU2l6ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlSWNvbkRpc3BsYXkodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3TG9hZGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGluZztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kdy13YXZlJykgZHdXYXZlID0gbmV3IER3V2F2ZURpcmVjdGl2ZSh0aGlzLm5nWm9uZSwgdGhpcy5lbGVtZW50UmVmKTtcblxuICB1cGRhdGVJY29uRGlzcGxheSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmljb25FbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaWNvbkVsZW1lbnQsICdkaXNwbGF5JywgdmFsdWUgPyAnbm9uZScgOiAnaW5saW5lLWJsb2NrJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHRlbXAgc29sdXRpb24gc2luY2Ugbm8gbWV0aG9kIGFkZCBjbGFzc01hcCB0byBob3N0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzcyODkgKi9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuZHdUeXBlfWAgXSAgICAgICAgICAgICAgICA6IHRoaXMuZHdUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3U2hhcGV9YCBdICAgICAgICAgICAgICAgOiB0aGlzLmR3U2hhcGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuc2l6ZU1hcFsgdGhpcy5kd1NpemUgXX1gIF06IHRoaXMuc2l6ZU1hcFsgdGhpcy5kd1NpemUgXSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWxvYWRpbmdgIF0gICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kd0xvYWRpbmcsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uLW9ubHlgIF0gICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaWNvbk9ubHksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1iYWNrZ3JvdW5kLWdob3N0YCBdICAgICAgICAgICAgICA6IHRoaXMuZHdHaG9zdCxcbiAgICAgIFsgYGFudC1pbnB1dC1zZWFyY2gtYnV0dG9uYCBdICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kd1NlYXJjaCxcbiAgICAgIFsgYGFudC1idG4tYmxvY2tgIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kd0Jsb2NrXG4gICAgfTtcbiAgICB0aGlzLmR3VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIHRoaXMubW92ZUljb24oKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTI1MzAgKiovXG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHRoaXMuaWNvbk9ubHkgPSAhIXRoaXMuaWNvbkVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScpO1xuICAgICAgdGhpcy5pY29uT25seSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVJY29uRGlzcGxheSh0aGlzLmR3TG9hZGluZyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbW92ZUljb24oKTogdm9pZCB7XG4gICAgY29uc3QgZmlyc3RDaGlsZEVsZW1lbnQgPSB0aGlzLmZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIGNvbnN0IGxhc3RDaGlsZEVsZW1lbnQgPSB0aGlzLmZpbmRMYXN0Tm90RW1wdHlOb2RlKHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgaWYgKGZpcnN0Q2hpbGRFbGVtZW50ICYmIChmaXJzdENoaWxkRWxlbWVudC5ub2RlTmFtZSA9PT0gJ0knKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5pbnNlcnRCZWZvcmUodGhpcy5lbCwgZmlyc3RDaGlsZEVsZW1lbnQsIHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICB0aGlzLmljb25FbGVtZW50ID0gZmlyc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChsYXN0Q2hpbGRFbGVtZW50ICYmIChsYXN0Q2hpbGRFbGVtZW50Lm5vZGVOYW1lID09PSAnSScpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWwsIGxhc3RDaGlsZEVsZW1lbnQpO1xuICAgICAgdGhpcy5pY29uRWxlbWVudCA9IGxhc3RDaGlsZEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWNvbkVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRGaXJzdE5vdEVtcHR5Tm9kZSh2YWx1ZTogSFRNTEVsZW1lbnQpOiBOb2RlIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHZhbHVlLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICBpZiAobm9kZSAmJiAobm9kZS5ub2RlVHlwZSA9PT0gMSkgJiYgKChub2RlIGFzIEhUTUxFbGVtZW50KS5vdXRlckhUTUwudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZSAmJiAobm9kZS5ub2RlVHlwZSA9PT0gMykgJiYgKChub2RlLnRleHRDb250ZW50LnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkpKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZpbmRMYXN0Tm90RW1wdHlOb2RlKHZhbHVlOiBIVE1MRWxlbWVudCk6IE5vZGUge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdmFsdWUuY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgaWYgKG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDEpICYmICgobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUgJiYgKG5vZGUubm9kZVR5cGUgPT09IDMpICYmICgobm9kZS50ZXh0Q29udGVudC50b1N0cmluZygpLnRyaW0oKS5sZW5ndGggIT09IDApKSkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGR3VXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgdGhpcy5wcmVmaXhDbHMpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmR3V2F2ZS5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kd1dhdmUubmdPbkRlc3Ryb3koKTtcbiAgfVxufVxuIl19
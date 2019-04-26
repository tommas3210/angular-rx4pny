/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DwI18nService } from '../i18n/dw-i18n.service';
var DwTimeValueAccessorDirective = /** @class */ (function () {
    function DwTimeValueAccessorDirective(i18n, elementRef) {
        this.i18n = i18n;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    DwTimeValueAccessorDirective.prototype.keyup = /**
     * @return {?}
     */
    function () {
        this.changed();
    };
    /**
     * @return {?}
     */
    DwTimeValueAccessorDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.touched();
    };
    /**
     * @return {?}
     */
    DwTimeValueAccessorDirective.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this._onChange) {
            /** @type {?} */
            var value = this.i18n.parseTime(this.elementRef.nativeElement.value);
            this._onChange(value);
        }
    };
    /**
     * @return {?}
     */
    DwTimeValueAccessorDirective.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this._onTouch) {
            this._onTouch();
        }
    };
    /**
     * @return {?}
     */
    DwTimeValueAccessorDirective.prototype.setRange = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DwTimeValueAccessorDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = this.i18n.formatDate(value, this.format);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DwTimeValueAccessorDirective.prototype.registerOnChange = /**
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
    DwTimeValueAccessorDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouch = fn;
    };
    DwTimeValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[dwTime]',
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: DwTimeValueAccessorDirective, multi: true }
                    ]
                },] }
    ];
    /** @nocollapse */
    DwTimeValueAccessorDirective.ctorParameters = function () { return [
        { type: DwI18nService },
        { type: ElementRef }
    ]; };
    DwTimeValueAccessorDirective.propDecorators = {
        format: [{ type: Input, args: ['dwTime',] }],
        keyup: [{ type: HostListener, args: ['keyup',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return DwTimeValueAccessorDirective;
}());
export { DwTimeValueAccessorDirective };
function DwTimeValueAccessorDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwTimeValueAccessorDirective.prototype._onChange;
    /** @type {?} */
    DwTimeValueAccessorDirective.prototype._onTouch;
    /** @type {?} */
    DwTimeValueAccessorDirective.prototype.format;
    /** @type {?} */
    DwTimeValueAccessorDirective.prototype.i18n;
    /** @type {?} */
    DwTimeValueAccessorDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL2R3LXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBMEN0RCxzQ0FBb0IsSUFBbUIsRUFBVSxVQUFzQjtRQUFuRCxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtLQUN0RTs7OztJQTVCRCw0Q0FBSzs7O0lBREw7UUFFRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFHRCwyQ0FBSTs7O0lBREo7UUFFRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFFRCw4Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7O1lBQ2xCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7S0FDRjs7OztJQUVELDhDQUFPOzs7SUFBUDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7S0FDRjs7OztJQUVELCtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEc7Ozs7O0lBS0QsaURBQVU7Ozs7SUFBVixVQUFXLEtBQVc7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDaEY7Ozs7O0lBRUQsdURBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXlCO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELHdEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0tBQ3BCOztnQkFyREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRyxlQUFlO29CQUMxQixTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3ZGO2lCQUNGOzs7O2dCQVBRLGFBQWE7Z0JBRkYsVUFBVTs7O3lCQWMzQixLQUFLLFNBQUMsUUFBUTt3QkFFZCxZQUFZLFNBQUMsT0FBTzt1QkFLcEIsWUFBWSxTQUFDLE1BQU07O3VDQXJCdEI7O1NBVWEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEd0kxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9kdy1pMThuLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiAnaW5wdXRbZHdUaW1lXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBEd1RpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHdUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIF9vblRvdWNoOiAoKSA9PiB2b2lkO1xuICBASW5wdXQoJ2R3VGltZScpIGZvcm1hdDogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJylcbiAga2V5dXAoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VkKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoZWQoKTtcbiAgfVxuXG4gIGNoYW5nZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaTE4bi5wYXJzZVRpbWUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHRvdWNoZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29uVG91Y2gpIHtcbiAgICAgIHRoaXMuX29uVG91Y2goKTtcbiAgICB9XG4gIH1cblxuICBzZXRSYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IER3STE4blNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5pMThuLmZvcm1hdERhdGUodmFsdWUsIHRoaXMuZm9ybWF0KTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2ggPSBmbjtcbiAgfVxuXG59XG4iXX0=
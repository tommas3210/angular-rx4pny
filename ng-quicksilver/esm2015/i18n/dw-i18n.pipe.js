/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DwI18nService } from './dw-i18n.service';
export class DwI18nPipe {
    /**
     * @param {?} _locale
     */
    constructor(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    transform(path, keyValue) {
        return this._locale.translate(path, keyValue);
    }
}
DwI18nPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dwI18n'
            },] }
];
/** @nocollapse */
DwI18nPipe.ctorParameters = () => [
    { type: DwI18nService }
];
function DwI18nPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    DwI18nPipe.prototype._locale;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJpMThuL2R3LWkxOG4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBS2xELE1BQU07Ozs7SUFDSixZQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO0tBQ3pDOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBWSxFQUFFLFFBQWlCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQy9DOzs7WUFURixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7YUFDZjs7OztZQUpRLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3STE4blNlcnZpY2UgfSBmcm9tICcuL2R3LWkxOG4uc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2R3STE4bidcbn0pXG5leHBvcnQgY2xhc3MgRHdJMThuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGU6IER3STE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIHRyYW5zZm9ybShwYXRoOiBzdHJpbmcsIGtleVZhbHVlPzogb2JqZWN0KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlLnRyYW5zbGF0ZShwYXRoLCBrZXlWYWx1ZSk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DwI18nService } from './dw-i18n.service';
var DwI18nPipe = /** @class */ (function () {
    function DwI18nPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    DwI18nPipe.prototype.transform = /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    function (path, keyValue) {
        return this._locale.translate(path, keyValue);
    };
    DwI18nPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'dwI18n'
                },] }
    ];
    /** @nocollapse */
    DwI18nPipe.ctorParameters = function () { return [
        { type: DwI18nService }
    ]; };
    return DwI18nPipe;
}());
export { DwI18nPipe };
function DwI18nPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    DwI18nPipe.prototype._locale;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJpMThuL2R3LWkxOG4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQU1oRCxvQkFBb0IsT0FBc0I7UUFBdEIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtLQUN6Qzs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsUUFBaUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDL0M7O2dCQVRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsUUFBUTtpQkFDZjs7OztnQkFKUSxhQUFhOztxQkFGdEI7O1NBT2EsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdJMThuU2VydmljZSB9IGZyb20gJy4vZHctaTE4bi5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZHdJMThuJ1xufSlcbmV4cG9ydCBjbGFzcyBEd0kxOG5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZTogRHdJMThuU2VydmljZSkge1xuICB9XG5cbiAgdHJhbnNmb3JtKHBhdGg6IHN0cmluZywga2V5VmFsdWU/OiBvYmplY3QpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGUudHJhbnNsYXRlKHBhdGgsIGtleVZhbHVlKTtcbiAgfVxufVxuIl19
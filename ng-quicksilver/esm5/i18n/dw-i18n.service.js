/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DatePipe } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from '../core/util/logger/logger.service';
import parse from 'date-fns/parse';
import zh_CN from './languages/zh_CN';
import { DW_I18N } from './dw-i18n.token';
var DwI18nService = /** @class */ (function () {
    function DwI18nService(locale, _logger, datePipe) {
        this._logger = _logger;
        this.datePipe = datePipe;
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
    }
    Object.defineProperty(DwI18nService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    DwI18nService.prototype.translate = /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    function (path, data) {
        /** @type {?} */
        var content = /** @type {?} */ (this._getObjectPath(this._locale, path));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach(function (key) { return content = content.replace(new RegExp("%" + key + "%", 'g'), data[key]); });
            }
            return content;
        }
        return path;
    };
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param locale The translating letters
     */
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    DwI18nService.prototype.setLocale = /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    function (locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    };
    /**
     * @return {?}
     */
    DwI18nService.prototype.getLocale = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @return {?}
     */
    DwI18nService.prototype.getLocaleId = /**
     * @return {?}
     */
    function () {
        return this._locale ? this._locale.locale : '';
    };
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    DwI18nService.prototype.getLocaleData = /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    function (path, defaultValue) {
        /** @type {?} */
        var result = path ? this._getObjectPath(this._locale, path) : this._locale;
        return result || defaultValue;
    };
    /**
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    DwI18nService.prototype.formatDate = /**
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    function (date, format, locale) {
        return date ? this.datePipe.transform(date, format, null, locale || this.getLocale().locale) : '';
    };
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     */
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    DwI18nService.prototype.formatDateCompatible = /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    function (date, format, locale) {
        return this.formatDate(date, this.compatDateFormat(format), locale);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    DwI18nService.prototype.parseDate = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return parse(text);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    DwI18nService.prototype.parseTime = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!text) {
            return;
        }
        return parse("1970-01-01 " + text);
    };
    /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    DwI18nService.prototype._getObjectPath = /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    function (obj, path) {
        /** @type {?} */
        var res = obj;
        /** @type {?} */
        var paths = path.split('.');
        /** @type {?} */
        var depth = paths.length;
        /** @type {?} */
        var index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    };
    /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    DwI18nService.prototype.compatDateFormat = /**
     * Compatible translate the moment-like format pattern to angular's pattern
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     *
     * TODO: compare and complete all format patterns
     * Each format docs as below:
     * @link https://momentjs.com/docs/#/displaying/format/
     * @link https://angular.io/api/common/DatePipe#description
     * @param {?} format input format pattern
     * @return {?}
     */
    function (format) {
        return format && format
            .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
            .replace(/D/g, 'd'); // d, dd represent of D, DD for momentjs, others are not support
    };
    DwI18nService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DwI18nService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DW_I18N,] }] },
        { type: LoggerService },
        { type: DatePipe }
    ]; };
    return DwI18nService;
}());
export { DwI18nService };
function DwI18nService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwI18nService.prototype._locale;
    /** @type {?} */
    DwI18nService.prototype._change;
    /** @type {?} */
    DwI18nService.prototype._logger;
    /** @type {?} */
    DwI18nService.prototype.datePipe;
}
/**
 * @param {?} exist
 * @param {?} locale
 * @param {?} logger
 * @param {?} datePipe
 * @return {?}
 */
export function DW_LOCALE_SERVICE_PROVIDER_FACTORY(exist, locale, logger, datePipe) {
    return exist || new DwI18nService(locale, logger, datePipe);
}
/** @type {?} */
export var DW_I18N_SERVICE_PROVIDER = {
    provide: DwI18nService,
    useFactory: DW_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), DwI18nService], DW_I18N, LoggerService, DatePipe]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJpMThuL2R3LWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQU94Qyx1QkFBNkIsTUFBdUIsRUFBVSxPQUFzQixFQUFVLFFBQWtCO1FBQWxELFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO3VCQUY5RixJQUFJLGVBQWUsQ0FBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUdsRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztLQUNqQztJQUVELHNCQUFJLHVDQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3BDOzs7T0FBQTtJQUVELDhFQUE4RTtJQUM5RSxnREFBZ0Q7SUFDaEQscUNBQXFDOzs7Ozs7SUFDckMsaUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsSUFBVTs7UUFFaEMsSUFBSSxPQUFPLHFCQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQVcsRUFBQztRQUNoRSxJQUFJLE9B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R0FBRyxLQUFLLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBRSxLQUFLLENBQUUsS0FBSyxFQUFFLENBQUUsQ0FBRSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztJQWE5Qix3Q0FBZ0I7Ozs7Ozs7Ozs7O2NBQUMsTUFBYztRQUNyQyxPQUFPLE1BQU0sSUFBSSxNQUFNO2FBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO2FBQ2xCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7OztnQkE3R3ZCLFVBQVU7Ozs7Z0RBS0ksTUFBTSxTQUFDLE9BQU87Z0JBYnBCLGFBQWE7Z0JBSmIsUUFBUTs7d0JBQWpCOztTQWFhLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdIMUIsTUFBTSw2Q0FBNkMsS0FBb0IsRUFBRSxNQUF1QixFQUFFLE1BQXFCLEVBQUUsUUFBa0I7SUFDekksT0FBTyxLQUFLLElBQUksSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztDQUM3RDs7QUFFRCxXQUFhLHdCQUF3QixHQUFhO0lBQ2hELE9BQU8sRUFBSyxhQUFhO0lBQ3pCLFVBQVUsRUFBRSxrQ0FBa0M7SUFDOUMsSUFBSSxFQUFRLENBQUUsQ0FBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUU7Q0FDcEcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3V0aWwvbG9nZ2VyL2xvZ2dlci5zZXJ2aWNlJztcblxuaW1wb3J0IHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcblxuaW1wb3J0IHpoX0NOIGZyb20gJy4vbGFuZ3VhZ2VzL3poX0NOJztcbmltcG9ydCB7IER3STE4bkludGVyZmFjZSB9IGZyb20gJy4vZHctaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRFdfSTE4TiB9IGZyb20gJy4vZHctaTE4bi50b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEd0kxOG5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbG9jYWxlOiBEd0kxOG5JbnRlcmZhY2U7XG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RHdJMThuSW50ZXJmYWNlPih0aGlzLl9sb2NhbGUpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRFdfSTE4TikgbG9jYWxlOiBEd0kxOG5JbnRlcmZhY2UsIHByaXZhdGUgX2xvZ2dlcjogTG9nZ2VyU2VydmljZSwgcHJpdmF0ZSBkYXRlUGlwZTogRGF0ZVBpcGUpIHtcbiAgICB0aGlzLnNldExvY2FsZShsb2NhbGUgfHwgemhfQ04pO1xuICB9XG5cbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPER3STE4bkludGVyZmFjZT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvLyBbTk9URV0gUGVyZm9ybWFuY2UgaXNzdWU6IHRoaXMgbWV0aG9kIG1heSBjYWxsZWQgYnkgZXZlcnkgY2hhbmdlIGRldGVjdGlvbnNcbiAgLy8gVE9ETzogY2FjaGUgbW9yZSBkZWVwbHkgcGF0aHMgZm9yIHBlcmZvcm1hbmNlXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgdHJhbnNsYXRlKHBhdGg6IHN0cmluZywgZGF0YT86IGFueSk6IHN0cmluZyB7XG4gICAgLy8gdGhpcy5fbG9nZ2VyLmRlYnVnKGBbRHdJMThuU2VydmljZV0gVHJhbnNsYXRpbmcoJHt0aGlzLl9sb2NhbGUubG9jYWxlfSk6ICR7cGF0aH1gKTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldE9iamVjdFBhdGgodGhpcy5fbG9jYWxlLCBwYXRoKSBhcyBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoYCUke2tleX0lYCwgJ2cnKSwgZGF0YVsga2V5IF0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQvQ2hhbmdlIGN1cnJlbnQgbG9jYWxlIGdsb2JhbGx5IHRocm91Z2hvdXQgdGhlIFdIT0xFIGFwcGxpY2F0aW9uXG4gICAqIFtOT1RFXSBJZiBjYWxsZWQgYXQgcnVudGltZSwgcmVuZGVyZWQgaW50ZXJmYWNlIG1heSBub3QgY2hhbmdlIGFsb25nIHdpdGggdGhlIGxvY2FsZSBjaGFuZ2UgKGJlY2F1c2UgdGhpcyBkbyBub3QgdHJpZ2dlciBhbm90aGVyIHJlbmRlciBzY2hlZHVsZSlcbiAgICogQHBhcmFtIGxvY2FsZSBUaGUgdHJhbnNsYXRpbmcgbGV0dGVyc1xuICAgKi9cbiAgc2V0TG9jYWxlKGxvY2FsZTogRHdJMThuSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUubG9jYWxlID09PSBsb2NhbGUubG9jYWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZTtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dChsb2NhbGUpO1xuICB9XG5cbiAgZ2V0TG9jYWxlKCk6IER3STE4bkludGVyZmFjZSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcbiAgfVxuXG4gIGdldExvY2FsZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZSA/IHRoaXMuX2xvY2FsZS5sb2NhbGUgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbG9jYWxlIGRhdGFcbiAgICogQHBhcmFtIHBhdGggZG90IHBhdGhzIGZvciBmaW5kaW5nIGV4aXN0IHZhbHVlIGZyb20gbG9jYWxlIGRhdGEsIGVnLiBcImEuYi5jXCJcbiAgICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBkZWZhdWx0IHZhbHVlIGlmIHRoZSByZXN1bHQgaXMgbm90IFwidHJ1dGh5XCJcbiAgICovXG4gIGdldExvY2FsZURhdGEocGF0aD86IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBjb25zdCByZXN1bHQgPSBwYXRoID8gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIDogdGhpcy5fbG9jYWxlO1xuICAgIHJldHVybiByZXN1bHQgfHwgZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLmRhdGVQaXBlLnRyYW5zZm9ybShkYXRlLCBmb3JtYXQsIG51bGwsIGxvY2FsZSB8fCB0aGlzLmdldExvY2FsZSgpLmxvY2FsZSkgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgZGF0ZSB3aXRoIGNvbXBhdGlibGUgZm9yIHRoZSBmb3JtYXQgb2YgbW9tZW50IGFuZCBvdGhlcnNcbiAgICogV2h5PyBGb3Igbm93LCB3ZSBuZWVkIHRvIHN1cHBvcnQgdGhlIGV4aXN0aW5nIGxhbmd1YWdlIGZvcm1hdHMgaW4gQW50RCwgYW5kIEFudEQgdXNlcyB0aGUgZGVmYXVsdCB0ZW1wb3JhbCBzeW50YXguXG4gICAqL1xuICBmb3JtYXREYXRlQ29tcGF0aWJsZShkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZShkYXRlLCB0aGlzLmNvbXBhdERhdGVGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKTtcbiAgfVxuXG4gIHBhcnNlRGF0ZSh0ZXh0OiBzdHJpbmcpOiBEYXRlIHtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlKHRleHQpO1xuICB9XG5cbiAgcGFyc2VUaW1lKHRleHQ6IHN0cmluZyk6IERhdGUge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2UoYDE5NzAtMDEtMDEgJHt0ZXh0fWApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0T2JqZWN0UGF0aChvYmo6IG9iamVjdCwgcGF0aDogc3RyaW5nKTogc3RyaW5nIHwgb2JqZWN0IHwgYW55IHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICBsZXQgcmVzID0gb2JqO1xuICAgIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xuICAgIGNvbnN0IGRlcHRoID0gcGF0aHMubGVuZ3RoO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgd2hpbGUgKHJlcyAmJiBpbmRleCA8IGRlcHRoKSB7XG4gICAgICByZXMgPSByZXNbIHBhdGhzWyBpbmRleCsrIF0gXTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4ID09PSBkZXB0aCA/IHJlcyA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGF0aWJsZSB0cmFuc2xhdGUgdGhlIG1vbWVudC1saWtlIGZvcm1hdCBwYXR0ZXJuIHRvIGFuZ3VsYXIncyBwYXR0ZXJuXG4gICAqIFdoeT8gRm9yIG5vdywgd2UgbmVlZCB0byBzdXBwb3J0IHRoZSBleGlzdGluZyBsYW5ndWFnZSBmb3JtYXRzIGluIEFudEQsIGFuZCBBbnREIHVzZXMgdGhlIGRlZmF1bHQgdGVtcG9yYWwgc3ludGF4LlxuICAgKlxuICAgKiBUT0RPOiBjb21wYXJlIGFuZCBjb21wbGV0ZSBhbGwgZm9ybWF0IHBhdHRlcm5zXG4gICAqIEVhY2ggZm9ybWF0IGRvY3MgYXMgYmVsb3c6XG4gICAqIEBsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL2Zvcm1hdC9cbiAgICogQGxpbmsgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vRGF0ZVBpcGUjZGVzY3JpcHRpb25cbiAgICogQHBhcmFtIGZvcm1hdCBpbnB1dCBmb3JtYXQgcGF0dGVyblxuICAgKi9cbiAgcHJpdmF0ZSBjb21wYXREYXRlRm9ybWF0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0ICYmIGZvcm1hdFxuICAgIC5yZXBsYWNlKC9ZL2csICd5JykgLy8gb25seSBzdXBwb3J0IHksIHl5LCB5eXksIHl5eXlcbiAgICAucmVwbGFjZSgvRC9nLCAnZCcpOyAvLyBkLCBkZCByZXByZXNlbnQgb2YgRCwgREQgZm9yIG1vbWVudGpzLCBvdGhlcnMgYXJlIG5vdCBzdXBwb3J0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERXX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IER3STE4blNlcnZpY2UsIGxvY2FsZTogRHdJMThuSW50ZXJmYWNlLCBsb2dnZXI6IExvZ2dlclNlcnZpY2UsIGRhdGVQaXBlOiBEYXRlUGlwZSk6IER3STE4blNlcnZpY2Uge1xuICByZXR1cm4gZXhpc3QgfHwgbmV3IER3STE4blNlcnZpY2UobG9jYWxlLCBsb2dnZXIsIGRhdGVQaXBlKTtcbn1cblxuZXhwb3J0IGNvbnN0IERXX0kxOE5fU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUgICA6IER3STE4blNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IERXX0xPQ0FMRV9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHMgICAgICA6IFsgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIER3STE4blNlcnZpY2UgXSwgRFdfSTE4TiwgTG9nZ2VyU2VydmljZSwgRGF0ZVBpcGUgXVxufTtcbiJdfQ==
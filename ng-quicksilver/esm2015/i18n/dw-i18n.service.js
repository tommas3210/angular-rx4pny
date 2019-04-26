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
export class DwI18nService {
    /**
     * @param {?} locale
     * @param {?} _logger
     * @param {?} datePipe
     */
    constructor(locale, _logger, datePipe) {
        this._logger = _logger;
        this.datePipe = datePipe;
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._change.asObservable();
    }
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    translate(path, data) {
        /** @type {?} */
        let content = /** @type {?} */ (this._getObjectPath(this._locale, path));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    /**
     * @return {?}
     */
    getLocale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    getLocaleData(path, defaultValue) {
        /** @type {?} */
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        return result || defaultValue;
    }
    /**
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    formatDate(date, format, locale) {
        return date ? this.datePipe.transform(date, format, null, locale || this.getLocale().locale) : '';
    }
    /**
     * Format date with compatible for the format of moment and others
     * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
     * @param {?} date
     * @param {?=} format
     * @param {?=} locale
     * @return {?}
     */
    formatDateCompatible(date, format, locale) {
        return this.formatDate(date, this.compatDateFormat(format), locale);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseDate(text) {
        if (!text) {
            return;
        }
        return parse(text);
    }
    /**
     * @param {?} text
     * @return {?}
     */
    parseTime(text) {
        if (!text) {
            return;
        }
        return parse(`1970-01-01 ${text}`);
    }
    /**
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    _getObjectPath(obj, path) {
        /** @type {?} */
        let res = obj;
        /** @type {?} */
        const paths = path.split('.');
        /** @type {?} */
        const depth = paths.length;
        /** @type {?} */
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
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
    compatDateFormat(format) {
        return format && format
            .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
            .replace(/D/g, 'd'); // d, dd represent of D, DD for momentjs, others are not support
    }
}
DwI18nService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DwI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DW_I18N,] }] },
    { type: LoggerService },
    { type: DatePipe }
];
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
export const DW_I18N_SERVICE_PROVIDER = {
    provide: DwI18nService,
    useFactory: DW_LOCALE_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), DwI18nService], DW_I18N, LoggerService, DatePipe]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJpMThuL2R3LWkxOG4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBWSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkUsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkMsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzFDLE1BQU07Ozs7OztJQUlKLFlBQTZCLE1BQXVCLEVBQVUsT0FBc0IsRUFBVSxRQUFrQjtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTt1QkFGOUYsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxPQUFPLENBQUM7UUFHbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDcEM7Ozs7OztJQUtELFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBVTs7UUFFaEMsSUFBSSxPQUFPLHFCQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQVcsRUFBQztRQUNoRSxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixJQUFJLElBQUksRUFBRTtnQkFDUixN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QUFDLE1BQWM7UUFDckMsT0FBTyxNQUFNLElBQUksTUFBTTthQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzthQUNsQixPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O1lBN0d2QixVQUFVOzs7OzRDQUtJLE1BQU0sU0FBQyxPQUFPO1lBYnBCLGFBQWE7WUFKYixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkhqQixNQUFNLDZDQUE2QyxLQUFvQixFQUFFLE1BQXVCLEVBQUUsTUFBcUIsRUFBRSxRQUFrQjtJQUN6SSxPQUFPLEtBQUssSUFBSSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQzdEOztBQUVELGFBQWEsd0JBQXdCLEdBQWE7SUFDaEQsT0FBTyxFQUFLLGFBQWE7SUFDekIsVUFBVSxFQUFFLGtDQUFrQztJQUM5QyxJQUFJLEVBQVEsQ0FBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBRTtDQUNwRyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2NvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UnO1xuXG5pbXBvcnQgemhfQ04gZnJvbSAnLi9sYW5ndWFnZXMvemhfQ04nO1xuaW1wb3J0IHsgRHdJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi9kdy1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEV19JMThOIH0gZnJvbSAnLi9kdy1pMThuLnRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER3STE4blNlcnZpY2Uge1xuICBwcml2YXRlIF9sb2NhbGU6IER3STE4bkludGVyZmFjZTtcbiAgcHJpdmF0ZSBfY2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEd0kxOG5JbnRlcmZhY2U+KHRoaXMuX2xvY2FsZSk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEV19JMThOKSBsb2NhbGU6IER3STE4bkludGVyZmFjZSwgcHJpdmF0ZSBfbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLCBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZSkge1xuICAgIHRoaXMuc2V0TG9jYWxlKGxvY2FsZSB8fCB6aF9DTik7XG4gIH1cblxuICBnZXQgbG9jYWxlQ2hhbmdlKCk6IE9ic2VydmFibGU8RHdJMThuSW50ZXJmYWNlPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8vIFtOT1RFXSBQZXJmb3JtYW5jZSBpc3N1ZTogdGhpcyBtZXRob2QgbWF5IGNhbGxlZCBieSBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uc1xuICAvLyBUT0RPOiBjYWNoZSBtb3JlIGRlZXBseSBwYXRocyBmb3IgcGVyZm9ybWFuY2VcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0cmFuc2xhdGUocGF0aDogc3RyaW5nLCBkYXRhPzogYW55KTogc3RyaW5nIHtcbiAgICAvLyB0aGlzLl9sb2dnZXIuZGVidWcoYFtEd0kxOG5TZXJ2aWNlXSBUcmFuc2xhdGluZygke3RoaXMuX2xvY2FsZS5sb2NhbGV9KTogJHtwYXRofWApO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIGFzIHN0cmluZztcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cChgJSR7a2V5fSVgLCAnZycpLCBkYXRhWyBrZXkgXSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldC9DaGFuZ2UgY3VycmVudCBsb2NhbGUgZ2xvYmFsbHkgdGhyb3VnaG91dCB0aGUgV0hPTEUgYXBwbGljYXRpb25cbiAgICogW05PVEVdIElmIGNhbGxlZCBhdCBydW50aW1lLCByZW5kZXJlZCBpbnRlcmZhY2UgbWF5IG5vdCBjaGFuZ2UgYWxvbmcgd2l0aCB0aGUgbG9jYWxlIGNoYW5nZSAoYmVjYXVzZSB0aGlzIGRvIG5vdCB0cmlnZ2VyIGFub3RoZXIgcmVuZGVyIHNjaGVkdWxlKVxuICAgKiBAcGFyYW0gbG9jYWxlIFRoZSB0cmFuc2xhdGluZyBsZXR0ZXJzXG4gICAqL1xuICBzZXRMb2NhbGUobG9jYWxlOiBEd0kxOG5JbnRlcmZhY2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5sb2NhbGUgPT09IGxvY2FsZS5sb2NhbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xuICAgIHRoaXMuX2NoYW5nZS5uZXh0KGxvY2FsZSk7XG4gIH1cblxuICBnZXRMb2NhbGUoKTogRHdJMThuSW50ZXJmYWNlIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xuICB9XG5cbiAgZ2V0TG9jYWxlSWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlID8gdGhpcy5fbG9jYWxlLmxvY2FsZSA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsb2NhbGUgZGF0YVxuICAgKiBAcGFyYW0gcGF0aCBkb3QgcGF0aHMgZm9yIGZpbmRpbmcgZXhpc3QgdmFsdWUgZnJvbSBsb2NhbGUgZGF0YSwgZWcuIFwiYS5iLmNcIlxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGRlZmF1bHQgdmFsdWUgaWYgdGhlIHJlc3VsdCBpcyBub3QgXCJ0cnV0aHlcIlxuICAgKi9cbiAgZ2V0TG9jYWxlRGF0YShwYXRoPzogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGggPyB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgOiB0aGlzLl9sb2NhbGU7XG4gICAgcmV0dXJuIHJlc3VsdCB8fCBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBmb3JtYXREYXRlKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGZvcm1hdCwgbnVsbCwgbG9jYWxlIHx8IHRoaXMuZ2V0TG9jYWxlKCkubG9jYWxlKSA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBkYXRlIHdpdGggY29tcGF0aWJsZSBmb3IgdGhlIGZvcm1hdCBvZiBtb21lbnQgYW5kIG90aGVyc1xuICAgKiBXaHk/IEZvciBub3csIHdlIG5lZWQgdG8gc3VwcG9ydCB0aGUgZXhpc3RpbmcgbGFuZ3VhZ2UgZm9ybWF0cyBpbiBBbnRELCBhbmQgQW50RCB1c2VzIHRoZSBkZWZhdWx0IHRlbXBvcmFsIHN5bnRheC5cbiAgICovXG4gIGZvcm1hdERhdGVDb21wYXRpYmxlKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXREYXRlKGRhdGUsIHRoaXMuY29tcGF0RGF0ZUZvcm1hdChmb3JtYXQpLCBsb2NhbGUpO1xuICB9XG5cbiAgcGFyc2VEYXRlKHRleHQ6IHN0cmluZyk6IERhdGUge1xuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2UodGV4dCk7XG4gIH1cblxuICBwYXJzZVRpbWUodGV4dDogc3RyaW5nKTogRGF0ZSB7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBwYXJzZShgMTk3MC0wMS0wMSAke3RleHR9YCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRPYmplY3RQYXRoKG9iajogb2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBvYmplY3QgfCBhbnkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIGxldCByZXMgPSBvYmo7XG4gICAgY29uc3QgcGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgY29uc3QgZGVwdGggPSBwYXRocy5sZW5ndGg7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAocmVzICYmIGluZGV4IDwgZGVwdGgpIHtcbiAgICAgIHJlcyA9IHJlc1sgcGF0aHNbIGluZGV4KysgXSBdO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXggPT09IGRlcHRoID8gcmVzIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wYXRpYmxlIHRyYW5zbGF0ZSB0aGUgbW9tZW50LWxpa2UgZm9ybWF0IHBhdHRlcm4gdG8gYW5ndWxhcidzIHBhdHRlcm5cbiAgICogV2h5PyBGb3Igbm93LCB3ZSBuZWVkIHRvIHN1cHBvcnQgdGhlIGV4aXN0aW5nIGxhbmd1YWdlIGZvcm1hdHMgaW4gQW50RCwgYW5kIEFudEQgdXNlcyB0aGUgZGVmYXVsdCB0ZW1wb3JhbCBzeW50YXguXG4gICAqXG4gICAqIFRPRE86IGNvbXBhcmUgYW5kIGNvbXBsZXRlIGFsbCBmb3JtYXQgcGF0dGVybnNcbiAgICogRWFjaCBmb3JtYXQgZG9jcyBhcyBiZWxvdzpcbiAgICogQGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xuICAgKiBAbGluayBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9EYXRlUGlwZSNkZXNjcmlwdGlvblxuICAgKiBAcGFyYW0gZm9ybWF0IGlucHV0IGZvcm1hdCBwYXR0ZXJuXG4gICAqL1xuICBwcml2YXRlIGNvbXBhdERhdGVGb3JtYXQoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXQgJiYgZm9ybWF0XG4gICAgLnJlcGxhY2UoL1kvZywgJ3knKSAvLyBvbmx5IHN1cHBvcnQgeSwgeXksIHl5eSwgeXl5eVxuICAgIC5yZXBsYWNlKC9EL2csICdkJyk7IC8vIGQsIGRkIHJlcHJlc2VudCBvZiBELCBERCBmb3IgbW9tZW50anMsIG90aGVycyBhcmUgbm90IHN1cHBvcnRcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRFdfTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogRHdJMThuU2VydmljZSwgbG9jYWxlOiBEd0kxOG5JbnRlcmZhY2UsIGxvZ2dlcjogTG9nZ2VyU2VydmljZSwgZGF0ZVBpcGU6IERhdGVQaXBlKTogRHdJMThuU2VydmljZSB7XG4gIHJldHVybiBleGlzdCB8fCBuZXcgRHdJMThuU2VydmljZShsb2NhbGUsIGxvZ2dlciwgZGF0ZVBpcGUpO1xufVxuXG5leHBvcnQgY29uc3QgRFdfSTE4Tl9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZSAgIDogRHdJMThuU2VydmljZSxcbiAgdXNlRmFjdG9yeTogRFdfTE9DQUxFX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwcyAgICAgIDogWyBbIG5ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgRHdJMThuU2VydmljZSBdLCBEV19JMThOLCBMb2dnZXJTZXJ2aWNlLCBEYXRlUGlwZSBdXG59O1xuIl19
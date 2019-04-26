/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
export class LoggerService {
    /**
     * @param {?} _loggerState
     */
    constructor(_loggerState) {
        this._loggerState = _loggerState;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (this._loggerState) {
            // console.warn(...args);
            console.warn.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (this._loggerState) {
            // console.error(...args);
            console.error.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (this._loggerState) {
            /** @type {?} */
            const arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[WEBDPT-DEBUG]'].concat(arrs));
        }
    }
}
LoggerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [DW_LOGGER_STATE,] }] }
];
function LoggerService_tsickle_Closure_declarations() {
    /** @type {?} */
    LoggerService.prototype._loggerState;
}
/** @type {?} */
export const DW_LOGGER_STATE = new InjectionToken('dw-logger-state');
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) { return exist || new LoggerService(loggerState); }
/** @type {?} */
export const LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], DW_LOGGER_STATE]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE1BQU07Ozs7SUFDSixZQUE2QyxZQUFxQjtRQUFyQixpQkFBWSxHQUFaLFlBQVksQ0FBUztLQUFJOzs7OztJQUV0RSxHQUFHLENBQUMsR0FBRyxJQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7O0lBRUQsSUFBSSxDQUFDLEdBQUcsSUFBVztRQUNqQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBRXJCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4QztLQUNGOzs7OztJQUVELEtBQUssQ0FBQyxHQUFHLElBQVc7UUFDbEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFOztZQUVyQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDekM7S0FDRjs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBRyxJQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7O0lBRUQsS0FBSyxDQUFDLEdBQUcsSUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7O1lBRXJCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzdEO0tBQ0Y7OztZQXRDRixVQUFVOzs7OzBDQUVJLE1BQU0sU0FBQyxlQUFlOzs7Ozs7O0FBdUNyQyxhQUFhLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBVSxpQkFBaUIsQ0FBQyxDQUFDOzs7Ozs7QUFFOUUsTUFBTSwwQ0FBMEMsS0FBb0IsRUFBRSxXQUFvQixJQUFtQixPQUFPLEtBQUssSUFBSSxJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFOztBQUU5SixhQUFhLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFFLENBQUUsQ0FBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFFLEVBQUUsZUFBZSxDQUFFO0NBQzdFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERXX0xPR0dFUl9TVEFURSkgcHJpdmF0ZSBfbG9nZ2VyU3RhdGU6IGJvb2xlYW4pIHt9XG5cbiAgbG9nKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgd2FybiguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgLy8gY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZXJyb3IoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgaW5mbyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnW1dFQkRQVC1ERUJVR10nLCAuLi5hcmdzKTtcbiAgICAgIGNvbnN0IGFycnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydbV0VCRFBULURFQlVHXSddLmNvbmNhdChhcnJzKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEV19MT0dHRVJfU1RBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ2R3LWxvZ2dlci1zdGF0ZScpOyAvLyBXaGV0aGVyIHByaW50IHRoZSBsb2dcblxuZXhwb3J0IGZ1bmN0aW9uIExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IExvZ2dlclNlcnZpY2UsIGxvZ2dlclN0YXRlOiBib29sZWFuKTogTG9nZ2VyU2VydmljZSB7IHJldHVybiBleGlzdCB8fCBuZXcgTG9nZ2VyU2VydmljZShsb2dnZXJTdGF0ZSk7IH1cblxuZXhwb3J0IGNvbnN0IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTG9nZ2VyU2VydmljZSxcbiAgdXNlRmFjdG9yeTogTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwczogWyBbIG5ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTG9nZ2VyU2VydmljZSBdLCBEV19MT0dHRVJfU1RBVEUgXVxufTtcbiJdfQ==
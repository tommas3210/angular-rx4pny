/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
var LoggerService = /** @class */ (function () {
    function LoggerService(_loggerState) {
        this._loggerState = _loggerState;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.log = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.warn = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.warn(...args);
            console.warn.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.error = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.error(...args);
            console.error.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.info = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            // console.log(...args);
            console.log.apply(console, arguments);
        }
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.debug = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            /** @type {?} */
            var arrs = Array.prototype.slice.call(arguments);
            console.log.apply(console, ['[WEBDPT-DEBUG]'].concat(arrs));
        }
    };
    LoggerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [DW_LOGGER_STATE,] }] }
    ]; };
    return LoggerService;
}());
export { LoggerService };
function LoggerService_tsickle_Closure_declarations() {
    /** @type {?} */
    LoggerService.prototype._loggerState;
}
/** @type {?} */
export var DW_LOGGER_STATE = new InjectionToken('dw-logger-state');
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) { return exist || new LoggerService(loggerState); }
/** @type {?} */
export var LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], DW_LOGGER_STATE]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC9sb2dnZXIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUkvRix1QkFBNkMsWUFBcUI7UUFBckIsaUJBQVksR0FBWixZQUFZLENBQVM7S0FBSTs7Ozs7SUFFdEUsMkJBQUc7Ozs7SUFBSDtRQUFJLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7O0lBRUQsNEJBQUk7Ozs7SUFBSjtRQUFLLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7O0lBRUQsNkJBQUs7Ozs7SUFBTDtRQUFNLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0Y7Ozs7O0lBRUQsNEJBQUk7Ozs7SUFBSjtRQUFLLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7O0lBRUQsNkJBQUs7Ozs7SUFBTDtRQUFNLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTs7WUFFckIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDN0Q7S0FDRjs7Z0JBdENGLFVBQVU7Ozs7OENBRUksTUFBTSxTQUFDLGVBQWU7O3dCQUxyQzs7U0FJYSxhQUFhOzs7Ozs7QUF3QzFCLFdBQWEsZUFBZSxHQUFHLElBQUksY0FBYyxDQUFVLGlCQUFpQixDQUFDLENBQUM7Ozs7OztBQUU5RSxNQUFNLDBDQUEwQyxLQUFvQixFQUFFLFdBQW9CLElBQW1CLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUU7O0FBRTlKLFdBQWEsdUJBQXVCLEdBQWE7SUFDL0MsT0FBTyxFQUFFLGFBQWE7SUFDdEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUUsRUFBRSxlQUFlLENBQUU7Q0FDN0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRFdfTE9HR0VSX1NUQVRFKSBwcml2YXRlIF9sb2dnZXJTdGF0ZTogYm9vbGVhbikge31cblxuICBsb2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICB3YXJuKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBlcnJvciguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgLy8gY29uc29sZS5lcnJvciguLi5hcmdzKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBpbmZvKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZGVidWcoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdbV0VCRFBULURFQlVHXScsIC4uLmFyZ3MpO1xuICAgICAgY29uc3QgYXJycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ1tXRUJEUFQtREVCVUddJ10uY29uY2F0KGFycnMpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERXX0xPR0dFUl9TVEFURSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxib29sZWFuPignZHctbG9nZ2VyLXN0YXRlJyk7IC8vIFdoZXRoZXIgcHJpbnQgdGhlIGxvZ1xuXG5leHBvcnQgZnVuY3Rpb24gTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogTG9nZ2VyU2VydmljZSwgbG9nZ2VyU3RhdGU6IGJvb2xlYW4pOiBMb2dnZXJTZXJ2aWNlIHsgcmV0dXJuIGV4aXN0IHx8IG5ldyBMb2dnZXJTZXJ2aWNlKGxvZ2dlclN0YXRlKTsgfVxuXG5leHBvcnQgY29uc3QgTE9HR0VSX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBMb2dnZXJTZXJ2aWNlLFxuICB1c2VGYWN0b3J5OiBMT0dHRVJfU0VSVklDRV9QUk9WSURFUl9GQUNUT1JZLFxuICBkZXBzOiBbIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMb2dnZXJTZXJ2aWNlIF0sIERXX0xPR0dFUl9TVEFURSBdXG59O1xuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var defaultDisabledTime = {
    dwDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    dwDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    dwDisabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : /** @type {?} */ ({});
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.dwDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.dwDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.dwDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsSUFBTSxtQkFBbUIsR0FBdUI7SUFDOUMsZUFBZTs7O0lBQWY7UUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsaUJBQWlCOzs7SUFBakI7UUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsaUJBQWlCOzs7SUFBakI7UUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNYO0NBQ0YsQ0FBQzs7Ozs7O0FBRUYsTUFBTSx3QkFBd0IsS0FBZ0IsRUFBRSxZQUE0Qjs7SUFDMUUsSUFBSSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsbUJBQUMsRUFBd0IsQ0FBQSxDQUFDO0lBQzNHLGtCQUFrQix3QkFDYixtQkFBbUIsRUFDbkIsa0JBQWtCLENBQ3RCLENBQUM7SUFDRixPQUFPLGtCQUFrQixDQUFDO0NBQzNCOzs7Ozs7QUFFRCxNQUFNLDhCQUE4QixLQUFnQixFQUFFLGtCQUFzQzs7SUFDMUYsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLElBQUksS0FBSyxFQUFFOztRQUNULElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFDOUIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUNuQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ25DLElBQU0sYUFBYSxHQUFHLGtCQUFrQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7WUFDdEMsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkUsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztnQkFDM0MsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RSxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDcEI7S0FDRjtJQUNELE9BQU8sQ0FBQyxXQUFXLENBQUM7Q0FDckI7Ozs7OztBQUVELE1BQU0sc0JBQXNCLEtBQWdCLEVBQUUsWUFBNEI7O0lBQ3hFLElBQU0sa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxPQUFPLG1CQUFtQixDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0NBQ3ZEOzs7Ozs7O0FBRUQsTUFBTSx3QkFBd0IsS0FBZ0IsRUFBRSxZQUE2QixFQUFFLFlBQTZCO0lBQzFHLElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2NhbmR5LWRhdGUnO1xuXG5jb25zdCBkZWZhdWx0RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVDb25maWcgPSB7XG4gIGR3RGlzYWJsZWRIb3VycygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICBkd0Rpc2FibGVkTWludXRlcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICBkd0Rpc2FibGVkU2Vjb25kcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogRGlzYWJsZWRUaW1lQ29uZmlnIHtcbiAgbGV0IGRpc2FibGVkVGltZUNvbmZpZyA9IGRpc2FibGVkVGltZSA/IGRpc2FibGVkVGltZSh2YWx1ZSAmJiB2YWx1ZS5uYXRpdmVEYXRlKSA6IHt9IGFzIERpc2FibGVkVGltZUNvbmZpZztcbiAgZGlzYWJsZWRUaW1lQ29uZmlnID0ge1xuICAgIC4uLmRlZmF1bHREaXNhYmxlZFRpbWUsXG4gICAgLi4uZGlzYWJsZWRUaW1lQ29uZmlnXG4gIH07XG4gIHJldHVybiBkaXNhYmxlZFRpbWVDb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZUNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKTogYm9vbGVhbiB7XG4gIGxldCBpbnZhbGlkVGltZSA9IGZhbHNlO1xuICBpZiAodmFsdWUpIHtcbiAgICBjb25zdCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkVGltZUNvbmZpZy5kd0Rpc2FibGVkSG91cnMoKTtcbiAgICBpZiAoZGlzYWJsZWRIb3Vycy5pbmRleE9mKGhvdXIpID09PSAtMSkge1xuICAgICAgY29uc3QgZGlzYWJsZWRNaW51dGVzID0gZGlzYWJsZWRUaW1lQ29uZmlnLmR3RGlzYWJsZWRNaW51dGVzKGhvdXIpO1xuICAgICAgaWYgKGRpc2FibGVkTWludXRlcy5pbmRleE9mKG1pbnV0ZXMpID09PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSBkaXNhYmxlZFRpbWVDb25maWcuZHdEaXNhYmxlZFNlY29uZHMoaG91ciwgbWludXRlcyk7XG4gICAgICAgIGludmFsaWRUaW1lID0gZGlzYWJsZWRTZWNvbmRzLmluZGV4T2Yoc2Vjb25kcykgIT09IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhbGlkVGltZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiAhaW52YWxpZFRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZCh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpc2FibGVkVGltZUNvbmZpZyA9IGdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZSk7XG4gIHJldHVybiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVDb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxvd2VkRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbiwgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcbiAgaWYgKGRpc2FibGVkRGF0ZSkge1xuICAgIGlmIChkaXNhYmxlZERhdGUodmFsdWUubmF0aXZlRGF0ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpc2FibGVkVGltZSkge1xuICAgIGlmICghaXNUaW1lVmFsaWQodmFsdWUsIGRpc2FibGVkVGltZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=
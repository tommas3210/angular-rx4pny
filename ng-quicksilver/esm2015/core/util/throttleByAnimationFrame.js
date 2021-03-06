/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    let requestId;
    /** @type {?} */
    const later = (args) => () => {
        requestId = null;
        fn(...args);
    };
    /** @type {?} */
    const throttled = (...args) => {
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    // tslint:disable-next-line:no-non-null-assertion
    (/** @type {?} */ (throttled)).cancel = () => cancelRequestAnimationFrame(/** @type {?} */ ((requestId)));
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        /** @type {?} */
        const fn = descriptor.value;
        /** @type {?} */
        let definingProperty = false;
        return {
            configurable: true,
            /**
             * @return {?}
             */
            get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                const boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true,
                });
                definingProperty = false;
                return boundFn;
            },
        };
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJjb3JlL3V0aWwvdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBRTFGLE1BQU0sQ0FBQyxPQUFPLG1DQUFtQyxFQUFPOztJQUN0RCxJQUFJLFNBQVMsQ0FBZ0I7O0lBRTdCLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNiLENBQUM7O0lBRUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1FBQ25DLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0YsQ0FBQzs7SUFHRixtQkFBQyxTQUFnQixFQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixvQkFBQyxTQUFTLEdBQUUsQ0FBQztJQUUxRSxPQUFPLFNBQVMsQ0FBQztDQUNsQjs7OztBQUVELE1BQU07SUFDSixPQUFPLFVBQVMsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlOztRQUN2RCxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDOztRQUM1QixJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM3QixPQUFPO1lBQ0wsWUFBWSxFQUFFLElBQUk7Ozs7WUFDbEIsR0FBRztnQkFDRCxJQUFJLGdCQUFnQixJQUFJLElBQUksS0FBSyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdFLE9BQU8sRUFBRSxDQUFDO2lCQUNYOztnQkFFRCxNQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO29CQUMvQixLQUFLLEVBQUUsT0FBTztvQkFDZCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDekIsT0FBTyxPQUFPLENBQUM7YUFDaEI7U0FDRixDQUFDO0tBQ0gsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXG5pbXBvcnQgeyBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuOiBhbnkpIHtcbiAgbGV0IHJlcXVlc3RJZDogbnVtYmVyIHwgbnVsbDtcblxuICBjb25zdCBsYXRlciA9IChhcmdzOiBhbnlbXSkgPT4gKCkgPT4ge1xuICAgIHJlcXVlc3RJZCA9IG51bGw7XG4gICAgZm4oLi4uYXJncyk7XG4gIH07XG5cbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKHJlcXVlc3RJZCA9PSBudWxsKSB7XG4gICAgICByZXF1ZXN0SWQgPSByZXFBbmltRnJhbWUobGF0ZXIoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICh0aHJvdHRsZWQgYXMgYW55KS5jYW5jZWwgPSAoKSA9PiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdElkISk7XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XG4gICAgY29uc3QgZm4gPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGxldCBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldCgpIHtcbiAgICAgICAgaWYgKGRlZmluaW5nUHJvcGVydHkgfHwgdGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSB8fCB0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib3VuZEZuID0gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuLmJpbmQodGhpcykpO1xuICAgICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuICAgICAgICAgIHZhbHVlOiBib3VuZEZuLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iXX0=
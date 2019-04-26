/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function matchMediaFunc() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.matchMedia) {
        return window.matchMedia.bind(window);
    }
    else {
        /** @type {?} */
        var matchMediaPolyfill = function (mediaQuery) {
            return {
                media: mediaQuery,
                matches: false,
                addListener: /**
                 * @return {?}
                 */
                function () {
                },
                removeListener: /**
                 * @return {?}
                 */
                function () {
                },
            };
        };
        return matchMediaPolyfill;
    }
}
/** @type {?} */
export var matchMedia = matchMediaFunc();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvcG9seWZpbGwvbWF0Y2gtbWVkaWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBQ0UsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsT0FBTyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztLQUNuQjtJQUNELElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUNyQixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZDO1NBQU07O1FBQ0wsSUFBTSxrQkFBa0IsR0FBRyxVQUFDLFVBQWtCO1lBQzVDLE9BQU87Z0JBQ0wsS0FBSyxFQUFJLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFdBQVc7OztnQkFBWDtpQkFDQztnQkFDRCxjQUFjOzs7Z0JBQWQ7aUJBQ0M7YUFDRixDQUFDO1NBQ0gsQ0FBQztRQUNGLE9BQU8sa0JBQWtCLENBQUM7S0FDM0I7Q0FDRjs7QUFFRCxXQUFhLFVBQVUsR0FBRyxjQUFjLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG1hdGNoTWVkaWFGdW5jKCk6IChtZWRpYVF1ZXJ5OiBzdHJpbmcpID0+IE1lZGlhUXVlcnlMaXN0IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICgpID0+IG51bGw7XG4gIH1cbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhLmJpbmQod2luZG93KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtYXRjaE1lZGlhUG9seWZpbGwgPSAobWVkaWFRdWVyeTogc3RyaW5nKTogTWVkaWFRdWVyeUxpc3QgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVkaWEgIDogbWVkaWFRdWVyeSxcbiAgICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICAgIGFkZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gbWF0Y2hNZWRpYVBvbHlmaWxsO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYXRjaE1lZGlhID0gbWF0Y2hNZWRpYUZ1bmMoKTtcbiJdfQ==
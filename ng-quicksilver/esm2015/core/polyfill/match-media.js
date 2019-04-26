/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function matchMediaFunc() {
    if (typeof window === 'undefined') {
        return () => null;
    }
    if (window.matchMedia) {
        return window.matchMedia.bind(window);
    }
    else {
        /** @type {?} */
        const matchMediaPolyfill = (mediaQuery) => {
            return {
                media: mediaQuery,
                matches: false,
                /**
                 * @return {?}
                 */
                addListener() {
                },
                /**
                 * @return {?}
                 */
                removeListener() {
                },
            };
        };
        return matchMediaPolyfill;
    }
}
/** @type {?} */
export const matchMedia = matchMediaFunc();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtbWVkaWEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvcG9seWZpbGwvbWF0Y2gtbWVkaWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBQ0UsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7S0FDbkI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDckIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2QztTQUFNOztRQUNMLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxVQUFrQixFQUFrQixFQUFFO1lBQ2hFLE9BQU87Z0JBQ0wsS0FBSyxFQUFJLFVBQVU7Z0JBQ25CLE9BQU8sRUFBRSxLQUFLOzs7O2dCQUNkLFdBQVc7aUJBQ1Y7Ozs7Z0JBQ0QsY0FBYztpQkFDYjthQUNGLENBQUM7U0FDSCxDQUFDO1FBQ0YsT0FBTyxrQkFBa0IsQ0FBQztLQUMzQjtDQUNGOztBQUVELGFBQWEsVUFBVSxHQUFHLGNBQWMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWF0Y2hNZWRpYUZ1bmMoKTogKG1lZGlhUXVlcnk6IHN0cmluZykgPT4gTWVkaWFRdWVyeUxpc3Qge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfVxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEuYmluZCh3aW5kb3cpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1hdGNoTWVkaWFQb2x5ZmlsbCA9IChtZWRpYVF1ZXJ5OiBzdHJpbmcpOiBNZWRpYVF1ZXJ5TGlzdCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZWRpYSAgOiBtZWRpYVF1ZXJ5LFxuICAgICAgICBtYXRjaGVzOiBmYWxzZSxcbiAgICAgICAgYWRkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBtYXRjaE1lZGlhUG9seWZpbGw7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hdGNoTWVkaWEgPSBtYXRjaE1lZGlhRnVuYygpO1xuIl19
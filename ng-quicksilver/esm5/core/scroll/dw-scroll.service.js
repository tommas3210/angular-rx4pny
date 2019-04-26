/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var DwScrollService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function DwScrollService(doc) {
        this.doc = doc;
    }
    /** 设置 `el` 滚动条位置 */
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    DwScrollService.prototype.setScrollTop = /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            (/** @type {?} */ (el)).scrollTop = topValue;
        }
    };
    /** 获取 `el` 相对于视窗距离 */
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    DwScrollService.prototype.getOffset = /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** 获取 `el` 滚动条位置 */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    DwScrollService.prototype.getScroll = /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    };
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param containerEl 容器，默认 `window`
     * @param targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param easing 动作算法，默认：`easeInOutCubic`
     * @param callback 动画结束后回调
     */
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    DwScrollService.prototype.scrollTo = /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    };
    DwScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DwScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return DwScrollService;
}());
export { DwScrollService };
function DwScrollService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new DwScrollService(doc);
}
/** @type {?} */
export var SCROLL_SERVICE_PROVIDER = {
    provide: DwScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), DwScrollService]]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvc2Nyb2xsL2R3LXNjcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7O0FBSTdELHdCQUF3QixDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTOztJQUNoRSxJQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztJQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ1YsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNsQztTQUFNO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0M7Q0FDRjs7SUFNQyxxQ0FBcUM7SUFDckMseUJBQThCLEdBQVE7UUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDaEI7SUFFRCxvQkFBb0I7Ozs7Ozs7SUFDcEIsc0NBQVk7Ozs7OztJQUFaLFVBQWEsRUFBb0IsRUFBRSxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBQ3JELElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNqQixJQUFJ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QUM7WUFDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1RixJQUFJLElBQUksR0FBRyxHQUFHLEVBQUU7Z0JBQ2QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksUUFBUTtvQkFBRSxRQUFRLEVBQUUsQ0FBQzthQUMxQjtTQUNGLENBQUM7UUFDRixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekI7O2dCQWxGRixVQUFVOzs7O2dEQUtJLE1BQU0sU0FBQyxRQUFROzswQkF0QjlCOztTQWtCYSxlQUFlOzs7Ozs7Ozs7O0FBcUY1QixNQUFNLDBDQUEwQyxHQUFhLEVBQUUsYUFBOEI7SUFDM0YsT0FBTyxhQUFhLElBQUksSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDbEQ7O0FBRUQsV0FBYSx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUssZUFBZTtJQUMzQixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBUSxDQUFFLFFBQVEsRUFBRSxDQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxlQUFlLENBQUUsQ0FBRTtDQUM5RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcblxuZXhwb3J0IHR5cGUgRWFzeWluZ0ZuID0gKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5mdW5jdGlvbiBlYXNlSW5PdXRDdWJpYyh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjYyA9IGMgLSBiO1xuICBsZXQgdHQgPSB0IC8gKGQgLyAyKTtcbiAgaWYgKHR0IDwgMSkge1xuICAgIHJldHVybiBjYyAvIDIgKiB0dCAqIHR0ICogdHQgKyBiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYyAvIDIgKiAoKHR0IC09IDIpICogdHQgKiB0dCArIDIpICsgYjtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHdTY3JvbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkb2M6IERvY3VtZW50O1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnkpIHtcbiAgICB0aGlzLmRvYyA9IGRvYztcbiAgfVxuXG4gIC8qKiDorr7nva4gYGVsYCDmu5rliqjmnaHkvY3nva4gKi9cbiAgc2V0U2Nyb2xsVG9wKGVsOiBFbGVtZW50IHwgV2luZG93LCB0b3BWYWx1ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmIChlbCA9PT0gd2luZG93KSB7XG4gICAgICB0aGlzLmRvYy5ib2R5LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZWwgYXMgRWxlbWVudCkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIOiOt+WPliBgZWxgIOebuOWvueS6juinhueql+i3neemuyAqL1xuICBnZXRPZmZzZXQoZWw6IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgdG9wIDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuICAgIGlmICghZWwgfHwgIWVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSByZXR1cm4gcmV0O1xuXG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChyZWN0LndpZHRoIHx8IHJlY3QuaGVpZ2h0KSB7XG4gICAgICBjb25zdCBkb2MgPSBlbC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcCAtIGRvYy5jbGllbnRUb3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdCAtIGRvYy5jbGllbnRMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQudG9wID0gcmVjdC50b3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqIOiOt+WPliBgZWxgIOa7muWKqOadoeS9jee9riAqL1xuICAvLyBUT0RPOiByZW1vdmUgJ3wgV2luZG93JyBhcyB0aGUgZmFsbGJhY2sgYWxyZWFkeSBoYXBwZW5zIGhlcmVcbiAgZ2V0U2Nyb2xsKGVsPzogRWxlbWVudCB8IFdpbmRvdywgdG9wOiBib29sZWFuID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZWwgPyBlbCA6IHdpbmRvdztcbiAgICBjb25zdCBwcm9wID0gdG9wID8gJ3BhZ2VZT2Zmc2V0JyA6ICdwYWdlWE9mZnNldCc7XG4gICAgY29uc3QgbWV0aG9kID0gdG9wID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gICAgY29uc3QgaXNXaW5kb3cgPSB0YXJnZXQgPT09IHdpbmRvdztcbiAgICBsZXQgcmV0ID0gaXNXaW5kb3cgPyB0YXJnZXRbIHByb3AgXSA6IHRhcmdldFsgbWV0aG9kIF07XG4gICAgaWYgKGlzV2luZG93ICYmIHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICByZXQgPSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnRbIG1ldGhvZCBdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIOS9v+eUqOWKqOeUu+W9ouW8j+WwhiBgZWxgIOa7muWKqOiHs+afkOS9jee9rlxuICAgKlxuICAgKiBAcGFyYW0gY29udGFpbmVyRWwg5a655Zmo77yM6buY6K6kIGB3aW5kb3dgXG4gICAqIEBwYXJhbSB0YXJnZXRUb3BWYWx1ZSDmu5rliqjoh7Pnm67moIcgYHRvcGAg5YC877yM6buY6K6k77yaMO+8jOebuOW9k+S6jumhtumDqFxuICAgKiBAcGFyYW0gZWFzaW5nIOWKqOS9nOeul+azle+8jOm7mOiupO+8mmBlYXNlSW5PdXRDdWJpY2BcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWKqOeUu+e7k+adn+WQjuWbnuiwg1xuICAgKi9cbiAgc2Nyb2xsVG8oXG4gICAgY29udGFpbmVyRWw6IEVsZW1lbnQgfCBXaW5kb3csXG4gICAgdGFyZ2V0VG9wVmFsdWU6IG51bWJlciA9IDAsXG4gICAgZWFzaW5nPzogRWFzeWluZ0ZuLFxuICAgIGNhbGxiYWNrPzogKCkgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBjb250YWluZXJFbCA/IGNvbnRhaW5lckVsIDogd2luZG93O1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsKHRhcmdldCk7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBmcmFtZUZ1bmMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgdGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsVG9wKHRhcmdldCwgKGVhc2luZyB8fCBlYXNlSW5PdXRDdWJpYykodGltZSwgc2Nyb2xsVG9wLCB0YXJnZXRUb3BWYWx1ZSwgNDUwKSk7XG4gICAgICBpZiAodGltZSA8IDQ1MCkge1xuICAgICAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZG9jOiBEb2N1bWVudCwgc2Nyb2xsU2VydmljZTogRHdTY3JvbGxTZXJ2aWNlKTogRHdTY3JvbGxTZXJ2aWNlIHtcbiAgcmV0dXJuIHNjcm9sbFNlcnZpY2UgfHwgbmV3IER3U2Nyb2xsU2VydmljZShkb2MpO1xufVxuXG5leHBvcnQgY29uc3QgU0NST0xMX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlICAgOiBEd1Njcm9sbFNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHMgICAgICA6IFsgRE9DVU1FTlQsIFsgbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBEd1Njcm9sbFNlcnZpY2UgXSBdXG59O1xuIl19
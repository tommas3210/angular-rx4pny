/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class DwSliderService {
    /**
     * @param {?} e
     * @return {?}
     */
    pauseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * @param {?} num
     * @return {?}
     */
    getPrecision(num) {
        /** @type {?} */
        const numStr = num.toString();
        /** @type {?} */
        const dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    }
    /**
     * @template T
     * @param {?} arr
     * @return {?}
     */
    cloneArray(arr) {
        return arr.slice();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    isNotTouchEvent(e) {
        return !e.touches || e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    }
    /**
     * @param {?} min
     * @param {?} max
     * @param {?} value
     * @return {?}
     */
    valueToOffset(min, max, value) {
        return (value - min) / (max - min) * 100;
    }
    /**
     * @param {?} num
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    correctNumLimit(num, min, max) {
        /** @type {?} */
        let res = +num;
        if (isNaN(res)) {
            return min;
        }
        if (num < min) {
            res = min;
        }
        else if (num > max) {
            res = max;
        }
        return res;
    }
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param {?} elem HTMLElement ref
     * @return {?}
     */
    getElementOffset(elem) {
        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        /** @type {?} */
        const rect = elem.getBoundingClientRect();
        /** @type {?} */
        const win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    }
}
DwSliderService.decorators = [
    { type: Injectable }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInNsaWRlci9kdy1zbGlkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNOzs7OztJQUVKLFVBQVUsQ0FBQyxDQUFRO1FBQ2pCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsWUFBWSxDQUFDLEdBQVc7O1FBQ3RCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFDOUIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxPQUFPLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pEOzs7Ozs7SUFFRCxVQUFVLENBQUksR0FBUTtRQUNwQixPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxlQUFlLENBQUMsQ0FBYTtRQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDakU7Ozs7Ozs7SUFHRCxhQUFhLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxLQUFhO1FBQ25ELE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQzFDOzs7Ozs7O0lBRUQsZUFBZSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVzs7UUFDbkQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDZixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLE9BQU8sR0FBRyxDQUFDO1NBQUU7UUFDL0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO2FBQU0sSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUFFO1FBQ2hFLE9BQU8sR0FBRyxDQUFDO0tBQ1o7Ozs7OztJQU1ELGdCQUFnQixDQUFDLElBQWlCOzs7OztRQUtoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNqQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDNUI7O1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1FBQzFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzNDLE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVztZQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVztTQUNsQyxDQUFDO0tBQ0g7OztZQXRERixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRHdTbGlkZXJTZXJ2aWNlIHtcblxuICBwYXVzZUV2ZW50KGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBnZXRQcmVjaXNpb24obnVtOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IG51bVN0ciA9IG51bS50b1N0cmluZygpO1xuICAgIGNvbnN0IGRvdEluZGV4ID0gbnVtU3RyLmluZGV4T2YoJy4nKTtcbiAgICByZXR1cm4gZG90SW5kZXggPj0gMCA/IG51bVN0ci5sZW5ndGggLSBkb3RJbmRleCAtIDEgOiAwO1xuICB9XG5cbiAgY2xvbmVBcnJheTxUPihhcnI6IFRbXSk6IFRbXSB7XG4gICAgcmV0dXJuIGFyci5zbGljZSgpO1xuICB9XG5cbiAgaXNOb3RUb3VjaEV2ZW50KGU6IFRvdWNoRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIWUudG91Y2hlcyB8fCBlLnRvdWNoZXMubGVuZ3RoID4gMSB8fFxuICAgICAgKGUudHlwZS50b0xvd2VyQ2FzZSgpID09PSAndG91Y2hlbmQnICYmIGUudG91Y2hlcy5sZW5ndGggPiAwKTtcbiAgfVxuXG4gIC8vIGNvbnZlcnQgdmFsdWUgdG8gb2Zmc2V0IGluIHBlcmNlbnRcbiAgdmFsdWVUb09mZnNldChtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikgKiAxMDA7XG4gIH1cblxuICBjb3JyZWN0TnVtTGltaXQobnVtOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHJlcyA9ICtudW07XG4gICAgaWYgKGlzTmFOKHJlcykpIHsgcmV0dXJuIG1pbjsgfVxuICAgIGlmIChudW0gPCBtaW4pIHsgcmVzID0gbWluOyB9IGVsc2UgaWYgKG51bSA+IG1heCkgeyByZXMgPSBtYXg7IH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCB0aGUgb2Zmc2V0IG9mIGFuIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50IChSZWZlcmVuY2UgZnJvbSBqcXVlcnkncyBvZmZzZXQoKSlcbiAgICogQHBhcmFtIGVsZW0gSFRNTEVsZW1lbnQgcmVmXG4gICAqL1xuICBnZXRFbGVtZW50T2Zmc2V0KGVsZW06IEhUTUxFbGVtZW50KTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0ge1xuICAgIC8vIFJldHVybiB6ZXJvcyBmb3IgZGlzY29ubmVjdGVkIGFuZCBoaWRkZW4gKGRpc3BsYXk6IG5vbmUpIGVsZW1lbnRzIChnaC0yMzEwKVxuICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAgIC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcbiAgICAvLyBkaXNjb25uZWN0ZWQgbm9kZSBpbiBJRSB0aHJvd3MgYW4gZXJyb3JcbiAgICBpZiAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xuICAgIH1cbiAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXG4gICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0XG4gICAgfTtcbiAgfVxuXG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var DwMeasureScrollbarService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function DwMeasureScrollbarService(document) {
        this.document = document;
        this.scrollbarMeasure = {
            position: 'absolute',
            top: '-9999px',
            width: '50px',
            height: '50px',
            overflow: 'scroll'
        };
        this.initScrollBarWidth();
    }
    Object.defineProperty(DwMeasureScrollbarService.prototype, "scrollBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (isNotNil(this._scrollbarWidth)) {
                return this._scrollbarWidth;
            }
            this.initScrollBarWidth();
            return this._scrollbarWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwMeasureScrollbarService.prototype.initScrollBarWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.document.createElement('div');
        for (var scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        /** @type {?} */
        var width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    };
    DwMeasureScrollbarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DwMeasureScrollbarService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ DwMeasureScrollbarService.ngInjectableDef = i0.defineInjectable({ factory: function DwMeasureScrollbarService_Factory() { return new DwMeasureScrollbarService(i0.inject(i1.DOCUMENT)); }, token: DwMeasureScrollbarService, providedIn: "root" });
    return DwMeasureScrollbarService;
}());
export { DwMeasureScrollbarService };
function DwMeasureScrollbarService_tsickle_Closure_declarations() {
    /** @type {?} */
    DwMeasureScrollbarService.prototype._scrollbarWidth;
    /** @type {?} */
    DwMeasureScrollbarService.prototype.scrollbarMeasure;
    /** @type {?} */
    DwMeasureScrollbarService.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiY29yZS9zZXJ2aWNlcy9kdy1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQW9DdkMsa0NBQWtDO0lBQ2xDLG1DQUFzQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztnQ0E5QnhCO1lBQ3pCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBTyxTQUFTO1lBQ25CLEtBQUssRUFBSyxNQUFNO1lBQ2hCLE1BQU0sRUFBSSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxRQUFRO1NBQ25CO1FBeUJDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0tBQzNCO0lBeEJELHNCQUFJLHFEQUFjOzs7O1FBQWxCO1lBQ0UsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7U0FDN0I7OztPQUFBOzs7O0lBRUQsc0RBQWtCOzs7SUFBbEI7O1FBQ0UsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsS0FBSyxJQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwRCxTQUFTLENBQUMsS0FBSyxDQUFFLFVBQVUsQ0FBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxVQUFVLENBQUUsQ0FBQzthQUNyRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUMxQyxJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0tBQzlCOztnQkFoQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnREFpQ2MsTUFBTSxTQUFDLFFBQVE7OztvQ0F2QzlCOztTQU9hLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi91dGlsL2NoZWNrJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB7XG4gIHByaXZhdGUgX3Njcm9sbGJhcldpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgc2Nyb2xsYmFyTWVhc3VyZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3AgICAgIDogJy05OTk5cHgnLFxuICAgIHdpZHRoICAgOiAnNTBweCcsXG4gICAgaGVpZ2h0ICA6ICc1MHB4JyxcbiAgICBvdmVyZmxvdzogJ3Njcm9sbCdcbiAgfTtcblxuICBnZXQgc2Nyb2xsQmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5fc2Nyb2xsYmFyV2lkdGgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYmFyV2lkdGg7XG4gICAgfVxuICAgIHRoaXMuaW5pdFNjcm9sbEJhcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGJhcldpZHRoO1xuICB9XG5cbiAgaW5pdFNjcm9sbEJhcldpZHRoKCk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChjb25zdCBzY3JvbGxQcm9wIGluIHRoaXMuc2Nyb2xsYmFyTWVhc3VyZSkge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyTWVhc3VyZS5oYXNPd25Qcm9wZXJ0eShzY3JvbGxQcm9wKSkge1xuICAgICAgICBzY3JvbGxEaXYuc3R5bGVbIHNjcm9sbFByb3AgXSA9IHRoaXMuc2Nyb2xsYmFyTWVhc3VyZVsgc2Nyb2xsUHJvcCBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICBjb25zdCB3aWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLmluaXRTY3JvbGxCYXJXaWR0aCgpO1xuICB9XG59XG4iXX0=
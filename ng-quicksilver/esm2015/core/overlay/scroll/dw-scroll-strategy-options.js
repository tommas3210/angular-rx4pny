/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { DwMeasureScrollbarService } from '../../services/dw-measure-scrollbar.service';
import { DwBlockScrollStrategy } from './dw-block-scroll-strategy';
import * as i0 from "@angular/core";
import * as i1 from "../../services/dw-measure-scrollbar.service";
import * as i2 from "@angular/common";
export class DwScrollStrategyOptions {
    /**
     * @param {?} rendererFactory
     * @param {?} dwMeasureScrollbarService
     * @param {?} document
     */
    constructor(rendererFactory, dwMeasureScrollbarService, 
    // tslint:disable-next-line:no-any
    document) {
        this.dwMeasureScrollbarService = dwMeasureScrollbarService;
        this.block = () => new DwBlockScrollStrategy(this.document, this.renderer, this.dwMeasureScrollbarService);
        this.document = document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
}
DwScrollStrategyOptions.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DwScrollStrategyOptions.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: DwMeasureScrollbarService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ DwScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function DwScrollStrategyOptions_Factory() { return new DwScrollStrategyOptions(i0.inject(i0.RendererFactory2), i0.inject(i1.DwMeasureScrollbarService), i0.inject(i2.DOCUMENT)); }, token: DwScrollStrategyOptions, providedIn: "root" });
function DwScrollStrategyOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    DwScrollStrategyOptions.prototype.document;
    /** @type {?} */
    DwScrollStrategyOptions.prototype.renderer;
    /** @type {?} */
    DwScrollStrategyOptions.prototype.block;
    /** @type {?} */
    DwScrollStrategyOptions.prototype.dwMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9zY3JvbGwvZHctc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQTtBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUduRSxNQUFNOzs7Ozs7SUFHSixZQUNFLGVBQWlDLEVBQ3pCOztJQUVVLFFBQWE7UUFGdkIsOEJBQXlCLEdBQXpCLHlCQUF5QjtxQkFRM0IsR0FBRyxFQUFFLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1FBSm5HLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUQ7OztZQVpGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7WUFKUSxnQkFBZ0I7WUFDL0MseUJBQXlCOzRDQVc3QixNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHctbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSdcbmltcG9ydCB7IER3QmxvY2tTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4vZHctYmxvY2stc2Nyb2xsLXN0cmF0ZWd5JztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgRHdTY3JvbGxTdHJhdGVneU9wdGlvbnMge1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJpdmF0ZSBkd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBEd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgYmxvY2sgPSAoKSA9PiBuZXcgRHdCbG9ja1Njcm9sbFN0cmF0ZWd5KHRoaXMuZG9jdW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMuZHdNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSk7XG59XG4iXX0=
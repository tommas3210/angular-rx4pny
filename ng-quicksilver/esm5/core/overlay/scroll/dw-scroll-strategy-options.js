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
var DwScrollStrategyOptions = /** @class */ (function () {
    function DwScrollStrategyOptions(rendererFactory, dwMeasureScrollbarService, 
    // tslint:disable-next-line:no-any
    document) {
        var _this = this;
        this.dwMeasureScrollbarService = dwMeasureScrollbarService;
        this.block = function () { return new DwBlockScrollStrategy(_this.document, _this.renderer, _this.dwMeasureScrollbarService); };
        this.document = document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    DwScrollStrategyOptions.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DwScrollStrategyOptions.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: DwMeasureScrollbarService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ DwScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function DwScrollStrategyOptions_Factory() { return new DwScrollStrategyOptions(i0.inject(i0.RendererFactory2), i0.inject(i1.DwMeasureScrollbarService), i0.inject(i2.DOCUMENT)); }, token: DwScrollStrategyOptions, providedIn: "root" });
    return DwScrollStrategyOptions;
}());
export { DwScrollStrategyOptions };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvb3ZlcmxheS9zY3JvbGwvZHctc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQTtBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7SUFNakUsaUNBQ0UsZUFBaUMsRUFDekI7O0lBRVUsUUFBYTtRQUpqQyxpQkFRQztRQU5TLDhCQUF5QixHQUF6Qix5QkFBeUI7cUJBUTNCLGNBQU0sT0FBQSxJQUFJLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMseUJBQXlCLENBQUMsRUFBdkYsQ0FBdUY7UUFKbkcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1RDs7Z0JBWkYsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7OztnQkFKUSxnQkFBZ0I7Z0JBQy9DLHlCQUF5QjtnREFXN0IsTUFBTSxTQUFDLFFBQVE7OztrQ0FicEI7O1NBTWEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IER3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kdy1tZWFzdXJlLXNjcm9sbGJhci5zZXJ2aWNlJ1xuaW1wb3J0IHsgRHdCbG9ja1Njcm9sbFN0cmF0ZWd5IH0gZnJvbSAnLi9kdy1ibG9jay1zY3JvbGwtc3RyYXRlZ3knO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBEd1Njcm9sbFN0cmF0ZWd5T3B0aW9ucyB7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBwcml2YXRlIGR3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2U6IER3TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gIH1cblxuICBibG9jayA9ICgpID0+IG5ldyBEd0Jsb2NrU2Nyb2xsU3RyYXRlZ3kodGhpcy5kb2N1bWVudCwgdGhpcy5yZW5kZXJlciwgdGhpcy5kd01lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlKTtcbn1cbiJdfQ==
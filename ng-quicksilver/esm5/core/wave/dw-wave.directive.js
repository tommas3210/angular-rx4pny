/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import { DwWaveRenderer } from './dw-wave-renderer';
var DwWaveDirective = /** @class */ (function () {
    function DwWaveDirective(ngZone, elementRef) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.dwWaveExtraNode = false;
    }
    /**
     * @return {?}
     */
    DwWaveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    /**
     * @return {?}
     */
    DwWaveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.elementRef.nativeElement) {
            this.waveRenderer = new DwWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.dwWaveExtraNode);
        }
    };
    DwWaveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[dw-wave]'
                },] }
    ];
    /** @nocollapse */
    DwWaveDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef }
    ]; };
    DwWaveDirective.propDecorators = {
        dwWaveExtraNode: [{ type: Input }]
    };
    return DwWaveDirective;
}());
export { DwWaveDirective };
function DwWaveDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    DwWaveDirective.prototype.waveRenderer;
    /** @type {?} */
    DwWaveDirective.prototype.dwWaveExtraNode;
    /** @type {?} */
    DwWaveDirective.prototype.ngZone;
    /** @type {?} */
    DwWaveDirective.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImNvcmUvd2F2ZS9kdy13YXZlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQVdsRCx5QkFBb0IsTUFBYyxFQUFVLFVBQXNCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZOytCQUZ2QyxLQUFLO0tBRy9COzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7S0FDRjs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMxRztLQUNGOztnQkF0QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFMc0MsTUFBTTtnQkFBekIsVUFBVTs7O2tDQVUzQixLQUFLOzswQkFWUjs7U0FNYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHdXYXZlUmVuZGVyZXIgfSBmcm9tICcuL2R3LXdhdmUtcmVuZGVyZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZHctd2F2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIER3V2F2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIHdhdmVSZW5kZXJlcjogRHdXYXZlUmVuZGVyZXI7XG5cbiAgQElucHV0KCkgZHdXYXZlRXh0cmFOb2RlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyID0gbmV3IER3V2F2ZVJlbmRlcmVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLm5nWm9uZSwgdGhpcy5kd1dhdmVFeHRyYU5vZGUpO1xuICAgIH1cbiAgfVxufVxuIl19
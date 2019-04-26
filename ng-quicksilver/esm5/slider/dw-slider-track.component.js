/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var DwSliderTrackComponent = /** @class */ (function () {
    function DwSliderTrackComponent() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    Object.defineProperty(DwSliderTrackComponent.prototype, "dwVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // Required
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSliderTrackComponent.prototype, "dwIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DwSliderTrackComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["dwIncluded"]) {
            this.style.visibility = this.dwIncluded ? 'visible' : 'hidden';
        }
        if (changes["dwVertical"] || changes["dwOffset"] || changes["dwLength"]) {
            if (this.dwVertical) {
                this.style.bottom = this.dwOffset + "%";
                this.style.height = this.dwLength + "%";
            }
            else {
                this.style.left = this.dwOffset + "%";
                this.style.width = this.dwLength + "%";
            }
        }
    };
    DwSliderTrackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-slider-track',
                    preserveWhitespaces: false,
                    template: "<div [class]=\"dwClassName\" [ngStyle]=\"style\"></div>"
                }] }
    ];
    DwSliderTrackComponent.propDecorators = {
        dwOffset: [{ type: Input }],
        dwLength: [{ type: Input }],
        dwClassName: [{ type: Input }],
        dwVertical: [{ type: Input }],
        dwIncluded: [{ type: Input }]
    };
    return DwSliderTrackComponent;
}());
export { DwSliderTrackComponent };
function DwSliderTrackComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSliderTrackComponent.prototype._vertical;
    /** @type {?} */
    DwSliderTrackComponent.prototype._included;
    /** @type {?} */
    DwSliderTrackComponent.prototype.dwOffset;
    /** @type {?} */
    DwSliderTrackComponent.prototype.dwLength;
    /** @type {?} */
    DwSliderTrackComponent.prototype.dwClassName;
    /** @type {?} */
    DwSliderTrackComponent.prototype.style;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2xpZGVyL2R3LXNsaWRlci10cmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozt5QkFRM0IsS0FBSzt5QkFDTCxLQUFLO3FCQTJCeUUsRUFBRTs7SUFsQnBHLHNCQUNJLDhDQUFVOzs7O1FBSWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBUEQsVUFDZSxLQUFjOztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSw4Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7Ozs7O0lBUUQsNENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxnQkFBYTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUNoRTtRQUNELElBQUksT0FBTyxrQkFBZSxPQUFPLFlBQVMsSUFBSSxPQUFPLFlBQVMsRUFBRTtZQUM5RCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxRQUFRLE1BQUcsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDO2FBQ3hDO1NBQ0Y7S0FDRjs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsaUJBQWlCO29CQUN0QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixtRUFBdUQ7aUJBQ3hEOzs7MkJBTUUsS0FBSzsyQkFDTCxLQUFLOzhCQUdMLEtBQUs7NkJBRUwsS0FBSzs2QkFTTCxLQUFLOztpQ0E3QlI7O1NBU2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zbGlkZXItdHJhY2snLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1NsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcblxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgZHdPZmZzZXQ7XG4gIEBJbnB1dCgpIGR3TGVuZ3RoO1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIGR3Q2xhc3NOYW1lO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICBzdHlsZTogeyBib3R0b20/OiBzdHJpbmcsIGhlaWdodD86IHN0cmluZywgbGVmdD86IHN0cmluZywgd2lkdGg/OiBzdHJpbmcsIHZpc2liaWxpdHk/OiBzdHJpbmcgfSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kd0luY2x1ZGVkKSB7XG4gICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLmR3SW5jbHVkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZHdWZXJ0aWNhbCB8fCBjaGFuZ2VzLmR3T2Zmc2V0IHx8IGNoYW5nZXMuZHdMZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLmR3VmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBgJHt0aGlzLmR3T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZHdMZW5ndGh9JWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmR3T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYCR7dGhpcy5kd0xlbmd0aH0lYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19
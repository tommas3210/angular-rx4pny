/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class DwSliderTrackComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        this.style = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwVertical(value) {
        // Required
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwIncluded() {
        return this._included;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["dwIncluded"]) {
            this.style.visibility = this.dwIncluded ? 'visible' : 'hidden';
        }
        if (changes["dwVertical"] || changes["dwOffset"] || changes["dwLength"]) {
            if (this.dwVertical) {
                this.style.bottom = `${this.dwOffset}%`;
                this.style.height = `${this.dwLength}%`;
            }
            else {
                this.style.left = `${this.dwOffset}%`;
                this.style.width = `${this.dwLength}%`;
            }
        }
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsic2xpZGVyL2R3LXNsaWRlci10cmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPakQsTUFBTTs7eUJBQ2dCLEtBQUs7eUJBQ0wsS0FBSztxQkEyQnlFLEVBQUU7Ozs7OztJQWxCcEcsSUFDSSxVQUFVLENBQUMsS0FBYzs7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFJRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGdCQUFhO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxPQUFPLGtCQUFlLE9BQU8sWUFBUyxJQUFJLE9BQU8sWUFBUyxFQUFFO1lBQzlELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQzthQUN4QztTQUNGO0tBQ0Y7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGlCQUFpQjtnQkFDdEMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsbUVBQXVEO2FBQ3hEOzs7dUJBTUUsS0FBSzt1QkFDTCxLQUFLOzBCQUdMLEtBQUs7eUJBRUwsS0FBSzt5QkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1zbGlkZXItdHJhY2snLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc2xpZGVyLXRyYWNrLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEd1NsaWRlclRyYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcblxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgZHdPZmZzZXQ7XG4gIEBJbnB1dCgpIGR3TGVuZ3RoO1xuXG4gIC8vIFN0YXRpYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIGR3Q2xhc3NOYW1lO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1ZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICBzdHlsZTogeyBib3R0b20/OiBzdHJpbmcsIGhlaWdodD86IHN0cmluZywgbGVmdD86IHN0cmluZywgd2lkdGg/OiBzdHJpbmcsIHZpc2liaWxpdHk/OiBzdHJpbmcgfSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5kd0luY2x1ZGVkKSB7XG4gICAgICB0aGlzLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLmR3SW5jbHVkZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZHdWZXJ0aWNhbCB8fCBjaGFuZ2VzLmR3T2Zmc2V0IHx8IGNoYW5nZXMuZHdMZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLmR3VmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBgJHt0aGlzLmR3T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZHdMZW5ndGh9JWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlLmxlZnQgPSBgJHt0aGlzLmR3T2Zmc2V0fSVgO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYCR7dGhpcy5kd0xlbmd0aH0lYDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19
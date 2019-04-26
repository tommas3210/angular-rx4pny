/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class DwBadgeComponent {
    /**
     * @param {?} zone
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(zone, renderer, elementRef) {
        this.zone = zone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this._showDot = false;
        this._showZero = false;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.dwOverflowCount = 99;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwShowZero(value) {
        this._showZero = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwShowZero() {
        return this._showZero;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDot(value) {
        this._showDot = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwDot() {
        return this._showDot;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwCount(value) {
        if (value < 0) {
            this._count = 0;
        }
        else {
            this._count = value;
        }
        this.countArray = this._count.toString().split('');
    }
    /**
     * @return {?}
     */
    get dwCount() {
        return this._count;
    }
    /**
     * @return {?}
     */
    get showSup() {
        return this.dwDot || this.dwCount > 0 || ((this.dwCount === 0) && this.dwShowZero);
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.maxNumberArray = this.dwOverflowCount.toString().split('');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkContent();
    }
}
DwBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-badge',
                preserveWhitespaces: false,
                animations: [
                    trigger('enterLeave', [
                        transition('void => *', [
                            style({ opacity: 0 }),
                            animate('0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46)')
                        ]),
                        transition('* => void', [
                            style({ opacity: 1 }),
                            animate('0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46)')
                        ])
                    ])
                ],
                template: "<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\n<span class=\"ant-badge-status-dot ant-badge-status-{{dwStatus}}\" *ngIf=\"dwStatus\" [ngStyle]=\"dwStyle\"></span>\n<span class=\"ant-badge-status-text\" *ngIf=\"dwStatus\">{{ dwText }}</span>\n<sup\n  *ngIf=\"showSup\"\n  [@enterLeave]\n  [ngStyle]=\"dwStyle\"\n  class=\"ant-scroll-number\"\n  [class.ant-badge-count]=\"!dwDot\"\n  [class.ant-badge-dot]=\"dwDot\"\n  [class.ant-badge-multiple-words]=\"countArray.length>=2\">\n  <ng-template\n    ngFor\n    [ngForOf]=\"maxNumberArray\"\n    let-number\n    let-i=\"index\">\n      <span\n        *ngIf=\"dwCount<=dwOverflowCount\"\n        class=\"ant-scroll-number-only\"\n        [style.transform]=\"'translateY('+((-countArray[i]*100))+'%)'\">\n          <ng-template [ngIf]=\"(!dwDot)&&(countArray[i]!=null)\">\n            <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p==countArray[i]\">{{ p }}</p>\n          </ng-template>\n      </span>\n  </ng-template>\n  <ng-template [ngIf]=\"dwCount>dwOverflowCount\">{{ dwOverflowCount }}+</ng-template>\n</sup>",
                host: {
                    '[class.ant-badge]': 'true',
                    '[class.ant-badge-status]': 'dwStatus'
                },
                styles: [`
      :host:not(.ant-badge-not-a-wrapper) .ant-badge-count {
        position: absolute;
        transform: translateX(50%);
        right: 0;
      }

      :host .ant-badge-dot {
        position: absolute;
        transform: translateX(50%);
        right: 0;
      }
    `]
            }] }
];
/** @nocollapse */
DwBadgeComponent.ctorParameters = () => [
    { type: NgZone },
    { type: Renderer2 },
    { type: ElementRef }
];
DwBadgeComponent.propDecorators = {
    contentElement: [{ type: ViewChild, args: ['contentElement',] }],
    dwOverflowCount: [{ type: Input }],
    dwText: [{ type: Input }],
    dwStyle: [{ type: Input }],
    dwStatus: [{ type: Input }],
    dwShowZero: [{ type: Input }],
    dwDot: [{ type: Input }],
    dwCount: [{ type: Input }]
};
function DwBadgeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwBadgeComponent.prototype._showDot;
    /** @type {?} */
    DwBadgeComponent.prototype._showZero;
    /** @type {?} */
    DwBadgeComponent.prototype._count;
    /** @type {?} */
    DwBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    DwBadgeComponent.prototype.countArray;
    /** @type {?} */
    DwBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    DwBadgeComponent.prototype.contentElement;
    /** @type {?} */
    DwBadgeComponent.prototype.dwOverflowCount;
    /** @type {?} */
    DwBadgeComponent.prototype.dwText;
    /** @type {?} */
    DwBadgeComponent.prototype.dwStyle;
    /** @type {?} */
    DwBadgeComponent.prototype.dwStatus;
    /** @type {?} */
    DwBadgeComponent.prototype.zone;
    /** @type {?} */
    DwBadgeComponent.prototype.renderer;
    /** @type {?} */
    DwBadgeComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJiYWRnZS9kdy1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQXdDakQsTUFBTTs7Ozs7O0lBeURKLFlBQW9CLElBQVksRUFBVSxRQUFtQixFQUFVLFVBQXNCO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTt3QkF4RDFFLEtBQUs7eUJBQ0osS0FBSzs4QkFFUixFQUFFOzBCQUNOLEVBQUU7Z0NBQ0ksQ0FBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUU7K0JBRXhCLEVBQUU7S0FtRDVCOzs7OztJQTlDRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFDSSxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3BEOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNwRjs7OztJQUVELFlBQVk7UUFDVixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHlCQUF5QixDQUFDLENBQUM7U0FDbEY7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHlCQUF5QixDQUFDLENBQUM7U0FDckY7S0FDRjs7OztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pFOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7O1lBdkdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsVUFBVTtnQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsVUFBVSxFQUFXO29CQUNuQixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNwQixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQzt5QkFDcEQsQ0FBQzt3QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7NEJBQ3JCLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQzt5QkFDcEQsQ0FBQztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELDRtQ0FBZ0Q7Z0JBQ2hELElBQUksRUFBaUI7b0JBQ25CLG1CQUFtQixFQUFTLE1BQU07b0JBQ2xDLDBCQUEwQixFQUFFLFVBQVU7aUJBQ3ZDO3lCQUVDOzs7Ozs7Ozs7Ozs7S0FZQzthQUVKOzs7O1lBckRDLE1BQU07WUFFTixTQUFTO1lBSlQsVUFBVTs7OzZCQStEVCxTQUFTLFNBQUMsZ0JBQWdCOzhCQUMxQixLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUVMLEtBQUs7b0JBU0wsS0FBSztzQkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBhbmltYXRlLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgdHJpZ2dlclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmV4cG9ydCB0eXBlIER3QmFkZ2VTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2RlZmF1bHQnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1iYWRnZScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignZW50ZXJMZWF2ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjEyLCAwLjQsIDAuMjksIDEuNDYpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgY3ViaWMtYmV6aWVyKDAuMTIsIDAuNCwgMC4yOSwgMS40NiknKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1iYWRnZV0nICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWJhZGdlLXN0YXR1c10nOiAnZHdTdGF0dXMnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgICA6aG9zdDpub3QoLmFudC1iYWRnZS1ub3QtYS13cmFwcGVyKSAuYW50LWJhZGdlLWNvdW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IC5hbnQtYmFkZ2UtZG90IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIER3QmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9zaG93RG90ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3daZXJvID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvdW50OiBudW1iZXI7XG4gIG1heE51bWJlckFycmF5ID0gW107XG4gIGNvdW50QXJyYXkgPSBbXTtcbiAgY291bnRTaW5nbGVBcnJheSA9IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSBdO1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBkd092ZXJmbG93Q291bnQgPSA5OTtcbiAgQElucHV0KCkgZHdUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGR3U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgQElucHV0KCkgZHdTdGF0dXM6IER3QmFkZ2VTdGF0dXNUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Nob3daZXJvKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1plcm8gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3U2hvd1plcm8oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3daZXJvO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RG90KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0RvdCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdEb3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dEb3Q7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmNvdW50QXJyYXkgPSB0aGlzLl9jb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgfVxuXG4gIGdldCBkd0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2NvdW50O1xuICB9XG5cbiAgZ2V0IHNob3dTdXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZHdEb3QgfHwgdGhpcy5kd0NvdW50ID4gMCB8fCAoKHRoaXMuZHdDb3VudCA9PT0gMCkgJiYgdGhpcy5kd1Nob3daZXJvKTtcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvbnRlbnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWF4TnVtYmVyQXJyYXkgPSB0aGlzLmR3T3ZlcmZsb3dDb3VudC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG59XG4iXX0=
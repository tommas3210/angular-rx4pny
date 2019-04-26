/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { isEmpty } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var DwBadgeComponent = /** @class */ (function () {
    function DwBadgeComponent(zone, renderer, elementRef) {
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
    Object.defineProperty(DwBadgeComponent.prototype, "dwShowZero", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showZero;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showZero = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwBadgeComponent.prototype, "dwDot", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showDot;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showDot = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwBadgeComponent.prototype, "dwCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._count;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value < 0) {
                this._count = 0;
            }
            else {
                this._count = value;
            }
            this.countArray = this._count.toString().split('');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwBadgeComponent.prototype, "showSup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dwDot || this.dwCount > 0 || ((this.dwCount === 0) && this.dwShowZero);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwBadgeComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    /**
     * @return {?}
     */
    DwBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.maxNumberArray = this.dwOverflowCount.toString().split('');
    };
    /**
     * @return {?}
     */
    DwBadgeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
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
                    styles: ["\n      :host:not(.ant-badge-not-a-wrapper) .ant-badge-count {\n        position: absolute;\n        transform: translateX(50%);\n        right: 0;\n      }\n\n      :host .ant-badge-dot {\n        position: absolute;\n        transform: translateX(50%);\n        right: 0;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    DwBadgeComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
    return DwBadgeComponent;
}());
export { DwBadgeComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctcXVpY2tzaWx2ZXIvIiwic291cmNlcyI6WyJiYWRnZS9kdy1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNSLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFpRy9DLDBCQUFvQixJQUFZLEVBQVUsUUFBbUIsRUFBVSxVQUFzQjtRQUF6RSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7d0JBeEQxRSxLQUFLO3lCQUNKLEtBQUs7OEJBRVIsRUFBRTswQkFDTixFQUFFO2dDQUNJLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFOytCQUV4QixFQUFFO0tBbUQ1QjtJQTlDRCxzQkFDSSx3Q0FBVTs7OztRQUlkO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVBELFVBQ2UsS0FBYztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O09BQUE7SUFNRCxzQkFDSSxtQ0FBSzs7OztRQUlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQVBELFVBQ1UsS0FBYztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BQUE7SUFNRCxzQkFDSSxxQ0FBTzs7OztRQVNYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVpELFVBQ1ksS0FBYTtZQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEOzs7T0FBQTtJQU1ELHNCQUFJLHFDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3BGOzs7T0FBQTs7OztJQUVELHVDQUFZOzs7SUFBWjtRQUNFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNyRjtLQUNGOzs7O0lBTUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqRTs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Z0JBdkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsVUFBVTtvQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsVUFBVSxFQUFXO3dCQUNuQixPQUFPLENBQUMsWUFBWSxFQUFFOzRCQUNwQixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQzs2QkFDcEQsQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0NBQ3JCLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQzs2QkFDcEQsQ0FBQzt5QkFDSCxDQUFDO3FCQUNIO29CQUNELDRtQ0FBZ0Q7b0JBQ2hELElBQUksRUFBaUI7d0JBQ25CLG1CQUFtQixFQUFTLE1BQU07d0JBQ2xDLDBCQUEwQixFQUFFLFVBQVU7cUJBQ3ZDOzZCQUVDLGtTQVlDO2lCQUVKOzs7O2dCQXJEQyxNQUFNO2dCQUVOLFNBQVM7Z0JBSlQsVUFBVTs7O2lDQStEVCxTQUFTLFNBQUMsZ0JBQWdCO2tDQUMxQixLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUVMLEtBQUs7d0JBU0wsS0FBSzswQkFTTCxLQUFLOzsyQkExRlI7O1NBMkRhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5leHBvcnQgdHlwZSBEd0JhZGdlU3RhdHVzVHlwZSA9ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctYmFkZ2UnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2VudGVyTGVhdmUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC4xMiwgMC40LCAwLjI5LCAxLjQ2KScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjEyLCAwLjQsIDAuMjksIDEuNDYpJylcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtYmFkZ2VdJyAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1iYWRnZS1zdGF0dXNdJzogJ2R3U3RhdHVzJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYFxuICAgICAgOmhvc3Q6bm90KC5hbnQtYmFkZ2Utbm90LWEtd3JhcHBlcikgLmFudC1iYWRnZS1jb3VudCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCAuYW50LWJhZGdlLWRvdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEd0JhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfc2hvd0RvdCA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93WmVybyA9IGZhbHNlO1xuICBwcml2YXRlIF9jb3VudDogbnVtYmVyO1xuICBtYXhOdW1iZXJBcnJheSA9IFtdO1xuICBjb3VudEFycmF5ID0gW107XG4gIGNvdW50U2luZ2xlQXJyYXkgPSBbIDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDkgXTtcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnKSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgZHdPdmVyZmxvd0NvdW50ID0gOTk7XG4gIEBJbnB1dCgpIGR3VGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBkd1N0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIEBJbnB1dCgpIGR3U3RhdHVzOiBEd0JhZGdlU3RhdHVzVHlwZTtcblxuICBASW5wdXQoKVxuICBzZXQgZHdTaG93WmVybyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3daZXJvID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd1Nob3daZXJvKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93WmVybztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0RvdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dEb3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RG90KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93RG90O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3Q291bnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5jb3VudEFycmF5ID0gdGhpcy5fY291bnQudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gIH1cblxuICBnZXQgZHdDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxuXG4gIGdldCBzaG93U3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmR3RG90IHx8IHRoaXMuZHdDb3VudCA+IDAgfHwgKCh0aGlzLmR3Q291bnQgPT09IDApICYmIHRoaXMuZHdTaG93WmVybyk7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb250ZW50RWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1iYWRnZS1ub3QtYS13cmFwcGVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1heE51bWJlckFycmF5ID0gdGhpcy5kd092ZXJmbG93Q291bnQudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxufVxuIl19
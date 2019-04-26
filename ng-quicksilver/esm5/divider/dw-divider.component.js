/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
var DwDividerComponent = /** @class */ (function () {
    function DwDividerComponent(el, cd, updateHostClassService) {
        this.el = el;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        // region fields
        this.isText = false;
        this.textStr = '';
        this.dwType = 'horizontal';
        this.dwOrientation = '';
        this._dashed = false;
    }
    Object.defineProperty(DwDividerComponent.prototype, "dwText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.textStr = null;
                this.textTpl = value;
            }
            else {
                this.textStr = value;
            }
            this.isText = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwDividerComponent.prototype, "dwDashed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dashed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dashed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwDividerComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var orientationPrefix = (this.dwOrientation.length > 0) ? '-' + this.dwOrientation : this.dwOrientation;
        /** @type {?} */
        var classMap = (_a = {},
            _a['ant-divider'] = true,
            _a["ant-divider-" + this.dwType] = true,
            _a["ant-divider-with-text" + orientationPrefix] = this.isText,
            _a["ant-divider-dashed"] = this.dwDashed,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        this.cd.detectChanges();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwDividerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClass();
    };
    /**
     * @return {?}
     */
    DwDividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    DwDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-divider',
                    template: "<span *ngIf=\"isText\" class=\"ant-divider-inner-text\">\n  <ng-container *ngIf=\"textStr; else textTpl\">{{ textStr }}</ng-container>\n</span>",
                    providers: [DwUpdateHostClassService],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DwDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: DwUpdateHostClassService }
    ]; };
    DwDividerComponent.propDecorators = {
        dwText: [{ type: Input }],
        dwType: [{ type: Input }],
        dwOrientation: [{ type: Input }],
        dwDashed: [{ type: Input }]
    };
    return DwDividerComponent;
}());
export { DwDividerComponent };
function DwDividerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwDividerComponent.prototype.isText;
    /** @type {?} */
    DwDividerComponent.prototype.textStr;
    /** @type {?} */
    DwDividerComponent.prototype.textTpl;
    /** @type {?} */
    DwDividerComponent.prototype.dwType;
    /** @type {?} */
    DwDividerComponent.prototype.dwOrientation;
    /** @type {?} */
    DwDividerComponent.prototype._dashed;
    /** @type {?} */
    DwDividerComponent.prototype.el;
    /** @type {?} */
    DwDividerComponent.prototype.cd;
    /** @type {?} */
    DwDividerComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImRpdmlkZXIvZHctZGl2aWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBdUQvQyw0QkFBb0IsRUFBYyxFQUFVLEVBQXFCLEVBQVUsc0JBQWdEO1FBQXZHLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBMEI7O3NCQTNDbEgsS0FBSzt1QkFDSixFQUFFO3NCQWNpQyxZQUFZOzZCQUVULEVBQUU7dUJBRWhDLEtBQUs7S0F5QnRCO0lBeENELHNCQUNJLHNDQUFNOzs7OztRQURWLFVBQ1csS0FBaUM7WUFDMUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDdEI7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDdkI7OztPQUFBO0lBUUQsc0JBQ0ksd0NBQVE7Ozs7UUFJWjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFQRCxVQUNhLEtBQWM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7OztPQUFBOzs7O0lBT08scUNBQVE7Ozs7OztRQUNkLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7O1FBQzFHLElBQU0sUUFBUTtZQUNaLEdBQUUsYUFBYSxJQUFrQyxJQUFJO1lBQ3JELEdBQUUsaUJBQWUsSUFBSSxDQUFDLE1BQVEsSUFBbUIsSUFBSTtZQUNyRCxHQUFFLDBCQUF3QixpQkFBbUIsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUM1RCxHQUFFLG9CQUFvQixJQUEyQixJQUFJLENBQUMsUUFBUTtnQkFDOUQ7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7OztJQU0xQix3Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxZQUFZO29CQUNqQywySkFBa0Q7b0JBQ2xELFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO29CQUNqRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtpQkFDcEQ7Ozs7Z0JBakJDLFVBQVU7Z0JBRlYsaUJBQWlCO2dCQVVWLHdCQUF3Qjs7O3lCQWlCOUIsS0FBSzt5QkFXTCxLQUFLO2dDQUVMLEtBQUs7MkJBSUwsS0FBSzs7NkJBOUNSOztTQXNCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1kaXZpZGVyJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctZGl2aWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRHdEaXZpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvLyByZWdpb24gZmllbGRzXG5cbiAgaXNUZXh0ID0gZmFsc2U7XG4gIHRleHRTdHIgPSAnJztcbiAgdGV4dFRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGV4dCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy50ZXh0U3RyID0gbnVsbDtcbiAgICAgIHRoaXMudGV4dFRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRleHRTdHIgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5pc1RleHQgPSAhIXZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgZHdUeXBlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuXG4gIEBJbnB1dCgpIGR3T3JpZW50YXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnJyA9ICcnO1xuXG4gIHByaXZhdGUgX2Rhc2hlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rhc2hlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rhc2hlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZHdEYXNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rhc2hlZDtcbiAgfVxuXG4gIC8vIGVuZHJlZ2lvblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWVudGF0aW9uUHJlZml4ID0gKHRoaXMuZHdPcmllbnRhdGlvbi5sZW5ndGggPiAwKSA/ICctJyArIHRoaXMuZHdPcmllbnRhdGlvbiA6IHRoaXMuZHdPcmllbnRhdGlvbjtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1kaXZpZGVyJyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LWRpdmlkZXItJHt0aGlzLmR3VHlwZX1gIF0gICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtZGl2aWRlci13aXRoLXRleHQke29yaWVudGF0aW9uUHJlZml4fWAgXTogdGhpcy5pc1RleHQsXG4gICAgICBbIGBhbnQtZGl2aWRlci1kYXNoZWRgIF0gICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kd0Rhc2hlZFxuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
export class DwDividerComponent {
    /**
     * @param {?} el
     * @param {?} cd
     * @param {?} updateHostClassService
     */
    constructor(el, cd, updateHostClassService) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set dwText(value) {
        if (value instanceof TemplateRef) {
            this.textStr = null;
            this.textTpl = value;
        }
        else {
            this.textStr = value;
        }
        this.isText = !!value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDashed(value) {
        this._dashed = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwDashed() {
        return this._dashed;
    }
    /**
     * @return {?}
     */
    setClass() {
        /** @type {?} */
        const orientationPrefix = (this.dwOrientation.length > 0) ? '-' + this.dwOrientation : this.dwOrientation;
        /** @type {?} */
        const classMap = {
            ['ant-divider']: true,
            [`ant-divider-${this.dwType}`]: true,
            [`ant-divider-with-text${orientationPrefix}`]: this.isText,
            [`ant-divider-dashed`]: this.dwDashed
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
        this.cd.detectChanges();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClass();
    }
}
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
DwDividerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: DwUpdateHostClassService }
];
DwDividerComponent.propDecorators = {
    dwText: [{ type: Input }],
    dwType: [{ type: Input }],
    dwOrientation: [{ type: Input }],
    dwDashed: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbImRpdmlkZXIvZHctZGl2aWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTakQsTUFBTTs7Ozs7O0lBOENKLFlBQW9CLEVBQWMsRUFBVSxFQUFxQixFQUFVLHNCQUFnRDtRQUF2RyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCOztzQkEzQ2xILEtBQUs7dUJBQ0osRUFBRTtzQkFjaUMsWUFBWTs2QkFFVCxFQUFFO3VCQUVoQyxLQUFLO0tBeUJ0Qjs7Ozs7SUF4Q0QsSUFDSSxNQUFNLENBQUMsS0FBaUM7UUFDMUMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUN2Qjs7Ozs7SUFRRCxJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7O0lBR08sUUFBUTs7UUFDZCxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOztRQUMxRyxNQUFNLFFBQVEsR0FBRztZQUNmLENBQUUsYUFBYSxDQUFFLEVBQWdDLElBQUk7WUFDckQsQ0FBRSxlQUFlLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBRSxFQUFpQixJQUFJO1lBQ3JELENBQUUsd0JBQXdCLGlCQUFpQixFQUFFLENBQUUsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUM1RCxDQUFFLG9CQUFvQixDQUFFLEVBQXlCLElBQUksQ0FBQyxRQUFRO1NBQy9ELENBQUM7UUFDRixJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7OztJQU0xQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNqQjs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsWUFBWTtnQkFDakMsMkpBQWtEO2dCQUNsRCxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDakQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07YUFDcEQ7Ozs7WUFqQkMsVUFBVTtZQUZWLGlCQUFpQjtZQVVWLHdCQUF3Qjs7O3FCQWlCOUIsS0FBSztxQkFXTCxLQUFLOzRCQUVMLEtBQUs7dUJBSUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LWRpdmlkZXInLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1kaXZpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEd0RpdmlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8vIHJlZ2lvbiBmaWVsZHNcblxuICBpc1RleHQgPSBmYWxzZTtcbiAgdGV4dFN0ciA9ICcnO1xuICB0ZXh0VHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdUZXh0KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRleHRTdHIgPSBudWxsO1xuICAgICAgdGhpcy50ZXh0VHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dFN0ciA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLmlzVGV4dCA9ICEhdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKSBkd1R5cGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG5cbiAgQElucHV0KCkgZHdPcmllbnRhdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICcnID0gJyc7XG5cbiAgcHJpdmF0ZSBfZGFzaGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IGR3RGFzaGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGFzaGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Rhc2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGFzaGVkO1xuICB9XG5cbiAgLy8gZW5kcmVnaW9uXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZW50YXRpb25QcmVmaXggPSAodGhpcy5kd09yaWVudGF0aW9uLmxlbmd0aCA+IDApID8gJy0nICsgdGhpcy5kd09yaWVudGF0aW9uIDogdGhpcy5kd09yaWVudGF0aW9uO1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyAnYW50LWRpdmlkZXInIF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtZGl2aWRlci0ke3RoaXMuZHdUeXBlfWAgXSAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC1kaXZpZGVyLXdpdGgtdGV4dCR7b3JpZW50YXRpb25QcmVmaXh9YCBdOiB0aGlzLmlzVGV4dCxcbiAgICAgIFsgYGFudC1kaXZpZGVyLWRhc2hlZGAgXSAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmR3RGFzaGVkXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=
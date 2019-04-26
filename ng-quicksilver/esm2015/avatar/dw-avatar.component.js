/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
export class DwAvatarComponent {
    /**
     * @param {?} elementRef
     * @param {?} cd
     * @param {?} updateHostClassService
     */
    constructor(elementRef, cd, updateHostClassService) {
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.dwShape = 'circle';
        this.dwSize = 'default';
        this.el = elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    setClass() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.dwSize]}`]: this.sizeMap[this.dwSize],
            [`${this.prefixCls}-${this.dwShape}`]: this.dwShape,
            [`${this.prefixCls}-icon`]: this.dwIcon,
            [`${this.prefixCls}-image`]: this.dwSrc
        };
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    }
    /**
     * @return {?}
     */
    imgError() {
        this.hasSrc = false;
        this.hasIcon = false;
        this.hasText = false;
        if (this.dwIcon) {
            this.hasIcon = true;
        }
        else if (this.dwText) {
            this.hasText = true;
        }
        this.setClass().notifyCalc();
    }
    /**
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        if (scale === 1) {
            this.textStyles = {};
        }
        else {
            this.textStyles = {
                transform: `scale(${scale})`,
                position: 'absolute',
                display: 'inline-block',
                left: `calc(50% - ${Math.round(childrenWidth / 2)}px)`
            };
        }
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(() => {
            this.calcStringSize();
        });
        return this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.hasText = !this.dwSrc && !!this.dwText;
        this.hasIcon = !this.dwSrc && !!this.dwIcon;
        this.hasSrc = !!this.dwSrc;
        this.setClass().notifyCalc();
    }
}
DwAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'dw-avatar',
                template: "<i *ngIf=\"dwIcon && hasIcon\" [ngClass]=\"dwIcon\"></i>\n<img [src]=\"dwSrc\" *ngIf=\"dwSrc && hasSrc\" (error)=\"imgError()\"/>\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"dwText && hasText\">{{ dwText }}</span>",
                providers: [DwUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DwAvatarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: DwUpdateHostClassService }
];
DwAvatarComponent.propDecorators = {
    textEl: [{ type: ViewChild, args: ['textEl',] }],
    dwShape: [{ type: Input }],
    dwSize: [{ type: Input }],
    dwText: [{ type: Input }],
    dwSrc: [{ type: Input }],
    dwIcon: [{ type: Input }]
};
function DwAvatarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwAvatarComponent.prototype.el;
    /** @type {?} */
    DwAvatarComponent.prototype.prefixCls;
    /** @type {?} */
    DwAvatarComponent.prototype.sizeMap;
    /** @type {?} */
    DwAvatarComponent.prototype.hasText;
    /** @type {?} */
    DwAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    DwAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    DwAvatarComponent.prototype.textStyles;
    /** @type {?} */
    DwAvatarComponent.prototype.textEl;
    /** @type {?} */
    DwAvatarComponent.prototype.dwShape;
    /** @type {?} */
    DwAvatarComponent.prototype.dwSize;
    /** @type {?} */
    DwAvatarComponent.prototype.dwText;
    /** @type {?} */
    DwAvatarComponent.prototype.dwSrc;
    /** @type {?} */
    DwAvatarComponent.prototype.dwIcon;
    /** @type {?} */
    DwAvatarComponent.prototype.cd;
    /** @type {?} */
    DwAvatarComponent.prototype.updateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYXZhdGFyL2R3LWF2YXRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQVl0RixNQUFNOzs7Ozs7SUEyRUosWUFBWSxVQUFzQixFQUFVLEVBQXFCLEVBQVUsc0JBQWdEO1FBQS9FLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjt5QkF6RXZHLFlBQVk7dUJBQ2QsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7dUJBQzNCLEtBQUs7c0JBQ04sSUFBSTt1QkFDSCxLQUFLO3VCQUtVLFFBQVE7c0JBRVYsU0FBUztRQStEdkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBQ3BDOzs7O0lBeERELFFBQVE7O1FBQ04sTUFBTSxRQUFRLEdBQUc7WUFDZixDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsRUFBc0MsSUFBSTtZQUM1RCxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFO1lBQ25GLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBRSxFQUFpQixJQUFJLENBQUMsT0FBTztZQUNwRSxDQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMs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LEtBQUs7cUJBRUwsS0FBSztxQkFFTCxLQUFLO29CQUVMLEtBQUs7cUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIER3QXZhdGFyU2hhcGUgPSAnc3F1YXJlJyB8ICdjaXJjbGUnO1xuZXhwb3J0IHR5cGUgRHdBdmF0YXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnZHctYXZhdGFyJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBEd1VwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEd0F2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtYXZhdGFyJztcbiAgcHJpdmF0ZSBzaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBoYXNTcmM6IGJvb2xlYW4gPSB0cnVlO1xuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIHRleHRTdHlsZXM6IHt9O1xuXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcpIHRleHRFbDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBkd1NoYXBlOiBEd0F2YXRhclNoYXBlID0gJ2NpcmNsZSc7XG5cbiAgQElucHV0KCkgZHdTaXplOiBEd0F2YXRhclNpemUgPSAnZGVmYXVsdCc7XG5cbiAgQElucHV0KCkgZHdUZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgZHdTcmM6IHN0cmluZztcblxuICBASW5wdXQoKSBkd0ljb246IHN0cmluZztcblxuICBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5zaXplTWFwWyB0aGlzLmR3U2l6ZSBdfWAgXTogdGhpcy5zaXplTWFwWyB0aGlzLmR3U2l6ZSBdLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmR3U2hhcGV9YCBdICAgICAgICAgICAgICAgOiB0aGlzLmR3U2hhcGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uYCBdICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZHdJY29uLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taW1hZ2VgIF0gICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmR3U3JjXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGltZ0Vycm9yKCk6IHZvaWQge1xuICAgIHRoaXMuaGFzU3JjID0gZmFsc2U7XG4gICAgdGhpcy5oYXNJY29uID0gZmFsc2U7XG4gICAgdGhpcy5oYXNUZXh0ID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuZHdJY29uKSB7XG4gICAgICB0aGlzLmhhc0ljb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kd1RleHQpIHtcbiAgICAgIHRoaXMuaGFzVGV4dCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3MoKS5ub3RpZnlDYWxjKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGNTdHJpbmdTaXplKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNUZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW5XaWR0aCA9IHRoaXMudGV4dEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgYXZhdGFyV2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IHNjYWxlID0gYXZhdGFyV2lkdGggLSA4IDwgY2hpbGRyZW5XaWR0aCA/IChhdmF0YXJXaWR0aCAtIDgpIC8gY2hpbGRyZW5XaWR0aCA6IDE7XG4gICAgaWYgKHNjYWxlID09PSAxKSB7XG4gICAgICB0aGlzLnRleHRTdHlsZXMgPSB7fTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0U3R5bGVzID0ge1xuICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlfSlgLFxuICAgICAgICBwb3NpdGlvbiA6ICdhYnNvbHV0ZScsXG4gICAgICAgIGRpc3BsYXkgIDogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGxlZnQgICAgIDogYGNhbGMoNTAlIC0gJHtNYXRoLnJvdW5kKGNoaWxkcmVuV2lkdGggLyAyKX1weClgXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5Q2FsYygpOiB0aGlzIHtcbiAgICAvLyBJZiB1c2UgbmdBZnRlclZpZXdDaGVja2VkLCBhbHdheXMgZGVtYW5kcyBtb3JlIGNvbXB1dGF0aW9ucywgc28uLi4uLi5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2FsY1N0cmluZ1NpemUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IER3VXBkYXRlSG9zdENsYXNzU2VydmljZSkge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5oYXNUZXh0ID0gIXRoaXMuZHdTcmMgJiYgISF0aGlzLmR3VGV4dDtcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5kd1NyYyAmJiAhIXRoaXMuZHdJY29uO1xuICAgIHRoaXMuaGFzU3JjID0gISF0aGlzLmR3U3JjO1xuXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcbiAgfVxufVxuIl19
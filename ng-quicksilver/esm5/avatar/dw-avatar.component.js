/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
var DwAvatarComponent = /** @class */ (function () {
    function DwAvatarComponent(elementRef, cd, updateHostClassService) {
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
    DwAvatarComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.sizeMap[this.dwSize]] = this.sizeMap[this.dwSize],
            _a[this.prefixCls + "-" + this.dwShape] = this.dwShape,
            _a[this.prefixCls + "-icon"] = this.dwIcon,
            _a[this.prefixCls + "-image"] = this.dwSrc,
            _a);
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    };
    /**
     * @return {?}
     */
    DwAvatarComponent.prototype.imgError = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    DwAvatarComponent.prototype.calcStringSize = /**
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        if (scale === 1) {
            this.textStyles = {};
        }
        else {
            this.textStyles = {
                transform: "scale(" + scale + ")",
                position: 'absolute',
                display: 'inline-block',
                left: "calc(50% - " + Math.round(childrenWidth / 2) + "px)"
            };
        }
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    DwAvatarComponent.prototype.notifyCalc = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(function () {
            _this.calcStringSize();
        });
        return this;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DwAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.hasText = !this.dwSrc && !!this.dwText;
        this.hasIcon = !this.dwSrc && !!this.dwIcon;
        this.hasSrc = !!this.dwSrc;
        this.setClass().notifyCalc();
    };
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
    DwAvatarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: DwUpdateHostClassService }
    ]; };
    DwAvatarComponent.propDecorators = {
        textEl: [{ type: ViewChild, args: ['textEl',] }],
        dwShape: [{ type: Input }],
        dwSize: [{ type: Input }],
        dwText: [{ type: Input }],
        dwSrc: [{ type: Input }],
        dwIcon: [{ type: Input }]
    };
    return DwAvatarComponent;
}());
export { DwAvatarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXF1aWNrc2lsdmVyLyIsInNvdXJjZXMiOlsiYXZhdGFyL2R3LWF2YXRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7SUF1RnBGLDJCQUFZLFVBQXNCLEVBQVUsRUFBcUIsRUFBVSxzQkFBZ0Q7UUFBL0UsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO3lCQXpFdkcsWUFBWTt1QkFDZCxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTt1QkFDM0IsS0FBSztzQkFDTixJQUFJO3VCQUNILEtBQUs7dUJBS1UsUUFBUTtzQkFFVixTQUFTO1FBK0R2QyxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7S0FDcEM7Ozs7SUF4REQsb0NBQVE7OztJQUFSOzs7UUFDRSxJQUFNLFFBQVE7WUFDWixHQUFFLElBQUksQ0FBQyxTQUFTLElBQXdDLElBQUk7WUFDNUQsR0FBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRTtZQUNuRixHQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQVMsSUFBbUIsSUFBSSxDQUFDLE9BQU87WUFDcEUsR0FBSyxJQUFJLENBQUMsU0FBUyxVQUFPLElBQThCLElBQUksQ0FBQyxNQUFNO1lBQ25FLEdBQUssSUFBSSxDQUFDLFNB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QUs7OzRCQTFDUjs7U0F1QmEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgRHdBdmF0YXJTaGFwZSA9ICdzcXVhcmUnIHwgJ2NpcmNsZSc7XG5leHBvcnQgdHlwZSBEd0F2YXRhclNpemUgPSAnc21hbGwnIHwgJ2xhcmdlJyB8ICdkZWZhdWx0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdkdy1hdmF0YXInLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9kdy1hdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIER3VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIER3QXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1hdmF0YXInO1xuICBwcml2YXRlIHNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xuICBoYXNUZXh0OiBib29sZWFuID0gZmFsc2U7XG4gIGhhc1NyYzogYm9vbGVhbiA9IHRydWU7XG4gIGhhc0ljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGV4dFN0eWxlczoge307XG5cbiAgQFZpZXdDaGlsZCgndGV4dEVsJykgdGV4dEVsOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGR3U2hhcGU6IER3QXZhdGFyU2hhcGUgPSAnY2lyY2xlJztcblxuICBASW5wdXQoKSBkd1NpemU6IER3QXZhdGFyU2l6ZSA9ICdkZWZhdWx0JztcblxuICBASW5wdXQoKSBkd1RleHQ6IHN0cmluZztcblxuICBASW5wdXQoKSBkd1NyYzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGR3SWNvbjogc3RyaW5nO1xuXG4gIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMuZHdTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMuZHdTaXplIF0sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMuZHdTaGFwZX1gIF0gICAgICAgICAgICAgICA6IHRoaXMuZHdTaGFwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25gIF0gICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5kd0ljb24sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pbWFnZWAgXSAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZHdTcmNcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1nRXJyb3IoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNTcmMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0ljb24gPSBmYWxzZTtcbiAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5kd0ljb24pIHtcbiAgICAgIHRoaXMuaGFzSWNvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmR3VGV4dCkge1xuICAgICAgdGhpcy5oYXNUZXh0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsY1N0cmluZ1NpemUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc1RleHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbldpZHRoID0gdGhpcy50ZXh0RWwubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBhdmF0YXJXaWR0aCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3Qgc2NhbGUgPSBhdmF0YXJXaWR0aCAtIDggPCBjaGlsZHJlbldpZHRoID8gKGF2YXRhcldpZHRoIC0gOCkgLyBjaGlsZHJlbldpZHRoIDogMTtcbiAgICBpZiAoc2NhbGUgPT09IDEpIHtcbiAgICAgIHRoaXMudGV4dFN0eWxlcyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRleHRTdHlsZXMgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KWAsXG4gICAgICAgIHBvc2l0aW9uIDogJ2Fic29sdXRlJyxcbiAgICAgICAgZGlzcGxheSAgOiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbGVmdCAgICAgOiBgY2FsYyg1MCUgLSAke01hdGgucm91bmQoY2hpbGRyZW5XaWR0aCAvIDIpfXB4KWBcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlDYWxjKCk6IHRoaXMge1xuICAgIC8vIElmIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQsIGFsd2F5cyBkZW1hbmRzIG1vcmUgY29tcHV0YXRpb25zLCBzby4uLi4uLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjU3RyaW5nU2l6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogRHdVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5lbCA9IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmhhc1RleHQgPSAhdGhpcy5kd1NyYyAmJiAhIXRoaXMuZHdUZXh0O1xuICAgIHRoaXMuaGFzSWNvbiA9ICF0aGlzLmR3U3JjICYmICEhdGhpcy5kd0ljb247XG4gICAgdGhpcy5oYXNTcmMgPSAhIXRoaXMuZHdTcmM7XG5cbiAgICB0aGlzLnNldENsYXNzKCkubm90aWZ5Q2FsYygpO1xuICB9XG59XG4iXX0=
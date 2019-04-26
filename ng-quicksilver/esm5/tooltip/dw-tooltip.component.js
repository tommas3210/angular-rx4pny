/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from '../core/animation/fade-animations';
import { DEFAULT_4_POSITIONS, POSITION_MAP } from '../core/overlay/overlay-position-map';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
var DwToolTipComponent = /** @class */ (function () {
    function DwToolTipComponent(cdr) {
        this.cdr = cdr;
        this._hasBackdrop = false;
        this._prefix = 'ant-tooltip-placement';
        this._positions = tslib_1.__spread(DEFAULT_4_POSITIONS);
        this._classMap = {};
        this._placement = 'top';
        this._trigger = 'hover';
        this.visibleSource = new BehaviorSubject(false);
        this.visible$ = this.visibleSource.asObservable();
        this.dwVisibleChange = new EventEmitter();
        this.dwOverlayClassName = '';
        this.dwOverlayStyle = {};
        this.dwMouseEnterDelay = 0.15;
        this.dwMouseLeaveDelay = 0.1;
    }
    Object.defineProperty(DwToolTipComponent.prototype, "dwContent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._content;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isContentString = !(value instanceof TemplateRef);
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwToolTipComponent.prototype, "dwTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.isTitleString = !(value instanceof TemplateRef);
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwToolTipComponent.prototype, "dwVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleSource.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var visible = toBoolean(value);
            if (this.visibleSource.value !== visible) {
                this.visibleSource.next(visible);
                this.dwVisibleChange.emit(visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwToolTipComponent.prototype, "dwTrigger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trigger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trigger = value;
            this._hasBackdrop = this._trigger === 'click';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwToolTipComponent.prototype, "dwPlacement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placement;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._placement) {
                this._placement = value;
                this._positions.unshift(/** @type {?} */ (POSITION_MAP[this.dwPlacement]));
            }
        },
        enumerable: true,
        configurable: true
    });
    // Manually force updating current overlay's position
    /**
     * @return {?}
     */
    DwToolTipComponent.prototype.updatePosition = /**
     * @return {?}
     */
    function () {
        if (this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DwToolTipComponent.prototype.onPositionChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        for (var key in POSITION_MAP) {
            if (JSON.stringify($event.connectionPair) === JSON.stringify(POSITION_MAP[key])) {
                this.dwPlacement = key;
                break;
            }
        }
        this.setClassMap();
        /** TODO may cause performance problem */
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    DwToolTipComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        if (!this.isContentEmpty()) {
            this.dwVisible = true;
        }
    };
    /**
     * @return {?}
     */
    DwToolTipComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.dwVisible = false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwToolTipComponent.prototype._afterVisibilityAnimation = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.toState === 'false' && !this.dwVisible) {
            this.dwVisibleChange.emit(false);
        }
        if (e.toState === 'true' && this.dwVisible) {
            this.dwVisibleChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    DwToolTipComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this._classMap = (_a = {},
            _a[this.dwOverlayClassName] = true,
            _a[this._prefix + "-" + this._placement] = true,
            _a);
    };
    /**
     * @param {?} origin
     * @return {?}
     */
    DwToolTipComponent.prototype.setOverlayOrigin = /**
     * @param {?} origin
     * @return {?}
     */
    function (origin) {
        this.overlayOrigin = origin;
    };
    /**
     * @return {?}
     */
    DwToolTipComponent.prototype.isContentEmpty = /**
     * @return {?}
     */
    function () {
        return this.isTitleString ? (this.dwTitle === '' || !isNotNil(this.dwTitle)) : false; // Pity, can't detect whether dwTemplate is empty due to can't get it's content before shown up
    };
    DwToolTipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dw-tooltip',
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-tooltip\" [ngClass]=\"_classMap\" [ngStyle]=\"dwOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-tooltip-content\">\n      <div class=\"ant-tooltip-arrow\"></div>\n      <div class=\"ant-tooltip-inner\">\n        <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ dwTitle }}</ng-container>\n        <ng-template #titleTemplate>\n          <ng-template [ngTemplateOutlet]=\"dwTitle\"></ng-template>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    preserveWhitespaces: false,
                    styles: ["\n    .ant-tooltip {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DwToolTipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    DwToolTipComponent.propDecorators = {
        _title: [{ type: ContentChild, args: ['dwTemplate',] }],
        overlay: [{ type: ViewChild, args: ['overlay',] }],
        dwVisibleChange: [{ type: Output }],
        dwOverlayClassName: [{ type: Input }],
        dwOverlayStyle: [{ type: Input }],
        dwMouseEnterDelay: [{ type: Input }],
        dwMouseLeaveDelay: [{ type: Input }],
        dwContent: [{ type: Input }],
        dwTitle: [{ type: Input }],
        dwVisible: [{ type: Input }],
        dwTrigger: [{ type: Input }],
        dwPlacement: [{ type: Input }]
    };
    return DwToolTipComponent;
}());
export { DwToolTipComponent };
function DwToolTipComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwToolTipComponent.prototype._hasBackdrop;
    /** @type {?} */
    DwToolTipComponent.prototype._prefix;
    /** @type {?} */
    DwToolTipComponent.prototype._positions;
    /** @type {?} */
    DwToolTipComponent.prototype._classMap;
    /** @type {?} */
    DwToolTipComponent.prototype._placement;
    /** @type {?} */
    DwToolTipComponent.prototype._trigger;
    /** @type {?} */
    DwToolTipComponent.prototype._content;
    /** @type {?} */
    DwToolTipComponent.prototype.overlayOrigin;
    /** @type {?} */
    DwToolTipComponent.prototype.isContentString;
    /** @type {?} */
    DwToolTipComponent.prototype.isTitleString;
    /** @type {?} */
    DwToolTipComponent.prototype.visibleSource;
    /** @type {?} */
    DwToolTipComponent.prototype.visible$;
    /** @type {?} */
    DwToolTipComponent.prototype._title;
    /** @type {?} */
    DwToolTipComponent.prototype.overlay;
    /** @type {?} */
    DwToolTipComponent.prototype.dwVisibleChange;
    /** @type {?} */
    DwToolTipComponent.prototype.dwOverlayClassName;
    /** @type {?} */
    DwToolTipComponent.prototype.dwOverlayStyle;
    /** @type {?} */
    DwToolTipComponent.prototype.dwMouseEnterDelay;
    /** @type {?} */
    DwToolTipComponent.prototype.dwMouseLeaveDelay;
    /** @type {?} */
    DwToolTipComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbInRvb2x0aXAvZHctdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQ0wsbUJBQW1CLEVBSXBCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBMEkvQyw0QkFBbUIsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7NEJBNUgxQixLQUFLO3VCQUNWLHVCQUF1QjsyQ0FDVyxtQkFBbUI7eUJBQ25ELEVBQUU7MEJBQ0QsS0FBSzt3QkFDUCxPQUFPOzZCQUtGLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7K0JBR2QsSUFBSSxZQUFZLEVBQUU7a0NBRXZDLEVBQUU7OEJBQ3VCLEVBQUU7aUNBQzVCLElBQUk7aUNBQ0osR0FBRztLQTBHL0I7SUF6R0Qsc0JBQ0kseUNBQVM7Ozs7UUFLYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFSRCxVQUNjLEtBQWlDO1lBQzdDLElBQUksQ0FB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bnQiOlsiaW1wb3J0IHtcbiAgQW5pbWF0aW9uRXZlbnRcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBDZGtDb25uZWN0ZWRPdmVybGF5LFxuICBDZGtPdmVybGF5T3JpZ2luLFxuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBERUZBVUxUXzRfUE9TSVRJT05TLCBQT1NJVElPTl9NQVAgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ2R3LXRvb2x0aXAnLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIGZhZGVBbmltYXRpb24gXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICAuYW50LXRvb2x0aXAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIER3VG9vbFRpcENvbXBvbmVudCB7XG4gIF9oYXNCYWNrZHJvcCA9IGZhbHNlO1xuICBfcHJlZml4ID0gJ2FudC10b29sdGlwLXBsYWNlbWVudCc7XG4gIF9wb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsgLi4uREVGQVVMVF80X1BPU0lUSU9OUyBdO1xuICBfY2xhc3NNYXAgPSB7fTtcbiAgX3BsYWNlbWVudCA9ICd0b3AnO1xuICBfdHJpZ2dlciA9ICdob3Zlcic7XG4gIF9jb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgb3ZlcmxheU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgaXNDb250ZW50U3RyaW5nOiBib29sZWFuO1xuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xuICB2aXNpYmxlU291cmNlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIHZpc2libGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy52aXNpYmxlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBAQ29udGVudENoaWxkKCdkd1RlbXBsYXRlJykgX3RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQFZpZXdDaGlsZCgnb3ZlcmxheScpIG92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBPdXRwdXQoKSBkd1Zpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBkd092ZXJsYXlDbGFzc05hbWUgPSAnJztcbiAgQElucHV0KCkgZHdPdmVybGF5U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSA9IHt9O1xuICBASW5wdXQoKSBkd01vdXNlRW50ZXJEZWxheSA9IDAuMTU7IC8vIFVuaXQ6IHNlY29uZFxuICBASW5wdXQoKSBkd01vdXNlTGVhdmVEZWxheSA9IDAuMTsgLy8gVW5pdDogc2Vjb25kXG4gIEBJbnB1dCgpXG4gIHNldCBkd0NvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0NvbnRlbnRTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX2NvbnRlbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBkd0NvbnRlbnQoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc1RpdGxlU3RyaW5nID0gISh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKTtcbiAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGR3VGl0bGUoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1Zpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCB2aXNpYmxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy52aXNpYmxlU291cmNlLnZhbHVlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLnZpc2libGVTb3VyY2UubmV4dCh2aXNpYmxlKTtcbiAgICAgIHRoaXMuZHdWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aXNpYmxlU291cmNlLnZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGR3VHJpZ2dlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJpZ2dlciA9IHZhbHVlO1xuICAgIHRoaXMuX2hhc0JhY2tkcm9wID0gdGhpcy5fdHJpZ2dlciA9PT0gJ2NsaWNrJztcbiAgfVxuXG4gIGdldCBkd1RyaWdnZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdHJpZ2dlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd1BsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9wbGFjZW1lbnQpIHtcbiAgICAgIHRoaXMuX3BsYWNlbWVudCA9IHZhbHVlO1xuICAgICAgdGhpcy5fcG9zaXRpb25zLnVuc2hpZnQoUE9TSVRJT05fTUFQWyB0aGlzLmR3UGxhY2VtZW50IF0gYXMgQ29ubmVjdGlvblBvc2l0aW9uUGFpcik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGR3UGxhY2VtZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlbWVudDtcbiAgfVxuXG4gIC8vIE1hbnVhbGx5IGZvcmNlIHVwZGF0aW5nIGN1cnJlbnQgb3ZlcmxheSdzIHBvc2l0aW9uXG4gIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXkgJiYgdGhpcy5vdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQ6IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qga2V5IGluIFBPU0lUSU9OX01BUCkge1xuICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KCRldmVudC5jb25uZWN0aW9uUGFpcikgPT09IEpTT04uc3RyaW5naWZ5KFBPU0lUSU9OX01BUFsga2V5IF0pKSB7XG4gICAgICAgIHRoaXMuZHdQbGFjZW1lbnQgPSBrZXk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgLyoqIFRPRE8gbWF5IGNhdXNlIHBlcmZvcm1hbmNlIHByb2JsZW0gKi9cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NvbnRlbnRFbXB0eSgpKSB7XG4gICAgICB0aGlzLmR3VmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmR3VmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgX2FmdGVyVmlzaWJpbGl0eUFuaW1hdGlvbihlOiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xuICAgIGlmIChlLnRvU3RhdGUgPT09ICdmYWxzZScgJiYgIXRoaXMuZHdWaXNpYmxlKSB7XG4gICAgICB0aGlzLmR3VmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGUudG9TdGF0ZSA9PT0gJ3RydWUnICYmIHRoaXMuZHdWaXNpYmxlKSB7XG4gICAgICB0aGlzLmR3VmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuX2NsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLmR3T3ZlcmxheUNsYXNzTmFtZSBdICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5fcHJlZml4fS0ke3RoaXMuX3BsYWNlbWVudH1gIF06IHRydWVcbiAgICB9O1xuICB9XG5cbiAgc2V0T3ZlcmxheU9yaWdpbihvcmlnaW46IENka092ZXJsYXlPcmlnaW4pOiB2b2lkIHtcbiAgICB0aGlzLm92ZXJsYXlPcmlnaW4gPSBvcmlnaW47XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgaXNDb250ZW50RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNUaXRsZVN0cmluZyA/ICh0aGlzLmR3VGl0bGUgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLmR3VGl0bGUpKSA6IGZhbHNlOyAvLyBQaXR5LCBjYW4ndCBkZXRlY3Qgd2hldGhlciBkd1RlbXBsYXRlIGlzIGVtcHR5IGR1ZSB0byBjYW4ndCBnZXQgaXQncyBjb250ZW50IGJlZm9yZSBzaG93biB1cFxuICB9XG59XG4iXX0=
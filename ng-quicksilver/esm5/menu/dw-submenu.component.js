/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, HostBinding, Input, Optional, Output, QueryList, SkipSelf, ViewChild } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, map, takeUntil } from 'rxjs/operators';
import { POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { DwDropDownButtonComponent } from '../dropdown/dw-dropdown-button.component';
import { DwDropDownComponent } from '../dropdown/dw-dropdown.component';
import { DwMenuDirective } from './dw-menu.directive';
var DwSubMenuComponent = /** @class */ (function () {
    function DwSubMenuComponent(dwMenuDirective, cd, dwSubMenuComponent, dwDropDownComponent, dwDropDownButtonComponent) {
        var _this = this;
        this.dwMenuDirective = dwMenuDirective;
        this.cd = cd;
        this.dwSubMenuComponent = dwSubMenuComponent;
        this.dwDropDownComponent = dwDropDownComponent;
        this.dwDropDownButtonComponent = dwDropDownButtonComponent;
        this._open = false;
        this._disabled = false;
        this.$mouseSubject = new Subject();
        this.unsubscribe$ = new Subject();
        this.placement = 'rightTop';
        this.$subOpen = new BehaviorSubject(false);
        this.isInDropDown = false;
        this.isInSubMenu = false;
        this.level = 1;
        this.triggerWidth = null;
        this.dwOpenChange = new EventEmitter();
        this.handleOpenEvent = function (data) {
            if (_this.dwDisabled) {
                return;
            }
            if (_this.dwOpen !== data) {
                _this.dwOpen = data;
                _this.dwOpenChange.emit(_this.dwOpen);
            }
            if (_this.dwSubMenuComponent) {
                _this.dwSubMenuComponent.$subOpen.next(_this.dwOpen);
            }
            if (_this.dwDropDownComponent) {
                _this.dwDropDownComponent.$subOpen.next(_this.dwOpen);
            }
            if (_this.dwDropDownButtonComponent) {
                _this.dwDropDownButtonComponent.$subOpen.next(_this.dwOpen);
            }
        };
    }
    Object.defineProperty(DwSubMenuComponent.prototype, "dwOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = toBoolean(value);
            this.setTriggerWidth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "dwDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "subItemSelected", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return !!this.dwMenuDirective.menuItems.find(function (e) { return e.dwSelected && e.dwSubMenuComponent === _this; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "submenuSelected", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return !!this.subMenus.toArray().find(function (e) { return e !== _this && e.subItemSelected; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "expandState", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwOpen && this.subMenuMode === 'inline') {
                return 'expand';
            }
            else if (this.dwOpen && this.subMenuMode === 'horizontal') {
                return 'bottom';
            }
            else if (this.dwOpen && this.subMenuMode === 'vertical') {
                return 'fade';
            }
            else {
                return 'hidden';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "overlayPositions", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.subMenuMode === 'horizontal') {
                return [POSITION_MAP["bottomLeft"]];
            }
            else {
                return [POSITION_MAP["rightTop"], POSITION_MAP["leftTop"]];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} $event
     * @return {?}
     */
    DwSubMenuComponent.prototype.clickSubMenuTitle = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (this.dwDisabled) {
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
        if ((this.subMenuMode === 'inline') && (!this.isInDropDown)) {
            this.dwOpen = !this.dwOpen;
            this.dwOpenChange.emit(this.dwOpen);
        }
    };
    /**
     * @return {?}
     */
    DwSubMenuComponent.prototype.clickSubMenuDropDown = /**
     * @return {?}
     */
    function () {
        if (this.isInDropDown || (this.subMenuMode === 'vertical') || (this.subMenuMode === 'horizontal')) {
            this.$mouseSubject.next(false);
        }
    };
    Object.defineProperty(DwSubMenuComponent.prototype, "subMenuMode", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.dwMenuDirective.dwMode === 'inline') {
                return 'inline';
            }
            else if ((this.dwMenuDirective.dwMode === 'vertical') || (this.isInSubMenu)) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} e
     * @return {?}
     */
    DwSubMenuComponent.prototype.onMouseEnterEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(true);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    DwSubMenuComponent.prototype.onMouseLeaveEvent = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(false);
        }
    };
    Object.defineProperty(DwSubMenuComponent.prototype, "setDropDownSubmenuClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setMenuSubmenuOpenClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.dwOpen);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setDropDownVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && (this.subMenuMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setDropDownHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && (this.subMenuMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setDropDownDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isInDropDown && this.dwDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setMenuSubmenuClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.isInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setMenuSubmenuSelectedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.submenuSelected || this.subItemSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setMenuVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.subMenuMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setMenuHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.subMenuMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setMenuInlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && (this.subMenuMode === 'inline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DwSubMenuComponent.prototype, "setMenuDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isInDropDown) && this.dwDisabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DwSubMenuComponent.prototype.setTriggerWidth = /**
     * @return {?}
     */
    function () {
        if (this.subMenuMode === 'horizontal') {
            this.triggerWidth = this.trigger.nativeElement.getBoundingClientRect().width;
            /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
            if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
                this.cdkOverlay.overlayRef.updateSize({
                    width: this.triggerWidth
                });
            }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    DwSubMenuComponent.prototype.onPositionChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if ($event.connectionPair) {
            /** @type {?} */
            var originMap_1 = {
                originX: $event.connectionPair.originX,
                originY: $event.connectionPair.originY,
                overlayX: $event.connectionPair.overlayX,
                overlayY: $event.connectionPair.overlayY
            };
            /** @type {?} */
            var keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
            if (keyList.every(function (key) { return originMap_1[key] === POSITION_MAP["leftTop"][key]; })) {
                this.placement = 'leftTop';
            }
            else if (keyList.every(function (key) { return originMap_1[key] === POSITION_MAP["rightTop"][key]; })) {
                this.placement = 'rightTop';
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    DwSubMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.dwMenuDirective.subMenus.push(this);
        /** @type {?} */
        var $combineAll = combineLatest(this.$subOpen, this.$mouseSubject.asObservable()).pipe(map(function (value) { return value[0] || value[1]; }), auditTime(150));
        $combineAll.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleOpenEvent);
        this.isInDropDown = this.dwMenuDirective.dwInDropDown;
    };
    /**
     * @return {?}
     */
    DwSubMenuComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.subMenus && this.subMenus.length) {
            this.subMenus.filter(function (x) { return x !== _this; }).forEach(function (menu) {
                if (_this.subMenuMode === 'inline') {
                    Promise.resolve().then(function () { return menu.level = _this.level + 1; });
                }
                menu.isInSubMenu = true;
            });
        }
    };
    /**
     * @return {?}
     */
    DwSubMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    DwSubMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: '[dw-submenu]',
                    preserveWhitespaces: false,
                    animations: [
                        trigger('expandAnimation', [
                            state('expand', style({ height: '*' })),
                            state('hidden', style({ height: 0, overflow: 'hidden' })),
                            transition('expand => hidden', animate(150)),
                            transition('hidden => expand', animate(150)),
                            state('fade', style({ opacity: 1 })),
                            transition('fade => void', [
                                animate(150, style({ opacity: 0 }))
                            ]),
                            transition('void => fade', [
                                style({ opacity: '0' }),
                                animate(150)
                            ]),
                            state('bottom', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 0%'
                            })),
                            transition('void => bottom', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }),
                                animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
                            ]),
                            transition('bottom => void', [
                                animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }))
                            ])
                        ])
                    ],
                    template: "<div\n  #trigger\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  [class.ant-dropdown-menu-submenu-title]=\"isInDropDown\"\n  [class.ant-menu-submenu-title]=\"!isInDropDown\"\n  (mouseenter)=\"onMouseEnterEvent($event)\"\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\n  (click)=\"clickSubMenuTitle($event)\"\n  [style.paddingLeft.px]=\"(dwMenuDirective.dwMode === 'inline')?(level*dwMenuDirective.dwInlineIndent):null\">\n  <ng-content select=\"[title]\"></ng-content>\n  <i [class.ant-dropdown-menu-submenu-arrow]=\"isInDropDown\" [class.ant-menu-submenu-arrow]=\"!isInDropDown\"></i>\n</div>\n<ul\n  [class.ant-dropdown-menu]=\"isInDropDown\"\n  [@expandAnimation]=\"expandState\"\n  [class.ant-menu]=\"!isInDropDown\"\n  [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\n  [class.ant-menu-inline]=\"!isInDropDown\"\n  [class.ant-dropdown-menu-sub]=\"isInDropDown\"\n  [class.ant-menu-sub]=\"!isInDropDown\"\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\n  (mouseenter)=\"onMouseEnterEvent($event)\"\n  *ngIf=\"(dwMenuDirective.dwMode=='inline')\">\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n</ul>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"dwOpen&&(dwMenuDirective.dwMode!='inline')\">\n  <div\n    class=\"ant-menu-submenu ant-menu-submenu-popup\"\n    [class.ant-menu-light]=\"dwMenuDirective.dwTheme=='light'\"\n    [class.ant-menu-dark]=\"dwMenuDirective.dwTheme=='dark'\"\n    [class.ant-menu-submenu-placement-bottomLeft]=\"subMenuMode=='horizontal'\"\n    [class.ant-menu-submenu-placement-rightTop]=\"(subMenuMode=='vertical')&&(placement=='rightTop')\"\n    [class.ant-menu-submenu-placement-leftTop]=\"(subMenuMode=='vertical')&&(placement=='leftTop')\"\n    [@expandAnimation]=\"expandState\">\n    <ul\n      [class.ant-dropdown-menu]=\"isInDropDown\"\n      [class.ant-menu]=\"!isInDropDown\"\n      [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\n      [class.ant-menu-vertical]=\"!isInDropDown\"\n      [class.ant-dropdown-menu-sub]=\"isInDropDown\"\n      [class.ant-menu-sub]=\"!isInDropDown\"\n      (mouseleave)=\"onMouseLeaveEvent($event)\"\n      (mouseenter)=\"onMouseEnterEvent($event)\">\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n    </ul>\n  </div>\n</ng-template>\n<ng-template #subMenuTemplate>\n  <ng-content></ng-content>\n</ng-template>",
                    styles: ["\n      .ant-menu-submenu-placement-bottomLeft {\n        top: 6px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-rightTop {\n        left: 4px;\n        position: relative;\n      }\n\n      .ant-menu-submenu-placement-leftTop {\n        right: 4px;\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    DwSubMenuComponent.ctorParameters = function () { return [
        { type: DwMenuDirective },
        { type: ChangeDetectorRef },
        { type: DwSubMenuComponent, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: DwDropDownComponent, decorators: [{ type: Host }, { type: Optional }] },
        { type: DwDropDownButtonComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    DwSubMenuComponent.propDecorators = {
        subMenus: [{ type: ContentChildren, args: [DwSubMenuComponent, { descendants: true },] }],
        dwOpenChange: [{ type: Output }],
        cdkOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        trigger: [{ type: ViewChild, args: ['trigger',] }],
        dwOpen: [{ type: Input }],
        dwDisabled: [{ type: Input }],
        setDropDownSubmenuClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu',] }],
        setMenuSubmenuOpenClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-open',] }],
        setDropDownVerticalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-vertical',] }],
        setDropDownHorizontalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-horizontal',] }],
        setDropDownDisabled: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-disabled',] }],
        setMenuSubmenuClass: [{ type: HostBinding, args: ['class.ant-menu-submenu',] }],
        setMenuSubmenuSelectedClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-selected',] }],
        setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-vertical',] }],
        setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-horizontal',] }],
        setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-inline',] }],
        setMenuDisabled: [{ type: HostBinding, args: ['class.ant-menu-submenu-disabled',] }]
    };
    return DwSubMenuComponent;
}());
export { DwSubMenuComponent };
function DwSubMenuComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DwSubMenuComponent.prototype._open;
    /** @type {?} */
    DwSubMenuComponent.prototype._disabled;
    /** @type {?} */
    DwSubMenuComponent.prototype.$mouseSubject;
    /** @type {?} */
    DwSubMenuComponent.prototype.unsubscribe$;
    /** @type {?} */
    DwSubMenuComponent.prototype.placement;
    /** @type {?} */
    DwSubMenuComponent.prototype.$subOpen;
    /** @type {?} */
    DwSubMenuComponent.prototype.isInDropDown;
    /** @type {?} */
    DwSubMenuComponent.prototype.isInSubMenu;
    /** @type {?} */
    DwSubMenuComponent.prototype.level;
    /** @type {?} */
    DwSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    DwSubMenuComponent.prototype.subMenus;
    /** @type {?} */
    DwSubMenuComponent.prototype.dwOpenChange;
    /** @type {?} */
    DwSubMenuComponent.prototype.cdkOverlay;
    /** @type {?} */
    DwSubMenuComponent.prototype.trigger;
    /** @type {?} */
    DwSubMenuComponent.prototype.handleOpenEvent;
    /** @type {?} */
    DwSubMenuComponent.prototype.dwMenuDirective;
    /** @type {?} */
    DwSubMenuComponent.prototype.cd;
    /** @type {?} */
    DwSubMenuComponent.prototype.dwSubMenuComponent;
    /** @type {?} */
    DwSubMenuComponent.prototype.dwDropDownComponent;
    /** @type {?} */
    DwSubMenuComponent.prototype.dwDropDownButtonComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lbnUvZHctc3VibWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUEwRCxNQUFNLHNCQUFzQixDQUFDO0FBQ25ILE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQStRcEQsNEJBQW1CLGVBQWdDLEVBQVUsRUFBcUIsRUFBa0Msa0JBQXNDLEVBQThCLG1CQUF3QyxFQUE4Qix5QkFBb0Q7UUFBbFQsaUJBQ0M7UUFEa0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FB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QUFpQzt1Q0FLN0MsV0FBVyxTQUFDLGlDQUFpQzt5Q0FLN0MsV0FBVyxTQUFDLG1DQUFtQztxQ0FLL0MsV0FBVyxTQUFDLCtCQUErQjtrQ0FLM0MsV0FBVyxTQUFDLGlDQUFpQzs7NkJBclBoRDs7U0EyRmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTa2lwU2VsZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBEd0Ryb3BEb3duQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vZHctZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEd0Ryb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vZHctZHJvcGRvd24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgRHdNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9kdy1tZW51LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW2R3LXN1Ym1lbnVdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRBbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgnZXhwYW5kJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoeyBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmQgPT4gaGlkZGVuJywgYW5pbWF0ZSgxNTApKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBleHBhbmQnLCBhbmltYXRlKDE1MCkpLFxuICAgICAgc3RhdGUoJ2ZhZGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZmFkZSA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKDE1MCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGZhZGUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICBhbmltYXRlKDE1MClcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2JvdHRvbSA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL2R3LXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYFxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbUxlZnQge1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtcmlnaHRUb3Age1xuICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3Age1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgRHdTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9vcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgJG1vdXNlU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwbGFjZW1lbnQgPSAncmlnaHRUb3AnO1xuICAkc3ViT3BlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBpc0luRHJvcERvd24gPSBmYWxzZTtcbiAgaXNJblN1Yk1lbnUgPSBmYWxzZTtcbiAgbGV2ZWwgPSAxO1xuICB0cmlnZ2VyV2lkdGggPSBudWxsO1xuICBAQ29udGVudENoaWxkcmVuKER3U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBzdWJNZW51czogUXVlcnlMaXN0PER3U3ViTWVudUNvbXBvbmVudD47XG4gIEBPdXRwdXQoKSBkd09wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKCd0cmlnZ2VyJykgdHJpZ2dlcjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgZHdPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3BlbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgfVxuXG4gIGdldCBkd09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZHdEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBkd0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBzdWJJdGVtU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5kd01lbnVEaXJlY3RpdmUubWVudUl0ZW1zLmZpbmQoZSA9PiBlLmR3U2VsZWN0ZWQgJiYgZS5kd1N1Yk1lbnVDb21wb25lbnQgPT09IHRoaXMpO1xuICB9XG5cbiAgZ2V0IHN1Ym1lbnVTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnN1Yk1lbnVzLnRvQXJyYXkoKS5maW5kKGUgPT4gZSAhPT0gdGhpcyAmJiBlLnN1Ykl0ZW1TZWxlY3RlZCk7XG4gIH1cblxuICBnZXQgZXhwYW5kU3RhdGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5kd09wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJldHVybiAnZXhwYW5kJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZHdPcGVuICYmIHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kd09wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuICdmYWRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuXG4gIGdldCBvdmVybGF5UG9zaXRpb25zKCk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSB7XG4gICAgaWYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIFsgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFsgUE9TSVRJT05fTUFQLnJpZ2h0VG9wLCBQT1NJVElPTl9NQVAubGVmdFRvcCBdO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrU3ViTWVudVRpdGxlKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHRoaXMuc3ViTWVudU1vZGUgPT09ICdpbmxpbmUnKSAmJiAoIXRoaXMuaXNJbkRyb3BEb3duKSkge1xuICAgICAgdGhpcy5kd09wZW4gPSAhdGhpcy5kd09wZW47XG4gICAgICB0aGlzLmR3T3BlbkNoYW5nZS5lbWl0KHRoaXMuZHdPcGVuKTtcbiAgICB9XG4gIH1cblxuICBjbGlja1N1Yk1lbnVEcm9wRG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luRHJvcERvd24gfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8ICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpKSB7XG4gICAgICB0aGlzLiRtb3VzZVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN1Yk1lbnVNb2RlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuZHdNZW51RGlyZWN0aXZlLmR3TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJldHVybiAnaW5saW5lJztcbiAgICB9IGVsc2UgaWYgKCh0aGlzLmR3TWVudURpcmVjdGl2ZS5kd01vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8ICh0aGlzLmlzSW5TdWJNZW51KSkge1xuICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUVudGVyRXZlbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgdGhpcy5pc0luRHJvcERvd24pIHtcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VMZWF2ZUV2ZW50KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykgfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8IHRoaXMuaXNJbkRyb3BEb3duKSB7XG4gICAgICB0aGlzLiRtb3VzZVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51JylcbiAgZ2V0IHNldERyb3BEb3duU3VibWVudUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1vcGVuJylcbiAgZ2V0IHNldE1lbnVTdWJtZW51T3BlbkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5kd09wZW4pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXZlcnRpY2FsJylcbiAgZ2V0IHNldERyb3BEb3duVmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0RHJvcERvd25Ib3Jpem9udGFsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWRpc2FibGVkJylcbiAgZ2V0IHNldERyb3BEb3duRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmIHRoaXMuZHdEaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudScpXG4gIGdldCBzZXRNZW51U3VibWVudUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0luRHJvcERvd247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtc2VsZWN0ZWQnKVxuICBnZXQgc2V0TWVudVN1Ym1lbnVTZWxlY3RlZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN1Ym1lbnVTZWxlY3RlZCB8fCB0aGlzLnN1Ykl0ZW1TZWxlY3RlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS12ZXJ0aWNhbCcpXG4gIGdldCBzZXRNZW51VmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0TWVudUhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtaW5saW5lJylcbiAgZ2V0IHNldE1lbnVJbmxpbmVDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdpbmxpbmUnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZCcpXG4gIGdldCBzZXRNZW51RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmIHRoaXMuZHdEaXNhYmxlZDtcbiAgfVxuXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMudHJpZ2dlci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgLyoqIHNob3VsZCByZW1vdmUgYWZ0ZXIgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3B1bGwvODc2NSBtZXJnZWQgKiovXG4gICAgICBpZiAodGhpcy5jZGtPdmVybGF5ICYmIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xuICAgICAgICAgIHdpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50OiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSB7XG4gICAgICBjb25zdCBvcmlnaW5NYXAgPSB7XG4gICAgICAgIG9yaWdpblggOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSA6ICRldmVudC5jb25uZWN0aW9uUGFpci5vcmlnaW5ZLFxuICAgICAgICBvdmVybGF5WDogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYLFxuICAgICAgICBvdmVybGF5WTogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZXG4gICAgICB9O1xuICAgICAgY29uc3Qga2V5TGlzdCA9IFsgJ29yaWdpblgnLCAnb3JpZ2luWScsICdvdmVybGF5WCcsICdvdmVybGF5WScgXTtcbiAgICAgIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBvcmlnaW5NYXBbIGtleSBdID09PSBQT1NJVElPTl9NQVAubGVmdFRvcFsga2V5IF0pKSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ2xlZnRUb3AnO1xuICAgICAgfSBlbHNlIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBvcmlnaW5NYXBbIGtleSBdID09PSBQT1NJVElPTl9NQVAucmlnaHRUb3BbIGtleSBdKSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9ICdyaWdodFRvcCc7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPcGVuRXZlbnQgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xuICAgIGlmICh0aGlzLmR3RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHdPcGVuICE9PSBkYXRhKSB7XG4gICAgICB0aGlzLmR3T3BlbiA9IGRhdGE7XG4gICAgICB0aGlzLmR3T3BlbkNoYW5nZS5lbWl0KHRoaXMuZHdPcGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHdTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLmR3U3ViTWVudUNvbXBvbmVudC4kc3ViT3Blbi5uZXh0KHRoaXMuZHdPcGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZHdEcm9wRG93bkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5kd0Ryb3BEb3duQ29tcG9uZW50LiRzdWJPcGVuLm5leHQodGhpcy5kd09wZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd0Ryb3BEb3duQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmR3RHJvcERvd25CdXR0b25Db21wb25lbnQuJHN1Yk9wZW4ubmV4dCh0aGlzLmR3T3Blbik7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGR3TWVudURpcmVjdGl2ZTogRHdNZW51RGlyZWN0aXZlLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgQFNraXBTZWxmKCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkd1N1Yk1lbnVDb21wb25lbnQ6IER3U3ViTWVudUNvbXBvbmVudCwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIGR3RHJvcERvd25Db21wb25lbnQ6IER3RHJvcERvd25Db21wb25lbnQsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkd0Ryb3BEb3duQnV0dG9uQ29tcG9uZW50OiBEd0Ryb3BEb3duQnV0dG9uQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmR3TWVudURpcmVjdGl2ZS5zdWJNZW51cy5wdXNoKHRoaXMpO1xuICAgIGNvbnN0ICRjb21iaW5lQWxsID0gY29tYmluZUxhdGVzdCh0aGlzLiRzdWJPcGVuLCB0aGlzLiRtb3VzZVN1YmplY3QuYXNPYnNlcnZhYmxlKCkpLnBpcGUobWFwKHZhbHVlID0+IHZhbHVlWyAwIF0gfHwgdmFsdWVbIDEgXSksIGF1ZGl0VGltZSgxNTApKTtcbiAgICAkY29tYmluZUFsbC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSh0aGlzLmhhbmRsZU9wZW5FdmVudCk7XG4gICAgdGhpcy5pc0luRHJvcERvd24gPSB0aGlzLmR3TWVudURpcmVjdGl2ZS5kd0luRHJvcERvd247XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3ViTWVudXMgJiYgdGhpcy5zdWJNZW51cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3ViTWVudXMuZmlsdGVyKHggPT4geCAhPT0gdGhpcykuZm9yRWFjaChtZW51ID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdpbmxpbmUnKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiBtZW51LmxldmVsID0gdGhpcy5sZXZlbCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIG1lbnUuaXNJblN1Yk1lbnUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==
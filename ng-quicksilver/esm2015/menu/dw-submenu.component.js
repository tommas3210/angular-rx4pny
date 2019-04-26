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
export class DwSubMenuComponent {
    /**
     * @param {?} dwMenuDirective
     * @param {?} cd
     * @param {?} dwSubMenuComponent
     * @param {?} dwDropDownComponent
     * @param {?} dwDropDownButtonComponent
     */
    constructor(dwMenuDirective, cd, dwSubMenuComponent, dwDropDownComponent, dwDropDownButtonComponent) {
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
        this.handleOpenEvent = (data) => {
            if (this.dwDisabled) {
                return;
            }
            if (this.dwOpen !== data) {
                this.dwOpen = data;
                this.dwOpenChange.emit(this.dwOpen);
            }
            if (this.dwSubMenuComponent) {
                this.dwSubMenuComponent.$subOpen.next(this.dwOpen);
            }
            if (this.dwDropDownComponent) {
                this.dwDropDownComponent.$subOpen.next(this.dwOpen);
            }
            if (this.dwDropDownButtonComponent) {
                this.dwDropDownButtonComponent.$subOpen.next(this.dwOpen);
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwOpen(value) {
        this._open = toBoolean(value);
        this.setTriggerWidth();
    }
    /**
     * @return {?}
     */
    get dwOpen() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dwDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get dwDisabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    get subItemSelected() {
        return !!this.dwMenuDirective.menuItems.find(e => e.dwSelected && e.dwSubMenuComponent === this);
    }
    /**
     * @return {?}
     */
    get submenuSelected() {
        return !!this.subMenus.toArray().find(e => e !== this && e.subItemSelected);
    }
    /**
     * @return {?}
     */
    get expandState() {
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
    }
    /**
     * @return {?}
     */
    get overlayPositions() {
        if (this.subMenuMode === 'horizontal') {
            return [POSITION_MAP["bottomLeft"]];
        }
        else {
            return [POSITION_MAP["rightTop"], POSITION_MAP["leftTop"]];
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    clickSubMenuTitle($event) {
        if (this.dwDisabled) {
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
        if ((this.subMenuMode === 'inline') && (!this.isInDropDown)) {
            this.dwOpen = !this.dwOpen;
            this.dwOpenChange.emit(this.dwOpen);
        }
    }
    /**
     * @return {?}
     */
    clickSubMenuDropDown() {
        if (this.isInDropDown || (this.subMenuMode === 'vertical') || (this.subMenuMode === 'horizontal')) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get subMenuMode() {
        if (this.dwMenuDirective.dwMode === 'inline') {
            return 'inline';
        }
        else if ((this.dwMenuDirective.dwMode === 'vertical') || (this.isInSubMenu)) {
            return 'vertical';
        }
        else {
            return 'horizontal';
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseEnterEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeaveEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get setDropDownSubmenuClass() {
        return this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuOpenClass() {
        return (!this.isInDropDown) && (this.dwOpen);
    }
    /**
     * @return {?}
     */
    get setDropDownVerticalClass() {
        return this.isInDropDown && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setDropDownHorizontalClass() {
        return this.isInDropDown && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setDropDownDisabled() {
        return this.isInDropDown && this.dwDisabled;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuClass() {
        return !this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuSelectedClass() {
        return this.submenuSelected || this.subItemSelected;
    }
    /**
     * @return {?}
     */
    get setMenuVerticalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setMenuHorizontalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setMenuInlineClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'inline');
    }
    /**
     * @return {?}
     */
    get setMenuDisabled() {
        return (!this.isInDropDown) && this.dwDisabled;
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        if (this.subMenuMode === 'horizontal') {
            this.triggerWidth = this.trigger.nativeElement.getBoundingClientRect().width;
            /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
            if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
                this.cdkOverlay.overlayRef.updateSize({
                    width: this.triggerWidth
                });
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        if ($event.connectionPair) {
            /** @type {?} */
            const originMap = {
                originX: $event.connectionPair.originX,
                originY: $event.connectionPair.originY,
                overlayX: $event.connectionPair.overlayX,
                overlayY: $event.connectionPair.overlayY
            };
            /** @type {?} */
            const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
            if (keyList.every(key => originMap[key] === POSITION_MAP["leftTop"][key])) {
                this.placement = 'leftTop';
            }
            else if (keyList.every(key => originMap[key] === POSITION_MAP["rightTop"][key])) {
                this.placement = 'rightTop';
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dwMenuDirective.subMenus.push(this);
        /** @type {?} */
        const $combineAll = combineLatest(this.$subOpen, this.$mouseSubject.asObservable()).pipe(map(value => value[0] || value[1]), auditTime(150));
        $combineAll.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleOpenEvent);
        this.isInDropDown = this.dwMenuDirective.dwInDropDown;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.subMenus && this.subMenus.length) {
            this.subMenus.filter(x => x !== this).forEach(menu => {
                if (this.subMenuMode === 'inline') {
                    Promise.resolve().then(() => menu.level = this.level + 1);
                }
                menu.isInSubMenu = true;
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
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
                styles: [`
      .ant-menu-submenu-placement-bottomLeft {
        top: 6px;
        position: relative;
      }

      .ant-menu-submenu-placement-rightTop {
        left: 4px;
        position: relative;
      }

      .ant-menu-submenu-placement-leftTop {
        right: 4px;
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
DwSubMenuComponent.ctorParameters = () => [
    { type: DwMenuDirective },
    { type: ChangeDetectorRef },
    { type: DwSubMenuComponent, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: DwDropDownComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: DwDropDownButtonComponent, decorators: [{ type: Host }, { type: Optional }] }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHctc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1xdWlja3NpbHZlci8iLCJzb3VyY2VzIjpbIm1lbnUvZHctc3VibWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLG1CQUFtQixFQUEwRCxNQUFNLHNCQUFzQixDQUFDO0FBQ25ILE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFFBQVEsRUFDUixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBOER0RCxNQUFNOzs7Ozs7OztJQWlOSixZQUFtQixlQUFnQyxFQUFVLEVBQXFCLEVBQWtDLGtCQUFzQyxFQUE4QixtQkFBd0MsRUFBOEIseUJBQW9EO1FBQS9SLG9CQUFlLEdBQWYsZUFBZSxDQUFp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QztxQkFDSCxDQUFDO2lCQUNIO2dCQUNELDhnRkFBa0Q7eUJBRWhEOzs7Ozs7Ozs7Ozs7Ozs7S0FlQzthQUVKOzs7O1lBNURRLGVBQWU7WUF6QnRCLGlCQUFpQjtZQXdTdUgsa0JBQWtCLHVCQUFyRSxRQUFRLFlBQUksUUFBUTtZQWpSbEcsbUJBQW1CLHVCQWlSbUksSUFBSSxZQUFJLFFBQVE7WUFsUnRLLHlCQUF5Qix1QkFrUm1NLElBQUksWUFBSSxRQUFROzs7dUJBck1sUCxlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFOzJCQUN6RCxNQUFNO3lCQUNOLFNBQVMsU0FBQyxtQkFBbUI7c0JBQzdCLFNBQVMsU0FBQyxTQUFTO3FCQUVuQixLQUFLO3lCQVVMLEtBQUs7c0NBNkVMLFdBQVcsU0FBQyxpQ0FBaUM7c0NBSzdDLFdBQVcsU0FBQyw2QkFBNkI7dUNBS3pDLFdBQVcsU0FBQywwQ0FBMEM7eUNBS3RELFdBQVcsU0FBQyw0Q0FBNEM7a0NBS3hELFdBQVcsU0FBQywwQ0FBMEM7a0NBS3RELFdBQVcsU0FBQyx3QkFBd0I7MENBS3BDLFdBQVcsU0FBQyxpQ0FBaUM7bUNBSzdDLFdBQVcsU0FBQyxpQ0FBaUM7cUNBSzdDLFdBQVcsU0FBQyxtQ0FBbUM7aUNBSy9DLFdBQVcsU0FBQywrQkFBK0I7OEJBSzNDLFdBQVcsU0FBQyxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENka0Nvbm5lY3RlZE92ZXJsYXksIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFNraXBTZWxmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUE9TSVRJT05fTUFQIH0gZnJvbSAnLi4vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IER3RHJvcERvd25CdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9kdy1kcm9wZG93bi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IER3RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9kdy1kcm9wZG93bi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBEd01lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2R3LW1lbnUuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICdbZHctc3VibWVudV0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdleHBhbmQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7IGhlaWdodDogMCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZCA9PiBoaWRkZW4nLCBhbmltYXRlKDE1MCkpLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IGV4cGFuZCcsIGFuaW1hdGUoMTUwKSksXG4gICAgICBzdGF0ZSgnZmFkZScsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdmYWRlID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gZmFkZScsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXG4gICAgICAgIGFuaW1hdGUoMTUwKVxuICAgICAgXSksXG4gICAgICBzdGF0ZSgnYm90dG9tJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5ICAgICAgICA6IDEsXG4gICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgxKScsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiBib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignYm90dG9tID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vZHctc3VibWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtYm90dG9tTGVmdCB7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5hbnQtbWVudS1zdWJtZW51LXBsYWNlbWVudC1yaWdodFRvcCB7XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtbGVmdFRvcCB7XG4gICAgICAgIHJpZ2h0OiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEd1N1Yk1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSAkbW91c2VTdWJqZWN0ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHBsYWNlbWVudCA9ICdyaWdodFRvcCc7XG4gICRzdWJPcGVuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGlzSW5Ecm9wRG93biA9IGZhbHNlO1xuICBpc0luU3ViTWVudSA9IGZhbHNlO1xuICBsZXZlbCA9IDE7XG4gIHRyaWdnZXJXaWR0aCA9IG51bGw7XG4gIEBDb250ZW50Q2hpbGRyZW4oRHdTdWJNZW51Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHN1Yk1lbnVzOiBRdWVyeUxpc3Q8RHdTdWJNZW51Q29tcG9uZW50PjtcbiAgQE91dHB1dCgpIGR3T3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka092ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoJ3RyaWdnZXInKSB0cmlnZ2VyOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkd09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9vcGVuID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldFRyaWdnZXJXaWR0aCgpO1xuICB9XG5cbiAgZ2V0IGR3T3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkd0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IGR3RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHN1Ykl0ZW1TZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmR3TWVudURpcmVjdGl2ZS5tZW51SXRlbXMuZmluZChlID0+IGUuZHdTZWxlY3RlZCAmJiBlLmR3U3ViTWVudUNvbXBvbmVudCA9PT0gdGhpcyk7XG4gIH1cblxuICBnZXQgc3VibWVudVNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc3ViTWVudXMudG9BcnJheSgpLmZpbmQoZSA9PiBlICE9PSB0aGlzICYmIGUuc3ViSXRlbVNlbGVjdGVkKTtcbiAgfVxuXG4gIGdldCBleHBhbmRTdGF0ZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmR3T3BlbiAmJiB0aGlzLnN1Yk1lbnVNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgcmV0dXJuICdleHBhbmQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kd09wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gJ2JvdHRvbSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmR3T3BlbiAmJiB0aGlzLnN1Yk1lbnVNb2RlID09PSAndmVydGljYWwnKSB7XG4gICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2hpZGRlbic7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG92ZXJsYXlQb3NpdGlvbnMoKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcbiAgICBpZiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICByZXR1cm4gWyBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gWyBQT1NJVElPTl9NQVAucmlnaHRUb3AsIFBPU0lUSU9OX01BUC5sZWZ0VG9wIF07XG4gICAgfVxuICB9XG5cbiAgY2xpY2tTdWJNZW51VGl0bGUoJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpICYmICghdGhpcy5pc0luRHJvcERvd24pKSB7XG4gICAgICB0aGlzLmR3T3BlbiA9ICF0aGlzLmR3T3BlbjtcbiAgICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrU3ViTWVudURyb3BEb3duKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzSW5Ecm9wRG93biB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykpIHtcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3ViTWVudU1vZGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5kd01lbnVEaXJlY3RpdmUuZHdNb2RlID09PSAnaW5saW5lJykge1xuICAgICAgcmV0dXJuICdpbmxpbmUnO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuZHdNZW51RGlyZWN0aXZlLmR3TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgKHRoaXMuaXNJblN1Yk1lbnUpKSB7XG4gICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdob3Jpem9udGFsJztcbiAgICB9XG4gIH1cblxuICBvbk1vdXNlRW50ZXJFdmVudChlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpIHx8ICh0aGlzLnN1Yk1lbnVNb2RlID09PSAndmVydGljYWwnKSB8fCB0aGlzLmlzSW5Ecm9wRG93bikge1xuICAgICAgdGhpcy4kbW91c2VTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUxlYXZlRXZlbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgdGhpcy5pc0luRHJvcERvd24pIHtcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUnKVxuICBnZXQgc2V0RHJvcERvd25TdWJtZW51Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LW9wZW4nKVxuICBnZXQgc2V0TWVudVN1Ym1lbnVPcGVuQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmICh0aGlzLmR3T3Blbik7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdmVydGljYWwnKVxuICBnZXQgc2V0RHJvcERvd25WZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93biAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtaG9yaXpvbnRhbCcpXG4gIGdldCBzZXREcm9wRG93bkhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtZGlzYWJsZWQnKVxuICBnZXQgc2V0RHJvcERvd25EaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgdGhpcy5kd0Rpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51JylcbiAgZ2V0IHNldE1lbnVTdWJtZW51Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1zZWxlY3RlZCcpXG4gIGdldCBzZXRNZW51U3VibWVudVNlbGVjdGVkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWVudVNlbGVjdGVkIHx8IHRoaXMuc3ViSXRlbVNlbGVjdGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LXZlcnRpY2FsJylcbiAgZ2V0IHNldE1lbnVWZXJ0aWNhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtaG9yaXpvbnRhbCcpXG4gIGdldCBzZXRNZW51SG9yaXpvbnRhbENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1pbmxpbmUnKVxuICBnZXQgc2V0TWVudUlubGluZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWRpc2FibGVkJylcbiAgZ2V0IHNldE1lbnVEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgdGhpcy5kd0Rpc2FibGVkO1xuICB9XG5cbiAgc2V0VHJpZ2dlcldpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHRoaXMudHJpZ2dlcldpZHRoID0gdGhpcy50cmlnZ2VyLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAvKiogc2hvdWxkIHJlbW92ZSBhZnRlciBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvcHVsbC84NzY1IG1lcmdlZCAqKi9cbiAgICAgIGlmICh0aGlzLmNka092ZXJsYXkgJiYgdGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jZGtPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7XG4gICAgICAgICAgd2lkdGg6IHRoaXMudHJpZ2dlcldpZHRoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgb25Qb3NpdGlvbkNoYW5nZSgkZXZlbnQ6IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIGlmICgkZXZlbnQuY29ubmVjdGlvblBhaXIpIHtcbiAgICAgIGNvbnN0IG9yaWdpbk1hcCA9IHtcbiAgICAgICAgb3JpZ2luWCA6ICRldmVudC5jb25uZWN0aW9uUGFpci5vcmlnaW5YLFxuICAgICAgICBvcmlnaW5ZIDogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm9yaWdpblksXG4gICAgICAgIG92ZXJsYXlYOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3ZlcmxheVgsXG4gICAgICAgIG92ZXJsYXlZOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3ZlcmxheVlcbiAgICAgIH07XG4gICAgICBjb25zdCBrZXlMaXN0ID0gWyAnb3JpZ2luWCcsICdvcmlnaW5ZJywgJ292ZXJsYXlYJywgJ292ZXJsYXlZJyBdO1xuICAgICAgaWYgKGtleUxpc3QuZXZlcnkoa2V5ID0+IG9yaWdpbk1hcFsga2V5IF0gPT09IFBPU0lUSU9OX01BUC5sZWZ0VG9wWyBrZXkgXSkpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAnbGVmdFRvcCc7XG4gICAgICB9IGVsc2UgaWYgKGtleUxpc3QuZXZlcnkoa2V5ID0+IG9yaWdpbk1hcFsga2V5IF0gPT09IFBPU0lUSU9OX01BUC5yaWdodFRvcFsga2V5IF0pKSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ3JpZ2h0VG9wJztcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9wZW5FdmVudCA9IChkYXRhOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHRoaXMuZHdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd09wZW4gIT09IGRhdGEpIHtcbiAgICAgIHRoaXMuZHdPcGVuID0gZGF0YTtcbiAgICAgIHRoaXMuZHdPcGVuQ2hhbmdlLmVtaXQodGhpcy5kd09wZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd1N1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHdTdWJNZW51Q29tcG9uZW50LiRzdWJPcGVuLm5leHQodGhpcy5kd09wZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kd0Ryb3BEb3duQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLmR3RHJvcERvd25Db21wb25lbnQuJHN1Yk9wZW4ubmV4dCh0aGlzLmR3T3Blbik7XG4gICAgfVxuICAgIGlmICh0aGlzLmR3RHJvcERvd25CdXR0b25Db21wb25lbnQpIHtcbiAgICAgIHRoaXMuZHdEcm9wRG93bkJ1dHRvbkNvbXBvbmVudC4kc3ViT3Blbi5uZXh0KHRoaXMuZHdPcGVuKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZHdNZW51RGlyZWN0aXZlOiBEd01lbnVEaXJlY3RpdmUsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBAU2tpcFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIGR3U3ViTWVudUNvbXBvbmVudDogRHdTdWJNZW51Q29tcG9uZW50LCBASG9zdCgpIEBPcHRpb25hbCgpIHByaXZhdGUgZHdEcm9wRG93bkNvbXBvbmVudDogRHdEcm9wRG93bkNvbXBvbmVudCwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIGR3RHJvcERvd25CdXR0b25Db21wb25lbnQ6IER3RHJvcERvd25CdXR0b25Db21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZHdNZW51RGlyZWN0aXZlLnN1Yk1lbnVzLnB1c2godGhpcyk7XG4gICAgY29uc3QgJGNvbWJpbmVBbGwgPSBjb21iaW5lTGF0ZXN0KHRoaXMuJHN1Yk9wZW4sIHRoaXMuJG1vdXNlU3ViamVjdC5hc09ic2VydmFibGUoKSkucGlwZShtYXAodmFsdWUgPT4gdmFsdWVbIDAgXSB8fCB2YWx1ZVsgMSBdKSwgYXVkaXRUaW1lKDE1MCkpO1xuICAgICRjb21iaW5lQWxsLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKHRoaXMuaGFuZGxlT3BlbkV2ZW50KTtcbiAgICB0aGlzLmlzSW5Ecm9wRG93biA9IHRoaXMuZHdNZW51RGlyZWN0aXZlLmR3SW5Ecm9wRG93bjtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJNZW51cyAmJiB0aGlzLnN1Yk1lbnVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdWJNZW51cy5maWx0ZXIoeCA9PiB4ICE9PSB0aGlzKS5mb3JFYWNoKG1lbnUgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IG1lbnUubGV2ZWwgPSB0aGlzLmxldmVsICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgbWVudS5pc0luU3ViTWVudSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19
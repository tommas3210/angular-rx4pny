import { AfterContentInit, ElementRef, EventEmitter } from '@angular/core';
import { DwMenuItemDirective } from './dw-menu-item.directive';
import { DwSubMenuComponent } from './dw-submenu.component';
export declare type DwMode = 'vertical' | 'horizontal' | 'inline';
export declare class DwMenuDirective implements AfterContentInit {
    el: ElementRef;
    private _selectable;
    private _inlineCollapsed;
    private _inDropDown;
    /** view init flat */
    private isInit;
    /** cache mode */
    private cacheMode;
    /** opened index of array */
    private subMenusOpenIndex;
    /** collection of menu item */
    menuItems: DwMenuItemDirective[];
    /** collection of sub menu */
    subMenus: DwSubMenuComponent[];
    dwTheme: 'light' | 'dark';
    dwInlineIndent: number;
    dwMode: DwMode;
    dwClick: EventEmitter<DwMenuItemDirective>;
    dwInDropDown: boolean;
    dwSelectable: boolean;
    dwInlineCollapsed: boolean;
    updateInlineCollapse(): void;
    /** define host class */
    readonly isInDropDownClass: boolean;
    readonly isNotInDropDownClass: boolean;
    readonly setDropDownThemeLightClass: boolean;
    readonly setDropDownThemeDarkClass: boolean;
    readonly setMenuThemeLightClass: boolean;
    readonly setMenuThemeDarkClass: boolean;
    readonly setMenuVerticalClass: boolean;
    readonly setMenuHorizontalClass: boolean;
    readonly setMenuInlineClass: boolean;
    readonly setMenuInlineCollapsedClass: boolean;
    constructor(el: ElementRef);
    ngAfterContentInit(): void;
    /** trigger when menu item clicked */
    clearAllSelected(): void;
    hideSubMenus(): void;
    reductionSubMenus(): void;
    clickItem(value: DwMenuItemDirective): void;
}

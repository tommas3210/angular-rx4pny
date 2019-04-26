import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DwMenuDirective } from './dw-menu.directive';
import { DwSubMenuComponent } from './dw-submenu.component';
export declare class DwMenuItemDirective implements OnInit {
    private renderer;
    cd: ChangeDetectorRef;
    private dwMenuDirective;
    dwSubMenuComponent: DwSubMenuComponent;
    private hostElement;
    private _disabled;
    private _selected;
    level: number;
    padding: any;
    isInDropDown: boolean;
    dwDisabled: boolean;
    dwSelected: boolean;
    /** clear all item selected status except this */
    onClickItem(e: MouseEvent): void;
    /** define host class */
    readonly isInDropDownClass: boolean;
    readonly isNotInDropDownClass: boolean;
    readonly setDropDownDisableClass: boolean;
    readonly setMenuDisableClass: boolean;
    readonly setPaddingLeft: number;
    constructor(renderer: Renderer2, cd: ChangeDetectorRef, dwMenuDirective: DwMenuDirective, dwSubMenuComponent: DwSubMenuComponent, hostElement: ElementRef);
    ngOnInit(): void;
}

/** get some code from https://github.com/angular/material2 */
import { AfterContentChecked, AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
import { DwTabComponent } from './dw-tab.component';
import { DwTabsNavComponent } from './dw-tabs-nav.component';
export interface DwAnimatedInterface {
    inkBar: boolean;
    tabPane: boolean;
}
export declare class DwTabChangeEvent {
    index: number;
    tab: DwTabComponent;
}
export declare type DwTabPosition = 'top' | 'bottom' | 'left' | 'right';
export declare type DwTabPositionMode = 'horizontal' | 'vertical';
export declare type DwTabType = 'line' | 'card';
export declare class DwTabSetComponent implements AfterContentChecked, OnInit, AfterViewInit {
    private renderer;
    private dwUpdateHostClassService;
    private elementRef;
    private document;
    private _tabPosition;
    private _indexToSelect;
    private _selectedIndex;
    private _type;
    private _size;
    private _animated;
    el: HTMLElement;
    prefixCls: string;
    tabPositionMode: DwTabPositionMode;
    inkBarAnimated: boolean;
    tabPaneAnimated: boolean;
    isViewInit: boolean;
    listOfDwTabComponent: DwTabComponent[];
    dwTabBarExtraContent: TemplateRef<void>;
    dwTabsNavComponent: DwTabsNavComponent;
    tabContent: ElementRef;
    dwShowPagination: boolean;
    dwHideAll: boolean;
    dwTabBarGutter: number;
    dwTabBarStyle: {
        [key: string]: string;
    };
    dwOnNextClick: EventEmitter<void>;
    dwOnPrevClick: EventEmitter<void>;
    dwAnimated: DwAnimatedInterface | boolean;
    dwSelectedIndex: number | null;
    readonly dwSelectedIndexChange: Observable<number>;
    dwSelectChange: EventEmitter<DwTabChangeEvent>;
    dwSize: string;
    dwTabPosition: DwTabPosition;
    dwType: DwTabType;
    setPosition(value: DwTabPosition): void;
    setClassMap(): void;
    clickLabel(index: number, disabled: boolean): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    createChangeEvent(index: number): DwTabChangeEvent;
    addTab(value: DwTabComponent): void;
    removeTab(value: DwTabComponent): void;
    onScroll($event: Event): void;
    constructor(renderer: Renderer2, dwUpdateHostClassService: DwUpdateHostClassService, elementRef: ElementRef, document: any);
    ngAfterViewInit(): void;
}

import { AfterViewInit, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { DwDropDownComponent } from './dw-dropdown.component';
export declare class DwDropDownButtonComponent extends DwDropDownComponent implements OnInit, OnDestroy, AfterViewInit {
    dwSize: string;
    dwType: string;
    content: any;
    dwClick: EventEmitter<MouseEvent>;
    dwOrigin: any;
    onVisibleChange: (visible: boolean) => void;
    /** rewrite afterViewInit hook */
    ngAfterViewInit(): void;
}

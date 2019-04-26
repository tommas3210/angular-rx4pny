import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
export declare class DwDividerComponent implements OnChanges, OnInit {
    private el;
    private cd;
    private updateHostClassService;
    isText: boolean;
    textStr: string;
    textTpl: TemplateRef<void>;
    dwText: string | TemplateRef<void>;
    dwType: 'horizontal' | 'vertical';
    dwOrientation: 'left' | 'right' | '';
    private _dashed;
    dwDashed: boolean;
    private setClass;
    constructor(el: ElementRef, cd: ChangeDetectorRef, updateHostClassService: DwUpdateHostClassService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}

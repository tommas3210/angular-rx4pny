import { ElementRef, TemplateRef } from '@angular/core';
import { DwUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type StepNgClassType = string | string[] | Set<string> | {
    [klass: string]: any;
};
export declare class DwStepComponent {
    private elementRef;
    private dwUpdateHostClassService;
    private _status;
    private _currentIndex;
    private _description;
    private _icon;
    private _title;
    private el;
    isCustomStatus: boolean;
    isDescriptionString: boolean;
    isTitleString: boolean;
    isIconString: boolean;
    last: boolean;
    showProcessDot: boolean;
    direction: string;
    outStatus: string;
    index: number;
    processDotTemplate: TemplateRef<void>;
    customProcessTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    dwTitle: string | TemplateRef<void>;
    dwIcon: StepNgClassType | TemplateRef<void>;
    dwStatus: string;
    dwDescription: string | TemplateRef<void>;
    currentIndex: number;
    updateClassMap(): void;
    constructor(elementRef: ElementRef, dwUpdateHostClassService: DwUpdateHostClassService);
}

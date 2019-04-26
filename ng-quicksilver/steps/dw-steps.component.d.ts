import { AfterContentInit, OnDestroy, OnInit, QueryList, TemplateRef } from '@angular/core';
import { DwStepComponent } from './dw-step.component';
export declare type DwDirectionType = 'horizontal' | 'vertical';
export declare type DwStatusType = 'wait' | 'process' | 'finish' | 'error';
export declare type DwSizeType = 'default' | 'small';
export declare class DwStepsComponent implements OnInit, OnDestroy, AfterContentInit {
    private _status;
    private _current;
    private _size;
    private _direction;
    private _startIndex;
    private unsubscribe$;
    stepsClassMap: object;
    showProcessDot: boolean;
    customProcessDotTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    steps: QueryList<DwStepComponent>;
    dwSize: DwSizeType;
    dwStartIndex: number;
    dwDirection: DwDirectionType;
    dwProgressDot: boolean | TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    dwStatus: DwStatusType;
    dwCurrent: number;
    updateClassMap(): void;
    updateChildrenSteps: () => void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}

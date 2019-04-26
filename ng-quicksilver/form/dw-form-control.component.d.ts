import { AfterContentInit, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DwColComponent } from '../grid/dw-col.component';
export declare class DwFormControlComponent extends DwColComponent implements OnDestroy, OnInit, AfterContentInit {
    private _hasFeedback;
    validateChanges: Subscription;
    validateString: string;
    controlStatus: string;
    controlClassMap: any;
    validateControl: FormControl;
    dwHasFeedback: boolean;
    dwValidateStatus: string | FormControl;
    removeSubscribe(): void;
    updateValidateStatus(status: string): void;
    watchControl(): void;
    setControlClassMap(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}

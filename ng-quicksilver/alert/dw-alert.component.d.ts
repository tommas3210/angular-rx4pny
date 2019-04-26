import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
export declare type NgClassType = string | string[] | Set<string> | {
    [klass: string]: any;
};
export declare class DwAlertComponent implements OnInit {
    private _banner;
    private _closeable;
    private _showIcon;
    private _type;
    private _description;
    private _message;
    private _closeText;
    display: boolean;
    isTypeSet: boolean;
    isShowIconSet: boolean;
    prefixClass: string;
    isDescriptionString: boolean;
    isMessageString: boolean;
    isCloseTextString: boolean;
    outerClassMap: any;
    iconClassMap: any;
    dwOnClose: EventEmitter<boolean>;
    dwIconType: NgClassType;
    dwDescription: string | TemplateRef<void>;
    dwCloseText: string | TemplateRef<void>;
    dwMessage: string | TemplateRef<void>;
    dwType: string;
    dwBanner: boolean;
    dwCloseable: boolean;
    dwShowIcon: boolean;
    closeAlert(): void;
    onFadeAnimationDone(): void;
    updateOuterClassMap(): void;
    updateIconClassMap(): void;
    ngOnInit(): void;
}

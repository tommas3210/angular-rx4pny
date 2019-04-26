import { TemplateRef } from '@angular/core';
import { DwCardTabComponent } from './dw-card-tab.component';
export declare class DwCardComponent {
    private _bordered;
    private _loading;
    private _hoverable;
    private _title;
    private _extra;
    isTitleString: boolean;
    isExtraString: boolean;
    tab: DwCardTabComponent;
    dwBodyStyle: {
        [key: string]: string;
    };
    dwCover: TemplateRef<void>;
    dwActions: Array<TemplateRef<void>>;
    dwType: string;
    dwTitle: string | TemplateRef<void>;
    dwExtra: string | TemplateRef<void>;
    readonly isInner: boolean;
    readonly isTabs: boolean;
    dwBordered: boolean;
    dwLoading: boolean;
    dwHoverable: boolean;
}

import { TemplateRef } from '@angular/core';
export declare class DwAutocompleteOptgroupComponent {
    isLabelString: boolean;
    /** group 的 label，支持 'string' 和 `TemplateRef` */
    dwLabel: string | TemplateRef<void>;
    _label: string | TemplateRef<void>;
    constructor();
}

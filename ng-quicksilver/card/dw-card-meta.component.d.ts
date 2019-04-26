import { TemplateRef } from '@angular/core';
export declare class DwCardMetaComponent {
    isDescriptionString: boolean;
    isTitleString: boolean;
    private _title;
    private _description;
    dwAvatar: TemplateRef<void>;
    dwTitle: string | TemplateRef<void>;
    dwDescription: string | TemplateRef<void>;
}

import { QueryList, TemplateRef } from '@angular/core';
import { DwListItemMetaComponent } from './dw-list-item-meta.component';
export declare class DwListItemComponent {
    dwActions: Array<TemplateRef<void>>;
    metas: QueryList<DwListItemMetaComponent>;
    isCon: boolean;
    conStr: string;
    conTpl: TemplateRef<void>;
    dwContent: string | TemplateRef<void>;
    dwExtra: TemplateRef<void>;
}

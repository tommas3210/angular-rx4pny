import { TemplateRef } from '@angular/core';
import { DwToolTipComponent } from '../tooltip/dw-tooltip.component';
export declare class DwPopoverComponent extends DwToolTipComponent {
    _prefix: string;
    _title: string | TemplateRef<void>;
    _content: string | TemplateRef<void>;
}

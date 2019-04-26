import { OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp } from '../core/types/common-wrap';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date';
import { PanelMode } from './standard-types';
/**
 * The base picker for header panels, current support: Year/Month
 */
export declare class HeaderPickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    dwPlaceHolder: string;
    dwRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    dwDefaultValue: CandyDate;
    dwFormat: string;
    endPanelMode: SupportHeaderPanel;
    panelMode: PanelMode;
    extraFooter: TemplateRef<void> | string;
    private supportPanels;
    constructor(i18n: DwI18nService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onPanelModeChange(mode: PanelMode): void;
    onChooseValue(mode: SupportHeaderPanel, value: CandyDate): void;
    onOpenChange(open: boolean): void;
    private cleanUp;
}
export declare type SupportHeaderPanel = 'year' | 'month';

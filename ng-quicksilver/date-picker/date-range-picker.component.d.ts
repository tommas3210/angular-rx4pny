import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp } from '../core/types/common-wrap';
import { LoggerService } from '../core/util/logger/logger.service';
import { DwI18nService } from '../i18n/dw-i18n.service';
import { CandyDate } from './lib/candy-date';
import { AbstractPickerComponent } from './abstract-picker.component';
import { DisabledTimeFn, PanelMode, PresetRanges } from './standard-types';
export declare class DateRangePickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    private logger;
    showWeek: boolean;
    dwDateRender: FunctionProp<TemplateRef<Date> | string>;
    dwDisabledTime: DisabledTimeFn;
    dwRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    dwShowToday: boolean;
    dwMode: PanelMode | PanelMode[];
    dwRanges: FunctionProp<PresetRanges>;
    dwOnPanelChange: EventEmitter<"time" | "month" | "year" | "decade" | "date" | PanelMode[]>;
    private _showTime;
    dwShowTime: object | boolean;
    dwOnOk: EventEmitter<Date | Date[]>;
    readonly realShowToday: boolean;
    extraFooter: TemplateRef<void> | string;
    constructor(i18n: DwI18nService, logger: LoggerService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onValueChange(value: CandyDate): void;
    onResultOk(): void;
    onOpenChange(open: boolean): void;
}

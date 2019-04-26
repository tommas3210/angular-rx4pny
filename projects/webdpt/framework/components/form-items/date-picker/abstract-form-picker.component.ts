import { EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { AbstractDwFormItemComponent } from '../../form-field/abstract-dw-form-item-component';
import { DatePipe } from '@angular/common';
import { DwDatePickerI18nInterface } from 'ng-quicksilver/i18n/dw-i18n.interface';
import { InputBoolean } from '../../../utils/convert';


export interface DwShowTimeOptions {
  dwFormat?: DatePipe;
  dwHourStep?: number;
  dwMinuteStep?: number;
  dwSecondStep?: number;
  dwDisabledHours?: () => number[];
  dwDisabledMinutes?: (hour: number) => number[];
  dwDisabledSeconds?: (hour: number, minute: number) => number[];
  dwHideDisabledOptions?: boolean;
  dwDefaultOpenValue?: Date;
  dwAddOn?: TemplateRef<void>;
}

export abstract class AbstractDwFormPickComponent extends AbstractDwFormItemComponent {
  @Input() @InputBoolean() dwAllowClear: boolean = true;
  @Input() @InputBoolean() dwAutoFocus: boolean = false;
  @Input() dwClassName: string;
  @Input() @InputBoolean() dwDisabled: boolean = false;
  // @Input() @InputBoolean() dwOpen: boolean;
  @Input() dwDisabledDate: (current: Date) => boolean;
  @Input() dwPlaceHolder: string | string[];
  @Input() dwPopupStyle: object = {};
  @Input() dwDropdownClassName: string;
  @Input() dwSize: string;
  @Input() dwStyle: object = {};
  @Output() dwOnOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() dwLocale: DwDatePickerI18nInterface;

}

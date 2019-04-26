import { Component, forwardRef, Input, Optional, TemplateRef, ViewChild } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DwFormControlComponent } from 'ng-quicksilver';
import { AbstractDwFormItemComponent } from '../../form-field/abstract-dw-form-item-component';
import { TranslateParser } from '@ngx-translate/core';

@Component({
  selector: 'dw-form-input',
  template: `
    <dw-form-item-panel [dwFlex]="dwFlex"
                        [dwRequired]="dwRequired"
                        [dwFor]="dwFor"
                        [dwLabelOffset]="dwLabelOffset"
                        [dwLabelOrder]="dwLabelOrder"
                        [dwLabelPull]="dwLabelPull"
                        [dwLabelPush]="dwLabelPush"
                        [dwLabelSpan]="dwLabelSpan"
                        [dwLabelXs]="dwLabelXs"
                        [dwLabelSm]="dwLabelSm"
                        [dwLabelMd]="dwLabelMd"
                        [dwLabelLg]="dwLabelLg"
                        [dwLabelXl]="dwLabelXl"
                        [dwLabelXXl]="dwLabelXXl"
                        [dwHasFeedback]="dwHasFeedback"
                        [dwInputOffset]="dwInputOffset"
                        [dwInputOrder]="dwInputOrder"
                        [dwInputPull]="dwInputPull"
                        [dwInputPush]="dwInputPush"
                        [dwInputSpan]="dwInputSpan"
                        [dwInputXs]="dwInputXs"
                        [dwInputSm]="dwInputSm"
                        [dwInputMd]="dwInputMd"
                        [dwInputLg]="dwInputLg"
                        [dwInputXl]="dwInputXl"
                        [dwInputXXl]="dwInputXXl"
                        [validationMessages]="validationMessages"
                        [dwValidateStatus]="control"
                        [dwLabel]="dwLabel">
      <input dw-input
             [dwSize]="dwSize"
             (change)="change($event)"
             [(ngModel)]="dwValue"
             [disabled]="isDisabled"
             [attr.placeholder]="dwPlaceHolder">
    </dw-form-item-panel>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DwFormInputComponent),
      multi: true
    }
  ]
})
export class DwFormInputComponent extends AbstractDwFormItemComponent {

  @Input() dwPlaceHolder: string;
  @Input() dwSize: string = 'default';

  constructor(@Optional() protected _fg: ControlContainer,
              @Optional() protected _ts: TranslateParser) {
    super(_fg, _ts);
  }

  afterContentInit(): void {}

  change(event: any): void {
    this.onChange(event.target.value);
  }

  onInit(): void {}

}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <dw-form-item>
        <dw-form-label [dwSm]="8" [dwXs]="24" dwRequired>DatePicker</dw-form-label>
        <dw-form-control [dwSm]="16" [dwXs]="24">
          <dw-date-picker formControlName="datePicker"></dw-date-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSm]="8" [dwXs]="24" dwRequired>DatePicker[ShowTime]</dw-form-label>
        <dw-form-control [dwSm]="16" [dwXs]="24">
          <dw-date-picker dwShowTime formControlName="datePickerTime"></dw-date-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSm]="8" [dwXs]="24" dwRequired>MonthPicker</dw-form-label>
        <dw-form-control [dwSm]="16" [dwXs]="24">
          <dw-month-picker formControlName="monthPicker"></dw-month-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSm]="8" [dwXs]="24" dwRequired>RangePicker</dw-form-label>
        <dw-form-control [dwSm]="16" [dwXs]="24">
          <dw-range-picker formControlName="rangePicker"></dw-range-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSm]="8" [dwXs]="24" dwRequired>RangePicker[showTime]</dw-form-label>
        <dw-form-control [dwSm]="16" [dwXs]="24">
          <dw-range-picker dwShowTime formControlName="rangePickerTime"></dw-range-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSm]="8" [dwXs]="24" dwRequired>TimePicker</dw-form-label>
        <dw-form-control [dwSm]="16" [dwXs]="24">
          <dw-time-picker formControlName="timePicker"></dw-time-picker>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwXs]="{ span: 24, offset: 0 }" [dwSm]="{ span: 16, offset: 8 }">
          <button dw-button dwType="primary">Submit</button>
        </dw-form-control>
      </dw-form-item>
    </form>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    form {
        max-width: 600px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      datePicker     : [ null ],
      datePickerTime : [ null ],
      monthPicker    : [ null ],
      rangePicker    : [ [] ],
      rangePickerTime: [ [] ],
      timePicker     : [ null ]
    });
  }
}

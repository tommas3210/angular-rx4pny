import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <dw-form-item>
        <dw-form-label [dwSpan]="5" dwRequired dwFor="note">Note</dw-form-label>
        <dw-form-control [dwSpan]="12">
          <input id="note" type="text" dw-input formControlName="note">
          <dw-form-explain *ngIf="validateForm.get('note').dirty && validateForm.get('note').errors">Please input your username!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="5" dwFor="gender" dwRequired>Gender</dw-form-label>
        <dw-form-control [dwSpan]="12">
          <dw-select id="gender" formControlName="gender" dwPlaceHolder="Select a option and change input text above" (ngModelChange)="genderChange($event)">
            <dw-option dwValue="male" dwLabel="male"></dw-option>
            <dw-option dwValue="female" dwLabel="female"></dw-option>
          </dw-select>
          <dw-form-explain *ngIf="validateForm.get('gender').dirty && validateForm.get('gender').errors">Please select your gender!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwSpan]="12" [dwOffset]="5">
          <button dw-button dwType="primary">Submit</button>
        </dw-form-control>
      </dw-form-item>
    </form>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`[dw-form] {
      max-width: 600px;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  genderChange(value: string): void {
    this.validateForm.get('note').setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      note  : [ null, [ Validators.required ] ],
      gender: [ null, [ Validators.required ] ]
    });
  }
}

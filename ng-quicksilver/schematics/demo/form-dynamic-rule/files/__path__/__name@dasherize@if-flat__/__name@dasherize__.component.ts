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
        <dw-form-label [dwSpan]="4" dwRequired dwFor="name">Name</dw-form-label>
        <dw-form-control [dwSpan]="8">
          <input type="text" dw-input formControlName="name" placeholder="Please input your name">
          <dw-form-explain *ngIf="validateForm.get('name').dirty && validateForm.get('name').errors">Please input your name</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="4" dwFor="nickname" [dwRequired]="validateForm.get('required')?.value">Nickname</dw-form-label>
        <dw-form-control [dwSpan]="8">
          <input type="text" dw-input formControlName="nickname" placeholder="Please input your nickname">
          <dw-form-explain *ngIf="validateForm.get('nickname').dirty && validateForm.get('nickname').errors">Please input your nickname</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwSpan]="8" [dwOffset]="4">
          <label dw-checkbox formControlName="required" (ngModelChange)="requiredChange($event)">Nickname is required</label>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwSpan]="8" [dwOffset]="4">
          <button dw-button dwType="primary">Check</button>
        </dw-form-control>
      </dw-form-item>
    </form>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  requiredChange(required: boolean): void {
    if (!required) {
      this.validateForm.get('nickname').clearValidators();
      this.validateForm.get('nickname').markAsPristine();
    } else {
      this.validateForm.get('nickname').setValidators(Validators.required);
      this.validateForm.get('nickname').markAsDirty();
    }
    this.validateForm.get('nickname').updateValueAndValidity();
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name    : [ null, [ Validators.required ] ],
      nickname: [ null ],
      required: [ false ]
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form [dwLayout]="validateForm.get('formLayout')?.value" [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <dw-form-item>
        <dw-form-label [dwSpan]="isHorizontal? 4:null">Form Layout</dw-form-label>
        <dw-form-control [dwSpan]="isHorizontal? 14:null">
          <dw-radio-group formControlName="formLayout">
            <label dw-radio-button [dwValue]="'horizontal'">Horizontal</label>
            <label dw-radio-button [dwValue]="'vertical'">Vertical</label>
            <label dw-radio-button [dwValue]="'inline'">Inline</label>
          </dw-radio-group>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="isHorizontal? 4:null">Field A</dw-form-label>
        <dw-form-control [dwSpan]="isHorizontal? 14:null">
          <input dw-input formControlName="fieldA" placeholder="input placeholder">
          <dw-form-explain *ngIf="validateForm.get('fieldA').dirty && validateForm.get('fieldA').errors">Please input your username!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="isHorizontal? 4:null">Field B</dw-form-label>
        <dw-form-control [dwSpan]="isHorizontal? 14:null">
          <input dw-input formControlName="filedB" placeholder="input placeholder">
          <dw-form-explain *ngIf="validateForm.get('filedB').dirty && validateForm.get('filedB').errors">Please input your Password!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwSpan]="isHorizontal? 14:null" [dwOffset]="isHorizontal? 4:null">
          <button dw-button dwType="primary">Submit</button>
        </dw-form-control>
      </dw-form-item>
    </form>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-form]:not(.ant-form-inline):not(.ant-form-vertical) {
        max-width: 600px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout && this.validateForm.controls.formLayout.value === 'horizontal';
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: [ 'horizontal' ],
      fieldA    : [ null, [ Validators.required ] ],
      filedB    : [ null, [ Validators.required ] ]
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form [dwLayout]="'inline'" [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <dw-form-item>
        <dw-form-control>
          <dw-input-group dwPrefixIcon="anticon anticon-user">
            <input formControlName="userName" dw-input placeholder="Username">
          </dw-input-group>
          <dw-form-explain *ngIf="validateForm.get('userName').dirty && validateForm.get('userName').errors">Please input your username!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control>
          <dw-input-group dwPrefixIcon="anticon anticon-lock">
            <input formControlName="password" dw-input type="password" placeholder="Password">
          </dw-input-group>
          <dw-form-explain *ngIf="validateForm.get('password').dirty && validateForm.get('password').errors">Please input your Password!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control>
          <button dw-button dwType="primary" [disabled]="!validateForm.valid">Log in</button>
        </dw-form-control>
      </dw-form-item>
    </form>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}

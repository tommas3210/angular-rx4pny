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
    <form dw-form [formGroup]="validateForm" class="login-form" (ngSubmit)="submitForm()">
      <dw-form-item>
        <dw-form-control>
          <dw-input-group dwPrefixIcon="anticon anticon-user">
            <input type="text" dw-input formControlName="userName" placeholder="Username">
          </dw-input-group>
          <dw-form-explain *ngIf="validateForm.get('userName').dirty && validateForm.get('userName').errors">Please input your username!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control>
          <dw-input-group dwPrefixIcon="anticon anticon-lock">
            <input type="password" dw-input formControlName="password" placeholder="Password">
          </dw-input-group>
          <dw-form-explain *ngIf="validateForm.get('password').dirty && validateForm.get('password').errors">Please input your Password!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control>
          <label dw-checkbox formControlName="remember">
            <span>Remember me</span>
          </label>
          <a class="login-form-forgot" class="login-form-forgot">Forgot password</a>
          <button dw-button class="login-form-button" [dwType]="'primary'">Log in</button>
          Or
          <a href="">register now!</a>
        </dw-form-control>
      </dw-form-item>
    </form>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .login-form {
      max-width: 300px;
    }

    .login-form-forgot {
      float: right;
    }

    .login-form-button {
      width: 100%;
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

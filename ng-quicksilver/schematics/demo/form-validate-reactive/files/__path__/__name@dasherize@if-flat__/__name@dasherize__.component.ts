import { Component } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form [formGroup]="validateForm" (ngSubmit)="submitForm($event,validateForm.value)">
      <dw-form-item>
        <dw-form-label [dwSpan]="7" dwRequired>Username</dw-form-label>
        <dw-form-control [dwSpan]="12" dwHasFeedback>
          <input dw-input formControlName="userName" placeholder="async validate try to write JasonWood">
          <dw-form-explain *ngIf="validateForm.get('userName').dirty && validateForm.get('userName').errors || validateForm.get('userName').pending ">
            <ng-container *ngIf="validateForm.get('userName').hasError('required')">
              Please input your username!
            </ng-container>
            <ng-container *ngIf="validateForm.get('userName').hasError('duplicated')">
              The username is redundant!
            </ng-container>
            <ng-container *ngIf="validateForm.get('userName').pending">
              Validating...
            </ng-container>
          </dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="7" dwRequired>E-mail</dw-form-label>
        <dw-form-control [dwSpan]="12" dwHasFeedback>
          <input dw-input formControlName="email" placeholder="email" type="email">
          <dw-form-explain *ngIf="validateForm.get('email').dirty&&validateForm.get('email').errors">
            <ng-container *ngIf="validateForm.get('email').hasError('email')">
              The input is not valid E-mail!
            </ng-container>
            <ng-container *ngIf="validateForm.get('email').hasError('required')">
              Please input your E-mail!
            </ng-container>
          </dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="7" dwRequired>Password</dw-form-label>
        <div>
          <dw-form-control [dwSpan]="12" dwHasFeedback>
            <input dw-input type="password" formControlName="password" (ngModelChange)="validateConfirmPassword()">
            <dw-form-explain *ngIf="validateForm.get('password').dirty&&validateForm.get('password').hasError('required')">Please input your password!</dw-form-explain>
          </dw-form-control>
        </div>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="7" dwRequired>Confirm Password</dw-form-label>
        <dw-form-control [dwSpan]="12" dwHasFeedback>
          <input dw-input type="password" formControlName="confirm" placeholder="confirm your password">
          <dw-form-explain *ngIf="validateForm.get('confirm').dirty&&validateForm.get('confirm').errors">
            <ng-container *ngIf="validateForm.get('confirm').hasError('required')">
              Please confirm your password!
            </ng-container>
            <ng-container *ngIf="validateForm.get('confirm').hasError('confirm')">
              Password is inconsistent!
            </ng-container>
          </dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-label [dwSpan]="7" dwRequired>Comment</dw-form-label>
        <dw-form-control [dwSpan]="12" >
          <textarea formControlName="comment" dw-input rows="2" placeholder="write any thing"></textarea>
          <dw-form-explain *ngIf="validateForm.get('comment').dirty&&validateForm.get('comment').hasError('required')">Please write something here!</dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwOffset]="7" [dwSpan]="12">
          <button dw-button dwType="primary" [disabled]="!validateForm.valid">Submit</button>
          <button dw-button (click)="resetForm($event)">Reset</button>
        </dw-form-control>
      </dw-form-item>
    </form>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,

  <% if(inlineStyle) { %>styles: [`
      [dw-form] {
        max-width: 600px;
      }
      button {
        margin-left: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
    console.log(value);
  };

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      if (control.value === 'JasonWood') {
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });

  confirmValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  };

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [ '', [ Validators.required ], [ this.userNameAsyncValidator ] ],
      email   : [ '', [ Validators.email ] ],
      password: [ '', [ Validators.required ] ],
      confirm : [ '', [ this.confirmValidator ] ],
      comment : [ '', [ Validators.required ] ]
    });
  }
}

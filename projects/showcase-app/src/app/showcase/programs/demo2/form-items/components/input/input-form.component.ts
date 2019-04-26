import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dw-input-form',
  template: `
    <form dw-form [formGroup]="form">
      <dw-form-input formControlName="username"
                     [dwValue]="username" dwLabel="{{'required' | translate}}"
                     dwLabelSpan="6" dwInputSpan="18" [dwRequired]="true"></dw-form-input>
    </form>
    Form value: {{form.value | json}}
  `
})
export class InputFormComponent implements OnInit {

  username = '';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        'username': [this.username, [Validators.required, Validators.minLength(6), Validators.maxLength(7)]]
      }
    );
  }

  ngOnInit(): void {
  }
}

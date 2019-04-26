import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form dw-form [formGroup]="validateForm" (ngSubmit)="submitForm()">
      <dw-form-item *ngFor="let control of controlArray;let i = index">
        <dw-form-label [dwXs]="24" [dwSm]="4" *ngIf="i==0" [dwFor]="control.controlInstance">Passengers</dw-form-label>
        <dw-form-control [dwXs]="24" [dwSm]="20" [dwOffset]="i==0?0:4">
          <input dw-input style="width: 60%; margin-right:8px;" placeholder="placeholder" [attr.id]="control.id" [formControlName]="control.controlInstance">
          <i class="anticon anticon-minus-circle-o dynamic-delete-button" (click)="removeField(control,$event)"></i>
          <dw-form-explain *ngIf="getFormControl(control.controlInstance)?.dirty&&getFormControl(control.controlInstance)?.hasError('required')">
            Please input passenger's name or delete this field.
          </dw-form-explain>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwXs]="{span:24,offset:0}" [dwSm]="{span:20,offset:4}">
          <button dw-button dwType="dashed" style="width:60%" (click)="addField($event)"><i class="anticon anticon-plus"></i> Add field</button>
        </dw-form-control>
      </dw-form-item>
      <dw-form-item>
        <dw-form-control [dwXs]="{span:24,offset:0}" [dwSm]="{span:20,offset:4}">
          <button dw-button dwType="primary">Submit</button>
        </dw-form-control>
      </dw-form-item>
    </form>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,

  <% if(inlineStyle) { %>styles: [`
      .dynamic-delete-button {
        cursor: pointer;
        position: relative;
        top: 4px;
        font-size: 24px;
        color: #999;
        transition: all .3s;
      }

      .dynamic-delete-button:hover {
        color: #777;
      }

      [dw-form] {
        max-width: 600px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  validateForm: FormGroup;
  controlArray: Array<{ id: number, controlInstance: string }> = [];

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = (this.controlArray.length > 0) ? this.controlArray[ this.controlArray.length - 1 ].id + 1 : 0;

    const control = {
      id,
      controlInstance: `passenger${id}`
    };
    const index = this.controlArray.push(control);
    console.log(this.controlArray[ this.controlArray.length - 1 ]);
    this.validateForm.addControl(this.controlArray[ index - 1 ].controlInstance, new FormControl(null, Validators.required));
  }

  removeField(i: { id: number, controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
      console.log(this.controlArray);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  getFormControl(name: string): AbstractControl {
    return this.validateForm.controls[ name ];
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    console.log(this.validateForm.value);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.addField();
  }
}

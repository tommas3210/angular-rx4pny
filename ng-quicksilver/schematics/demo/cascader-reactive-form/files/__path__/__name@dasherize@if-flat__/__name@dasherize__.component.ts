// tslint:disable:no-any
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const options = [ {
  value   : 'zhejiang',
  label   : 'Zhejiang',
  children: [ {
    value   : 'hangzhou',
    label   : 'Hangzhou',
    children: [ {
      value : 'xihu',
      label : 'West Lake',
      isLeaf: true
    } ]
  }, {
    value : 'ningbo',
    label : 'Ningbo',
    isLeaf: true
  } ]
}, {
  value   : 'jiangsu',
  label   : 'Jiangsu',
  children: [ {
    value   : 'nanjing',
    label   : 'Nanjing',
    children: [ {
      value : 'zhonghuamen',
      label : 'Zhong Hua Men',
      isLeaf: true
    } ]
  } ]
} ];

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <form [formGroup]="form" novalidate>
      <dw-cascader
        [dwOptions]="dwOptions"
        (dwChange)="onChanges($event)"
        [formControlName]="'name'">
      </dw-cascader>
    </form>
    <br>
    <button dw-button (click)="reset()">Reset</button>
    <button dw-button (click)="submit()">Submit</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .ant-cascader-picker {
        width: 300px;
      }

      button {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  /** init data */
  dwOptions = options;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: [ null, Validators.required ]
    });
  }

  public reset(): void {
    this.form.reset();
    console.log(this.form.value);
  }

  public submit(): void {
    console.log(this.form.value);
  }

  public onChanges(values: any): void {
    console.log(values);
  }
}

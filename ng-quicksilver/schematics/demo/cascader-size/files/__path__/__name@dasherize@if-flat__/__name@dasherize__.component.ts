// tslint:disable:no-any
import { Component } from '@angular/core';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
      isLeaf: true
    }]
  }, {
    value: 'ningbo',
    label: 'Ningbo',
    isLeaf: true
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
      isLeaf: true
    }]
  }]
}];

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-cascader
      [dwSize]="'large'"
      [dwOptions]="dwOptions"
      [(ngModel)]="value1"
      (ngModelChange)="onChanges($event)">
    </dw-cascader>
    <dw-cascader
      [dwOptions]="dwOptions"
      [(ngModel)]="value2"
      (ngModelChange)="onChanges($event)">
    </dw-cascader>
    <dw-cascader
      [dwSize]="'small'"
      [dwOptions]="dwOptions"
      [(ngModel)]="value3"
      (ngModelChange)="onChanges($event)">
    </dw-cascader>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-cascader-picker {
      width: 300px;
      margin-bottom: 8px;
    }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  /** init data */
  dwOptions = options;

  /** ngModel value */
  public value1: any[] = null;
  public value2: any[] = null;
  public value3: any[] = null;

  public onChanges(values: any): void {
    console.log(values);
  }
}

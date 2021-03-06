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
  disabled: true,
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
      [dwOptions]="dwOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)">
    </dw-cascader>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-cascader-picker {
      width: 300px;
    }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  /** init data */
  dwOptions = options;

  /** ngModel value */
  public values: any[] = null;

  public onChanges(values: any): void {
    console.log(values, this.values);
  }
}

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
    <dw-modal [(dwVisible)]="isVisible" dwTitle="Please select" (dwOnCancel)="handleCancel($event)" (dwOnOk)="handleOk($event)">
      <dw-cascader
        [dwOptions]="dwOptions"
        [(ngModel)]="values"
        (ngModelChange)="onChanges($event)">
      </dw-cascader>
    </dw-modal>

    <button dw-button (click)="open()">Open Dialog</button>
    `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-cascader-picker {
      width: 300px;
    }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  /** init data */
  public dwOptions = options;

  /** ngModel value */
  public values: any[] = null;

  public isVisible = false;

  public onChanges(values: any): void {
    console.log(values, this.values);
  }

  public open(): void {
    this.isVisible = true;
  }

  handleOk($event: MouseEvent): void {
    console.log('Button ok clicked!', this.values);
    this.isVisible = false;
  }

  handleCancel($event: MouseEvent): void {
    console.log('Button cancel clicked!', $event);
    this.isVisible = false;
  }

}

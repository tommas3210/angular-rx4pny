// tslint:disable:no-any
import { Component, OnInit } from '@angular/core';

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

const otherOptions = [{
  value: 'fujian',
  label: 'Fujian',
  children: [{
    value: 'xiamen',
    label: 'Xiamen',
    children: [{
      value: 'Kulangsu',
      label: 'Kulangsu',
      isLeaf: true
    }]
  }]
}, {
  value: 'guangxi',
  label: 'Guangxi',
  children: [{
    value: 'guilin',
    label: 'Guilin',
    children: [{
      value: 'Lijiang',
      label: 'Li Jiang River',
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
    </dw-cascader>
    &nbsp;
    <a href="javascript:;" (click)="changeDwOptions()" class="change-options">
      Change Options
    </a>
    `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-cascader-picker {
      width: 300px;
    }
    .change-options {
      display: inline-block;
      font-size: 12px;
      margin-top: 8px;
    }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  /** init data */
  public dwOptions = null;

  /** ngModel value */
  public values: any[] = null;

  ngOnInit(): void {
    // let's set dwOptions in a asynchronous way
    setTimeout(() => {
        this.dwOptions = options;
    }, 100);
  }

  public changeDwOptions(): void {
    if (this.dwOptions === options) {
      this.dwOptions = otherOptions;
    } else {
      this.dwOptions = options;
    }
  }

  public onChanges(values: any): void {
    console.log(values, this.values);
  }
}

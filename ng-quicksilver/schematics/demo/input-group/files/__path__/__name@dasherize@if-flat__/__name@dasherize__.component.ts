import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-input-group [dwSize]="'large'">
      <div dw-col dwSpan="4">
        <input type="text" dw-input [ngModel]="'0571'">
      </div>
      <div dw-col dwSpan="8">
        <input type="text" dw-input [ngModel]="'26888888'">
      </div>
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <input type="text" dw-input [ngModel]="'0571'" style="width: 20%;">
      <input type="text" dw-input [ngModel]="'26888888'" style="width:30%;">
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <dw-select [ngModel]="'Zhejiang'">
        <dw-option [dwLabel]="'Zhejiang'" [dwValue]="'Zhejiang'"></dw-option>
        <dw-option [dwLabel]="'Jiangsu'" [dwValue]="'Jiangsu'"></dw-option>
      </dw-select>
      <input type="text" dw-input [ngModel]="'Xihu District, Hangzhou'" style="width:50%;">
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <dw-select [ngModel]="'Option1'">
        <dw-option [dwLabel]="'Option1'" [dwValue]="'Option1'"></dw-option>
        <dw-option [dwLabel]="'Option2'" [dwValue]="'Option2'"></dw-option>
      </dw-select>
      <input type="text" dw-input [ngModel]="'input content'" style="width:50%;">
      <dw-input-number></dw-input-number>
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <input type="text" dw-input [ngModel]="'input content'" style="width:50%;">
      <dw-date-picker></dw-date-picker>
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <dw-select [ngModel]="'Option1-1'">
        <dw-option [dwLabel]="'Option1-1'" [dwValue]="'Option1-1'"></dw-option>
        <dw-option [dwLabel]="'Option1-2'" [dwValue]="'Option1-2'"></dw-option>
      </dw-select>
      <dw-select [ngModel]="'Option2-1'">
        <dw-option [dwLabel]="'Option2-1'" [dwValue]="'Option2-1'"></dw-option>
        <dw-option [dwLabel]="'Option2-2'" [dwValue]="'Option2-2'"></dw-option>
      </dw-select>
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <dw-select [ngModel]="'Between'">
        <dw-option [dwLabel]="'Between'" [dwValue]="'Between'"></dw-option>
        <dw-option [dwLabel]="'Except'" [dwValue]="'Except'"></dw-option>
      </dw-select>
      <input type="text" dw-input placeholder="Minimum" style="width:100px; text-align: center;">
      <input type="text" disabled dw-input placeholder="~" style="width: 30px; border-left: 0px; pointer-events: none; background-color: rgb(255, 255, 255);">
      <input type="text" dw-input placeholder="Maximum" style="width: 100px; text-align: center; border-left: 0px;">
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <dw-select [ngModel]="'Sign Up'">
        <dw-option [dwLabel]="'Sign Up'" [dwValue]="'Sign Up'"></dw-option>
        <dw-option [dwLabel]="'Sign In'" [dwValue]="'Sign In'"></dw-option>
      </dw-select>
      <input type="email" dw-input placeholder="Email" style="width: 200px;">
    </dw-input-group>
    <br>
    <dw-input-group dwCompact>
      <dw-select [ngModel]="'Home'" style="width: 30%;">
        <dw-option [dwLabel]="'Home'" [dwValue]="'Home'"></dw-option>
        <dw-option [dwLabel]="'Company'" [dwValue]="'Company'"></dw-option>
      </dw-select>
      <dw-cascader [dwOptions]="options" style="width: 70%;"></dw-cascader>
    </dw-input-group>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  options = [{
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
}

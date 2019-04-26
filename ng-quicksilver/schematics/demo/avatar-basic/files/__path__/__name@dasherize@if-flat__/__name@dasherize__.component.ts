import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <div>
    <dw-avatar dwSize="large" dwIcon="anticon anticon-user"></dw-avatar>
    <dw-avatar dwIcon="anticon anticon-user"></dw-avatar>
    <dw-avatar dwSize="small" dwIcon="anticon anticon-user"></dw-avatar>
  </div>
  <div>
    <dw-avatar [dwShape]="'square'" [dwSize]="'large'" [dwIcon]="'anticon anticon-user'"></dw-avatar>
    <dw-avatar [dwShape]="'square'" [dwIcon]="'anticon anticon-user'"></dw-avatar>
    <dw-avatar [dwShape]="'square'" [dwSize]="'small'" [dwIcon]="'anticon anticon-user'"></dw-avatar>
  </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host ::ng-deep .ant-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component { }

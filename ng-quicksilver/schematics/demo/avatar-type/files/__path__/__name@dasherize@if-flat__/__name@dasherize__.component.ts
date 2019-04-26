import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-avatar dwIcon="anticon anticon-user"></dw-avatar>
  <dw-avatar dwText="U"></dw-avatar>
  <dw-avatar dwText="USER"></dw-avatar>
  <dw-avatar dwIcon="anticon anticon-user" dwSrc="//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></dw-avatar>
  <dw-avatar dwText="U" style="color:#f56a00; background-color:#fde3cf;"></dw-avatar>
  <dw-avatar dwIcon="anticon anticon-user" style="background-color:#87d068;"></dw-avatar>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host ::ng-deep .ant-avatar {
      margin-top: 16px;
      margin-right: 16px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component { }

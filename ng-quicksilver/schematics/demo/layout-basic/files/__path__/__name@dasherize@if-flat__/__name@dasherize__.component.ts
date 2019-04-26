import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-layout>
      <dw-header>Header</dw-header>
      <dw-content>Content</dw-content>
      <dw-footer>Footer</dw-footer>
    </dw-layout>

    <dw-layout>
      <dw-header>Header</dw-header>
      <dw-layout>
        <dw-sider>Sider</dw-sider>
        <dw-content>Content</dw-content>
      </dw-layout>
      <dw-footer>Footer</dw-footer>
    </dw-layout>

    <dw-layout>
      <dw-header>Header</dw-header>
      <dw-layout>
        <dw-content>Content</dw-content>
        <dw-sider>Sider</dw-sider>
      </dw-layout>
      <dw-footer>Footer</dw-footer>
    </dw-layout>

    <dw-layout>
      <dw-sider>Sider</dw-sider>
      <dw-layout>
        <dw-header>Header</dw-header>
        <dw-content>Content</dw-content>
        <dw-footer>Footer</dw-footer>
      </dw-layout>
    </dw-layout>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    :host {
      text-align: center;
    }

    :host ::ng-deep .ant-layout-header,
    :host ::ng-deep .ant-layout-footer {
      background: #7dbcea;
      color: #fff;
    }

    :host ::ng-deep .ant-layout-footer {
      line-height: 1.5;
    }

    :host ::ng-deep .ant-layout-sider {
      background: #3ba0e9;
      color: #fff;
      line-height: 120px;
    }

    :host ::ng-deep .ant-layout-content {
      background: rgba(16, 142, 233, 1);
      color: #fff;
      min-height: 120px;
      line-height: 120px;
    }

    :host > ::ng-deep .ant-layout {
      margin-bottom: 48px;
    }

    :host ::ng-deep .ant-layout:last-child {
      margin: 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

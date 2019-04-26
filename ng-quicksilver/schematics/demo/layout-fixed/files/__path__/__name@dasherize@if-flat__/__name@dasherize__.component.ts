import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-layout class="layout">
      <dw-header style="position:fixed; width:100%">
        <div class="logo"></div>
        <ul dw-menu [dwTheme]="'dark'" [dwMode]="'horizontal'" style="line-height: 64px;">
          <li dw-menu-item>nav 1</li>
          <li dw-menu-item>nav 2</li>
          <li dw-menu-item>nav 3</li>
        </ul>
      </dw-header>
      <dw-content style="padding:0 50px;margin-top:64px;">
        <dw-breadcrumb style="margin:16px 0;">
          <dw-breadcrumb-item>Home</dw-breadcrumb-item>
          <dw-breadcrumb-item>List</dw-breadcrumb-item>
          <dw-breadcrumb-item>App</dw-breadcrumb-item>
        </dw-breadcrumb>
        <div style="background:#fff; padding: 24px; min-height: 380px;">Content</div>
      </dw-content>
      <dw-footer style="text-align: center;">Ant Design ©2017 Implement By Angular</dw-footer>
    </dw-layout>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255,255,255,.2);
      margin: 16px 24px 16px 0;
      float: left;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

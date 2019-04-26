import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-layout>
      <dw-sider style="overflow: auto; height: 100vh; position: fixed; left: 0">
        <div class="logo">
        </div>
        <ul dw-menu [dwTheme]="'dark'" [dwMode]="'inline'">
          <li dw-menu-item><span><i class="anticon anticon-file"></i><span class="nav-text">nav 1</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-video-camera"></i><span class="nav-text">nav 2</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-upload"></i><span class="nav-text">nav 3</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-bar-chart"></i><span class="nav-text">nav 4</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-cloud-o"></i><span class="nav-text">nav 5</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-appstore-o"></i><span class="nav-text">nav 6</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-team"></i><span class="nav-text">nav 7</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-shop"></i><span class="nav-text">nav 8</span></span></li>
        </ul>
      </dw-sider>
      <dw-layout style="margin-left: 200">
        <dw-header style="background: #fff; padding:0;"></dw-header>
        <dw-content style="margin:24px 16px 0;overflow: initial">
        <div style="padding: 24px; background: #fff; text-align: center">
          ...
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          content
        </div>
        </dw-content>
        <dw-footer style="text-align: center;">Ant Design ©2017 Implement By Angular</dw-footer>
      </dw-layout>
    </dw-layout>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 16px;
      }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

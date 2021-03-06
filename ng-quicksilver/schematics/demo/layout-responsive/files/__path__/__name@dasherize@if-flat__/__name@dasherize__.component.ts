import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-layout>
      <dw-sider dwCollapsible [(dwCollapsed)]="isCollapsed" [dwCollapsedWidth]="0" [dwBreakpoint]="'lg'">
        <div class="logo">
        </div>
        <ul dw-menu [dwTheme]="'dark'" [dwMode]="isCollapsed?'vertical':'inline'">
          <li dw-menu-item><span><i class="anticon anticon-user"></i><span class="nav-text">nav 1</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-video-camera"></i><span class="nav-text">nav 2</span></span>
          </li>
          <li dw-menu-item><span><i class="anticon anticon-upload"></i><span class="nav-text">nav 3</span></span></li>
          <li dw-menu-item><span><i class="anticon anticon-user"></i><span class="nav-text">nav 4</span></span></li>
        </ul>
      </dw-sider>
      <dw-layout>
        <dw-header style="background: #fff; padding:0;"></dw-header>
        <dw-content style="margin:24px 16px 0;">
          <div style="padding:24px; background: #fff; min-height: 360px;">
            Content
          </div>
        </dw-content>
        <dw-footer style="text-align: center;">Ant Design ©2017 Implement By Angular</dw-footer>
      </dw-layout>
    </dw-layout>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      :host ::ng-deep .logo {
        height: 32px;
        background: rgba(255,255,255,.2);
        margin: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  isCollapsed = false;
}

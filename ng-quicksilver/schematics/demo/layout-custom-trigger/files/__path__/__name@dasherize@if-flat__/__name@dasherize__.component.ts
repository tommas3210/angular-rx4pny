import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-layout>
      <dw-sider dwCollapsible [(dwCollapsed)]="isCollapsed" [dwTrigger]="triggerTemplate">
        <div class="logo">
        </div>
        <ul dw-menu [dwTheme]="'dark'" [dwMode]="'inline'" [dwInlineCollapsed]="isCollapsed">
          <li dw-submenu>
            <span title><i class="anticon anticon-user"></i><span class="nav-text">User</span></span>
            <ul>
              <li dw-menu-item>Tom</li>
              <li dw-menu-item>Bill</li>
              <li dw-menu-item>Alex</li>
            </ul>
          </li>
          <li dw-submenu>
            <span title><i class="anticon anticon-team"></i><span class="nav-text">Team</span></span>
            <ul>
              <li dw-menu-item>Team 1</li>
              <li dw-menu-item>Team 2</li>
            </ul>
          </li>
          <li dw-menu-item><span><i class="anticon anticon-file"></i><span class="nav-text">File</span></span></li>
        </ul>
      </dw-sider>
      <dw-layout>
        <dw-header style="background: #fff; padding:0;">
          <i class="anticon trigger" [class.anticon-menu-fold]="!isCollapsed" [class.anticon-menu-unfold]="isCollapsed" (click)="isCollapsed=!isCollapsed"></i>
        </dw-header>
        <dw-content style="margin:0 16px;">
          <dw-breadcrumb style="margin:16px 0;">
            <dw-breadcrumb-item>User</dw-breadcrumb-item>
            <dw-breadcrumb-item>Bill</dw-breadcrumb-item>
          </dw-breadcrumb>
          <div style="padding:24px; background: #fff; min-height: 360px;">
            Bill is a cat.
          </div>
        </dw-content>
        <dw-footer style="text-align: center;">Ant Design ©2017 Implement By Angular</dw-footer>
      </dw-layout>
    </dw-layout>
    <ng-template #trigger>
      <i class="anticon anticon-up"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      :host ::ng-deep .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
      }

      :host ::ng-deep .trigger:hover {
        color: #1890ff;
      }

      :host ::ng-deep .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-switch [(ngModel)]="mode">
    </dw-switch>
    Change Mode
    <dw-divider dwType="vertical"></dw-divider>
    <dw-switch [(ngModel)]="dark">
    </dw-switch>
    Change Theme
    <br>
    <br>
    <ul dw-menu [dwMode]="mode?'vertical':'inline'" [dwTheme]="dark?'dark':'light'" style="width: 240px;">
      <li dw-submenu>
        <span title><i class="anticon anticon-mail"></i> Navigation One</span>
        <ul>
          <li dw-menu-group>
            <span title>Item 1</span>
            <ul>
              <li dw-menu-item>Option 1</li>
              <li dw-menu-item>Option 2</li>
            </ul>
          </li>
          <li dw-menu-group>
            <span title>Item 2</span>
            <ul>
              <li dw-menu-item>Option 3</li>
              <li dw-menu-item>Option 4</li>
            </ul>
          </li>
        </ul>
      </li>
      <li dw-submenu>
        <span title><i class="anticon anticon-appstore"></i> Navigation Two</span>
        <ul>
          <li dw-menu-item>Option 5</li>
          <li dw-menu-item>Option 6</li>
          <li dw-submenu>
            <span title>Submenu</span>
            <ul>
              <li dw-menu-item>Option 7</li>
              <li dw-menu-item>Option 8</li>
            </ul>
          </li>
        </ul>
      </li>
      <li dw-submenu>
        <span title><i class="anticon anticon-setting"></i> Navigation Three</span>
        <ul>
          <li dw-menu-item>Option 9</li>
          <li dw-menu-item>Option 10</li>
          <li dw-menu-item>Option 11</li>
        </ul>
      </li>
    </ul>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  mode = false;
  dark = false;
}

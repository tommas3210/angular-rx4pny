import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-dropdown [dwTrigger]="'click'">
      <a dw-dropdown>
        Click me <i class="anticon anticon-down"></i>
      </a>
      <ul dw-menu>
        <li dw-menu-item>1st menu item</li>
        <li dw-menu-item>2nd menu item</li>
        <li dw-menu-divider></li>
        <li dw-menu-item dwDisabled>disabled menu item</li>
        <li dw-submenu>
          <span title>sub menu</span>
          <ul>
            <li dw-menu-item>3rd menu item</li>
            <li dw-menu-item>4th menu item</li>
          </ul>
        </li>
        <li dw-submenu dwDisabled>
          <span title>disabled sub menu</span>
          <ul>
            <li dw-menu-item>3rd menu item</li>
            <li dw-menu-item>4th menu item</li>
          </ul>
        </li>
      </ul>
    </dw-dropdown>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

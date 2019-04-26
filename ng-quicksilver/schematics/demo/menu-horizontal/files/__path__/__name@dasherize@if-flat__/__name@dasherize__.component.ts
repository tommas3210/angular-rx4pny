import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ul dw-menu [dwMode]="'horizontal'">
      <li dw-menu-item><i class="anticon anticon-mail"></i> Navigation One</li>
      <li dw-menu-item dwDisabled><i class="anticon anticon-appstore"></i> Navigation Two</li>
      <li dw-submenu>
        <span title><i class="anticon anticon-setting"></i> Navigation Three - Submenu</span>
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
              <li dw-submenu>
                <span title>Sub Menu</span>
                <ul>
                  <li dw-menu-item dwDisabled>Option 5</li>
                  <li dw-menu-item>Option 6</li>
                </ul>
              </li>
              <li dw-submenu dwDisabled>
                <span title>Disabled Sub Menu</span>
                <ul>
                  <li dw-menu-item>Option 5</li>
                  <li dw-menu-item>Option 6</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li dw-menu-item>
        <a href="https://ng.ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
      </li>
    </ul>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

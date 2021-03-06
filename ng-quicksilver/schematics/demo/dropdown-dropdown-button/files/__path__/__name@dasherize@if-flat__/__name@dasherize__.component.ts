import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="height: 28px;">
      <dw-dropdown-button (dwClick)="log()">
        DropDown
        <ul dw-menu>
          <li dw-menu-item>1st menu item</li>
          <li dw-menu-item>2nd menu item</li>
          <li dw-submenu>
            <span title>sub menu</span>
            <ul>
              <li dw-menu-item>3rd menu item</li>
              <li dw-menu-item>4th menu item</li>
            </ul>
          </li>
        </ul>
      </dw-dropdown-button>
      <dw-dropdown-button dwDisabled>
        DropDown
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item</a>
          </li>
        </ul>
      </dw-dropdown-button>
      <dw-dropdown>
        <button dw-button dw-dropdown><span>Button</span> <i class="anticon anticon-down"></i></button>
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item</a>
          </li>
        </ul>
      </dw-dropdown>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-dropdown-button {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  log(): void {
    console.log('click dropdown button');
  }
}

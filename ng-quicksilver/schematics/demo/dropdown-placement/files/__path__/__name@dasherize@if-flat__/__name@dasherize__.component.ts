import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <dw-dropdown [dwPlacement]="'bottomLeft'">
        <button dw-button dw-dropdown>bottomLeft</button>
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item length</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item length</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item length</a>
          </li>
        </ul>
      </dw-dropdown>
      <dw-dropdown [dwPlacement]="'bottomCenter'">
        <button dw-button dw-dropdown>bottomCenter</button>
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item length</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item length</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item length</a>
          </li>
        </ul>
      </dw-dropdown>
      <dw-dropdown [dwPlacement]="'bottomRight'">
        <button dw-button dw-dropdown>bottomRight</button>
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item length</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item length</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item length</a>
          </li>
        </ul>
      </dw-dropdown>
      <dw-dropdown [dwPlacement]="'topLeft'">
        <button dw-button dw-dropdown>topLeft</button>
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item length</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item length</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item length</a>
          </li>
        </ul>
      </dw-dropdown>
      <dw-dropdown [dwPlacement]="'topCenter'">
        <button dw-button dw-dropdown>topCenter</button>
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item length</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item length</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item length</a>
          </li>
        </ul>
      </dw-dropdown>
      <dw-dropdown [dwPlacement]="'topRight'">
        <button dw-button dw-dropdown>topRight</button>
        <ul dw-menu>
          <li dw-menu-item>
            <a>1st menu item length</a>
          </li>
          <li dw-menu-item>
            <a>2nd menu item length</a>
          </li>
          <li dw-menu-item>
            <a>3rd menu item length</a>
          </li>
        </ul>
      </dw-dropdown>
    </div>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      :host ::ng-deep .ant-btn {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

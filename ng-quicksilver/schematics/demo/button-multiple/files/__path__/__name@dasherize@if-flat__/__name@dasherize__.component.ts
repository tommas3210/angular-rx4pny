import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button dw-button dwType="primary">primary</button>
    <button dw-button dwType="default">secondary</button>
    <dw-dropdown>
      <button dw-button dw-dropdown>Actions<i class="anticon anticon-down"></i></button>
      <ul dw-menu>
        <li dw-menu-item>
          <a>1st item</a>
        </li>
        <li dw-menu-item>
          <a>2nd item</a>
        </li>
        <li dw-menu-item>
          <a>3rd item</a>
        </li>
      </ul>
    </dw-dropdown>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-dropdown>
      <a dw-dropdown>
        Hover me <i class="anticon anticon-down"></i>
      </a>
      <ul dw-menu dwSelectable>
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
    </dw-dropdown>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

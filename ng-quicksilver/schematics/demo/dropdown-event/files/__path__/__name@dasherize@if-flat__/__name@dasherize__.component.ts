import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-dropdown>
      <a dw-dropdown>
        Hover me, Click menu item <i class="anticon anticon-down"></i>
      </a>
      <ul dw-menu>
        <li dw-menu-item (click)="log('1st menu item')">1st menu item</li>
        <li dw-menu-item (click)="log('2nd menu item')">2nd menu item</li>
        <li dw-menu-item (click)="log('3rd menu item')">3rd menu item</li>
      </ul>
    </dw-dropdown>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  log(data: string): void {
    console.log(data);
  }
}

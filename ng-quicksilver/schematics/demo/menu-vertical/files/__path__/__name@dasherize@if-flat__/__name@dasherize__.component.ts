import { Component } from '@angular/core';
@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ul dw-menu [dwMode]="'vertical'" style="width: 240px;">
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
      <li dw-submenu (dwOpenChange)="change($event)">
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
  change(value: boolean): void {
    console.log(value);
  }
}

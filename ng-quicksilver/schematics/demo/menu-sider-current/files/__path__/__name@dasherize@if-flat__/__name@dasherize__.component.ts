import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ul dw-menu [dwMode]="'inline'" style="width: 240px;">
      <li dw-submenu [(dwOpen)]="openMap.sub1" (dwOpenChange)="openHandler('sub1')">
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
      <li dw-submenu [(dwOpen)]="openMap.sub2" (dwOpenChange)="openHandler('sub2')">
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
      <li dw-submenu [(dwOpen)]="openMap.sub3" (dwOpenChange)="openHandler('sub3')">
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
  openMap = {
    sub1: true,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[ key ] = false;
      }
    }
  }
}

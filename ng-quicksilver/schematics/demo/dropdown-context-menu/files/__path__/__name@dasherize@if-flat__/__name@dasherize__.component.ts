import { Component, TemplateRef } from '@angular/core';
import { DwDropdownContextComponent, DwDropdownService, DwMenuItemDirective } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="background: rgb(190, 200, 200); padding: 32px;text-align: center" (contextmenu)="contextMenu($event,template)">
      <ng-template #template>
        <ul dw-menu dwInDropDown (dwClick)="close($event)">
          <li dw-menu-item>1st menu item</li>
          <li dw-menu-item>2nd menu item</li>
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
      </ng-template>
      <span style="color:#fff;font-size: 14px;">Context Menu</span>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  private dropdown: DwDropdownContextComponent;

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.dwDropdownService.create($event, template);
  }

  close(e: DwMenuItemDirective): void {
    console.log(e);
    this.dropdown.close();
  }

  constructor(private dwDropdownService: DwDropdownService) {

  }
}

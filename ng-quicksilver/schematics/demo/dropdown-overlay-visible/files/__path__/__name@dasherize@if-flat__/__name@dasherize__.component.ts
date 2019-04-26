import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-dropdown [dwClickHide]="false" [(dwVisible)]="visible">
      <a dw-dropdown>
        Hover me <i class="anticon anticon-down"></i>
      </a>
      <ul dw-menu>
        <li dw-menu-item>Clicking me will not close the menu.</li>
        <li dw-menu-item>Clicking me will not close the menu also.</li>
        <li dw-menu-item (click)="visible = false">Clicking me will close the menu</li>
      </ul>
    </dw-dropdown>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  visible = false;
}

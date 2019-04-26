import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tabset>
      <dw-tab
        *ngFor="let tab of tabs"
        [dwTitle]="tab.name"
        [dwDisabled]="tab.disabled">
        {{ tab.name }}
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [
    {
      name    : 'Tab 1',
      disabled: false
    },
    {
      name    : 'Tab 2',
      disabled: true
    },
    {
      name    : 'Tab 3',
      disabled: false
    }
  ];
}

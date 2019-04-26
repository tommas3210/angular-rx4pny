import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tabset>
      <dw-tab *ngFor="let tab of tabs" [dwTitle]="titleTemplate">
        <ng-template #titleTemplate>
          <i [ngClass]="tab.icon"></i>{{ tab.name }}
        </ng-template>
        {{ tab.name }}
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [
    {
      active: true,
      name  : 'Tab 1',
      icon  : 'anticon anticon-apple'
    },
    {
      active: false,
      name  : 'Tab 2',
      icon  : 'anticon anticon-android'
    }
  ];
}

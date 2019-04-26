import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tabset [dwTabBarExtraContent]="extraTemplate">
      <dw-tab *ngFor="let tab of tabs" [dwTitle]="'Tab' + tab ">
        Content of tab {{ tab }}
      </dw-tab>
    </dw-tabset>
    <ng-template #extraTemplate>
      <button dw-button>Extra Action</button>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [ 1, 2, 3 ];
}

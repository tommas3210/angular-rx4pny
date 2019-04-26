import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tabset [dwTabPosition]="'top'" [dwType]="'card'">
      <dw-tab *ngFor="let tab of tabs" [dwTitle]="'Tab' + tab ">
        Content of Tab Pane {{ tab }}
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
  tabs = [ 1, 2, 3 ];
}

import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tabset>
      <dw-tab dwTitle="Tab 1">
        Content of Tab Pane 1
      </dw-tab>
      <dw-tab dwTitle="Tab 2">
        Content of Tab Pane 2
      </dw-tab>
      <dw-tab dwTitle="Tab 3">
        Content of Tab Pane 3
      </dw-tab>
    </dw-tabset>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

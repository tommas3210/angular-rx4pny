import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-spin dwTip='Loading...'>
      <dw-alert
        dwType="info"
        dwMessage="Alert message title"
        dwDescription="Further details about the context of this alert.">
      </dw-alert>
    </dw-spin>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

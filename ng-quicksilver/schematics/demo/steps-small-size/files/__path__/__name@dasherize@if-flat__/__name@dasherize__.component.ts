import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-steps [dwCurrent]="current" dwSize="small">
      <dw-step dwTitle="Finished"></dw-step>
      <dw-step dwTitle="In Progress"></dw-step>
      <dw-step dwTitle="Waiting"></dw-step>
    </dw-steps>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  current = 1;
}

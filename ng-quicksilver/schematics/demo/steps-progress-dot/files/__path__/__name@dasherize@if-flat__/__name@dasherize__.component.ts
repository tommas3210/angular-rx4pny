import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-steps [dwCurrent]="1" dwProgressDot>
      <dw-step dwTitle="Finished" dwDescription="This is a description."></dw-step>
      <dw-step dwTitle="In Progress" dwDescription="This is a description."></dw-step>
      <dw-step dwTitle="Waiting" dwDescription="This is a description."></dw-step>
    </dw-steps>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

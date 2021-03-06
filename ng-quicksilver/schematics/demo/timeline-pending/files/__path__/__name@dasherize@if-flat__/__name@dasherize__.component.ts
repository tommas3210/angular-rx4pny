import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-timeline [dwPending]="'Recording...'">
      <dw-timeline-item>Create a services site 2015-09-01</dw-timeline-item>
      <dw-timeline-item>Solve initial network problems 2015-09-01</dw-timeline-item>
      <dw-timeline-item>Technical testing 2015-09-01</dw-timeline-item>
      <dw-timeline-item>Network problems being solved 2015-09-01</dw-timeline-item>
    </dw-timeline>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component {
}

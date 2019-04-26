import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-timeline>
      <dw-timeline-item dwColor="green">Create a services site 2015-09-01</dw-timeline-item>
      <dw-timeline-item dwColor="green">Solve initial network problems 2015-09-01</dw-timeline-item>
      <dw-timeline-item dwColor="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </dw-timeline-item>
      <dw-timeline-item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </dw-timeline-item>
    </dw-timeline>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

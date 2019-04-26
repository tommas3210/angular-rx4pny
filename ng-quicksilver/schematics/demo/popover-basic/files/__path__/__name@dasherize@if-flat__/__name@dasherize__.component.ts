import {
  Component
} from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button
      dw-button
      dw-popover
      dwType="primary"
      dwTitle="Title"
      dwContent="Content">
      Hover me
    </button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

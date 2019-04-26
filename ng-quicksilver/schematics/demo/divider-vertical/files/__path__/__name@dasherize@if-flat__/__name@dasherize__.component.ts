import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>Text
      <dw-divider dwType="vertical"></dw-divider>
      <a href="#">Link</a>
      <dw-divider dwType="vertical"></dw-divider>
      <a href="#">Link</a>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})

export class <%= classify(name) %>Component {

}

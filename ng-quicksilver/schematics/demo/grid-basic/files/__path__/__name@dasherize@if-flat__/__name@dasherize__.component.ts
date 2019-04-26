import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div dw-row>
      <div dw-col dwSpan="12">col-12</div>
      <div dw-col dwSpan="12">col-12</div>
    </div>
    <div dw-row>
      <div dw-col dwSpan="8">col-8</div>
      <div dw-col dwSpan="8">col-8</div>
      <div dw-col dwSpan="8">col-8</div>
    </div>
    <div dw-row>
      <div dw-col dwSpan="6">col-6</div>
      <div dw-col dwSpan="6">col-6</div>
      <div dw-col dwSpan="6">col-6</div>
      <div dw-col dwSpan="6">col-6</div>
    </div>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

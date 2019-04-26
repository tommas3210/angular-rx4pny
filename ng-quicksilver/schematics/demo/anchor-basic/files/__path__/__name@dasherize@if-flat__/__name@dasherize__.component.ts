import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-anchor>
      <dw-link dwHref="#components-anchor-demo-basic" dwTitle="Basic demo"></dw-link>
      <dw-link dwHref="#components-anchor-demo-static" dwTitle="Static demo"></dw-link>
      <dw-link dwHref="#API" dwTitle="API">
        <dw-link dwHref="#anchor-props" dwTitle="dw-anchor"></dw-link>
        <dw-link dwHref="#link-props" dwTitle="dw-link"></dw-link>
      </dw-link>
    </dw-anchor>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component { }

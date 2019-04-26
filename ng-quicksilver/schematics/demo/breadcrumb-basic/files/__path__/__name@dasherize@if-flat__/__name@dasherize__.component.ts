import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-breadcrumb>
      <dw-breadcrumb-item>
        Home
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        <a>Application List</a>
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        An Application
      </dw-breadcrumb-item>
    </dw-breadcrumb>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

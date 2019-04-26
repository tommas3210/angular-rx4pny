import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-upload
    dwAction="https://jsonplaceholder.typicode.com/posts/"
    dwDirectory>
    <button dw-button>
      <i class="anticon anticon-upload"></i> Upload Directory
    </button>
  </dw-upload>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}

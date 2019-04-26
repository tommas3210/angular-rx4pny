import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-badge [dwCount]="25"></dw-badge>
    <dw-badge [dwCount]="4" [dwStyle]="{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }"></dw-badge>
    <dw-badge [dwCount]="109" [dwStyle]="{ backgroundColor: '#52c41a' }"></dw-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

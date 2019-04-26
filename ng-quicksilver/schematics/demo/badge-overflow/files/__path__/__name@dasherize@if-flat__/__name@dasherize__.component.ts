import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-badge [dwCount]="99"><a class="head-example"></a></dw-badge>
    <dw-badge [dwCount]="200"><a class="head-example"></a></dw-badge>
    <dw-badge [dwCount]="200" [dwOverflowCount]="10"><a class="head-example"></a></dw-badge>
    <dw-badge [dwCount]="10000" [dwOverflowCount]="999"><a class="head-example"></a></dw-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

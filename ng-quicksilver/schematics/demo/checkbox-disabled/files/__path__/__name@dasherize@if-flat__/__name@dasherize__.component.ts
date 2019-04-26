import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <label dw-checkbox dwDisabled [ngModel]="false"></label>
    <br>
    <label dw-checkbox dwDisabled [ngModel]="true"></label>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="radioValue">
      <label dw-radio dwValue="A">A</label>
      <label dw-radio dwValue="B">B</label>
      <label dw-radio dwValue="C">C</label>
      <label dw-radio dwValue="D">D</label>
    </dw-radio-group>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  radioValue = 'A';
}

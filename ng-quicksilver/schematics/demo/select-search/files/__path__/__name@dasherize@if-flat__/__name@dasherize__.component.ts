import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-select style="width: 200px;" dwShowSearch dwAllowClear dwPlaceHolder="Select a person" [(ngModel)]="selectedValue">
      <dw-option dwLabel="Jack" dwValue="jack"></dw-option>
      <dw-option dwLabel="Lucy" dwValue="lucy"></dw-option>
      <dw-option dwLabel="Tom" dwValue="tom"></dw-option>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  selectedValue;
}

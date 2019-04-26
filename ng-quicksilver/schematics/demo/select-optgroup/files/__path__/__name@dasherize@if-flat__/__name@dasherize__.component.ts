import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-select style="width: 120px;" [(ngModel)]="selectedValue" dwAllowClear dwPlaceHolder="Choose">
      <dw-option-group dwLabel="Manager">
        <dw-option dwValue="jack" dwLabel="Jack"></dw-option>
        <dw-option dwValue="lucy" dwLabel="Lucy"></dw-option>
      </dw-option-group>
      <dw-option-group dwLabel="Engineer">
        <dw-option dwValue="Tom" dwLabel="tom"></dw-option>
      </dw-option-group>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  selectedValue = 'lucy';
}

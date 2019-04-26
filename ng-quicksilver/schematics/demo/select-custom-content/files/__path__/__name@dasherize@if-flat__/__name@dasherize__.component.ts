import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-select style="width: 200px;" dwShowSearch dwAllowClear dwPlaceHolder="Select OS" [(ngModel)]="selectedOS">
      <dw-option dwCustomContent dwLabel="Windows" dwValue="windows"><i class="anticon anticon-windows"></i> Windows</dw-option>
      <dw-option dwCustomContent dwLabel="Mac" dwValue="mac"><i class="anticon anticon-apple"></i> Mac</dw-option>
      <dw-option dwCustomContent dwLabel="Android" dwValue="android"><i class="anticon anticon-android"></i> Android</dw-option>
    </dw-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  selectedOS;
}

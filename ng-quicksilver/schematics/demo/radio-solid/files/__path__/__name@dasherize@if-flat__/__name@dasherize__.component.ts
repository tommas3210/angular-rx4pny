import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <dw-radio-group [(ngModel)]="radioValue" [dwButtonStyle]="'solid'">
        <label dw-radio-button dwValue="A">Hangzhou</label>
        <label dw-radio-button dwValue="B">Shanghai</label>
        <label dw-radio-button dwValue="C">Beijing</label>
        <label dw-radio-button dwValue="D">Chengdu</label>
      </dw-radio-group>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  radioValue = 'A';
}

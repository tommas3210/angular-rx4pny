import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <dw-select style="width: 120px;" [(ngModel)]="selectedValue" dwAllowClear dwPlaceHolder="Choose">
        <dw-option dwValue="jack" dwLabel="Jack"></dw-option>
        <dw-option dwValue="lucy" dwLabel="Lucy"></dw-option>
        <dw-option dwValue="disabled" dwLabel="Disabled" dwDisabled></dw-option>
      </dw-select>
      <dw-select style="width: 120px;" [ngModel]="'lucy'" dwDisabled>
        <dw-option dwValue="lucy" dwLabel="Lucy"></dw-option>
      </dw-select>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-select {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  selectedValue = 'lucy';
}

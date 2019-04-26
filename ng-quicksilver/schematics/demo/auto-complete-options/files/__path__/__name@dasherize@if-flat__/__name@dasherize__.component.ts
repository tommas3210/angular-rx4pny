import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <div class="example-input">
      <input placeholder="input here" dw-input [(ngModel)]="inputValue" (ngModelChange)="onChange($event)" [dwAutocomplete]="auto">
      <dw-autocomplete #auto>
        <dw-auto-option *ngFor="let option of options" [dwValue]="option">{{option}}</dw-auto-option>
      </dw-autocomplete>
    </div>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  options = [];

  onChange(value: string): void {
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
  }
}

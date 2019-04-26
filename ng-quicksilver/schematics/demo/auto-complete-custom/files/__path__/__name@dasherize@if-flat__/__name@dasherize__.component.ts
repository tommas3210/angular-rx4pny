import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <div class="example-input">
      <textarea placeholder="input here" dw-input row="4"  [(ngModel)]="inputValue" (input)="onInput($event.target?.value)" [dwAutocomplete]="auto"></textarea>
      <dw-autocomplete #auto>
        <dw-auto-option *ngFor="let option of options" [dwValue]="option">{{option}}</dw-auto-option>
      </dw-autocomplete>
    </div>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  options = [];

  onInput(value: string): void {
    this.options = value ? [
      value,
      value + value,
      value + value + value,
    ] : [];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="size">
      <label dw-radio-button dwValue="large">large</label>
      <label dw-radio-button dwValue="default">default</label>
      <label dw-radio-button dwValue="small">small</label>
    </dw-radio-group>
    <br /><br />
    <dw-date-picker [dwSize]="size"></dw-date-picker>
    <br />
    <dw-month-picker [dwSize]="size" dwPlaceHolder="Select Month"></dw-month-picker>
    <br />
    <dw-range-picker [dwSize]="size"></dw-range-picker>
    <br />
    <dw-week-picker [dwSize]="size" dwPlaceHolder="Select Week"></dw-week-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  size = 'default';
}

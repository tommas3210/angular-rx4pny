import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-date-picker [dwFormat]="dateFormat"></dw-date-picker>
    <br>
    <dw-month-picker [dwFormat]="monthFormat"></dw-month-picker>
    <br>
    <dw-range-picker [dwFormat]="dateFormat"></dw-range-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
}

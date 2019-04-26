import { Component } from '@angular/core';
import endOfMonth from 'date-fns/end_of_month';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-range-picker
      [dwRanges]="ranges1"
      ngModel
      (ngModelChange)="onChange($event)"
    ></dw-range-picker>
    <br>
    <dw-range-picker
      [dwRanges]="ranges1"
      dwShowTime
      dwFormat="yyyy/MM/dd HH:mm:ss"
      ngModel
      (ngModelChange)="onChange($event)"
    ></dw-range-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  ranges1 = { 'Today': [ new Date(), new Date() ], 'This Month': [ new Date(), endOfMonth(new Date()) ] };
  ranges2 = { 'Today': [ new Date(), new Date() ], 'This Month': [ new Date(), endOfMonth(new Date()) ] };

  onChange(result: Date[]): void {
    console.log('From: ', result[ 0 ], ', to: ', result[ 1 ]);
  }
}

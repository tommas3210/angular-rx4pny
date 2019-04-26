import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-date-picker
      dwShowTime
      dwFormat="yyyy-MM-dd HH:mm:ss"
      dwPlaceHolder="Select Time"
      (ngModelChange)="onChange($event)"
      (dwOnOk)="onOk($event)"
    ></dw-date-picker>
    <br>
    <dw-range-picker
      [dwShowTime]="{ dwFormat: 'HH:mm' }"
      dwFormat="yyyy-MM-dd HH:mm"
      [dwPlaceHolder]="[ 'Start Time', 'End Time' ]"
      (ngModelChange)="onChange($event)"
      (dwOnOk)="onOk($event)"
    ></dw-range-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date): void {
    console.log('onOk', result);
  }
}

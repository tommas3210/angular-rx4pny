import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-date-picker
      [dwDisabledDate]="disabledStartDate"
      dwShowTime
      dwFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="startValue"
      dwPlaceHolder="Start"
      (ngModelChange)="onStartChange($event)"
      (dwOnOpenChange)="handleStartOpenChange($event)">
    </dw-date-picker>
    <dw-date-picker
      [dwDisabledDate]="disabledEndDate"
      dwShowTime
      dwFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="endValue"
      dwPlaceHolder="End"
      [dwOpen]="endOpen"
      (ngModelChange)="onEndChange($event)"
      (dwOnOpenChange)="handleEndOpenChange($event)">
    </dw-date-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`dw-date-picker {
      margin: 0 8px 12px 0;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  startValue: Date = null;
  endValue: Date = null;
  endOpen: boolean = false;

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  };

  onStartChange(date: Date): void {
    this.startValue = date;
  }

  onEndChange(date: Date): void {
    this.endValue = date;
  }

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endOpen = true;
    }
    console.log('handleStartOpenChange', open, this.endOpen);
  }

  handleEndOpenChange(open: boolean): void {
    console.log(open);
    this.endOpen = open;
  }
}

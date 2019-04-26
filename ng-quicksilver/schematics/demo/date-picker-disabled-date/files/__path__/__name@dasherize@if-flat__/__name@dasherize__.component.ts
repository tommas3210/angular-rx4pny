import { Component } from '@angular/core';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import setHours from 'date-fns/set_hours';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-date-picker
      dwFormat="yyyy-MM-dd HH:mm:ss"
      [dwDisabledDate]="disabledDate"
      [dwDisabledTime]="disabledDateTime"
      [dwShowTime]="{ dwDefaultOpenValue: timeDefaultValue }">
    </dw-date-picker>
    <br>
    <dw-month-picker [dwDisabledDate]="disabledDate" dwPlaceHolder="Select month"></dw-month-picker>
    <br>
    <dw-range-picker
      [dwDisabledDate]="disabledDate"
      [dwDisabledTime]="disabledRangeTime"
      [dwShowTime]="{ dwHideDisabledOptions: true, dwDefaultOpenValue: timeDefaultValue }"
      dwFormat="yyyy-MM-dd HH:mm:ss"
    ></dw-range-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  today = new Date();
  timeDefaultValue = setHours(new Date(), 0);

  range(start: number, end: number): number[] {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
  };

  disabledDateTime = (): object => {
    return {
      dwDisabledHours  : () => this.range(0, 24).splice(4, 20),
      dwDisabledMinutes: () => this.range(30, 60),
      dwDisabledSeconds: () => [ 55, 56 ]
    };
  };

  disabledRangeTime = (value: Date[], type: 'start' | 'end'): object => {
    if (type === 'start') {
      return {
        dwDisabledHours  : () => this.range(0, 60).splice(4, 20),
        dwDisabledMinutes: () => this.range(30, 60),
        dwDisabledSeconds: () => [ 55, 56 ]
      };
    }
    return {
      dwDisabledHours  : () => this.range(0, 60).splice(20, 4),
      dwDisabledMinutes: () => this.range(0, 31),
      dwDisabledSeconds: () => [ 55, 56 ]
    };
  };
}

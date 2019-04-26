import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-date-picker [dwDateRender]="tplRender"></dw-date-picker>
    <dw-range-picker [dwDateRender]="tplRender"></dw-range-picker>

    <ng-template #tplRender let-current>
      <div class="ant-calendar-date" [class.border]="current.getDate() === 1">
        {{ current.getDate() }}
      </div>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
    .border{
      border: 1px solid #1890ff;
      border-radius: 50%;
     }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
}

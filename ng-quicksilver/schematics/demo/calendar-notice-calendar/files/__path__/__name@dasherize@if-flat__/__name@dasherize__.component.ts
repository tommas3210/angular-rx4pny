import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-calendar>
      <ul *dwDateCell="let date" class="events">
        <ng-container [ngSwitch]="date.getDate()">
          <ng-container *ngSwitchCase="8">
            <li *ngFor="let item of listDataMap.eight">
              <dw-badge [dwStatus]="item.type" [dwText]="item.content"></dw-badge>
            </li>
          </ng-container>
          <ng-container *ngSwitchCase="10">
            <li *ngFor="let item of listDataMap.ten">
              <dw-badge [dwStatus]="item.type" [dwText]="item.content"></dw-badge>
            </li>
          </ng-container>
          <ng-container *ngSwitchCase="11">
            <li *ngFor="let item of listDataMap.eleven">
              <dw-badge [dwStatus]="item.type" [dwText]="item.content"></dw-badge>
            </li>
          </ng-container>
        </ng-container>
      </ul>
      <ng-container *dwMonthCell="let month">
        <div *ngIf="getMonthData(month) as monthData" class="notes-month">
          <section>{{ monthData }}</section>
          <span>Backlog number</span>
        </div>
      </ng-container>
    </dw-calendar>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .events {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .events .ant-badge-status {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      text-overflow: ellipsis;
      font-size: 12px;
    }

    .notes-month {
      text-align: center;
      font-size: 28px;
    }

    .notes-month section {
      font-size: 28px;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  listDataMap = {
    eight : [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten   : [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
}

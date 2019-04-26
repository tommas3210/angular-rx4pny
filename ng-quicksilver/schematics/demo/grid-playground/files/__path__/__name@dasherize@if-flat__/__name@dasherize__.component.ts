import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-bottom:16px;">
      <span style="margin-right: 6px;">Gutter (px): </span>
      <div style="width: 50%">
        <dw-slider [dwMarks]="marksGutter" [dwStep]="null" [dwDefaultValue]="16" [dwMax]="48" [(ngModel)]="gutter"></dw-slider>
      </div>
      <span style="margin-right: 6px;">Column Count:</span>
      <div style="width: 50%">
        <dw-slider [dwMarks]="marksCount" [dwStep]="null" [dwDefaultValue]="4" [dwMax]="12" [(ngModel)]="count"></dw-slider>
      </div>
    </div>

    <div class="gutter-example">
      <div dw-row [dwGutter]="gutter">
        <div dw-col class="gutter-row" [dwSpan]="24/count" *ngFor="let i of generateArray(count)">
          <div class="grid-config">Column</div>
        </div>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .grid-config {
        background: #00A0E9;
        height: 120px;
        line-height: 120px;
        font-size: 13px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  gutter = 16;
  count = 4;
  marksGutter = {
    8 : 8,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48
  };
  marksCount = {
    2 : 2,
    3 : 3,
    4 : 4,
    6 : 6,
    8 : 8,
    12: 12
  };

  generateArray(value: number): number[] {
    return new Array(value);
  }
}

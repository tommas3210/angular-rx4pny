import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <div>
      <dw-badge [dwCount]="count">
        <a class="head-example"></a>
      </dw-badge>
      <dw-button-group>
        <button dw-button (click)="minCount()"><i class="anticon anticon-minus"></i></button>
        <button dw-button (click)="addCount()"><i class="anticon anticon-plus"></i></button>
      </dw-button-group>
    </div>

    <div style="margin-top: 10px;">
      <dw-badge [dwDot]="dot">
        <a class="head-example"></a>
      </dw-badge>
      <dw-switch [(ngModel)]="dot"></dw-switch>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    .ant-badge:not(.ant-badge-status) {
      margin-right: 20px;
    }

    .head-example {
      width: 42px;
      height: 42px;
      border-radius: 4px;
      background: #eee;
      display: inline-block;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {

  count = 5;
  dot = true;

  addCount(): void {
    this.count++;
  }

  minCount(): void {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
  }
}

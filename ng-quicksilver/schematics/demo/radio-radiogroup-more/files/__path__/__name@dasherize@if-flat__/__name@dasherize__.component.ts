import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-radio-group [(ngModel)]="radioValue">
      <label dw-radio [ngStyle]="style" dwValue="A">Option A</label>
      <label dw-radio [ngStyle]="style" dwValue="B">Option B</label>
      <label dw-radio [ngStyle]="style" dwValue="C">Option C</label>
      <label dw-radio [ngStyle]="style" dwValue="M">
        More...
        <input type="text" dw-input *ngIf="radioValue=='M'" style="width: 100px; margin-left: 10px;">
      </label>
    </dw-radio-group>

  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [dw-radio] {
        display: block;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  radioValue = 'A';
  style = {
    display   : 'block',
    height    : '30px',
    lineHeight: '30px'
  };
}

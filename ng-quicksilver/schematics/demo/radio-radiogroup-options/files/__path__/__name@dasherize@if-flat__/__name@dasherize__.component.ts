import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <dw-radio-group [(ngModel)]="radioValue">
        <label dw-radio [dwValue]="o.value" *ngFor="let o of options">{{o.label}}</label>
      </dw-radio-group>
      <dw-radio-group [(ngModel)]="radioValue">
        <label dw-radio [dwValue]="o.value" *ngFor="let o of options">{{o.label}}</label>
      </dw-radio-group>
      <dw-radio-group [(ngModel)]="radioValue">
        <label dw-radio [dwValue]="o.value" *ngFor="let o of options">{{o.label}}</label>
      </dw-radio-group>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  radioValue = 'Apple';
  options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
}

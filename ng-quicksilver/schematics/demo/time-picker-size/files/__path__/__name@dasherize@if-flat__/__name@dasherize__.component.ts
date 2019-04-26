import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-time-picker [(ngModel)]="time" dwSize="large"></dw-time-picker>
    <dw-time-picker [(ngModel)]="time"></dw-time-picker>
    <dw-time-picker [(ngModel)]="time" dwSize="small"></dw-time-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`dw-time-picker {
      margin: 0 8px 12px 0;
    }`]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  time = new Date();
}

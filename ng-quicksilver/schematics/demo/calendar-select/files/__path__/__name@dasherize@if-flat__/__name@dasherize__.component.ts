import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-alert dwMessage="Your selected date: {{ selectedValue | date:'yyyy-MM-dd' }}"></dw-alert>
    <dw-calendar [(ngModel)]="selectedValue"></dw-calendar>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  selectedValue = new Date('2017-01-25');
}

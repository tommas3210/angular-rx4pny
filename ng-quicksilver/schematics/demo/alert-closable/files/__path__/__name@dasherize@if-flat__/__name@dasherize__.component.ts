import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-alert
      dwType="warning"
      dwCloseable
      dwMessage="Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text"
      (dwOnClose)="afterClose()">
    </dw-alert>
    <dw-alert
      dwType="error"
      dwCloseable
      dwMessage="Error Text"
      dwDescription="Error Description Error Description Error Description Error Description Error Description Error Description"
      (dwOnClose)="afterClose()">
    </dw-alert>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-alert {
        margin-bottom: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  afterClose(): void {
    console.log('close');
  }
}

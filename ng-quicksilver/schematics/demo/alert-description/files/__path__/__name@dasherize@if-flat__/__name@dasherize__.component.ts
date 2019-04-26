import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-alert
      dwType="success"
      dwMessage="Success Text"
      dwDescription="Success Description Success Description Success Description">
    </dw-alert>
    <dw-alert
      dwType="info"
      dwMessage="Info Text"
      dwDescription="Info Description Info Description Info Description Info Description">
    </dw-alert>
    <dw-alert
      dwType="warning"
      dwMessage="Warning Text"
      dwDescription="Warning Description Warning Description Warning Description Warning Description">
    </dw-alert>
    <dw-alert
      dwType="error"
      dwMessage="Error Text"
      dwDescription="Error Description Error Description Error Description Error Description">
    </dw-alert>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-alert {
        margin-bottom: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

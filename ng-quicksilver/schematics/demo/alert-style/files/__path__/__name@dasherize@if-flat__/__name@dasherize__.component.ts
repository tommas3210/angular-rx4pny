import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-alert dwType="success" dwMessage="Success Text"></dw-alert>
    <dw-alert dwType="info" dwMessage="Info Text"></dw-alert>
    <dw-alert dwType="warning" dwMessage="Warning Text"></dw-alert>
    <dw-alert dwType="error" dwMessage="Error Text"></dw-alert>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-alert {
        margin-bottom: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

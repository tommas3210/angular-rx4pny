import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-alert dwType="success" dwMessage="Success Tips" dwShowIcon></dw-alert>
    <dw-alert dwType="info" dwMessage="Informational Notes" dwShowIcon></dw-alert>
    <dw-alert dwType="warning" dwMessage="Warning" dwShowIcon></dw-alert>
    <dw-alert dwType="error" dwMessage="Error" dwShowIcon></dw-alert>
    <dw-alert
      dwType="success"
      dwMessage="Success Tips"
      dwDescription="Detailed description and advices about successful copywriting."
      dwShowIcon>
    </dw-alert>
    <dw-alert
      dwType="info"
      dwMessage="Informational Notes"
      dwDescription="Additional description and informations about copywriting."
      dwShowIcon>
    </dw-alert>
    <dw-alert
      dwType="warning"
      dwMessage="Warning"
      dwDescription="This is a warning notice about copywriting."
      dwShowIcon>
    </dw-alert>
    <dw-alert
      dwType="error"
      dwMessage="Error"
      dwDescription="This is an error message about copywriting."
      dwShowIcon>
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

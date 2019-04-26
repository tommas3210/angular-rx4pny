import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-progress [dwPercent]="75" dwType="circle" [dwWidth]="80"></dw-progress>
    <dw-progress [dwPercent]="70" dwType="circle" [dwWidth]="80" dwStatus="exception"></dw-progress>
    <dw-progress [dwPercent]="100" dwType="circle" [dwWidth]="80"></dw-progress>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-progress {
        margin-right: 8px;
        margin-bottom: 8px;
        display: inline-block;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component { }

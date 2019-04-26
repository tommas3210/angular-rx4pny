import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-badge [dwCount]="5" style="margin-right: 24px;">
    <dw-avatar dwIcon="anticon anticon-user" [dwShape]="'square'"></dw-avatar>
  </dw-badge>
  <dw-badge dwDot>
    <dw-avatar dwIcon="anticon anticon-user" [dwShape]="'square'"></dw-avatar>
  </dw-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component { }

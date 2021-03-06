import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="width: 170px;">
      <dw-progress [dwPercent]="30" dwSize="small"></dw-progress>
      <dw-progress [dwPercent]="50" dwSize="small" dwStatus="active"></dw-progress>
      <dw-progress [dwPercent]="70" dwSize="small" dwStatus="exception"></dw-progress>
      <dw-progress [dwPercent]="100" dwSize="small"></dw-progress>
      <dw-progress [dwPercent]="50" dwSize="small" [dwShowInfo]="false"></dw-progress>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

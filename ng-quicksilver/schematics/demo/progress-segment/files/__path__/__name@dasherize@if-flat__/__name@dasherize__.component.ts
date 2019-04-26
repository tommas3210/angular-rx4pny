import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tooltip dwTitle="3 done / 3 in progress / 4 to do">
      <dw-progress dw-tooltip [dwPercent]="60" [dwSuccessPercent]="30"></dw-progress>
    </dw-tooltip>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component { }

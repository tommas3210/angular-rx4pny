import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `<dw-input-number [(ngModel)]="demoValue" [dwMin]="1" [dwMax]="10" [dwStep]="0.1" [dwPlaceHolder]="'Digital'"></dw-input-number>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  demoValue: number;
}

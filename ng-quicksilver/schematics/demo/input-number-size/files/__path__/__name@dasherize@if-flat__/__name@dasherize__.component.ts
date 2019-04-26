import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-input-number [(ngModel)]="demoValue" [dwSize]="'large'" [dwMin]="1" [dwMax]="10" [dwStep]="1"></dw-input-number>
    <dw-input-number [(ngModel)]="demoValue" [dwMin]="1" [dwMax]="10" [dwStep]="1"></dw-input-number>
    <dw-input-number [(ngModel)]="demoValue" [dwSize]="'small'" [dwMin]="1" [dwMax]="10" [dwStep]="1"></dw-input-number>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-input-number {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  demoValue = 3;
}

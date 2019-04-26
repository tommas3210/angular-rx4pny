import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-input-number [(ngModel)]="demoValue" [dwMin]="1" [dwMax]="100" [dwStep]="1" [dwFormatter]="formatterDollar" [dwParser]="parserDollar"></dw-input-number>
    <dw-input-number [(ngModel)]="demoValue" [dwMin]="1" [dwMax]="100" [dwStep]="1" [dwFormatter]="formatterPercent" [dwParser]="parserPercent"></dw-input-number>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      dw-input-number {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
  demoValue = 100;
  formatterPercent = value => `${value} %`;
  parserPercent = value => value.replace(' %', '');
  formatterDollar = value => `$ ${value}`;
  parserDollar = value => value.replace('$ ', '');
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-date-picker [dwRenderExtraFooter]="footerRender"></dw-date-picker>
    <dw-date-picker [dwRenderExtraFooter]="plainFooter" dwShowTime></dw-date-picker>
    <dw-range-picker [dwRenderExtraFooter]="footerRender"></dw-range-picker>
    <dw-range-picker [dwRenderExtraFooter]="plainFooter" dwShowTime></dw-range-picker>
    <dw-month-picker [dwRenderExtraFooter]="footerRender" dwPlaceHolder="Select month"></dw-month-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
    dw-date-picker, dw-month-picker, dw-range-picker, dw-week-picker {
      margin: 0 8px 12px 0;
    }
  `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})

export class <%= classify(name) %>Component {
  plainFooter = 'plain extra footer';
  footerRender = () => 'extra footer';
}

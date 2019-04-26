import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
  <dw-mention
    [dwSuggestions]="suggestions">
    <input
      style="margin-bottom: 10px"
      placeholder="this is disabled Mention"
      dwMentionTrigger
      dw-input
      disabled
      [(ngModel)]="inputValue">
    <input
      placeholder="this is readOnly Mention"
      dwMentionTrigger
      dw-input
      readOnly
      [(ngModel)]="inputValue">
  </dw-mention>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
}

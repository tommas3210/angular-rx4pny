import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
  <dw-mention
    [dwSuggestions]="suggestions">
     <textarea
        dw-input
        [dwAutosize]="{minRows: 4, maxRows: 4}"
        [(ngModel)]="inputValue"
        dwMentionTrigger>
      </textarea>
  </dw-mention>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

}

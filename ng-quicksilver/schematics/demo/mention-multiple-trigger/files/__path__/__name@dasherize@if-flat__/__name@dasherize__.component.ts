import { Component, ViewEncapsulation } from '@angular/core';
import { MentionOnSearchTypes } from 'ng-quicksilver';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
  <dw-mention
    [dwSuggestions]="suggestions"
    (dwOnSearchChange)="onSearchChange($event)"
    [dwPrefix]="['#', '@']">
    <input
      placeholder="input @ to mention people, # to mention tag"
      dwMentionTrigger
      dw-input
      [(ngModel)]="inputValue">
  </dw-mention>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  suggestions = [];
  users = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  tags = ['1.0', '2.0', '3.0'];

  onSearchChange({value, prefix}: MentionOnSearchTypes): void {
    console.log('dwOnSearchChange', value, prefix);
    this.suggestions = prefix === '@' ? this.users : this.tags;
  }

}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
  <dw-mention
    [dwSuggestions]="webFrameworks"
    [dwValueWith]="valueWith"
    (dwOnSelect)="onSelect($event)">
    <input
      placeholder="@someone"
      dw-input
      dwMentionTrigger
      [(ngModel)]="inputValue"
    >
    <ng-container *dwMentionSuggestion="let framework">
        <span>{{ framework.name }} - {{ framework.type }}</span>
    </ng-container>
  </dw-mention>
`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript' },
    { name: 'Angular', type: 'JavaScript' },
    { name: 'Laravel', type: 'PHP' },
    { name: 'Flask', type: 'Python' },
    { name: 'Django', type: 'Python' }
  ];

  valueWith = data => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-tag dwMode="checkable" [dwChecked]="true" (dwCheckedChange)="checkChange($event)">Tag1</dw-tag>
    <dw-tag dwMode="checkable" [dwChecked]="true" (dwCheckedChange)="checkChange($event)">Tag2</dw-tag>
    <dw-tag dwMode="checkable" [dwChecked]="true" (dwCheckedChange)="checkChange($event)">Tag3</dw-tag>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  checkChange(e: boolean): void {
    console.log(e);
  }
}

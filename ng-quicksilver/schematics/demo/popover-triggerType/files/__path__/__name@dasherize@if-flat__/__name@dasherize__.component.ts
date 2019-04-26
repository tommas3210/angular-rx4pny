import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ng-template #contentTemplate>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </ng-template>
    <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwTrigger="click">Click me</button>
    <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwTrigger="hover">Hover me</button>
    <button dw-button dw-popover dwTitle="Title" [dwContent]="contentTemplate" dwTrigger="focus">Focus me</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      button {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

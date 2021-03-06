import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <a dw-tooltip [dwTitle]="titleTemplate">This Tooltip Have Icon</a>
    <ng-template #titleTemplate>
      <i class="anticon anticon-file" style="margin-right: 8px"></i> <span>Tooltip With Icon</span>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

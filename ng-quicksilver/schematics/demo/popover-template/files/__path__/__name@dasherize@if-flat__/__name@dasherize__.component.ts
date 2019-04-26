import {
  Component
} from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button
      dw-button
      dw-popover
      [dwTitle]="titleTemplate"
      [dwContent]="contentTemplate">
      Render Template
    </button>
    <ng-template #titleTemplate><i class="anticon anticon-cross"></i> Title</ng-template>
    <ng-template #contentTemplate><i class="anticon anticon-check"></i> Content</ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-steps>
      <dw-step dwTitle="Login" dwStatus="finish" dwIcon="anticon anticon-user"></dw-step>
      <dw-step dwTitle="Verification" dwStatus="finish" dwIcon="anticon anticon-solution"></dw-step>
      <dw-step dwTitle="Pay" dwStatus="process" dwIcon="anticon anticon-spin anticon-loading"></dw-step>
      <dw-step dwTitle="Done" dwStatus="wait" [dwIcon]="iconTemplate"></dw-step>
      <ng-template #iconTemplate><i class="anticon anticon-smile-o"></i></ng-template>
    </dw-steps>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

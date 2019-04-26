import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-affix>
    <button dw-button [dwType]="'primary'">
      <span>Affix top</span>
    </button>
  </dw-affix>
  <br>
  <dw-affix dwOffsetBottom="0">
    <button dw-button [dwType]="'primary'">
      <span>Affix bottom</span>
    </button>
  </dw-affix>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
}

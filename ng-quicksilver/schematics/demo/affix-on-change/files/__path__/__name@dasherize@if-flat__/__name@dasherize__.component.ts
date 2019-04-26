import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
  <dw-affix [dwOffsetTop]="120" (dwChange)="onChange($event)">
    <button dw-button>
        <span>120px to affix top</span>
    </button>
  </dw-affix>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  onChange(status: boolean) {
    console.log(status);
  }
}

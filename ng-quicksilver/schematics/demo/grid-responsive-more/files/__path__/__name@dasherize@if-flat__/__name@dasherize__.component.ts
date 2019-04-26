import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div dw-row>
      <div dw-col [dwXs]="{ span: 5, offset: 1 }" [dwLg]="{ span: 6, offset: 2 }">
        Col
      </div>
      <div dw-col [dwXs]="{ span: 11, offset: 1 }" [dwLg]="{ span: 6, offset: 2 }">
        Col
      </div>
      <div dw-col [dwXs]="{ span: 5, offset: 1 }" [dwLg]="{ span: 6, offset: 2 }">
        Col
      </div>
    </div>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

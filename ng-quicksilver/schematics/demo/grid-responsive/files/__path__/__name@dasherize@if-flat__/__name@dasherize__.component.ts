import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div dw-row>
      <div dw-col dwXs="2" dwSm="4" dwMd="6" dwLg="8" dwXl="10">
        Col
      </div>
      <div dw-col dwXs="20" dwSm="16" dwMd="12" dwLg="8" dwXl="4">
        Col
      </div>
      <div dw-col dwXs="2" dwSm="4" dwMd="6" dwLg="8" dwXl="10">
        Col
      </div>
    </div>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

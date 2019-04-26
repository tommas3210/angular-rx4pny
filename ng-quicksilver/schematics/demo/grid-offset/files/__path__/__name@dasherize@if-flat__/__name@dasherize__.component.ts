import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div dw-row>
      <div dw-col dwSpan="8">
        col-8
      </div>
      <div dw-col dwSpan="8" dwOffset="8">
        col-8
      </div>
    </div>
    <div dw-row>
      <div dw-col dwSpan="6" dwOffset="6">
        col-6 col-offset-6
      </div>
      <div dw-col dwSpan="6" dwOffset="6">
        col-6 col-offset-6
      </div>
    </div>
    <div dw-row>
      <div dw-col dwSpan="12" dwOffset="6">
        col-12 col-offset-6
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

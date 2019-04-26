import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-breadcrumb>
      <dw-breadcrumb-item>
        <a [routerLink]="['../../']">Home</a>
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        Breadcrumb
      </dw-breadcrumb-item>
    </dw-breadcrumb>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

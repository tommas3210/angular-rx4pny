import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <dw-breadcrumb>
      <dw-breadcrumb-item>
        <i class="anticon anticon-home"></i>
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        <a><i class="anticon anticon-user"></i><span>Application List</span></a>
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        Application
      </dw-breadcrumb-item>
    </dw-breadcrumb>`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component { }

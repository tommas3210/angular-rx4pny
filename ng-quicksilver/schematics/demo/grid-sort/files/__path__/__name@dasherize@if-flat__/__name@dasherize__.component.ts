import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div dw-row>
      <div dw-col [dwSpan]="18" [dwPush]="6">
        col-18 col-push-6
      </div>
      <div dw-col [dwSpan]="6" [dwPull]="18">
        col-6 col-pull-18
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  styles  : []
})
export class <%= classify(name) %>Component {
}

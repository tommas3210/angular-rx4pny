import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <h4>String</h4>
    <dw-breadcrumb dwSeparator=">">
      <dw-breadcrumb-item>
        Home
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        <a>Application List</a>
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        An Application
      </dw-breadcrumb-item>
    </dw-breadcrumb>
    <br>
    <h4>TemplateRef</h4>
    <dw-breadcrumb [dwSeparator]="iconTemplate">
      <dw-breadcrumb-item>
        Home
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        <a>Application List</a>
      </dw-breadcrumb-item>
      <dw-breadcrumb-item>
        An Application
      </dw-breadcrumb-item>
    </dw-breadcrumb>
    <ng-template #iconTemplate><i class="anticon anticon-arrow-right"></i></ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      h4:first-child {
        margin-top: 0;
      }

      h4 {
        margin: 16px 0;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}

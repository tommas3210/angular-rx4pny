import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="example-input">
      <input dw-input placeholder="large size" dwSize="large">
      <input dw-input placeholder="default size" dwSize="default">
      <input dw-input placeholder="small size" dwSize="small">
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .example-input .ant-input {
        width: 200px;
        margin: 0 8px 8px 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %>
})
export class <%= classify(name) %>Component {
}
